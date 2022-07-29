# 코드 분할
웹 서비스 배포 시 많은 코드들이 하나의 번들로 묶인다.  
서비스가 가볍다면 문제가 되지 않겠지만, 서비스의 덩치가 크고 코드 및 데이터의 양이 많을 경우 
브라우저 JavaScript 엔진이 해석해야 하는 JavaScript 코드 양이 많아지며, 성능에도 문제가 발생할 수 있다.  
번들이 거대해지는 것을 방지하기 위한 좋은 해결방법은 번들을 나누는 것이다.  
즉, 코드 분할은 사용자에게 현재 불필요한 코드, 중복되는 코드 없이 
적절한 사이즈의 코드가 적절한 타이밍에 동적으로 로드되도록 하는 것이다.

# React에서의 코드 분할
React는 SPA(Single-Page-Application)인데, 
사용하지 않는 모든 컴포넌트까지 한 번에 불러오기 때문에 첫 화면이 렌더링 될때까지의 시간이 오래걸린다.  
그래서 사용하지 않는 컴포넌트는 나중에 불러오기 위해 코드 분할 개념을 도입했다.  
  
React에서 코드 분할 방법은 dynamic import(동적 불러오기)를 사용한다.  
이전에는 파일의 최상단에서 `import`를 이용해 사용하려는 파일 또는 라이브러리를 불러왔다.  
이를 static import라고 한다.  

```javascript
import component1 from "./component";

form.addEventListener("submit", e => {
 e.preventDefault();
 anotherFunction();
});

const anotherFunction = () => {
  // 코드 중간에 불러온 파일 사용하기
}
``` 

항상 `import`는 문서의 상단에 위치했고, 블록문 안에 위치할 수 없는 제약이 있었다.  
왜냐하면 번들링 시 코드 구조를 분석해 모듈을 한 데 모으고 사용하지 않는 모듈은 제거하는 등의 작업을 하는데, 
코드 구조가 간단하고 고정이 되어 있을 때에야만 이 작업이 가능해지기 때문이다.  
그러나 이제는 컴파일할 스크립트양을 최소화 시키기 위해 dynamic import 구문을 지원한다.  

```javascript
  form.addEventListener("submit", e => {
    e.preventDefault();
    // dynamic import는 이런 식으로 코드 중간에 불러올 수 있다.
    import("component.component1")
      .then(res => res.default)
      .then(anotherFunction())
      .catch(handleError());
    
    const anotherFunction = () => {
      // component를 여기서 사용한다.
    }
  })
```
dynamic import 사용 시 불러온 `component`가 다른 곳에서 사용되지 않은 경우, 
사용자가 form을 통한 양식을 제출한 경우만 가져올 수 있다.  
dynamic import는 `then`함수를 사용해 필요한 코드만 가져오며 
가져온 코드에 대한 모든 호출은 함수 내부에만 있어야 한다. 
해당 방식으로 번들링 시 분할된 코드를 지연 로딩시키거나 요청 시에 로딩할 수 있다.
dynamic import는  `React.lazy`와 사용할 수 있다.

#### 참고 사이트
- https://hwani.dev/react-real-code-splitting/
