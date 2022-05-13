function postfix2(postfix, ...input) {
    let ASC = 65;
    const transformer = {};
    const stack = [];
    const operatoers = ['-', '+', '/', '*'];
    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    // transformer
    input.map((_, index) => (transformer[String.fromCharCode(ASC++)] = input[index]));
    const array = postfix
        .split('')
        .map((value) => (operatoers.includes(value) ? value : transformer[value]));

    // calculator
    array.map((value, index) => {
        if (operatoers.includes(value)) {
            const secondValue = stack.pop();
            const firstValue = stack.pop();
            stack.push(calculator[value](firstValue, secondValue));
        } else {
            stack.push(Number(value));
        }
    });

    console.log(stack[0].toFixed(2));
}

postfix2('ABC*+DE/-', '1', '2', '3', '4', '5');
