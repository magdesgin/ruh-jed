function Q0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function br(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Yf = {
        exports: {}
    },
    ss = {},
    Qf = {
        exports: {}
    },
    B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo = Symbol.for("react.element"),
    X0 = Symbol.for("react.portal"),
    q0 = Symbol.for("react.fragment"),
    Z0 = Symbol.for("react.strict_mode"),
    J0 = Symbol.for("react.profiler"),
    ev = Symbol.for("react.provider"),
    tv = Symbol.for("react.context"),
    nv = Symbol.for("react.forward_ref"),
    rv = Symbol.for("react.suspense"),
    ov = Symbol.for("react.memo"),
    iv = Symbol.for("react.lazy"),
    xc = Symbol.iterator;

function sv(e) {
    return e === null || typeof e != "object" ? null : (e = xc && e[xc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Xf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    qf = Object.assign,
    Zf = {};

function Er(e, t, n) {
    this.props = e, this.context = t, this.refs = Zf, this.updater = n || Xf
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Er.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Jf() {}
Jf.prototype = Er.prototype;

function Hl(e, t, n) {
    this.props = e, this.context = t, this.refs = Zf, this.updater = n || Xf
}
var Wl = Hl.prototype = new Jf;
Wl.constructor = Hl;
qf(Wl, Er.prototype);
Wl.isPureReactComponent = !0;
var wc = Array.isArray,
    ep = Object.prototype.hasOwnProperty,
    Gl = {
        current: null
    },
    tp = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function np(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ep.call(t, r) && !tp.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: jo,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Gl.current
    }
}

function av(e, t) {
    return {
        $$typeof: jo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Kl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === jo
}

function lv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Sc = /\/+/g;

function Fs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? lv("" + e.key) : t.toString(36)
}

function ci(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case jo:
                case X0:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + Fs(s, 0) : r, wc(o) ? (n = "", e != null && (n = e.replace(Sc, "$&/") + "/"), ci(o, t, n, "", function(u) {
        return u
    })) : o != null && (Kl(o) && (o = av(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Sc, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", wc(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Fs(i, a);
            s += ci(i, t, n, l, o)
        } else if (l = sv(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + Fs(i, a++), s += ci(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function zo(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return ci(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function uv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Le = {
        current: null
    },
    di = {
        transition: null
    },
    cv = {
        ReactCurrentDispatcher: Le,
        ReactCurrentBatchConfig: di,
        ReactCurrentOwner: Gl
    };

function rp() {
    throw Error("act(...) is not supported in production builds of React.")
}
B.Children = {
    map: zo,
    forEach: function(e, t, n) {
        zo(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return zo(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return zo(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Kl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
B.Component = Er;
B.Fragment = q0;
B.Profiler = J0;
B.PureComponent = Hl;
B.StrictMode = Z0;
B.Suspense = rv;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cv;
B.act = rp;
B.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qf({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Gl.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) ep.call(t, l) && !tp.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: jo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
B.createContext = function(e) {
    return e = {
        $$typeof: tv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: ev,
        _context: e
    }, e.Consumer = e
};
B.createElement = np;
B.createFactory = function(e) {
    var t = np.bind(null, e);
    return t.type = e, t
};
B.createRef = function() {
    return {
        current: null
    }
};
B.forwardRef = function(e) {
    return {
        $$typeof: nv,
        render: e
    }
};
B.isValidElement = Kl;
B.lazy = function(e) {
    return {
        $$typeof: iv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: uv
    }
};
B.memo = function(e, t) {
    return {
        $$typeof: ov,
        type: e,
        compare: t === void 0 ? null : t
    }
};
B.startTransition = function(e) {
    var t = di.transition;
    di.transition = {};
    try {
        e()
    } finally {
        di.transition = t
    }
};
B.unstable_act = rp;
B.useCallback = function(e, t) {
    return Le.current.useCallback(e, t)
};
B.useContext = function(e) {
    return Le.current.useContext(e)
};
B.useDebugValue = function() {};
B.useDeferredValue = function(e) {
    return Le.current.useDeferredValue(e)
};
B.useEffect = function(e, t) {
    return Le.current.useEffect(e, t)
};
B.useId = function() {
    return Le.current.useId()
};
B.useImperativeHandle = function(e, t, n) {
    return Le.current.useImperativeHandle(e, t, n)
};
B.useInsertionEffect = function(e, t) {
    return Le.current.useInsertionEffect(e, t)
};
B.useLayoutEffect = function(e, t) {
    return Le.current.useLayoutEffect(e, t)
};
B.useMemo = function(e, t) {
    return Le.current.useMemo(e, t)
};
B.useReducer = function(e, t, n) {
    return Le.current.useReducer(e, t, n)
};
B.useRef = function(e) {
    return Le.current.useRef(e)
};
B.useState = function(e) {
    return Le.current.useState(e)
};
B.useSyncExternalStore = function(e, t, n) {
    return Le.current.useSyncExternalStore(e, t, n)
};
B.useTransition = function() {
    return Le.current.useTransition()
};
B.version = "18.3.1";
Qf.exports = B;
var w = Qf.exports;
const z = br(w),
    Yl = Q0({
        __proto__: null,
        default: z
    }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dv = w,
    fv = Symbol.for("react.element"),
    pv = Symbol.for("react.fragment"),
    hv = Object.prototype.hasOwnProperty,
    mv = dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    gv = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function op(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) hv.call(t, r) && !gv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: fv,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: mv.current
    }
}
ss.Fragment = pv;
ss.jsx = op;
ss.jsxs = op;
Yf.exports = ss;
var f = Yf.exports,
    Pa = {},
    ip = {
        exports: {}
    },
    Xe = {},
    sp = {
        exports: {}
    },
    ap = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(N, L) {
        var V = N.length;
        N.push(L);
        e: for (; 0 < V;) {
            var O = V - 1 >>> 1,
                H = N[O];
            if (0 < o(H, L)) N[O] = L, N[V] = H, V = O;
            else break e
        }
    }

    function n(N) {
        return N.length === 0 ? null : N[0]
    }

    function r(N) {
        if (N.length === 0) return null;
        var L = N[0],
            V = N.pop();
        if (V !== L) {
            N[0] = V;
            e: for (var O = 0, H = N.length, Y = H >>> 1; O < Y;) {
                var $e = 2 * (O + 1) - 1,
                    $n = N[$e],
                    He = $e + 1,
                    mn = N[He];
                if (0 > o($n, V)) He < H && 0 > o(mn, $n) ? (N[O] = mn, N[He] = V, O = He) : (N[O] = $n, N[$e] = V, O = $e);
                else if (He < H && 0 > o(mn, V)) N[O] = mn, N[He] = V, O = He;
                else break e
            }
        }
        return L
    }

    function o(N, L) {
        var V = N.sortIndex - L.sortIndex;
        return V !== 0 ? V : N.id - L.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        p = 3,
        m = !1,
        x = !1,
        y = !1,
        T = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(N) {
        for (var L = n(u); L !== null;) {
            if (L.callback === null) r(u);
            else if (L.startTime <= N) r(u), L.sortIndex = L.expirationTime, t(l, L);
            else break;
            L = n(u)
        }
    }

    function S(N) {
        if (y = !1, g(N), !x)
            if (n(l) !== null) x = !0, $(C);
            else {
                var L = n(u);
                L !== null && de(S, L.startTime - N)
            }
    }

    function C(N, L) {
        x = !1, y && (y = !1, v(P), P = -1), m = !0;
        var V = p;
        try {
            for (g(L), d = n(l); d !== null && (!(d.expirationTime > L) || N && !G());) {
                var O = d.callback;
                if (typeof O == "function") {
                    d.callback = null, p = d.priorityLevel;
                    var H = O(d.expirationTime <= L);
                    L = e.unstable_now(), typeof H == "function" ? d.callback = H : d === n(l) && r(l), g(L)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var Y = !0;
            else {
                var $e = n(u);
                $e !== null && de(S, $e.startTime - L), Y = !1
            }
            return Y
        } finally {
            d = null, p = V, m = !1
        }
    }
    var E = !1,
        b = null,
        P = -1,
        A = 5,
        R = -1;

    function G() {
        return !(e.unstable_now() - R < A)
    }

    function _() {
        if (b !== null) {
            var N = e.unstable_now();
            R = N;
            var L = !0;
            try {
                L = b(!0, N)
            } finally {
                L ? oe() : (E = !1, b = null)
            }
        } else E = !1
    }
    var oe;
    if (typeof h == "function") oe = function() {
        h(_)
    };
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel,
            ee = M.port2;
        M.port1.onmessage = _, oe = function() {
            ee.postMessage(null)
        }
    } else oe = function() {
        T(_, 0)
    };

    function $(N) {
        b = N, E || (E = !0, oe())
    }

    function de(N, L) {
        P = T(function() {
            N(e.unstable_now())
        }, L)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
        N.callback = null
    }, e.unstable_continueExecution = function() {
        x || m || (x = !0, $(C))
    }, e.unstable_forceFrameRate = function(N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return p
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(N) {
        switch (p) {
            case 1:
            case 2:
            case 3:
                var L = 3;
                break;
            default:
                L = p
        }
        var V = p;
        p = L;
        try {
            return N()
        } finally {
            p = V
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(N, L) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var V = p;
        p = N;
        try {
            return L()
        } finally {
            p = V
        }
    }, e.unstable_scheduleCallback = function(N, L, V) {
        var O = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? O + V : O) : V = O, N) {
            case 1:
                var H = -1;
                break;
            case 2:
                H = 250;
                break;
            case 5:
                H = 1073741823;
                break;
            case 4:
                H = 1e4;
                break;
            default:
                H = 5e3
        }
        return H = V + H, N = {
            id: c++,
            callback: L,
            priorityLevel: N,
            startTime: V,
            expirationTime: H,
            sortIndex: -1
        }, V > O ? (N.sortIndex = V, t(u, N), n(l) === null && N === n(u) && (y ? (v(P), P = -1) : y = !0, de(S, V - O))) : (N.sortIndex = H, t(l, N), x || m || (x = !0, $(C))), N
    }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(N) {
        var L = p;
        return function() {
            var V = p;
            p = L;
            try {
                return N.apply(this, arguments)
            } finally {
                p = V
            }
        }
    }
})(ap);
sp.exports = ap;
var vv = sp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yv = w,
    Ye = vv;

function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var lp = new Set,
    so = {};

function Vn(e, t) {
    mr(e, t), mr(e + "Capture", t)
}

function mr(e, t) {
    for (so[e] = t, e = 0; e < t.length; e++) lp.add(t[e])
}
var Mt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    ka = Object.prototype.hasOwnProperty,
    xv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tc = {},
    Cc = {};

function wv(e) {
    return ka.call(Cc, e) ? !0 : ka.call(Tc, e) ? !1 : xv.test(e) ? Cc[e] = !0 : (Tc[e] = !0, !1)
}

function Sv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Tv(e, t, n, r) {
    if (t === null || typeof t > "u" || Sv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ie(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Te[e] = new Ie(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Te[t] = new Ie(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Te[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Te[e] = new Ie(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Te[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Te[e] = new Ie(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Te[e] = new Ie(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Te[e] = new Ie(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Te[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ql = /[\-:]([a-z])/g;

function Xl(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Xl);
    Te[t] = new Ie(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ql, Xl);
    Te[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ql, Xl);
    Te[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Te[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Te.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Te[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ql(e, t, n, r) {
    var o = Te.hasOwnProperty(t) ? Te[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tv(t, n, o, r) && (n = null), r || o === null ? wv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Vt = yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Bo = Symbol.for("react.element"),
    Gn = Symbol.for("react.portal"),
    Kn = Symbol.for("react.fragment"),
    Zl = Symbol.for("react.strict_mode"),
    Na = Symbol.for("react.profiler"),
    up = Symbol.for("react.provider"),
    cp = Symbol.for("react.context"),
    Jl = Symbol.for("react.forward_ref"),
    ja = Symbol.for("react.suspense"),
    Aa = Symbol.for("react.suspense_list"),
    eu = Symbol.for("react.memo"),
    Ut = Symbol.for("react.lazy"),
    dp = Symbol.for("react.offscreen"),
    bc = Symbol.iterator;

function Nr(e) {
    return e === null || typeof e != "object" ? null : (e = bc && e[bc] || e["@@iterator"], typeof e == "function" ? e : null)
}
var le = Object.assign,
    zs;

function Ur(e) {
    if (zs === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        zs = t && t[1] || ""
    }
    return `
` + zs + e
}
var Bs = !1;

function Us(e, t) {
    if (!e || Bs) return "";
    Bs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Bs = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ur(e) : ""
}

function Cv(e) {
    switch (e.tag) {
        case 5:
            return Ur(e.type);
        case 16:
            return Ur("Lazy");
        case 13:
            return Ur("Suspense");
        case 19:
            return Ur("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Us(e.type, !1), e;
        case 11:
            return e = Us(e.type.render, !1), e;
        case 1:
            return e = Us(e.type, !0), e;
        default:
            return ""
    }
}

function Ra(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Kn:
            return "Fragment";
        case Gn:
            return "Portal";
        case Na:
            return "Profiler";
        case Zl:
            return "StrictMode";
        case ja:
            return "Suspense";
        case Aa:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case cp:
            return (e.displayName || "Context") + ".Consumer";
        case up:
            return (e._context.displayName || "Context") + ".Provider";
        case Jl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case eu:
            return t = e.displayName || null, t !== null ? t : Ra(e.type) || "Memo";
        case Ut:
            t = e._payload, e = e._init;
            try {
                return Ra(e(t))
            } catch {}
    }
    return null
}

function bv(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ra(t);
        case 8:
            return t === Zl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function sn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function fp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ev(e) {
    var t = fp(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Uo(e) {
    e._valueTracker || (e._valueTracker = Ev(e))
}

function pp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = fp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ei(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Ma(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Ec(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = sn(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function hp(e, t) {
    t = t.checked, t != null && ql(e, "checked", t, !1)
}

function La(e, t) {
    hp(e, t);
    var n = sn(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ia(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ia(e, t.type, sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Pc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ia(e, t, n) {
    (t !== "number" || Ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var $r = Array.isArray;

function lr(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + sn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Oa(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function kc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(k(92));
            if ($r(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: sn(n)
    }
}

function mp(e, t) {
    var n = sn(t.value),
        r = sn(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Nc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function gp(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function _a(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var $o, vp = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for ($o = $o || document.createElement("div"), $o.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $o.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function ao(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Kr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Pv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function(e) {
    Pv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Kr[t] = Kr[e]
    })
});

function yp(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Kr.hasOwnProperty(e) && Kr[e] ? ("" + t).trim() : t + "px"
}

function xp(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = yp(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var kv = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Da(e, t) {
    if (t) {
        if (kv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62))
    }
}

function Va(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Fa = null;

function tu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var za = null,
    ur = null,
    cr = null;

function jc(e) {
    if (e = Mo(e)) {
        if (typeof za != "function") throw Error(k(280));
        var t = e.stateNode;
        t && (t = ds(t), za(e.stateNode, e.type, t))
    }
}

function wp(e) {
    ur ? cr ? cr.push(e) : cr = [e] : ur = e
}

function Sp() {
    if (ur) {
        var e = ur,
            t = cr;
        if (cr = ur = null, jc(e), t)
            for (e = 0; e < t.length; e++) jc(t[e])
    }
}

function Tp(e, t) {
    return e(t)
}

function Cp() {}
var $s = !1;

function bp(e, t, n) {
    if ($s) return e(t, n);
    $s = !0;
    try {
        return Tp(e, t, n)
    } finally {
        $s = !1, (ur !== null || cr !== null) && (Cp(), Sp())
    }
}

function lo(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ds(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n
}
var Ba = !1;
if (Mt) try {
    var jr = {};
    Object.defineProperty(jr, "passive", {
        get: function() {
            Ba = !0
        }
    }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr)
} catch {
    Ba = !1
}

function Nv(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Yr = !1,
    Pi = null,
    ki = !1,
    Ua = null,
    jv = {
        onError: function(e) {
            Yr = !0, Pi = e
        }
    };

function Av(e, t, n, r, o, i, s, a, l) {
    Yr = !1, Pi = null, Nv.apply(jv, arguments)
}

function Rv(e, t, n, r, o, i, s, a, l) {
    if (Av.apply(this, arguments), Yr) {
        if (Yr) {
            var u = Pi;
            Yr = !1, Pi = null
        } else throw Error(k(198));
        ki || (ki = !0, Ua = u)
    }
}

function Fn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Ep(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ac(e) {
    if (Fn(e) !== e) throw Error(k(188))
}

function Mv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Fn(e), t === null) throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Ac(o), e;
                if (i === r) return Ac(o), t;
                i = i.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (a === r) {
                    s = !0, r = o, n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (a === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(k(189))
            }
        }
        if (n.alternate !== r) throw Error(k(190))
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t
}

function Pp(e) {
    return e = Mv(e), e !== null ? kp(e) : null
}

function kp(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = kp(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Np = Ye.unstable_scheduleCallback,
    Rc = Ye.unstable_cancelCallback,
    Lv = Ye.unstable_shouldYield,
    Iv = Ye.unstable_requestPaint,
    fe = Ye.unstable_now,
    Ov = Ye.unstable_getCurrentPriorityLevel,
    nu = Ye.unstable_ImmediatePriority,
    jp = Ye.unstable_UserBlockingPriority,
    Ni = Ye.unstable_NormalPriority,
    _v = Ye.unstable_LowPriority,
    Ap = Ye.unstable_IdlePriority,
    as = null,
    xt = null;

function Dv(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function") try {
        xt.onCommitFiberRoot(as, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : zv,
    Vv = Math.log,
    Fv = Math.LN2;

function zv(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Vv(e) / Fv | 0) | 0
}
var Ho = 64,
    Wo = 4194304;

function Hr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ji(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = Hr(a) : (i &= s, i !== 0 && (r = Hr(i)))
    } else s = n & ~o, s !== 0 ? r = Hr(s) : i !== 0 && (r = Hr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ft(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function Bv(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Uv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - ft(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = Bv(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function $a(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Rp() {
    var e = Ho;
    return Ho <<= 1, !(Ho & 4194240) && (Ho = 64), e
}

function Hs(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Ao(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n
}

function $v(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - ft(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function ru(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ft(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var K = 0;

function Mp(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Lp, ou, Ip, Op, _p, Ha = !1,
    Go = [],
    Qt = null,
    Xt = null,
    qt = null,
    uo = new Map,
    co = new Map,
    Wt = [],
    Hv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Mc(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Qt = null;
            break;
        case "dragenter":
        case "dragleave":
            Xt = null;
            break;
        case "mouseover":
        case "mouseout":
            qt = null;
            break;
        case "pointerover":
        case "pointerout":
            uo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            co.delete(t.pointerId)
    }
}

function Ar(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = Mo(t), t !== null && ou(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function Wv(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Qt = Ar(Qt, e, t, n, r, o), !0;
        case "dragenter":
            return Xt = Ar(Xt, e, t, n, r, o), !0;
        case "mouseover":
            return qt = Ar(qt, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return uo.set(i, Ar(uo.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, co.set(i, Ar(co.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Dp(e) {
    var t = Tn(e.target);
    if (t !== null) {
        var n = Fn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Ep(n), t !== null) {
                    e.blockedOn = t, _p(e.priority, function() {
                        Ip(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function fi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Wa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Fa = r, n.target.dispatchEvent(r), Fa = null
        } else return t = Mo(n), t !== null && ou(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Lc(e, t, n) {
    fi(e) && n.delete(t)
}

function Gv() {
    Ha = !1, Qt !== null && fi(Qt) && (Qt = null), Xt !== null && fi(Xt) && (Xt = null), qt !== null && fi(qt) && (qt = null), uo.forEach(Lc), co.forEach(Lc)
}

function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ha || (Ha = !0, Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, Gv)))
}

function fo(e) {
    function t(o) {
        return Rr(o, e)
    }
    if (0 < Go.length) {
        Rr(Go[0], e);
        for (var n = 1; n < Go.length; n++) {
            var r = Go[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Qt !== null && Rr(Qt, e), Xt !== null && Rr(Xt, e), qt !== null && Rr(qt, e), uo.forEach(t), co.forEach(t), n = 0; n < Wt.length; n++) r = Wt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wt.length && (n = Wt[0], n.blockedOn === null);) Dp(n), n.blockedOn === null && Wt.shift()
}
var dr = Vt.ReactCurrentBatchConfig,
    Ai = !0;

function Kv(e, t, n, r) {
    var o = K,
        i = dr.transition;
    dr.transition = null;
    try {
        K = 1, iu(e, t, n, r)
    } finally {
        K = o, dr.transition = i
    }
}

function Yv(e, t, n, r) {
    var o = K,
        i = dr.transition;
    dr.transition = null;
    try {
        K = 4, iu(e, t, n, r)
    } finally {
        K = o, dr.transition = i
    }
}

function iu(e, t, n, r) {
    if (Ai) {
        var o = Wa(e, t, n, r);
        if (o === null) ea(e, t, r, Ri, n), Mc(e, r);
        else if (Wv(o, e, t, n, r)) r.stopPropagation();
        else if (Mc(e, r), t & 4 && -1 < Hv.indexOf(e)) {
            for (; o !== null;) {
                var i = Mo(o);
                if (i !== null && Lp(i), i = Wa(e, t, n, r), i === null && ea(e, t, r, Ri, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else ea(e, t, r, null, n)
    }
}
var Ri = null;

function Wa(e, t, n, r) {
    if (Ri = null, e = tu(r), e = Tn(e), e !== null)
        if (t = Fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Ep(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Ri = e, null
}

function Vp(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ov()) {
                case nu:
                    return 1;
                case jp:
                    return 4;
                case Ni:
                case _v:
                    return 16;
                case Ap:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Kt = null,
    su = null,
    pi = null;

function Fp() {
    if (pi) return pi;
    var e, t = su,
        n = t.length,
        r, o = "value" in Kt ? Kt.value : Kt.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return pi = o.slice(e, 1 < r ? 1 - r : void 0)
}

function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function Ko() {
    return !0
}

function Ic() {
    return !1
}

function qe(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ko : Ic, this.isPropagationStopped = Ic, this
    }
    return le(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ko)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ko)
        },
        persist: function() {},
        isPersistent: Ko
    }), t
}
var Pr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    au = qe(Pr),
    Ro = le({}, Pr, {
        view: 0,
        detail: 0
    }),
    Qv = qe(Ro),
    Ws, Gs, Mr, ls = le({}, Ro, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: lu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Mr && (Mr && e.type === "mousemove" ? (Ws = e.screenX - Mr.screenX, Gs = e.screenY - Mr.screenY) : Gs = Ws = 0, Mr = e), Ws)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Gs
        }
    }),
    Oc = qe(ls),
    Xv = le({}, ls, {
        dataTransfer: 0
    }),
    qv = qe(Xv),
    Zv = le({}, Ro, {
        relatedTarget: 0
    }),
    Ks = qe(Zv),
    Jv = le({}, Pr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    ey = qe(Jv),
    ty = le({}, Pr, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ny = qe(ty),
    ry = le({}, Pr, {
        data: 0
    }),
    _c = qe(ry),
    oy = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    iy = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    sy = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function ay(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sy[e]) ? !!t[e] : !1
}

function lu() {
    return ay
}
var ly = le({}, Ro, {
        key: function(e) {
            if (e.key) {
                var t = oy[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? iy[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: lu,
        charCode: function(e) {
            return e.type === "keypress" ? hi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    uy = qe(ly),
    cy = le({}, ls, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Dc = qe(cy),
    dy = le({}, Ro, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: lu
    }),
    fy = qe(dy),
    py = le({}, Pr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    hy = qe(py),
    my = le({}, ls, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    gy = qe(my),
    vy = [9, 13, 27, 32],
    uu = Mt && "CompositionEvent" in window,
    Qr = null;
Mt && "documentMode" in document && (Qr = document.documentMode);
var yy = Mt && "TextEvent" in window && !Qr,
    zp = Mt && (!uu || Qr && 8 < Qr && 11 >= Qr),
    Vc = String.fromCharCode(32),
    Fc = !1;

function Bp(e, t) {
    switch (e) {
        case "keyup":
            return vy.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Up(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Yn = !1;

function xy(e, t) {
    switch (e) {
        case "compositionend":
            return Up(t);
        case "keypress":
            return t.which !== 32 ? null : (Fc = !0, Vc);
        case "textInput":
            return e = t.data, e === Vc && Fc ? null : e;
        default:
            return null
    }
}

function wy(e, t) {
    if (Yn) return e === "compositionend" || !uu && Bp(e, t) ? (e = Fp(), pi = su = Kt = null, Yn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return zp && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Sy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sy[e.type] : t === "textarea"
}

function $p(e, t, n, r) {
    wp(r), t = Mi(t, "onChange"), 0 < t.length && (n = new au("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Xr = null,
    po = null;

function Ty(e) {
    eh(e, 0)
}

function us(e) {
    var t = qn(e);
    if (pp(t)) return e
}

function Cy(e, t) {
    if (e === "change") return t
}
var Hp = !1;
if (Mt) {
    var Ys;
    if (Mt) {
        var Qs = "oninput" in document;
        if (!Qs) {
            var Bc = document.createElement("div");
            Bc.setAttribute("oninput", "return;"), Qs = typeof Bc.oninput == "function"
        }
        Ys = Qs
    } else Ys = !1;
    Hp = Ys && (!document.documentMode || 9 < document.documentMode)
}

function Uc() {
    Xr && (Xr.detachEvent("onpropertychange", Wp), po = Xr = null)
}

function Wp(e) {
    if (e.propertyName === "value" && us(po)) {
        var t = [];
        $p(t, po, e, tu(e)), bp(Ty, t)
    }
}

function by(e, t, n) {
    e === "focusin" ? (Uc(), Xr = t, po = n, Xr.attachEvent("onpropertychange", Wp)) : e === "focusout" && Uc()
}

function Ey(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return us(po)
}

function Py(e, t) {
    if (e === "click") return us(t)
}

function ky(e, t) {
    if (e === "input" || e === "change") return us(t)
}

function Ny(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var ht = typeof Object.is == "function" ? Object.is : Ny;

function ho(e, t) {
    if (ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ka.call(t, o) || !ht(e[o], t[o])) return !1
    }
    return !0
}

function $c(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Hc(e, t) {
    var n = $c(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $c(n)
    }
}

function Gp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Gp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Kp() {
    for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ei(e.document)
    }
    return t
}

function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function jy(e) {
    var t = Kp(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Gp(n.ownerDocument.documentElement, n)) {
        if (r !== null && cu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Hc(n, i);
                var s = Hc(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Ay = Mt && "documentMode" in document && 11 >= document.documentMode,
    Qn = null,
    Ga = null,
    qr = null,
    Ka = !1;

function Wc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ka || Qn == null || Qn !== Ei(r) || (r = Qn, "selectionStart" in r && cu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), qr && ho(qr, r) || (qr = r, r = Mi(Ga, "onSelect"), 0 < r.length && (t = new au("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Qn)))
}

function Yo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Xn = {
        animationend: Yo("Animation", "AnimationEnd"),
        animationiteration: Yo("Animation", "AnimationIteration"),
        animationstart: Yo("Animation", "AnimationStart"),
        transitionend: Yo("Transition", "TransitionEnd")
    },
    Xs = {},
    Yp = {};
Mt && (Yp = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);

function cs(e) {
    if (Xs[e]) return Xs[e];
    if (!Xn[e]) return e;
    var t = Xn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Yp) return Xs[e] = t[n];
    return e
}
var Qp = cs("animationend"),
    Xp = cs("animationiteration"),
    qp = cs("animationstart"),
    Zp = cs("transitionend"),
    Jp = new Map,
    Gc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function dn(e, t) {
    Jp.set(e, t), Vn(t, [e])
}
for (var qs = 0; qs < Gc.length; qs++) {
    var Zs = Gc[qs],
        Ry = Zs.toLowerCase(),
        My = Zs[0].toUpperCase() + Zs.slice(1);
    dn(Ry, "on" + My)
}
dn(Qp, "onAnimationEnd");
dn(Xp, "onAnimationIteration");
dn(qp, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Zp, "onTransitionEnd");
mr("onMouseEnter", ["mouseout", "mouseover"]);
mr("onMouseLeave", ["mouseout", "mouseover"]);
mr("onPointerEnter", ["pointerout", "pointerover"]);
mr("onPointerLeave", ["pointerout", "pointerover"]);
Vn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Ly = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));

function Kc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Rv(r, t, void 0, e), e.currentTarget = null
}

function eh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
                    Kc(o, a, u), i = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
                        Kc(o, a, u), i = l
                    }
        }
    }
    if (ki) throw e = Ua, ki = !1, Ua = null, e
}

function q(e, t) {
    var n = t[Za];
    n === void 0 && (n = t[Za] = new Set);
    var r = e + "__bubble";
    n.has(r) || (th(t, e, 2, !1), n.add(r))
}

function Js(e, t, n) {
    var r = 0;
    t && (r |= 4), th(n, e, r, t)
}
var Qo = "_reactListening" + Math.random().toString(36).slice(2);

function mo(e) {
    if (!e[Qo]) {
        e[Qo] = !0, lp.forEach(function(n) {
            n !== "selectionchange" && (Ly.has(n) || Js(n, !1, e), Js(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Qo] || (t[Qo] = !0, Js("selectionchange", !1, t))
    }
}

function th(e, t, n, r) {
    switch (Vp(t)) {
        case 1:
            var o = Kv;
            break;
        case 4:
            o = Yv;
            break;
        default:
            o = iu
    }
    n = o.bind(null, t, n, e), o = void 0, !Ba || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function ea(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = Tn(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = i = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    bp(function() {
        var u = i,
            c = tu(n),
            d = [];
        e: {
            var p = Jp.get(e);
            if (p !== void 0) {
                var m = au,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (hi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        m = uy;
                        break;
                    case "focusin":
                        x = "focus", m = Ks;
                        break;
                    case "focusout":
                        x = "blur", m = Ks;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        m = Ks;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        m = Oc;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        m = qv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        m = fy;
                        break;
                    case Qp:
                    case Xp:
                    case qp:
                        m = ey;
                        break;
                    case Zp:
                        m = hy;
                        break;
                    case "scroll":
                        m = Qv;
                        break;
                    case "wheel":
                        m = gy;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        m = ny;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        m = Dc
                }
                var y = (t & 4) !== 0,
                    T = !y && e === "scroll",
                    v = y ? p !== null ? p + "Capture" : null : p;
                y = [];
                for (var h = u, g; h !== null;) {
                    g = h;
                    var S = g.stateNode;
                    if (g.tag === 5 && S !== null && (g = S, v !== null && (S = lo(h, v), S != null && y.push(go(h, S, g)))), T) break;
                    h = h.return
                }
                0 < y.length && (p = new m(p, x, null, n, c), d.push({
                    event: p,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover", m = e === "mouseout" || e === "pointerout", p && n !== Fa && (x = n.relatedTarget || n.fromElement) && (Tn(x) || x[Lt])) break e;
                if ((m || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, m ? (x = n.relatedTarget || n.toElement, m = u, x = x ? Tn(x) : null, x !== null && (T = Fn(x), x !== T || x.tag !== 5 && x.tag !== 6) && (x = null)) : (m = null, x = u), m !== x)) {
                    if (y = Oc, S = "onMouseLeave", v = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (y = Dc, S = "onPointerLeave", v = "onPointerEnter", h = "pointer"), T = m == null ? p : qn(m), g = x == null ? p : qn(x), p = new y(S, h + "leave", m, n, c), p.target = T, p.relatedTarget = g, S = null, Tn(c) === u && (y = new y(v, h + "enter", x, n, c), y.target = g, y.relatedTarget = T, S = y), T = S, m && x) t: {
                        for (y = m, v = x, h = 0, g = y; g; g = Hn(g)) h++;
                        for (g = 0, S = v; S; S = Hn(S)) g++;
                        for (; 0 < h - g;) y = Hn(y),
                        h--;
                        for (; 0 < g - h;) v = Hn(v),
                        g--;
                        for (; h--;) {
                            if (y === v || v !== null && y === v.alternate) break t;
                            y = Hn(y), v = Hn(v)
                        }
                        y = null
                    }
                    else y = null;
                    m !== null && Yc(d, p, m, y, !1), x !== null && T !== null && Yc(d, T, x, y, !0)
                }
            }
            e: {
                if (p = u ? qn(u) : window, m = p.nodeName && p.nodeName.toLowerCase(), m === "select" || m === "input" && p.type === "file") var C = Cy;
                else if (zc(p))
                    if (Hp) C = ky;
                    else {
                        C = Ey;
                        var E = by
                    }
                else(m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = Py);
                if (C && (C = C(e, u))) {
                    $p(d, C, n, c);
                    break e
                }
                E && E(e, p, u),
                e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && Ia(p, "number", p.value)
            }
            switch (E = u ? qn(u) : window, e) {
                case "focusin":
                    (zc(E) || E.contentEditable === "true") && (Qn = E, Ga = u, qr = null);
                    break;
                case "focusout":
                    qr = Ga = Qn = null;
                    break;
                case "mousedown":
                    Ka = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ka = !1, Wc(d, n, c);
                    break;
                case "selectionchange":
                    if (Ay) break;
                case "keydown":
                case "keyup":
                    Wc(d, n, c)
            }
            var b;
            if (uu) e: {
                switch (e) {
                    case "compositionstart":
                        var P = "onCompositionStart";
                        break e;
                    case "compositionend":
                        P = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        P = "onCompositionUpdate";
                        break e
                }
                P = void 0
            }
            else Yn ? Bp(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");P && (zp && n.locale !== "ko" && (Yn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Yn && (b = Fp()) : (Kt = c, su = "value" in Kt ? Kt.value : Kt.textContent, Yn = !0)), E = Mi(u, P), 0 < E.length && (P = new _c(P, e, null, n, c), d.push({
                event: P,
                listeners: E
            }), b ? P.data = b : (b = Up(n), b !== null && (P.data = b)))),
            (b = yy ? xy(e, n) : wy(e, n)) && (u = Mi(u, "onBeforeInput"), 0 < u.length && (c = new _c("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = b))
        }
        eh(d, t)
    })
}

function go(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Mi(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = lo(e, n), i != null && r.unshift(go(e, i, o)), i = lo(e, t), i != null && r.push(go(e, i, o))), e = e.return
    }
    return r
}

function Hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Yc(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = lo(n, i), l != null && s.unshift(go(n, l, a))) : o || (l = lo(n, i), l != null && s.push(go(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var Iy = /\r\n?/g,
    Oy = /\u0000|\uFFFD/g;

function Qc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Iy, `
`).replace(Oy, "")
}

function Xo(e, t, n) {
    if (t = Qc(t), Qc(e) !== t && n) throw Error(k(425))
}

function Li() {}
var Ya = null,
    Qa = null;

function Xa(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0,
    _y = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xc = typeof Promise == "function" ? Promise : void 0,
    Dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xc < "u" ? function(e) {
        return Xc.resolve(null).then(e).catch(Vy)
    } : qa;

function Vy(e) {
    setTimeout(function() {
        throw e
    })
}

function ta(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), fo(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    fo(t)
}

function Zt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function qc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var kr = Math.random().toString(36).slice(2),
    yt = "__reactFiber$" + kr,
    vo = "__reactProps$" + kr,
    Lt = "__reactContainer$" + kr,
    Za = "__reactEvents$" + kr,
    Fy = "__reactListeners$" + kr,
    zy = "__reactHandles$" + kr;

function Tn(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Lt] || n[yt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = qc(e); e !== null;) {
                    if (n = e[yt]) return n;
                    e = qc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Mo(e) {
    return e = e[yt] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33))
}

function ds(e) {
    return e[vo] || null
}
var Ja = [],
    Zn = -1;

function fn(e) {
    return {
        current: e
    }
}

function Z(e) {
    0 > Zn || (e.current = Ja[Zn], Ja[Zn] = null, Zn--)
}

function Q(e, t) {
    Zn++, Ja[Zn] = e.current, e.current = t
}
var an = {},
    ke = fn(an),
    Fe = fn(!1),
    An = an;

function gr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function ze(e) {
    return e = e.childContextTypes, e != null
}

function Ii() {
    Z(Fe), Z(ke)
}

function Zc(e, t, n) {
    if (ke.current !== an) throw Error(k(168));
    Q(ke, t), Q(Fe, n)
}

function nh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(k(108, bv(e) || "Unknown", o));
    return le({}, n, r)
}

function Oi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, An = ke.current, Q(ke, e), Q(Fe, Fe.current), !0
}

function Jc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n ? (e = nh(e, t, An), r.__reactInternalMemoizedMergedChildContext = e, Z(Fe), Z(ke), Q(ke, e)) : Z(Fe), Q(Fe, n)
}
var Et = null,
    fs = !1,
    na = !1;

function rh(e) {
    Et === null ? Et = [e] : Et.push(e)
}

function By(e) {
    fs = !0, rh(e)
}

function pn() {
    if (!na && Et !== null) {
        na = !0;
        var e = 0,
            t = K;
        try {
            var n = Et;
            for (K = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Et = null, fs = !1
        } catch (o) {
            throw Et !== null && (Et = Et.slice(e + 1)), Np(nu, pn), o
        } finally {
            K = t, na = !1
        }
    }
    return null
}
var Jn = [],
    er = 0,
    _i = null,
    Di = 0,
    et = [],
    tt = 0,
    Rn = null,
    Pt = 1,
    kt = "";

function yn(e, t) {
    Jn[er++] = Di, Jn[er++] = _i, _i = e, Di = t
}

function oh(e, t, n) {
    et[tt++] = Pt, et[tt++] = kt, et[tt++] = Rn, Rn = e;
    var r = Pt;
    e = kt;
    var o = 32 - ft(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - ft(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Pt = 1 << 32 - ft(t) + o | n << o | r, kt = i + e
    } else Pt = 1 << i | n << o | r, kt = e
}

function du(e) {
    e.return !== null && (yn(e, 1), oh(e, 1, 0))
}

function fu(e) {
    for (; e === _i;) _i = Jn[--er], Jn[er] = null, Di = Jn[--er], Jn[er] = null;
    for (; e === Rn;) Rn = et[--tt], et[tt] = null, kt = et[--tt], et[tt] = null, Pt = et[--tt], et[tt] = null
}
var Ke = null,
    Ge = null,
    re = !1,
    ct = null;

function ih(e, t) {
    var n = nt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ed(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = Zt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Rn !== null ? {
                id: Pt,
                overflow: kt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = nt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Ge = null, !0) : !1;
        default:
            return !1
    }
}

function el(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function tl(e) {
    if (re) {
        var t = Ge;
        if (t) {
            var n = t;
            if (!ed(e, t)) {
                if (el(e)) throw Error(k(418));
                t = Zt(n.nextSibling);
                var r = Ke;
                t && ed(e, t) ? ih(r, n) : (e.flags = e.flags & -4097 | 2, re = !1, Ke = e)
            }
        } else {
            if (el(e)) throw Error(k(418));
            e.flags = e.flags & -4097 | 2, re = !1, Ke = e
        }
    }
}

function td(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Ke = e
}

function qo(e) {
    if (e !== Ke) return !1;
    if (!re) return td(e), re = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Xa(e.type, e.memoizedProps)), t && (t = Ge)) {
        if (el(e)) throw sh(), Error(k(418));
        for (; t;) ih(e, t), t = Zt(t.nextSibling)
    }
    if (td(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ge = Zt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ge = null
        }
    } else Ge = Ke ? Zt(e.stateNode.nextSibling) : null;
    return !0
}

function sh() {
    for (var e = Ge; e;) e = Zt(e.nextSibling)
}

function vr() {
    Ge = Ke = null, re = !1
}

function pu(e) {
    ct === null ? ct = [e] : ct.push(e)
}
var Uy = Vt.ReactCurrentBatchConfig;

function Lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode
            }
            if (!r) throw Error(k(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e))
    }
    return e
}

function Zo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function nd(e) {
    var t = e._init;
    return t(e._payload)
}

function ah(e) {
    function t(v, h) {
        if (e) {
            var g = v.deletions;
            g === null ? (v.deletions = [h], v.flags |= 16) : g.push(h)
        }
    }

    function n(v, h) {
        if (!e) return null;
        for (; h !== null;) t(v, h), h = h.sibling;
        return null
    }

    function r(v, h) {
        for (v = new Map; h !== null;) h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
        return v
    }

    function o(v, h) {
        return v = nn(v, h), v.index = 0, v.sibling = null, v
    }

    function i(v, h, g) {
        return v.index = g, e ? (g = v.alternate, g !== null ? (g = g.index, g < h ? (v.flags |= 2, h) : g) : (v.flags |= 2, h)) : (v.flags |= 1048576, h)
    }

    function s(v) {
        return e && v.alternate === null && (v.flags |= 2), v
    }

    function a(v, h, g, S) {
        return h === null || h.tag !== 6 ? (h = ua(g, v.mode, S), h.return = v, h) : (h = o(h, g), h.return = v, h)
    }

    function l(v, h, g, S) {
        var C = g.type;
        return C === Kn ? c(v, h, g.props.children, S, g.key) : h !== null && (h.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ut && nd(C) === h.type) ? (S = o(h, g.props), S.ref = Lr(v, h, g), S.return = v, S) : (S = Si(g.type, g.key, g.props, null, v.mode, S), S.ref = Lr(v, h, g), S.return = v, S)
    }

    function u(v, h, g, S) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = ca(g, v.mode, S), h.return = v, h) : (h = o(h, g.children || []), h.return = v, h)
    }

    function c(v, h, g, S, C) {
        return h === null || h.tag !== 7 ? (h = Nn(g, v.mode, S, C), h.return = v, h) : (h = o(h, g), h.return = v, h)
    }

    function d(v, h, g) {
        if (typeof h == "string" && h !== "" || typeof h == "number") return h = ua("" + h, v.mode, g), h.return = v, h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
                case Bo:
                    return g = Si(h.type, h.key, h.props, null, v.mode, g), g.ref = Lr(v, null, h), g.return = v, g;
                case Gn:
                    return h = ca(h, v.mode, g), h.return = v, h;
                case Ut:
                    var S = h._init;
                    return d(v, S(h._payload), g)
            }
            if ($r(h) || Nr(h)) return h = Nn(h, v.mode, g, null), h.return = v, h;
            Zo(v, h)
        }
        return null
    }

    function p(v, h, g, S) {
        var C = h !== null ? h.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return C !== null ? null : a(v, h, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Bo:
                    return g.key === C ? l(v, h, g, S) : null;
                case Gn:
                    return g.key === C ? u(v, h, g, S) : null;
                case Ut:
                    return C = g._init, p(v, h, C(g._payload), S)
            }
            if ($r(g) || Nr(g)) return C !== null ? null : c(v, h, g, S, null);
            Zo(v, g)
        }
        return null
    }

    function m(v, h, g, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return v = v.get(g) || null, a(h, v, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Bo:
                    return v = v.get(S.key === null ? g : S.key) || null, l(h, v, S, C);
                case Gn:
                    return v = v.get(S.key === null ? g : S.key) || null, u(h, v, S, C);
                case Ut:
                    var E = S._init;
                    return m(v, h, g, E(S._payload), C)
            }
            if ($r(S) || Nr(S)) return v = v.get(g) || null, c(h, v, S, C, null);
            Zo(h, S)
        }
        return null
    }

    function x(v, h, g, S) {
        for (var C = null, E = null, b = h, P = h = 0, A = null; b !== null && P < g.length; P++) {
            b.index > P ? (A = b, b = null) : A = b.sibling;
            var R = p(v, b, g[P], S);
            if (R === null) {
                b === null && (b = A);
                break
            }
            e && b && R.alternate === null && t(v, b), h = i(R, h, P), E === null ? C = R : E.sibling = R, E = R, b = A
        }
        if (P === g.length) return n(v, b), re && yn(v, P), C;
        if (b === null) {
            for (; P < g.length; P++) b = d(v, g[P], S), b !== null && (h = i(b, h, P), E === null ? C = b : E.sibling = b, E = b);
            return re && yn(v, P), C
        }
        for (b = r(v, b); P < g.length; P++) A = m(b, v, P, g[P], S), A !== null && (e && A.alternate !== null && b.delete(A.key === null ? P : A.key), h = i(A, h, P), E === null ? C = A : E.sibling = A, E = A);
        return e && b.forEach(function(G) {
            return t(v, G)
        }), re && yn(v, P), C
    }

    function y(v, h, g, S) {
        var C = Nr(g);
        if (typeof C != "function") throw Error(k(150));
        if (g = C.call(g), g == null) throw Error(k(151));
        for (var E = C = null, b = h, P = h = 0, A = null, R = g.next(); b !== null && !R.done; P++, R = g.next()) {
            b.index > P ? (A = b, b = null) : A = b.sibling;
            var G = p(v, b, R.value, S);
            if (G === null) {
                b === null && (b = A);
                break
            }
            e && b && G.alternate === null && t(v, b), h = i(G, h, P), E === null ? C = G : E.sibling = G, E = G, b = A
        }
        if (R.done) return n(v, b), re && yn(v, P), C;
        if (b === null) {
            for (; !R.done; P++, R = g.next()) R = d(v, R.value, S), R !== null && (h = i(R, h, P), E === null ? C = R : E.sibling = R, E = R);
            return re && yn(v, P), C
        }
        for (b = r(v, b); !R.done; P++, R = g.next()) R = m(b, v, P, R.value, S), R !== null && (e && R.alternate !== null && b.delete(R.key === null ? P : R.key), h = i(R, h, P), E === null ? C = R : E.sibling = R, E = R);
        return e && b.forEach(function(_) {
            return t(v, _)
        }), re && yn(v, P), C
    }

    function T(v, h, g, S) {
        if (typeof g == "object" && g !== null && g.type === Kn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case Bo:
                    e: {
                        for (var C = g.key, E = h; E !== null;) {
                            if (E.key === C) {
                                if (C = g.type, C === Kn) {
                                    if (E.tag === 7) {
                                        n(v, E.sibling), h = o(E, g.props.children), h.return = v, v = h;
                                        break e
                                    }
                                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ut && nd(C) === E.type) {
                                    n(v, E.sibling), h = o(E, g.props), h.ref = Lr(v, E, g), h.return = v, v = h;
                                    break e
                                }
                                n(v, E);
                                break
                            } else t(v, E);
                            E = E.sibling
                        }
                        g.type === Kn ? (h = Nn(g.props.children, v.mode, S, g.key), h.return = v, v = h) : (S = Si(g.type, g.key, g.props, null, v.mode, S), S.ref = Lr(v, h, g), S.return = v, v = S)
                    }
                    return s(v);
                case Gn:
                    e: {
                        for (E = g.key; h !== null;) {
                            if (h.key === E)
                                if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                                    n(v, h.sibling), h = o(h, g.children || []), h.return = v, v = h;
                                    break e
                                } else {
                                    n(v, h);
                                    break
                                }
                            else t(v, h);
                            h = h.sibling
                        }
                        h = ca(g, v.mode, S),
                        h.return = v,
                        v = h
                    }
                    return s(v);
                case Ut:
                    return E = g._init, T(v, h, E(g._payload), S)
            }
            if ($r(g)) return x(v, h, g, S);
            if (Nr(g)) return y(v, h, g, S);
            Zo(v, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, h !== null && h.tag === 6 ? (n(v, h.sibling), h = o(h, g), h.return = v, v = h) : (n(v, h), h = ua(g, v.mode, S), h.return = v, v = h), s(v)) : n(v, h)
    }
    return T
}
var yr = ah(!0),
    lh = ah(!1),
    Vi = fn(null),
    Fi = null,
    tr = null,
    hu = null;

function mu() {
    hu = tr = Fi = null
}

function gu(e) {
    var t = Vi.current;
    Z(Vi), e._currentValue = t
}

function nl(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function fr(e, t) {
    Fi = e, hu = tr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ve = !0), e.firstContext = null)
}

function ot(e) {
    var t = e._currentValue;
    if (hu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, tr === null) {
            if (Fi === null) throw Error(k(308));
            tr = e, Fi.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else tr = tr.next = e;
    return t
}
var Cn = null;

function vu(e) {
    Cn === null ? Cn = [e] : Cn.push(e)
}

function uh(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, vu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, It(e, r)
}

function It(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var $t = !1;

function yu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ch(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function jt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Jt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, W & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, It(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, vu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, It(e, n)
}

function mi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n)
    }
}

function rd(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function zi(e, t, n, r) {
    var o = e.updateQueue;
    $t = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? i = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0, c = u = l = null, a = i;
        do {
            var p = a.lane,
                m = a.eventTime;
            if ((r & p) === p) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e,
                        y = a;
                    switch (p = t, m = n, y.tag) {
                        case 1:
                            if (x = y.payload, typeof x == "function") {
                                d = x.call(m, d, p);
                                break e
                            }
                            d = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = y.payload, p = typeof x == "function" ? x.call(m, d, p) : x, p == null) break e;
                            d = le({}, d, p);
                            break e;
                        case 2:
                            $t = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a))
            } else m = {
                eventTime: m,
                lane: p,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = m, l = d) : c = c.next = m, s |= p;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        Ln |= s, e.lanes = s, e.memoizedState = d
    }
}

function od(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(k(191, o));
                o.call(r)
            }
        }
}
var Lo = {},
    wt = fn(Lo),
    yo = fn(Lo),
    xo = fn(Lo);

function bn(e) {
    if (e === Lo) throw Error(k(174));
    return e
}

function xu(e, t) {
    switch (Q(xo, t), Q(yo, e), Q(wt, Lo), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : _a(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = _a(t, e)
    }
    Z(wt), Q(wt, t)
}

function xr() {
    Z(wt), Z(yo), Z(xo)
}

function dh(e) {
    bn(xo.current);
    var t = bn(wt.current),
        n = _a(t, e.type);
    t !== n && (Q(yo, e), Q(wt, n))
}

function wu(e) {
    yo.current === e && (Z(wt), Z(yo))
}
var ie = fn(0);

function Bi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ra = [];

function Su() {
    for (var e = 0; e < ra.length; e++) ra[e]._workInProgressVersionPrimary = null;
    ra.length = 0
}
var gi = Vt.ReactCurrentDispatcher,
    oa = Vt.ReactCurrentBatchConfig,
    Mn = 0,
    ae = null,
    ge = null,
    ye = null,
    Ui = !1,
    Zr = !1,
    wo = 0,
    $y = 0;

function Ce() {
    throw Error(k(321))
}

function Tu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!ht(e[n], t[n])) return !1;
    return !0
}

function Cu(e, t, n, r, o, i) {
    if (Mn = i, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gi.current = e === null || e.memoizedState === null ? Ky : Yy, e = n(r, o), Zr) {
        i = 0;
        do {
            if (Zr = !1, wo = 0, 25 <= i) throw Error(k(301));
            i += 1, ye = ge = null, t.updateQueue = null, gi.current = Qy, e = n(r, o)
        } while (Zr)
    }
    if (gi.current = $i, t = ge !== null && ge.next !== null, Mn = 0, ye = ge = ae = null, Ui = !1, t) throw Error(k(300));
    return e
}

function bu() {
    var e = wo !== 0;
    return wo = 0, e
}

function vt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ye === null ? ae.memoizedState = ye = e : ye = ye.next = e, ye
}

function it() {
    if (ge === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ge.next;
    var t = ye === null ? ae.memoizedState : ye.next;
    if (t !== null) ye = t, ge = e;
    else {
        if (e === null) throw Error(k(310));
        ge = e, e = {
            memoizedState: ge.memoizedState,
            baseState: ge.baseState,
            baseQueue: ge.baseQueue,
            queue: ge.queue,
            next: null
        }, ye === null ? ae.memoizedState = ye = e : ye = ye.next = e
    }
    return ye
}

function So(e, t) {
    return typeof t == "function" ? t(e) : t
}

function ia(e) {
    var t = it(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = ge,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((Mn & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, ae.lanes |= c, Ln |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a, ht(r, t.memoizedState) || (Ve = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, ae.lanes |= i, Ln |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function sa(e) {
    var t = it(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        ht(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function fh() {}

function ph(e, t) {
    var n = ae,
        r = it(),
        o = t(),
        i = !ht(r.memoizedState, o);
    if (i && (r.memoizedState = o, Ve = !0), r = r.queue, Eu(gh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ye !== null && ye.memoizedState.tag & 1) {
        if (n.flags |= 2048, To(9, mh.bind(null, n, r, o, t), void 0, null), xe === null) throw Error(k(349));
        Mn & 30 || hh(n, t, o)
    }
    return o
}

function hh(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ae.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function mh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, vh(t) && yh(e)
}

function gh(e, t, n) {
    return n(function() {
        vh(t) && yh(e)
    })
}

function vh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ht(e, n)
    } catch {
        return !0
    }
}

function yh(e) {
    var t = It(e, 1);
    t !== null && pt(t, e, 1, -1)
}

function id(e) {
    var t = vt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: So,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Gy.bind(null, ae, e), [t.memoizedState, e]
}

function To(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ae.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function xh() {
    return it().memoizedState
}

function vi(e, t, n, r) {
    var o = vt();
    ae.flags |= e, o.memoizedState = To(1 | t, n, void 0, r === void 0 ? null : r)
}

function ps(e, t, n, r) {
    var o = it();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ge !== null) {
        var s = ge.memoizedState;
        if (i = s.destroy, r !== null && Tu(r, s.deps)) {
            o.memoizedState = To(t, n, i, r);
            return
        }
    }
    ae.flags |= e, o.memoizedState = To(1 | t, n, i, r)
}

function sd(e, t) {
    return vi(8390656, 8, e, t)
}

function Eu(e, t) {
    return ps(2048, 8, e, t)
}

function wh(e, t) {
    return ps(4, 2, e, t)
}

function Sh(e, t) {
    return ps(4, 4, e, t)
}

function Th(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Ch(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ps(4, 4, Th.bind(null, t, e), n)
}

function Pu() {}

function bh(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Eh(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Tu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ph(e, t, n) {
    return Mn & 21 ? (ht(n, t) || (n = Rp(), ae.lanes |= n, Ln |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = n)
}

function Hy(e, t) {
    var n = K;
    K = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = oa.transition;
    oa.transition = {};
    try {
        e(!1), t()
    } finally {
        K = n, oa.transition = r
    }
}

function kh() {
    return it().memoizedState
}

function Wy(e, t, n) {
    var r = tn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Nh(e)) jh(t, n);
    else if (n = uh(e, t, n, r), n !== null) {
        var o = Me();
        pt(n, e, r, o), Ah(n, t, r)
    }
}

function Gy(e, t, n) {
    var r = tn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Nh(e)) jh(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, ht(a, s)) {
                var l = t.interleaved;
                l === null ? (o.next = o, vu(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = uh(e, t, o, r), n !== null && (o = Me(), pt(n, e, r, o), Ah(n, t, r))
    }
}

function Nh(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae
}

function jh(e, t) {
    Zr = Ui = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Ah(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n)
    }
}
var $i = {
        readContext: ot,
        useCallback: Ce,
        useContext: Ce,
        useEffect: Ce,
        useImperativeHandle: Ce,
        useInsertionEffect: Ce,
        useLayoutEffect: Ce,
        useMemo: Ce,
        useReducer: Ce,
        useRef: Ce,
        useState: Ce,
        useDebugValue: Ce,
        useDeferredValue: Ce,
        useTransition: Ce,
        useMutableSource: Ce,
        useSyncExternalStore: Ce,
        useId: Ce,
        unstable_isNewReconciler: !1
    },
    Ky = {
        readContext: ot,
        useCallback: function(e, t) {
            return vt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: ot,
        useEffect: sd,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, vi(4194308, 4, Th.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return vi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return vi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = vt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = vt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Wy.bind(null, ae, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = vt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: id,
        useDebugValue: Pu,
        useDeferredValue: function(e) {
            return vt().memoizedState = e
        },
        useTransition: function() {
            var e = id(!1),
                t = e[0];
            return e = Hy.bind(null, e[1]), vt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ae,
                o = vt();
            if (re) {
                if (n === void 0) throw Error(k(407));
                n = n()
            } else {
                if (n = t(), xe === null) throw Error(k(349));
                Mn & 30 || hh(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, sd(gh.bind(null, r, i, e), [e]), r.flags |= 2048, To(9, mh.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = vt(),
                t = xe.identifierPrefix;
            if (re) {
                var n = kt,
                    r = Pt;
                n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wo++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = $y++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Yy = {
        readContext: ot,
        useCallback: bh,
        useContext: ot,
        useEffect: Eu,
        useImperativeHandle: Ch,
        useInsertionEffect: wh,
        useLayoutEffect: Sh,
        useMemo: Eh,
        useReducer: ia,
        useRef: xh,
        useState: function() {
            return ia(So)
        },
        useDebugValue: Pu,
        useDeferredValue: function(e) {
            var t = it();
            return Ph(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = ia(So)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: fh,
        useSyncExternalStore: ph,
        useId: kh,
        unstable_isNewReconciler: !1
    },
    Qy = {
        readContext: ot,
        useCallback: bh,
        useContext: ot,
        useEffect: Eu,
        useImperativeHandle: Ch,
        useInsertionEffect: wh,
        useLayoutEffect: Sh,
        useMemo: Eh,
        useReducer: sa,
        useRef: xh,
        useState: function() {
            return sa(So)
        },
        useDebugValue: Pu,
        useDeferredValue: function(e) {
            var t = it();
            return ge === null ? t.memoizedState = e : Ph(t, ge.memoizedState, e)
        },
        useTransition: function() {
            var e = sa(So)[0],
                t = it().memoizedState;
            return [e, t]
        },
        useMutableSource: fh,
        useSyncExternalStore: ph,
        useId: kh,
        unstable_isNewReconciler: !1
    };

function lt(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function rl(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var hs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = tn(e),
            i = jt(r, o);
        i.payload = t, n != null && (i.callback = n), t = Jt(e, i, o), t !== null && (pt(t, e, o, r), mi(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Me(),
            o = tn(e),
            i = jt(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Jt(e, i, o), t !== null && (pt(t, e, o, r), mi(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Me(),
            r = tn(e),
            o = jt(n, r);
        o.tag = 2, t != null && (o.callback = t), t = Jt(e, o, r), t !== null && (pt(t, e, r, n), mi(t, e, r))
    }
};

function ad(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ho(n, r) || !ho(o, i) : !0
}

function Rh(e, t, n) {
    var r = !1,
        o = an,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = ot(i) : (o = ze(t) ? An : ke.current, r = t.contextTypes, i = (r = r != null) ? gr(e, o) : an), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hs, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ld(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hs.enqueueReplaceState(t, t.state, null)
}

function ol(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, yu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = ot(i) : (i = ze(t) ? An : ke.current, o.context = gr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (rl(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hs.enqueueReplaceState(o, o.state, null), zi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function wr(e, t) {
    try {
        var n = "",
            r = t;
        do n += Cv(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function aa(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function il(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Xy = typeof WeakMap == "function" ? WeakMap : Map;

function Mh(e, t, n) {
    n = jt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Wi || (Wi = !0, ml = r), il(e, t)
    }, n
}

function Lh(e, t, n) {
    n = jt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            il(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        il(e, t), typeof r != "function" && (en === null ? en = new Set([this]) : en.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function ud(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Xy;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = cx.bind(null, e, t, n), t.then(e, e))
}

function cd(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function dd(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, Jt(n, t, 1))), n.lanes |= 1), e)
}
var qy = Vt.ReactCurrentOwner,
    Ve = !1;

function Ae(e, t, n, r) {
    t.child = e === null ? lh(t, null, n, r) : yr(t, e.child, n, r)
}

function fd(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return fr(t, o), r = Cu(e, t, n, r, i, o), n = bu(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (re && n && du(t), t.flags |= 1, Ae(e, t, r, o), t.child)
}

function pd(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Iu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ih(e, t, i, r, o)) : (e = Si(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ho, n(s, r) && e.ref === t.ref) return Ot(e, t, o)
    }
    return t.flags |= 1, e = nn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ih(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ho(i, r) && e.ref === t.ref)
            if (Ve = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ve = !0);
            else return t.lanes = e.lanes, Ot(e, t, o)
    }
    return sl(e, t, n, r, o)
}

function Oh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Q(rr, We), We |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Q(rr, We), We |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, Q(rr, We), We |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Q(rr, We), We |= r;
    return Ae(e, t, o, n), t.child
}

function _h(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function sl(e, t, n, r, o) {
    var i = ze(n) ? An : ke.current;
    return i = gr(t, i), fr(t, o), n = Cu(e, t, n, r, i, o), r = bu(), e !== null && !Ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o)) : (re && r && du(t), t.flags |= 1, Ae(e, t, n, o), t.child)
}

function hd(e, t, n, r, o) {
    if (ze(n)) {
        var i = !0;
        Oi(t)
    } else i = !1;
    if (fr(t, o), t.stateNode === null) yi(e, t), Rh(t, n, r), ol(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = ot(u) : (u = ze(n) ? An : ke.current, u = gr(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && ld(t, s, r, u), $t = !1;
        var p = t.memoizedState;
        s.state = p, zi(t, r, s, o), l = t.memoizedState, a !== r || p !== l || Fe.current || $t ? (typeof c == "function" && (rl(t, n, c, r), l = t.memoizedState), (a = $t || ad(t, n, a, r, p, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, ch(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : lt(t.type, a), s.props = u, d = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = ot(l) : (l = ze(n) ? An : ke.current, l = gr(t, l));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || p !== l) && ld(t, s, r, l), $t = !1, p = t.memoizedState, s.state = p, zi(t, r, s, o);
        var x = t.memoizedState;
        a !== d || p !== x || Fe.current || $t ? (typeof m == "function" && (rl(t, n, m, r), x = t.memoizedState), (u = $t || ad(t, n, u, r, p, x, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return al(e, t, n, r, i, o)
}

function al(e, t, n, r, o, i) {
    _h(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Jc(t, n, !1), Ot(e, t, i);
    r = t.stateNode, qy.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = yr(t, e.child, null, i), t.child = yr(t, null, a, i)) : Ae(e, t, a, i), t.memoizedState = r.state, o && Jc(t, n, !0), t.child
}

function Dh(e) {
    var t = e.stateNode;
    t.pendingContext ? Zc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Zc(e, t.context, !1), xu(e, t.containerInfo)
}

function md(e, t, n, r, o) {
    return vr(), pu(o), t.flags |= 256, Ae(e, t, n, r), t.child
}
var ll = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ul(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Vh(e, t, n) {
    var r = t.pendingProps,
        o = ie.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Q(ie, o & 1), e === null) return tl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = vs(s, r, 0, null), e = Nn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = ul(n), t.memoizedState = ll, e) : ku(t, s));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return Zy(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = nn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = nn(a, i) : (i = Nn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? ul(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = ll, r
    }
    return i = e.child, e = i.sibling, r = nn(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function ku(e, t) {
    return t = vs({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Jo(e, t, n, r) {
    return r !== null && pu(r), yr(t, e.child, null, n), e = ku(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Zy(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = aa(Error(k(422))), Jo(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = vs({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Nn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && yr(t, e.child, null, s), t.child.memoizedState = ul(s), t.memoizedState = ll, i);
    if (!(t.mode & 1)) return Jo(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(k(419)), r = aa(i, r, void 0), Jo(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, Ve || a) {
        if (r = xe, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, It(e, o), pt(r, e, o, -1))
        }
        return Lu(), r = aa(Error(k(421))), Jo(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = dx.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ge = Zt(o.nextSibling), Ke = t, re = !0, ct = null, e !== null && (et[tt++] = Pt, et[tt++] = kt, et[tt++] = Rn, Pt = e.id, kt = e.overflow, Rn = t), t = ku(t, r.children), t.flags |= 4096, t)
}

function gd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), nl(e.return, t, n)
}

function la(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Fh(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Ae(e, t, r.children, n), r = ie.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && gd(e, n, t);
            else if (e.tag === 19) gd(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Q(ie, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Bi(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), la(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Bi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            la(t, !0, n, null, i);
            break;
        case "together":
            la(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function yi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ot(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ln |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Jy(e, t, n) {
    switch (t.tag) {
        case 3:
            Dh(t), vr();
            break;
        case 5:
            dh(t);
            break;
        case 1:
            ze(t.type) && Oi(t);
            break;
        case 4:
            xu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Q(Vi, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Q(ie, ie.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Vh(e, t, n) : (Q(ie, ie.current & 1), e = Ot(e, t, n), e !== null ? e.sibling : null);
            Q(ie, ie.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Fh(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Q(ie, ie.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Oh(e, t, n)
    }
    return Ot(e, t, n)
}
var zh, cl, Bh, Uh;
zh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
cl = function() {};
Bh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, bn(wt.current);
        var i = null;
        switch (n) {
            case "input":
                o = Ma(e, o), r = Ma(e, r), i = [];
                break;
            case "select":
                o = le({}, o, {
                    value: void 0
                }), r = le({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Oa(e, o), r = Oa(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Li)
        }
        Da(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (so.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (so.hasOwnProperty(u) ? (l != null && u === "onScroll" && q("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Uh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function Ir(e, t) {
    if (!re) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function ex(e, t, n) {
    var r = t.pendingProps;
    switch (fu(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return be(t), null;
        case 1:
            return ze(t.type) && Ii(), be(t), null;
        case 3:
            return r = t.stateNode, xr(), Z(Fe), Z(ke), Su(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ct !== null && (yl(ct), ct = null))), cl(e, t), be(t), null;
        case 5:
            wu(t);
            var o = bn(xo.current);
            if (n = t.type, e !== null && t.stateNode != null) Bh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return be(t), null
                }
                if (e = bn(wt.current), qo(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[yt] = t, r[vo] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            q("cancel", r), q("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            q("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Wr.length; o++) q(Wr[o], r);
                            break;
                        case "source":
                            q("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            q("error", r), q("load", r);
                            break;
                        case "details":
                            q("toggle", r);
                            break;
                        case "input":
                            Ec(r, i), q("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, q("invalid", r);
                            break;
                        case "textarea":
                            kc(r, i), q("invalid", r)
                    }
                    Da(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Xo(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Xo(r.textContent, a, e), o = ["children", "" + a]) : so.hasOwnProperty(s) && a != null && s === "onScroll" && q("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            Uo(r), Pc(r, i, !0);
                            break;
                        case "textarea":
                            Uo(r), Nc(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Li)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = gp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[yt] = t, e[vo] = r, zh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Va(n, r), n) {
                            case "dialog":
                                q("cancel", e), q("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                q("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Wr.length; o++) q(Wr[o], e);
                                o = r;
                                break;
                            case "source":
                                q("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                q("error", e), q("load", e), o = r;
                                break;
                            case "details":
                                q("toggle", e), o = r;
                                break;
                            case "input":
                                Ec(e, r), o = Ma(e, r), q("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = le({}, r, {
                                    value: void 0
                                }), q("invalid", e);
                                break;
                            case "textarea":
                                kc(e, r), o = Oa(e, r), q("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Da(n, o),
                        a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? xp(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && vp(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && ao(e, l) : typeof l == "number" && ao(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (so.hasOwnProperty(i) ? l != null && i === "onScroll" && q("scroll", e) : l != null && ql(e, i, l, s))
                            }
                        switch (n) {
                            case "input":
                                Uo(e), Pc(e, r, !1);
                                break;
                            case "textarea":
                                Uo(e), Nc(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + sn(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? lr(e, !!r.multiple, i, !1) : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Li)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return be(t), null;
        case 6:
            if (e && t.stateNode != null) Uh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                if (n = bn(xo.current), bn(wt.current), qo(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[yt] = t, (i = r.nodeValue !== n) && (e = Ke, e !== null)) switch (e.tag) {
                        case 3:
                            Xo(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Xo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[yt] = t, t.stateNode = r
            }
            return be(t), null;
        case 13:
            if (Z(ie), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (re && Ge !== null && t.mode & 1 && !(t.flags & 128)) sh(), vr(), t.flags |= 98560, i = !1;
                else if (i = qo(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(k(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
                        i[yt] = t
                    } else vr(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    be(t), i = !1
                } else ct !== null && (yl(ct), ct = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ie.current & 1 ? ve === 0 && (ve = 3) : Lu())), t.updateQueue !== null && (t.flags |= 4), be(t), null);
        case 4:
            return xr(), cl(e, t), e === null && mo(t.stateNode.containerInfo), be(t), null;
        case 10:
            return gu(t.type._context), be(t), null;
        case 17:
            return ze(t.type) && Ii(), be(t), null;
        case 19:
            if (Z(ie), i = t.memoizedState, i === null) return be(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) Ir(i, !1);
                else {
                    if (ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Bi(e), s !== null) {
                                for (t.flags |= 128, Ir(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return Q(ie, ie.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && fe() > Sr && (t.flags |= 128, r = !0, Ir(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Bi(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ir(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !re) return be(t), null
                    } else 2 * fe() - i.renderingStartTime > Sr && n !== 1073741824 && (t.flags |= 128, r = !0, Ir(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = fe(), t.sibling = null, n = ie.current, Q(ie, r ? n & 1 | 2 : n & 1), t) : (be(t), null);
        case 22:
        case 23:
            return Mu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : be(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(k(156, t.tag))
}

function tx(e, t) {
    switch (fu(t), t.tag) {
        case 1:
            return ze(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return xr(), Z(Fe), Z(ke), Su(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return wu(t), null;
        case 13:
            if (Z(ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(k(340));
                vr()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Z(ie), null;
        case 4:
            return xr(), null;
        case 10:
            return gu(t.type._context), null;
        case 22:
        case 23:
            return Mu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ei = !1,
    Pe = !1,
    nx = typeof WeakSet == "function" ? WeakSet : Set,
    j = null;

function nr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ue(e, t, r)
        } else n.current = null
}

function dl(e, t, n) {
    try {
        n()
    } catch (r) {
        ue(e, t, r)
    }
}
var vd = !1;

function rx(e, t) {
    if (Ya = Ai, e = Kp(), cu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    p = null;
                t: for (;;) {
                    for (var m; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (m = d.firstChild) !== null;) p = d, d = m;
                    for (;;) {
                        if (d === e) break t;
                        if (p === n && ++u === o && (a = s), p === i && ++c === r && (l = s), (m = d.nextSibling) !== null) break;
                        d = p, p = d.parentNode
                    }
                    d = m
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Qa = {
            focusedElem: e,
            selectionRange: n
        }, Ai = !1, j = t; j !== null;)
        if (t = j, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, j = e;
        else
            for (; j !== null;) {
                t = j;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps,
                                    T = x.memoizedState,
                                    v = t.stateNode,
                                    h = v.getSnapshotBeforeUpdate(t.elementType === t.type ? y : lt(t.type, y), T);
                                v.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                    }
                } catch (S) {
                    ue(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, j = e;
                    break
                }
                j = t.return
            }
    return x = vd, vd = !1, x
}

function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && dl(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function ms(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function fl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $h(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $h(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[yt], delete t[vo], delete t[Za], delete t[Fy], delete t[zy])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Hh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function yd(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Hh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function pl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Li));
    else if (r !== 4 && (e = e.child, e !== null))
        for (pl(e, t, n), e = e.sibling; e !== null;) pl(e, t, n), e = e.sibling
}

function hl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (hl(e, t, n), e = e.sibling; e !== null;) hl(e, t, n), e = e.sibling
}
var we = null,
    ut = !1;

function Ft(e, t, n) {
    for (n = n.child; n !== null;) Wh(e, t, n), n = n.sibling
}

function Wh(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function") try {
        xt.onCommitFiberUnmount(as, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Pe || nr(n, t);
        case 6:
            var r = we,
                o = ut;
            we = null, Ft(e, t, n), we = r, ut = o, we !== null && (ut ? (e = we, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
            break;
        case 18:
            we !== null && (ut ? (e = we, n = n.stateNode, e.nodeType === 8 ? ta(e.parentNode, n) : e.nodeType === 1 && ta(e, n), fo(e)) : ta(we, n.stateNode));
            break;
        case 4:
            r = we, o = ut, we = n.stateNode.containerInfo, ut = !0, Ft(e, t, n), we = r, ut = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && dl(n, t, s), o = o.next
                } while (o !== r)
            }
            Ft(e, t, n);
            break;
        case 1:
            if (!Pe && (nr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ue(n, t, a)
            }
            Ft(e, t, n);
            break;
        case 21:
            Ft(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null, Ft(e, t, n), Pe = r) : Ft(e, t, n);
            break;
        default:
            Ft(e, t, n)
    }
}

function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new nx), t.forEach(function(r) {
            var o = fx.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function st(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            we = a.stateNode, ut = !1;
                            break e;
                        case 3:
                            we = a.stateNode.containerInfo, ut = !0;
                            break e;
                        case 4:
                            we = a.stateNode.containerInfo, ut = !0;
                            break e
                    }
                    a = a.return
                }
                if (we === null) throw Error(k(160));
                Wh(i, s, o), we = null, ut = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                ue(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Gh(t, e), t = t.sibling
}

function Gh(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (st(t, e), gt(e), r & 4) {
                try {
                    Jr(3, e, e.return), ms(3, e)
                } catch (y) {
                    ue(e, e.return, y)
                }
                try {
                    Jr(5, e, e.return)
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 1:
            st(t, e), gt(e), r & 512 && n !== null && nr(n, n.return);
            break;
        case 5:
            if (st(t, e), gt(e), r & 512 && n !== null && nr(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    ao(o, "")
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && hp(o, i), Va(a, s);
                    var u = Va(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? xp(o, d) : c === "dangerouslySetInnerHTML" ? vp(o, d) : c === "children" ? ao(o, d) : ql(o, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            La(o, i);
                            break;
                        case "textarea":
                            mp(o, i);
                            break;
                        case "select":
                            var p = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var m = i.value;
                            m != null ? lr(o, !!i.multiple, m, !1) : p !== !!i.multiple && (i.defaultValue != null ? lr(o, !!i.multiple, i.defaultValue, !0) : lr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[vo] = i
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 6:
            if (st(t, e), gt(e), r & 4) {
                if (e.stateNode === null) throw Error(k(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (y) {
                    ue(e, e.return, y)
                }
            }
            break;
        case 3:
            if (st(t, e), gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                fo(t.containerInfo)
            } catch (y) {
                ue(e, e.return, y)
            }
            break;
        case 4:
            st(t, e), gt(e);
            break;
        case 13:
            st(t, e), gt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Au = fe())), r & 4 && xd(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Pe = (u = Pe) || c, st(t, e), Pe = u) : st(t, e), gt(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (j = e, c = e.child; c !== null;) {
                        for (d = j = c; j !== null;) {
                            switch (p = j, m = p.child, p.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Jr(4, p, p.return);
                                    break;
                                case 1:
                                    nr(p, p.return);
                                    var x = p.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = p, n = p.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (y) {
                                            ue(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    nr(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        Sd(d);
                                        continue
                                    }
                            }
                            m !== null ? (m.return = p, j = m) : Sd(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = yp("display", s))
                            } catch (y) {
                                ue(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (y) {
                            ue(e, e.return, y)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            st(t, e), gt(e), r & 4 && xd(e);
            break;
        case 21:
            break;
        default:
            st(t, e), gt(e)
    }
}

function gt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Hh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ao(o, ""), r.flags &= -33);
                    var i = yd(e);
                    hl(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = yd(e);
                    pl(e, a, s);
                    break;
                default:
                    throw Error(k(161))
            }
        }
        catch (l) {
            ue(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ox(e, t, n) {
    j = e, Kh(e)
}

function Kh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; j !== null;) {
        var o = j,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || ei;
            if (!s) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || Pe;
                a = ei;
                var u = Pe;
                if (ei = s, (Pe = l) && !u)
                    for (j = o; j !== null;) s = j, l = s.child, s.tag === 22 && s.memoizedState !== null ? Td(o) : l !== null ? (l.return = s, j = l) : Td(o);
                for (; i !== null;) j = i, Kh(i), i = i.sibling;
                j = o, ei = a, Pe = u
            }
            wd(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, j = i) : wd(e)
    }
}

function wd(e) {
    for (; j !== null;) {
        var t = j;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || ms(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && od(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            od(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && fo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                }
                Pe || t.flags & 512 && fl(t)
            } catch (p) {
                ue(t, t.return, p)
            }
        }
        if (t === e) {
            j = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Sd(e) {
    for (; j !== null;) {
        var t = j;
        if (t === e) {
            j = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, j = n;
            break
        }
        j = t.return
    }
}

function Td(e) {
    for (; j !== null;) {
        var t = j;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ms(4, t)
                    } catch (l) {
                        ue(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ue(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        fl(t)
                    } catch (l) {
                        ue(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        fl(t)
                    } catch (l) {
                        ue(t, s, l)
                    }
            }
        } catch (l) {
            ue(t, t.return, l)
        }
        if (t === e) {
            j = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, j = a;
            break
        }
        j = t.return
    }
}
var ix = Math.ceil,
    Hi = Vt.ReactCurrentDispatcher,
    Nu = Vt.ReactCurrentOwner,
    rt = Vt.ReactCurrentBatchConfig,
    W = 0,
    xe = null,
    he = null,
    Se = 0,
    We = 0,
    rr = fn(0),
    ve = 0,
    Co = null,
    Ln = 0,
    gs = 0,
    ju = 0,
    eo = null,
    De = null,
    Au = 0,
    Sr = 1 / 0,
    bt = null,
    Wi = !1,
    ml = null,
    en = null,
    ti = !1,
    Yt = null,
    Gi = 0,
    to = 0,
    gl = null,
    xi = -1,
    wi = 0;

function Me() {
    return W & 6 ? fe() : xi !== -1 ? xi : xi = fe()
}

function tn(e) {
    return e.mode & 1 ? W & 2 && Se !== 0 ? Se & -Se : Uy.transition !== null ? (wi === 0 && (wi = Rp()), wi) : (e = K, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Vp(e.type)), e) : 1
}

function pt(e, t, n, r) {
    if (50 < to) throw to = 0, gl = null, Error(k(185));
    Ao(e, n, r), (!(W & 2) || e !== xe) && (e === xe && (!(W & 2) && (gs |= n), ve === 4 && Gt(e, Se)), Be(e, r), n === 1 && W === 0 && !(t.mode & 1) && (Sr = fe() + 500, fs && pn()))
}

function Be(e, t) {
    var n = e.callbackNode;
    Uv(e, t);
    var r = ji(e, e === xe ? Se : 0);
    if (r === 0) n !== null && Rc(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Rc(n), t === 1) e.tag === 0 ? By(Cd.bind(null, e)) : rh(Cd.bind(null, e)), Dy(function() {
            !(W & 6) && pn()
        }), n = null;
        else {
            switch (Mp(r)) {
                case 1:
                    n = nu;
                    break;
                case 4:
                    n = jp;
                    break;
                case 16:
                    n = Ni;
                    break;
                case 536870912:
                    n = Ap;
                    break;
                default:
                    n = Ni
            }
            n = tm(n, Yh.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Yh(e, t) {
    if (xi = -1, wi = 0, W & 6) throw Error(k(327));
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n) return null;
    var r = ji(e, e === xe ? Se : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Ki(e, r);
    else {
        t = r;
        var o = W;
        W |= 2;
        var i = Xh();
        (xe !== e || Se !== t) && (bt = null, Sr = fe() + 500, kn(e, t));
        do try {
            lx();
            break
        } catch (a) {
            Qh(e, a)
        }
        while (1);
        mu(), Hi.current = i, W = o, he !== null ? t = 0 : (xe = null, Se = 0, t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (o = $a(e), o !== 0 && (r = o, t = vl(e, o))), t === 1) throw n = Co, kn(e, 0), Gt(e, r), Be(e, fe()), n;
        if (t === 6) Gt(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !sx(o) && (t = Ki(e, r), t === 2 && (i = $a(e), i !== 0 && (r = i, t = vl(e, i))), t === 1)) throw n = Co, kn(e, 0), Gt(e, r), Be(e, fe()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    xn(e, De, bt);
                    break;
                case 3:
                    if (Gt(e, r), (r & 130023424) === r && (t = Au + 500 - fe(), 10 < t)) {
                        if (ji(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Me(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = qa(xn.bind(null, e, De, bt), t);
                        break
                    }
                    xn(e, De, bt);
                    break;
                case 4:
                    if (Gt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - ft(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ix(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = qa(xn.bind(null, e, De, bt), r);
                        break
                    }
                    xn(e, De, bt);
                    break;
                case 5:
                    xn(e, De, bt);
                    break;
                default:
                    throw Error(k(329))
            }
        }
    }
    return Be(e, fe()), e.callbackNode === n ? Yh.bind(null, e) : null
}

function vl(e, t) {
    var n = eo;
    return e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256), e = Ki(e, t), e !== 2 && (t = De, De = n, t !== null && yl(t)), e
}

function yl(e) {
    De === null ? De = e : De.push.apply(De, e)
}

function sx(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!ht(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Gt(e, t) {
    for (t &= ~ju, t &= ~gs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ft(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Cd(e) {
    if (W & 6) throw Error(k(327));
    pr();
    var t = ji(e, 0);
    if (!(t & 1)) return Be(e, fe()), null;
    var n = Ki(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $a(e);
        r !== 0 && (t = r, n = vl(e, r))
    }
    if (n === 1) throw n = Co, kn(e, 0), Gt(e, t), Be(e, fe()), n;
    if (n === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xn(e, De, bt), Be(e, fe()), null
}

function Ru(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t)
    } finally {
        W = n, W === 0 && (Sr = fe() + 500, fs && pn())
    }
}

function In(e) {
    Yt !== null && Yt.tag === 0 && !(W & 6) && pr();
    var t = W;
    W |= 1;
    var n = rt.transition,
        r = K;
    try {
        if (rt.transition = null, K = 1, e) return e()
    } finally {
        K = r, rt.transition = n, W = t, !(W & 6) && pn()
    }
}

function Mu() {
    We = rr.current, Z(rr)
}

function kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, _y(n)), he !== null)
        for (n = he.return; n !== null;) {
            var r = n;
            switch (fu(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ii();
                    break;
                case 3:
                    xr(), Z(Fe), Z(ke), Su();
                    break;
                case 5:
                    wu(r);
                    break;
                case 4:
                    xr();
                    break;
                case 13:
                    Z(ie);
                    break;
                case 19:
                    Z(ie);
                    break;
                case 10:
                    gu(r.type._context);
                    break;
                case 22:
                case 23:
                    Mu()
            }
            n = n.return
        }
    if (xe = e, he = e = nn(e.current, null), Se = We = t, ve = 0, Co = null, ju = gs = Ln = 0, De = eo = null, Cn !== null) {
        for (t = 0; t < Cn.length; t++)
            if (n = Cn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        Cn = null
    }
    return e
}

function Qh(e, t) {
    do {
        var n = he;
        try {
            if (mu(), gi.current = $i, Ui) {
                for (var r = ae.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Ui = !1
            }
            if (Mn = 0, ye = ge = ae = null, Zr = !1, wo = 0, Nu.current = null, n === null || n.return === null) {
                ve = 1, Co = t, he = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = Se, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var p = c.alternate;
                        p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var m = cd(s);
                    if (m !== null) {
                        m.flags &= -257, dd(m, s, a, i, t), m.mode & 1 && ud(i, u, t), t = m, l = u;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l), t.updateQueue = y
                        } else x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            ud(i, u, t), Lu();
                            break e
                        }
                        l = Error(k(426))
                    }
                } else if (re && a.mode & 1) {
                    var T = cd(s);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256), dd(T, s, a, i, t), pu(wr(l, a));
                        break e
                    }
                }
                i = l = wr(l, a),
                ve !== 4 && (ve = 2),
                eo === null ? eo = [i] : eo.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var v = Mh(i, l, t);
                            rd(i, v);
                            break e;
                        case 1:
                            a = l;
                            var h = i.type,
                                g = i.stateNode;
                            if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (en === null || !en.has(g)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var S = Lh(i, a, t);
                                rd(i, S);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            Zh(n)
        } catch (C) {
            t = C, he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (1)
}

function Xh() {
    var e = Hi.current;
    return Hi.current = $i, e === null ? $i : e
}

function Lu() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), xe === null || !(Ln & 268435455) && !(gs & 268435455) || Gt(xe, Se)
}

function Ki(e, t) {
    var n = W;
    W |= 2;
    var r = Xh();
    (xe !== e || Se !== t) && (bt = null, kn(e, t));
    do try {
        ax();
        break
    } catch (o) {
        Qh(e, o)
    }
    while (1);
    if (mu(), W = n, Hi.current = r, he !== null) throw Error(k(261));
    return xe = null, Se = 0, ve
}

function ax() {
    for (; he !== null;) qh(he)
}

function lx() {
    for (; he !== null && !Lv();) qh(he)
}

function qh(e) {
    var t = em(e.alternate, e, We);
    e.memoizedProps = e.pendingProps, t === null ? Zh(e) : he = t, Nu.current = null
}

function Zh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = tx(n, t), n !== null) {
                n.flags &= 32767, he = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ve = 6, he = null;
                return
            }
        } else if (n = ex(n, t, We), n !== null) {
            he = n;
            return
        }
        if (t = t.sibling, t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}

function xn(e, t, n) {
    var r = K,
        o = rt.transition;
    try {
        rt.transition = null, K = 1, ux(e, t, n, r)
    } finally {
        rt.transition = o, K = r
    }
    return null
}

function ux(e, t, n, r) {
    do pr(); while (Yt !== null);
    if (W & 6) throw Error(k(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($v(e, i), e === xe && (he = xe = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ti || (ti = !0, tm(Ni, function() {
            return pr(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = rt.transition, rt.transition = null;
        var s = K;
        K = 1;
        var a = W;
        W |= 4, Nu.current = null, rx(e, n), Gh(n, e), jy(Qa), Ai = !!Ya, Qa = Ya = null, e.current = n, ox(n), Iv(), W = a, K = s, rt.transition = i
    } else e.current = n;
    if (ti && (ti = !1, Yt = e, Gi = o), i = e.pendingLanes, i === 0 && (en = null), Dv(n.stateNode), Be(e, fe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Wi) throw Wi = !1, e = ml, ml = null, e;
    return Gi & 1 && e.tag !== 0 && pr(), i = e.pendingLanes, i & 1 ? e === gl ? to++ : (to = 0, gl = e) : to = 0, pn(), null
}

function pr() {
    if (Yt !== null) {
        var e = Mp(Gi),
            t = rt.transition,
            n = K;
        try {
            if (rt.transition = null, K = 16 > e ? 16 : e, Yt === null) var r = !1;
            else {
                if (e = Yt, Yt = null, Gi = 0, W & 6) throw Error(k(331));
                var o = W;
                for (W |= 4, j = e.current; j !== null;) {
                    var i = j,
                        s = i.child;
                    if (j.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (j = u; j !== null;) {
                                    var c = j;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Jr(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, j = d;
                                    else
                                        for (; j !== null;) {
                                            c = j;
                                            var p = c.sibling,
                                                m = c.return;
                                            if ($h(c), c === u) {
                                                j = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = m, j = p;
                                                break
                                            }
                                            j = m
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var T = y.sibling;
                                        y.sibling = null, y = T
                                    } while (y !== null)
                                }
                            }
                            j = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, j = s;
                    else e: for (; j !== null;) {
                        if (i = j, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Jr(9, i, i.return)
                        }
                        var v = i.sibling;
                        if (v !== null) {
                            v.return = i.return, j = v;
                            break e
                        }
                        j = i.return
                    }
                }
                var h = e.current;
                for (j = h; j !== null;) {
                    s = j;
                    var g = s.child;
                    if (s.subtreeFlags & 2064 && g !== null) g.return = s, j = g;
                    else e: for (s = h; j !== null;) {
                        if (a = j, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ms(9, a)
                            }
                        } catch (C) {
                            ue(a, a.return, C)
                        }
                        if (a === s) {
                            j = null;
                            break e
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, j = S;
                            break e
                        }
                        j = a.return
                    }
                }
                if (W = o, pn(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
                    xt.onPostCommitFiberRoot(as, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            K = n, rt.transition = t
        }
    }
    return !1
}

function bd(e, t, n) {
    t = wr(n, t), t = Mh(e, t, 1), e = Jt(e, t, 1), t = Me(), e !== null && (Ao(e, 1, t), Be(e, t))
}

function ue(e, t, n) {
    if (e.tag === 3) bd(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                bd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
                    e = wr(n, e), e = Lh(t, e, 1), t = Jt(t, e, 1), e = Me(), t !== null && (Ao(t, 1, e), Be(t, e));
                    break
                }
            }
            t = t.return
        }
}

function cx(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Me(), e.pingedLanes |= e.suspendedLanes & n, xe === e && (Se & n) === n && (ve === 4 || ve === 3 && (Se & 130023424) === Se && 500 > fe() - Au ? kn(e, 0) : ju |= n), Be(e, t)
}

function Jh(e, t) {
    t === 0 && (e.mode & 1 ? (t = Wo, Wo <<= 1, !(Wo & 130023424) && (Wo = 4194304)) : t = 1);
    var n = Me();
    e = It(e, t), e !== null && (Ao(e, t, n), Be(e, n))
}

function dx(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Jh(e, n)
}

function fx(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314))
    }
    r !== null && r.delete(t), Jh(e, n)
}
var em;
em = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Fe.current) Ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ve = !1, Jy(e, t, n);
            Ve = !!(e.flags & 131072)
        }
    else Ve = !1, re && t.flags & 1048576 && oh(t, Di, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            yi(e, t), e = t.pendingProps;
            var o = gr(t, ke.current);
            fr(t, n), o = Cu(null, t, r, e, o, n);
            var i = bu();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (i = !0, Oi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, yu(t), o.updater = hs, t.stateNode = o, o._reactInternals = t, ol(t, r, e, n), t = al(null, t, r, !0, i, n)) : (t.tag = 0, re && i && du(t), Ae(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (yi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hx(r), e = lt(r, e), o) {
                    case 0:
                        t = sl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = hd(null, t, r, e, n);
                        break e;
                    case 11:
                        t = fd(null, t, r, e, n);
                        break e;
                    case 14:
                        t = pd(null, t, r, lt(r.type, e), n);
                        break e
                }
                throw Error(k(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), sl(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), hd(e, t, r, o, n);
        case 3:
            e: {
                if (Dh(t), e === null) throw Error(k(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                ch(e, t),
                zi(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = wr(Error(k(423)), t), t = md(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = wr(Error(k(424)), t), t = md(e, t, r, n, o);
                    break e
                } else
                    for (Ge = Zt(t.stateNode.containerInfo.firstChild), Ke = t, re = !0, ct = null, n = lh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (vr(), r === o) {
                        t = Ot(e, t, n);
                        break e
                    }
                    Ae(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return dh(t), e === null && tl(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Xa(r, o) ? s = null : i !== null && Xa(r, i) && (t.flags |= 32), _h(e, t), Ae(e, t, s, n), t.child;
        case 6:
            return e === null && tl(t), null;
        case 13:
            return Vh(e, t, n);
        case 4:
            return xu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = yr(t, null, r, n) : Ae(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), fd(e, t, r, o, n);
        case 7:
            return Ae(e, t, t.pendingProps, n), t.child;
        case 8:
            return Ae(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Ae(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Q(Vi, r._currentValue), r._currentValue = s, i !== null)
                    if (ht(i.value, s)) {
                        if (i.children === o.children && !Fe.current) {
                            t = Ot(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = jt(-1, n & -n), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), nl(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(k(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), nl(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                Ae(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, fr(t, n), o = ot(o), r = r(o), t.flags |= 1, Ae(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), pd(e, t, r, o, n);
        case 15:
            return Ih(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), yi(e, t), t.tag = 1, ze(r) ? (e = !0, Oi(t)) : e = !1, fr(t, n), Rh(t, r, o), ol(t, r, o, n), al(null, t, r, !0, e, n);
        case 19:
            return Fh(e, t, n);
        case 22:
            return Oh(e, t, n)
    }
    throw Error(k(156, t.tag))
};

function tm(e, t) {
    return Np(e, t)
}

function px(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function nt(e, t, n, r) {
    return new px(e, t, n, r)
}

function Iu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function hx(e) {
    if (typeof e == "function") return Iu(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Jl) return 11;
        if (e === eu) return 14
    }
    return 2
}

function nn(e, t) {
    var n = e.alternate;
    return n === null ? (n = nt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Si(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") Iu(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case Kn:
            return Nn(n.children, o, i, t);
        case Zl:
            s = 8, o |= 8;
            break;
        case Na:
            return e = nt(12, n, t, o | 2), e.elementType = Na, e.lanes = i, e;
        case ja:
            return e = nt(13, n, t, o), e.elementType = ja, e.lanes = i, e;
        case Aa:
            return e = nt(19, n, t, o), e.elementType = Aa, e.lanes = i, e;
        case dp:
            return vs(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case up:
                    s = 10;
                    break e;
                case cp:
                    s = 9;
                    break e;
                case Jl:
                    s = 11;
                    break e;
                case eu:
                    s = 14;
                    break e;
                case Ut:
                    s = 16, r = null;
                    break e
            }
            throw Error(k(130, e == null ? e : typeof e, ""))
    }
    return t = nt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Nn(e, t, n, r) {
    return e = nt(7, e, r, t), e.lanes = n, e
}

function vs(e, t, n, r) {
    return e = nt(22, e, r, t), e.elementType = dp, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function ua(e, t, n) {
    return e = nt(6, e, null, t), e.lanes = n, e
}

function ca(e, t, n) {
    return t = nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function mx(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hs(0), this.expirationTimes = Hs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hs(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function Ou(e, t, n, r, o, i, s, a, l) {
    return e = new mx(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = nt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, yu(i), e
}

function gx(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Gn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function nm(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
        if (Fn(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ze(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ze(n)) return nh(e, n, t)
    }
    return t
}

function rm(e, t, n, r, o, i, s, a, l) {
    return e = Ou(n, r, !0, e, o, i, s, a, l), e.context = nm(null), n = e.current, r = Me(), o = tn(n), i = jt(r, o), i.callback = t ? ? null, Jt(n, i, o), e.current.lanes = o, Ao(e, o, r), Be(e, r), e
}

function ys(e, t, n, r) {
    var o = t.current,
        i = Me(),
        s = tn(o);
    return n = nm(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jt(o, t, s), e !== null && (pt(e, o, s, i), mi(e, o, s)), s
}

function Yi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ed(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function _u(e, t) {
    Ed(e, t), (e = e.alternate) && Ed(e, t)
}

function vx() {
    return null
}
var om = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Du(e) {
    this._internalRoot = e
}
xs.prototype.render = Du.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    ys(e, t, null, null)
};
xs.prototype.unmount = Du.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        In(function() {
            ys(null, e, null, null)
        }), t[Lt] = null
    }
};

function xs(e) {
    this._internalRoot = e
}
xs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Op();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Wt.length && t !== 0 && t < Wt[n].priority; n++);
        Wt.splice(n, 0, e), n === 0 && Dp(e)
    }
};

function Vu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ws(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Pd() {}

function yx(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = Yi(s);
                i.call(u)
            }
        }
        var s = rm(t, r, e, 0, null, !1, !1, "", Pd);
        return e._reactRootContainer = s, e[Lt] = s.current, mo(e.nodeType === 8 ? e.parentNode : e), In(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = Yi(l);
            a.call(u)
        }
    }
    var l = Ou(e, 0, !1, null, null, !1, !1, "", Pd);
    return e._reactRootContainer = l, e[Lt] = l.current, mo(e.nodeType === 8 ? e.parentNode : e), In(function() {
        ys(t, l, n, r)
    }), l
}

function Ss(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = Yi(s);
                a.call(l)
            }
        }
        ys(t, s, e, o)
    } else s = yx(n, t, e, o, r);
    return Yi(s)
}
Lp = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Hr(t.pendingLanes);
                n !== 0 && (ru(t, n | 1), Be(t, fe()), !(W & 6) && (Sr = fe() + 500, pn()))
            }
            break;
        case 13:
            In(function() {
                var r = It(e, 1);
                if (r !== null) {
                    var o = Me();
                    pt(r, e, 1, o)
                }
            }), _u(e, 1)
    }
};
ou = function(e) {
    if (e.tag === 13) {
        var t = It(e, 134217728);
        if (t !== null) {
            var n = Me();
            pt(t, e, 134217728, n)
        }
        _u(e, 134217728)
    }
};
Ip = function(e) {
    if (e.tag === 13) {
        var t = tn(e),
            n = It(e, t);
        if (n !== null) {
            var r = Me();
            pt(n, e, t, r)
        }
        _u(e, t)
    }
};
Op = function() {
    return K
};
_p = function(e, t) {
    var n = K;
    try {
        return K = e, t()
    } finally {
        K = n
    }
};
za = function(e, t, n) {
    switch (t) {
        case "input":
            if (La(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ds(r);
                        if (!o) throw Error(k(90));
                        pp(r), La(r, o)
                    }
                }
            }
            break;
        case "textarea":
            mp(e, n);
            break;
        case "select":
            t = n.value, t != null && lr(e, !!n.multiple, t, !1)
    }
};
Tp = Ru;
Cp = In;
var xx = {
        usingClientEntryPoint: !1,
        Events: [Mo, qn, ds, wp, Sp, Ru]
    },
    Or = {
        findFiberByHostInstance: Tn,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    wx = {
        bundleType: Or.bundleType,
        version: Or.version,
        rendererPackageName: Or.rendererPackageName,
        rendererConfig: Or.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Pp(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Or.findFiberByHostInstance || vx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ni.isDisabled && ni.supportsFiber) try {
        as = ni.inject(wx), xt = ni
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xx;
Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vu(t)) throw Error(k(200));
    return gx(e, t, null, n)
};
Xe.createRoot = function(e, t) {
    if (!Vu(e)) throw Error(k(299));
    var n = !1,
        r = "",
        o = om;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ou(e, 1, !1, null, null, n, !1, r, o), e[Lt] = t.current, mo(e.nodeType === 8 ? e.parentNode : e), new Du(t)
};
Xe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
    return e = Pp(t), e = e === null ? null : e.stateNode, e
};
Xe.flushSync = function(e) {
    return In(e)
};
Xe.hydrate = function(e, t, n) {
    if (!ws(t)) throw Error(k(200));
    return Ss(null, e, t, !0, n)
};
Xe.hydrateRoot = function(e, t, n) {
    if (!Vu(e)) throw Error(k(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = om;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = rm(t, null, e, 1, n ? ? null, o, !1, i, s), e[Lt] = t.current, mo(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new xs(t)
};
Xe.render = function(e, t, n) {
    if (!ws(t)) throw Error(k(200));
    return Ss(null, e, t, !1, n)
};
Xe.unmountComponentAtNode = function(e) {
    if (!ws(e)) throw Error(k(40));
    return e._reactRootContainer ? (In(function() {
        Ss(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Lt] = null
        })
    }), !0) : !1
};
Xe.unstable_batchedUpdates = Ru;
Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ws(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return Ss(e, t, n, !1, r)
};
Xe.version = "18.3.1-next-f1338f8080-20240426";

function im() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(im)
    } catch (e) {
        console.error(e)
    }
}
im(), ip.exports = Xe;
var Ts = ip.exports;
const Sx = br(Ts);
var kd = Ts;
Pa.createRoot = kd.createRoot, Pa.hydrateRoot = kd.hydrateRoot;
var sm = {
        exports: {}
    },
    Tx = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Cx = Tx,
    bx = Cx;

function am() {}

function lm() {}
lm.resetWarningCache = am;
var Ex = function() {
    function e(r, o, i, s, a, l) {
        if (l !== bx) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: lm,
        resetWarningCache: am
    };
    return n.PropTypes = n, n
};
sm.exports = Ex();
var Px = sm.exports;
const te = br(Px);

function kx(e) {
    return e && typeof e == "object" && "default" in e ? e.default : e
}
var um = w,
    Nx = kx(um);

function Nd(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function jx(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Ax = !!(typeof window < "u" && window.document && window.document.createElement);

function Rx(e, t, n) {
    if (typeof e != "function") throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function") throw new Error("Expected handleStateChangeOnClient to be a function.");
    if (typeof n < "u" && typeof n != "function") throw new Error("Expected mapStateOnServer to either be undefined or a function.");

    function r(o) {
        return o.displayName || o.name || "Component"
    }
    return function(i) {
        if (typeof i != "function") throw new Error("Expected WrappedComponent to be a React component.");
        var s = [],
            a;

        function l() {
            a = e(s.map(function(c) {
                return c.props
            })), u.canUseDOM ? t(a) : n && (a = n(a))
        }
        var u = function(c) {
            jx(d, c);

            function d() {
                return c.apply(this, arguments) || this
            }
            d.peek = function() {
                return a
            }, d.rewind = function() {
                if (d.canUseDOM) throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
                var x = a;
                return a = void 0, s = [], x
            };
            var p = d.prototype;
            return p.UNSAFE_componentWillMount = function() {
                s.push(this), l()
            }, p.componentDidUpdate = function() {
                l()
            }, p.componentWillUnmount = function() {
                var x = s.indexOf(this);
                s.splice(x, 1), l()
            }, p.render = function() {
                return Nx.createElement(i, this.props)
            }, d
        }(um.PureComponent);
        return Nd(u, "displayName", "SideEffect(" + r(i) + ")"), Nd(u, "canUseDOM", Ax), u
    }
}
var Mx = Rx;
const Lx = br(Mx);
var Ix = typeof Element < "u",
    Ox = typeof Map == "function",
    _x = typeof Set == "function",
    Dx = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function Ti(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, o;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Ti(e[r], t[r])) return !1;
            return !0
        }
        var i;
        if (Ox && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Ti(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (_x && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (Dx && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
        if (Ix && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Ti(e[o[r]], t[o[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var Vx = function(t, n) {
    try {
        return Ti(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const Fx = br(Vx);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jd = Object.getOwnPropertySymbols,
    zx = Object.prototype.hasOwnProperty,
    Bx = Object.prototype.propertyIsEnumerable;

function Ux(e) {
    if (e == null) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
}

function $x() {
    try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function(i) {
            return t[i]
        });
        if (r.join("") !== "0123456789") return !1;
        var o = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(i) {
            o[i] = i
        }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst"
    } catch {
        return !1
    }
}
var Hx = $x() ? Object.assign : function(e, t) {
    for (var n, r = Ux(e), o, i = 1; i < arguments.length; i++) {
        n = Object(arguments[i]);
        for (var s in n) zx.call(n, s) && (r[s] = n[s]);
        if (jd) {
            o = jd(n);
            for (var a = 0; a < o.length; a++) Bx.call(n, o[a]) && (r[o[a]] = n[o[a]])
        }
    }
    return r
};
const Wx = br(Hx);
var jn = {
        BODY: "bodyAttributes",
        HTML: "htmlAttributes",
        TITLE: "titleAttributes"
    },
    F = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title"
    };
Object.keys(F).map(function(e) {
    return F[e]
});
var ne = {
        CHARSET: "charset",
        CSS_TEXT: "cssText",
        HREF: "href",
        HTTPEQUIV: "http-equiv",
        INNER_HTML: "innerHTML",
        ITEM_PROP: "itemprop",
        NAME: "name",
        PROPERTY: "property",
        REL: "rel",
        SRC: "src",
        TARGET: "target"
    },
    Qi = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    bo = {
        DEFAULT_TITLE: "defaultTitle",
        DEFER: "defer",
        ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
        ON_CHANGE_CLIENT_STATE: "onChangeClientState",
        TITLE_TEMPLATE: "titleTemplate"
    },
    Gx = Object.keys(Qi).reduce(function(e, t) {
        return e[Qi[t]] = t, e
    }, {}),
    Kx = [F.NOSCRIPT, F.SCRIPT, F.STYLE],
    dt = "data-react-helmet",
    Yx = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    Qx = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    Xx = function() {
        function e(t, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }
    }(),
    _e = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    qx = function(e, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    Ad = function(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n
    },
    Zx = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && (typeof t == "object" || typeof t == "function") ? t : e
    },
    xl = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
        return n === !1 ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    Jx = function(t) {
        var n = hr(t, F.TITLE),
            r = hr(t, bo.TITLE_TEMPLATE);
        if (r && n) return r.replace(/%s/g, function() {
            return Array.isArray(n) ? n.join("") : n
        });
        var o = hr(t, bo.DEFAULT_TITLE);
        return n || o || void 0
    },
    e1 = function(t) {
        return hr(t, bo.ON_CHANGE_CLIENT_STATE) || function() {}
    },
    da = function(t, n) {
        return n.filter(function(r) {
            return typeof r[t] < "u"
        }).map(function(r) {
            return r[t]
        }).reduce(function(r, o) {
            return _e({}, r, o)
        }, {})
    },
    t1 = function(t, n) {
        return n.filter(function(r) {
            return typeof r[F.BASE] < "u"
        }).map(function(r) {
            return r[F.BASE]
        }).reverse().reduce(function(r, o) {
            if (!r.length)
                for (var i = Object.keys(o), s = 0; s < i.length; s++) {
                    var a = i[s],
                        l = a.toLowerCase();
                    if (t.indexOf(l) !== -1 && o[l]) return r.concat(o)
                }
            return r
        }, [])
    },
    _r = function(t, n, r) {
        var o = {};
        return r.filter(function(i) {
            return Array.isArray(i[t]) ? !0 : (typeof i[t] < "u" && i1("Helmet: " + t + ' should be of type "Array". Instead found type "' + Yx(i[t]) + '"'), !1)
        }).map(function(i) {
            return i[t]
        }).reverse().reduce(function(i, s) {
            var a = {};
            s.filter(function(p) {
                for (var m = void 0, x = Object.keys(p), y = 0; y < x.length; y++) {
                    var T = x[y],
                        v = T.toLowerCase();
                    n.indexOf(v) !== -1 && !(m === ne.REL && p[m].toLowerCase() === "canonical") && !(v === ne.REL && p[v].toLowerCase() === "stylesheet") && (m = v), n.indexOf(T) !== -1 && (T === ne.INNER_HTML || T === ne.CSS_TEXT || T === ne.ITEM_PROP) && (m = T)
                }
                if (!m || !p[m]) return !1;
                var h = p[m].toLowerCase();
                return o[m] || (o[m] = {}), a[m] || (a[m] = {}), o[m][h] ? !1 : (a[m][h] = !0, !0)
            }).reverse().forEach(function(p) {
                return i.push(p)
            });
            for (var l = Object.keys(a), u = 0; u < l.length; u++) {
                var c = l[u],
                    d = Wx({}, o[c], a[c]);
                o[c] = d
            }
            return i
        }, []).reverse()
    },
    hr = function(t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r];
            if (o.hasOwnProperty(n)) return o[n]
        }
        return null
    },
    n1 = function(t) {
        return {
            baseTag: t1([ne.HREF, ne.TARGET], t),
            bodyAttributes: da(jn.BODY, t),
            defer: hr(t, bo.DEFER),
            encode: hr(t, bo.ENCODE_SPECIAL_CHARACTERS),
            htmlAttributes: da(jn.HTML, t),
            linkTags: _r(F.LINK, [ne.REL, ne.HREF], t),
            metaTags: _r(F.META, [ne.NAME, ne.CHARSET, ne.HTTPEQUIV, ne.PROPERTY, ne.ITEM_PROP], t),
            noscriptTags: _r(F.NOSCRIPT, [ne.INNER_HTML], t),
            onChangeClientState: e1(t),
            scriptTags: _r(F.SCRIPT, [ne.SRC, ne.INNER_HTML], t),
            styleTags: _r(F.STYLE, [ne.CSS_TEXT], t),
            title: Jx(t),
            titleAttributes: da(jn.TITLE, t)
        }
    },
    wl = function() {
        var e = Date.now();
        return function(t) {
            var n = Date.now();
            n - e > 16 ? (e = n, t(n)) : setTimeout(function() {
                wl(t)
            }, 0)
        }
    }(),
    Rd = function(t) {
        return clearTimeout(t)
    },
    r1 = typeof window < "u" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || wl : global.requestAnimationFrame || wl,
    o1 = typeof window < "u" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || Rd : global.cancelAnimationFrame || Rd,
    i1 = function(t) {
        return console && typeof console.warn == "function" && console.warn(t)
    },
    Dr = null,
    s1 = function(t) {
        Dr && o1(Dr), t.defer ? Dr = r1(function() {
            Md(t, function() {
                Dr = null
            })
        }) : (Md(t), Dr = null)
    },
    Md = function(t, n) {
        var r = t.baseTag,
            o = t.bodyAttributes,
            i = t.htmlAttributes,
            s = t.linkTags,
            a = t.metaTags,
            l = t.noscriptTags,
            u = t.onChangeClientState,
            c = t.scriptTags,
            d = t.styleTags,
            p = t.title,
            m = t.titleAttributes;
        Sl(F.BODY, o), Sl(F.HTML, i), a1(p, m);
        var x = {
                baseTag: Wn(F.BASE, r),
                linkTags: Wn(F.LINK, s),
                metaTags: Wn(F.META, a),
                noscriptTags: Wn(F.NOSCRIPT, l),
                scriptTags: Wn(F.SCRIPT, c),
                styleTags: Wn(F.STYLE, d)
            },
            y = {},
            T = {};
        Object.keys(x).forEach(function(v) {
            var h = x[v],
                g = h.newTags,
                S = h.oldTags;
            g.length && (y[v] = g), S.length && (T[v] = x[v].oldTags)
        }), n && n(), u(t, y, T)
    },
    cm = function(t) {
        return Array.isArray(t) ? t.join("") : t
    },
    a1 = function(t, n) {
        typeof t < "u" && document.title !== t && (document.title = cm(t)), Sl(F.TITLE, n)
    },
    Sl = function(t, n) {
        var r = document.getElementsByTagName(t)[0];
        if (r) {
            for (var o = r.getAttribute(dt), i = o ? o.split(",") : [], s = [].concat(i), a = Object.keys(n), l = 0; l < a.length; l++) {
                var u = a[l],
                    c = n[u] || "";
                r.getAttribute(u) !== c && r.setAttribute(u, c), i.indexOf(u) === -1 && i.push(u);
                var d = s.indexOf(u);
                d !== -1 && s.splice(d, 1)
            }
            for (var p = s.length - 1; p >= 0; p--) r.removeAttribute(s[p]);
            i.length === s.length ? r.removeAttribute(dt) : r.getAttribute(dt) !== a.join(",") && r.setAttribute(dt, a.join(","))
        }
    },
    Wn = function(t, n) {
        var r = document.head || document.querySelector(F.HEAD),
            o = r.querySelectorAll(t + "[" + dt + "]"),
            i = Array.prototype.slice.call(o),
            s = [],
            a = void 0;
        return n && n.length && n.forEach(function(l) {
            var u = document.createElement(t);
            for (var c in l)
                if (l.hasOwnProperty(c))
                    if (c === ne.INNER_HTML) u.innerHTML = l.innerHTML;
                    else if (c === ne.CSS_TEXT) u.styleSheet ? u.styleSheet.cssText = l.cssText : u.appendChild(document.createTextNode(l.cssText));
            else {
                var d = typeof l[c] > "u" ? "" : l[c];
                u.setAttribute(c, d)
            }
            u.setAttribute(dt, "true"), i.some(function(p, m) {
                return a = m, u.isEqualNode(p)
            }) ? i.splice(a, 1) : s.push(u)
        }), i.forEach(function(l) {
            return l.parentNode.removeChild(l)
        }), s.forEach(function(l) {
            return r.appendChild(l)
        }), {
            oldTags: i,
            newTags: s
        }
    },
    dm = function(t) {
        return Object.keys(t).reduce(function(n, r) {
            var o = typeof t[r] < "u" ? r + '="' + t[r] + '"' : "" + r;
            return n ? n + " " + o : o
        }, "")
    },
    l1 = function(t, n, r, o) {
        var i = dm(r),
            s = cm(n);
        return i ? "<" + t + " " + dt + '="true" ' + i + ">" + xl(s, o) + "</" + t + ">" : "<" + t + " " + dt + '="true">' + xl(s, o) + "</" + t + ">"
    },
    u1 = function(t, n, r) {
        return n.reduce(function(o, i) {
            var s = Object.keys(i).filter(function(u) {
                    return !(u === ne.INNER_HTML || u === ne.CSS_TEXT)
                }).reduce(function(u, c) {
                    var d = typeof i[c] > "u" ? c : c + '="' + xl(i[c], r) + '"';
                    return u ? u + " " + d : d
                }, ""),
                a = i.innerHTML || i.cssText || "",
                l = Kx.indexOf(t) === -1;
            return o + "<" + t + " " + dt + '="true" ' + s + (l ? "/>" : ">" + a + "</" + t + ">")
        }, "")
    },
    fm = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, o) {
            return r[Qi[o] || o] = t[o], r
        }, n)
    },
    c1 = function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Object.keys(t).reduce(function(r, o) {
            return r[Gx[o] || o] = t[o], r
        }, n)
    },
    d1 = function(t, n, r) {
        var o, i = (o = {
                key: n
            }, o[dt] = !0, o),
            s = fm(r, i);
        return [z.createElement(F.TITLE, s, n)]
    },
    f1 = function(t, n) {
        return n.map(function(r, o) {
            var i, s = (i = {
                key: o
            }, i[dt] = !0, i);
            return Object.keys(r).forEach(function(a) {
                var l = Qi[a] || a;
                if (l === ne.INNER_HTML || l === ne.CSS_TEXT) {
                    var u = r.innerHTML || r.cssText;
                    s.dangerouslySetInnerHTML = {
                        __html: u
                    }
                } else s[l] = r[a]
            }), z.createElement(t, s)
        })
    },
    Ct = function(t, n, r) {
        switch (t) {
            case F.TITLE:
                return {
                    toComponent: function() {
                        return d1(t, n.title, n.titleAttributes)
                    },
                    toString: function() {
                        return l1(t, n.title, n.titleAttributes, r)
                    }
                };
            case jn.BODY:
            case jn.HTML:
                return {
                    toComponent: function() {
                        return fm(n)
                    },
                    toString: function() {
                        return dm(n)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return f1(t, n)
                    },
                    toString: function() {
                        return u1(t, n, r)
                    }
                }
        }
    },
    pm = function(t) {
        var n = t.baseTag,
            r = t.bodyAttributes,
            o = t.encode,
            i = t.htmlAttributes,
            s = t.linkTags,
            a = t.metaTags,
            l = t.noscriptTags,
            u = t.scriptTags,
            c = t.styleTags,
            d = t.title,
            p = d === void 0 ? "" : d,
            m = t.titleAttributes;
        return {
            base: Ct(F.BASE, n, o),
            bodyAttributes: Ct(jn.BODY, r, o),
            htmlAttributes: Ct(jn.HTML, i, o),
            link: Ct(F.LINK, s, o),
            meta: Ct(F.META, a, o),
            noscript: Ct(F.NOSCRIPT, l, o),
            script: Ct(F.SCRIPT, u, o),
            style: Ct(F.STYLE, c, o),
            title: Ct(F.TITLE, {
                title: p,
                titleAttributes: m
            }, o)
        }
    },
    p1 = function(t) {
        var n, r;
        return r = n = function(o) {
            qx(i, o);

            function i() {
                return Qx(this, i), Zx(this, o.apply(this, arguments))
            }
            return i.prototype.shouldComponentUpdate = function(a) {
                return !Fx(this.props, a)
            }, i.prototype.mapNestedChildrenToProps = function(a, l) {
                if (!l) return null;
                switch (a.type) {
                    case F.SCRIPT:
                    case F.NOSCRIPT:
                        return {
                            innerHTML: l
                        };
                    case F.STYLE:
                        return {
                            cssText: l
                        }
                }
                throw new Error("<" + a.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }, i.prototype.flattenArrayTypeChildren = function(a) {
                var l, u = a.child,
                    c = a.arrayTypeChildren,
                    d = a.newChildProps,
                    p = a.nestedChildren;
                return _e({}, c, (l = {}, l[u.type] = [].concat(c[u.type] || [], [_e({}, d, this.mapNestedChildrenToProps(u, p))]), l))
            }, i.prototype.mapObjectTypeChildren = function(a) {
                var l, u, c = a.child,
                    d = a.newProps,
                    p = a.newChildProps,
                    m = a.nestedChildren;
                switch (c.type) {
                    case F.TITLE:
                        return _e({}, d, (l = {}, l[c.type] = m, l.titleAttributes = _e({}, p), l));
                    case F.BODY:
                        return _e({}, d, {
                            bodyAttributes: _e({}, p)
                        });
                    case F.HTML:
                        return _e({}, d, {
                            htmlAttributes: _e({}, p)
                        })
                }
                return _e({}, d, (u = {}, u[c.type] = _e({}, p), u))
            }, i.prototype.mapArrayTypeChildrenToProps = function(a, l) {
                var u = _e({}, l);
                return Object.keys(a).forEach(function(c) {
                    var d;
                    u = _e({}, u, (d = {}, d[c] = a[c], d))
                }), u
            }, i.prototype.warnOnInvalidChildren = function(a, l) {
                return !0
            }, i.prototype.mapChildrenToProps = function(a, l) {
                var u = this,
                    c = {};
                return z.Children.forEach(a, function(d) {
                    if (!(!d || !d.props)) {
                        var p = d.props,
                            m = p.children,
                            x = Ad(p, ["children"]),
                            y = c1(x);
                        switch (u.warnOnInvalidChildren(d, m), d.type) {
                            case F.LINK:
                            case F.META:
                            case F.NOSCRIPT:
                            case F.SCRIPT:
                            case F.STYLE:
                                c = u.flattenArrayTypeChildren({
                                    child: d,
                                    arrayTypeChildren: c,
                                    newChildProps: y,
                                    nestedChildren: m
                                });
                                break;
                            default:
                                l = u.mapObjectTypeChildren({
                                    child: d,
                                    newProps: l,
                                    newChildProps: y,
                                    nestedChildren: m
                                });
                                break
                        }
                    }
                }), l = this.mapArrayTypeChildrenToProps(c, l), l
            }, i.prototype.render = function() {
                var a = this.props,
                    l = a.children,
                    u = Ad(a, ["children"]),
                    c = _e({}, u);
                return l && (c = this.mapChildrenToProps(l, c)), z.createElement(t, c)
            }, Xx(i, null, [{
                key: "canUseDOM",
                set: function(a) {
                    t.canUseDOM = a
                }
            }]), i
        }(z.Component), n.propTypes = {
            base: te.object,
            bodyAttributes: te.object,
            children: te.oneOfType([te.arrayOf(te.node), te.node]),
            defaultTitle: te.string,
            defer: te.bool,
            encodeSpecialCharacters: te.bool,
            htmlAttributes: te.object,
            link: te.arrayOf(te.object),
            meta: te.arrayOf(te.object),
            noscript: te.arrayOf(te.object),
            onChangeClientState: te.func,
            script: te.arrayOf(te.object),
            style: te.arrayOf(te.object),
            title: te.string,
            titleAttributes: te.object,
            titleTemplate: te.string
        }, n.defaultProps = {
            defer: !0,
            encodeSpecialCharacters: !0
        }, n.peek = t.peek, n.rewind = function() {
            var o = t.rewind();
            return o || (o = pm({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            })), o
        }, r
    },
    h1 = function() {
        return null
    },
    m1 = Lx(n1, s1, pm)(h1),
    Tl = p1(m1);
Tl.renderStatic = Tl.rewind;

function hm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = hm(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function mm() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = hm(e)) && (r && (r += " "), r += t);
    return r
}

function g1() {
    for (var e = 0, t, n, r = ""; e < arguments.length;)(t = arguments[e++]) && (n = gm(t)) && (r && (r += " "), r += n);
    return r
}

function gm(e) {
    if (typeof e == "string") return e;
    for (var t, n = "", r = 0; r < e.length; r++) e[r] && (t = gm(e[r])) && (n && (n += " "), n += t);
    return n
}
var Fu = "-";

function v1(e) {
    var t = x1(e),
        n = e.conflictingClassGroups,
        r = e.conflictingClassGroupModifiers,
        o = r === void 0 ? {} : r;

    function i(a) {
        var l = a.split(Fu);
        return l[0] === "" && l.length !== 1 && l.shift(), vm(l, t) || y1(a)
    }

    function s(a, l) {
        var u = n[a] || [];
        return l && o[a] ? [].concat(u, o[a]) : u
    }
    return {
        getClassGroupId: i,
        getConflictingClassGroupIds: s
    }
}

function vm(e, t) {
    var s;
    if (e.length === 0) return t.classGroupId;
    var n = e[0],
        r = t.nextPart.get(n),
        o = r ? vm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length !== 0) {
        var i = e.join(Fu);
        return (s = t.validators.find(function(a) {
            var l = a.validator;
            return l(i)
        })) == null ? void 0 : s.classGroupId
    }
}
var Ld = /^\[(.+)\]$/;

function y1(e) {
    if (Ld.test(e)) {
        var t = Ld.exec(e)[1],
            n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function x1(e) {
    var t = e.theme,
        n = e.prefix,
        r = {
            nextPart: new Map,
            validators: []
        },
        o = S1(Object.entries(e.classGroups), n);
    return o.forEach(function(i) {
        var s = i[0],
            a = i[1];
        Cl(a, r, s, t)
    }), r
}

function Cl(e, t, n, r) {
    e.forEach(function(o) {
        if (typeof o == "string") {
            var i = o === "" ? t : Id(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (w1(o)) {
                Cl(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function(s) {
            var a = s[0],
                l = s[1];
            Cl(l, Id(t, a), n, r)
        })
    })
}

function Id(e, t) {
    var n = e;
    return t.split(Fu).forEach(function(r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    }), n
}

function w1(e) {
    return e.isThemeGetter
}

function S1(e, t) {
    return t ? e.map(function(n) {
        var r = n[0],
            o = n[1],
            i = o.map(function(s) {
                return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
                    var l = a[0],
                        u = a[1];
                    return [t + l, u]
                })) : s
            });
        return [r, i]
    }) : e
}

function T1(e) {
    if (e < 1) return {
        get: function() {},
        set: function() {}
    };
    var t = 0,
        n = new Map,
        r = new Map;

    function o(i, s) {
        n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get: function(s) {
            var a = n.get(s);
            if (a !== void 0) return a;
            if ((a = r.get(s)) !== void 0) return o(s, a), a
        },
        set: function(s, a) {
            n.has(s) ? n.set(s, a) : o(s, a)
        }
    }
}
var ym = "!";

function C1(e) {
    var t = e.separator || ":",
        n = t.length === 1,
        r = t[0],
        o = t.length;
    return function(s) {
        for (var a = [], l = 0, u = 0, c, d = 0; d < s.length; d++) {
            var p = s[d];
            if (l === 0) {
                if (p === r && (n || s.slice(d, d + o) === t)) {
                    a.push(s.slice(u, d)), u = d + o;
                    continue
                }
                if (p === "/") {
                    c = d;
                    continue
                }
            }
            p === "[" ? l++ : p === "]" && l--
        }
        var m = a.length === 0 ? s : s.substring(u),
            x = m.startsWith(ym),
            y = x ? m.substring(1) : m,
            T = c && c > u ? c - u : void 0;
        return {
            modifiers: a,
            hasImportantModifier: x,
            baseClassName: y,
            maybePostfixModifierPosition: T
        }
    }
}

function b1(e) {
    if (e.length <= 1) return e;
    var t = [],
        n = [];
    return e.forEach(function(r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r)
    }), t.push.apply(t, n.sort()), t
}

function E1(e) {
    return {
        cache: T1(e.cacheSize),
        splitModifiers: C1(e),
        ...v1(e)
    }
}
var P1 = /\s+/;

function k1(e, t) {
    var n = t.splitModifiers,
        r = t.getClassGroupId,
        o = t.getConflictingClassGroupIds,
        i = new Set;
    return e.trim().split(P1).map(function(s) {
        var a = n(s),
            l = a.modifiers,
            u = a.hasImportantModifier,
            c = a.baseClassName,
            d = a.maybePostfixModifierPosition,
            p = r(d ? c.substring(0, d) : c),
            m = !!d;
        if (!p) {
            if (!d) return {
                isTailwindClass: !1,
                originalClassName: s
            };
            if (p = r(c), !p) return {
                isTailwindClass: !1,
                originalClassName: s
            };
            m = !1
        }
        var x = b1(l).join(":"),
            y = u ? x + ym : x;
        return {
            isTailwindClass: !0,
            modifierId: y,
            classGroupId: p,
            originalClassName: s,
            hasPostfixModifier: m
        }
    }).reverse().filter(function(s) {
        if (!s.isTailwindClass) return !0;
        var a = s.modifierId,
            l = s.classGroupId,
            u = s.hasPostfixModifier,
            c = a + l;
        return i.has(c) ? !1 : (i.add(c), o(l, u).forEach(function(d) {
            return i.add(a + d)
        }), !0)
    }).reverse().map(function(s) {
        return s.originalClassName
    }).join(" ")
}

function N1() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r, o, i, s = a;

    function a(u) {
        var c = t[0],
            d = t.slice(1),
            p = d.reduce(function(m, x) {
                return x(m)
            }, c());
        return r = E1(p), o = r.cache.get, i = r.cache.set, s = l, l(u)
    }

    function l(u) {
        var c = o(u);
        if (c) return c;
        var d = k1(u, r);
        return i(u, d), d
    }
    return function() {
        return s(g1.apply(null, arguments))
    }
}

function X(e) {
    var t = function(r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0, t
}
var xm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    j1 = /^\d+\/\d+$/,
    A1 = new Set(["px", "full", "screen"]),
    R1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    M1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    L1 = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

function at(e) {
    return En(e) || A1.has(e) || j1.test(e) || bl(e)
}

function bl(e) {
    return zn(e, "length", F1)
}

function I1(e) {
    return zn(e, "size", wm)
}

function O1(e) {
    return zn(e, "position", wm)
}

function _1(e) {
    return zn(e, "url", z1)
}

function ri(e) {
    return zn(e, "number", En)
}

function En(e) {
    return !Number.isNaN(Number(e))
}

function D1(e) {
    return e.endsWith("%") && En(e.slice(0, -1))
}

function Vr(e) {
    return Od(e) || zn(e, "number", Od)
}

function U(e) {
    return xm.test(e)
}

function Fr() {
    return !0
}

function zt(e) {
    return R1.test(e)
}

function V1(e) {
    return zn(e, "", B1)
}

function zn(e, t, n) {
    var r = xm.exec(e);
    return r ? r[1] ? r[1] === t : n(r[2]) : !1
}

function F1(e) {
    return M1.test(e)
}

function wm() {
    return !1
}

function z1(e) {
    return e.startsWith("url(")
}

function Od(e) {
    return Number.isInteger(Number(e))
}

function B1(e) {
    return L1.test(e)
}

function U1() {
    var e = X("colors"),
        t = X("spacing"),
        n = X("blur"),
        r = X("brightness"),
        o = X("borderColor"),
        i = X("borderRadius"),
        s = X("borderSpacing"),
        a = X("borderWidth"),
        l = X("contrast"),
        u = X("grayscale"),
        c = X("hueRotate"),
        d = X("invert"),
        p = X("gap"),
        m = X("gradientColorStops"),
        x = X("gradientColorStopPositions"),
        y = X("inset"),
        T = X("margin"),
        v = X("opacity"),
        h = X("padding"),
        g = X("saturate"),
        S = X("scale"),
        C = X("sepia"),
        E = X("skew"),
        b = X("space"),
        P = X("translate"),
        A = function() {
            return ["auto", "contain", "none"]
        },
        R = function() {
            return ["auto", "hidden", "clip", "visible", "scroll"]
        },
        G = function() {
            return ["auto", U, t]
        },
        _ = function() {
            return [U, t]
        },
        oe = function() {
            return ["", at]
        },
        M = function() {
            return ["auto", En, U]
        },
        ee = function() {
            return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
        },
        $ = function() {
            return ["solid", "dashed", "dotted", "double", "none"]
        },
        de = function() {
            return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
        },
        N = function() {
            return ["start", "end", "center", "between", "around", "evenly", "stretch"]
        },
        L = function() {
            return ["", "0", U]
        },
        V = function() {
            return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
        },
        O = function() {
            return [En, ri]
        },
        H = function() {
            return [En, U]
        };
    return {
        cacheSize: 500,
        theme: {
            colors: [Fr],
            spacing: [at],
            blur: ["none", "", zt, U],
            brightness: O(),
            borderColor: [e],
            borderRadius: ["none", "", "full", zt, U],
            borderSpacing: _(),
            borderWidth: oe(),
            contrast: O(),
            grayscale: L(),
            hueRotate: H(),
            invert: L(),
            gap: _(),
            gradientColorStops: [e],
            gradientColorStopPositions: [D1, bl],
            inset: G(),
            margin: G(),
            opacity: O(),
            padding: _(),
            saturate: O(),
            scale: O(),
            sepia: L(),
            skew: H(),
            space: _(),
            translate: _()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", U]
            }],
            container: ["container"],
            columns: [{
                columns: [zt]
            }],
            "break-after": [{
                "break-after": V()
            }],
            "break-before": [{
                "break-before": V()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(ee(), [U])
            }],
            overflow: [{
                overflow: R()
            }],
            "overflow-x": [{
                "overflow-x": R()
            }],
            "overflow-y": [{
                "overflow-y": R()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Vr]
            }],
            basis: [{
                basis: G()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", U]
            }],
            grow: [{
                grow: L()
            }],
            shrink: [{
                shrink: L()
            }],
            order: [{
                order: ["first", "last", "none", Vr]
            }],
            "grid-cols": [{
                "grid-cols": [Fr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Vr]
                }, U]
            }],
            "col-start": [{
                "col-start": M()
            }],
            "col-end": [{
                "col-end": M()
            }],
            "grid-rows": [{
                "grid-rows": [Fr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Vr]
                }, U]
            }],
            "row-start": [{
                "row-start": M()
            }],
            "row-end": [{
                "row-end": M()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", U]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", U]
            }],
            gap: [{
                gap: [p]
            }],
            "gap-x": [{
                "gap-x": [p]
            }],
            "gap-y": [{
                "gap-y": [p]
            }],
            "justify-content": [{
                justify: ["normal"].concat(N())
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal"].concat(N(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(N(), ["baseline"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [h]
            }],
            px: [{
                px: [h]
            }],
            py: [{
                py: [h]
            }],
            ps: [{
                ps: [h]
            }],
            pe: [{
                pe: [h]
            }],
            pt: [{
                pt: [h]
            }],
            pr: [{
                pr: [h]
            }],
            pb: [{
                pb: [h]
            }],
            pl: [{
                pl: [h]
            }],
            m: [{
                m: [T]
            }],
            mx: [{
                mx: [T]
            }],
            my: [{
                my: [T]
            }],
            ms: [{
                ms: [T]
            }],
            me: [{
                me: [T]
            }],
            mt: [{
                mt: [T]
            }],
            mr: [{
                mr: [T]
            }],
            mb: [{
                mb: [T]
            }],
            ml: [{
                ml: [T]
            }],
            "space-x": [{
                "space-x": [b]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [b]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", U, t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", U, at]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [zt]
                }, zt, U]
            }],
            h: [{
                h: [U, t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", U, at]
            }],
            "max-h": [{
                "max-h": [U, t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", zt, bl]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ri]
            }],
            "font-family": [{
                font: [Fr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
            }],
            "line-clamp": [{
                "line-clamp": ["none", En, ri]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, at]
            }],
            "list-image": [{
                "list-image": ["none", U]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", U]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat($(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", at]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", U, at]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: _()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", U]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(ee(), [O1])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", I1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, _1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [m]
            }],
            "gradient-via": [{
                via: [m]
            }],
            "gradient-to": [{
                to: [m]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [].concat($(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat($())
            }],
            "outline-offset": [{
                "outline-offset": [U, at]
            }],
            "outline-w": [{
                outline: [at]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: oe()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [at]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", zt, V1]
            }],
            "shadow-color": [{
                shadow: [Fr]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": de()
            }],
            "bg-blend": [{
                "bg-blend": de()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", zt, U]
            }],
            grayscale: [{
                grayscale: [u]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [g]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [u]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [g]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [s]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [s]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [s]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
            }],
            duration: [{
                duration: H()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", U]
            }],
            delay: [{
                delay: H()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", U]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [Vr, U]
            }],
            "translate-x": [{
                "translate-x": [P]
            }],
            "translate-y": [{
                "translate-y": [P]
            }],
            "skew-x": [{
                "skew-x": [E]
            }],
            "skew-y": [{
                "skew-y": [E]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": _()
            }],
            "scroll-mx": [{
                "scroll-mx": _()
            }],
            "scroll-my": [{
                "scroll-my": _()
            }],
            "scroll-ms": [{
                "scroll-ms": _()
            }],
            "scroll-me": [{
                "scroll-me": _()
            }],
            "scroll-mt": [{
                "scroll-mt": _()
            }],
            "scroll-mr": [{
                "scroll-mr": _()
            }],
            "scroll-mb": [{
                "scroll-mb": _()
            }],
            "scroll-ml": [{
                "scroll-ml": _()
            }],
            "scroll-p": [{
                "scroll-p": _()
            }],
            "scroll-px": [{
                "scroll-px": _()
            }],
            "scroll-py": [{
                "scroll-py": _()
            }],
            "scroll-ps": [{
                "scroll-ps": _()
            }],
            "scroll-pe": [{
                "scroll-pe": _()
            }],
            "scroll-pt": [{
                "scroll-pt": _()
            }],
            "scroll-pr": [{
                "scroll-pr": _()
            }],
            "scroll-pb": [{
                "scroll-pb": _()
            }],
            "scroll-pl": [{
                "scroll-pl": _()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", U]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [at, ri]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
var $1 = N1(U1);

function Tt(...e) {
    return $1(mm(e))
}

function Re(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function _d(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function Cs(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = _d(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : _d(e[o], null)
            }
        }
    }
}

function _t(...e) {
    return w.useCallback(Cs(...e), e)
}

function bs(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = w.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = d => {
            var v;
            const {
                scope: p,
                children: m,
                ...x
            } = d, y = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[l]) || a, T = w.useMemo(() => x, Object.values(x));
            return f.jsx(y.Provider, {
                value: T,
                children: m
            })
        };
        u.displayName = i + "Provider";

        function c(d, p) {
            var y;
            const m = ((y = p == null ? void 0 : p[e]) == null ? void 0 : y[l]) || a,
                x = w.useContext(m);
            if (x) return x;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => w.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return w.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, H1(o, ...t)]
}

function H1(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(i)[`__scope${u}`];
                return { ...a,
                    ...d
                }
            }, {});
            return w.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function Dd(e) {
    const t = W1(e),
        n = w.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, a = w.Children.toArray(i), l = a.find(K1);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
                return f.jsx(t, { ...s,
                    ref: o,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return f.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function W1(e) {
    const t = w.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (w.isValidElement(o)) {
            const s = Q1(o),
                a = Y1(i, o.props);
            return o.type !== w.Fragment && (a.ref = r ? Cs(r, s) : s), w.cloneElement(o, a)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var G1 = Symbol("radix.slottable");

function K1(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === G1
}

function Y1(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Q1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function Sm(e) {
    const t = e + "CollectionProvider",
        [n, r] = bs(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = y => {
            const {
                scope: T,
                children: v
            } = y, h = z.useRef(null), g = z.useRef(new Map).current;
            return f.jsx(o, {
                scope: T,
                itemMap: g,
                collectionRef: h,
                children: v
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = Dd(a),
        u = z.forwardRef((y, T) => {
            const {
                scope: v,
                children: h
            } = y, g = i(a, v), S = _t(T, g.collectionRef);
            return f.jsx(l, {
                ref: S,
                children: h
            })
        });
    u.displayName = a;
    const c = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        p = Dd(c),
        m = z.forwardRef((y, T) => {
            const {
                scope: v,
                children: h,
                ...g
            } = y, S = z.useRef(null), C = _t(T, S), E = i(c, v);
            return z.useEffect(() => (E.itemMap.set(S, {
                ref: S,
                ...g
            }), () => void E.itemMap.delete(S))), f.jsx(p, {
                [d]: "",
                ref: C,
                children: h
            })
        });
    m.displayName = c;

    function x(y) {
        const T = i(e + "CollectionConsumer", y);
        return z.useCallback(() => {
            const h = T.collectionRef.current;
            if (!h) return [];
            const g = Array.from(h.querySelectorAll(`[${d}]`));
            return Array.from(T.itemMap.values()).sort((E, b) => g.indexOf(E.ref.current) - g.indexOf(b.ref.current))
        }, [T.collectionRef, T.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: m
    }, x, r]
}

function X1(e) {
    const t = q1(e),
        n = w.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, a = w.Children.toArray(i), l = a.find(J1);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
                return f.jsx(t, { ...s,
                    ref: o,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return f.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function q1(e) {
    const t = w.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (w.isValidElement(o)) {
            const s = tw(o),
                a = ew(i, o.props);
            return o.type !== w.Fragment && (a.ref = r ? Cs(r, s) : s), w.cloneElement(o, a)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Z1 = Symbol("radix.slottable");

function J1(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Z1
}

function ew(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function tw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var nw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Oe = nw.reduce((e, t) => {
        const n = X1(`Primitive.${t}`),
            r = w.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...a
                } = o, l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(l, { ...a,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function Tm(e, t) {
    e && Ts.flushSync(() => e.dispatchEvent(t))
}

function On(e) {
    const t = w.useRef(e);
    return w.useEffect(() => {
        t.current = e
    }), w.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function rw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e);
    w.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var ow = "DismissableLayer",
    El = "dismissableLayer.update",
    iw = "dismissableLayer.pointerDownOutside",
    sw = "dismissableLayer.focusOutside",
    Vd, Cm = w.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    bm = w.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = w.useContext(Cm), [c, d] = w.useState(null), p = (c == null ? void 0 : c.ownerDocument) ? ? (globalThis == null ? void 0 : globalThis.document), [, m] = w.useState({}), x = _t(t, b => d(b)), y = Array.from(u.layers), [T] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = y.indexOf(T), h = c ? y.indexOf(c) : -1, g = u.layersWithOutsidePointerEventsDisabled.size > 0, S = h >= v, C = lw(b => {
            const P = b.target,
                A = [...u.branches].some(R => R.contains(P));
            !S || A || (o == null || o(b), s == null || s(b), b.defaultPrevented || a == null || a())
        }, p), E = uw(b => {
            const P = b.target;
            [...u.branches].some(R => R.contains(P)) || (i == null || i(b), s == null || s(b), b.defaultPrevented || a == null || a())
        }, p);
        return rw(b => {
            h === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && a && (b.preventDefault(), a()))
        }, p), w.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vd = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Fd(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Vd)
            }
        }, [c, p, n, u]), w.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Fd())
        }, [c, u]), w.useEffect(() => {
            const b = () => m({});
            return document.addEventListener(El, b), () => document.removeEventListener(El, b)
        }, []), f.jsx(Oe.div, { ...l,
            ref: x,
            style: {
                pointerEvents: g ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: Re(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: Re(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: Re(e.onPointerDownCapture, C.onPointerDownCapture)
        })
    });
bm.displayName = ow;
var aw = "DismissableLayerBranch",
    Em = w.forwardRef((e, t) => {
        const n = w.useContext(Cm),
            r = w.useRef(null),
            o = _t(t, r);
        return w.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), f.jsx(Oe.div, { ...e,
            ref: o
        })
    });
Em.displayName = aw;

function lw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e),
        r = w.useRef(!1),
        o = w.useRef(() => {});
    return w.useEffect(() => {
        const i = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        Pm(iw, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function uw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = On(e),
        r = w.useRef(!1);
    return w.useEffect(() => {
        const o = i => {
            i.target && !r.current && Pm(sw, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Fd() {
    const e = new CustomEvent(El);
    document.dispatchEvent(e)
}

function Pm(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Tm(o, i) : o.dispatchEvent(i)
}
var cw = bm,
    dw = Em,
    _n = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
    fw = "Portal",
    km = w.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, i] = w.useState(!1);
        _n(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? Sx.createPortal(f.jsx(Oe.div, { ...r,
            ref: t
        }), s) : null
    });
km.displayName = fw;

function pw(e, t) {
    return w.useReducer((n, r) => t[n][r] ? ? n, e)
}
var zu = e => {
    const {
        present: t,
        children: n
    } = e, r = hw(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : w.Children.only(n), i = _t(r.ref, mw(o));
    return typeof n == "function" || r.isPresent ? w.cloneElement(o, {
        ref: i
    }) : null
};
zu.displayName = "Presence";

function hw(e) {
    const [t, n] = w.useState(), r = w.useRef(null), o = w.useRef(e), i = w.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = pw(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return w.useEffect(() => {
        const u = oi(r.current);
        i.current = a === "mounted" ? u : "none"
    }, [a]), _n(() => {
        const u = r.current,
            c = o.current;
        if (c !== e) {
            const p = i.current,
                m = oi(u);
            e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), _n(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ? ? window,
                d = m => {
                    const y = oi(r.current).includes(CSS.escape(m.animationName));
                    if (m.target === t && y && (l("ANIMATION_END"), !o.current)) {
                        const T = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = T)
                        })
                    }
                },
                p = m => {
                    m.target === t && (i.current = oi(r.current))
                };
            return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: w.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function oi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function mw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var gw = Yl[" useInsertionEffect ".trim().toString()] || _n;

function Es({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, i, s] = vw({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : o; {
        const c = w.useRef(e !== void 0);
        w.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = a
        }, [a, r])
    }
    const u = w.useCallback(c => {
        var d;
        if (a) {
            const p = yw(c) ? c(e) : c;
            p !== e && ((d = s.current) == null || d.call(s, p))
        } else i(c)
    }, [a, e, i, s]);
    return [l, u]
}

function vw({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = w.useState(e), o = w.useRef(n), i = w.useRef(t);
    return gw(() => {
        i.current = t
    }, [t]), w.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function yw(e) {
    return typeof e == "function"
}
var xw = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    ww = "VisuallyHidden",
    Bu = w.forwardRef((e, t) => f.jsx(Oe.span, { ...e,
        ref: t,
        style: { ...xw,
            ...e.style
        }
    }));
Bu.displayName = ww;
var Uu = "ToastProvider",
    [$u, Sw, Tw] = Sm("Toast"),
    [Nm, dP] = bs("Toast", [Tw]),
    [Cw, Ps] = Nm(Uu),
    jm = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [a, l] = w.useState(null), [u, c] = w.useState(0), d = w.useRef(!1), p = w.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Uu}\`. Expected non-empty \`string\`.`), f.jsx($u.Provider, {
            scope: t,
            children: f.jsx(Cw, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: w.useCallback(() => c(m => m + 1), []),
                onToastRemove: w.useCallback(() => c(m => m - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: p,
                children: s
            })
        })
    };
jm.displayName = Uu;
var Am = "ToastViewport",
    bw = ["F8"],
    Pl = "toast.viewportPause",
    kl = "toast.viewportResume",
    Rm = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = bw,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = Ps(Am, n), a = Sw(n), l = w.useRef(null), u = w.useRef(null), c = w.useRef(null), d = w.useRef(null), p = _t(t, d, s.onViewportChange), m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
        w.useEffect(() => {
            const T = v => {
                var g;
                r.length !== 0 && r.every(S => v[S] || v.code === S) && ((g = d.current) == null || g.focus())
            };
            return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T)
        }, [r]), w.useEffect(() => {
            const T = l.current,
                v = d.current;
            if (x && T && v) {
                const h = () => {
                        if (!s.isClosePausedRef.current) {
                            const E = new CustomEvent(Pl);
                            v.dispatchEvent(E), s.isClosePausedRef.current = !0
                        }
                    },
                    g = () => {
                        if (s.isClosePausedRef.current) {
                            const E = new CustomEvent(kl);
                            v.dispatchEvent(E), s.isClosePausedRef.current = !1
                        }
                    },
                    S = E => {
                        !T.contains(E.relatedTarget) && g()
                    },
                    C = () => {
                        T.contains(document.activeElement) || g()
                    };
                return T.addEventListener("focusin", h), T.addEventListener("focusout", S), T.addEventListener("pointermove", h), T.addEventListener("pointerleave", C), window.addEventListener("blur", h), window.addEventListener("focus", g), () => {
                    T.removeEventListener("focusin", h), T.removeEventListener("focusout", S), T.removeEventListener("pointermove", h), T.removeEventListener("pointerleave", C), window.removeEventListener("blur", h), window.removeEventListener("focus", g)
                }
            }
        }, [x, s.isClosePausedRef]);
        const y = w.useCallback(({
            tabbingDirection: T
        }) => {
            const h = a().map(g => {
                const S = g.ref.current,
                    C = [S, ...Dw(S)];
                return T === "forwards" ? C : C.reverse()
            });
            return (T === "forwards" ? h.reverse() : h).flat()
        }, [a]);
        return w.useEffect(() => {
            const T = d.current;
            if (T) {
                const v = h => {
                    var C, E, b;
                    const g = h.altKey || h.ctrlKey || h.metaKey;
                    if (h.key === "Tab" && !g) {
                        const P = document.activeElement,
                            A = h.shiftKey;
                        if (h.target === T && A) {
                            (C = u.current) == null || C.focus();
                            return
                        }
                        const _ = y({
                                tabbingDirection: A ? "backwards" : "forwards"
                            }),
                            oe = _.findIndex(M => M === P);
                        fa(_.slice(oe + 1)) ? h.preventDefault() : A ? (E = u.current) == null || E.focus() : (b = c.current) == null || b.focus()
                    }
                };
                return T.addEventListener("keydown", v), () => T.removeEventListener("keydown", v)
            }
        }, [a, y]), f.jsxs(dw, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", m),
            tabIndex: -1,
            style: {
                pointerEvents: x ? void 0 : "none"
            },
            children: [x && f.jsx(Nl, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const T = y({
                        tabbingDirection: "forwards"
                    });
                    fa(T)
                }
            }), f.jsx($u.Slot, {
                scope: n,
                children: f.jsx(Oe.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: p
                })
            }), x && f.jsx(Nl, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const T = y({
                        tabbingDirection: "backwards"
                    });
                    fa(T)
                }
            })]
        })
    });
Rm.displayName = Am;
var Mm = "ToastFocusProxy",
    Nl = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = Ps(Mm, n);
        return f.jsx(Bu, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r()
            }
        })
    });
Nl.displayName = Mm;
var Io = "Toast",
    Ew = "toast.swipeStart",
    Pw = "toast.swipeMove",
    kw = "toast.swipeCancel",
    Nw = "toast.swipeEnd",
    Lm = w.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [a, l] = Es({
            prop: r,
            defaultProp: o ? ? !0,
            onChange: i,
            caller: Io
        });
        return f.jsx(zu, {
            present: n || a,
            children: f.jsx(Rw, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: On(e.onPause),
                onResume: On(e.onResume),
                onSwipeStart: Re(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: Re(e.onSwipeMove, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }),
                onSwipeCancel: Re(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: Re(e.onSwipeEnd, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1)
                })
            })
        })
    });
Lm.displayName = Io;
var [jw, Aw] = Nm(Io, {
    onClose() {}
}), Rw = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: p,
        onSwipeEnd: m,
        ...x
    } = e, y = Ps(Io, n), [T, v] = w.useState(null), h = _t(t, M => v(M)), g = w.useRef(null), S = w.useRef(null), C = o || y.duration, E = w.useRef(0), b = w.useRef(C), P = w.useRef(0), {
        onToastAdd: A,
        onToastRemove: R
    } = y, G = On(() => {
        var ee;
        (T == null ? void 0 : T.contains(document.activeElement)) && ((ee = y.viewport) == null || ee.focus()), s()
    }), _ = w.useCallback(M => {
        !M || M === 1 / 0 || (window.clearTimeout(P.current), E.current = new Date().getTime(), P.current = window.setTimeout(G, M))
    }, [G]);
    w.useEffect(() => {
        const M = y.viewport;
        if (M) {
            const ee = () => {
                    _(b.current), u == null || u()
                },
                $ = () => {
                    const de = new Date().getTime() - E.current;
                    b.current = b.current - de, window.clearTimeout(P.current), l == null || l()
                };
            return M.addEventListener(Pl, $), M.addEventListener(kl, ee), () => {
                M.removeEventListener(Pl, $), M.removeEventListener(kl, ee)
            }
        }
    }, [y.viewport, C, l, u, _]), w.useEffect(() => {
        i && !y.isClosePausedRef.current && _(C)
    }, [i, C, y.isClosePausedRef, _]), w.useEffect(() => (A(), () => R()), [A, R]);
    const oe = w.useMemo(() => T ? zm(T) : null, [T]);
    return y.viewport ? f.jsxs(f.Fragment, {
        children: [oe && f.jsx(Mw, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            children: oe
        }), f.jsx(jw, {
            scope: n,
            onClose: G,
            children: Ts.createPortal(f.jsx($u.ItemSlot, {
                scope: n,
                children: f.jsx(cw, {
                    asChild: !0,
                    onEscapeKeyDown: Re(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || G(), y.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: f.jsx(Oe.li, {
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: h,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: Re(e.onKeyDown, M => {
                            M.key === "Escape" && (a == null || a(M.nativeEvent), M.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0, G()))
                        }),
                        onPointerDown: Re(e.onPointerDown, M => {
                            M.button === 0 && (g.current = {
                                x: M.clientX,
                                y: M.clientY
                            })
                        }),
                        onPointerMove: Re(e.onPointerMove, M => {
                            if (!g.current) return;
                            const ee = M.clientX - g.current.x,
                                $ = M.clientY - g.current.y,
                                de = !!S.current,
                                N = ["left", "right"].includes(y.swipeDirection),
                                L = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max,
                                V = N ? L(0, ee) : 0,
                                O = N ? 0 : L(0, $),
                                H = M.pointerType === "touch" ? 10 : 2,
                                Y = {
                                    x: V,
                                    y: O
                                },
                                $e = {
                                    originalEvent: M,
                                    delta: Y
                                };
                            de ? (S.current = Y, ii(Pw, d, $e, {
                                discrete: !1
                            })) : zd(Y, y.swipeDirection, H) ? (S.current = Y, ii(Ew, c, $e, {
                                discrete: !1
                            }), M.target.setPointerCapture(M.pointerId)) : (Math.abs(ee) > H || Math.abs($) > H) && (g.current = null)
                        }),
                        onPointerUp: Re(e.onPointerUp, M => {
                            const ee = S.current,
                                $ = M.target;
                            if ($.hasPointerCapture(M.pointerId) && $.releasePointerCapture(M.pointerId), S.current = null, g.current = null, ee) {
                                const de = M.currentTarget,
                                    N = {
                                        originalEvent: M,
                                        delta: ee
                                    };
                                zd(ee, y.swipeDirection, y.swipeThreshold) ? ii(Nw, m, N, {
                                    discrete: !0
                                }) : ii(kw, p, N, {
                                    discrete: !0
                                }), de.addEventListener("click", L => L.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), y.viewport)
        })]
    }) : null
}), Mw = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = Ps(Io, t), [i, s] = w.useState(!1), [a, l] = w.useState(!1);
    return Ow(() => s(!0)), w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : f.jsx(km, {
        asChild: !0,
        children: f.jsx(Bu, { ...r,
            children: i && f.jsxs(f.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, Lw = "ToastTitle", Im = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return f.jsx(Oe.div, { ...r,
        ref: t
    })
});
Im.displayName = Lw;
var Iw = "ToastDescription",
    Om = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return f.jsx(Oe.div, { ...r,
            ref: t
        })
    });
Om.displayName = Iw;
var _m = "ToastAction",
    Dm = w.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? f.jsx(Fm, {
            altText: n,
            asChild: !0,
            children: f.jsx(Hu, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${_m}\`. Expected non-empty \`string\`.`), null)
    });
Dm.displayName = _m;
var Vm = "ToastClose",
    Hu = w.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = Aw(Vm, n);
        return f.jsx(Fm, {
            asChild: !0,
            children: f.jsx(Oe.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: Re(e.onClick, o.onClose)
            })
        })
    });
Hu.displayName = Vm;
var Fm = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return f.jsx(Oe.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function zm(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), _w(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...zm(r))
        }
    }), t
}

function ii(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Tm(o, i) : o.dispatchEvent(i)
}
var zd = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function Ow(e = () => {}) {
    const t = On(e);
    _n(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function _w(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function Dw(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function fa(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var Vw = jm,
    Bm = Rm,
    Um = Lm,
    $m = Im,
    Hm = Om,
    Wm = Dm,
    Gm = Hu;
const Bd = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Ud = mm,
    Km = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Ud(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const c = n == null ? void 0 : n[u],
                d = i == null ? void 0 : i[u];
            if (c === null) return null;
            const p = Bd(c) || Bd(d);
            return o[u][p]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, p] = c;
            return p === void 0 || (u[d] = p), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: d,
                className: p,
                ...m
            } = c;
            return Object.entries(m).every(x => {
                let [y, T] = x;
                return Array.isArray(T) ? T.includes({ ...i,
                    ...a
                }[y]) : { ...i,
                    ...a
                }[y] === T
            }) ? [...u, d, p] : u
        }, []);
        return Ud(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
var Fw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const zw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    me = (e, t) => {
        const n = w.forwardRef(({
            color: r = "currentColor",
            size: o = 24,
            strokeWidth: i = 2,
            absoluteStrokeWidth: s,
            children: a,
            ...l
        }, u) => w.createElement("svg", {
            ref: u,
            ...Fw,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: s ? Number(i) * 24 / Number(o) : i,
            className: `lucide lucide-${zw(e)}`,
            ...l
        }, [...t.map(([c, d]) => w.createElement(c, d)), ...(Array.isArray(a) ? a : [a]) || []]));
        return n.displayName = `${e}`, n
    },
    Bw = me("ArrowLeftRight", [
        ["path", {
            d: "M8 3 4 7l4 4",
            key: "9rb6wj"
        }],
        ["path", {
            d: "M4 7h16",
            key: "6tx8e3"
        }],
        ["path", {
            d: "m16 21 4-4-4-4",
            key: "siv7j2"
        }],
        ["path", {
            d: "M20 17H4",
            key: "h6l3hr"
        }]
    ]),
    Uw = me("Award", [
        ["circle", {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }],
        ["path", {
            d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
            key: "em7aur"
        }]
    ]),
    jl = me("CheckCircle", [
        ["path", {
            d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
            key: "g774vq"
        }],
        ["polyline", {
            points: "22 4 12 14.01 9 11.01",
            key: "6xbx8j"
        }]
    ]),
    $w = me("Check", [
        ["polyline", {
            points: "20 6 9 17 4 12",
            key: "10jjfj"
        }]
    ]),
    Hw = me("ChevronDown", [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ]),
    Wu = me("Clock", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["polyline", {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }]
    ]),
    Ym = me("DollarSign", [
        ["line", {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "22",
            key: "7eqyqh"
        }],
        ["path", {
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
            key: "1b0p4s"
        }]
    ]),
    Ww = me("Droplets", [
        ["path", {
            d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
            key: "1ptgy4"
        }],
        ["path", {
            d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
            key: "1sl1rz"
        }]
    ]),
    Gw = me("FileText", [
        ["path", {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2"
        }],
        ["polyline", {
            points: "14 2 14 8 20 8",
            key: "1ew0cm"
        }],
        ["line", {
            x1: "16",
            x2: "8",
            y1: "13",
            y2: "13",
            key: "14keom"
        }],
        ["line", {
            x1: "16",
            x2: "8",
            y1: "17",
            y2: "17",
            key: "17nazh"
        }],
        ["line", {
            x1: "10",
            x2: "8",
            y1: "9",
            y2: "9",
            key: "1a5vjj"
        }]
    ]),
    Kw = me("Globe", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1dnqot"
        }],
        ["path", {
            d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
            key: "nb9nel"
        }]
    ]),
    Yw = me("Home", [
        ["path", {
            d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            key: "y5dka4"
        }],
        ["polyline", {
            points: "9 22 9 12 15 12 15 22",
            key: "e2us08"
        }]
    ]),
    Qm = me("MapPin", [
        ["path", {
            d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",
            key: "2oe9fu"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]),
    Qw = me("Menu", [
        ["line", {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }],
        ["line", {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }]
    ]),
    Eo = me("MessageCircle", [
        ["path", {
            d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z",
            key: "v2veuj"
        }]
    ]),
    ln = me("Phone", [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }]
    ]),
    ks = me("Shield", [
        ["path", {
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",
            key: "1irkt0"
        }]
    ]),
    Xm = me("Star", [
        ["polygon", {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6"
        }]
    ]),
    Xw = me("Truck", [
        ["path", {
            d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",
            key: "hs4xqm"
        }],
        ["path", {
            d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",
            key: "11fp61"
        }],
        ["circle", {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }],
        ["path", {
            d: "M15 18H9",
            key: "1lyqi6"
        }],
        ["circle", {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }]
    ]),
    qm = me("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Zm = me("Zap", [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }]
    ]),
    qw = Vw,
    Jm = z.forwardRef(({
        className: e,
        ...t
    }, n) => f.jsx(Bm, {
        ref: n,
        className: Tt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
Jm.displayName = Bm.displayName;
const Zw = Km("data-[swipe=move]:transition-none group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[state=closed]:slide-out-to-right-full", {
        variants: {
            variant: {
                default: "bg-background border",
                destructive: "group destructive border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    eg = z.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => f.jsx(Um, {
        ref: r,
        className: Tt(Zw({
            variant: t
        }), e),
        ...n
    }));
eg.displayName = Um.displayName;
const Jw = z.forwardRef(({
    className: e,
    ...t
}, n) => f.jsx(Wm, {
    ref: n,
    className: Tt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
    ...t
}));
Jw.displayName = Wm.displayName;
const tg = z.forwardRef(({
    className: e,
    ...t
}, n) => f.jsx(Gm, {
    ref: n,
    className: Tt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: f.jsx(qm, {
        className: "h-4 w-4"
    })
}));
tg.displayName = Gm.displayName;
const ng = z.forwardRef(({
    className: e,
    ...t
}, n) => f.jsx($m, {
    ref: n,
    className: Tt("text-sm font-semibold", e),
    ...t
}));
ng.displayName = $m.displayName;
const rg = z.forwardRef(({
    className: e,
    ...t
}, n) => f.jsx(Hm, {
    ref: n,
    className: Tt("text-sm opacity-90", e),
    ...t
}));
rg.displayName = Hm.displayName;
const eS = 1;
let pa = 0;

function tS() {
    return pa = (pa + 1) % Number.MAX_VALUE, pa.toString()
}
const Ne = {
        state: {
            toasts: []
        },
        listeners: [],
        getState: () => Ne.state,
        setState: e => {
            typeof e == "function" ? Ne.state = e(Ne.state) : Ne.state = { ...Ne.state,
                ...e
            }, Ne.listeners.forEach(t => t(Ne.state))
        },
        subscribe: e => (Ne.listeners.push(e), () => {
            Ne.listeners = Ne.listeners.filter(t => t !== e)
        })
    },
    nS = ({ ...e
    }) => {
        const t = tS(),
            n = o => Ne.setState(i => ({ ...i,
                toasts: i.toasts.map(s => s.id === t ? { ...s,
                    ...o
                } : s)
            })),
            r = () => Ne.setState(o => ({ ...o,
                toasts: o.toasts.filter(i => i.id !== t)
            }));
        return Ne.setState(o => ({ ...o,
            toasts: [{ ...e,
                id: t,
                dismiss: r
            }, ...o.toasts].slice(0, eS)
        })), {
            id: t,
            dismiss: r,
            update: n
        }
    };

function rS() {
    const [e, t] = w.useState(Ne.getState());
    return w.useEffect(() => Ne.subscribe(r => {
        t(r)
    }), []), w.useEffect(() => {
        const n = [];
        return e.toasts.forEach(r => {
            if (r.duration === 1 / 0) return;
            const o = setTimeout(() => {
                r.dismiss()
            }, r.duration || 5e3);
            n.push(o)
        }), () => {
            n.forEach(r => clearTimeout(r))
        }
    }, [e.toasts]), {
        toast: nS,
        toasts: e.toasts
    }
}

function oS() {
    const {
        toasts: e
    } = rS();
    return f.jsxs(qw, {
        children: [e.map(({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) => f.jsxs(eg, { ...i,
            children: [f.jsxs("div", {
                className: "grid gap-1",
                children: [n && f.jsx(ng, {
                    children: n
                }), r && f.jsx(rg, {
                    children: r
                })]
            }), o, f.jsx(tg, {})]
        }, t)), f.jsx(Jm, {})]
    })
}
const og = w.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    Ns = w.createContext({}),
    Gu = w.createContext(null),
    js = typeof document < "u",
    iS = js ? w.useLayoutEffect : w.useEffect,
    ig = w.createContext({
        strict: !1
    }),
    Ku = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
    sS = "framerAppearId",
    sg = "data-" + Ku(sS);

function aS(e, t, n, r) {
    const {
        visualElement: o
    } = w.useContext(Ns), i = w.useContext(ig), s = w.useContext(Gu), a = w.useContext(og).reducedMotion, l = w.useRef();
    r = r || i.renderer, !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const u = l.current;
    w.useInsertionEffect(() => {
        u && u.update(n, s)
    });
    const c = w.useRef(!!(n[sg] && !window.HandoffComplete));
    return iS(() => {
        u && (u.render(), c.current && u.animationState && u.animationState.animateChanges())
    }), w.useEffect(() => {
        u && (u.updateFeatures(), !c.current && u.animationState && u.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0))
    }), u
}

function or(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function lS(e, t, n) {
    return w.useCallback(r => {
        r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : or(n) && (n.current = r))
    }, [t])
}

function Po(e) {
    return typeof e == "string" || Array.isArray(e)
}

function As(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Yu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Qu = ["initial", ...Yu];

function Rs(e) {
    return As(e.animate) || Qu.some(t => Po(e[t]))
}

function ag(e) {
    return !!(Rs(e) || e.variants)
}

function uS(e, t) {
    if (Rs(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Po(n) ? n : void 0,
            animate: Po(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function cS(e) {
    const {
        initial: t,
        animate: n
    } = uS(e, w.useContext(Ns));
    return w.useMemo(() => ({
        initial: t,
        animate: n
    }), [$d(t), $d(n)])
}

function $d(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Hd = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    ko = {};
for (const e in Hd) ko[e] = {
    isEnabled: t => Hd[e].some(n => !!t[n])
};

function dS(e) {
    for (const t in e) ko[t] = { ...ko[t],
        ...e[t]
    }
}
const lg = w.createContext({}),
    ug = w.createContext({}),
    fS = Symbol.for("motionComponentSymbol");

function pS({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: o
}) {
    e && dS(e);

    function i(a, l) {
        let u;
        const c = { ...w.useContext(og),
                ...a,
                layoutId: hS(a)
            },
            {
                isStatic: d
            } = c,
            p = cS(a),
            m = r(a, d);
        if (!d && js) {
            p.visualElement = aS(o, m, c, t);
            const x = w.useContext(ug),
                y = w.useContext(ig).strict;
            p.visualElement && (u = p.visualElement.loadFeatures(c, y, e, x))
        }
        return w.createElement(Ns.Provider, {
            value: p
        }, u && p.visualElement ? w.createElement(u, {
            visualElement: p.visualElement,
            ...c
        }) : null, n(o, a, lS(m, p.visualElement, l), m, d, p.visualElement))
    }
    const s = w.forwardRef(i);
    return s[fS] = o, s
}

function hS({
    layoutId: e
}) {
    const t = w.useContext(lg).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function mS(e) {
    function t(r, o = {}) {
        return pS(e(r, o))
    }
    if (typeof Proxy > "u") return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
    })
}
const gS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Xu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(gS.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const Xi = {};

function vS(e) {
    Object.assign(Xi, e)
}
const Oo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Bn = new Set(Oo);

function cg(e, {
    layout: t,
    layoutId: n
}) {
    return Bn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Xi[e] || e === "opacity")
}
const Ue = e => !!(e && e.getVelocity),
    yS = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    xS = Oo.length;

function wS(e, {
    enableHardwareAcceleration: t = !0,
    allowTransformNone: n = !0
}, r, o) {
    let i = "";
    for (let s = 0; s < xS; s++) {
        const a = Oo[s];
        if (e[a] !== void 0) {
            const l = yS[a] || a;
            i += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, r ? "" : i) : n && r && (i = "none"), i
}
const dg = e => t => typeof t == "string" && t.startsWith(e),
    fg = dg("--"),
    Al = dg("var(--"),
    SS = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    TS = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    un = (e, t, n) => Math.min(Math.max(n, e), t),
    Un = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    no = { ...Un,
        transform: e => un(0, 1, e)
    },
    si = { ...Un,
        default: 1
    },
    ro = e => Math.round(e * 1e5) / 1e5,
    Ms = /(-)?([\d]*\.?[\d])+/g,
    pg = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    CS = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

function _o(e) {
    return typeof e == "string"
}
const Do = e => ({
        test: t => _o(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Bt = Do("deg"),
    St = Do("%"),
    D = Do("px"),
    bS = Do("vh"),
    ES = Do("vw"),
    Wd = { ...St,
        parse: e => St.parse(e) / 100,
        transform: e => St.transform(e * 100)
    },
    Gd = { ...Un,
        transform: Math.round
    },
    hg = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        size: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        rotate: Bt,
        rotateX: Bt,
        rotateY: Bt,
        rotateZ: Bt,
        scale: si,
        scaleX: si,
        scaleY: si,
        scaleZ: si,
        skew: Bt,
        skewX: Bt,
        skewY: Bt,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: no,
        originX: Wd,
        originY: Wd,
        originZ: D,
        zIndex: Gd,
        fillOpacity: no,
        strokeOpacity: no,
        numOctaves: Gd
    };

function qu(e, t, n, r) {
    const {
        style: o,
        vars: i,
        transform: s,
        transformOrigin: a
    } = e;
    let l = !1,
        u = !1,
        c = !0;
    for (const d in t) {
        const p = t[d];
        if (fg(d)) {
            i[d] = p;
            continue
        }
        const m = hg[d],
            x = TS(p, m);
        if (Bn.has(d)) {
            if (l = !0, s[d] = x, !c) continue;
            p !== (m.default || 0) && (c = !1)
        } else d.startsWith("origin") ? (u = !0, a[d] = x) : o[d] = x
    }
    if (t.transform || (l || r ? o.transform = wS(e.transform, n, c, r) : o.transform && (o.transform = "none")), u) {
        const {
            originX: d = "50%",
            originY: p = "50%",
            originZ: m = 0
        } = a;
        o.transformOrigin = `${d} ${p} ${m}`
    }
}
const Zu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function mg(e, t, n) {
    for (const r in t) !Ue(t[r]) && !cg(r, n) && (e[r] = t[r])
}

function PS({
    transformTemplate: e
}, t, n) {
    return w.useMemo(() => {
        const r = Zu();
        return qu(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}

function kS(e, t, n) {
    const r = e.style || {},
        o = {};
    return mg(o, r, e), Object.assign(o, PS(e, t, n)), e.transformValues ? e.transformValues(o) : o
}

function NS(e, t, n) {
    const r = {},
        o = kS(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = o, r
}
const jS = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function qi(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || jS.has(e)
}
let gg = e => !qi(e);

function AS(e) {
    e && (gg = t => t.startsWith("on") ? !qi(t) : e(t))
}
try {
    AS(require("@emotion/is-prop-valid").default)
} catch {}

function RS(e, t, n) {
    const r = {};
    for (const o in e) o === "values" && typeof e.values == "object" || (gg(o) || n === !0 && qi(o) || !t && !qi(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}

function Kd(e, t, n) {
    return typeof e == "string" ? e : D.transform(t + n * e)
}

function MS(e, t, n) {
    const r = Kd(t, e.x, e.width),
        o = Kd(n, e.y, e.height);
    return `${r} ${o}`
}
const LS = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    IS = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function OS(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? LS : IS;
    e[i.offset] = D.transform(-r);
    const s = D.transform(t),
        a = D.transform(n);
    e[i.array] = `${s} ${a}`
}

function Ju(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
}, c, d, p) {
    if (qu(e, u, c, p), d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: m,
        style: x,
        dimensions: y
    } = e;
    m.transform && (y && (x.transform = m.transform), delete m.transform), y && (o !== void 0 || i !== void 0 || x.transform) && (x.transformOrigin = MS(y, o !== void 0 ? o : .5, i !== void 0 ? i : .5)), t !== void 0 && (m.x = t), n !== void 0 && (m.y = n), r !== void 0 && (m.scale = r), s !== void 0 && OS(m, s, a, l, !1)
}
const vg = () => ({ ...Zu(),
        attrs: {}
    }),
    ec = e => typeof e == "string" && e.toLowerCase() === "svg";

function _S(e, t, n, r) {
    const o = w.useMemo(() => {
        const i = vg();
        return Ju(i, t, {
            enableHardwareAcceleration: !1
        }, ec(r), e.transformTemplate), { ...i.attrs,
            style: { ...i.style
            }
        }
    }, [t]);
    if (e.style) {
        const i = {};
        mg(i, e.style, e), o.style = { ...i,
            ...o.style
        }
    }
    return o
}

function DS(e = !1) {
    return (n, r, o, {
        latestValues: i
    }, s) => {
        const l = (Xu(n) ? _S : NS)(r, i, s, n),
            c = { ...RS(r, typeof n == "string", e),
                ...l,
                ref: o
            },
            {
                children: d
            } = r,
            p = w.useMemo(() => Ue(d) ? d.get() : d, [d]);
        return w.createElement(n, { ...c,
            children: p
        })
    }
}

function yg(e, {
    style: t,
    vars: n
}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n) e.style.setProperty(i, n[i])
}
const xg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function wg(e, t, n, r) {
    yg(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(xg.has(o) ? o : Ku(o), t.attrs[o])
}

function tc(e, t) {
    const {
        style: n
    } = e, r = {};
    for (const o in n)(Ue(n[o]) || t.style && Ue(t.style[o]) || cg(o, e)) && (r[o] = n[o]);
    return r
}

function Sg(e, t) {
    const n = tc(e, t);
    for (const r in e)
        if (Ue(e[r]) || Ue(t[r])) {
            const o = Oo.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[o] = e[r]
        }
    return n
}

function nc(e, t, n, r = {}, o = {}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t
}

function VS(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Zi = e => Array.isArray(e),
    FS = e => !!(e && typeof e == "object" && e.mix && e.toValue),
    zS = e => Zi(e) ? e[e.length - 1] || 0 : e;

function Ci(e) {
    const t = Ue(e) ? e.get() : e;
    return FS(t) ? t.toValue() : t
}

function BS({
    scrapeMotionValuesFromProps: e,
    createRenderState: t,
    onMount: n
}, r, o, i) {
    const s = {
        latestValues: US(r, o, i, e),
        renderState: t()
    };
    return n && (s.mount = a => n(r, a, s)), s
}
const Tg = e => (t, n) => {
    const r = w.useContext(Ns),
        o = w.useContext(Gu),
        i = () => BS(e, t, r, o);
    return n ? i() : VS(i)
};

function US(e, t, n, r) {
    const o = {},
        i = r(e, {});
    for (const p in i) o[p] = Ci(i[p]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = Rs(e),
        u = ag(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    return d && typeof d != "boolean" && !As(d) && (Array.isArray(d) ? d : [d]).forEach(m => {
        const x = nc(e, m);
        if (!x) return;
        const {
            transitionEnd: y,
            transition: T,
            ...v
        } = x;
        for (const h in v) {
            let g = v[h];
            if (Array.isArray(g)) {
                const S = c ? g.length - 1 : 0;
                g = g[S]
            }
            g !== null && (o[h] = g)
        }
        for (const h in y) o[h] = y[h]
    }), o
}
const ce = e => e;
class Yd {
    constructor() {
        this.order = [], this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0, this.scheduled.clear()
    }
}

function $S(e) {
    let t = new Yd,
        n = new Yd,
        r = 0,
        o = !1,
        i = !1;
    const s = new WeakSet,
        a = {
            schedule: (l, u = !1, c = !1) => {
                const d = c && o,
                    p = d ? t : n;
                return u && s.add(l), p.add(l) && d && o && (r = t.order.length), l
            },
            cancel: l => {
                n.remove(l), s.delete(l)
            },
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t.order[u];
                        c(l), s.has(c) && (a.schedule(c), e())
                    }
                o = !1, i && (i = !1, a.process(l))
            }
        };
    return a
}
const ai = ["prepare", "read", "update", "preRender", "render", "postRender"],
    HS = 40;

function WS(e, t) {
    let n = !1,
        r = !0;
    const o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        i = ai.reduce((d, p) => (d[p] = $S(() => n = !0), d), {}),
        s = d => i[d].process(o),
        a = () => {
            const d = performance.now();
            n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, HS), 1), o.timestamp = d, o.isProcessing = !0, ai.forEach(s), o.isProcessing = !1, n && t && (r = !1, e(a))
        },
        l = () => {
            n = !0, r = !0, o.isProcessing || e(a)
        };
    return {
        schedule: ai.reduce((d, p) => {
            const m = i[p];
            return d[p] = (x, y = !1, T = !1) => (n || l(), m.schedule(x, y, T)), d
        }, {}),
        cancel: d => ai.forEach(p => i[p].cancel(d)),
        state: o,
        steps: i
    }
}
const {
    schedule: J,
    cancel: Dt,
    state: Ee,
    steps: ha
} = WS(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ce, !0), GS = {
    useVisualState: Tg({
        scrapeMotionValuesFromProps: Sg,
        createRenderState: vg,
        onMount: (e, t, {
            renderState: n,
            latestValues: r
        }) => {
            J.read(() => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }), J.render(() => {
                Ju(n, r, {
                    enableHardwareAcceleration: !1
                }, ec(t.tagName), e.transformTemplate), wg(t, n)
            })
        }
    })
}, KS = {
    useVisualState: Tg({
        scrapeMotionValuesFromProps: tc,
        createRenderState: Zu
    })
};

function YS(e, {
    forwardMotionProps: t = !1
}, n, r) {
    return { ...Xu(e) ? GS : KS,
        preloadedFeatures: n,
        useRender: DS(t),
        createVisualElement: r,
        Component: e
    }
}

function Nt(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const Cg = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;

function Ls(e, t = "page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const QS = e => t => Cg(t) && e(t, Ls(t));

function At(e, t, n, r) {
    return Nt(e, t, QS(n), r)
}
const XS = (e, t) => n => t(e(n)),
    rn = (...e) => e.reduce(XS);

function bg(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const Qd = bg("dragHorizontal"),
    Xd = bg("dragVertical");

function Eg(e) {
    let t = !1;
    if (e === "y") t = Xd();
    else if (e === "x") t = Qd();
    else {
        const n = Qd(),
            r = Xd();
        n && r ? t = () => {
            n(), r()
        } : (n && n(), r && r())
    }
    return t
}

function Pg() {
    const e = Eg(!0);
    return e ? (e(), !1) : !0
}
class hn {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function qd(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
        r = "onHover" + (t ? "Start" : "End"),
        o = (i, s) => {
            if (i.pointerType === "touch" || Pg()) return;
            const a = e.getProps();
            e.animationState && a.whileHover && e.animationState.setActive("whileHover", t), a[r] && J.update(() => a[r](i, s))
        };
    return At(e.current, n, o, {
        passive: !e.getProps()[r]
    })
}
class qS extends hn {
    mount() {
        this.unmount = rn(qd(this.node, !0), qd(this.node, !1))
    }
    unmount() {}
}
class ZS extends hn {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = rn(Nt(this.node.current, "focus", () => this.onFocus()), Nt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const kg = (e, t) => t ? e === t ? !0 : kg(e, t.parentElement) : !1;

function ma(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, Ls(n))
}
class JS extends hn {
    constructor() {
        super(...arguments), this.removeStartListeners = ce, this.removeEndListeners = ce, this.removeAccessibleListeners = ce, this.startPointerPress = (t, n) => {
            if (this.isPressing) return;
            this.removeEndListeners();
            const r = this.node.getProps(),
                i = At(window, "pointerup", (a, l) => {
                    if (!this.checkPressEnd()) return;
                    const {
                        onTap: u,
                        onTapCancel: c,
                        globalTapTarget: d
                    } = this.node.getProps();
                    J.update(() => {
                        !d && !kg(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                    })
                }, {
                    passive: !(r.onTap || r.onPointerUp)
                }),
                s = At(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
                    passive: !(r.onTapCancel || r.onPointerCancel)
                });
            this.removeEndListeners = rn(i, s), this.startPress(t, n)
        }, this.startAccessiblePress = () => {
            const t = i => {
                    if (i.key !== "Enter" || this.isPressing) return;
                    const s = a => {
                        a.key !== "Enter" || !this.checkPressEnd() || ma("up", (l, u) => {
                            const {
                                onTap: c
                            } = this.node.getProps();
                            c && J.update(() => c(l, u))
                        })
                    };
                    this.removeEndListeners(), this.removeEndListeners = Nt(this.node.current, "keyup", s), ma("down", (a, l) => {
                        this.startPress(a, l)
                    })
                },
                n = Nt(this.node.current, "keydown", t),
                r = () => {
                    this.isPressing && ma("cancel", (i, s) => this.cancelPress(i, s))
                },
                o = Nt(this.node.current, "blur", r);
            this.removeAccessibleListeners = rn(n, o)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {
            onTapStart: r,
            whileTap: o
        } = this.node.getProps();
        o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && J.update(() => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Pg()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd()) return;
        const {
            onTapCancel: r
        } = this.node.getProps();
        r && J.update(() => r(t, n))
    }
    mount() {
        const t = this.node.getProps(),
            n = At(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                passive: !(t.onTapStart || t.onPointerStart)
            }),
            r = Nt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = rn(n, r)
    }
    unmount() {
        this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
    }
}
const Rl = new WeakMap,
    ga = new WeakMap,
    eT = e => {
        const t = Rl.get(e.target);
        t && t(e)
    },
    tT = e => {
        e.forEach(eT)
    };

function nT({
    root: e,
    ...t
}) {
    const n = e || document;
    ga.has(n) || ga.set(n, {});
    const r = ga.get(n),
        o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(tT, {
        root: e,
        ...t
    })), r[o]
}

function rT(e, t, n) {
    const r = nT(t);
    return Rl.set(e, n), r.observe(e), () => {
        Rl.delete(e), r.unobserve(e)
    }
}
const oT = {
    some: 0,
    all: 1
};
class iT extends hn {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: o = "some",
            once: i
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : oT[o]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: c,
                onViewportLeave: d
            } = this.node.getProps(), p = u ? c : d;
            p && p(l)
        };
        return rT(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(sT(t, n)) && this.startObserver()
    }
    unmount() {}
}

function sT({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const aT = {
    inView: {
        Feature: iT
    },
    tap: {
        Feature: JS
    },
    focus: {
        Feature: ZS
    },
    hover: {
        Feature: qS
    }
};

function Ng(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}

function lT(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.get()), t
}

function uT(e) {
    const t = {};
    return e.values.forEach((n, r) => t[r] = n.getVelocity()), t
}

function Is(e, t, n) {
    const r = e.getProps();
    return nc(r, t, n !== void 0 ? n : r.custom, lT(e), uT(e))
}
let cT = ce,
    rc = ce;
const on = e => e * 1e3,
    Rt = e => e / 1e3,
    dT = {
        current: !1
    },
    jg = e => Array.isArray(e) && typeof e[0] == "number";

function Ag(e) {
    return !!(!e || typeof e == "string" && Rg[e] || jg(e) || Array.isArray(e) && e.every(Ag))
}
const Gr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Rg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Gr([0, .65, .55, 1]),
        circOut: Gr([.55, 0, 1, .45]),
        backIn: Gr([.31, .01, .66, -.59]),
        backOut: Gr([.33, 1.53, .69, .99])
    };

function Mg(e) {
    if (e) return jg(e) ? Gr(e) : Array.isArray(e) ? e.map(Mg) : Rg[e]
}

function fT(e, t, n, {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l
} = {}) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const c = Mg(a);
    return Array.isArray(c) && (u.easing = c), e.animate(u, {
        delay: r,
        duration: o,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    })
}

function pT(e, {
    repeat: t,
    repeatType: n = "loop"
}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Lg = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    hT = 1e-7,
    mT = 12;

function gT(e, t, n, r, o) {
    let i, s, a = 0;
    do s = t + (n - t) / 2, i = Lg(s, r, o) - e, i > 0 ? n = s : t = s; while (Math.abs(i) > hT && ++a < mT);
    return s
}

function Vo(e, t, n, r) {
    if (e === t && n === r) return ce;
    const o = i => gT(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Lg(o(i), t, r)
}
const vT = Vo(.42, 0, 1, 1),
    yT = Vo(0, 0, .58, 1),
    Ig = Vo(.42, 0, .58, 1),
    xT = e => Array.isArray(e) && typeof e[0] != "number",
    Og = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    _g = e => t => 1 - e(1 - t),
    oc = e => 1 - Math.sin(Math.acos(e)),
    Dg = _g(oc),
    wT = Og(oc),
    Vg = Vo(.33, 1.53, .69, .99),
    ic = _g(Vg),
    ST = Og(ic),
    TT = e => (e *= 2) < 1 ? .5 * ic(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    CT = {
        linear: ce,
        easeIn: vT,
        easeInOut: Ig,
        easeOut: yT,
        circIn: oc,
        circInOut: wT,
        circOut: Dg,
        backIn: ic,
        backInOut: ST,
        backOut: Vg,
        anticipate: TT
    },
    Zd = e => {
        if (Array.isArray(e)) {
            rc(e.length === 4);
            const [t, n, r, o] = e;
            return Vo(t, n, r, o)
        } else if (typeof e == "string") return CT[e];
        return e
    },
    sc = (e, t) => n => !!(_o(n) && CS.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    Fg = (e, t, n) => r => {
        if (!_o(r)) return r;
        const [o, i, s, a] = r.match(Ms);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    bT = e => un(0, 255, e),
    va = { ...Un,
        transform: e => Math.round(bT(e))
    },
    Pn = {
        test: sc("rgb", "red"),
        parse: Fg("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + va.transform(e) + ", " + va.transform(t) + ", " + va.transform(n) + ", " + ro(no.transform(r)) + ")"
    };

function ET(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Ml = {
        test: sc("#"),
        parse: ET,
        transform: Pn.transform
    },
    ir = {
        test: sc("hsl", "hue"),
        parse: Fg("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + St.transform(ro(t)) + ", " + St.transform(ro(n)) + ", " + ro(no.transform(r)) + ")"
    },
    je = {
        test: e => Pn.test(e) || Ml.test(e) || ir.test(e),
        parse: e => Pn.test(e) ? Pn.parse(e) : ir.test(e) ? ir.parse(e) : Ml.parse(e),
        transform: e => _o(e) ? e : e.hasOwnProperty("red") ? Pn.transform(e) : ir.transform(e)
    },
    se = (e, t, n) => -n * e + n * t + e;

function ya(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function PT({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let o = 0,
        i = 0,
        s = 0;
    if (!t) o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        o = ya(l, a, e + 1 / 3), i = ya(l, a, e), s = ya(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}
const xa = (e, t, n) => {
        const r = e * e;
        return Math.sqrt(Math.max(0, n * (t * t - r) + r))
    },
    kT = [Ml, Pn, ir],
    NT = e => kT.find(t => t.test(e));

function Jd(e) {
    const t = NT(e);
    let n = t.parse(e);
    return t === ir && (n = PT(n)), n
}
const zg = (e, t) => {
    const n = Jd(e),
        r = Jd(t),
        o = { ...n
        };
    return i => (o.red = xa(n.red, r.red, i), o.green = xa(n.green, r.green, i), o.blue = xa(n.blue, r.blue, i), o.alpha = se(n.alpha, r.alpha, i), Pn.transform(o))
};

function jT(e) {
    var t, n;
    return isNaN(e) && _o(e) && (((t = e.match(Ms)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(pg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Bg = {
        regex: SS,
        countKey: "Vars",
        token: "${v}",
        parse: ce
    },
    Ug = {
        regex: pg,
        countKey: "Colors",
        token: "${c}",
        parse: je.parse
    },
    $g = {
        regex: Ms,
        countKey: "Numbers",
        token: "${n}",
        parse: Un.parse
    };

function wa(e, {
    regex: t,
    countKey: n,
    token: r,
    parse: o
}) {
    const i = e.tokenised.match(t);
    i && (e["num" + n] = i.length, e.tokenised = e.tokenised.replace(t, r), e.values.push(...i.map(o)))
}

function Ji(e) {
    const t = e.toString(),
        n = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0
        };
    return n.value.includes("var(--") && wa(n, Bg), wa(n, Ug), wa(n, $g), n
}

function Hg(e) {
    return Ji(e).values
}

function Wg(e) {
    const {
        values: t,
        numColors: n,
        numVars: r,
        tokenised: o
    } = Ji(e), i = t.length;
    return s => {
        let a = o;
        for (let l = 0; l < i; l++) l < r ? a = a.replace(Bg.token, s[l]) : l < r + n ? a = a.replace(Ug.token, je.transform(s[l])) : a = a.replace($g.token, ro(s[l]));
        return a
    }
}
const AT = e => typeof e == "number" ? 0 : e;

function RT(e) {
    const t = Hg(e);
    return Wg(e)(t.map(AT))
}
const cn = {
        test: jT,
        parse: Hg,
        createTransformer: Wg,
        getAnimatableNone: RT
    },
    Gg = (e, t) => n => `${n>0?t:e}`;

function Kg(e, t) {
    return typeof e == "number" ? n => se(e, t, n) : je.test(e) ? zg(e, t) : e.startsWith("var(") ? Gg(e, t) : Qg(e, t)
}
const Yg = (e, t) => {
        const n = [...e],
            r = n.length,
            o = e.map((i, s) => Kg(i, t[s]));
        return i => {
            for (let s = 0; s < r; s++) n[s] = o[s](i);
            return n
        }
    },
    MT = (e, t) => {
        const n = { ...e,
                ...t
            },
            r = {};
        for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = Kg(e[o], t[o]));
        return o => {
            for (const i in r) n[i] = r[i](o);
            return n
        }
    },
    Qg = (e, t) => {
        const n = cn.createTransformer(t),
            r = Ji(e),
            o = Ji(t);
        return r.numVars === o.numVars && r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? rn(Yg(r.values, o.values), n) : Gg(e, t)
    },
    No = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    ef = (e, t) => n => se(e, t, n);

function LT(e) {
    return typeof e == "number" ? ef : typeof e == "string" ? je.test(e) ? zg : Qg : Array.isArray(e) ? Yg : typeof e == "object" ? MT : ef
}

function IT(e, t, n) {
    const r = [],
        o = n || LT(e[0]),
        i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || ce : t;
            a = rn(l, a)
        }
        r.push(a)
    }
    return r
}

function Xg(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: o
} = {}) {
    const i = e.length;
    if (rc(i === t.length), i === 1) return () => t[0];
    e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const s = IT(t, r, o),
        a = s.length,
        l = u => {
            let c = 0;
            if (a > 1)
                for (; c < e.length - 2 && !(u < e[c + 1]); c++);
            const d = No(e[c], e[c + 1], u);
            return s[c](d)
        };
    return n ? u => l(un(e[0], e[i - 1], u)) : l
}

function OT(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = No(0, t, r);
        e.push(se(n, 1, o))
    }
}

function _T(e) {
    const t = [0];
    return OT(t, e.length - 1), t
}

function DT(e, t) {
    return e.map(n => n * t)
}

function VT(e, t) {
    return e.map(() => t || Ig).splice(0, e.length - 1)
}

function es({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const o = xT(r) ? r.map(Zd) : Zd(r),
        i = {
            done: !1,
            value: t[0]
        },
        s = DT(n && n.length === t.length ? n : _T(t), e),
        a = Xg(s, t, {
            ease: Array.isArray(o) ? o : VT(t, o)
        });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l), i.done = l >= e, i)
    }
}

function qg(e, t) {
    return t ? e * (1e3 / t) : 0
}
const FT = 5;

function Zg(e, t, n) {
    const r = Math.max(t - FT, 0);
    return qg(n - e(r), t - r)
}
const Sa = .001,
    zT = .01,
    tf = 10,
    BT = .05,
    UT = 1;

function $T({
    duration: e = 800,
    bounce: t = .25,
    velocity: n = 0,
    mass: r = 1
}) {
    let o, i;
    cT(e <= on(tf));
    let s = 1 - t;
    s = un(BT, UT, s), e = un(zT, tf, Rt(e)), s < 1 ? (o = u => {
        const c = u * s,
            d = c * e,
            p = c - n,
            m = Ll(u, s),
            x = Math.exp(-d);
        return Sa - p / m * x
    }, i = u => {
        const d = u * s * e,
            p = d * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            x = Math.exp(-d),
            y = Ll(Math.pow(u, 2), s);
        return (-o(u) + Sa > 0 ? -1 : 1) * ((p - m) * x) / y
    }) : (o = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -Sa + c * d
    }, i = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = WT(o, i, a);
    if (e = on(e), isNaN(l)) return {
        stiffness: 100,
        damping: 10,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const HT = 12;

function WT(e, t, n) {
    let r = n;
    for (let o = 1; o < HT; o++) r = r - e(r) / t(r);
    return r
}

function Ll(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const GT = ["duration", "bounce"],
    KT = ["stiffness", "damping", "mass"];

function nf(e, t) {
    return t.some(n => e[n] !== void 0)
}

function YT(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!nf(e, KT) && nf(e, GT)) {
        const n = $T(e);
        t = { ...t,
            ...n,
            mass: 1
        }, t.isResolvedFromDuration = !0
    }
    return t
}

function Jg({
    keyframes: e,
    restDelta: t,
    restSpeed: n,
    ...r
}) {
    const o = e[0],
        i = e[e.length - 1],
        s = {
            done: !1,
            value: o
        },
        {
            stiffness: a,
            damping: l,
            mass: u,
            duration: c,
            velocity: d,
            isResolvedFromDuration: p
        } = YT({ ...r,
            velocity: -Rt(r.velocity || 0)
        }),
        m = d || 0,
        x = l / (2 * Math.sqrt(a * u)),
        y = i - o,
        T = Rt(Math.sqrt(a / u)),
        v = Math.abs(y) < 5;
    n || (n = v ? .01 : 2), t || (t = v ? .005 : .5);
    let h;
    if (x < 1) {
        const g = Ll(T, x);
        h = S => {
            const C = Math.exp(-x * T * S);
            return i - C * ((m + x * T * y) / g * Math.sin(g * S) + y * Math.cos(g * S))
        }
    } else if (x === 1) h = g => i - Math.exp(-T * g) * (y + (m + T * y) * g);
    else {
        const g = T * Math.sqrt(x * x - 1);
        h = S => {
            const C = Math.exp(-x * T * S),
                E = Math.min(g * S, 300);
            return i - C * ((m + x * T * y) * Math.sinh(E) + g * y * Math.cosh(E)) / g
        }
    }
    return {
        calculatedDuration: p && c || null,
        next: g => {
            const S = h(g);
            if (p) s.done = g >= c;
            else {
                let C = m;
                g !== 0 && (x < 1 ? C = Zg(h, g, S) : C = 0);
                const E = Math.abs(C) <= n,
                    b = Math.abs(i - S) <= t;
                s.done = E && b
            }
            return s.value = s.done ? i : S, s
        }
    }
}

function rf({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: i = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        p = {
            done: !1,
            value: d
        },
        m = P => a !== void 0 && P < a || l !== void 0 && P > l,
        x = P => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
    let y = n * t;
    const T = d + y,
        v = s === void 0 ? T : s(T);
    v !== T && (y = v - d);
    const h = P => -y * Math.exp(-P / r),
        g = P => v + h(P),
        S = P => {
            const A = h(P),
                R = g(P);
            p.done = Math.abs(A) <= u, p.value = p.done ? v : R
        };
    let C, E;
    const b = P => {
        m(p.value) && (C = P, E = Jg({
            keyframes: [p.value, x(p.value)],
            velocity: Zg(g, P, p.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: c
        }))
    };
    return b(0), {
        calculatedDuration: null,
        next: P => {
            let A = !1;
            return !E && C === void 0 && (A = !0, S(P), b(P)), C !== void 0 && P > C ? E.next(P - C) : (!A && S(P), p)
        }
    }
}
const QT = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: () => J.update(t, !0),
            stop: () => Dt(t),
            now: () => Ee.isProcessing ? Ee.timestamp : performance.now()
        }
    },
    of = 2e4;

function sf(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < of ;) t += n, r = e.next(t);
    return t >= of ? 1 / 0 : t
}
const XT = {
    decay: rf,
    inertia: rf,
    tween: es,
    keyframes: es,
    spring: Jg
};

function ts({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = QT,
    keyframes: r,
    type: o = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: a = "loop",
    onPlay: l,
    onStop: u,
    onComplete: c,
    onUpdate: d,
    ...p
}) {
    let m = 1,
        x = !1,
        y, T;
    const v = () => {
        T = new Promise(O => {
            y = O
        })
    };
    v();
    let h;
    const g = XT[o] || es;
    let S;
    g !== es && typeof r[0] != "number" && (S = Xg([0, 100], r, {
        clamp: !1
    }), r = [0, 100]);
    const C = g({ ...p,
        keyframes: r
    });
    let E;
    a === "mirror" && (E = g({ ...p,
        keyframes: [...r].reverse(),
        velocity: -(p.velocity || 0)
    }));
    let b = "idle",
        P = null,
        A = null,
        R = null;
    C.calculatedDuration === null && i && (C.calculatedDuration = sf(C));
    const {
        calculatedDuration: G
    } = C;
    let _ = 1 / 0,
        oe = 1 / 0;
    G !== null && (_ = G + s, oe = _ * (i + 1) - s);
    let M = 0;
    const ee = O => {
            if (A === null) return;
            m > 0 && (A = Math.min(A, O)), m < 0 && (A = Math.min(O - oe / m, A)), P !== null ? M = P : M = Math.round(O - A) * m;
            const H = M - t * (m >= 0 ? 1 : -1),
                Y = m >= 0 ? H < 0 : H > oe;
            M = Math.max(H, 0), b === "finished" && P === null && (M = oe);
            let $e = M,
                $n = C;
            if (i) {
                const Vs = Math.min(M, oe) / _;
                let Fo = Math.floor(Vs),
                    gn = Vs % 1;
                !gn && Vs >= 1 && (gn = 1), gn === 1 && Fo--, Fo = Math.min(Fo, i + 1), !!(Fo % 2) && (a === "reverse" ? (gn = 1 - gn, s && (gn -= s / _)) : a === "mirror" && ($n = E)), $e = un(0, 1, gn) * _
            }
            const He = Y ? {
                done: !1,
                value: r[0]
            } : $n.next($e);
            S && (He.value = S(He.value));
            let {
                done: mn
            } = He;
            !Y && G !== null && (mn = m >= 0 ? M >= oe : M <= 0);
            const Y0 = P === null && (b === "finished" || b === "running" && mn);
            return d && d(He.value), Y0 && N(), He
        },
        $ = () => {
            h && h.stop(), h = void 0
        },
        de = () => {
            b = "idle", $(), y(), v(), A = R = null
        },
        N = () => {
            b = "finished", c && c(), $(), y()
        },
        L = () => {
            if (x) return;
            h || (h = n(ee));
            const O = h.now();
            l && l(), P !== null ? A = O - P : (!A || b === "finished") && (A = O), b === "finished" && v(), R = A, P = null, b = "running", h.start()
        };
    e && L();
    const V = {
        then(O, H) {
            return T.then(O, H)
        },
        get time() {
            return Rt(M)
        },
        set time(O) {
            O = on(O), M = O, P !== null || !h || m === 0 ? P = O : A = h.now() - O / m
        },
        get duration() {
            const O = C.calculatedDuration === null ? sf(C) : C.calculatedDuration;
            return Rt(O)
        },
        get speed() {
            return m
        },
        set speed(O) {
            O === m || !h || (m = O, V.time = Rt(M))
        },
        get state() {
            return b
        },
        play: L,
        pause: () => {
            b = "paused", P = M
        },
        stop: () => {
            x = !0, b !== "idle" && (b = "idle", u && u(), de())
        },
        cancel: () => {
            R !== null && ee(R), de()
        },
        complete: () => {
            b = "finished"
        },
        sample: O => (A = 0, ee(O))
    };
    return V
}

function qT(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const ZT = qT(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    JT = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
    li = 10,
    eC = 2e4,
    tC = (e, t) => t.type === "spring" || e === "backgroundColor" || !Ag(t.ease);

function nC(e, t, {
    onUpdate: n,
    onComplete: r,
    ...o
}) {
    if (!(ZT() && JT.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia")) return !1;
    let s = !1,
        a, l, u = !1;
    const c = () => {
        l = new Promise(g => {
            a = g
        })
    };
    c();
    let {
        keyframes: d,
        duration: p = 300,
        ease: m,
        times: x
    } = o;
    if (tC(t, o)) {
        const g = ts({ ...o,
            repeat: 0,
            delay: 0
        });
        let S = {
            done: !1,
            value: d[0]
        };
        const C = [];
        let E = 0;
        for (; !S.done && E < eC;) S = g.sample(E), C.push(S.value), E += li;
        x = void 0, d = C, p = E - li, m = "linear"
    }
    const y = fT(e.owner.current, t, d, { ...o,
            duration: p,
            ease: m,
            times: x
        }),
        T = () => {
            u = !1, y.cancel()
        },
        v = () => {
            u = !0, J.update(T), a(), c()
        };
    return y.onfinish = () => {
        u || (e.set(pT(d, o)), r && r(), v())
    }, {
        then(g, S) {
            return l.then(g, S)
        },
        attachTimeline(g) {
            return y.timeline = g, y.onfinish = null, ce
        },
        get time() {
            return Rt(y.currentTime || 0)
        },
        set time(g) {
            y.currentTime = on(g)
        },
        get speed() {
            return y.playbackRate
        },
        set speed(g) {
            y.playbackRate = g
        },
        get duration() {
            return Rt(p)
        },
        play: () => {
            s || (y.play(), Dt(T))
        },
        pause: () => y.pause(),
        stop: () => {
            if (s = !0, y.playState === "idle") return;
            const {
                currentTime: g
            } = y;
            if (g) {
                const S = ts({ ...o,
                    autoplay: !1
                });
                e.setWithVelocity(S.sample(g - li).value, S.sample(g).value, li)
            }
            v()
        },
        complete: () => {
            u || y.finish()
        },
        cancel: v
    }
}

function rC({
    keyframes: e,
    delay: t,
    onUpdate: n,
    onComplete: r
}) {
    const o = () => (n && n(e[e.length - 1]), r && r(), {
        time: 0,
        speed: 1,
        duration: 0,
        play: ce,
        pause: ce,
        stop: ce,
        then: i => (i(), Promise.resolve()),
        cancel: ce,
        complete: ce
    });
    return t ? ts({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: o
    }) : o()
}
const oC = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    iC = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    sC = {
        type: "keyframes",
        duration: .8
    },
    aC = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    lC = (e, {
        keyframes: t
    }) => t.length > 2 ? sC : Bn.has(e) ? e.startsWith("scale") ? iC(t[1]) : oC : aC,
    Il = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (cn.test(t) || t === "0") && !t.startsWith("url(")),
    uC = new Set(["brightness", "contrast", "saturate", "opacity"]);

function cC(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Ms) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = uC.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")"
}
const dC = /([a-z-]*)\(.*?\)/g,
    Ol = { ...cn,
        getAnimatableNone: e => {
            const t = e.match(dC);
            return t ? t.map(cC).join(" ") : e
        }
    },
    fC = { ...hg,
        color: je,
        backgroundColor: je,
        outlineColor: je,
        fill: je,
        stroke: je,
        borderColor: je,
        borderTopColor: je,
        borderRightColor: je,
        borderBottomColor: je,
        borderLeftColor: je,
        filter: Ol,
        WebkitFilter: Ol
    },
    ac = e => fC[e];

function e0(e, t) {
    let n = ac(e);
    return n !== Ol && (n = cn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const t0 = e => /^0[^.\s]+$/.test(e);

function pC(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || t0(e)
}

function hC(e, t, n, r) {
    const o = Il(t, n);
    let i;
    Array.isArray(n) ? i = [...n] : i = [null, n];
    const s = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < i.length; u++) i[u] === null && (i[u] = u === 0 ? s : i[u - 1]), pC(i[u]) && l.push(u), typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
    if (o && l.length && a)
        for (let u = 0; u < l.length; u++) {
            const c = l[u];
            i[c] = e0(t, a)
        }
    return i
}

function mC({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: o,
    repeat: i,
    repeatType: s,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...c
}) {
    return !!Object.keys(c).length
}

function lc(e, t) {
    return e[t] || e.default || e
}
const gC = {
        skipAnimations: !1
    },
    uc = (e, t, n, r = {}) => o => {
        const i = lc(r, e) || {},
            s = i.delay || r.delay || 0;
        let {
            elapsed: a = 0
        } = r;
        a = a - on(s);
        const l = hC(t, e, n, i),
            u = l[0],
            c = l[l.length - 1],
            d = Il(e, u),
            p = Il(e, c);
        let m = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...i,
            delay: -a,
            onUpdate: x => {
                t.set(x), i.onUpdate && i.onUpdate(x)
            },
            onComplete: () => {
                o(), i.onComplete && i.onComplete()
            }
        };
        if (mC(i) || (m = { ...m,
                ...lC(e, m)
            }), m.duration && (m.duration = on(m.duration)), m.repeatDelay && (m.repeatDelay = on(m.repeatDelay)), !d || !p || dT.current || i.type === !1 || gC.skipAnimations) return rC(m);
        if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
            const x = nC(t, e, m);
            if (x) return x
        }
        return ts(m)
    };

function ns(e) {
    return !!(Ue(e) && e.add)
}
const n0 = e => /^\-?\d*\.?\d+$/.test(e);

function cc(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function dc(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class fc {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return cc(this.subscriptions, t), () => dc(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const vC = e => !isNaN(parseFloat(e));
class yC {
    constructor(t, n = {}) {
        this.version = "10.18.0", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
            this.prev = this.current, this.current = r;
            const {
                delta: i,
                timestamp: s
            } = Ee;
            this.lastUpdated !== s && (this.timeDelta = i, this.lastUpdated = s, J.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.scheduleVelocityCheck = () => J.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: r
        }) => {
            r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = vC(this.current), this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new fc);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), J.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t, n = !0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = t, this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? qg(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Tr(e, t) {
    return new yC(e, t)
}
const r0 = e => t => t.test(e),
    xC = {
        test: e => e === "auto",
        parse: e => e
    },
    o0 = [Un, D, St, Bt, ES, bS, xC],
    zr = e => o0.find(r0(e)),
    wC = [...o0, je, cn],
    SC = e => wC.find(r0(e));

function TC(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Tr(n))
}

function CC(e, t) {
    const n = Is(e, t);
    let {
        transitionEnd: r = {},
        transition: o = {},
        ...i
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    i = { ...i,
        ...r
    };
    for (const s in i) {
        const a = zS(i[s]);
        TC(e, s, a)
    }
}

function bC(e, t, n) {
    var r, o;
    const i = Object.keys(t).filter(a => !e.hasValue(a)),
        s = i.length;
    if (s)
        for (let a = 0; a < s; a++) {
            const l = i[a],
                u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]), c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), c != null && (typeof c == "string" && (n0(c) || t0(c)) ? c = parseFloat(c) : !SC(c) && cn.test(u) && (c = e0(l, u)), e.addValue(l, Tr(c, {
                owner: e
            })), n[l] === void 0 && (n[l] = c), c !== null && e.setBaseTarget(l, c))
        }
}

function EC(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}

function PC(e, t, n) {
    const r = {};
    for (const o in e) {
        const i = EC(o, t);
        if (i !== void 0) r[o] = i;
        else {
            const s = n.getValue(o);
            s && (r[o] = s.get())
        }
    }
    return r
}

function kC({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function NC(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n) return !0
    } else return n !== t
}

function i0(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: o
} = {}) {
    let {
        transition: i = e.getDefaultTransition(),
        transitionEnd: s,
        ...a
    } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (i = r);
    const u = [],
        c = o && e.animationState && e.animationState.getState()[o];
    for (const d in a) {
        const p = e.getValue(d),
            m = a[d];
        if (!p || m === void 0 || c && kC(c, d)) continue;
        const x = {
            delay: n,
            elapsed: 0,
            ...lc(i || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const v = e.getProps()[sg];
            if (v) {
                const h = window.HandoffAppearAnimations(v, d, p, J);
                h !== null && (x.elapsed = h, x.isHandoff = !0)
            }
        }
        let y = !x.isHandoff && !NC(p, m);
        if (x.type === "spring" && (p.getVelocity() || x.velocity) && (y = !1), p.animation && (y = !1), y) continue;
        p.start(uc(d, p, m, e.shouldReduceMotion && Bn.has(d) ? {
            type: !1
        } : x));
        const T = p.animation;
        ns(l) && (l.add(d), T.then(() => l.remove(d))), u.push(T)
    }
    return s && Promise.all(u).then(() => {
        s && CC(e, s)
    }), u
}

function _l(e, t, n = {}) {
    const r = Is(e, t, n.custom);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(i0(e, r, n)) : () => Promise.resolve(),
        s = e.variantChildren && e.variantChildren.size ? (l = 0) => {
            const {
                delayChildren: u = 0,
                staggerChildren: c,
                staggerDirection: d
            } = o;
            return jC(e, t, u + l, c, d, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = o;
    if (a) {
        const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
        return l().then(() => u())
    } else return Promise.all([i(), s(n.delay)])
}

function jC(e, t, n = 0, r = 0, o = 1, i) {
    const s = [],
        a = (e.variantChildren.size - 1) * r,
        l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return Array.from(e.variantChildren).sort(AC).forEach((u, c) => {
        u.notify("AnimationStart", t), s.push(_l(u, t, { ...i,
            delay: n + l(c)
        }).then(() => u.notify("AnimationComplete", t)))
    }), Promise.all(s)
}

function AC(e, t) {
    return e.sortNodePosition(t)
}

function RC(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => _l(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string") r = _l(e, t, n);
    else {
        const o = typeof t == "function" ? Is(e, t, n.custom) : t;
        r = Promise.all(i0(e, o, n))
    }
    return r.then(() => e.notify("AnimationComplete", t))
}
const MC = [...Yu].reverse(),
    LC = Yu.length;

function IC(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => RC(e, n, r)))
}

function OC(e) {
    let t = IC(e);
    const n = DC();
    let r = !0;
    const o = (l, u) => {
        const c = Is(e, u);
        if (c) {
            const {
                transition: d,
                transitionEnd: p,
                ...m
            } = c;
            l = { ...l,
                ...m,
                ...p
            }
        }
        return l
    };

    function i(l) {
        t = l(e)
    }

    function s(l, u) {
        const c = e.getProps(),
            d = e.getVariantContext(!0) || {},
            p = [],
            m = new Set;
        let x = {},
            y = 1 / 0;
        for (let v = 0; v < LC; v++) {
            const h = MC[v],
                g = n[h],
                S = c[h] !== void 0 ? c[h] : d[h],
                C = Po(S),
                E = h === u ? g.isActive : null;
            E === !1 && (y = v);
            let b = S === d[h] && S !== c[h] && C;
            if (b && r && e.manuallyAnimateOnMount && (b = !1), g.protectedKeys = { ...x
                }, !g.isActive && E === null || !S && !g.prevProp || As(S) || typeof S == "boolean") continue;
            let A = _C(g.prevProp, S) || h === u && g.isActive && !b && C || v > y && C,
                R = !1;
            const G = Array.isArray(S) ? S : [S];
            let _ = G.reduce(o, {});
            E === !1 && (_ = {});
            const {
                prevResolvedValues: oe = {}
            } = g, M = { ...oe,
                ..._
            }, ee = $ => {
                A = !0, m.has($) && (R = !0, m.delete($)), g.needsAnimating[$] = !0
            };
            for (const $ in M) {
                const de = _[$],
                    N = oe[$];
                if (x.hasOwnProperty($)) continue;
                let L = !1;
                Zi(de) && Zi(N) ? L = !Ng(de, N) : L = de !== N, L ? de !== void 0 ? ee($) : m.add($) : de !== void 0 && m.has($) ? ee($) : g.protectedKeys[$] = !0
            }
            g.prevProp = S, g.prevResolvedValues = _, g.isActive && (x = { ...x,
                ..._
            }), r && e.blockInitialAnimation && (A = !1), A && (!b || R) && p.push(...G.map($ => ({
                animation: $,
                options: {
                    type: h,
                    ...l
                }
            })))
        }
        if (m.size) {
            const v = {};
            m.forEach(h => {
                const g = e.getBaseTarget(h);
                g !== void 0 && (v[h] = g)
            }), p.push({
                animation: v
            })
        }
        let T = !!p.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (T = !1), r = !1, T ? t(p) : Promise.resolve()
    }

    function a(l, u, c) {
        var d;
        if (n[l].isActive === u) return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(m => {
            var x;
            return (x = m.animationState) === null || x === void 0 ? void 0 : x.setActive(l, u)
        }), n[l].isActive = u;
        const p = s(c, l);
        for (const m in n) n[m].protectedKeys = {};
        return p
    }
    return {
        animateChanges: s,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n
    }
}

function _C(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ng(t, e) : !1
}

function vn(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function DC() {
    return {
        animate: vn(!0),
        whileInView: vn(),
        whileHover: vn(),
        whileTap: vn(),
        whileDrag: vn(),
        whileFocus: vn(),
        exit: vn()
    }
}
class VC extends hn {
    constructor(t) {
        super(t), t.animationState || (t.animationState = OC(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        this.unmount(), As(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let FC = 0;
class zC extends hn {
    constructor() {
        super(...arguments), this.id = FC++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n,
            custom: r
        } = this.node.presenceContext, {
            isPresent: o
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === o) return;
        const i = this.node.animationState.setActive("exit", !t, {
            custom: r ? ? this.node.getProps().custom
        });
        n && !t && i.then(() => n(this.id))
    }
    mount() {
        const {
            register: t
        } = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const BC = {
        animation: {
            Feature: VC
        },
        exit: {
            Feature: zC
        }
    },
    af = (e, t) => Math.abs(e - t);

function UC(e, t) {
    const n = af(e.x, t.x),
        r = af(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class s0 {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: o,
        dragSnapToOrigin: i = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const d = Ca(this.lastMoveEventInfo, this.history),
                    p = this.startEvent !== null,
                    m = UC(d.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!p && !m) return;
                const {
                    point: x
                } = d, {
                    timestamp: y
                } = Ee;
                this.history.push({ ...x,
                    timestamp: y
                });
                const {
                    onStart: T,
                    onMove: v
                } = this.handlers;
                p || (T && T(this.lastMoveEvent, d), this.startEvent = this.lastMoveEvent), v && v(this.lastMoveEvent, d)
            }, this.handlePointerMove = (d, p) => {
                this.lastMoveEvent = d, this.lastMoveEventInfo = Ta(p, this.transformPagePoint), J.update(this.updatePoint, !0)
            }, this.handlePointerUp = (d, p) => {
                this.end();
                const {
                    onEnd: m,
                    onSessionEnd: x,
                    resumeAnimation: y
                } = this.handlers;
                if (this.dragSnapToOrigin && y && y(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const T = Ca(d.type === "pointercancel" ? this.lastMoveEventInfo : Ta(p, this.transformPagePoint), this.history);
                this.startEvent && m && m(d, T), x && x(d, T)
            }, !Cg(t)) return;
        this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
        const s = Ls(t),
            a = Ta(s, this.transformPagePoint),
            {
                point: l
            } = a,
            {
                timestamp: u
            } = Ee;
        this.history = [{ ...l,
            timestamp: u
        }];
        const {
            onSessionStart: c
        } = n;
        c && c(t, Ca(a, this.history)), this.removeListeners = rn(At(this.contextWindow, "pointermove", this.handlePointerMove), At(this.contextWindow, "pointerup", this.handlePointerUp), At(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), Dt(this.updatePoint)
    }
}

function Ta(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function lf(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Ca({
    point: e
}, t) {
    return {
        point: e,
        delta: lf(e, a0(t)),
        offset: lf(e, $C(t)),
        velocity: HC(t, .1)
    }
}

function $C(e) {
    return e[0]
}

function a0(e) {
    return e[e.length - 1]
}

function HC(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const o = a0(e);
    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > on(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const i = Rt(o.timestamp - r.timestamp);
    if (i === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function Qe(e) {
    return e.max - e.min
}

function Dl(e, t = 0, n = .01) {
    return Math.abs(e - t) <= n
}

function uf(e, t, n, r = .5) {
    e.origin = r, e.originPoint = se(t.min, t.max, e.origin), e.scale = Qe(n) / Qe(t), (Dl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = se(n.min, n.max, e.origin) - e.originPoint, (Dl(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}

function oo(e, t, n, r) {
    uf(e.x, t.x, n.x, r ? r.originX : void 0), uf(e.y, t.y, n.y, r ? r.originY : void 0)
}

function cf(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + Qe(t)
}

function WC(e, t, n) {
    cf(e.x, t.x, n.x), cf(e.y, t.y, n.y)
}

function df(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + Qe(t)
}

function io(e, t, n) {
    df(e.x, t.x, n.x), df(e.y, t.y, n.y)
}

function GC(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)), e
}

function ff(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function KC(e, {
    top: t,
    left: n,
    bottom: r,
    right: o
}) {
    return {
        x: ff(e.x, n, o),
        y: ff(e.y, t, r)
    }
}

function pf(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function YC(e, t) {
    return {
        x: pf(e.x, t.x),
        y: pf(e.y, t.y)
    }
}

function QC(e, t) {
    let n = .5;
    const r = Qe(e),
        o = Qe(t);
    return o > r ? n = No(t.min, t.max - r, e.min) : r > o && (n = No(e.min, e.max - o, t.min)), un(0, 1, n)
}

function XC(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Vl = .35;

function qC(e = Vl) {
    return e === !1 ? e = 0 : e === !0 && (e = Vl), {
        x: hf(e, "left", "right"),
        y: hf(e, "top", "bottom")
    }
}

function hf(e, t, n) {
    return {
        min: mf(e, t),
        max: mf(e, n)
    }
}

function mf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const gf = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    sr = () => ({
        x: gf(),
        y: gf()
    }),
    vf = () => ({
        min: 0,
        max: 0
    }),
    pe = () => ({
        x: vf(),
        y: vf()
    });

function Je(e) {
    return [e("x"), e("y")]
}

function l0({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function ZC({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function JC(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function ba(e) {
    return e === void 0 || e === 1
}

function Fl({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !ba(e) || !ba(t) || !ba(n)
}

function wn(e) {
    return Fl(e) || u0(e) || e.z || e.rotate || e.rotateX || e.rotateY
}

function u0(e) {
    return yf(e.x) || yf(e.y)
}

function yf(e) {
    return e && e !== "0%"
}

function rs(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o
}

function xf(e, t, n, r, o) {
    return o !== void 0 && (e = rs(e, o, r)), rs(e, n, r) + t
}

function zl(e, t = 0, n = 1, r, o) {
    e.min = xf(e.min, t, n, r, o), e.max = xf(e.max, t, n, r, o)
}

function c0(e, {
    x: t,
    y: n
}) {
    zl(e.x, t.translate, t.scale, t.originPoint), zl(e.y, n.translate, n.scale, n.originPoint)
}

function eb(e, t, n, r = !1) {
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let i, s;
    for (let a = 0; a < o; a++) {
        i = n[a], s = i.projectionDelta;
        const l = i.instance;
        l && l.style && l.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && ar(e, {
            x: -i.scroll.offset.x,
            y: -i.scroll.offset.y
        }), s && (t.x *= s.x.scale, t.y *= s.y.scale, c0(e, s)), r && wn(i.latestValues) && ar(e, i.latestValues))
    }
    t.x = wf(t.x), t.y = wf(t.y)
}

function wf(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}

function Ht(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function Sf(e, t, [n, r, o]) {
    const i = t[o] !== void 0 ? t[o] : .5,
        s = se(e.min, e.max, i);
    zl(e, t[n], t[r], s, t.scale)
}
const tb = ["x", "scaleX", "originX"],
    nb = ["y", "scaleY", "originY"];

function ar(e, t) {
    Sf(e.x, t, tb), Sf(e.y, t, nb)
}

function d0(e, t) {
    return l0(JC(e.getBoundingClientRect(), t))
}

function rb(e, t, n) {
    const r = d0(e, n),
        {
            scroll: o
        } = t;
    return o && (Ht(r.x, o.offset.x), Ht(r.y, o.offset.y)), r
}
const f0 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    ob = new WeakMap;
class ib {
    constructor(t) {
        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = pe(), this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1
    } = {}) {
        const {
            presenceContext: r
        } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const o = c => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                d ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Ls(c, "page").point)
            },
            i = (c, d) => {
                const {
                    drag: p,
                    dragPropagation: m,
                    onDragStart: x
                } = this.getProps();
                if (p && !m && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Eg(p), !this.openGlobalLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Je(T => {
                    let v = this.getAxisMotionValue(T).get() || 0;
                    if (St.test(v)) {
                        const {
                            projection: h
                        } = this.visualElement;
                        if (h && h.layout) {
                            const g = h.layout.layoutBox[T];
                            g && (v = Qe(g) * (parseFloat(v) / 100))
                        }
                    }
                    this.originPoint[T] = v
                }), x && J.update(() => x(c, d), !1, !0);
                const {
                    animationState: y
                } = this.visualElement;
                y && y.setActive("whileDrag", !0)
            },
            s = (c, d) => {
                const {
                    dragPropagation: p,
                    dragDirectionLock: m,
                    onDirectionLock: x,
                    onDrag: y
                } = this.getProps();
                if (!p && !this.openGlobalLock) return;
                const {
                    offset: T
                } = d;
                if (m && this.currentDirection === null) {
                    this.currentDirection = sb(T), this.currentDirection !== null && x && x(this.currentDirection);
                    return
                }
                this.updateAxis("x", d.point, T), this.updateAxis("y", d.point, T), this.visualElement.render(), y && y(c, d)
            },
            a = (c, d) => this.stop(c, d),
            l = () => Je(c => {
                var d;
                return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
            }),
            {
                dragSnapToOrigin: u
            } = this.getProps();
        this.panSession = new s0(t, {
            onSessionStart: o,
            onStart: i,
            onMove: s,
            onSessionEnd: a,
            resumeAnimation: l
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: f0(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(), !r) return;
        const {
            velocity: o
        } = n;
        this.startAnimation(o);
        const {
            onDragEnd: i
        } = this.getProps();
        i && J.update(() => i(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: o
        } = this.getProps();
        if (!r || !ui(t, o, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = GC(s, this.constraints[t], this.elastic[t])), i.set(s)
    }
    resolveConstraints() {
        var t;
        const {
            dragConstraints: n,
            dragElastic: r
        } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, i = this.constraints;
        n && or(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = KC(o.layoutBox, n) : this.constraints = !1, this.elastic = qC(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Je(s => {
            this.getAxisMotionValue(s) && (this.constraints[s] = XC(o.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !or(t)) return !1;
        const r = t.current,
            {
                projection: o
            } = this.visualElement;
        if (!o || !o.layout) return !1;
        const i = rb(r, o.root, this.visualElement.getTransformPagePoint());
        let s = YC(o.layout.layoutBox, i);
        if (n) {
            const a = n(ZC(s));
            this.hasMutatedConstraints = !!a, a && (s = l0(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: o,
            dragTransition: i,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = Je(c => {
            if (!ui(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            s && (d = {
                min: 0,
                max: 0
            });
            const p = o ? 200 : 1e6,
                m = o ? 40 : 1e7,
                x = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: p,
                    bounceDamping: m,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...i,
                    ...d
                };
            return this.startAxisValueAnimation(c, x)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(uc(t, r, 0, n))
    }
    stopAnimation() {
        Je(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Je(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Je(n => {
            const {
                drag: r
            } = this.getProps();
            if (!ui(n, r, this.currentDirection)) return;
            const {
                projection: o
            } = this.visualElement, i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {
                    min: s,
                    max: a
                } = o.layout.layoutBox[n];
                i.set(t[n] - se(s, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!or(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Je(s => {
            const a = this.getAxisMotionValue(s);
            if (a) {
                const l = a.get();
                o[s] = QC({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: i
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Je(s => {
            if (!ui(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(se(l, u, o[s]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        ob.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = At(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: c = !0
                } = this.getProps();
                u && c && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                or(l) && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: o
            } = this.visualElement,
            i = o.addEventListener("measure", r);
        o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
        const s = Nt(window, "resize", () => this.scalePositionWithinConstraints()),
            a = o.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (Je(c => {
                    const d = this.getAxisMotionValue(c);
                    d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate))
                }), this.visualElement.render())
            });
        return () => {
            s(), n(), i(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: o = !1,
                dragConstraints: i = !1,
                dragElastic: s = Vl,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function ui(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function sb(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class ab extends hn {
    constructor(t) {
        super(t), this.removeGroupControls = ce, this.removeListeners = ce, this.controls = new ib(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ce
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Tf = e => (t, n) => {
    e && J.update(() => e(t, n))
};
class lb extends hn {
    constructor() {
        super(...arguments), this.removePointerDownListener = ce
    }
    onPointerDown(t) {
        this.session = new s0(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: f0(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: o
        } = this.node.getProps();
        return {
            onSessionStart: Tf(t),
            onStart: Tf(n),
            onMove: r,
            onEnd: (i, s) => {
                delete this.session, o && J.update(() => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = At(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}

function ub() {
    const e = w.useContext(Gu);
    if (e === null) return [!0, null];
    const {
        isPresent: t,
        onExitComplete: n,
        register: r
    } = e, o = w.useId();
    return w.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0]
}
const bi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Cf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Br = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (D.test(e)) e = parseFloat(e);
                else return e;
            const n = Cf(e, t.target.x),
                r = Cf(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    cb = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                o = cn.parse(e);
            if (o.length > 5) return r;
            const i = cn.createTransformer(e),
                s = typeof o[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            o[0 + s] /= a, o[1 + s] /= l;
            const u = se(a, l, .5);
            return typeof o[2 + s] == "number" && (o[2 + s] /= u), typeof o[3 + s] == "number" && (o[3 + s] /= u), i(o)
        }
    };
class db extends z.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: o
        } = this.props, {
            projection: i
        } = t;
        vS(fb), i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({ ...i.options,
            onExitComplete: () => this.safeToRemove()
        })), bi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: o,
            isPresent: i
        } = this.props, s = r.projection;
        return s && (s.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || J.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), queueMicrotask(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: o
        } = t;
        o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function p0(e) {
    const [t, n] = ub(), r = w.useContext(lg);
    return z.createElement(db, { ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(ug),
        isPresent: t,
        safeToRemove: n
    })
}
const fb = {
        borderRadius: { ...Br,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Br,
        borderTopRightRadius: Br,
        borderBottomLeftRadius: Br,
        borderBottomRightRadius: Br,
        boxShadow: cb
    },
    h0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    pb = h0.length,
    bf = e => typeof e == "string" ? parseFloat(e) : e,
    Ef = e => typeof e == "number" || D.test(e);

function hb(e, t, n, r, o, i) {
    o ? (e.opacity = se(0, n.opacity !== void 0 ? n.opacity : 1, mb(r)), e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, gb(r))) : i && (e.opacity = se(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let s = 0; s < pb; s++) {
        const a = `border${h0[s]}Radius`;
        let l = Pf(t, a),
            u = Pf(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Ef(l) === Ef(u) ? (e[a] = Math.max(se(bf(l), bf(u), r), 0), (St.test(u) || St.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r))
}

function Pf(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const mb = m0(0, .5, Dg),
    gb = m0(.5, .95, ce);

function m0(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(No(e, t, r))
}

function kf(e, t) {
    e.min = t.min, e.max = t.max
}

function Ze(e, t) {
    kf(e.x, t.x), kf(e.y, t.y)
}

function Nf(e, t, n, r, o) {
    return e -= t, e = rs(e, 1 / n, r), o !== void 0 && (e = rs(e, 1 / o, r)), e
}

function vb(e, t = 0, n = 1, r = .5, o, i = e, s = e) {
    if (St.test(t) && (t = parseFloat(t), t = se(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = se(i.min, i.max, r);
    e === i && (a -= t), e.min = Nf(e.min, t, n, a, o), e.max = Nf(e.max, t, n, a, o)
}

function jf(e, t, [n, r, o], i, s) {
    vb(e, t[n], t[r], t[o], t.scale, i, s)
}
const yb = ["x", "scaleX", "originX"],
    xb = ["y", "scaleY", "originY"];

function Af(e, t, n, r) {
    jf(e.x, t, yb, n ? n.x : void 0, r ? r.x : void 0), jf(e.y, t, xb, n ? n.y : void 0, r ? r.y : void 0)
}

function Rf(e) {
    return e.translate === 0 && e.scale === 1
}

function g0(e) {
    return Rf(e.x) && Rf(e.y)
}

function wb(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}

function v0(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}

function Mf(e) {
    return Qe(e.x) / Qe(e.y)
}
class Sb {
    constructor() {
        this.members = []
    }
    add(t) {
        cc(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (dc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(o => t === o);
        if (n === 0) return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: o
            } = t.options;
            o === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function Lf(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
        i = e.y.translate / t.y;
    if ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            rotate: l,
            rotateX: u,
            rotateY: c
        } = n;
        l && (r += `rotate(${l}deg) `), u && (r += `rotateX(${u}deg) `), c && (r += `rotateY(${c}deg) `)
    }
    const s = e.x.scale * t.x,
        a = e.y.scale * t.y;
    return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none"
}
const Tb = (e, t) => e.depth - t.depth;
class Cb {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        cc(this.children, t), this.isDirty = !0
    }
    remove(t) {
        dc(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Tb), this.isDirty = !1, this.children.forEach(t)
    }
}

function bb(e, t) {
    const n = performance.now(),
        r = ({
            timestamp: o
        }) => {
            const i = o - n;
            i >= t && (Dt(r), e(i - t))
        };
    return J.read(r, !0), () => Dt(r)
}

function Eb(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}

function Pb(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}

function kb(e, t, n) {
    const r = Ue(e) ? e : Tr(e);
    return r.start(uc("", r, t, n)), r.animation
}
const If = ["", "X", "Y", "Z"],
    Nb = {
        visibility: "hidden"
    },
    Of = 1e3;
let jb = 0;
const Sn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};

function y0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = jb++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, Sn.totalNodes = Sn.resolvedTargetDeltas = Sn.recalculatedProjection = 0, this.nodes.forEach(Mb), this.nodes.forEach(Db), this.nodes.forEach(Vb), this.nodes.forEach(Lb), Eb(Sn)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Cb)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new fc), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s, a = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = Pb(s), this.instance = s;
            const {
                layoutId: l,
                layout: u,
                visualElement: c
            } = this.options;
            if (c && !c.current && c.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), a && (u || l) && (this.isLayoutDirty = !0), e) {
                let d;
                const p = () => this.root.updateBlockedByResize = !1;
                e(s, () => {
                    this.root.updateBlockedByResize = !0, d && d(), d = bb(p, 250), bi.hasAnimatedSinceResize && (bi.hasAnimatedSinceResize = !1, this.nodes.forEach(Df))
                })
            }
            l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && c && (l || u) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: p,
                hasRelativeTargetChanged: m,
                layout: x
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const y = this.options.transition || c.getDefaultTransition() || $b,
                    {
                        onLayoutAnimationStart: T,
                        onLayoutAnimationComplete: v
                    } = c.getProps(),
                    h = !this.targetLayout || !v0(this.targetLayout, x) || m,
                    g = !p && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || g || p && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, g);
                    const S = { ...lc(y, "layout"),
                        onPlay: T,
                        onComplete: v
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (S.delay = 0, S.type = !1), this.startAnimation(S)
                } else p || Df(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = x
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Dt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Fb), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_f);
                return
            }
            this.isUpdating || this.nodes.forEach(Ob), this.isUpdating = !1, this.nodes.forEach(_b), this.nodes.forEach(Ab), this.nodes.forEach(Rb), this.clearAllSnapshots();
            const a = performance.now();
            Ee.delta = un(0, 1e3 / 60, a - Ee.timestamp), Ee.timestamp = a, Ee.isProcessing = !0, ha.update.process(Ee), ha.preRender.process(Ee), ha.render.process(Ee), Ee.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Ib), this.sharedNodes.forEach(zb)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, J.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            J.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = pe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && (this.scroll = {
                animationId: this.root.animationId,
                phase: s,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!o) return;
            const s = this.isLayoutDirty || this.shouldResetTransform,
                a = this.projectionDelta && !g0(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && (a || wn(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), Hb(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return pe();
            const a = s.measureViewportBox(),
                {
                    scroll: l
                } = this.root;
            return l && (Ht(a.x, l.offset.x), Ht(a.y, l.offset.y)), a
        }
        removeElementScroll(s) {
            const a = pe();
            Ze(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l],
                    {
                        scroll: c,
                        options: d
                    } = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Ze(a, s);
                        const {
                            scroll: p
                        } = this.root;
                        p && (Ht(a.x, -p.offset.x), Ht(a.y, -p.offset.y))
                    }
                    Ht(a.x, c.offset.x), Ht(a.y, c.offset.y)
                }
            }
            return a
        }
        applyTransform(s, a = !1) {
            const l = pe();
            Ze(l, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !a && c.options.layoutScroll && c.scroll && c !== c.root && ar(l, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }), wn(c.latestValues) && ar(l, c.latestValues)
            }
            return wn(this.latestValues) && ar(l, this.latestValues), l
        }
        removeTransform(s) {
            const a = pe();
            Ze(a, s);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !wn(u.latestValues)) continue;
                Fl(u.latestValues) && u.updateSnapshot();
                const c = pe(),
                    d = u.measurePageBox();
                Ze(c, d), Af(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return wn(this.latestValues) && Af(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ee.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== l;
            if (!(s || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget)) return;
            const {
                layout: d,
                layoutId: p
            } = this.options;
            if (!(!this.layout || !(d || p))) {
                if (this.resolvedRelativeTargetAt = Ee.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), io(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = pe(), this.targetWithTransforms = pe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), WC(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ze(this.target, this.layout.layoutBox), c0(this.target, this.targetDelta)) : Ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = pe(), this.relativeTargetOrigin = pe(), io(this.relativeTargetOrigin, this.target, m.target), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Sn.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Fl(this.parent.latestValues) || u0(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var s;
            const a = this.getLead(),
                l = !!this.resumingFrom || this !== a;
            let u = !0;
            if ((this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty) && (u = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Ee.timestamp && (u = !1), u) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(c || d)) return;
            Ze(this.layoutCorrected, this.layout.layoutBox);
            const p = this.treeScale.x,
                m = this.treeScale.y;
            eb(this.layoutCorrected, this.treeScale, this.path, l), a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {
                target: x
            } = a;
            if (!x) {
                this.projectionTransform && (this.projectionDelta = sr(), this.projectionTransform = "none", this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = sr(), this.projectionDeltaWithTransform = sr());
            const y = this.projectionTransform;
            oo(this.projectionDelta, this.layoutCorrected, x, this.latestValues), this.projectionTransform = Lf(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== p || this.treeScale.y !== m) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", x)), Sn.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            if (this.options.scheduleRender && this.options.scheduleRender(), s) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = sr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const p = pe(),
                m = l ? l.source : void 0,
                x = this.layout ? this.layout.source : void 0,
                y = m !== x,
                T = this.getStack(),
                v = !T || T.members.length <= 1,
                h = !!(y && !v && this.options.crossfade === !0 && !this.path.some(Ub));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = S => {
                const C = S / 1e3;
                Vf(d.x, s.x, C), Vf(d.y, s.y, C), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (io(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Bb(this.relativeTarget, this.relativeTargetOrigin, p, C), g && wb(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = pe()), Ze(g, this.relativeTarget)), y && (this.animationValues = c, hb(c, u, this.latestValues, C, h, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Dt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = J.update(() => {
                bi.hasAnimatedSinceResize = !0, this.currentAnimation = kb(0, Of, { ...s,
                    onUpdate: a => {
                        this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a)
                    },
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Of), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && x0(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || pe();
                    const d = Qe(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + d;
                    const p = Qe(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + p
                }
                Ze(a, l), ar(a, c), oo(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new Sb), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) || this : this
        }
        getPrevLead() {
            var s;
            const {
                layoutId: a
            } = this.options;
            return a ? (s = this.getStack()) === null || s === void 0 ? void 0 : s.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a) return;
            const u = {};
            for (let c = 0; c < If.length; c++) {
                const d = "rotate" + If[c];
                l[d] && (u[d] = l[d], s.setStaticValue(d, 0))
            }
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]);
            s.scheduleRender()
        }
        getProjectionStyles(s) {
            var a, l;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Nb;
            const u = {
                    visibility: ""
                },
                c = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, u.opacity = "", u.pointerEvents = Ci(s == null ? void 0 : s.pointerEvents) || "", u.transform = c ? c(this.latestValues, "") : "none", u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const y = {};
                return this.options.layoutId && (y.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, y.pointerEvents = Ci(s == null ? void 0 : s.pointerEvents) || ""), this.hasProjected && !wn(this.latestValues) && (y.transform = c ? c({}, "") : "none", this.hasProjected = !1), y
            }
            const p = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(), u.transform = Lf(this.projectionDeltaWithTransform, this.treeScale, p), c && (u.transform = c(p, u.transform));
            const {
                x: m,
                y: x
            } = this.projectionDelta;
            u.transformOrigin = `${m.origin*100}% ${x.origin*100}% 0`, d.animationValues ? u.opacity = d === this ? (l = (a = p.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = d === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
            for (const y in Xi) {
                if (p[y] === void 0) continue;
                const {
                    correct: T,
                    applyTo: v
                } = Xi[y], h = u.transform === "none" ? p[y] : T(p[y], d);
                if (v) {
                    const g = v.length;
                    for (let S = 0; S < g; S++) u[v[S]] = h
                } else u[y] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Ci(s == null ? void 0 : s.pointerEvents) || "" : "none"), u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }), this.root.nodes.forEach(_f), this.root.sharedNodes.clear()
        }
    }
}

function Ab(e) {
    e.updateLayout()
}

function Rb(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: o
        } = e.layout, {
            animationType: i
        } = e.options, s = n.source !== e.layout.source;
        i === "size" ? Je(d => {
            const p = s ? n.measuredBox[d] : n.layoutBox[d],
                m = Qe(p);
            p.min = r[d].min, p.max = p.min + m
        }) : x0(i, n.layoutBox, r) && Je(d => {
            const p = s ? n.measuredBox[d] : n.layoutBox[d],
                m = Qe(r[d]);
            p.max = p.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m)
        });
        const a = sr();
        oo(a, r, n.layoutBox);
        const l = sr();
        s ? oo(l, e.applyTransform(o, !0), n.measuredBox) : oo(l, r, n.layoutBox);
        const u = !g0(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: p,
                    layout: m
                } = d;
                if (p && m) {
                    const x = pe();
                    io(x, n.layoutBox, p.layoutBox);
                    const y = pe();
                    io(y, r, m.layoutBox), v0(x, y) || (c = !0), d.options.layoutRoot && (e.relativeTarget = y, e.relativeTargetOrigin = x, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function Mb(e) {
    Sn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Lb(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Ib(e) {
    e.clearSnapshot()
}

function _f(e) {
    e.clearMeasurements()
}

function Ob(e) {
    e.isLayoutDirty = !1
}

function _b(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Df(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function Db(e) {
    e.resolveTargetDelta()
}

function Vb(e) {
    e.calcProjection()
}

function Fb(e) {
    e.resetRotation()
}

function zb(e) {
    e.removeLeadSnapshot()
}

function Vf(e, t, n) {
    e.translate = se(t.translate, 0, n), e.scale = se(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Ff(e, t, n, r) {
    e.min = se(t.min, n.min, r), e.max = se(t.max, n.max, r)
}

function Bb(e, t, n, r) {
    Ff(e.x, t.x, n.x, r), Ff(e.y, t.y, n.y, r)
}

function Ub(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const $b = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    zf = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    Bf = zf("applewebkit/") && !zf("chrome/") ? Math.round : ce;

function Uf(e) {
    e.min = Bf(e.min), e.max = Bf(e.max)
}

function Hb(e) {
    Uf(e.x), Uf(e.y)
}

function x0(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Dl(Mf(t), Mf(n), .2)
}
const Wb = y0({
        attachResizeListener: (e, t) => Nt(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Ea = {
        current: void 0
    },
    w0 = y0({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Ea.current) {
                const e = new Wb({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Ea.current = e
            }
            return Ea.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Gb = {
        pan: {
            Feature: lb
        },
        drag: {
            Feature: ab,
            ProjectionNode: w0,
            MeasureLayout: p0
        }
    },
    Kb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

function Yb(e) {
    const t = Kb.exec(e);
    if (!t) return [, ];
    const [, n, r] = t;
    return [n, r]
}

function Bl(e, t, n = 1) {
    const [r, o] = Yb(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return n0(s) ? parseFloat(s) : s
    } else return Al(o) ? Bl(o, t, n + 1) : o
}

function Qb(e, { ...t
}, n) {
    const r = e.current;
    if (!(r instanceof Element)) return {
        target: t,
        transitionEnd: n
    };
    n && (n = { ...n
    }), e.values.forEach(o => {
        const i = o.get();
        if (!Al(i)) return;
        const s = Bl(i, r);
        s && o.set(s)
    });
    for (const o in t) {
        const i = t[o];
        if (!Al(i)) continue;
        const s = Bl(i, r);
        s && (t[o] = s, n || (n = {}), n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const Xb = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
    S0 = e => Xb.has(e),
    qb = e => Object.keys(e).some(S0),
    $f = e => e === Un || e === D,
    Hf = (e, t) => parseFloat(e.split(", ")[t]),
    Wf = (e, t) => (n, {
        transform: r
    }) => {
        if (r === "none" || !r) return 0;
        const o = r.match(/^matrix3d\((.+)\)$/);
        if (o) return Hf(o[1], t); {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? Hf(i[1], e) : 0
        }
    },
    Zb = new Set(["x", "y", "z"]),
    Jb = Oo.filter(e => !Zb.has(e));

function eE(e) {
    const t = [];
    return Jb.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.render(), t
}
const Cr = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: Wf(4, 13),
    y: Wf(5, 14)
};
Cr.translateX = Cr.x;
Cr.translateY = Cr.y;
const tE = (e, t, n) => {
        const r = t.measureViewportBox(),
            o = t.current,
            i = getComputedStyle(o),
            {
                display: s
            } = i,
            a = {};
        s === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(u => {
            a[u] = Cr[u](r, i)
        }), t.render();
        const l = t.measureViewportBox();
        return n.forEach(u => {
            const c = t.getValue(u);
            c && c.jump(a[u]), e[u] = Cr[u](l, i)
        }), e
    },
    nE = (e, t, n = {}, r = {}) => {
        t = { ...t
        }, r = { ...r
        };
        const o = Object.keys(t).filter(S0);
        let i = [],
            s = !1;
        const a = [];
        if (o.forEach(l => {
                const u = e.getValue(l);
                if (!e.hasValue(l)) return;
                let c = n[l],
                    d = zr(c);
                const p = t[l];
                let m;
                if (Zi(p)) {
                    const x = p.length,
                        y = p[0] === null ? 1 : 0;
                    c = p[y], d = zr(c);
                    for (let T = y; T < x && p[T] !== null; T++) m ? rc(zr(p[T]) === m) : m = zr(p[T])
                } else m = zr(p);
                if (d !== m)
                    if ($f(d) && $f(m)) {
                        const x = u.get();
                        typeof x == "string" && u.set(parseFloat(x)), typeof p == "string" ? t[l] = parseFloat(p) : Array.isArray(p) && m === D && (t[l] = p.map(parseFloat))
                    } else d != null && d.transform && (m != null && m.transform) && (c === 0 || p === 0) ? c === 0 ? u.set(m.transform(c)) : t[l] = d.transform(p) : (s || (i = eE(e), s = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], u.jump(p))
            }), a.length) {
            const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = tE(t, e, a);
            return i.length && i.forEach(([c, d]) => {
                e.getValue(c).set(d)
            }), e.render(), js && l !== null && window.scrollTo({
                top: l
            }), {
                target: u,
                transitionEnd: r
            }
        } else return {
            target: t,
            transitionEnd: r
        }
    };

function rE(e, t, n, r) {
    return qb(t) ? nE(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const oE = (e, t, n, r) => {
        const o = Qb(e, t, r);
        return t = o.target, r = o.transitionEnd, rE(e, t, n, r)
    },
    Ul = {
        current: null
    },
    T0 = {
        current: !1
    };

function iE() {
    if (T0.current = !0, !!js)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Ul.current = e.matches;
            e.addListener(t), t()
        } else Ul.current = !1
}

function sE(e, t, n) {
    const {
        willChange: r
    } = t;
    for (const o in t) {
        const i = t[o],
            s = n[o];
        if (Ue(i)) e.addValue(o, i), ns(r) && r.add(o);
        else if (Ue(s)) e.addValue(o, Tr(i, {
            owner: e
        })), ns(r) && r.remove(o);
        else if (s !== i)
            if (e.hasValue(o)) {
                const a = e.getValue(o);
                !a.hasAnimated && a.set(i)
            } else {
                const a = e.getStaticValue(o);
                e.addValue(o, Tr(a !== void 0 ? a : i, {
                    owner: e
                }))
            }
    }
    for (const o in n) t[o] === void 0 && e.removeValue(o);
    return t
}
const Gf = new WeakMap,
    C0 = Object.keys(ko),
    aE = C0.length,
    Kf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
    lE = Qu.length;
class uE {
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: o,
        visualState: i
    }, s = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.scheduleRender = () => J.render(this.render, !1, !0);
        const {
            latestValues: a,
            renderState: l
        } = i;
        this.latestValues = a, this.baseTarget = { ...a
        }, this.initialValues = n.initial ? { ...a
        } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = s, this.isControllingVariants = Rs(n), this.isVariantNode = ag(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: u,
            ...c
        } = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const p = c[d];
            a[d] !== void 0 && Ue(p) && (p.set(a[d], !1), ns(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t, Gf.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), T0.current || iE(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ul.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        Gf.delete(this.current), this.projection && this.projection.unmount(), Dt(this.notifyUpdate), Dt(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const t in this.events) this.events[t].clear();
        for (const t in this.features) this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = Bn.has(t),
            o = n.on("change", s => {
                this.latestValues[t] = s, this.props.onUpdate && J.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0)
            }),
            i = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            o(), i()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({
        children: t,
        ...n
    }, r, o, i) {
        let s, a;
        for (let l = 0; l < aE; l++) {
            const u = C0[l],
                {
                    isEnabled: c,
                    Feature: d,
                    ProjectionNode: p,
                    MeasureLayout: m
                } = ko[u];
            p && (s = p), c(n) && (!this.features[u] && d && (this.features[u] = new d(this)), m && (a = m))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && s) {
            this.projection = new s(this.latestValues, this.parent && this.parent.projection);
            const {
                layoutId: l,
                layout: u,
                drag: c,
                dragConstraints: d,
                layoutScroll: p,
                layoutRoot: m
            } = n;
            this.projection.setOptions({
                layoutId: l,
                layout: u,
                alwaysMeasureLayout: !!c || d && or(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: i,
                layoutScroll: p,
                layoutRoot: m
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(), n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : pe()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n = !0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < Kf.length; r++) {
            const o = Kf[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
            const i = t["on" + o];
            i && (this.propEventSubscriptions[o] = this.on(o, i))
        }
        this.prevMotionValues = sE(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t = !1) {
        if (t) return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial), r
        }
        const n = {};
        for (let r = 0; r < lE; r++) {
            const o = Qu[r],
                i = this.props[o];
            (Po(i) || i === !1) && (n[o] = i)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, n)), this.values.set(t, n), this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Tr(n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {
            initial: r
        } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = nc(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && o !== void 0) return o;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ue(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new fc), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class b0 extends uE {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    makeTargetAnimatableFromInstance({
        transition: t,
        transitionEnd: n,
        ...r
    }, {
        transformValues: o
    }, i) {
        let s = PC(r, t || {}, this);
        if (o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i) {
            bC(this, r, s);
            const a = oE(this, r, s, n);
            n = a.transitionEnd, r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}

function cE(e) {
    return window.getComputedStyle(e)
}
class dE extends b0 {
    constructor() {
        super(...arguments), this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (Bn.has(n)) {
            const r = ac(n);
            return r && r.default || 0
        } else {
            const r = cE(t),
                o = (fg(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return d0(t, n)
    }
    build(t, n, r, o) {
        qu(t, n, r, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return tc(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Ue(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
    renderInstance(t, n, r, o) {
        yg(t, n, r, o)
    }
}
class fE extends b0 {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Bn.has(n)) {
            const r = ac(n);
            return r && r.default || 0
        }
        return n = xg.has(n) ? n : Ku(n), t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return pe()
    }
    scrapeMotionValuesFromProps(t, n) {
        return Sg(t, n)
    }
    build(t, n, r, o) {
        Ju(t, n, r, this.isSVGTag, o.transformTemplate)
    }
    renderInstance(t, n, r, o) {
        wg(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = ec(t.tagName), super.mount(t)
    }
}
const pE = (e, t) => Xu(e) ? new fE(t, {
        enableHardwareAcceleration: !1
    }) : new dE(t, {
        enableHardwareAcceleration: !0
    }),
    hE = {
        layout: {
            ProjectionNode: w0,
            MeasureLayout: p0
        }
    },
    mE = { ...BC,
        ...aT,
        ...Gb,
        ...hE
    },
    I = mS((e, t) => YS(e, t, mE, pE));
var gE = Symbol.for("react.lazy"),
    os = Yl[" use ".trim().toString()];

function vE(e) {
    return typeof e == "object" && e !== null && "then" in e
}

function E0(e) {
    return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === gE && "_payload" in e && vE(e._payload)
}

function yE(e) {
    const t = wE(e),
        n = w.forwardRef((r, o) => {
            let {
                children: i,
                ...s
            } = r;
            E0(i) && typeof os == "function" && (i = os(i._payload));
            const a = w.Children.toArray(i),
                l = a.find(TE);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? w.Children.count(u) > 1 ? w.Children.only(null) : w.isValidElement(u) ? u.props.children : null : d);
                return f.jsx(t, { ...s,
                    ref: o,
                    children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null
                })
            }
            return f.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var xE = yE("Slot");

function wE(e) {
    const t = w.forwardRef((n, r) => {
        let {
            children: o,
            ...i
        } = n;
        if (E0(o) && typeof os == "function" && (o = os(o._payload)), w.isValidElement(o)) {
            const s = bE(o),
                a = CE(i, o.props);
            return o.type !== w.Fragment && (a.ref = r ? Cs(r, s) : s), w.cloneElement(o, a)
        }
        return w.Children.count(o) > 1 ? w.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var SE = Symbol("radix.slottable");

function TE(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === SE
}

function CE(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function bE(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
const EE = Km("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    Dn = z.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, i) => {
        const s = r ? xE : "button";
        return f.jsx(s, {
            className: Tt(EE({
                variant: t,
                size: n,
                className: e
            })),
            ref: i,
            ...o
        })
    });
Dn.displayName = "Button";
const PE = () => {
        const [e, t] = w.useState(!1), [n, r] = w.useState(!1);
        w.useEffect(() => {
            const i = () => {
                t(window.scrollY > 50)
            };
            return window.addEventListener("scroll", i), () => window.removeEventListener("scroll", i)
        }, []);
        const o = i => {
            const s = document.getElementById(i);
            s && (s.scrollIntoView({
                behavior: "smooth"
            }), r(!1))
        };
        return f.jsx(I.header, {
            initial: {
                y: -100
            },
            animate: {
                y: 0
            },
            className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"bg-slate-900/95 backdrop-blur-lg shadow-lg":"bg-transparent"}`,
            children: f.jsxs("div", {
                className: "container mx-auto px-4 py-4",
                children: [f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [f.jsx(I.div, {
                        whileHover: {
                            scale: 1.05
                        },
                        className: "text-2xl md:text-3xl font-bold gradient-text cursor-pointer",
                        onClick: () => o("hero"),
                        children: f.jsx("img", {
                            src: "https://horizons-cdn.hostinger.com/956fdc40-d106-475c-9a81-04b1c6465af4/9ea0e397a8e5998c6ee758e41fc37041.png",
                            alt: "Ruh-Jed.com Logo",
                            className: "h-10 md:h-12 w-auto",
                            style: {
                                filter: "drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))"
                            }
                        })
                    }), f.jsxs("nav", {
                        className: "hidden md:flex items-center gap-6",
                        children: [f.jsx("button", {
                            onClick: () => o("services"),
                            className: "hover:text-blue-400 transition-colors",
                            children: "الخدمات"
                        }), f.jsx("button", {
                            onClick: () => o("pricing"),
                            className: "hover:text-blue-400 transition-colors",
                            children: "الأسعار"
                        }), f.jsx("button", {
                            onClick: () => o("faq"),
                            className: "hover:text-blue-400 transition-colors",
                            children: "الأسئلة الشائعة"
                        }), f.jsx("button", {
                            onClick: () => o("contact"),
                            className: "hover:text-blue-400 transition-colors",
                            children: "تواصل معنا"
                        })]
                    }), f.jsx("div", {
                        className: "hidden md:flex items-center gap-4",
                        children: f.jsx("a", {
                            href: "tel:0500244345",
                            children: f.jsxs(Dn, {
                                className: "bg-green-600 hover:bg-green-700 glow-green",
                                children: [f.jsx(ln, {
                                    className: "ml-2 h-4 w-4"
                                }), "اتصل الآن"]
                            })
                        })
                    }), f.jsx("button", {
                        className: "md:hidden text-white",
                        onClick: () => r(!n),
                        children: n ? f.jsx(qm, {
                            size: 28
                        }) : f.jsx(Qw, {
                            size: 28
                        })
                    })]
                }), n && f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden mt-4 pb-4 space-y-4",
                    children: [f.jsx("button", {
                        onClick: () => o("services"),
                        className: "block w-full text-right hover:text-blue-400 transition-colors",
                        children: "الخدمات"
                    }), f.jsx("button", {
                        onClick: () => o("pricing"),
                        className: "block w-full text-right hover:text-blue-400 transition-colors",
                        children: "الأسعار"
                    }), f.jsx("button", {
                        onClick: () => o("faq"),
                        className: "block w-full text-right hover:text-blue-400 transition-colors",
                        children: "الأسئلة الشائعة"
                    }), f.jsx("button", {
                        onClick: () => o("contact"),
                        className: "block w-full text-right hover:text-blue-400 transition-colors",
                        children: "تواصل معنا"
                    }), f.jsx("a", {
                        href: "tel:0500244345",
                        className: "block",
                        children: f.jsxs(Dn, {
                            className: "w-full bg-green-600 hover:bg-green-700",
                            children: [f.jsx(ln, {
                                className: "ml-2 h-4 w-4"
                            }), "اتصل الآن"]
                        })
                    })]
                })]
            })
        })
    },
    kE = () => f.jsxs("div", {
        className: "relative w-full max-w-md aspect-square flex items-center justify-center",
        children: [f.jsxs(I.div, {
            animate: {
                rotateY: [0, 360]
            },
            transition: {
                duration: 20,
                repeat: 1 / 0,
                ease: "linear"
            },
            className: "relative w-64 h-64",
            style: {
                transformStyle: "preserve-3d"
            },
            children: [f.jsx(I.div, {
                className: "absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 rounded-3xl",
                style: {
                    transform: "translateZ(50px)",
                    boxShadow: "0 0 60px rgba(59, 130, 246, 0.6)"
                },
                animate: {
                    boxShadow: ["0 0 60px rgba(59, 130, 246, 0.6)", "0 0 80px rgba(34, 197, 94, 0.8)", "0 0 60px rgba(59, 130, 246, 0.6)"]
                },
                transition: {
                    duration: 3,
                    repeat: 1 / 0
                },
                children: f.jsx("img", {
                    alt: "شعار Ruh-Jed.com لشاحنة نقل",
                    class: "w-full h-full object-contain",
                    src: "https://horizons-cdn.hostinger.com/956fdc40-d106-475c-9a81-04b1c6465af4/1001053934-0iZzd.jpg"
                })
            }), f.jsx(I.div, {
                className: "absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl opacity-50",
                style: {
                    transform: "translateZ(-50px)"
                }
            }), f.jsx(I.div, {
                className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl opacity-30",
                style: {
                    transform: "rotateY(90deg) translateZ(50px)"
                }
            }), f.jsx(I.div, {
                className: "absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 rounded-3xl opacity-30",
                style: {
                    transform: "rotateY(-90deg) translateZ(50px)"
                }
            })]
        }), f.jsx(I.div, {
            className: "absolute inset-0 rounded-full",
            animate: {
                scale: [1, 1.2, 1],
                opacity: [.3, .1, .3]
            },
            transition: {
                duration: 3,
                repeat: 1 / 0
            },
            style: {
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)"
            }
        })]
    }),
    NE = () => f.jsxs("section", {
        id: "hero",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-green-900/20"
        }), f.jsx("div", {
            className: "container mx-auto px-4 relative z-10",
            children: f.jsxs("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center md:text-right space-y-6",
                    children: [f.jsx(I.div, {
                        initial: {
                            scale: 0
                        },
                        animate: {
                            scale: 1
                        },
                        transition: {
                            delay: .2,
                            type: "spring"
                        },
                        className: "inline-block",
                        children: f.jsx("span", {
                            className: "bg-blue-600/20 text-blue-300 px-6 py-2 rounded-full text-sm font-semibold border border-blue-500/30",
                            children: "🏆 قسم البطل"
                        })
                    }), f.jsxs("h1", {
                        className: "text-4xl md:text-6xl font-black leading-tight",
                        children: [f.jsx("span", {
                            className: "gradient-text",
                            children: "شحن ونقل السيارات"
                        }), f.jsx("br", {}), f.jsx("span", {
                            className: "text-white",
                            children: "بين الرياض وجدة"
                        })]
                    }), f.jsx("p", {
                        className: "text-xl md:text-2xl text-blue-200 font-semibold",
                        children: "الأمان أولاً بأرخص سعر!"
                    }), f.jsx("div", {
                        className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20",
                        children: f.jsxs("p", {
                            className: "text-lg leading-relaxed",
                            children: ["مرحبًا بكم في ", f.jsx("span", {
                                className: "font-bold text-blue-400",
                                children: "Ruh-Jed.com"
                            }), "، وجهتكم الأولى لنقل السيارات بين الرياض وجدة بأمان وسرعة. نحن نوفر خدمات ", f.jsx("span", {
                                className: "font-semibold text-green-400",
                                children: "نقل السيارات بالسطحة العادية، الهيدروليك والمغلقة"
                            }), " لجميع أنواع السيارات، سواء كانت عادية، فاخرة، رياضية، أو نادرة."]
                        })
                    }), f.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center md:justify-start",
                        children: [f.jsx("a", {
                            href: "tel:0500244345",
                            children: f.jsxs(Dn, {
                                size: "lg",
                                className: "bg-green-600 hover:bg-green-700 glow-green text-lg px-8 py-6",
                                children: [f.jsx(ln, {
                                    className: "ml-2 h-5 w-5"
                                }), "اتصل الآن: 0500244345"]
                            })
                        }), f.jsx("a", {
                            href: "https://wa.me/966500244345",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f.jsxs(Dn, {
                                size: "lg",
                                variant: "outline",
                                className: "border-2 border-green-500 text-green-400 hover:bg-green-500/10 text-lg px-8 py-6",
                                children: [f.jsx(Eo, {
                                    className: "ml-2 h-5 w-5"
                                }), "واتساب فوري"]
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "grid grid-cols-3 gap-4 pt-6",
                        children: [f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-4 rounded-xl border border-blue-500/30 text-center",
                            children: [f.jsx("div", {
                                className: "text-3xl font-bold text-blue-400",
                                children: "24/7"
                            }), f.jsx("div", {
                                className: "text-sm text-blue-200",
                                children: "خدمة مستمرة"
                            })]
                        }), f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-gradient-to-br from-green-600/20 to-green-800/20 p-4 rounded-xl border border-green-500/30 text-center",
                            children: [f.jsx("div", {
                                className: "text-3xl font-bold text-green-400",
                                children: "15+"
                            }), f.jsx("div", {
                                className: "text-sm text-green-200",
                                children: "سائق بخبرة سنوات"
                            })]
                        }), f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-4 rounded-xl border border-purple-500/30 text-center",
                            children: [f.jsx("div", {
                                className: "text-3xl font-bold text-purple-400",
                                children: "1000+"
                            }), f.jsx("div", {
                                className: "text-sm text-purple-200",
                                children: "عملية نقل ناجحة"
                            })]
                        })]
                    })]
                }), f.jsx(I.div, {
                    initial: {
                        opacity: 0,
                        x: 50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "flex justify-center",
                    children: f.jsx(kE, {})
                })]
            })
        }), f.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"
        })]
    }),
    jE = () => {
        const e = [{
                icon: Zm,
                title: "سطحة فورية",
                description: "خدمة على مدار الساعة",
                detail: "نحن جاهزون 24/7 لخدمتك! يبدأ شحن سيارتك بأقصى سرعة ممكنة فور اتصالك.",
                color: "from-yellow-500 to-orange-500"
            }, {
                icon: ks,
                title: "خدمة معتمدة وفورية",
                description: "سرعة في الإنجاز باحترافية عالية",
                detail: "نلتزم بأعلى معايير الجودة والأمان في كل عملية نقل",
                color: "from-blue-500 to-cyan-500"
            }, {
                icon: Qm,
                title: "تغطية شاملة للمملكة",
                description: "خدمة نقل سيارات بين جميع المدن",
                detail: "نغطي جميع المدن السعودية الكبرى بكفاءة عالية",
                color: "from-green-500 to-emerald-500"
            }, {
                icon: Uw,
                title: "شحن مؤمن 100%",
                description: "تغطية تأمينية كاملة",
                detail: "تغطية تأمينية كاملة على سيارتك طوال فترة النقل",
                color: "from-purple-500 to-pink-500"
            }, {
                icon: Wu,
                title: "تقييم عملاء 5 نجوم",
                description: "رضا العملاء هو أولويتنا",
                detail: "آلاف العملاء الراضين عن خدماتنا المتميزة",
                color: "from-red-500 to-rose-500"
            }, {
                icon: Ym,
                title: "حاسبة أسعار فورية",
                description: "احصل على عرض سعر دقيق الآن",
                detail: "أسعار شفافة وتنافسية بدون رسوم خفية",
                color: "from-indigo-500 to-blue-500"
            }],
            t = ["وصول فوري إلى موقع الاستلام في الرياض", "نقل آمن لسيارتك 100% مع تقارير فحص قبل وبعد الشحن", "توصيل في أقل وقت قياسي إلى جدة"];
        return f.jsxs("section", {
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "🚀 سرعة وكفاءة الخدمة"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200",
                        children: "⚡️ سطحة فورية: من الرياض إلى جدة - خدمة على مدار الساعة"
                    })]
                }), f.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                    children: e.map((n, r) => f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: r * .1
                        },
                        whileHover: {
                            scale: 1.05
                        },
                        className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 card-hover",
                        children: [f.jsx("div", {
                            className: `w-16 h-16 rounded-xl bg-gradient-to-br ${n.color} flex items-center justify-center mb-4`,
                            children: f.jsx(n.icon, {
                                size: 32,
                                className: "text-white"
                            })
                        }), f.jsx("h3", {
                            className: "text-xl font-bold mb-2",
                            children: n.title
                        }), f.jsx("p", {
                            className: "text-blue-300 mb-2",
                            children: n.description
                        }), f.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: n.detail
                        })]
                    }, r))
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gradient-to-br from-blue-600/20 to-green-600/20 p-8 rounded-2xl border border-blue-500/30",
                    children: [f.jsx("h3", {
                        className: "text-2xl font-bold mb-6 text-center",
                        children: "نعدك بوصول:"
                    }), f.jsx("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: t.map((n, r) => f.jsxs(I.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                delay: r * .2
                            },
                            className: "flex items-start gap-3",
                            children: [f.jsx("div", {
                                className: "w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1",
                                children: f.jsx("span", {
                                    className: "text-white font-bold",
                                    children: "✓"
                                })
                            }), f.jsx("p", {
                                className: "text-lg",
                                children: n
                            })]
                        }, r))
                    })]
                })]
            })]
        })
    },
    AE = () => {
        const e = [{
            icon: Xw,
            title: "سطحة عادية",
            features: ["مناسبة لجميع السيارات الصغيرة والجيبات", "حماية قياسية ضد الخدوش والاهتزازات", "سرعة في النقل وتوفير الوقت"],
            color: "from-blue-500 to-blue-700"
        }, {
            icon: Zm,
            title: "سطحة هيدروليك / فل داون",
            features: ["مناسبة للسيارات الفاخرة والرياضية", "سهولة التحميل والتنزيل بفضل السطحة القريبة من مستوى الأرض", "حماية إضافية ضد الأضرار"],
            color: "from-purple-500 to-purple-700"
        }, {
            icon: ks,
            title: "سطحة مغلقة بالكامل",
            features: ["حماية كاملة من الأمطار، الشمس، والغبار", "مثالية للسيارات الجديدة والفاخرة", "ضمان وصول السيارة بأمان كامل إلى وجهتها"],
            color: "from-green-500 to-green-700"
        }, {
            icon: Yw,
            title: "خدمة من الباب إلى الباب",
            features: ["استلام السيارة من موقعك وتسليمها مباشرة إلى وجهتك", "توفير الوقت والجهد، مع ضمان الأمان الكامل للسيارة"],
            color: "from-orange-500 to-orange-700"
        }];
        return f.jsxs("section", {
            id: "services",
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "خدماتنا"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200",
                        children: "خدمات نقل السيارات من الرياض إلى جدة"
                    })]
                }), f.jsx("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: e.map((t, n) => f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: n * .1
                        },
                        className: "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 card-hover",
                        children: [f.jsx("div", {
                            className: `w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6`,
                            children: f.jsx(t.icon, {
                                size: 40,
                                className: "text-white"
                            })
                        }), f.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: t.title
                        }), f.jsx("ul", {
                            className: "space-y-3",
                            children: t.features.map((r, o) => f.jsxs("li", {
                                className: "flex items-start gap-3",
                                children: [f.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1",
                                    children: f.jsx("span", {
                                        className: "text-green-400 text-sm",
                                        children: "✓"
                                    })
                                }), f.jsx("span", {
                                    className: "text-gray-300",
                                    children: r
                                })]
                            }, o))
                        })]
                    }, n))
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "mt-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30 text-center",
                    children: [f.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "مميزاتنا"
                    }), f.jsxs("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [f.jsx("div", {
                            children: f.jsxs("p", {
                                className: "text-lg",
                                children: ["خدمة نقل ", f.jsx("span", {
                                    className: "font-bold text-blue-400",
                                    children: "سريعة وموثوقة على مدار الساعة"
                                })]
                            })
                        }), f.jsx("div", {
                            children: f.jsxs("p", {
                                className: "text-lg",
                                children: ["سطحات ", f.jsx("span", {
                                    className: "font-bold text-purple-400",
                                    children: "هيدروليك حديثة وفل داون"
                                })]
                            })
                        }), f.jsx("div", {
                            children: f.jsxs("p", {
                                className: "text-lg",
                                children: ["سطحات ", f.jsx("span", {
                                    className: "font-bold text-green-400",
                                    children: "مغلقة بالكامل"
                                })]
                            })
                        }), f.jsx("div", {
                            children: f.jsxs("p", {
                                className: "text-lg",
                                children: ["خدمة ", f.jsx("span", {
                                    className: "font-bold text-orange-400",
                                    children: "من الباب إلى الباب"
                                })]
                            })
                        })]
                    }), f.jsx("p", {
                        className: "text-xl font-bold mt-6 text-green-400",
                        children: "أسعار تنافسية تبدأ من 900 ريال سعودي فقط"
                    })]
                })]
            })]
        })
    },
    RE = () => {
        const e = [{
            type: "عادية",
            carType: "سيارات صغيرة / سيدان",
            price: "900 - 1100",
            color: "from-blue-500 to-blue-700"
        }, {
            type: "هيدروليك",
            carType: "سيارات جيب / فاخرة / رياضية",
            price: "1100 - 1300",
            color: "from-purple-500 to-purple-700",
            popular: !0
        }, {
            type: "مغلقة",
            carType: "جميع السيارات الجديدة والفاخرة",
            price: "1200 - 1400",
            color: "from-green-500 to-green-700"
        }];
        return f.jsxs("section", {
            id: "pricing",
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "الأسعار"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200",
                        children: "أسعار تنافسية وشفافة"
                    })]
                }), f.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-12",
                    children: e.map((t, n) => f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: n * .1
                        },
                        className: `relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border ${t.popular?"border-purple-500 shadow-lg shadow-purple-500/20":"border-blue-500/20"} card-hover`,
                        children: [t.popular && f.jsx("div", {
                            className: "absolute -top-4 left-1/2 transform -translate-x-1/2",
                            children: f.jsx("span", {
                                className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold",
                                children: "الأكثر طلباً"
                            })
                        }), f.jsx("div", {
                            className: `w-16 h-16 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6 mx-auto`,
                            children: f.jsx($w, {
                                size: 32,
                                className: "text-white"
                            })
                        }), f.jsx("h3", {
                            className: "text-2xl font-bold text-center mb-2",
                            children: t.type
                        }), f.jsx("p", {
                            className: "text-blue-300 text-center mb-6",
                            children: t.carType
                        }), f.jsxs("div", {
                            className: "text-center mb-6",
                            children: [f.jsx("div", {
                                className: "text-4xl font-black gradient-text mb-2",
                                children: t.price
                            }), f.jsx("div", {
                                className: "text-gray-400",
                                children: "ريال سعودي"
                            })]
                        }), f.jsx("a", {
                            href: "tel:0500244345",
                            children: f.jsx(I.button, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: .95
                                },
                                className: `w-full py-3 rounded-xl font-bold bg-gradient-to-r ${t.color} text-white`,
                                children: "احجز الآن"
                            })
                        })]
                    }, n))
                }), f.jsx(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gradient-to-br from-yellow-600/20 to-orange-600/20 p-6 rounded-2xl border border-yellow-500/30 text-center",
                    children: f.jsxs("p", {
                        className: "text-lg",
                        children: [f.jsx("span", {
                            className: "font-bold text-yellow-400",
                            children: "ملاحظة:"
                        }), " الأسعار تعتمد على نوع السيارة، نوع السطحة، وحالة الطلب."]
                    })
                })]
            })]
        })
    },
    ME = () => {
        const e = [{
            icon: ln,
            title: "اتصل بنا مباشرة",
            description: "اتصل على: 0500244345",
            color: "from-green-500 to-green-700"
        }, {
            icon: Gw,
            title: "حدد نوع السطحة",
            description: "اختر بين عادية، هيدروليك، أو مغلقة",
            color: "from-blue-500 to-blue-700"
        }, {
            icon: Qm,
            title: "قدم معلومات سيارتك",
            description: "الموديل والحالة",
            color: "from-purple-500 to-purple-700"
        }, {
            icon: Wu,
            title: "حدد موقع الاستلام والتسليم",
            description: "ووقت النقل المناسب لك",
            color: "from-orange-500 to-orange-700"
        }, {
            icon: jl,
            title: "استلم سيارتك",
            description: "بأمان وفي الوقت المحدد",
            color: "from-pink-500 to-pink-700"
        }];
        return f.jsxs("section", {
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/10 to-slate-900"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "كيفية الطلب"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200",
                        children: "خطوات بسيطة للحصول على الخدمة"
                    })]
                }), f.jsx("div", {
                    className: "max-w-4xl mx-auto",
                    children: e.map((t, n) => f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            x: n % 2 === 0 ? -50 : 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: n * .1
                        },
                        className: "relative mb-8 last:mb-0",
                        children: [f.jsxs("div", {
                            className: "flex items-center gap-6",
                            children: [f.jsx("div", {
                                className: `w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`,
                                children: f.jsx(t.icon, {
                                    size: 36,
                                    className: "text-white"
                                })
                            }), f.jsxs("div", {
                                className: "flex-1 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20",
                                children: [f.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [f.jsx("span", {
                                        className: "text-3xl font-black text-blue-400",
                                        children: n + 1
                                    }), f.jsx("h3", {
                                        className: "text-xl font-bold",
                                        children: t.title
                                    })]
                                }), f.jsx("p", {
                                    className: "text-gray-300",
                                    children: t.description
                                })]
                            })]
                        }), n < e.length - 1 && f.jsx("div", {
                            className: "absolute right-10 top-20 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"
                        })]
                    }, n))
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "mt-12 text-center",
                    children: [f.jsx("p", {
                        className: "text-2xl font-bold text-green-400 mb-4",
                        children: "خدمة فورية وموثوقة 24/7"
                    }), f.jsx("a", {
                        href: "tel:0500244345",
                        children: f.jsx(I.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            className: "bg-gradient-to-r from-green-500 to-green-700 text-white px-12 py-4 rounded-xl text-xl font-bold glow-green",
                            children: "اطلب الآن"
                        })
                    })]
                })]
            })]
        })
    },
    LE = () => f.jsxs("section", {
        className: "py-20 relative overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"
        }), f.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [f.jsx(I.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: f.jsx("h2", {
                    className: "text-4xl md:text-5xl font-black mb-4",
                    children: f.jsx("span", {
                        className: "gradient-text",
                        children: "معلومات حول نقل السيارات من جدة إلى الرياض"
                    })
                })
            }), f.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .1
                    },
                    className: "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 card-hover",
                    children: [f.jsx("div", {
                        className: "w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6",
                        children: f.jsx(Ym, {
                            size: 32,
                            className: "text-white"
                        })
                    }), f.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "سعر سطحة من جدة إلى الرياض"
                    }), f.jsxs("p", {
                        className: "text-gray-300 leading-relaxed",
                        children: ["سعر نقل السيارة يتراوح عادةً بين ", f.jsx("span", {
                            className: "font-bold text-green-400",
                            children: "1100 إلى 1200 ريال سعودي"
                        }), " حسب نوع السيارة وحالة النقل."]
                    })]
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .2
                    },
                    className: "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 card-hover",
                    children: [f.jsx("div", {
                        className: "w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6",
                        children: f.jsx(Wu, {
                            size: 32,
                            className: "text-white"
                        })
                    }), f.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "مدة النقل من جدة إلى الرياض"
                    }), f.jsxs("p", {
                        className: "text-gray-300 leading-relaxed",
                        children: ["تستغرق السطحة من جدة إلى الرياض حوالي ", f.jsx("span", {
                            className: "font-bold text-purple-400",
                            children: "22 إلى 24 ساعة"
                        }), "، وقد تصل أسرع في بعض الحالات إلى حوالي ", f.jsx("span", {
                            className: "font-bold text-purple-400",
                            children: "17 ساعة"
                        }), " حسب ظروف الطريق وحالة المرور."]
                    })]
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: .3
                    },
                    className: "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 card-hover",
                    children: [f.jsx("div", {
                        className: "w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-6",
                        children: f.jsx(Bw, {
                            size: 32,
                            className: "text-white"
                        })
                    }), f.jsx("h3", {
                        className: "text-2xl font-bold mb-4",
                        children: "كيفية طلب سطحة من جدة إلى الرياض"
                    }), f.jsx("p", {
                        className: "text-gray-300 leading-relaxed mb-4",
                        children: "لطلب سطحة من جدة إلى الرياض، اتصل مباشرة على:"
                    }), f.jsx("a", {
                        href: "tel:0500244345",
                        children: f.jsx(I.button, {
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            className: "w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl font-bold",
                            children: "0500244345"
                        })
                    }), f.jsx("p", {
                        className: "text-sm text-gray-400 mt-4",
                        children: "للحصول على أسرع خدمة وأفضل الأسعار. خدمة النقل متاحة لجميع أنواع السيارات، مع ضمان سلامتها ورضاك الكامل."
                    })]
                })]
            })]
        })]
    }),
    IE = () => {
        const e = [{
            icon: ks,
            title: "تأمين شامل على الحمولة",
            description: "لضمان حماية السيارة أثناء الرحلة",
            color: "from-blue-500 to-blue-700"
        }, {
            icon: Ww,
            title: "حماية من العوامل الجوية",
            description: "مثل المطر والغبار والشمس",
            color: "from-cyan-500 to-cyan-700"
        }, {
            icon: Xm,
            title: "مثالية للسيارات الفاخرة",
            description: "الرياضية، أو الكلاسيكية",
            color: "from-purple-500 to-purple-700"
        }];
        return f.jsxs("section", {
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "خدمة نقل سيارة – سطحة مغلقة"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200 max-w-3xl mx-auto",
                        children: "نقدم خدمة نقل السيارات باستخدام سطحة مغلقة مزودة بشراع هيدروليك فل داون لضمان أقصى درجات الحماية والأمان أثناء عملية النقل."
                    })]
                }), f.jsx("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-12",
                    children: e.map((t, n) => f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: n * .1
                        },
                        className: "bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 card-hover text-center",
                        children: [f.jsx("div", {
                            className: `w-20 h-20 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center mb-6 mx-auto`,
                            children: f.jsx(t.icon, {
                                size: 40,
                                className: "text-white"
                            })
                        }), f.jsx("h3", {
                            className: "text-xl font-bold mb-3",
                            children: t.title
                        }), f.jsx("p", {
                            className: "text-gray-300",
                            children: t.description
                        })]
                    }, n))
                }), f.jsx(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gradient-to-br from-yellow-600/20 to-red-600/20 p-8 rounded-2xl border border-yellow-500/30",
                    children: f.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [f.jsx("div", {
                            className: "w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0",
                            children: f.jsx("span", {
                                className: "text-2xl",
                                children: "⚠️"
                            })
                        }), f.jsxs("div", {
                            children: [f.jsx("h3", {
                                className: "text-2xl font-bold mb-3",
                                children: "ملاحظة هامة"
                            }), f.jsxs("p", {
                                className: "text-lg leading-relaxed",
                                children: ["هذه الخدمة متاحة فقط لنقل السيارات ", f.jsx("span", {
                                    className: "font-bold text-yellow-400",
                                    children: "خارج مناطق الرياض، جدة، والدمام"
                                }), "."]
                            })]
                        })]
                    })
                })]
            })]
        })
    };
var OE = Yl[" useId ".trim().toString()] || (() => {}),
    _E = 0;

function P0(e) {
    const [t, n] = w.useState(OE());
    return _n(() => {
        e || n(r => r ? ? String(_E++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
var Os = "Collapsible",
    [DE, k0] = bs(Os),
    [VE, pc] = DE(Os),
    N0 = w.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: o,
            disabled: i,
            onOpenChange: s,
            ...a
        } = e, [l, u] = Es({
            prop: r,
            defaultProp: o ? ? !1,
            onChange: s,
            caller: Os
        });
        return f.jsx(VE, {
            scope: n,
            disabled: i,
            contentId: P0(),
            open: l,
            onOpenToggle: w.useCallback(() => u(c => !c), [u]),
            children: f.jsx(Oe.div, {
                "data-state": mc(l),
                "data-disabled": i ? "" : void 0,
                ...a,
                ref: t
            })
        })
    });
N0.displayName = Os;
var j0 = "CollapsibleTrigger",
    A0 = w.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...r
        } = e, o = pc(j0, n);
        return f.jsx(Oe.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": mc(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: Re(e.onClick, o.onOpenToggle)
        })
    });
A0.displayName = j0;
var hc = "CollapsibleContent",
    R0 = w.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = pc(hc, e.__scopeCollapsible);
        return f.jsx(zu, {
            present: n || o.open,
            children: ({
                present: i
            }) => f.jsx(FE, { ...r,
                ref: t,
                present: i
            })
        })
    });
R0.displayName = hc;
var FE = w.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: r,
        children: o,
        ...i
    } = e, s = pc(hc, n), [a, l] = w.useState(r), u = w.useRef(null), c = _t(t, u), d = w.useRef(0), p = d.current, m = w.useRef(0), x = m.current, y = s.open || a, T = w.useRef(y), v = w.useRef(void 0);
    return w.useEffect(() => {
        const h = requestAnimationFrame(() => T.current = !1);
        return () => cancelAnimationFrame(h)
    }, []), _n(() => {
        const h = u.current;
        if (h) {
            v.current = v.current || {
                transitionDuration: h.style.transitionDuration,
                animationName: h.style.animationName
            }, h.style.transitionDuration = "0s", h.style.animationName = "none";
            const g = h.getBoundingClientRect();
            d.current = g.height, m.current = g.width, T.current || (h.style.transitionDuration = v.current.transitionDuration, h.style.animationName = v.current.animationName), l(r)
        }
    }, [s.open, r]), f.jsx(Oe.div, {
        "data-state": mc(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        id: s.contentId,
        hidden: !y,
        ...i,
        ref: c,
        style: {
            "--radix-collapsible-content-height": p ? `${p}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
        },
        children: y && o
    })
});

function mc(e) {
    return e ? "open" : "closed"
}
var zE = N0,
    BE = A0,
    UE = R0,
    $E = w.createContext(void 0);

function HE(e) {
    const t = w.useContext($E);
    return e || t || "ltr"
}
var mt = "Accordion",
    WE = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [gc, GE, KE] = Sm(mt),
    [_s, pP] = bs(mt, [KE, k0]),
    vc = k0(),
    M0 = z.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = r, i = r;
        return f.jsx(gc.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? f.jsx(qE, { ...i,
                ref: t
            }) : f.jsx(XE, { ...o,
                ref: t
            })
        })
    });
M0.displayName = mt;
var [L0, YE] = _s(mt), [I0, QE] = _s(mt, {
    collapsible: !1
}), XE = z.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: i = !1,
        ...s
    } = e, [a, l] = Es({
        prop: n,
        defaultProp: r ? ? "",
        onChange: o,
        caller: mt
    });
    return f.jsx(L0, {
        scope: e.__scopeAccordion,
        value: z.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: z.useCallback(() => i && l(""), [i, l]),
        children: f.jsx(I0, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: f.jsx(O0, { ...s,
                ref: t
            })
        })
    })
}), qE = z.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        ...i
    } = e, [s, a] = Es({
        prop: n,
        defaultProp: r ? ? [],
        onChange: o,
        caller: mt
    }), l = z.useCallback(c => a((d = []) => [...d, c]), [a]), u = z.useCallback(c => a((d = []) => d.filter(p => p !== c)), [a]);
    return f.jsx(L0, {
        scope: e.__scopeAccordion,
        value: s,
        onItemOpen: l,
        onItemClose: u,
        children: f.jsx(I0, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: f.jsx(O0, { ...i,
                ref: t
            })
        })
    })
}), [ZE, Ds] = _s(mt), O0 = z.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: i = "vertical",
        ...s
    } = e, a = z.useRef(null), l = _t(a, t), u = GE(n), d = HE(o) === "ltr", p = Re(e.onKeyDown, m => {
        var P;
        if (!WE.includes(m.key)) return;
        const x = m.target,
            y = u().filter(A => {
                var R;
                return !((R = A.ref.current) != null && R.disabled)
            }),
            T = y.findIndex(A => A.ref.current === x),
            v = y.length;
        if (T === -1) return;
        m.preventDefault();
        let h = T;
        const g = 0,
            S = v - 1,
            C = () => {
                h = T + 1, h > S && (h = g)
            },
            E = () => {
                h = T - 1, h < g && (h = S)
            };
        switch (m.key) {
            case "Home":
                h = g;
                break;
            case "End":
                h = S;
                break;
            case "ArrowRight":
                i === "horizontal" && (d ? C() : E());
                break;
            case "ArrowDown":
                i === "vertical" && C();
                break;
            case "ArrowLeft":
                i === "horizontal" && (d ? E() : C());
                break;
            case "ArrowUp":
                i === "vertical" && E();
                break
        }
        const b = h % v;
        (P = y[b].ref.current) == null || P.focus()
    });
    return f.jsx(ZE, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: f.jsx(gc.Slot, {
            scope: n,
            children: f.jsx(Oe.div, { ...s,
                "data-orientation": i,
                ref: l,
                onKeyDown: r ? void 0 : p
            })
        })
    })
}), is = "AccordionItem", [JE, yc] = _s(is), _0 = z.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: r,
        ...o
    } = e, i = Ds(is, n), s = YE(is, n), a = vc(n), l = P0(), u = r && s.value.includes(r) || !1, c = i.disabled || e.disabled;
    return f.jsx(JE, {
        scope: n,
        open: u,
        disabled: c,
        triggerId: l,
        children: f.jsx(zE, {
            "data-orientation": i.orientation,
            "data-state": U0(u),
            ...a,
            ...o,
            ref: t,
            disabled: c,
            open: u,
            onOpenChange: d => {
                d ? s.onItemOpen(r) : s.onItemClose(r)
            }
        })
    })
});
_0.displayName = is;
var D0 = "AccordionHeader",
    V0 = z.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Ds(mt, n), i = yc(D0, n);
        return f.jsx(Oe.h3, {
            "data-orientation": o.orientation,
            "data-state": U0(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...r,
            ref: t
        })
    });
V0.displayName = D0;
var $l = "AccordionTrigger",
    F0 = z.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Ds(mt, n), i = yc($l, n), s = QE($l, n), a = vc(n);
        return f.jsx(gc.ItemSlot, {
            scope: n,
            children: f.jsx(BE, {
                "aria-disabled": i.open && !s.collapsible || void 0,
                "data-orientation": o.orientation,
                id: i.triggerId,
                ...a,
                ...r,
                ref: t
            })
        })
    });
F0.displayName = $l;
var z0 = "AccordionContent",
    B0 = z.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = Ds(mt, n), i = yc(z0, n), s = vc(n);
        return f.jsx(UE, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
B0.displayName = z0;

function U0(e) {
    return e ? "open" : "closed"
}
var eP = M0,
    tP = _0,
    nP = V0,
    $0 = F0,
    H0 = B0;
const rP = eP,
    W0 = z.forwardRef(({
        className: e,
        ...t
    }, n) => f.jsx(tP, {
        ref: n,
        className: Tt("border-b", e),
        ...t
    }));
W0.displayName = "AccordionItem";
const G0 = z.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => f.jsx(nP, {
    className: "flex",
    children: f.jsxs($0, {
        ref: r,
        className: Tt("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, f.jsx(Hw, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
G0.displayName = $0.displayName;
const K0 = z.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => f.jsx(H0, {
    ref: r,
    className: Tt("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", e),
    ...n,
    children: f.jsx("div", {
        className: "pb-4 pt-0",
        children: t
    })
}));
K0.displayName = H0.displayName;
const oP = () => {
        const e = [{
            question: "ماهي خدمة سطحة من الرياض إلى جدة؟",
            answer: "خدمة سطحة من الرياض إلى جدة هي خدمة نقل السيارات عبر سطحات مخصصة لنقل السيارات بين المدن. تُقدم هذه الخدمة للأفراد والشركات الذين يحتاجون إلى نقل سياراتهم بأمان من الرياض إلى جدة، سواء كانت السيارة تعمل أو معطلة."
        }, {
            question: "ماهي أنواع السطحات من الرياض إلى جدة؟",
            answer: "تتوفر عدة أنواع من السطحات لنقل السيارات من الرياض إلى جدة، بما في ذلك: السطحات العادية، السطحات الهيدروليك / فل داون، والسطحات المغلقة المخصصة للسيارات الفاخرة. يعتمد اختيار النوع المناسب على حجم ونوع السيارة التي تحتاج إلى النقل."
        }, {
            question: "كيف أجد أرخص سطحة من الرياض إلى جدة؟",
            answer: "نحن نوفر أفضل الخيارات المتاحة بأقل الأسعار. يمكنك التواصل معنا مباشرة وتزويدنا بتفاصيل سيارتك وظروف النقل، وسنقوم بمساعدتك في العثور على الخيار الأنسب والأكثر اقتصادية لتلبية احتياجاتك."
        }, {
            question: "كم تستغرق السطحة من الرياض إلى جدة لتصلني؟",
            answer: "الوقت المستغرق يعتمد على عدة عوامل، بما في ذلك حركة المرور، المسافة، والظروف الجوية. بشكل عام، تستغرق الرحلة عادة من 9 إلى 13 ساعة."
        }, {
            question: "ماهي الشروط التي يجب أن تتوفر في السطحة في الرياض؟",
            answer: "يجب أن تكون السطحة مرخصة ومجهزة بمعدات أمان عالية الجودة، كما يجب أن تكون مؤمنة وتحت إشراف سائق محترف ومدرب لضمان سلامة سيارتك أثناء النقل."
        }, {
            question: "هل تكلفة سطحة من الرياض إلى جدة تعتمد على نوع السيارة؟",
            answer: "نعم، تكلفة السطحة تعتمد بشكل كبير على نوع السيارة. السيارات الكبيرة أو الثقيلة قد تتطلب تجهيزات خاصة لنقلها بأمان، مما قد يزيد من التكلفة."
        }, {
            question: "ماذا أطلب من سائق سطحة من الرياض إلى جدة قبل تحميل السيارة؟",
            answer: "قبل تحميل السيارة، تأكد من أن السائق: يفحص السيارة جيدًا، يربط الإطارات بشكل صحيح باستخدام معدات الأمان، ويوضح لك معلومات التأمين والتفاصيل اللوجستية الأخرى."
        }, {
            question: "كيف يمكنني متابعة سيارتي بعد نقلها بسطحة من الرياض إلى جدة؟",
            answer: "يمكنك متابعة سيارتك من خلال التواصل مع الشركة المقدمة للخدمة. بعض الشركات توفر تتبع مباشر عبر تطبيقات مخصصة، أو عبر التواصل المستمر مع السائق لمعرفة حالة السيارة وموقعها الحالي."
        }, {
            question: "هل يوجد فرق في السعر إذا كانت السيارة معطلة تمامًا؟",
            answer: "نعم، إذا كانت السيارة معطلة تمامًا وتحتاج إلى تجهيزات خاصة لرفعها ونقلها، فقد يؤدي ذلك إلى زيادة تكلفة الخدمة. حالة السيارة تؤثر بشكل كبير على السعر النهائي."
        }, {
            question: "كيف أطلب سطحة من الرياض إلى جدة؟",
            answer: "يمكنك طلب سطحة لنقل سيارتك من الرياض إلى جدة عبر: استخدام زر الواتساب المتاح على الموقع، أو الاتصال المباشر بنا على الرقم: 0500244345. سيتولى فريقنا التنسيق معك وتقديم كل المعلومات اللازمة لضمان حصولك على الخدمة بأسرع وقت وبأفضل جودة."
        }, {
            question: "كم تستغرق مدة النقل من الرياض إلى جدة؟",
            answer: "عادة بين 18 إلى 22 ساعة حسب الطريق وحالة الطقس."
        }, {
            question: "ما هي المسافة بين الرياض وجدة؟",
            answer: "تبلغ حوالي 954.5 كيلومتر."
        }, {
            question: "كم تكلفة نقل السيارة من جدة إلى الرياض؟",
            answer: "الأسعار عادة بين 900 و 1300 ريال سعودي حسب نوع السيارة وطريقة النقل."
        }, {
            question: "هل تقدمون خدمة من الباب إلى الباب؟",
            answer: "نعم، نوفر خدمة استلام السيارة من موقعك وتسليمها مباشرة إلى وجهتك."
        }, {
            question: "ما هي أنواع السطحات المتوفرة؟",
            answer: "نقدم ثلاث أنواع: 1. سطحة عادية 2. سطحة هيدروليك / فل داون 3. سطحة مغلقة بالكامل"
        }];
        return f.jsxs("section", {
            id: "faq",
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-transparent"
            }), f.jsxs("div", {
                className: "container mx-auto px-4 relative z-10",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [f.jsx("h2", {
                        className: "text-4xl md:text-5xl font-black mb-4",
                        children: f.jsx("span", {
                            className: "gradient-text",
                            children: "الأسئلة الشائعة"
                        })
                    }), f.jsx("p", {
                        className: "text-xl text-blue-200",
                        children: "إجابات على أكثر الأسئلة شيوعاً"
                    })]
                }), f.jsx(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "max-w-4xl mx-auto",
                    children: f.jsx(rP, {
                        type: "single",
                        collapsible: !0,
                        className: "space-y-4",
                        children: e.map((t, n) => f.jsxs(W0, {
                            value: `item-${n}`,
                            className: "bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl px-6 overflow-hidden",
                            children: [f.jsx(G0, {
                                className: "text-right hover:no-underline py-6",
                                children: f.jsx("span", {
                                    className: "text-lg font-semibold",
                                    children: t.question
                                })
                            }), f.jsx(K0, {
                                className: "text-gray-300 pb-6 leading-relaxed",
                                children: t.answer
                            })]
                        }, n))
                    })
                })]
            })]
        })
    },
    iP = () => {
        const e = ["استخدم دائمًا سطحة مغلقة لحماية السيارة من العوامل الجوية", "تحقق من حالة السطحة قبل تحميل السيارة", "اختر خدمة من الباب إلى الباب لتجنب أي مخاطر أثناء النقل"],
            t = [{
                icon: jl,
                text: "فريق محترف ومدرب على التعامل مع جميع أنواع السيارات",
                color: "from-blue-500 to-blue-700"
            }, {
                icon: ks,
                text: "سطحات حديثة ومجهزة بأحدث التقنيات",
                color: "from-green-500 to-green-700"
            }, {
                icon: Xm,
                text: "خدمة 24 ساعة مع تغطية لكبرى المدن السعودية",
                color: "from-purple-500 to-purple-700"
            }, {
                icon: jl,
                text: "أسعار تنافسية بدون أي رسوم خفية",
                color: "from-orange-500 to-orange-700"
            }];
        return f.jsxs("section", {
            className: "py-20 relative overflow-hidden",
            children: [f.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/10 to-slate-900"
            }), f.jsx("div", {
                className: "container mx-auto px-4 relative z-10",
                children: f.jsxs("div", {
                    className: "grid md:grid-cols-2 gap-12",
                    children: [f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        children: [f.jsx("h2", {
                            className: "text-3xl md:text-4xl font-black mb-6",
                            children: f.jsx("span", {
                                className: "gradient-text",
                                children: "نصائح لنقل السيارات بأمان بين المدن"
                            })
                        }), f.jsx("div", {
                            className: "space-y-4",
                            children: e.map((n, r) => f.jsxs(I.div, {
                                initial: {
                                    opacity: 0,
                                    x: -20
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: r * .1
                                },
                                className: "flex items-start gap-3 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20",
                                children: [f.jsx("div", {
                                    className: "w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1",
                                    children: f.jsx("span", {
                                        className: "text-white text-sm",
                                        children: "✓"
                                    })
                                }), f.jsx("p", {
                                    className: "text-gray-300",
                                    children: n
                                })]
                            }, r))
                        })]
                    }), f.jsxs(I.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: !0
                        },
                        children: [f.jsx("h2", {
                            className: "text-3xl md:text-4xl font-black mb-6",
                            children: f.jsx("span", {
                                className: "gradient-text",
                                children: "لماذا تختار Ruh-Jed.com لنقل سيارتك؟"
                            })
                        }), f.jsx("div", {
                            className: "space-y-4",
                            children: t.map((n, r) => f.jsxs(I.div, {
                                initial: {
                                    opacity: 0,
                                    x: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                transition: {
                                    delay: r * .1
                                },
                                className: "flex items-start gap-4 bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20",
                                children: [f.jsx("div", {
                                    className: `w-12 h-12 rounded-xl bg-gradient-to-br ${n.color} flex items-center justify-center flex-shrink-0`,
                                    children: f.jsx(n.icon, {
                                        size: 24,
                                        className: "text-white"
                                    })
                                }), f.jsx("p", {
                                    className: "text-gray-300 pt-2",
                                    children: n.text
                                })]
                            }, r))
                        })]
                    })]
                })
            })]
        })
    },
    sP = () => f.jsxs("section", {
        id: "contact",
        className: "py-20 relative overflow-hidden",
        children: [f.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent"
        }), f.jsxs("div", {
            className: "container mx-auto px-4 relative z-10",
            children: [f.jsxs(I.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                className: "text-center mb-16",
                children: [f.jsx("h2", {
                    className: "text-4xl md:text-5xl font-black mb-4",
                    children: f.jsx("span", {
                        className: "gradient-text",
                        children: "تواصل معنا"
                    })
                }), f.jsx("p", {
                    className: "text-xl text-blue-200",
                    children: "نحن هنا لخدمتك على مدار الساعة"
                })]
            }), f.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gradient-to-br from-blue-600/20 to-green-600/20 p-12 rounded-3xl border border-blue-500/30 text-center",
                    children: [f.jsx("h3", {
                        className: "text-3xl font-bold mb-8",
                        children: "للحجز والاستفسار"
                    }), f.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6 mb-8",
                        children: [f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30",
                            children: [f.jsx(ln, {
                                size: 48,
                                className: "text-green-400 mx-auto mb-4"
                            }), f.jsx("p", {
                                className: "text-sm text-gray-400 mb-2",
                                children: "اتصل الآن"
                            }), f.jsx("a", {
                                href: "tel:0500244345",
                                className: "text-2xl font-bold text-green-400 hover:text-green-300 transition-colors",
                                children: "0500244345"
                            })]
                        }), f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30",
                            children: [f.jsx(Eo, {
                                size: 48,
                                className: "text-blue-400 mx-auto mb-4"
                            }), f.jsx("p", {
                                className: "text-sm text-gray-400 mb-2",
                                children: "واتساب"
                            }), f.jsx("a", {
                                href: "https://wa.me/966500244345",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors",
                                children: "0500244345"
                            })]
                        }), f.jsxs(I.div, {
                            whileHover: {
                                scale: 1.05
                            },
                            className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30",
                            children: [f.jsx(Kw, {
                                size: 48,
                                className: "text-purple-400 mx-auto mb-4"
                            }), f.jsx("p", {
                                className: "text-sm text-gray-400 mb-2",
                                children: "الموقع الإلكتروني"
                            }), f.jsx("p", {
                                className: "text-2xl font-bold text-purple-400",
                                children: "Ruh-Jed.com"
                            })]
                        })]
                    }), f.jsxs("div", {
                        className: "bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20",
                        children: [f.jsx("h4", {
                            className: "text-xl font-bold mb-3",
                            children: "عنواننا"
                        }), f.jsx("p", {
                            className: "text-gray-300 leading-relaxed",
                            children: "خدمة نقل السيارات من الرياض إلى جدة والعكس بأعلى معايير الأمان والسرعة."
                        })]
                    }), f.jsxs("div", {
                        className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
                        children: [f.jsx("a", {
                            href: "tel:0500244345",
                            children: f.jsxs(Dn, {
                                size: "lg",
                                className: "bg-green-600 hover:bg-green-700 glow-green text-lg px-8 py-6",
                                children: [f.jsx(ln, {
                                    className: "ml-2 h-5 w-5"
                                }), "اتصل الآن"]
                            })
                        }), f.jsx("a", {
                            href: "https://wa.me/966500244345",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: f.jsxs(Dn, {
                                size: "lg",
                                variant: "outline",
                                className: "border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-6",
                                children: [f.jsx(Eo, {
                                    className: "ml-2 h-5 w-5"
                                }), "واتساب"]
                            })
                        })]
                    })]
                }), f.jsxs(I.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    className: "mt-12 text-center",
                    children: [f.jsx("p", {
                        className: "text-2xl font-bold text-blue-400",
                        children: "📲 لا تضيع الوقت! اتصل الآن لتأمين شحنتك"
                    }), f.jsx("p", {
                        className: "text-lg text-gray-300 mt-4",
                        children: "نقل سيارتك من الرياض إلى جدة لم يكن يوماً بهذه السهولة والأمان. تواصل معنا الآن!"
                    })]
                })]
            })]
        })]
    }),
    aP = () => f.jsx("footer", {
        className: "bg-slate-900/80 backdrop-blur-sm border-t border-blue-500/20 py-12",
        children: f.jsxs("div", {
            className: "container mx-auto px-4",
            children: [f.jsxs("div", {
                className: "grid md:grid-cols-3 gap-8 mb-8",
                children: [f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "text-2xl font-bold gradient-text mb-4",
                        children: "Ruh-Jed.com"
                    }), f.jsx("p", {
                        className: "text-gray-400 leading-relaxed",
                        children: "خدمة نقل السيارات الأكثر أماناً وموثوقية بين الرياض وجدة. نحن نضمن وصول سيارتك بأمان تام."
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h4", {
                        className: "text-xl font-bold mb-4",
                        children: "روابط سريعة"
                    }), f.jsxs("ul", {
                        className: "space-y-2",
                        children: [f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => {
                                    var e;
                                    return (e = document.getElementById("services")) == null ? void 0 : e.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                className: "text-gray-400 hover:text-blue-400 transition-colors",
                                children: "الخدمات"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => {
                                    var e;
                                    return (e = document.getElementById("pricing")) == null ? void 0 : e.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                className: "text-gray-400 hover:text-blue-400 transition-colors",
                                children: "الأسعار"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => {
                                    var e;
                                    return (e = document.getElementById("faq")) == null ? void 0 : e.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                className: "text-gray-400 hover:text-blue-400 transition-colors",
                                children: "الأسئلة الشائعة"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("button", {
                                onClick: () => {
                                    var e;
                                    return (e = document.getElementById("contact")) == null ? void 0 : e.scrollIntoView({
                                        behavior: "smooth"
                                    })
                                },
                                className: "text-gray-400 hover:text-blue-400 transition-colors",
                                children: "تواصل معنا"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    children: [f.jsx("h4", {
                        className: "text-xl font-bold mb-4",
                        children: "تواصل معنا"
                    }), f.jsxs("div", {
                        className: "space-y-3",
                        children: [f.jsxs("a", {
                            href: "tel:0500244345",
                            className: "flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors",
                            children: [f.jsx(ln, {
                                size: 20
                            }), f.jsx("span", {
                                children: "0500244345"
                            })]
                        }), f.jsxs("a", {
                            href: "https://wa.me/966500244345",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors",
                            children: [f.jsx(Eo, {
                                size: 20
                            }), f.jsx("span", {
                                children: "واتساب"
                            })]
                        })]
                    })]
                })]
            }), f.jsxs("div", {
                className: "border-t border-blue-500/20 pt-8 text-center",
                children: [f.jsx("p", {
                    className: "text-gray-400",
                    children: "© 2025 Ruh-Jed.com - جميع الحقوق محفوظة"
                }), f.jsx("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "خدمة نقل السيارات الأكثر أماناً في المملكة العربية السعودية"
                })]
            })]
        })
    }),
    lP = () => {
        const e = {
            scale: [1, 1.1, 1],
            transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: 1 / 0
            }
        };
        return f.jsxs(f.Fragment, {
            children: [f.jsx(I.a, {
                href: "https://wa.me/966500244345",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "fixed bottom-5 right-5 z-50 floating-btn bg-green-500",
                whileHover: {
                    scale: 1.2,
                    rotate: 10
                },
                whileTap: {
                    scale: .9
                },
                "aria-label": "WhatsApp",
                children: f.jsx(I.div, {
                    animate: e,
                    children: f.jsx(Eo, {
                        className: "h-8 w-8 text-white"
                    })
                })
            }), f.jsx(I.a, {
                href: "tel:0500244345",
                className: "fixed bottom-5 left-5 z-50 floating-btn bg-blue-500",
                whileHover: {
                    scale: 1.2,
                    rotate: -10
                },
                whileTap: {
                    scale: .9
                },
                "aria-label": "Call Now",
                children: f.jsx(I.div, {
                    animate: { ...e,
                        transition: { ...e.transition,
                            delay: .5
                        }
                    },
                    children: f.jsx(ln, {
                        className: "h-8 w-8 text-white"
                    })
                })
            })]
        })
    };

function uP() {
    return f.jsxs("div", {
        className: "min-h-screen",
        children: [f.jsxs(Tl, {
            children: [f.jsx("title", {
                children: "سطحة من الرياض إلى جدة | نقل وشحن سيارات | سطحة خاصة: 0500244345"
            }), f.jsx("meta", {
                name: "description",
                content: "سطحة من الرياض إلى جدة لنقل وشحن السيارات بأمان! نوفر سطحات هيدروليك وعادية ومغلقة. الأسعار تبدأ من 1100 ر.س. خدمة فورية من الباب للباب."
            })]
        }), f.jsx(PE, {}), f.jsxs("main", {
            children: [f.jsx(NE, {}), f.jsx(jE, {}), f.jsx(AE, {}), f.jsx(RE, {}), f.jsx(ME, {}), f.jsx(LE, {}), f.jsx(IE, {}), f.jsx(oP, {}), f.jsx(iP, {}), f.jsx(sP, {})]
        }), f.jsx(aP, {}), f.jsx(lP, {}), f.jsx(oS, {})]
    })
}
Pa.createRoot(document.getElementById("root")).render(f.jsx(uP, {}));