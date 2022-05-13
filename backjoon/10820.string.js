function word(input) {
    const count = { lower: 0, upper: 0, num: 0, blank: 0 };
    const array = input.split('').forEach((value) => {
        const code = value.charCodeAt();
        if (97 <= code && code <= 122) count['lower'] += 1;
        if (65 <= code && code <= 90) count['upper'] += 1;
        if (48 <= code && code <= 57) count['num'] += 1;
        if (value === ' ') count['blank'] += 1;
    });

    console.log(Object.values(count).join(' '));
}

word('This is String');
word('SPACE    1    SPACE');
