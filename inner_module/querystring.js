// WHATWG 방식의 url 대신 기존의 노드 url을 사용할 때, search 부분을 사용하기 쉽게 객체로 만드는 모듈
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// querystring.parse(): url 의 query 부분을 자바스크립트 객체로 분해
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse(): ', query);
/*
    querystring.parse():  [Object: null prototype] {
    page: '3',
    limit: '10',
    category: [ 'nodejs', 'javascript' ]
    }
*/
// querystring.stringify(): 분해된  query 객체를 문자열로 다시 조립
console.log('querystring.stringify(): ', querystring.stringify(query));
    // querystring.stringify():  page=3&limit=10&category=nodejs&category=javascript