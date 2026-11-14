# my-web-tutorial

공공기관 웹 개발 업무 스택을 목표로 웹 개발을 공부하는 학습 저장소입니다.

**목표 스택:** JSP · 전자정부 표준프레임워크 5.1 · WAS JEUS · Oracle

## 학습 로드맵

| 단계 | 내용 | 상태 |
|---|---|---|
| 1 | JavaScript 기초 (DOM, 이벤트, JSON, fetch, 에러 처리) | ✅ 완료 |
| 2 | Java 기초 (클래스·인터페이스, 컬렉션, 예외, 제네릭) | 🔄 진행 중 |
| 3 | 웹 기초 + 서블릿/JSP | |
| 4 | Oracle SQL + JDBC | |
| 5 | Spring 핵심 (DI/IoC, AOP, 트랜잭션) | |
| 6 | Spring MVC | |
| 7 | MyBatis | |
| 8 | 전자정부 표준프레임워크 5.1 (게시판 CRUD + 페이징) | |
| 9 | JSP 화면 + jQuery + AJAX | |
| 10 | Maven, WAR 패키징, JEUS 배포 | |
| 11 | 기존 소스 읽기, 디버깅, 시큐어코딩 | |

## 폴더 구성

언어별 폴더 아래에 번호순으로 정리합니다.

### [js/](js/)

| 폴더 | 내용 |
|---|---|
| [001-simple-todo](js/001-simple-todo/) | HTML·CSS로 만든 할 일 목록 화면 |
| [002-simple-event](js/002-simple-event/) | onclick 이벤트로 입력값을 목록에 추가 |
| [003-js-study](js/003-js-study/) | JS 문법 정리 (변수, 조건문, 반복문, 함수, 배열·객체, ES6) |
| [004-todo](js/004-todo/) | 할 일 추가·삭제 (createElement, append, remove) |
| [005-json](js/005-json/) | JSON 게시판 목록을 fetch로 불러와 출력하고 실패 시 안내 문구 표시 |

### java/

Java 기초 실습 (예정)

## 실행 방법

**JavaScript**
- 각 폴더의 `index.html`을 브라우저로 엽니다.
- `js/005-json`처럼 `fetch`를 쓰는 예제는 VS Code의 **Live Server** 확장으로 열어야 합니다. (파일을 바로 열면 브라우저 보안 정책 때문에 요청이 막힙니다.)
- `js/003-js-study`의 `.js` 파일은 터미널에서 `node 파일이름.js`로 실행합니다.

**Java**
- 전자정부 표준프레임워크 개발환경(Eclipse 기반)에서 프로젝트를 열어 실행합니다. JDK 17 이상이 필요합니다.
