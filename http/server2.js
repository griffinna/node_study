const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => { // 1. 요청이 들어오면
    try {
        // 2. fs 모듈로 html 파일 read
        const data = await fs.readFile('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);  // 3. data 에 저장된 버퍼를 그대로 클라이언트에 전달
    } catch (err) {
        console.error(err);
        // 에러메시지는 일반 문자열이므로 text/plain 설정
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081..port.. waiting.....');
    });

/* HTTP 상태코드
    - 2XX: 성공 (200: 성공, 201: 작성됨)
    - 3XX: 리다이렉션(다른 페이지로 이동) (301: 영구이동, 302: 임시이동, 304: 수정되지않음 - 요청의 응답으로 캐시 사용함)
    - 4XX: 요청 오류 (400: 잘못된 요렃, 401: 권한없음, 403: 금지됨, 404: 찾을 수 없음)
    - 5XX: 서버 오류 (500: 내부서버오류, 502: 불량 게이트웨이, 503: 서비스를 사용할 수 없음)
*/
