import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/data.html.vue"
const data = JSON.parse("{\"path\":\"/chapter4/data.html\",\"title\":\"处理请求 body 数据\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"transformRequest 函数实现\",\"slug\":\"transformrequest-函数实现\",\"link\":\"#transformrequest-函数实现\",\"children\":[]},{\"level\":2,\"title\":\"实现请求 body 处理逻辑\",\"slug\":\"实现请求-body-处理逻辑\",\"link\":\"#实现请求-body-处理逻辑\",\"children\":[]},{\"level\":2,\"title\":\"编写 demo\",\"slug\":\"编写-demo\",\"link\":\"#编写-demo\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter4/data.md\"}")
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
