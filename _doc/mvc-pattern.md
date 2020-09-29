# MVC 패턴
## 정의
MVC 패턴은 Model, View, Controller로 이루어진 디자인 패턴을 의미한다.   
   
Model은 어떠한 동작을 수행하는 코드이다.   
보통 데이터베이스와 연동하여 연산을 하는 역할을 한다.   
Model은 Client에 노출되지 않기 때문에 사용자에게 어떻게 보일지를 생각하지 않아도 된다.   
Model의 함수들은 현재 Model의 상태 정보를 수정하거나, query에 대해 정보를 반환하는 역할을 한다.   
   
View는 사용자가 보게 되는 부분이다.   
Model에 질의를 넘기고 값을 받아 해당하는 정보를 사용자에게 전달하는 역할을 한다.   
   
Controller는 사용자의 요청을 받는 매개이다.   
요청에 따라 View를 반환하는데, Model의 함수를 호출해 상태를 바꿀 수 있다.   
이때 Model은 View에 자신의 상태가 바뀜을 알리고 View는 바뀐 정보를 반영해 사용자에게 전달한다.   
   
## nodejs 에서의 MVC 패턴
본 repository는 nodejs와 express framework를 사용해 MVC패턴을 구현했다.   
Model은 ~/src/model 에 해당한다.   
Model은 데이터베이스와 연동하여 연산을 하는 역할이라 했다.   
이를 구현하기 위해 nodejs의 `sequelize` 모듈을 사용했다.   
데이터베이스 사용자명, 비밀번호, 포트설정 등 데이터베이스와 연동하기 위한 설정정보들은 ~/src/config 에 선언했다.   
   
View는 ~/src/view 에 해당한다.   
View는 사용자에게 보여질 화면을 구성하는 역할을 한다.   
Model과의 원활한 통신을 위해 `ejs` 템플릿 엔진을 사용했다.   
   
Controller는 ~/src/routes에 해당한다.   
사용자의 요청을 받아 해당하는 Model의 정보를 View에 실어보낸다.   
