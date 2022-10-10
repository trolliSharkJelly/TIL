![스크린샷 2022-10-10 오후 10 06 51](https://user-images.githubusercontent.com/99730280/194873337-c5d0a4eb-78a1-4036-89d7-67db87dd43c4.png)

## 개발 환경
|환경|도구명|
|-|-|
|개발툴|vscode|
|초기 세팅|vite|
|언어|React|

## 파일 구조
![스크린샷 2022-10-10 오후 10 11 26](https://user-images.githubusercontent.com/99730280/194874181-6b59ddd6-4a4d-4ed9-a121-d750cb7954cb.png)

## 에러 발생 원인
`src/component/atoms` 폴더에 있는 `Nav.jsx`와 `index.js`에 동일한 export 코드가 존재.
- **Nav.jsx의 코드**
```javascript
const Nav = () => {
  return;
};

// 동일한 export 코드
export default Nav;
```

- **index.js의 코드**
```javascript
import Nav from "./Nav";

// 동일한 export 코드
export default Nav;
```

## 해결
`index.js`의 코드 수정
```javascript
// ...(코드 중략)
export default { Nav };
```
