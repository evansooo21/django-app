! function(r) {
    var n = window.uicoreJsonp;
    window.uicoreJsonp = function(o, u, c) {
        for (var i, f, l, p = 0, a = []; p < o.length; p++) f = o[p], e[f] && a.push(e[f][0]), e[f] = 0;
        for (i in u) Object.prototype.hasOwnProperty.call(u, i) && (r[i] = u[i]);
        for (n && n(o, u, c); a.length;) a.shift()();
        if (c)
            for (p = 0; p < c.length; p++) l = t(t.s = c[p]);
        return l
    };
    var o = {},
        e = {
            24: 0
        };

    function t(n) {
        if (o[n]) return o[n].exports;
        var e = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return r[n].call(e.exports, e, e.exports, t), e.l = !0, e.exports
    }
    t.m = r, t.c = o, t.d = function(r, n, o) {
        t.o(r, n) || Object.defineProperty(r, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(r) {
        var n = r && r.__esModule ? function() {
            return r.default
        } : function() {
            return r
        };
        return t.d(n, "a", n), n
    }, t.o = function(r, n) {
        return Object.prototype.hasOwnProperty.call(r, n)
    }, t.p = "", t.oe = function(r) {
        throw console.error(r), r
    }
}([]);
uicoreJsonp([6], {
    238: function(e, i, n) {
        "use strict";
        n(239), n(240), n(241), n(242), n(243)
    },
    239: function(e, i) {},
    240: function(e, i, n) {
        "use strict";
        jQuery(function(e) {
            e(".uicore-cart-icon.uicore-link").click(function() {
                e("body").addClass("uicore-cart-active")
            }), e("#cart-wrapper").click(function() {
                e("body").removeClass("uicore-cart-active")
            }), e("#uicore-cart-close").click(function() {
                e("body").removeClass("uicore-cart-active")
            })
        })
    },
    241: function(e, i, n) {
        "use strict";
        jQuery(document).ready(function() {
            if (jQuery(".uicore-sticky").length || jQuery(".uicore-will-be-sticky").length) {
                var e = function() {
                    var e = window.matchMedia("(max-width: 1025px)").matches,
                        n = jQuery(window).scrollTop(),
                        o = jQuery(".uicore-top-bar").innerHeight(),
                        r = 100;
                    jQuery(".uicore-transparent .ui-header-row1").length ? r = 10 : jQuery(".ui-header-row1").length && (r = 400), null == o && (o = e ? 25 : r), n > o ? jQuery(".uicore-navbar").addClass("uicore-scrolled") : jQuery(".uicore-navbar").removeClass("uicore-scrolled"), n > i && i > 0 && n > o - .1 * o ? jQuery(".ui-smart-sticky").addClass("ui-hide") : jQuery(".ui-smart-sticky").removeClass("ui-hide"), n + jQuery(window).height() > jQuery(document).height() - 50 && jQuery(".ui-smart-sticky").removeClass("ui-hide"), i = n
                };
                e();
                var i = 0,
                    n = function(e, i) {
                        var n;
                        return function() {
                            var o = this,
                                r = arguments;
                            clearTimeout(n), n = setTimeout(function() {
                                n = null, e.apply(o, r)
                            }, i)
                        }
                    }(e, 500);
                jQuery(window).on("scroll", e), jQuery(document.body).on("touchmove", n)
            }
        }), -1 != navigator.appVersion.indexOf("Win") && jQuery("body").addClass("win"), jQuery(function(e) {
            e(".uicore-search-btn").click(function() {
                e("body").addClass("uicore-search-active"), e(".uicore-search .search-field").focus()
            }), e(".uicore-search .uicore-close").click(function() {
                e("body").removeClass("uicore-search-active")
            }), e(".uicore-search-btn").click(function() {
                e("body").addClass("uicore-search-active"), e(".uicore-search .search-field").focus()
            }), e(document).keydown(function(i) {
                27 === i.keyCode && e("body").removeClass("uicore-search-active")
            }), e(".uicore-h-classic .menu-item-has-children:not(.menu-item-has-megamenu.custom-width)").on("mouseenter mouseleave", function(i) {
                if (e("ul", this).length) {
                    var n = e(".sub-menu", this);
                    n.offset().left + n.width() > e("body").width() && e(this).addClass("uicore-edge")
                }
            });
            var i = e("#uicore-back-to-top");
            jQuery(window).scroll(function() {
                jQuery(window).scrollTop() > 300 ? i.addClass("uicore-visible") : i.removeClass("uicore-visible")
            }), i.on("click", function(e) {
                e.preventDefault(), jQuery("html").animate({
                    scrollTop: 0
                }, "300"), jQuery("body").animate({
                    scrollTop: 0
                }, "300")
            })
        }), jQuery(function(e) {
            e(document).ready(function() {
                if (jQuery(".uicore-progress-bar").length) {
                    var i, n, o = function() {
                            var e = document.body.scrollHeight - window.innerHeight,
                                i = jQuery(".uicore-post-content article");
                            return i.length && (e = i.height() + i.offset().top - window.innerHeight), e
                        },
                        r = jQuery(".uicore-progress-bar"),
                        u = o(),
                        c = function() {
                            return i = jQuery(window).scrollTop(), (n = i / u * 100) > 100 && (n = 100), n += "%"
                        },
                        a = function() {
                            r.css({
                                width: c()
                            })
                        };
                    jQuery(window).scroll(a), e(window).on("resize", function() {
                        u = o(), a()
                    })
                }
            })
        }), jQuery(function(e) {
            e(document).ready(function() {
                var i = e(".menu-item-has-megamenu.custom-width");
                i.on("mouseenter mouseleave", function(i) {
                    n(e(this))
                });
                var n = function(i) {
                    var n = window.matchMedia("(max-width: 1025px)").matches,
                        o = i.find("ul.uicore-megamenu");
                    if (o.css({
                            left: "auto"
                        }), !n) {
                        o.css({
                            left: 0
                        });
                        var r = o.outerWidth(),
                            u = o.offset(),
                            c = e(window).width();
                        if (!r || !u) return;
                        if (u.left + r >= c) {
                            var a = u.left + r - c;
                            o.css({
                                left: -a - 0
                            })
                        }
                    }
                };
                i.each(function() {
                    n(e(this)), e(this).addClass("with-offsets")
                })
            })
        })
    },
    242: function(e, i, n) {
        "use strict";
        jQuery(function(e) {
            e(document).ready(function() {
                var i = window.matchMedia("(max-width: " + window.uicore_frontend.mobile_br + "px)").matches;

                function n() {
                    e(".uicore-mobile-menu-wrapper .menu-item-has-children > a").unbind("click", r), e(".uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a").unbind("click", u), e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").unbind("click", o), e(".uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a").unbind("click", d), e(".uicore-mobile-menu-wrapper .uicore-extra a").unbind("click", d), e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").unbind("mouseenter", c), e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").unbind("mouseleave", a), e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children a").unbind("click", t), e(".uicore-menu-focus .uicore-menu li").unbind("mouseenter", l), e(".uicore-menu-focus .uicore-menu li").unbind("mouseleave", m), i ? document.body.classList.contains("ui-a-dsmm-slide") ? (! function() {
                        if (!window.uicoreBackLinks) {
                            for (var i = jQuery(".menu-item-has-children"), n = 0; n < i.length; n++) {
                                var o = i[n],
                                    r = e("<a>", {
                                        href: "#",
                                        text: uicore_frontend.back ? uicore_frontend.back : "Back"
                                    }),
                                    u = e("<li>", {
                                        class: "menu-item back"
                                    });
                                u.append(r).prependTo(o.children[1])
                            }
                            window.uicoreBackLinks = !0
                        }
                    }(), e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").bind("click", r), e(".uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a").bind("click", u)) : e(".uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)").bind("click", o) : (e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").bind("mouseenter", c), e(".uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children").bind("mouseleave", a), e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children > a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children > a").bind("click", t), e(".uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children > a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children > a").bind("click", s), e(".uicore-menu-focus .uicore-menu li").bind("mouseenter", l), e(".uicore-menu-focus .uicore-menu li").bind("mouseleave", m)), e(".uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a").bind("click", d), e(".uicore-mobile-menu-wrapper .uicore-extra a").bind("click", d)
                }

                function o(i) {
                    if (i.preventDefault(), window.closeOtherSubMenus) {
                        var n = e(this).parent().siblings().find(".ui-expanded");
                        n.removeClass("ui-expanded"), n.siblings(".sub-menu").slideUp()
                    }
                    e(this).siblings(".sub-menu").slideToggle(), e(this).toggleClass("ui-expanded"), e(this).siblings().toggleClass("uicore-active"), h()
                }

                function r(i) {
                    i.preventDefault();
                    var n = "";
                    e(".uicore-mobile-menu-wrapper .uicore-menu ").addClass("uicore-animating"), e(this).siblings().addClass("uicore-active");
                    var o = e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu")[0].style.left;
                    "0" == o || "0%" == o || "" == o ? n = "-100%" : (o = o.replace("-", "").replace("%", ""), n = "-" + (parseInt(o) + 100) + "%"), "1" === uicore_frontend.rtl && (n = n.replace("-", "+")), e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").delay(100).animate({
                        left: n
                    }, 150, function() {
                        h(), e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ").removeClass("uicore-animating")
                    })
                }

                function u(i) {
                    i.preventDefault();
                    var n = "";
                    e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").addClass("uicore-animating");
                    var o = e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu")[0].style.left;
                    "-100%" == o || "0%" == o || "" == o || "+100%" == o || "100%" == o ? n = "0%" : (o = o.replace("-", "").replace("%", ""), n = "-" + (parseInt(o) - 100) + "%"), "1" === uicore_frontend.rtl && (n = n.replace("-", "+"));
                    var r = this;
                    setTimeout(function() {
                        e(r).parent().parent().removeClass("uicore-active")
                    }, 300), e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").delay(100).animate({
                        left: n
                    }, 150, function() {
                        e(".uicore-mobile-menu-wrapper .uicore-menu .sub-menu:not(.uicore-active) li").removeClass("uicore-visible"), h(), e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ").removeClass("uicore-animating")
                    })
                }

                function c(i) {
                    e(this).find(".sub-menu:first").addClass("uicore-active"), h()
                }

                function a(i) {
                    e(this).children(".sub-menu:last").removeClass("uicore-active"), e(this).find("li").removeClass("uicore-visible")
                }

                function t(i) {
                    e(this).parent().find(".sub-menu:first").toggleClass("uicore-active"), e(this).parent().find(".sub-menu:first").slideToggle(), e(this).parent().find(".sub-menu:first").hasClass("uicore-active") ? h() : e(this).parent().find("li").removeClass("uicore-visible")
                }

                function s(n) {
                    n.preventDefault();
                    var o = e(this).attr("href");
                    /^#.+$/.test(o) && document.body.classList.contains("uicore-overflow-hidden") && (e(".uicore-mobile-menu-overflow").removeClass("uicore-overflow-hidden"), e("body").removeClass("uicore-overflow-hidden"), e("body").removeClass("uicore-mobile-nav-show"), i ? e(".uicore-animate-fade").length > 0 ? e(".uicore-navigation-wrapper").animate({
                        opacity: 0
                    }, 100) : setTimeout(function() {
                        e(".uicore-navigation-wrapper").animate({
                            opacity: 0
                        }, 50)
                    }, 50) : e(".uicore-navigation-wrapper").animate({
                        opacity: 0
                    }, 100), e(location).attr("href", o))
                }

                function l() {
                    e(this).siblings("li").stop().fadeTo(300, .4), e(this).parent().siblings("li").stop().fadeTo(300, .3)
                }

                function m() {
                    e(this).siblings("li").stop().fadeTo(300, 1), e(this).parent().siblings("li").stop().fadeTo(300, 1)
                }

                function d(n) {
                    var o = e(this).attr("href");
                    if (o) {
                        var r = o.split("#");
                        if (r[0] && r[0] != window.location.pathname && r[0] != window.location.href.split("#")[0]) return
                    }
                    if (!window.uicoreAnimation) {
                        window.uicoreAnimation = !0;
                        var u = e(".uicore-ham-reveal");
                        if (document.body.classList.contains("uicore-overflow-hidden")) e(".uicore-mobile-menu-overflow").removeClass("uicore-overflow-hidden"), e("body").removeClass("uicore-overflow-hidden"), e("html").removeClass("uicore-overflow-hidden"), e("body").removeClass("uicore-mobile-nav-show"), i ? e(".uicore-animate-fade").length > 0 ? e(".uicore-navigation-wrapper").animate({
                            opacity: 0
                        }, 100) : setTimeout(function() {
                            e(".uicore-navigation-wrapper").animate({
                                opacity: 0
                            }, 50)
                        }, 50) : e(".uicore-navigation-wrapper").animate({
                            opacity: 0
                        }, 100), e(".uicore-mobile-menu-wrapper li").removeClass("uicore-visible"), e(".uicore-ham-reveal").css("animation-name", "none");
                        else {
                            var c = 0;
                            u.length ? (i || (e(".uicore-ham-reveal").css("animation-name", "uiCoreAnimationsHamReveal"), c = 100), setTimeout(function() {
                                e(".uicore-navigation-wrapper").css("opacity", 1)
                            }, 0 + c)) : (c = 50, setTimeout(function() {
                                e(".uicore-navigation-wrapper").animate({
                                    opacity: 1
                                }, 120)
                            }, 150)), e("body").addClass("uicore-overflow-hidden"), e("html").addClass("uicore-overflow-hidden"), e("body").addClass("uicore-mobile-nav-show"), setTimeout(function() {
                                e(".uicore-mobile-menu-overflow").addClass("uicore-overflow-hidden"), e(".uicore-mobile-menu-wrapper .uicore-menu-container").css("left", "0%"), h()
                            }, 20 + c)
                        }
                        e(this).toggleClass("collapsed"), e(".uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu").toggleClass("uicore-active"), setTimeout(function() {
                            window.uicoreAnimation = !1
                        }, 50)
                    }
                }

                function h() {
                    var i = e("ul.uicore-active > li:not(.uicore-visible):first");
                    i.length > 0 && (i.addClass("uicore-visible"), setTimeout(function() {
                        h(), i.hasClass("menu-item-has-children") && function(i) {
                            (i || e(".uicore-mobile-menu-wrapper .uicore-menu-container .menu-item-has-children")).each(function(i, n) {
                                var o = e(this).find(">a").attr("href");
                                if (e(this).children(".ui-custom-tap").remove(), "#" != o) {
                                    var r = e("<a>", {
                                        href: o,
                                        text: "",
                                        class: "ui-custom-tap",
                                        style: "min-height:" + e(this).height() + "px;transform:translate3d(0,-" + e(this).height() + "px,0)"
                                    });
                                    e(this).children("a").after(r)
                                }
                            })
                        }(i)
                    }, 100))
                }
                n(), window.onresize = n, e(".uicore-toggle").click(function() {
                    d()
                })
            })
        })
    },
    243: function(e, i, n) {
        "use strict";
        jQuery(document).ready(function() {
            var e = document.querySelectorAll(".elementor-widget-highlighted-text.ui-e-a-animate .ui-e--highlighted-text");
            [].forEach.call(e, function(e, i) {
                var n = e.querySelectorAll(".uicore-svg-wrapper path"),
                    o = e.getAttribute("data-delay");
                o = o || 0, [].forEach.call(n, function(e, i) {
                    new Waypoint({
                        element: e,
                        handler: function(n) {
                            var r = 300 * i + 400 + parseInt(o);
                            setTimeout(function() {
                                e.style.animationPlayState = "running"
                            }, r)
                        },
                        offset: "90%"
                    })
                })
            }), jQuery(".menu-item-object-uicore-tb").on("mouseenter mouseleave", function() {
                jQuery(this).find(".elementor-element").each(function() {
                    elementorFrontend.elementsHandler.runReadyTrigger(jQuery(this))
                })
            })
        })
    }
}, [238]);
! function() {
    "use strict";

    function Waypoint(options) {
        if (!options) throw new Error("No options passed to Waypoint constructor");
        if (!options.element) throw new Error("No element option passed to Waypoint constructor");
        if (!options.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + keyCounter, this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options), this.element = this.options.element, this.adapter = new Waypoint.Adapter(this.element), this.callback = options.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = Waypoint.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = Waypoint.Context.findOrCreateByElement(this.options.context), Waypoint.offsetAliases[this.options.offset] && (this.options.offset = Waypoint.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), allWaypoints[this.key] = this, keyCounter += 1
    }
    var keyCounter = 0,
        allWaypoints = {};
    Waypoint.prototype.queueTrigger = function(direction) {
        this.group.queueTrigger(this, direction)
    }, Waypoint.prototype.trigger = function(args) {
        this.enabled && this.callback && this.callback.apply(this, args)
    }, Waypoint.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete allWaypoints[this.key]
    }, Waypoint.prototype.disable = function() {
        return this.enabled = !1, this
    }, Waypoint.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, Waypoint.prototype.next = function() {
        return this.group.next(this)
    }, Waypoint.prototype.previous = function() {
        return this.group.previous(this)
    }, Waypoint.invokeAll = function(method) {
        var allWaypointsArray = [];
        for (var waypointKey in allWaypoints) allWaypointsArray.push(allWaypoints[waypointKey]);
        for (var i = 0, end = allWaypointsArray.length; i < end; i++) allWaypointsArray[i][method]()
    }, Waypoint.destroyAll = function() {
        Waypoint.invokeAll("destroy")
    }, Waypoint.disableAll = function() {
        Waypoint.invokeAll("disable")
    }, Waypoint.enableAll = function() {
        Waypoint.Context.refreshAll();
        for (var waypointKey in allWaypoints) allWaypoints[waypointKey].enabled = !0;
        return this
    }, Waypoint.refreshAll = function() {
        Waypoint.Context.refreshAll()
    }, Waypoint.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, Waypoint.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, Waypoint.adapters = [], Waypoint.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, Waypoint.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = Waypoint
}(),
function() {
    "use strict";

    function requestAnimationFrameShim(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }

    function Context(element) {
        this.element = element, this.Adapter = Waypoint.Adapter, this.adapter = new this.Adapter(element), this.key = "waypoint-context-" + keyCounter, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, element.waypointContextKey = this.key, contexts[element.waypointContextKey] = this, keyCounter += 1, Waypoint.windowContext || (Waypoint.windowContext = !0, Waypoint.windowContext = new Context(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var keyCounter = 0,
        contexts = {},
        Waypoint = window.Waypoint,
        oldWindowLoad = window.onload;
    Context.prototype.add = function(waypoint) {
        var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[axis][waypoint.key] = waypoint, this.refresh()
    }, Context.prototype.checkEmpty = function() {
        var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
            isWindow = this.element == this.element.window;
        horizontalEmpty && verticalEmpty && !isWindow && (this.adapter.off(".waypoints"), delete contexts[this.key])
    }, Context.prototype.createThrottledResizeHandler = function() {
        function resizeHandler() {
            self.handleResize(), self.didResize = !1
        }
        var self = this;
        this.adapter.on("resize.waypoints", function() {
            self.didResize || (self.didResize = !0, Waypoint.requestAnimationFrame(resizeHandler))
        })
    }, Context.prototype.createThrottledScrollHandler = function() {
        function scrollHandler() {
            self.handleScroll(), self.didScroll = !1
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function() {
            self.didScroll && !Waypoint.isTouch || (self.didScroll = !0, Waypoint.requestAnimationFrame(scrollHandler))
        })
    }, Context.prototype.handleResize = function() {
        Waypoint.Context.refreshAll()
    }, Context.prototype.handleScroll = function() {
        var triggeredGroups = {},
            axes = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var axisKey in axes) {
            var axis = axes[axisKey],
                isForward = axis.newScroll > axis.oldScroll,
                direction = isForward ? axis.forward : axis.backward;
            for (var waypointKey in this.waypoints[axisKey]) {
                var waypoint = this.waypoints[axisKey][waypointKey];
                if (null !== waypoint.triggerPoint) {
                    var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint,
                        nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                        crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                        crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
                    (crossedForward || crossedBackward) && (waypoint.queueTrigger(direction), triggeredGroups[waypoint.group.id] = waypoint.group)
                }
            }
        }
        for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
            x: axes.horizontal.newScroll,
            y: axes.vertical.newScroll
        }
    }, Context.prototype.innerHeight = function() {
        return this.element == this.element.window ? Waypoint.viewportHeight() : this.adapter.innerHeight()
    }, Context.prototype.remove = function(waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty()
    }, Context.prototype.innerWidth = function() {
        return this.element == this.element.window ? Waypoint.viewportWidth() : this.adapter.innerWidth()
    }, Context.prototype.destroy = function() {
        var allWaypoints = [];
        for (var axis in this.waypoints)
            for (var waypointKey in this.waypoints[axis]) allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++) allWaypoints[i].destroy()
    }, Context.prototype.refresh = function() {
        var axes, isWindow = this.element == this.element.window,
            contextOffset = isWindow ? void 0 : this.adapter.offset(),
            triggeredGroups = {};
        this.handleScroll(), axes = {
            horizontal: {
                contextOffset: isWindow ? 0 : contextOffset.left,
                contextScroll: isWindow ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: isWindow ? 0 : contextOffset.top,
                contextScroll: isWindow ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var axisKey in axes) {
            var axis = axes[axisKey];
            for (var waypointKey in this.waypoints[axisKey]) {
                var contextModifier, wasBeforeScroll, nowAfterScroll, triggeredBackward, triggeredForward, waypoint = this.waypoints[axisKey][waypointKey],
                    adjustment = waypoint.options.offset,
                    oldTriggerPoint = waypoint.triggerPoint,
                    elementOffset = 0,
                    freshWaypoint = null == oldTriggerPoint;
                waypoint.element !== waypoint.element.window && (elementOffset = waypoint.adapter.offset()[axis.offsetProp]), "function" == typeof adjustment ? adjustment = adjustment.apply(waypoint) : "string" == typeof adjustment && (adjustment = parseFloat(adjustment), waypoint.options.offset.indexOf("%") > -1 && (adjustment = Math.ceil(axis.contextDimension * adjustment / 100))), contextModifier = axis.contextScroll - axis.contextOffset, waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment), wasBeforeScroll = oldTriggerPoint < axis.oldScroll, nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll, triggeredBackward = wasBeforeScroll && nowAfterScroll, triggeredForward = !wasBeforeScroll && !nowAfterScroll, !freshWaypoint && triggeredBackward ? (waypoint.queueTrigger(axis.backward), triggeredGroups[waypoint.group.id] = waypoint.group) : !freshWaypoint && triggeredForward ? (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group) : freshWaypoint && axis.oldScroll >= waypoint.triggerPoint && (waypoint.queueTrigger(axis.forward), triggeredGroups[waypoint.group.id] = waypoint.group)
            }
        }
        return Waypoint.requestAnimationFrame(function() {
            for (var groupKey in triggeredGroups) triggeredGroups[groupKey].flushTriggers()
        }), this
    }, Context.findOrCreateByElement = function(element) {
        return Context.findByElement(element) || new Context(element)
    }, Context.refreshAll = function() {
        for (var contextId in contexts) contexts[contextId].refresh()
    }, Context.findByElement = function(element) {
        return contexts[element.waypointContextKey]
    }, window.onload = function() {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll()
    }, Waypoint.requestAnimationFrame = function(callback) {
        var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
        requestFn.call(window, callback)
    }, Waypoint.Context = Context
}(),
function() {
    "use strict";

    function byTriggerPoint(a, b) {
        return a.triggerPoint - b.triggerPoint
    }

    function byReverseTriggerPoint(a, b) {
        return b.triggerPoint - a.triggerPoint
    }

    function Group(options) {
        this.name = options.name, this.axis = options.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), groups[this.axis][this.name] = this
    }
    var groups = {
            vertical: {},
            horizontal: {}
        },
        Waypoint = window.Waypoint;
    Group.prototype.add = function(waypoint) {
        this.waypoints.push(waypoint)
    }, Group.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, Group.prototype.flushTriggers = function() {
        for (var direction in this.triggerQueues) {
            var waypoints = this.triggerQueues[direction],
                reverse = "up" === direction || "left" === direction;
            waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
            for (var i = 0, end = waypoints.length; i < end; i += 1) {
                var waypoint = waypoints[i];
                (waypoint.options.continuous || i === waypoints.length - 1) && waypoint.trigger([direction])
            }
        }
        this.clearTriggerQueues()
    }, Group.prototype.next = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
            isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1]
    }, Group.prototype.previous = function(waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null
    }, Group.prototype.queueTrigger = function(waypoint, direction) {
        this.triggerQueues[direction].push(waypoint)
    }, Group.prototype.remove = function(waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1)
    }, Group.prototype.first = function() {
        return this.waypoints[0]
    }, Group.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, Group.findOrCreate = function(options) {
        return groups[options.axis][options.name] || new Group(options)
    }, Waypoint.Group = Group
}(),
function() {
    "use strict";

    function JQueryAdapter(element) {
        this.$element = $(element)
    }
    var $ = window.jQuery,
        Waypoint = window.Waypoint;
    $.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(i, method) {
        JQueryAdapter.prototype[method] = function() {
            var args = Array.prototype.slice.call(arguments);
            return this.$element[method].apply(this.$element, args)
        }
    }), $.each(["extend", "inArray", "isEmptyObject"], function(i, method) {
        JQueryAdapter[method] = $[method]
    }), Waypoint.adapters.push({
        name: "jquery",
        Adapter: JQueryAdapter
    }), Waypoint.Adapter = JQueryAdapter
}(),
function() {
    "use strict";

    function createExtension(framework) {
        return function() {
            var waypoints = [],
                overrides = arguments[0];
            return framework.isFunction(arguments[0]) && (overrides = framework.extend({}, arguments[1]), overrides.handler = arguments[0]), this.each(function() {
                var options = framework.extend({}, overrides, {
                    element: this
                });
                "string" == typeof options.context && (options.context = framework(this).closest(options.context)[0]), waypoints.push(new Waypoint(options))
            }), waypoints
        }
    }
    var Waypoint = window.Waypoint;
    window.jQuery && (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)), window.Zepto && (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto))
}();
var logo = document.querySelector(".uicore-header-wrapper .uicore-branding");
var mq = window.matchMedia("(max-width: 1025px)");
if (mq.matches) {
    var ham = document.querySelectorAll("nav .uicore-ham");
    menuItems = logo ? [logo, ...ham] : [...ham]
} else {
    var menuItems = document.querySelectorAll(".uicore-header-wrapper ul.uicore-menu > .menu-item > a");
    var extraItems = document.querySelectorAll("#wrapper-navbar .uicore-extra > *");
    menuItems = logo ? [logo, ...menuItems, ...extraItems] : [...menuItems, ...extraItems];
    var ham = document.querySelectorAll("#wrapper-navbar nav .uicore-ham:not(.uicore-drawer-toggle)")[0];
    if (ham) {
        ham.style.animationPlayState = "running"
    }
}
if (menuItems.length) {
    [].forEach.call(menuItems, function(div, index) {
        setTimeout(function() {
            div.style.animationPlayState = "running"
        }, (100 * (index + 1)) - 100)
    })
}
const updateProperties = (elem, state) => {
    elem.style.setProperty('--x', state.x + 'px');
    elem.style.setProperty('--y', state.y + 'px');
    elem.style.setProperty('--width', state.width + 'px');
    elem.style.setProperty('--height', state.height + 'px');
    elem.style.setProperty('--scale', state.scale);
    elem.style.setProperty('mix-blend-mode', state.blend);
    elem.style.setProperty('--border', state.border);
    elem.style.setProperty('--bg', state.bg);
    elem.style.setProperty('opacity', state.hover)
};
document.querySelectorAll('.ui-cursor').forEach(cursor => {
    const createState = e => {
        const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: '42',
            height: '42',
            blend: 'unset',
            border: 'var(--e-global-color-uicore_accent)',
            bg: 'tarnsparent',
            hover: 1,
            scale: 1
        };
        const computedState = {};
        if (window.ui_onElement) {
            computedState.scale = '1.9';
            computedState.blend = '';
            computedState.bg = 'tarnsparent';
            computedState.hover = '0.7'
        }
        return { ...defaultState,
            ...computedState
        }
    };
    if (!document.getElementsByClassName('e-preview--show-hidden-elements').length) {
        document.addEventListener('mousemove', e => {
            const state = createState(e);
            updateProperties(cursor, state)
        })
    }
});
document.querySelectorAll('a, input[type="submit"], input[type="image"], label[for], select, button, .link').forEach(el => {
    el.addEventListener('mouseenter', () => window.ui_onElement = !0)
    el.addEventListener('mouseleave', () => window.ui_onElement = !1)
})
window.addEventListener('DOMContentLoaded', () => {
    jQuery(' input[type="button"], input[type="submit"], .elementor-button.elementor-button, .elementor-button:not(.bdt-offcanvas-button), .bdt-button-primary, .bdt-ep-button,button.metform-btn,button.metform-btn:not(.toggle), .bdt-callout a.bdt-callout-button, [type="submit"], .tutor-button, .tutor-login-form-wrap input[type="submit"], .wp-block-button__link,.uicore-mobile-menu-wrapper .uicore-cta-wrapper a,.uicore-left-menu .uicore-cta-wrapper a,.wc-block-components-button:not(.is-link),.uicore-navbar a.uicore-btn, .bdt-contact-form .elementor-button,.ui-attract').on('mouseenter', function(e) {
        this.classList.add('elementor-animation-grow')
    })
}, !1)