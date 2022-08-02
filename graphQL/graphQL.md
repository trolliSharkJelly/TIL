# GraphQL
- Graph + Query Language
- 페이스북에서 개발한 오픈소스 쿼리 언어 
- Server API를 통해 정보를 주고 받는 Query Language
- 트리 구조로 쿼리 결과를 받기 위해 그래프를 탐색하는 쿼리 언어

## GraphQL 특징
- HTTP를 통해 API 서버로 요청을 보내고 JSON 형식으로 응답을 받는다
- GraphQL은 서버 개발자가 작성한 각 필드에 대응하는 resolver 함수로 각 필드의 데이터를 조회할 수 있다.

## REST API vs GraphQL
||REST API|Graph|
|---|---|---|
|Resource에 대한 형태 정의와 데이터 요청 방법|연결|분리|
|Resource의 크기와 형태의 결정 주체|서버|정보만 정의하고 크기와 형태는 클라이언트 단에서 요청 시 결정|
|Resource에 접근|접근 시 여러 번의 요청이 필요|한 번의 요청에서 여러 Resource에 접근 가능|
|Resource와 작업 유형|URI는 Resource를 나타내고 Method가 작업의 유형을 나타낸다.|Schema가 Resource를 나타내고 Query, Mutation 타입이 작업의 유형을 나타낸다|
|요청 처리 방식|해당 엔드포인트에 정의된 핸들링 함수를 호출하여 처리|요청 받은 각 필드에 대한 resolver를 호출하여 처리|

## GraphQL의 단점
- REST API에 친숙한 개발자의 경우 많은 러닝 커브가 소요된다.
- REST API 보다 캐싱이 복잡하다
- 고정된 요청과 응답만 필요할 경우 Query로 인해 요청의 크기가 RESTful API보다 커진다.
