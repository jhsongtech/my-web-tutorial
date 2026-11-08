const title = document.querySelector("#title");
console.log(title);

title.textContent = "지훈의 할 일 목록";

const button = document.querySelector("#btn");
button.textContent = "추가";

let clicks = 0;
button.addEventListener("click", () => {
  clicks++;
  title.textContent = `지훈의 할 일 목록 (${clicks})`;
});
