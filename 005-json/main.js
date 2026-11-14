async function loadBoards() {
  const res = await fetch("boards.json"); // ① 요청 보내고 응답이 올 때까지 기다림
  const boards = await res.json(); // ② 응답 내용을 JSON으로 읽어서 객체로 바꿈
  // 여기부터 boards는 아까와 같은 배열
  const boardList = document.querySelector("#boardList");

  boards.forEach((board) => {
    const li = document.createElement("li");
    li.textContent = board.title + " - " + board.writer;
    boardList.append(li);
  });
}

loadBoards();
