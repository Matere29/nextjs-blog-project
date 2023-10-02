exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 149:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "logo_logo__U0Qbc"
};


/***/ }),

/***/ 2982:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "main-navigation_header__SNiX9",
	"active": "main-navigation_active__zgqb7"
};


/***/ }),

/***/ 9611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4512);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(5621);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../../node_modules/next/link.js
var next_link = __webpack_require__(9218);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/layout/main-navigation.module.css
var main_navigation_module = __webpack_require__(2982);
var main_navigation_module_default = /*#__PURE__*/__webpack_require__.n(main_navigation_module);
// EXTERNAL MODULE: ./components/layout/logo.module.css
var logo_module = __webpack_require__(149);
var logo_module_default = /*#__PURE__*/__webpack_require__.n(logo_module);
;// CONCATENATED MODULE: ./components/layout/logo.js


function Logo() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: (logo_module_default()).logo,
        children: "Rorisang' Next Blog"
    });
}
/* harmony default export */ const logo = (Logo);

;// CONCATENATED MODULE: ./components/layout/main-navigation.js




function MainNavigation() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: (main_navigation_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime.jsx(logo, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/posts",
                                children: "Posts"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/contact",
                                children: "Contact"
                            })
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const main_navigation = (MainNavigation);

;// CONCATENATED MODULE: ./components/layout/layout.js



function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(main_navigation, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(layout, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4512);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7013);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


//Defines general structure of our page
class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            id: "notifications"
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 5621:
/***/ (() => {



/***/ })

};
;