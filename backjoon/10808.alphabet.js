function alphabet(input) {
    const ALPHABET_COUNT = 26;
    const array = input.toUpperCase().split('');
    const alphabetList = {};
    let ASC = 65;

    for (let i = 0; i < ALPHABET_COUNT; i++) {
        const alphabet = String.fromCharCode(ASC++);
        alphabetList[alphabet] = array.filter((value) => alphabet === value).length;
    }
    console.log(Object.values(alphabetList).join(' '));
}
alphabet('baekjoon');
