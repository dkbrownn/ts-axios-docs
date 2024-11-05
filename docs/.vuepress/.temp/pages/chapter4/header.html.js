import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/header.html.vue"
const data = JSON.parse("{\"path\":\"/chapter4/header.html\",\"title\":\"处理请求 header\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"processHeaders 函数实现\",\"slug\":\"processheaders-函数实现\",\"link\":\"#processheaders-函数实现\",\"children\":[]},{\"level\":2,\"title\":\"实现请求 header 处理逻辑\",\"slug\":\"实现请求-header-处理逻辑\",\"link\":\"#实现请求-header-处理逻辑\",\"children\":[]},{\"level\":2,\"title\":\"demo 编写\",\"slug\":\"demo-编写\",\"link\":\"#demo-编写\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter4/header.md\"}")
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
