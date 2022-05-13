function obig(input) {
    const array = input.split(' ');
    const answer = [];
    array.map((number, index) => {
        answer[index] = -1;
        for (let i = index; i < array.length; i++) {
            if (number < array[i + 1]) {
                answer[index] = Number(array[i + 1]);
                break;
            }
        }
    });

    console.log(answer);
}

obig('9 5 4 8');
obig('3 5 2 7');
