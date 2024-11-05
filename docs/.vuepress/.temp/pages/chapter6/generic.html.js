import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter6/generic.html.vue"
const data = JSON.parse("{\"path\":\"/chapter6/generic.html\",\"title\":\"响应数据支持泛型\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"接口添加泛型参数\",\"slug\":\"接口添加泛型参数\",\"link\":\"#接口添加泛型参数\",\"children\":[]},{\"level\":2,\"title\":\"demo 编写\",\"slug\":\"demo-编写\",\"link\":\"#demo-编写\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter6/generic.md\"}")
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
