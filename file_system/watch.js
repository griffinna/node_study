// .watch: 파일/폴더의 변경사항을 감시
const fs = require('fs');

fs.watch('./target.txt', (eventType, filename) => {
    console.log(eventType, filename);
    // 파일내용 수정: change target.txt
    // 파일명 변경 또는 파일 삭제: rename target.txt
})