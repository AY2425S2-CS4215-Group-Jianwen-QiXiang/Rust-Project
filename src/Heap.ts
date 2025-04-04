import {equalNumberArrays} from "antlr4ng";

type Pointer = {
    env_address: number
    frame_index: number
    value_index: number
};

function is_Pointer_Type(x) {
    return (typeof x === "object") && (x.hasOwnProperty("env_address") && (x.hasOwnProperty("frame_index") && (x.hasOwnProperty("value_index"))));
}

export class Heap {
    word_size = 8
    mega = 2 ** 20
    data : ArrayBuffer
    view : DataView
    free : number
    size_offset = 5

    False_tag          = 0
    True_tag           = 1
    Number_tag         = 2
    Null_tag           = 3
    Unassigned_tag     = 4
    Undefined_tag      = 5
    Blockframe_tag     = 6
    Callframe_tag      = 7
    Closure_tag        = 8
    Frame_tag          = 9
    Environment_tag    = 10
    Pointer_tag        = 11

    False : number
    True : number
    Null : number
    Unassigned: number
    Undefined : number

    // Heap Constructor
    constructor(size: number) {
        if (size % this.word_size !== 0) {
            throw new Error("heap bytes must be divisible by 8")
        }
        this.data = new ArrayBuffer(size)
        this.view = new DataView(this.data)
        this.free = 0


        this.False = this.heap_allocate(this.False_tag, 1)
        this.True = this.heap_allocate(this.True_tag, 1)
        this.Null = this.heap_allocate(this.Null_tag, 1)
        this.Unassigned = this.heap_allocate(this.Unassigned_tag, 1)
        this.Undefined = this.heap_allocate(this.Undefined_tag, 1)
    }

    // Basic Heap operations

    heap_allocate(tag: number, size: number) : number {
        const address = this.free
        this.free += size
        this.view.setUint8(address * this.word_size, tag)
        this.view.setUint16(address * this.word_size + this.size_offset, size)
        return address

    }

    heap_get(address: number): number {
        return this.view.getFloat64(address * this.word_size)
    }

    heap_set(address: number, value : any): void {
        this.view.setFloat64(address * this.word_size, value)
    }

    heap_get_child(address: number, child_index: number): number {
        return this.heap_get(address + 1 + child_index)
    }

    heap_set_child(address: number, child_index: number, value): void {
        return this.heap_set(address + 1 + child_index, value)
    }

    heap_get_tag(address: number): number {
        return this.view.getUint8(address * this.word_size)
    }

    heap_get_size(address: number): number {
        return this.view.getUint16(address * this.word_size + this.size_offset)
    }

    heap_get_number_of_children(address: number): number {
        return this.heap_get_tag(address) === this.Number_tag ? 0 : this.heap_get_size(address) - 1
    }

    heap_set_byte_at_offset(address: number, offset : number, value : any): void {
        return this.view.setUint8(address * this.word_size + offset, value)
    }

    heap_get_byte_at_offset(address: number, offset : number): number {
        return this.view.getUint8(address * this.word_size + offset)
    }

    heap_set_2_bytes_at_offset(address: number, offset : number, value : any): void {
        return this.view.setUint16(address * this.word_size + offset, value)
    }

    heap_get_2_bytes_at_offset(address: number, offset : number): number {
        return this.view.getUint16(address * this.word_size + offset)
    }

    // Check the Type of element in heap of predefined values
    is_False =
        (address : number) => this.heap_get_tag(address) === this.False_tag
    is_True =
        (address : number) => this.heap_get_tag(address) === this.True_tag
    is_Boolean =
        (address : number) => this.is_True(address) || this.is_False(address)
    is_Null =
        (address : number) => this.heap_get_tag(address) === this.Null_tag
    is_Unassigned =
        (address : number) => this.heap_get_tag(address) === this.Unassigned_tag
    is_Undefined =
        (address : number) => this.heap_get_tag(address) === this.Undefined_tag

    // Heap functions related to closures

    heap_allocate_Closure = (arity, pc, env) => {
        const address = this.heap_allocate(this.Closure_tag, 2)
        this.heap_set_byte_at_offset(address, 1, arity)
        this.heap_set_2_bytes_at_offset(address, 2, pc)
        this.heap_set(address + 1, env)
        return address
    }

    heap_get_Closure_arity = address =>
        this.heap_get_byte_at_offset(address, 1)

    heap_get_Closure_pc = address =>
        this.heap_get_2_bytes_at_offset(address, 2)

    heap_get_Closure_environment = address =>
        this.heap_get_child(address, 0)

    is_Closure = address =>
        this.heap_get_tag(address) === this.Closure_tag

    //Block Frame related functions
    heap_allocate_Blockframe = (env) => {
        const address = this.heap_allocate(this.Blockframe_tag, 2)
        this.heap_set(address + 1, env)
        return address
    }

    heap_get_Blockframe_environment = address =>
        this.heap_get_child(address, 0)

    is_Blockframe = address =>
        this.heap_get_tag(address) === this.Blockframe_tag

    //Call Frame related functions

    heap_allocate_Callframe = (env, pc) => {
        const address = this.heap_allocate(this.Callframe_tag, 2)
        this.heap_set_2_bytes_at_offset(address, 2, pc)
        this.heap_set(address + 1, env)
        return address
    }

    heap_get_Callframe_environment = address =>
        this.heap_get_child(address, 0)

    heap_get_Callframe_pc = address =>
        this.heap_get_2_bytes_at_offset(address, 2)

    is_Callframe = address =>
        this.heap_get_tag(address) === this.Callframe_tag

    //Environment Frame related functions

    heap_allocate_Frame = number_of_values =>
        this.heap_allocate(this.Frame_tag, number_of_values + 1)

    //Environment related functions

    heap_allocate_Environment = number_of_frames =>
        this.heap_allocate(this.Environment_tag, number_of_frames + 1)

    heap_get_Environment_value =
        (env_address, position) => {
            const [frame_index, value_index] = position
            const frame_address =
                this.heap_get_child(env_address, frame_index)
            return this.heap_get_child(
                frame_address, value_index)
        }

    heap_set_Environment_value =
        (env_address, position, value) => {
            //display(env_address, "env_address:")
            const [frame_index, value_index] = position
            const frame_address =
                this.heap_get_child(env_address, frame_index)
            this.heap_set_child(
                frame_address, value_index, value)
        }

    heap_Environment_extend =
        (frame_address, env_address) => {
            const old_size =
                this.heap_get_size(env_address)
            const new_env_address =
                this.heap_allocate_Environment(old_size)
            let i
            for (i = 0; i < old_size - 1; i++) {
                this.heap_set_child(
                    new_env_address, i,
                    this.heap_get_child(env_address, i))
            }
            this.heap_set_child(new_env_address, i, frame_address)
            return new_env_address
        }

    // Number related functions

    heap_allocate_Number = n => {
        const number_address = this.heap_allocate(this.Number_tag, 2)
        this.heap_set(number_address + 1, n)
        return number_address
    }

    is_Number = address =>
        this.heap_get_tag(address) === this.Number_tag

    // Pointer related functions
    // Pointer is basically 3 numbers, environment address, frame index and value index.

    heap_allocate_Pointer = n => {
        const pointer_address = this.heap_allocate(this.Pointer_tag, 4)
        this.heap_set_child(pointer_address, 0, n.env_address)
        this.heap_set_child(pointer_address, 1, n.frame_index)
        this.heap_set_child(pointer_address, 2, n.value_index)
        return pointer_address
    }

    is_Pointer = address =>
        this.heap_get_tag(address) === this.Pointer_tag

    dereference_Pointer =
            n => this.heap_get_Environment_value(n.env_address, [n.frame_index, n.value_index])

    address_to_JS_value = x =>
        this.is_Boolean(x)
            ? (this.is_True(x) ? true : false)
            : this.is_Number(x)
                ? this.heap_get(x + 1)
                : this.is_Undefined(x)
                    ? undefined
                    : this.is_Unassigned(x)
                        ? "<unassigned>"
                        : this.is_Null(x)
                            ? null
                            : this.is_Closure(x)
                                ? "<closure>"
                                : this.is_Pointer(x)
                                    ? this.heap_get(x + 1)
                                    : "unknown word tag: " + this.heap_get_tag(x)


    JS_value_to_address = x => {
        return (typeof x === "boolean")
            ? (x ? this.True : this.False)
            : (typeof x === "number")
                ? this.heap_allocate_Number(x)
                : (x === undefined)
                    ? this.Undefined
                    : (x === null)
                        ? this.Null
                        : (is_Pointer_Type(x))
                            ? this.heap_allocate_Pointer(x.address)
                            : "unknown type: " + (typeof x)
    }

}