function handleButtonClick() {
  console.log("클릭");
  alert("안녕");
}

function handleAddTodoClick() {
  const todoText = document.getElementById("todoInput").value;

  // 요구사항 4
  alert(todoText);

  // 요구사항 5
  const ulList = document.querySelector("#todoList");
  const todoItem = document.createElement("li");
  todoItem.textContent = todoText;
  ulList.append(todoItem);
}