// https://www.acmicpc.net/problem/11655

function rot13(input) {
    answer = '';
    input.split('').map((value) => {
        let num = value.charCodeAt(0);
        if ('A' <= value && value <= 'Z') num = num + 13 > 90 ? num - 13 : num + 13;
        if ('a' <= value && value <= 'z') num = num + 13 > 122 ? num - 13 : num + 13;
        answer += String.fromCharCode(num);
    });

    console.log(answer);
}

rot13('Baekjoon Online Judge');
