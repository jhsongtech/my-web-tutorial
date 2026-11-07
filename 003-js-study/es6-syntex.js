const users = [
  { id: 1, name: "지훈", address: { city: "부산" } },
  { id: 2, name: "민수", address: null },
];

function getUserLabel(users, id) {
  const user = users.find((u) => u.id === id);

  if (!user) return "회원 없음";

  const city = user.address?.city ?? "주소 없음";

  return `${user.name} (${city})`;
}

console.log(getUserLabel(users, 1));
console.log(getUserLabel(users, 2));
console.log(getUserLabel(users, 99));
