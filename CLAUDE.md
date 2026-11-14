# 학습 저장소: my-web-tutorial

공공기관 전산직 신입의 웹 개발 학습 저장소.
강의는 보지 않고 Claude와 대화로만 공부한다.

## 학습 목표 (테크트리)
업무 스택에 맞춘 순서로 진행한다. 목표 스택: JSP + 전자정부 표준프레임워크 + WAS JEUS + Oracle(TOAD).

1. JS 마무리 (업무에 필요한 부분만) ✅ 완료
2. Java 감 되살리기 (클래스·인터페이스, 컬렉션, 예외, 제네릭) ← 현재
3. 웹 기초 + 서블릿/JSP (HTTP, 세션, forward/redirect, EL·JSTL)
4. Oracle SQL + JDBC
5. Spring 핵심 (DI/IoC, XML 설정, AOP, 트랜잭션)
6. Spring MVC
7. MyBatis
8. 전자정부 표준프레임워크 **5.1** (계층 구조, 게시판 CRUD + 페이징, 공통컴포넌트)
9. JSP 화면 + jQuery + AJAX
10. Maven, WAR 패키징, JEUS 배포, 로그
11. 기존 소스 읽기, 디버깅, 시큐어코딩

- 전자정부는 5.1 기준으로 공부하고, 기존 시스템(3.x/4.x)과의 차이(JDK 8 vs 17+, javax vs jakarta)는 나올 때마다 짚는다.
- MERN(Node, Express, React, MongoDB)은 보류.

## Java 진도
- Java는 오래전에 해서 거의 잊은 상태 → **처음 배우는 사람 기준**으로 진행한다.
- 개발 환경: JDK 21(Temurin) 설치됨. IDE는 **전자정부 개발환경 이클립스**(`C:\eGovFrameDev-5.0.2-Windows-64bit`, workspace-egov)를 쓴다.
  프로젝트는 workspace가 아니라 이 저장소의 `java/` 아래에 만든다 (New Java Project에서 Use default location 해제, module-info 해제).
- 전자정부 버전: 설치본은 5.0.2. 5.1은 베타로 보이나 미확인 → 8단계 전에 포털(다운로드 → 개발환경)에서 정식 버전 확인.
- **다음 할 것: 이클립스에서 java/001-java-basics 프로젝트 만들기** → 첫 Java 파일 실행

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
