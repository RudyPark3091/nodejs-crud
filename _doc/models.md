# Models
## 정의하기
`sequelize` 모듈은 mysql과 병행하여 사용하기 위해 mysql2 모듈을 필요로 한다.   
만들어볼 서비스를 위한 데이터베이스는 mysql 모듈을 이용해 query문을 직접 구성해 만들어주고, 이를 기반으로 sequelize 객체를 생성한다.   
   
db에 저장될 객체는 `define`메소드로 선언한다.   
첫번째 인자는 객체의 이름, 두번째 인자는 column에 해당하는 항목들을 key-value쌍의 형식으로 전달한다.   
이때 각 property는 [매뉴얼]에서 확인할 수 있다.   
   
## 레코드 생성하기
선언한 모델에 대한 레코드는 `create`메소드로 생성할 수 있다.(crud의 c에 해당)   
객체를 선언할 때 전달한 column 항목에 해당하는 타입과 제약조건에 맞게 인자를 전달한다.   
그리고 `sync`메소드를 호출하면 db에 레코드가 생성된다.   
이때 인자로 전달할 수 있는 값이 여러 개 있으니 추가로 알아보자.   


[매뉴얼]: https://sequelize.org/master/manual/model-basics.html#model-definition