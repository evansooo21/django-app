"use strict";
jQuery(document).ready(function() {
    var e = document.querySelectorAll(".elementor-widget-highlighted-text.ui-e-a-animate .ui-e--highlighted-text");
    [].forEach.call(e, function(e, t) {
        var n = e.querySelectorAll(".uicore-svg-wrapper path"),
            i = e.getAttribute("data-delay") || 0;
        [].forEach.call(n, function(n, a) {
            new Waypoint({
                element: n,
                handler: function(e) {
                    var t = 300 * a + 400 + parseInt(i);
                    setTimeout(function() {
                        n.style.animationPlayState = "running"
                    }, t)
                },
                offset: "90%"
            })
        })
    })
});