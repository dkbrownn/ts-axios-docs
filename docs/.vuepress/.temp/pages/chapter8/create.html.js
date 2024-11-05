import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter8/create.html.vue"
const data = JSON.parse("{\"path\":\"/chapter8/create.html\",\"title\":\"扩展 axios.create 静态接口\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"静态方法扩展\",\"slug\":\"静态方法扩展\",\"link\":\"#静态方法扩展\",\"children\":[]},{\"level\":2,\"title\":\"demo 编写\",\"slug\":\"demo-编写\",\"link\":\"#demo-编写\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter8/create.md\"}")
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
