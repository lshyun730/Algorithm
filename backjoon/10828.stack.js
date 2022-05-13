// 10828번

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        const value = this.stack.pop();
        console.log(value ? value : -1);
    }

    size() {
        console.log(this.stack.length);
    }

    empty() {
        const empty = this.stack.length === 0 ? 1 : 0;
        console.log(empty);
    }

    top() {
        const last = this.stack[this.stack.length - 1];
        console.log(last ? last : -1);
    }
}

const stack = new Stack();

stack.pop();
stack.top();
stack.push(123);
stack.top();
stack.pop();
stack.top();
stack.pop();
stack.empty();
