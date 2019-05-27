webpackJsonp([3],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_vue__);

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__index_vue___default.a);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(255)
/* template */
var __vue_template__ = __webpack_require__(264)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/view/single-page/index/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b4c8058", Component.options)
  } else {
    hotAPI.reload("data-v-2b4c8058", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_recommend__ = __webpack_require__(258);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'index',
    components: {
        Recommend: __WEBPACK_IMPORTED_MODULE_1_components_recommend__["a" /* default */]
    },
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    methods: {}
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(22);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* ------------------------------------------------------------ */\n/* Banner与主菜单 */\n.banner-menu {\n  position: relative;\n  width: 100%;\n  /* Banner列表 */\n  /* 主菜单列表 */\n  /* 历史记录弹出框 */ }\n\n.banner-menu .menu-list {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: 4.5rem;\n  margin-top: -1.75rem;\n  background: transparent url(\"data:image/png;base64, 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5zG1BPABnuELPzsA/4Sic5vU3jW03UPrMUyVo/L946PQvbRdZH+MtjWmKWmWzDJp7zy+mygjRUPVrOm+acTqOxkmnh3sXo2A/JReTCGqHA/GRX33FEaEH+hJ94LP+OWWtGAHwHfo6elNt85y73uv+JV6s73B9aE0+/44oXE4vvqkUlpH8aHohqWCcbaR9951ayXRdkiUlwSAD/SAT1TfnO03N8/KXY+Z8tWQ7hGf8/fNeTLJuxoVRtq4UfkqifjeK5Z7bTvAbQJ3lnc9XzM7AEJwHl7RgoGm6aO649ZPv7oJMXODDV/zEoDQgykNqo/XU6ebAMs421F8oCf4wI+q7/W885nsG7+m3ft+1b1Y7mL7P81msZP/2DjhwuwT56F2HFL1zzatppUxPAGlR3xUfdf5gTh/2DXT3VZhIAon6r9Wqi6L2ULYCUuhbLlAzfu/14WESNwOqgUVsavme4Lj0ZkzI9t2oi0IHYJ8gn4OybWJt2J26N4OMvj99bWP990Y7p/cLgkGjzdHtBxBJb96Q0CRSaGIwq0qfajlmbb9+gBAPPk9Lw8/IrwJvJ2khJYF4gnyZ/X7B7w9cHHoxYz53sd7b3fo9ly2Onw3YjtEHPGTxBMB+MVhOqUivClmearOXx9giXyQiptbhTdcGDsrig/1w1bdnmFmQb+/vAx2H3eZm9u5Sufx3RGttklJb8Vk9gC1Me50HLFoBfV7B9hDOAUsAFsR682M/sXVh60aYQrwtqtO/X6N9z+7yy7zfLU7lxkRpsbRlyf3SgBCpSHnrPXwPZneeEDI8kk3GNvjtYK0vvjQ6vUBU6RwrjN3jPfR7rdwR3qEaSN6dgg8vwIpcywRUyGqg0r6rn5VaCnp7zyQ8qv0O6WJ6WP6iTr6/bK878ZdJg1izApd/BYIGrdfiebqRYep0g1du9LzUjU8gdEltv8ibq3TM/r6p3RWkI/bzGj3Z7fsMGuIhQ2eikmkWVDTH1E3Fndt2juFmdQRrdZd5vkzSpx3dso/gderp2F5H+yeOkxKvNLxpRG4VX4mZYrCaKlF7+3kKmA9gJ/uDIuF6Q/U95mDiMVHzeWfF8scdWWwu1KzF+xzmN67rZ+Gv6BISyVpiB1OUjWUJYH+UTDolP8R49Jug159rk3EV014MvzigBnn2IuX3Qxp6qhdSnvxQiI7hm/xIv4ZHHW0ww8e/Boedv/HLh0IAAAAAAjytx7kYogR3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdE9dulAAAAAAECQv/UgF0OM6M6I7ozozojujOjOiO6M6M6I7ozozojujOjOiO6M6M6I7ozozojujOjOiO6M6M6I7rFLBwIAAAAAgvytB7kYYkR3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdGdGdEd0Z0Z0R3RnRnRHdqlw4IAABhAAbZ67d/Le0xyECI7oToTojuhOhOiO6E6E6I7oToTojuhOhOiO6E6E6I7oT87gMJv/tAxpmFiDl7IWHvPrZgzyE5kwGzAAAAAElFTkSuQmCC\") no-repeat scroll 0 100%;\n  background-size: 100% 4.5rem;\n  font-size: 0;\n  text-align: center; }\n\n.banner-menu .menu-list .item {\n  display: inline-block;\n  width: 22%;\n  margin-top: 1.5rem;\n  text-align: center; }\n\n.banner-menu .menu-list .link {\n  display: inline-block;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n  padding-bottom: 0.2rem; }\n\n.banner-menu .menu-list .link:active {\n  background-color: #DCDCD6; }\n\n.banner-menu .menu-list .icon {\n  display: block;\n  margin: 0 auto; }\n\n.banner-menu .menu-list .icon.category {\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -17rem -3.75rem;\n  background-size: 20.5rem 17.5rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .menu-list .icon.rank {\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -13rem -5.825rem;\n  background-size: 20.5rem 17.5rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .menu-list .icon.time {\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -14.95rem -5.825rem;\n  background-size: 20.5rem 17.5rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .menu-list .icon.history {\n  width: 1.7rem;\n  height: 1.7rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -16.9rem -5.825rem;\n  background-size: 20.5rem 17.5rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .menu-list .name {\n  display: block;\n  margin-top: 0.15rem;\n  font-size: 0.6rem;\n  color: #969696; }\n\n.banner-menu .history-popup {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  position: absolute;\n  z-index: 3;\n  right: 0.8rem;\n  bottom: 3.5rem;\n  max-width: 90%;\n  height: 1.8rem;\n  margin-left: -0.1rem;\n  padding-right: 0.5rem;\n  background-color: #FFFFFF;\n  border: 2px solid #797878;\n  border-radius: 1.8rem;\n  font-size: 0.75rem;\n  color: #535252;\n  -webkit-transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease, -webkit-transform 300ms ease;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.banner-menu .history-popup.closed {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translate3d(0, 0.25rem, 0);\n  transform: translate3d(0, 0.25rem, 0); }\n\n.banner-menu .history-popup .npc-avatar {\n  display: block;\n  margin-left: 0.2rem;\n  text-indent: -2500rem;\n  font-size: 0;\n  width: 2.15rem;\n  height: 1.6rem;\n  background-image: url(" + escape(__webpack_require__(286)) + ");\n  background-size: 2.15rem 1.6rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .history-popup .text {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  display: block;\n  margin-left: 0.2rem;\n  padding-top: 1px;\n  height: 0.85rem;\n  line-height: 0.85rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.banner-menu .history-popup .arrow {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 1.8rem;\n  right: 2rem;\n  width: 0.55rem;\n  height: 0.4rem;\n  background-image: url(\"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAFVBMVEUAAABTUlJTUlL///9TUlKamprR0dG41XW0AAAAA3RSTlMAlgGqatnUAAAAUElEQVQI113JsQ2AMBBDUbMBBROwAoIeyTdBkgmy/w7RyU6KuLLeR3/mPsT6FSy+L8GYTFws5h8Hw3wigxkKYgWxgjlDS3agWEGskOzd2DcA+2sYPq5r6CoAAAAASUVORK5CYII=\");\n  background-size: 0.55rem 0.4rem;\n  background-repeat: no-repeat; }\n\n.banner-menu .history-popup .close {\n  display: block;\n  text-indent: -2500rem;\n  font-size: 0;\n  padding: 0.5rem 0.5rem 0.5rem 0.25rem;\n  margin-right: -0.5rem; }\n\n.banner-menu .history-popup .close::after {\n  content: \"\";\n  display: block;\n  width: 0.725rem;\n  height: 0.725rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -18.95rem -3.75rem;\n  background-size: 20.5rem 17.5rem;\n  width: 0.725rem;\n  height: 0.725rem;\n  background-repeat: no-repeat; }\n", ""]);

// exports


/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommend_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommend_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__recommend_vue__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__recommend_vue___default.a);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(10)
/* script */
var __vue_script__ = __webpack_require__(260)
/* template */
var __vue_template__ = __webpack_require__(263)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/recommend/recommend.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32e50d3c", Component.options)
  } else {
    hotAPI.reload("data-v-32e50d3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommend_scss__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recommend_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__recommend_scss__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Recommend',
    components: {},
    props: {
        title: String,
        titleDesc: String,
        linkMore: String,
        comicData: Array,
        typeClass: String
    },
    computed: {},
    methods: {}
});

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(18)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./recommend.scss", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/sass-loader/lib/loader.js!./recommend.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(22);
exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.comic-list.col-3 .comic-item, .comic-list.col-3 .comic-item .comic-cover, .comic-list.col-3 .comic-item .comic-cover .cover-image, .comic-list.slide .comic-item .comic-link, .comic-list.slide .comic-item .comic-cover, .comic-list.slide .comic-item .comic-cover .cover-image, .comic-list.col-1 .comic-item .comic-link, .comic-list.col-1 .comic-item .comic-cover, .comic-list.col-1 .comic-item .comic-cover .cover-image, .animation-list.col-2 .animation-link, .animation-list.col-2 .animation-cover, .animation-list.col-2 .animation-cover .cover-image, .animation-list.col-2 .animation-cover .video-dark-cover, .banner-menu .menu-list .link, .light-comic-recommend, .light-comic-recommend .link.comic-cover, .light-comic-recommend .link.comic-cover .cover-image, section.promotion .promotion-list .promotion-link, section.promotion .promotion-list .promotion-cover {\n  border-radius: 0.1rem;\n  overflow: hidden; }\n\n.comic-list.col-3 .comic-item, .animation-list.col-2 .animation-link, .banner-menu, .light-comic-recommend, .light-comic-recommend .link.comic-cover .cover-image, section.time-list {\n  -webkit-box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06);\n  box-shadow: 0 0 0.125rem rgba(9, 2, 4, 0.06); }\n\n.comic-list.col-3 .comic-item .comic-cover, .comic-list.slide .comic-item .comic-cover, .comic-list.col-1 .comic-item .comic-cover, .light-comic-recommend .link.comic-cover {\n  background-image: url(\"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAANIAAAEYCAMAAAAeQ1gWAAAAgVBMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1XXN+nAAAAKnRSTlMA5v3yDSH07oH6fJ1KRrCoORzWWxPex3VqTwfRvI7hubWrhCiWBGVWPjJ1rRGyAAACcUlEQVR42u3aCW6jQBCF4WLfbGy8O96dZJzU/Q84kaIMOGBpEtMWtP7vAujpNU1XCwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAX5vtnPAwFousHf2QvIktZiP9NBFLXBz9EogNZidVuyJNIy3NxZQg3Tqu62zTQAwrcq1w12JGkbn/npEVUmOqInUGYsbU04pwKsYUR60azcSMpX6zFEP+eFcVrcWQqdaY6ak4aFU2E0OCUGvCQkqGKhqIMSNtkEnbgq1WZb4YE7jawA2kXcNIK/ZDMWipjVJp1XuoFS++mLTVRltp0+tES/OhmOVoI0faNK1VZFKijRJpU15W9CY1vYy010/urrmiHi48Tz/tAnmAwyO2h71+8RYvf8Y3qurVJn7QK+78lK6/Fda3T+1Ka+qF9etA5Dt6g7t9l9YV3gOOrQNXbwkNZLpozUXatrqd6SilXo2A483NmqTCzKDuTcWIcZrPHxZJilF5nTIqxBx/vHpZeHolFzOC5WGfeJPDMhDzgktcFuY9iy38t1W28MLcnkTAjz09D1bn7LiY7KNIP0TRfrI4ZufV4PlJescfpqdJojclk1M69KUvnga7jf6XzW7Qg7pe1yNPf8AbrV+ly2axoz/mxDPpKv8c6q+E546+VkNHf80ZSgfFepdYOidVtSzTWO/ldu2nmlzvdpRuifRukXRLC5E86RYLF56F24OFm7hI7NqWyMYDkY3HVhuHCytHQCsHdTuvU64uveIsX2zmUZSoJlE03yzyLO7npRcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA67y/iNlttzNAyewAAAABJRU5ErkJggg==\");\n  background-size: contain;\n  background-position: center;\n  background-color: white; }\n\nbody.debug .sub-title .desc, .sub-title body.debug .desc, body.debug .sub-title .link-more, .sub-title body.debug .link-more, body.debug .banner-menu .history-popup .npc-avatar, .banner-menu .history-popup body.debug .npc-avatar, body.debug .banner-menu .history-popup .text, .banner-menu .history-popup body.debug .text, body.debug .banner-menu .history-popup .close, .banner-menu .history-popup body.debug .close {\n  background-color: rgba(255, 0, 0, 0.3); }\n\n/* 子标题 */\n.sub-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.3rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  overflow: hidden;\n  /* 特殊子标题 */ }\n\n.title-content {\n  display: block;\n  text-indent: -2500rem;\n  font-size: 0; }\n\n.recommend .title-content {\n  width: 12.5rem;\n  height: 1.75rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem 0rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.light-comic .title-content {\n  width: 3.775rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -13rem 0rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.free-and-vip .title-content {\n  width: 3.85rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -2.25rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.promotion .title-content {\n  width: 3.825rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -4.5rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.update-today .title-content {\n  width: 4.575rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -6.75rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.animation .title-content {\n  width: 3.825rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -9rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.japan-comic .title-content {\n  width: 3.825rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -11.25rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n.new-comic .title-content {\n  width: 3.825rem;\n  height: 1.1rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -5.25rem -13.5rem;\n  background-size: 20.5rem 17.5rem;\n  width: 7.5rem;\n  height: 2rem;\n  background-repeat: no-repeat; }\n\n/* 今日免费子标题 */\n.sub-title .desc {\n  display: block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin-left: 0.1rem;\n  visibility: hidden;\n  font-size: 0.65rem;\n  font-weight: 200;\n  color: #969696; }\n\n.sub-title .link-more {\n  display: block;\n  text-indent: -2500rem;\n  font-size: 0;\n  width: 3rem;\n  height: 1.25rem;\n  width: 2.9rem;\n  height: 1.15rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -17rem -2.25rem;\n  background-size: 20.5rem 17.5rem;\n  width: 3rem;\n  height: 1.25rem;\n  background-repeat: no-repeat; }\n\n/* ------------------------------------------------------------ */\n/* 漫画列表 */\n.comic-list {\n  /* 三列漫画列表 */ }\n\n.comic-list .comic-title, .comic-list .comic-artist, .comic-list .comic-desc, .comic-list .comic-tag, .comic-list .comic-latest {\n  padding-top: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.comic-list.col-3 {\n  font-size: 0;\n  text-align: center;\n  margin-top: -0.75rem; }\n\n.comic-list.col-3 .comic-item {\n  display: inline-block;\n  width: 28%;\n  margin-left: 4%;\n  margin-top: 0.75rem;\n  vertical-align: top;\n  overflow: hidden;\n  background-color: #FFFFFF; }\n\n.comic-list.col-3 .comic-item:nth-child(3n) {\n  margin-right: 4%; }\n\n.comic-list.col-3 .comic-item .comic-link {\n  display: block; }\n\n.comic-list.col-3 .comic-item .comic-cover {\n  display: block;\n  position: relative;\n  width: 100%;\n  padding-bottom: 133.33333%;\n  margin-bottom: 0.4rem; }\n\n.comic-list.col-3 .comic-item .comic-cover .cover-image {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.comic-list.col-3 .comic-item .comic-title {\n  display: block;\n  margin-bottom: 0.25rem;\n  font-size: 0.7rem;\n  color: #535252; }\n\n.comic-list.col-3 .comic-item .comic-desc, .comic-list.col-3 .comic-item .comic-tag {\n  display: block;\n  margin-bottom: 0.375rem;\n  font-size: 0.6rem;\n  color: #969696;\n  min-height: 0.6rem; }\n\n.comic-list.col-3.no-tag .comic-item .comic-tag {\n  display: none; }\n\n.comic-list.col-3.no-desc .comic-item .comic-desc {\n  display: none; }\n\n.comic-list.slide {\n  width: 100%;\n  height: 9.75rem;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n  font-size: 0;\n  text-align: center;\n  white-space: nowrap; }\n\n.comic-list.slide.free .comic-item::after {\n  content: \"\";\n  display: block;\n  text-indent: -2500rem;\n  font-size: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 1.6rem;\n  height: 1.6rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -18.85rem -5.825rem;\n  background-size: 20.5rem 17.5rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  background-repeat: no-repeat; }\n\n.comic-list.slide .comic-item {\n  display: inline-block;\n  position: relative;\n  width: 7.25rem;\n  height: 9.75rem;\n  margin-left: 0.5rem;\n  margin-right: 0.25rem; }\n\n.comic-list.slide .comic-item .comic-link {\n  display: block;\n  height: 100%;\n  background-color: #F5F5EE;\n  overflow: hidden; }\n\n.comic-list.slide .comic-item .comic-cover {\n  margin: 1rem auto 0 auto; }\n\n.comic-list.slide .comic-item .comic-cover, .comic-list.slide .comic-item .comic-cover .cover-image {\n  display: block;\n  width: 5.25rem;\n  height: 7rem; }\n\n.comic-list.slide .comic-item .comic-title {\n  display: block;\n  margin: 0.375rem auto 0 auto;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: #535252; }\n\n.comic-list.col-1 .comic-item {\n  display: block;\n  background-color: #F5F4EF; }\n\n.comic-list.col-1 .comic-item .comic-link {\n  display: block;\n  height: 5.25rem;\n  margin-bottom: 0.6rem;\n  overflow: hidden; }\n\n.comic-list.col-1 .comic-item .comic-cover {\n  float: left;\n  margin-right: 0.65rem; }\n\n.comic-list.col-1 .comic-item .comic-cover, .comic-list.col-1 .comic-item .comic-cover .cover-image {\n  display: block;\n  width: 4rem;\n  height: 5.25rem; }\n\n.comic-list.col-1 .comic-item .comic-title {\n  display: block;\n  margin-top: 0.7rem;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: #535252; }\n\n.comic-list.col-1 .comic-item .comic-artist, .comic-list.col-1 .comic-item .comic-latest {\n  display: block;\n  margin-top: 0.35rem;\n  font-size: 0.6rem;\n  font-weight: normal;\n  color: #969696; }\n\n.comic-list.col-1 .comic-item .comic-desc, .comic-list.col-1 .comic-item .comic-tag {\n  display: none; }\n\n.comic-list.col-1 .rank-bar {\n  display: block;\n  margin-top: 0.35rem; }\n\n.comic-list.col-1 .rank-bar .rank-star {\n  float: left;\n  text-indent: -2500rem;\n  font-size: 0;\n  width: 0.55rem;\n  height: 0.55rem;\n  background: url(" + escape(__webpack_require__(86)) + ") no-repeat -19.925rem -3.75rem;\n  background-size: 20.5rem 17.5rem;\n  width: 0.55rem;\n  height: 0.55rem;\n  background-repeat: no-repeat; }\n\n.comic-list.col-1 .rank-bar .rank-score {\n  float: left;\n  margin-left: 0.125rem;\n  height: 0.55rem;\n  line-height: 0.55rem;\n  font-size: 0.5rem;\n  font-weight: 200;\n  color: #ff9a6a; }\n", ""]);

// exports


/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { class: _vm.typeClass }, [
    _c("h2", { staticClass: "sub-title" }, [
      _c("strong", { staticClass: "title-content" }, [
        _vm._v("[" + _vm._s(_vm.title) + "]")
      ]),
      _vm._v(" "),
      _c("small", { staticClass: "desc" }, [
        _vm._v("“" + _vm._s(_vm.titleDesc) + "”")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "link-more", attrs: { href: _vm.linkMore } }, [
        _vm._v("[更多]")
      ])
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { class: ["comic-list", "col-3", "no-tag", _vm.typeClass + "-list"] },
      _vm._l(_vm.comicData, function(item, index) {
        return _c("li", { class: ["comic-item", "item-" + (index + 1)] }, [
          _c("a", { staticClass: "comic-link", attrs: { href: item.url } }, [
            _vm._m(0, true),
            _vm._v(" "),
            _c("div", { staticClass: "comic-content" }, [
              _c("strong", { staticClass: "comic-title" }, [
                _vm._v(_vm._s(item.name))
              ]),
              _vm._v(" "),
              _c("small", { staticClass: "comic-desc" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(item.desc) +
                    "\n                    "
                )
              ])
            ])
          ])
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "comic-cover" }, [
      _c("img", {
        staticClass: "cover-image",
        attrs: { src: "item.cover_image.url" }
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32e50d3c", module.exports)
  }
}

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("recommend", {
        attrs: {
          title: "dfsaf",
          "title-desc": "dsf",
          "link-more": "sdag",
          "comic-data": [],
          "type-class": "recommend"
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "banner-menu under-top-bar" }, [
      _c("ul", { staticClass: "menu-list" }, [
        _c("li", { staticClass: "item" }, [
          _c(
            "a",
            {
              staticClass: "link",
              attrs: { href: "/category/index", "data-name": "category" }
            },
            [
              _c("i", { staticClass: "icon category" }, [_vm._v("[分]")]),
              _vm._v(" "),
              _c("span", { staticClass: "name" }, [_vm._v("分类")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "item" }, [
          _c(
            "a",
            {
              staticClass: "link",
              attrs: { href: "/vip/index", "data-name": "rank" }
            },
            [
              _c("i", { staticClass: "icon rank" }, [_vm._v("[奖]")]),
              _vm._v(" "),
              _c("span", { staticClass: "name" }, [_vm._v("VIP")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "item" }, [
          _c(
            "a",
            {
              staticClass: "link",
              attrs: { href: "/login/index", "data-name": "schedule" }
            },
            [
              _c("i", { staticClass: "icon time" }, [_vm._v("[表]")]),
              _vm._v(" "),
              _c("span", { staticClass: "name" }, [_vm._v("登录")])
            ]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "item" }, [
          _c(
            "a",
            {
              staticClass: "link",
              attrs: {
                href: "/bookshelf/index?type=his",
                "data-name": "history"
              }
            },
            [
              _c("i", { staticClass: "icon history" }, [_vm._v("[钟]")]),
              _vm._v(" "),
              _c("span", { staticClass: "name" }, [_vm._v("历史")])
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b4c8058", module.exports)
  }
}

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "/images/npc-avatar.png?2d139d01e61d1f65d035445099f66783";

/***/ })

});