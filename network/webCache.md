# Web Cache

## HTTP 헤더와 캐시

클라이언트가 서버에 test.txt 텍스트 파일을 요청하고 서버가 해당 이미지에 대한 응답을 줄 때 HTTP 헤더가 0.5MB, 바디가 1.0MB, 총 1.5MB로 가정해보겠다.

캐시가 없다면 같은 파일을 다시 요청해도 초기 요청과 똑같이 서버는 1.5MB의 응답을 보낸다. 이 경우 파일의 데이터가 변경되지 않더라도 계속 데이터를 새로 다운 받아야 한다.

파일의 용량이 클수록 비용이 커지고 브라우저의 로딩 속도가 느려지며, 클라이언트에게 느린 사용자 경험이 제공될 수 있다.

---

캐시(cache)는 컴퓨터 과학에서 데이터나 값을 미리 복사해 놓은 임시 장소를 가리킨다.
캐시는 캐시 접근 시간보다 원래 데이터를 접근하는 시간이 오래 걸리는 경우나 값을 다시 계산하는 시간을 절약하고 싶은 경우 사용한다.  
캐시에 데이터를 미리 복사한다면 계산이나 접근 시간 없이 더 빠른 속도로 데이터에 접근할 수 있다. 브라우저에 캐시 저장 시 cache-control 속성을 통해 캐시의 유효 시간을 설정할 수 있다.

---

파일 재요청 시 브라우저는 캐시를 우선 조회하며 캐시가 존재하고 유효시간이 지나지 않았다면 해당 캐시에서 데이터를 가져온다.  
캐시를 사용함으로써 캐시 유효 시간 동안 네트워크를 사용하지 않아도 되며 비싼 네트워크 사용량을 줄일 수 있다. 브라우저 로딩 속도가 빨라지며 빠른 사용자 경험을 제공할 수 있다.

---

만약 캐시의 유효시간이 초과된다면,  
클라이언트는 다시 서버에 요청을 하고 유효시간만큼 유효한 파일을 응답 받는다.
이 때 네트워크 다운로드가 다시 발생한다.  
응답 결과를 브라우저가 렌더링하면 브라우저 캐시는 기존 캐시를 지우고 새 캐시로 데이터를 업데이트하며 이 과정에서 캐시 유효 시간이 다시 초기화 된다.
