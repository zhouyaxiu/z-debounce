防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次
main.js
`import Zdebounce from 'z-debounce' `
`Vue.use(Zdebounce)`

引用
`<button z-debounce="debounceClick">防抖</button>`

<!-- npm config set registry https://registry.npmjs.org/
npm config set registry https://registry.npm.taobao.org/ -->