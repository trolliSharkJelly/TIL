/*
[ 일급객체 ]
- 대표적인 예 : 함수
- 특징 1) 변수에 할당할 수 있다.
- 특징 2) 다른 함수의 전달인자로 전달될 수 있다.
- 특징 3) 다른 함수의 결과로서 리턴할 수 있다.
*/

// 예시) 변수에 함수 할당하기
// --> greeting 변수에 함수를 할당
const greeting = (name) => {
  return `Hello, ${name}`;
};

// 예시) 다른 함수의 전달인자로 함수를 전달하기
// --> sayHello에 함수를 전달인자로 전달
const sayHello = (func, name) => {
  return `${func(name)}! nice to meet you`;
};

// 예시) 다른 함수의 결과로서 함수 리턴하기
//--> square 함수는 num_1을 num_2만큼 제곱하는 함수를 리턴
const square = (num_1) => {
  return function (num_2) {
    return num_1 ** num_2;
  };
};

// 3의 3제곱을 리턴
console.log(square(3)(3));
// 3의 5제곱을 리턴
console.log(square(3)(5));

/*
[ 콜백 함수 ]
- 다른 함수(caller)의 전달인자(argument)로 전달되는 함수

[ 고차 함수 ]
- 함수를 전달인자(argument)로 받을 수 있고
  함수를 리턴할 수 있는 함수
- 콜백 함수를 전달 받은 고차 함수(caller)는 함수 내부에서 이 콜백 함수를 호출 할 수 있고, 조건에 따라 콜백 함수의 실행 여부를 결정할 수 있다 
- 대표적인 고차함수로는 forEach(), map(), fileter(), reduce() 등이 있다.
*/

/*
Array.prototype.forEach()

- 설명 : 주어진 함수를 배열 요소에 대해 실행한다
- 구문 : arr.forEach(callback(currentValue[index,[, array]])[. thisArg])

*/

const array1 = [a, b, c];
array1.forEach((el) => console.log(el));

/*
<결과>
'a'
'b'
'c'
*/
