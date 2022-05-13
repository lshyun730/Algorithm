function josephus(n, k) {
    const list = Array(n)
        .fill()
        .map((value, i) => i + 1);
    const answer = [];
    num = 1;
    console.log(list);

    while (list.length) {
        if (num === k) {
            answer.push(list.shift());
            num = 1;
        } else {
            const value = list.shift();
            list.push(value);
            num++;
        }
    }
    console.log(answer.join());
}

josephus(7, 3);
