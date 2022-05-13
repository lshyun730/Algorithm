function bong(value) {
    const input = value.split('');
    const stack = [];
    let answer = 0;

    input.map((word, i) => {
        if (word === '(') {
            stack.push(word);
            return;
        }

        if (input[i - 1] === '(') {
            stack.pop();
            answer += stack.length;
        } else {
            stack.pop();
            answer++;
        }
    });

    console.log(answer);
}

bong('()(((()())(())()))(())');
