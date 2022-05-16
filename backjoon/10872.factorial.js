function factorial(input) {
    let answer = 1;
    for (let i = 1; i <= input; i++) answer *= i;

    console.log(answer);
}
factorial(10);
factorial(0);
