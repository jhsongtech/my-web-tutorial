async function loadBoards() {
  try {
    const res = await fetch("boards.json"); // ① 요청 보내고 응답이 올 때까지 기다림

    if (res.ok === false) {
      throw new Error(res.status);
    }

    const boards = await res.json(); // ② 응답 내용을 JSON으로 읽어서 객체로 바꿈
    // 여기부터 boards는 아까와 같은 배열
    const boardList = document.querySelector("#boardList");

    boards.forEach((board) => {
      const li = document.createElement("li");
      li.textContent = board.title + " - " + board.writer;
      boardList.append(li);
    });
  } catch (error) {
    console.log(error);

    const boardList = document.querySelector("#boardList");
    boardList.textContent = "목록을 불러오지 못했습니다";
  }
}

loadBoards();
