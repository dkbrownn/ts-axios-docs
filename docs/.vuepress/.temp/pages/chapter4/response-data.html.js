import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/response-data.html.vue"
const data = JSON.parse("{\"path\":\"/chapter4/response-data.html\",\"title\":\"处理响应 data\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"transformResponse 函数实现及应用\",\"slug\":\"transformresponse-函数实现及应用\",\"link\":\"#transformresponse-函数实现及应用\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter4/response-data.md\"}")
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
