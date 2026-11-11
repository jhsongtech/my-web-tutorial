const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  const todoInput = input.value.trim();
  if (todoInput === "") {
    msg.textContent = "할 일을 입력하세요";
    input.value = "";
    return;
  }
  
  const li = document.createElement("li"); // ① 만들기: <li></li>
  const delBtn = document.createElement("button");
  delBtn.textContent = "삭제";
  
  li.textContent = todoInput; // ② 내용 채우기: <li>공부</li>
  li.append(delBtn);
  list.append(li); // ③ 붙이기: <ul> 안의 맨 끝에 추가
  input.value = "";
  msg.textContent = "";

  delBtn.addEventListener("click", () => {
    li.remove();
  });
});
