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

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ })

});