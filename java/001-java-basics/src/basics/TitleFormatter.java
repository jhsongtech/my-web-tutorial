package basics;

public class TitleFormatter {
	
	public static void main(String[] args) {
		String[] titles = {"2026년 하반기 정보시스템 점검 안내", "회의 일정", ""};
		int[] views = {152, 34, 0};
		
		if (titles.length != views.length) {
			System.out.println("입력 오류!");
			return;
		}
		
		int len = titles.length;
		
		String[] finalTitles = new String[len];
		for (int i = 0; i < len; i++) {
			finalTitles[i] = formatTitle(titles[i], views[i]);
			System.out.println((i + 1) + ". " + finalTitles[i]);
		}
	}

	public static String formatTitle(String title, int views) {
		title = title.trim();
		
		if (title.isEmpty()) {
			title = "제목 없음";
		} else if (title.length() > 10) {
			title = title.substring(0, 10) + "...";
		}
		
		title = title + " (" + views + ")";
		
		if (views >= 100) {
			title = "[인기] " + title;
		}
		
		return title;
	}
}
