// https://www.acmicpc.net/problem/2609

function common(...array) {
    const a = array[0];
    const b = array[1];
    let answer = [gcd(a, b), lcm(a, b)];
    console.log(answer);
}

function gcd(a, b) {
    answer = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) answer = i;
    }
    return answer;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

common(24, 18);
