# nodejs-crud
## 환경 구성하기
- 핵심모듈: express, node-mysql, sequelize, ejs 모듈   
- src 디렉토리: js 파일을 작성할 디렉토리   
- public 디렉토리: express모듈이 제공할 정적 파일들이 속할 디렉토리   
- routes 디렉토리: 페이지 기능을 세분화하기 위해 라우팅을 구현할 디렉토리   
   
## 서비스 설계
- 기본적인 CRUD(Create, Read, Update, Delete) 기능을 갖춘 게시판 구현   
- 1차적으로 security 기능 없이 글쓰기가 가능한 서비스를 구현   
- 게시글에 포함될 항목들:
    - 제목 (title)   
    - 글쓴이 (author)   
    - 내용 (content)   
    - 게시일 (createdAt)   
    - 수정일 (modifiedAt)   
   
- cookie를 이용한 사용자 인증 구현  
- express middleware function 작성을 통해 로직 분리  
- user TABLE에 저장될 항목들(우선 보안은 배제):  
    - id  
    - password  
    - alias (게시글의 author 항목을 대체)  
   
## 구현
- 큰 뼈대는 [MVC 디자인 패턴]을 채용   
- sequelize, ejs, express 모듈을 이용해 MVC 패턴을 구현   
- 편의를 위해 자바스크립트가 아니라 ejs 템플릿 엔진을 사용   
- 페이지 디자인은 부트스트랩 등의 라이브러리 없이 Pure CSS 로 구성   
- + ReactJS, jQuery 등 없이 VanillaJS로 프론트엔드 구현  
- 테스트 코드는 작성하지 않음(TDD 방법론은 다음기회에)   
    
## 배포
- 배포까지 하면 좋겠지만 서버비용 및 보안 등등을 고려하지 않고 작성한 간단한 프로젝트임   


[MVC 디자인 패턴]: https://github.com/RudyPark3091/nodejs-crud/blob/master/_doc/mvc-pattern.md
[CodeSandbox]: https://codesandbox.io/index2

