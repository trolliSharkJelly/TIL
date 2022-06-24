# JSON

학습 목표
JSON 구조가 재귀 함수를 사용할 수 있는 트리 구조임을 이해할 수 있다.
JSON.stringify 와 JSON.parse 가 serialize, deserialize라는 것을 이해할 수 있다.
JSON.stringify 와 JSON.parse 를 사용하여 자바스크립트 값과 JSON을 넘나들 수 있다.
JSON에 재귀 호출을 사용할 때, 어디에 사용해야 할지 이해할 수 있다.

### JSON이란?

- JavaScript Object Notation의 줄임말
- 클라이언트와 서버간 HTTP 통신을 위한 텍스트 데이터 포맷
- 네트워크를 통해, 아래와 같은 객체 형태의 데이터를 어떻게 서버로 전송할 수 있을까?

```javascript
const message = {
  sender: "hong",
  receiver: "kim",
  message: "오늘 같이 공부 하자",
  createdAt: "2022-06-24 17:50:10",
};
```

###### [코드] 메세지를 담고 있는 객체 message(작은글씨)

위와 같은 데이터를 전송하려면, 메시지를 보내는 발신자와 메시지를 받는 수신자가 같은 프로그램을 사용하거나, 문자열처럼 범용적으로 읽을 수 있는 형태여야 한다.

> 전송 가능한 조건 (transferable condition)  
> 수신자(reciever)와 발신자(sender)가 같은 프로그램을 사용한다.  
> 또는, 문자열처럼 범용적으로 읽을 수 있어야 한다.

String을 사용해 message.toString()나 String(message) 시도 시 [object Object]라는 결과를 리턴한다. 이와 같이 객체를 string으로 타입 변환을 할 경우 객체 내용을 포함하지 않는다.

이 문제를 해결하기 위해 객체를 JSON의 형태로 변환하거나 JSON을 객체의 형태로 변환하는 메서드를 사용할 수 있다.

JSON.stringify : 객체를 JSON 포맷의 문자열로 변환
JSON.parse : JSON 포맷의 문자열을 객체로 변환

```javascript
let jsonMsg = JSON.stringify(message);

console.log(jsonMsg);
// '{"sender":"hong","receiver":"kim","message":"오늘 같이 공부 하자","createdAt":"2022-06-24 17:50:10"}'

console.log(typeof jsonMsg);
// `string`
```

###### [코드] message 객체를 JSON으로 변환하는 메서드 JSON.stringify

JSON.stringify()를 직렬화(serialize)라고 한다.  
JSON으로 변환된 객체의 타입은 문자열이다. 발신자는 객체를 직렬화한 문자열을 누군가에게 보낼 수 있습니다. 그렇다면 수신자는 JSON.stringify와 정반대의 작업을 수행을 하는 메서드 JSON.parse 를 사용하여 문자열 메시지를 객체의 형태로 만들 수 있다.
이러한 과정을 역직렬화(deserialize)라고 한다.

```javascript
let packet = `{"sender":"hong","receiver":"kim","message":"오늘 같이 공부 하자","createdAt":"2022-06-24 17:50:10"}`;
let objMsg = JSON.parse(packet);

console.log(objMsg);
/*
{sender: 'hong', receiver: 'kim', message: '오늘 같이 공부 하자', createdAt: '2022-06-24 17:50:10'}
 */

console.log(typeof obj);
// 'object'
```

### JSON의 기본 규칙

자바스크립트의 객체와 JSON은 비슷해보이지만 서로 다른 규칙이 있다.

|                    | 자바스크립트 객체                                | JSON                                            |
| ------------------ | ------------------------------------------------ | ----------------------------------------------- |
| 키                 | 키는 따옴표 없이 쓸 수 있음 { key : "property" } | 반드시 쌍따옴표를 붙여야 함'{"key":"property"}' |
| 문자열 값          | 작은따옴표도 사용 가능 { "key" : 'property' }    | 반드시 큰따옴표로 감싸야 함'{"key":"property"}' |
| 키와 값 사이 공백  | 사용 불가능{"key":"property"}                    | 사용 가능'{ "key" : 'property' }'               |
| 키-값 쌍 사이 공백 | 사용 가능{ "key":'property', num:1 }             | 사용 불가능'{"key":"property","num":1}'         |
