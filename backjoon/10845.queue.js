class Queue {
    constructor() {
        this.queue = [];
    }

    push(x) {
        this.queue.push(x);
    }

    pop() {
        const pop = this.queue.length > 0 ? this.queue.shift() : -1;
        console.log(pop);
    }

    size() {
        console.log(this.queue.length);
    }

    empty() {
        const empty = this.queue.length === 0 ? 1 : 0;
        console.log(empty);
    }

    front() {
        const front = this.queue.find((value) => typeof value == 'number');
        console.log(front);
    }

    back() {
        const back = this.queue.filter((value) => typeof value == 'number');
        console.log(back[back.length - 1]);
    }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.front();
queue.back();
queue.size();
queue.empty();
queue.pop();
queue.pop();
queue.pop();
queue.size();
queue.empty();
queue.pop();
queue.push(3);
queue.empty();
queue.front();
