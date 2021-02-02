// child_process: 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈
// 모듈을 통해 다른 언어의 코드를 실행하고 결과를 리턴받을 수 있음
// .exec: 셸을 실행해서 명령어로 수행
const exec = require('child_process').exec;

var process = exec('ls');

process.stdout.on('data', function(data){   // 표준출력
    console.log(data.toString());   // exec.js
}); // 실행 결과

process.stderr.on('data', function(data){   // 표준에러
    console.error(data.toString());
}); // 실행 에러