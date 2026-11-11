/*
과제: 목록에 한 줄씩 추가하기

지금 main.js를 고쳐서, 버튼을 누를 때마다 입력한 할 일이 목록에 한 줄씩 쌓이게 만드세요.

index.html의 <p id="msg"></p> 아래에 <ul id="todoList"></ul> 추가
빈 값일 때 "할 일을 입력하세요"를 보여주는 부분은 그대로
값이 있으면 만들고(createElement) → 채우고(textContent) → 붙이기(append)
추가에 성공하면 #msg는 빈 문자열로 비우기

힌트: #todoList를 찾는 코드는 콜백 바깥(맨 위), <li>를 만드는 코드는 콜백 안이에요.
*/
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  const li = document.createElement("li"); // ① 만들기: <li></li>
  const todoInput = input.value.trim();
  if (todoInput === "") {
    msg.textContent = "할 일을 입력하세요";
    return;
  }
  li.textContent = todoInput; // ② 내용 채우기: <li>공부</li>
  input.value = "";
  list.append(li); // ③ 붙이기: <ul> 안의 맨 끝에 추가
  msg.textContent = "";
});
