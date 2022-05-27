function solution(numbers) {
    var answer = [];
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            array.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(array)].sort((a, b) => a - b);
    return answer;
}

console.log(solution([1, 2, 3, 5, 6, 7]));
