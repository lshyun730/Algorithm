// https://www.acmicpc.net/problem/6588

function goldbach(input) {
    let answer = [];
    if (input % 2 !== 0 || input < 4) return;
    for (let i = 3; i < input; i++) {
        const last = input - i;
        if (decimal(i) && decimal(last)) {
            answer.push(`${input} = ${i} + ${last}`);
            break;
        }
    }

    answer.length > 0
        ? console.log(answer.join('\n'))
        : console.log('Goldbachs conjecture is wrong.');
}

function decimal(value) {
    if (value === 1) return;
    for (let i = 2; i < value; i++) if (value % i === 0) return false;
    return true;
}

goldbach(8);
goldbach(20);
goldbach(42);
goldbach(0);
