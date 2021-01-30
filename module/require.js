console.log('require 가 가장 위에 오지 않아도 됩니다.');

// module.exports 가 최하단에 위치할 필요는 없다.
module.exports = '저를 찾아보세요.';

// require 가 반드시 파일 최상단에 위치할 필요는 없다.
require('./var');

console.log('require.cache 입니다.');
// 한 번 require 한 파일은 require.cache 에 저장되므로 다음번 require 할 때는 새로 불러오지않고 cache 에 있는 것을 사용
// 새로 require 하기를 원한다면 require.cache 속성을 제거 (권장 X)
console.log(require.cache);
/**
 * [Object: null prototype] {
  '/Users/garam/Documents/dev/nodejs/module/require.js': Module {
    id: '.',
    path: '/Users/garam/Documents/dev/nodejs/module',
    exports: '저를 찾아보세요.',
    parent: null,
    filename: '/Users/garam/Documents/dev/nodejs/module/require.js',
    loaded: false,
    children: [ [Module] ],
    paths: [
      '/Users/garam/Documents/dev/nodejs/module/node_modules',
      '/Users/garam/Documents/dev/nodejs/node_modules',
      '/Users/garam/Documents/dev/node_modules',
      '/Users/garam/Documents/node_modules',
      '/Users/garam/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  '/Users/garam/Documents/dev/nodejs/module/var.js': Module {
    id: '/Users/garam/Documents/dev/nodejs/module/var.js',
    path: '/Users/garam/Documents/dev/nodejs/module',
    exports: { odd: '홀수입니다.', even: '짝수입니다.' },
    parent: Module {
      id: '.',
      path: '/Users/garam/Documents/dev/nodejs/module',
      exports: '저를 찾아보세요.',
      parent: null,
      filename: '/Users/garam/Documents/dev/nodejs/module/require.js',
      loaded: false,
      children: [Array],
      paths: [Array]
    },
    filename: '/Users/garam/Documents/dev/nodejs/module/var.js',
    loaded: true,
    children: [],
    paths: [
      '/Users/garam/Documents/dev/nodejs/module/node_modules',
      '/Users/garam/Documents/dev/nodejs/node_modules',
      '/Users/garam/Documents/dev/node_modules',
      '/Users/garam/Documents/node_modules',
      '/Users/garam/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  }
}
 * 
 */
console.log('require.main 입니다.');
console.log(require.main === module);       // true
console.log(require.main.filename);         // /Users/garam/Documents/dev/nodejs/module/require.js