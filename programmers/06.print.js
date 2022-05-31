// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    const list = priorities.map((t, i) => ({
        my: i === location,
        val: t,
    }));

    let count = 0;

    while (true) {
        const cur = list.splice(0, 1)[0];
        if (list.some((t) => t.val > cur.val)) {
            list.push(cur);
        } else {
            count++;
            if (cur.my) return count;
        }
    }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
