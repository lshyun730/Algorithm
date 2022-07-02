// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }

  return d.length;
}
