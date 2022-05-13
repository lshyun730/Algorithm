function word(word) {
    if (word === 'L') {
        editer.cursorLeft();
    } else if (word === 'D') {
        editer.cursorRight();
    } else if (word === 'B') {
        editer.delete();
    } else if (word.split(' ')[0] === 'P') {
        editer.add(word.split(' ')[1]);
    }
}

class Editer {
    constructor(text) {
        this.text = text.split('');
        this.cursor = text.length;

        console.log(this.text);
    }

    cursorLeft() {
        if (this.cursor === 0) return;
        this.cursor -= 1;
    }

    cursorRight() {
        if (this.cursor === this.text.length) return;
        this.cursor += 1;
    }

    delete() {
        if (this.cursor === 0) return;
        this.text.splice(this.cursor - 1, 1);
        this.cursorLeft();
        console.log(this.text.join(''));
    }

    add(value) {
        this.text.splice(this.cursor, 0, value);
        console.log(this.text.join(''));
    }
}

const editer = new Editer('abcd');
word('L');
word('L');
word('L');
word('L');
word('L');
word('L');
word('P x');
word('L');
word('B');
word('P y');
