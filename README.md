# nodejs-crud
## 환경 구성하기
- 핵심모듈: express, node-mysql, sequelize 모듈   
- src 디렉토리: js 파일을 작성할 디렉토리   
- public 디렉토리: express모듈이 제공할 정적 파일들이 속할 디렉토리   
- routes 디렉토리: 페이지 기능을 세분화하기 위해 라우팅을 구현할 디렉토리   
   
## 서비스 설계
- 기본적인 CRUD 기능을 갖춘 게시판 구현   
- 1차적으로 security 기능 없이 글쓰기가 가능한 서비스를 구현   
- 게시글에 포함될 항목들:
    - 제목 (title)   
    - 글쓴이 (author)   
    - 내용 (content)   
    - 게시일 (created_date)   
    - 수정일 (modified_date)   
   
## 구현

