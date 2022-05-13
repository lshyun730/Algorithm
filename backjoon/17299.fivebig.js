function fivebig(input) {
    const array = input.split(' ');
    const count = [];
    const answer = [];

    array.map((number) => count.push(array.filter((value) => number === value).length));
    count.map((cnt, index) => {
        answer[index] = -1;
        for (let i = index; i < array.length - 1; i++) {
            if (cnt < count[i + 1]) {
                answer[index] = Number(array[i + 1]);
                break;
            }
        }
    });
    console.log(answer);
}
fivebig('1 1 2 3 4 2 1');
