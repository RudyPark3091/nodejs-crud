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
이때 테스트 과정에서 레코드가 쌓이는 것을 방지하기 위해 `sync`메소드에 `force: true`옵션을 활성화해 `/save`페이지에 접근할때마다 이전 레코드를 모두 삭제하도록 하였다.   
   
## 레코드 읽어들이기
`레코드 생성하기`에서 다뤘듯, sequelize 모듈에서 접속한 데이터베이스 상에 존재하는 레코드를 '모델 단위'로 읽어올 수 있다.   
이를 가능케 하는 것이 `findAll`메소드이다.   
findAll메소드는 SQL에서의 `SELECT`문에 해당하며, `WHERE`문과 같이 조건을 걸 수 있다.   
이는 [findAll매뉴얼]에서 상세하게 확인할 수 있다.   
이 역시 Promise 기반으로 작성되어 chaining 기법을 사용해 코드를 깔끔하게 작성할 수 있다.   
findAll메소드로 가져온 레코드들을 가공하여 ejs 템플릿 엔진으로 전달해 index.ejs 페이지에서 확인할 수 있게 하였다.   
   
## 레코드 수정하기
레코드 수정은 sequelize모듈의 `update`메소드를 이용해 수행한다.   
find 관련 메소드를 사용해 Model 객체를 받아 `update`메소드를 실행한다.   
`update`메소드의 parameter는 [여기서] 확인할 수 있다.   
두 개의 required parameter가 존재하는데, 첫번째는 수정할 값에 해당하는 json객체, 두번째는 수정할 목표 Model 객체를 결정할 Option json 객체이다.   
Option은 여러 조건을 지정할 수 있는데, 대표적으로 SQL에서 사용하는 것과 같이 `where`으로 값을 지정할 수 있다.   
``` javascript
Posts.update({
  title: req.body.title,
  content: req.body.content
}, {
  where: {
    id: parseInt(req.body.id)
  }
})
```
위 코드는 request body 의 id가 일치하는 Model 객체의 title 속성과 content 속성을 request body 에서 받은 값으로 수정하라는 의미를 가진다.   
   
## 레코드 삭제하기
레코드 삭제는 아주 단순한 방법으로 구현할 수 있다.   
위의 과정에서 한 것과 같은 방법으로 Model 객체를 받아온 뒤, Model 객체의 `destroy`메소드를 호출하면 데이터베이스에서 삭제된다.   


[매뉴얼]: https://sequelize.org/master/manual/model-basics.html#model-definition
[findAll매뉴얼]: https://sequelize.org/master/manual/model-querying-basics.html
[여기서]: https://sequelize.readthedocs.io/en/latest/api/model/#updatevalues-options-promisearrayaffectedcount-affectedrows