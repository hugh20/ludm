(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{111:function(n,t,e){var r=e(112);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(8)(r,o);r.locals&&(n.exports=r.locals)},112:function(n,t,e){(n.exports=e(7)(!1)).push([n.i,'.category-strong {\n  margin-left: auto;\n  margin-right: auto;\n  width: 17.95rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.category-strong .category-strong-ul {\n  margin-top: 0.5rem;\n  background-color: white;\n  overflow: hidden;\n  width: 100%;\n}\n\n.category-strong .category-strong-ul .strong-ul-item {\n  width: 50%;\n  height: 2.55rem;\n  float: left;\n  position: relative;\n}\n\n.category-strong .category-strong-ul .strong-ul-item::after {\n  width: 6.3rem;\n  height: 1px;\n  -webkit-transform: scale(1, 0.5);\n  transform: scale(1, 0.5);\n  background-color: #F5F5EE;\n  content: "";\n  position: absolute;\n  left: 1.25rem;\n  bottom: 0px;\n}\n\n.category-strong .category-strong-ul .strong-ul-item .strong-ul-item-link {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  padding-left: 1.25rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n}\n\n.category-strong .category-strong-ul .strong-ul-item .strong-ul-item-link strong {\n  color: #969696;\n  font-size: 0.75rem;\n  display: block;\n  line-height: 2.55rem;\n  vertical-align: middle;\n  width: 1.75rem;\n  font-weight: normal;\n}\n\n.category-strong .category-strong-ul .strong-ul-item .strong-ul-item-link small {\n  display: block;\n  color: white;\n  background-image: url("data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEcAAAAcCAMAAAAEJ1IZAAAAVFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////8wXzyWAAAAG3RSTlMADLzY+lEGA+ukgTIeFxH0aSbix7ZvWq2XiT66M+RZAAAAqUlEQVQ4y63VWw6DIBCF4TOICCpeau1t9r/P1tA09VHnfAv4o5BwoDv+OnUZzSw4QOpKd51qGnDKUOGvcmtwVv3rREMFkG/HPwU25Zc6gNBJAkanBQEpA72DIg6gaMFRbrx3o+thEbBxqupgIdiMn46HxYv0PQ/S+fgZFLoETkdTw+loCpyOLpnT0VjbO0XKnI7GNZjf+eIyEXanlNpM2MGyy2snCMd3+Q06rhKGEtqnWQAAAABJRU5ErkJggg==");\n  width: 1.775rem;\n  height: 0.7rem;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  font-size: 0.4rem;\n  vertical-align: middle;\n  text-align: right;\n  line-height: 0.75rem;\n  box-sizing: border-box;\n  padding-right: 0.15rem;\n}\n\n.category-strong .category-strong-ul .strong-ul-item .strong-ul-item-link small:nth-of-type(1) {\n  background-color: #de8275;\n  margin-right: 0.25rem;\n}\n\n.category-strong .category-strong-ul .strong-ul-item .strong-ul-item-link small:nth-of-type(2) {\n  background-color: #aadd71;\n}\n\n.category-strong .category-strong-ul .strong-ul-item:nth-of-type(1)::before {\n  content: "";\n  width: 1px;\n  height: 7.65rem;\n  background-color: #F5F5EE;\n  right: 0;\n  top: 0;\n  position: absolute;\n  display: block;\n}\n\n.category-strong .category-strong-ul .strong-ul-item:nth-last-of-type(1)::after, .category-strong .category-strong-ul .strong-ul-item:nth-last-of-type(2)::after {\n  display: none;\n}\n\n.category-normal {\n  margin-top: 0.5rem;\n  background-color: #ffffff;\n  padding-top: 0.75rem;\n  overflow: hidden;\n}\n\n.category-normal .category-normal-ul {\n  width: 18.75rem;\n  margin: 0 auto;\n  padding-left: 0.5rem;\n}\n\n.category-normal .category-normal-ul .category-normal-item {\n  width: 8.55rem;\n  height: 5rem;\n  float: left;\n  margin-bottom: 0.75rem;\n}\n\n.category-normal .category-normal-ul .category-normal-item:nth-of-type(2n+1) {\n  margin-right: 0.65rem;\n}\n\n.category-normal .category-normal-ul .category-normal-item .item-link {\n  position: relative;\n  width: 8.55rem;\n  height: 5rem;\n  display: block;\n}\n\n.category-normal .category-normal-ul .category-normal-item .item-link .item-name {\n  color: #535252;\n  font-size: 0.7rem;\n  position: absolute;\n  left: 0.9rem;\n  top: 2.05rem;\n}\n\n.category-normal .category-normal-ul .category-normal-item .item-link .item-cover {\n  width: 100%;\n  height: 100%;\n  display: block;\n}',""])},236:function(n,t,e){"use strict";e.r(t);e(111);var r=e(31),o=e(3);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var i={name:"category",components:{},data:function(){return{categorys1:[],categorys2:[]}},mounted:function(){var n=this;this.setNoTitle(!1),this.setTitle("分类"),Object(r.b)().then(function(t){n.categorys1=t.data.slice(0,4),n.categorys2=t.data.slice(4)})},methods:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.forEach(function(t){a(n,t,e[t])})}return n}({},Object(o.c)(["setNoTitle","setTitle"]))},l=e(0),g=Object(l.a)(i,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{staticClass:"category-strong under-top-bar"},[e("ul",{staticClass:"category-strong-ul"},n._l(n.categorys1,function(t,r){return e("li",{staticClass:"strong-ul-item"},[e("router-link",{staticClass:"strong-ul-item-link",attrs:{to:{path:"/category-comic-list/"+t.id,query:{category:t.name}}}},[e("strong",[n._v(n._s(t.name))]),n._v(" "),e("small",[n._v(n._s(t.description))])])],1)}),0)]),n._v(" "),e("section",{staticClass:"category-normal"},[e("ul",{staticClass:"category-normal-ul"},n._l(n.categorys2,function(t,r){return e("li",{staticClass:"category-normal-item"},[e("router-link",{staticClass:"item-link",attrs:{to:{path:"/category-comic-list/"+t.id,query:{category:t.name}}}},[e("span",{staticClass:"item-name"},[n._v("| "+n._s(t.name)+" ")]),n._v(" "),e("img",{staticClass:"item-cover",attrs:{src:t.cover_image.url}})])],1)}),0)])])},[],!1,null,null,null).exports;t.default=g},31:function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return a});var r=e(4),o=function(){return r.a.request({url:"api/categorys",method:"get"})},a=function(n){var t=n.category_id,e=n.page,o=n.per_page;return r.a.request({url:"api/category_comic?category_id="+t+"&page="+e+"&per_page="+o,method:"get"})}}}]);