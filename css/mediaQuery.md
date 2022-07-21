# 미디어쿼리
## 미디어 쿼리
CSS2.1부터 미디어 타입으로 단말기 종류에 따라 각각 다른 스타일을 적용시키는 게 가능해졌다.  
다양한 단말기가 웹을 지원하며 웹 화면의 해상도에 따라 유연하게 컨텐츠를 배치하는 것이 중요하다.   
미디어 쿼리는 반응형 웹 디자인의 핵심 부분으로 뷰포트(브라우저 창)의 크기에 따라 서로 다른 디자인을 만들 수 있다.  

## 미디어 쿼리 적용법
미디어 쿼리를 적용하는 방법에는 아래와 같은 방법들이 있다.  

1. `<head>` 태그 안에 `<link>` 태그 작성 후 css파일을 위치시킨다. 미디어 속성으로 조건을 지정하여 해당 조건을 만족할 때만 css파일을 불러오게 된다.
```javascript
<link href="css파일이름.css" media="screnen and (min-width: 400px) and (max-width:1000px): rel="stylesheet" />
```
2. `<head>` 태그 안에 `<style>`태그 작성 후 미디어 쿼리를 작성할 수도 있다.
```javascript
<style type="text/css" media="screen and (min-width): 600px">
  /* css 작성 */
</style>
```  
3. CSS 파일 내에서 직접 미디어 쿼리 작성  

## 미디어 쿼리 구문
```javascript
@media 미디어 타입(조건(너비 및 높이) {
  (CSS 작성)
}

@media screen (max-width: 1200px) {
  body {
    color: black;
  }
}
```
미디어 쿼리의 기본적인 구조는 아래와 같다.  
- `미디어 타입` : 코드가 어떤 미디어를 위한 것인지 브라우저에 알려준다.
- 조건(너비 및 높이) : 지정한 너비나 높이를 기준으로 만족되면 스타일이 적용되고, 그렇지 않으면 적용되지 않는다.
- CSS 작성 : 미디어 타입이 매치되고 조건 통과 시 CSS가 적용된다.

### 미디어 타입
- all : 모든 미디어 타입
- print : 프린터
- screen : 컴퓨터 화면
- speech : 스크린 리더  

이 외에도 다양한 타입이 있으며 실무에서는 all, print, screen이 자주 사용되며 그 중에서도 screen이 대부분이다.  
화면을 출력하는 디스플레이가 있는 미디어들은 대개 screen 타입에 속하기 때문에 현실적으로 고려해야 하는 미디어는 전부 여기에 해당하기 때문입니다.

### 조건(너비 및 높이)
반응형 디자인을 만들기 위해 가장 많이 사용하는 기능은 뷰포트 너비이며, 
뷰포트가 특정 너비 이상 또는 이하인 경우 CSS를 적용할 수 있다.

```javascript
@media screen and (width: 500px) {
	* {
		padding: 10px;
	}
}
```
width(혹은 height)는 브라우저의 창 크기에 사용할 수 있다. 
따라서 `min-` 혹은 `max-` 접두사를 붙이게 되면 최소값인지 최대값인지 표시할 수 있다.
```
@media screen and (max-width: 300px) {
    body {
        color: beige;
    }
}
```
예를 들어 뷰포트가 300px 보다 좁은 경우 색을 베이색으로 만들기 위해 max-width 를 사용할 수 있다.

### 방향성
세로 모드인지 가로 모드인지 검사하여 CSS 스타일을 주고 싶은 경우, orientation을 사용할 수 있다.

```javascript
@media (orientation: landscape) {
    body {
        color: purple;
    }
}
```
예를 들어 장치가 가로 방향인 경우, 해당 코드를 통해 본문의 텍스트 색상을 변경할 수 있다.

## 복잡한 미디어 쿼리
반응형 웹을 구축하다 보면 더 복잡한 미디어 쿼리를 활용하고 싶을 때 
미디어 쿼리를 결합하거나, 쿼리 목록을 만드는 식으로 미디어 쿼리를 좀 더 깊이 있게 사용할 수 있다.

### 논리곱(and) 미디어 쿼리
and를 사용해 미디어 기능을 결합할 수 있다.
```javascript
@media screen and (min-width: 1200px) and (orientation: landscape) {
    body {
        background-color: black;
    }
}
```
뷰포트의 너비가 최소 1200픽셀 이상이고 장치가 가로 모드인 조건을 모두 만족해야 배경색이 검은색으로 변경될 수 있다.

### 논리합(or) 미디어 쿼리
콤마로 분리를 한다면 미디어 쿼리의 해당 조건 중 어느 하나를 만족시킬 때 CSS 스타일을 적용할 수 있다.

```javascript
@media screen and (min-width: 500px), screen and (orientation: landscape) {
    body {
        color: blue;
    }
}
```
뷰포트의 넓이가 최소 500px 이상이거나, 장치가 가로 방향인 경우 텍스트는 파란색으로 변경된다.

### 부정(not) 미디어 쿼리
not 연산자를 사용하게 되면 미디어 쿼리의 의미를 반대로 적용시킵니다.

```javascript
@media not all and (orientation: landscape) {
    body {
        color: blue;
    }
}
```
이 예시는 방향이 세로인 경우에만 텍스트가 파란색으로 적용된다.

