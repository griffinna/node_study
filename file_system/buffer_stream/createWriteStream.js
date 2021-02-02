const fs = require('fs');

// 쓰기 스트림 생성: .createWriteStream(출력 파일 명, 옵션)
const writeStream = fs.createWriteStream('./writeme2.txt');
// 파일 쓰기 종료시 콜백함수 호출
writeStream.on('finish', () => {
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
// 파일 쓰기 종료 => finish 이벤트 발생
writeStream.end();