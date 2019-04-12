 script 放置在头部会影响网页的性能
 window.onload = function () {

        }页面加载完成之后
html结构下载, CSS 并且生成了文档树 静态页面
DOMcontentLoaded 事件

DOM 树 有html结构,再加上CSS,渲染完成 DOM树将被生成 ,静态页面就有了.
document.DOMContentLoaded  DOMContentLoaded有兼容性问题  在document对象上  有了元素结点 , 就可以做js交互了
页面上还依赖于其他的一些资源 js ,阻塞下载 , img是网页性能的杀手
window.loaded 此时写js 就晚了


如果不等事件的发生, js 操作有可能是无效的
$ 事件监听 查找元素