const response =
  '[{"id":1,"title":"공지사항","writer":"관리자"},{"id":2,"title":"회의 일정","writer":"김주무관"},{"id":3,"title":"점검 안내","writer":"전산팀"}]';

const boards = JSON.parse(response);
const boardList = document.querySelector("#boardList");
boards.forEach((board) => {
  const li = document.createElement("li");
  li.textContent = board.title + " - " + board.writer;
  boardList.append(li);
});