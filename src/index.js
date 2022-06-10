// 防抖
const debounce = {
    inserted: function (el, binding) {
      let timer
      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          binding.value()
        }, 1000)
      })
    },
  }

// 自定义指令
const directives={
    debounce
}
export default {
    install(Vue) {
      Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
      })
    },
  }
  