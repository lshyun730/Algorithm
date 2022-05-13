// error!!!!!!!!!!!!!!!!

function postfix(input) {
    const array = input.split('');
    const stack = [];
    let answer = '';

    array.map((value, index) => {
        if (value === '(') {
            stack.push(value);
        } else if (value === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') answer += stack.pop();
            stack.pop();
        } else if (value === '*' || value === '/') {
            while (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/') {
                answer += stack.pop();
            }
        } else if (value === '+' || value === '-') {
            while (stack.length && stack[stack.length - 1] !== '(') answer += stack.pop();
            stack.push(value);
        } else {
            answer += value;
        }
    });
    while (stack.length) answer += stack.pop();
    console.log(answer);
}

postfix('A+B*C-D/E');
postfix('A*(B+C)');
