import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/preface.html.vue"
const data = JSON.parse("{\"path\":\"/chapter11/preface.html\",\"title\":\"前言\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"chapter11/preface.md\"}")
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
