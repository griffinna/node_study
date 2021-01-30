/**
 * ES2015 모듈 스타일
 * 
 * require => import
 * module.exports => export default
 * package.json 내 type: "module" 속성 넣은 후 mjs 확장자 사용가능
 */
import {odd, even} from './var';

function checkOddOrEven(num){
    if(num % 2) {
        return odd;
    }
    return even;
}

export default checkOddOrEven;