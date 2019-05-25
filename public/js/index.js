(function() {
    var utils = {
        getByClass: document.getElementsByClassName ?
            function(className, parent) {
                return (parent || document).getElementsByClassName(className) || []
            }: function(className, parent, tagName) {
                var list = [],
                    es = (parent || document).getElementsByTagName(tagName || "*");
                for (var i = 0,
                         len = es.length,
                         e; i < len; i++) {
                    e = es[i];
                    if (e.className === className) list.push(e)
                }
                return list
            },
        isDOM: typeof HTMLElement === "object" ?
            function(obj) {
                return obj instanceof HTMLElement
            }: function(obj) {
                return obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string"
            },
        each: function(arr, func) {
            for (var i = 0,
                     len = arr.length; i < len; i++) if (func.call(arr[i], i) === false) return
        },
        apply: function(obj, func, args) {
            if (typeof func === "function") return func.apply(obj, args)
        }
    };
    var TouchHandler = function(params) {
        var obj = params.obj,
            downHandler = params.downHandler,
            moveHandler = params.moveHandler,
            upHandler = params.upHandler;
        this.obj = obj;
        this.downHandler = downHandler;
        this.moveHandler = moveHandler;
        this.upHandler = upHandler;
        this.fingerDown = false;
        this.startPos = this.endPos = {
            x: 0,
            y: 0
        };
        this.bind()
    };
    TouchHandler.getTouchPos = function(e) {
        var t = e.touches ? e.touches[0] : e;
        var x = t.pageX || t.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
        var y = t.pageY || t.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
        return {
            x: x,
            y: y
        }
    };
    TouchHandler.prototype.bind = function() {
        var _this = this,
            obj = _this.obj;
        var isWindows = window.navigator.userAgent.toLowerCase().indexOf("windows") >= 0;
        obj.addEventListener(isWindows ? "mousedown": "touchstart",
            function(e) {
                _this.start(e);
                if (isWindows) e.preventDefault()
            });
        obj.addEventListener(isWindows ? "mousemove": "touchmove",
            function(e) {
                _this.move(e)
            });
        obj.addEventListener(isWindows ? "mouseup": "touchend",
            function(e) {
                _this.end(e)
            });
        obj.addEventListener("mouseleave",
            function(e) {
                _this.end(e)
            })
    };
    TouchHandler.prototype.start = function(e) {
        if (!this.fingerDown) {
            var p = TouchHandler.getTouchPos(e);
            if (utils.apply(this, this.downHandler, [e, 0, 0]) === false) return;
            this.fingerDown = true;
            this.startPos = this.endPos = p;
            this.startTime = this.lastMoveTime = new Date
        }
    };
    TouchHandler.prototype.move = function(e) {
        if (this.fingerDown) {
            this.moveTime = new Date;
            if (this.moveTime - this.lastMoveTime > 10) {
                var p = this.endPos = TouchHandler.getTouchPos(e),
                    sp = this.startPos;
                var dx = p.x - sp.x,
                    dy = p.y - sp.y;
                utils.apply(this, this.moveHandler, [e, dx, dy]);
                this.lastMoveTime = this.moveTime
            }
        }
    };
    TouchHandler.prototype.end = function(e) {
        if (this.fingerDown) {
            this.fingerDown = false;
            var p = this.endPos,
                sp = this.startPos;
            var dx = p.x - sp.x,
                dy = p.y - sp.y;
            this.endTime = new Date;
            this.time = this.endTime - this.startTime;
            utils.apply(this, this.upHandler, [e, dx, dy, this.time])
        }
    };
    var styles = ".gallery-list {\r\n  display: block;\r\n  position: relative;\r\n  list-style: none;\r\n  overflow: hidden;\r\n  padding: 0; }\r\n  .gallery-list .gallery-item {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%; }\r\n    .gallery-list .gallery-item > *, .gallery-list .gallery-item img {\r\n      display: block;\r\n      width: 100%;\r\n      height: 100%; }\r\n  .gallery-list.trans .gallery-item {\r\n    -webkit-transition: -webkit-transform 300ms ease;\r\n    transition: -webkit-transform 300ms ease;\r\n    transition: transform 300ms ease;\r\n    transition: transform 300ms ease, -webkit-transform 300ms ease; }\r\n";
    var Gallery = function(opt) {
        var listClass = opt.listClass || "gallery-list",
            itemClass = opt.itemClass || "gallery-item",
            position = opt.position,
            width = opt.width,
            height = opt.height,
            index = opt.index | 0,
            onSwitchStart = opt.onSwitchStart,
            onSwitchEnd = opt.onSwitchEnd,
            playInterval = opt.playInterval | 0;
        var list = this.list = utils.getByClass(listClass)[0];
        if (!list) throw "\u6ca1\u6709\u627e\u5230\u5217\u8868\u5143\u7d20list: ." + listClass;
        this.itemTagName = list.tagName === "UL" || list.tagName === "OL" ? "LI": "DIV";
        position !== undefined && (list.style.position = position || "relative");
        width !== undefined && (list.style.width = typeof width == "string" ? width: (width | 0) + "px");
        height !== undefined && (list.style.height = typeof height == "string" ? height: (height | 0) + "px");
        list.classList.add("trans");
        this.listClass = listClass;
        this.itemClass = itemClass;
        this.onSwitchStart = onSwitchStart;
        this.onSwitchEnd = onSwitchEnd;
        this._createStyle();
        this._bindEvent();
        this.checkItems();
        this.setIndex(index);
        this.setPlayInterval(playInterval)
    };
    Gallery.prototype = {
        _createStyle: function() {
            var listClass = String(this.listClass),
                itemClass = String(this.itemClass);
            this.style = document.createElement("STYLE");
            this.styleText = styles.replace(/gallery-list/g, listClass).replace(/gallery-item/g, itemClass);
            this.style.innerHTML = this.styleText;
            this.list.parentNode.insertBefore(this.style, this.list)
        },
        _bindEvent: function() {
            if (!this.touchHandler) {
                var context = this,
                    touchHandler = this.touchHandler = new TouchHandler({
                        obj: this.list
                    }),
                    boxWidth = context.list.offsetWidth;
                window.addEventListener("resize",
                    function() {
                        boxWidth = context.list.offsetWidth
                    });
                touchHandler.context = this;
                touchHandler.downHandler = function(e) {
                    var context = this.context;
                    if (context._isAnimating) return false;
                    else {
                        e.preventDefault();
                        context.cancelPlayInterval();
                        context.list.classList.remove("trans");
                        return true
                    }
                };
                touchHandler.moveHandler = function(e, dx) {
                    var context = this.context,
                        items = [context.prevItem, context.currItem, context.nextItem],
                        per = dx * 100 / boxWidth;
                    per = Math.min(Math.max(per, -120), 120);
                    utils.each(items,
                        function(i) {
                            var elem = this,
                                offset = (i - 1) * 100;
                            elem.style.webkitTransform = elem.style.transform = "translate3d(" + (per + offset) + "%,0,0)"
                        });
                    context._isAnimating = true
                };
                touchHandler.upHandler = function(e, dx, dy, time) {
                    var context = this.context;
                    context.list.classList.add("trans");
                    if (time < 300 && Math.abs(dx) < 10) {
                        context._animateTo(0);
                        context.list.setAttribute("data-can-click", "yes");
                        var link = context.currItem.getElementsByTagName("a")[0];
                        link && link.click()
                    } else {
                        var bound = boxWidth * .1,
                            delta = dx > bound ? -1 : dx < -bound ? 1 : 0;
                        context._animateTo(delta);
                        context.list.setAttribute("data-can-click", "no")
                    }
                };
                this.list.addEventListener("click",
                    function(e) {
                        var canClick = context.list.getAttribute("data-can-click");
                        if (!canClick || canClick === "no") {
                            e.preventDefault();
                            e.stopPropagation()
                        } else context.list.setAttribute("data-can-click", "no")
                    })
            }
        },
        _animateTo: function(delta) {
            var context = this,
                items = this.items,
                itemsCount = items.length,
                showItems = [this.prevItem, this.currItem, this.nextItem],
                newIndex = (context.index + itemsCount + delta) % itemsCount,
                oldIndex = context.index,
                per = -delta * 100;
            if (utils.apply(context, context.onSwitchStart, [newIndex, oldIndex]) === false) {
                context.setIndex(oldIndex);
                return
            }
            utils.each(showItems,
                function(i) {
                    var elem = this,
                        offset = (i - 1) * 100;
                    elem.style.webkitTransform = elem.style.transform = "translate3d(" + (per + offset) + "%,0,0)"
                });
            window.setTimeout(function() {
                    context.setIndex(newIndex);
                    utils.apply(context, context.onSwitchEnd, [newIndex, oldIndex]);
                    context.setPlayInterval(context.playInterval)
                },
                300)
        },
        _updateItemPos: function(animation) {
            var context = this,
                list = this.list,
                items = this.items,
                index = this.index; ! animation && list.classList.remove("trans");
            utils.each(items,
                function(i) {
                    var elem = this,
                        elemIndex = i,
                        offset = elem == context.prevItem ? -100 : elem == context.nextItem ? 100 : elemIndex < index ? -100 : elemIndex > index ? 100 : 0;
                    elem.style.webkitTransform = elem.style.transform = "translate3d(" + offset + "%,0,0)";
                    return elem.offsetWidth || true
                }); ! animation && list.classList.add("trans");
            this._isAnimating = false
        },
        setIndex: function(index, animation) {
            var context = this,
                items = this.items,
                itemsCount = items.length,
                itemClass = this.itemClass,
                prevIndex = (index - 1 + itemsCount) % itemsCount,
                currIndex = (index + itemsCount) % itemsCount,
                nextIndex = (index + 1 + itemsCount) % itemsCount;
            utils.each(items,
                function(i) {
                    var item = this;
                    switch (i) {
                        case prevIndex:
                            context.prevItem = item;
                            item.className = itemClass + " prev";
                            break;
                        case currIndex:
                            context.currItem = item;
                            item.className = itemClass + " curr";
                            break;
                        case nextIndex:
                            context.nextItem = item;
                            item.className = itemClass + " next";
                            break;
                        default:
                            item.className = itemClass;
                            break
                    }
                });
            this.index = currIndex;
            context._updateItemPos(animation)
        },
        checkItems: function() {
            var list = this.list || {},
                tagName = this.itemTagName,
                itemClass = this.itemClass;
            this.items = utils.getByClass(itemClass, list, tagName)
        },
        cancelPlayInterval: function() {
            if (this._playTimeout) {
                window.clearTimeout(this._playTimeout);
                this._playTimeout = null
            }
        },
        setPlayInterval: function(playInterval) {
            this.cancelPlayInterval();
            this.playInterval = playInterval;
            if (playInterval) {
                var context = this;
                this._playTimeout = window.setTimeout(function() {
                        context._animateTo(1);
                        context.setPlayInterval(context.playInterval)
                    },
                    playInterval)
            }
        }
    };
    window.Gallery = Gallery
})();

(function() {
    var LS = {
        get: function(key) {
            try {
                return window.localStorage ? window.localStorage.getItem(key) : false
            } catch(e) {
                console.log("\u8bfb\u53d6 LocalStorage \u5f02\u5e38\uff1a", e);
                return false
            }
        },
        set: function(key, data) {
            try {
                return window.localStorage ? window.localStorage.setItem(key, data) : false
            } catch(e) {
                console.log("\u5199\u5165 LocalStorage \u5f02\u5e38\uff1a", e);
                return false
            }
        }
    };
    var LocalHistory = BIU.Model.extend({
        init: function() {
            var self = this;
            self.read()
        },
        clear: function(exceptIds) {
            var self = this,
                data = self.dataComic,
                newList = [];
            exceptIds = exceptIds || [];
            data.forEach(function(d) {
                if (exceptIds.indexOf(String(d.id)) >= 0) newList.push(d)
            });
            self.dataComic = newList;
            self.save()
        },
        read: function() {
            var self = this,
                raw = LS.get(self.lsKey) || "[]",
                data = JSON.parse(raw);
            if (Object.prototype.toString.apply(data) !== "[object Array]") self.clear();
            self.dataComic = data;
            raw = LS.get(self.lsKey + "_CHAPTER") || "{}";
            data = JSON.parse(raw);
            self.dataChapter = data;
            return true
        },
        save: function() {
            var self = this,
                data = self.dataComic;
            if (!data) return false;
            self.clean();
            self.trigger("onSave");
            var raw = JSON.stringify(data),
                res = LS.set(self.lsKey, raw);
            data = self.dataChapter;
            raw = JSON.stringify(data);
            return LS.set(self.lsKey + "_CHAPTER", raw) && res
        },
        sort: function() {
            var self = this,
                data = self.dataComic;
            return data.sort(function(a, b) {
                return - (a.time - b.time)
            })
        },
        clean: function() {
            var self = this,
                data = self.dataComic;
            if (data.length < self.limit) return;
            var list = self.sort(),
                ids = [];
            for (var i = list.length - self.limit,
                     l = list.length; i < l; i++) ids.push(list[i]);
            return self.deleteComicRecord(ids)
        },
        lsKey: "MAC_LOCAL_HISTORY",
        limit: 50,
        loadComicRecord: function(id) {
            var self = this,
                data = self.dataComic;
            id = String(id);
            for (var i = 0,
                     d; d = data[i]; i++) if (String(d.id) == id) return d;
            return null
        },
        saveComicRecord: function(id, seq, cid, title, artist, cover) {
            var self = this,
                data = self.dataComic,
                d = self.loadComicRecord(id),
                oldTitle = d && d.title,
                oldArtist = d && d.artist,
                oldCover = d && d.cover;
            if (!d) {
                d = {};
                data.push(d)
            }
            d.time = (new Date).getTime();
            d.id = id;
            d.seq = seq;
            d.cid = cid;
            d.title = title || oldTitle || "..";
            d.artist = artist || oldArtist || "..";
            d.cover = cover || oldCover || "";
            self.save();
            return true
        },
        deleteComicRecord: function(ids) {
            var self = this,
                data = self.dataComic;
            if (!ids.length) ids = [ids];
            ids.forEach(function(id) {
                var deleted = self.loadComicRecord(id),
                    pos = data.indexOf(deleted);
                if (pos < 0) return;
                data.splice(pos, 1)
            });
            self.save();
            return true
        },
        sync: function(cb) {
            var self = this,
                data = self.dataComic;
            if (!data || !data.length) return;
            self._syncServerTime(function(timeSpan) {
                self._uploadToServer(timeSpan,
                    function(res) {
                        var status = res && res.status || 0,
                            data = res && res.data || {},
                            exceptIds = data["fail_ids"] || [];
                        if (status == 2) {
                            self.clear(exceptIds);
                            cb && cb(res)
                        } else console.error("\u9605\u8bfb\u8bb0\u5f55\u540c\u6b65\u5931\u8d25: ", status)
                    })
            })
        },
        _uploadToServer: function(timeSpan, cb) {
            var self = this,
                data = self.dataComic,
                tmp = [],
                startTime = null;
            for (var id in data) {
                var d = data[id],
                    time = (d.time / 1E3 | 0) + timeSpan;
                tmp.push(d.id + "-" + d.cid + "-" + d.seq + "-" + time);
                if (time < startTime || startTime === null) startTime = time
            }
            ek.ajax({
                url: "/Bookshelf/updateReadHistory",
                type: "post",
                data: {
                    startTime: startTime,
                    history: tmp.join(",")
                },
                success: function(res) {
                    cb && cb(res)
                }
            })
        },
        _syncServerTime: function(cb) {
            ek.ajax({
                url: "/Ajax/getTimeStamp",
                type: "post",
                success: function(res) {
                    var status = res && res.status || null,
                        data = res && res.data || {},
                        stamp = data.stamp || 0,
                        localStamp = (new Date).getTime() / 1E3 | 0;
                    cb && cb(status === 2 ? stamp - localStamp: 0)
                }
            })
        },
        loadChapterProgress: function(id, cid) {
            var self = this,
                data = self.dataChapter,
                cs = data[id] || {},
                cur = cs[cid] || 1;
            return cur
        },
        saveChapterProgress: function(id, cid, cur) {
            var self = this,
                data = self.dataChapter,
                cs = data[id] = {};
            cs[cid] = cur;
            self.save()
        }
    });
    window.LocalHistory = LocalHistory;
    if (typeof module != "undefined" && module.exports) module.exports = LocalHistory
})();

(function() {
    // var TAG_HEAD = HOT_TAG_ROOT + "index.",
    //     TAG_HEAD_CHANNEL = HOT_TAG_ROOT + "index_channel.";
    new BackToTop;
    var md_LocalHistory = new LocalHistory({
        name: "LastLocalHistory",
        load: function() {
            var self = this,
                list = self.sort(),
                last = list[0],
                res = {
                    status: 1,
                    data: {
                        comicId: null,
                        title: null,
                        seq: null,
                        createTime: null
                    },
                    stamp: (new Date).getTime() / 1E3 | 0
                };
            if (last) {
                res.status = 2;
                res.data.comicId = last.id;
                res.data.title = last.title;
                res.data.seq = last.seq;
                res.data.createTime = last.time / 1E3 | 0
            }
            self.set(res)
        }
    });
    var md_ServerHistory = new BIU.Model({
        name: "ServerHistory",
        load: function() {
            var self = this;
            ek.ajax({
                url: "/bookshelf/getUserLastReadInfo",
                success: function(res) {
                    self.set(res)
                }
            })
        }
    });
    var md_SupportUrl = new BIU.Model({
        name: "SupportUrl",
        load: function() {
            var self = this;
            ek.ajax({
                url: "/Ajax/getAiseeUrl",
                success: function(res) {
                    self.set(res)
                }
            })
        }
    });
    var vw_HistoryPopup = new BIU.View({
        name: "vw_HistoryPopup",
        init: function() {
            var self = this;
            $(window).on("resize",
                function() {
                    self.coordinateArrow()
                });
            window.addEventListener("popstate",
                function() {
                    self.loadHistory()
                })
        },
        pageReady: function() {
            var self = this;
            self.loadHistory()
        },
        loadHistory: function() {
            var self = this,
                page = self.page;
            page.load("LastLocalHistory");
            page.load("ServerHistory")
        },
        events: {
            "click .history-popup .close": function(e) {
                var self = this,
                    closeTime = (new Date).getTime() / 1E3 | 0;
                $(".history-popup").addClass("closed");
                window.setTimeout(function() {
                        $(".history-popup").hide().removeClass("closed");
                        if (window.localStorage) window.localStorage.setItem(self.closeTimeKey, closeTime)
                    },
                    300);
                ek.ping.reportClick(TAG_HEAD + "history_popup.close");
                e.preventDefault();
                e.stopPropagation()
            },
            "click .history-popup": function() {
                ek.ping.reportClick(TAG_HEAD + "history_popup.go")
            }
        },
        listen: {
            "ServerHistory": function(res) {
                var self = this,
                    page = self.page,
                    status = res && res.status,
                    data = res && res.data,
                    stamp = res && res.stamp;
                if (status === 2 && data && stamp) self.check(data, stamp);
                var llh = page.find("LastLocalHistory") || {},
                    list = llh.sort && llh.sort() || [];
                if (status !== -99 && list.length) self.uploadLocalHistory()
            },
            "LastLocalHistory": function(res) {
                var self = this,
                    status = res && res.status,
                    data = res && res.data,
                    stamp = res && res.stamp;
                if (status === 2) self.check(data, stamp)
            }
        },
        closeTimeKey: "MAC_CLOSE_INDEX_POPUP",
        popup: function(id, title, seq) {
            var $popup = $(".history-popup");
            $popup.attr("href", "/chapter/index/id/" + id + "/seqno/" + seq);
            $popup.find(".text").html("\u7eed\u770b: " + title + " \u7b2c" + seq + "\u8bdd");
            $popup.show().offset();
            $popup.removeClass("closed");
            this.coordinateArrow()
        },
        check: function(data, stamp) {
            var self = this,
                now = (new Date).getTime() / 1E3 | 0,
                span = now - stamp,
                closeTime = window.localStorage ? window.localStorage.getItem(self.closeTimeKey) | 0 : 0,
                recordTime = data.createTime + span;
            if (closeTime <= recordTime) self.popup(data.comicId, data.title, data.seq)
        },
        uploadLocalHistory: function() {
            var self = this,
                page = self.page,
                llh = page.find("LastLocalHistory") || {};
            llh.sync && llh.sync(function() {
                var page = self.page;
                page.load("ServerHistory")
            })
        },
        coordinateArrow: function() {
            var $arrow = $(".history-popup .arrow"),
                $box = $(".history-popup"),
                $icon = $('.banner-menu .menu-list .link[data-name="history"] .icon'),
                arrowOffset = $arrow.offset(),
                boxOffset = $box.offset(),
                iconOffset = $icon.offset(),
                boxRight = boxOffset.left + boxOffset.width,
                iconCenter = iconOffset.left + iconOffset.width / 2;
            if ($box.hasClass("closed")) return;
            var limitValue = boxOffset.width - 40,
                relativeOffset = boxRight - iconCenter - arrowOffset.width / 2;
            if (relativeOffset > limitValue) relativeOffset = limitValue;
            $arrow.css({
                right: relativeOffset + "px"
            })
        }
    });
    var vw_Banner = new BIU.View({
        name: "vw_Banner",
        init: function() {
            var gallery = new Gallery({
                listClass: "banner-list",
                itemClass: "item",
                index: 0,
                playInterval: 3E3
            });
            gallery.onSwitchStart = function(index) {
                $('.' + this.listClass + ' .item .link img').removeAttr('style');
                $(".dot-list .dot").removeClass("current").eq(index).addClass("current")
            };
            $(".dot-list .dot").eq(0).addClass("current")
        },
        events: {
            "click .banner-list .item .link": function(e) {
                var $target = $(e.target),
                    $link = $target.is(".banner-list .item .link") ? $target: $target.parents(".banner-list .item .link"),
                    name = $link.attr("title"),
                    pos = $link.attr("data-pos");
                ek.ping.reportClick(TAG_HEAD + "banner." + name + "_" + pos)
            }
        }
    });
    var vw_Menu = new BIU.View({
        name: "vw_Menu",
        events: {
            "click .menu-list .item .link": function(e) {
                var $target = $(e.target),
                    $link = $target.is(".menu-list .item .link") ? $target: $target.parents(".menu-list .item .link"),
                    name = $link.attr("data-name");
                ek.ping.reportClick(TAG_HEAD + "menu." + name)
            }
        }
    });
    var vw_Channels = [new BIU.View({
        name: "vw_Recommend",
        events: {
            "click .recommend .comic-list": function(e) {
                var $link = $(e.target).closest(".comic-list .comic-link"),
                    id = $link.attr("data-id"),
                    pos = $link.attr("data-pos");
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "recommend." + id + "_" + pos)
            },
            "click .recommend .link-more": function() {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "recommend.more")
            }
        }
    }), new BIU.View({
        name: "vw_LightComic",
        events: {
            "click .light-comic .link": function(e) {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "light_comic")
            },
            "click .light-comic .link-more": function() {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "light_comic.more")
            }
        }
    }), new BIU.View({
        name: "vw_Promotion",
        events: {
            "click .promotion .promotion-list": function(e) {
                var $link = $(e.target).closest(".promotion-list .promotion-link"),
                    pos = $link.attr("data-pos"),
                    href = $link.attr("href");
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "promotion.pos_" + pos);
                e.preventDefault();
                window.setTimeout(function() {
                        window.location.href = href
                    },
                    100)
            }
        }
    }), new BIU.View({
        name: "vw_UpdateToday",
        events: {
            "click .update-today .comic-list": function(e) {
                var $link = $(e.target).closest(".comic-list .comic-link"),
                    id = $link.attr("data-id"),
                    pos = $link.attr("data-pos");
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "update_today." + id + "_" + pos)
            },
            "click .update-today .link-more": function() {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "update_today.more")
            }
        }
    }), new BIU.View({
        name: "vw_TimeList",
        events: {
            "click .time-list-link": function(e) {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "schedule")
            }
        }
    }), new BIU.View({
        name: "vw_JapanComic",
        events: {
            "click .japan-comic .comic-list": function(e) {
                var $link = $(e.target).closest(".comic-list .comic-link"),
                    id = $link.attr("data-id"),
                    pos = $link.attr("data-pos");
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "japan_comic." + id + "_" + pos)
            },
            "click .japan-comic .link-more": function() {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "japan_comic.more")
            }
        }
    }), new BIU.View({
        name: "vw_NewComic",
        events: {
            "click .new-comic .comic-list": function(e) {
                var $link = $(e.target).closest(".comic-list .comic-link"),
                    id = $link.attr("data-id"),
                    pos = $link.attr("data-pos");
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "new_comic." + id + "_" + pos)
            },
            "click .new-comic .link-more": function() {
                ek.ping.reportClick(TAG_HEAD_CHANNEL + "new_comic.more")
            }
        }
    })];
    var vw_Bottom = new BIU.View({
        name: "vw_Bottom",
        pageReady: function() {
            var self = this,
                action = ek.url.getQueryString("loginAction");
            if (action === "go_support") {
                window.history.replaceState && window.history.replaceState(null, "", "/");
                self.getSupportUrl()
            }
        },
        events: {
            "click .bottom .link.support": function(e) {
                var self = this;
                self.getSupportUrl();
                e.preventDefault()
            }
        },
        listen: {
            "SupportUrl": function(res) {
                var status = res && res.status;
                if (status === -99) pageAction.goLogin("http://" + ek.url.getDomain() + "/index?loginAction=go_support");
                else if (status === 2) window.location.href = res.url
            }
        },
        getSupportUrl: function() {
            var self = this,
                page = self.page;
            page.load("SupportUrl")
        }
    });
    var vw_Guiding = new BIU.View({
        name: "vw_Guiding",
        init: function() {},
        showGuiding: function() {
            Guiding.show("index", "menu");
            Guiding.setFlag("index", true)
        },
        isNewUser: function() {
            var value = Guiding.getFlag("index");
            return value === undefined || value === false
        }
    });
    pg_Index.addModel([md_LocalHistory, md_ServerHistory, md_SupportUrl]);
    pg_Index.addView([vw_Banner, vw_Menu, vw_HistoryPopup, vw_Bottom, vw_Guiding]);
    pg_Index.addView(vw_Channels);
    pg_Index.pageReady()
})();