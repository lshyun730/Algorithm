// https://www.acmicpc.net/problem/1929

function decimal(...input) {
    const array = [...Array(input[1] - input[0] + 1)].map((_, index) => index + input[0]);
    const answer = array.filter((value) => {
        if (value === 1) return;
        for (let i = 2; i < value; i++) if (value % i === 0) return;
        return true;
    });
    console.log(answer.join('\n'));
}

decimal(3, 16);
