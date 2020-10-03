# Models
## 정의하기
`sequelize` 모듈은 mysql과 병행하여 사용하기 위해 mysql2 모듈을 필요로 한다.   
만들어볼 서비스를 위한 데이터베이스는 mysql 모듈을 이용해 query문을 직접 구성해 만들어주고, 이를 기반으로 sequelize 객체를 생성한다.   
   
db에 저장될 객체는 `define`메소드로 선언한다.   
첫번째 인자는 객체의 이름, 두번째 인자는 column에 해당하는 항목들을 key-value쌍의 형식으로 전달한다.   
이때 각 property는 [매뉴얼]에서 확인할 수 있다.   
   
## 레코드 생성하기
선언한 모델에 대한 레코드는 `create`메소드로 생성할 수 있다.   
객체를 선언할 때 전달한 column 항목에 해당하는 타입과 제약조건에 맞게 인자를 전달한다.   
   
`create`메소드는 SQL에서의 `INSERT`문에 해당하며, CRUD의 C (create)를 담당한다.   
`create`메소드는 기본적으로 Promise를 제공해 비동기적으로 코드를 작성할 수 있다.   
`~/src/routes/saves`에서 볼 수 있듯, `~/src/model/posts`에서 정의한 Posts 모델을 가져온다.   
Posts 모델은 `~/src/model/model`에 작성된 정보를 토대로 데이터베이스에 통신한다.   
브라우저 단에서는 `/save`페이지에 만들어진 대로 'save'버튼을 누르게 되면 `~/src/routes/saves`에 선언된 라우터에 POST 요청을 보내게 된다.   
이때 요청을 보내는 방법은 form의 action, ajax 등 여러 방법이 있지만 `XMLHttpRequest`객체를 사용해 POST 요청을 보내도록 했다.   
POST 요청이 들어오면 `~/save/routes/saves`에 정의된 라우터는 `create`메소드를 호출해 데이터베이스에 레코드를 생성한다.   
이때 테스트 과정에서 레코드가는쌓이는 것을 방지하기 위해 `sync`메소드에 `force: true`옵션을 활성화해 `/save`페이지에 접근할때마다 이전 레코드를 모두 삭제하도록 하였다.   




[매뉴얼]: https://sequelize.org/master/manual/model-basics.html#model-definition