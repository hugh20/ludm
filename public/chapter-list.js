(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(t,n,e){var i=e(122);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(6)(i,o);i.locals&&(t.exports=i.locals)},122:function(t,n,e){(t.exports=e(5)(!1)).push([t.i,'@charset "UTF-8";\n.iconfont, .chapter-list-box .chapter-list .chapter-link.lock::before {\n  font-family: "iconfont" !important;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.chapter-list-box .chapter-list .chapter-link, .chapter-list-box .btn-expand-chapter-list {\n  border-radius: 0.1rem;\n  overflow: hidden;\n}\n\n.iconfont, .chapter-list-box .chapter-list .chapter-link.lock::before {\n  font-family: "iconfont" !important;\n  font-style: normal;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n/*\n刷新1\n*/\n.chapter-list-box .chapter-list .chapter-link, .chapter-list-box .btn-expand-chapter-list {\n  box-sizing: border-box;\n}\n\n.chapter-list-box .chapter-list .chapter-link:active, .chapter-list-box .btn-expand-chapter-list:active {\n  position: relative;\n}\n\n.chapter-list-box .chapter-list .chapter-link:active::after, .chapter-list-box .btn-expand-chapter-list:active::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.08);\n  left: 0;\n  top: 0;\n}\n\n/**\n@mixin:tab-nav\nparameter:$itemWidth\n参数说明：接受px为单位的具体px值，会在内部转换rem，参数大小为设计图上tab切换标签一个点击按钮的宽度\n用途说明：用户复用列表页头部tab切换页签样式\n对应html格式：\n  .xxx-tab（在此处引用tab-nav）\n    div.tab-list\n      a.tab-list-item * n （普通样式）\n      a.tab-list-item .active （选中样式）\n*/\n/**\n * 三列的数字列表\n */\n/**\n  用于左图片右内容分布形式的列表样式\n*/\n/**\n用于一行三列的列表排布，\n上图片，下文字.\n*/\n.comic-title {\n  /**\n  漫画标题旁边的标签\n  */\n}\n\n.comic-title .tag-vip-free {\n  display: inline-block;\n  vertical-align: text-bottom;\n  width: 2.5rem;\n  height: 0.975rem;\n  background-image: url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAGQAAAAnCAYAAAD5Lu2WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNUJCRjMxNjMyMUYxMUU2ODIxRjhBRjJFMDgyRkMzMSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNUJCRjMxNzMyMUYxMUU2ODIxRjhBRjJFMDgyRkMzMSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1QkJGMzE0MzIxRjExRTY4MjFGOEFGMkUwODJGQzMxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI1QkJGMzE1MzIxRjExRTY4MjFGOEFGMkUwODJGQzMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9tTO+gAABGhJREFUeNrsWzuLFEEQ7pPDEx/I3E/Y+wfuqYkazQVGgjAraL6XGAqzamCk3IBmJruJkYI7YHLhTqaJeuM/cH6CjfhAo7Vaq6Go6+npeewD7IKi2dme7p7vq1f3zm7M53PhZX3khIfAE+LFE+IJ8dJQNsu++Hl3cAGax6BXQc94qFrLD9C3oA9PP59+Kuu0YaqygIyL0ByCPgJ9BQN8sxD3X6MM2Dj1A5zOQXMbjfw63Pexjoc8Bb0PN73wht0Zccqox0DML2ifgV6rk0Mug77xMC5EXoNeqpvUt4DRrx67hXiK8pAtX2X5snctJAL9Ahp2NF4MekQ+h5ATjkC7Gr+87LVUC2ryAFwvdegeIBg5aEGu90D7oGkJiDZJHZeq5j4AlTh3YOgjLffrNVLpo0asTx9woeNngI9cCiEIcAwL2INJs4q+QwRlBJqw68rathko6qGmCKA0ANzD6xMc0yZT7K/kc0mfxDJOZDCOAOePLUakCBrUMJzWISsloLqEDMnIcJ1jl+kOthkCMrbcP0bDGSHpVHfQY2UFaIlhDSkai/6snysB41Sf95YesmDiHLwjw/gZWNw+RGtJRHeSo/XN0CASFgo1GUP0ItPcM/ScPRxPVBDbZ2FMsDwiMGLEK8khKBMMCUML4MOaMb8uMZrwgoSTGQGwbwBOkHvGbLz9EqPKyTPExHt4LqSGkTV9sEZVFib0wpKAdTLPHKywy4qqR8BImBYkvo/IdWFI3jRn5cxDXJJ1yJL8wj1Ee8kBAZ57R4B9FgW+YGBNDGuS7J7c4LGxpcrKyVwB0biiMmyc2NsSEiP4mWGBRctwFZSEmxjBmhjyh6goY+uGxV0WDgtyTT/nFD0tJ2Vxv+ba2hOi6myd3Ek5SJP5qAUZscVyZUW5SuM/JzN12OeY1qI9fsAMpSCGQcvkkSp+lh2ydJyOWHIfkr1CU0lLvEs6JEyJ1hobvC1CogqDN3BvirFvj1VotgJGyXbTTWFrQkgJHCEhOpmnjsmvTNqEu8RQ+c1Ygt6tGEOHnQyfKcI9jO2kwebVSz3LSslxwqKTedPwFzrsh3pYENCN6T7zJomqTxqk8oY2HrEIQngMXWap60LGAa6pKudokKvK1YDkp7DrBW92NM6EWNc6/KbbJ+Wvy7kX3WPIkpwkiRfp8DeDkJ2TEJ209ZauCElxoW1L3bYSoqXrMzR+qCmRrKE4fqgZGjw7INdmpCAYkFCt5/xLEh6hpEBMsUpCCnH85NYmGiiTNdYZh4ecMSmLTeOPsI/pYJKHtZh4vSTfU4JzLG8TIEKHbF0m76ySENEARNnRODRsVp3g6s2ey28jOjcWLjkRj5NSPDIJVh2y1kXSDo1HigbhF3NI4zxSVmX9BqbPCy+dC+B6SuFbl5D3oDc9fAuRW6Af6oase6CHwOZJaF+CG373OLb2jLPQ3BH/3ly8UdZvo+wPO/hu7xPQK8K/29uFqHd734E+qP1ur5fViX9RzhPixRPiCfHSVP4IMAB+wWzkRG7pIwAAAABJRU5ErkJggg==");\n  background-size: 2.5rem 0.975rem;\n  background-repeat: no-repeat;\n}\n\nbody {\n  background-color: #F5F5EE;\n  overflow-x: hidden;\n}\n\n.chapterAll-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n}\n\n.chapterAll-info .chapterAll-count, .chapterAll-info .chapterAll-sequence {\n  display: block;\n  font-size: 0.6rem;\n  padding-top: 0.75rem;\n}\n\n.chapterAll-info .chapterAll-count {\n  padding-left: 0.75rem;\n  line-height: 100%;\n  padding-bottom: 0.35rem;\n  color: #C5C5C5;\n}\n\n.chapterAll-info .chapterAll-sequence {\n  padding-right: 0.75rem;\n  color: #535252;\n  vertical-align: middle;\n}\n\n.chapterAll-info .chapterAll-sequence .iconfont, .chapterAll-info .chapterAll-sequence .chapter-list-box .chapter-list .chapter-link.lock::before, .chapter-list-box .chapter-list .chapterAll-info .chapterAll-sequence .chapter-link.lock::before {\n  display: inline-block;\n  font-size: 0.8rem;\n  vertical-align: middle;\n  color: #C5C5C5;\n}\n\n.chapterAll-info .chapterAll-sequence.reverse .iconfont, .chapterAll-info .chapterAll-sequence.reverse .chapter-list-box .chapter-list .chapter-link.lock::before, .chapter-list-box .chapter-list .chapterAll-info .chapterAll-sequence.reverse .chapter-link.lock::before {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n\n.chapter-list-box {\n  overflow-x: hidden;\n}\n\n.chapter-list-box .chapter-list {\n  font-size: 0;\n  text-align: left;\n}\n\n.chapter-list-box .chapter-list .chapter-item {\n  display: inline-block;\n  width: 28%;\n  height: 2.25rem;\n  margin-left: 4%;\n  margin-bottom: 4%;\n}\n\n.chapter-list-box .chapter-list .chapter-item:nth-child(3n) {\n  margin-right: 4%;\n}\n\n.chapter-list-box .chapter-list .chapter-link {\n  display: block;\n  height: 2.25rem;\n  line-height: 2.25rem;\n  border: 1px solid #C5C5C5;\n  box-sizing: border-box;\n  overflow: hidden;\n  background-color: #fff;\n  color: #535252;\n  font-size: 0.8rem;\n  text-align: center;\n}\n\n.chapter-list-box .chapter-list .chapter-link.now {\n  color: #ff9a6a;\n  border-color: #ff9a6a;\n}\n\n.chapter-list-box .chapter-list .chapter-link.lock {\n  position: relative;\n  color: #C5C5C5;\n}\n\n.chapter-list-box .chapter-list .chapter-link.lock::before {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  display: block;\n  content: "\\E60A";\n  font-size: 0.8rem;\n  width: 0.8rem;\n  color: #ff9a6a;\n  height: 0.8rem;\n  line-height: 0.8rem;\n}\n\n.chapter-list-box .btn-expand-chapter-list {\n  display: block;\n  width: 92%;\n  height: 2.25rem;\n  box-sizing: border-box;\n  border: 1px solid #C5C5C5;\n  overflow: hidden;\n  background-color: #fff;\n  margin: 0 auto 0.75rem auto;\n  color: #535252;\n  font-size: 0.8rem;\n  line-height: 2.25rem;\n  text-align: center;\n}\n\n.chapter-list-box .btn-expand-chapter-list.list-expanded {\n  display: none;\n}\n\n.chapter-list-box .chapter-item:nth-child(n+10) {\n  display: none;\n}\n\n.chapter-list-box .btn-expand-chapter-list {\n  display: block;\n}\n\n.chapter-list-box.list-expanded .chapter-item:nth-child(n+10) {\n  display: inline-block;\n}\n\n.chapter-list-box.list-expanded .btn-expand-chapter-list {\n  display: none;\n}\n\n.chapter-list-box .chapter-list.normal {\n  display: block;\n}\n\n.chapter-list-box .chapter-list.reverse {\n  display: none;\n}\n\n.chapter-list-box.reverse .chapter-list.normal {\n  display: none;\n}\n\n.chapter-list-box.reverse .chapter-list.reverse {\n  display: block;\n}',""])},238:function(t,n,e){"use strict";e.r(n);e(121);var i=e(1),o=e(4),r=function(t){var n=t.id,e=t.sort;return o.a.request({url:"api/chapters?comic_id="+n+"&sort_type="+e,method:"get"})};function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var s={name:"chapter",components:{},props:["id"],data:function(){return{sort:"desc",sort_text:"正序",sections:[],iconfont:{transform:"rotate(180deg)"},min:1,max:1}},computed:a({},Object(i.d)({vip:function(t){return t.user.vip}})),mounted:function(){var t=this;this.setNoTitle(!1),r({id:this.id,sort:this.sort}).then(function(n){"success"==n.status&&(console.log(n),t.setTitle(n.data.title),t.sections=n.data.section,t.sections.length&&(t.min=Math.min(t.sections[t.sections.length-1].weight,t.sections[0].weight),t.max=Math.max(t.sections[t.sections.length-1].weight,t.sections[0].weight)),t.setMetaTitle(n.data.title),t.setDescription(n.data.descriptions),t.setKeywords(n.data.keywords))})},methods:a({},Object(i.c)(["setNoTitle","setTitle","setMetaTitle","setDescription","setKeywords"]),{reverse:function(){var t=this;r({id:this.id,sort:"desc"==this.sort?"asc":"desc"}).then(function(n){"success"==n.status&&(t.sections=n.data.section,t.sections.length&&(t.min=Math.min(t.sections[t.sections.length-1].weight,t.sections[0].weight),t.max=Math.max(t.sections[t.sections.length-1].weight,t.sections[0].weight)),"desc"==t.sort?(t.sort="asc",t.sort_text="返序",t.iconfont={transform:"rotate(0deg)"}):(t.sort="desc",t.sort_text="正序",t.iconfont={transform:"rotate(180deg)"}))})}})},l=e(0),p=Object(l.a)(s,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"chapterAll-info under-top-bar"},[e("a",{staticClass:"chapterAll-count"},[t._v("共"+t._s(t.sections.length)+"章")]),t._v(" "),e("a",{staticClass:"chapterAll-sequence reverse",on:{click:t.reverse}},[e("span",{staticClass:"iconfont",style:t.iconfont},[t._v("")]),e("span",[t._v(t._s(t.sort_text))])])]),t._v(" "),e("section",{staticClass:"chapter-list-box list-expanded",attrs:{"data-vip-free":"1"}},[e("ul",{staticClass:"chapter-list normal"},t._l(t.sections,function(n){return e("li",{staticClass:"chapter-item"},[e("router-link",{class:{"chapter-link":!0,lock:n.access_type>0&&!t.vip},attrs:{to:{path:"/art/"+n.id,query:{lock:n.access_type>0&&!t.vip,comic_id:t.id,min:t.min,max:t.max}}}},[t._v("\n                    "+t._s(n.weight)+"\n                ")])],1)}),0)])])},[],!1,null,null,null).exports;n.default=p}}]);