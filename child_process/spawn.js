// .spawn: 새로운 프로세스를 띄우면서 명령어를 실행
const spawn = require('child_process').spawn;

// 세번째 인수로 {shell: true} 를 제공하면 exec 처럼 셸을 실행해서 명령어를 수행
var process = spawn('python', ['test.py']);

process.stdout.on('data', function(data){
    console.log(data.toString());   // hello python
});

process.stderr.on('data', function(date){
    console.error(date.toString());
});