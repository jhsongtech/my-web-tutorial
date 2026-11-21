package basics;

public class BoardMain {
	public static void main(String[] args) {
		BoardVO post = new BoardVO();
		post.title = "회의 일정";
		post.writer = "김주무관";
		post.views = 34;
		
		System.out.println("제목: " + post.title + " / 작성자: " + post.writer + " / 조회수: " + post.views);
	}
}
