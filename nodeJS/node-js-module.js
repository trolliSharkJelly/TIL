/*
1. Node.js 내장 모듈 사용하기
    - Node.js 내장 모듈 목록 알아보기
    - fileSystem 모듈
    - Node.js에서 모듈 불러오기
    - 3rd-party 모듈 불러오기

2. Node.js 공식문서 가이드 (fs.readFile을 통해 알아보기)
*/

/*
[ 1. Node.js 내장 모듈 사용하기 ]
ㅇ Node.js 내장 모듈 목록은 아래와 같은 루트를 통해 찾을 수 있습니다.
nodejs.org --> DOCS --> 좌측 v16.15.0 API (버전별로 숫자가 상이할 수 있음)
*/

/*
ㅇ 파일 시스템 모듈은 파일을 읽거나 저장하는 기능을 구현할 수 있도록 돕습니다. 
파일을 읽을 때는 readFile, 파일을 저장할 때는 wirteFile을 사용하면 됩니다.
*/

/*
ㅇ 모든 모듈은 "모듈을 사용하기 위해 불러오는 과정"이 필요합니다.
브라우저에서 다른 파일을 불러올 땐 <script> 태그를 사용합니다.
( === HTML에서 Javascript 파일 불러오기)
*/

<script src="불러오고 싶은 파일"></script>;

/*
ㅇ Node.js에서는 JavaScript 코드 최상단에 require 구문을 이용하여 모듈을 불러옵니다.
*/
const fs = require("fs"); // 파일 시스템 모듈을 불러옵니다
const dns = require("dns"); // DNS 모듈을 불러옵니다

/*
ㅇ 3rd-party 모듈을 불러올 수도 있습니다.
3rd-party 모듈이란 해당 프로그래밍 언어에서 공식적으로 지원하는 모듈이 아닌 외부 모듈을 말합니다.
예를 들어 Node.js의 공식문서에 없는 underscore가 있습니다.

underscore 모듈을 설치하고 실행하는 방법은 아래와 같습니다
1. 터미널에서 underscore 설치 : npm install underscore
2. 자바스크립트에서 underscore 사용 : const _ = require('underscore');
*/

/*
[ 2. Node.js 공식 문서 가이드 ]
22.05.30 현재 Node.js 16.x 버전을 기준으로 readFile()을 알아봅니다.
https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_fs_readfile_path_options_callback


fs.readFile(path[, options], callback)
● path <string> | <Buffer> | <URL> | <integer> filename or file descriptor
● options <Object> | <string>
    ○ encoding <string> | <null> Default: null
    ○ flag <string> See support of file system flags. Default: 'r'.
    ○ signal <AbortSignal> allows aborting an in-progress readFile
● callback <Function>
    ○ err <Error> | <AggregateError>
    ○ data <string> | <Buffer>
*/

/*
fs.readFile()은 비동기적으로 파일 내용 전체를 읽습니다.
fs.readFile()은 3개의 인자를 받습니다.
● path : 불러올 파일의 위치(경로)이며 String, Buffer, URL, interger 타입을 사용할 수 있습니다.

예시) test/myfile을 불러오기
*/
const fs = require("fs"); // 우선 fileSystem 모듈을 불러옵니다.
fs.readFile("test/myfile"); // 첫 번째 인자(path)엔 파일의 경로를 작성합니다.

/*
● [, option] : 가지고 올 데이터의 인코딩 방식입니다. 생략이 가능하지만 주로 utf-8을 적습니다. String, Buffer를 사용할 수 있습니다.
*/
/*
예시) option에 "문자열"을 전달한 경우
*/
fs.readFile("test/myfile", "utf8");
/*
에시) option에 "객체"를 전달한 경우
*/
let options = {
  encoding: "utf8", // 인코딩 방식은 utf-8로 합니다.
  flag: "r", // 파일을 읽기 위해 엽니다
};
fs.readFile("test/myfile", options);

/*
● callback : 파일을 읽고 난 후 비동기적으로 실행되는 함수입니다.
두 개의 인수 err과 data가 전달되며, data는 파일의 내용입니다.
에러가 발생하지 않으면 err가 null이 되고 data에 문자열이나 Buffer라는 객체가 전달됩니다.
인코딩이 지정되지 않을 시 Buffer가 반환됩니다. 
*/

/*
아래 코드를 이용해서 테스트를 진행해봅니다.
1) test.txt 파일 생성하기
2) 코드 그대로 실행 후 console.log() 결과 보기
3) readFile의 매개변수인 utf8 제거 후 console.log() 결과 보기
4) readFile의 매개변수인 path의 파일 경로를 틀리게 작성 후 console.log() 결과 보기
*/
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw error;
  console.log(data);
});
