// .from(): 문자열을 버퍼로 바꿀 수 있다.
const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');

console.log('from(): ', buffer);
    // from():  <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b3 b4 ec 84 b8 ec 9a 94 2e>
console.log('length: ', buffer.length);     // length:  33
console.log('toString(): ', buffer.toString()); // toString():  저를 버퍼로 바꿔보세요.

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
// .concat(): 배열 안에 든 버퍼들을 하나로 합친다.
const buffer2 = Buffer.concat(array);
console.log('concat(): ', buffer2.toString());  // concat():  띄엄 띄엄 띄어쓰기

// .alloc(): 빈 버퍼를 생성. 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성된다.
const buffer3 = Buffer.alloc(5);
console.log('alloc(): ', buffer3)   // alloc():  <Buffer 00 00 00 00 00>