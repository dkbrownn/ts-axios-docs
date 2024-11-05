export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/chapter1/install.html", { loader: () => import(/* webpackChunkName: "chapter1_install.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter1/install.html.js"), meta: {"title":"安装 TypeScript"} }],
  ["/chapter1/", { loader: () => import(/* webpackChunkName: "chapter1_index.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter1/index.html.js"), meta: {"title":"初识 TypeScript"} }],
  ["/chapter1/start.html", { loader: () => import(/* webpackChunkName: "chapter1_start.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter1/start.html.js"), meta: {"title":"编写第一个 TypeScript 程序"} }],
  ["/chapter12/build-deploy.html", { loader: () => import(/* webpackChunkName: "chapter12_build-deploy.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter12/build-deploy.html.js"), meta: {"title":"ts-axios 编译与发布"} }],
  ["/chapter12/demo.html", { loader: () => import(/* webpackChunkName: "chapter12_demo.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter12/demo.html.js"), meta: {"title":"引用 ts-axios 库"} }],
  ["/chapter10/auth.html", { loader: () => import(/* webpackChunkName: "chapter10_auth.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/auth.html.js"), meta: {"title":"HTTP 授权"} }],
  ["/chapter10/baseURL.html", { loader: () => import(/* webpackChunkName: "chapter10_baseURL.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/baseURL.html.js"), meta: {"title":"baseURL"} }],
  ["/chapter10/paramsSerializer.html", { loader: () => import(/* webpackChunkName: "chapter10_paramsSerializer.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/paramsSerializer.html.js"), meta: {"title":"自定义参数序列化"} }],
  ["/chapter10/static.html", { loader: () => import(/* webpackChunkName: "chapter10_static.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/static.html.js"), meta: {"title":"静态方法扩展"} }],
  ["/chapter10/upload-download.html", { loader: () => import(/* webpackChunkName: "chapter10_upload-download.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/upload-download.html.js"), meta: {"title":"上传和下载的进度监控"} }],
  ["/chapter10/validateStatus.html", { loader: () => import(/* webpackChunkName: "chapter10_validateStatus.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/validateStatus.html.js"), meta: {"title":"自定义合法状态码"} }],
  ["/chapter10/withCredentials.html", { loader: () => import(/* webpackChunkName: "chapter10_withCredentials.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/withCredentials.html.js"), meta: {"title":"withCredentials"} }],
  ["/chapter10/xsrf.html", { loader: () => import(/* webpackChunkName: "chapter10_xsrf.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter10/xsrf.html.js"), meta: {"title":"XSRF 防御"} }],
  ["/chapter11/cancel.html", { loader: () => import(/* webpackChunkName: "chapter11_cancel.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/cancel.html.js"), meta: {"title":"请求取消模块单元测试"} }],
  ["/chapter11/headers.html", { loader: () => import(/* webpackChunkName: "chapter11_headers.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/headers.html.js"), meta: {"title":"headers 模块单元测试"} }],
  ["/chapter11/helpers.html", { loader: () => import(/* webpackChunkName: "chapter11_helpers.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/helpers.html.js"), meta: {"title":"辅助模块单元测试"} }],
  ["/chapter11/instance.html", { loader: () => import(/* webpackChunkName: "chapter11_instance.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/instance.html.js"), meta: {"title":"Axios 实例模块单元测试"} }],
  ["/chapter11/interceptor.html", { loader: () => import(/* webpackChunkName: "chapter11_interceptor.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/interceptor.html.js"), meta: {"title":"拦截器模块单元测试"} }],
  ["/chapter11/jest.html", { loader: () => import(/* webpackChunkName: "chapter11_jest.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/jest.html.js"), meta: {"title":"Jest 安装和配置"} }],
  ["/chapter11/mergeConfig.html", { loader: () => import(/* webpackChunkName: "chapter11_mergeConfig.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/mergeConfig.html.js"), meta: {"title":"mergeConfig 模块单元测试"} }],
  ["/chapter11/more.html", { loader: () => import(/* webpackChunkName: "chapter11_more.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/more.html.js"), meta: {"title":"剩余模块单元测试"} }],
  ["/chapter11/preface.html", { loader: () => import(/* webpackChunkName: "chapter11_preface.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/preface.html.js"), meta: {"title":"前言"} }],
  ["/chapter11/requests.html", { loader: () => import(/* webpackChunkName: "chapter11_requests.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter11/requests.html.js"), meta: {"title":"请求模块单元测试"} }],
  ["/chapter2/advance.html", { loader: () => import(/* webpackChunkName: "chapter2_advance.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/advance.html.js"), meta: {"title":"高级类型"} }],
  ["/chapter2/class.html", { loader: () => import(/* webpackChunkName: "chapter2_class.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/class.html.js"), meta: {"title":"类"} }],
  ["/chapter2/declare.html", { loader: () => import(/* webpackChunkName: "chapter2_declare.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/declare.html.js"), meta: {"title":"变量声明"} }],
  ["/chapter2/function.html", { loader: () => import(/* webpackChunkName: "chapter2_function.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/function.html.js"), meta: {"title":"函数"} }],
  ["/chapter2/generic.html", { loader: () => import(/* webpackChunkName: "chapter2_generic.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/generic.html.js"), meta: {"title":"泛型"} }],
  ["/chapter2/inference.html", { loader: () => import(/* webpackChunkName: "chapter2_inference.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/inference.html.js"), meta: {"title":"类型推断"} }],
  ["/chapter2/interface.html", { loader: () => import(/* webpackChunkName: "chapter2_interface.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/interface.html.js"), meta: {"title":"接口"} }],
  ["/chapter2/type.html", { loader: () => import(/* webpackChunkName: "chapter2_type.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter2/type.html.js"), meta: {"title":"基础类型"} }],
  ["/chapter3/base.html", { loader: () => import(/* webpackChunkName: "chapter3_base.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter3/base.html.js"), meta: {"title":"编写基础请求代码"} }],
  ["/chapter3/init.html", { loader: () => import(/* webpackChunkName: "chapter3_init.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter3/init.html.js"), meta: {"title":"初始化项目"} }],
  ["/chapter3/require.html", { loader: () => import(/* webpackChunkName: "chapter3_require.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter3/require.html.js"), meta: {"title":"需求分析"} }],
  ["/chapter4/data.html", { loader: () => import(/* webpackChunkName: "chapter4_data.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/data.html.js"), meta: {"title":"处理请求 body 数据"} }],
  ["/chapter4/header.html", { loader: () => import(/* webpackChunkName: "chapter4_header.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/header.html.js"), meta: {"title":"处理请求 header"} }],
  ["/chapter4/response-data.html", { loader: () => import(/* webpackChunkName: "chapter4_response-data.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/response-data.html.js"), meta: {"title":"处理响应 data"} }],
  ["/chapter4/response-header.html", { loader: () => import(/* webpackChunkName: "chapter4_response-header.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/response-header.html.js"), meta: {"title":"处理响应 header"} }],
  ["/chapter4/response.html", { loader: () => import(/* webpackChunkName: "chapter4_response.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/response.html.js"), meta: {"title":"获取响应数据"} }],
  ["/chapter4/url.html", { loader: () => import(/* webpackChunkName: "chapter4_url.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter4/url.html.js"), meta: {"title":"处理请求 url 参数"} }],
  ["/chapter13/summary.html", { loader: () => import(/* webpackChunkName: "chapter13_summary.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter13/summary.html.js"), meta: {"title":"课程回顾与总结"} }],
  ["/chapter5/enhance.html", { loader: () => import(/* webpackChunkName: "chapter5_enhance.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter5/enhance.html.js"), meta: {"title":"错误信息增强"} }],
  ["/chapter5/error.html", { loader: () => import(/* webpackChunkName: "chapter5_error.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter5/error.html.js"), meta: {"title":"错误处理"} }],
  ["/chapter6/extend.html", { loader: () => import(/* webpackChunkName: "chapter6_extend.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter6/extend.html.js"), meta: {"title":"扩展接口"} }],
  ["/chapter6/generic.html", { loader: () => import(/* webpackChunkName: "chapter6_generic.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter6/generic.html.js"), meta: {"title":"响应数据支持泛型"} }],
  ["/chapter6/overload.html", { loader: () => import(/* webpackChunkName: "chapter6_overload.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter6/overload.html.js"), meta: {"title":"axios 函数重载"} }],
  ["/chapter7/interceptor.html", { loader: () => import(/* webpackChunkName: "chapter7_interceptor.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter7/interceptor.html.js"), meta: {"title":"拦截器设计与实现"} }],
  ["/chapter8/create.html", { loader: () => import(/* webpackChunkName: "chapter8_create.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter8/create.html.js"), meta: {"title":"扩展 axios.create 静态接口"} }],
  ["/chapter8/merge.html", { loader: () => import(/* webpackChunkName: "chapter8_merge.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter8/merge.html.js"), meta: {"title":"合并配置的设计与实现"} }],
  ["/chapter8/transform.html", { loader: () => import(/* webpackChunkName: "chapter8_transform.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter8/transform.html.js"), meta: {"title":"请求和响应配置化"} }],
  ["/chapter9/cancel.html", { loader: () => import(/* webpackChunkName: "chapter9_cancel.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/chapter9/cancel.html.js"), meta: {"title":"取消功能的设计与实现"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Cpp/ts-axios-doc/ts-axios-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
