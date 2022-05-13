function braket(value) {
    const braket = value.split('');
    const stack = [];
    let result = 'YES';

    for (let value of braket) {
        if (value === '(') {
            stack.push(value);
        } else if (value === ')') {
            const pop = stack.pop(value);
            if (!pop) {
                result = 'NO';
                break;
            }
        }
    }

    if (stack.length !== 0) {
        result = 'NO';
    }

    console.log(result);
}

braket('(())())');
braket('(()())((()))');
