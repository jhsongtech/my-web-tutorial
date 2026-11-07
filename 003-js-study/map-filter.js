// const students = [
//   { name: "김철수", score: 85 },
//   { name: "이영희", score: 92 },
//   { name: "박민수", score: 78 },
// ];

// console.log(students.map((student) => student.name).join(", "));

const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
];

const highStudents = students.filter((s) => s.score >= 80);
console.log(highStudents);

const names = highStudents.map((s) => s.name);
console.log(names);