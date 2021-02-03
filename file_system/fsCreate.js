const fs = require('fs').promises;
const constants = require('fs').constants;

// .access(경로, 옵션, 콜백): 폴더나 파일에 접근할 수 있는지 체크
// constants.F_OK: 파일 존재 여부
// constants.R_OK: 읽기 권한 여부
// constants.W_OK: 쓰기 권한 여부
fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK)
    .then(() => {
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err) => {
        if(err.code === 'ENOENT'){  // 파일 폴더가 없을 때의 에러코드
            console.log('폴더 없음');
            // 폴더 생성 메서드
            return fs.mkdir('./folder');
        }
        return Promise.reject(err);
    })
    .then(() => {
        console.log('폴더 만들기 성공');
        // 파일의 아이디를 가져오는 메서드
        // w: 쓰기, r: 읽기, a: 기존 파일에 추가
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('빈 파일 만들기 성공', fd);
        // 파일의 이름을 바꾸는 메서드
        fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(() => {
        console.log('이름 바꾸기 성공');
    })
    .catch((err) => {
        console.error(err);
    });