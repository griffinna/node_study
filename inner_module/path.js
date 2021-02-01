const path = require('path');

const string = __filename;

// 경로구분자: window(\) POSIX(/)
console.log('path.sep: ', path.sep);
// 환경 변수 구분자 window(;) POSIX(:)
console.log('path.delimiter: ', path.delimiter);
console.log('--------------------------------------');
console.log('path.dirname(): ', path.dirname(string));  // 파일이 위치한 폴더 경로
console.log('path.extname(): ', path.extname(string));  // 파일 확장자
console.log('path.basename(): ', path.basename(string));    // 파일의 이름(확장자 포함)
console.log('path.basename - extname: ', path.basename(string, path.extname(string)));  // 파일의 이름(확장자 제외)
console.log('--------------------------------------');
console.log('path.parse(): ', path.parse(string));  // 파일경로를 root, dir, base, ext, name 으로 분리
/**
 * path.parse():  {
    root: '/',
    dir: '/Users/garam/Documents/dev/nodejs/inner_module',
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }
 */
// path.parse() 한 객체를 파일 경로로 합침
console.log('path.format(): ', path.format({
    dir: '/Users/garam/Documents/dev/nodejs/inner_module',
    name: 'path',
    ext: '.js'
}));
// \나 / 를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log('path.normalize(): ', path.normalize('C:\\Users\\zerocho\\path.js'));
console.log('--------------------------------------');
console.log('path.isAbsolute(C:\\): ', path.isAbsolute('C:\\'));    // 절대경로 여부
console.log('path.isAbsolute(./home)', path.isAbsolute('./home'));  // 절대경로 여부
console.log('--------------------------------------');  
// 경로를 두개 넣으면 첫번째 경로에서 두번째 경로로 가는 방법을 알림 
console.log('path.relative(): ', path.relative('/Users/garam/Documents/dev/nodejs/inner_module/path.js', '/Users/garam/Documents/')); // path.relative():  ../../../..
// 여러 인수를 넣으면 하나의 경로로 합친다. 
/**
 * join 과 resolve
 *  join: /를 만나면 상대경로로 처리
 *      path.join('/a','/b','c'); >> /a/b/c
 *  resolve: /를 만나면 절대 경로로 인식해서 앞의 경로를 무시
 *      path.resolve('/a','/b','c'); >> /b/c
 */
console.log('path.join(): ', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));  // path.join():  /Users/garam/Documents/dev/users/zerocho
console.log('path.resolve(): ', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));   // path.resolve():  /zerocho

