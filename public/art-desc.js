(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{123:function(n,e,i){var t=i(124);"string"==typeof t&&(t=[[n.i,t,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(6)(t,o);t.locals&&(n.exports=t.locals)},124:function(n,e,i){var t=i(13);(n.exports=i(5)(!1)).push([n.i,'@charset "UTF-8";\n.mod-recommend .list-recommend .comic-item .comic-link, .mod-recommend .list-recommend .comic-item .comic-link .comic-cover, .mod-recommend .list-recommend .comic-item .comic-link .comic-cover img {\n  border-radius: 0.1rem;\n  overflow: hidden;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-info strong, .mod-recommend .list-recommend .comic-item .comic-link .comic-info small, .is-shared .float-bar.top .float-bar-title, .is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-desc {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 1px;\n}\n\n/*\n刷新1\n*/\n.small-icon {\n  width: 1rem;\n  height: 1rem;\n  background-image: url('+t(i(125))+');\n  background-size: 1rem 1rem;\n  background-repeat: no-repeat;\n  display: inline-block;\n  margin-bottom: -0.2rem;\n  margin-right: 0.4rem;\n}\n\n/* 悬浮栏 */\n.float-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  position: fixed;\n  z-index: 10;\n  left: 0;\n  width: 100%;\n  height: 3rem;\n  background-color: rgba(40, 40, 40, 0.95);\n  -webkit-transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease, -webkit-transform 300ms ease;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  /* 顶栏 */\n  /* 底栏 */\n}\n\n.float-bar.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.float-bar.top {\n  top: 0;\n  box-shadow: 0 0.05rem 0.125rem rgba(0, 0, 0, 0.26);\n}\n\n.float-bar.top.hidden {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n}\n\n.float-bar.top .float-bar-title {\n  -webkit-box-flex: 1;\n  flex: 1;\n  display: block;\n  color: #969696;\n  font-size: 0.75rem;\n}\n\n.float-bar.top .float-bar-title .title {\n  display: none;\n}\n\n.float-bar.top .float-bar-btn {\n  display: block;\n  padding: 0.825rem 0.75rem;\n  text-indent: -2500rem;\n  font-size: 0;\n}\n\n.float-bar.top .float-bar-btn::after {\n  content: "";\n  display: block;\n}\n\n.float-bar.top .float-bar-btn.back {\n  padding: 0.825rem 0.225rem;\n}\n\n.float-bar.top .float-bar-btn.back::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url('+t(i(8))+") no-repeat -25.4rem -10.2rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.top .float-bar-btn.home::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -22.2rem -10.2rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.top .float-bar-btn.bookshelf::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -8.35rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.top .float-bar-btn.more::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+') no-repeat -9.95rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom {\n  bottom: 0;\n  box-shadow: 0 -0.05rem 0.125rem rgba(0, 0, 0, 0.26);\n}\n\n.float-bar.bottom.hidden {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n\n.float-bar.bottom .float-bar-btn {\n  -webkit-box-flex: 1;\n  flex: 1;\n  display: block;\n  height: 100%;\n  text-align: center;\n  text-indent: -2500rem;\n  font-size: 0;\n}\n\n.float-bar.bottom .float-bar-btn::after {\n  content: "";\n  display: block;\n  margin: 0.825rem auto;\n}\n\n.float-bar.bottom .float-bar-btn.chapter-list::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url('+t(i(8))+") no-repeat -11.55rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom .float-bar-btn.view-mode.scroll::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -13.15rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom .float-bar-btn.view-mode.swipe::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -14.75rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom .float-bar-btn.download::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -16.35rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom .float-bar-btn.prev-chapter::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+") no-repeat -19rem -10.2rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar.bottom .float-bar-btn.next-chapter::after {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+') no-repeat -20.6rem -10.2rem;\n  background-size: 27.1rem 26.65rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar-menu {\n  position: fixed;\n  z-index: 10;\n  width: 4.25rem;\n  -webkit-transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;\n  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease, -webkit-transform 300ms ease;\n  opacity: 1;\n  visibility: visible;\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  -webkit-transform-origin: 80% 0;\n  transform-origin: 80% 0;\n}\n\n.float-bar-menu.top-right {\n  top: 3rem;\n  right: 0.875rem;\n}\n\n.float-bar-menu.hidden {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n\n.float-bar-menu .menu-arrow-tag {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  height: 0.65rem;\n  overflow: hidden;\n}\n\n.float-bar-menu .menu-arrow-tag::after {\n  content: "";\n  display: block;\n  width: 0.65rem;\n  height: 0.65rem;\n  background-color: rgba(40, 40, 40, 0.95);\n  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.26);\n  -webkit-transform: translate(3rem, 0.3rem) rotate(45deg);\n  transform: translate(3rem, 0.3rem) rotate(45deg);\n}\n\n.float-bar-menu .menu-content {\n  background-color: rgba(40, 40, 40, 0.95);\n  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.26);\n  border-radius: 0.1rem;\n}\n\n.float-bar-menu .float-bar-menu-btn {\n  display: block;\n  color: #969696;\n  font-size: 0.75rem;\n  line-height: 2.25rem;\n}\n\n.float-bar-menu .float-bar-menu-btn:nth-child(n+2) {\n  position: relative;\n}\n\n.float-bar-menu .float-bar-menu-btn:nth-child(n+2)::before {\n  content: "";\n  display: block;\n  position: absolute;\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  width: 100%;\n  top: 0;\n  width: 200%;\n  left: -50%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-top: 1px solid rgba(255, 255, 255, 0.15);\n}\n\n.float-bar-menu .float-bar-menu-btn .icon {\n  display: inline-block;\n  margin: 0rem 0.2rem 0rem 0.4rem;\n}\n\n.float-bar-menu .float-bar-menu-btn.share .icon {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url('+t(i(8))+") no-repeat -17.95rem -20.325rem;\n  background-size: 27.1rem 26.65rem;\n  width: 1.35rem;\n  height: 1.35rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar-menu .float-bar-menu-btn.comment-list .icon {\n  width: 1.35rem;\n  height: 1.35rem;\n  background: url("+t(i(8))+') no-repeat -23.8rem -10.2rem;\n  background-size: 27.1rem 26.65rem;\n  width: 1.35rem;\n  height: 1.35rem;\n  background-repeat: no-repeat;\n}\n\n.float-bar-menu .float-bar-menu-btn .icon, .float-bar-menu .float-bar-menu-btn .text {\n  vertical-align: middle;\n}\n\n/* 浏览控制按键 */\n.nav-ctrl-btn {\n  display: block;\n  height: 2.25rem;\n  line-height: 2.25rem;\n  background: #ff9a6a;\n  text-align: center;\n  font-size: 0.75rem;\n}\n\n.nav-ctrl-btn.prev {\n  position: relative;\n}\n\n.nav-ctrl-btn.prev::after {\n  content: "";\n  display: block;\n  position: absolute;\n  -webkit-transform-origin: center bottom;\n  transform-origin: center bottom;\n  width: 100%;\n  bottom: 0;\n  width: 200%;\n  left: -50%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-bottom: 1px solid #C5C5C5;\n}\n\n.nav-ctrl-btn.next {\n  position: relative;\n}\n\n.nav-ctrl-btn.next::before {\n  content: "";\n  display: block;\n  position: absolute;\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  width: 100%;\n  top: 0;\n  width: 200%;\n  left: -50%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-top: 1px solid #C5C5C5;\n}\n\n.nav-ctrl-btn, .nav-ctrl-btn:visited, .nav-ctrl-btn:link {\n  color: #FFFFFF;\n}\n\n/* 漫画图片区域 */\n.comic-pic-area .comic-pic-list-loading {\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n\n.comic-pic-area .comic-pic-list-loading .item {\n  position: relative;\n  top: 50%;\n}\n\n.comic-pic-area .view-mode-hint {\n  display: none;\n  position: fixed;\n  z-index: 6;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  -webkit-transition: opacity 500ms ease;\n  transition: opacity 500ms ease;\n  pointer-events: none;\n}\n\n.comic-pic-area .view-mode-hint.scroll {\n  width: 8.1rem;\n  height: 9.95rem;\n  background: url('+t(i(8))+") no-repeat -19rem 0rem;\n  background-size: 27.1rem 26.65rem;\n  width: 8.1rem;\n  height: 9.95rem;\n  background-repeat: no-repeat;\n}\n\n.comic-pic-area .view-mode-hint.swipe {\n  width: 8.95rem;\n  height: 7.125rem;\n  background: url("+t(i(8))+') no-repeat -17.55rem -12.95rem;\n  background-size: 27.1rem 26.65rem;\n  width: 8.95rem;\n  height: 7.125rem;\n  background-repeat: no-repeat;\n}\n\n.comic-pic-area .view-mode-hint.scroll, .comic-pic-area .view-mode-hint.swipe {\n  display: block;\n  opacity: 0;\n}\n\n.comic-pic-area .view-mode-hint.show {\n  display: block;\n  opacity: 1;\n}\n\n.comic-pic-area .comic-pic-list {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.comic-pic-area .comic-pic-item {\n  width: 100%;\n  background: #1F2123 url("data:image/png;base64, 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") no-repeat scroll center 2.5rem;\n  background-size: 50%;\n  border-top: 0 solid #353535;\n  border-bottom: 0 solid #353535;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-pad, .comic-pic-area .comic-pic-item .comic-pic-box {\n  width: 100%;\n  -webkit-transition: opacity 800ms ease;\n  transition: opacity 800ms ease;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic {\n  display: block;\n  width: 100%;\n}\n\n.comic-pic-area .comic-pic-item.pic-unloaded .comic-pic-box, .comic-pic-area .comic-pic-item.pic-loading .comic-pic-box {\n  opacity: 0;\n  display: none;\n}\n\n.comic-pic-area .comic-pic-item.pic-unloaded .comic-pic-pad, .comic-pic-area .comic-pic-item.pic-loading .comic-pic-pad {\n  display: block;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-box {\n  opacity: 0;\n  display: block;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-pad {\n  display: none;\n}\n\n.comic-pic-area .comic-pic-item.pic-loaded {\n  background: none;\n}\n\n.comic-pic-area .comic-pic-item.pic-loaded .comic-pic-box {\n  opacity: 1;\n  display: block;\n}\n\n.comic-pic-area .comic-pic-item.pic-loaded .comic-pic-pad {\n  display: none;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-pad {\n  position: relative;\n  padding-top: 100%;\n  text-align: center;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-pad .err-info {\n  display: block;\n  position: absolute;\n  top: 7.5rem;\n  left: 0;\n  width: 100%;\n  color: #C5C5C5;\n  line-height: 2;\n  font-size: 1rem;\n}\n\n.comic-pic-area .comic-pic-item .comic-pic-pad .reload-btn {\n  display: block;\n  width: 6.5rem;\n  height: 2.25rem;\n  line-height: 2.25rem;\n  margin: 0.625rem auto;\n  background-color: transparent;\n  border: 0.125rem solid #ff9a6a;\n  border-radius: 0.15rem;\n  color: #ff9a6a;\n  font-size: 0.9rem;\n}\n\n/* 结束信息区域 */\n.end-chapter-ads .info-text {\n  padding-top: 2.5rem;\n  padding-bottom: 1.75rem;\n  color: #969696;\n  font-size: 0.75rem;\n  text-align: center;\n}\n\n.end-chapter-ads .info-control {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  position: relative;\n  padding-top: 2rem;\n  padding-bottom: 2.25rem;\n}\n\n.end-chapter-ads .info-control::before {\n  content: "";\n  display: block;\n  position: absolute;\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  width: 100%;\n  top: 0;\n  width: 200%;\n  left: -50%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-top: 1px solid #F5F5EE;\n}\n\n.end-chapter-ads .control-btn {\n  display: block;\n  margin: 0rem 1.675rem;\n}\n\n.end-chapter-ads .control-btn .icon {\n  display: block;\n}\n\n.end-chapter-ads .control-btn .text {\n  display: block;\n  height: 1.5rem;\n  line-height: 1.5rem;\n  text-align: center;\n  color: #ff9a6a;\n}\n\n.end-chapter-ads .control-btn.collect .icon {\n  width: 3.5rem;\n  height: 3.5rem;\n  background: url('+t(i(8))+") no-repeat 0rem -23.15rem;\n  background-size: 27.1rem 26.65rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-repeat: no-repeat;\n}\n\n.end-chapter-ads .control-btn.collect .icon.active {\n  width: 3.5rem;\n  height: 3.5rem;\n  background: url("+t(i(8))+") no-repeat -3.75rem -23.15rem;\n  background-size: 27.1rem 26.65rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-repeat: no-repeat;\n}\n\n.end-chapter-ads .control-btn.comment .icon {\n  width: 3.5rem;\n  height: 3.5rem;\n  background: url("+t(i(8))+') no-repeat -7.5rem -23.15rem;\n  background-size: 27.1rem 26.65rem;\n  width: 3.5rem;\n  height: 3.5rem;\n  background-repeat: no-repeat;\n}\n\n/* 推荐漫画列表 */\n.mod-recommend {\n  padding-top: 0.75rem;\n  padding-bottom: 4rem;\n  position: relative;\n}\n\n.mod-recommend::before {\n  content: "";\n  display: block;\n  position: absolute;\n  -webkit-transform-origin: center top;\n  transform-origin: center top;\n  width: 100%;\n  top: 0;\n  width: 200%;\n  left: -50%;\n  -webkit-transform: scale(0.5);\n  transform: scale(0.5);\n  border-top: 1px solid #F5F5EE;\n}\n\n.mod-recommend h2 {\n  font-size: 0.7rem;\n  color: #969696;\n  padding-bottom: 0.75rem;\n  line-height: 100%;\n  font-weight: normal;\n  padding-left: 0.75rem;\n  box-sizing: border-box;\n}\n\n.mod-recommend .list-recommend {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link {\n  display: block;\n  width: 5.25rem;\n  background-color: #F5F5EE;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-cover {\n  width: 5.25rem;\n  height: 7rem;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-cover img {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-info strong, .mod-recommend .list-recommend .comic-item .comic-link .comic-info small {\n  display: block;\n  box-sizing: border-box;\n  text-align: center;\n  line-height: 100%;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-info strong {\n  font-size: 0.7rem;\n  color: #535252;\n  padding-top: 0.375rem;\n}\n\n.mod-recommend .list-recommend .comic-item .comic-link .comic-info small {\n  padding-top: 0.25rem;\n  padding-bottom: 0.3rem;\n  font-size: 0.6rem;\n  color: #969696;\n}\n\n.mod-recommend .list-recommend .comic-item:nth-of-type(2) {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.progress-box {\n  position: fixed;\n  z-index: 9;\n  right: 0;\n  bottom: 0;\n  padding: 0.3rem 0.35rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 0.6rem;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\n.progress-box.out {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n\n.hidden-area {\n  display: none;\n}\n\n/******************************************************************************\n* 分享模式\n*******************************************************************************/\n.app-guiding.shared {\n  display: none;\n}\n\n.chap-gap {\n  display: none;\n}\n\n.comic-pic-detail {\n  display: none;\n}\n\n.is-shared .chap-gap {\n  display: block;\n}\n\n.is-shared .app-guiding.shared {\n  display: block;\n}\n\n.is-shared .float-bar.top .float-bar-title {\n  text-align: center;\n  width: 100%;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  box-sizing: border-box;\n}\n\n.is-shared .float-bar.top .float-bar-btn {\n  display: none;\n}\n\n.is-shared .float-bar.bottom {\n  display: none;\n}\n\n.is-shared .float-bar.top {\n  display: none;\n}\n\n.is-shared .comic-pic-area .nav-ctrl-btn {\n  display: none !important;\n}\n\n.is-shared .comic-pic-area .end-chapter-ads {\n  display: none;\n}\n\n.is-shared .comic-pic-area .end-chapter-ads .cooperation-state {\n  display: none;\n}\n\n.is-shared .comic-pic-detail {\n  display: block;\n  padding: 0.75rem 0.75rem 6.875rem 0.75rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container {\n  position: relative;\n  box-sizing: border-box;\n  font-size: 0;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-cover {\n  width: 100%;\n  border-radius: 0.75rem;\n  box-sizing: border-box;\n  box-shadow: 0 0 0.25rem 0 #ff9a6a;\n  border: 0.025rem solid rgba(255, 154, 106, 0.5);\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  height: 6.275rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask {\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.5)));\n  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));\n  left: 0;\n  bottom: 0.025rem;\n  border-radius: 0.75rem 0.75rem 0.875rem 0.875rem;\n  box-sizing: border-box;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-title {\n  font-size: 0.85rem;\n  color: #ffffff;\n  font-weight: bold;\n  margin: 3.625rem 0.625rem 0rem 0.925rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-title .tag-type {\n  font-weight: normal;\n  padding: 0rem 0.375rem;\n  vertical-align: middle;\n  background: rgba(0, 0, 0, 0.3);\n  margin: 0rem 0.15rem 0rem 0rem;\n  font-size: 0.5rem;\n  border: 0.025rem solid transparent;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-title .tag-type:first-child {\n  margin-left: 0.375rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-title .c-y {\n  color: #faad41;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-title .c-r {\n  color: #fe6e6e;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .mask .comic-desc {\n  font-size: 0.55rem;\n  color: #ffffff;\n  width: 100%;\n  height: 0.75rem;\n  line-height: 0.75rem;\n  margin-top: 0.5rem;\n  padding-left: 0.925rem;\n  box-sizing: border-box;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info {\n  background-color: #ffffff;\n  padding: 0rem 0.25rem;\n  width: 15.925rem;\n  height: 2.5rem;\n  border-radius: 0rem 0rem 0.75rem 0.75rem;\n  margin: 0 auto;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0);\n  bottom: -2.5rem;\n  box-shadow: 0 0.05rem 1rem 0 #ff9a6a;\n  border: 0.025rem solid rgba(255, 154, 106, 0.3);\n  box-sizing: border-box;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-detail {\n  font-size: 0.85rem;\n  line-height: 2.5rem;\n  padding-left: 0.375rem;\n  color: #ff9a6a;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-detail small {\n  font-size: 0.55rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-detail .go-to-read {\n  color: #ff9a6a;\n  float: right;\n  margin-right: 0.375rem;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-detail .go-to-read .icon-circle-arrow-right {\n  display: inline-block;\n  margin-left: 0.25rem;\n  width: 0.5rem;\n  height: 0.5rem;\n  background-image: url('+t(i(126))+");\n  background-size: 0.5rem 0.5rem;\n  background-repeat: no-repeat;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-from {\n  position: absolute;\n  font-size: 0.55rem;\n  color: #333333;\n  right: -0.5rem;\n  bottom: -1.625rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-pic-mask .comic-cover-info .comic-from .line {\n  display: inline-block;\n  width: 0.175rem;\n  height: 0.675rem;\n  background: #ff9a6a;\n  border-radius: 0.5rem;\n  vertical-align: sub;\n  margin-left: 0.25rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-chap-title {\n  position: absolute;\n  font-size: 0.85rem;\n  color: #000000;\n  width: 100%;\n  text-align: center;\n  bottom: -6.375rem;\n}\n\n.is-shared .comic-pic-detail .comic-pic-container .comic-chap-title .chap-title {\n  margin-left: 0.25rem;\n}\n\n.app-down-2 {\n  position: fixed;\n  z-index: 50;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n\n.app-down-2 img {\n  display: block;\n  width: 100%;\n}\n\n/******************************************************************\n*阅读最新一话时底部弹层样式\n*******************************************************************/\n.down-app-mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n}\n\n.down-app-mask .download {\n  position: absolute;\n  top: 50%;\n  margin-top: -6.35rem;\n  width: 18.75rem;\n  height: 12.7rem;\n  background: url("+t(i(8))+") no-repeat 0rem 0rem;\n  background-size: 27.1rem 26.65rem;\n  width: 18.75rem;\n  height: 12.7rem;\n  background-repeat: no-repeat;\n}\n\n.down-app-mask .close-btn {\n  position: absolute;\n  width: 1.3rem;\n  height: 1.3rem;\n  right: 1.825rem;\n  top: 2.6rem;\n}\n\n.down-app-mask .go-read-comic {\n  position: absolute;\n  width: 5.5rem;\n  height: 2.375rem;\n  bottom: 1.5rem;\n  left: 6.825rem;\n}\n\nsection.comic-pic-area.swipe-mode {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: black;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item {\n  display: none;\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item.working {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item.trans {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item .comic-pic-pad, section.comic-pic-area.swipe-mode .comic-pic-item .comic-pic-box {\n  -webkit-box-flex: 1;\n  flex: 1;\n  height: 1%;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item .comic-pic-box {\n  position: relative;\n  z-index: 3;\n}\n\nsection.comic-pic-area.swipe-mode .comic-pic-item .comic-pic {\n  position: absolute;\n  z-index: 4;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\nsection.comic-pic-area.swipe-mode .nav-ctrl-btn {\n  display: none;\n  position: absolute;\n  z-index: 5;\n  top: 25%;\n  width: 5rem;\n  -webkit-writing-mode: vertical-rl;\n  -ms-writing-mode: tb-rl;\n  writing-mode: vertical-rl;\n  line-height: 5rem;\n  height: 50%;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\nsection.comic-pic-area.swipe-mode .nav-ctrl-btn.prev {\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n}\n\nsection.comic-pic-area.swipe-mode .nav-ctrl-btn.next {\n  right: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}\n\nsection.comic-pic-area.swipe-mode .nav-ctrl-btn.show {\n  display: block;\n}\n\nsection.comic-pic-area.swipe-mode .nav-ctrl-btn.show.in {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n\nsection.comic-pic-area.swipe-mode .end-chapter-ads {\n  display: none;\n  position: absolute;\n  z-index: 6;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: white;\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}\n\nsection.comic-pic-area.swipe-mode .end-chapter-ads.loaded {\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\nsection.comic-pic-area.swipe-mode .end-chapter-ads.in {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}",""])},125:function(n,e){n.exports="/images/share-icon.png?447a35c67ee367fb9d2965dcee48787a"},126:function(n,e){n.exports="/images/icon-arrow.png?3023fd939f16c0180d141de07501c916"},241:function(n,e,i){"use strict";i.r(e);i(123);var t=i(4),o=i(2),r=i(3),a=i.n(r),c=i(67),m=i(1);function s(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}a.a.use(c.a,{preLoad:1.3,attempt:3});var d={name:"Art",components:{},props:["id"],data:function(){return{urls:[],tabHide:!1,current:1,comic_id:0,min:1,max:1}},created:function(){},mounted:function(){var n,e,i,r=this;this.min=this.$route.query.min,this.max=this.$route.query.max,this.comic_id=this.$route.query.comic_id,(n={id:this.id,comic_id:this.comic_id},e=n.id,i=n.comic_id,t.a.request({url:"api/comic_info?section_id="+e+"&comic_id="+i,method:"get"})).then(function(n){"success"==n.status?(r.urls=n.data.urls,r.current=n.data.weight,r.comic_id=n.data.article_id,r.setMetaTitle(n.data.title),r.setDescription(n.data.descriptions),r.setKeywords(n.data.keywords)):Object(o.Message)({showClose:!0,message:n.message,type:"error"}),console.log(n)},function(n){console.log(n)}),window.onscroll=function(){var n=document.documentElement.scrollTop||document.body.scrollTop,e=document.documentElement.clientHeight||document.body.clientHeight,i=document.documentElement.scrollHeight||document.body.scrollHeight;n>0&&(r.tabHide=!0),n+e==i&&console.log("距顶部"+n+"可视区高度"+e+"滚动条总高度"+i)},setTimeout(function(){r.tabHide=!0},2e3)},methods:function(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},t=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(i).filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),t.forEach(function(e){s(n,e,i[e])})}return n}({},Object(m.c)(["setNoTitle","setTitle","setMetaTitle","setDescription","setKeywords"]),{showTob:function(){var n=this;this.tabHide=!1,setTimeout(function(){n.tabHide=!0},2e3)},next:function(){var n,e,i,r=this;this.max!=this.current&&(n={weight:this.current,comic_id:this.comic_id},e=n.weight,i=n.comic_id,t.a.request({url:"api/next_section?comic_id="+i+"&weight="+e,method:"get"})).then(function(n){"success"==n.status?(r.urls=n.data.urls,r.current=n.data.weight,r.$router.replace({path:"/art/"+n.data.id,query:{comic_id:r.comic_id,min:r.min,max:r.max}})):Object(o.Message)({showClose:!0,message:n.message,type:"error"}),console.log(n)})},prev:function(){var n,e,i,r=this;this.min!=this.current&&(n={weight:this.current,comic_id:this.comic_id},e=n.weight,i=n.comic_id,t.a.request({url:"api/prev_section?comic_id="+i+"&weight="+e,method:"get"})).then(function(n){"success"==n.status?(r.urls=n.data.urls,r.current=n.data.weight,r.$router.replace({path:"/art/"+n.data.id,query:{comic_id:r.comic_id,min:r.min,max:r.max}})):Object(o.Message)({showClose:!0,message:n.message,type:"error"}),console.log(n)})}})},l=i(0),p=Object(l.a)(d,function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",[i("section",{class:{"float-bar":!0,top:!0,hidden:n.tabHide}},[i("a",{staticClass:"float-bar-btn back",on:{click:function(e){return n.$router.go(-1)}}},[n._v("[返回]")]),n._v(" "),n._m(0),n._v(" "),i("router-link",{staticClass:"float-bar-btn home",attrs:{to:"/"}},[n._v("[首页]")])],1),n._v(" "),n._m(1),n._v(" "),i("section",{class:{"float-bar":!0,bottom:!0,hidden:n.tabHide}},[i("router-link",{staticClass:"float-bar-btn chapter-list",attrs:{to:{path:"/chapter-list/"+n.comic_id,query:{comic_id:n.comic_id,min:n.min,max:n.max}}}},[n._v("[目录]")]),n._v(" "),i("a",{staticClass:"float-bar-btn prev-chapter",on:{click:n.prev}},[n._v("[上一章]")]),n._v(" "),i("a",{staticClass:"float-bar-btn next-chapter",on:{click:n.next}},[n._v("[下一章]")])],1),n._v(" "),i("section",{staticClass:"comic-pic-area"},[i("a",{staticClass:"nav-ctrl-btn prev",on:{click:n.prev}},[n._v(n._s(n.current==n.min?"前面没有更多了~":"点击加载上一章节"))]),n._v(" "),i("div",{staticClass:"view-mode-hint"}),n._v(" "),i("section",{staticClass:"comic-pic-list-all",on:{click:n.showTob}},[i("ul",{staticClass:"comic-pic-list"},n._l(n.urls,function(e){return i("li",{staticClass:"comic-pic-item pic-loaded"},[i("div",{staticClass:"comic-pic-pad",staticStyle:{"padding-top":"78.625%"}}),n._v(" "),i("div",{staticClass:"comic-pic-box"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"url"}],staticClass:"comic-pic"})])])}),0)]),n._v(" "),i("a",{staticClass:"nav-ctrl-btn next",style:{display:n.current==n.max?"none":"block"},on:{click:n.next}},[n._v("点击加载下一章节")]),n._v(" "),i("section",{staticClass:"end-chapter-ads"})]),n._v(" "),n._m(2)])},[function(){var n=this.$createElement,e=this._self._c||n;return e("label",{staticClass:"float-bar-title"},[e("span",{staticClass:"title"},[this._v("我爱上了女友的……")])])},function(){var n=this.$createElement,e=this._self._c||n;return e("section",{staticClass:"float-bar-menu top-right hidden"},[e("div",{staticClass:"menu-arrow-tag"}),this._v(" "),e("div",{staticClass:"menu-content"},[e("a",{staticClass:"float-bar-menu-btn share"},[e("i",{staticClass:"icon"}),this._v(" "),e("span",{staticClass:"text"},[this._v("分享")])]),this._v(" "),e("a",{staticClass:"float-bar-menu-btn comment-list",attrs:{href:"/comment/index/id/622756"}},[e("i",{staticClass:"icon"}),this._v(" "),e("span",{staticClass:"text"},[this._v("评论")])])])])},function(){var n=this.$createElement,e=this._self._c||n;return e("div",{staticClass:"down-guide",staticStyle:{display:"none"}},[e("div",{staticClass:"down-app-mask"},[e("div",{staticClass:"download"},[e("a",{staticClass:"close-btn",attrs:{href:"javascript:;"}}),this._v(" "),e("div",{staticClass:"go-read-comic"})])])])}],!1,null,null,null).exports;e.default=p},8:function(n,e){n.exports="/images/sc_img_chapter_v2.1.png?414e0066b1e00e019060d18d6f795a76"}}]);