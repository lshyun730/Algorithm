function remainder(...array) {
    const a = array[0];
    const b = array[1];
    const c = array[2];

    console.log((a + b) % c);
    console.log(((a % c) + (b % c)) % c);
    console.log((a * b) % c);
    console.log(((a % c) * (b % c)) % c);
}

remainder(5, 8, 4);
