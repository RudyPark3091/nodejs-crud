# XMLHttpRequest 객체
## 개요
XMLHttpRequest 객체는 서버와 HTTP 프로토콜 기반 통신을 하기위해 사용된다.   
XMLHttpRequest 객체는 현재 웹페이지에서 새로고침 없이 서버에서 데이터를 받아올 수 있게 한다.   
서버에 요청을 보내는 방법은 여러 가지가 있지만 XMLHttpRequest 는 Ajax 프로그래밍에 주로 사용되는 방법이다.   
   
## 사용
``` javascript
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readystate === 4 && xhr.status === 200) {
    // do something
  }
}
xhr.open(METHOD, TARGET_URL);
xhr.send(DATA);
```
XMLHttpRequest 객체의 사용은 크게 세가지로 나뉜다.   
   
첫번째는 객체를 생성하고 목표 주소와 연결을 'open'하는 과정이다.   
`open`메소드에는 required parameter 두개가 존재한다.   
첫번째 paramter는 METHOD로, HTTP 프로토콜 중 어떤 메소드(GET, POST 등)로 통신할것인지를 의미한다.   
두번째 parameter는 TARGET_URL로, 통신할 서버의 url을 의미한다.   
이후에 optional parameter들이 존재하는데, 이는 mdn의 [관련문서]에서 알아보는 것이 나을것이다.   
   
두번째는 XMLHttpRequest 객체가 서버로부터 응답을 받았을 때 할 동작을 정의해주는 과정이다.   
이는 객체 내부의 `readystate` property와 관련된다.   
각 state는 0에서 4 까지의 정수로 표현되는데, 각각이 의미하는 바는 다음과 같다   
```
0 (UNSENT) : 객체가 생성되었지만 open()이 호출되지 않음
1 (OPENED) : open()이 호출된 상태
2 (HEADERS_RECEIVED) : send()가 호출됨, 서버가 request를 받은 상태
3 (LOADING) : 서버에서 request를 처리하고 있는 상태
4 (DONE) : request 처리가 완료된 상태, 서버에서 응답할 준비가 완료됨
```
readystate 는 정수로 표현되지만, 객체의 멤버상수와 같이 사용할 수 있다.   
다시말해, 다음과 같이 사용할 수 있다   
``` javascript
XMLHttpRequest.UNSENT === 0; // true
XMLHttpRequest.OPENED === 1; // true
XMLHttpRequest.HEADERS_RECEIVED === 2; // true
XMLHttpRequest.LOADING === 3; // true
XMLHttpRequest.DONE === 4; // true
```
위의 코드와 같이 readystate가 변하면, readystatechange 이벤트가 발생한다.   
선언한 XMLHttpRequest객체에 이를 감지하는 eventListener를 등록하여, 서버로부터 response를 받으면 어떤 동작을 하도록 한다.   
   
세번째는 서버에 request를 보내는 과정이다.   
이 과정에 `send`메소드를 사용하는데, request.body로 send메소드의 parameter가 들어가게 된다.   
이때 body에는 Document, Blob, BufferSource, FormData 등 다양한 형태의 데이터가 들어갈 수 있다.   
body에 들어갈 내용에 따라 request header에 `Content-type`을 다음과 같이 설정하는데, 일반적으로 이미지 데이터가 아닌 이상 json 데이터를 전송한다.   
``` javascript
xhr.setRequestHeader('Content-type', 'application/json');
```
   
## Reference
MDN XMLHttpRequest 문서: https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest   
Using XMLHttpRequest 문서 : https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest   



[관련문서]: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open