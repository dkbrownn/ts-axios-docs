import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter12/demo.html.vue"
const data = JSON.parse("{\"path\":\"/chapter12/demo.html\",\"title\":\"引用 ts-axios 库\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"在 TS 项目中引用\",\"slug\":\"在-ts-项目中引用\",\"link\":\"#在-ts-项目中引用\",\"children\":[]},{\"level\":2,\"title\":\"在 JS 项目中引用\",\"slug\":\"在-js-项目中引用\",\"link\":\"#在-js-项目中引用\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter12/demo.md\"}")
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
