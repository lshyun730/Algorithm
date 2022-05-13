class Deque {
    constructor() {
        this.deque = [];
    }

    push_front(value) {
        this.deque.unshift(value);
    }

    push_back(value) {
        this.deque.push(value);
    }

    pop_front() {
        const pop = this.deque.length > 0 ? this.deque.shift() : -1;
        console.log(pop);
    }

    pop_back() {
        const pop = this.deque.length > 0 ? this.deque.pop() : -1;
        console.log(pop);
    }

    size() {
        console.log(this.deque.length);
    }

    empty() {
        const empty = this.deque.length === 0 ? 1 : 0;
        console.log(empty);
    }

    front() {
        const front = this.deque.length > 0 ? this.deque[0] : -1;
        console.log(front);
    }
    back() {
        const back = this.deque.length > 0 ? this.deque[this.deque.length - 1] : -1;
        console.log(back);
    }
}

const deque = new Deque();

deque.push_back(1);
deque.push_front(2);
deque.front();
deque.back();
deque.size();
deque.empty();
deque.pop_front();
deque.pop_back();
deque.pop_front();
deque.size();
deque.empty();
deque.pop_back();
deque.push_front(3);
deque.empty();
deque.front();
