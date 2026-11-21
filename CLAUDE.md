# 학습 저장소: my-web-tutorial

공공기관 전산직 신입의 웹 개발 학습 저장소.
강의는 보지 않고 Claude와 대화로만 공부한다.

## 학습 목표 (테크트리)
업무 스택에 맞춘 순서로 진행한다. 목표 스택: JSP + 전자정부 표준프레임워크 + 웹서버 WebtoB + WAS JEUS + Oracle(TOAD).

1. JS 마무리 (업무에 필요한 부분만) ✅ 완료
2. Java 감 되살리기 (클래스·인터페이스, 컬렉션, 예외, 제네릭) ← 현재
3. 웹 기초 + 서블릿/JSP (HTTP, 세션, forward/redirect, EL·JSTL, 웹서버 vs WAS 개념)
4. Oracle SQL + JDBC
5. Spring 핵심 (DI/IoC, XML 설정, AOP, 트랜잭션)
6. Spring MVC
7. MyBatis
8. 전자정부 표준프레임워크 **5.1** (계층 구조, 게시판 CRUD + 페이징, 공통컴포넌트)
9. JSP 화면 + jQuery + AJAX
10. Maven, WAR 패키징, JEUS 배포, WebtoB 연동(정적 파일·JEUS로 요청 넘기기), 로그
11. 기존 소스 읽기, 디버깅, 시큐어코딩, 제니퍼(APM) 화면 읽기(느린 요청·느린 SQL·에러 찾기)

- 전자정부는 5.1 기준으로 공부하고, 기존 시스템(3.x/4.x)과의 차이(JDK 8 vs 17+, javax vs jakarta)는 나올 때마다 짚는다.
- MERN(Node, Express, React, MongoDB)은 보류.

## Java 진도
- Java는 오래전에 해서 거의 잊은 상태 → **처음 배우는 사람 기준**으로 진행한다.
- 개발 환경: JDK 21(Temurin) 설치됨. IDE는 **전자정부 개발환경 이클립스**(`C:\eGovFrameDev-5.0.2-Windows-64bit`, workspace-egov)를 쓴다.
  프로젝트는 workspace가 아니라 이 저장소의 `java/` 아래에 만든다 (New Java Project에서 Use default location 해제, module-info 해제).
- 전자정부 버전: 설치본은 5.0.2. 5.1은 베타로 보이나 미확인 → 8단계 전에 포털(다운로드 → 개발환경)에서 정식 버전 확인.
- 완료: 이클립스 프로젝트 생성(java/001-java-basics), 클래스·main 기본 틀, System.out.println,
  `;` 필수·큰따옴표 문자열·클래스명=파일명 규칙 (src/basics/Hello.java)
- **진행 방식: 학부 수준 기초(자료형·연산자·조건·반복·메서드·배열)는 건너뛰지 않되 빠르게 공부한다.**
  JS와 다른 점 위주로 2~3개 개념을 묶어 짧게 설명 + 과제·퀴즈·복습은 그대로 한다. 더 많은 시간은 전자정부에 필요한 부분
  (클래스·객체, VO/getter·setter, 인터페이스-구현체(Service/ServiceImpl), 컬렉션(List·Map), 예외, 제네릭)에 쓴다.
- 완료: 기초 문법 1편 — 변수·자료형, 문자열 equals/trim/isEmpty/length()/substring, if·else if
  (과제 TitleFormatter: 빈 제목·10자 자르기·[인기] 표시). 헷갈렸던 점: substring(10) vs substring(0, 10),
  trim()은 원본을 안 바꾸고 새 문자열을 돌려줌(다시 대입 필요).
- 완료: 기초 문법 2편 — 메서드(반환 타입·매개변수 타입·return·void), 배열(선언·new String[n]·length 괄호 없음·고정 크기),
  for 반복, int↔String(String.valueOf, Integer.parseInt). TitleFormatter를 formatTitle 메서드 + 배열 반복으로 리팩토링.
- 보류한 다듬기: formatTitle이 조회수까지 붙임 → 제목만 가공하도록 분리. VO 배울 때 다시 다룬다.
- 완료: 클래스와 객체 첫 단계 — 클래스=양식/객체=채운 한 장, 필드, new, 점(.)으로 읽고 쓰기,
  접근제어자 4종 개요(public·protected·default·private). BoardVO(필드 3개) + BoardMain(객체 하나 만들어 출력).
  변수명은 소문자 시작(클래스명과 같게 짓지 않기).
- 완료: VO 의미(Value Object = 데이터 담는 그릇, MVC의 M 일부이자 계층 사이를 오가는 객체, DTO와 섞어 씀),
  private 필드 + getter/setter(get/set + 필드명 대문자 시작, this.필드 = 매개변수). BoardVO·BoardMain에 적용.
  헷갈렸던 점: setter에서 `title = this.title`로 대입 방향을 거꾸로 씀 → 오른쪽 값이 왼쪽으로 들어감.
- 완료: 생성자 — 이름=클래스명, 반환 타입 없음, new 때 자동 실행, 직접 쓰면 기본 생성자 사라짐(The constructor ... is undefined)
  → VO엔 빈 생성자 필수(Spring·MyBatis가 빈 생성자 + setter로 채움). 전자정부 VO는 보통 생성자를 직접 안 씀.
  BoardVO에 빈 생성자 + 3개 받는 생성자, BoardMain에서 post(생성자 방식)·post2(빈 생성자+setter 방식) 비교.
  궁금해했던 점: 생성자가 있으면 getter/setter는 필요 없나? → 생성자는 처음 한 번, getter/setter는 이후 꺼내기·바꾸기.
- **다음 할 것: BoardVO 배열로 여러 글 + TitleFormatter 로직 합치기**(보류한 다듬기: formatTitle은 제목만 가공) 그다음 BoardVO 배열로 여러 글 + TitleFormatter 로직 합치기(보류한 다듬기 포함)
- 참고: workspace의 다른 프로젝트(egovboard) XML 검증 에러가 Problems 창에 보이는데 학습과 무관

## JS 진도 (완료)
- 완료: 변수·자료형, 조건문, 반복문, 함수(화살표·콜백), 배열·객체, map·filter·find·reduce,
  ES6(구조분해·스프레드·?.·??), DOM 요소 찾기·textContent, 이벤트(addEventListener),
  폼 값(value, trim, 빈 값 검사), 요소 만들고 붙이기(createElement → textContent → append),
  요소 지우기(remove, 콜백 안에 콜백, 클로저 맛보기), append vs innerHTML(XSS),
  JSON(parse/stringify, 받은 JSON 배열을 forEach로 목록 출력 — js/005-json),
  fetch + async/await(boards.json 받아 오기, Promise 개념, await 빠뜨리면 Promise가 들어옴, .then 방식도 읽기만),
  에러 처리(try/catch, res.ok·res.status 확인, throw new Error — fetch는 404에도 에러를 안 던짐)
- 실행 주의: fetch 쓰는 페이지는 Live Server로 열어야 함 (file://은 CORS 에러)
- 나중에 할 것: 삭제 버튼 웹 접근성(aria-label) — 접근성 배울 때 js/004-todo에 적용
- 아직 헷갈려하는 부분: 콜백 매개변수에 무엇이 들어오는지, map/filter 체이닝 순서

## 가르치는 방식 (꼭 지킬 것)
- 한 번에 **개념 하나 + 짧은 과제 하나**. 길게 몰아서 설명하지 않는다.
- **글은 가독성 있게.** 결론(한 줄)을 맨 위에 → 이유·설명은 짧은 문장의 목록이나 표로 → 핵심 단어만 굵게.
  긴 문단을 늘어놓지 않는다. 뭔가 물을 때는 "A 할까요, B 할까요?"처럼 고를 것을 맨 끝에 한 줄로 분명하게.
- 과제를 막혀 하면 **정답 대신 힌트만** 준다. "힌트만"이라고 하면 코드 정답을 쓰지 않는다.
- 단, **함수 이름·문법은 바로 알려 준다** ("예전 코드 참고하라"고 돌리지 않기). 흐름·로직(무엇을 어떤 순서로)은 힌트로.
- 학습 세션을 시작할 때 **지난 내용 5분 복습**: OX·객관식 2~3문제를 먼저 낸다. (간격이 벌어지면 문법을 잘 잊음)
- 결과값을 맞히는 계산·예측 문제는 내지 않는다. 실제 앱에서 쓰는 모양의 코드를 짜는 과제 위주로.
- 개념 확인 퀴즈는 객관식(1~4번) 또는 OX로, 채팅에 텍스트로 낸다.
- 처음부터 예쁘게 짜려다 막히는 경향이 있다 → "일단 동작하게, 그다음 다듬기"를 안내한다.
- Java, C# 경험은 오래전이라 거의 잊었다 → **Java/C#에 빗대어 설명하지 않는다.** 처음 배우는 사람 기준으로, 일상 비유로 설명한다.
- 업무와 연결되는 지점(XSS·시큐어코딩, 웹 접근성, 전자정부 구조)은 짚어 준다.
- 메뉴 경로는 그 앱의 실제 UI 언어로 안내한다 (VS Code는 영어 메뉴).

## 저장소 규칙
- 언어별 폴더(`js/`, `java/` …) 아래에 둔다. 번호는 언어 폴더마다 001부터.
- 폴더/파일명: 세 자리 번호 + 소문자 kebab-case (예: js/005-json, java/001-java-basics)
  단, Java 클래스 파일은 Java 규칙(대문자 시작 CamelCase, 숫자 시작·하이픈 불가)을 따른다.
- 커밋 메시지: `feat:` / `fix:` / `refactor:` / `docs:` / `style:` 접두어 + 한국어 설명
