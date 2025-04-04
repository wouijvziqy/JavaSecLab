!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t) {
        var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/),
            o = /micromessenger/i.test(t);
        return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), a && (i.edge = !0, i.version = a[1]), o && (i.weChat = !0), {
            browser: i,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
            pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11),
            domSupported: "undefined" != typeof document
        }
    }

    function i(t, e) {
        "createCanvas" === t && (dg = null), ug[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, i = ng.call(t);
        if ("[object Array]" === i) {
            if (!R(t)) {
                e = [];
                for (var r = 0, a = t.length; a > r; r++) e[r] = n(t[r])
            }
        } else if (ig[i]) {
            if (!R(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; a > r; r++) e[r] = n(t[r])
                }
            }
        } else if (!eg[i] && !R(t) && !T(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function r(t, e, i) {
        if (!S(e) || !S(t)) return i ? n(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !S(s) || !S(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || R(s) || R(o) ? !i && a in t || (t[a] = n(e[a], !0)) : r(o, s, i)
        }
        return t
    }

    function a(t, e) {
        for (var i = t[0], n = 1, a = t.length; a > n; n++) i = r(i, t[n], e);
        return i
    }

    function o(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t
    }

    function s(t, e, i) {
        for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
        return t
    }

    function l() {
        return dg || (dg = cg().getContext("2d")), dg
    }

    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i
        }
        return -1
    }

    function u(t, e) {
        function i() {
        }

        var n = t.prototype;
        i.prototype = e.prototype, t.prototype = new i;
        for (var r in n) t.prototype[r] = n[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function c(t, e, i) {
        t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i)
    }

    function d(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
    }

    function f(t, e, i) {
        if (t && e) if (t.forEach && t.forEach === ag) t.forEach(e, i); else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) e.call(i, t[n], n, t); else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
    }

    function p(t, e, i) {
        if (t && e) {
            if (t.map && t.map === lg) return t.map(e, i);
            for (var n = [], r = 0, a = t.length; a > r; r++) n.push(e.call(i, t[r], r, t));
            return n
        }
    }

    function g(t, e, i, n) {
        if (t && e) {
            if (t.reduce && t.reduce === hg) return t.reduce(e, i, n);
            for (var r = 0, a = t.length; a > r; r++) i = e.call(n, i, t[r], r, t);
            return i
        }
    }

    function v(t, e, i) {
        if (t && e) {
            if (t.filter && t.filter === og) return t.filter(e, i);
            for (var n = [], r = 0, a = t.length; a > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
            return n
        }
    }

    function m(t, e, i) {
        if (t && e) for (var n = 0, r = t.length; r > n; n++) if (e.call(i, t[n], n, t)) return t[n]
    }

    function y(t, e) {
        var i = sg.call(arguments, 2);
        return function () {
            return t.apply(e, i.concat(sg.call(arguments)))
        }
    }

    function x(t) {
        var e = sg.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(sg.call(arguments)))
        }
    }

    function _(t) {
        return "[object Array]" === ng.call(t)
    }

    function w(t) {
        return "function" == typeof t
    }

    function b(t) {
        return "[object String]" === ng.call(t)
    }

    function S(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function M(t) {
        return !!eg[ng.call(t)]
    }

    function I(t) {
        return !!ig[ng.call(t)]
    }

    function T(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function C(t) {
        return t !== t
    }

    function A() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t]
    }

    function D(t, e) {
        return null != t ? t : e
    }

    function k(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function P() {
        return Function.call.apply(sg, arguments)
    }

    function L(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function O(t, e) {
        if (!t) throw new Error(e)
    }

    function z(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function E(t) {
        t[fg] = !0
    }

    function R(t) {
        return t[fg]
    }

    function B(t) {
        function e(t, e) {
            i ? n.set(t, e) : n.set(e, t)
        }

        var i = _(t);
        this.data = {};
        var n = this;
        t instanceof B ? t.each(e) : t && f(t, e)
    }

    function N(t) {
        return new B(t)
    }

    function F(t, e) {
        for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) i[n] = t[n];
        var r = t.length;
        for (n = 0; n < e.length; n++) i[n + r] = e[n];
        return i
    }

    function V() {
    }

    function W(t, e) {
        var i = new gg(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
    }

    function G(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function H(t) {
        var e = new gg(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function Z(t, e, i) {
        return t[0] = e, t[1] = i, t
    }

    function X(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
    }

    function Y(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
    }

    function j(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
    }

    function q(t) {
        return Math.sqrt(U(t))
    }

    function U(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function $(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
    }

    function K(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
    }

    function Q(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function J(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t
    }

    function te(t, e) {
        var i = q(e);
        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
    }

    function ee(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function ie(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function ne(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function re(t, e, i, n) {
        return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
    }

    function ae(t, e, i) {
        var n = e[0], r = e[1];
        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t
    }

    function oe(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
    }

    function se(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
    }

    function le() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function he(t, e) {
        return {target: t, topTarget: e && e.topTarget}
    }

    function ue(t, e) {
        var i = t._$eventProcessor;
        return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e
    }

    function ce(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
    }

    function de(t, e, i, n) {
        return i = i || {}, n || !tg.canvasSupported ? fe(t, e, i) : tg.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : fe(t, e, i), i
    }

    function fe(t, e, i) {
        var n = ce(t);
        i.zrX = e.clientX - n.left, i.zrY = e.clientY - n.top
    }

    function pe(t, e, i) {
        if (e = e || window.event, null != e.zrX) return e;
        var n = e.type, r = n && n.indexOf("touch") >= 0;
        if (r) {
            var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
            a && de(t, a, e, i)
        } else de(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && Mg.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }

    function ge(t, e, i) {
        Sg ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
    }

    function ve(t, e, i) {
        Sg ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
    }

    function me(t) {
        return t.which > 1
    }

    function ye(t, e, i) {
        return {
            type: t,
            event: i,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: i.zrX,
            offsetY: i.zrY,
            gestureEvent: i.gestureEvent,
            pinchX: i.pinchX,
            pinchY: i.pinchY,
            pinchScale: i.pinchScale,
            wheelDelta: i.zrDelta,
            zrByTouch: i.zrByTouch,
            which: i.which,
            stop: xe
        }
    }

    function xe() {
        Ig(this.event)
    }

    function _e() {
    }

    function we(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var n, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                r.silent && (n = !0), r = r.parent
            }
            return n ? Tg : !0
        }
        return !1
    }

    function be() {
        var t = new Dg(6);
        return Se(t), t
    }

    function Se(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function Me(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function Ie(t, e, i) {
        var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3],
            o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    }

    function Te(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
    }

    function Ce(t, e, i) {
        var n = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
        return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
    }

    function Ae(t, e, i) {
        var n = i[0], r = i[1];
        return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * r, t
    }

    function De(t, e) {
        var i = e[0], n = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = i * o - a * n;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l, t) : null
    }

    function ke(t) {
        var e = be();
        return Me(e, t), e
    }

    function Pe(t) {
        return t > Lg || -Lg > t
    }

    function Le(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function Oe(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
    }

    function ze(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
    }

    function Ee(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }

    function Re(t) {
        return Oe(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function Be(t) {
        return Ee(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function Ne(t, e, i) {
        return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
    }

    function Fe(t, e, i) {
        return t + (e - t) * i
    }

    function Ve(t, e, i, n, r) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t
    }

    function We(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function Ge(t, e) {
        Yg && We(Yg, e), Yg = Xg.put(t, Yg || e.slice())
    }

    function He(t, e) {
        if (t) {
            e = e || [];
            var i = Xg.get(t);
            if (i) return We(e, i);
            t += "";
            var n = t.replace(/ /g, "").toLowerCase();
            if (n in Zg) return We(e, Zg[n]), Ge(t, e), e;
            if ("#" !== n.charAt(0)) {
                var r = n.indexOf("("), a = n.indexOf(")");
                if (-1 !== r && a + 1 === n.length) {
                    var o = n.substr(0, r), s = n.substr(r + 1, a - (r + 1)).split(","), l = 1;
                    switch (o) {
                        case"rgba":
                            if (4 !== s.length) return void Ve(e, 0, 0, 0, 1);
                            l = Be(s.pop());
                        case"rgb":
                            return 3 !== s.length ? void Ve(e, 0, 0, 0, 1) : (Ve(e, Re(s[0]), Re(s[1]), Re(s[2]), l), Ge(t, e), e);
                        case"hsla":
                            return 4 !== s.length ? void Ve(e, 0, 0, 0, 1) : (s[3] = Be(s[3]), Ze(s, e), Ge(t, e), e);
                        case"hsl":
                            return 3 !== s.length ? void Ve(e, 0, 0, 0, 1) : (Ze(s, e), Ge(t, e), e);
                        default:
                            return
                    }
                }
                Ve(e, 0, 0, 0, 1)
            } else {
                if (4 === n.length) {
                    var h = parseInt(n.substr(1), 16);
                    return h >= 0 && 4095 >= h ? (Ve(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), Ge(t, e), e) : void Ve(e, 0, 0, 0, 1)
                }
                if (7 === n.length) {
                    var h = parseInt(n.substr(1), 16);
                    return h >= 0 && 16777215 >= h ? (Ve(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), Ge(t, e), e) : void Ve(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function Ze(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = Be(t[1]), r = Be(t[2]),
            a = .5 >= r ? r * (n + 1) : r + n - r * n, o = 2 * r - a;
        return e = e || [], Ve(e, Oe(255 * Ne(o, a, i + 1 / 3)), Oe(255 * Ne(o, a, i)), Oe(255 * Ne(o, a, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function Xe(t) {
        if (t) {
            var e, i, n = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(n, r, a), s = Math.max(n, r, a),
                l = s - o, h = (s + o) / 2;
            if (0 === l) e = 0, i = 0; else {
                i = .5 > h ? l / (s + o) : l / (2 - s - o);
                var u = ((s - n) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                n === s ? e = d - c : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, i, h];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function Ye(t, e) {
        var i = He(t);
        if (i) {
            for (var n = 0; 3 > n; n++) i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
            return Qe(i, 4 === i.length ? "rgba" : "rgb")
        }
    }

    function je(t) {
        var e = He(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }

    function qe(t, e, i) {
        if (e && e.length && t >= 0 && 1 >= t) {
            i = i || [];
            var n = t * (e.length - 1), r = Math.floor(n), a = Math.ceil(n), o = e[r], s = e[a], l = n - r;
            return i[0] = Oe(Fe(o[0], s[0], l)), i[1] = Oe(Fe(o[1], s[1], l)), i[2] = Oe(Fe(o[2], s[2], l)), i[3] = Ee(Fe(o[3], s[3], l)), i
        }
    }

    function Ue(t, e, i) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var n = t * (e.length - 1), r = Math.floor(n), a = Math.ceil(n), o = He(e[r]), s = He(e[a]), l = n - r,
                h = Qe([Oe(Fe(o[0], s[0], l)), Oe(Fe(o[1], s[1], l)), Oe(Fe(o[2], s[2], l)), Ee(Fe(o[3], s[3], l))], "rgba");
            return i ? {color: h, leftIndex: r, rightIndex: a, value: n} : h
        }
    }

    function $e(t, e, i, n) {
        return t = He(t), t ? (t = Xe(t), null != e && (t[0] = ze(e)), null != i && (t[1] = Be(i)), null != n && (t[2] = Be(n)), Qe(Ze(t), "rgba")) : void 0
    }

    function Ke(t, e) {
        return t = He(t), t && null != e ? (t[3] = Ee(e), Qe(t, "rgba")) : void 0
    }

    function Qe(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")"
        }
    }

    function Je(t, e) {
        return t[e]
    }

    function ti(t, e, i) {
        t[e] = i
    }

    function ei(t, e, i) {
        return (e - t) * i + t
    }

    function ii(t, e, i) {
        return i > .5 ? e : t
    }

    function ni(t, e, i, n, r) {
        var a = t.length;
        if (1 == r) for (var o = 0; a > o; o++) n[o] = ei(t[o], e[o], i); else for (var s = a && t[0].length, o = 0; a > o; o++) for (var l = 0; s > l; l++) n[o][l] = ei(t[o][l], e[o][l], i)
    }

    function ri(t, e, i) {
        var n = t.length, r = e.length;
        if (n !== r) {
            var a = n > r;
            if (a) t.length = r; else for (var o = n; r > o; o++) t.push(1 === i ? e[o] : $g.call(e[o]))
        }
        for (var s = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === i) isNaN(t[o]) && (t[o] = e[o]); else for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
    }

    function ai(t, e, i) {
        if (t === e) return !0;
        var n = t.length;
        if (n !== e.length) return !1;
        if (1 === i) {
            for (var r = 0; n > r; r++) if (t[r] !== e[r]) return !1
        } else for (var a = t[0].length, r = 0; n > r; r++) for (var o = 0; a > o; o++) if (t[r][o] !== e[r][o]) return !1;
        return !0
    }

    function oi(t, e, i, n, r, a, o, s, l) {
        var h = t.length;
        if (1 == l) for (var u = 0; h > u; u++) s[u] = si(t[u], e[u], i[u], n[u], r, a, o); else for (var c = t[0].length, u = 0; h > u; u++) for (var d = 0; c > d; d++) s[u][d] = si(t[u][d], e[u][d], i[u][d], n[u][d], r, a, o)
    }

    function si(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    }

    function li(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var i = [], n = 0; e > n; n++) i.push($g.call(t[n]));
                return i
            }
            return $g.call(t)
        }
        return t
    }

    function hi(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function ui(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1
    }

    function ci(t, e, i, n, r, a) {
        var o = t._getter, s = t._setter, l = "spline" === e, h = n.length;
        if (h) {
            var u, c = n[0].value, f = d(c), p = !1, g = !1, v = f ? ui(n) : 0;
            n.sort(function (t, e) {
                return t.time - e.time
            }), u = n[h - 1].time;
            for (var m = [], y = [], x = n[0].value, _ = !0, w = 0; h > w; w++) {
                m.push(n[w].time / u);
                var b = n[w].value;
                if (f && ai(b, x, v) || !f && b === x || (_ = !1), x = b, "string" == typeof b) {
                    var S = He(b);
                    S ? (b = S, p = !0) : g = !0
                }
                y.push(b)
            }
            if (a || !_) {
                for (var M = y[h - 1], w = 0; h - 1 > w; w++) f ? ri(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
                f && ri(o(t._target, r), M, v);
                var I, T, C, A, D, k, P = 0, L = 0;
                if (p) var O = [0, 0, 0, 0];
                var z = function (t, e) {
                    var i;
                    if (0 > e) i = 0; else if (L > e) {
                        for (I = Math.min(P + 1, h - 1), i = I; i >= 0 && !(m[i] <= e); i--) ;
                        i = Math.min(i, h - 2)
                    } else {
                        for (i = P; h > i && !(m[i] > e); i++) ;
                        i = Math.min(i - 1, h - 2)
                    }
                    P = i, L = e;
                    var n = m[i + 1] - m[i];
                    if (0 !== n) if (T = (e - m[i]) / n, l) if (A = y[i], C = y[0 === i ? i : i - 1], D = y[i > h - 2 ? h - 1 : i + 1], k = y[i > h - 3 ? h - 1 : i + 2], f) oi(C, A, D, k, T, T * T, T * T * T, o(t, r), v); else {
                        var a;
                        if (p) a = oi(C, A, D, k, T, T * T, T * T * T, O, 1), a = hi(O); else {
                            if (g) return ii(A, D, T);
                            a = si(C, A, D, k, T, T * T, T * T * T)
                        }
                        s(t, r, a)
                    } else if (f) ni(y[i], y[i + 1], T, o(t, r), v); else {
                        var a;
                        if (p) ni(y[i], y[i + 1], T, O, 1), a = hi(O); else {
                            if (g) return ii(y[i], y[i + 1], T);
                            a = ei(y[i], y[i + 1], T)
                        }
                        s(t, r, a)
                    }
                }, E = new Le({target: t._target, life: u, loop: t._loop, delay: t._delay, onframe: z, ondestroy: i});
                return e && "spline" !== e && (E.easing = e), E
            }
        }
    }

    function di(t, e, i, n, r, a, o, s) {
        function l() {
            u--, u || a && a()
        }

        b(n) ? (a = r, r = n, n = 0) : w(r) ? (a = r, r = "linear", n = 0) : w(n) ? (a = n, n = 0) : w(i) ? (a = i, i = 500) : i || (i = 500), t.stopAnimation(), fi(t, "", t, e, i, n, s);
        var h = t.animators.slice(), u = h.length;
        u || a && a();
        for (var c = 0; c < h.length; c++) h[c].done(l).start(r, o)
    }

    function fi(t, e, i, n, r, a, o) {
        var s = {}, l = 0;
        for (var h in n) n.hasOwnProperty(h) && (null != i[h] ? S(n[h]) && !d(n[h]) ? fi(t, e ? e + "." + h : h, i[h], n[h], r, a, o) : (o ? (s[h] = i[h], pi(t, e, h, n[h])) : s[h] = n[h], l++) : null == n[h] || o || pi(t, e, h, n[h]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
    }

    function pi(t, e, i, n) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][i] = n, t.attr(r)
        } else t.attr(i, n)
    }

    function gi(t, e, i, n) {
        0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
    }

    function vi(t) {
        for (var e = 0; t >= hv;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function mi(t, e, i, n) {
        var r = e + 1;
        if (r === i) return 1;
        if (n(t[r++], t[e]) < 0) {
            for (; i > r && n(t[r], t[r - 1]) < 0;) r++;
            yi(t, e, r)
        } else for (; i > r && n(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function yi(t, e, i) {
        for (i--; i > e;) {
            var n = t[e];
            t[e++] = t[i], t[i--] = n
        }
    }

    function xi(t, e, i, n, r) {
        for (n === e && n++; i > n; n++) {
            for (var a, o = t[n], s = e, l = n; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
            var h = n - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0;) t[s + h] = t[s + h - 1], h--
            }
            t[s] = o
        }
    }

    function _i(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[i + r]) > 0) {
            for (s = n - r; s > l && a(t, e[i + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        } else {
            for (s = r + 1; s > l && a(t, e[i + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h
        }
        for (o++; l > o;) {
            var u = o + (l - o >>> 1);
            a(t, e[i + u]) > 0 ? o = u + 1 : l = u
        }
        return l
    }

    function wi(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[i + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[i + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h
        } else {
            for (s = n - r; s > l && a(t, e[i + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; l > o;) {
            var u = o + (l - o >>> 1);
            a(t, e[i + u]) < 0 ? l = u : o = u + 1
        }
        return l
    }

    function bi(t, e) {
        function i(t, e) {
            l[c] = t, h[c] = e, c += 1
        }

        function n() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--; else if (h[t] > h[t + 1]) break;
                a(t)
            }
        }

        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && h[t - 1] < h[t + 1] && t--, a(t)
            }
        }

        function a(i) {
            var n = l[i], r = h[i], a = l[i + 1], u = h[i + 1];
            h[i] = r + u, i === c - 3 && (l[i + 1] = l[i + 2], h[i + 1] = h[i + 2]), c--;
            var d = wi(t[a], t, n, r, 0, e);
            n += d, r -= d, 0 !== r && (u = _i(t[n + r - 1], t, a, u, u - 1, e), 0 !== u && (u >= r ? o(n, r, a, u) : s(n, r, a, u)))
        }

        function o(i, n, r, a) {
            var o = 0;
            for (o = 0; n > o; o++) d[o] = t[i + o];
            var s = 0, l = r, h = i;
            if (t[h++] = t[l++], 0 !== --a) {
                if (1 === n) {
                    for (o = 0; a > o; o++) t[h + o] = t[l + o];
                    return void (t[h + a] = d[s])
                }
                for (var c, f, p, g = u; ;) {
                    c = 0, f = 0, p = !1;
                    do if (e(t[l], d[s]) < 0) {
                        if (t[h++] = t[l++], f++, c = 0, 0 === --a) {
                            p = !0;
                            break
                        }
                    } else if (t[h++] = d[s++], c++, f = 0, 1 === --n) {
                        p = !0;
                        break
                    } while (g > (c | f));
                    if (p) break;
                    do {
                        if (c = wi(t[l], d, s, n, 0, e), 0 !== c) {
                            for (o = 0; c > o; o++) t[h + o] = d[s + o];
                            if (h += c, s += c, n -= c, 1 >= n) {
                                p = !0;
                                break
                            }
                        }
                        if (t[h++] = t[l++], 0 === --a) {
                            p = !0;
                            break
                        }
                        if (f = _i(d[s], t, l, a, 0, e), 0 !== f) {
                            for (o = 0; f > o; o++) t[h + o] = t[l + o];
                            if (h += f, l += f, a -= f, 0 === a) {
                                p = !0;
                                break
                            }
                        }
                        if (t[h++] = d[s++], 1 === --n) {
                            p = !0;
                            break
                        }
                        g--
                    } while (c >= uv || f >= uv);
                    if (p) break;
                    0 > g && (g = 0), g += 2
                }
                if (u = g, 1 > u && (u = 1), 1 === n) {
                    for (o = 0; a > o; o++) t[h + o] = t[l + o];
                    t[h + a] = d[s]
                } else {
                    if (0 === n) throw new Error;
                    for (o = 0; n > o; o++) t[h + o] = d[s + o]
                }
            } else for (o = 0; n > o; o++) t[h + o] = d[s + o]
        }

        function s(i, n, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) d[o] = t[r + o];
            var s = i + n - 1, l = a - 1, h = r + a - 1, c = 0, f = 0;
            if (t[h--] = t[s--], 0 !== --n) {
                if (1 === a) {
                    for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) t[f + o] = t[c + o];
                    return void (t[h] = d[l])
                }
                for (var p = u; ;) {
                    var g = 0, v = 0, m = !1;
                    do if (e(d[l], t[s]) < 0) {
                        if (t[h--] = t[s--], g++, v = 0, 0 === --n) {
                            m = !0;
                            break
                        }
                    } else if (t[h--] = d[l--], v++, g = 0, 1 === --a) {
                        m = !0;
                        break
                    } while (p > (g | v));
                    if (m) break;
                    do {
                        if (g = n - wi(d[l], t, i, n, n - 1, e), 0 !== g) {
                            for (h -= g, s -= g, n -= g, f = h + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
                            if (0 === n) {
                                m = !0;
                                break
                            }
                        }
                        if (t[h--] = d[l--], 1 === --a) {
                            m = !0;
                            break
                        }
                        if (v = a - _i(t[s], d, 0, a, a - 1, e), 0 !== v) {
                            for (h -= v, l -= v, a -= v, f = h + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
                            if (1 >= a) {
                                m = !0;
                                break
                            }
                        }
                        if (t[h--] = t[s--], 0 === --n) {
                            m = !0;
                            break
                        }
                        p--
                    } while (g >= uv || v >= uv);
                    if (m) break;
                    0 > p && (p = 0), p += 2
                }
                if (u = p, 1 > u && (u = 1), 1 === a) {
                    for (h -= n, s -= n, f = h + 1, c = s + 1, o = n - 1; o >= 0; o--) t[f + o] = t[c + o];
                    t[h] = d[l]
                } else {
                    if (0 === a) throw new Error;
                    for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
                }
            } else for (c = h - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }

        var l, h, u = uv, c = 0, d = [];
        l = [], h = [], this.mergeRuns = n, this.forceMergeRuns = r, this.pushRun = i
    }

    function Si(t, e, i, n) {
        i || (i = 0), n || (n = t.length);
        var r = n - i;
        if (!(2 > r)) {
            var a = 0;
            if (hv > r) return a = mi(t, i, n, e), void xi(t, i, n, i + a, e);
            var o = new bi(t, e), s = vi(r);
            do {
                if (a = mi(t, i, n, e), s > a) {
                    var l = r;
                    l > s && (l = s), xi(t, i, i + l, i + a, e), a = l
                }
                o.pushRun(i, a), o.mergeRuns(), r -= a, i += a
            } while (0 !== r);
            o.forceMergeRuns()
        }
    }

    function Mi(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function Ii(t, e, i) {
        var n = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
        var s = t.createLinearGradient(n, a, r, o);
        return s
    }

    function Ti(t, e, i) {
        var n = i.width, r = i.height, a = Math.min(n, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (o = o * n + i.x, s = s * r + i.y, l *= a);
        var h = t.createRadialGradient(o, s, 0, o, s, l);
        return h
    }

    function Ci() {
        return !1
    }

    function Ai(t, e, i) {
        var n = cg(), r = e.getWidth(), a = e.getHeight(), o = n.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = a * i, n
    }

    function Di(t) {
        if ("string" == typeof t) {
            var e = bv.get(t);
            return e && e.image
        }
        return t
    }

    function ki(t, e, i, n, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var a = bv.get(t), o = {hostEl: i, cb: n, cbPayload: r};
                return a ? (e = a.image, !Li(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = e.onerror = Pi, bv.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Pi() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e], n = i.cb;
            n && n(this, i.cbPayload), i.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function Li(t) {
        return t && t.width && t.height
    }

    function Oi(t, e) {
        Av[t] = e
    }

    function zi(t, e) {
        e = e || Cv;
        var i = t + ":" + e;
        if (Sv[i]) return Sv[i];
        for (var n = (t + "").split("\n"), r = 0, a = 0, o = n.length; o > a; a++) r = Math.max(Yi(n[a], e).width, r);
        return Mv > Iv && (Mv = 0, Sv = {}), Mv++, Sv[i] = r, r
    }

    function Ei(t, e, i, n, r, a, o) {
        return a ? Bi(t, e, i, n, r, a, o) : Ri(t, e, i, n, r, o)
    }

    function Ri(t, e, i, n, r, a) {
        var o = ji(t, e, r, a), s = zi(t, e);
        r && (s += r[1] + r[3]);
        var l = o.outerHeight, h = Ni(0, s, i), u = Fi(0, l, n), c = new gi(h, u, s, l);
        return c.lineHeight = o.lineHeight, c
    }

    function Bi(t, e, i, n, r, a, o) {
        var s = qi(t, {rich: a, truncate: o, font: e, textAlign: i, textPadding: r}), l = s.outerWidth,
            h = s.outerHeight, u = Ni(0, l, i), c = Fi(0, h, n);
        return new gi(u, c, l, h)
    }

    function Ni(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
    }

    function Fi(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
    }

    function Vi(t, e, i) {
        var n = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", h = "top";
        switch (t) {
            case"left":
                n -= i, r += s, l = "right", h = "middle";
                break;
            case"right":
                n += i + o, r += s, h = "middle";
                break;
            case"top":
                n += o / 2, r -= i, l = "center", h = "bottom";
                break;
            case"bottom":
                n += o / 2, r += a + i, l = "center";
                break;
            case"inside":
                n += o / 2, r += s, l = "center", h = "middle";
                break;
            case"insideLeft":
                n += i, r += s, h = "middle";
                break;
            case"insideRight":
                n += o - i, r += s, l = "right", h = "middle";
                break;
            case"insideTop":
                n += o / 2, r += i, l = "center";
                break;
            case"insideBottom":
                n += o / 2, r += a - i, l = "center", h = "bottom";
                break;
            case"insideTopLeft":
                n += i, r += i;
                break;
            case"insideTopRight":
                n += o - i, r += i, l = "right";
                break;
            case"insideBottomLeft":
                n += i, r += a - i, h = "bottom";
                break;
            case"insideBottomRight":
                n += o - i, r += a - i, l = "right", h = "bottom"
        }
        return {x: n, y: r, textAlign: l, textVerticalAlign: h}
    }

    function Wi(t, e, i, n, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = Gi(e, i, n, r);
        for (var o = 0, s = a.length; s > o; o++) a[o] = Hi(a[o], r);
        return a.join("\n")
    }

    function Gi(t, e, i, n) {
        n = o({}, n), n.font = e;
        var i = D(i, "...");
        n.maxIterations = D(n.maxIterations, 2);
        var r = n.minChar = D(n.minChar, 0);
        n.cnCharWidth = zi("国", e);
        var a = n.ascCharWidth = zi("a", e);
        n.placeholder = D(n.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
        var h = zi(i);
        return h > s && (i = "", h = 0), s = t - h, n.ellipsis = i, n.ellipsisWidth = h, n.contentWidth = s, n.containerWidth = t, n
    }

    function Hi(t, e) {
        var i = e.containerWidth, n = e.font, r = e.contentWidth;
        if (!i) return "";
        var a = zi(t, n);
        if (i >= a) return t;
        for (var o = 0; ; o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? Zi(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            t = t.substr(0, s), a = zi(t, n)
        }
        return "" === t && (t = e.placeholder), t
    }

    function Zi(t, e, i, n) {
        for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? i : n
        }
        return a
    }

    function Xi(t) {
        return zi("国", t)
    }

    function Yi(t, e) {
        return Av.measureText(t, e)
    }

    function ji(t, e, i, n) {
        null != t && (t += "");
        var r = Xi(e), a = t ? t.split("\n") : [], o = a.length * r, s = o;
        if (i && (s += i[0] + i[2]), t && n) {
            var l = n.outerHeight, h = n.outerWidth;
            if (null != l && s > l) t = "", a = []; else if (null != h) for (var u = Gi(h - (i ? i[1] + i[3] : 0), e, n.ellipsis, {
                minChar: n.minChar,
                placeholder: n.placeholder
            }), c = 0, d = a.length; d > c; c++) a[c] = Hi(a[c], u)
        }
        return {lines: a, height: o, outerHeight: s, lineHeight: r}
    }

    function qi(t, e) {
        var i = {lines: [], width: 0, height: 0};
        if (null != t && (t += ""), !t) return i;
        for (var n, r = Tv.lastIndex = 0; null != (n = Tv.exec(t));) {
            var a = n.index;
            a > r && Ui(i, t.substring(r, a)), Ui(i, n[2], n[1]), r = Tv.lastIndex
        }
        r < t.length && Ui(i, t.substring(r, t.length));
        var o = i.lines, s = 0, l = 0, h = [], u = e.textPadding, c = e.truncate, d = c && c.outerWidth,
            f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var x = g.tokens[y], _ = x.styleName && e.rich[x.styleName] || {}, w = x.textPadding = _.textPadding,
                    b = x.font = _.font || e.font, S = x.textHeight = D(_.textHeight, Xi(b));
                if (w && (S += w[0] + w[2]), x.height = S, x.lineHeight = k(_.textLineHeight, e.textLineHeight, S), x.textAlign = _ && _.textAlign || e.textAlign, x.textVerticalAlign = _ && _.textVerticalAlign || "middle", null != f && s + x.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                x.textWidth = zi(x.text, b);
                var M = _.textWidth, I = null == M || "auto" === M;
                if ("string" == typeof M && "%" === M.charAt(M.length - 1)) x.percentWidth = M, h.push(x), M = 0; else {
                    if (I) {
                        M = x.textWidth;
                        var T = _.textBackgroundColor, C = T && T.image;
                        C && (C = Di(C), Li(C) && (M = Math.max(M, C.width * S / C.height)))
                    }
                    var A = w ? w[1] + w[3] : 0;
                    M += A;
                    var P = null != d ? d - m : null;
                    null != P && M > P && (!I || A > P ? (x.text = "", x.textWidth = M = 0) : (x.text = Wi(x.text, P - A, b, c.ellipsis, {minChar: c.minChar}), x.textWidth = zi(x.text, b), M = x.textWidth + A))
                }
                m += x.width = M, _ && (v = Math.max(v, x.lineHeight))
            }
            g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
        }
        i.outerWidth = i.width = D(e.textWidth, l), i.outerHeight = i.height = D(e.textHeight, s), u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
        for (var p = 0; p < h.length; p++) {
            var x = h[p], L = x.percentWidth;
            x.width = parseInt(L, 10) / 100 * l
        }
        return i
    }

    function Ui(t, e, i) {
        for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {styleName: i, text: s, isLineHolder: !s && !n};
            if (o) a.push({tokens: [l]}); else {
                var h = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l)
            }
        }
    }

    function $i(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && z(e) || t.textFont || t.font
    }

    function Ki(t, e) {
        var i, n, r, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = r = a = u : u instanceof Array ? 1 === u.length ? i = n = r = a = u[0] : 2 === u.length ? (i = r = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], r = u[2]) : (i = u[0], n = u[1], r = u[2], a = u[3]) : i = n = r = a = 0;
        var c;
        i + n > l && (c = i + n, i *= l / c, n *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + a > h && (c = i + a, i *= h / c, a *= h / c), t.moveTo(o + i, s), t.lineTo(o + l - n, s), 0 !== n && t.arc(o + l - n, s + n, n, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + i), 0 !== i && t.arc(o + i, s + i, i, Math.PI, 1.5 * Math.PI)
    }

    function Qi(t) {
        return Ji(t), f(t.rich, Ji), t
    }

    function Ji(t) {
        if (t) {
            t.font = $i(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || Dv[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || kv[i] ? i : "top";
            var n = t.textPadding;
            n && (t.textPadding = L(t.textPadding))
        }
    }

    function tn(t, e, i, n, r, a) {
        n.rich ? nn(t, e, i, n, r) : en(t, e, i, n, r, a)
    }

    function en(t, e, i, n, r, a) {
        var o = a && a.style, s = o && "text" === a.type, l = n.font || Cv;
        s && l === (o.font || Cv) || (e.font = l);
        var h = t.__computedFont;
        t.__styleFont !== l && (t.__styleFont = l, h = t.__computedFont = e.font);
        var u = n.textPadding, c = t.__textCotentBlock;
        (!c || t.__dirtyText) && (c = t.__textCotentBlock = ji(i, h, u, n.truncate));
        var d = c.outerHeight, f = c.lines, p = c.lineHeight, g = un(d, n, r), v = g.baseX, m = g.baseY,
            y = g.textAlign || "left", x = g.textVerticalAlign;
        an(e, n, r, v, m);
        var _ = Fi(m, d, x), w = v, b = _, S = sn(n);
        if (S || u) {
            var M = zi(i, h), I = M;
            u && (I += u[1] + u[3]);
            var T = Ni(v, I, y);
            S && ln(t, e, n, T, _, I, d), u && (w = gn(v, y, u), b += u[0])
        }
        e.textAlign = y, e.textBaseline = "middle";
        for (var C = 0; C < Pv.length; C++) {
            var A = Pv[C], D = A[0], k = A[1], P = n[D];
            s && P === o[D] || (e[k] = fv(e, k, P || A[2]))
        }
        b += p / 2;
        var L = n.textStrokeWidth, O = s ? o.textStrokeWidth : null, z = !s || L !== O,
            E = !s || z || n.textStroke !== o.textStroke, R = dn(n.textStroke, L), B = fn(n.textFill);
        if (R && (z && (e.lineWidth = L), E && (e.strokeStyle = R)), B && (!s || n.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = B), 1 === f.length) R && e.strokeText(f[0], w, b), B && e.fillText(f[0], w, b); else for (var C = 0; C < f.length; C++) R && e.strokeText(f[C], w, b), B && e.fillText(f[C], w, b), b += p
    }

    function nn(t, e, i, n, r) {
        var a = t.__textCotentBlock;
        (!a || t.__dirtyText) && (a = t.__textCotentBlock = qi(i, n)), rn(t, e, a, n, r)
    }

    function rn(t, e, i, n, r) {
        var a = i.width, o = i.outerWidth, s = i.outerHeight, l = n.textPadding, h = un(s, n, r), u = h.baseX,
            c = h.baseY, d = h.textAlign, f = h.textVerticalAlign;
        an(e, n, r, u, c);
        var p = Ni(u, o, d), g = Fi(c, s, f), v = p, m = g;
        l && (v += l[3], m += l[0]);
        var y = v + a;
        sn(n) && ln(t, e, n, p, g, o, s);
        for (var x = 0; x < i.lines.length; x++) {
            for (var _, w = i.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, A = y, D = S - 1; S > T && (_ = b[T], !_.textAlign || "left" === _.textAlign);) on(t, e, _, n, M, m, C, "left"), I -= _.width, C += _.width, T++;
            for (; D >= 0 && (_ = b[D], "right" === _.textAlign);) on(t, e, _, n, M, m, A, "right"), I -= _.width, A -= _.width, D--;
            for (C += (a - (C - v) - (y - A) - I) / 2; D >= T;) _ = b[T], on(t, e, _, n, M, m, C + _.width / 2, "center"), C += _.width, T++;
            m += M
        }
    }

    function an(t, e, i, n, r) {
        if (i && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r)
        }
    }

    function on(t, e, i, n, r, a, o, s) {
        var l = n.rich[i.styleName] || {};
        l.text = i.text;
        var h = i.textVerticalAlign, u = a + r / 2;
        "top" === h ? u = a + i.height / 2 : "bottom" === h && (u = a + r - i.height / 2), !i.isLineHolder && sn(l) && ln(t, e, l, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
        var c = i.textPadding;
        c && (o = gn(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), cn(e, "shadowBlur", k(l.textShadowBlur, n.textShadowBlur, 0)), cn(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), cn(e, "shadowOffsetX", k(l.textShadowOffsetX, n.textShadowOffsetX, 0)), cn(e, "shadowOffsetY", k(l.textShadowOffsetY, n.textShadowOffsetY, 0)), cn(e, "textAlign", s), cn(e, "textBaseline", "middle"), cn(e, "font", i.font || Cv);
        var d = dn(l.textStroke || n.textStroke, p), f = fn(l.textFill || n.textFill),
            p = D(l.textStrokeWidth, n.textStrokeWidth);
        d && (cn(e, "lineWidth", p), cn(e, "strokeStyle", d), e.strokeText(i.text, o, u)), f && (cn(e, "fillStyle", f), e.fillText(i.text, o, u))
    }

    function sn(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function ln(t, e, i, n, r, a, o) {
        var s = i.textBackgroundColor, l = i.textBorderWidth, h = i.textBorderColor, u = b(s);
        if (cn(e, "shadowBlur", i.textBoxShadowBlur || 0), cn(e, "shadowColor", i.textBoxShadowColor || "transparent"), cn(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), cn(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? Ki(e, {x: n, y: r, width: a, height: o, r: c}) : e.rect(n, r, a, o), e.closePath()
        }
        if (u) if (cn(e, "fillStyle", s), null != i.fillOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = d
        } else e.fill(); else if (w(s)) cn(e, "fillStyle", s(i)), e.fill(); else if (S(s)) {
            var f = s.image;
            f = ki(f, null, t, hn, s), f && Li(f) && e.drawImage(f, n, r, a, o)
        }
        if (l && h) if (cn(e, "lineWidth", l), cn(e, "strokeStyle", h), null != i.strokeOpacity) {
            var d = e.globalAlpha;
            e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = d
        } else e.stroke()
    }

    function hn(t, e) {
        e.image = t
    }

    function un(t, e, i) {
        var n = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (i) {
            var s = e.textPosition;
            if (s instanceof Array) n = i.x + pn(s[0], i.width), r = i.y + pn(s[1], i.height); else {
                var l = Vi(s, i, e.textDistance);
                n = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (n += h[0], r += h[1])
        }
        return {baseX: n, baseY: r, textAlign: a, textVerticalAlign: o}
    }

    function cn(t, e, i) {
        return t[e] = fv(t, e, i), t[e]
    }

    function dn(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function fn(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function pn(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function gn(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
    }

    function vn(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function mn(t) {
        t = t || {}, rv.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new gv(t.style, this), this._rect = null, this.__clipPaths = []
    }

    function yn(t) {
        mn.call(this, t)
    }

    function xn(t) {
        return parseInt(t, 10)
    }

    function _n(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }

    function wn(t, e, i) {
        return Nv.copy(t.getBoundingRect()), t.transform && Nv.applyTransform(t.transform), Fv.width = e, Fv.height = i, !Nv.intersect(Fv)
    }

    function bn(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0
    }

    function Sn(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)
        }
    }

    function Mn(t, e) {
        var i = document.createElement("div");
        return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
    }

    function In(t) {
        var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i)
    }

    function Tn(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Cn(t) {
        return "mousewheel" === t && tg.browser.firefox ? "DOMMouseScroll" : t
    }

    function An(t, e, i) {
        var n = t._gestureMgr;
        "start" === i && n.clear();
        var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === i && n.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({target: r.target}, a, r.event)
        }
    }

    function Dn(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function kn(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function Pn(t) {
        function e(t, e) {
            return function () {
                return e._touching ? void 0 : t.apply(e, arguments)
            }
        }

        f(Yv, function (e) {
            t._handlers[e] = y(Uv[e], t)
        }), f(qv, function (e) {
            t._handlers[e] = y(Uv[e], t)
        }), f(Xv, function (i) {
            t._handlers[i] = e(Uv[i], t)
        })
    }

    function Ln(t) {
        function e(e, i) {
            f(e, function (e) {
                ge(t, Cn(e), i._handlers[e])
            }, i)
        }

        bg.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Gv, this._handlers = {}, Pn(this), tg.pointerEventsSupported ? e(qv, this) : (tg.touchEventsSupported && e(Yv, this), e(Xv, this))
    }

    function On(t, e) {
        var i = new em(Qp(), t, e);
        return Jv[i.id] = i, i
    }

    function zn(t) {
        if (t) t.dispose(); else {
            for (var e in Jv) Jv.hasOwnProperty(e) && Jv[e].dispose();
            Jv = {}
        }
        return this
    }

    function En(t) {
        return Jv[t]
    }

    function Rn(t, e) {
        Qv[t] = e
    }

    function Bn(t) {
        delete Jv[t]
    }

    function Nn(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function Fn(t, e, i) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var n = 0, r = i.length; r > n; n++) {
                var a = i[n];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }

    function Vn(t) {
        return !rm(t) || am(t) || t instanceof Date ? t : t.value
    }

    function Wn(t) {
        return rm(t) && !(t instanceof Array)
    }

    function Gn(t, e) {
        e = (e || []).slice();
        var i = p(t || [], function (t) {
            return {exist: t}
        });
        return nm(e, function (t, n) {
            if (rm(t)) {
                for (var r = 0; r < i.length; r++) if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, void (e[n] = null);
                for (var r = 0; r < i.length; r++) {
                    var a = i[r].exist;
                    if (!(i[r].option || null != a.id && null != t.id || null == t.name || Xn(t) || Xn(a) || a.name !== t.name + "")) return i[r].option = t, void (e[n] = null)
                }
            }
        }), nm(e, function (t) {
            if (rm(t)) {
                for (var e = 0; e < i.length; e++) {
                    var n = i[e].exist;
                    if (!i[e].option && !Xn(n) && null == t.id) {
                        i[e].option = t;
                        break
                    }
                }
                e >= i.length && i.push({option: t})
            }
        }), i
    }

    function Hn(t) {
        var e = N();
        nm(t, function (t) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), nm(t, function (t) {
            var i = t.option;
            O(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), nm(t, function (t, i) {
            var n = t.exist, r = t.option, a = t.keyInfo;
            if (rm(r)) {
                if (a.name = null != r.name ? r.name + "" : n ? n.name : om + i, n) a.id = n.id; else if (null != r.id) a.id = r.id + ""; else {
                    var o = 0;
                    do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }

    function Zn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(om))
    }

    function Xn(t) {
        return rm(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
    }

    function Yn(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function jn() {
        var t = "__\x00ec_inner_" + lm++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function qn(t, e, i) {
        if (b(e)) {
            var n = {};
            n[e + "Index"] = 0, e = n
        }
        var r = i && i.defaultMainType;
        !r || Un(e, r + "Index") || Un(e, r + "Id") || Un(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return nm(e, function (n, r) {
            var n = e[r];
            if ("dataIndex" === r || "dataIndexInside" === r) return void (a[r] = n);
            var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
            if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && h(i.includeMainTypes, s) < 0)) {
                var u = {mainType: s};
                ("index" !== l || "all" !== n) && (u[l] = n);
                var c = t.queryComponents(u);
                a[s + "Models"] = c, a[s + "Model"] = c[0]
            }
        }), a
    }

    function Un(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function $n(t, e, i) {
        t.setAttribute ? t.setAttribute(e, i) : t[e] = i
    }

    function Kn(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function Qn(t) {
        return "auto" === t ? tg.domSupported ? "html" : "richText" : t || "html"
    }

    function Jn(t) {
        var e = {main: "", sub: ""};
        return t && (t = t.split(hm), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function tr(t) {
        O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function er(t) {
        t.$constructor = t, t.extend = function (t) {
            var e = this, i = function () {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
            };
            return o(i.prototype, t), i.extend = this.extend, i.superCall = nr, i.superApply = rr, u(i, this), i.superClass = e, i
        }
    }

    function ir(t) {
        var e = ["__\x00is_clz", cm++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function nr(t, e) {
        var i = P(arguments, 2);
        return this.superClass.prototype[e].apply(t, i)
    }

    function rr(t, e, i) {
        return this.superClass.prototype[e].apply(t, i)
    }

    function ar(t, e) {
        function i(t) {
            var e = n[t.main];
            return e && e[um] || (e = n[t.main] = {}, e[um] = !0), e
        }

        e = e || {};
        var n = {};
        if (t.registerClass = function (t, e) {
            if (e) if (tr(e), e = Jn(e), e.sub) {
                if (e.sub !== um) {
                    var r = i(e);
                    r[e.sub] = t
                }
            } else n[e.main] = t;
            return t
        }, t.getClass = function (t, e, i) {
            var r = n[t];
            if (r && r[um] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            t = Jn(t);
            var e = [], i = n[t.main];
            return i && i[um] ? f(i, function (t, i) {
                i !== um && e.push(t)
            }) : e.push(i), e
        }, t.hasClass = function (t) {
            return t = Jn(t), !!n[t.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return f(n, function (e, i) {
                t.push(i)
            }), t
        }, t.hasSubTypes = function (t) {
            t = Jn(t);
            var e = n[t.main];
            return e && e[um]
        }, t.parseClassType = Jn, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var i = r.call(this, e);
                return t.registerClass(i, e.type)
            })
        }
        return t
    }

    function or(t) {
        return t > -xm && xm > t
    }

    function sr(t) {
        return t > xm || -xm > t
    }

    function lr(t, e, i, n, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i)
    }

    function hr(t, e, i, n, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r)
    }

    function ur(t, e, i, n, r, a) {
        var o = n + 3 * (e - i) - t, s = 3 * (i - 2 * e + t), l = 3 * (e - t), h = t - r, u = s * s - 3 * o * l,
            c = s * l - 9 * o * h, d = l * l - 3 * s * h, f = 0;
        if (or(u) && or(c)) if (or(s)) a[0] = 0; else {
            var p = -l / s;
            p >= 0 && 1 >= p && (a[f++] = p)
        } else {
            var g = c * c - 4 * u * d;
            if (or(g)) {
                var v = c / u, p = -s / o + v, m = -v / 2;
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
            } else if (g > 0) {
                var y = ym(g), x = u * s + 1.5 * o * (-c + y), _ = u * s + 1.5 * o * (-c - y);
                x = 0 > x ? -mm(-x, bm) : mm(x, bm), _ = 0 > _ ? -mm(-_, bm) : mm(_, bm);
                var p = (-s - (x + _)) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p)
            } else {
                var w = (2 * u * s - 3 * o * c) / (2 * ym(u * u * u)), b = Math.acos(w) / 3, S = ym(u), M = Math.cos(b),
                    p = (-s - 2 * S * M) / (3 * o), m = (-s + S * (M + wm * Math.sin(b))) / (3 * o),
                    I = (-s + S * (M - wm * Math.sin(b))) / (3 * o);
                p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I)
            }
        }
        return f
    }

    function cr(t, e, i, n, r) {
        var a = 6 * i - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * i, s = 3 * e - 3 * t, l = 0;
        if (or(o)) {
            if (sr(a)) {
                var h = -s / a;
                h >= 0 && 1 >= h && (r[l++] = h)
            }
        } else {
            var u = a * a - 4 * o * s;
            if (or(u)) r[0] = -a / (2 * o); else if (u > 0) {
                var c = ym(u), h = (-a + c) / (2 * o), d = (-a - c) / (2 * o);
                h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function dr(t, e, i, n, r, a) {
        var o = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, h = (s - o) * r + o, u = (l - s) * r + s,
            c = (u - h) * r + h;
        a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
    }

    function fr(t, e, i, n, r, a, o, s, l, h, u) {
        var c, d, f, p, g, v = .005, m = 1 / 0;
        Sm[0] = l, Sm[1] = h;
        for (var y = 0; 1 > y; y += .05) Mm[0] = lr(t, i, r, o, y), Mm[1] = lr(e, n, a, s, y), p = xg(Sm, Mm), m > p && (c = y, m = p);
        m = 1 / 0;
        for (var x = 0; 32 > x && !(_m > v); x++) d = c - v, f = c + v, Mm[0] = lr(t, i, r, o, d), Mm[1] = lr(e, n, a, s, d), p = xg(Mm, Sm), d >= 0 && m > p ? (c = d, m = p) : (Im[0] = lr(t, i, r, o, f), Im[1] = lr(e, n, a, s, f), g = xg(Im, Sm), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return u && (u[0] = lr(t, i, r, o, c), u[1] = lr(e, n, a, s, c)), ym(m)
    }

    function pr(t, e, i, n) {
        var r = 1 - n;
        return r * (r * t + 2 * n * e) + n * n * i
    }

    function gr(t, e, i, n) {
        return 2 * ((1 - n) * (e - t) + n * (i - e))
    }

    function vr(t, e, i, n, r) {
        var a = t - 2 * e + i, o = 2 * (e - t), s = t - n, l = 0;
        if (or(a)) {
            if (sr(o)) {
                var h = -s / o;
                h >= 0 && 1 >= h && (r[l++] = h)
            }
        } else {
            var u = o * o - 4 * a * s;
            if (or(u)) {
                var h = -o / (2 * a);
                h >= 0 && 1 >= h && (r[l++] = h)
            } else if (u > 0) {
                var c = ym(u), h = (-o + c) / (2 * a), d = (-o - c) / (2 * a);
                h >= 0 && 1 >= h && (r[l++] = h), d >= 0 && 1 >= d && (r[l++] = d)
            }
        }
        return l
    }

    function mr(t, e, i) {
        var n = t + i - 2 * e;
        return 0 === n ? .5 : (t - e) / n
    }

    function yr(t, e, i, n, r) {
        var a = (e - t) * n + t, o = (i - e) * n + e, s = (o - a) * n + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i
    }

    function xr(t, e, i, n, r, a, o, s, l) {
        var h, u = .005, c = 1 / 0;
        Sm[0] = o, Sm[1] = s;
        for (var d = 0; 1 > d; d += .05) {
            Mm[0] = pr(t, i, r, d), Mm[1] = pr(e, n, a, d);
            var f = xg(Sm, Mm);
            c > f && (h = d, c = f)
        }
        c = 1 / 0;
        for (var p = 0; 32 > p && !(_m > u); p++) {
            var g = h - u, v = h + u;
            Mm[0] = pr(t, i, r, g), Mm[1] = pr(e, n, a, g);
            var f = xg(Mm, Sm);
            if (g >= 0 && c > f) h = g, c = f; else {
                Im[0] = pr(t, i, r, v), Im[1] = pr(e, n, a, v);
                var m = xg(Im, Sm);
                1 >= v && c > m ? (h = v, c = m) : u *= .5
            }
        }
        return l && (l[0] = pr(t, i, r, h), l[1] = pr(e, n, a, h)), ym(c)
    }

    function _r(t, e, i) {
        if (0 !== t.length) {
            var n, r = t[0], a = r[0], o = r[0], s = r[1], l = r[1];
            for (n = 1; n < t.length; n++) r = t[n], a = Tm(a, r[0]), o = Cm(o, r[0]), s = Tm(s, r[1]), l = Cm(l, r[1]);
            e[0] = a, e[1] = s, i[0] = o, i[1] = l
        }
    }

    function wr(t, e, i, n, r, a) {
        r[0] = Tm(t, i), r[1] = Tm(e, n), a[0] = Cm(t, i), a[1] = Cm(e, n)
    }

    function br(t, e, i, n, r, a, o, s, l, h) {
        var u, c = cr, d = lr, f = c(t, i, r, o, zm);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
            var p = d(t, i, r, o, zm[u]);
            l[0] = Tm(p, l[0]), h[0] = Cm(p, h[0])
        }
        for (f = c(e, n, a, s, Em), u = 0; f > u; u++) {
            var g = d(e, n, a, s, Em[u]);
            l[1] = Tm(g, l[1]), h[1] = Cm(g, h[1])
        }
        l[0] = Tm(t, l[0]), h[0] = Cm(t, h[0]), l[0] = Tm(o, l[0]), h[0] = Cm(o, h[0]), l[1] = Tm(e, l[1]), h[1] = Cm(e, h[1]), l[1] = Tm(s, l[1]), h[1] = Cm(s, h[1])
    }

    function Sr(t, e, i, n, r, a, o, s) {
        var l = mr, h = pr, u = Cm(Tm(l(t, i, r), 1), 0), c = Cm(Tm(l(e, n, a), 1), 0), d = h(t, i, r, u),
            f = h(e, n, a, c);
        o[0] = Tm(t, r, d), o[1] = Tm(e, a, f), s[0] = Cm(t, r, d), s[1] = Cm(e, a, f)
    }

    function Mr(t, e, i, n, r, a, o, s, l) {
        var h = oe, u = se, c = Math.abs(r - a);
        if (1e-4 > c % km && c > 1e-4) return s[0] = t - i, s[1] = e - n, l[0] = t + i, void (l[1] = e + n);
        if (Pm[0] = Dm(r) * i + t, Pm[1] = Am(r) * n + e, Lm[0] = Dm(a) * i + t, Lm[1] = Am(a) * n + e, h(s, Pm, Lm), u(l, Pm, Lm), r %= km, 0 > r && (r += km), a %= km, 0 > a && (a += km), r > a && !o ? a += km : a > r && o && (r += km), o) {
            var d = a;
            a = r, r = d
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && (Om[0] = Dm(f) * i + t, Om[1] = Am(f) * n + e, h(s, Om, s), u(l, Om, l))
    }

    function Ir(t, e, i, n, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, h = t;
        if (o > e + s && o > n + s || e - s > o && n - s > o || a > t + s && a > i + s || t - s > a && i - s > a) return !1;
        if (t === i) return Math.abs(a - t) <= s / 2;
        l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
        var u = l * a - o + h, c = u * u / (l * l + 1);
        return s / 2 * s / 2 >= c
    }

    function Tr(t, e, i, n, r, a, o, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        if (u > e + c && u > n + c && u > a + c && u > s + c || e - c > u && n - c > u && a - c > u && s - c > u || h > t + c && h > i + c && h > r + c && h > o + c || t - c > h && i - c > h && r - c > h && o - c > h) return !1;
        var d = fr(t, e, i, n, r, a, o, s, h, u, null);
        return c / 2 >= d
    }

    function Cr(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        if (l > e + h && l > n + h && l > a + h || e - h > l && n - h > l && a - h > l || s > t + h && s > i + h && s > r + h || t - h > s && i - h > s && r - h > s) return !1;
        var u = xr(t, e, i, n, r, a, s, l, null);
        return h / 2 >= u
    }

    function Ar(t) {
        return t %= Um, 0 > t && (t += Um), t
    }

    function Dr(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > i || i > u + h) return !1;
        if (Math.abs(n - r) % $m < 1e-4) return !0;
        if (a) {
            var c = n;
            n = Ar(r), r = Ar(c)
        } else n = Ar(n), r = Ar(r);
        n > r && (r += $m);
        var d = Math.atan2(l, s);
        return 0 > d && (d += $m), d >= n && r >= d || d + $m >= n && r >= d + $m
    }

    function kr(t, e, i, n, r, a) {
        if (a > e && a > n || e > a && n > a) return 0;
        if (n === e) return 0;
        var o = e > n ? 1 : -1, s = (a - e) / (n - e);
        (1 === s || 0 === s) && (o = e > n ? .5 : -.5);
        var l = s * (i - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0
    }

    function Pr(t, e) {
        return Math.abs(t - e) < Jm
    }

    function Lr() {
        var t = ey[0];
        ey[0] = ey[1], ey[1] = t
    }

    function Or(t, e, i, n, r, a, o, s, l, h) {
        if (h > e && h > n && h > a && h > s || e > h && n > h && a > h && s > h) return 0;
        var u = ur(e, n, a, s, h, ty);
        if (0 === u) return 0;
        for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
            var v = ty[g], m = 0 === v || 1 === v ? .5 : 1, y = lr(t, i, r, o, v);
            l > y || (0 > p && (p = cr(e, n, a, s, ey), ey[1] < ey[0] && p > 1 && Lr(), c = lr(e, n, a, s, ey[0]), p > 1 && (d = lr(e, n, a, s, ey[1]))), f += 2 == p ? v < ey[0] ? e > c ? m : -m : v < ey[1] ? c > d ? m : -m : d > s ? m : -m : v < ey[0] ? e > c ? m : -m : c > s ? m : -m)
        }
        return f
    }

    function zr(t, e, i, n, r, a, o, s) {
        if (s > e && s > n && s > a || e > s && n > s && a > s) return 0;
        var l = vr(e, n, a, s, ty);
        if (0 === l) return 0;
        var h = mr(e, n, a);
        if (h >= 0 && 1 >= h) {
            for (var u = 0, c = pr(e, n, a, h), d = 0; l > d; d++) {
                var f = 0 === ty[d] || 1 === ty[d] ? .5 : 1, p = pr(t, i, r, ty[d]);
                o > p || (u += ty[d] < h ? e > c ? f : -f : c > a ? f : -f)
            }
            return u
        }
        var f = 0 === ty[0] || 1 === ty[0] ? .5 : 1, p = pr(t, i, r, ty[0]);
        return o > p ? 0 : e > a ? f : -f
    }

    function Er(t, e, i, n, r, a, o, s) {
        if (s -= e, s > i || -i > s) return 0;
        var l = Math.sqrt(i * i - s * s);
        ty[0] = -l, ty[1] = l;
        var h = Math.abs(n - r);
        if (1e-4 > h) return 0;
        if (1e-4 > h % Qm) {
            n = 0, r = Qm;
            var u = a ? 1 : -1;
            return o >= ty[0] + t && o <= ty[1] + t ? u : 0
        }
        if (a) {
            var l = n;
            n = Ar(r), r = Ar(l)
        } else n = Ar(n), r = Ar(r);
        n > r && (r += Qm);
        for (var c = 0, d = 0; 2 > d; d++) {
            var f = ty[d];
            if (f + t > o) {
                var p = Math.atan2(s, f), u = a ? 1 : -1;
                0 > p && (p = Qm + p), (p >= n && r >= p || p + Qm >= n && r >= p + Qm) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u)
            }
        }
        return c
    }

    function Rr(t, e, i, n, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
            var c = t[u++];
            switch (c === Km.M && u > 1 && (i || (a += kr(o, s, l, h, n, r))), 1 == u && (o = t[u], s = t[u + 1], l = o, h = s), c) {
                case Km.M:
                    l = t[u++], h = t[u++], o = l, s = h;
                    break;
                case Km.L:
                    if (i) {
                        if (Ir(o, s, t[u], t[u + 1], e, n, r)) return !0
                    } else a += kr(o, s, t[u], t[u + 1], n, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Km.C:
                    if (i) {
                        if (Tr(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0
                    } else a += Or(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Km.Q:
                    if (i) {
                        if (Cr(o, s, t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0
                    } else a += zr(o, s, t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Km.A:
                    var d = t[u++], f = t[u++], p = t[u++], g = t[u++], v = t[u++], m = t[u++],
                        y = (t[u++], 1 - t[u++]), x = Math.cos(v) * p + d, _ = Math.sin(v) * g + f;
                    u > 1 ? a += kr(o, s, x, _, n, r) : (l = x, h = _);
                    var w = (n - d) * g / p + d;
                    if (i) {
                        if (Dr(d, f, g, v, v + m, y, e, w, r)) return !0
                    } else a += Er(d, f, g, v, v + m, y, w, r);
                    o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                    break;
                case Km.R:
                    l = o = t[u++], h = s = t[u++];
                    var b = t[u++], S = t[u++], x = l + b, _ = h + S;
                    if (i) {
                        if (Ir(l, h, x, h, e, n, r) || Ir(x, h, x, _, e, n, r) || Ir(x, _, l, _, e, n, r) || Ir(l, _, l, h, e, n, r)) return !0
                    } else a += kr(x, h, x, _, n, r), a += kr(l, _, l, h, n, r);
                    break;
                case Km.Z:
                    if (i) {
                        if (Ir(o, s, l, h, e, n, r)) return !0
                    } else a += kr(o, s, l, h, n, r);
                    o = l, s = h
            }
        }
        return i || Pr(s, h) || (a += kr(o, s, l, h, n, r) || 0), 0 !== a
    }

    function Br(t, e, i) {
        return Rr(t, 0, !1, e, i)
    }

    function Nr(t, e, i, n) {
        return Rr(t, e, !0, i, n)
    }

    function Fr(t) {
        mn.call(this, t), this.path = null
    }

    function Vr(t, e, i, n, r, a, o, s, l, h, u) {
        var c = l * (fy / 180), d = dy(c) * (t - i) / 2 + cy(c) * (e - n) / 2,
            f = -1 * cy(c) * (t - i) / 2 + dy(c) * (e - n) / 2, p = d * d / (o * o) + f * f / (s * s);
        p > 1 && (o *= uy(p), s *= uy(p));
        var g = (r === a ? -1 : 1) * uy((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
            v = g * o * f / s, m = g * -s * d / o, y = (t + i) / 2 + dy(c) * v - cy(c) * m,
            x = (e + n) / 2 + cy(c) * v + dy(c) * m, _ = vy([1, 0], [(d - v) / o, (f - m) / s]),
            w = [(d - v) / o, (f - m) / s], b = [(-1 * d - v) / o, (-1 * f - m) / s], S = vy(w, b);
        gy(w, b) <= -1 && (S = fy), gy(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * fy), 1 === a && 0 > S && (S += 2 * fy), u.addData(h, y, x, o, s, _, S, c, a)
    }

    function Wr(t) {
        if (!t) return new qm;
        for (var e, i = 0, n = 0, r = i, a = n, o = new qm, s = qm.CMD, l = t.match(my), h = 0; h < l.length; h++) {
            for (var u, c = l[h], d = c.charAt(0), f = c.match(yy) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v;) {
                var m, y, x, _, w, b, S, M = i, I = n;
                switch (d) {
                    case"l":
                        i += f[v++], n += f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"L":
                        i = f[v++], n = f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"m":
                        i += f[v++], n += f[v++], u = s.M, o.addData(u, i, n), r = i, a = n, d = "l";
                        break;
                    case"M":
                        i = f[v++], n = f[v++], u = s.M, o.addData(u, i, n), r = i, a = n, d = "L";
                        break;
                    case"h":
                        i += f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"H":
                        i = f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"v":
                        n += f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"V":
                        n = f[v++], u = s.L, o.addData(u, i, n);
                        break;
                    case"C":
                        u = s.C, o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), i = f[v - 2], n = f[v - 1];
                        break;
                    case"c":
                        u = s.C, o.addData(u, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n), i += f[v - 2], n += f[v - 1];
                        break;
                    case"S":
                        m = i, y = n;
                        var T = o.len(), C = o.data;
                        e === s.C && (m += i - C[T - 4], y += n - C[T - 3]), u = s.C, M = f[v++], I = f[v++], i = f[v++], n = f[v++], o.addData(u, m, y, M, I, i, n);
                        break;
                    case"s":
                        m = i, y = n;
                        var T = o.len(), C = o.data;
                        e === s.C && (m += i - C[T - 4], y += n - C[T - 3]), u = s.C, M = i + f[v++], I = n + f[v++], i += f[v++], n += f[v++], o.addData(u, m, y, M, I, i, n);
                        break;
                    case"Q":
                        M = f[v++], I = f[v++], i = f[v++], n = f[v++], u = s.Q, o.addData(u, M, I, i, n);
                        break;
                    case"q":
                        M = f[v++] + i, I = f[v++] + n, i += f[v++], n += f[v++], u = s.Q, o.addData(u, M, I, i, n);
                        break;
                    case"T":
                        m = i, y = n;
                        var T = o.len(), C = o.data;
                        e === s.Q && (m += i - C[T - 4], y += n - C[T - 3]), i = f[v++], n = f[v++], u = s.Q, o.addData(u, m, y, i, n);
                        break;
                    case"t":
                        m = i, y = n;
                        var T = o.len(), C = o.data;
                        e === s.Q && (m += i - C[T - 4], y += n - C[T - 3]), i += f[v++], n += f[v++], u = s.Q, o.addData(u, m, y, i, n);
                        break;
                    case"A":
                        x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, I = n, i = f[v++], n = f[v++], u = s.A, Vr(M, I, i, n, b, S, x, _, w, u, o);
                        break;
                    case"a":
                        x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = i, I = n, i += f[v++], n += f[v++], u = s.A, Vr(M, I, i, n, b, S, x, _, w, u, o)
                }
            }
            ("z" === d || "Z" === d) && (u = s.Z, o.addData(u), i = r, n = a), e = u
        }
        return o.toStatic(), o
    }

    function Gr(t, e) {
        var i = Wr(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) {
                t.setData(i.data);
                var e = t.getContext();
                e && t.rebuildPath(e)
            } else {
                var e = t;
                i.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            hy(i, t), this.dirty(!0)
        }, e
    }

    function Hr(t, e) {
        return new Fr(Gr(t, e))
    }

    function Zr(t, e) {
        return Fr.extend(Gr(t, e))
    }

    function Xr(t, e) {
        for (var i = [], n = t.length, r = 0; n > r; r++) {
            var a = t[r];
            a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path)
        }
        var o = new Fr(e);
        return o.createPathProxy(), o.buildPath = function (t) {
            t.appendPath(i);
            var e = t.getContext();
            e && t.rebuildPath(e)
        }, o
    }

    function Yr(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e
    }

    function jr(t, e, i) {
        var n = e.points, r = e.smooth;
        if (n && n.length >= 2) {
            if (r && "spline" !== r) {
                var a = Ty(n, r, i, e.smoothConstraint);
                t.moveTo(n[0][0], n[0][1]);
                for (var o = n.length, s = 0; (i ? o : o - 1) > s; s++) {
                    var l = a[2 * s], h = a[2 * s + 1], u = n[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
                }
            } else {
                "spline" === r && (n = Iy(n, i)), t.moveTo(n[0][0], n[0][1]);
                for (var s = 1, c = n.length; c > s; s++) t.lineTo(n[s][0], n[s][1])
            }
            i && t.closePath()
        }
    }

    function qr(t, e, i) {
        var n = t.cpx2, r = t.cpy2;
        return null === n || null === r ? [(i ? hr : lr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? hr : lr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? gr : pr)(t.x1, t.cpx1, t.x2, e), (i ? gr : pr)(t.y1, t.cpy1, t.y2, e)]
    }

    function Ur(t) {
        mn.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function $r(t) {
        return Fr.extend(t)
    }

    function Kr(t, e) {
        return Zr(t, e)
    }

    function Qr(t, e, i, n) {
        var r = Hr(t, e);
        return i && ("center" === n && (i = ta(i, r.getBoundingRect())), ea(r, i)), r
    }

    function Jr(t, e, i) {
        var n = new yn({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === i) {
                    var r = {width: t.width, height: t.height};
                    n.setStyle(ta(e, r))
                }
            }
        });
        return n
    }

    function ta(t, e) {
        var i, n = e.width / e.height, r = t.height * n;
        r <= t.width ? i = t.height : (r = t.width, i = r / n);
        var a = t.x + t.width / 2, o = t.y + t.height / 2;
        return {x: a - r / 2, y: o - i / 2, width: r, height: i}
    }

    function ea(t, e) {
        if (t.applyTransform) {
            var i = t.getBoundingRect(), n = i.calculateTransform(e);
            t.applyTransform(n)
        }
    }

    function ia(t) {
        var e = t.shape, i = t.style.lineWidth;
        return Fy(2 * e.x1) === Fy(2 * e.x2) && (e.x1 = e.x2 = ra(e.x1, i, !0)), Fy(2 * e.y1) === Fy(2 * e.y2) && (e.y1 = e.y2 = ra(e.y1, i, !0)), t
    }

    function na(t) {
        var e = t.shape, i = t.style.lineWidth, n = e.x, r = e.y, a = e.width, o = e.height;
        return e.x = ra(e.x, i, !0), e.y = ra(e.y, i, !0), e.width = Math.max(ra(n + a, i, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(ra(r + o, i, !1) - e.y, 0 === o ? 0 : 1), t
    }

    function ra(t, e, i) {
        var n = Fy(2 * t);
        return (n + Fy(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
    }

    function aa(t) {
        return null != t && "none" !== t
    }

    function oa(t) {
        if ("string" != typeof t) return t;
        var e = Zy.get(t);
        return e || (e = Ye(t, -.1), 1e4 > Xy && (Zy.set(t, e), Xy++)), e
    }

    function sa(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__normalStl = null);
            var i = t.__normalStl = {}, n = t.style;
            for (var r in e) null != e[r] && (i[r] = n[r]);
            i.fill = n.fill, i.stroke = n.stroke
        }
    }

    function la(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var i = t.useHoverLayer;
            t.__highlighted = i ? "layer" : "plain";
            var n = t.__zr;
            if (n || !i) {
                var r = t, a = t.style;
                i && (r = n.addHover(t), a = r.style), Da(a), i || sa(r), a.extendFrom(e), ha(a, e, "fill"), ha(a, e, "stroke"), Aa(a), i || (t.dirty(!1), t.z2 += 1)
            }
        }
    }

    function ha(t, e, i) {
        !aa(e[i]) && aa(t[i]) && (t[i] = oa(t[i]))
    }

    function ua(t) {
        t.__highlighted && (ca(t), t.__highlighted = !1)
    }

    function ca(t) {
        var e = t.__highlighted;
        if ("layer" === e) t.__zr && t.__zr.removeHover(t); else if (e) {
            var i = t.style, n = t.__normalStl;
            n && (Da(i), t.setStyle(n), Aa(i), t.z2 -= 1)
        }
    }

    function da(t, e) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && e(t)
        }) : e(t)
    }

    function fa(t, e) {
        e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (ua(t), la(t))
    }

    function pa(t) {
        return t && t.__isEmphasisEntered
    }

    function ga(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && da(this, la)
    }

    function va(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && da(this, ua)
    }

    function ma() {
        this.__isEmphasisEntered = !0, da(this, la)
    }

    function ya() {
        this.__isEmphasisEntered = !1, da(this, ua)
    }

    function xa(t, e, i) {
        t.isGroup ? t.traverse(function (t) {
            !t.isGroup && fa(t, t.hoverStyle || e)
        }) : fa(t, t.hoverStyle || e), _a(t, i)
    }

    function _a(t, e) {
        var i = e === !1;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !i || t.__hoverStyleTrigger) {
            var n = i ? "off" : "on";
            t[n]("mouseover", ga)[n]("mouseout", va), t[n]("emphasis", ma)[n]("normal", ya), t.__hoverStyleTrigger = !i
        }
    }

    function wa(t, e, i, n, r, a, o) {
        r = r || Gy;
        var s, l = r.labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = i.getShallow("show"),
            d = n.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = w(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var f = c ? s : null, p = d ? D(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        (null != f || null != p) && (ba(t, i, a, r), ba(e, n, o, r, !0)), t.text = f, e.text = p
    }

    function ba(t, e, i, n, r) {
        return Ma(t, e, n, r), i && o(t, i), t
    }

    function Sa(t, e, i) {
        var n, r = {isRectText: !0};
        i === !1 ? n = !0 : r.autoColor = i, Ma(t, e, r, n)
    }

    function Ma(t, e, i, n) {
        if (i = i || Gy, i.isRectText) {
            var r = e.getShallow("position") || (n ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), n ? null : 5)
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, h = Ia(e);
        if (h) {
            o = {};
            for (var u in h) if (h.hasOwnProperty(u)) {
                var c = e.getModel(["rich", u]);
                Ta(o[u] = {}, c, l, i, n)
            }
        }
        return t.rich = o, Ta(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
    }

    function Ia(t) {
        for (var e; t && t !== t.ecModel;) {
            var i = (t.option || Gy).rich;
            if (i) {
                e = e || {};
                for (var n in i) i.hasOwnProperty(n) && (e[n] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function Ta(t, e, i, n, r, a) {
        i = !r && i || Gy, t.textFill = Ca(e.getShallow("color"), n) || i.color, t.textStroke = Ca(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), i.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = n, Aa(t)), null == t.textFill && (t.textFill = n.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = Ca(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ca(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
    }

    function Ca(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function Aa(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var i, n = e.useInsideStyle, r = t.insideRawTextPosition, a = e.autoColor;
            n !== !1 && (n === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (i = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (i = {textFill: null}, t.textFill = a), i && (t.insideRollback = i)
        }
    }

    function Da(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
    }

    function ka(t, e) {
        var i = e || e.getModel("textStyle");
        return z([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function Pa(t, e, i, n, r, a) {
        "function" == typeof r && (a = r, r = null);
        var o = n && n.isAnimationEnabled();
        if (o) {
            var s = t ? "Update" : "", l = n.getShallow("animationDuration" + s),
                h = n.getShallow("animationEasing" + s), u = n.getShallow("animationDelay" + s);
            "function" == typeof u && (u = u(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(i, l, u || 0, h, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
        } else e.stopAnimation(), e.attr(i), a && a()
    }

    function La(t, e, i, n, r) {
        Pa(!0, t, e, i, n, r)
    }

    function Oa(t, e, i, n, r) {
        Pa(!1, t, e, i, n, r)
    }

    function za(t, e) {
        for (var i = Se([]); t && t !== e;) Ie(i, t.getLocalTransform(), i), t = t.parent;
        return i
    }

    function Ea(t, e, i) {
        return e && !d(e) && (e = Og.getLocalTransform(e)), i && (e = De([], e)), ae([], t, e)
    }

    function Ra(t, e, i) {
        var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return a = Ea(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
    }

    function Ba(t, e, i) {
        function n(t) {
            var e = {};
            return t.traverse(function (t) {
                !t.isGroup && t.anid && (e[t.anid] = t)
            }), e
        }

        function r(t) {
            var e = {position: H(t.position), rotation: t.rotation};
            return t.shape && (e.shape = o({}, t.shape)), e
        }

        if (t && e) {
            var a = n(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = a[t.anid];
                    if (e) {
                        var n = r(t);
                        t.attr(r(e)), La(t, n, i, t.dataIndex)
                    }
                }
            })
        }
    }

    function Na(t, e) {
        return p(t, function (t) {
            var i = t[0];
            i = Vy(i, e.x), i = Wy(i, e.x + e.width);
            var n = t[1];
            return n = Vy(n, e.y), n = Wy(n, e.y + e.height), [i, n]
        })
    }

    function Fa(t, e) {
        var i = Vy(t.x, e.x), n = Wy(t.x + t.width, e.x + e.width), r = Vy(t.y, e.y),
            a = Wy(t.y + t.height, e.y + e.height);
        return n >= i && a >= r ? {x: i, y: r, width: n - i, height: a - r} : void 0
    }

    function Va(t, e, i) {
        e = o({rectHover: !0}, e);
        var n = e.style = {strokeNoScale: !0};
        return i = i || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (n.image = t.slice(8), s(n, i), new yn(e)) : Qr(t.replace("path://", ""), e, i, "center") : void 0
    }

    function Wa(t, e, i) {
        this.parentModel = e, this.ecModel = i, this.option = t
    }

    function Ga(t, e, i) {
        for (var n = 0; n < e.length && (!e[n] || (t = t && "object" == typeof t ? t[e[n]] : null, null != t)); n++) ;
        return null == t && i && (t = i.get(e)), t
    }

    function Ha(t, e) {
        var i = Qy(t).getParent;
        return i ? i.call(t, e) : t.parentModel
    }

    function Za(t) {
        return [t || "", Jy++, Math.random().toFixed(5)].join("_")
    }

    function Xa(t) {
        var e = {};
        return t.registerSubTypeDefaulter = function (t, i) {
            t = Jn(t), e[t.main] = i
        }, t.determineSubType = function (i, n) {
            var r = n.type;
            if (!r) {
                var a = Jn(i).main;
                t.hasSubTypes(i) && e[a] && (r = e[a](n))
            }
            return r
        }, t
    }

    function Ya(t, e) {
        function i(t) {
            var i = {}, a = [];
            return f(t, function (o) {
                var s = n(i, o), l = s.originalDeps = e(o), u = r(l, t);
                s.entryCount = u.length, 0 === s.entryCount && a.push(o), f(u, function (t) {
                    h(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = n(i, t);
                    h(e.successor, t) < 0 && e.successor.push(o)
                })
            }), {graph: i, noEntryList: a}
        }

        function n(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var i = [];
            return f(t, function (t) {
                h(e, t) >= 0 && i.push(t)
            }), i
        }

        t.topologicalTravel = function (t, e, n, r) {
            function a(t) {
                l[t].entryCount--, 0 === l[t].entryCount && h.push(t)
            }

            function o(t) {
                u[t] = !0, a(t)
            }

            if (t.length) {
                var s = i(e), l = s.graph, h = s.noEntryList, u = {};
                for (f(t, function (t) {
                    u[t] = !0
                }); h.length;) {
                    var c = h.pop(), d = l[c], p = !!u[c];
                    p && (n.call(r, c, d.originalDeps.slice()), delete u[c]), f(d.successor, p ? o : a)
                }
                f(u, function () {
                    throw new Error("Circle dependency may exists")
                })
            }
        }
    }

    function ja(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function qa(t, e, i, n) {
        var r = e[1] - e[0], a = i[1] - i[0];
        if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
        if (n) if (r > 0) {
            if (t <= e[0]) return i[0];
            if (t >= e[1]) return i[1]
        } else {
            if (t >= e[0]) return i[0];
            if (t <= e[1]) return i[1]
        } else {
            if (t === e[0]) return i[0];
            if (t === e[1]) return i[1]
        }
        return (t - e[0]) / r * a + i[0]
    }

    function Ua(t, e) {
        switch (t) {
            case"center":
            case"middle":
                t = "50%";
                break;
            case"left":
            case"top":
                t = "0%";
                break;
            case"right":
            case"bottom":
                t = "100%"
        }
        return "string" == typeof t ? ja(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
    }

    function $a(t, e, i) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t
    }

    function Ka(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function Qa(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
        return i
    }

    function Ja(t) {
        var e = t.toString(), i = e.indexOf("e");
        if (i > 0) {
            var n = +e.slice(i + 1);
            return 0 > n ? -n : 0
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r
    }

    function to(t, e) {
        var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n),
            a = Math.round(i(Math.abs(e[1] - e[0])) / n), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function eo(t, e, i) {
        if (!t[e]) return 0;
        var n = g(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === n) return 0;
        for (var r = Math.pow(10, i), a = p(t, function (t) {
            return (isNaN(t) ? 0 : t) / n * r * 100
        }), o = 100 * r, s = p(a, function (t) {
            return Math.floor(t)
        }), l = g(s, function (t, e) {
            return t + e
        }, 0), h = p(a, function (t, e) {
            return t - s[e]
        }); o > l;) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) h[d] > u && (u = h[d], c = d);
            ++s[c], h[c] = 0, ++l
        }
        return s[e] / r
    }

    function io(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function no(t) {
        return t > -tx && tx > t
    }

    function ro(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = ix.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var i = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }

    function ao(t) {
        return Math.pow(10, oo(t))
    }

    function oo(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function so(t, e) {
        var i, n = oo(t), r = Math.pow(10, n), a = t / r;
        return i = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = i * r, n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t
    }

    function lo(t, e) {
        var i = (t.length - 1) * e + 1, n = Math.floor(i), r = +t[n - 1], a = i - n;
        return a ? r + a * (t[n] - r) : r
    }

    function ho(t) {
        function e(t, i, n) {
            return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] === (n ? -1 : 1) || !n && e(t, i, 1))
        }

        t.sort(function (t, i) {
            return e(t, i, 0) ? -1 : 1
        });
        for (var i = -1 / 0, n = 1, r = 0; r < t.length;) {
            for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= i && (a[s] = i, o[s] = s ? 1 : 1 - n), i = a[s], n = o[s];
            a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function uo(t) {
        return t - parseFloat(t) >= 0
    }

    function co(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$ueditor,") + (t.length > 1 ? "." + t[1] : ""))
    }

    function fo(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function po(t) {
        return null == t ? "" : (t + "").replace(ax, function (t, e) {
            return ox[e]
        })
    }

    function go(t, e, i) {
        _(e) || (e = [e]);
        var n = e.length;
        if (!n) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = sx[a];
            t = t.replace(lx(o), lx(o, 0))
        }
        for (var s = 0; n > s; s++) for (var l = 0; l < r.length; l++) {
            var h = e[s][r[l]];
            t = t.replace(lx(sx[l], s), i ? po(h) : h)
        }
        return t
    }

    function vo(t, e, i) {
        return f(e, function (e, n) {
            t = t.replace("{" + n + "}", i ? po(e) : e)
        }), t
    }

    function mo(t, e) {
        t = b(t) ? {color: t, extraCssText: e} : t || {};
        var i = t.color, n = t.type, e = t.extraCssText, r = t.renderMode || "html", a = t.markerId || "X";
        return i ? "html" === r ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + po(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + po(i) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + a + "|}  ",
            style: {color: i}
        } : ""
    }

    function yo(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function xo(t, e, i) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var n = ro(e), r = i ? "UTC" : "", a = n["get" + r + "FullYear"](), o = n["get" + r + "Month"]() + 1,
            s = n["get" + r + "Date"](), l = n["get" + r + "Hours"](), h = n["get" + r + "Minutes"](),
            u = n["get" + r + "Seconds"](), c = n["get" + r + "Milliseconds"]();
        return t = t.replace("MM", yo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", yo(s, 2)).replace("d", s).replace("hh", yo(l, 2)).replace("h", l).replace("mm", yo(h, 2)).replace("m", h).replace("ss", yo(u, 2)).replace("s", u).replace("SSS", yo(c, 3))
    }

    function _o(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function wo(t, e, i, n, r) {
        var a = 0, o = 0;
        null == n && (n = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, h) {
            var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                u = a + v, u > n || l.newline ? (a = 0, u = v, o += s + i, s = f.height) : s = Math.max(s, f.height)
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                c = o + m, c > r || l.newline ? (a += s + i, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + i : o = c + i)
        })
    }

    function bo(t, e, i) {
        i = rx(i || 0);
        var n = e.width, r = e.height, a = Ua(t.left, n), o = Ua(t.top, r), s = Ua(t.right, n), l = Ua(t.bottom, r),
            h = Ua(t.width, n), u = Ua(t.height, r), c = i[2] + i[0], d = i[1] + i[3], f = t.aspect;
        switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > n / r ? h = .8 * n : u = .8 * r), isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = n - s - h - d), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
            case"center":
                a = n / 2 - h / 2 - i[3];
                break;
            case"right":
                a = n - h - d
        }
        switch (t.top || t.bottom) {
            case"middle":
            case"center":
                o = r / 2 - u / 2 - i[0];
                break;
            case"bottom":
                o = r - u - c
        }
        a = a || 0, o = o || 0, isNaN(h) && (h = n - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
        var p = new gi(a + i[3], o + i[0], h, u);
        return p.margin = i, p
    }

    function So(t, e, i) {
        function n(i, n) {
            var o = {}, l = 0, h = {}, u = 0, c = 2;
            if (dx(i, function (e) {
                h[e] = t[e]
            }), dx(i, function (t) {
                r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
            }), s[n]) return a(e, i[1]) ? h[i[2]] = null : a(e, i[2]) && (h[i[1]] = null), h;
            if (u !== c && l) {
                if (l >= c) return o;
                for (var d = 0; d < i.length; d++) {
                    var f = i[d];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return h
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function o(t, e, i) {
            dx(t, function (t) {
                e[t] = i[t]
            })
        }

        !S(i) && (i = {});
        var s = i.ignoreSize;
        !_(s) && (s = [s, s]);
        var l = n(px[0], 0), h = n(px[1], 1);
        o(px[0], t, l), o(px[1], t, h)
    }

    function Mo(t) {
        return Io({}, t)
    }

    function Io(t, e) {
        return e && t && dx(fx, function (i) {
            e.hasOwnProperty(i) && (t[i] = e[i])
        }), t
    }

    function To(t) {
        var e = [];
        return f(yx.getClassesByMainType(t), function (t) {
            e = e.concat(t.prototype.dependencies || [])
        }), e = p(e, function (t) {
            return Jn(t).main
        }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e
    }

    function Co(t, e) {
        for (var i = t.length, n = 0; i > n; n++) if (t[n].length > e) return t[n];
        return t[i - 1]
    }

    function Ao(t) {
        var e = t.get("coordinateSystem"), i = {coordSysName: e, coordSysDims: [], axisMap: N(), categoryAxisMap: N()},
            n = Mx[e];
        return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0
    }

    function Do(t) {
        return "category" === t.get("type")
    }

    function ko(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === Ax ? {} : []), this.sourceFormat = t.sourceFormat || Dx, this.seriesLayoutBy = t.seriesLayoutBy || Px, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && N(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function Po(t) {
        var e = t.option.source, i = Dx;
        if (I(e)) i = kx; else if (_(e)) {
            0 === e.length && (i = Tx);
            for (var n = 0, r = e.length; r > n; n++) {
                var a = e[n];
                if (null != a) {
                    if (_(a)) {
                        i = Tx;
                        break
                    }
                    if (S(a)) {
                        i = Cx;
                        break
                    }
                }
            }
        } else if (S(e)) {
            for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
                i = Ax;
                break
            }
        } else if (null != e) throw new Error("Invalid data");
        Ox(t).sourceFormat = i
    }

    function Lo(t) {
        return Ox(t).source
    }

    function Oo(t) {
        Ox(t).datasetMap = N()
    }

    function zo(t) {
        var e = t.option, i = e.data, n = I(i) ? kx : Ix, r = !1, a = e.seriesLayoutBy, o = e.sourceHeader,
            s = e.dimensions, l = Vo(t);
        if (l) {
            var h = l.option;
            i = h.source, n = Ox(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions
        }
        var u = Eo(i, n, a, o, s), c = e.encode;
        !c && l && (c = Fo(t, l, i, n, a, u)), Ox(t).source = new ko({
            data: i,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: n,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        })
    }

    function Eo(t, e, i, n, r) {
        if (!t) return {dimensionsDefine: Ro(r)};
        var a, o, s;
        if (e === Tx) "auto" === n || null == n ? Bo(function (t) {
            null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
        }, i, t, 10) : o = n ? 1 : 0, r || 1 !== o || (r = [], Bo(function (t, e) {
            r[e] = null != t ? t : ""
        }, i, t)), a = r ? r.length : i === Lx ? t.length : t[0] ? t[0].length : null; else if (e === Cx) r || (r = No(t), s = !0); else if (e === Ax) r || (r = [], s = !0, f(t, function (t, e) {
            r.push(e)
        })); else if (e === Ix) {
            var l = Vn(t[0]);
            a = _(l) && l.length || 1
        }
        var h;
        return s && f(r, function (t, e) {
            "name" === (S(t) ? t.name : t) && (h = e)
        }), {startIndex: o, dimensionsDefine: Ro(r), dimensionsDetectCount: a, potentialNameDimIndex: h}
    }

    function Ro(t) {
        if (t) {
            var e = N();
            return p(t, function (t) {
                if (t = o({}, S(t) ? t : {name: t}), null == t.name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {count: 1}), t
            })
        }
    }

    function Bo(t, e, i, n) {
        if (null == n && (n = 1 / 0), e === Lx) for (var r = 0; r < i.length && n > r; r++) t(i[r] ? i[r][0] : null, r); else for (var a = i[0] || [], r = 0; r < a.length && n > r; r++) t(a[r], r)
    }

    function No(t) {
        for (var e, i = 0; i < t.length && !(e = t[i++]);) ;
        if (e) {
            var n = [];
            return f(e, function (t, e) {
                n.push(e)
            }), n
        }
    }

    function Fo(t, e, i, n, r, a) {
        var o = Ao(t), s = {}, l = [], h = [], u = t.subType, c = N(["pie", "map", "funnel"]),
            d = N(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(u)) {
            var p = t.ecModel, g = Ox(p).datasetMap, v = e.uid + "_" + r,
                m = g.get(v) || g.set(v, {categoryWayDim: 1, valueWayDim: 0});
            f(o.coordSysDims, function (t) {
                if (null == o.firstCategoryDimIndex) {
                    var e = m.valueWayDim++;
                    s[t] = e, h.push(e)
                } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = m.categoryWayDim++;
                    s[t] = e, h.push(e)
                }
            })
        } else if (null != c.get(u)) {
            for (var y, x = 0; 5 > x && null == y; x++) Go(i, n, r, a.dimensionsDefine, a.startIndex, x) || (y = x);
            if (null != y) {
                s.value = y;
                var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(_), l.push(_)
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s
    }

    function Vo(t) {
        var e = t.option, i = e.data;
        return i ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function Wo(t, e) {
        return Go(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function Go(t, e, i, n, r, a) {
        function o(t) {
            return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
        }

        var s, l = 5;
        if (I(t)) return !1;
        var h;
        if (n && (h = n[a], h = S(h) ? h.name : h), e === Tx) if (i === Lx) {
            for (var u = t[a], c = 0; c < (u || []).length && l > c; c++) if (null != (s = o(u[r + c]))) return s
        } else for (var c = 0; c < t.length && l > c; c++) {
            var d = t[r + c];
            if (d && null != (s = o(d[a]))) return s
        } else if (e === Cx) {
            if (!h) return;
            for (var c = 0; c < t.length && l > c; c++) {
                var f = t[c];
                if (f && null != (s = o(f[h]))) return s
            }
        } else if (e === Ax) {
            if (!h) return;
            var u = t[h];
            if (!u || I(u)) return !1;
            for (var c = 0; c < u.length && l > c; c++) if (null != (s = o(u[c]))) return s
        } else if (e === Ix) for (var c = 0; c < t.length && l > c; c++) {
            var f = t[c], p = Vn(f);
            if (!_(p)) return !1;
            if (null != (s = o(p[a]))) return s
        }
        return !1
    }

    function Ho(t, e) {
        if (e) {
            var i = e.seiresIndex, n = e.seriesId, r = e.seriesName;
            return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r
        }
    }

    function Zo(t, e) {
        var i = t.color && !t.colorLayer;
        f(e, function (e, a) {
            "colorLayer" === a && i || yx.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e))
        })
    }

    function Xo(t) {
        t = t, this.option = {}, this.option[zx] = 1, this._componentsMap = N({series: []}), this._seriesIndices, this._seriesIndicesMap, Zo(t, this._theme.option), r(t, _x, !1), this.mergeOption(t)
    }

    function Yo(t, e) {
        _(e) || (e = e ? [e] : []);
        var i = {};
        return f(e, function (e) {
            i[e] = (t.get(e) || []).slice()
        }), i
    }

    function jo(t, e, i) {
        var n = e.type ? e.type : i ? i.subType : yx.determineSubType(t, e);
        return n
    }

    function qo(t, e) {
        t._seriesIndicesMap = N(t._seriesIndices = p(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function Uo(t, e) {
        return e.hasOwnProperty("subType") ? v(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function $o(t) {
        f(Rx, function (e) {
            this[e] = y(t[e], t)
        }, this)
    }

    function Ko() {
        this._coordinateSystems = []
    }

    function Qo(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Jo(t, e, i) {
        var n, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            Nx(l, function (t) {
                t && t.option && (t.query ? o.push(t) : n || (n = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), Nx([r].concat(a).concat(p(o, function (t) {
            return t.option
        })), function (t) {
            Nx(e, function (e) {
                e(t, i)
            })
        }), {baseOption: r, timelineOptions: a, mediaDefault: n, mediaList: o}
    }

    function ts(t, e, i) {
        var n = {width: e, height: i, aspectratio: e / i}, r = !0;
        return f(t, function (t, e) {
            var i = e.match(Gx);
            if (i && i[1] && i[2]) {
                var a = i[1], o = i[2].toLowerCase();
                es(n[o], t, a) || (r = !1)
            }
        }), r
    }

    function es(t, e, i) {
        return "min" === i ? t >= e : "max" === i ? e >= t : t === e
    }

    function is(t, e) {
        return t.join(",") === e.join(",")
    }

    function ns(t, e) {
        e = e || {}, Nx(e, function (e, i) {
            if (null != e) {
                var n = t[i];
                if (yx.hasClass(i)) {
                    e = Nn(e), n = Nn(n);
                    var r = Gn(n, e);
                    t[i] = Vx(r, function (t) {
                        return t.option && t.exist ? Wx(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[i] = Wx(n, e, !0)
            }
        })
    }

    function rs(t) {
        var e = t && t.itemStyle;
        if (e) for (var i = 0, n = Xx.length; n > i; i++) {
            var a = Xx[i], o = e.normal, s = e.emphasis;
            o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
        }
    }

    function as(t, e, i) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var n = t[e].normal, r = t[e].emphasis;
            n && (i ? (t[e].normal = t[e].emphasis = null, s(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function os(t) {
        as(t, "itemStyle"), as(t, "lineStyle"), as(t, "areaStyle"), as(t, "label"), as(t, "labelLine"), as(t, "upperLabel"), as(t, "edgeLabel")
    }

    function ss(t, e) {
        var i = Zx(t) && t[e], n = Zx(i) && i.textStyle;
        if (n) for (var r = 0, a = sm.length; a > r; r++) {
            var e = sm[r];
            n.hasOwnProperty(e) && (i[e] = n[e])
        }
    }

    function ls(t) {
        t && (os(t), ss(t, "label"), t.emphasis && ss(t.emphasis, "label"))
    }

    function hs(t) {
        if (Zx(t)) {
            rs(t), os(t), ss(t, "label"), ss(t, "upperLabel"), ss(t, "edgeLabel"), t.emphasis && (ss(t.emphasis, "label"), ss(t.emphasis, "upperLabel"), ss(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (rs(e), ls(e));
            var i = t.markLine;
            i && (rs(i), ls(i));
            var n = t.markArea;
            n && ls(n);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !I(a)) for (var o = 0; o < a.length; o++) ls(a[o]);
                f(t.categories, function (t) {
                    os(t)
                })
            }
            if (r && !I(r)) for (var o = 0; o < r.length; o++) ls(r[o]);
            var e = t.markPoint;
            if (e && e.data) for (var s = e.data, o = 0; o < s.length; o++) ls(s[o]);
            var i = t.markLine;
            if (i && i.data) for (var l = i.data, o = 0; o < l.length; o++) _(l[o]) ? (ls(l[o][0]), ls(l[o][1])) : ls(l[o]);
            "gauge" === t.type ? (ss(t, "axisLabel"), ss(t, "title"), ss(t, "detail")) : "treemap" === t.type ? (as(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
                os(t)
            })) : "tree" === t.type && os(t.leaves)
        }
    }

    function us(t) {
        return _(t) ? t : t ? [t] : []
    }

    function cs(t) {
        return (_(t) ? t[0] : t) || {}
    }

    function ds(t, e) {
        e = e.split(",");
        for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++) ;
        return i
    }

    function fs(t, e, i, n) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
        (n || null == a[e[o]]) && (a[e[o]] = i)
    }

    function ps(t) {
        f(jx, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function gs(t) {
        f(t, function (e, i) {
            var n = [], r = [0 / 0, 0 / 0], a = [e.stackResultDimension, e.stackedOverDimension], o = e.data,
                s = e.isStackedByIndex, l = o.map(a, function (a, l, h) {
                    var u = o.get(e.stackedDimension, h);
                    if (isNaN(u)) return r;
                    var c, d;
                    s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
                    for (var f = 0 / 0, p = i - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                            var v = g.data.getByRawIndex(g.stackResultDimension, d);
                            if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
                                u += v, f = v;
                                break
                            }
                        }
                    }
                    return n[0] = u, n[1] = f, n
                });
            o.hostModel.setData(l), e.data = l
        })
    }

    function vs(t, e) {
        ko.isInstance(t) || (t = ko.seriesDataToSource(t)), this._source = t;
        var i = this._data = t.data, n = t.sourceFormat;
        n === kx && (this._offset = 0, this._dimSize = e, this._data = i);
        var r = Qx[n === Tx ? n + "_" + t.seriesLayoutBy : n];
        o(this, r)
    }

    function ms() {
        return this._data.length
    }

    function ys(t) {
        return this._data[t]
    }

    function xs(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function _s(t, e, i) {
        return null != i ? t[i] : t
    }

    function ws(t, e, i, n) {
        return bs(t[n], this._dimensionInfos[e])
    }

    function bs(t, e) {
        var i = e && e.type;
        if ("ordinal" === i) {
            var n = e && e.ordinalMeta;
            return n ? n.parseAndCollect(t) : t
        }
        return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +ro(t)), null == t || "" === t ? 0 / 0 : +t
    }

    function Ss(t, e, i) {
        if (t) {
            var n = t.getRawDataItem(e);
            if (null != n) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(i);
                return s && (r = s.name, a = s.index), Jx[o](n, e, a, r)
            }
        }
    }

    function Ms(t, e, i) {
        if (t) {
            var n = t.getProvider().getSource().sourceFormat;
            if (n === Ix || n === Cx) {
                var r = t.getRawDataItem(e);
                return n !== Ix || S(r) || (r = null), r ? r[i] : void 0
            }
        }
    }

    function Is(t) {
        return new Ts(t)
    }

    function Ts(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function Cs(t, e, i, n, r, a) {
        r_.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
            start: i,
            end: n,
            count: n - i,
            next: r_.next
        }, t.context)
    }

    function As(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var i, n;
        !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), _(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), n
    }

    function Ds(t) {
        var e = t.name;
        Zn(t) || (t.name = ks(t) || e)
    }

    function ks(t) {
        var e = t.getRawData(), i = e.mapDimension("seriesName", !0), n = [];
        return f(i, function (t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }), n.join(" ")
    }

    function Ps(t) {
        return t.model.getRawData().count()
    }

    function Ls(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), Os
    }

    function Os(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function zs(t, e) {
        f(t.CHANGABLE_METHODS, function (i) {
            t.wrapMethod(i, x(Es, e))
        })
    }

    function Es(t) {
        var e = Rs(t);
        e && e.setOutputEnd(this.count())
    }

    function Rs(t) {
        var e = (t.ecModel || {}).scheduler, i = e && e.getPipeline(t.uid);
        if (i) {
            var n = i.currentTask;
            if (n) {
                var r = n.agentStubMap;
                r && (n = r.get(t.uid))
            }
            return n
        }
    }

    function Bs() {
        this.group = new lv, this.uid = Za("viewChart"), this.renderTask = Is({
            plan: Vs,
            reset: Ws
        }), this.renderTask.context = {view: this}
    }

    function Ns(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var i = 0; i < t.childCount(); i++) Ns(t.childAt(i), e)
    }

    function Fs(t, e, i) {
        var n = Yn(t, e);
        null != n ? f(Nn(n), function (e) {
            Ns(t.getItemGraphicEl(e), i)
        }) : t.eachItemGraphicEl(function (t) {
            Ns(t, i)
        })
    }

    function Vs(t) {
        return c_(t.model)
    }

    function Ws(t) {
        var e = t.model, i = t.ecModel, n = t.api, r = t.payload, a = e.pipelineContext.progressiveRender, o = t.view,
            s = r && u_(r).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, i, n, r), f_[l]
    }

    function Gs(t, e, i) {
        function n() {
            u = (new Date).getTime(), c = null, t.apply(o, s || [])
        }

        var r, a, o, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var d = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e, d = l || i;
            l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a), h = r
        };
        return d.clear = function () {
            c && (clearTimeout(c), c = null)
        }, d.debounceNextCall = function (t) {
            l = t
        }, d
    }

    function Hs(t, e, i, n) {
        var r = t[e];
        if (r) {
            var a = r[p_] || r, o = r[v_], s = r[g_];
            if (s !== i || o !== n) {
                if (null == i || !n) return t[e] = a;
                r = t[e] = Gs(a, i, "debounce" === n), r[p_] = a, r[v_] = n, r[g_] = i
            }
            return r
        }
    }

    function Zs(t, e) {
        var i = t[e];
        i && i[p_] && (t[e] = i[p_])
    }

    function Xs(t, e, i, n) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice();
        this._allHandlers = i.concat(n), this._stageTaskMap = N()
    }

    function Ys(t, e, i, n, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }

        r = r || {};
        var o;
        f(e, function (e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid), l = s.seriesTaskMap, h = s.overallTask;
                if (h) {
                    var u, c = h.agentStubMap;
                    c.each(function (t) {
                        a(r, t) && (t.dirty(), u = !0)
                    }), u && h.dirty(), S_(h, n);
                    var d = t.getPerformArgs(h, r.block);
                    c.each(function (t) {
                        t.perform(d)
                    }), o |= h.perform(d)
                } else l && l.each(function (s) {
                    a(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), S_(s, n), o |= s.perform(l)
                })
            }
        }), t.unfinished |= o
    }

    function js(t, e, i, n, r) {
        function a(i) {
            var a = i.uid, s = o.get(a) || o.set(a, Is({plan: Js, reset: tl, count: il}));
            s.context = {
                model: i,
                ecModel: n,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, nl(t, i, s)
        }

        var o = i.seriesTaskMap || (i.seriesTaskMap = N()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, r).each(a);
        var h = t._pipelineMap;
        o.each(function (t, e) {
            h.get(e) || (t.dispose(), o.removeKey(e))
        })
    }

    function qs(t, e, i, n, r) {
        function a(e) {
            var i = e.uid, n = s.get(i);
            n || (n = s.set(i, Is({reset: $s, onDirty: Qs})), o.dirty()), n.context = {
                model: e,
                overallProgress: u,
                modifyOutputEnd: c
            }, n.agent = o, n.__block = u, nl(t, e, n)
        }

        var o = i.overallTask = i.overallTask || Is({reset: Us});
        o.context = {ecModel: n, api: r, overallReset: e.overallReset, scheduler: t};
        var s = o.agentStubMap = o.agentStubMap || N(), l = e.seriesType, h = e.getTargetSeries, u = !0,
            c = e.modifyOutputEnd;
        l ? n.eachRawSeriesByType(l, a) : h ? h(n, r).each(a) : (u = !1, f(n.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
        })
    }

    function Us(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function $s(t) {
        return t.overallProgress && Ks
    }

    function Ks() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function Qs() {
        this.agent && this.agent.dirty()
    }

    function Js(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function tl(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Nn(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e, function (t, e) {
            return el(e)
        }) : M_
    }

    function el(t) {
        return function (e, i) {
            var n = i.data, r = i.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(n, a); else r && r.progress && r.progress(e, n)
        }
    }

    function il(t) {
        return t.data.count()
    }

    function nl(t, e, i) {
        var n = e.uid, r = t._pipelineMap.get(n);
        !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, i.__pipeline = r
    }

    function rl(t) {
        I_ = null;
        try {
            t(T_, C_)
        } catch (e) {
        }
        return I_
    }

    function al(t, e) {
        for (var i in e.prototype) t[i] = V
    }

    function ol(t) {
        if (b(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        for (9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
        return t
    }

    function sl() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
    }

    function ll(t, e) {
        for (var i = t.firstChild; i;) {
            if (1 === i.nodeType) {
                var n = i.getAttribute("offset");
                n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                var r = i.getAttribute("stop-color") || "#000000";
                e.addColorStop(n, r)
            }
            i = i.nextSibling
        }
    }

    function hl(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
    }

    function ul(t) {
        for (var e = z(t).split(E_), i = [], n = 0; n < e.length; n += 2) {
            var r = parseFloat(e[n]), a = parseFloat(e[n + 1]);
            i.push([r, a])
        }
        return i
    }

    function cl(t, e, i, n) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (fl(t, e), o(r, pl(t)), !n)) for (var s in N_) if (N_.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[N_[s]] = l)
        }
        var h = a ? "textFill" : "fill", u = a ? "textStroke" : "stroke";
        e.style = e.style || new gv;
        var c = e.style;
        null != r.fill && c.set(h, dl(r.fill, i)), null != r.stroke && c.set(u, dl(r.stroke, i)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]))
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
            null != r[t] && c.set(t, r[t])
        }), r.lineDash && (e.style.lineDash = z(r.lineDash).split(E_)), c[u] && "none" !== c[u] && (e[u] = !0), e.__inheritedStyle = r
    }

    function dl(t, e) {
        var i = e && t && t.match(F_);
        if (i) {
            var n = z(i[1]), r = e[n];
            return r
        }
        return t
    }

    function fl(t, e) {
        var i = t.getAttribute("transform");
        if (i) {
            i = i.replace(/,/g, " ");
            var n = null, r = [];
            i.replace(V_, function (t, e, i) {
                r.push(e, i)
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a], s = r[a - 1];
                switch (n = n || be(), s) {
                    case"translate":
                        o = z(o).split(E_), Te(n, n, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
                        break;
                    case"scale":
                        o = z(o).split(E_), Ae(n, n, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
                        break;
                    case"rotate":
                        o = z(o).split(E_), Ce(n, n, parseFloat(o[0]));
                        break;
                    case"skew":
                        o = z(o).split(E_), console.warn("Skew transform is not supported yet");
                        break;
                    case"matrix":
                        var o = z(o).split(E_);
                        n[0] = parseFloat(o[0]), n[1] = parseFloat(o[1]), n[2] = parseFloat(o[2]), n[3] = parseFloat(o[3]), n[4] = parseFloat(o[4]), n[5] = parseFloat(o[5])
                }
            }
        }
        e.setLocalTransform(n)
    }

    function pl(t) {
        var e = t.getAttribute("style"), i = {};
        if (!e) return i;
        var n = {};
        W_.lastIndex = 0;
        for (var r; null != (r = W_.exec(e));) n[r[1]] = r[2];
        for (var a in N_) N_.hasOwnProperty(a) && null != n[a] && (i[N_[a]] = n[a]);
        return i
    }

    function gl(t, e, i) {
        var n = e / t.width, r = i / t.height, a = Math.min(n, r), o = [a, a],
            s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2];
        return {scale: o, position: s}
    }

    function vl(t) {
        return function (e, i, n) {
            e = e && e.toLowerCase(), bg.prototype[t].call(this, e, i, n)
        }
    }

    function ml() {
        bg.call(this)
    }

    function yl(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }

        i = i || {}, "string" == typeof e && (e = xw[e]), this.id, this.group, this._dom = t;
        var a = "canvas", o = this._zr = On(t, {
            renderer: i.renderer || a,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = Gs(y(o.flush, o), 17);
        var e = n(e);
        e && Ux(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Ko;
        var s = this._api = Rl(this);
        Si(yw, r), Si(gw, r), this._scheduler = new Xs(this, s, gw, yw), bg.call(this, this._ecEventProcessor = new Bl), this._messageCenter = new ml, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), Tl(o, this), E(this)
    }

    function xl(t, e, i) {
        var n, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = qn(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (n = s[t](r, e, i))) return n
        }
    }

    function _l(t) {
        var e = t._model, i = t._scheduler;
        i.restorePipelines(e), i.prepareStageTasks(), Cl(t, "component", e, i), Cl(t, "chart", e, i), i.plan()
    }

    function wl(t, e, i, n, r) {
        function a(n) {
            n && n.__alive && n[e] && n[e](n.__model, o, t._api, i)
        }

        var o = t._model;
        if (!n) return void Y_(t._componentsViews.concat(t._chartsViews), a);
        var s = {};
        s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
        var l = {mainType: n, query: s};
        r && (l.subType = r);
        var h = i.excludeSeriesId;
        null != h && (h = N(Nn(h))), o && o.eachComponent(l, function (e) {
            h && null != h.get(e.id) || a(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId])
        }, t)
    }

    function bl(t, e) {
        var i = t._chartsMap, n = t._scheduler;
        e.eachSeries(function (t) {
            n.updateStreamModes(t, i[t.__viewId])
        })
    }

    function Sl(t, e) {
        var i = t.type, n = t.escapeConnect, r = fw[i], a = r.actionInfo, l = (a.update || "update").split(":"),
            h = l.pop();
        l = null != l[0] && U_(l[0]), this[sw] = !0;
        var u = [t], c = !1;
        t.batch && (c = !0, u = p(t.batch, function (e) {
            return e = s(o({}, e), t), e.batch = null, e
        }));
        var d, f = [], g = "highlight" === i || "downplay" === i;
        Y_(u, function (t) {
            d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? wl(this, h, t, "series") : l && wl(this, h, t, l.main, l.sub)
        }, this), "none" === h || g || l || (this[lw] ? (_l(this), cw.update.call(this, t), this[lw] = !1) : cw[h].call(this, t)), d = c ? {
            type: a.event || i,
            escapeConnect: n,
            batch: f
        } : f[0], this[sw] = !1, !e && this._messageCenter.trigger(d.type, d)
    }

    function Ml(t) {
        for (var e = this._pendingActions; e.length;) {
            var i = e.shift();
            Sl.call(this, i, t)
        }
    }

    function Il(t) {
        !t && this.trigger("updated")
    }

    function Tl(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[lw] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function Cl(t, e, i, n) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var u = U_(t.type), c = a ? s_.getClass(u.main, u.sub) : Bs.getClass(u.sub);
                r = new c, r.init(i, h), s[e] = r, o.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !a && n.prepareView(r, t, i, h)
        }

        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
        a ? i.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : i.eachSeries(r);
        for (var u = 0; u < o.length;) {
            var c = o[u];
            c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function Al(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function Dl(t, e, i, n) {
        kl(t, e, i, n), Y_(t._chartsViews, function (t) {
            t.__alive = !1
        }), Pl(t, e, i, n), Y_(t._chartsViews, function (t) {
            t.__alive || t.remove(e, i)
        })
    }

    function kl(t, e, i, n, r) {
        Y_(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, i, n), El(r, t)
        })
    }

    function Pl(t, e, i, n, r) {
        var a, o = t._scheduler;
        e.eachSeries(function (e) {
            var i = t._chartsMap[e.__viewId];
            i.__alive = !0;
            var s = i.renderTask;
            o.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), i.group.silent = !!e.get("silent"), El(e, i), zl(e, i)
        }), o.unfinished |= a, Ol(t._zr, e), x_(t._zr.dom, e)
    }

    function Ll(t, e) {
        Y_(mw, function (i) {
            i(t, e)
        })
    }

    function Ol(t, e) {
        var i = t.storage, n = 0;
        i.traverse(function (t) {
            t.isGroup || n++
        }), n > e.get("hoverLayerThreshold") && !tg.node && i.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function zl(t, e) {
        var i = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", i)
            })
        })
    }

    function El(t, e) {
        var i = t.get("z"), n = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
        })
    }

    function Rl(t) {
        var e = t._coordSysMgr;
        return o(new $o(t), {
            getCoordinateSystems: y(e.getCoordinateSystems, e), getComponentByElement: function (e) {
                for (; e;) {
                    var i = e.__ecComponentInfo;
                    if (null != i) return t._model.getComponent(i.mainType, i.index);
                    e = e.parent
                }
            }
        })
    }

    function Bl() {
        this.eventInfo
    }

    function Nl(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n[a] = e
            }
        }

        var i = 0, n = 1, r = 2, a = "__connectUpdateStatus";
        Y_(pw, function (o, s) {
            t._messageCenter.on(s, function (o) {
                if (bw[t.group] && t[a] !== i) {
                    if (o && o.escapeConnect) return;
                    var s = t.makeActionFromEvent(o), l = [];
                    Y_(ww, function (e) {
                        e !== t && e.group === t.group && l.push(e)
                    }), e(l, i), Y_(l, function (t) {
                        t[a] !== n && t.dispatchAction(s)
                    }), e(l, r)
                }
            })
        })
    }

    function Fl(t, e, i) {
        var n = Hl(t);
        if (n) return n;
        var r = new yl(t, e, i);
        return r.id = "ec_" + Sw++, ww[r.id] = r, $n(t, Iw, r.id), Nl(r), r
    }

    function Vl(t) {
        if (_(t)) {
            var e = t;
            t = null, Y_(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + Mw++, Y_(e, function (e) {
                e.group = t
            })
        }
        return bw[t] = !0, t
    }

    function Wl(t) {
        bw[t] = !1
    }

    function Gl(t) {
        "string" == typeof t ? t = ww[t] : t instanceof yl || (t = Hl(t)), t instanceof yl && !t.isDisposed() && t.dispose()
    }

    function Hl(t) {
        return ww[Kn(t, Iw)]
    }

    function Zl(t) {
        return ww[t]
    }

    function Xl(t, e) {
        xw[t] = e
    }

    function Yl(t) {
        vw.push(t)
    }

    function jl(t, e) {
        th(gw, t, e, J_)
    }

    function ql(t) {
        mw.push(t)
    }

    function Ul(t, e, i) {
        "function" == typeof e && (i = e, e = "");
        var n = q_(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || n).toLowerCase(), e = t.event, X_(hw.test(n) && hw.test(e)), fw[n] || (fw[n] = {
            action: i,
            actionInfo: t
        }), pw[e] = n
    }

    function $l(t, e) {
        Ko.register(t, e)
    }

    function Kl(t) {
        var e = Ko.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }

    function Ql(t, e) {
        th(yw, t, e, ew, "layout")
    }

    function Jl(t, e) {
        th(yw, t, e, nw, "visual")
    }

    function th(t, e, i, n, r) {
        (j_(e) || q_(e)) && (i = e, e = n);
        var a = Xs.wrapStageHandler(i, r);
        return a.__prio = e, a.__raw = i, t.push(a), a
    }

    function eh(t, e) {
        _w[t] = e
    }

    function ih(t) {
        return yx.extend(t)
    }

    function nh(t) {
        return s_.extend(t)
    }

    function rh(t) {
        return o_.extend(t)
    }

    function ah(t) {
        return Bs.extend(t)
    }

    function oh(t) {
        i("createCanvas", t)
    }

    function sh(t, e, i) {
        H_.registerMap(t, e, i)
    }

    function lh(t) {
        var e = H_.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }

    function hh(t) {
        return t
    }

    function uh(t, e, i, n, r) {
        this._old = t, this._new = e, this._oldKeyGetter = i || hh, this._newKeyGetter = n || hh, this.context = r
    }

    function ch(t, e, i, n, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[n](t[a], a), s = e[o];
            null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }

    function dh(t) {
        var e = {}, i = e.encode = {}, n = N(), r = [], a = [];
        f(t.dimensions, function (e) {
            var o = t.getDimensionInfo(e), s = o.coordDim;
            if (s) {
                var l = i[s];
                i.hasOwnProperty(s) || (l = i[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (n.set(s, 1), ph(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
            }
            Aw.each(function (t, e) {
                var n = i[e];
                i.hasOwnProperty(e) || (n = i[e] = []);
                var r = o.otherDims[e];
                null != r && r !== !1 && (n[r] = o.name)
            })
        });
        var o = [], s = {};
        n.each(function (t, e) {
            var n = i[e];
            s[e] = n[0], o = o.concat(n)
        }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
        var l = i.label;
        l && l.length && (r = l.slice());
        var h = i.tooltip;
        return h && h.length ? a = h.slice() : a.length || (a = r.slice()), i.defaultedLabel = r, i.defaultedTooltip = a, e
    }

    function fh(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function ph(t) {
        return !("ordinal" === t || "time" === t)
    }

    function gh(t) {
        return t._rawCount > 65535 ? Ow : zw
    }

    function vh(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function mh(t, e) {
        f(Ew.concat(e.__wrappedMethods || []), function (i) {
            e.hasOwnProperty(i) && (t[i] = e[i])
        }), t.__wrappedMethods = e.__wrappedMethods, f(Rw, function (i) {
            t[i] = n(e[i])
        }), t._calculationInfo = o(e._calculationInfo)
    }

    function yh(t) {
        var e = t._invertedIndicesMap;
        f(e, function (i, n) {
            var r = t._dimensionInfos[n], a = r.ordinalMeta;
            if (a) {
                i = e[n] = new Ow(a.categories.length);
                for (var o = 0; o < i.length; o++) i[o] = 0 / 0;
                for (var o = 0; o < t._count; o++) i[t.get(n, o)] = o
            }
        })
    }

    function xh(t, e, i) {
        var n;
        if (null != e) {
            var r = t._chunkSize, a = Math.floor(i / r), o = i % r, s = t.dimensions[e], l = t._storage[s][a];
            if (l) {
                n = l[o];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (n = h.categories[n])
            }
        }
        return n
    }

    function _h(t) {
        return t
    }

    function wh(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function bh(t, e) {
        var i = t._idList[e];
        return null == i && (i = xh(t, t._idDimIdx, e)), null == i && (i = Pw + e), i
    }

    function Sh(t) {
        return _(t) || (t = [t]), t
    }

    function Mh(t, e) {
        var i = t.dimensions, n = new Bw(p(i, t.getDimensionInfo, t), t.hostModel);
        mh(n, t);
        for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
            var s = i[o];
            a[s] && (h(e, s) >= 0 ? (r[s] = Ih(a[s]), n._rawExtent[s] = Th(), n._extent[s] = null) : r[s] = a[s])
        }
        return n
    }

    function Ih(t) {
        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = vh(t[i]);
        return e
    }

    function Th() {
        return [1 / 0, -1 / 0]
    }

    function Ch(t, e, i) {
        function r(t, e, i) {
            null != Aw.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, u.set(e, !0))
        }

        ko.isInstance(e) || (e = ko.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var a = (i.dimsDef || []).slice(), l = N(i.encodeDef), h = N(), u = N(), c = [], d = Ah(e, t, a, i.dimCount), p = 0; d > p; p++) {
            var g = a[p] = o({}, S(a[p]) ? a[p] : {name: a[p]}), v = g.name, m = c[p] = {otherDims: {}};
            null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
        }
        l.each(function (t, e) {
            if (t = Nn(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
            var i = l.set(e, []);
            f(t, function (t, n) {
                b(t) && (t = h.get(t)), null != t && d > t && (i[n] = t, r(c[t], e, n))
            })
        });
        var y = 0;
        f(t, function (t) {
            var e, t, i, a;
            if (b(t)) e = t, t = {}; else {
                e = t.name;
                var o = t.ordinalMeta;
                t.ordinalMeta = null, t = n(t), t.ordinalMeta = o, i = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var h = l.get(e);
            if (h !== !1) {
                var h = Nn(h);
                if (!h.length) for (var u = 0; u < (i && i.length || 1); u++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && h.push(y++)
                }
                f(h, function (n, o) {
                    var l = c[n];
                    if (r(s(l, t), e, o), null == l.name && i) {
                        var h = i[o];
                        !S(h) && (h = {name: h}), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip
                    }
                    a && s(l.otherDims, a)
                })
            }
        });
        var x = i.generateCoord, _ = i.generateCoordCount, w = null != _;
        _ = x ? _ || 1 : 0;
        for (var M = x || "value", I = 0; d > I; I++) {
            var m = c[I] = c[I] || {}, T = m.coordDim;
            null == T && (m.coordDim = Dh(M, u, w), m.coordDimIndex = 0, (!x || 0 >= _) && (m.isExtraCoord = !0), _--), null == m.name && (m.name = Dh(m.coordDim, h)), null == m.type && Wo(e, I, m.name) && (m.type = "ordinal")
        }
        return c
    }

    function Ah(t, e, i, n) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
        return f(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function Dh(t, e, i) {
        if (i || null != e.get(t)) {
            for (var n = 0; null != e.get(t + n);) n++;
            t += n
        }
        return e.set(t, !0), t
    }

    function kh(t, e, i) {
        i = i || {};
        var n, r, a, o, s = i.byIndex, l = i.stackedCoordDimension, h = !(!t || !t.get("stack"));
        if (f(e, function (t, i) {
            b(t) && (e[i] = t = {name: t}), h && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || n || (s = !0), r) {
            a = "__\x00ecstackresult", o = "__\x00ecstackedover", n && (n.createInvertedIndices = !0);
            var u = r.coordDim, c = r.type, d = 0;
            f(e, function (t) {
                t.coordDim === u && d++
            }), e.push({
                name: a,
                coordDim: u,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({name: o, coordDim: o, coordDimIndex: d, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: n && n.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }

    function Ph(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function Lh(t, e) {
        return Ph(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function Oh(t, e, i) {
        i = i || {}, ko.isInstance(t) || (t = ko.seriesDataToSource(t));
        var n, r = e.get("coordinateSystem"), a = Ko.get(r), o = Ao(e);
        o && (n = p(o.coordSysDims, function (t) {
            var e = {name: t}, i = o.axisMap.get(t);
            if (i) {
                var n = i.get("type");
                e.type = fh(n)
            }
            return e
        })), n || (n = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, h = Vw(t, {coordDimensions: n, generateCoord: i.generateCoord});
        o && f(h, function (t, e) {
            var i = t.coordDim, n = o.categoryAxisMap.get(i);
            n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = kh(e, h), c = new Bw(h, e);
        c.setCalculationInfo(u);
        var d = null != s && zh(t) ? function (t, e, i, n) {
            return n === s ? i : this.defaultDimValueGetter(t, e, i, n)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c
    }

    function zh(t) {
        if (t.sourceFormat === Ix) {
            var e = Eh(t.data || []);
            return null != e && !_(Vn(e))
        }
    }

    function Eh(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function Rh(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function Bh(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function Nh(t) {
        return t._map || (t._map = N(t.categories))
    }

    function Fh(t) {
        return S(t) && null != t.value ? t.value : t + ""
    }

    function Vh(t, e, i, n) {
        var r = {}, a = t[1] - t[0], o = r.interval = so(a / e, !0);
        null != i && i > o && (o = r.interval = i), null != n && o > n && (o = r.interval = n);
        var s = r.intervalPrecision = Wh(o),
            l = r.niceTickExtent = [Zw(Math.ceil(t[0] / o) * o, s), Zw(Math.floor(t[1] / o) * o, s)];
        return Hh(l, t), r
    }

    function Wh(t) {
        return Ja(t) + 2
    }

    function Gh(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0])
    }

    function Hh(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Gh(t, 0, e), Gh(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function Zh(t, e, i, n) {
        var r = [];
        if (!t) return r;
        var a = 1e4;
        e[0] < i[0] && r.push(e[0]);
        for (var o = i[0]; o <= i[1] && (r.push(o), o = Zw(o + t, n), o !== r[r.length - 1]);) if (r.length > a) return [];
        return e[1] > (r.length ? r[r.length - 1] : i[1]) && r.push(e[1]), r
    }

    function Xh(t) {
        return t.get("stack") || jw + t.seriesIndex
    }

    function Yh(t) {
        return t.dim + t.index
    }

    function jh(t) {
        var e = [], i = t.axis, n = "axis0";
        if ("category" === i.type) {
            for (var r = i.getBandWidth(), a = 0; a < t.count; a++) e.push(s({
                bandWidth: r,
                axisKey: n,
                stackId: jw + a
            }, t));
            for (var o = $h(e), l = [], a = 0; a < t.count; a++) {
                var h = o[n][jw + a];
                h.offsetCenter = h.offset + h.width / 2, l.push(h)
            }
            return l
        }
    }

    function qh(t, e) {
        var i = [];
        return e.eachSeriesByType(t, function (t) {
            Jh(t) && !tu(t) && i.push(t)
        }), i
    }

    function Uh(t) {
        var e = [];
        return f(t, function (t) {
            var i = t.getData(), n = t.coordinateSystem, r = n.getBaseAxis(), a = r.getExtent(),
                o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / i.count(),
                s = Ua(t.get("barWidth"), o), l = Ua(t.get("barMaxWidth"), o), h = t.get("barGap"),
                u = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: s,
                barMaxWidth: l,
                barGap: h,
                barCategoryGap: u,
                axisKey: Yh(r),
                stackId: Xh(t)
            })
        }), $h(e)
    }

    function $h(t) {
        var e = {};
        f(t, function (t) {
            var i = t.axisKey, n = t.bandWidth, r = e[i] || {
                bandWidth: n,
                remainedWidth: n,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = r.stacks;
            e[i] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++, a[o] = a[o] || {width: 0, maxWidth: 0};
            var s = t.barWidth;
            s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var h = t.barGap;
            null != h && (r.gap = h);
            var u = t.barCategoryGap;
            null != u && (r.categoryGap = u)
        });
        var i = {};
        return f(e, function (t, e) {
            i[e] = {};
            var n = t.stacks, r = t.bandWidth, a = Ua(t.categoryGap, r), o = Ua(t.gap, 1), s = t.remainedWidth,
                l = t.autoWidthCount, h = (s - a) / (l + (l - 1) * o);
            h = Math.max(h, 0), f(n, function (t) {
                var e = t.maxWidth;
                e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
            }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
            var u, c = 0;
            f(n, function (t) {
                t.width || (t.width = h), u = t, c += t.width * (1 + o)
            }), u && (c -= u.width * o);
            var d = -c / 2;
            f(n, function (t, n) {
                i[e][n] = i[e][n] || {offset: d, width: t.width}, d += t.width * (1 + o)
            })
        }), i
    }

    function Kh(t, e, i) {
        if (t && e) {
            var n = t[Yh(e)];
            return null != n && null != i && (n = n[Xh(i)]), n
        }
    }

    function Qh(t, e) {
        var i = qh(t, e), n = Uh(i), r = {};
        f(i, function (t) {
            var e = t.getData(), i = t.coordinateSystem, a = i.getBaseAxis(), o = Xh(t), s = n[Yh(a)][o], l = s.offset,
                h = s.width, u = i.getOtherAxis(a), c = t.get("barMinHeight") || 0;
            r[o] = r[o] || [], e.setLayout({offset: l, size: h});
            for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = Ph(e, d), g = u.isHorizontal(), v = eu(a, u, p), m = 0, y = e.count(); y > m; m++) {
                var x = e.get(d, m), _ = e.get(f, m);
                if (!isNaN(x)) {
                    var w = x >= 0 ? "p" : "n", b = v;
                    p && (r[o][_] || (r[o][_] = {p: v, n: v}), b = r[o][_][w]);
                    var S, M, I, T;
                    if (g) {
                        var C = i.dataToPoint([x, _]);
                        S = b, M = C[1] + l, I = C[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), p && (r[o][_][w] += I)
                    } else {
                        var C = i.dataToPoint([_, x]);
                        S = C[0] + l, M = b, I = h, T = C[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), p && (r[o][_][w] += T)
                    }
                    e.setItemLayout(m, {x: S, y: M, width: I, height: T})
                }
            }
        }, this)
    }

    function Jh(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function tu(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function eu(t, e) {
        var i, n, r = e.getGlobalExtent();
        r[0] > r[1] ? (i = r[1], n = r[0]) : (i = r[0], n = r[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return i > a && (a = i), a > n && (a = n), a
    }

    function iu(t, e) {
        return ub(t, hb(e))
    }

    function nu(t, e) {
        var i, n, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, h = null != s, u = t.getExtent();
        "ordinal" === a ? i = e.getCategories().length : (n = e.get("boundaryGap"), _(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (n = [0, 0]), n[0] = Ua(n[0], 1), n[1] = Ua(n[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? i ? 0 : 0 / 0 : u[0] - n[0] * r), null == s && (s = "ordinal" === a ? i ? i - 1 : 0 / 0 : u[1] + n[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = qh("bar", c);
            if (f(p, function (t) {
                d |= t.getBaseAxis() === e.axis
            }), d) {
                var g = Uh(p), v = ru(o, s, e, g);
                o = v.min, s = v.max
            }
        }
        return [o, s]
    }

    function ru(t, e, i, n) {
        var r = i.axis.getExtent(), a = r[1] - r[0], o = Kh(n, i.axis);
        if (void 0 === o) return {min: t, max: e};
        var s = 1 / 0;
        f(o, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var h = s + l, u = e - t, c = 1 - (s + l) / a, d = u / c - u;
        return e += d * (l / h), t -= d * (s / h), {min: t, max: e}
    }

    function au(t, e) {
        var i = nu(t, e), n = null != e.getMin(), r = null != e.getMax(), a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: a,
            fixMin: n,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function ou(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case"category":
                return new Hw(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case"value":
                return new Yw;
            default:
                return (Rh.getClass(e) || Yw).create(t)
        }
    }

    function su(t) {
        var e = t.scale.getExtent(), i = e[0], n = e[1];
        return !(i > 0 && n > 0 || 0 > i && 0 > n)
    }

    function lu(t) {
        var e = t.getLabelModel().get("formatter"), i = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (e) {
            return function (i) {
                return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "")
            }
        }(e) : "function" == typeof e ? function (n, r) {
            return null != i && (r = n - i), e(hu(t, n), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function hu(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function uu(t) {
        var e = t.model, i = t.scale;
        if (e.get("axisLabel.show") && !i.isBlank()) {
            var n, r, a = "category" === t.type, o = i.getExtent();
            a ? r = i.count() : (n = i.getTicks(), r = n.length);
            var s, l = t.getLabelModel(), h = lu(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; r > c; c += u) {
                var d = n ? n[c] : o[0] + c, f = h(d), p = l.getTextRect(f), g = cu(p, l.get("rotate") || 0);
                s ? s.union(g) : s = g
            }
            return s
        }
    }

    function cu(t, e) {
        var i = e * Math.PI / 180, n = t.plain(), r = n.width, a = n.height, o = r * Math.cos(i) + a * Math.sin(i),
            s = r * Math.sin(i) + a * Math.cos(i), l = new gi(n.x, n.y, o, s);
        return l
    }

    function du(t, e) {
        if ("image" !== this.type) {
            var i = this.style, n = this.shape;
            n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1)
        }
    }

    function fu(t, e, i, n, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Jr(t.slice(8), new gi(e, i, n, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Qr(t.slice(7), {}, new gi(e, i, n, r), o ? "center" : "cover") : new Mb({
            shape: {
                symbolType: t,
                x: e,
                y: i,
                width: n,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = du, l.setColor(a), l
    }

    function pu(t) {
        return Oh(t.getSource(), t)
    }

    function gu(t, e) {
        var i = e;
        Wa.isInstance(e) || (i = new Wa(e), c(i, vb));
        var n = ou(i);
        return n.setExtent(t[0], t[1]), au(n, i), n
    }

    function vu(t) {
        c(t, vb)
    }

    function mu(t, e) {
        return Math.abs(t - e) < Cb
    }

    function yu(t, e, i) {
        var n = 0, r = t[0];
        if (!r) return !1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            n += kr(r[0], r[1], o[0], o[1], e, i), r = o
        }
        var s = t[0];
        return mu(r[0], s[0]) && mu(r[1], s[1]) || (n += kr(r[0], r[1], s[0], s[1], e, i)), 0 !== n
    }

    function xu(t, e, i) {
        if (this.name = t, this.geometries = e, i) i = [i[0], i[1]]; else {
            var n = this.getBoundingRect();
            i = [n.x + n.width / 2, n.y + n.height / 2]
        }
        this.center = i
    }

    function _u(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var i = t.features, n = 0; n < i.length; n++) for (var r = i[n], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
            var h = o[l];
            if ("Polygon" === a.type) o[l] = wu(h, s[l], e); else if ("MultiPolygon" === a.type) for (var u = 0; u < h.length; u++) {
                var c = h[u];
                h[u] = wu(c, s[l][u], e)
            }
        }
        return t.UTF8Encoding = !1, t
    }

    function wu(t, e, i) {
        for (var n = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64, l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, n.push([s / i, l / i])
        }
        return n
    }

    function bu(t) {
        return "category" === t.type ? Mu(t) : Cu(t)
    }

    function Su(t, e) {
        return "category" === t.type ? Tu(t, e) : {ticks: t.scale.getTicks()}
    }

    function Mu(t) {
        var e = t.getLabelModel(), i = Iu(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: i.labelCategoryInterval} : i
    }

    function Iu(t, e) {
        var i = Au(t, "labels"), n = Ru(e), r = Du(i, n);
        if (r) return r;
        var a, o;
        return w(n) ? a = Eu(t, n) : (o = "auto" === n ? Pu(t) : n, a = zu(t, o)), ku(i, n, {
            labels: a,
            labelCategoryInterval: o
        })
    }

    function Tu(t, e) {
        var i = Au(t, "ticks"), n = Ru(e), r = Du(i, n);
        if (r) return r;
        var a, o;
        if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(n)) a = Eu(t, n, !0); else if ("auto" === n) {
            var s = Iu(t, t.getLabelModel());
            o = s.labelCategoryInterval, a = p(s.labels, function (t) {
                return t.tickValue
            })
        } else o = n, a = zu(t, o, !0);
        return ku(i, n, {ticks: a, tickCategoryInterval: o})
    }

    function Cu(t) {
        var e = t.scale.getTicks(), i = lu(t);
        return {
            labels: p(e, function (e, n) {
                return {formattedLabel: i(e, n), rawLabel: t.scale.getLabel(e), tickValue: e}
            })
        }
    }

    function Au(t, e) {
        return Db(t)[e] || (Db(t)[e] = [])
    }

    function Du(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].key === e) return t[i].value
    }

    function ku(t, e, i) {
        return t.push({key: e, value: i}), i
    }

    function Pu(t) {
        var e = Db(t).autoInterval;
        return null != e ? e : Db(t).autoInterval = t.calculateCategoryInterval()
    }

    function Lu(t) {
        var e = Ou(t), i = lu(t), n = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, a = r.getExtent(),
            o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(n)), c = Math.abs(h * Math.sin(n)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0, g = 0, v = Ei(i(l), e.font, "center", "top");
            p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
        }
        var m = d / u, y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var x = Math.max(0, Math.floor(Math.min(m, y))), _ = Db(t.model), w = _.lastAutoInterval, b = _.lastTickCount;
        return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - o) <= 1 && w > x ? x = w : (_.lastTickCount = o, _.lastAutoInterval = x), x
    }

    function Ou(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function zu(t, e, i) {
        function n(t) {
            l.push(i ? t : {formattedLabel: r(t), rawLabel: a.getLabel(t), tickValue: t})
        }

        var r = lu(t), a = t.scale, o = a.getExtent(), s = t.getLabelModel(), l = [], h = Math.max((e || 0) + 1, 1),
            u = o[0], c = a.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var d = {min: s.get("showMinLabel"), max: s.get("showMaxLabel")};
        d.min && u !== o[0] && n(o[0]);
        for (var f = u; f <= o[1]; f += h) n(f);
        return d.max && f !== o[1] && n(o[1]), l
    }

    function Eu(t, e, i) {
        var n = t.scale, r = lu(t), a = [];
        return f(n.getTicks(), function (t) {
            var o = n.getLabel(t);
            e(t, o) && a.push(i ? t : {formattedLabel: r(t), rawLabel: o, tickValue: t})
        }), a
    }

    function Ru(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Bu(t, e) {
        var i = t[1] - t[0], n = e, r = i / n / 2;
        t[0] += r, t[1] -= r
    }

    function Nu(t, e, i, n, r) {
        function a(t, e) {
            return u ? t > e : e > t
        }

        var o = e.length;
        if (t.onBand && !n && o) {
            var s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], s = e[1] = {coord: l[0]}; else {
                var h = e[1].coord - e[0].coord;
                f(e, function (t) {
                    t.coord -= h / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= h / (2 * (e + 1)))
                }), s = {coord: e[o - 1].coord + h}, e.push(s)
            }
            var u = l[0] > l[1];
            a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({coord: l[0]}), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function Fu(t) {
        return this._axes[t]
    }

    function Vu(t) {
        Eb.call(this, t)
    }

    function Wu(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    function Gu(t, e) {
        return t.getCoordSysModel() === e
    }

    function Hu(t, e, i) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this.model = t
    }

    function Zu(t, e, i, n) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        i.getAxesOnZeroOf = function () {
            return a ? [a] : []
        };
        var a, o = t[e], s = i.model, l = s.get("axisLine.onZero"), h = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != h) Xu(o[h]) && (a = o[h]); else for (var u in o) if (o.hasOwnProperty(u) && Xu(o[u]) && !n[r(o[u])]) {
                a = o[u];
                break
            }
            a && (n[r(a)] = !0)
        }
    }

    function Xu(t) {
        return t && "category" !== t.type && "time" !== t.type && su(t)
    }

    function Yu(t, e) {
        var i = t.getExtent(), n = i[0] + i[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return n - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return n - t + e
        }
    }

    function ju(t) {
        return p(Zb, function (e) {
            var i = t.getReferringComponents(e)[0];
            return i
        })
    }

    function qu(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Uu(t, e) {
        var i = t.mapDimension("defaultedLabel", !0), n = i.length;
        if (1 === n) return Ss(t, e, i[0]);
        if (n) {
            for (var r = [], a = 0; a < i.length; a++) {
                var o = Ss(t, e, i[a]);
                r.push(o)
            }
            return r.join(" ")
        }
    }

    function $u(t, e, i, n, r, a) {
        var o = i.getModel("label"), s = i.getModel("emphasis.label");
        wa(t, e, o, s, {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: Uu(r.getData(), a),
            isRectText: !0,
            autoColor: n
        }), Ku(t), Ku(e)
    }

    function Ku(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    function Qu(t, e, i) {
        i.style.text = null, La(i, {shape: {width: 0}}, e, t, function () {
            i.parent && i.parent.remove(i)
        })
    }

    function Ju(t, e, i) {
        i.style.text = null, La(i, {shape: {r: i.shape.r0}}, e, t, function () {
            i.parent && i.parent.remove(i)
        })
    }

    function tc(t, e, i, n, r, a, o, l) {
        var h = e.getItemVisual(i, "color"), u = e.getItemVisual(i, "opacity"), c = n.getModel("itemStyle"),
            d = n.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({fill: h, opacity: u}, c.getBarItemStyle()));
        var f = n.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || $u(t.style, d, n, h, a, i, p), xa(t, d)
    }

    function ec(t, e) {
        var i = t.get(qb) || 0;
        return Math.min(i, Math.abs(e.width), Math.abs(e.height))
    }

    function ic(t, e, i) {
        var n = t.getData(), r = [], a = n.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = n.getLayout("valueAxisStart");
        var o = new Kb({shape: {points: n.getLayout("largePoints")}, incremental: !!i, __startPoint: r, __valueIdx: a});
        e.add(o), nc(o, t, n)
    }

    function nc(t, e, i) {
        var n = i.getVisual("borderColor") || i.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = n, t.style.lineWidth = i.getLayout("barWidth")
    }

    function rc(t) {
        var e = {componentType: t.mainType, componentIndex: t.componentIndex};
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function ac(t, e, i, n) {
        var r, a, o = io(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
        return no(o - Qb / 2) ? (a = l ? "bottom" : "top", r = "center") : no(o - 1.5 * Qb) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * Qb > o && o > Qb / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }

    function oc(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function sc(t, e, i) {
        var n = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
        e = e || [], i = i || [];
        var a = e[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], h = i[0], u = i[1], c = i[i.length - 1],
            d = i[i.length - 2];
        n === !1 ? (lc(a), lc(h)) : hc(a, o) && (n ? (lc(o), lc(u)) : (lc(a), lc(h))), r === !1 ? (lc(s), lc(c)) : hc(l, s) && (r ? (lc(l), lc(d)) : (lc(s), lc(c)))
    }

    function lc(t) {
        t && (t.ignore = !0)
    }

    function hc(t, e) {
        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
        if (i && n) {
            var r = Se([]);
            return Ce(r, r, -t.rotation), i.applyTransform(Ie([], r, t.getLocalTransform())), n.applyTransform(Ie([], r, e.getLocalTransform())), i.intersect(n)
        }
    }

    function uc(t) {
        return "middle" === t || "center" === t
    }

    function cc(t, e, i) {
        var n = e.axis;
        if (e.get("axisTick.show") && !n.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = n.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                h[0] = p, h[1] = 0, u[0] = p, u[1] = i.tickDirection * o, c && (ae(h, h, c), ae(u, u, c));
                var g = new ky(ia({
                    anid: "tick_" + l[f].tickValue,
                    shape: {x1: h[0], y1: h[1], x2: u[0], y2: u[1]},
                    style: s(a.getLineStyle(), {stroke: e.get("axisLine.lineStyle.color")}),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), d.push(g)
            }
            return d
        }
    }

    function dc(t, e, i) {
        var n = e.axis, r = A(i.axisLabelShow, e.get("axisLabel.show"));
        if (r && !n.scale.isBlank()) {
            var a = e.getModel("axisLabel"), o = a.get("margin"), s = n.getViewLabels(),
                l = (A(i.labelRotate, a.get("rotate")) || 0) * Qb / 180, h = eS(i.rotation, l, i.labelDirection),
                u = e.getCategories(!0), c = [], d = oc(e), p = e.get("triggerEvent");
            return f(s, function (r, s) {
                var l = r.tickValue, f = r.formattedLabel, g = r.rawLabel, v = a;
                u && u[l] && u[l].textStyle && (v = new Wa(u[l].textStyle, a, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"), y = n.dataToCoord(l),
                    x = [y, i.labelOffset + i.labelDirection * o],
                    _ = new xy({anid: "label_" + l, position: x, rotation: h.rotation, silent: d, z2: 10});
                ba(_.style, v, {
                    text: f,
                    textAlign: v.getShallow("align", !0) || h.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === n.type ? g : "value" === n.type ? l + "" : l, s) : m
                }), p && (_.eventData = rc(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), c.push(_), t.group.add(_), _.decomposeTransform()
            }), c
        }
    }

    function fc(t, e) {
        var i = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return pc(i, t, e), i.seriesInvolved && vc(i, t), i
    }

    function pc(t, e, i) {
        var n = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), a = r.get("link", !0) || [], o = [];
        iS(i.getCoordinateSystems(), function (i) {
            function s(n, s, l) {
                var u = l.model.getModel("axisPointer", r), d = u.get("show");
                if (d && ("auto" !== d || n || bc(u))) {
                    null == s && (s = u.get("triggerTooltip")), u = n ? gc(l, c, r, e, n, s) : u;
                    var f = u.get("snap"), p = Sc(l.model), g = s || f || "category" === l.type, v = t.axesInfo[p] = {
                        key: p,
                        axis: l,
                        coordSys: i,
                        axisPointerModel: u,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: bc(u),
                        seriesModels: []
                    };
                    h[p] = v, t.seriesInvolved |= g;
                    var m = mc(a, l);
                    if (null != m) {
                        var y = o[m] || (o[m] = {axesInfo: {}});
                        y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
                    }
                }
            }

            if (i.axisPointerEnabled) {
                var l = Sc(i.model), h = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = i;
                var u = i.model, c = u.getModel("tooltip", n);
                if (iS(i.getAxes(), nS(s, !1, null)), i.getTooltipAxes && n && c.get("show")) {
                    var d = "axis" === c.get("trigger"), f = "cross" === c.get("axisPointer.type"),
                        p = i.getTooltipAxes(c.get("axisPointer.axis"));
                    (d || f) && iS(p.baseAxes, nS(s, f ? "cross" : !0, d)), f && iS(p.otherAxes, nS(s, "cross", !1))
                }
            }
        })
    }

    function gc(t, e, i, r, a, o) {
        var l = e.getModel("axisPointer"), h = {};
        iS(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function (t) {
            h[t] = n(l.get(t))
        }), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if (null == u.show && (u.show = !1), "cross" === a) {
            var c = l.get("label.show");
            if (u.show = null != c ? c : !0, !o) {
                var d = h.lineStyle = l.get("crossStyle");
                d && s(u, d.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new Wa(h, i, r))
    }

    function vc(t, e) {
        e.eachSeries(function (e) {
            var i = e.coordinateSystem, n = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            i && "none" !== n && n !== !1 && "item" !== n && r !== !1 && e.get("axisPointer.show", !0) !== !1 && iS(t.coordSysAxesInfo[Sc(i.model)], function (t) {
                var n = t.axis;
                i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        }, this)
    }

    function mc(t, e) {
        for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (yc(a[n + "AxisId"], i.id) || yc(a[n + "AxisIndex"], i.componentIndex) || yc(a[n + "AxisName"], i.name)) return r
        }
    }

    function yc(t, e) {
        return "all" === t || _(t) && h(t, e) >= 0 || t === e
    }

    function xc(t) {
        var e = _c(t);
        if (e) {
            var i = e.axisPointerModel, n = e.axis.scale, r = i.option, a = i.get("status"), o = i.get("value");
            null != o && (o = n.parse(o));
            var s = bc(i);
            null == a && (r.status = s ? "show" : "hide");
            var l = n.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function _c(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Sc(t)]
    }

    function wc(t) {
        var e = _c(t);
        return e && e.axisPointerModel
    }

    function bc(t) {
        return !!t.get("handle.show")
    }

    function Sc(t) {
        return t.type + "||" + t.id
    }

    function Mc(t, e, i, n, r, a) {
        var o = rS.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = wc(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, n, a) : Ic(t, n)
        }
    }

    function Ic(t, e, i) {
        var n = t._axisPointer;
        n && n.dispose(e, i), t._axisPointer = null
    }

    function Tc(t, e, i) {
        i = i || {};
        var n = t.coordinateSystem, r = e.axis, a = {}, o = r.getAxesOnZeroOf()[0], s = r.position,
            l = o ? "onZero" : s, h = r.dim, u = n.getRect(), c = [u.x, u.x + u.width, u.y, u.y + u.height],
            d = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            p = "x" === h ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        a.position = ["y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
        var v = {top: -1, bottom: 1, left: -1, right: 1};
        a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), A(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
    }

    function Cc(t, e, i) {
        lv.call(this), this.updateData(t, e, i)
    }

    function Ac(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function Dc(t, e) {
        this.parent.drift(t, e)
    }

    function kc() {
        !pa(this) && Lc.call(this)
    }

    function Pc() {
        !pa(this) && Oc.call(this)
    }

    function Lc() {
        if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale, e = t[1] / t[0];
            this.animateTo({scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]}, 400, "elasticOut")
        }
    }

    function Oc() {
        this.incremental || this.useHoverLayer || this.animateTo({scale: this.__symbolOriginalScale}, 400, "elasticOut")
    }

    function zc(t) {
        this.group = new lv, this._symbolCtor = t || Cc
    }

    function Ec(t, e, i, n) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || n.isIgnore && n.isIgnore(i) || n.clipShape && !n.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(i, "symbol"))
    }

    function Rc(t) {
        return null == t || S(t) || (t = {isIgnore: t}), t || {}
    }

    function Bc(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }

    function Nc(t, e, i) {
        var n, r = t.getBaseAxis(), a = t.getOtherAxis(r), o = Fc(a, i), s = r.dim, l = a.dim, h = e.mapDimension(l),
            u = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = p(t.dimensions, function (t) {
                return e.mapDimension(t)
            }), f = e.getCalculationInfo("stackResultDimension");
        return (n |= Ph(e, d[0])) && (d[0] = f), (n |= Ph(e, d[1])) && (d[1] = f), {
            dataDimsForPoint: d,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!n,
            valueDim: h,
            baseDim: u,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function Fc(t, e) {
        var i = 0, n = t.scale.getExtent();
        return "start" === e ? i = n[0] : "end" === e ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), i
    }

    function Vc(t, e, i, n) {
        var r = 0 / 0;
        t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset, o = [];
        return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o)
    }

    function Wc(t, e) {
        var i = [];
        return e.diff(t).add(function (t) {
            i.push({cmd: "+", idx: t})
        }).update(function (t, e) {
            i.push({cmd: "=", idx: e, idx1: t})
        }).remove(function (t) {
            i.push({cmd: "-", idx: t})
        }).execute(), i
    }

    function Gc(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function Hc(t, e, i, n, r, a, o, s, l, h) {
        return "none" !== h && h ? Zc.apply(this, arguments) : Xc.apply(this, arguments)
    }

    function Zc(t, e, i, n, r, a, o, s, l, h, u) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Gc(p)) {
                if (u) {
                    d += a;
                    continue
                }
                break
            }
            if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], v = "y" === h ? 1 : 0, m = (p[v] - g[v]) * l;
                _S(bS, g), bS[v] = g[v] + m, _S(SS, p), SS[v] = p[v] - m, t.bezierCurveTo(bS[0], bS[1], SS[0], SS[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = d, d += a
        }
        return f
    }

    function Xc(t, e, i, n, r, a, o, s, l, h, u) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Gc(p)) {
                if (u) {
                    d += a;
                    continue
                }
                break
            }
            if (d === i) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), _S(bS, p); else if (l > 0) {
                var g = d + a, v = e[g];
                if (u) for (; v && Gc(e[g]);) g += a, v = e[g];
                var m = .5, y = e[c], v = e[g];
                if (!v || Gc(v)) _S(SS, p); else {
                    Gc(v) && !u && (v = p), j(wS, v, y);
                    var x, _;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - v[w])
                    } else x = yg(p, y), _ = yg(p, v);
                    m = _ / (_ + x), xS(SS, p, wS, -l * (1 - m))
                }
                mS(bS, bS, s), yS(bS, bS, o), mS(SS, SS, s), yS(SS, SS, o), t.bezierCurveTo(bS[0], bS[1], SS[0], SS[1], p[0], p[1]), xS(bS, p, wS, l * m)
            } else t.lineTo(p[0], p[1]);
            c = d, d += a
        }
        return f
    }

    function Yc(t, e) {
        var i = [1 / 0, 1 / 0], n = [-1 / 0, -1 / 0];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
        }
        return {min: e ? i : n, max: e ? n : i}
    }

    function jc(t, e) {
        if (t.length === e.length) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = e[i];
                if (n[0] !== r[0] || n[1] !== r[1]) return
            }
            return !0
        }
    }

    function qc(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function Uc(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
            e[0] += n * i, e[1] -= n * i
        }
        return e
    }

    function $c(t, e, i) {
        if (!i.valueDim) return [];
        for (var n = [], r = 0, a = e.count(); a > r; r++) n.push(Vc(i, t, e, r));
        return n
    }

    function Kc(t, e, i, n) {
        var r = Uc(t.getAxis("x")), a = Uc(t.getAxis("y")), o = t.getBaseAxis().isHorizontal(),
            s = Math.min(r[0], r[1]), l = Math.min(a[0], a[1]), h = Math.max(r[0], r[1]) - s,
            u = Math.max(a[0], a[1]) - l;
        if (i) s -= .5, h += .5, l -= .5, u += .5; else {
            var c = n.get("lineStyle.width") || 2, d = n.get("clipOverflow") ? c / 2 : Math.max(h, u);
            o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d)
        }
        var f = new Dy({shape: {x: s, y: l, width: h, height: u}});
        return e && (f.shape[o ? "width" : "height"] = 0, Oa(f, {shape: {width: h, height: u}}, n)), f
    }

    function Qc(t, e, i, n) {
        var r = t.getAngleAxis(), a = t.getRadiusAxis(), o = a.getExtent().slice();
        o[0] > o[1] && o.reverse();
        var s = r.getExtent(), l = Math.PI / 180;
        i && (o[0] -= .5, o[1] += .5);
        var h = new Sy({
            shape: {
                cx: $a(t.cx, 1),
                cy: $a(t.cy, 1),
                r0: $a(o[0], 1),
                r: $a(o[1], 1),
                startAngle: -s[0] * l,
                endAngle: -s[1] * l,
                clockwise: r.inverse
            }
        });
        return e && (h.shape.endAngle = -s[0] * l, Oa(h, {shape: {endAngle: -s[1] * l}}, n)), h
    }

    function Jc(t, e, i, n) {
        return "polar" === t.type ? Qc(t, e, i, n) : Kc(t, e, i, n)
    }

    function td(t, e, i) {
        for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1], l = t[o];
            a.push(l);
            var h = [];
            switch (i) {
                case"end":
                    h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
                    break;
                case"middle":
                    var u = (l[r] + s[r]) / 2, c = [];
                    h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
                    break;
                default:
                    h[r] = l[r], h[1 - r] = s[1 - r], a.push(h)
            }
        }
        return t[o] && a.push(t[o]), a
    }

    function ed(t, e) {
        var i = t.getVisual("visualMeta");
        if (i && i.length && t.count() && "cartesian2d" === e.type) {
            for (var n, r, a = i.length - 1; a >= 0; a--) {
                var o = i[a].dimension, s = t.dimensions[o], l = t.getDimensionInfo(s);
                if (n = l && l.coordDim, "x" === n || "y" === n) {
                    r = i[a];
                    break
                }
            }
            if (r) {
                var h = e.getAxis(n), u = p(r.stops, function (t) {
                    return {coord: h.toGlobalCoord(h.dataToCoord(t.value)), color: t.color}
                }), c = u.length, d = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
                var g = 10, v = u[0].coord - g, m = u[c - 1].coord + g, y = m - v;
                if (.001 > y) return "transparent";
                f(u, function (t) {
                    t.offset = (t.coord - v) / y
                }), u.push({
                    offset: c ? u[c - 1].offset : .5,
                    color: d[1] || "transparent"
                }), u.unshift({offset: c ? u[0].offset : .5, color: d[0] || "transparent"});
                var x = new Ry(0, 0, 0, 0, u, !0);
                return x[n] = v, x[n + "2"] = m, x
            }
        }
    }

    function id(t, e, i) {
        var n = t.get("showAllSymbol"), r = "auto" === n;
        if (!n || r) {
            var a = i.getAxesByScale("ordinal")[0];
            if (a && (!r || !nd(a, e))) {
                var o = e.mapDimension(a.dim), s = {};
                return f(a.getViewLabels(), function (t) {
                    s[t.tickValue] = 1
                }), function (t) {
                    return !s.hasOwnProperty(e.get(o, t))
                }
            }
        }
    }

    function nd(t, e) {
        var i = t.getExtent(), n = Math.abs(i[1] - i[0]) / t.scale.count();
        isNaN(n) && (n = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) if (1.5 * Cc.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > n) return !1;
        return !0
    }

    function rd(t, e, i, n) {
        var r = e.getData(), a = this.dataIndex, o = r.getName(a), s = e.get("selectedOffset");
        n.dispatchAction({type: "pieToggleSelect", from: t, name: o, seriesId: e.id}), r.each(function (t) {
            ad(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, i)
        })
    }

    function ad(t, e, i, n, r) {
        var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = i ? n : 0, h = [o * l, s * l];
        r ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
    }

    function od(t, e) {
        function i() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
        }

        function n() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
        }

        lv.call(this);
        var r = new Sy({z2: 2}), a = new Ay, o = new xy;
        this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
    }

    function sd(t, e, i, n, r, a, o) {
        function s(e, i, n) {
            for (var r = e; i > r; r++) if (t[r].y += n, r > e && i > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void l(r, n / 2);
            l(i - 1, n / 2)
        }

        function l(e, i) {
            for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--) ;
        }

        function h(t, e, i, n, r, a) {
            for (var o = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("center" !== t[s].position) {
                var h = Math.abs(t[s].y - n), u = t[s].len, c = t[s].len2,
                    d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - i);
                e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = i + d * a, o = d
            }
        }

        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++) u = t[g].y - c, 0 > u && s(g, d, -u, r), c = t[g].y + t[g].height;
        0 > o - c && l(d - 1, c - o);
        for (var g = 0; d > g; g++) t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
        h(f, !1, e, i, n, r), h(p, !0, e, i, n, r)
    }

    function ld(t, e, i, n, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
        sd(s, e, i, n, 1, r, a), sd(o, e, i, n, -1, r, a);
        for (var l = 0; l < t.length; l++) {
            var h = t[l].linePoints;
            if (h) {
                var u = h[1][0] - h[2][0];
                h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u
            }
        }
    }

    function hd(t, e) {
        return e = e || [0, 0], p(["x", "y"], function (i, n) {
            var r = this.getAxis(i), a = e[n], o = t[n] / 2;
            return "category" === r.type ? r.getBandWidth() : Math.abs(r.dataToCoord(a - o) - r.dataToCoord(a + o))
        }, this)
    }

    function ud(t, e) {
        return e = e || [0, 0], p([0, 1], function (i) {
            var n = e[i], r = t[i] / 2, a = [], o = [];
            return a[i] = n - r, o[i] = n + r, a[1 - i] = o[1 - i] = e[1 - i], Math.abs(this.dataToPoint(a)[i] - this.dataToPoint(o)[i])
        }, this)
    }

    function cd(t, e) {
        var i = this.getAxis(), n = e instanceof Array ? e[0] : e, r = (t instanceof Array ? t[0] : t) / 2;
        return "category" === i.type ? i.getBandWidth() : Math.abs(i.dataToCoord(n - r) - i.dataToCoord(n + r))
    }

    function dd(t, e) {
        return p(["Radius", "Angle"], function (i, n) {
            var r = this["get" + i + "Axis"](), a = e[n], o = t[n] / 2, s = "dataTo" + i,
                l = "category" === r.type ? r.getBandWidth() : Math.abs(r[s](a - o) - r[s](a + o));
            return "Angle" === i && (l = l * Math.PI / 180), l
        }, this)
    }

    function fd(t) {
        var e, i = t.type;
        if ("path" === i) {
            var n = t.shape, r = null != n.width && null != n.height ? {
                x: n.x || 0,
                y: n.y || 0,
                width: n.width,
                height: n.height
            } : null, a = Id(n);
            e = Qr(a, null, r, n.layout || "center"), e.__customPathData = a
        } else if ("image" === i) e = new yn({}), e.__customImagePath = t.style.image; else if ("text" === i) e = new xy({}), e.__customText = t.style.text; else {
            var o = Yy[i.charAt(0).toUpperCase() + i.slice(1)];
            e = new o
        }
        return e.__customGraphicType = i, e.name = t.name, e
    }

    function pd(t, e, i, r, a, o, s) {
        var l = {}, h = i.style || {};
        if (i.shape && (l.shape = n(i.shape)), i.position && (l.position = i.position.slice()), i.scale && (l.scale = i.scale.slice()), i.origin && (l.origin = i.origin.slice()), i.rotation && (l.rotation = i.rotation), "image" === t.type && i.style) {
            var u = l.style = {};
            f(["x", "y", "width", "height"], function (e) {
                gd(e, u, h, t.style, o)
            })
        }
        if ("text" === t.type && i.style) {
            var u = l.style = {};
            f(["x", "y"], function (e) {
                gd(e, u, h, t.style, o)
            }), !h.hasOwnProperty("textFill") && h.fill && (h.textFill = h.fill), !h.hasOwnProperty("textStroke") && h.stroke && (h.textStroke = h.stroke)
        }
        if ("group" !== t.type && (t.useStyle(h), o)) {
            t.style.opacity = 0;
            var c = h.opacity;
            null == c && (c = 1), Oa(t, {style: {opacity: c}}, r, e)
        }
        o ? t.attr(l) : La(t, l, r, e), i.hasOwnProperty("z2") && t.attr("z2", i.z2 || 0), i.hasOwnProperty("silent") && t.attr("silent", i.silent), i.hasOwnProperty("invisible") && t.attr("invisible", i.invisible), i.hasOwnProperty("ignore") && t.attr("ignore", i.ignore), i.hasOwnProperty("info") && t.attr("info", i.info);
        var d = i.styleEmphasis, p = d === !1;
        t.__cusHasEmphStl && null == d || !t.__cusHasEmphStl && p || (fa(t, d), t.__cusHasEmphStl = !p), s && _a(t, !p)
    }

    function gd(t, e, i, n, r) {
        null == i[t] || r || (e[t] = i[t], i[t] = n[t])
    }

    function vd(t, e, i, n) {
        function r(t) {
            null == t && (t = m), M && (y = e.getItemModel(t), x = y.getModel(US), _ = y.getModel($S), w = e.getItemVisual(t, "color"), M = !1)
        }

        function a(t, i) {
            return null == i && (i = m), e.get(e.getDimension(t || 0), i)
        }

        function l(i, n) {
            null == n && (n = m), r(n);
            var a = y.getModel(jS).getItemStyle();
            null != w && (a.fill = w);
            var s = e.getItemVisual(n, "opacity");
            return null != s && (a.opacity = s), ba(a, x, null, {
                autoColor: w,
                isRectText: !0
            }), a.text = x.getShallow("show") ? D(t.getFormattedLabel(n, "normal"), Uu(e, n)) : null, i && o(a, i), a
        }

        function h(i, n) {
            null == n && (n = m), r(n);
            var a = y.getModel(qS).getItemStyle();
            return ba(a, _, null, {isRectText: !0}, !0), a.text = _.getShallow("show") ? k(t.getFormattedLabel(n, "emphasis"), t.getFormattedLabel(n, "normal"), Uu(e, n)) : null, i && o(a, i), a
        }

        function u(t, i) {
            return null == i && (i = m), e.getItemVisual(i, t)
        }

        function c(t) {
            if (g.getBaseAxis) {
                var e = g.getBaseAxis();
                return jh(s({axis: e}, t), n)
            }
        }

        function d() {
            return i.getCurrentSeriesIndices()
        }

        function f(t) {
            return ka(t, i)
        }

        var p = t.get("renderItem"), g = t.coordinateSystem, v = {};
        g && (v = g.prepareCustoms ? g.prepareCustoms() : QS[g.type](g));
        var m, y, x, _, w, b = s({
            getWidth: n.getWidth,
            getHeight: n.getHeight,
            getZr: n.getZr,
            getDevicePixelRatio: n.getDevicePixelRatio,
            value: a,
            style: l,
            styleEmphasis: h,
            visual: u,
            barLayout: c,
            currentSeriesIndices: d,
            font: f
        }, v.api || {}), S = {
            context: {},
            seriesId: t.id,
            seriesName: t.name,
            seriesIndex: t.seriesIndex,
            coordSys: v.coordSys,
            dataInsideLength: e.count(),
            encode: md(t.getData())
        }, M = !0;
        return function (t, i) {
            return m = t, M = !0, p && p(s({
                dataIndexInside: t,
                dataIndex: e.getRawIndex(t),
                actionType: i ? i.type : null
            }, S), b)
        }
    }

    function md(t) {
        var e = {};
        return f(t.dimensions, function (i, n) {
            var r = t.getDimensionInfo(i);
            if (!r.isExtraCoord) {
                var a = r.coordDim, o = e[a] = e[a] || [];
                o[r.coordDimIndex] = n
            }
        }), e
    }

    function yd(t, e, i, n, r, a) {
        return t = xd(t, e, i, n, r, a, !0), t && a.setItemGraphicEl(e, t), t
    }

    function xd(t, e, i, n, r, a, o) {
        var s = !i;
        i = i || {};
        var l = i.type, h = i.shape, u = i.style;
        if (t && (s || null != l && l !== t.__customGraphicType || "path" === l && Td(h) && Id(h) !== t.__customPathData || "image" === l && Cd(u, "image") && u.image !== t.__customImagePath || "text" === l && Cd(h, "text") && u.text !== t.__customText) && (r.remove(t), t = null), !s) {
            var c = !t;
            return !t && (t = fd(i)), pd(t, e, i, n, a, c, o), "group" === l && _d(t, e, i, n, a), r.add(t), t
        }
    }

    function _d(t, e, i, n, r) {
        var a = i.children, o = a ? a.length : 0, s = i.$mergeChildren, l = "byName" === s || i.diffChildrenByName,
            h = s === !1;
        if (o || l || h) {
            if (l) return void wd({
                oldChildren: t.children() || [],
                newChildren: a || [],
                dataIndex: e,
                animatableModel: n,
                group: t,
                data: r
            });
            h && t.removeAll();
            for (var u = 0; o > u; u++) a[u] && xd(t.childAt(u), e, a[u], n, t, r)
        }
    }

    function wd(t) {
        new uh(t.oldChildren, t.newChildren, bd, bd, t).add(Sd).update(Sd).remove(Md).execute()
    }

    function bd(t, e) {
        var i = t && t.name;
        return null != i ? i : KS + e
    }

    function Sd(t, e) {
        var i = this.context, n = null != t ? i.newChildren[t] : null, r = null != e ? i.oldChildren[e] : null;
        xd(r, i.dataIndex, n, i.animatableModel, i.group, i.data)
    }

    function Md(t) {
        var e = this.context, i = e.oldChildren[t];
        i && e.group.remove(i)
    }

    function Id(t) {
        return t && (t.pathData || t.d)
    }

    function Td(t) {
        return t && (t.hasOwnProperty("pathData") || t.hasOwnProperty("d"))
    }

    function Cd(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function Ad(t, e, i) {
        var n, r = {}, a = "toggleSelected" === t;
        return i.eachComponent("legend", function (i) {
            a && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
            var o = i.getData();
            f(o, function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var n = i.isSelected(e);
                    r[e] = r.hasOwnProperty(e) ? r[e] && n : n
                }
            })
        }), {name: e.name, selected: r}
    }

    function Dd(t, e) {
        var i = rx(e.get("padding")), n = e.getItemStyle(["color", "opacity"]);
        n.fill = e.get("backgroundColor");
        var t = new Dy({
            shape: {
                x: t.x - i[3],
                y: t.y - i[0],
                width: t.width + i[1] + i[3],
                height: t.height + i[0] + i[2],
                r: e.get("borderRadius")
            }, style: n, silent: !0, z2: -1
        });
        return t
    }

    function kd(t, e) {
        e.dispatchAction({type: "legendToggleSelect", name: t})
    }

    function Pd(t, e, i, n) {
        var r = i.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || i.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: n})
    }

    function Ld(t, e, i, n) {
        var r = i.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || i.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: n})
    }

    function Od(t, e, i) {
        var n = t.getOrient(), r = [1, 1];
        r[n.index] = 0, So(e, i, {type: "box", ignoreSize: r})
    }

    function zd(t, e, i, n, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) {
            if (!t.involveSeries) return void i.showPointer(t, e);
            var s = Ed(e, t), l = s.payloadBatch, h = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !n && t.snap && a.containData(h) && null != h && (e = h), i.showPointer(t, e, l, r), i.showTooltip(t, s, h)
        }
    }

    function Ed(t, e) {
        var i = e.axis, n = i.dim, r = t, a = [], o = Number.MAX_VALUE, s = -1;
        return cM(e.seriesModels, function (e) {
            var l, h, u = e.getData().mapDimension(n, !0);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(u, t, i);
                h = c.dataIndices, l = c.nestestValue
            } else {
                if (h = e.getData().indicesOfNearest(u[0], t, "category" === i.type ? .5 : null), !h.length) return;
                l = e.getData().get(u[0], h[0])
            }
            if (null != l && isFinite(l)) {
                var d = t - l, f = Math.abs(d);
                o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), cM(h, function (t) {
                    a.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: a, snapToValue: r}
    }

    function Rd(t, e, i, n) {
        t[e.key] = {value: i, payloadBatch: n}
    }

    function Bd(t, e, i, n) {
        var r = i.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, h = Sc(l), u = t.map[h];
            u || (u = t.map[h] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(u)), u.dataByAxis.push({
                axisDim: a.dim,
                axisIndex: o.componentIndex,
                axisType: o.type,
                axisId: o.id,
                value: n,
                valueLabelOpt: {precision: s.get("label.precision"), formatter: s.get("label.formatter")},
                seriesDataIndices: r.slice()
            })
        }
    }

    function Nd(t, e, i) {
        var n = i.axesInfo = [];
        cM(e, function (e, i) {
            var r = e.axisPointerModel.option, a = t[i];
            a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && n.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Fd(t, e, i, n) {
        if (Hd(e) || !t.list.length) return void n({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        n({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: i.tooltipOption,
            position: i.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function Vd(t, e, i) {
        var n = i.getZr(), r = "axisPointerLastHighlights", a = fM(n)[r] || {}, o = fM(n)[r] = {};
        cM(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && cM(e.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t
            })
        });
        var s = [], l = [];
        f(a, function (t, e) {
            !o[e] && l.push(t)
        }), f(o, function (t, e) {
            !a[e] && s.push(t)
        }), l.length && i.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: l
        }), s.length && i.dispatchAction({type: "highlight", escapeConnect: !0, batch: s})
    }

    function Wd(t, e) {
        for (var i = 0; i < (t || []).length; i++) {
            var n = t[i];
            if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n
        }
    }

    function Gd(t) {
        var e = t.axis.model, i = {}, n = i.axisDim = t.axis.dim;
        return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, i.axisId = i[n + "AxisId"] = e.id, i
    }

    function Hd(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function Zd(t, e, i) {
        if (!tg.node) {
            var n = e.getZr();
            gM(n).records || (gM(n).records = {}), Xd(n, e);
            var r = gM(n).records[t] || (gM(n).records[t] = {});
            r.handler = i
        }
    }

    function Xd(t, e) {
        function i(i, n) {
            t.on(i, function (i) {
                var r = Ud(e);
                vM(gM(t).records, function (t) {
                    t && n(t, i, r.dispatchAction)
                }), Yd(r.pendings, e)
            })
        }

        gM(t).initialized || (gM(t).initialized = !0, i("click", x(qd, "click")), i("mousemove", x(qd, "mousemove")), i("globalout", jd))
    }

    function Yd(t, e) {
        var i, n = t.showTip.length, r = t.hideTip.length;
        n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, e.dispatchAction(i))
    }

    function jd(t, e, i) {
        t.handler("leave", null, i)
    }

    function qd(t, e, i, n) {
        e.handler(t, i, n)
    }

    function Ud(t) {
        var e = {showTip: [], hideTip: []}, i = function (n) {
            var r = e[n.type];
            r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n))
        };
        return {dispatchAction: i, pendings: e}
    }

    function $d(t, e) {
        if (!tg.node) {
            var i = e.getZr(), n = (gM(i).records || {})[t];
            n && (gM(i).records[t] = null)
        }
    }

    function Kd() {
    }

    function Qd(t, e, i, n) {
        Jd(yM(i).lastProp, n) || (yM(i).lastProp = n, e ? La(i, n, t) : (i.stopAnimation(), i.attr(n)))
    }

    function Jd(t, e) {
        if (S(t) && S(e)) {
            var i = !0;
            return f(e, function (e, n) {
                i = i && Jd(t[n], e)
            }), !!i
        }
        return t === e
    }

    function tf(t, e) {
        t[e.get("label.show") ? "show" : "hide"]()
    }

    function ef(t) {
        return {position: t.position.slice(), rotation: t.rotation || 0}
    }

    function nf(t, e, i) {
        var n = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i)
        })
    }

    function rf(t) {
        var e, i = t.get("type"), n = t.getModel(i + "Style");
        return "line" === i ? (e = n.getLineStyle(), e.fill = null) : "shadow" === i && (e = n.getAreaStyle(), e.stroke = null), e
    }

    function af(t, e, i, n, r) {
        var a = i.get("value"), o = sf(a, e.axis, e.ecModel, i.get("seriesDataIndices"), {
                precision: i.get("label.precision"),
                formatter: i.get("label.formatter")
            }), s = i.getModel("label"), l = rx(s.get("padding") || 0), h = s.getFont(), u = Ei(o, h), c = r.position,
            d = u.width + l[1] + l[3], f = u.height + l[0] + l[2], p = r.align;
        "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), of(c, d, f, n);
        var v = s.get("backgroundColor");
        v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: d,
                height: f,
                r: s.get("borderRadius")
            },
            position: c.slice(),
            style: {
                text: o,
                textFont: h,
                textFill: s.getTextColor(),
                textPosition: "inside",
                fill: v,
                stroke: s.get("borderColor") || "transparent",
                lineWidth: s.get("borderWidth") || 0,
                shadowBlur: s.get("shadowBlur"),
                shadowColor: s.get("shadowColor"),
                shadowOffsetX: s.get("shadowOffsetX"),
                shadowOffsetY: s.get("shadowOffsetY")
            },
            z2: 10
        }
    }

    function of(t, e, i, n) {
        var r = n.getWidth(), a = n.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, a) - i, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function sf(t, e, i, n, r) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, {precision: r.precision}), o = r.formatter;
        if (o) {
            var s = {value: hu(e, t), seriesData: []};
            f(n, function (t) {
                var e = i.getSeriesByIndex(t.seriesIndex), n = t.dataIndexInside, r = e && e.getDataParams(n);
                r && s.seriesData.push(r)
            }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
        }
        return a
    }

    function lf(t, e, i) {
        var n = be();
        return Ce(n, n, i.rotation), Te(n, n, i.position), Ea([t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0)], n)
    }

    function hf(t, e, i, n, r, a) {
        var o = Jb.innerTextLayout(i.rotation, 0, i.labelDirection);
        i.labelMargin = r.get("label.margin"), af(e, n, r, a, {
            position: lf(n.axis, t, i),
            align: o.textAlign,
            verticalAlign: o.textVerticalAlign
        })
    }

    function uf(t, e, i) {
        return i = i || 0, {x1: t[i], y1: t[1 - i], x2: e[i], y2: e[1 - i]}
    }

    function cf(t, e, i) {
        return i = i || 0, {x: t[i], y: t[1 - i], width: e[i], height: e[1 - i]}
    }

    function df(t, e) {
        var i = {};
        return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i)
    }

    function ff(t) {
        return "x" === t.dim ? 0 : 1
    }

    function pf(t) {
        var e = "cubic-bezier(0.23, ueditor, 0.32, ueditor)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(IM, function (t) {
            return t + "transition:" + i
        }).join(";")
    }

    function gf(t) {
        var e = [], i = t.get("fontSize"), n = t.getTextColor();
        return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), SM(["decoration", "align"], function (i) {
            var n = t.get(i);
            n && e.push("text-" + i + ":" + n)
        }), e.join(";")
    }

    function vf(t) {
        var e = [], i = t.get("transitionDuration"), n = t.get("backgroundColor"), r = t.getModel("textStyle"),
            a = t.get("padding");
        return i && e.push(pf(i)), n && (tg.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + je(n)), e.push("filter:alpha(opacity=70)"))), SM(["width", "color", "radius"], function (i) {
            var n = "border-" + i, r = MM(n), a = t.get(r);
            null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"))
        }), e.push(gf(r)), null != a && e.push("padding:" + rx(a).join("px ") + "px"), e.join(";") + ";"
    }

    function mf(t, e) {
        if (tg.wxa) return null;
        var i = document.createElement("div"), n = this._zr = e.getZr();
        this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        i.onmouseenter = function () {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
        }, i.onmousemove = function (e) {
            if (e = e || window.event, !r._enterable) {
                var i = n.handler;
                pe(t, e, !0), i.dispatch("mousemove", e)
            }
        }, i.onmouseleave = function () {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
        }
    }

    function yf(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout
    }

    function xf(t) {
        for (var e = t.pop(); t.length;) {
            var i = t.pop();
            i && (Wa.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {formatter: i}), e = new Wa(i, e, e.ecModel))
        }
        return e
    }

    function _f(t, e) {
        return t.dispatchAction || y(e.dispatchAction, e)
    }

    function wf(t, e, i, n, r, a, o) {
        var s = i.getOuterSize(), l = s.width, h = s.height;
        return null != a && (t + l + a > n ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), [t, e]
    }

    function bf(t, e, i, n, r) {
        var a = i.getOuterSize(), o = a.width, s = a.height;
        return t = Math.min(t + o, n) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function Sf(t, e, i) {
        var n = i[0], r = i[1], a = 5, o = 0, s = 0, l = e.width, h = e.height;
        switch (t) {
            case"inside":
                o = e.x + l / 2 - n / 2, s = e.y + h / 2 - r / 2;
                break;
            case"top":
                o = e.x + l / 2 - n / 2, s = e.y - r - a;
                break;
            case"bottom":
                o = e.x + l / 2 - n / 2, s = e.y + h + a;
                break;
            case"left":
                o = e.x - n - a, s = e.y + h / 2 - r / 2;
                break;
            case"right":
                o = e.x + l + a, s = e.y + h / 2 - r / 2
        }
        return [o, s]
    }

    function Mf(t) {
        return "center" === t || "middle" === t
    }

    function If(t) {
        Fn(t, "label", ["show"])
    }

    function Tf(t) {
        return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
    }

    function Cf(t) {
        return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
    }

    function Af(t, e, i, n, r, a) {
        var o = [], s = Ph(e, n), l = s ? e.getCalculationInfo("stackResultDimension") : n, h = zf(e, l, t),
            u = e.indicesOfNearest(l, h)[0];
        o[r] = e.get(i, u), o[a] = e.get(n, u);
        var c = Qa(e.get(n, u));
        return c = Math.min(c, 20), c >= 0 && (o[a] = +o[a].toFixed(c)), o
    }

    function Df(t, e) {
        var i = t.getData(), r = t.coordinateSystem;
        if (e && !Cf(e) && !_(e.coord) && r) {
            var a = r.dimensions, o = kf(e, i, r, t);
            if (e = n(e), e.type && RM[e.type] && o.baseAxis && o.valueAxis) {
                var s = zM(a, o.baseAxis.dim), l = zM(a, o.valueAxis.dim);
                e.coord = RM[e.type](i, o.baseDataDim, o.valueDataDim, s, l), e.value = e.coord[l]
            } else {
                for (var h = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], u = 0; 2 > u; u++) RM[h[u]] && (h[u] = zf(i, i.mapDimension(a[u]), h[u]));
                e.coord = h
            }
        }
        return e
    }

    function kf(t, e, i, n) {
        var r = {};
        return null != t.valueIndex || null != t.valueDim ? (r.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, r.valueAxis = i.getAxis(Pf(n, r.valueDataDim)), r.baseAxis = i.getOtherAxis(r.valueAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim)) : (r.baseAxis = n.getBaseAxis(), r.valueAxis = i.getOtherAxis(r.baseAxis), r.baseDataDim = e.mapDimension(r.baseAxis.dim), r.valueDataDim = e.mapDimension(r.valueAxis.dim)), r
    }

    function Pf(t, e) {
        var i = t.getData(), n = i.dimensions;
        e = i.getDimension(e);
        for (var r = 0; r < n.length; r++) {
            var a = i.getDimensionInfo(n[r]);
            if (a.name === e) return a.coordDim
        }
    }

    function Lf(t, e) {
        return t && t.containData && e.coord && !Tf(e) ? t.containData(e.coord) : !0
    }

    function Of(t, e, i, n) {
        return 2 > n ? t.coord && t.coord[n] : t.value
    }

    function zf(t, e, i) {
        if ("average" === i) {
            var n = 0, r = 0;
            return t.each(e, function (t) {
                isNaN(t) || (n += t, r++)
            }), n / r
        }
        return "median" === i ? t.getMedian(e) : t.getDataExtent(e, !0)["max" === i ? 1 : 0]
    }

    function Ef(t, e, i) {
        var n = e.coordinateSystem;
        t.each(function (r) {
            var a, o = t.getItemModel(r), s = Ua(o.get("x"), i.getWidth()), l = Ua(o.get("y"), i.getHeight());
            if (isNaN(s) || isNaN(l)) {
                if (e.getMarkerPosition) a = e.getMarkerPosition(t.getValues(t.dimensions, r)); else if (n) {
                    var h = t.get(n.dimensions[0], r), u = t.get(n.dimensions[1], r);
                    a = n.dataToPoint([h, u])
                }
            } else a = [s, l];
            isNaN(s) || (a[0] = s), isNaN(l) || (a[1] = l), t.setItemLayout(r, a)
        })
    }

    function Rf(t, e, i) {
        var n;
        n = t ? p(t && t.dimensions, function (t) {
            var i = e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {};
            return s({name: t}, i)
        }) : [{name: "value", type: "float"}];
        var r = new Bw(n, i), a = p(i.get("data"), x(Df, e));
        return t && (a = v(a, x(Lf, t))), r.initData(a, null, t ? Of : function (t) {
            return t.value
        }), r
    }

    function Bf(t) {
        return isNaN(+t.cpx1) || isNaN(+t.cpy1)
    }

    function Nf(t) {
        return "_" + t + "Type"
    }

    function Ff(t, e, i) {
        var n = e.getItemVisual(i, "color"), r = e.getItemVisual(i, t), a = e.getItemVisual(i, t + "Size");
        if (r && "none" !== r) {
            _(a) || (a = [a, a]);
            var o = fu(r, -a[0] / 2, -a[1] / 2, a[0], a[1], n);
            return o.name = t, o
        }
    }

    function Vf(t) {
        var e = new VM({name: "line"});
        return Wf(e.shape, t), e
    }

    function Wf(t, e) {
        var i = e[0], n = e[1], r = e[2];
        t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, r ? (t.cpx1 = r[0], t.cpy1 = r[1]) : (t.cpx1 = 0 / 0, t.cpy1 = 0 / 0)
    }

    function Gf() {
        var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), n = t.childOfName("label");
        if (e || i || !n.ignore) {
            for (var r = 1, a = this.parent; a;) a.scale && (r /= a.scale[0]), a = a.parent;
            var o = t.childOfName("line");
            if (this.__dirty || o.__dirty) {
                var s = o.shape.percent, l = o.pointAt(0), h = o.pointAt(s), u = j([], h, l);
                if (te(u, u), e) {
                    e.attr("position", l);
                    var c = o.tangentAt(0);
                    e.attr("rotation", Math.PI / 2 - Math.atan2(c[1], c[0])), e.attr("scale", [r * s, r * s])
                }
                if (i) {
                    i.attr("position", h);
                    var c = o.tangentAt(1);
                    i.attr("rotation", -Math.PI / 2 - Math.atan2(c[1], c[0])), i.attr("scale", [r * s, r * s])
                }
                if (!n.ignore) {
                    n.attr("position", h);
                    var d, f, p, g = 5 * r;
                    if ("end" === n.__position) d = [u[0] * g + h[0], u[1] * g + h[1]], f = u[0] > .8 ? "left" : u[0] < -.8 ? "right" : "center", p = u[1] > .8 ? "top" : u[1] < -.8 ? "bottom" : "middle"; else if ("middle" === n.__position) {
                        var v = s / 2, c = o.tangentAt(v), m = [c[1], -c[0]], y = o.pointAt(v);
                        m[1] > 0 && (m[0] = -m[0], m[1] = -m[1]), d = [y[0] + m[0] * g, y[1] + m[1] * g], f = "center", p = "bottom";
                        var x = -Math.atan2(c[1], c[0]);
                        h[0] < l[0] && (x = Math.PI + x), n.attr("rotation", x)
                    } else d = [-u[0] * g + l[0], -u[1] * g + l[1]], f = u[0] > .8 ? "right" : u[0] < -.8 ? "left" : "center", p = u[1] > .8 ? "bottom" : u[1] < -.8 ? "top" : "middle";
                    n.attr({
                        style: {textVerticalAlign: n.__verticalAlign || p, textAlign: n.__textAlign || f},
                        position: d,
                        scale: [r, r]
                    })
                }
            }
        }
    }

    function Hf(t, e, i) {
        lv.call(this), this._createLine(t, e, i)
    }

    function Zf(t) {
        this._ctor = t || Hf, this.group = new lv
    }

    function Xf(t, e, i, n) {
        var r = e.getItemLayout(i);
        if (Uf(r)) {
            var a = new t._ctor(e, i, n);
            e.setItemGraphicEl(i, a), t.group.add(a)
        }
    }

    function Yf(t, e, i, n, r, a) {
        var o = e.getItemGraphicEl(n);
        return Uf(i.getItemLayout(r)) ? (o ? o.updateData(i, r, a) : o = new t._ctor(i, r, a), i.setItemGraphicEl(r, o), void t.group.add(o)) : void t.group.remove(o)
    }

    function jf(t) {
        var e = t.hostModel;
        return {
            lineStyle: e.getModel("lineStyle").getLineStyle(),
            hoverLineStyle: e.getModel("emphasis.lineStyle").getLineStyle(),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label")
        }
    }

    function qf(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function Uf(t) {
        return !qf(t[0]) && !qf(t[1])
    }

    function $f(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function Kf(t, e, i, n) {
        var r = 1 - t, a = n.dimensions[t];
        return $f(e[r]) && $f(i[r]) && e[t] === i[t] && n.getAxis(a).containData(e[t])
    }

    function Qf(t, e) {
        if ("cartesian2d" === t.type) {
            var i = e[0].coord, n = e[1].coord;
            if (i && n && (Kf(1, i, n, t) || Kf(0, i, n, t))) return !0
        }
        return Lf(t, e[0]) && Lf(t, e[1])
    }

    function Jf(t, e, i, n, r) {
        var a, o = n.coordinateSystem, s = t.getItemModel(e), l = Ua(s.get("x"), r.getWidth()),
            h = Ua(s.get("y"), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
            if (n.getMarkerPosition) a = n.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                var u = o.dimensions, c = t.get(u[0], e), d = t.get(u[1], e);
                a = o.dataToPoint([c, d])
            }
            if ("cartesian2d" === o.type) {
                var f = o.getAxis("x"), p = o.getAxis("y"), u = o.dimensions;
                $f(t.get(u[0], e)) ? a[0] = f.toGlobalCoord(f.getExtent()[i ? 0 : 1]) : $f(t.get(u[1], e)) && (a[1] = p.toGlobalCoord(p.getExtent()[i ? 0 : 1]))
            }
            isNaN(l) || (a[0] = l), isNaN(h) || (a[1] = h)
        } else a = [l, h];
        t.setItemLayout(e, a)
    }

    function tp(t, e, i) {
        var n;
        n = t ? p(t && t.dimensions, function (t) {
            var i = e.getData().getDimensionInfo(e.getData().mapDimension(t)) || {};
            return s({name: t}, i)
        }) : [{name: "value", type: "float"}];
        var r = new Bw(n, i), a = new Bw(n, i), o = new Bw([], i), l = p(i.get("data"), x(ZM, e, t, i));
        t && (l = v(l, x(Qf, t)));
        var h = t ? Of : function (t) {
            return t.value
        };
        return r.initData(p(l, function (t) {
            return t[0]
        }), null, h), a.initData(p(l, function (t) {
            return t[1]
        }), null, h), o.initData(p(l, function (t) {
            return t[2]
        })), o.hasItemOption = !0, {from: r, to: a, line: o}
    }

    function ep(t) {
        return !isNaN(t) && !isFinite(t)
    }

    function ip(t, e, i) {
        var n = 1 - t;
        return ep(e[n]) && ep(i[n])
    }

    function np(t, e) {
        var i = e.coord[0], n = e.coord[1];
        return "cartesian2d" === t.type && i && n && (ip(1, i, n, t) || ip(0, i, n, t)) ? !0 : Lf(t, {
            coord: i,
            x: e.x0,
            y: e.y0
        }) || Lf(t, {coord: n, x: e.x1, y: e.y1})
    }

    function rp(t, e, i, n, r) {
        var a, o = n.coordinateSystem, s = t.getItemModel(e), l = Ua(s.get(i[0]), r.getWidth()),
            h = Ua(s.get(i[1]), r.getHeight());
        if (isNaN(l) || isNaN(h)) {
            if (n.getMarkerPosition) a = n.getMarkerPosition(t.getValues(i, e)); else {
                var u = t.get(i[0], e), c = t.get(i[1], e), d = [u, c];
                o.clampData && o.clampData(d, d), a = o.dataToPoint(d, !0)
            }
            if ("cartesian2d" === o.type) {
                var f = o.getAxis("x"), p = o.getAxis("y"), u = t.get(i[0], e), c = t.get(i[1], e);
                ep(u) ? a[0] = f.toGlobalCoord(f.getExtent()["x0" === i[0] ? 0 : 1]) : ep(c) && (a[1] = p.toGlobalCoord(p.getExtent()["y0" === i[1] ? 0 : 1]))
            }
            isNaN(l) || (a[0] = l), isNaN(h) || (a[1] = h)
        } else a = [l, h];
        return a
    }

    function ap(t, e, i) {
        var n, r, a = ["x0", "y0", "x1", "y1"];
        t ? (n = p(t && t.dimensions, function (t) {
            var i = e.getData(), n = i.getDimensionInfo(i.mapDimension(t)) || {};
            return s({name: t}, n)
        }), r = new Bw(p(a, function (t, e) {
            return {name: t, type: n[e % 2].type}
        }), i)) : (n = [{name: "value", type: "float"}], r = new Bw(n, i));
        var o = p(i.get("data"), x(XM, e, t, i));
        t && (o = v(o, x(np, t)));
        var l = t ? function (t, e, i, n) {
            return t.coord[Math.floor(n / 2)][n % 2]
        } : function (t) {
            return t.value
        };
        return r.initData(o, null, l), r.hasItemOption = !0, r
    }

    function op(t) {
        var e = t.type, i = {number: "value", time: "time"};
        if (i[e] && (t.axisType = i[e], delete t.type), sp(t), lp(t, "controlPosition")) {
            var n = t.controlStyle || (t.controlStyle = {});
            lp(n, "position") || (n.position = t.controlPosition), "none" !== n.position || lp(n, "show") || (n.show = !1, delete n.position), delete t.controlPosition
        }
        f(t.data || [], function (t) {
            S(t) && !_(t) && (!lp(t, "value") && lp(t, "name") && (t.value = t.name), sp(t))
        })
    }

    function sp(t) {
        var e = t.itemStyle || (t.itemStyle = {}), i = e.emphasis || (e.emphasis = {}), n = t.label || t.label || {},
            r = n.normal || (n.normal = {}), a = {normal: 1, emphasis: 1};
        f(n, function (t, e) {
            a[e] || lp(r, e) || (r[e] = t)
        }), i.label && !lp(n, "emphasis") && (n.emphasis = i.label, delete i.label)
    }

    function lp(t, e) {
        return t.hasOwnProperty(e)
    }

    function hp(t, e) {
        return bo(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()}, t.get("padding"))
    }

    function up(t, e, i, r) {
        var a = Qr(t.get(e).replace(/^path:\/\//, ""), n(r || {}), new gi(i[0], i[1], i[2], i[3]), "center");
        return a
    }

    function cp(t, e, i, n, a, o) {
        var s = e.get("color");
        if (a) a.setColor(s), i.add(a), o && o.onUpdate(a); else {
            var l = t.get("symbol");
            a = fu(l, -1, -1, 2, 2, s), a.setStyle("strokeNoScale", !0), i.add(a), o && o.onCreate(a)
        }
        var h = e.getItemStyle(["color", "symbol", "symbolSize"]);
        a.setStyle(h), n = r({rectHover: !0, z2: 100}, n, !0);
        var u = t.get("symbolSize");
        u = u instanceof Array ? u.slice() : [+u, +u], u[0] /= 2, u[1] /= 2, n.scale = u;
        var c = t.get("symbolOffset");
        if (c) {
            var d = n.position = n.position || [0, 0];
            d[0] += Ua(c[0], u[0]), d[1] += Ua(c[1], u[1])
        }
        var f = t.get("symbolRotate");
        return n.rotation = (f || 0) * Math.PI / 180 || 0, a.attr(n), a.updateTransform(), a
    }

    function dp(t, e, i, n, r) {
        if (!t.dragging) {
            var a = n.getModel("checkpointStyle"), o = i.dataToCoord(n.getData().get(["value"], e));
            r || !a.get("animation", !0) ? t.attr({position: [o, 0]}) : (t.stopAnimation(!0), t.animateTo({position: [o, 0]}, a.get("animationDuration", !0), a.get("animationEasing", !0)))
        }
    }

    function fp(t) {
        return h(iI, t) >= 0
    }

    function pp(t, e) {
        t = t.slice();
        var i = p(t, _o);
        e = (e || []).slice();
        var n = p(e, _o);
        return function (r, a) {
            f(t, function (t, o) {
                for (var s = {name: t, capital: i[o]}, l = 0; l < e.length; l++) s[e[l]] = t + n[l];
                r.call(a, s)
            })
        }
    }

    function gp(t, e, i) {
        function n(t, e) {
            return h(e.nodes, t) >= 0
        }

        function r(t, n) {
            var r = !1;
            return e(function (e) {
                f(i(t, e) || [], function (t) {
                    n.records[e.name][t] && (r = !0)
                })
            }), r
        }

        function a(t, n) {
            n.nodes.push(t), e(function (e) {
                f(i(t, e) || [], function (t) {
                    n.records[e.name][t] = !0
                })
            })
        }

        return function (i) {
            function o(t) {
                !n(t, s) && r(t, s) && (a(t, s), l = !0)
            }

            var s = {nodes: [], records: {}};
            if (e(function (t) {
                s.records[t.name] = {}
            }), !i) return s;
            a(i, s);
            var l;
            do l = !1, t(o); while (l);
            return s
        }
    }

    function vp(t, e, i) {
        var n = [1 / 0, -1 / 0];
        return rI(i, function (t) {
            var i = t.getData();
            i && rI(i.mapDimension(e, !0), function (t) {
                var e = i.getApproximateExtent(t);
                e[0] < n[0] && (n[0] = e[0]), e[1] > n[1] && (n[1] = e[1])
            })
        }), n[1] < n[0] && (n = [0 / 0, 0 / 0]), mp(t, n), n
    }

    function mp(t, e) {
        var i = t.getAxisModel(), n = i.getMin(!0), r = "category" === i.get("type"), a = r && i.getCategories().length;
        null != n && "dataMin" !== n && "function" != typeof n ? e[0] = n : r && (e[0] = a > 0 ? 0 : 0 / 0);
        var o = i.getMax(!0);
        return null != o && "dataMax" !== o && "function" != typeof o ? e[1] = o : r && (e[1] = a > 0 ? a - 1 : 0 / 0), i.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e
    }

    function yp(t, e) {
        var i = t.getAxisModel(), n = t._percentWindow, r = t._valueWindow;
        if (n) {
            var a = to(r, [0, 500]);
            a = Math.min(a, 20);
            var o = e || 0 === n[0] && 100 === n[1];
            i.setRange(o ? null : +r[0].toFixed(a), o ? null : +r[1].toFixed(a))
        }
    }

    function xp(t) {
        var e = t._minMaxSpan = {}, i = t._dataZoomModel;
        rI(["min", "max"], function (n) {
            e[n + "Span"] = i.get(n + "Span");
            var r = i.get(n + "ValueSpan");
            if (null != r && (e[n + "ValueSpan"] = r, r = t.getAxisModel().axis.scale.parse(r), null != r)) {
                var a = t._dataExtent;
                e[n + "Span"] = qa(a[0] + r, a, [0, 100], !0)
            }
        })
    }

    function _p(t) {
        var e = {};
        return sI(["start", "end", "startValue", "endValue", "throttle"], function (i) {
            t.hasOwnProperty(i) && (e[i] = t[i])
        }), e
    }

    function wp(t, e) {
        var i = t._rangePropMode, n = t.get("rangeMode");
        sI([["start", "startValue"], ["end", "endValue"]], function (t, r) {
            var a = null != e[t[0]], o = null != e[t[1]];
            a && !o ? i[r] = "percent" : !a && o ? i[r] = "value" : n ? i[r] = n[r] : a && (i[r] = "percent")
        })
    }

    function bp(t, e) {
        var i = t[e] - t[1 - e];
        return {span: Math.abs(i), sign: i > 0 ? -1 : 0 > i ? 1 : e ? -1 : 1}
    }

    function Sp(t, e) {
        return Math.min(e[1], Math.max(e[0], t))
    }

    function Mp(t) {
        var e = {x: "y", y: "x", radius: "angle", angle: "radius"};
        return e[t]
    }

    function Ip(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize"
    }

    function Tp(t, e) {
        return !!Cp(t)[e]
    }

    function Cp(t) {
        return t[II] || (t[II] = {})
    }

    function Ap(t) {
        this.pointerChecker, this._zr = t, this._opt = {};
        var e = y, i = e(Dp, this), r = e(kp, this), a = e(Pp, this), o = e(Lp, this), l = e(Op, this);
        bg.call(this), this.setPointerChecker = function (t) {
            this.pointerChecker = t
        }, this.enable = function (e, h) {
            this.disable(), this._opt = s(n(h) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }), null == e && (e = !0), (e === !0 || "move" === e || "pan" === e) && (t.on("mousedown", i), t.on("mousemove", r), t.on("mouseup", a)), (e === !0 || "scale" === e || "zoom" === e) && (t.on("mousewheel", o), t.on("pinch", l))
        }, this.disable = function () {
            t.off("mousedown", i), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", o), t.off("pinch", l)
        }, this.dispose = this.disable, this.isDragging = function () {
            return this._dragging
        }, this.isPinching = function () {
            return this._pinching
        }
    }

    function Dp(t) {
        if (!(me(t) || t.target && t.target.draggable)) {
            var e = t.offsetX, i = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, i) && (this._x = e, this._y = i, this._dragging = !0)
        }
    }

    function kp(t) {
        if (!me(t) && Rp("moveOnMouseMove", t, this._opt) && this._dragging && "pinch" !== t.gestureEvent && !Tp(this._zr, "globalPan")) {
            var e = t.offsetX, i = t.offsetY, n = this._x, r = this._y, a = e - n, o = i - r;
            this._x = e, this._y = i, this._opt.preventDefaultMouseMove && Ig(t.event), Ep(this, "pan", "moveOnMouseMove", t, {
                dx: a,
                dy: o,
                oldX: n,
                oldY: r,
                newX: e,
                newY: i
            })
        }
    }

    function Pp(t) {
        me(t) || (this._dragging = !1)
    }

    function Lp(t) {
        var e = Rp("zoomOnMouseWheel", t, this._opt), i = Rp("moveOnMouseWheel", t, this._opt), n = t.wheelDelta,
            r = Math.abs(n), a = t.offsetX, o = t.offsetY;
        if (0 !== n && (e || i)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1, l = n > 0 ? s : 1 / s;
                zp(this, "zoom", "zoomOnMouseWheel", t, {scale: l, originX: a, originY: o})
            }
            if (i) {
                var h = Math.abs(n), u = (n > 0 ? 1 : -1) * (h > 3 ? .4 : h > 1 ? .15 : .05);
                zp(this, "scrollMove", "moveOnMouseWheel", t, {scrollDelta: u, originX: a, originY: o})
            }
        }
    }

    function Op(t) {
        if (!Tp(this._zr, "globalPan")) {
            var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
            zp(this, "zoom", null, t, {scale: e, originX: t.pinchX, originY: t.pinchY})
        }
    }

    function zp(t, e, i, n, r) {
        t.pointerChecker && t.pointerChecker(n, r.originX, r.originY) && (Ig(n.event), Ep(t, e, i, n, r))
    }

    function Ep(t, e, i, n, r) {
        r.isAvailableBehavior = y(Rp, null, i, n), t.trigger(e, r)
    }

    function Rp(t, e, i) {
        var n = i[t];
        return !t || n && (!b(n) || e.event[n + "Key"])
    }

    function Bp(t, e) {
        var i = Vp(t), n = e.dataZoomId, r = e.coordId;
        f(i, function (t) {
            var i = t.dataZoomInfos;
            i[n] && h(e.allCoordIds, r) < 0 && (delete i[n], t.count--)
        }), Gp(i);
        var a = i[r];
        a || (a = i[r] = {
            coordId: r,
            dataZoomInfos: {},
            count: 0
        }, a.controller = Wp(t, a), a.dispatchAction = x(Hp, t)), !a.dataZoomInfos[n] && a.count++, a.dataZoomInfos[n] = e;
        var o = Zp(a.dataZoomInfos);
        a.controller.enable(o.controlType, o.opt), a.controller.setPointerChecker(e.containsPoint), Hs(a, "dispatchAction", e.dataZoomModel.get("throttle", !0), "fixRate")
    }

    function Np(t, e) {
        var i = Vp(t);
        f(i, function (t) {
            t.controller.dispose();
            var i = t.dataZoomInfos;
            i[e] && (delete i[e], t.count--)
        }), Gp(i)
    }

    function Fp(t) {
        return t.type + "\x00_" + t.id
    }

    function Vp(t) {
        var e = t.getZr();
        return e[TI] || (e[TI] = {})
    }

    function Wp(t, e) {
        var i = new Ap(t.getZr());
        return f(["pan", "zoom", "scrollMove"], function (t) {
            i.on(t, function (i) {
                var n = [];
                f(e.dataZoomInfos, function (r) {
                    if (i.isAvailableBehavior(r.dataZoomModel.option)) {
                        var a = (r.getRange || {})[t], o = a && a(e.controller, i);
                        !r.dataZoomModel.get("disabled", !0) && o && n.push({
                            dataZoomId: r.dataZoomId,
                            start: o[0],
                            end: o[1]
                        })
                    }
                }), n.length && e.dispatchAction(n)
            })
        }), i
    }

    function Gp(t) {
        f(t, function (e, i) {
            e.count || (e.controller.dispose(), delete t[i])
        })
    }

    function Hp(t, e) {
        t.dispatchAction({type: "dataZoom", batch: e})
    }

    function Zp(t) {
        var e, i = "type_", n = {type_true: 2, type_move: 1, type_false: 0, type_undefined: -1}, r = !0;
        return f(t, function (t) {
            var a = t.dataZoomModel, o = a.get("disabled", !0) ? !1 : a.get("zoomLock", !0) ? "move" : !0;
            n[i + o] > n[i + e] && (e = o), r &= a.get("preventDefaultMouseMove", !0)
        }), {
            controlType: e,
            opt: {zoomOnMouseWheel: !0, moveOnMouseMove: !0, moveOnMouseWheel: !0, preventDefaultMouseMove: !!r}
        }
    }

    function Xp(t) {
        return function (e, i, n, r) {
            var a = this._range, o = a.slice(), s = e.axisModels[0];
            if (s) {
                var l = t(o, s, e, i, n, r);
                return cI(l, o, [0, 100], "all"), this._range = o, a[0] !== o[0] || a[1] !== o[1] ? o : void 0
            }
        }
    }

    function Yp(t) {
        return PI(t)
    }

    function jp() {
        if (!zI && EI) {
            zI = !0;
            var t = EI.styleSheets;
            t.length < 31 ? EI.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
        }
    }

    function qp(t) {
        return parseInt(t, 10)
    }

    function Up(t, e) {
        jp(), this.root = t, this.storage = e;
        var i = document.createElement("div"), n = document.createElement("div");
        i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
        var r = e.delFromStorage, a = e.addToStorage;
        e.delFromStorage = function (t) {
            r.call(e, t), t && t.onRemove && t.onRemove(n)
        }, e.addToStorage = function (t) {
            t.onAdd && t.onAdd(n), a.call(e, t)
        }, this._firstPaint = !0
    }

    function $p(t) {
        return function () {
            iv('In IE8.0 VML mode painter not support method "' + t + '"')
        }
    }

    var Kp = 2311, Qp = function () {
        return Kp++
    }, Jp = {};
    Jp = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    } : e(navigator.userAgent);
    var tg = Jp, eg = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, ig = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, ng = Object.prototype.toString, rg = Array.prototype, ag = rg.forEach, og = rg.filter, sg = rg.slice,
        lg = rg.map, hg = rg.reduce, ug = {}, cg = function () {
            return ug.createCanvas()
        };
    ug.createCanvas = function () {
        return document.createElement("canvas")
    };
    var dg, fg = "__ec_primitive__";
    B.prototype = {
        constructor: B, get: function (t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null
        }, set: function (t, e) {
            return this.data[t] = e
        }, each: function (t, e) {
            void 0 !== e && (t = y(t, e));
            for (var i in this.data) this.data.hasOwnProperty(i) && t(this.data[i], i)
        }, removeKey: function (t) {
            delete this.data[t]
        }
    };
    var pg = (Object.freeze || Object)({
            $override: i,
            clone: n,
            merge: r,
            mergeAll: a,
            extend: o,
            defaults: s,
            createCanvas: cg,
            getContext: l,
            indexOf: h,
            inherits: u,
            mixin: c,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: v,
            find: m,
            bind: y,
            curry: x,
            isArray: _,
            isFunction: w,
            isString: b,
            isObject: S,
            isBuiltInObject: M,
            isTypedArray: I,
            isDom: T,
            eqNaN: C,
            retrieve: A,
            retrieve2: D,
            retrieve3: k,
            slice: P,
            normalizeCssArray: L,
            assert: O,
            trim: z,
            setAsPrimitive: E,
            isPrimitive: R,
            createHashMap: N,
            concatArray: F,
            noop: V
        }), gg = "undefined" == typeof Float32Array ? Array : Float32Array, vg = q, mg = U, yg = ee, xg = ie,
        _g = (Object.freeze || Object)({
            create: W,
            copy: G,
            clone: H,
            set: Z,
            add: X,
            scaleAndAdd: Y,
            sub: j,
            len: q,
            length: vg,
            lenSquare: U,
            lengthSquare: mg,
            mul: $,
            div: K,
            dot: Q,
            scale: J,
            normalize: te,
            distance: ee,
            dist: yg,
            distanceSquare: ie,
            distSquare: xg,
            negate: ne,
            lerp: re,
            applyTransform: ae,
            min: oe,
            max: se
        });
    le.prototype = {
        constructor: le, _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(he(e, t), "dragstart", t.event))
        }, _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX, n = t.offsetY, r = i - this._x, a = n - this._y;
                this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(he(e, t), "drag", t.event);
                var o = this.findHover(i, n, e).target, s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(he(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(he(o, t), "dragenter", t.event))
            }
        }, _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(he(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(he(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var wg = Array.prototype.slice, bg = function (t) {
        this._$handlers = {}, this._$eventProcessor = t
    };
    bg.prototype = {
        constructor: bg, one: function (t, e, i, n) {
            var r = this._$handlers;
            if ("function" == typeof e && (n = i, i = e, e = null), !i || !t) return this;
            e = ue(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === i) return this;
            return r[t].push({h: i, one: !0, query: e, ctx: n || this}), this
        }, on: function (t, e, i, n) {
            var r = this._$handlers;
            if ("function" == typeof e && (n = i, i = e, e = null), !i || !t) return this;
            e = ue(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === i) return this;
            return r[t].push({h: i, one: !1, query: e, ctx: n || this}), this
        }, isSilent: function (t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        }, off: function (t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], r = 0, a = i[t].length; a > r; r++) i[t][r].h !== e && n.push(i[t][r]);
                    i[t] = n
                }
                i[t] && 0 === i[t].length && delete i[t]
            } else delete i[t];
            return this
        }, trigger: function (t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 3 && (n = wg.call(n, 1));
                for (var a = e.length, o = 0; a > o;) {
                    var s = e[o];
                    if (i && i.filter && null != s.query && !i.filter(t, s.query)) o++; else {
                        switch (r) {
                            case 1:
                                s.h.call(s.ctx);
                                break;
                            case 2:
                                s.h.call(s.ctx, n[1]);
                                break;
                            case 3:
                                s.h.call(s.ctx, n[1], n[2]);
                                break;
                            default:
                                s.h.apply(s.ctx, n)
                        }
                        s.one ? (e.splice(o, 1), a--) : o++
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }, triggerWithContext: function (t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 4 && (n = wg.call(n, 1, n.length - 1));
                for (var a = n[n.length - 1], o = e.length, s = 0; o > s;) {
                    var l = e[s];
                    if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++; else {
                        switch (r) {
                            case 1:
                                l.h.call(a);
                                break;
                            case 2:
                                l.h.call(a, n[1]);
                                break;
                            case 3:
                                l.h.call(a, n[1], n[2]);
                                break;
                            default:
                                l.h.apply(a, n)
                        }
                        l.one ? (e.splice(s, 1), o--) : s++
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this
        }
    };
    var Sg = "undefined" != typeof window && !!window.addEventListener,
        Mg = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ig = Sg ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, Tg = "silent";
    _e.prototype.dispose = function () {
    };
    var Cg = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Ag = function (t, e, i, n) {
            bg.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new _e, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(i)
        };
    Ag.prototype = {
        constructor: Ag, setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (f(Cg, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        }, mousemove: function (t) {
            var e = t.zrX, i = t.zrY, n = this._hovered, r = n.target;
            r && !r.__zr && (n = this.findHover(n.x, n.y), r = n.target);
            var a = this._hovered = this.findHover(e, i), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(n, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
        }, mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, i = t.toElement || t.relatedTarget;
            do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
            !e && this.trigger("globalout", {event: t})
        }, resize: function () {
            this._hovered = {}
        }, dispatch: function (t, e) {
            var i = this[t];
            i && i.call(this, e)
        }, dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        }, setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        }, dispatchToElement: function (t, e, i) {
            t = t || {};
            var n = t.target;
            if (!n || !n.silent) {
                for (var r = "on" + e, a = ye(e, t, i); n && (n[r] && (a.cancelBubble = n[r].call(n, a)), n.trigger(e, a), n = n.parent, !a.cancelBubble);) ;
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }
        }, findHover: function (t, e, i) {
            for (var n = this.storage.getDisplayList(), r = {x: t, y: e}, a = n.length - 1; a >= 0; a--) {
                var o;
                if (n[a] !== i && !n[a].ignore && (o = we(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), o !== Tg)) {
                    r.target = n[a];
                    break
                }
            }
            return r
        }
    }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Ag.prototype[t] = function (e) {
            var i = this.findHover(e.zrX, e.zrY), n = i.target;
            if ("mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n; else if ("mouseup" === t) this._upEl = n; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || yg(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(i, t, e)
        }
    }), c(Ag, bg), c(Ag, le);
    var Dg = "undefined" == typeof Float32Array ? Array : Float32Array, kg = (Object.freeze || Object)({
        create: be,
        identity: Se,
        copy: Me,
        mul: Ie,
        translate: Te,
        rotate: Ce,
        scale: Ae,
        invert: De,
        clone: ke
    }), Pg = Se, Lg = 5e-5, Og = function (t) {
        t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    }, zg = Og.prototype;
    zg.transform = null, zg.needLocalTransform = function () {
        return Pe(this.rotation) || Pe(this.position[0]) || Pe(this.position[1]) || Pe(this.scale[0] - 1) || Pe(this.scale[1] - 1)
    };
    var Eg = [];
    zg.updateTransform = function () {
        var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
        if (!i && !e) return void (n && Pg(n));
        n = n || be(), i ? this.getLocalTransform(n) : Pg(n), e && (i ? Ie(n, t.transform, n) : Me(n, t.transform)), this.transform = n;
        var r = this.globalScaleRatio;
        if (null != r && 1 !== r) {
            this.getGlobalScale(Eg);
            var a = Eg[0] < 0 ? -1 : 1, o = Eg[1] < 0 ? -1 : 1, s = ((Eg[0] - a) * r + a) / Eg[0] || 0,
                l = ((Eg[1] - o) * r + o) / Eg[1] || 0;
            n[0] *= s, n[1] *= s, n[2] *= l, n[3] *= l
        }
        this.invTransform = this.invTransform || be(), De(this.invTransform, n)
    }, zg.getLocalTransform = function (t) {
        return Og.getLocalTransform(this, t)
    }, zg.setTransform = function (t) {
        var e = this.transform, i = t.dpr || 1;
        e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }, zg.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Rg = [], Bg = be();
    zg.setLocalTransform = function (t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = this.position, r = this.scale;
            Pe(e - 1) && (e = Math.sqrt(e)), Pe(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
        }
    }, zg.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (Ie(Rg, t.invTransform, e), e = Rg);
            var i = this.origin;
            i && (i[0] || i[1]) && (Bg[4] = i[0], Bg[5] = i[1], Ie(Rg, e, Bg), Rg[4] -= i[0], Rg[5] -= i[1], e = Rg), this.setLocalTransform(e)
        }
    }, zg.getGlobalScale = function (t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
    }, zg.transformCoordToLocal = function (t, e) {
        var i = [t, e], n = this.invTransform;
        return n && ae(i, i, n), i
    }, zg.transformCoordToGlobal = function (t, e) {
        var i = [t, e], n = this.transform;
        return n && ae(i, i, n), i
    }, Og.getLocalTransform = function (t, e) {
        e = e || [], Pg(e);
        var i = t.origin, n = t.scale || [1, 1], r = t.rotation || 0, a = t.position || [0, 0];
        return i && (e[4] -= i[0], e[5] -= i[1]), Ae(e, e, n), r && Ce(e, e, r), i && (e[4] += i[0], e[5] += i[1]), e[4] += a[0], e[5] += a[1], e
    };
    var Ng = {
        linear: function (t) {
            return t
        }, quadraticIn: function (t) {
            return t * t
        }, quadraticOut: function (t) {
            return t * (2 - t)
        }, quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        }, cubicIn: function (t) {
            return t * t * t
        }, cubicOut: function (t) {
            return --t * t * t + 1
        }, cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        }, quarticIn: function (t) {
            return t * t * t * t
        }, quarticOut: function (t) {
            return 1 - --t * t * t * t
        }, quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        }, quinticIn: function (t) {
            return t * t * t * t * t
        }, quinticOut: function (t) {
            return --t * t * t * t * t + 1
        }, quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        }, sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        }, sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        }, exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        }, exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        }, exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
        }, circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        }, circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        }, elasticIn: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n)))
        }, elasticOut: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / n) + 1)
        }, elasticInOut: function (t) {
            var e, i = .1, n = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / n) * .5 + 1)
        }, backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        }, backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        }, bounceIn: function (t) {
            return 1 - Ng.bounceOut(1 - t)
        }, bounceOut: function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }, bounceInOut: function (t) {
            return .5 > t ? .5 * Ng.bounceIn(2 * t) : .5 * Ng.bounceOut(2 * t - 1) + .5
        }
    };
    Le.prototype = {
        constructor: Le, step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
            var i = (t - this._startTime - this._pausedTime) / this._life;
            if (!(0 > i)) {
                i = Math.min(i, 1);
                var n = this.easing, r = "string" == typeof n ? Ng[n] : n, a = "function" == typeof r ? r(i) : i;
                return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
            }
        }, restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        }, fire: function (t, e) {
            t = "on" + t, this[t] && this[t](this._target, e)
        }, pause: function () {
            this._paused = !0
        }, resume: function () {
            this._paused = !1
        }
    };
    var Fg = function () {
        this.head = null, this.tail = null, this._len = 0
    }, Vg = Fg.prototype;
    Vg.insert = function (t) {
        var e = new Wg(t);
        return this.insertEntry(e), e
    }, Vg.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, Vg.remove = function (t) {
        var e = t.prev, i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, Vg.len = function () {
        return this._len
    }, Vg.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var Wg = function (t) {
        this.value = t, this.next, this.prev
    }, Gg = function (t) {
        this._list = new Fg, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    }, Hg = Gg.prototype;
    Hg.put = function (t, e) {
        var i = this._list, n = this._map, r = null;
        if (null == n[t]) {
            var a = i.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = i.head;
                i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s
            }
            o ? o.value = e : o = new Wg(e), o.key = t, i.insertEntry(o), n[t] = o
        }
        return r
    }, Hg.get = function (t) {
        var e = this._map[t], i = this._list;
        return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
    }, Hg.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Zg = {
        transparent: [0, 0, 0, 0],
        aliceblue: [240, 248, 255, 1],
        antiquewhite: [250, 235, 215, 1],
        aqua: [0, 255, 255, 1],
        aquamarine: [127, 255, 212, 1],
        azure: [240, 255, 255, 1],
        beige: [245, 245, 220, 1],
        bisque: [255, 228, 196, 1],
        black: [0, 0, 0, 1],
        blanchedalmond: [255, 235, 205, 1],
        blue: [0, 0, 255, 1],
        blueviolet: [138, 43, 226, 1],
        brown: [165, 42, 42, 1],
        burlywood: [222, 184, 135, 1],
        cadetblue: [95, 158, 160, 1],
        chartreuse: [127, 255, 0, 1],
        chocolate: [210, 105, 30, 1],
        coral: [255, 127, 80, 1],
        cornflowerblue: [100, 149, 237, 1],
        cornsilk: [255, 248, 220, 1],
        crimson: [220, 20, 60, 1],
        cyan: [0, 255, 255, 1],
        darkblue: [0, 0, 139, 1],
        darkcyan: [0, 139, 139, 1],
        darkgoldenrod: [184, 134, 11, 1],
        darkgray: [169, 169, 169, 1],
        darkgreen: [0, 100, 0, 1],
        darkgrey: [169, 169, 169, 1],
        darkkhaki: [189, 183, 107, 1],
        darkmagenta: [139, 0, 139, 1],
        darkolivegreen: [85, 107, 47, 1],
        darkorange: [255, 140, 0, 1],
        darkorchid: [153, 50, 204, 1],
        darkred: [139, 0, 0, 1],
        darksalmon: [233, 150, 122, 1],
        darkseagreen: [143, 188, 143, 1],
        darkslateblue: [72, 61, 139, 1],
        darkslategray: [47, 79, 79, 1],
        darkslategrey: [47, 79, 79, 1],
        darkturquoise: [0, 206, 209, 1],
        darkviolet: [148, 0, 211, 1],
        deeppink: [255, 20, 147, 1],
        deepskyblue: [0, 191, 255, 1],
        dimgray: [105, 105, 105, 1],
        dimgrey: [105, 105, 105, 1],
        dodgerblue: [30, 144, 255, 1],
        firebrick: [178, 34, 34, 1],
        floralwhite: [255, 250, 240, 1],
        forestgreen: [34, 139, 34, 1],
        fuchsia: [255, 0, 255, 1],
        gainsboro: [220, 220, 220, 1],
        ghostwhite: [248, 248, 255, 1],
        gold: [255, 215, 0, 1],
        goldenrod: [218, 165, 32, 1],
        gray: [128, 128, 128, 1],
        green: [0, 128, 0, 1],
        greenyellow: [173, 255, 47, 1],
        grey: [128, 128, 128, 1],
        honeydew: [240, 255, 240, 1],
        hotpink: [255, 105, 180, 1],
        indianred: [205, 92, 92, 1],
        indigo: [75, 0, 130, 1],
        ivory: [255, 255, 240, 1],
        khaki: [240, 230, 140, 1],
        lavender: [230, 230, 250, 1],
        lavenderblush: [255, 240, 245, 1],
        lawngreen: [124, 252, 0, 1],
        lemonchiffon: [255, 250, 205, 1],
        lightblue: [173, 216, 230, 1],
        lightcoral: [240, 128, 128, 1],
        lightcyan: [224, 255, 255, 1],
        lightgoldenrodyellow: [250, 250, 210, 1],
        lightgray: [211, 211, 211, 1],
        lightgreen: [144, 238, 144, 1],
        lightgrey: [211, 211, 211, 1],
        lightpink: [255, 182, 193, 1],
        lightsalmon: [255, 160, 122, 1],
        lightseagreen: [32, 178, 170, 1],
        lightskyblue: [135, 206, 250, 1],
        lightslategray: [119, 136, 153, 1],
        lightslategrey: [119, 136, 153, 1],
        lightsteelblue: [176, 196, 222, 1],
        lightyellow: [255, 255, 224, 1],
        lime: [0, 255, 0, 1],
        limegreen: [50, 205, 50, 1],
        linen: [250, 240, 230, 1],
        magenta: [255, 0, 255, 1],
        maroon: [128, 0, 0, 1],
        mediumaquamarine: [102, 205, 170, 1],
        mediumblue: [0, 0, 205, 1],
        mediumorchid: [186, 85, 211, 1],
        mediumpurple: [147, 112, 219, 1],
        mediumseagreen: [60, 179, 113, 1],
        mediumslateblue: [123, 104, 238, 1],
        mediumspringgreen: [0, 250, 154, 1],
        mediumturquoise: [72, 209, 204, 1],
        mediumvioletred: [199, 21, 133, 1],
        midnightblue: [25, 25, 112, 1],
        mintcream: [245, 255, 250, 1],
        mistyrose: [255, 228, 225, 1],
        moccasin: [255, 228, 181, 1],
        navajowhite: [255, 222, 173, 1],
        navy: [0, 0, 128, 1],
        oldlace: [253, 245, 230, 1],
        olive: [128, 128, 0, 1],
        olivedrab: [107, 142, 35, 1],
        orange: [255, 165, 0, 1],
        orangered: [255, 69, 0, 1],
        orchid: [218, 112, 214, 1],
        palegoldenrod: [238, 232, 170, 1],
        palegreen: [152, 251, 152, 1],
        paleturquoise: [175, 238, 238, 1],
        palevioletred: [219, 112, 147, 1],
        papayawhip: [255, 239, 213, 1],
        peachpuff: [255, 218, 185, 1],
        peru: [205, 133, 63, 1],
        pink: [255, 192, 203, 1],
        plum: [221, 160, 221, 1],
        powderblue: [176, 224, 230, 1],
        purple: [128, 0, 128, 1],
        red: [255, 0, 0, 1],
        rosybrown: [188, 143, 143, 1],
        royalblue: [65, 105, 225, 1],
        saddlebrown: [139, 69, 19, 1],
        salmon: [250, 128, 114, 1],
        sandybrown: [244, 164, 96, 1],
        seagreen: [46, 139, 87, 1],
        seashell: [255, 245, 238, 1],
        sienna: [160, 82, 45, 1],
        silver: [192, 192, 192, 1],
        skyblue: [135, 206, 235, 1],
        slateblue: [106, 90, 205, 1],
        slategray: [112, 128, 144, 1],
        slategrey: [112, 128, 144, 1],
        snow: [255, 250, 250, 1],
        springgreen: [0, 255, 127, 1],
        steelblue: [70, 130, 180, 1],
        tan: [210, 180, 140, 1],
        teal: [0, 128, 128, 1],
        thistle: [216, 191, 216, 1],
        tomato: [255, 99, 71, 1],
        turquoise: [64, 224, 208, 1],
        violet: [238, 130, 238, 1],
        wheat: [245, 222, 179, 1],
        white: [255, 255, 255, 1],
        whitesmoke: [245, 245, 245, 1],
        yellow: [255, 255, 0, 1],
        yellowgreen: [154, 205, 50, 1]
    }, Xg = new Gg(20), Yg = null, jg = qe, qg = Ue, Ug = (Object.freeze || Object)({
        parse: He,
        lift: Ye,
        toHex: je,
        fastLerp: qe,
        fastMapToColor: jg,
        lerp: Ue,
        mapToColor: qg,
        modifyHSL: $e,
        modifyAlpha: Ke,
        stringify: Qe
    }), $g = Array.prototype.slice, Kg = function (t, e, i, n) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || Je, this._setter = n || ti, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
    Kg.prototype = {
        when: function (t, e) {
            var i = this._tracks;
            for (var n in e) if (e.hasOwnProperty(n)) {
                if (!i[n]) {
                    i[n] = [];
                    var r = this._getter(this._target, n);
                    if (null == r) continue;
                    0 !== t && i[n].push({time: 0, value: li(r)})
                }
                i[n].push({time: t, value: e[n]})
            }
            return this
        }, during: function (t) {
            return this._onframeList.push(t), this
        }, pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        }, resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        }, isPaused: function () {
            return !!this._paused
        }, _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; e > i; i++) t[i].call(this)
        }, start: function (t, e) {
            var i, n = this, r = 0, a = function () {
                r--, r || n._doneCallback()
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = ci(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), i = s)
            }
            if (i) {
                var l = i.onframe;
                i.onframe = function (t, e) {
                    l(t, e);
                    for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
                }
            }
            return r || this._doneCallback(), this
        }, stop: function (t) {
            for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                var r = e[n];
                t && r.onframe(this._target, 1), i && i.removeClip(r)
            }
            e.length = 0
        }, delay: function (t) {
            return this._delay = t, this
        }, done: function (t) {
            return t && this._doneList.push(t), this
        }, getClips: function () {
            return this._clipList
        }
    };
    var Qg = 1;
    "undefined" != typeof window && (Qg = Math.max(window.devicePixelRatio || 1, 1));
    var Jg = 0, tv = Qg, ev = function () {
    };
    1 === Jg ? ev = function () {
        for (var t in arguments) throw new Error(arguments[t])
    } : Jg > 1 && (ev = function () {
        for (var t in arguments) console.log(arguments[t])
    });
    var iv = ev, nv = function () {
        this.animators = []
    };
    nv.prototype = {
        constructor: nv, animate: function (t, e) {
            var i, n = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split("."), s = r;
                n = "shape" === o[0];
                for (var l = 0, u = o.length; u > l; l++) s && (s = s[o[l]]);
                s && (i = s)
            } else i = r;
            if (!i) return void iv('Property "' + t + '" is not existed in element ' + r.id);
            var c = r.animators, d = new Kg(i, e);
            return d.during(function () {
                r.dirty(n)
            }).done(function () {
                c.splice(h(c, d), 1)
            }), c.push(d), a && a.animation.addAnimator(d), d
        }, stopAnimation: function (t) {
            for (var e = this.animators, i = e.length, n = 0; i > n; n++) e[n].stop(t);
            return e.length = 0, this
        }, animateTo: function (t, e, i, n, r, a) {
            di(this, t, e, i, n, r, a)
        }, animateFrom: function (t, e, i, n, r, a) {
            di(this, t, e, i, n, r, a, !0)
        }
    };
    var rv = function (t) {
        Og.call(this, t), bg.call(this, t), nv.call(this, t), this.id = t.id || Qp()
    };
    rv.prototype = {
        type: "element", name: "", __zr: null, ignore: !1, clipPath: null, isGroup: !1, drift: function (t, e) {
            switch (this.draggable) {
                case"horizontal":
                    e = 0;
                    break;
                case"vertical":
                    t = 0
            }
            var i = this.transform;
            i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
        }, beforeUpdate: function () {
        }, afterUpdate: function () {
        }, update: function () {
            this.updateTransform()
        }, traverse: function () {
        }, attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                }
            } else this[t] = e
        }, hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        }, show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        }, attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (S(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this
        }, setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        }, removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        }, addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        }, removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, c(rv, nv), c(rv, Og), c(rv, bg);
    var av = ae, ov = Math.min, sv = Math.max;
    gi.prototype = {
        constructor: gi, union: function (t) {
            var e = ov(t.x, this.x), i = ov(t.y, this.y);
            this.width = sv(t.x + t.width, this.x + this.width) - e, this.height = sv(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
        }, applyTransform: function () {
            var t = [], e = [], i = [], n = [];
            return function (r) {
                if (r) {
                    t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, av(t, t, r), av(e, e, r), av(i, i, r), av(n, n, r), this.x = ov(t[0], e[0], i[0], n[0]), this.y = ov(t[1], e[1], i[1], n[1]);
                    var a = sv(t[0], e[0], i[0], n[0]), o = sv(t[1], e[1], i[1], n[1]);
                    this.width = a - this.x, this.height = o - this.y
                }
            }
        }(), calculateTransform: function (t) {
            var e = this, i = t.width / e.width, n = t.height / e.height, r = be();
            return Te(r, r, [-e.x, -e.y]), Ae(r, r, [i, n]), Te(r, r, [t.x, t.y]), r
        }, intersect: function (t) {
            if (!t) return !1;
            t instanceof gi || (t = gi.create(t));
            var e = this, i = e.x, n = e.x + e.width, r = e.y, a = e.y + e.height, o = t.x, s = t.x + t.width, l = t.y,
                h = t.y + t.height;
            return !(o > n || i > s || l > a || r > h)
        }, contain: function (t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
        }, clone: function () {
            return new gi(this.x, this.y, this.width, this.height)
        }, copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        }, plain: function () {
            return {x: this.x, y: this.y, width: this.width, height: this.height}
        }
    }, gi.create = function (t) {
        return new gi(t.x, t.y, t.width, t.height)
    };
    var lv = function (t) {
        t = t || {}, rv.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    lv.prototype = {
        constructor: lv, isGroup: !0, type: "group", silent: !1, children: function () {
            return this._children.slice()
        }, childAt: function (t) {
            return this._children[t]
        }, childOfName: function (t) {
            for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i]
        }, childCount: function () {
            return this._children.length
        }, add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        }, addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children, n = i.indexOf(e);
                n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
            }
            return this
        }, _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof lv && t.addChildrenToStorage(e)), i && i.refresh()
        }, remove: function (t) {
            var e = this.__zr, i = this.__storage, n = this._children, r = h(n, t);
            return 0 > r ? this : (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof lv && t.delChildrenFromStorage(i)), e && e.refresh(), this)
        }, removeAll: function () {
            var t, e, i = this._children, n = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof lv && t.delChildrenFromStorage(n)), t.parent = null;
            return i.length = 0, this
        }, eachChild: function (t, e) {
            for (var i = this._children, n = 0; n < i.length; n++) {
                var r = i[n];
                t.call(e, r, n)
            }
            return this
        }, traverse: function (t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var n = this._children[i];
                t.call(e, n), "group" === n.type && n.traverse(t, e)
            }
            return this
        }, addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof lv && i.addChildrenToStorage(t)
            }
        }, delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof lv && i.delChildrenFromStorage(t)
            }
        }, dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        }, getBoundingRect: function (t) {
            for (var e = null, i = new gi(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                var o = n[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), l = o.getLocalTransform(r);
                    l ? (i.copy(s), i.applyTransform(l), e = e || i.clone(), e.union(i)) : (e = e || s.clone(), e.union(s))
                }
            }
            return e || i
        }
    }, u(lv, rv);
    var hv = 32, uv = 7, cv = function () {
        this._roots = [], this._displayList = [], this._displayListLen = 0
    };
    cv.prototype = {
        constructor: cv, traverse: function (t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
        }, getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        }, updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, n = 0, r = e.length; r > n; n++) this._updateAndAddDisplayable(e[n], null, t);
            i.length = this._displayListLen, tg.canvasSupported && Si(i, Mi)
        }, _updateAndAddDisplayable: function (t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var n = t.clipPath;
                if (n) {
                    e = e ? e.slice() : [];
                    for (var r = n, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        }, addRoot: function (t) {
            t.__storage !== this && (t instanceof lv && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        }, delRoot: function (t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var i = this._roots[e];
                    i instanceof lv && i.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
            }
            if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]); else {
                var r = h(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof lv && t.delChildrenFromStorage(this))
            }
        }, addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        }, delFromStorage: function (t) {
            return t && (t.__storage = null), this
        }, dispose: function () {
            this._renderList = this._roots = null
        }, displayableSortFunc: Mi
    };
    var dv = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        }, fv = function (t, e, i) {
            return dv.hasOwnProperty(e) ? i *= t.dpr : i
        },
        pv = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
        gv = function (t) {
            this.extendFrom(t, !1)
        };
    gv.prototype = {
        constructor: gv,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, i) {
            for (var n = this, r = i && i.style, a = !r, o = 0; o < pv.length; o++) {
                var s = pv[o], l = s[0];
                (a || n[l] !== r[l]) && (t[l] = fv(t, l, n[l] || s[1]))
            }
            if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                var h = n.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t) for (var i in t) !t.hasOwnProperty(i) || e !== !0 && (e === !1 ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, i) {
            for (var n = "radial" === e.type ? Ti : Ii, r = n(t, e, i), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
            return r
        }
    };
    for (var vv = gv.prototype, mv = 0; mv < pv.length; mv++) {
        var yv = pv[mv];
        yv[0] in vv || (vv[yv[0]] = yv[1])
    }
    gv.getGradient = vv.getGradient;
    var xv = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    xv.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var _v = function (t, e, i) {
        var n;
        i = i || tv, "string" == typeof t ? n = Ai(t, e, i) : S(t) && (n = t, t = n.id), this.id = t, this.dom = n;
        var r = n.style;
        r && (n.onselectstart = Ci, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
    };
    _v.prototype = {
        constructor: _v,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = Ai("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var i = this.dpr, n = this.dom, r = n.style, a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i))
        },
        clear: function (t, e) {
            var i = this.dom, n = this.ctx, r = i.width, a = i.height, e = e || this.clearColor,
                o = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, r / l, a / l)), n.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || gv.getGradient(n, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = h) : e.image && (h = xv.prototype.getCanvasPattern.call(e, n)), n.save(), n.fillStyle = h || e, n.fillRect(0, 0, r, a), n.restore()
            }
            if (o) {
                var u = this.domBack;
                n.save(), n.globalAlpha = s, n.drawImage(u, 0, 0, r, a), n.restore()
            }
        }
    };
    var wv = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        }, bv = new Gg(50), Sv = {}, Mv = 0, Iv = 5e3, Tv = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Cv = "12px sans-serif",
        Av = {};
    Av.measureText = function (t, e) {
        var i = l();
        return i.font = e || Cv, i.measureText(t)
    };
    var Dv = {left: 1, right: 1, center: 1}, kv = {top: 1, bottom: 1, middle: 1},
        Pv = [["textShadowBlur", "shadowBlur", 0], ["textShadowOffsetX", "shadowOffsetX", 0], ["textShadowOffsetY", "shadowOffsetY", 0], ["textShadowColor", "shadowColor", "transparent"]],
        Lv = new gi, Ov = function () {
        };
    Ov.prototype = {
        constructor: Ov, drawRectText: function (t, e) {
            var i = this.style;
            e = i.textRect || e, this.__dirty && Qi(i, !0);
            var n = i.text;
            if (null != n && (n += ""), vn(n, i)) {
                t.save();
                var r = this.transform;
                i.transformText ? this.setTransform(t) : r && (Lv.copy(e), Lv.applyTransform(r), e = Lv), tn(this, t, n, i, e), t.restore()
            }
        }
    }, mn.prototype = {
        constructor: mn,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function () {
        },
        afterBrush: function () {
        },
        brush: function () {
        },
        getBoundingRect: function () {
        },
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
            return n.contain(i[0], i[1])
        },
        dirty: function () {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? rv.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new gv(t, this), this.dirty(!1), this
        }
    }, u(mn, rv), c(mn, Ov), yn.prototype = {
        constructor: yn, type: "image", brush: function (t, e) {
            var i = this.style, n = i.image;
            i.bind(t, this, e);
            var r = this._image = ki(n, this._image, this, this.onload);
            if (r && Li(r)) {
                var a = i.x || 0, o = i.y || 0, s = i.width, l = i.height, h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var u = i.sx || 0, c = i.sy || 0;
                    t.drawImage(r, u, c, i.sWidth, i.sHeight, a, o, s, l)
                } else if (i.sx && i.sy) {
                    var u = i.sx, c = i.sy, d = s - u, f = l - c;
                    t.drawImage(r, u, c, d, f, a, o, s, l)
                } else t.drawImage(r, a, o, s, l);
                null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        }, getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new gi(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, u(yn, mn);
    var zv = 1e5, Ev = 314159, Rv = .01, Bv = .001, Nv = new gi(0, 0, 0, 0), Fv = new gi(0, 0, 0, 0),
        Vv = function (t, e, i) {
            this.type = "canvas";
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = i = o({}, i || {}), this.dpr = i.devicePixelRatio || tv, this._singleCanvas = n, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var a = this._zlevelList = [], s = this._layers = {};
            if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
                var l = t.width, h = t.height;
                null != i.width && (l = i.width), null != i.height && (h = i.height), this.dpr = i.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
                var u = new _v(t, this, this.dpr);
                u.__builtin__ = !0, u.initContext(), s[Ev] = u, u.zlevel = Ev, a.push(Ev), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = Mn(this._width, this._height);
                t.appendChild(c)
            }
            this._hoverlayer = null, this._hoverElements = []
        };
    Vv.prototype = {
        constructor: Vv, getType: function () {
            return "canvas"
        }, isSingleCanvas: function () {
            return this._singleCanvas
        }, getViewportRoot: function () {
            return this._domRoot
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
        }, refresh: function (t) {
            var e = this.storage.getDisplayList(!0), i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var n = 0; n < i.length; n++) {
                var r = i[n], a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === n ? this._backgroundColor : null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(), this
        }, addHover: function (t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({style: t.style, shape: t.shape, z: t.z, z2: t.z2, silent: t.silent});
                return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
            }
        }, removeHover: function (t) {
            var e = t.__hoverMir, i = this._hoverElements, n = h(i, e);
            n >= 0 && i.splice(n, 1), t.__hoverMir = null
        }, clearHover: function () {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var i = t[e].__from;
                i && (i.__hoverMir = null)
            }
            t.length = 0
        }, refreshHover: function () {
            var t = this._hoverElements, e = t.length, i = this._hoverlayer;
            if (i && i.clear(), e) {
                Si(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(zv));
                var n = {};
                i.ctx.save();
                for (var r = 0; e > r;) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                i.ctx.restore()
            }
        }, getHoverLayer: function () {
            return this.getLayer(zv)
        }, _paintList: function (t, e, i) {
            if (this._redrawId === i) {
                e = e || !1, this._updateLayerStatus(t);
                var n = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                    var r = this;
                    wv(function () {
                        r._paintList(t, e, i)
                    })
                }
            }
        }, _compositeManually: function () {
            var t = this.getLayer(Ev).ctx, e = this._domRoot.width, i = this._domRoot.height;
            t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
                n.virtual && t.drawImage(n.dom, 0, 0, e, i)
            })
        }, _doPaintList: function (t, e) {
            for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                var r = this._zlevelList[n], a = this._layers[r];
                a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && i.push(a)
            }
            for (var o = !0, s = 0; s < i.length; s++) {
                var a = i[s], l = a.ctx, h = {};
                l.save();
                var u = e ? a.__startIndex : a.__drawIndex, c = !e && a.incremental && Date.now, d = c && Date.now(),
                    p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (a.__startIndex === a.__endIndex) a.clear(!1, p); else if (u === a.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || a.clear(!1, p)
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -ueditor"), u = a.__startIndex);
                for (var v = u; v < a.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, a, e, h), m.__dirty = m.__dirtyText = !1, c) {
                        var y = Date.now() - d;
                        if (y > 15) break
                    }
                }
                a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), l.restore()
            }
            return tg.wxa && f(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), o
        }, _doPaintEl: function (t, e, i, n) {
            var r = e.ctx, a = t.transform;
            if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && wn(t, this._width, this._height))) {
                var o = t.__clipPaths;
                (!n.prevElClipPaths || bn(o, n.prevElClipPaths)) && (n.prevElClipPaths && (e.ctx.restore(), n.prevElClipPaths = null, n.prevEl = null), o && (r.save(), Sn(o, r), n.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        }, getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = Ev);
            var i = this._layers[t];
            return i || (i = new _v("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] && r(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i
        }, insertLayer: function (t, e) {
            var i = this._layers, n = this._zlevelList, r = n.length, a = null, o = -1, s = this._domRoot;
            if (i[t]) return void iv("ZLevel " + t + " has been used already");
            if (!_n(e)) return void iv("Layer of zlevel " + t + " is not valid");
            if (r > 0 && t > n[0]) {
                for (o = 0; r - 1 > o && !(n[o] < t && n[o + 1] > t); o++) ;
                a = i[n[o]]
            }
            if (n.splice(o + 1, 0, t), i[t] = e, !e.virtual) if (a) {
                var l = a.dom;
                l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
            } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
        }, eachLayer: function (t, e) {
            var i, n, r = this._zlevelList;
            for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i)
        }, eachBuiltinLayer: function (t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], i = this._layers[n], i.__builtin__ && t.call(e, i, n)
        }, eachOtherLayer: function (t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], i = this._layers[n], i.__builtin__ || t.call(e, i, n)
        }, getLayers: function () {
            return this._layers
        }, _updateLayerStatus: function (t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
            }

            if (this.eachBuiltinLayer(function (t) {
                t.__dirty = t.__used = !1
            }), this._singleCanvas) for (var i = 1; i < t.length; i++) {
                var n = t[i];
                if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
                    this._needsManuallyCompositing = !0;
                    break
                }
            }
            for (var r = null, a = 0, i = 0; i < t.length; i++) {
                var o, n = t[i], s = n.zlevel;
                n.incremental ? (o = this.getLayer(s + Bv, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Rv : 0), this._needsManuallyCompositing), o.__builtin__ || iv("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== i && (o.__dirty = !0), o.__startIndex = i, o.__drawIndex = o.incremental ? -1 : i, e(i), r = o), n.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = i))
            }
            e(i), this.eachBuiltinLayer(function (t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        }, clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        }, _clearLayer: function (t) {
            t.clear()
        }, setBackgroundColor: function (t) {
            this._backgroundColor = t
        }, configLayer: function (t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? r(i[t], e, !0) : i[t] = e;
                for (var n = 0; n < this._zlevelList.length; n++) {
                    var a = this._zlevelList[n];
                    if (a === t || a === t + Rv) {
                        var o = this._layers[a];
                        r(o, i[t], !0)
                    }
                }
            }
        }, delLayer: function (t) {
            var e = this._layers, i = this._zlevelList, n = e[t];
            n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(h(i, t), 1))
        }, resize: function (t, e) {
            if (this._domRoot.style) {
                var i = this._domRoot;
                i.style.display = "none";
                var n = this._opts;
                if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function (i) {
                        i.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(Ev).resize(t, e)
            }
            return this
        }, clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        }, dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        }, getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Ev].dom;
            var e = new _v("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, n = e.dom.height, r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a)
            }
            return e.dom
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, _getSize: function (t) {
            var e = this._opts, i = ["width", "height"][t], n = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t], a = ["paddingRight", "paddingBottom"][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[n] || xn(s[i]) || xn(o.style[i])) - (xn(s[r]) || 0) - (xn(s[a]) || 0) | 0
        }, pathToImage: function (t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"), n = i.getContext("2d"), r = t.getBoundingRect(), a = t.style,
                o = a.shadowBlur * e, s = a.shadowOffsetX * e, l = a.shadowOffsetY * e,
                h = a.hasStroke() ? a.lineWidth : 0, u = Math.max(h / 2, -s + o), c = Math.max(h / 2, s + o),
                d = Math.max(h / 2, -l + o), f = Math.max(h / 2, l + o), p = r.width + u + c, g = r.height + d + f;
            i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
            var v = {position: t.position, rotation: t.rotation, scale: t.scale};
            t.position = [u - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
            var m = yn, y = new m({style: {x: 0, y: 0, image: i}});
            return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
        }
    };
    var Wv = function (t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
        }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, bg.call(this)
    };
    Wv.prototype = {
        constructor: Wv, addClip: function (t) {
            this._clips.push(t)
        }, addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
        }, removeClip: function (t) {
            var e = h(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        }, removeAnimator: function (t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null
        }, _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; n > o; o++) {
                var s = i[o], l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (var o = 0; n > o;) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
            n = r.length;
            for (var o = 0; n > o; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        }, _startLoop: function () {
            function t() {
                e._running && (wv(t), !e._paused && e._update())
            }

            var e = this;
            this._running = !0, wv(t)
        }, start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        }, stop: function () {
            this._running = !1
        }, pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, clear: function () {
            this._clips = []
        }, isFinished: function () {
            return !this._clips.length
        }, animate: function (t, e) {
            e = e || {};
            var i = new Kg(t, e.loop, e.getter, e.setter);
            return this.addAnimator(i), i
        }
    }, c(Wv, bg);
    var Gv = function () {
        this._track = []
    };
    Gv.prototype = {
        constructor: Gv, recognize: function (t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t)
        }, clear: function () {
            return this._track.length = 0, this
        }, _doTrack: function (t, e, i) {
            var n = t.touches;
            if (n) {
                for (var r = {points: [], touches: [], target: e, event: t}, a = 0, o = n.length; o > a; a++) {
                    var s = n[a], l = de(i, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        }, _recognize: function (t) {
            for (var e in Hv) if (Hv.hasOwnProperty(e)) {
                var i = Hv[e](this._track, t);
                if (i) return i
            }
        }
    };
    var Hv = {
            pinch: function (t, e) {
                var i = t.length;
                if (i) {
                    var n = (t[i - 1] || {}).points, r = (t[i - 2] || {}).points || n;
                    if (r && r.length > 1 && n && n.length > 1) {
                        var a = In(n) / In(r);
                        !isFinite(a) && (a = 1), e.pinchScale = a;
                        var o = Tn(n);
                        return e.pinchX = o[0], e.pinchY = o[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        }, Zv = 300,
        Xv = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Yv = ["touchstart", "touchend", "touchmove"],
        jv = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, qv = p(Xv, function (t) {
            var e = t.replace("mouse", "pointer");
            return jv[e] ? e : t
        }), Uv = {
            mousemove: function (t) {
                t = pe(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = pe(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom) for (; e && 9 != e.nodeType;) {
                    if (e === this.dom) return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, An(this, t, "start"), Uv.mousemove.call(this, t), Uv.mousedown.call(this, t), Dn(this)
            }, touchmove: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, An(this, t, "change"), Uv.mousemove.call(this, t), Dn(this)
            }, touchend: function (t) {
                t = pe(this.dom, t), t.zrByTouch = !0, An(this, t, "end"), Uv.mouseup.call(this, t), +new Date - this._lastTouchMoment < Zv && Uv.click.call(this, t), Dn(this)
            }, pointerdown: function (t) {
                Uv.mousedown.call(this, t)
            }, pointermove: function (t) {
                kn(t) || Uv.mousemove.call(this, t)
            }, pointerup: function (t) {
                Uv.mouseup.call(this, t)
            }, pointerout: function (t) {
                kn(t) || Uv.mouseout.call(this, t)
            }
        };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Uv[t] = function (e) {
            e = pe(this.dom, e), this.trigger(t, e)
        }
    });
    var $v = Ln.prototype;
    $v.dispose = function () {
        for (var t = Xv.concat(Yv), e = 0; e < t.length; e++) {
            var i = t[e];
            ve(this.dom, Cn(i), this._handlers[i])
        }
    }, $v.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, c(Ln, bg);
    var Kv = !tg.canvasSupported, Qv = {canvas: Vv}, Jv = {}, tm = "4.0.5", em = function (t, e, i) {
        i = i || {}, this.dom = e, this.id = t;
        var n = this, r = new cv, a = i.renderer;
        if (Kv) {
            if (!Qv.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml"
        } else a && Qv[a] || (a = "canvas");
        var o = new Qv[a](e, r, i, t);
        this.storage = r, this.painter = o;
        var s = tg.node || tg.worker ? null : new Ln(o.getViewportRoot());
        this.handler = new Ag(r, o, s, o.root), this.animation = new Wv({stage: {update: y(this.flush, this)}}), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, h = r.addToStorage;
        r.delFromStorage = function (t) {
            l.call(r, t), t && t.removeSelfFromZr(n)
        }, r.addToStorage = function (t) {
            h.call(r, t), t.addSelfToZr(n)
        }
    };
    em.prototype = {
        constructor: em, getId: function () {
            return this.id
        }, add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        }, remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        }, configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        }, setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        }, refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        }, refresh: function () {
            this._needsRefresh = !0
        }, flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        }, addHover: function (t, e) {
            if (this.painter.addHover) {
                var i = this.painter.addHover(t, e);
                return this.refreshHover(), i
            }
        }, removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        }, clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        }, refreshHover: function () {
            this._needsRefreshHover = !0
        }, refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        }, resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        }, clearAnimation: function () {
            this.animation.clear()
        }, getWidth: function () {
            return this.painter.getWidth()
        }, getHeight: function () {
            return this.painter.getHeight()
        }, pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        }, setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        }, findHover: function (t, e) {
            return this.handler.findHover(t, e)
        }, on: function (t, e, i) {
            this.handler.on(t, e, i)
        }, off: function (t, e) {
            this.handler.off(t, e)
        }, trigger: function (t, e) {
            this.handler.trigger(t, e)
        }, clear: function () {
            this.storage.delRoot(), this.painter.clear()
        }, dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Bn(this.id)
        }
    };
    var im = (Object.freeze || Object)({version: tm, init: On, dispose: zn, getInstance: En, registerPainter: Rn}),
        nm = f, rm = S, am = _, om = "series\x00",
        sm = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        lm = 0, hm = ".", um = "___EC__COMPONENT__CONTAINER___", cm = 0, dm = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, i, n) {
                for (var r = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!(i && h(i, o) >= 0 || n && h(n, o) < 0)) {
                        var s = e.getShallow(o);
                        null != s && (r[t[a][0]] = s)
                    }
                }
                return r
            }
        },
        fm = dm([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        pm = {
            getLineStyle: function (t) {
                var e = fm(this, t), i = this.getLineDash(e.lineWidth);
                return i && (e.lineDash = i), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
            }
        },
        gm = dm([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
        vm = {
            getAreaStyle: function (t, e) {
                return gm(this, t, e)
            }
        }, mm = Math.pow, ym = Math.sqrt, xm = 1e-8, _m = 1e-4, wm = ym(3), bm = 1 / 3, Sm = W(), Mm = W(), Im = W(),
        Tm = Math.min, Cm = Math.max, Am = Math.sin, Dm = Math.cos, km = 2 * Math.PI, Pm = W(), Lm = W(), Om = W(),
        zm = [], Em = [], Rm = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, Bm = [], Nm = [], Fm = [], Vm = [],
        Wm = Math.min, Gm = Math.max, Hm = Math.cos, Zm = Math.sin, Xm = Math.sqrt, Ym = Math.abs,
        jm = "undefined" != typeof Float32Array, qm = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    qm.prototype = {
        constructor: qm,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = Ym(1 / tv / t) || 0, this._uy = Ym(1 / tv / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(Rm.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var i = Ym(t - this._xi) > this._ux || Ym(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Rm.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, i, n, r, a) {
            return this.addData(Rm.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, i, n) {
            return this.addData(Rm.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
        },
        arc: function (t, e, i, n, r, a) {
            return this.addData(Rm.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), this._xi = Hm(r) * i + t, this._yi = Zm(r) * i + e, this
        },
        arcTo: function (t, e, i, n, r) {
            return this._ctx && this._ctx.arcTo(t, e, i, n, r), this
        },
        rect: function (t, e, i, n) {
            return this._ctx && this._ctx.rect(t, e, i, n), this.addData(Rm.R, t, e, i, n), this
        },
        closePath: function () {
            this.addData(Rm.Z);
            var t = this._ctx, e = this._x0, i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !jm || (this.data = new Float32Array(e));
            for (var i = 0; e > i; i++) this.data[i] = t[i];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
            jm && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
            for (var r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
            this._len = n
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var i, n, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                h = this._yi, u = t - l, c = e - h, d = Xm(u * u + c * c), f = l, p = h, g = o.length;
            for (u /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e);) n = this._dashIdx, i = o[n], f += u * i, p += c * i, this._dashIdx = (n + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? Wm(f, t) : Gm(f, t), c >= 0 ? Wm(p, e) : Gm(p, e));
            u = f - t, c = p - e, this._dashOffset = -Xm(u * u + c * c)
        },
        _dashedBezierTo: function (t, e, i, n, r, a) {
            var o, s, l, h, u, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi,
                v = this._yi, m = lr, y = 0, x = this._dashIdx, _ = f.length, w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, i, r, o + .1) - m(g, t, i, r, o), l = m(v, e, n, a, o + .1) - m(v, e, n, a, o), y += Xm(s * s + l * l);
            for (; _ > x && (w += f[x], !(w > d)); x++) ;
            for (o = (w - d) / y; 1 >= o;) h = m(g, t, i, r, o), u = m(v, e, n, a, o), x % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += f[x] / y, x = (x + 1) % _;
            x % 2 !== 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Xm(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, i, n) {
            var r = i, a = n;
            i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, jm && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            Bm[0] = Bm[1] = Fm[0] = Fm[1] = Number.MAX_VALUE, Nm[0] = Nm[1] = Vm[0] = Vm[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, n = 0, r = 0, a = 0; a < t.length;) {
                var o = t[a++];
                switch (1 == a && (e = t[a], i = t[a + 1], n = e, r = i), o) {
                    case Rm.M:
                        n = t[a++], r = t[a++], e = n, i = r, Fm[0] = n, Fm[1] = r, Vm[0] = n, Vm[1] = r;
                        break;
                    case Rm.L:
                        wr(e, i, t[a], t[a + 1], Fm, Vm), e = t[a++], i = t[a++];
                        break;
                    case Rm.C:
                        br(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Fm, Vm), e = t[a++], i = t[a++];
                        break;
                    case Rm.Q:
                        Sr(e, i, t[a++], t[a++], t[a], t[a + 1], Fm, Vm), e = t[a++], i = t[a++];
                        break;
                    case Rm.A:
                        var s = t[a++], l = t[a++], h = t[a++], u = t[a++], c = t[a++], d = t[a++] + c,
                            f = (t[a++], 1 - t[a++]);
                        1 == a && (n = Hm(c) * h + s, r = Zm(c) * u + l), Mr(s, l, h, u, c, d, f, Fm, Vm), e = Hm(d) * h + s, i = Zm(d) * u + l;
                        break;
                    case Rm.R:
                        n = e = t[a++], r = i = t[a++];
                        var p = t[a++], g = t[a++];
                        wr(n, r, n + p, r + g, Fm, Vm);
                        break;
                    case Rm.Z:
                        e = n, i = r
                }
                oe(Bm, Bm, Fm), se(Nm, Nm, Vm)
            }
            return 0 === a && (Bm[0] = Bm[1] = Nm[0] = Nm[1] = 0), new gi(Bm[0], Bm[1], Nm[0] - Bm[0], Nm[1] - Bm[1])
        },
        rebuildPath: function (t) {
            for (var e, i, n, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c;) {
                var d = s[c++];
                switch (1 == c && (n = s[c], r = s[c + 1], e = n, i = r), d) {
                    case Rm.M:
                        e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
                        break;
                    case Rm.L:
                        a = s[c++], o = s[c++], (Ym(a - n) > l || Ym(o - r) > h || c === u - 1) && (t.lineTo(a, o), n = a, r = o);
                        break;
                    case Rm.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                        break;
                    case Rm.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                        break;
                    case Rm.A:
                        var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], x = s[c++],
                            _ = s[c++], w = g > v ? g : v, b = g > v ? 1 : g / v, S = g > v ? v / g : 1,
                            M = Math.abs(g - v) > .001, I = m + y;
                        M ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - _), 1 == c && (e = Hm(m) * g + f, i = Zm(m) * v + p), n = Hm(I) * g + f, r = Zm(I) * v + p;
                        break;
                    case Rm.R:
                        e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case Rm.Z:
                        t.closePath(), n = e, r = i
                }
            }
        }
    }, qm.CMD = Rm;
    var Um = 2 * Math.PI, $m = 2 * Math.PI, Km = qm.CMD, Qm = 2 * Math.PI, Jm = 1e-4, ty = [-1, -1, -1], ey = [-1, -1],
        iy = xv.prototype.getCanvasPattern, ny = Math.abs, ry = new qm(!0);
    Fr.prototype = {
        constructor: Fr, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
            var i = this.style, n = this.path || ry, r = i.hasStroke(), a = i.hasFill(), o = i.fill, s = i.stroke,
                l = a && !!o.colorStops, h = r && !!s.colorStops, u = a && !!o.image, c = r && !!s.image;
            if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, o, d)), h && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d))
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = iy.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = iy.call(s, t));
            var f = i.lineDash, p = i.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            if (n.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (n.beginPath(t), f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a) if (null != i.fillOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = i.fillOpacity * i.opacity, n.fill(t), t.globalAlpha = m
            } else n.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != i.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = i.strokeOpacity * i.opacity, n.stroke(t), t.globalAlpha = m
            } else n.stroke(t);
            f && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        }, buildPath: function () {
        }, createPathProxy: function () {
            this.path = new qm
        }, getBoundingRect: function () {
            var t = this._rect, e = this.style, i = !t;
            if (i) {
                var n = this.path;
                n || (n = this.path = new qm), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    r.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                }
                return r
            }
            return t
        }, contain: function (t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
            if (t = i[0], e = i[1], n.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), Nr(a, o / s, t, e))) return !0
                }
                if (r.hasFill()) return Br(a, t, e)
            }
            return !1
        }, dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        }, animateShape: function (t) {
            return this.animate("shape", t)
        }, attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : mn.prototype.attrKV.call(this, t, e)
        }, setShape: function (t, e) {
            var i = this.shape;
            if (i) {
                if (S(t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                this.dirty(!0)
            }
            return this
        }, getLineScale: function () {
            var t = this.transform;
            return t && ny(t[0] - 1) > 1e-10 && ny(t[3] - 1) > 1e-10 ? Math.sqrt(ny(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, Fr.extend = function (t) {
        var e = function (e) {
            Fr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
                this.shape = this.shape || {};
                var n = this.shape;
                for (var r in i) !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r])
            }
            t.init && t.init.call(this, e)
        };
        u(e, Fr);
        for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
        return e
    }, u(Fr, mn);
    var ay = qm.CMD, oy = [[], [], []], sy = Math.sqrt, ly = Math.atan2, hy = function (t, e) {
        var i, n, r, a, o, s, l = t.data, h = ay.M, u = ay.C, c = ay.L, d = ay.R, f = ay.A, p = ay.Q;
        for (r = 0, a = 0; r < l.length;) {
            switch (i = l[r++], a = r, n = 0, i) {
                case h:
                    n = 1;
                    break;
                case c:
                    n = 1;
                    break;
                case u:
                    n = 3;
                    break;
                case p:
                    n = 2;
                    break;
                case f:
                    var g = e[4], v = e[5], m = sy(e[0] * e[0] + e[1] * e[1]), y = sy(e[2] * e[2] + e[3] * e[3]),
                        x = ly(-e[1] / y, e[0] / m);
                    l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += x, l[r++] += x, r += 2, a = r;
                    break;
                case d:
                    s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
            for (o = 0; n > o; o++) {
                var s = oy[o];
                s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
        }
    }, uy = Math.sqrt, cy = Math.sin, dy = Math.cos, fy = Math.PI, py = function (t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }, gy = function (t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (py(t) * py(e))
    }, vy = function (t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(gy(t, e))
    }, my = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, yy = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, xy = function (t) {
        mn.call(this, t)
    };
    xy.prototype = {
        constructor: xy, type: "text", brush: function (t, e) {
            var i = this.style;
            this.__dirty && Qi(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var n = i.text;
            null != n && (n += ""), vn(n, i) && (this.setTransform(t), tn(this, t, n, i, null, e), this.restoreTransform(t))
        }, getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && Qi(t, !0), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = Ei(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, dn(t.textStroke, t.textStrokeWidth)) {
                    var n = t.textStrokeWidth;
                    i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n
                }
                this._rect = i
            }
            return this._rect
        }
    }, u(xy, mn);
    var _y = Fr.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }), wy = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]],
        by = function (t) {
            return tg.browser.ie && tg.browser.version >= 11 ? function () {
                var e, i = this.__clipPaths, n = this.style;
                if (i) for (var r = 0; r < i.length; r++) {
                    var a = i[r], o = a && a.shape, s = a && a.type;
                    if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                        for (var l = 0; l < wy.length; l++) wy[l][2] = n[wy[l][0]], n[wy[l][0]] = wy[l][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var l = 0; l < wy.length; l++) n[wy[l][0]] = wy[l][2]
            } : t
        }, Sy = Fr.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: by(Fr.prototype.brush),
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle,
                    l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
                t.moveTo(h * r + i, u * r + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, o, s, !l), t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), t.closePath()
            }
        }), My = Fr.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0)
            }
        }), Iy = function (t, e) {
            for (var i = t.length, n = [], r = 0, a = 1; i > a; a++) r += ee(t[a - 1], t[a]);
            var o = r / 2;
            o = i > o ? i : o;
            for (var a = 0; o > a; a++) {
                var s, l, h, u = a / (o - 1) * (e ? i : i - 1), c = Math.floor(u), d = u - c, f = t[c % i];
                e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], l = t[c > i - 2 ? i - 1 : c + 1], h = t[c > i - 3 ? i - 1 : c + 2]);
                var p = d * d, g = d * p;
                n.push([Yr(s[0], f[0], l[0], h[0], d, p, g), Yr(s[1], f[1], l[1], h[1], d, p, g)])
            }
            return n
        }, Ty = function (t, e, i, n) {
            var r, a, o, s, l = [], h = [], u = [], c = [];
            if (n) {
                o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
                oe(o, o, n[0]), se(s, s, n[1])
            }
            for (var d = 0, f = t.length; f > d; d++) {
                var p = t[d];
                if (i) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f]; else {
                    if (0 === d || d === f - 1) {
                        l.push(H(t[d]));
                        continue
                    }
                    r = t[d - 1], a = t[d + 1]
                }
                j(h, a, r), J(h, h, e);
                var g = ee(p, r), v = ee(p, a), m = g + v;
                0 !== m && (g /= m, v /= m), J(u, h, -g), J(c, h, v);
                var y = X([], p, u), x = X([], p, c);
                n && (se(y, y, o), oe(y, y, s), se(x, x, o), oe(x, x, s)), l.push(y), l.push(x)
            }
            return i && l.push(l.shift()), l
        }, Cy = Fr.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                jr(t, e, !0)
            }
        }), Ay = Fr.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                jr(t, e, !1)
            }
        }), Dy = Fr.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, r = e.width, a = e.height;
                e.r ? Ki(t, e) : t.rect(i, n, r, a), t.closePath()
            }
        }), ky = Fr.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.percent;
                0 !== o && (t.moveTo(i, n), 1 > o && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), t.lineTo(r, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }), Py = [], Ly = Fr.extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, l = e.cpx2, h = e.cpy2, u = e.percent;
                0 !== u && (t.moveTo(i, n), null == l || null == h ? (1 > u && (yr(i, o, r, u, Py), o = Py[1], r = Py[2], yr(n, s, a, u, Py), s = Py[1], a = Py[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (dr(i, o, l, r, u, Py), o = Py[1], l = Py[2], r = Py[3], dr(n, s, h, a, u, Py), s = Py[1], h = Py[2], a = Py[3]), t.bezierCurveTo(o, s, l, h, r, a)))
            },
            pointAt: function (t) {
                return qr(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = qr(this.shape, t, !0);
                return te(e, e)
            }
        }), Oy = Fr.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise,
                    l = Math.cos(a), h = Math.sin(a);
                t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, a, o, !s)
            }
        }), zy = Fr.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), Fr.prototype.getBoundingRect.call(this)
            }
        }), Ey = function (t) {
            this.colorStops = t || []
        };
    Ey.prototype = {
        constructor: Ey, addColorStop: function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }
    };
    var Ry = function (t, e, i, n, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, Ey.call(this, r)
    };
    Ry.prototype = {constructor: Ry}, u(Ry, Ey);
    var By = function (t, e, i, n, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = r || !1, Ey.call(this, n)
    };
    By.prototype = {constructor: By}, u(By, Ey), Ur.prototype.incremental = !0, Ur.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, Ur.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, Ur.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
    }, Ur.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, Ur.prototype.update = function () {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
            var e = this._displayables[t];
            e.parent = this, e.update(), e.parent = null
        }
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, Ur.prototype.brush = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++) {
            var i = this._displayables[e];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var i = this._temporaryDisplayables[e];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var Ny = [];
    Ur.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new gi(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var i = this._displayables[e], n = i.getBoundingRect().clone();
                i.needLocalTransform() && n.applyTransform(i.getLocalTransform(Ny)), t.union(n)
            }
            this._rect = t
        }
        return this._rect
    }, Ur.prototype.contain = function (t, e) {
        var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
        if (n.contain(i[0], i[1])) for (var r = 0; r < this._displayables.length; r++) {
            var a = this._displayables[r];
            if (a.contain(t, e)) return !0
        }
        return !1
    }, u(Ur, mn);
    var Fy = Math.round, Vy = Math.max, Wy = Math.min, Gy = {}, Hy = Xr, Zy = N(), Xy = 0,
        Yy = (Object.freeze || Object)({
            extendShape: $r,
            extendPath: Kr,
            makePath: Qr,
            makeImage: Jr,
            mergePath: Hy,
            resizePath: ea,
            subPixelOptimizeLine: ia,
            subPixelOptimizeRect: na,
            subPixelOptimize: ra,
            setElementHoverStyle: fa,
            isInEmphasis: pa,
            setHoverStyle: xa,
            setAsHoverStyleTrigger: _a,
            setLabelStyle: wa,
            setTextStyle: ba,
            setText: Sa,
            getFont: ka,
            updateProps: La,
            initProps: Oa,
            getTransform: za,
            applyTransform: Ea,
            transformDirection: Ra,
            groupTransition: Ba,
            clipPointsByRect: Na,
            clipRectByRect: Fa,
            createIcon: Va,
            Group: lv,
            Image: yn,
            Text: xy,
            Circle: _y,
            Sector: Sy,
            Ring: My,
            Polygon: Cy,
            Polyline: Ay,
            Rect: Dy,
            Line: ky,
            BezierCurve: Ly,
            Arc: Oy,
            IncrementalDisplayable: Ur,
            CompoundPath: zy,
            LinearGradient: Ry,
            RadialGradient: By,
            BoundingRect: gi
        }), jy = ["textStyle", "color"], qy = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(jy) : null)
            }, getFont: function () {
                return ka({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return Ei(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        Uy = dm([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
        $y = {
            getItemStyle: function (t, e) {
                var i = Uy(this, t, e), n = this.getBorderLineDash();
                return n && (i.lineDash = n), i
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }, Ky = c, Qy = jn();
    Wa.prototype = {
        constructor: Wa, init: null, mergeOption: function (t) {
            r(this.option, t, !0)
        }, get: function (t, e) {
            return null == t ? this.option : Ga(this.option, this.parsePath(t), !e && Ha(this, t))
        }, getShallow: function (t, e) {
            var i = this.option, n = null == i ? i : i[t], r = !e && Ha(this, t);
            return null == n && r && (n = r.getShallow(t)), n
        }, getModel: function (t, e) {
            var i, n = null == t ? this.option : Ga(this.option, t = this.parsePath(t));
            return e = e || (i = Ha(this, t)) && i.getModel(t), new Wa(n, e, this.ecModel)
        }, isEmpty: function () {
            return null == this.option
        }, restoreData: function () {
        }, clone: function () {
            var t = this.constructor;
            return new t(n(this.option))
        }, setReadOnly: function () {
        }, parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        }, customizeGetParent: function (t) {
            Qy(this).getParent = t
        }, isAnimationEnabled: function () {
            if (!tg.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, er(Wa), ir(Wa), Ky(Wa, pm), Ky(Wa, vm), Ky(Wa, qy), Ky(Wa, $y);
    var Jy = 0, tx = 1e-4, ex = 9007199254740991,
        ix = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        nx = (Object.freeze || Object)({
            linearMap: qa,
            parsePercent: Ua,
            round: $a,
            asc: Ka,
            getPrecision: Qa,
            getPrecisionSafe: Ja,
            getPixelPrecision: to,
            getPercentWithPrecision: eo,
            MAX_SAFE_INTEGER: ex,
            remRadian: io,
            isRadianAroundZero: no,
            parseDate: ro,
            quantity: ao,
            nice: so,
            quantile: lo,
            reformIntervals: ho,
            isNumeric: uo
        }), rx = L, ax = /([&<>"'])/g, ox = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        sx = ["a", "b", "c", "d", "e", "f", "g"], lx = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, hx = Wi, ux = Ei, cx = (Object.freeze || Object)({
            addCommas: co,
            toCamelCase: fo,
            normalizeCssArray: rx,
            encodeHTML: po,
            formatTpl: go,
            formatTplSimple: vo,
            getTooltipMarker: mo,
            formatTime: xo,
            capitalFirst: _o,
            truncateText: hx,
            getTextRect: ux
        }), dx = f, fx = ["left", "right", "top", "bottom", "width", "height"],
        px = [["width", "left", "right"], ["height", "top", "bottom"]], gx = wo,
        vx = (x(wo, "vertical"), x(wo, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }), mx = jn(), yx = Wa.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, i, n) {
                Wa.call(this, t, e, i, n), this.uid = Za("ec_cpt_model")
            },
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i)
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, n = i ? Mo(t) : {}, a = e.getTheme();
                r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), i && So(t, n, i)
            },
            mergeOption: function (t) {
                r(this.option, t, !0);
                var e = this.layoutMode;
                e && So(this.option, t, e)
            },
            optionUpdated: function () {
            },
            getDefaultOption: function () {
                var t = mx(this);
                if (!t.defaultOption) {
                    for (var e = [], i = this.constructor; i;) {
                        var n = i.prototype.defaultOption;
                        n && e.push(n), i = i.superClass
                    }
                    for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                    t.defaultOption = a
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    ar(yx, {registerWhenExtend: !0}), Xa(yx), Ya(yx, To), c(yx, vx);
    var xx = "";
    "undefined" != typeof navigator && (xx = navigator.platform || "");
    var _x = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: xx.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, bx = jn(), Sx = {
            clearColorPalette: function () {
                bx(this).colorIdx = 0, bx(this).colorNameMap = {}
            }, getColorFromPalette: function (t, e, i) {
                e = e || this;
                var n = bx(e), r = n.colorIdx || 0, a = n.colorNameMap = n.colorNameMap || {};
                if (a.hasOwnProperty(t)) return a[t];
                var o = Nn(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != i && s ? Co(s, i) : o;
                if (l = l || o, l && l.length) {
                    var h = l[r];
                    return t && (a[t] = h), n.colorIdx = (r + 1) % l.length, h
                }
            }
        }, Mx = {
            cartesian2d: function (t, e, i, n) {
                var r = t.getReferringComponents("xAxis")[0], a = t.getReferringComponents("yAxis")[0];
                e.coordSysDims = ["x", "y"], i.set("x", r), i.set("y", a), Do(r) && (n.set("x", r), e.firstCategoryDimIndex = 0), Do(a) && (n.set("y", a), e.firstCategoryDimIndex = 1)
            }, singleAxis: function (t, e, i, n) {
                var r = t.getReferringComponents("singleAxis")[0];
                e.coordSysDims = ["single"], i.set("single", r), Do(r) && (n.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, i, n) {
                var r = t.getReferringComponents("polar")[0], a = r.findAxisModel("radiusAxis"),
                    o = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], i.set("radius", a), i.set("angle", o), Do(a) && (n.set("radius", a), e.firstCategoryDimIndex = 0), Do(o) && (n.set("angle", o), e.firstCategoryDimIndex = 1)
            }, geo: function (t, e) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, i, n) {
                var r = t.ecModel, a = r.getComponent("parallel", t.get("parallelIndex")),
                    o = e.coordSysDims = a.dimensions.slice();
                f(a.parallelAxisIndex, function (t, a) {
                    var s = r.getComponent("parallelAxis", t), l = o[a];
                    i.set(l, s), Do(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = a)
                })
            }
        }, Ix = "original", Tx = "arrayRows", Cx = "objectRows", Ax = "keyedColumns", Dx = "unknown", kx = "typedArray",
        Px = "column", Lx = "row";
    ko.seriesDataToSource = function (t) {
        return new ko({data: t, sourceFormat: I(t) ? kx : Ix, fromDataset: !1})
    }, ir(ko);
    var Ox = jn(), zx = "\x00_ec_inner", Ex = Wa.extend({
        init: function (t, e, i, n) {
            i = i || {}, this.option = null, this._theme = new Wa(i), this._optionManager = n
        }, setOption: function (t, e) {
            O(!(zx in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
        }, resetOption: function (t) {
            var e = !1, i = this._optionManager;
            if (!t || "recreate" === t) {
                var n = i.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : Xo.call(this, n), e = !0
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = i.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0)
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = i.getMediaOption(this, this._api);
                a.length && f(a, function (t) {
                    this.mergeOption(t, e = !0)
                }, this)
            }
            return e
        }, mergeOption: function (t) {
            function e(e, n) {
                var r = Nn(t[e]), s = Gn(a.get(e), r);
                Hn(s), f(s, function (t) {
                    var i = t.option;
                    S(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = jo(e, i, t.exist))
                });
                var l = Yo(a, n);
                i[e] = [], a.set(e, []), f(s, function (t, n) {
                    var r = t.exist, s = t.option;
                    if (O(S(s) || r, "Empty component definition"), s) {
                        var h = yx.getClass(e, t.keyInfo.subType, !0);
                        if (r && r instanceof h) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1); else {
                            var u = o({dependentModels: l, componentIndex: n}, t.keyInfo);
                            r = new h(s, this, this, u), o(r, u), r.init(s, this, this, u), r.optionUpdated(null, !0)
                        }
                    } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                    a.get(e)[n] = r, i[e][n] = r.option
                }, this), "series" === e && qo(this, a.get("series"))
            }

            var i = this.option, a = this._componentsMap, s = [];
            Oo(this), f(t, function (t, e) {
                null != t && (yx.hasClass(e) ? e && s.push(e) : i[e] = null == i[e] ? n(t) : r(i[e], t, !0))
            }), yx.topologicalTravel(s, yx.getAllClassMainTypes(), e, this), this._seriesIndicesMap = N(this._seriesIndices = this._seriesIndices || [])
        }, getOption: function () {
            var t = n(this.option);
            return f(t, function (e, i) {
                if (yx.hasClass(i)) {
                    for (var e = Nn(e), n = e.length - 1; n >= 0; n--) Xn(e[n]) && e.splice(n, 1);
                    t[i] = e
                }
            }), delete t[zx], t
        }, getTheme: function () {
            return this._theme
        }, getComponent: function (t, e) {
            var i = this._componentsMap.get(t);
            return i ? i[e || 0] : void 0
        }, queryComponents: function (t) {
            var e = t.mainType;
            if (!e) return [];
            var i = t.index, n = t.id, r = t.name, a = this._componentsMap.get(e);
            if (!a || !a.length) return [];
            var o;
            if (null != i) _(i) || (i = [i]), o = v(p(i, function (t) {
                return a[t]
            }), function (t) {
                return !!t
            }); else if (null != n) {
                var s = _(n);
                o = v(a, function (t) {
                    return s && h(n, t.id) >= 0 || !s && t.id === n
                })
            } else if (null != r) {
                var l = _(r);
                o = v(a, function (t) {
                    return l && h(r, t.name) >= 0 || !l && t.name === r
                })
            } else o = a.slice();
            return Uo(o, t)
        }, findComponents: function (t) {
            function e(t) {
                var e = r + "Index", i = r + "Id", n = r + "Name";
                return !t || null == t[e] && null == t[i] && null == t[n] ? null : {
                    mainType: r,
                    index: t[e],
                    id: t[i],
                    name: t[n]
                }
            }

            function i(e) {
                return t.filter ? v(e, t.filter) : e
            }

            var n = t.query, r = t.mainType, a = e(n), o = a ? this.queryComponents(a) : this._componentsMap.get(r);
            return i(Uo(o, t))
        }, eachComponent: function (t, e, i) {
            var n = this._componentsMap;
            if ("function" == typeof t) i = e, e = t, n.each(function (t, n) {
                f(t, function (t, r) {
                    e.call(i, n, t, r)
                })
            }); else if (b(t)) f(n.get(t), e, i); else if (S(t)) {
                var r = this.findComponents(t);
                f(r, e, i)
            }
        }, getSeriesByName: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.name === t
            })
        }, getSeriesByIndex: function (t) {
            return this._componentsMap.get("series")[t]
        }, getSeriesByType: function (t) {
            var e = this._componentsMap.get("series");
            return v(e, function (e) {
                return e.subType === t
            })
        }, getSeries: function () {
            return this._componentsMap.get("series").slice()
        }, getSeriesCount: function () {
            return this._componentsMap.get("series").length
        }, eachSeries: function (t, e) {
            f(this._seriesIndices, function (i) {
                var n = this._componentsMap.get("series")[i];
                t.call(e, n, i)
            }, this)
        }, eachRawSeries: function (t, e) {
            f(this._componentsMap.get("series"), t, e)
        }, eachSeriesByType: function (t, e, i) {
            f(this._seriesIndices, function (n) {
                var r = this._componentsMap.get("series")[n];
                r.subType === t && e.call(i, r, n)
            }, this)
        }, eachRawSeriesByType: function (t, e, i) {
            return f(this.getSeriesByType(t), e, i)
        }, isSeriesFiltered: function (t) {
            return null == this._seriesIndicesMap.get(t.componentIndex)
        }, getCurrentSeriesIndices: function () {
            return (this._seriesIndices || []).slice()
        }, filterSeries: function (t, e) {
            var i = v(this._componentsMap.get("series"), t, e);
            qo(this, i)
        }, restoreData: function (t) {
            var e = this._componentsMap;
            qo(this, e.get("series"));
            var i = [];
            e.each(function (t, e) {
                i.push(e)
            }), yx.topologicalTravel(i, yx.getAllClassMainTypes(), function (i) {
                f(e.get(i), function (e) {
                    ("series" !== i || !Ho(e, t)) && e.restoreData()
                })
            })
        }
    });
    c(Ex, Sx);
    var Rx = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        Bx = {};
    Ko.prototype = {
        constructor: Ko, create: function (t, e) {
            var i = [];
            f(Bx, function (n) {
                var r = n.create(t, e);
                i = i.concat(r || [])
            }), this._coordinateSystems = i
        }, update: function (t, e) {
            f(this._coordinateSystems, function (i) {
                i.update && i.update(t, e)
            })
        }, getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, Ko.register = function (t, e) {
        Bx[t] = e
    }, Ko.get = function (t) {
        return Bx[t]
    };
    var Nx = f, Fx = n, Vx = p, Wx = r, Gx = /^(min|max)?(.+)$/;
    Qo.prototype = {
        constructor: Qo, setOption: function (t, e) {
            t && f(Nn(t.series), function (t) {
                t && t.data && I(t.data) && E(t.data)
            }), t = Fx(t, !0);
            var i = this._optionBackup, n = Jo.call(this, t, e, !i);
            this._newBaseOption = n.baseOption, i ? (ns(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
        }, mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = Vx(e.timelineOptions, Fx), this._mediaList = Vx(e.mediaList, Fx), this._mediaDefault = Fx(e.mediaDefault), this._currentMediaIndices = [], Fx(t ? e.baseOption : this._newBaseOption)
        }, getTimelineOption: function (t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = Fx(i[n.getCurrentIndex()], !0))
            }
            return e
        }, getMediaOption: function () {
            var t = this._api.getWidth(), e = this._api.getHeight(), i = this._mediaList, n = this._mediaDefault,
                r = [], a = [];
            if (!i.length && !n) return a;
            for (var o = 0, s = i.length; s > o; o++) ts(i[o].query, t, e) && r.push(o);
            return !r.length && n && (r = [-1]), r.length && !is(r, this._currentMediaIndices) && (a = Vx(r, function (t) {
                return Fx(-1 === t ? n.option : i[t].option)
            })), this._currentMediaIndices = r, a
        }
    };
    var Hx = f, Zx = S, Xx = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Yx = function (t, e) {
            Hx(us(t.series), function (t) {
                Zx(t) && hs(t)
            });
            var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Hx(i, function (e) {
                Hx(us(t[e]), function (t) {
                    t && (ss(t, "axisLabel"), ss(t.axisPointer, "label"))
                })
            }), Hx(us(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                ss(e, "axisLabel"), ss(e && e.axisPointer, "label")
            }), Hx(us(t.calendar), function (t) {
                as(t, "itemStyle"), ss(t, "dayLabel"), ss(t, "monthLabel"), ss(t, "yearLabel")
            }), Hx(us(t.radar), function (t) {
                ss(t, "name")
            }), Hx(us(t.geo), function (t) {
                Zx(t) && (ls(t), Hx(us(t.regions), function (t) {
                    ls(t)
                }))
            }), Hx(us(t.timeline), function (t) {
                ls(t), as(t, "label"), as(t, "itemStyle"), as(t, "controlStyle", !0);
                var e = t.data;
                _(e) && f(e, function (t) {
                    S(t) && (as(t, "label"), as(t, "itemStyle"))
                })
            }), Hx(us(t.toolbox), function (t) {
                as(t, "iconStyle"), Hx(t.feature, function (t) {
                    as(t, "iconStyle")
                })
            }), ss(cs(t.axisPointer), "label"), ss(cs(t.tooltip).axisPointer, "label")
        }, jx = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        qx = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        Ux = function (t, e) {
            Yx(t, e), t.series = Nn(t.series), f(t.series, function (t) {
                if (S(t)) {
                    var e = t.type;
                    if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var i = ds(t, "pointer.color");
                        null != i && fs(t, "itemStyle.normal.color", i)
                    }
                    ps(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), f(qx, function (e) {
                var i = t[e];
                i && (_(i) || (i = [i]), f(i, function (t) {
                    ps(t)
                }))
            })
        }, $x = function (t) {
            var e = N();
            t.eachSeries(function (t) {
                var i = t.get("stack");
                if (i) {
                    var n = e.get(i) || e.set(i, []), r = t.getData(), a = {
                        stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                        stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                        stackedDimension: r.getCalculationInfo("stackedDimension"),
                        stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                        isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                        data: r,
                        seriesModel: t
                    };
                    if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                    n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a)
                }
            }), e.each(gs)
        }, Kx = vs.prototype;
    Kx.pure = !1, Kx.persistent = !0, Kx.getSource = function () {
        return this._source
    };
    var Qx = {
        arrayRows_column: {
            pure: !0, count: function () {
                return Math.max(0, this._data.length - this._source.startIndex)
            }, getItem: function (t) {
                return this._data[t + this._source.startIndex]
            }, appendData: xs
        },
        arrayRows_row: {
            pure: !0, count: function () {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0
            }, getItem: function (t) {
                t += this._source.startIndex;
                for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                    var r = i[n];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function () {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
            }
        },
        objectRows: {pure: !0, count: ms, getItem: ys, appendData: xs},
        keyedColumns: {
            pure: !0, count: function () {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0
            }, getItem: function (t) {
                for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                    var r = this._data[i[n].name];
                    e.push(r ? r[t] : null)
                }
                return e
            }, appendData: function (t) {
                var e = this._data;
                f(t, function (t, i) {
                    for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) n.push(t[r])
                })
            }
        },
        original: {count: ms, getItem: ys, appendData: xs},
        typedArray: {
            persistent: !1, pure: !0, count: function () {
                return this._data ? this._data.length / this._dimSize : 0
            }, getItem: function (t, e) {
                t -= this._offset, e = e || [];
                for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                return e
            }, appendData: function (t) {
                this._data = t
            }, clean: function () {
                this._offset += this.count(), this._data = null
            }
        }
    }, Jx = {
        arrayRows: _s, objectRows: function (t, e, i, n) {
            return null != i ? t[n] : t
        }, keyedColumns: _s, original: function (t, e, i) {
            var n = Vn(t);
            return null != i && n instanceof Array ? n[i] : n
        }, typedArray: _s
    }, t_ = {
        arrayRows: ws, objectRows: function (t, e) {
            return bs(t[e], this._dimensionInfos[e])
        }, keyedColumns: ws, original: function (t, e, i, n) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && Wn(t) && (this.hasItemOption = !0), bs(r instanceof Array ? r[n] : r, this._dimensionInfos[e])
        }, typedArray: function (t, e, i, n) {
            return t[n]
        }
    }, e_ = /\{@(.+?)\}/g, i_ = {
        getDataParams: function (t, e) {
            var i = this.getData(e), n = this.getRawValue(t, e), r = i.getRawIndex(t), a = i.getName(t),
                o = i.getRawDataItem(t), s = i.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"),
                h = l && l.get("renderMode"), u = Qn(h), c = this.mainType, d = "series" === c;
            return {
                componentType: c,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: d ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: d ? this.id : null,
                seriesName: d ? this.name : null,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: n,
                color: s,
                marker: mo({color: s, renderMode: u}),
                $vars: ["seriesName", "name", "value"]
            }
        }, getFormattedLabel: function (t, e, i, n, r) {
            e = e || "normal";
            var a = this.getData(i), o = a.getItemModel(t), s = this.getDataParams(t, i);
            null != n && s.value instanceof Array && (s.value = s.value[n]);
            var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
            if ("function" == typeof l) return s.status = e, l(s);
            if ("string" == typeof l) {
                var h = go(l, s);
                return h.replace(e_, function (e, i) {
                    var n = i.length;
                    return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), Ss(a, t, i)
                })
            }
        }, getRawValue: function (t, e) {
            return Ss(this.getData(e), t)
        }, formatTooltip: function () {
        }
    }, n_ = Ts.prototype;
    n_.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }

        var i = this._upstream, n = t && t.skip;
        if (this._dirty && i) {
            var r = this.context;
            r.data = r.outputData = i.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !n && (a = this._plan(this.context));
        var o = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), h = t && t.modDataCount || 0;
        (o !== l || s !== h) && (a = "reset");
        var u;
        (this._dirty || "reset" === a) && (this._dirty = !1, u = As(this, n)), this._modBy = l, this._modDataCount = h;
        var c = t && t.step;
        if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!n && (u || f > d)) {
                var p = this._progress;
                if (_(p)) for (var g = 0; g < p.length; g++) Cs(this, p[g], d, f, l, h); else Cs(this, p, d, f, l, h)
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var r_ = function () {
        function t() {
            return i > n ? n++ : null
        }

        function e() {
            var t = n % o * r + Math.ceil(n / o), e = n >= i ? null : a > t ? t : n;
            return n++, e
        }

        var i, n, r, a, o, s = {
            reset: function (l, h, u, c) {
                n = l, i = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
            }
        };
        return s
    }();
    n_.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, n_.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, n_.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, n_.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, n_.getUpstream = function () {
        return this._upstream
    }, n_.getDownstream = function () {
        return this._downstream
    }, n_.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var a_ = jn(), o_ = yx.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function (t, e, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = Is({
                count: Ps,
                reset: Ls
            }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, i), zo(this);
            var n = this.getInitialData(t, i);
            zs(n, this), this.dataTask.context.data = n, a_(this).dataBeforeProcessed = n, Ds(this)
        },
        mergeDefaultAndTheme: function (t, e) {
            var i = this.layoutMode, n = i ? Mo(t) : {}, a = this.subType;
            yx.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Fn(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && So(t, n, i)
        },
        mergeOption: function (t, e) {
            t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && So(this.option, t, i), zo(this);
            var n = this.getInitialData(t, e);
            zs(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, a_(this).dataBeforeProcessed = n, Ds(this)
        },
        fillDataTextStyle: function (t) {
            if (t && !I(t)) for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && Fn(t[i], "label", e)
        },
        getInitialData: function () {
        },
        appendData: function (t) {
            var e = this.getRawData();
            e.appendData(t.data)
        },
        getData: function (t) {
            var e = Rs(this);
            if (e) {
                var i = e.context.data;
                return null == t ? i : i.getLinkedData(t)
            }
            return a_(this).data
        },
        setData: function (t) {
            var e = Rs(this);
            if (e) {
                var i = e.context;
                i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t)
            }
            a_(this).data = t
        },
        getSource: function () {
            return Lo(this)
        },
        getRawData: function () {
            return a_(this).dataBeforeProcessed
        },
        getBaseAxis: function () {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis()
        },
        formatTooltip: function (t, e, i, n) {
            function r(i) {
                function r(t, i) {
                    var r = c.getDimensionInfo(i);
                    if (r && r.otherDims.tooltip !== !1) {
                        var d = r.type, f = "sub" + o.seriesIndex + "at" + u,
                            p = mo({color: y, type: "subItem", renderMode: n, markerId: f}),
                            g = "string" == typeof p ? p : p.content,
                            v = (a ? g + po(r.displayName || "-") + ": " : "") + po("ordinal" === d ? t + "" : "time" === d ? e ? "" : xo("yyyy/MM/dd hh:mm:ss", t) : co(t));
                        v && s.push(v), l && (h[f] = y, ++u)
                    }
                }

                var a = g(i, function (t, e, i) {
                    var n = c.getDimensionInfo(i);
                    return t |= n && n.tooltip !== !1 && null != n.displayName
                }, 0), s = [];
                d.length ? f(d, function (e) {
                    r(Ss(c, t, e), e)
                }) : f(i, r);
                var p = a ? l ? "\n" : "<br/>" : "", v = p + s.join(p || ", ");
                return {renderMode: n, content: v, style: h}
            }

            function a(t) {
                return {renderMode: n, content: po(co(t)), style: h}
            }

            var o = this;
            n = n || "html";
            var s = "html" === n ? "<br/>" : "\n", l = "richText" === n, h = {}, u = 0, c = this.getData(),
                d = c.mapDimension("defaultedTooltip", !0), p = d.length, v = this.getRawValue(t), m = _(v),
                y = c.getItemVisual(t, "color");
            S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
            var x = p > 1 || m && !p ? r(v) : a(p ? Ss(c, t, d[0]) : m ? v[0] : v), w = x.content,
                b = o.seriesIndex + "at" + u, M = mo({color: y, type: "item", renderMode: n, markerId: b});
            h[b] = y, ++u;
            var I = c.getName(t), T = this.name;
            Zn(this) || (T = ""), T = T ? po(T) + (e ? ": " : s) : "";
            var C = "string" == typeof M ? M : M.content, A = e ? C + T + w : T + C + (I ? po(I) + ": " + w : w);
            return {html: A, markers: h}
        },
        isAnimationEnabled: function () {
            if (tg.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
        },
        restoreData: function () {
            this.dataTask.dirty()
        },
        getColorFromPalette: function (t, e, i) {
            var n = this.ecModel, r = Sx.getColorFromPalette.call(this, t, e, i);
            return r || (r = n.getColorFromPalette(t, e, i)), r
        },
        coordDimToDataDim: function (t) {
            return this.getRawData().mapDimension(t, !0)
        },
        getProgressive: function () {
            return this.get("progressive")
        },
        getProgressiveThreshold: function () {
            return this.get("progressiveThreshold")
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(o_, i_), c(o_, Sx);
    var s_ = function () {
        this.group = new lv, this.uid = Za("viewComponent")
    };
    s_.prototype = {
        constructor: s_, init: function () {
        }, render: function () {
        }, dispose: function () {
        }, filterForExposedEvent: null
    };
    var l_ = s_.prototype;
    l_.updateView = l_.updateLayout = l_.updateVisual = function () {
    }, er(s_), ar(s_, {registerWhenExtend: !0});
    var h_ = function () {
        var t = jn();
        return function (e) {
            var i = t(e), n = e.pipelineContext, r = i.large, a = i.progressiveRender, o = i.large = n.large,
                s = i.progressiveRender = n.progressiveRender;
            return !!(r ^ o || a ^ s) && "reset"
        }
    }, u_ = jn(), c_ = h_();
    Bs.prototype = {
        type: "chart", init: function () {
        }, render: function () {
        }, highlight: function (t, e, i, n) {
            Fs(t.getData(), n, "emphasis")
        }, downplay: function (t, e, i, n) {
            Fs(t.getData(), n, "normal")
        }, remove: function () {
            this.group.removeAll()
        }, dispose: function () {
        }, incrementalPrepareRender: null, incrementalRender: null, updateTransform: null, filterForExposedEvent: null
    };
    var d_ = Bs.prototype;
    d_.updateView = d_.updateLayout = d_.updateVisual = function (t, e, i, n) {
        this.render(t, e, i, n)
    }, er(Bs, ["dispose"]), ar(Bs, {registerWhenExtend: !0}), Bs.markUpdateMethod = function (t, e) {
        u_(t).updateMethod = e
    };
    var f_ = {
        incrementalPrepareRender: {
            progress: function (t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
            }
        }, render: {
            forceFirstProgress: !0, progress: function (t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload)
            }
        }
    }, p_ = "\x00__throttleOriginMethod", g_ = "\x00__throttleRate", v_ = "\x00__throttleType", m_ = {
        createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
            var i = t.getData(), n = (t.visualColorAccessPath || "itemStyle.color").split("."),
                r = t.get(n) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (i.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof Ey || i.each(function (e) {
                    i.setItemVisual(e, "color", r(t.getDataParams(e)))
                });
                var a = function (t, e) {
                    var i = t.getItemModel(e), r = i.get(n, !0);
                    null != r && t.setItemVisual(e, "color", r)
                };
                return {dataEach: i.hasItemOption ? a : null}
            }
        }
    }, y_ = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，"},
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {middle: "；", end: "。"}
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {middle: "，", end: ""}
            }
        }
    }, x_ = function (t, e) {
        function i(t, e) {
            if ("string" != typeof t) return t;
            var i = t;
            return f(e, function (t, e) {
                i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
            }), i
        }

        function n(t) {
            var e = o.get(t);
            if (null == e) {
                for (var i = t.split("."), n = y_.aria, r = 0; r < i.length; ++r) n = n[i[r]];
                return n
            }
            return e
        }

        function r() {
            var t = e.getModel("title").option;
            return t && t.length && (t = t[0]), t && t.text
        }

        function a(t) {
            return y_.series.typeNames[t] || "自定义图"
        }

        var o = e.getModel("aria");
        if (o.get("show")) {
            if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
            var s = 0;
            e.eachSeries(function () {
                ++s
            }, this);
            var l, h = o.get("data.maxCount") || 10, u = o.get("series.maxCount") || 10, c = Math.min(s, u);
            if (!(1 > s)) {
                var d = r();
                l = d ? i(n("general.withTitle"), {title: d}) : n("general.withoutTitle");
                var p = [], g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
                l += i(n(g), {seriesCount: s}), e.eachSeries(function (t, e) {
                    if (c > e) {
                        var r, o = t.get("name"), l = "series." + (s > 1 ? "multiple" : "single") + ".";
                        r = n(o ? l + "withName" : l + "withoutName"), r = i(r, {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: a(t.subType)
                        });
                        var u = t.getData();
                        window.data = u, r += u.count() > h ? i(n("data.partialData"), {displayCnt: h}) : n("data.allData");
                        for (var d = [], f = 0; f < u.count(); f++) if (h > f) {
                            var g = u.getName(f), v = Ss(u, f);
                            d.push(i(n(g ? "data.withName" : "data.withoutName"), {name: g, value: v}))
                        }
                        r += d.join(n("data.separator.middle")) + n("data.separator.end"), p.push(r)
                    }
                }), l += p.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), t.setAttribute("aria-label", l)
            }
        }
    }, __ = Math.PI, w_ = function (t, e) {
        e = e || {}, s(e, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var i = new Dy({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4}), n = new Oy({
            shape: {startAngle: -__ / 2, endAngle: -__ / 2 + .1, r: 10},
            style: {stroke: e.color, lineCap: "round", lineWidth: 5},
            zlevel: e.zlevel,
            z: 10001
        }), r = new Dy({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            }, zlevel: e.zlevel, z: 10001
        });
        n.animateShape(!0).when(1e3, {endAngle: 3 * __ / 2}).start("circularInOut"), n.animateShape(!0).when(1e3, {startAngle: 3 * __ / 2}).delay(300).start("circularInOut");
        var a = new lv;
        return a.add(n), a.add(r), a.add(i), a.resize = function () {
            var e = t.getWidth() / 2, a = t.getHeight() / 2;
            n.setShape({cx: e, cy: a});
            var o = n.shape.r;
            r.setShape({x: e - o, y: a - o, width: 2 * o, height: 2 * o}), i.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, a.resize(), a
    }, b_ = Xs.prototype;
    b_.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, b_.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id), n = i.context,
                r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
                a = r ? i.step : null, o = n && n.modDataCount, s = null != o ? Math.ceil(o / a) : null;
            return {step: a, modBy: s, modDataCount: o}
        }
    }, b_.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, b_.updateStreamModes = function (t, e) {
        var i = this._pipelineMap.get(t.uid), n = t.getData(), r = n.count(),
            a = i.progressiveEnabled && e.incrementalPrepareRender && r >= i.threshold,
            o = t.get("large") && r >= t.get("largeThreshold"), s = "mod" === t.get("progressiveChunkMode") ? r : null;
        t.pipelineContext = i.context = {progressiveRender: a, modDataCount: s, large: o}
    }, b_.restorePipelines = function (t) {
        var e = this, i = e._pipelineMap = N();
        t.eachSeries(function (t) {
            var n = t.getProgressive(), r = t.uid;
            i.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(n || 700),
                count: 0
            }), nl(e, t, t.dataTask)
        })
    }, b_.prepareStageTasks = function () {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), i = this.api;
        f(this._allHandlers, function (n) {
            var r = t.get(n.uid) || t.set(n.uid, []);
            n.reset && js(this, n, r, e, i), n.overallReset && qs(this, n, r, e, i)
        }, this)
    }, b_.prepareView = function (t, e, i, n) {
        var r = t.renderTask, a = r.context;
        a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, nl(this, e, r)
    }, b_.performDataProcessorTasks = function (t, e) {
        Ys(this, this._dataProcessorHandlers, t, e, {block: !0})
    }, b_.performVisualTasks = function (t, e, i) {
        Ys(this, this._visualHandlers, t, e, i)
    }, b_.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, b_.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var S_ = b_.updatePayload = function (t, e) {
        "remain" !== e && (t.context.payload = e)
    }, M_ = el(0);
    Xs.wrapStageHandler = function (t, e) {
        return w(t) && (t = {
            overallReset: t,
            seriesType: rl(t)
        }), t.uid = Za("stageHandler"), e && (t.visualType = e), t
    };
    var I_, T_ = {}, C_ = {};
    al(T_, Ex), al(C_, $o), T_.eachSeriesByType = T_.eachRawSeriesByType = function (t) {
        I_ = t
    }, T_.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (I_ = t.subType)
    };
    var A_ = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        D_ = {
            color: A_,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], A_]
        }, k_ = "#eee", P_ = function () {
            return {
                axisLine: {lineStyle: {color: k_}},
                axisTick: {lineStyle: {color: k_}},
                axisLabel: {textStyle: {color: k_}},
                splitLine: {lineStyle: {type: "dashed", color: "#aaa"}},
                splitArea: {areaStyle: {color: k_}}
            }
        },
        L_ = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        O_ = {
            color: L_,
            backgroundColor: "#333",
            tooltip: {axisPointer: {lineStyle: {color: k_}, crossStyle: {color: k_}}},
            legend: {textStyle: {color: k_}},
            textStyle: {color: k_},
            title: {textStyle: {color: k_}},
            toolbox: {iconStyle: {normal: {borderColor: k_}}},
            dataZoom: {textStyle: {color: k_}},
            visualMap: {textStyle: {color: k_}},
            timeline: {
                lineStyle: {color: k_},
                itemStyle: {normal: {color: L_[1]}},
                label: {normal: {textStyle: {color: k_}}},
                controlStyle: {normal: {color: k_, borderColor: k_}}
            },
            timeAxis: P_(),
            logAxis: P_(),
            valueAxis: P_(),
            categoryAxis: P_(),
            line: {symbol: "circle"},
            graph: {color: L_},
            gauge: {title: {textStyle: {color: k_}}},
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    O_.categoryAxis.splitLine.show = !1, yx.extend({
        type: "dataset",
        defaultOption: {seriesLayoutBy: Px, sourceHeader: null, dimensions: null, source: null},
        optionUpdated: function () {
            Po(this)
        }
    }), s_.extend({type: "dataset"});
    var z_ = Fr.extend({
        type: "ellipse", shape: {cx: 0, cy: 0, rx: 0, ry: 0}, buildPath: function (t, e) {
            var i = .5522848, n = e.cx, r = e.cy, a = e.rx, o = e.ry, s = a * i, l = o * i;
            t.moveTo(n - a, r), t.bezierCurveTo(n - a, r - l, n - s, r - o, n, r - o), t.bezierCurveTo(n + s, r - o, n + a, r - l, n + a, r), t.bezierCurveTo(n + a, r + l, n + s, r + o, n, r + o), t.bezierCurveTo(n - s, r + o, n - a, r + l, n - a, r), t.closePath()
        }
    }), E_ = /[\s,]+/;
    sl.prototype.parse = function (t, e) {
        e = e || {};
        var i = ol(t);
        if (!i) throw new Error("Illegal svg");
        var n = new lv;
        this._root = n;
        var r = i.getAttribute("viewBox") || "", a = parseFloat(i.getAttribute("width") || e.width),
            o = parseFloat(i.getAttribute("height") || e.height);
        isNaN(a) && (a = null), isNaN(o) && (o = null), cl(i, n, null, !0);
        for (var s = i.firstChild; s;) this._parseNode(s, n), s = s.nextSibling;
        var l, h;
        if (r) {
            var u = z(r).split(E_);
            u.length >= 4 && (l = {
                x: parseFloat(u[0] || 0),
                y: parseFloat(u[1] || 0),
                width: parseFloat(u[2]),
                height: parseFloat(u[3])
            })
        }
        if (l && null != a && null != o && (h = gl(l, a, o), !e.ignoreViewBox)) {
            var c = n;
            n = new lv, n.add(c), c.scale = h.scale.slice(), c.position = h.position.slice()
        }
        return e.ignoreRootClip || null == a || null == o || n.setClipPath(new Dy({
            shape: {
                x: 0,
                y: 0,
                width: a,
                height: o
            }
        })), {root: n, width: a, height: o, viewBoxRect: l, viewBoxTransform: h}
    }, sl.prototype._parseNode = function (t, e) {
        var i = t.nodeName.toLowerCase();
        "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
        var n;
        if (this._isDefine) {
            var r = B_[i];
            if (r) {
                var a = r.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = a)
            }
        } else {
            var r = R_[i];
            r && (n = r.call(this, t, e), e.add(n))
        }
        for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, n), 3 === s.nodeType && this._isText && this._parseText(s, n), s = s.nextSibling;
        "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1)
    }, sl.prototype._parseText = function (t, e) {
        if (1 === t.nodeType) {
            var i = t.getAttribute("dx") || 0, n = t.getAttribute("dy") || 0;
            this._textX += parseFloat(i), this._textY += parseFloat(n)
        }
        var r = new xy({
            style: {text: t.textContent, transformText: !0},
            position: [this._textX || 0, this._textY || 0]
        });
        hl(e, r), cl(t, r, this._defs);
        var a = r.style.fontSize;
        a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
        var o = r.getBoundingRect();
        return this._textX += o.width, e.add(r), r
    };
    var R_ = {
            g: function (t, e) {
                var i = new lv;
                return hl(e, i), cl(t, i, this._defs), i
            }, rect: function (t, e) {
                var i = new Dy;
                return hl(e, i), cl(t, i, this._defs), i.setShape({
                    x: parseFloat(t.getAttribute("x") || 0),
                    y: parseFloat(t.getAttribute("y") || 0),
                    width: parseFloat(t.getAttribute("width") || 0),
                    height: parseFloat(t.getAttribute("height") || 0)
                }), i
            }, circle: function (t, e) {
                var i = new _y;
                return hl(e, i), cl(t, i, this._defs), i.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    r: parseFloat(t.getAttribute("r") || 0)
                }), i
            }, line: function (t, e) {
                var i = new ky;
                return hl(e, i), cl(t, i, this._defs), i.setShape({
                    x1: parseFloat(t.getAttribute("x1") || 0),
                    y1: parseFloat(t.getAttribute("y1") || 0),
                    x2: parseFloat(t.getAttribute("x2") || 0),
                    y2: parseFloat(t.getAttribute("y2") || 0)
                }), i
            }, ellipse: function (t, e) {
                var i = new z_;
                return hl(e, i), cl(t, i, this._defs), i.setShape({
                    cx: parseFloat(t.getAttribute("cx") || 0),
                    cy: parseFloat(t.getAttribute("cy") || 0),
                    rx: parseFloat(t.getAttribute("rx") || 0),
                    ry: parseFloat(t.getAttribute("ry") || 0)
                }), i
            }, polygon: function (t, e) {
                var i = t.getAttribute("points");
                i && (i = ul(i));
                var n = new Cy({shape: {points: i || []}});
                return hl(e, n), cl(t, n, this._defs), n
            }, polyline: function (t, e) {
                var i = new Fr;
                hl(e, i), cl(t, i, this._defs);
                var n = t.getAttribute("points");
                n && (n = ul(n));
                var r = new Ay({shape: {points: n || []}});
                return r
            }, image: function (t, e) {
                var i = new yn;
                return hl(e, i), cl(t, i, this._defs), i.setStyle({
                    image: t.getAttribute("xlink:href"),
                    x: t.getAttribute("x"),
                    y: t.getAttribute("y"),
                    width: t.getAttribute("width"),
                    height: t.getAttribute("height")
                }), i
            }, text: function (t, e) {
                var i = t.getAttribute("x") || 0, n = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0,
                    a = t.getAttribute("dy") || 0;
                this._textX = parseFloat(i) + parseFloat(r), this._textY = parseFloat(n) + parseFloat(a);
                var o = new lv;
                return hl(e, o), cl(t, o, this._defs), o
            }, tspan: function (t, e) {
                var i = t.getAttribute("x"), n = t.getAttribute("y");
                null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
                var r = t.getAttribute("dx") || 0, a = t.getAttribute("dy") || 0, o = new lv;
                return hl(e, o), cl(t, o, this._defs), this._textX += r, this._textY += a, o
            }, path: function (t, e) {
                var i = t.getAttribute("d") || "", n = Hr(i);
                return hl(e, n), cl(t, n, this._defs), n
            }
        }, B_ = {
            lineargradient: function (t) {
                var e = parseInt(t.getAttribute("x1") || 0, 10), i = parseInt(t.getAttribute("y1") || 0, 10),
                    n = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10),
                    a = new Ry(e, i, n, r);
                return ll(t, a), a
            }, radialgradient: function () {
            }
        }, N_ = {
            fill: "fill",
            stroke: "stroke",
            "stroke-width": "lineWidth",
            opacity: "opacity",
            "fill-opacity": "fillOpacity",
            "stroke-opacity": "strokeOpacity",
            "stroke-dasharray": "lineDash",
            "stroke-dashoffset": "lineDashOffset",
            "stroke-linecap": "lineCap",
            "stroke-linejoin": "lineJoin",
            "stroke-miterlimit": "miterLimit",
            "font-family": "fontFamily",
            "font-size": "fontSize",
            "font-style": "fontStyle",
            "font-weight": "fontWeight",
            "text-align": "textAlign",
            "alignment-baseline": "textBaseline"
        }, F_ = /url\(\s*#(.*?)\)/, V_ = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
        W_ = /([^\s:;]+)\s*:\s*([^:;]+)/g, G_ = N(), H_ = {
            registerMap: function (t, e, i) {
                var n;
                return _(e) ? n = e : e.svg ? n = [{
                    type: "svg",
                    source: e.svg,
                    specialAreas: e.specialAreas
                }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
                    type: "geoJSON",
                    source: e,
                    specialAreas: i
                }]), f(n, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON");
                    var i = Z_[e];
                    i(t)
                }), G_.set(t, n)
            }, retrieveMap: function (t) {
                return G_.get(t)
            }
        }, Z_ = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = ol(t.source)
            }
        }, X_ = O, Y_ = f, j_ = w, q_ = S, U_ = yx.parseClassType, $_ = "4.2.0", K_ = {zrender: "4.0.5"}, Q_ = 1, J_ = 1e3,
        tw = 5e3, ew = 1e3, iw = 2e3, nw = 3e3, rw = 4e3, aw = 5e3, ow = {
            PROCESSOR: {FILTER: J_, STATISTIC: tw},
            VISUAL: {LAYOUT: ew, GLOBAL: iw, CHART: nw, COMPONENT: rw, BRUSH: aw}
        }, sw = "__flagInMainProcess", lw = "__optionUpdated", hw = /^[a-zA-Z0-9_]+$/;
    ml.prototype.on = vl("on"), ml.prototype.off = vl("off"), ml.prototype.one = vl("one"), c(ml, bg);
    var uw = yl.prototype;
    uw._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[lw]) {
                var e = this[lw].silent;
                this[sw] = !0, _l(this), cw.update.call(this), this[sw] = !1, this[lw] = !1, Ml.call(this, e), Il.call(this, e)
            } else if (t.unfinished) {
                var i = Q_, n = this._model, r = this._api;
                t.unfinished = !1;
                do {
                    var a = +new Date;
                    t.performSeriesTasks(n), t.performDataProcessorTasks(n), bl(this, n), t.performVisualTasks(n), Pl(this, this._model, r, "remain"), i -= +new Date - a
                } while (i > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, uw.getDom = function () {
        return this._dom
    }, uw.getZr = function () {
        return this._zr
    }, uw.setOption = function (t, e, i) {
        var n;
        if (q_(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[sw] = !0, !this._model || e) {
            var r = new Qo(this._api), a = this._theme, o = this._model = new Ex(null, null, a, r);
            o.scheduler = this._scheduler, o.init(null, null, a, r)
        }
        this._model.setOption(t, vw), i ? (this[lw] = {silent: n}, this[sw] = !1) : (_l(this), cw.update.call(this), this._zr.flush(), this[lw] = !1, this[sw] = !1, Ml.call(this, n), Il.call(this, n))
    }, uw.setTheme = function () {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, uw.getModel = function () {
        return this._model
    }, uw.getOption = function () {
        return this._model && this._model.getOption()
    }, uw.getWidth = function () {
        return this._zr.getWidth()
    }, uw.getHeight = function () {
        return this._zr.getHeight()
    }, uw.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, uw.getRenderedCanvas = function (t) {
        if (tg.canvasSupported) {
            t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
            var e = this._zr;
            return e.painter.getRenderedCanvas(t)
        }
    }, uw.getSvgDataUrl = function () {
        if (tg.svgSupported) {
            var t = this._zr, e = t.storage.getDisplayList();
            return f(e, function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, uw.getDataURL = function (t) {
        t = t || {};
        var e = t.excludeComponents, i = this._model, n = [], r = this;
        Y_(e, function (t) {
            i.eachComponent({mainType: t}, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (n.push(e), e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return Y_(n, function (t) {
            t.group.ignore = !1
        }), a
    }, uw.getConnectedDataURL = function (t) {
        if (tg.canvasSupported) {
            var e = this.group, i = Math.min, r = Math.max, a = 1 / 0;
            if (bw[e]) {
                var o = a, s = a, l = -a, h = -a, u = [], c = t && t.pixelRatio || 1;
                f(ww, function (a) {
                    if (a.group === e) {
                        var c = a.getRenderedCanvas(n(t)), d = a.getDom().getBoundingClientRect();
                        o = i(d.left, o), s = i(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        })
                    }
                }), o *= c, s *= c, l *= c, h *= c;
                var d = l - o, p = h - s, g = cg();
                g.width = d, g.height = p;
                var v = On(g);
                return Y_(u, function (t) {
                    var e = new yn({style: {x: t.left * c - o, y: t.top * c - s, image: t.dom}});
                    v.add(e)
                }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, uw.convertToPixel = x(xl, "convertToPixel"), uw.convertFromPixel = x(xl, "convertFromPixel"), uw.containPixel = function (t, e) {
        var i, n = this._model;
        return t = qn(n, t), f(t, function (t, n) {
            n.indexOf("Models") >= 0 && f(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (i |= a.containPoint(e, t))
                }
            }, this)
        }, this), !!i
    }, uw.getVisual = function (t, e) {
        var i = this._model;
        t = qn(i, t, {defaultMainType: "series"});
        var n = t.seriesModel, r = n.getData(),
            a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
        return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
    }, uw.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, uw.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var cw = {
        prepareAndUpdate: function (t) {
            _l(this), cw.update.call(this, t)
        }, update: function (t) {
            var e = this._model, i = this._api, n = this._zr, r = this._coordSysMgr, a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), bl(this, e), r.update(e, i), Al(e), a.performVisualTasks(e, t), Dl(this, e, i, t);
                var o = e.get("backgroundColor") || "transparent";
                if (tg.canvasSupported) n.setBackgroundColor(o); else {
                    var s = He(o);
                    o = Qe(s, "rgb"), 0 === s[3] && (o = "transparent")
                }
                Ll(e, i)
            }
        }, updateTransform: function (t) {
            var e = this._model, i = this, n = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (a, o) {
                    var s = i.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, n, t);
                        l && l.update && r.push(s)
                    } else r.push(s)
                });
                var a = N();
                e.eachSeries(function (r) {
                    var o = i._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, n, t);
                        s && s.update && a.set(r.uid, 1)
                    } else a.set(r.uid, 1)
                }), Al(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }), Pl(i, e, n, t, a), Ll(e, this._api)
            }
        }, updateView: function (t) {
            var e = this._model;
            e && (Bs.markUpdateMethod(t, "updateView"), Al(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), Dl(this, this._model, this._api, t), Ll(e, this._api))
        }, updateVisual: function (t) {
            cw.update.call(this, t)
        }, updateLayout: function (t) {
            cw.update.call(this, t)
        }
    };
    uw.resize = function (t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var i = e.resetOption("media"), n = t && t.silent;
            this[sw] = !0, i && _l(this), cw.update.call(this), this[sw] = !1, Ml.call(this, n), Il.call(this, n)
        }
    }, uw.showLoading = function (t, e) {
        if (q_(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), _w[t]) {
            var i = _w[t](this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i)
        }
    }, uw.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, uw.makeActionFromEvent = function (t) {
        var e = o({}, t);
        return e.type = pw[t.type], e
    }, uw.dispatchAction = function (t, e) {
        if (q_(e) || (e = {silent: !!e}), fw[t.type] && this._model) {
            if (this[sw]) return void this._pendingActions.push(t);
            Sl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && tg.browser.weChat && this._throttledZrFlush(), Ml.call(this, e.silent), Il.call(this, e.silent)
        }
    }, uw.appendData = function (t) {
        var e = t.seriesIndex, i = this.getModel(), n = i.getSeriesByIndex(e);
        n.appendData(t), this._scheduler.unfinished = !0
    }, uw.on = vl("on"), uw.off = vl("off"), uw.one = vl("one");
    var dw = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    uw._initEvents = function () {
        Y_(dw, function (t) {
            this._zr.on(t, function (e) {
                var i, n = this.getModel(), r = e.target, a = "globalout" === t;
                if (a) i = {}; else if (r && null != r.dataIndex) {
                    var s = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                    i = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
                } else r && r.eventData && (i = o({}, r.eventData));
                if (i) {
                    var l = i.componentType, h = i.componentIndex;
                    ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", h = i.seriesIndex);
                    var u = l && null != h && n.getComponent(l, h),
                        c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                    i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: i,
                        model: u,
                        view: c
                    }, this.trigger(t, i)
                }
            }, this)
        }, this), Y_(pw, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, uw.isDisposed = function () {
        return this._disposed
    }, uw.clear = function () {
        this.setOption({series: []}, !0)
    }, uw.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, $n(this.getDom(), Iw, "");
            var t = this._api, e = this._model;
            Y_(this._componentsViews, function (i) {
                i.dispose(e, t)
            }), Y_(this._chartsViews, function (i) {
                i.dispose(e, t)
            }), this._zr.dispose(), delete ww[this.id]
        }
    }, c(yl, bg), Bl.prototype = {
        constructor: Bl, normalizeQuery: function (t) {
            var e = {}, i = {}, n = {};
            if (b(t)) {
                var r = U_(t);
                e.mainType = r.main || null, e.subType = r.sub || null
            } else {
                var a = ["Index", "Name", "Id"], o = {name: 1, dataIndex: 1, dataType: 1};
                f(t, function (t, r) {
                    for (var s = !1, l = 0; l < a.length; l++) {
                        var h = a[l], u = r.lastIndexOf(h);
                        if (u > 0 && u === r.length - h.length) {
                            var c = r.slice(0, u);
                            "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0)
                        }
                    }
                    o.hasOwnProperty(r) && (i[r] = t, s = !0), s || (n[r] = t)
                })
            }
            return {cptQuery: e, dataQuery: i, otherQuery: n}
        }, filter: function (t, e) {
            function i(t, e, i, n) {
                return null == t[i] || e[n || i] === t[i]
            }

            var n = this.eventInfo;
            if (!n) return !0;
            var r = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
            if (!o || !s) return !0;
            var l = e.cptQuery, h = e.dataQuery;
            return i(l, o, "mainType") && i(l, o, "subType") && i(l, o, "index", "componentIndex") && i(l, o, "name") && i(l, o, "id") && i(h, a, "name") && i(h, a, "dataIndex") && i(h, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
        }, afterTrigger: function () {
            this.eventInfo = null
        }
    };
    var fw = {}, pw = {}, gw = [], vw = [], mw = [], yw = [], xw = {}, _w = {}, ww = {}, bw = {}, Sw = new Date - 0,
        Mw = new Date - 0, Iw = "_echarts_instance_", Tw = Wl;
    Jl(iw, m_), Yl(Ux), jl(tw, $x), eh("default", w_), Ul({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, V), Ul({type: "downplay", event: "downplay", update: "downplay"}, V), Xl("light", D_), Xl("dark", O_);
    var Cw = {};
    uh.prototype = {
        constructor: uh, add: function (t) {
            return this._add = t, this
        }, update: function (t) {
            return this._update = t, this
        }, remove: function (t) {
            return this._remove = t, this
        }, execute: function () {
            var t, e = this._old, i = this._new, n = {}, r = {}, a = [], o = [];
            for (ch(e, n, a, "_oldKeyGetter", this), ch(i, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                var s = a[t], l = r[s];
                if (null != l) {
                    var h = l.length;
                    h ? (1 === h && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
                } else this._remove && this._remove(t)
            }
            for (var t = 0; t < o.length; t++) {
                var s = o[t];
                if (r.hasOwnProperty(s)) {
                    var l = r[s];
                    if (null == l) continue;
                    if (l.length) for (var u = 0, h = l.length; h > u; u++) this._add && this._add(l[u]); else this._add && this._add(l)
                }
            }
        }
    };
    var Aw = N(["tooltip", "label", "itemName", "itemId", "seriesName"]), Dw = S, kw = "undefined", Pw = "e\x00\x00",
        Lw = {
            "float": typeof Float64Array === kw ? Array : Float64Array,
            "int": typeof Int32Array === kw ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, Ow = typeof Uint32Array === kw ? Array : Uint32Array, zw = typeof Uint16Array === kw ? Array : Uint16Array,
        Ew = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        Rw = ["_extent", "_approximateExtent", "_rawExtent"], Bw = function (t, e) {
            t = t || ["x", "y"];
            for (var i = {}, n = [], r = {}, a = 0; a < t.length; a++) {
                var o = t[a];
                b(o) && (o = {name: o});
                var s = o.name;
                o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, n.push(s), i[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = dh(this), this._invertedIndicesMap = r, this._calculationInfo = {}
        }, Nw = Bw.prototype;
    Nw.type = "list", Nw.hasItemOption = !0, Nw.getDimension = function (t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t
    }, Nw.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, Nw.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, Nw.mapDimension = function (t, e) {
        var i = this._dimensionsSummary;
        if (null == e) return i.encodeFirstDimNotExtra[t];
        var n = i.encode[t];
        return e === !0 ? (n || []).slice() : n && n[e]
    }, Nw.initData = function (t, e, i) {
        var n = ko.isInstance(t) || d(t);
        n && (t = new vs(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = t_[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, Nw.getProvider = function () {
        return this._rawData
    }, Nw.appendData = function (t) {
        var e = this._rawData, i = this.count();
        e.appendData(t);
        var n = e.count();
        e.persistent || (n += i), this._initDataFromProvider(i, n)
    }, Nw._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
                var v = o[g];
                c[v] || (c[v] = Th());
                var m = l[v];
                0 === m.otherDims.itemName && (i = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
                var y = Lw[m.type];
                a[v] || (a[v] = []);
                var x = a[v][p];
                if (x && x.length < n) {
                    for (var _ = new y(Math.min(e - p * n, n)), w = 0; w < x.length; w++) _[w] = x[w];
                    a[v][p] = _
                }
                for (var b = f * n; e > b; b += n) a[v].push(new y(Math.min(e - b, n)));
                this._chunkCount = a[v].length
            }
            for (var S = new Array(s), M = t; e > M; M++) {
                S = r.getItem(M, S);
                for (var I = Math.floor(M / n), T = M % n, b = 0; s > b; b++) {
                    var v = o[b], C = a[v][I], A = this._dimValueGetter(S, v, M, b);
                    C[T] = A;
                    var D = c[v];
                    A < D[0] && (D[0] = A), A > D[1] && (D[1] = A)
                }
                if (!r.pure) {
                    var k = h[M];
                    if (S && null == k) if (null != S.name) h[M] = k = S.name; else if (null != i) {
                        var P = o[i], L = a[P][I];
                        if (L) {
                            k = L[T];
                            var O = l[P].ordinalMeta;
                            O && O.categories.length && (k = O.categories[k])
                        }
                    }
                    var z = null == S ? null : S.id;
                    null == z && null != k && (d[k] = d[k] || 0, z = k, d[k] > 0 && (z += "__ec__" + d[k]), d[k]++), null != z && (u[M] = z)
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, yh(this)
        }
    }, Nw.count = function () {
        return this._count
    }, Nw.getIndices = function () {
        var t, e = this._indices;
        if (e) {
            var i = e.constructor, n = this._count;
            if (i === Array) {
                t = new i(n);
                for (var r = 0; n > r; r++) t[r] = e[r]
            } else t = new i(e.buffer, 0, n)
        } else for (var i = gh(this), t = new i(this.count()), r = 0; r < t.length; r++) t[r] = r;
        return t
    }, Nw.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return 0 / 0;
        var i = this._storage;
        if (!i[t]) return 0 / 0;
        e = this.getRawIndex(e);
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = i[t][n], o = a[r];
        return o
    }, Nw.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
        var i = this._storage[t];
        if (!i) return 0 / 0;
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize, a = i[n];
        return a[r]
    }, Nw._getFast = function (t, e) {
        var i = Math.floor(e / this._chunkSize), n = e % this._chunkSize, r = this._storage[t][i];
        return r[n]
    }, Nw.getValues = function (t, e) {
        var i = [];
        _(t) || (e = t, t = this.dimensions);
        for (var n = 0, r = t.length; r > n; n++) i.push(this.get(t[n], e));
        return i
    }, Nw.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, i = this._dimensionInfos, n = 0, r = e.length; r > n; n++) if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
        return !0
    }, Nw.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = this._storage[t], i = Th();
        if (!e) return i;
        var n, r = this.count(), a = !this._indices;
        if (a) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        n = i;
        for (var o = n[0], s = n[1], l = 0; r > l; l++) {
            var h = this._getFast(t, this.getRawIndex(l));
            o > h && (o = h), h > s && (s = h)
        }
        return n = [o, s], this._extent[t] = n, n
    }, Nw.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, Nw.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, Nw.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, Nw.setCalculationInfo = function (t, e) {
        Dw(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, Nw.getSum = function (t) {
        var e = this._storage[t], i = 0;
        if (e) for (var n = 0, r = this.count(); r > n; n++) {
            var a = this.get(t, n);
            isNaN(a) || (i += a)
        }
        return i
    }, Nw.getMedian = function (t) {
        var e = [];
        this.each(t, function (t) {
            isNaN(t) || e.push(t)
        });
        var i = [].concat(e).sort(function (t, e) {
            return t - e
        }), n = this.count();
        return 0 === n ? 0 : n % 2 === 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
    }, Nw.rawIndexOf = function (t, e) {
        var i = t && this._invertedIndicesMap[t], n = i[e];
        return null == n || isNaN(n) ? -1 : n
    }, Nw.indexOfName = function (t) {
        for (var e = 0, i = this.count(); i > e; e++) if (this.getName(e) === t) return e;
        return -1
    }, Nw.indexOfRawIndex = function (t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || 0 > t) return -1;
        var e = this._indices, i = e[t];
        if (null != i && i < this._count && i === t) return t;
        for (var n = 0, r = this._count - 1; r >= n;) {
            var a = (n + r) / 2 | 0;
            if (e[a] < t) n = a + 1; else {
                if (!(e[a] > t)) return a;
                r = a - 1
            }
        }
        return -1
    }, Nw.indicesOfNearest = function (t, e, i) {
        var n = this._storage, r = n[t], a = [];
        if (!r) return a;
        null == i && (i = 1 / 0);
        for (var o = Number.MAX_VALUE, s = -1, l = 0, h = this.count(); h > l; l++) {
            var u = e - this.get(t, l), c = Math.abs(u);
            i >= u && o >= c && ((o > c || u >= 0 && 0 > s) && (o = c, s = u, a.length = 0), a.push(l))
        }
        return a
    }, Nw.getRawIndex = _h, Nw.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], i = 0; i < this.dimensions.length; i++) {
            var n = this.dimensions[i];
            e.push(this.get(n, t))
        }
        return e
    }, Nw.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || xh(this, this._nameDimIdx, e) || ""
    }, Nw.getId = function (t) {
        return bh(this, this.getRawIndex(t))
    }, Nw.each = function (t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Sh(t), this.getDimension, this);
            for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
                case 0:
                    e.call(i, a);
                    break;
                case 1:
                    e.call(i, this.get(t[0], a), a);
                    break;
                case 2:
                    e.call(i, this.get(t[0], a), this.get(t[1], a), a);
                    break;
                default:
                    for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
                    s[o] = a, e.apply(i, s)
            }
        }
    }, Nw.filterSelf = function (t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(Sh(t), this.getDimension, this);
            for (var r = this.count(), a = gh(this), o = new a(r), s = [], l = t.length, h = 0, u = t[0], c = 0; r > c; c++) {
                var d, f = this.getRawIndex(c);
                if (0 === l) d = e.call(i, c); else if (1 === l) {
                    var g = this._getFast(u, f);
                    d = e.call(i, g, c)
                } else {
                    for (var v = 0; l > v; v++) s[v] = this._getFast(u, f);
                    s[v] = c, d = e.apply(i, s)
                }
                d && (o[h++] = f)
            }
            return r > h && (this._indices = o), this._count = h, this._extent = {}, this.getRawIndex = this._indices ? wh : _h, this
        }
    }, Nw.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(i);
            var n = e.length;
            if (n) {
                var r = this.count(), a = gh(this), o = new a(r), s = 0, l = e[0], h = t[l][0], u = t[l][1], c = !1;
                if (!this._indices) {
                    var d = 0;
                    if (1 === n) {
                        for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++) for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m];
                            (y >= h && u >= y || isNaN(y)) && (o[s++] = d), d++
                        }
                        c = !0
                    } else if (2 === n) {
                        for (var f = this._storage[l], x = this._storage[e[1]], _ = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++) for (var g = f[p], b = x[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                            var y = g[m], S = b[m];
                            (y >= h && u >= y || isNaN(y)) && (S >= _ && w >= S || isNaN(S)) && (o[s++] = d), d++
                        }
                        c = !0
                    }
                }
                if (!c) if (1 === n) for (var m = 0; r > m; m++) {
                    var M = this.getRawIndex(m), y = this._getFast(l, M);
                    (y >= h && u >= y || isNaN(y)) && (o[s++] = M)
                } else for (var m = 0; r > m; m++) {
                    for (var I = !0, M = this.getRawIndex(m), p = 0; n > p; p++) {
                        var T = e[p], y = this._getFast(i, M);
                        (y < t[T][0] || y > t[T][1]) && (I = !1)
                    }
                    I && (o[s++] = this.getRawIndex(m))
                }
                return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? wh : _h, this
            }
        }
    }, Nw.mapArray = function (t, e, i, n) {
        "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, i), r
    }, Nw.map = function (t, e, i, n) {
        i = i || n || this, t = p(Sh(t), this.getDimension, this);
        var r = Mh(this, t);
        r._indices = this._indices, r.getRawIndex = r._indices ? wh : _h;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; h > d; d++) {
            for (var f = 0; l > f; f++) u[f] = this.get(t[f], d);
            u[l] = d;
            var g = e && e.apply(i, u);
            if (null != g) {
                "object" != typeof g && (o[0] = g, g = o);
                for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, x = 0; x < g.length; x++) {
                    var _ = t[x], w = g[x], b = c[_], S = a[_];
                    S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, Nw.downSample = function (t, e, i, n) {
        for (var r = Mh(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (gh(this))(h), f = 0, p = 0; h > p; p += s) {
            s > h - p && (s = h - p, o.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / u), y = v % u;
                o[g] = l[m][y]
            }
            var x = i(o), _ = this.getRawIndex(Math.min(p + n(o, x) || 0, h - 1)), w = Math.floor(_ / u), b = _ % u;
            l[w][b] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
        }
        return r._count = f, r._indices = d, r.getRawIndex = wh, r
    }, Nw.getItemModel = function (t) {
        var e = this.hostModel;
        return new Wa(this.getRawDataItem(t), e, e && e.ecModel)
    }, Nw.diff = function (t) {
        var e = this;
        return new uh(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return bh(t, e)
        }, function (t) {
            return bh(e, t)
        })
    }, Nw.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, Nw.setVisual = function (t, e) {
        if (Dw(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
    }, Nw.setLayout = function (t, e) {
        if (Dw(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
    }, Nw.getLayout = function (t) {
        return this._layout[t]
    }, Nw.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, Nw.setItemLayout = function (t, e, i) {
        this._itemLayouts[t] = i ? o(this._itemLayouts[t] || {}, e) : e
    }, Nw.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, Nw.getItemVisual = function (t, e, i) {
        var n = this._itemVisuals[t], r = n && n[e];
        return null != r || i ? r : this.getVisual(e)
    }, Nw.setItemVisual = function (t, e, i) {
        var n = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = n, Dw(e)) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], r[a] = !0); else n[e] = i, r[e] = !0
    }, Nw.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var Fw = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    Nw.setItemGraphicEl = function (t, e) {
        var i = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(Fw, e)), this._graphicEls[t] = e
    }, Nw.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, Nw.eachItemGraphicEl = function (t, e) {
        f(this._graphicEls, function (i, n) {
            i && t && t.call(e, i, n)
        })
    }, Nw.cloneShallow = function (t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new Bw(e, this.hostModel)
        }
        if (t._storage = this._storage, mh(t, this), this._indices) {
            var i = this._indices.constructor;
            t._indices = new i(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? wh : _h, t
    }, Nw.wrapMethod = function (t, e) {
        var i = this[t];
        "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = i.apply(this, arguments);
            return e.apply(this, [t].concat(P(arguments)))
        })
    }, Nw.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], Nw.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var Vw = function (t, e) {
        return e = e || {}, Ch(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    Rh.prototype.parse = function (t) {
        return t
    }, Rh.prototype.getSetting = function (t) {
        return this._setting[t]
    }, Rh.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, Rh.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, Rh.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, Rh.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, Rh.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, Rh.prototype.getExtent = function () {
        return this._extent.slice()
    }, Rh.prototype.setExtent = function (t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
    }, Rh.prototype.isBlank = function () {
        return this._isBlank
    }, Rh.prototype.setBlank = function (t) {
        this._isBlank = t
    }, Rh.prototype.getLabel = null, er(Rh), ar(Rh, {registerWhenExtend: !0}), Bh.createByAxisModel = function (t) {
        var e = t.option, i = e.data, n = i && p(i, Fh);
        return new Bh({categories: n, needCollect: !n, deduplication: e.dedplication !== !1})
    };
    var Ww = Bh.prototype;
    Ww.getOrdinal = function (t) {
        return Nh(this).get(t)
    }, Ww.parseAndCollect = function (t) {
        var e, i = this._needCollect;
        if ("string" != typeof t && !i) return t;
        if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var n = Nh(this);
        return e = n.get(t), null == e && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = 0 / 0), e
    };
    var Gw = Rh.prototype, Hw = Rh.extend({
        type: "ordinal", init: function (t, e) {
            (!t || _(t)) && (t = new Bh({categories: t})), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
        }, parse: function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, contain: function (t) {
            return t = this.parse(t), Gw.contain.call(this, t) && null != this._ordinalMeta.categories[t]
        }, normalize: function (t) {
            return Gw.normalize.call(this, this.parse(t))
        }, scale: function (t) {
            return Math.round(Gw.scale.call(this, t))
        }, getTicks: function () {
            for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
            return t
        }, getLabel: function (t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
        }, count: function () {
            return this._extent[1] - this._extent[0] + 1
        }, unionExtentFromData: function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, getOrdinalMeta: function () {
            return this._ordinalMeta
        }, niceTicks: V, niceExtent: V
    });
    Hw.create = function () {
        return new Hw
    };
    var Zw = $a, Xw = $a, Yw = Rh.extend({
        type: "interval", _interval: 0, _intervalPrecision: 2, setExtent: function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
        }, unionExtent: function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Yw.prototype.setExtent.call(this, e[0], e[1])
        }, getInterval: function () {
            return this._interval
        }, setInterval: function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Wh(t)
        }, getTicks: function () {
            return Zh(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
        }, getLabel: function (t, e) {
            if (null == t) return "";
            var i = e && e.precision;
            return null == i ? i = Ja(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = Xw(t, i, !0), co(t)
        }, niceTicks: function (t, e, i) {
            t = t || 5;
            var n = this._extent, r = n[1] - n[0];
            if (isFinite(r)) {
                0 > r && (r = -r, n.reverse());
                var a = Vh(n, t, e, i);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
            }
        }, niceExtent: function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var i = e[0];
                t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2)
            } else e[1] = 1;
            var n = e[1] - e[0];
            isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Xw(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Xw(Math.ceil(e[1] / r) * r))
        }
    });
    Yw.create = function () {
        return new Yw
    };
    var jw = "__ec_stack_", qw = .5, Uw = "undefined" != typeof Float32Array ? Float32Array : Array, $w = {
            seriesType: "bar", plan: h_(), reset: function (t) {
                function e(t, e) {
                    for (var i, c = new Uw(2 * t.count), d = [], f = [], p = 0; null != (i = t.next());) f[h] = e.get(o, i), f[1 - h] = e.get(s, i), d = n.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
                    e.setLayout({largePoints: c, barWidth: u, valueAxisStart: eu(r, a, !1), valueAxisHorizontal: l})
                }

                if (Jh(t) && tu(t)) {
                    var i = t.getData(), n = t.coordinateSystem, r = n.getBaseAxis(), a = n.getOtherAxis(r),
                        o = i.mapDimension(a.dim), s = i.mapDimension(r.dim), l = a.isHorizontal(), h = l ? 0 : 1,
                        u = Kh(Uh([t]), r, t).width;
                    return u > qw || (u = qw), {progress: e}
                }
            }
        }, Kw = Yw.prototype, Qw = Math.ceil, Jw = Math.floor, tb = 1e3, eb = 60 * tb, ib = 60 * eb, nb = 24 * ib,
        rb = function (t, e, i, n) {
            for (; n > i;) {
                var r = i + n >>> 1;
                t[r][1] < e ? i = r + 1 : n = r
            }
            return i
        }, ab = Yw.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, i = new Date(t);
                return xo(e[0], i, this.getSetting("useUTC"))
            }, niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= nb, e[1] += nb), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                    var i = new Date;
                    e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - nb
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var n = this._interval;
                t.fixMin || (e[0] = $a(Jw(e[0] / n) * n)), t.fixMax || (e[1] = $a(Qw(e[1] / n) * n))
            }, niceTicks: function (t, e, i) {
                t = t || 10;
                var n = this._extent, r = n[1] - n[0], a = r / t;
                null != e && e > a && (a = e), null != i && a > i && (a = i);
                var o = ob.length, s = rb(ob, a, 0, o), l = ob[Math.min(s, o - 1)], h = l[1];
                if ("year" === l[0]) {
                    var u = r / h, c = so(u / t, !0);
                    h *= c
                }
                var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
                    f = [Math.round(Qw((n[0] - d) / h) * h + d), Math.round(Jw((n[1] - d) / h) * h + d)];
                Hh(f, n), this._stepLvl = l, this._interval = h, this._niceExtent = f
            }, parse: function (t) {
                return +ro(t)
            }
        });
    f(["contain", "normalize"], function (t) {
        ab.prototype[t] = function (e) {
            return Kw[t].call(this, this.parse(e))
        }
    });
    var ob = [["hh:mm:ss", tb], ["hh:mm:ss", 5 * tb], ["hh:mm:ss", 10 * tb], ["hh:mm:ss", 15 * tb], ["hh:mm:ss", 30 * tb], ["hh:mm\nMM-dd", eb], ["hh:mm\nMM-dd", 5 * eb], ["hh:mm\nMM-dd", 10 * eb], ["hh:mm\nMM-dd", 15 * eb], ["hh:mm\nMM-dd", 30 * eb], ["hh:mm\nMM-dd", ib], ["hh:mm\nMM-dd", 2 * ib], ["hh:mm\nMM-dd", 6 * ib], ["hh:mm\nMM-dd", 12 * ib], ["MM-dd\nyyyy", nb], ["MM-dd\nyyyy", 2 * nb], ["MM-dd\nyyyy", 3 * nb], ["MM-dd\nyyyy", 4 * nb], ["MM-dd\nyyyy", 5 * nb], ["MM-dd\nyyyy", 6 * nb], ["week", 7 * nb], ["MM-dd\nyyyy", 10 * nb], ["week", 14 * nb], ["week", 21 * nb], ["month", 31 * nb], ["week", 42 * nb], ["month", 62 * nb], ["week", 70 * nb], ["quarter", 95 * nb], ["month", 31 * nb * 4], ["month", 31 * nb * 5], ["half-year", 380 * nb / 2], ["month", 31 * nb * 8], ["month", 31 * nb * 10], ["year", 380 * nb]];
    ab.create = function (t) {
        return new ab({useUTC: t.ecModel.get("useUTC")})
    };
    var sb = Rh.prototype, lb = Yw.prototype, hb = Ja, ub = $a, cb = Math.floor, db = Math.ceil, fb = Math.pow,
        pb = Math.log, gb = Rh.extend({
            type: "log", base: 10, $constructor: function () {
                Rh.apply(this, arguments), this._originalScale = new Yw
            }, getTicks: function () {
                var t = this._originalScale, e = this._extent, i = t.getExtent();
                return p(lb.getTicks.call(this), function (n) {
                    var r = $a(fb(this.base, n));
                    return r = n === e[0] && t.__fixMin ? iu(r, i[0]) : r, r = n === e[1] && t.__fixMax ? iu(r, i[1]) : r
                }, this)
            }, getLabel: lb.getLabel, scale: function (t) {
                return t = sb.scale.call(this, t), fb(this.base, t)
            }, setExtent: function (t, e) {
                var i = this.base;
                t = pb(t) / pb(i), e = pb(e) / pb(i), lb.setExtent.call(this, t, e)
            }, getExtent: function () {
                var t = this.base, e = sb.getExtent.call(this);
                e[0] = fb(t, e[0]), e[1] = fb(t, e[1]);
                var i = this._originalScale, n = i.getExtent();
                return i.__fixMin && (e[0] = iu(e[0], n[0])), i.__fixMax && (e[1] = iu(e[1], n[1])), e
            }, unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = pb(t[0]) / pb(e), t[1] = pb(t[1]) / pb(e), sb.unionExtent.call(this, t)
            }, unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0];
                if (!(1 / 0 === i || 0 >= i)) {
                    var n = ao(i), r = t / i * n;
                    for (.5 >= r && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                    var a = [$a(db(e[0] / n) * n), $a(cb(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = a
                }
            }, niceExtent: function (t) {
                lb.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    f(["contain", "normalize"], function (t) {
        gb.prototype[t] = function (e) {
            return e = pb(e) / pb(this.base), sb[t].call(this, e)
        }
    }), gb.create = function () {
        return new gb
    };
    var vb = {
            getMin: function (t) {
                var e = this.option, i = t || null == e.rangeStart ? e.min : e.rangeStart;
                return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i
            }, getMax: function (t) {
                var e = this.option, i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !C(i) && (i = this.axis.scale.parse(i)), i
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, getCoordSysModel: V, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        }, mb = $r({
            type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath()
            }
        }), yb = $r({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), t.closePath()
            }
        }), xb = $r({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o),
                    l = n - a + o + s, h = Math.asin(s / o), u = Math.cos(h) * o, c = Math.sin(h), d = Math.cos(h),
                    f = .6 * o, p = .7 * o;
                t.moveTo(i - u, l + s), t.arc(i, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath()
            }
        }), _b = $r({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.height, n = e.width, r = e.x, a = e.y, o = n / 3 * 2;
                t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), t.lineTo(r, a), t.closePath()
            }
        }), wb = {line: ky, rect: Dy, roundRect: Dy, square: Dy, circle: _y, diamond: yb, pin: xb, arrow: _b, triangle: mb},
        bb = {
            line: function (t, e, i, n, r) {
                r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2
            }, rect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n
            }, roundRect: function (t, e, i, n, r) {
                r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, r) {
                var a = Math.min(i, n);
                r.x = t, r.y = e, r.width = a, r.height = a
            }, circle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }, pin: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, arrow: function (t, e, i, n, r) {
                r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n
            }, triangle: function (t, e, i, n, r) {
                r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n
            }
        }, Sb = {};
    f(wb, function (t, e) {
        Sb[e] = new t
    });
    var Mb = $r({
        type: "symbol", shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0}, beforeBrush: function () {
            var t = this.style, e = this.shape;
            "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
        }, buildPath: function (t, e, i) {
            var n = e.symbolType, r = Sb[n];
            "none" !== e.symbolType && (r || (n = "rect", r = Sb[n]), bb[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i))
        }
    }), Ib = {isDimensionStacked: Ph, enableDataStack: kh, getStackedDimension: Lh}, Tb = (Object.freeze || Object)({
        createList: pu,
        getLayoutRect: bo,
        dataStack: Ib,
        createScale: gu,
        mixinAxisModelCommonMethods: vu,
        completeDimensions: Ch,
        createDimensions: Vw,
        createSymbol: fu
    }), Cb = 1e-8;
    xu.prototype = {
        constructor: xu, properties: null, getBoundingRect: function () {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) if ("polygon" === o[s].type) {
                var l = o[s].exterior;
                _r(l, r, a), oe(i, i, r), se(n, n, a)
            }
            return 0 === s && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new gi(i[0], i[1], n[0] - i[0], n[1] - i[1])
        }, contain: function (t) {
            var e = this.getBoundingRect(), i = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t:for (var n = 0, r = i.length; r > n; n++) if ("polygon" === i[n].type) {
                var a = i[n].exterior, o = i[n].interiors;
                if (yu(a, t[0], t[1])) {
                    for (var s = 0; s < (o ? o.length : 0); s++) if (yu(o[s])) continue t;
                    return !0
                }
            }
            return !1
        }, transformTo: function (t, e, i, n) {
            var r = this.getBoundingRect(), a = r.width / r.height;
            i ? n || (n = i / a) : i = a * n;
            for (var o = new gi(t, e, i, n), s = r.calculateTransform(o), l = this.geometries, h = 0; h < l.length; h++) if ("polygon" === l[h].type) {
                for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) ae(u[d], u[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
            }
            r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
        }, cloneShallow: function (t) {
            null == t && (t = this.name);
            var e = new xu(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e
        }
    };
    var Ab = function (t) {
        return _u(t), p(v(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var e = t.properties, i = t.geometry, n = i.coordinates, r = [];
            "Polygon" === i.type && r.push({
                type: "polygon",
                exterior: n[0],
                interiors: n.slice(1)
            }), "MultiPolygon" === i.type && f(n, function (t) {
                t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
            });
            var a = new xu(e.name, r, e.cp);
            return a.properties = e, a
        })
    }, Db = jn(), kb = [0, 1], Pb = function (t, e, i) {
        this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
    };
    Pb.prototype = {
        constructor: Pb, contain: function (t) {
            var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
            return t >= i && n >= t
        }, containData: function (t) {
            return this.contain(this.dataToCoord(t))
        }, getExtent: function () {
            return this._extent.slice()
        }, getPixelPrecision: function (t) {
            return to(t || this.scale.getExtent(), this._extent)
        }, setExtent: function (t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e
        }, dataToCoord: function (t, e) {
            var i = this._extent, n = this.scale;
            return t = n.normalize(t), this.onBand && "ordinal" === n.type && (i = i.slice(), Bu(i, n.count())), qa(t, kb, i, e)
        }, coordToData: function (t, e) {
            var i = this._extent, n = this.scale;
            this.onBand && "ordinal" === n.type && (i = i.slice(), Bu(i, n.count()));
            var r = qa(t, i, kb, e);
            return this.scale.scale(r)
        }, pointToData: function () {
        }, getTicksCoords: function (t) {
            t = t || {};
            var e = t.tickModel || this.getTickModel(), i = Su(this, e), n = i.ticks, r = p(n, function (t) {
                return {coord: this.dataToCoord(t), tickValue: t}
            }, this), a = e.get("alignWithLabel");
            return Nu(this, r, i.tickCategoryInterval, a, t.clamp), r
        }, getViewLabels: function () {
            return bu(this).labels
        }, getLabelModel: function () {
            return this.model.getModel("axisLabel")
        }, getTickModel: function () {
            return this.model.getModel("axisTick")
        }, getBandWidth: function () {
            var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === i && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i
        }, isHorizontal: null, getRotate: null, calculateCategoryInterval: function () {
            return Lu(this)
        }
    };
    var Lb = Ab, Ob = {};
    f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
        Ob[t] = pg[t]
    });
    var zb = {};
    f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
        zb[t] = Yy[t]
    });
    var Eb = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    Eb.prototype = {
        constructor: Eb, type: "cartesian", getAxis: function (t) {
            return this._axes[t]
        }, getAxes: function () {
            return p(this._dimList, Fu, this)
        }, getAxesByScale: function (t) {
            return t = t.toLowerCase(), v(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        }, addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        }, dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        }, coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        }, _dataCoordConvert: function (t, e) {
            for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                var a = i[r], o = this._axes[a];
                n[a] = o[e](t[a])
            }
            return n
        }
    }, Vu.prototype = {
        constructor: Vu, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        }, containPoint: function (t) {
            var e = this.getAxis("x"), i = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
        }, containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        }, dataToPoint: function (t, e, i) {
            var n = this.getAxis("x"), r = this.getAxis("y");
            return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), i
        }, clampData: function (t, e) {
            var i = this.getAxis("x").scale, n = this.getAxis("y").scale, r = i.getExtent(), a = n.getExtent(),
                o = i.parse(t[0]), s = n.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
        }, pointToData: function (t, e) {
            var i = this.getAxis("x"), n = this.getAxis("y");
            return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), e
        }, getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    }, u(Vu, Eb);
    var Rb = function (t, e, i, n, r) {
        Pb.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom"
    };
    Rb.prototype = {
        constructor: Rb, index: 0, getAxesOnZeroOf: null, model: null, isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        }, getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        }, getOtherAxis: function () {
            this.grid.getOtherAxis()
        }, pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        }, toLocalCoord: null, toGlobalCoord: null
    }, u(Rb, Pb);
    var Bb = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {show: !1},
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {color: "#333", width: 1, type: "solid"},
            symbol: ["none", "none"],
            symbolSize: [10, 15]
        },
        axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
        axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
        splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
        splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
    }, Nb = {};
    Nb.categoryAxis = r({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {show: !1},
        axisTick: {alignWithLabel: !1, interval: "auto"},
        axisLabel: {interval: "auto"}
    }, Bb), Nb.valueAxis = r({boundaryGap: [0, 0], splitNumber: 5}, Bb), Nb.timeAxis = s({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, Nb.valueAxis), Nb.logAxis = s({scale: !0, logBase: 10}, Nb.valueAxis);
    var Fb = ["value", "category", "time", "log"], Vb = function (t, e, i, n) {
        f(Fb, function (o) {
            e.extend({
                type: t + "Axis." + o, mergeDefaultAndTheme: function (e, n) {
                    var a = this.layoutMode, s = a ? Mo(e) : {}, l = n.getTheme();
                    r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = i(t, e), a && So(e, s, a)
                }, optionUpdated: function () {
                    var t = this.option;
                    "category" === t.type && (this.__ordinalMeta = Bh.createByAxisModel(this))
                }, getCategories: function (t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
                }, getOrdinalMeta: function () {
                    return this.__ordinalMeta
                }, defaultOption: a([{}, Nb[o + "Axis"], n], !0)
            })
        }), yx.registerSubTypeDefaulter(t + "Axis", x(i, t))
    }, Wb = yx.extend({
        type: "cartesian2dAxis", axis: null, init: function () {
            Wb.superApply(this, "init", arguments), this.resetRange()
        }, mergeOption: function () {
            Wb.superApply(this, "mergeOption", arguments), this.resetRange()
        }, restoreData: function () {
            Wb.superApply(this, "restoreData", arguments), this.resetRange()
        }, getCoordSysModel: function () {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0]
        }
    });
    r(Wb.prototype, vb);
    var Gb = {offset: 0};
    Vb("x", Wb, Wu, Gb), Vb("y", Wb, Wu, Gb), yx.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var Hb = Hu.prototype;
    Hb.type = "grid", Hb.axisPointerEnabled = !0, Hb.getRect = function () {
        return this._rect
    }, Hb.update = function (t, e) {
        var i = this._axesMap;
        this._updateScale(t, this.model), f(i.x, function (t) {
            au(t.scale, t.model)
        }), f(i.y, function (t) {
            au(t.scale, t.model)
        });
        var n = {};
        f(i.x, function (t) {
            Zu(i, "y", t, n)
        }), f(i.y, function (t) {
            Zu(i, "x", t, n)
        }), this.resize(this.model, e)
    }, Hb.resize = function (t, e, i) {
        function n() {
            f(a, function (t) {
                var e = t.isHorizontal(), i = e ? [0, r.width] : [0, r.height], n = t.inverse ? 1 : 0;
                t.setExtent(i[n], i[1 - n]), Yu(t, e ? r.x : r.y)
            })
        }

        var r = bo(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
        this._rect = r;
        var a = this._axesList;
        n(), !i && t.get("containLabel") && (f(a, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = uu(t);
                if (e) {
                    var i = t.isHorizontal() ? "height" : "width", n = t.model.get("axisLabel.margin");
                    r[i] -= e[i] + n, "top" === t.position ? r.y += e.height + n : "left" === t.position && (r.x += e.width + n)
                }
            }
        }), n())
    }, Hb.getAxis = function (t, e) {
        var i = this._axesMap[t];
        if (null != i) {
            if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
            return i[e]
        }
    }, Hb.getAxes = function () {
        return this._axesList.slice()
    }, Hb.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i]
        }
        S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var n = 0, r = this._coordsList; n < r.length; n++) if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n]
    }, Hb.getCartesians = function () {
        return this._coordsList.slice()
    }, Hb.convertToPixel = function (t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
    }, Hb.convertFromPixel = function (t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
    }, Hb._findConvertTarget = function (t, e) {
        var i, n, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        if (r) i = r.coordinateSystem, h(l, i) < 0 && (i = null); else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex); else if (a) n = this.getAxis("x", a.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (s) {
            var u = s.coordinateSystem;
            u === this && (i = this._coordsList[0])
        }
        return {cartesian: i, axis: n}
    }, Hb.containPoint = function (t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0
    }, Hb._initCartesian = function (t, e) {
        function i(i) {
            return function (o, s) {
                if (Gu(o, t, e)) {
                    var l = o.get("position");
                    "x" === i ? "top" !== l && "bottom" !== l && (l = "bottom", n[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", n[l] && (l = "left" === l ? "right" : "left")), n[l] = !0;
                    var h = new Rb(i, ou(o), [0, 0], o.get("type"), l), u = "category" === h.type;
                    h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[i][s] = h, a[i]++
                }
            }
        }

        var n = {left: !1, right: !1, top: !1, bottom: !1}, r = {x: {}, y: {}}, a = {x: 0, y: 0};
        return e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function (e, i) {
            f(r.y, function (n, r) {
                var a = "x" + i + "y" + r, o = new Vu(a);
                o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(n)
            }, this)
        }, this)) : (this._axesMap = {}, void (this._axesList = []))
    }, Hb._updateScale = function (t, e) {
        function i(t, e) {
            f(t.mapDimension(e.dim, !0), function (i) {
                e.scale.unionExtentFromData(t, Lh(t, i))
            })
        }

        f(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (n) {
            if (qu(n)) {
                var r = ju(n, t), a = r[0], o = r[1];
                if (!Gu(a, e, t) || !Gu(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex), l = n.getData(), h = s.getAxis("x"),
                    u = s.getAxis("y");
                "list" === l.type && (i(l, h, n), i(l, u, n))
            }
        }, this)
    }, Hb.getTooltipAxes = function (t) {
        var e = [], i = [];
        return f(this.getCartesians(), function (n) {
            var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(), a = n.getOtherAxis(r);
            h(e, r) < 0 && e.push(r), h(i, a) < 0 && i.push(a)
        }), {baseAxes: e, otherAxes: i}
    };
    var Zb = ["xAxis", "yAxis"];
    Hu.create = function (t, e) {
        var i = [];
        return t.eachComponent("grid", function (n, r) {
            var a = new Hu(n, t, e);
            a.name = "grid_" + r, a.resize(n, e, !0), n.coordinateSystem = a, i.push(a)
        }), t.eachSeries(function (e) {
            if (qu(e)) {
                var i = ju(e, t), n = i[0], r = i[1], a = n.getCoordSysModel(), o = a.coordinateSystem;
                e.coordinateSystem = o.getCartesian(n.componentIndex, r.componentIndex)
            }
        }), i
    }, Hu.dimensions = Hu.prototype.dimensions = Vu.prototype.dimensions, Ko.register("cartesian2d", Hu);
    var Xb = o_.extend({
        type: "series.__base_bar__",
        getInitialData: function () {
            return Oh(this.getSource(), this)
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var i = e.dataToPoint(e.clampData(t)), n = this.getData(), r = n.getLayout("offset"),
                    a = n.getLayout("size"), o = e.getBaseAxis().isHorizontal() ? 0 : 1;
                return i[o] += r + a / 2, i
            }
            return [0 / 0, 0 / 0]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    });
    Xb.extend({
        type: "series.bar", dependencies: ["grid", "polar"], brushSelector: "rect", getProgressive: function () {
            return this.get("large") ? this.get("progressive") : !1
        }, getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return e > t && (t = e), t
        }
    });
    var Yb = dm([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
        jb = {
            getBarItemStyle: function (t) {
                var e = Yb(this, t);
                if (this.getBorderLineDash) {
                    var i = this.getBorderLineDash();
                    i && (e.lineDash = i)
                }
                return e
            }
        }, qb = ["itemStyle", "barBorderWidth"];
    o(Wa.prototype, jb), ah({
        type: "bar", render: function (t, e, i) {
            this._updateDrawMode(t);
            var n = t.get("coordinateSystem");
            return ("cartesian2d" === n || "polar" === n) && (this._isLargeDraw ? this._renderLarge(t, e, i) : this._renderNormal(t, e, i)), this.group
        }, incrementalPrepareRender: function (t) {
            this._clear(), this._updateDrawMode(t)
        }, incrementalRender: function (t, e) {
            this._incrementalRenderLarge(t, e)
        }, _updateDrawMode: function (t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        }, _renderNormal: function (t) {
            var e, i = this.group, n = t.getData(), r = this._data, a = t.coordinateSystem, o = a.getBaseAxis();
            "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
            var s = t.isAnimationEnabled() ? t : null;
            n.diff(r).add(function (r) {
                if (n.hasValue(r)) {
                    var o = n.getItemModel(r), l = $b[a.type](n, r, o), h = Ub[a.type](n, r, o, l, e, s);
                    n.setItemGraphicEl(r, h), i.add(h), tc(h, n, r, o, l, t, e, "polar" === a.type)
                }
            }).update(function (o, l) {
                var h = r.getItemGraphicEl(l);
                if (!n.hasValue(o)) return void i.remove(h);
                var u = n.getItemModel(o), c = $b[a.type](n, o, u);
                h ? La(h, {shape: c}, s, o) : h = Ub[a.type](n, o, u, c, e, s, !0), n.setItemGraphicEl(o, h), i.add(h), tc(h, n, o, u, c, t, e, "polar" === a.type)
            }).remove(function (t) {
                var e = r.getItemGraphicEl(t);
                "cartesian2d" === a.type ? e && Qu(t, s, e) : e && Ju(t, s, e)
            }).execute(), this._data = n
        }, _renderLarge: function (t) {
            this._clear(), ic(t, this.group)
        }, _incrementalRenderLarge: function (t, e) {
            ic(e, this.group, !0)
        }, dispose: V, remove: function (t) {
            this._clear(t)
        }, _clear: function (t) {
            var e = this.group, i = this._data;
            t && t.get("animation") && i && !this._isLargeDraw ? i.eachItemGraphicEl(function (e) {
                "sector" === e.type ? Ju(e.dataIndex, t, e) : Qu(e.dataIndex, t, e)
            }) : e.removeAll(), this._data = null
        }
    });
    var Ub = {
        cartesian2d: function (t, e, i, n, r, a, s) {
            var l = new Dy({shape: o({}, n)});
            if (a) {
                var h = l.shape, u = r ? "height" : "width", c = {};
                h[u] = 0, c[u] = n[u], Yy[s ? "updateProps" : "initProps"](l, {shape: c}, a, e)
            }
            return l
        }, polar: function (t, e, i, n, r, a, o) {
            var l = n.startAngle < n.endAngle, h = new Sy({shape: s({clockwise: l}, n)});
            if (a) {
                var u = h.shape, c = r ? "r" : "endAngle", d = {};
                u[c] = r ? 0 : n.startAngle, d[c] = n[c], Yy[o ? "updateProps" : "initProps"](h, {shape: d}, a, e)
            }
            return h
        }
    }, $b = {
        cartesian2d: function (t, e, i) {
            var n = t.getItemLayout(e), r = ec(i, n), a = n.width > 0 ? 1 : -1, o = n.height > 0 ? 1 : -1;
            return {x: n.x + a * r / 2, y: n.y + o * r / 2, width: n.width - a * r, height: n.height - o * r}
        }, polar: function (t, e) {
            var i = t.getItemLayout(e);
            return {cx: i.cx, cy: i.cy, r0: i.r0, r: i.r, startAngle: i.startAngle, endAngle: i.endAngle}
        }
    }, Kb = Fr.extend({
        type: "largeBar", shape: {points: []}, buildPath: function (t, e) {
            for (var i = e.points, n = this.__startPoint, r = this.__valueIdx, a = 0; a < i.length; a += 2) n[this.__valueIdx] = i[a + r], t.moveTo(n[0], n[1]), t.lineTo(i[a], i[a + 1])
        }
    }), Qb = Math.PI, Jb = function (t, e) {
        this.opt = e, this.axisModel = t, s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new lv;
        var i = new lv({position: e.position.slice(), rotation: e.rotation});
        i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
    };
    Jb.prototype = {
        constructor: Jb, hasBuilder: function (t) {
            return !!tS[t]
        }, add: function (t) {
            tS[t].call(this)
        }, getGroup: function () {
            return this.group
        }
    };
    var tS = {
        axisLine: function () {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var i = this.axisModel.axis.getExtent(), n = this._transform, r = [i[0], 0], a = [i[1], 0];
                n && (ae(r, r, n), ae(a, a, n));
                var s = o({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new ky(ia({
                    anid: "line",
                    shape: {x1: r[0], y1: r[1], x2: a[0], y2: a[1]},
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"), h = e.get("axisLine.symbolSize"),
                    u = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof u && (u = [u, u]), null != l) {
                    "string" == typeof l && (l = [l, l]), ("string" == typeof h || "number" == typeof h) && (h = [h, h]);
                    var c = h[0], d = h[1];
                    f([{rotate: t.rotation + Math.PI / 2, offset: u[0], r: 0}, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: u[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    }], function (e, i) {
                        if ("none" !== l[i] && null != l[i]) {
                            var n = fu(l[i], -c / 2, -d / 2, c, d, s.stroke, !0), a = e.r + e.offset,
                                o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                            n.attr({rotation: e.rotate, position: o, silent: !0}), this.group.add(n)
                        }
                    }, this)
                }
            }
        }, axisTickLabel: function () {
            var t = this.axisModel, e = this.opt, i = cc(this, t, e), n = dc(this, t, e);
            sc(t, n, i)
        }, axisName: function () {
            var t = this.opt, e = this.axisModel, i = A(t.axisName, e.get("name"));
            if (i) {
                var n, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"),
                    l = e.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), u = h[0] > h[1] ? -1 : 1,
                    c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, uc(r) ? t.labelOffset + a * l : 0],
                    d = e.get("nameRotate");
                null != d && (d = d * Qb / 180);
                var f;
                uc(r) ? n = eS(t.rotation, null != d ? d : t.rotation, a) : (n = ac(t, r, d || 0, h), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(n.rotation)), !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, v = g.ellipsis,
                    m = A(t.nameTruncateMaxWidth, g.maxWidth, f),
                    y = null != v && null != m ? hx(i, m, p, v, {minChar: 2, placeholder: g.placeholder}) : i,
                    x = e.get("tooltip", !0), _ = e.mainType, w = {componentType: _, name: i, $vars: ["name"]};
                w[_ + "Index"] = e.componentIndex;
                var b = new xy({
                    anid: "name",
                    __fullText: i,
                    __truncatedText: y,
                    position: c,
                    rotation: n.rotation,
                    silent: oc(e),
                    z2: 1,
                    tooltip: x && x.show ? o({
                        content: i, formatter: function () {
                            return i
                        }, formatterParams: w
                    }, x) : null
                });
                ba(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: n.textAlign,
                    textVerticalAlign: n.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = rc(e), b.eventData.targetType = "axisName", b.eventData.name = i), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
            }
        }
    }, eS = Jb.innerTextLayout = function (t, e, i) {
        var n, r, a = io(e - t);
        return no(a) ? (r = i > 0 ? "top" : "bottom", n = "center") : no(a - Qb) ? (r = i > 0 ? "bottom" : "top", n = "center") : (r = "middle", n = a > 0 && Qb > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
            rotation: a,
            textAlign: n,
            textVerticalAlign: r
        }
    }, iS = f, nS = x, rS = nh({
        type: "axis", _axisPointer: null, axisPointerClass: null, render: function (t, e, i, n) {
            this.axisPointerClass && xc(t), rS.superApply(this, "render", arguments), Mc(this, t, e, i, n, !0)
        }, updateAxisPointer: function (t, e, i, n) {
            Mc(this, t, e, i, n, !1)
        }, remove: function (t, e) {
            var i = this._axisPointer;
            i && i.remove(e), rS.superApply(this, "remove", arguments)
        }, dispose: function (t, e) {
            Ic(this, e), rS.superApply(this, "dispose", arguments)
        }
    }), aS = [];
    rS.registerAxisPointerClass = function (t, e) {
        aS[t] = e
    }, rS.getAxisPointerClass = function (t) {
        return t && aS[t]
    };
    var oS = ["axisLine", "axisTickLabel", "axisName"], sS = ["splitArea", "splitLine"], lS = rS.extend({
        type: "cartesianAxis", axisPointerClass: "CartesianAxisPointer", render: function (t, e, i, n) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new lv, this.group.add(this._axisGroup), t.get("show")) {
                var a = t.getCoordSysModel(), o = Tc(a, t), s = new Jb(t, o);
                f(oS, s.add, s), this._axisGroup.add(s.getGroup()), f(sS, function (e) {
                    t.get(e + ".show") && this["_" + e](t, a)
                }, this), Ba(r, this._axisGroup, t), lS.superCall(this, "render", t, e, i, n)
            }
        }, remove: function () {
            this._splitAreaColors = null
        }, _splitLine: function (t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitLine"), r = n.getModel("lineStyle"), a = r.get("color");
                a = _(a) ? a : [a];
                for (var o = e.coordinateSystem.getRect(), l = i.isHorizontal(), h = 0, u = i.getTicksCoords({tickModel: n}), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
                    var g = i.toGlobalCoord(u[p].coord);
                    l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
                    var v = h++ % a.length, m = u[p].tickValue;
                    this._axisGroup.add(new ky(ia({
                        anid: null != m ? "line_" + u[p].tickValue : null,
                        shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                        style: s({stroke: a[v]}, f),
                        silent: !0
                    })))
                }
            }
        }, _splitArea: function (t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitArea"), r = n.getModel("areaStyle"), a = r.get("color"),
                    o = e.coordinateSystem.getRect(), l = i.getTicksCoords({tickModel: n, clamp: !0});
                if (l.length) {
                    var h = a.length, u = this._splitAreaColors, c = N(), d = 0;
                    if (u) for (var f = 0; f < l.length; f++) {
                        var p = u.get(l[f].tickValue);
                        if (null != p) {
                            d = (p + (h - 1) * f) % h;
                            break
                        }
                    }
                    var g = i.toGlobalCoord(l[0].coord), v = r.getAreaStyle();
                    a = _(a) ? a : [a];
                    for (var f = 1; f < l.length; f++) {
                        var m, y, x, w, b = i.toGlobalCoord(l[f].coord);
                        i.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);
                        var S = l[f - 1].tickValue;
                        null != S && c.set(S, d), this._axisGroup.add(new Dy({
                            anid: null != S ? "area_" + S : null,
                            shape: {x: m, y: y, width: x, height: w},
                            style: s({fill: a[d]}, v),
                            silent: !0
                        })), d = (d + 1) % h
                    }
                    this._splitAreaColors = c
                }
            }
        }
    });
    lS.extend({type: "xAxis"}), lS.extend({type: "yAxis"}), nh({
        type: "grid", render: function (t) {
            this.group.removeAll(), t.get("show") && this.group.add(new Dy({
                shape: t.coordinateSystem.getRect(),
                style: s({fill: t.get("backgroundColor")}, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), Yl(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }), Ql(x(Qh, "bar")), Ql($w), Jl({
        seriesType: "bar", reset: function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    }), o_.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function () {
            return Oh(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {position: "top"},
            lineStyle: {width: 2, type: "solid"},
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var hS = Cc.prototype, uS = Cc.getSymbolSize = function (t, e) {
        var i = t.getItemVisual(e, "symbolSize");
        return i instanceof Array ? i.slice() : [+i, +i]
    };
    hS._createSymbol = function (t, e, i, n, r) {
        this.removeAll();
        var a = e.getItemVisual(i, "color"), o = fu(t, -1, -1, 2, 2, a, r);
        o.attr({z2: 100, culling: !0, scale: Ac(n)}), o.drift = Dc, this._symbolType = t, this.add(o)
    }, hS.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, hS.getSymbolPath = function () {
        return this.childAt(0)
    }, hS.getScale = function () {
        return this.childAt(0).scale
    }, hS.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, hS.downplay = function () {
        this.childAt(0).trigger("normal")
    }, hS.setZ = function (t, e) {
        var i = this.childAt(0);
        i.zlevel = t, i.z = e
    }, hS.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer"
    }, hS.updateData = function (t, e, i) {
        this.silent = !1;
        var n = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, a = uS(t, e), o = n !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(n, t, e, a, s)
        } else {
            var l = this.childAt(0);
            l.silent = !1, La(l, {scale: Ac(a)}, r, e)
        }
        if (this._updateCommon(t, e, a, i), o) {
            var l = this.childAt(0), h = i && i.fadeIn, u = {scale: l.scale.slice()};
            h && (u.style = {opacity: l.style.opacity}), l.scale = [0, 0], h && (l.style.opacity = 0), Oa(l, u, r, e)
        }
        this._seriesModel = r
    };
    var cS = ["itemStyle"], dS = ["emphasis", "itemStyle"], fS = ["label"], pS = ["emphasis", "label"];
    hS._updateCommon = function (t, e, i, n) {
        function r(e) {
            return b ? t.getName(e) : Uu(t, e)
        }

        var a = this.childAt(0), s = t.hostModel, l = t.getItemVisual(e, "color");
        "image" !== a.type && a.useStyle({strokeNoScale: !0});
        var h = n && n.itemStyle, u = n && n.hoverItemStyle, c = n && n.symbolRotate, d = n && n.symbolOffset,
            f = n && n.labelModel, p = n && n.hoverLabelModel, g = n && n.hoverAnimation, v = n && n.cursorStyle;
        if (!n || t.hasItemOption) {
            var m = n && n.itemModel ? n.itemModel : t.getItemModel(e);
            h = m.getModel(cS).getItemStyle(["color"]), u = m.getModel(dS).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(fS), p = m.getModel(pS), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor")
        } else u = o({}, u);
        var y = a.style;
        a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [Ua(d[0], i[0]), Ua(d[1], i[1])]), v && a.attr("cursor", v), a.setColor(l, n && n.symbolInnerColor), a.setStyle(h);
        var x = t.getItemVisual(e, "opacity");
        null != x && (y.opacity = x);
        var _ = t.getItemVisual(e, "liftZ"), w = a.__z2Origin;
        null != _ ? null == w && (a.__z2Origin = a.z2, a.z2 += _) : null != w && (a.z2 = w, a.__z2Origin = null);
        var b = n && n.useNameLabel;
        wa(y, u, f, p, {
            labelFetcher: s,
            labelDataIndex: e,
            defaultText: r,
            isRectText: !0,
            autoColor: l
        }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = u, xa(a), a.__symbolOriginalScale = Ac(i), g && s.isAnimationEnabled() && a.on("mouseover", kc).on("mouseout", Pc).on("emphasis", Lc).on("normal", Oc)
    }, hS.fadeOut = function (t, e) {
        var i = this.childAt(0);
        this.silent = i.silent = !0, !(e && e.keepLabel) && (i.style.text = null), La(i, {
            style: {opacity: 0},
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, u(Cc, lv);
    var gS = zc.prototype;
    gS.updateData = function (t, e) {
        e = Rc(e);
        var i = this.group, n = t.hostModel, r = this._data, a = this._symbolCtor, o = Bc(t);
        r || i.removeAll(), t.diff(r).add(function (n) {
            var r = t.getItemLayout(n);
            if (Ec(t, r, n, e)) {
                var s = new a(t, n, o);
                s.attr("position", r), t.setItemGraphicEl(n, s), i.add(s)
            }
        }).update(function (s, l) {
            var h = r.getItemGraphicEl(l), u = t.getItemLayout(s);
            return Ec(t, u, s, e) ? (h ? (h.updateData(t, s, o), La(h, {position: u}, n)) : (h = new a(t, s), h.attr("position", u)), i.add(h), void t.setItemGraphicEl(s, h)) : void i.remove(h)
        }).remove(function (t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                i.remove(e)
            })
        }).execute(), this._data = t
    }, gS.isPersistent = function () {
        return !0
    }, gS.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, i) {
            var n = t.getItemLayout(i);
            e.attr("position", n)
        })
    }, gS.incrementalPrepareUpdate = function (t) {
        this._seriesScope = Bc(t), this._data = null, this.group.removeAll()
    }, gS.incrementalUpdate = function (t, e, i) {
        function n(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0)
        }

        i = Rc(i);
        for (var r = t.start; r < t.end; r++) {
            var a = e.getItemLayout(r);
            if (Ec(e, a, r, i)) {
                var o = new this._symbolCtor(e, r, this._seriesScope);
                o.traverse(n), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
            }
        }
    }, gS.remove = function (t) {
        var e = this.group, i = this._data;
        i && t ? i.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var vS = function (t, e, i, n, r, a, o, s) {
        for (var l = Wc(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = Nc(r, e, o), m = Nc(a, t, s), y = 0; y < l.length; y++) {
            var x = l[y], _ = !0;
            switch (x.cmd) {
                case"=":
                    var w = t.getItemLayout(x.idx), b = e.getItemLayout(x.idx1);
                    (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(i[x.idx]), d.push(n[x.idx1]), g.push(e.getRawIndex(x.idx1));
                    break;
                case"+":
                    var S = x.idx;
                    h.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), u.push(e.getItemLayout(S).slice()), c.push(Vc(v, r, e, S)), d.push(n[S]), g.push(e.getRawIndex(S));
                    break;
                case"-":
                    var S = x.idx, M = t.getRawIndex(S);
                    M !== S ? (h.push(t.getItemLayout(S)), u.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(i[S]), d.push(Vc(m, a, t, S)), g.push(M)) : _ = !1
            }
            _ && (f.push(x), p.push(p.length))
        }
        p.sort(function (t, e) {
            return g[t] - g[e]
        });
        for (var I = [], T = [], C = [], A = [], D = [], y = 0; y < p.length; y++) {
            var S = p[y];
            I[y] = h[S], T[y] = u[S], C[y] = c[S], A[y] = d[S], D[y] = f[S]
        }
        return {current: I, next: T, stackedOnCurrent: C, stackedOnNext: A, status: D}
    }, mS = oe, yS = se, xS = Y, _S = G, wS = [], bS = [], SS = [], MS = Fr.extend({
        type: "ec-polyline",
        shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
        style: {fill: null, stroke: "#000"},
        brush: by(Fr.prototype.brush),
        buildPath: function (t, e) {
            var i = e.points, n = 0, r = i.length, a = Yc(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (; r > 0 && Gc(i[r - 1]); r--) ;
                for (; r > n && Gc(i[n]); n++) ;
            }
            for (; r > n;) n += Hc(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
        }
    }), IS = Fr.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: by(Fr.prototype.brush),
        buildPath: function (t, e) {
            var i = e.points, n = e.stackedOnPoints, r = 0, a = i.length, o = e.smoothMonotone,
                s = Yc(i, e.smoothConstraint), l = Yc(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (; a > 0 && Gc(i[a - 1]); a--) ;
                for (; a > r && Gc(i[r]); r++) ;
            }
            for (; a > r;) {
                var h = Hc(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                Hc(t, n, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath()
            }
        }
    });
    Bs.extend({
        type: "line", init: function () {
            var t = new lv, e = new zc;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
        }, render: function (t, e, i) {
            var n = t.coordinateSystem, r = this.group, a = t.getData(), o = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"), h = a.mapArray(a.getItemLayout), u = "polar" === n.type,
                c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup,
                v = t.get("animation"), m = !l.isEmpty(), y = l.get("origin"), x = Nc(n, a, y), _ = $c(n, a, x),
                w = t.get("showSymbol"), b = w && !u && id(t, a, n), S = this._data;
            S && S.eachItemGraphicEl(function (t, e) {
                t.__temp && (r.remove(t), S.setItemGraphicEl(e, null))
            }), w || d.remove(), r.add(g);
            var M = !u && t.get("step");
            f && c.type === n.type && M === this._step ? (m && !p ? p = this._newPolygon(h, _, n, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(Jc(n, !1, !1, t)), w && d.updateData(a, {
                isIgnore: b,
                clipShape: Jc(n, !1, !0, t)
            }), a.eachItemGraphicEl(function (t) {
                t.stopAnimation(!0)
            }), jc(this._stackedOnPoints, _) && jc(this._points, h) || (v ? this._updateAnimation(a, _, n, i, M, y) : (M && (h = td(h, n, M), _ = td(_, n, M)), f.setShape({points: h}), p && p.setShape({
                points: h,
                stackedOnPoints: _
            })))) : (w && d.updateData(a, {
                isIgnore: b,
                clipShape: Jc(n, !1, !0, t)
            }), M && (h = td(h, n, M), _ = td(_, n, M)), f = this._newPolyline(h, n, v), m && (p = this._newPolygon(h, _, n, v)), g.setClipPath(Jc(n, !0, !1, t)));
            var I = ed(a, n) || a.getVisual("color");
            f.useStyle(s(o.getLineStyle(), {fill: "none", stroke: I, lineJoin: "bevel"}));
            var T = t.get("smooth");
            if (T = qc(t.get("smooth")), f.setShape({
                smooth: T,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var C = a.getCalculationInfo("stackedOnSeries"), A = 0;
                p.useStyle(s(l.getAreaStyle(), {
                    fill: I,
                    opacity: .7,
                    lineJoin: "bevel"
                })), C && (A = qc(C.get("smooth"))), p.setShape({
                    smooth: T,
                    stackedOnSmooth: A,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = a, this._coordSys = n, this._stackedOnPoints = _, this._points = h, this._step = M, this._valueOrigin = y
        }, dispose: function () {
        }, highlight: function (t, e, i, n) {
            var r = t.getData(), a = Yn(r, n);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    o = new Cc(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                }
                o.highlight()
            } else Bs.prototype.highlight.call(this, t, e, i, n)
        }, downplay: function (t, e, i, n) {
            var r = t.getData(), a = Yn(r, n);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
            } else Bs.prototype.downplay.call(this, t, e, i, n)
        }, _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new MS({
                shape: {points: t},
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e
        }, _newPolygon: function (t, e) {
            var i = this._polygon;
            return i && this._lineGroup.remove(i), i = new IS({
                shape: {points: t, stackedOnPoints: e},
                silent: !0
            }), this._lineGroup.add(i), this._polygon = i, i
        }, _updateAnimation: function (t, e, i, n, r, a) {
            var o = this._polyline, s = this._polygon, l = t.hostModel,
                h = vS(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a), u = h.current,
                c = h.stackedOnCurrent, d = h.next, f = h.stackedOnNext;
            r && (u = td(h.current, i, r), c = td(h.stackedOnCurrent, i, r), d = td(h.next, i, r), f = td(h.stackedOnNext, i, r)), o.shape.__points = h.current, o.shape.points = u, La(o, {shape: {points: d}}, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), La(s, {shape: {points: d, stackedOnPoints: f}}, l));
            for (var p = [], g = h.status, v = 0; v < g.length; v++) {
                var m = g[v].cmd;
                if ("=" === m) {
                    var y = t.getItemGraphicEl(g[v].idx1);
                    y && p.push({el: y, ptIdx: v})
                }
            }
            o.animators && o.animators.length && o.animators[0].during(function () {
                for (var t = 0; t < p.length; t++) {
                    var e = p[t].el;
                    e.attr("position", o.shape.__points[p[t].ptIdx])
                }
            })
        }, remove: function () {
            var t = this.group, e = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function (i, n) {
                i.__temp && (t.remove(i), e.setItemGraphicEl(n, null))
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var TS = function (t, e, i) {
        return {
            seriesType: t, performRawSeries: !0, reset: function (t, n) {
                function r(e, i) {
                    if ("function" == typeof s) {
                        var n = t.getRawValue(i), r = t.getDataParams(i);
                        e.setItemVisual(i, "symbolSize", s(n, r))
                    }
                    if (e.hasItemOption) {
                        var a = e.getItemModel(i), o = a.getShallow("symbol", !0), l = a.getShallow("symbolSize", !0),
                            h = a.getShallow("symbolKeepAspect", !0);
                        null != o && e.setItemVisual(i, "symbol", o), null != l && e.setItemVisual(i, "symbolSize", l), null != h && e.setItemVisual(i, "symbolKeepAspect", h)
                    }
                }

                var a = t.getData(), o = t.get("symbol") || e, s = t.get("symbolSize"), l = t.get("symbolKeepAspect");
                if (a.setVisual({
                    legendSymbol: i || o,
                    symbol: o,
                    symbolSize: s,
                    symbolKeepAspect: l
                }), !n.isSeriesFiltered(t)) {
                    var h = "function" == typeof s;
                    return {dataEach: a.hasItemOption || h ? r : null}
                }
            }
        }
    }, CS = function (t) {
        return {
            seriesType: t, plan: h_(), reset: function (t) {
                function e(t, e) {
                    for (var i = t.end - t.start, r = a && new Float32Array(i * s), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                        var d;
                        if (1 === s) {
                            var f = e.get(o[0], l);
                            d = !isNaN(f) && n.dataToPoint(f, null, c)
                        } else {
                            var f = u[0] = e.get(o[0], l), p = u[1] = e.get(o[1], l);
                            d = !isNaN(f) && !isNaN(p) && n.dataToPoint(u, null, c)
                        }
                        a ? (r[h++] = d ? d[0] : 0 / 0, r[h++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
                    }
                    a && e.setLayout("symbolPoints", r)
                }

                var i = t.getData(), n = t.coordinateSystem, r = t.pipelineContext, a = r.large;
                if (n) {
                    var o = p(n.dimensions, function (t) {
                        return i.mapDimension(t)
                    }).slice(0, 2), s = o.length, l = i.getCalculationInfo("stackResultDimension");
                    return Ph(i, o[0]) && (o[0] = l), Ph(i, o[1]) && (o[1] = l), s && {progress: e}
                }
            }
        }
    }, AS = {
        average: function (t) {
            for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
            return 0 === i ? 0 / 0 : e / i
        }, sum: function (t) {
            for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
            return isFinite(e) ? e : 0 / 0
        }, min: function (t) {
            for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
            return isFinite(e) ? e : 0 / 0
        }, nearest: function (t) {
            return t[0]
        }
    }, DS = function (t) {
        return Math.round(t.length / 2)
    }, kS = function (t) {
        return {
            seriesType: t, modifyOutputEnd: !0, reset: function (t) {
                var e = t.getData(), i = t.get("sampling"), n = t.coordinateSystem;
                if ("cartesian2d" === n.type && i) {
                    var r = n.getBaseAxis(), a = n.getOtherAxis(r), o = r.getExtent(), s = o[1] - o[0],
                        l = Math.round(e.count() / s);
                    if (l > 1) {
                        var h;
                        "string" == typeof i ? h = AS[i] : "function" == typeof i && (h = i), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, DS))
                    }
                }
            }
        }
    };
    Jl(TS("line", "circle", "line")), Ql(CS("line")), jl(ow.PROCESSOR.STATISTIC, kS("line"));
    var PS = function (t, e, i) {
        e = _(e) && {coordDimensions: e} || o({}, e);
        var n = t.getSource(), r = Vw(n, e), a = new Bw(r, t);
        return a.initData(n, i), a
    }, LS = {
        updateSelectedMap: function (t) {
            this._targetList = _(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function (t, e) {
                return t.set(e.name, e), t
            }, N())
        }, select: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t), n = this.get("selectedMode");
            "single" === n && this._selectTargetMap.each(function (t) {
                t.selected = !1
            }), i && (i.selected = !0)
        }, unSelect: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            i && (i.selected = !1)
        }, toggleSelected: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return null != i ? (this[i.selected ? "unSelect" : "select"](t, e), i.selected) : void 0
        }, isSelected: function (t, e) {
            var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return i && i.selected
        }
    }, OS = rh({
        type: "series.pie",
        init: function (t) {
            OS.superApply(this, "init", arguments), this.legendDataProvider = function () {
                return this.getRawData()
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
        },
        mergeOption: function (t) {
            OS.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
        },
        getInitialData: function () {
            return PS(this, ["value"])
        },
        _createSelectableList: function () {
            for (var t = this.getRawData(), e = t.mapDimension("value"), i = [], n = 0, r = t.count(); r > n; n++) i.push({
                name: t.getName(n),
                value: t.get(e, n),
                selected: Ms(t, n, "selected")
            });
            return i
        },
        getDataParams: function (t) {
            var e = this.getData(), i = OS.superCall(this, "getDataParams", t), n = [];
            return e.each(e.mapDimension("value"), function (t) {
                n.push(t)
            }), i.percent = eo(n, t, e.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
        },
        _defaultLabelLine: function (t) {
            Fn(t, "labelLine", ["show"]);
            var e = t.labelLine, i = t.emphasis.labelLine;
            e.show = e.show && t.label.show, i.show = i.show && t.emphasis.label.show
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {rotate: !1, show: !0, position: "outer"},
            labelLine: {show: !0, length: 15, length2: 15, smooth: !1, lineStyle: {width: 1, type: "solid"}},
            itemStyle: {borderWidth: 1},
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    c(OS, LS);
    var zS = od.prototype;
    zS.updateData = function (t, e, i) {
        function n() {
            a.stopAnimation(!0), a.animateTo({shape: {r: u.r + l.get("hoverOffset")}}, 300, "elasticOut")
        }

        function r() {
            a.stopAnimation(!0), a.animateTo({shape: {r: u.r}}, 300, "elasticOut")
        }

        var a = this.childAt(0), l = t.hostModel, h = t.getItemModel(e), u = t.getItemLayout(e), c = o({}, u);
        if (c.label = null, i) {
            a.setShape(c);
            var d = l.getShallow("animationType");
            "scale" === d ? (a.shape.r = u.r0, Oa(a, {shape: {r: u.r}}, l, e)) : (a.shape.endAngle = u.startAngle, La(a, {shape: {endAngle: u.endAngle}}, l, e))
        } else La(a, {shape: c}, l, e);
        var f = t.getItemVisual(e, "color");
        a.useStyle(s({
            lineJoin: "bevel",
            fill: f
        }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
        var p = h.getShallow("cursor");
        p && a.attr("cursor", p), ad(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", n).on("mouseout", r).on("emphasis", n).on("normal", r), this._updateLabel(t, e), xa(this)
    }, zS._updateLabel = function (t, e) {
        var i = this.childAt(1), n = this.childAt(2), r = t.hostModel, a = t.getItemModel(e), o = t.getItemLayout(e),
            s = o.label, l = t.getItemVisual(e, "color");
        La(i, {shape: {points: s.linePoints || [[s.x, s.y], [s.x, s.y], [s.x, s.y]]}}, r, e), La(n, {
            style: {
                x: s.x,
                y: s.y
            }
        }, r, e), n.attr({rotation: s.rotation, origin: [s.x, s.y], z2: 10});
        var h = a.getModel("label"), u = a.getModel("emphasis.label"), c = a.getModel("labelLine"),
            d = a.getModel("emphasis.labelLine"), l = t.getItemVisual(e, "color");
        wa(n.style, n.hoverStyle = {}, h, u, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: l,
            useInsideStyle: !!s.inside
        }, {
            textAlign: s.textAlign,
            textVerticalAlign: s.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), n.ignore = n.normalIgnore = !h.get("show"), n.hoverIgnore = !u.get("show"), i.ignore = i.normalIgnore = !c.get("show"), i.hoverIgnore = !d.get("show"), i.setStyle({
            stroke: l,
            opacity: t.getItemVisual(e, "opacity")
        }), i.setStyle(c.getModel("lineStyle").getLineStyle()), i.hoverStyle = d.getModel("lineStyle").getLineStyle();
        var f = c.get("smooth");
        f && f === !0 && (f = .4), i.setShape({smooth: f})
    }, u(od, lv);
    var ES = (Bs.extend({
        type: "pie", init: function () {
            var t = new lv;
            this._sectorGroup = t
        }, render: function (t, e, i, n) {
            if (!n || n.from !== this.uid) {
                var r = t.getData(), a = this._data, o = this.group, s = e.get("animation"), l = !a,
                    h = t.get("animationType"), u = x(rd, this.uid, t, s, i), c = t.get("selectedMode");
                if (r.diff(a).add(function (t) {
                    var e = new od(r, t);
                    l && "scale" !== h && e.eachChild(function (t) {
                        t.stopAnimation(!0)
                    }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e)
                }).update(function (t, e) {
                    var i = a.getItemGraphicEl(e);
                    i.updateData(r, t), i.off("click"), c && i.on("click", u), o.add(i), r.setItemGraphicEl(t, i)
                }).remove(function (t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e)
                }).execute(), s && l && r.count() > 0 && "scale" !== h) {
                    var d = r.getItemLayout(0), f = Math.max(i.getWidth(), i.getHeight()) / 2,
                        p = y(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t))
                } else o.removeClipPath();
                this._data = r
            }
        }, dispose: function () {
        }, _createClipPath: function (t, e, i, n, r, a, o) {
            var s = new Sy({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: r}});
            return Oa(s, {shape: {endAngle: n + (r ? 1 : -1) * Math.PI * 2}}, o, a), s
        }, containPoint: function (t, e) {
            var i = e.getData(), n = i.getItemLayout(0);
            if (n) {
                var r = t[0] - n.cx, a = t[1] - n.cy, o = Math.sqrt(r * r + a * a);
                return o <= n.r && o >= n.r0
            }
        }
    }), function (t, e) {
        f(e, function (e) {
            e.update = "updateView", Ul(e, function (i, n) {
                var r = {};
                return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                    t[e.method] && t[e.method](i.name, i.dataIndex);
                    var n = t.getData();
                    n.each(function (e) {
                        var i = n.getName(e);
                        r[i] = t.isSelected(i) || !1
                    })
                }), {name: i.name, selected: r}
            })
        })
    }), RS = function (t) {
        return {
            getTargetSeries: function (e) {
                var i = {}, n = N();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = i, n.set(t.uid, t)
                }), n
            }, reset: function (t) {
                var e = t.getRawData(), i = {}, n = t.getData();
                n.each(function (t) {
                    var e = n.getRawIndex(t);
                    i[e] = t
                }), e.each(function (r) {
                    var a = i[r], o = null != a && n.getItemVisual(a, "color", !0);
                    if (o) e.setItemVisual(r, "color", o); else {
                        var s = e.getItemModel(r),
                            l = s.get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                        e.setItemVisual(r, "color", l), null != a && n.setItemVisual(a, "color", l)
                    }
                })
            }
        }
    }, BS = function (t, e, i, n) {
        var r, a, o = t.getData(), s = [], l = !1;
        o.each(function (i) {
            var n, h, u, c, d = o.getItemLayout(i), f = o.getItemModel(i), p = f.getModel("label"),
                g = p.get("position") || f.get("emphasis.label.position"), v = f.getModel("labelLine"),
                m = v.get("length"), y = v.get("length2"), x = (d.startAngle + d.endAngle) / 2, _ = Math.cos(x),
                w = Math.sin(x);
            r = d.cx, a = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) n = d.cx, h = d.cy, c = "center"; else {
                var S = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r, M = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
                if (n = S + 3 * _, h = M + 3 * w, !b) {
                    var I = S + _ * (m + e - d.r), T = M + w * (m + e - d.r), C = I + (0 > _ ? -1 : 1) * y, A = T;
                    n = C + (0 > _ ? -5 : 5), h = A, u = [[S, M], [I, T], [C, A]]
                }
                c = b ? "center" : _ > 0 ? "left" : "right"
            }
            var D = p.getFont(), k = p.get("rotate") ? 0 > _ ? -x + Math.PI : -x : 0,
                P = t.getFormattedLabel(i, "normal") || o.getName(i), L = Ei(P, D, c, "top");
            l = !!k, d.label = {
                x: n,
                y: h,
                position: g,
                height: L.height,
                len: m,
                len2: y,
                linePoints: u,
                textAlign: c,
                verticalAlign: "middle",
                rotation: k,
                inside: b
            }, b || s.push(d.label)
        }), !l && t.get("avoidLabelOverlap") && ld(s, r, a, e, i, n)
    }, NS = 2 * Math.PI, FS = Math.PI / 180, VS = function (t, e, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), n = e.mapDimension("value"), r = t.get("center"), a = t.get("radius");
            _(a) || (a = [0, a]), _(r) || (r = [r, r]);
            var o = i.getWidth(), s = i.getHeight(), l = Math.min(o, s), h = Ua(r[0], o), u = Ua(r[1], s),
                c = Ua(a[0], l / 2), d = Ua(a[1], l / 2), f = -t.get("startAngle") * FS, p = t.get("minAngle") * FS,
                g = 0;
            e.each(n, function (t) {
                !isNaN(t) && g++
            });
            var v = e.getSum(n), m = Math.PI / (v || g) * 2, y = t.get("clockwise"), x = t.get("roseType"),
                w = t.get("stillShowZeroSum"), b = e.getDataExtent(n);
            b[0] = 0;
            var S = NS, M = 0, I = f, T = y ? 1 : -1;
            if (e.each(n, function (t, i) {
                var n;
                if (isNaN(t)) return void e.setItemLayout(i, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: y,
                    cx: h,
                    cy: u,
                    r0: c,
                    r: x ? 0 / 0 : d
                });
                n = "area" !== x ? 0 === v && w ? m : t * m : NS / g, p > n ? (n = p, S -= p) : M += t;
                var r = I + T * n;
                e.setItemLayout(i, {
                    angle: n,
                    startAngle: I,
                    endAngle: r,
                    clockwise: y,
                    cx: h,
                    cy: u,
                    r0: c,
                    r: x ? qa(t, b, [c, d]) : d
                }), I = r
            }), NS > S && g) if (.001 >= S) {
                var C = NS / g;
                e.each(n, function (t, i) {
                    if (!isNaN(t)) {
                        var n = e.getItemLayout(i);
                        n.angle = C, n.startAngle = f + T * i * C, n.endAngle = f + T * (i + 1) * C
                    }
                })
            } else m = S / M, I = f, e.each(n, function (t, i) {
                if (!isNaN(t)) {
                    var n = e.getItemLayout(i), r = n.angle === p ? p : t * m;
                    n.startAngle = I, n.endAngle = I + T * r, I += T * r
                }
            });
            BS(t, d, o, s)
        })
    }, WS = function (t) {
        return {
            seriesType: t, reset: function (t, e) {
                var i = e.findComponents({mainType: "legend"});
                if (i && i.length) {
                    var n = t.getData();
                    n.filterSelf(function (t) {
                        for (var e = n.getName(t), r = 0; r < i.length; r++) if (!i[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    };
    ES("pie", [{type: "pieToggleSelect", event: "pieselectchanged", method: "toggleSelected"}, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]), Jl(RS("pie")), Ql(x(VS, "pie")), jl(WS("pie"));
    var GS = function (t) {
            var e = t.grid.getRect();
            return {
                coordSys: {type: "cartesian2d", x: e.x, y: e.y, width: e.width, height: e.height},
                api: {
                    coord: function (e) {
                        return t.dataToPoint(e)
                    }, size: y(hd, t)
                }
            }
        }, HS = function (t) {
            var e = t.getBoundingRect();
            return {
                coordSys: {type: "geo", x: e.x, y: e.y, width: e.width, height: e.height, zoom: t.getZoom()},
                api: {
                    coord: function (e) {
                        return t.dataToPoint(e)
                    }, size: y(ud, t)
                }
            }
        }, ZS = function (t) {
            var e = t.getRect();
            return {
                coordSys: {type: "singleAxis", x: e.x, y: e.y, width: e.width, height: e.height},
                api: {
                    coord: function (e) {
                        return t.dataToPoint(e)
                    }, size: y(cd, t)
                }
            }
        }, XS = function (t) {
            var e = t.getRadiusAxis(), i = t.getAngleAxis(), n = e.getExtent();
            return n[0] > n[1] && n.reverse(), {
                coordSys: {type: "polar", cx: t.cx, cy: t.cy, r: n[1], r0: n[0]},
                api: {
                    coord: y(function (n) {
                        var r = e.dataToRadius(n[0]), a = i.dataToAngle(n[1]), o = t.coordToPoint([r, a]);
                        return o.push(r, a * Math.PI / 180), o
                    }), size: y(dd, t)
                }
            }
        }, YS = function (t) {
            var e = t.getRect(), i = t.getRangeInfo();
            return {
                coordSys: {
                    type: "calendar",
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    cellWidth: t.getCellWidth(),
                    cellHeight: t.getCellHeight(),
                    rangeInfo: {start: i.start, end: i.end, weeks: i.weeks, dayCount: i.allDay}
                }, api: {
                    coord: function (e, i) {
                        return t.dataToPoint(e, i)
                    }
                }
            }
        }, jS = ["itemStyle"], qS = ["emphasis", "itemStyle"], US = ["label"], $S = ["emphasis", "label"], KS = "e\x00\x00",
        QS = {cartesian2d: GS, geo: HS, singleAxis: ZS, polar: XS, calendar: YS};
    o_.extend({
        type: "series.custom",
        dependencies: ["grid", "polar", "geo", "singleAxis", "calendar"],
        defaultOption: {coordinateSystem: "cartesian2d", zlevel: 0, z: 2, legendHoverLink: !0, useTransform: !0},
        getInitialData: function () {
            return Oh(this.getSource(), this)
        },
        getDataParams: function (t, e, i) {
            var n = o_.prototype.getDataParams.apply(this, arguments);
            return i && (n.info = i.info), n
        }
    }), Bs.extend({
        type: "custom", _data: null, render: function (t, e, i, n) {
            var r = this._data, a = t.getData(), o = this.group, s = vd(t, a, e, i);
            a.diff(r).add(function (e) {
                yd(null, e, s(e, n), t, o, a)
            }).update(function (e, i) {
                var l = r.getItemGraphicEl(i);
                yd(l, e, s(e, n), t, o, a)
            }).remove(function (t) {
                var e = r.getItemGraphicEl(t);
                e && o.remove(e)
            }).execute(), this._data = a
        }, incrementalPrepareRender: function () {
            this.group.removeAll(), this._data = null
        }, incrementalRender: function (t, e, i, n, r) {
            function a(t) {
                t.isGroup || (t.incremental = !0, t.useHoverLayer = !0)
            }

            for (var o = e.getData(), s = vd(e, o, i, n), l = t.start; l < t.end; l++) {
                var h = yd(null, l, s(l, r), e, this.group, o);
                h.traverse(a)
            }
        }, dispose: V, filterForExposedEvent: function (t, e, i) {
            var n = e.element;
            if (null == n || i.name === n) return !0;
            for (; (i = i.parent) && i !== this.group;) if (i.name === n) return !0;
            return !1
        }
    }), ih({
        type: "title",
        layoutMode: {type: "box", ignoreSize: !0},
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
            subtextStyle: {color: "#aaa"}
        }
    }), nh({
        type: "title", render: function (t, e, i) {
            if (this.group.removeAll(), t.get("show")) {
                var n = this.group, r = t.getModel("textStyle"), a = t.getModel("subtextStyle"), o = t.get("textAlign"),
                    s = t.get("textBaseline"), l = new xy({
                        style: ba({}, r, {text: t.get("text"), textFill: r.getTextColor()}, {disableBox: !0}),
                        z2: 10
                    }), h = l.getBoundingRect(), u = t.get("subtext"), c = new xy({
                        style: ba({}, a, {
                            text: u,
                            textFill: a.getTextColor(),
                            y: h.height + t.get("itemGap"),
                            textVerticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function () {
                    window.open(d, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    window.open(f, "_" + t.get("subtarget"))
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, n.add(l), u && n.add(c);
                var g = n.getBoundingRect(), v = t.getBoxLayoutParams();
                v.width = g.width, v.height = g.height;
                var m = bo(v, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), n.attr("position", [m.x, m.y]);
                var y = {textAlign: o, textVerticalAlign: s};
                l.setStyle(y), c.setStyle(y), g = n.getBoundingRect();
                var x = m.margin, _ = t.getItemStyle(["color", "opacity"]);
                _.fill = t.get("backgroundColor");
                var w = new Dy({
                    shape: {
                        x: g.x - x[3],
                        y: g.y - x[0],
                        width: g.width + x[1] + x[3],
                        height: g.height + x[0] + x[2],
                        r: t.get("borderRadius")
                    }, style: _, silent: !0
                });
                na(w), n.add(w)
            }
        }
    });
    var JS = ih({
        type: "legend.plain",
        dependencies: ["series"],
        layoutMode: {type: "box", ignoreSize: !0},
        init: function (t, e, i) {
            this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}
        },
        mergeOption: function (t) {
            JS.superCall(this, "mergeOption", t)
        },
        optionUpdated: function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, i = 0; i < t.length; i++) {
                    var n = t[i].get("name");
                    if (this.isSelected(n)) {
                        this.select(n), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        },
        _updateData: function (t) {
            var e = [], i = [];
            t.eachRawSeries(function (n) {
                var r = n.name;
                i.push(r);
                var a;
                if (n.legendDataProvider) {
                    var o = n.legendDataProvider(), s = o.mapArray(o.getName);
                    t.isSeriesFiltered(n) || (i = i.concat(s)), s.length ? e = e.concat(s) : a = !0
                } else a = !0;
                a && Zn(n) && e.push(n.name)
            }), this._availableNames = i;
            var n = this.get("data") || e, r = p(n, function (t) {
                return ("string" == typeof t || "number" == typeof t) && (t = {name: t}), new Wa(t, this, this.ecModel)
            }, this);
            this._data = r
        },
        getData: function () {
            return this._data
        },
        select: function (t) {
            var e = this.option.selected, i = this.get("selectedMode");
            if ("single" === i) {
                var n = this._data;
                f(n, function (t) {
                    e[t.get("name")] = !1
                })
            }
            e[t] = !0
        },
        unSelect: function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        },
        toggleSelected: function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        },
        isSelected: function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0
        },
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            textStyle: {color: "#333"},
            selectedMode: !0,
            tooltip: {show: !1}
        }
    });
    Ul("legendToggleSelect", "legendselectchanged", x(Ad, "toggleSelected")), Ul("legendSelect", "legendselected", x(Ad, "select")), Ul("legendUnSelect", "legendunselected", x(Ad, "unSelect"));
    var tM = x, eM = f, iM = lv, nM = nh({
        type: "legend.plain", newlineDisabled: !1, init: function () {
            this.group.add(this._contentGroup = new iM), this._backgroundEl
        }, getContentGroup: function () {
            return this._contentGroup
        }, render: function (t, e, i) {
            if (this.resetInner(), t.get("show", !0)) {
                var n = t.get("align");
                n && "auto" !== n || (n = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(n, t, e, i);
                var r = t.getBoxLayoutParams(), a = {width: i.getWidth(), height: i.getHeight()}, o = t.get("padding"),
                    l = bo(r, a, o), h = this.layoutInner(t, n, l),
                    u = bo(s({width: h.width, height: h.height}, r), a, o);
                this.group.attr("position", [u.x - h.x, u.y - h.y]), this.group.add(this._backgroundEl = Dd(h, t))
            }
        }, resetInner: function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
        }, renderInner: function (t, e, i, n) {
            var r = this.getContentGroup(), a = N(), o = e.get("selectedMode"), s = [];
            i.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && s.push(t.id)
            }), eM(e.getData(), function (l, h) {
                var u = l.get("name");
                if (!this.newlineDisabled && ("" === u || "\n" === u)) return void r.add(new iM({newline: !0}));
                var c = i.getSeriesByName(u)[0];
                if (!a.get(u)) if (c) {
                    var d = c.getData(), f = d.getVisual("color");
                    "function" == typeof f && (f = f(c.getDataParams(0)));
                    var p = d.getVisual("legendSymbol") || "roundRect", g = d.getVisual("symbol"),
                        v = this._createItem(u, h, l, e, p, g, t, f, o);
                    v.on("click", tM(kd, u, n)).on("mouseover", tM(Pd, c.name, null, n, s)).on("mouseout", tM(Ld, c.name, null, n, s)), a.set(u, !0)
                } else i.eachRawSeries(function (i) {
                    if (!a.get(u) && i.legendDataProvider) {
                        var r = i.legendDataProvider(), c = r.indexOfName(u);
                        if (0 > c) return;
                        var d = r.getItemVisual(c, "color"), f = "roundRect",
                            p = this._createItem(u, h, l, e, f, null, t, d, o);
                        p.on("click", tM(kd, u, n)).on("mouseover", tM(Pd, null, u, n, s)).on("mouseout", tM(Ld, null, u, n, s)), a.set(u, !0)
                    }
                }, this)
            }, this)
        }, _createItem: function (t, e, i, n, r, a, s, l, h) {
            var u = n.get("itemWidth"), c = n.get("itemHeight"), d = n.get("inactiveColor"),
                f = n.get("symbolKeepAspect"), p = n.isSelected(t), g = new iM, v = i.getModel("textStyle"),
                m = i.get("icon"), y = i.getModel("tooltip"), x = y.parentModel;
            if (r = m || r, g.add(fu(r, 0, 0, u, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" === a)) {
                var _ = .8 * c;
                "none" === a && (a = "circle"), g.add(fu(a, (u - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f ? !0 : f))
            }
            var w = "left" === s ? u + 5 : -5, b = s, S = n.get("formatter"), M = t;
            "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new xy({
                style: ba({}, v, {
                    text: M,
                    x: w,
                    y: c / 2,
                    textFill: p ? v.getTextColor() : d,
                    textAlign: b,
                    textVerticalAlign: "middle"
                })
            }));
            var I = new Dy({
                shape: g.getBoundingRect(),
                invisible: !0,
                tooltip: y.get("show") ? o({
                    content: t,
                    formatter: x.get("formatter", !0) || function () {
                        return t
                    },
                    formatterParams: {componentType: "legend", legendIndex: n.componentIndex, name: t, $vars: ["name"]}
                }, y.option) : null
            });
            return g.add(I), g.eachChild(function (t) {
                t.silent = !0
            }), I.silent = !h, this.getContentGroup().add(g), xa(g), g.__legendDataIndex = e, g
        }, layoutInner: function (t, e, i) {
            var n = this.getContentGroup();
            gx(t.get("orient"), n, t.get("itemGap"), i.width, i.height);
            var r = n.getBoundingRect();
            return n.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
        }
    }), rM = function (t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var i = 0; i < e.length; i++) if (!e[i].isSelected(t.name)) return !1;
            return !0
        })
    };
    jl(rM), yx.registerSubTypeDefaulter("legend", function () {
        return "plain"
    });
    var aM = JS.extend({
        type: "legend.scroll",
        setScrollDataIndex: function (t) {
            this.option.scrollDataIndex = t
        },
        defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        },
        init: function (t, e, i, n) {
            var r = Mo(t);
            aM.superCall(this, "init", t, e, i, n), Od(this, t, r)
        },
        mergeOption: function (t, e) {
            aM.superCall(this, "mergeOption", t, e), Od(this, this.option, t)
        },
        getOrient: function () {
            return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
        }
    }), oM = lv, sM = ["width", "height"], lM = ["x", "y"], hM = nM.extend({
        type: "legend.scroll", newlineDisabled: !0, init: function () {
            hM.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new oM), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new oM), this._showController
        }, resetInner: function () {
            hM.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, renderInner: function (t, e, i, n) {
            function r(t, i) {
                var r = t + "DataIndex",
                    l = Va(e.get("pageIcons", !0)[e.getOrient().name][i], {onclick: y(a._pageGo, a, r, e, n)}, {
                        x: -s[0] / 2,
                        y: -s[1] / 2,
                        width: s[0],
                        height: s[1]
                    });
                l.name = t, o.add(l)
            }

            var a = this;
            hM.superCall(this, "renderInner", t, e, i, n);
            var o = this._controllerGroup, s = e.get("pageIconSize", !0);
            _(s) || (s = [s, s]), r("pagePrev", 0);
            var l = e.getModel("pageTextStyle");
            o.add(new xy({
                name: "pageText",
                style: {
                    textFill: l.getTextColor(),
                    font: l.getFont(),
                    textVerticalAlign: "middle",
                    textAlign: "center"
                },
                silent: !0
            })), r("pageNext", 1)
        }, layoutInner: function (t, e, i) {
            var n = this.getContentGroup(), r = this._containerGroup, a = this._controllerGroup,
                o = t.getOrient().index, s = sM[o], l = sM[1 - o], h = lM[1 - o];
            gx(t.get("orient"), n, t.get("itemGap"), o ? i.width : null, o ? null : i.height), gx("horizontal", a, t.get("pageButtonItemGap", !0));
            var u = n.getBoundingRect(), c = a.getBoundingRect(), d = this._showController = u[s] > i[s],
                f = [-u.x, -u.y];
            f[o] = n.position[o];
            var p = [0, 0], g = [-c.x, -c.y], v = D(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            if (d) {
                var m = t.get("pageButtonPosition", !0);
                "end" === m ? g[o] += i[s] - c[s] : p[o] += c[s] + v
            }
            g[1 - o] += u[l] / 2 - c[l] / 2, n.attr("position", f), r.attr("position", p), a.attr("position", g);
            var y = this.group.getBoundingRect(), y = {x: 0, y: 0};
            if (y[s] = d ? i[s] : u[s], y[l] = Math.max(u[l], c[l]), y[h] = Math.min(0, c[h] + g[1 - o]), r.__rectSize = i[s], d) {
                var x = {x: 0, y: 0};
                x[s] = Math.max(i[s] - c[s] - v, 0), x[l] = y[l], r.setClipPath(new Dy({shape: x})), r.__rectSize = x[s]
            } else a.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var _ = this._getPageInfo(t);
            return null != _.pageIndex && La(n, {position: _.contentPosition}, d ? t : !1), this._updatePageInfoView(t, _), y
        }, _pageGo: function (t, e, i) {
            var n = this._getPageInfo(e)[t];
            null != n && i.dispatchAction({type: "legendScroll", scrollDataIndex: n, legendId: e.id})
        }, _updatePageInfoView: function (t, e) {
            var i = this._controllerGroup;
            f(["pagePrev", "pageNext"], function (n) {
                var r = null != e[n + "DataIndex"], a = i.childOfName(n);
                a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
            });
            var n = i.childOfName("pageText"), r = t.get("pageFormatter"), a = e.pageIndex, o = null != a ? a + 1 : 0,
                s = e.pageCount;
            n && r && n.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
                current: o,
                total: s
            }))
        }, _getPageInfo: function (t) {
            function e(t) {
                var e = t.getBoundingRect().clone();
                return e[f] += t.position[u], e
            }

            var i, n, r, a, o = t.get("scrollDataIndex", !0), s = this.getContentGroup(), l = s.getBoundingRect(),
                h = this._containerGroup.__rectSize, u = t.getOrient().index, c = sM[u], d = sM[1 - u], f = lM[u],
                p = s.position.slice();
            this._showController ? s.eachChild(function (t) {
                t.__legendDataIndex === o && (a = t)
            }) : a = s.childAt(0);
            var g = h ? Math.ceil(l[c] / h) : 0;
            if (a) {
                var v = a.getBoundingRect(), m = a.position[u] + v[f];
                p[u] = -m - l[f], i = Math.floor(g * (m + v[f] + h / 2) / l[c]), i = l[c] && g ? Math.max(0, Math.min(g - 1, i)) : -1;
                var y = {x: 0, y: 0};
                y[c] = h, y[d] = l[d], y[f] = -p[u] - l[f];
                var x, _ = s.children();
                if (s.eachChild(function (t, i) {
                    var n = e(t);
                    n.intersect(y) && (null == x && (x = i), r = t.__legendDataIndex), i === _.length - 1 && n[f] + n[c] <= y[f] + y[c] && (r = null)
                }), null != x) {
                    var w = _[x], b = e(w);
                    if (y[f] = b[f] + b[c] - y[c], 0 >= x && b[f] >= y[f]) n = null; else {
                        for (; x > 0 && e(_[x - 1]).intersect(y);) x--;
                        n = _[x].__legendDataIndex
                    }
                }
            }
            return {contentPosition: p, pageIndex: i, pageCount: g, pagePrevDataIndex: n, pageNextDataIndex: r}
        }
    });
    Ul("legendScroll", "legendscroll", function (t, e) {
        var i = t.scrollDataIndex;
        null != i && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
            t.setScrollDataIndex(i)
        })
    });
    var uM = function (t, e) {
        var i, n = [], r = t.seriesIndex;
        if (null == r || !(i = e.getSeriesByIndex(r))) return {point: []};
        var a = i.getData(), o = Yn(a, t);
        if (null == o || 0 > o || _(o)) return {point: []};
        var s = a.getItemGraphicEl(o), l = i.coordinateSystem;
        if (i.getTooltipPosition) n = i.getTooltipPosition(o) || []; else if (l && l.dataToPoint) n = l.dataToPoint(a.getValues(p(l.dimensions, function (t) {
            return a.mapDimension(t)
        }), o, !0)) || []; else if (s) {
            var h = s.getBoundingRect().clone();
            h.applyTransform(s.transform), n = [h.x + h.width / 2, h.y + h.height / 2]
        }
        return {point: n, el: s}
    }, cM = f, dM = x, fM = jn(), pM = function (t, e, i) {
        var n = t.currTrigger, r = [t.x, t.y], a = t, o = t.dispatchAction || y(i.dispatchAction, i),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Hd(r) && (r = uM({seriesIndex: a.seriesIndex, dataIndex: a.dataIndex}, e).point);
            var l = Hd(r), h = a.axesInfo, u = s.axesInfo, c = "leave" === n || Hd(r), d = {}, f = {},
                p = {list: [], map: {}}, g = {showPointer: dM(Rd, f), showTooltip: dM(Bd, p)};
            cM(s.coordSysMap, function (t, e) {
                var i = l || t.containPoint(r);
                cM(s.coordSysAxesInfo[e], function (t) {
                    var e = t.axis, n = Wd(h, t);
                    if (!c && i && (!h || n)) {
                        var a = n && n.value;
                        null != a || l || (a = e.pointToData(r)), null != a && zd(t, a, g, !1, d)
                    }
                })
            });
            var v = {};
            return cM(u, function (t, e) {
                var i = t.linkGroup;
                i && !f[e] && cM(i.axesInfo, function (e, n) {
                    var r = f[n];
                    if (e !== t && r) {
                        var a = r.value;
                        i.mapper && (a = t.axis.scale.parse(i.mapper(a, Gd(e), Gd(t)))), v[t.key] = a
                    }
                })
            }), cM(v, function (t, e) {
                zd(u[e], t, g, !0, d)
            }), Nd(f, u, d), Fd(p, r, t, o), Vd(u, o, i), d
        }
    }, gM = (ih({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {color: "#aaa", width: 1, type: "solid"},
            shadowStyle: {color: "rgba(150,150,150,0.3)"},
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [5, 7, 5, 7],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-ueditor.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.ueditor,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-ueditor.2h6.6z M13.3,22H6.7v-ueditor.2h6.6z M13.3,19.6H6.7v-ueditor.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), jn()), vM = f, mM = nh({
        type: "axisPointer", render: function (t, e, i) {
            var n = e.getComponent("tooltip"), r = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
            Zd("axisPointer", i, function (t, e, i) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && i({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                })
            })
        }, remove: function (t, e) {
            $d(e.getZr(), "axisPointer"), mM.superApply(this._model, "remove", arguments)
        }, dispose: function (t, e) {
            $d("axisPointer", e), mM.superApply(this._model, "dispose", arguments)
        }
    }), yM = jn(), xM = n, _M = y;
    Kd.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function (t, e, i, n) {
            var r = e.get("value"), a = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== r || this._lastStatus !== a) {
                this._lastValue = r, this._lastStatus = a;
                var o = this._group, s = this._handle;
                if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
                o && o.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, i);
                var h = l.graphicKey;
                h !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = h;
                var u = this._moveAnimation = this.determineAnimation(t, e);
                if (o) {
                    var c = x(Qd, e, u);
                    this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
                } else o = this._group = new lv, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), i.getZr().add(o);
                nf(o, e, !0), this._renderHandle(r)
            }
        },
        remove: function (t) {
            this.clear(t)
        },
        dispose: function (t) {
            this.clear(t)
        },
        determineAnimation: function (t, e) {
            var i = e.get("animation"), n = t.axis, r = "category" === n.type, a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === i || null == i) {
                var o = this.animationThreshold;
                if (r && n.getBandWidth() > o) return !0;
                if (a) {
                    var s = _c(t).seriesDataCount, l = n.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o
                }
                return !1
            }
            return i === !0
        },
        makeElOption: function () {
        },
        createPointerEl: function (t, e) {
            var i = e.pointer;
            if (i) {
                var n = yM(t).pointerEl = new Yy[i.type](xM(e.pointer));
                t.add(n)
            }
        },
        createLabelEl: function (t, e, i, n) {
            if (e.label) {
                var r = yM(t).labelEl = new Dy(xM(e.label));
                t.add(r), tf(r, n)
            }
        },
        updatePointerEl: function (t, e, i) {
            var n = yM(t).pointerEl;
            n && (n.setStyle(e.pointer.style), i(n, {shape: e.pointer.shape}))
        },
        updateLabelEl: function (t, e, i, n) {
            var r = yM(t).labelEl;
            r && (r.setStyle(e.label.style), i(r, {shape: e.label.shape, position: e.label.position}), tf(r, n))
        },
        _renderHandle: function (t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, r = e.getModel("handle"),
                    a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return n && i.remove(n), void (this._handle = null);
                var o;
                this._handle || (o = !0, n = this._handle = Va(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function (t) {
                        Ig(t.event)
                    },
                    onmousedown: _M(this._onHandleDragMove, this, 0, 0),
                    drift: _M(this._onHandleDragMove, this),
                    ondragend: _M(this._onHandleDragEnd, this)
                }), i.add(n)), nf(n, e, !1);
                var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
                n.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                _(l) || (l = [l, l]), n.attr("scale", [l[0] / 2, l[1] / 2]), Hs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
            }
        },
        _moveHandleToValue: function (t, e) {
            Qd(this._axisPointerModel, !e && this._moveAnimation, this._handle, ef(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
        },
        _onHandleDragMove: function (t, e) {
            var i = this._handle;
            if (i) {
                this._dragging = !0;
                var n = this.updateHandleTransform(ef(i), [t, e], this._axisModel, this._axisPointerModel);
                this._payloadInfo = n, i.stopAnimation(), i.attr(ef(n)), yM(i).lastProp = null, this._doDispatchAxisPointer()
            }
        },
        _doDispatchAxisPointer: function () {
            var t = this._handle;
            if (t) {
                var e = this._payloadInfo, i = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: e.cursorPoint[0],
                    y: e.cursorPoint[1],
                    tooltipOption: e.tooltipOption,
                    axesInfo: [{axisDim: i.axis.dim, axisIndex: i.componentIndex}]
                })
            }
        },
        _onHandleDragEnd: function () {
            this._dragging = !1;
            var t = this._handle;
            if (t) {
                var e = this._axisPointerModel.get("value");
                this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function (t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), i = this._group, n = this._handle;
            e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, this._handle = null, this._payloadInfo = null)
        },
        doClear: function () {
        },
        buildLabel: function (t, e, i) {
            return i = i || 0, {x: t[i], y: t[1 - i], width: e[i], height: e[1 - i]}
        }
    }, Kd.prototype.constructor = Kd, er(Kd);
    var wM = Kd.extend({
        makeElOption: function (t, e, i, n, r) {
            var a = i.axis, o = a.grid, s = n.get("type"), l = df(o, a).getOtherAxis(a).getGlobalExtent(),
                h = a.toGlobalCoord(a.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var u = rf(n), c = bM[s](a, h, l, u);
                c.style = u, t.graphicKey = c.type, t.pointer = c
            }
            var d = Tc(o.model, i);
            hf(e, t, d, i, n, r)
        }, getHandleTransform: function (t, e, i) {
            var n = Tc(e.axis.grid.model, e, {labelInside: !1});
            return n.labelMargin = i.get("handle.margin"), {
                position: lf(e.axis, t, n),
                rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
            }
        }, updateHandleTransform: function (t, e, i) {
            var n = i.axis, r = n.grid, a = n.getGlobalExtent(!0), o = df(r, n).getOtherAxis(n).getGlobalExtent(),
                s = "x" === n.dim ? 0 : 1, l = t.position;
            l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
            var h = (o[1] + o[0]) / 2, u = [h, h];
            u[s] = l[s];
            var c = [{verticalAlign: "middle"}, {align: "center"}];
            return {position: l, rotation: t.rotation, cursorPoint: u, tooltipOption: c[s]}
        }
    }), bM = {
        line: function (t, e, i, n) {
            var r = uf([e, i[0]], [e, i[1]], ff(t));
            return ia({shape: r, style: n}), {type: "Line", shape: r}
        }, shadow: function (t, e, i) {
            var n = Math.max(1, t.getBandWidth()), r = i[1] - i[0];
            return {type: "Rect", shape: cf([e - n / 2, i[0]], [n, r], ff(t))}
        }
    };
    rS.registerAxisPointerClass("CartesianAxisPointer", wM), Yl(function (t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !_(e) && (t.axisPointer.link = [e])
        }
    }), jl(ow.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = fc(t, e)
    }), Ul({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, pM), ih({
        type: "tooltip",
        dependencies: ["axisPointer"],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
            },
            textStyle: {color: "#fff", fontSize: 14}
        }
    });
    var SM = f, MM = fo, IM = ["", "-webkit-", "-moz-", "-o-"],
        TM = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
    mf.prototype = {
        constructor: mf, _enterable: !0, update: function () {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
            "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
        }, show: function (t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = TM + vf(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
        }, setContent: function (t) {
            this.el.innerHTML = null == t ? "" : t
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el;
            return [t.clientWidth, t.clientHeight]
        }, moveTo: function (t, e) {
            var i, n = this._zr;
            n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, e += i.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
        }, hide: function () {
            this.el.style.display = "none", this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var i = document.defaultView.getComputedStyle(this.el);
                i && (t += parseInt(i.paddingLeft, 10) + parseInt(i.paddingRight, 10) + parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.paddingTop, 10) + parseInt(i.paddingBottom, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10))
            }
            return {width: t, height: e}
        }
    }, yf.prototype = {
        constructor: yf, _enterable: !0, update: function () {
        }, show: function () {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
        }, setContent: function (t, e, i) {
            this.el && this._zr.remove(this.el);
            for (var n = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
                var l = r.indexOf(o), h = r.substr(s + a.length, l - s - a.length);
                n["marker" + h] = h.indexOf("sub") > -1 ? {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[h],
                    textOffset: [3, 0]
                } : {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[h]
                }, r = r.substr(l + 1), s = r.indexOf("{marker")
            }
            this.el = new xy({
                style: {
                    rich: n,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: i.get("backgroundColor"),
                    textBorderRadius: i.get("borderRadius"),
                    textFill: i.get("textStyle.color"),
                    textPadding: i.get("padding")
                }, z: i.get("z")
            }), this._zr.add(this.el);
            var u = this;
            this.el.on("mouseover", function () {
                u._enterable && (clearTimeout(u._hideTimeout), u._show = !0), u._inContent = !0
            }), this.el.on("mouseout", function () {
                u._enterable && u._show && u.hideLater(u._hideDelay), u._inContent = !1
            })
        }, setEnterable: function (t) {
            this._enterable = t
        }, getSize: function () {
            var t = this.el.getBoundingRect();
            return [t.width, t.height]
        }, moveTo: function (t, e) {
            this.el && this.el.attr("position", [t, e])
        }, hide: function () {
            this.el.hide(), this._show = !1
        }, hideLater: function (t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
        }, isShow: function () {
            return this._show
        }, getOuterSize: function () {
            return this.getSize()
        }
    };
    var CM = y, AM = f, DM = Ua, kM = new Dy({shape: {x: -1, y: -1, width: 2, height: 2}});
    nh({
        type: "tooltip", init: function (t, e) {
            if (!tg.node) {
                var i = t.getComponent("tooltip"), n = i.get("renderMode");
                this._renderMode = Qn(n);
                var r;
                "html" === this._renderMode ? (r = new mf(e.getDom(), e), this._newLine = "<br/>") : (r = new yf(e), this._newLine = "\n"), this._tooltipContent = r
            }
        }, render: function (t, e, i) {
            if (!tg.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var n = this._tooltipContent;
                n.update(), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
            }
        }, _initGlobalListener: function () {
            var t = this._tooltipModel, e = t.get("triggerOn");
            Zd("itemTooltip", this._api, CM(function (t, i, n) {
                "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(i, n) : "leave" === t && this._hide(n))
            }, this))
        }, _keepShow: function () {
            var t = this._tooltipModel, e = this._ecModel, i = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var n = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                    n.manuallyShowTip(t, e, i, {x: n._lastX, y: n._lastY})
                })
            }
        }, manuallyShowTip: function (t, e, i, n) {
            if (n.from !== this.uid && !tg.node) {
                var r = _f(n, i);
                this._ticket = "";
                var a = n.dataByCoordSys;
                if (n.tooltip && null != n.x && null != n.y) {
                    var o = kM;
                    o.position = [n.x, n.y], o.update(), o.tooltip = n.tooltip, this._tryShow({
                        offsetX: n.x,
                        offsetY: n.y,
                        target: o
                    }, r)
                } else if (a) this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    event: {},
                    dataByCoordSys: n.dataByCoordSys,
                    tooltipOption: n.tooltipOption
                }, r); else if (null != n.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, i, n)) return;
                    var s = uM(n, e), l = s.point[0], h = s.point[1];
                    null != l && null != h && this._tryShow({
                        offsetX: l,
                        offsetY: h,
                        position: n.position,
                        target: s.el,
                        event: {}
                    }, r)
                } else null != n.x && null != n.y && (i.dispatchAction({
                    type: "updateAxisPointer",
                    x: n.x,
                    y: n.y
                }), this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    target: i.getZr().findHover(n.x, n.y).target,
                    event: {}
                }, r))
            }
        }, manuallyHideTip: function (t, e, i, n) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, n.from !== this.uid && this._hide(_f(n, i))
        }, _manuallyAxisShowTip: function (t, e, i, n) {
            var r = n.seriesIndex, a = n.dataIndex, o = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != a && null != o) {
                var s = e.getSeriesByIndex(r);
                if (s) {
                    var l = s.getData(), t = xf([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
                    if ("axis" === t.get("trigger")) return i.dispatchAction({
                        type: "updateAxisPointer",
                        seriesIndex: r,
                        dataIndex: a,
                        position: n.position
                    }), !0
                }
            }
        }, _tryShow: function (t, e) {
            var i = t.target, n = this._tooltipModel;
            if (n) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var r = t.dataByCoordSys;
                r && r.length ? this._showAxisTooltip(r, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e))
            }
        }, _showOrMove: function (t, e) {
            var i = t.get("showDelay");
            e = y(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e()
        }, _showAxisTooltip: function (t, e) {
            var i = this._ecModel, n = this._tooltipModel, a = [e.offsetX, e.offsetY], o = [], s = [],
                l = xf([e.tooltipOption, n]), h = this._renderMode, u = this._newLine, c = {};
            AM(t, function (t) {
                AM(t.dataByAxis, function (t) {
                    var e = i.getComponent(t.axisDim + "Axis", t.axisIndex), n = t.value, a = [];
                    if (e && null != n) {
                        var l = sf(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
                        f(t.seriesDataIndices, function (o) {
                            var u = i.getSeriesByIndex(o.seriesIndex), d = o.dataIndexInside,
                                f = u && u.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = hu(e.axis, n), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = u.formatTooltip(d, !0, null, h);
                                if (S(g)) {
                                    p = g.html;
                                    var v = g.markers;
                                    r(c, v)
                                } else p = g;
                                a.push(p)
                            }
                        });
                        var d = l;
                        o.push("html" !== h ? a.join(u) : (d ? po(d) + u : "") + a.join(u))
                    }
                })
            }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
            var d = e.position;
            this._showOrMove(l, function () {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c)
            })
        }, _showSeriesItemTooltip: function (t, e, i) {
            var n = this._ecModel, r = e.seriesIndex, a = n.getSeriesByIndex(r), o = e.dataModel || a, s = e.dataIndex,
                l = e.dataType, h = o.getData(),
                u = xf([h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
                c = u.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = o.getDataParams(s, l), g = o.formatTooltip(s, !1, l, this._renderMode);
                S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var v = "item_" + o.name + "_" + s;
                this._showOrMove(u, function () {
                    this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f)
                }), i({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: h.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                })
            }
        }, _showComponentItemTooltip: function (t, e, i) {
            var n = e.tooltip;
            if ("string" == typeof n) {
                var r = n;
                n = {content: r, formatter: r}
            }
            var a = new Wa(n, this._tooltipModel, this._ecModel), o = a.get("content"), s = Math.random();
            this._showOrMove(a, function () {
                this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
            }), i({type: "showTip", from: this.uid})
        }, _showTooltipContent: function (t, e, i, n, r, a, o, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var h = this._tooltipContent, u = t.get("formatter");
                o = o || t.get("position");
                var c = e;
                if (u && "string" == typeof u) c = go(u, i, !0); else if ("function" == typeof u) {
                    var d = CM(function (e, n) {
                        e === this._ticket && (h.setContent(n, l, t), this._updatePosition(t, o, r, a, h, i, s))
                    }, this);
                    this._ticket = n, c = u(i, n, d)
                }
                h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, i, s)
            }
        }, _updatePosition: function (t, e, i, n, r, a, o) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(), u = t.get("align"), c = t.get("verticalAlign"), d = o && o.getBoundingRect().clone();
            if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([i, n], a, r.el, d, {
                viewSize: [s, l],
                contentSize: h.slice()
            })), _(e)) i = DM(e[0], s), n = DM(e[1], l); else if (S(e)) {
                e.width = h[0], e.height = h[1];
                var f = bo(e, {width: s, height: l});
                i = f.x, n = f.y, u = null, c = null
            } else if ("string" == typeof e && o) {
                var p = Sf(e, d, h);
                i = p[0], n = p[1]
            } else {
                var p = wf(i, n, r, s, l, u ? null : 20, c ? null : 20);
                i = p[0], n = p[1]
            }
            if (u && (i -= Mf(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (n -= Mf(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), t.get("confine")) {
                var p = bf(i, n, r, s, l);
                i = p[0], n = p[1]
            }
            r.moveTo(i, n)
        }, _updateContentNotChangedOnAxis: function (t) {
            var e = this._lastDataByCoordSys, i = !!e && e.length === t.length;
            return i && AM(e, function (e, n) {
                var r = e.dataByAxis || {}, a = t[n] || {}, o = a.dataByAxis || [];
                i &= r.length === o.length, i && AM(r, function (t, e) {
                    var n = o[e] || {}, r = t.seriesDataIndices || [], a = n.seriesDataIndices || [];
                    i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length, i && AM(r, function (t, e) {
                        var n = a[e];
                        i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex
                    })
                })
            }), this._lastDataByCoordSys = t, !!i
        }, _hide: function (t) {
            this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
        }, dispose: function (t, e) {
            tg.node || (this._tooltipContent.hide(), $d("itemTooltip", e))
        }
    }), Ul({type: "showTip", event: "showTip", update: "tooltip:manuallyShowTip"}, function () {
    }), Ul({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
    });
    var PM = co, LM = po, OM = ih({
        type: "marker", dependencies: ["series", "grid", "polar", "geo"], init: function (t, e, i, n) {
            this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
        }, isAnimationEnabled: function () {
            if (tg.node) return !1;
            var t = this.__hostSeries;
            return this.getShallow("animation") && t && t.isAnimationEnabled()
        }, mergeOption: function (t, e, i, n) {
            var r = this.constructor, a = this.mainType + "Model";
            i || e.eachSeries(function (t) {
                var i = t.get(this.mainType, !0), s = t[a];
                return i && i.data ? (s ? s.mergeOption(i, e, !0) : (n && If(i), f(i.data, function (t) {
                    t instanceof Array ? (If(t[0]), If(t[1])) : If(t)
                }), s = new r(i, this, e), o(s, {
                    mainType: this.mainType,
                    seriesIndex: t.seriesIndex,
                    name: t.name,
                    createdBySelf: !0
                }), s.__hostSeries = t), void (t[a] = s)) : void (t[a] = null)
            }, this)
        }, formatTooltip: function (t) {
            var e = this.getData(), i = this.getRawValue(t), n = _(i) ? p(i, PM).join(", ") : PM(i), r = e.getName(t),
                a = LM(this.name);
            return (null != i || r) && (a += "<br />"), r && (a += LM(r), null != i && (a += " : ")), null != i && (a += LM(n)), a
        }, getData: function () {
            return this._data
        }, setData: function (t) {
            this._data = t
        }
    });
    c(OM, i_), OM.extend({
        type: "markPoint",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: "pin",
            symbolSize: 50,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "inside"},
            itemStyle: {borderWidth: 2},
            emphasis: {label: {show: !0}}
        }
    });
    var zM = h, EM = x, RM = {min: EM(Af, "min"), max: EM(Af, "max"), average: EM(Af, "average")}, BM = nh({
        type: "marker", init: function () {
            this.markerGroupMap = N()
        }, render: function (t, e, i) {
            var n = this.markerGroupMap;
            n.each(function (t) {
                t.__keep = !1
            });
            var r = this.type + "Model";
            e.eachSeries(function (t) {
                var n = t[r];
                n && this.renderSeries(t, n, e, i)
            }, this), n.each(function (t) {
                !t.__keep && this.group.remove(t.group)
            }, this)
        }, renderSeries: function () {
        }
    });
    BM.extend({
        type: "markPoint", updateTransform: function (t, e, i) {
            e.eachSeries(function (t) {
                var e = t.markPointModel;
                e && (Ef(e.getData(), t, i), this.markerGroupMap.get(t.id).updateLayout(e))
            }, this)
        }, renderSeries: function (t, e, i, n) {
            var r = t.coordinateSystem, a = t.id, o = t.getData(), s = this.markerGroupMap,
                l = s.get(a) || s.set(a, new zc), h = Rf(r, t, e);
            e.setData(h), Ef(e.getData(), t, n), h.each(function (t) {
                var i = h.getItemModel(t), n = i.getShallow("symbolSize");
                "function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), h.setItemVisual(t, {
                    symbolSize: n,
                    color: i.get("itemStyle.color") || o.getVisual("color"),
                    symbol: i.getShallow("symbol")
                })
            }), l.updateData(h), this.group.add(l.group), h.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), l.__keep = !0, l.group.silent = e.get("silent") || t.get("silent")
        }
    }), Yl(function (t) {
        t.markPoint = t.markPoint || {}
    }), OM.extend({
        type: "markLine",
        defaultOption: {
            zlevel: 0,
            z: 5,
            symbol: ["circle", "arrow"],
            symbolSize: [8, 16],
            precision: 2,
            tooltip: {trigger: "item"},
            label: {show: !0, position: "end"},
            lineStyle: {type: "dashed"},
            emphasis: {label: {show: !0}, lineStyle: {width: 3}},
            animationEasing: "linear"
        }
    });
    var NM = ky.prototype, FM = Ly.prototype, VM = $r({
        type: "ec-line",
        style: {stroke: "#000", fill: null},
        shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
        buildPath: function (t, e) {
            (Bf(e) ? NM : FM).buildPath(t, e)
        },
        pointAt: function (t) {
            return Bf(this.shape) ? NM.pointAt.call(this, t) : FM.pointAt.call(this, t)
        },
        tangentAt: function (t) {
            var e = this.shape, i = Bf(e) ? [e.x2 - e.x1, e.y2 - e.y1] : FM.tangentAt.call(this, t);
            return te(i, i)
        }
    }), WM = ["fromSymbol", "toSymbol"], GM = Hf.prototype;
    GM.beforeUpdate = Gf, GM._createLine = function (t, e, i) {
        var n = t.hostModel, r = t.getItemLayout(e), a = Vf(r);
        a.shape.percent = 0, Oa(a, {shape: {percent: 1}}, n, e), this.add(a);
        var o = new xy({name: "label"});
        this.add(o), f(WM, function (i) {
            var n = Ff(i, t, e);
            this.add(n), this[Nf(i)] = t.getItemVisual(e, i)
        }, this), this._updateCommonStl(t, e, i)
    }, GM.updateData = function (t, e, i) {
        var n = t.hostModel, r = this.childOfName("line"), a = t.getItemLayout(e), o = {shape: {}};
        Wf(o.shape, a), La(r, o, n, e), f(WM, function (i) {
            var n = t.getItemVisual(e, i), r = Nf(i);
            if (this[r] !== n) {
                this.remove(this.childOfName(i));
                var a = Ff(i, t, e);
                this.add(a)
            }
            this[r] = n
        }, this), this._updateCommonStl(t, e, i)
    }, GM._updateCommonStl = function (t, e, i) {
        var n = t.hostModel, r = this.childOfName("line"), a = i && i.lineStyle, o = i && i.hoverLineStyle,
            l = i && i.labelModel, h = i && i.hoverLabelModel;
        if (!i || t.hasItemOption) {
            var u = t.getItemModel(e);
            a = u.getModel("lineStyle").getLineStyle(), o = u.getModel("emphasis.lineStyle").getLineStyle(), l = u.getModel("label"), h = u.getModel("emphasis.label")
        }
        var c = t.getItemVisual(e, "color"), d = k(t.getItemVisual(e, "opacity"), a.opacity, 1);
        r.useStyle(s({
            strokeNoScale: !0,
            fill: "none",
            stroke: c,
            opacity: d
        }, a)), r.hoverStyle = o, f(WM, function (t) {
            var e = this.childOfName(t);
            e && (e.setColor(c), e.setStyle({opacity: d}))
        }, this);
        var p, g, v = l.getShallow("show"), m = h.getShallow("show"), y = this.childOfName("label");
        if ((v || m) && (p = c || "#000", g = n.getFormattedLabel(e, "normal", t.dataType), null == g)) {
            var x = n.getRawValue(e);
            g = null == x ? t.getName(e) : isFinite(x) ? $a(x) : x
        }
        var _ = v ? g : null, w = m ? D(n.getFormattedLabel(e, "emphasis", t.dataType), g) : null, b = y.style;
        (null != _ || null != w) && (ba(y.style, l, {text: _}, {autoColor: p}), y.__textAlign = b.textAlign, y.__verticalAlign = b.textVerticalAlign, y.__position = l.get("position") || "middle"), y.hoverStyle = null != w ? {
            text: w,
            textFill: h.getTextColor(!0),
            fontStyle: h.getShallow("fontStyle"),
            fontWeight: h.getShallow("fontWeight"),
            fontSize: h.getShallow("fontSize"),
            fontFamily: h.getShallow("fontFamily")
        } : {text: null}, y.ignore = !v && !m, xa(this)
    }, GM.highlight = function () {
        this.trigger("emphasis")
    }, GM.downplay = function () {
        this.trigger("normal")
    }, GM.updateLayout = function (t, e) {
        this.setLinePoints(t.getItemLayout(e))
    }, GM.setLinePoints = function (t) {
        var e = this.childOfName("line");
        Wf(e.shape, t), e.dirty()
    }, u(Hf, lv);
    var HM = Zf.prototype;
    HM.isPersistent = function () {
        return !0
    }, HM.updateData = function (t) {
        var e = this, i = e.group, n = e._lineData;
        e._lineData = t, n || i.removeAll();
        var r = jf(t);
        t.diff(n).add(function (i) {
            Xf(e, t, i, r)
        }).update(function (i, a) {
            Yf(e, n, t, a, i, r)
        }).remove(function (t) {
            i.remove(n.getItemGraphicEl(t))
        }).execute()
    }, HM.updateLayout = function () {
        var t = this._lineData;
        t && t.eachItemGraphicEl(function (e, i) {
            e.updateLayout(t, i)
        }, this)
    }, HM.incrementalPrepareUpdate = function (t) {
        this._seriesScope = jf(t), this._lineData = null, this.group.removeAll()
    }, HM.incrementalUpdate = function (t, e) {
        function i(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0)
        }

        for (var n = t.start; n < t.end; n++) {
            var r = e.getItemLayout(n);
            if (Uf(r)) {
                var a = new this._ctor(e, n, this._seriesScope);
                a.traverse(i), this.group.add(a), e.setItemGraphicEl(n, a)
            }
        }
    }, HM.remove = function () {
        this._clearIncremental(), this._incremental = null, this.group.removeAll()
    }, HM._clearIncremental = function () {
        var t = this._incremental;
        t && t.clearDisplaybles()
    };
    var ZM = function (t, e, i, a) {
        var s = t.getData(), l = a.type;
        if (!_(a) && ("min" === l || "max" === l || "average" === l || "median" === l || null != a.xAxis || null != a.yAxis)) {
            var h, u, c;
            if (null != a.yAxis || null != a.xAxis) u = null != a.yAxis ? "y" : "x", h = e.getAxis(u), c = A(a.yAxis, a.xAxis); else {
                var d = kf(a, s, e, t);
                u = d.valueDataDim, h = d.valueAxis, c = zf(s, u, l)
            }
            var f = "x" === u ? 0 : 1, p = 1 - f, g = n(a), v = {};
            g.type = null, g.coord = [], v.coord = [], g.coord[p] = -1 / 0, v.coord[p] = 1 / 0;
            var m = i.get("precision");
            m >= 0 && "number" == typeof c && (c = +c.toFixed(Math.min(m, 20))), g.coord[f] = v.coord[f] = c, a = [g, v, {
                type: l,
                valueIndex: a.valueIndex,
                value: c
            }]
        }
        return a = [Df(t, a[0]), Df(t, a[1]), o({}, a[2])], a[2].type = a[2].type || "", r(a[2], a[0]), r(a[2], a[1]), a
    };
    BM.extend({
        type: "markLine", updateTransform: function (t, e, i) {
            e.eachSeries(function (t) {
                var e = t.markLineModel;
                if (e) {
                    var n = e.getData(), r = e.__from, a = e.__to;
                    r.each(function (e) {
                        Jf(r, e, !0, t, i), Jf(a, e, !1, t, i)
                    }), n.each(function (t) {
                        n.setItemLayout(t, [r.getItemLayout(t), a.getItemLayout(t)])
                    }), this.markerGroupMap.get(t.id).updateLayout()
                }
            }, this)
        }, renderSeries: function (t, e, i, n) {
            function r(e, i, r) {
                var a = e.getItemModel(i);
                Jf(e, i, r, t, n), e.setItemVisual(i, {
                    symbolSize: a.get("symbolSize") || g[r ? 0 : 1],
                    symbol: a.get("symbol", !0) || p[r ? 0 : 1],
                    color: a.get("itemStyle.color") || s.getVisual("color")
                })
            }

            var a = t.coordinateSystem, o = t.id, s = t.getData(), l = this.markerGroupMap,
                h = l.get(o) || l.set(o, new Zf);
            this.group.add(h.group);
            var u = tp(a, t, e), c = u.from, d = u.to, f = u.line;
            e.__from = c, e.__to = d, e.setData(f);
            var p = e.get("symbol"), g = e.get("symbolSize");
            _(p) || (p = [p, p]), "number" == typeof g && (g = [g, g]), u.from.each(function (t) {
                r(c, t, !0), r(d, t, !1)
            }), f.each(function (t) {
                var e = f.getItemModel(t).get("lineStyle.color");
                f.setItemVisual(t, {color: e || c.getItemVisual(t, "color")}), f.setItemLayout(t, [c.getItemLayout(t), d.getItemLayout(t)]), f.setItemVisual(t, {
                    fromSymbolSize: c.getItemVisual(t, "symbolSize"),
                    fromSymbol: c.getItemVisual(t, "symbol"),
                    toSymbolSize: d.getItemVisual(t, "symbolSize"),
                    toSymbol: d.getItemVisual(t, "symbol")
                })
            }), h.updateData(f), u.line.eachItemGraphicEl(function (t) {
                t.traverse(function (t) {
                    t.dataModel = e
                })
            }), h.__keep = !0, h.group.silent = e.get("silent") || t.get("silent")
        }
    }), Yl(function (t) {
        t.markLine = t.markLine || {}
    }), OM.extend({
        type: "markArea",
        defaultOption: {
            zlevel: 0,
            z: 1,
            tooltip: {trigger: "item"},
            animation: !1,
            label: {show: !0, position: "top"},
            itemStyle: {borderWidth: 0},
            emphasis: {label: {show: !0, position: "top"}}
        }
    });
    var XM = function (t, e, i, n) {
        var r = Df(t, n[0]), o = Df(t, n[1]), s = A, l = r.coord, h = o.coord;
        l[0] = s(l[0], -1 / 0), l[1] = s(l[1], -1 / 0), h[0] = s(h[0], 1 / 0), h[1] = s(h[1], 1 / 0);
        var u = a([{}, r, o]);
        return u.coord = [r.coord, o.coord], u.x0 = r.x, u.y0 = r.y, u.x1 = o.x, u.y1 = o.y, u
    }, YM = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
    BM.extend({
        type: "markArea", updateTransform: function (t, e, i) {
            e.eachSeries(function (t) {
                var e = t.markAreaModel;
                if (e) {
                    var n = e.getData();
                    n.each(function (e) {
                        var r = p(YM, function (r) {
                            return rp(n, e, r, t, i)
                        });
                        n.setItemLayout(e, r);
                        var a = n.getItemGraphicEl(e);
                        a.setShape("points", r)
                    })
                }
            }, this)
        }, renderSeries: function (t, e, i, n) {
            var r = t.coordinateSystem, a = t.id, o = t.getData(), l = this.markerGroupMap,
                h = l.get(a) || l.set(a, {group: new lv});
            this.group.add(h.group), h.__keep = !0;
            var u = ap(r, t, e);
            e.setData(u), u.each(function (e) {
                u.setItemLayout(e, p(YM, function (i) {
                    return rp(u, e, i, t, n)
                })), u.setItemVisual(e, {color: o.getVisual("color")})
            }), u.diff(h.__data).add(function (t) {
                var e = new Cy({shape: {points: u.getItemLayout(t)}});
                u.setItemGraphicEl(t, e), h.group.add(e)
            }).update(function (t, i) {
                var n = h.__data.getItemGraphicEl(i);
                La(n, {shape: {points: u.getItemLayout(t)}}, e, t), h.group.add(n), u.setItemGraphicEl(t, n)
            }).remove(function (t) {
                var e = h.__data.getItemGraphicEl(t);
                h.group.remove(e)
            }).execute(), u.eachItemGraphicEl(function (t, i) {
                var n = u.getItemModel(i), r = n.getModel("label"), a = n.getModel("emphasis.label"),
                    o = u.getItemVisual(i, "color");
                t.useStyle(s(n.getModel("itemStyle").getItemStyle(), {
                    fill: Ke(o, .4),
                    stroke: o
                })), t.hoverStyle = n.getModel("emphasis.itemStyle").getItemStyle(), wa(t.style, t.hoverStyle, r, a, {
                    labelFetcher: e,
                    labelDataIndex: i,
                    defaultText: u.getName(i) || "",
                    isRectText: !0,
                    autoColor: o
                }), xa(t, {}), t.dataModel = e
            }), h.__data = u, h.group.silent = e.get("silent") || t.get("silent")
        }
    }), Yl(function (t) {
        t.markArea = t.markArea || {}
    });
    var jM = function (t) {
        var e = t && t.timeline;
        _(e) || (e = e ? [e] : []), f(e, function (t) {
            t && op(t)
        })
    };
    yx.registerSubTypeDefaulter("timeline", function () {
        return "slider"
    }), Ul({type: "timelineChange", event: "timelineChanged", update: "prepareAndUpdate"}, function (t, e) {
        var i = e.getComponent("timeline");
        return i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline"), s({currentIndex: i.option.currentIndex}, t)
    }), Ul({type: "timelinePlayChange", event: "timelinePlayChanged", update: "update"}, function (t, e) {
        var i = e.getComponent("timeline");
        i && null != t.playState && i.setPlayState(t.playState)
    });
    var qM = yx.extend({
        type: "timeline",
        layoutMode: "box",
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            axisType: "time",
            realtime: !0,
            left: "20%",
            top: null,
            right: "20%",
            bottom: 0,
            width: null,
            height: 40,
            padding: 5,
            controlPosition: "left",
            autoPlay: !1,
            rewind: !1,
            loop: !0,
            playInterval: 2e3,
            currentIndex: 0,
            itemStyle: {},
            label: {color: "#000"},
            data: []
        },
        init: function (t, e, i) {
            this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
        },
        mergeOption: function () {
            qM.superApply(this, "mergeOption", arguments), this._initData()
        },
        setCurrentIndex: function (t) {
            null == t && (t = this.option.currentIndex);
            var e = this._data.count();
            this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
        },
        getCurrentIndex: function () {
            return this.option.currentIndex
        },
        isIndexMax: function () {
            return this.getCurrentIndex() >= this._data.count() - 1
        },
        setPlayState: function (t) {
            this.option.autoPlay = !!t
        },
        getPlayState: function () {
            return !!this.option.autoPlay
        },
        _initData: function () {
            var t = this.option, e = t.data || [], i = t.axisType, r = this._names = [];
            if ("category" === i) {
                var a = [];
                f(e, function (t, e) {
                    var i, o = Vn(t);
                    S(t) ? (i = n(t), i.value = e) : i = e, a.push(i), b(o) || null != o && !isNaN(o) || (o = ""), r.push(o + "")
                }), e = a
            }
            var o = {category: "ordinal", time: "time"}[i] || "number",
                s = this._data = new Bw([{name: "value", type: o}], this);
            s.initData(e, r)
        },
        getData: function () {
            return this._data
        },
        getCategories: function () {
            return "category" === this.get("axisType") ? this._names.slice() : void 0
        }
    }), UM = qM.extend({
        type: "timeline.slider", defaultOption: {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            orient: "horizontal",
            inverse: !1,
            tooltip: {trigger: "item"},
            symbol: "emptyCircle",
            symbolSize: 10,
            lineStyle: {show: !0, width: 2, color: "#304654"},
            label: {position: "auto", show: !0, interval: "auto", rotate: 0, color: "#304654"},
            itemStyle: {color: "#304654", borderWidth: 1},
            checkpointStyle: {
                symbol: "circle",
                symbolSize: 13,
                color: "#c23531",
                borderWidth: 5,
                borderColor: "rgba(194,53,49, 0.5)",
                animation: !0,
                animationDuration: 300,
                animationEasing: "quinticInOut"
            },
            controlStyle: {
                show: !0,
                showPlayBtn: !0,
                showPrevBtn: !0,
                showNextBtn: !0,
                itemSize: 22,
                itemGap: 12,
                position: "left",
                playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,ueditor.8,31.6,ueditor.8C45.7,ueditor.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.ueditor,7.5,27.4c0,13.3,10.8,24.ueditor,24.ueditor,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.ueditor,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,ueditor.6-3.ueditor,3.5-2l10.5,6.1c1.899,ueditor.ueditor,ueditor.899,2.9,0,4l-10.5,6.1c-ueditor.9,ueditor.ueditor-3.5,0.2-3.5-2V21.3z",
                stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.ueditor,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.ueditor,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,ueditor-0.9,1h-ueditor.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-ueditor,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,ueditor-0.9,1h-ueditor.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-ueditor,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
                nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.ueditor-0.5-0.3-0.7L18.7,4.4c-0.ueditor-0.ueditor-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.ueditor,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.ueditor,0.5-0.3,0.7l-0.ueditor,0.1L19.7,52 c-0.ueditor,0.ueditor-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
                prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.ueditor-0.5,0.3-0.7L42.9,6.4c0.ueditor-0.ueditor,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.ueditor-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.ueditor,0.5,0.3,0.7l0.ueditor,0.1L41.9,54 c0.ueditor,0.ueditor,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.ueditor,53,43,52.8z",
                color: "#304654",
                borderColor: "#304654",
                borderWidth: 1
            },
            emphasis: {
                label: {show: !0, color: "#c23531"},
                itemStyle: {color: "#c23531"},
                controlStyle: {color: "#c23531", borderColor: "#c23531", borderWidth: 2}
            },
            data: []
        }
    });
    c(UM, i_);
    var $M = s_.extend({type: "timeline"}), KM = function (t, e, i, n) {
        Pb.call(this, t, e, i), this.type = n || "value", this.model = null
    };
    KM.prototype = {
        constructor: KM, getLabelModel: function () {
            return this.model.getModel("label")
        }, isHorizontal: function () {
            return "horizontal" === this.model.get("orient")
        }
    }, u(KM, Pb);
    var QM = y, JM = f, tI = Math.PI;
    $M.extend({
        type: "timeline.slider", init: function (t, e) {
            this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
        }, render: function (t, e, i) {
            if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
                var n = this._layout(t, i), r = this._createGroup("mainGroup"), a = this._createGroup("labelGroup"),
                    o = this._axis = this._createAxis(n, t);
                t.formatTooltip = function (t) {
                    return po(o.scale.getLabel(t))
                }, JM(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function (e) {
                    this["_render" + e](n, r, o, t)
                }, this), this._renderAxisLabel(n, a, o, t), this._position(n, t)
            }
            this._doPlayStop()
        }, remove: function () {
            this._clearTimer(), this.group.removeAll()
        }, dispose: function () {
            this._clearTimer()
        }, _layout: function (t, e) {
            var i = t.get("label.position"), n = t.get("orient"), r = hp(t, e);
            null == i || "auto" === i ? i = "horizontal" === n ? r.y + r.height / 2 < e.getHeight() / 2 ? "-" : "+" : r.x + r.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(i) && (i = {
                horizontal: {
                    top: "-",
                    bottom: "+"
                }, vertical: {left: "-", right: "+"}
            }[n][i]);
            var a = {horizontal: "center", vertical: i >= 0 || "+" === i ? "left" : "right"},
                o = {horizontal: i >= 0 || "+" === i ? "top" : "bottom", vertical: "middle"},
                s = {horizontal: 0, vertical: tI / 2}, l = "vertical" === n ? r.height : r.width,
                h = t.getModel("controlStyle"), u = h.get("show", !0), c = u ? h.get("itemSize") : 0,
                d = u ? h.get("itemGap") : 0, f = c + d, p = t.get("label.rotate") || 0;
            p = p * tI / 180;
            var g, v, m, y, x = h.get("position", !0), _ = u && h.get("showPlayBtn", !0),
                w = u && h.get("showPrevBtn", !0), b = u && h.get("showNextBtn", !0), S = 0, M = l;
            return "left" === x || "bottom" === x ? (_ && (g = [0, 0], S += f), w && (v = [S, 0], S += f), b && (m = [M - c, 0], M -= f)) : (_ && (g = [M - c, 0], M -= f), w && (v = [0, 0], S += f), b && (m = [M - c, 0], M -= f)), y = [S, M], t.get("inverse") && y.reverse(), {
                viewRect: r,
                mainLength: l,
                orient: n,
                rotation: s[n],
                labelRotation: p,
                labelPosOpt: i,
                labelAlign: t.get("label.align") || a[n],
                labelBaseline: t.get("label.verticalAlign") || t.get("label.baseline") || o[n],
                playPosition: g,
                prevBtnPosition: v,
                nextBtnPosition: m,
                axisExtent: y,
                controlSize: c,
                controlGap: d
            }
        }, _position: function (t) {
            function e(t) {
                var e = t.position;
                t.origin = [u[0][0] - e[0], u[1][0] - e[1]]
            }

            function i(t) {
                return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
            }

            function n(t, e, i, n, r) {
                t[n] += i[n][r] - e[n][r]
            }

            var r = this._mainGroup, a = this._labelGroup, o = t.viewRect;
            if ("vertical" === t.orient) {
                var s = be(), l = o.x, h = o.y + o.height;
                Te(s, s, [-l, -h]), Ce(s, s, -tI / 2), Te(s, s, [l, h]), o = o.clone(), o.applyTransform(s)
            }
            var u = i(o), c = i(r.getBoundingRect()), d = i(a.getBoundingRect()), f = r.position, p = a.position;
            p[0] = f[0] = u[0][0];
            var g = t.labelPosOpt;
            if (isNaN(g)) {
                var v = "+" === g ? 0 : 1;
                n(f, c, u, 1, v), n(p, d, u, 1, 1 - v)
            } else {
                var v = g >= 0 ? 0 : 1;
                n(f, c, u, 1, v), p[1] = f[1] + g
            }
            r.attr("position", f), a.attr("position", p), r.rotation = a.rotation = t.rotation, e(r), e(a)
        }, _createAxis: function (t, e) {
            var i = e.getData(), n = e.get("axisType"), r = ou(e, n);
            r.getTicks = function () {
                return i.mapArray(["value"], function (t) {
                    return t
                })
            };
            var a = i.getDataExtent("value");
            r.setExtent(a[0], a[1]), r.niceTicks();
            var o = new KM("value", r, t.axisExtent, n);
            return o.model = e, o
        }, _createGroup: function (t) {
            var e = this["_" + t] = new lv;
            return this.group.add(e), e
        }, _renderAxisLine: function (t, e, i, n) {
            var r = i.getExtent();
            n.get("lineStyle.show") && e.add(new ky({
                shape: {x1: r[0], y1: 0, x2: r[1], y2: 0},
                style: o({lineCap: "round"}, n.getModel("lineStyle").getLineStyle()),
                silent: !0,
                z2: 1
            }))
        }, _renderAxisTick: function (t, e, i, n) {
            var r = n.getData(), a = i.scale.getTicks();
            JM(a, function (t) {
                var a = i.dataToCoord(t), o = r.getItemModel(t), s = o.getModel("itemStyle"),
                    l = o.getModel("emphasis.itemStyle"),
                    h = {position: [a, 0], onclick: QM(this._changeTimeline, this, t)}, u = cp(o, s, e, h);
                xa(u, l.getItemStyle()), o.get("tooltip") ? (u.dataIndex = t, u.dataModel = n) : u.dataIndex = u.dataModel = null
            }, this)
        }, _renderAxisLabel: function (t, e, i, n) {
            var r = i.getLabelModel();
            if (r.get("show")) {
                var a = n.getData(), o = i.getViewLabels();
                JM(o, function (n) {
                    var r = n.tickValue, o = a.getItemModel(r), s = o.getModel("label"),
                        l = o.getModel("emphasis.label"), h = i.dataToCoord(n.tickValue), u = new xy({
                            position: [h, 0],
                            rotation: t.labelRotation - t.rotation,
                            onclick: QM(this._changeTimeline, this, r),
                            silent: !1
                        });
                    ba(u.style, s, {
                        text: n.formattedLabel,
                        textAlign: t.labelAlign,
                        textVerticalAlign: t.labelBaseline
                    }), e.add(u), xa(u, ba({}, l))
                }, this)
            }
        }, _renderControl: function (t, e, i, n) {
            function r(t, i, r, u) {
                if (t) {
                    var c = {
                        position: t,
                        origin: [a / 2, 0],
                        rotation: u ? -o : 0,
                        rectHover: !0,
                        style: s,
                        onclick: r
                    }, d = up(n, i, h, c);
                    e.add(d), xa(d, l)
                }
            }

            var a = t.controlSize, o = t.rotation, s = n.getModel("controlStyle").getItemStyle(),
                l = n.getModel("emphasis.controlStyle").getItemStyle(), h = [0, -a / 2, a, a], u = n.getPlayState(),
                c = n.get("inverse", !0);
            r(t.nextBtnPosition, "controlStyle.nextIcon", QM(this._changeTimeline, this, c ? "-" : "+")), r(t.prevBtnPosition, "controlStyle.prevIcon", QM(this._changeTimeline, this, c ? "+" : "-")), r(t.playPosition, "controlStyle." + (u ? "stopIcon" : "playIcon"), QM(this._handlePlayClick, this, !u), !0)
        }, _renderCurrentPointer: function (t, e, i, n) {
            var r = n.getData(), a = n.getCurrentIndex(), o = r.getItemModel(a).getModel("checkpointStyle"), s = this,
                l = {
                    onCreate: function (t) {
                        t.draggable = !0, t.drift = QM(s._handlePointerDrag, s), t.ondragend = QM(s._handlePointerDragend, s), dp(t, a, i, n, !0)
                    }, onUpdate: function (t) {
                        dp(t, a, i, n)
                    }
                };
            this._currentPointer = cp(o, o, this._mainGroup, {}, this._currentPointer, l)
        }, _handlePlayClick: function (t) {
            this._clearTimer(), this.api.dispatchAction({type: "timelinePlayChange", playState: t, from: this.uid})
        }, _handlePointerDrag: function (t, e, i) {
            this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
        }, _handlePointerDragend: function (t) {
            this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
        }, _pointerChangeTimeline: function (t, e) {
            var i = this._toAxisCoord(t)[0], n = this._axis, r = Ka(n.getExtent().slice());
            i > r[1] && (i = r[1]), i < r[0] && (i = r[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
            var a = this._findNearestTick(i), o = this.model;
            (e || a !== o.getCurrentIndex() && o.get("realtime")) && this._changeTimeline(a)
        }, _doPlayStop: function () {
            function t() {
                var t = this.model;
                this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
            }

            this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(QM(t, this), this.model.get("playInterval")))
        }, _toAxisCoord: function (t) {
            var e = this._mainGroup.getLocalTransform();
            return Ea(t, e, !0)
        }, _findNearestTick: function (t) {
            var e, i = this.model.getData(), n = 1 / 0, r = this._axis;
            return i.each(["value"], function (i, a) {
                var o = r.dataToCoord(i), s = Math.abs(o - t);
                n > s && (n = s, e = a)
            }), e
        }, _clearTimer: function () {
            this._timer && (clearTimeout(this._timer), this._timer = null)
        }, _changeTimeline: function (t) {
            var e = this.model.getCurrentIndex();
            "+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
                type: "timelineChange",
                currentIndex: t,
                from: this.uid
            })
        }
    }), Yl(jM), yx.registerSubTypeDefaulter("dataZoom", function () {
        return "slider"
    });
    var eI = ["x", "y", "z", "radius", "angle", "single"], iI = ["cartesian2d", "polar", "singleAxis"],
        nI = pp(eI, ["axisIndex", "axis", "index", "id"]), rI = f, aI = Ka, oI = function (t, e, i, n) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this._minMaxSpan, this.ecModel = n, this._dataZoomModel = i
        };
    oI.prototype = {
        constructor: oI, hostedBy: function (t) {
            return this._dataZoomModel === t
        }, getDataValueWindow: function () {
            return this._valueWindow.slice()
        }, getDataPercentWindow: function () {
            return this._percentWindow.slice()
        }, getTargetSeriesModels: function () {
            var t = [], e = this.ecModel;
            return e.eachSeries(function (i) {
                if (fp(i.get("coordinateSystem"))) {
                    var n = this._dimName, r = e.queryComponents({
                        mainType: n + "Axis",
                        index: i.get(n + "AxisIndex"),
                        id: i.get(n + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(i)
                }
            }, this), t
        }, getAxisModel: function () {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
        }, getOtherAxisModel: function () {
            var t, e, i = this._dimName, n = this.ecModel, r = this.getAxisModel(), a = "x" === i || "y" === i;
            a ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
            var o;
            return n.eachComponent(t + "Axis", function (t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (o = t)
            }), o
        }, getMinMaxSpan: function () {
            return n(this._minMaxSpan)
        }, calculateDataWindow: function (t) {
            var e = this._dataExtent, i = this.getAxisModel(), n = i.axis.scale,
                r = this._dataZoomModel.getRangePropMode(), a = [0, 100], o = [t.start, t.end], s = [];
            return rI(["startValue", "endValue"], function (e) {
                s.push(null != t[e] ? n.parse(t[e]) : null)
            }), rI([0, 1], function (t) {
                var i = s[t], l = o[t];
                "percent" === r[t] ? (null == l && (l = a[t]), i = n.parse(qa(l, a, e, !0))) : l = qa(i, e, a, !0), s[t] = i, o[t] = l
            }), {valueWindow: aI(s), percentWindow: aI(o)}
        }, reset: function (t) {
            if (t === this._dataZoomModel) {
                var e = this.getTargetSeriesModels();
                this._dataExtent = vp(this, this._dimName, e);
                var i = this.calculateDataWindow(t.option);
                this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, xp(this), yp(this)
            }
        }, restore: function (t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, yp(this, !0))
        }, filterData: function (t) {
            function e(t) {
                return t >= a[0] && t <= a[1]
            }

            if (t === this._dataZoomModel) {
                var i = this._dimName, n = this.getTargetSeriesModels(), r = t.get("filterMode"), a = this._valueWindow;
                "none" !== r && rI(n, function (t) {
                    var n = t.getData(), o = n.mapDimension(i, !0);
                    o.length && ("weakFilter" === r ? n.filterSelf(function (t) {
                        for (var e, i, r, s = 0; s < o.length; s++) {
                            var l = n.get(o[s], t), h = !isNaN(l), u = l < a[0], c = l > a[1];
                            if (h && !u && !c) return !0;
                            h && (r = !0), u && (e = !0), c && (i = !0)
                        }
                        return r && e && i
                    }) : rI(o, function (i) {
                        if ("empty" === r) t.setData(n.map(i, function (t) {
                            return e(t) ? t : 0 / 0
                        })); else {
                            var o = {};
                            o[i] = a, n.selectRange(o)
                        }
                    }), rI(o, function (t) {
                        n.setApproximateExtent(a, t)
                    }))
                })
            }
        }
    };
    var sI = f, lI = nI, hI = ih({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null,
                minSpan: null,
                maxSpan: null,
                minValueSpan: null,
                maxValueSpan: null,
                rangeMode: null
            },
            init: function (t, e, i) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0, this._rangePropMode = ["percent", "percent"];
                var n = _p(t);
                this.mergeDefaultAndTheme(t, i), this.doInit(n)
            },
            mergeOption: function (t) {
                var e = _p(t);
                r(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                tg.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), wp(this, t), sI([["start", "startValue"], ["end", "endValue"]], function (t, i) {
                    "value" === this._rangePropMode[i] && (e[t[0]] = null)
                }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, i, n, r) {
                    var a = this.dependentModels[e.axis][i],
                        o = a.__dzAxisProxy || (a.__dzAxisProxy = new oI(e.name, i, this, r));
                    t[e.name + "_" + i] = o
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                lI(function (e) {
                    var i = e.axisIndex;
                    t[i] = Nn(t[i])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                lI(function (i) {
                    null != t[i.axisIndex] && (e = !0)
                }, this);
                var i = t.orient;
                return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), i = this.option, n = this.dependentModels;
                if (t) {
                    var r = "vertical" === e ? "y" : "x";
                    n[r + "Axis"].length ? (i[r + "AxisIndex"] = [0], t = !1) : sI(n.singleAxis, function (n) {
                        t && n.get("orient", !0) === e && (i.singleAxisIndex = [n.componentIndex], t = !1)
                    })
                }
                t && lI(function (e) {
                    if (t) {
                        var n = [], r = this.dependentModels[e.axis];
                        if (r.length && !n.length) for (var a = 0, o = r.length; o > a; a++) "category" === r[a].get("type") && n.push(a);
                        i[e.axisIndex] = n, n.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && lI(function (e) {
                        var n = i[e.axisIndex], r = t.get(e.axisIndex), a = t.get(e.axisId),
                            o = t.ecModel.queryComponents({mainType: e.axis, index: r, id: a})[0];
                        r = o.componentIndex, h(n, r) < 0 && n.push(r)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var i = !0;
                return lI(function (n) {
                    var r = t.get(n.axisIndex), a = this.dependentModels[n.axis][r];
                    a && a.get("type") === e || (i = !1)
                }, this), i
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return lI(function (e) {
                    if (null == t) {
                        var i = this.get(e.axisIndex);
                        i.length && (t = this.dependentModels[e.axis][i[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var i = this.ecModel;
                lI(function (n) {
                    sI(this.get(n.axisIndex), function (r) {
                        t.call(e, n, r, this, i)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            getAxisModel: function (t, e) {
                var i = this.getAxisProxy(t, e);
                return i && i.getAxisModel()
            },
            setRawRange: function (t, e) {
                var i = this.option;
                sI([["start", "startValue"], ["end", "endValue"]], function (e) {
                    (null != t[e[0]] || null != t[e[1]]) && (i[e[0]] = t[e[0]], i[e[1]] = t[e[1]])
                }, this), !e && wp(this, t)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                return t ? t.getDataPercentWindow() : void 0
            },
            getValueRange: function (t, e) {
                if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
                var i = this.findRepresentativeAxisProxy();
                return i ? i.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function (t) {
                if (t) return t.__dzAxisProxy;
                var e = this._axisProxies;
                for (var i in e) if (e.hasOwnProperty(i) && e[i].hostedBy(this)) return e[i];
                for (var i in e) if (e.hasOwnProperty(i) && !e[i].hostedBy(this)) return e[i]
            },
            getRangePropMode: function () {
                return this._rangePropMode.slice()
            }
        }), uI = s_.extend({
            type: "dataZoom", render: function (t, e, i) {
                this.dataZoomModel = t, this.ecModel = e, this.api = i
            }, getTargetCoordInfo: function () {
                function t(t, e, i, n) {
                    for (var r, a = 0; a < i.length; a++) if (i[a].model === t) {
                        r = i[a];
                        break
                    }
                    r || i.push(r = {model: t, axisModels: [], coordIndex: n}), r.axisModels.push(e)
                }

                var e = this.dataZoomModel, i = this.ecModel, n = {};
                return e.eachTargetAxis(function (e, r) {
                    var a = i.getComponent(e.axis, r);
                    if (a) {
                        var o = a.getCoordSysModel();
                        o && t(o, a, n[o.mainType] || (n[o.mainType] = []), o.componentIndex)
                    }
                }, this), n
            }
        }), cI = (hI.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackground: {
                    lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                    areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                },
                borderColor: "#ddd",
                fillerColor: "rgba(167,183,204,0.4)",
                handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-ueditor.4h4.9V24.4z M9.7,19.1H4.8v-ueditor.4h4.9V19.1z",
                handleSize: "100%",
                handleStyle: {color: "#a7b7cc"},
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        }), function (t, e, i, n, r, a) {
            e[0] = Sp(e[0], i), e[1] = Sp(e[1], i), t = t || 0;
            var o = i[1] - i[0];
            null != r && (r = Sp(r, [0, o])), null != a && (a = Math.max(a, null != r ? r : 0)), "all" === n && (r = a = Math.abs(e[1] - e[0]), n = 0);
            var s = bp(e, n);
            e[n] += t;
            var l = r || 0, h = i.slice();
            s.sign < 0 ? h[0] += l : h[1] -= l, e[n] = Sp(e[n], h);
            var u = bp(e, n);
            null != r && (u.sign !== s.sign || u.span < r) && (e[1 - n] = e[n] + s.sign * r);
            var u = bp(e, n);
            return null != a && u.span > a && (e[1 - n] = e[n] + u.sign * a), e
        }), dI = Dy, fI = qa, pI = Ka, gI = y, vI = f, mI = 7, yI = 1, xI = 30, _I = "horizontal", wI = "vertical", bI = 5,
        SI = ["line", "bar", "candlestick", "scatter"], MI = uI.extend({
            type: "dataZoom.slider", init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
            }, render: function (t, e, i, n) {
                return MI.superApply(this, "render", arguments), Hs(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
            }, remove: function () {
                MI.superApply(this, "remove", arguments), Zs(this, "_dispatchZoomAction")
            }, dispose: function () {
                MI.superApply(this, "dispose", arguments), Zs(this, "_dispatchZoomAction")
            }, _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new lv;
                this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
            }, _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, i = this._findCoordRect(),
                    n = {width: e.getWidth(), height: e.getHeight()}, r = this._orient === _I ? {
                        right: n.width - i.x - i.width,
                        top: n.height - xI - mI,
                        width: i.width,
                        height: xI
                    } : {right: mI, top: i.y, width: xI, height: i.height}, a = Mo(t.option);
                f(["right", "top", "width", "height"], function (t) {
                    "ph" === a[t] && (a[t] = r[t])
                });
                var o = bo(a, n, t.padding);
                this._location = {
                    x: o.x,
                    y: o.y
                }, this._size = [o.width, o.height], this._orient === wI && this._size.reverse()
            }, _positionGroup: function () {
                var t = this.group, e = this._location, i = this._orient, n = this.dataZoomModel.getFirstTargetAxisModel(),
                    r = n && n.get("inverse"), a = this._displayables.barGroup,
                    o = (this._dataShadowInfo || {}).otherAxisInverse;
                a.attr(i !== _I || r ? i === _I && r ? {scale: o ? [-1, 1] : [-1, -1]} : i !== wI || r ? {
                    scale: o ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: o ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: o ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([a]);
                t.attr("position", [e.x - s.x, e.y - s.y])
            }, _getViewExtent: function () {
                return [0, this._size[0]]
            }, _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size, i = this._displayables.barGroup;
                i.add(new dI({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")},
                    z2: -40
                })), i.add(new dI({
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: "transparent"},
                    z2: 0,
                    onclick: y(this._onClickPanelClick, this)
                }))
            }, _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, i = t.series, n = i.getRawData(),
                        r = i.getShadowDim ? i.getShadowDim() : t.otherDim;
                    if (null != r) {
                        var a = n.getDataExtent(r), o = .3 * (a[1] - a[0]);
                        a = [a[0] - o, a[1] + o];
                        var l, h = [0, e[1]], u = [0, e[0]], c = [[e[0], 0], [0, 0]], d = [], f = u[1] / (n.count() - 1),
                            p = 0, g = Math.round(n.count() / e[0]);
                        n.each([r], function (t, e) {
                            if (g > 0 && e % g) return void (p += f);
                            var i = null == t || isNaN(t) || "" === t, n = i ? 0 : fI(t, a, h, !0);
                            i && !l && e ? (c.push([c[c.length - 1][0], 0]), d.push([d[d.length - 1][0], 0])) : !i && l && (c.push([p, 0]), d.push([p, 0])), c.push([p, n]), d.push([p, n]), p += f, l = i
                        });
                        var v = this.dataZoomModel;
                        this._displayables.barGroup.add(new Cy({
                            shape: {points: c},
                            style: s({fill: v.get("dataBackgroundColor")}, v.getModel("dataBackground.areaStyle").getAreaStyle()),
                            silent: !0,
                            z2: -20
                        })), this._displayables.barGroup.add(new Ay({
                            shape: {points: d},
                            style: v.getModel("dataBackground.lineStyle").getLineStyle(),
                            silent: !0,
                            z2: -19
                        }))
                    }
                }
            }, _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (e !== !1) {
                    var i, n = this.ecModel;
                    return t.eachTargetAxis(function (r, a) {
                        var o = t.getAxisProxy(r.name, a).getTargetSeriesModels();
                        f(o, function (t) {
                            if (!(i || e !== !0 && h(SI, t.get("type")) < 0)) {
                                var o, s = n.getComponent(r.axis, a).axis, l = Mp(r.name), u = t.coordinateSystem;
                                null != l && u.getOtherAxis && (o = u.getOtherAxis(s).inverse), l = t.getData().mapDimension(l), i = {
                                    thisAxis: s,
                                    series: t,
                                    thisDim: r.name,
                                    otherDim: l,
                                    otherAxisInverse: o
                                }
                            }
                        }, this)
                    }, this), i
                }
            }, _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], i = t.handleLabels = [], n = this._displayables.barGroup,
                    r = this._size, a = this.dataZoomModel;
                n.add(t.filler = new dI({
                    draggable: !0,
                    cursor: Ip(this._orient),
                    drift: gI(this._onDragMove, this, "all"),
                    onmousemove: function (t) {
                        Ig(t.event)
                    },
                    ondragstart: gI(this._showDataInfo, this, !0),
                    ondragend: gI(this._onDragEnd, this),
                    onmouseover: gI(this._showDataInfo, this, !0),
                    onmouseout: gI(this._showDataInfo, this, !1),
                    style: {fill: a.get("fillerColor"), textPosition: "inside"}
                })), n.add(new dI(na({
                    silent: !0,
                    shape: {x: 0, y: 0, width: r[0], height: r[1]},
                    style: {
                        stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
                        lineWidth: yI,
                        fill: "rgba(0,0,0,0)"
                    }
                }))), vI([0, 1], function (t) {
                    var r = Va(a.get("handleIcon"), {
                        cursor: Ip(this._orient),
                        draggable: !0,
                        drift: gI(this._onDragMove, this, t),
                        onmousemove: function (t) {
                            Ig(t.event)
                        },
                        ondragend: gI(this._onDragEnd, this),
                        onmouseover: gI(this._showDataInfo, this, !0),
                        onmouseout: gI(this._showDataInfo, this, !1)
                    }, {x: -1, y: 0, width: 2, height: 2}), o = r.getBoundingRect();
                    this._handleHeight = Ua(a.get("handleSize"), this._size[1]), this._handleWidth = o.width / o.height * this._handleHeight, r.setStyle(a.getModel("handleStyle").getItemStyle());
                    var s = a.get("handleColor");
                    null != s && (r.style.fill = s), n.add(e[t] = r);
                    var l = a.textStyleModel;
                    this.group.add(i[t] = new xy({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            textFill: l.getTextColor(),
                            textFont: l.getFont()
                        },
                        z2: 10
                    }))
                }, this)
            }, _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [fI(t[0], [0, 100], e, !0), fI(t[1], [0, 100], e, !0)]
            }, _updateInterval: function (t, e) {
                var i = this.dataZoomModel, n = this._handleEnds, r = this._getViewExtent(),
                    a = i.findRepresentativeAxisProxy().getMinMaxSpan(), o = [0, 100];
                cI(e, n, r, i.get("zoomLock") ? "all" : t, null != a.minSpan ? fI(a.minSpan, o, r, !0) : null, null != a.maxSpan ? fI(a.maxSpan, o, r, !0) : null);
                var s = this._range, l = this._range = pI([fI(n[0], r, o, !0), fI(n[1], r, o, !0)]);
                return !s || s[0] !== l[0] || s[1] !== l[1]
            }, _updateView: function (t) {
                var e = this._displayables, i = this._handleEnds, n = pI(i.slice()), r = this._size;
                vI([0, 1], function (t) {
                    var n = e.handles[t], a = this._handleHeight;
                    n.attr({scale: [a / 2, a / 2], position: [i[t], r[1] / 2 - a / 2]})
                }, this), e.filler.setShape({x: n[0], y: 0, width: n[1] - n[0], height: r[1]}), this._updateDataInfo(t)
            }, _updateDataInfo: function (t) {
                function e(t) {
                    var e = za(n.handles[t].parent, this.group), i = Ra(0 === t ? "right" : "left", e),
                        s = this._handleWidth / 2 + bI, l = Ea([c[t] + (0 === t ? -s : s), this._size[1] / 2], e);
                    r[t].setStyle({
                        x: l[0],
                        y: l[1],
                        textVerticalAlign: a === _I ? "middle" : i,
                        textAlign: a === _I ? i : "center",
                        text: o[t]
                    })
                }

                var i = this.dataZoomModel, n = this._displayables, r = n.handleLabels, a = this._orient, o = ["", ""];
                if (i.get("showDetail")) {
                    var s = i.findRepresentativeAxisProxy();
                    if (s) {
                        var l = s.getAxisModel().axis, h = this._range,
                            u = t ? s.calculateDataWindow({start: h[0], end: h[1]}).valueWindow : s.getDataValueWindow();
                        o = [this._formatLabel(u[0], l), this._formatLabel(u[1], l)]
                    }
                }
                var c = pI(this._handleEnds.slice());
                e.call(this, 0), e.call(this, 1)
            }, _formatLabel: function (t, e) {
                var i = this.dataZoomModel, n = i.get("labelFormatter"), r = i.get("labelPrecision");
                (null == r || "auto" === r) && (r = e.getPixelPrecision());
                var a = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
                return w(n) ? n(t, a) : b(n) ? n.replace("{value}", a) : a
            }, _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            }, _onDragMove: function (t, e, i) {
                this._dragging = !0;
                var n = this._displayables.barGroup.getLocalTransform(), r = Ea([e, i], n, !0),
                    a = this._updateInterval(t, r[0]), o = this.dataZoomModel.get("realtime");
                this._updateView(!o), a && o && this._dispatchZoomAction()
            }, _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1);
                var t = this.dataZoomModel.get("realtime");
                !t && this._dispatchZoomAction()
            }, _onClickPanelClick: function (t) {
                var e = this._size, i = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
                if (!(i[0] < 0 || i[0] > e[0] || i[1] < 0 || i[1] > e[1])) {
                    var n = this._handleEnds, r = (n[0] + n[1]) / 2, a = this._updateInterval("all", i[0] - r);
                    this._updateView(), a && this._dispatchZoomAction()
                }
            }, _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            }, _findCoordRect: function () {
                var t;
                if (vI(this.getTargetCoordInfo(), function (e) {
                    if (!t && e.length) {
                        var i = e[0].model.coordinateSystem;
                        t = i.getRect && i.getRect()
                    }
                }), !t) {
                    var e = this.api.getWidth(), i = this.api.getHeight();
                    t = {x: .2 * e, y: .2 * i, width: .6 * e, height: .6 * i}
                }
                return t
            }
        });
    hI.extend({
        type: "dataZoom.inside",
        defaultOption: {
            disabled: !1,
            zoomLock: !1,
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0
        }
    });
    var II = "\x00_ec_interaction_mutex";
    Ul({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
    }), c(Ap, bg);
    var TI = "\x00_ec_dataZoom_roams", CI = y, AI = uI.extend({
        type: "dataZoom.inside", init: function () {
            this._range
        }, render: function (t, e, i) {
            AI.superApply(this, "render", arguments), this._range = t.getPercentRange(), f(this.getTargetCoordInfo(), function (e, n) {
                var r = p(e, function (t) {
                    return Fp(t.model)
                });
                f(e, function (e) {
                    var a = e.model, o = {};
                    f(["pan", "zoom", "scrollMove"], function (t) {
                        o[t] = CI(DI[t], this, e, n)
                    }, this), Bp(i, {
                        coordId: Fp(a), allCoordIds: r, containsPoint: function (t, e, i) {
                            return a.coordinateSystem.containPoint([e, i])
                        }, dataZoomId: t.id, dataZoomModel: t, getRange: o
                    })
                }, this)
            }, this)
        }, dispose: function () {
            Np(this.api, this.dataZoomModel.id), AI.superApply(this, "dispose", arguments), this._range = null
        }
    }), DI = {
        zoom: function (t, e, i, n) {
            var r = this._range, a = r.slice(), o = t.axisModels[0];
            if (o) {
                var s = kI[e](null, [n.originX, n.originY], o, i, t),
                    l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0],
                    h = Math.max(1 / n.scale, 0);
                a[0] = (a[0] - l) * h + l, a[1] = (a[1] - l) * h + l;
                var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
                return cI(0, a, [0, 100], 0, u.minSpan, u.maxSpan), this._range = a, r[0] !== a[0] || r[1] !== a[1] ? a : void 0
            }
        }, pan: Xp(function (t, e, i, n, r, a) {
            var o = kI[n]([a.oldX, a.oldY], [a.newX, a.newY], e, r, i);
            return o.signal * (t[1] - t[0]) * o.pixel / o.pixelLength
        }), scrollMove: Xp(function (t, e, i, n, r, a) {
            var o = kI[n]([0, 0], [a.scrollDelta, a.scrollDelta], e, r, i);
            return o.signal * (t[1] - t[0]) * a.scrollDelta
        })
    }, kI = {
        grid: function (t, e, i, n, r) {
            var a = i.axis, o = {}, s = r.model.coordinateSystem.getRect();
            return t = t || [0, 0], "x" === a.dim ? (o.pixel = e[0] - t[0], o.pixelLength = s.width, o.pixelStart = s.x, o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], o.pixelLength = s.height, o.pixelStart = s.y, o.signal = a.inverse ? -1 : 1), o
        }, polar: function (t, e, i, n, r) {
            var a = i.axis, o = {}, s = r.model.coordinateSystem, l = s.getRadiusAxis().getExtent(),
                h = s.getAngleAxis().getExtent();
            return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === i.mainType ? (o.pixel = e[0] - t[0], o.pixelLength = l[1] - l[0], o.pixelStart = l[0], o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], o.pixelLength = h[1] - h[0], o.pixelStart = h[0], o.signal = a.inverse ? -1 : 1), o
        }, singleAxis: function (t, e, i, n, r) {
            var a = i.axis, o = r.model.coordinateSystem.getRect(), s = {};
            return t = t || [0, 0], "horizontal" === a.orient ? (s.pixel = e[0] - t[0], s.pixelLength = o.width, s.pixelStart = o.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = o.height, s.pixelStart = o.y, s.signal = a.inverse ? -1 : 1), s
        }
    };
    jl({
        getTargetSeries: function (t) {
            var e = N();
            return t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, i, n) {
                    var r = n.getAxisProxy(t.name, i);
                    f(r.getTargetSeriesModels(), function (t) {
                        e.set(t.uid, t)
                    })
                })
            }), e
        }, modifyOutputEnd: !0, overallReset: function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(function (t, i, n) {
                    n.getAxisProxy(t.name, i).reset(n, e)
                }), t.eachTargetAxis(function (t, i, n) {
                    n.getAxisProxy(t.name, i).filterData(n, e)
                })
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), i = e.getDataPercentWindow(), n = e.getDataValueWindow();
                t.setRawRange({start: i[0], end: i[1], startValue: n[0], endValue: n[1]}, !0)
            })
        }
    }), Ul("dataZoom", function (t, e) {
        var i = gp(y(e.eachComponent, e, "dataZoom"), nI, function (t, e) {
            return t.get(e.axisIndex)
        }), n = [];
        e.eachComponent({mainType: "dataZoom", query: t}, function (t) {
            n.push.apply(n, i(t).nodes)
        }), f(n, function (e) {
            e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
        })
    });
    var PI, LI = "urn:schemas-microsoft-com:vml", OI = "undefined" == typeof window ? null : window, zI = !1,
        EI = OI && OI.document;
    if (EI && !tg.canvasSupported) try {
        !EI.namespaces.zrvml && EI.namespaces.add("zrvml", LI), PI = function (t) {
            return EI.createElement("<zrvml:" + t + ' class="zrvml">')
        }
    } catch (RI) {
        PI = function (t) {
            return EI.createElement("<" + t + ' xmlns="' + LI + '" class="zrvml">')
        }
    }
    var BI = qm.CMD, NI = Math.round, FI = Math.sqrt, VI = Math.abs, WI = Math.cos, GI = Math.sin, HI = Math.max;
    if (!tg.canvasSupported) {
        var ZI = ",", XI = "progid:DXImageTransform.Microsoft", YI = 21600, jI = YI / 2, qI = 1e5, UI = 1e3,
            $I = function (t) {
                t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = YI + "," + YI, t.coordorigin = "0,0"
            }, KI = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
            }, QI = function (t, e, i) {
                return "rgb(" + [t, e, i].join(",") + ")"
            }, JI = function (t, e) {
                e && t && e.parentNode !== t && t.appendChild(e)
            }, tT = function (t, e) {
                e && t && e.parentNode === t && t.removeChild(e)
            }, eT = function (t, e, i) {
                return (parseFloat(t) || 0) * qI + (parseFloat(e) || 0) * UI + i
            }, iT = function (t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }, nT = function (t, e, i) {
                var n = He(e);
                i = +i, isNaN(i) && (i = 1), n && (t.color = QI(n[0], n[1], n[2]), t.opacity = i * n[3])
            }, rT = function (t) {
                var e = He(t);
                return [QI(e[0], e[1], e[2]), e[3]]
            }, aT = function (t, e, i) {
                var n = e.fill;
                if (null != n) if (n instanceof Ey) {
                    var r, a = 0, o = [0, 0], s = 0, l = 1, h = i.getBoundingRect(), u = h.width, c = h.height;
                    if ("linear" === n.type) {
                        r = "gradient";
                        var d = i.transform, f = [n.x * u, n.y * c], p = [n.x2 * u, n.y2 * c];
                        d && (ae(f, f, d), ae(p, p, d));
                        var g = p[0] - f[0], v = p[1] - f[1];
                        a = 180 * Math.atan2(g, v) / Math.PI, 0 > a && (a += 360), 1e-6 > a && (a = 0)
                    } else {
                        r = "gradientradial";
                        var f = [n.x * u, n.y * c], d = i.transform, m = i.scale, y = u, x = c;
                        o = [(f[0] - h.x) / y, (f[1] - h.y) / x], d && ae(f, f, d), y /= m[0] * YI, x /= m[1] * YI;
                        var _ = HI(y, x);
                        s = 0 / _, l = 2 * n.r / _ - s
                    }
                    var w = n.colorStops.slice();
                    w.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    for (var b = w.length, S = [], M = [], I = 0; b > I; I++) {
                        var T = w[I], C = rT(T.color);
                        M.push(T.offset * l + s + " " + C[0]), (0 === I || I === b - 1) && S.push(C)
                    }
                    if (b >= 2) {
                        var A = S[0][0], D = S[1][0], k = S[0][1] * e.opacity, P = S[1][1] * e.opacity;
                        t.type = r, t.method = "none", t.focus = "100%", t.angle = a, t.color = A, t.color2 = D, t.colors = M.join(","), t.opacity = P, t.opacity2 = k
                    }
                    "radial" === r && (t.focusposition = o.join(","))
                } else nT(t, n, e.opacity)
            }, oT = function (t, e) {
                null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof Ey || nT(t, e.stroke, e.opacity)
            }, sT = function (t, e, i, n) {
                var r = "fill" == e, a = t.getElementsByTagName(e)[0];
                null != i[e] && "none" !== i[e] && (r || !r && i.lineWidth) ? (t[r ? "filled" : "stroked"] = "true", i[e] instanceof Ey && tT(t, a), a || (a = Yp(e)), r ? aT(a, i, n) : oT(a, i), JI(t, a)) : (t[r ? "filled" : "stroked"] = "false", tT(t, a))
            }, lT = [[], [], []], hT = function (t, e) {
                var i, n, r, a, o, s, l = BI.M, h = BI.C, u = BI.L, c = BI.A, d = BI.Q, f = [], p = t.data, g = t.len();
                for (a = 0; g > a;) {
                    switch (r = p[a++], n = "", i = 0, r) {
                        case l:
                            n = " m ", i = 1, o = p[a++], s = p[a++], lT[0][0] = o, lT[0][1] = s;
                            break;
                        case u:
                            n = " l ", i = 1, o = p[a++], s = p[a++], lT[0][0] = o, lT[0][1] = s;
                            break;
                        case d:
                        case h:
                            n = " c ", i = 3;
                            var v, m, y = p[a++], x = p[a++], _ = p[a++], w = p[a++];
                            r === d ? (v = _, m = w, _ = (_ + 2 * y) / 3, w = (w + 2 * x) / 3, y = (o + 2 * y) / 3, x = (s + 2 * x) / 3) : (v = p[a++], m = p[a++]), lT[0][0] = y, lT[0][1] = x, lT[1][0] = _, lT[1][1] = w, lT[2][0] = v, lT[2][1] = m, o = v, s = m;
                            break;
                        case c:
                            var b = 0, S = 0, M = 1, I = 1, T = 0;
                            e && (b = e[4], S = e[5], M = FI(e[0] * e[0] + e[1] * e[1]), I = FI(e[2] * e[2] + e[3] * e[3]), T = Math.atan2(-e[1] / I, e[0] / M));
                            var C = p[a++], A = p[a++], D = p[a++], k = p[a++], P = p[a++] + T, L = p[a++] + P + T;
                            a++;
                            var O = p[a++], z = C + WI(P) * D, E = A + GI(P) * k, y = C + WI(L) * D, x = A + GI(L) * k,
                                R = O ? " wa " : " at ";
                            Math.abs(z - y) < 1e-4 && (Math.abs(L - P) > .01 ? O && (z += 270 / YI) : Math.abs(E - A) < 1e-4 ? O && C > z || !O && z > C ? x -= 270 / YI : x += 270 / YI : O && A > E || !O && E > A ? y += 270 / YI : y -= 270 / YI), f.push(R, NI(((C - D) * M + b) * YI - jI), ZI, NI(((A - k) * I + S) * YI - jI), ZI, NI(((C + D) * M + b) * YI - jI), ZI, NI(((A + k) * I + S) * YI - jI), ZI, NI((z * M + b) * YI - jI), ZI, NI((E * I + S) * YI - jI), ZI, NI((y * M + b) * YI - jI), ZI, NI((x * I + S) * YI - jI)), o = y, s = x;
                            break;
                        case BI.R:
                            var B = lT[0], N = lT[1];
                            B[0] = p[a++], B[1] = p[a++], N[0] = B[0] + p[a++], N[1] = B[1] + p[a++], e && (ae(B, B, e), ae(N, N, e)), B[0] = NI(B[0] * YI - jI), N[0] = NI(N[0] * YI - jI), B[1] = NI(B[1] * YI - jI), N[1] = NI(N[1] * YI - jI), f.push(" m ", B[0], ZI, B[1], " l ", N[0], ZI, B[1], " l ", N[0], ZI, N[1], " l ", B[0], ZI, N[1]);
                            break;
                        case BI.Z:
                            f.push(" x ")
                    }
                    if (i > 0) {
                        f.push(n);
                        for (var F = 0; i > F; F++) {
                            var V = lT[F];
                            e && ae(V, V, e), f.push(NI(V[0] * YI - jI), ZI, NI(V[1] * YI - jI), i - 1 > F ? ZI : "")
                        }
                    }
                }
                return f.join("")
            };
        Fr.prototype.brushVML = function (t) {
            var e = this.style, i = this._vmlEl;
            i || (i = Yp("shape"), $I(i), this._vmlEl = i), sT(i, "fill", e, this), sT(i, "stroke", e, this);
            var n = this.transform, r = null != n, a = i.getElementsByTagName("stroke")[0];
            if (a) {
                var o = e.lineWidth;
                if (r && !e.strokeNoScale) {
                    var s = n[0] * n[3] - n[1] * n[2];
                    o *= FI(VI(s))
                }
                a.weight = o + "px"
            }
            var l = this.path || (this.path = new qm);
            this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = hT(l, this.transform), i.style.zIndex = eT(this.zlevel, this.z, this.z2), JI(t, i), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
        }, Fr.prototype.onRemove = function (t) {
            tT(t, this._vmlEl), this.removeRectText(t)
        }, Fr.prototype.onAdd = function (t) {
            JI(t, this._vmlEl), this.appendRectText(t)
        };
        var uT = function (t) {
            return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
        };
        yn.prototype.brushVML = function (t) {
            var e, i, n = this.style, r = n.image;
            if (uT(r)) {
                var a = r.src;
                if (a === this._imageSrc) e = this._imageWidth, i = this._imageHeight; else {
                    var o = r.runtimeStyle, s = o.width, l = o.height;
                    o.width = "auto", o.height = "auto", e = r.width, i = r.height, o.width = s, o.height = l, this._imageSrc = a, this._imageWidth = e, this._imageHeight = i
                }
                r = a
            } else r === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
            if (r) {
                var h = n.x || 0, u = n.y || 0, c = n.width, d = n.height, f = n.sWidth, p = n.sHeight, g = n.sx || 0,
                    v = n.sy || 0, m = f && p, y = this._vmlEl;
                y || (y = EI.createElement("div"), $I(y), this._vmlEl = y);
                var x, _ = y.style, w = !1, b = 1, S = 1;
                if (this.transform && (x = this.transform, b = FI(x[0] * x[0] + x[1] * x[1]), S = FI(x[2] * x[2] + x[3] * x[3]), w = x[1] || x[2]), w) {
                    var M = [h, u], I = [h + c, u], T = [h, u + d], C = [h + c, u + d];
                    ae(M, M, x), ae(I, I, x), ae(T, T, x), ae(C, C, x);
                    var A = HI(M[0], I[0], T[0], C[0]), D = HI(M[1], I[1], T[1], C[1]), k = [];
                    k.push("M11=", x[0] / b, ZI, "M12=", x[2] / S, ZI, "M21=", x[1] / b, ZI, "M22=", x[3] / S, ZI, "Dx=", NI(h * b + x[4]), ZI, "Dy=", NI(u * S + x[5])), _.padding = "0 " + NI(A) + "px " + NI(D) + "px 0", _.filter = XI + ".Matrix(" + k.join("") + ", SizingMethod=clip)"
                } else x && (h = h * b + x[4], u = u * S + x[5]), _.filter = "", _.left = NI(h) + "px", _.top = NI(u) + "px";
                var P = this._imageEl, L = this._cropEl;
                P || (P = EI.createElement("div"), this._imageEl = P);
                var O = P.style;
                if (m) {
                    if (e && i) O.width = NI(b * e * c / f) + "px", O.height = NI(S * i * d / p) + "px"; else {
                        var z = new Image, E = this;
                        z.onload = function () {
                            z.onload = null, e = z.width, i = z.height, O.width = NI(b * e * c / f) + "px", O.height = NI(S * i * d / p) + "px", E._imageWidth = e, E._imageHeight = i, E._imageSrc = r
                        }, z.src = r
                    }
                    L || (L = EI.createElement("div"), L.style.overflow = "hidden", this._cropEl = L);
                    var R = L.style;
                    R.width = NI((c + g * c / f) * b), R.height = NI((d + v * d / p) * S), R.filter = XI + ".Matrix(Dx=" + -g * c / f * b + ",Dy=" + -v * d / p * S + ")", L.parentNode || y.appendChild(L), P.parentNode != L && L.appendChild(P)
                } else O.width = NI(b * c) + "px", O.height = NI(S * d) + "px", y.appendChild(P), L && L.parentNode && (y.removeChild(L), this._cropEl = null);
                var B = "", N = n.opacity;
                1 > N && (B += ".Alpha(opacity=" + NI(100 * N) + ") "), B += XI + ".AlphaImageLoader(src=" + r + ", SizingMethod=scale)", O.filter = B, y.style.zIndex = eT(this.zlevel, this.z, this.z2), JI(t, y), null != n.text && this.drawRectText(t, this.getBoundingRect())
            }
        }, yn.prototype.onRemove = function (t) {
            tT(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
        }, yn.prototype.onAdd = function (t) {
            JI(t, this._vmlEl), this.appendRectText(t)
        };
        var cT, dT = "normal", fT = {}, pT = 0, gT = 100, vT = document.createElement("div"), mT = function (t) {
            var e = fT[t];
            if (!e) {
                pT > gT && (pT = 0, fT = {});
                var i, n = vT.style;
                try {
                    n.font = t, i = n.fontFamily.split(",")[0]
                } catch (r) {
                }
                e = {
                    style: n.fontStyle || dT,
                    variant: n.fontVariant || dT,
                    weight: n.fontWeight || dT,
                    size: 0 | parseFloat(n.fontSize || 12),
                    family: i || "Microsoft YaHei"
                }, fT[t] = e, pT++
            }
            return e
        };
        Oi("measureText", function (t, e) {
            var i = EI;
            cT || (cT = i.createElement("div"), cT.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", EI.body.appendChild(cT));
            try {
                cT.style.font = e
            } catch (n) {
            }
            return cT.innerHTML = "", cT.appendChild(i.createTextNode(t)), {width: cT.offsetWidth}
        });
        for (var yT = new gi, xT = function (t, e, i, n) {
            var r = this.style;
            this.__dirty && Qi(r, !0);
            var a = r.text;
            if (null != a && (a += ""), a) {
                if (r.rich) {
                    var o = qi(a, r);
                    a = [];
                    for (var s = 0; s < o.lines.length; s++) {
                        for (var l = o.lines[s].tokens, h = [], u = 0; u < l.length; u++) h.push(l[u].text);
                        a.push(h.join(""))
                    }
                    a = a.join("\n")
                }
                var c, d, f = r.textAlign, p = r.textVerticalAlign, g = mT(r.font),
                    v = g.style + " " + g.variant + " " + g.weight + " " + g.size + 'px "' + g.family + '"';
                i = i || Ei(a, v, f, p);
                var m = this.transform;
                if (m && !n && (yT.copy(e), yT.applyTransform(m), e = yT), n) c = e.x, d = e.y; else {
                    var y = r.textPosition, x = r.textDistance;
                    if (y instanceof Array) c = e.x + iT(y[0], e.width), d = e.y + iT(y[1], e.height), f = f || "left"; else {
                        var _ = Vi(y, e, x);
                        c = _.x, d = _.y, f = f || _.textAlign, p = p || _.textVerticalAlign
                    }
                }
                c = Ni(c, i.width, f), d = Fi(d, i.height, p), d += i.height / 2;
                var w, b, S, M = Yp, I = this._textVmlEl;
                I ? (S = I.firstChild, w = S.nextSibling, b = w.nextSibling) : (I = M("line"), w = M("path"), b = M("textpath"), S = M("skew"), b.style["v-text-align"] = "left", $I(I), w.textpathok = !0, b.on = !0, I.from = "0 0", I.to = "1000 0.05", JI(I, S), JI(I, w), JI(I, b), this._textVmlEl = I);
                var T = [c, d], C = I.style;
                m && n ? (ae(T, T, m), S.on = !0, S.matrix = m[0].toFixed(3) + ZI + m[2].toFixed(3) + ZI + m[1].toFixed(3) + ZI + m[3].toFixed(3) + ",0,0", S.offset = (NI(T[0]) || 0) + "," + (NI(T[1]) || 0), S.origin = "0 0", C.left = "0px", C.top = "0px") : (S.on = !1, C.left = NI(c) + "px", C.top = NI(d) + "px"), b.string = KI(a);
                try {
                    b.style.font = v
                } catch (A) {
                }
                sT(I, "fill", {fill: r.textFill, opacity: r.opacity}, this), sT(I, "stroke", {
                    stroke: r.textStroke,
                    opacity: r.opacity,
                    lineDash: r.lineDash
                }, this), I.style.zIndex = eT(this.zlevel, this.z, this.z2), JI(t, I)
            }
        }, _T = function (t) {
            tT(t, this._textVmlEl), this._textVmlEl = null
        }, wT = function (t) {
            JI(t, this._textVmlEl)
        }, bT = [Ov, mn, yn, Fr, xy], ST = 0; ST < bT.length; ST++) {
            var MT = bT[ST].prototype;
            MT.drawRectText = xT, MT.removeRectText = _T, MT.appendRectText = wT
        }
        xy.prototype.brushVML = function (t) {
            var e = this.style;
            null != e.text ? this.drawRectText(t, {
                x: e.x || 0,
                y: e.y || 0,
                width: 0,
                height: 0
            }, this.getBoundingRect(), !0) : this.removeRectText(t)
        }, xy.prototype.onRemove = function (t) {
            this.removeRectText(t)
        }, xy.prototype.onAdd = function (t) {
            this.appendRectText(t)
        }
    }
    Up.prototype = {
        constructor: Up, getType: function () {
            return "vml"
        }, getViewportRoot: function () {
            return this._vmlViewport
        }, getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
        }, refresh: function () {
            var t = this.storage.getDisplayList(!0, !0);
            this._paintList(t)
        }, _paintList: function (t) {
            for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                var n = t[i];
                n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
            }
            this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
        }, resize: function (t, e) {
            var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
            if (this._width != t || this._height != e) {
                this._width = t, this._height = e;
                var i = this._vmlViewport.style;
                i.width = t + "px", i.height = e + "px"
            }
        }, dispose: function () {
            this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
        }, getWidth: function () {
            return this._width
        }, getHeight: function () {
            return this._height
        }, clear: function () {
            this._vmlViewport && this.root.removeChild(this._vmlViewport)
        }, _getWidth: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientWidth || qp(e.width)) - qp(e.paddingLeft) - qp(e.paddingRight) | 0
        }, _getHeight: function () {
            var t = this.root, e = t.currentStyle;
            return (t.clientHeight || qp(e.height)) - qp(e.paddingTop) - qp(e.paddingBottom) | 0
        }
    }, f(["getLayer", "insertLayer", "eachLayer", "eachBuiltinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], function (t) {
        Up.prototype[t] = $p(t)
    }), Rn("vml", Up), t.version = $_, t.dependencies = K_, t.PRIORITY = ow, t.init = Fl, t.connect = Vl, t.disConnect = Wl, t.disconnect = Tw, t.dispose = Gl, t.getInstanceByDom = Hl, t.getInstanceById = Zl, t.registerTheme = Xl, t.registerPreprocessor = Yl, t.registerProcessor = jl, t.registerPostUpdate = ql, t.registerAction = Ul, t.registerCoordinateSystem = $l, t.getCoordinateSystemDimensions = Kl, t.registerLayout = Ql, t.registerVisual = Jl, t.registerLoading = eh, t.extendComponentModel = ih, t.extendComponentView = nh, t.extendSeriesModel = rh, t.extendChartView = ah, t.setCanvasCreator = oh, t.registerMap = sh, t.getMap = lh, t.dataTool = Cw, t.zrender = im, t.number = nx, t.format = cx, t.throttle = Gs, t.helper = Tb, t.matrix = kg, t.vector = _g, t.color = Ug, t.parseGeoJSON = Ab, t.parseGeoJson = Lb, t.util = Ob, t.graphic = zb, t.List = Bw, t.Model = Wa, t.Axis = Pb, t.env = tg
});

layui.define('echartsTheme', function (exports) {
    echarts.registerTheme('walden', layui.echartsTheme);
    exports('echarts', echarts);
});