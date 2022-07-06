# Redux의 구조

## Redux는 다음과 같은 순서로 상태를 관리한다.

1. 상태가 변경되어야 하는 이벤트가 발생하면, 변경될 상태에 대한 정보가 담긴 **Action 객체**가 생성된다.
2. 이 Action 객체는 **Dispatch 함수**의 인자로 전달된다.
3. Dispatch 함수는 Action 객체를 **Reducer 함수**로 전달한다.
4. Reducer 함수는 Action 객체의 값을 확인하고, 그 값에 따라 **전역 상태 저장소 Store**의 상태를 변경한다.
5. 상태가 변경되면, React는 화면을 다시 렌더링한다.
   Redux에서는 Action &rarr; Dispatch &rarr; Reducer &rarr; Store 순으로 데이터가 단방향으로 흐른다.

---

## 예시

### Action

- 어떤 액션을 취할 것인지 정의해 놓은 객체

```javascript
// payload가 필요 없는 경우
{ type: 'INCREASE' }

// payload가 필요한 경우
{ type: 'SET_NUMBER', payload: 10}
```

- `type`은 해당 Action 객체가 어떤 동작을 하는지 명시해주는 역할을 하기 때문에 필수로 지정해줘야 하며, 대문자와 Snake Case로 작성한다.
- `payload`를 작성하면 구체적인 값을 전달한다.
- Action을 직접 작성하기보다 Action 객체를 생성하는 함수를 만들어 사용하는 경우가 많다.

```javascript
const increase = () => {
  return {
    type: "INCREASE",
  };
};

const setNumber = (num) => {
  return {
    type: "SET_NUMBER",
    payload: num,
  };
};
```

### Dispatch

- Reducer로 Action을 전달해주는 **함수**
- Dispatch의 전달인자로 Action 객체가 전달된다.

```javascript
// Action 객체를 직접 사용하는 경우
dispatch({ type: "INCREASE" });
dispatch({ type: "SET_NUMBER", payload: 10 });

// 액션 생성자를 사용하는 경우
dispatch(increase());
dispatch(setNumber(10));
```

### Reducer

- Dispatch에게서 전달받은 Action 객체의 `type`값에 따라 상태를 변경시키는 **함수**

```javascript
const count = 1;

// Reducer를 생성할 때 초기 상태를 인자로 요구한다.
const counterReducer = (state = count, action) {
    // Action 객체의 type 값에 따라 분기하는 switch 조건문
    switch(action.type){
        case 'INCREASE':
            return state++;
        case 'DECREASE':
            return state--;
        case 'SET_NUMBER:
            return action.payload;
        default:
            return state;
    }
}
```

- 이 때 Reducer는 **순수 함수**여야 한다. 외부 요인으로 인해 엉뚱한 값으로 상태가 변경되는 일이 없어야 한다.
- 만약 여러 개의 Reducer를 사용하는 경우 Redux의 combineReducer 메서드를 사용해 하나의 Reducer로 합칠 수 있다.

```javascript
import {combineReducer} from 'redux';

const rootReducer = combineReducer({counterReducer, someReducer, ...});
```

### Store

- 상태가 관리되는 오직 하나뿐인 저장소
- Redux 앱의 state가 저장되는 공간
- 아래와 같이 createStore 메서드를 활용해 Reducer를 연결해서 Store를 생성할 수 있다.

```javascript
import { createStore } from "redux";

const store = createStore(rootReducer);
```

Action, Reducer, Dispatch, Store 개념을 코드로 구성해봤으며 해당 개념을 연결시키기 위해 Redux Hook을 이용한다.

---

## Redux Hook

- React에서 Redux를 사용할 때 활용할 수 있는 Hooks 메서드를 제공

### useSelector()

- 컴포넌트와 state를 연결해서 Redux의 state에 접근할 수 있게 하는 메서드

```javascript
import { useSelector } from "react-redux";

const counter = useSelector((state) => state.counterReducer);

console.log(counter); // 1
```

### useDispatch()

- Action 객체를 Reducer로 전달해주는 메서드

```javascript
import { useDispatch } from "react-redux";

const dispatch = useDispatch();

dispatch(increase()); // 2
dispatch(setNumber(10)); // 10
```

---

## Redux의 세 가지 원칙

1. Single source of truth

- 동일한 데이터는 항상 같은 곳에서 가지고 와야 한다.
- Redux에는 데이터를 저장하는 Store는 단 하나뿐인 것과 연결되는 원칙
- 장점 : 코드 작성 시 상태를 어디에 둘지 고민하지 않아도 된다.

2. State is read-only

- React에서 상태갱신함수로만 상태를 변경할 수 있던 것처럼 Redux의 상태도 직접 변경할 수 없다.
- Action 객체가 있어야만 상태를 변경할 수 있다.

3. Changes are made with pure functions

- state 변경은 순수함수로 작성되어야 하는 Reducer와 연결되는 원칙.

---

### 참고 레퍼런스

- https://www.robinwieruch.de/react-redux-tutorial/
- https://facebook.github.io/flux/docs/in-depth-overview/
