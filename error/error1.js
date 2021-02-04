setInterval(() => {
    console.log('start!');
    try{
        // error 가 발생 할 것 같은 부분을 try/catch 로 감싼다
        // error 를 throw 하면 프로세스가 멈추기때문에 반드시 try/catch 로 잡아야한다.
        throw new Error('broken1111');
    }catch(err){
        console.error(err);
    }
}, 1000);