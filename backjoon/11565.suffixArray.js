function suffixArray(input) {
    let answer = [];
    input.split('').map((value, index) => answer.push(input.slice(index, input.length)));

    console.log(answer.sort().join('\n'));
}

suffixArray('backjoon');
