console.log('require 가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache 입니다.');
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