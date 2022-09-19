# 아토믹 패턴과 props.children
프리 프로젝트에서 컴포넌트를 재사용하지 못했던 경험으로 메인 프로젝트엔 아토믹 패턴을 적용했다.
아토믹 패턴이 생소하고 처음 적용하다보니 생각지 못한 문제들이 발생했고, 이를 해결하는 과정을 공유한다.

Atoms 단위의 A 컴포넌트와 B 컴포넌트가 있다.  
molecules 단위에서 해당 컴포넌트를 결합하여 아래와 같이 구성하고 싶다.  
```javascript
<A>
	<B/>
</A>
```

그 결과 화면에는 A 컴포넌트만 렌더링이 되었다.  
같은 프론트 팀원분은 리액트의 공식문서를 참고하여 A 컴포넌트에 prop으로 B 컴포넌트를 전달하는 등 여러 방법으로 문제를 해결하려 하셨다.  
그렇다면 CSS까지 적용해야 하는 경우 컴포넌트를 전달할 때 className을 prop으로 전달해야하는가에 대한 고민도 따라왔다.  
방법을 찾지 못해 스터디원분들께 문제 현상에 대해 물어본 결과 props.children을 이용하면 된다고 하셨다.  
```javascript
// A 컴포넌트 코드
const A = ({props}) => {
	return <AContainer>{props.children}</AContainer>
}

// molecule 단위 코드
const Sum = () => {
	return (
		<A>
			<B/>
		</A>
	)
}
```

공식문서에서 props.children은 컴포넌트의 여는 태그와 닫는 태그 사이의 내용을 포함한다고 한다.  
stackoverflow를 참고했을 때,props.children은 React가 Layout 구성 요소 사이에 무엇을 넣어도 렌더링한다는 것을 의미한다고 한다.
하마터면 불필요하게 컴포넌트를 props로 전달하여 코드가 더 복잡해질뻔 했다.
