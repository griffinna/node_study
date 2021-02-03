const fs = require('fs').promises;

// .readdir(경로, 콜백): 폴더 안의 내용물을 확인할 수 있음 (배열 안에 내부 파일과 폴더명이 나온다) 
fs.readdir('./folder')
    .then((dir) => {
        console.log('폴더 내용 확인', dir);         // 폴더 내용 확인 [ 'newfile.js' ]
        // .unlink: 파일을 지울 수 있음 (파일이 없다면 에러가 발생하므로 먼저 파일이 있는지 확인 필요)
        return fs.unlink('./folder/newFile.js');
        /* 파일이 없을때 삭제 시도
        [Error: ENOENT: no such file or directory, scandir './folder'] {
            errno: -2,
            code: 'ENOENT',
            syscall: 'scandir',
            path: './folder'
            }
        */
    })
    .then(() => {
        console.log('파일 삭제 성공');
        // .rmdir: 폴더를 지울 수 있음 (폴더 안에 파일이 있다면 에러가 발생하므로 먼저 내부 파일을 모두 지우고 호출)
        return fs.rmdir('./folder');
    })
    .then(() => {
        console.log('폴더 삭제 성공');
    })
    .catch((err) => {
        console.error(err);
    })