import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter8/transform.html.vue"
const data = JSON.parse("{\"path\":\"/chapter8/transform.html\",\"title\":\"请求和响应配置化\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"修改默认配置\",\"slug\":\"修改默认配置\",\"link\":\"#修改默认配置\",\"children\":[]},{\"level\":2,\"title\":\"transform 逻辑重构\",\"slug\":\"transform-逻辑重构\",\"link\":\"#transform-逻辑重构\",\"children\":[]},{\"level\":2,\"title\":\"demo 编写\",\"slug\":\"demo-编写\",\"link\":\"#demo-编写\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter8/transform.md\"}")
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
