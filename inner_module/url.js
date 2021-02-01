const url = require('url');

const { URL } = url;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL(): ', myURL);
console.log('url.format(): ', url.format(myURL));
/* WHATWG url (username, password, origin, searchParam 존재)
    new URL():  URL {
    href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor',
    origin: 'http://www.gilbut.co.kr',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'www.gilbut.co.kr',
    hostname: 'www.gilbut.co.kr',
    port: '',
    pathname: '/book/bookList.aspx',
    search: '?sercate1=001001000',
    searchParams: URLSearchParams { 'sercate1' => '001001000' },
    hash: '#anchor'
    }
    
    ** host 없이 pathname 부분만 오는 경우에는 WHATWG 사용 불가능
*/
console.log('--------------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse(): ', parsedUrl);
/* 기존 url (username, password >> auth, searchParams >> query)
    url.parse():  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.gilbut.co.kr',
    port: null,
    hostname: 'www.gilbut.co.kr',
    hash: '#anchor',
    search: '?sercate1=001001000',
    query: 'sercate1=001001000',
    pathname: '/book/bookList.aspx',
    path: '/book/bookList.aspx?sercate1=001001000',
    href: 'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'
    }
*/
console.log('url.format(): ', url.format(parsedUrl));