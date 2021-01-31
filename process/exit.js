let i = 1;
setInterval(() => {
    if(i == 5){
        console.log('종료!');
        // 인수로 코드 번호를 줄 수 있다.
        // 0: 정상종료 (default)
        // 1: 비정상종료
        process.exit();
    }
    console.log(i);
    i += 1;
}, 1000);