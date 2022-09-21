## useState 개념을 잘못 이해하고 사용했다.

예를 들어 input 태그에 입력된 value를 서버로 전송해야 하는 코드를 작성해야 한다고 가정하자.
예전의 나는 아래와 같이 코드를 작성했다.
오늘 팀원분과 프로젝트를 진행하며 얘기를 나눈 결과, state와 useState에 대한 개념이 명확하지 않다는 것을 깨달았다.

```javascript
const Test = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        // 특정 데이터를 서버로 보내는 코드
    }

    return (
        <input onChange={handleChange}/>
        <button onClick={handleClick}>전송</button>
    )
}

```

## useState란?

먼저 state란 컴포넌트 내부에서 변할 수 있는 값이다.  
실제 애플리케이션을 예를 들면 토글 스위치의 버튼과 쇼핑몰 장바구니의 체크박스와 같은 것이다.
여기에서 state는 토글 스위치가 on인지, off인지와 장바구니의 체크박스 상태가 체크가 되었는지, 체크가 해제되었는지이다.

그렇다면, React의 공식문서에서 말하는 useState 아래와 같다.

```
useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공합니다.
```

useState를 이용해 state를 변경하면 해당 컴포넌트는 화면에 다시 렌더링 되며, state 값이 업데이트 된다.

### 나의 코드 되짚어보기

우선 해당 코드의 작성 목적은 특정 값을 서버에 전송하기 위함이다.  
input의 value가 useState로 사용된다면 키보드를 타이핑할 때마다 value 값이 변경되어 화면이 리렌더링 된다.  
화면이 너무 자주 렌더링 되는것은 불필요한 동작이며, 코드의 작성 목적과 맞지 않다.
그래서 아래와 같이 코드를 변경해보았다.
useState와 관련된 코드를 제거하고, 데이터를 담을 변수 하나만 선언하는 것이다.
이와 같이 코드를 리팩토링했을 때 잦은 렌더링과 같은 동작을 예방할 수 있고, 코드의 양도 줄어들어 깔끔해보인다.

```javascript
const Test = () => {
    let test = "";

    const handleChange = () => {
        test = e.target.value;
    }

    const handleClick = () => {
        // 특정 데이터를 서버로 보내는 코드
    }

    return (
        <input onChange={handleChange}/>
        <button onClick={handleClick}>전송</button>
    )
```

## 느낀점

어중간하게 아는건 알지 못하는 것과 같다.
잘 알지 못하고 작성한 코드는 보기 좋은 떡과 다름없다.  
지금은 프로젝트 기간이라 정신이 없을지라도 코드에 쓰여진 개념들을 훑어보기보다는 조금이라도 더 자세히 들여보는 시간을 가져야겠다.
