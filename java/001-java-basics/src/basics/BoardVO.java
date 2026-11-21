package basics;

public class BoardVO {
	private String title;
	private String writer;
	private int views;
	
	public BoardVO() {
		
	}
	
	public BoardVO(String title, String writer, int views) {
		this.title = title;
		this.writer = writer;
		this.views = views;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getWriter() {
		return writer;
	}
	
	public void setWriter(String writer) {
		this.writer = writer;
	}
	
	public int getViews() {
		return views;
	}
	
	public void setViews(int views) {
		this.views = views;
	}
}
