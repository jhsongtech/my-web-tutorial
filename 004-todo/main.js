const input = document.querySelector("#todoInput");
const btn = document.querySelector("#btn");
const output = document.querySelector("#msg");

btn.addEventListener("click", () => {
  const todoText = input.value.trim();
  if (todoText === "") {
    output.textContent = "할 일을 입력하세요"; // 입력창에 적힌 글자
  } else {
    output.textContent = `추가됨: ${todoText}`;
  }
  input.value = "";
});
