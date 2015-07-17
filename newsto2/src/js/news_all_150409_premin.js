!function(a) {
    try {
        if (null  !== d || void 0 !== d) {
            if (0 !== a(".js-t-scroll-tabs__nav").length) {
                var b = a(".js-t-scroll-tabs__nav").attr("id").slice(10)
                  , c = sessionStorage.getItem(b + "TabText")
                  , d = sessionStorage.getItem(b + "TabNumber");
                if ("null" == d)
                    var d = a(".js-t-scroll-tabs__nav a").index(a(".t-scroll-tabs__nav--active"));
                var e = d
                  , f = a(".js-t-scroll-tabs__nav a").eq(e).text();
                if (sessionStorage.setItem(b + "TabNumber", e),
                sessionStorage.setItem(b + "TabText", f),
                c == f) {
                    var g = a(".js-t-scroll-tabs__nav a")
                      , h = a(".js-t-scroll-tabs__items")
                      , i = "t-scroll-tabs__nav--active";
                    g.removeClass(i),
                    a(".js-t-scroll-tabs__nav a").eq(d).addClass(i),
                    h.css("display", "none").eq(e).css("display", "block")
                }
            }
            if (a(".arrowon").children().hasClass("t-scroll-tabs__nav--active")) {
                a(".js-t-scroll-tabs__nav").removeClass("t-scroll-tabs__navs"),
                $arrow = a(".js-timeline__tab-arrow");
                var j = 0;
                a(".js-timeline__tab").scroll(function() {
                    1 != j && (a(".js-timeline__tab-arrow").toggleClass("anime-opacity anime-move"),
                    setTimeout(function() {
                        $arrow.remove()
                    }
                    , 1e3),
                    j = 1)
                }
                ),
                $arrow.click(function() {
                    a(".js-timeline__tab").animate({
                        scrollLeft: 300
                    }, 750)
                }
                )
            } else
                a(".js-timeline__tab-arrow").css("display", "none")
        }
        a(".js-t-scroll-tabs__nav a").on("click", function() {
            e = a(this).attr("id").slice(9),
            f = a(this).text(),
            sessionStorage.setItem(b + "TabNumber", e),
            sessionStorage.setItem(b + "TabText", f)
        }
        ),
        a(".js-clear-storage a").on("click", function() {
            sessionStorage.removeItem("genreaTabNumber"),
            sessionStorage.removeItem("genreaTabText")
        }
        )
    } catch (k) {}
    var l = a(".t-scroll-tabs__nav--active");
    if (l.length > 0) {
        var m = l.position();
        a(".t-scroll-tabs__navs").scrollLeft(m.left)
    }
    a(".js-t-slider-top").each(function() {
        var b = a(this).find("a").length;
        b > 1 && a(".js-t-slider-top").bxSlider({
            swipeThreshold: 10,
            slideWidth: 275,
            slideMargin: 10,
            pause: 5e3,
            preventDefaultSwipeY: !1,
            pager: !0,
            auto: !0,
            infiniteLoop: !0
        })
    }
    ),
    a(".js-t-slider--special-01,.js-t-slider--special-02,.js-t-slider--koneta").bxSlider({
        swipeThreshold: 30,
        slideWidth: 120,
        slideMargin: 10,
        preventDefaultSwipeY: !1,
        infiniteLoop: !0
    }),
    a(".js-t-slider--detail").bxSlider({
        slideMargin: 0,
        startSlide: 0,
        infiniteLoop: !0,
        pager: !0,
        showBothImg: !0,
        onSliderLoad: function() {
            var b = a(".news-slide_detail .t-bx__viewport").height();
            a(".news-slide_detail .t-bx__viewport a span").css("height", b)
        }
    }),
    a(".js-link").on("click", function() {
        return window.location = a(this).prevAll("a").attr("href"),
        !1
    }
    ),
    a.fn.makeDot = function(b) {
        a(a(this)).each(function() {
            for (var c = b, d = a(this).text(), e = "…", f = 0, g = 0; g < d.length; g++)
                if (f += d.charCodeAt(g) <= 255 ? .5 : 1,
                f > c) {
                    d = d.substr(0, g) + e;
                    break
                }
            a(this).text(d)
        }
        )
    }
    ,
    a(".js-dot13").makeDot(13),
    a(".js-dot26").makeDot(26),
    "android" == UA.deviceType && (UA.osVersion <= 2.1 && a(".js-lower-dot34").makeDot(34),
    UA.osVersion < 3 && (a(".js-news-scroll").overflowScroll(),
    a(".js-timeline__tab").overflowScroll())),
    a.fn.newsAdjustCenter = function() {
        var b = a(window).width()
          , c = a(window).height()
          , d = a(".news-modal__img img").width()
          , e = a(".news-modal__img img").height();
        b >= 660 ? e >= d ? (a(".news-modal__img img").css({
            width: "auto",
            height: "640px"
        }),
        d = a(".news-modal__img img").width(),
        a(".t-modal__content").css("width", d + 20 + "px")) : a(".t-modal__content").css("width", "660px") : (a(".news-modal__img img").css({
            width: "100%",
            height: "auto"
        }),
        a(".t-modal__content").css("width", b - 20 + "px"));
        var f = this
          , g = f.outerWidth() / 2
          , h = f.outerHeight() / 2
          , i = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop
          , j = a(document).height()
          , k = document.documentElement.clientHeight;
        f.parent().css({
            "min-height": j,
            "max-height": j
        });
        {
            var l = a(".t-modal__content").innerHeight();
            a(".t-modal__content").innerWidth()
        }
        f.css(l > c ? {
            top: "10px",
            "margin-top": "10px",
            "margin-left": -g + "px"
        } : {
            top: i + k / 2 + "px",
            "margin-top": -h + "px",
            "margin-left": -g + "px"
        })
    }
    ,
    a.fn.enlarged = function(b) {
        a(this).on("click", function(c) {
            a(".js-news-modal-toggle,.current").css("visibility", "hidden"),
            c.preventDefault();
            var d = a(this).attr("src")
              , e = a(this).attr("credit")
              , f = a(this).attr("caption");
            a(".news-modal__img").html('<img src="' + d + '">'),
            a(".news-modal__text").html(f),
            a(".news-modal__credit").html(e),
            a(".news-modal__img img").on("load", function() {
                a("body").css("position", "relative"),
                a("a").addClass("no_highlight"),
                b.css("display", "block"),
                b.find(".js-news-modal__content").newsAdjustCenter()
            }
            )
        }
        ),
        b.find(".js-news-cancell,.js-news-modal__overlay").off("click").on("click", function() {
            b.css("display", "none"),
            a("body").css("position", ""),
            a("a").removeClass("no_highlight"),
            a(".news-modal__img,.news-modal__text,.news-modal__credit").html(""),
            a(".js-news-modal-toggle,.current").css("visibility", "visible")
        }
        ),
        a(window).resize(function() {
            b.find(".js-news-modal__content").newsAdjustCenter()
        }
        )
    }
    ,
    a(".js-news-modal-toggle").enlarged(a(".js-news-modal"));
    var n = a(".js-t-button__more")
      , o = '<div class="t-loader"><span class="t-loader__icon-gif"></span></div>'
      , p = a(".js-t-button__more:first").parent().parent().find("li:last").clone();
    a(".js-t-button__more").parent().parent().find("li:last").remove(),
    n.on("click", function() {
        a(this).parent(".js-t-button").append(o),
        a(this).hide();
        var b = this;
        if ("/article/list" == location.pathname) {
            var c = a(this).next().val()
              , d = a(this).next().next().val()
              , e = a(this).next().next().next().val()
              , f = a(this).parent().parent();
            return a.ajax({
                url: "/article/listmore?genreid=" + d + "&subgenreid=" + e + "&count=" + c,
                type: "GET",
                timeout: 1e4,
                dataType: "json"
            }).done(function(e) {
                if ("0" != e.error)
                    return a(".t-loader").remove(),
                    !1;
                for (var g in e.ArticleInfo) {
                    if (e.ArticleInfo instanceof Array)
                        var h = e.ArticleInfo[g]
                          , i = !1;
                    else
                        var h = e.ArticleInfo
                          , i = !0;
                    var j = p.clone()
                      , k = h.LinkURL;
                    if ("string" != typeof k && (k = "/article/detail?genreid=" + d + "&subgenreid=" + h.SubGenreID + "&articleid=" + h.ArticleID),
                    f.hasClass("news-list") ? (j.find("a").attr("href", k),
                    "string" == typeof h.ThumbnailImageInfo.ImageURL && "" != h.ThumbnailImageInfo.ImageURL ? j.find("img").attr("src", h.ThumbnailImageInfo.ImageURL) : (j.find("div.news-list__img").remove(),
                    j.find("div.news-list__text").removeClass("div.news-list__text").addClass("news-list__only_text")),
                    j.find(".js-dot26").text(h.Title),
                    "string" == typeof h.CPName && j.find(".news-list__text--media").text(h.CPName),
                    j.find(".news-list__text--time").text(h.DateModified)) : (j.find("a").attr("href", k),
                    "string" == typeof h.ThumbnailImageInfo.ImageURL && "" != h.ThumbnailImageInfo.ImageURL ? j.find("img").attr("src", h.ThumbnailImageInfo.ImageURL) : j.find("img").remove(),
                    j.find(".js-dot13").text(h.Title),
                    "string" == typeof h.CPName && j.find(".news-gridlist__text--media").text(h.CPName),
                    j.find(".news-gridlist__text--time").text(h.DateModified)),
                    j.show(),
                    f.find("ul").append(j),
                    i)
                        break
                }
                a(".js-dot13").makeDot(13),
                a(".js-dot26").makeDot(26),
                "1" == e.HasNext && (a(b).show(),
                c++,
                a(b).next().val(c)),
                a(".t-loader").remove()
            }
            ).error(function() {
                a(".t-loader").remove()
            }
            ),
            !1
        }
        if ("/search/result" == location.pathname || "/sp_search/result" == location.pathname) {
            var g = a(this).next().val()
              , h = a(this).next().next().val()
              , f = a(this).parent().parent();
            return a.ajax({
                url: "/search/result?SearchCondition=" + h + "&SearchType=1&PageNo=" + g + "&Type=4",
                type: "GET",
                timeout: 1e4,
                dataType: "json"
            }).done(function(c) {
                if ("0" != c.Error)
                    return a(".t-loader").remove(),
                    !1;
                for (var d in c.ArticleInfo) {
                    if (c.ArticleInfo instanceof Array)
                        var e = c.ArticleInfo[d]
                          , h = !1;
                    else
                        var e = c.ArticleInfo
                          , h = !0;
                    var i = p.clone();
                    if (i.find("a").attr("href", e.LinkURL),
                    "string" == typeof e.ImageURL && "" != e.ImageURL ? i.find("img").attr("src", e.ImageURL) : (i.find("div.news-list__img").remove(),
                    i.find("div.news-list__text").removeClass("div.news-list__text").addClass("news-list__only_text")),
                    i.find(".js-dot26").text(e.Title),
                    "string" == typeof e.CPName && i.find(".news-list__text--media").text(e.CPName),
                    i.find(".news-list__text--time").text(e.DateModified),
                    i.show(),
                    f.find("ul").append(i),
                    h)
                        break
                }
                a(".js-dot13").makeDot(13),
                a(".js-dot26").makeDot(26),
                "1" == c.HasNext && (a(b).show(),
                g++,
                a(b).next().val(g)),
                a(".t-loader").remove()
            }
            ).error(function() {
                a(".t-loader").remove()
            }
            ),
            !1
        }
    }
    ),
    a(window).on("unload", function() {
        a("input.count").val(1),
        a("input.page").val(2)
    }
    );
    var q = a(".js-search-submit");
    q.on("click", function() {
        document.search.submit()
    }
    ),
    a(".js-t-search").inputOff()
}
(jQuery);
