function reverse(input) {
    const re = /(<.+?>|\s)/g;
    const tmp = input.split(re);
    const result = [];
    tmp.map((x) => {
        if (re.test(x)) {
            result.push(x);
        } else {
            let a = x.split('').reverse().join('');
            result.push(a);
        }
    });
    console.log(result.join(''));
}

reverse('<open>gat<close>');
