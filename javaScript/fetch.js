/*
웹 페이지에는 실시간으로 변하는 정보와 고정적으로 변하지 않는 정보가 있습니다.
이 중 최신 뉴스나 날씨 정보는 동적으로 데이터를 받아야 하는 정보입니다.

이 때 많은 웹사이트에서는 해당 정보를 업데이트 하기 위해 요청 API를 사용합니다. 
그 중 대표적인 fetch API를 이용해 해당 정보를 원격 URL로부터 불러올 수 있습니다.

fetch 함수는 서버와 상호작용할 때 사용합니다.
fecth 함수는 XMLHttpRequest 객체보다 사용버이 간단하고, 프로미스를 지원하기 때문에 콜백 패턴의 단점에서 자유롭습니다. 
*/

/*
fetch 함수에는 HTTP 요청을 전송할 url, HTTP 요청 메소드, HTTP 요청 헤더, 페이로드 등을 설정한 객체를 전달합니다.
*/
const promise = fetch(url [, options]);

/*
fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 promise 객체를 반환합니다.
(예시) fetch 함수로 GET 요청 전송하기
*/
let url = "url";

fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

