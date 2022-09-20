## 문제의 원인 : props.children을 잘못 사용했다.
프로젝트 진행 도중 아래와 같이 Test 컴포넌트에 하위 컴포넌트를 props로 전달하려 했으나 전달하는 컴포넌트들이 화면에 렌더링 되지 않았다.
```javascript
const Test = ({className}, props) => {
  return <Container className={className}>{props.children}</Container>
}
```

같은 프론트 팀원분께 문제 상황에 대해 말씀드리니 아래와 같이 코드를 변경해보라고 하셨다.
```javascript
const Test = ({className, children}) => {
  return <Container className={className}>{children}</Container>
}
```

팀원분은 props와 구조분해에 대해 설명을 해주셨지만 머릿속에 잘 남지 않아 react의 props에 대해 다시 복습하는 시간을 가져보았다.

## props란?
리액트 공식문서에 따르면 props는 다음과 같다.
```javascript
const element = <Welcome name="Sara"/>
// React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달합니다. 
// 이 객체를 "props"라고 합니다.
```
다음은 페이지에 "Hello, Sara"를 렌더링하는 예시이며, 다음과 같은 일들이 일어난다.
```javascript
function welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root');
const element = <Welcome name="Sara" />;
root.render(element);
```

1. <Welcome name="Sara" /> 엘리먼트로 root.render()를 호출한다.
2. React는 {name: 'Sara'}를 props로 하여 Welcome 컴포넌트를 호출한다.
3. Welcome 컴포넌트는 결과적으로 `<h1>Hello, Sara</h1>` 엘리먼트를 반환한다.
4. ReactDOM은 `<h1>Hello, Sara</h1>` 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트한다.

## 문제의 코드 다시 짚어보기
리액트의 props 개념을 토대로 문제 코드를 다시 봤을 때 아래의 코드는 props의 구조분해할당과 props가 공존하는 코드임을 알 수 있다.
```javascript
const Test = ({className}, props) => {
  return <Container className={className}>{props.children}</Container>
}
```
console.log()로 className과 props가 어떤 값인지 알아봤을 때, className은 전달이 되지만 props는 전달이 되지 않는 것을 확인할 수 있다.

## 느낀점
코드 작성을 하다 겪는 에러는 props와 같은 기본적인 개념에서 나온다.  
프로젝트를 하며 화면을 완성하고 서버와 통신하는 코드를 작성하는 것에 초점이 맞춰져 있었는데  
시간을 내서라도 리액트에 대한 개념을 복습하는 시간을 가져야겠다.  
