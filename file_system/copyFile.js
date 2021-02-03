const fs = require('fs').promises;

// .copyFile(복사할 파일, 복사될 경로, 복사 후 실행 될 콜백 함수)
fs.copyFile('./buffer_stream/readme4.txt', 'writeme4.txt')
    .then(() => {
        console.log('복사 완료');
    })
    .catch((err) => {
        console.error(err);
    })