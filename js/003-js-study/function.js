const getGrade = (score) => {
  if (score > 100 || score < 0) return "잘못된 점수";

  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";

  return "F";
};

const square = (n) => n ** 2;
const isEven = (n) => n % 2 === 0;
const fullName = (last, first) => last + first;

const calcPrice = (price, discount = 0) => price * (1 - discount);
const forEachItem = (arr, fn) => {
  for (const n of arr) {
    fn(n);
  }
};

forEachItem([1, 2, 3], (n) => console.log(n * 10)); // 10, 20, 30
