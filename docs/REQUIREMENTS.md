# 우아한테크코스 - level1 - 자동차 경주

### 입출력 구현 목록

- [x] 경주할 자동차 이름 입력 받기
  - [x] 이름은 , 로 구분
  - [x] 이름 길이는 1 ~ 5자 이하만 가능, 아닐 시 에러 출력 후 재입력
  - [x] 중복 이름 입력 시 에러 출력 후 재입력
- [x] 시도할 횟수 입력 받기
  - [x] 1회 이상 가능, 아닐 시 에러 출력 후 재입력
  - [x] 정수 아닐 시 에러 출력 후 재입력
- [x] 실행 결과 횟수만큼 출력
- [x] 최종 우승자 출력
  - [x] 2명 이상일 시 , 로 구분

### 기능 구현 목록

- [x] 게임 초기 정보 입력
  - [x] 자동차 이름
  - [x] 시도 횟수
- [x] 게임 진행 (시도 횟수 만큼 반복)
  - [x] 자동차 당 랜덤 숫자 (0 ~ 9) 발생
  - [x] 랜덤 숫자가 4 이상일 시 자동차 전진
  - [x] 자동차의 현재 위치 저장
- [x] 결과 출력
  - [x] 최종 우승자 판단
  - [x] 최종 우승자 출력

### 테스트 구현 목록

- [x] 자동차 예외처리
  - [x] 5글자 이상
  - [x] 중복 이름
- [x] 시도 횟수 예외처리
  - [x] 정수
  - [x] 양수
