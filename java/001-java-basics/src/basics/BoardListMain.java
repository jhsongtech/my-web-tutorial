package basics;

public class BoardListMain {

	public static void main(String[] args) {
		BoardVO[] posts = new BoardVO[3];
		posts[0] = new BoardVO("회의 일정", "김주무관", 34);
		posts[1] = new BoardVO("PC 현황 취합", "박주무관", 35);
		posts[2] = new BoardVO("결과보고 공람", "최주무관", 36);
		
		for (int i = 0; i < posts.length; i++) {
			BoardVO post = posts[i];
			System.out.println((i+1) + ". " + post.getTitle() + " / " + post.getWriter() + " / " + post.getViews());	
		}
	}
}
