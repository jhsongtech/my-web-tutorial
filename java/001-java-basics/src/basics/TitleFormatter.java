package basics;

public class TitleFormatter {

	public static void main(String[] args) {
		String title = "2026년 하반기 정보시스템 점검 안내";
		int views = 152;
		
		title = title.trim();
		
		if (title.isEmpty()) {
			title = "제목 없음";
		} else if (title.length() > 10) {
			title = title.substring(0, 10) + "...";
		}
		
		if (views >= 100) {
			title = "[인기] " + title;
		}
		
		System.out.println(title);
	}

}
