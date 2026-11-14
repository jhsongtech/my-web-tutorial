// 1번
const todos = [];
todos.push("공부");
todos.push("운동");
todos.push("청소");

todos.unshift("기상");
const lastEle = todos.pop();
console.log(lastEle);

console.log(todos.length);

// 2번
const me = {
  name: "송지훈",
  age: 32,
  job: "공무원",
  skills: ["C#", "WPF"],
};

console.log(me.skills.length);
console.log(me.skills.at(0));
for (const key in me) {
  console.log(`key: ${key}, value: ${me[key]}`);
}

// 3번
const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
];

let sum = 0;
let maxScore = -Infinity;
let maxStudent = "";
const highStudents = [];
for (const student of students) {
  sum += student.score;
  if (student.score > maxScore) {
    maxScore = student.score;
    maxStudent = student.name;
  }
  if (student.score >= 80) {
    highStudents.push(student.name);
  }
}

console.log(`평균 점수: ${sum / students.length}`);
console.log(`80점 이상인 학생 이름: ${highStudents.join(", ")}`);
console.log(`최고점 학생의 이름: ${maxStudent}`);
