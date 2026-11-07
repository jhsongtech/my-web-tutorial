function getGrade(score) {
  if (score > 100 || score < 0) return "잘못된 점수";

  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score < 70) return "F";
}

console.log(getGrade(95));
console.log(getGrade(105));

const hour = 14;
const amPm = hour < 12 ? "오전" : "오후";
console.log(amPm);