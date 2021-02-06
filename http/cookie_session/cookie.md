# Cookie 속성
1. 쿠키명=쿠키값
>기본적인 쿠키의 값
```javascript
mycookie=test
```
2. Expires=날짜
>만료 기한이 지나면 쿠키가 제거  
default: 클라이언트가 종료될 때까지
```javascript
const expires = new Date();
// 쿠키 유효시간을 현재시간 + 5분으로 설정
expires.setMinutes(expires.getMinutes() + 5);
'Set-Cookie': `Expires=${expires.toGMTString()};`
```
3. Max-age=초
>Expires 와 비슷하지만 날짜 대신 초를 입력 가능  
해당 초가 지나면 쿠키가 제거  
Expires 보다 우선
4. Domain=도메인명
>쿠키가 전송될 도메인을 특정할 수 있음  
default: 현재 도메인
5. Path=URL
>쿠키가 전송될 URL을 특정할 수 있음  
default: /  (모든 URL 에서 쿠키를 전송할 수 있음)
6. Secure
> HTTP일 경우에만 쿠키가 전송됨
7. HttpOnly
> 설정 시 자바스크립트에서 쿠키에 접근 불가능  
쿠키 조작을 방지하기 위해 설정하는 것이 좋음