import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/headers.html.vue"
const data = JSON.parse("{\"path\":\"/chapter11/headers.html\",\"title\":\"headers 模块单元测试\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"测试代码编写\",\"slug\":\"测试代码编写\",\"link\":\"#测试代码编写\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter11/headers.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
