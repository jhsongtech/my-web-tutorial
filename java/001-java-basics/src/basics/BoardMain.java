package basics;

public class BoardMain {
	public static void main(String[] args) {
		BoardVO post = new BoardVO("회의 일정", "김주무관", 34);
		
		System.out.println("제목: " + post.getTitle() + " / 작성자: " + post.getWriter() + " / 조회수: " + post.getViews());
		
		BoardVO post2 = new BoardVO();
		post2.setTitle("회의 일정");
		post2.setWriter("김주무관");
		post2.setViews(34);

		System.out.println("제목: " + post2.getTitle() + " / 작성자: " + post2.getWriter() + " / 조회수: " + post2.getViews());
	}
}
