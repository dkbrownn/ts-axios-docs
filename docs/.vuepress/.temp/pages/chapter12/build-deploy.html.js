import comp from "D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter12/build-deploy.html.vue"
const data = JSON.parse("{\"path\":\"/chapter12/build-deploy.html\",\"title\":\"ts-axios 编译与发布\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"需求分析\",\"slug\":\"需求分析\",\"link\":\"#需求分析\",\"children\":[]},{\"level\":2,\"title\":\"编译和打包\",\"slug\":\"编译和打包\",\"link\":\"#编译和打包\",\"children\":[{\"level\":3,\"title\":\"修改 rollup.config.ts\",\"slug\":\"修改-rollup-config-ts\",\"link\":\"#修改-rollup-config-ts\",\"children\":[]},{\"level\":3,\"title\":\"修改 package.json\",\"slug\":\"修改-package-json\",\"link\":\"#修改-package-json\",\"children\":[]}]},{\"level\":2,\"title\":\"自动化部署\",\"slug\":\"自动化部署\",\"link\":\"#自动化部署\",\"children\":[{\"level\":3,\"title\":\"修改 package.json\",\"slug\":\"修改-package-json-1\",\"link\":\"#修改-package-json-1\",\"children\":[]},{\"level\":3,\"title\":\"编写部署脚本\",\"slug\":\"编写部署脚本\",\"link\":\"#编写部署脚本\",\"children\":[]}]},{\"level\":2,\"title\":\"运行部署脚本\",\"slug\":\"运行部署脚本\",\"link\":\"#运行部署脚本\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"chapter12/build-deploy.md\"}")
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
