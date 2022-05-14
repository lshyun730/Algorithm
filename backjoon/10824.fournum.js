function fournum(input) {
    const array = input.split(' ');
    const answer = Number(array[0] + array[1]) + Number(array[2] + array[3]);
    console.log(answer);
}

fournum('10 20 30 40');
