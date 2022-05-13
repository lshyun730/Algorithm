function alphabet(input) {
    let ASC = 65;
    const ALPHABET_COUNT = 26;
    const array = input.toUpperCase().split('');
    const alphabetList = {};

    for (let i = 0; i < ALPHABET_COUNT; i++) {
        const alphabet = String.fromCharCode(ASC++);
        alphabetList[alphabet] = array.findIndex((value) => value === alphabet);
    }
    console.log(Object.values(alphabetList).join(' '));
}
alphabet('baekjoon');
