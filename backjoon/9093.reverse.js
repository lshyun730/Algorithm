// 9093번

function reverse(value) {
    const sentence = value.split(' ');
    sentence.map((word, index) => (sentence[index] = word.split('').reverse().join('')));
    console.log(sentence.join(' '));
}

reverse('I am happy today');
reverse('We want to win the first prize');
