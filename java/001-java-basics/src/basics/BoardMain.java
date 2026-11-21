package basics;

public class BoardMain {
	public static void main(String[] args) {
		BoardVO post = new BoardVO();
		post.setTitle("회의 일정");
		post.setWriter("김주무관");
		post.setViews(34);
		
		System.out.println("제목: " + post.getTitle() + " / 작성자: " + post.getWriter() + " / 조회수: " + post.getViews());
	}
}
