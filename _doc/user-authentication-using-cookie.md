## 로그인
게시판을 사용함에 있어 글을 쓰고, 읽는 권한을 부여하기 위해 필요한 기능은 바로 로그인이다.  
로그인 기능을 구현함에 있어 가장 중요한 것은 사용자 정보에 관한 보안이지만 우선 보안 관련 사항은 신경쓰지 않고 로그인 기능을 구현했다.  
현재 회원가입 및 소셜 로그인 기능 없이 미리 등록된 Sample User를 이용해 서비스를 이용할 수 있도록 한 상태이다.  

## 쿠키
쿠키는 현재 세션의 정보를 담고 있는 브라우저에 저장된 데이터 조각이라고 할 수 있다.  
이는 서버에서 `Set-cookie`같은 방법으로 서버에서 만들어 낼 수도 있고, 브라우저에서 `document.cookie` 같은 방법으로 클라이언트 단에서 만들어낼 수도 있다.  
여기서는 npm의 [cookie-parser 모듈]을 사용해 쿠키를 제어한다.  
cookie를 이용해 `sequelize`모듈을 이용해 정의한 `User`모델과 비교하여 현재 DB에 저장된 사용자라면 권한을 부여한다.  
  
## 사용자 인증 미들웨어
권한을 부여하는 작업은 `controller`에 해당하는 `router`에서 작업했다.  
``` javascript
...
router.use((req, res, next) => {
  if (req.cookies.userAlias) {
    req.loginAs = req.cookies.userAlias;
  } else {
    req.loginAs = null;
  }
  next();
});
...
```
위 코드는 현재 브라우저가 가지고 있는 쿠키에서 `userAlias`항목이 있는지 검사해 있다면 req 객체에 `loginAs`프로퍼티를 부여한 뒤 다음 미들웨어로 넘어가는 역할을 한다.  
다음 미들웨어에서 `req.loginAs`값이 존재하면 `view`로 데이터를 전달하고, null이면 전달하지 않는 방법을 이용해 데이터를 보호할 수 있다.  
이를 간단하게 구현한 코드는 다음과 같다.  
``` javascript
router.use((req, res, next) => {
  if (req.loginAs) {
    next();
  } else {
    // 403 Forbidden
    res.status(403).send("unauthenticated");
  }
});
```
만약 다음 미들웨어 함수가 `get`요청을 처리하는 함수라면 브라우저에 해당 쿠키가 없는 사용자는 의도한 화면이 아니라 unauthenticated 메시지를 보게 될 것이다.  

## 보안
이 방식은 보안에 굉장히 취약하다.  
쿠키를 서버에서 만들어 보내기 때문에 Code Inspector에서 관련 소스 코드를 확인할 순 없지만, Storage 탭에서 현재 브라우저가 가지고 있는 쿠키를 모두 확인할 수 있다.  
이 쿠키가 외부 사용자에게 노출되면 현재 사용자의 권한을 적절한 인증 없이 행사할 수 있기 때문에 위험하다.  
또한 데이터베이스에 평문으로 사용자의 이메일 정보와 비밀번호를 저장하는 것 역시 위험하다.  
이러한 취약점을 위한 여러 대비책들이 있다.  
이들을 추가해 안전한 서비스를 제공할 수 있도록 하자.  

[cookie-parser 모듈]: https://github.com/RudyPark3091/nodejs-crud/blob/master/_doc/express-cookie-parser.md
