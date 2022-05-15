function decimal(...array) {
    console.log(array);
    const answer = array.filter((value) => {
        if (value === 1) return;
        for (let i = 2; i < value; i++) {
            if (value % i === 0) return;
        }
        return true;
    }).length;
    console.log(answer);
}

decimal(1, 3, 5, 7);
