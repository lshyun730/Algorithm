function factorial(input) {
    let factorial = 1;
    for (let i = 1; i <= input; i++) factorial *= i;

    const array = String(factorial).split('').reverse();
    answer = 0;

    for (value of array) {
        if (value === '0') answer += 1;
        if (value > 0) break;
    }
    console.log(answer);
}

factorial(20);
factorial(10);
factorial(3);
