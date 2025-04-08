import {Heap} from "./Heap";

type Pointer = {
    env_address: number
    frame_index: number
    value_index: number
};

export class RustedMachine {
    instructions: any[];
    PC : number;
    OS : number[];
    RTS : number[];
    HEAP : Heap
    E : number;

    constructor(instructions: any[]) {
        this.instructions = instructions;
        this.PC = 0
        this.OS = []
        this.RTS = []
        this.HEAP = new Heap(1000000)
        this.E  = this.HEAP.heap_allocate_Environment(0)
    }

    push = (array, ...items) => {
        // fixed by Liew Zhao Wei, see Discussion 5
        for (let item of items) {
            array.push(item)
        }
        return array
    }
    unop_microcode = {
        '-unary': x => - x,
        '!'     : x => ! x
    }


    binop_microcode = {
        '+': (x, y)      => x + y,
        '*':   (x, y) => x * y,
        '-':   (x, y) => x - y,
        '/':   (x, y) => x / y,
        '%':   (x, y) => x % y,
        '<':   (x, y) => x < y,
        '<=':  (x, y) => x <= y,
        '>=':  (x, y) => x >= y,
        '>':   (x, y) => x > y,
        '==': (x, y) => x === y,
        '!=': (x, y) => x !== y,
        '&&' : (x, y) => x && y,
        '||' : (x, y) => x || y
    }

    apply_unop = (op, v) =>
        this.HEAP.JS_value_to_address(this.unop_microcode[op]
        (this.HEAP.address_to_JS_value(v)))

    apply_binop = (op, v2, v1) =>
        this.HEAP.JS_value_to_address(this.binop_microcode[op]
        (this.HEAP.address_to_JS_value(v1),
            this.HEAP.address_to_JS_value(v2)))

    peek = (array, address) =>
        array.slice(-1 - address)[0]

    microcode = {
        LDC:
            instr => {
                this.push(this.OS, this.HEAP.JS_value_to_address(instr.value))
            },
        UNOP:
            instr =>
                this.push(this.OS, this.apply_unop(instr.op, this.OS.pop())),
        BINOP:
            instr =>
                this.push(this.OS,
                    this.apply_binop(instr.op, this.OS.pop(), this.OS.pop()))
            ,
        POP:
            instr =>
                this.OS.pop(),
        JOF:
            instr =>
                this.PC = this.HEAP.is_True(this.OS.pop()) ? this.PC : instr.address,
        GOTO:
            instr =>
                this.PC = instr.address,
        ENTER_SCOPE:
            instr => {
                this.push(this.RTS, this.HEAP.heap_allocate_Blockframe(this.E))
                const frame_address = this.HEAP.heap_allocate_Frame(instr.size)
                this.E = this.HEAP.heap_Environment_extend(frame_address, this.E)
                for (let i = 0; i < instr.num; i++) {
                    this.HEAP.heap_set_child(frame_address, i, this.HEAP.Unassigned)
                }
            },
        EXIT_SCOPE:
            instr =>
                this.E = this.HEAP.heap_get_Blockframe_environment(this.RTS.pop()),
        LD:
            instr => {
                const val = this.HEAP.heap_get_Environment_value(this.E, instr.pos)
                if (this.HEAP.is_Unassigned(val))
                    throw new Error(`access of unassigned variable ${instr.name}`)
                this.push(this.OS, val)
            },

        LDP: instr => {
            const frame_index = instr.pos[0]
            const value_index = instr.pos[1]
            this.push(this.OS, this.HEAP.JS_value_to_address({env_address: this.E,
            frame_index: frame_index, value_index: value_index}))
        },
        DEREF: instr => {
            const pop_result = this.OS.pop()
            const pointer: any = this.HEAP.address_to_JS_value(pop_result)
            const val = this.HEAP.heap_get_Environment_value(pointer.env_address,
                [pointer.frame_index, pointer.value_index])
            this.push(this.OS, val)
        },
        ASSIGN:
            instr =>
                this.HEAP.heap_set_Environment_value(this.E, instr.pos, this.peek(this.OS,0)),
        PTRASSIGN: instr => {
            const ptr: any = this.HEAP.address_to_JS_value(this.OS.pop())
            const val = this.peek(this.OS, 0)
            this.HEAP.heap_set_Environment_value(ptr.env_address, [ptr.frame_index, ptr.value_index],val)

        },
        LDF:
            instr => {
                const closure_address =
                    this.HEAP.heap_allocate_Closure(
                        instr.arity, instr.addr, this.E)
                this.push(this.OS, closure_address)
            },
        CALL:
            instr => {
                const arity = instr.arity
                const fun = this.peek(this.OS, arity)
                const frame_address = this.HEAP.heap_allocate_Frame(arity)
                for (let i = arity - 1; i >= 0; i--) {
                    this.HEAP.heap_set_child(frame_address, i, this.OS.pop())
                }
                this.OS.pop() // pop fun
                this.push(this.RTS, this.HEAP.heap_allocate_Callframe(this.E, this.PC))
                this.E = this.HEAP.heap_Environment_extend(
                    frame_address,
                    this.HEAP.heap_get_Closure_environment(fun))
                this.PC = this.HEAP.heap_get_Closure_pc(fun)
            },
        RESET :
            instr => {
                this.PC--;
                // keep popping...
                const top_frame = this.RTS.pop()
                if (this.HEAP.is_Callframe(top_frame)) {
                    // ...until top frame is a call frame
                    this.PC = this.HEAP.heap_get_Callframe_pc(top_frame)
                    this.E = this.HEAP.heap_get_Callframe_environment(top_frame)
                }
            }
    }



    run() {

        while (! (this.instructions[this.PC].tag === 'DONE')) {
            const instr = this.instructions[this.PC++]
            this.microcode[instr.tag](instr)
        }

        return this.HEAP.address_to_JS_value(this.peek(this.OS, 0))
    }
}