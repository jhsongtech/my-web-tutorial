// 1. 구구단
console.log("1. 구구단 2단~9단 출력");
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 2. 1~100 짝수 합
console.log("2. 1~100 짝수 합");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1)
    // 홀수
    continue;
  sum += i;
}
console.log(sum);

// 3. for...of로 최고점 찾기
console.log("3. for...of로 최고점 찾기");
const scores = [72, 95, 88, 61, 99, 84];
let maxScore = -Infinity;
for (let score of scores) {
  if (maxScore < score) maxScore = score;
}
console.log(maxScore);

// 4. FizzBuzz (유명한 면접 문제)
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
    continue;
  }
  if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  }
  if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}
