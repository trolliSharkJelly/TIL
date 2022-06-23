/*
[ 콜백 함수 ]
- 다른 함수의 argument로 전달되는 함수
- 콜백 함수는 caller 함수의 필요에 따라 즉시 실행(synchronously)할 수 도 있고
  나중에 실행(asynchronously)할 수도 있다.
*/

// 콜백 함수 : callback
function callback() {
  console.log("I am callback");
}

function caller(func) {
  func();
}

// callback 함수는 caller의 argument로 전달되어졌다.
caller(callback);
/*
<결과>
'I am callback'
*/

// [ 콜백 함수 1. 반복 실행하는 함수(iterator) ]
const arr = [1, 2, 3];
arr.forEach((value) => {
  console.log(value);
});

// [ 콜백 함수 2. 이벤트에 따른 함수(event handler) ]
document.addEventListener("click", () => {
  console.log("클릭 이벤트 발생 시 콜백 함수 호출");
});

// [ 콜백 함수 작성 시 주의점 ]
function redColor() {
  h1.style.color = "red";
}

h1.addEventListener("click", colorRed);

h1.addEventListener("click", () => {
  colorRed();
});

h1.addEventListener("click", colorRed.bind());

// 잘못된 사용 : 해당 코드 작성 시 함수가 연결되는 것이 아니라 '실행'된다.
h1.addEventListener("click", colorRed());

/*
[ blocking vs non-blocking ]

blocking
- 요청에 대한 결과가 동시에 일어난다(synchronous)
- ex) 손님 1이 음식을 주문한다 -> 직원이 접수를 받고 음식을 만든다 -> 음식이 완성되면 손님 1을 부른다 -> 음식을 손님 1에게 전달한다.
      손님 2가 음식을 주문한다 -> 직원이 접수를 받고 음식을 만든다 -> 음식이 완성되면 손님 2를 부른다 -> 음식을 손님 2에게 전달한다.

non-blocking
- 요청에 대한 결과가 동시에 일어나지 않는다(asynchronous)
- ex) 손님 1이 음식을 주문한다 -> ( 직원이 접수를 받고 음식을 만든다 -> (callback)음식이 완성되면(이벤트) 손님 1을 부른다 -> 음식을 손님 1에게 전달한다. ) 
      손님 2이 음식을 주문한다 -> ( 직원이 접수를 받고 음식을 만든다 -> 음식이 완성되면 손님 2를 부른다 -> 음식을 손님 2에게 전달한다. ) 

*/

/*
[ 비동기의 주요 사례 ]
1. 이벤트 핸들러
2. 타이머
    - 타이머 API
    - 페이지 로딩(DOMContentLoaded)
3. 서버에 자원 요청 및 응답
    - fecth API
    - AJAX(XHR)
*/
