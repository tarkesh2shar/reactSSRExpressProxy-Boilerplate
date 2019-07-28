/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./project/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./project/client/pages/App.js":
/*!*************************************!*\
  !*** ./project/client/pages/App.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _actions = __webpack_require__(/*! ../../store/actions */ \"./project/store/actions/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App(props) {\n\n    console.log(\"my auth status is Auth\", props.auth);\n    return _react2.default.createElement(\n        'div',\n        null,\n        'I am an App Component ! for now !',\n        _react2.default.createElement(\n            'button',\n            { onClick: function onClick() {\n                    return console.log(\"Button Clickedd!\");\n                } },\n            'Click me !'\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/' },\n                'React Home SSR  '\n            ),\n            _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/dummy' },\n                ' DUMMY'\n            ),\n            props.auth ? _react2.default.createElement(\n                'a',\n                { href: '/api/logout' },\n                'Logout'\n            ) : _react2.default.createElement(\n                'a',\n                { href: '/api/auth/google' },\n                'Login'\n            )\n        )\n    );\n}\n\nfunction mapStateToProps(_ref) {\n    var auth = _ref.auth;\n\n    return { auth: auth };\n}\nexports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps)(App),\n    loadData: function loadData(_ref2) {\n        var dispatch = _ref2.dispatch;\n        return dispatch((0, _actions.fetchCurrentUser)());\n    }\n};\n\n//# sourceURL=webpack:///./project/client/pages/App.js?");

/***/ }),

/***/ "./project/client/pages/dummyPage.js":
/*!*******************************************!*\
  !*** ./project/client/pages/dummyPage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../../store/actions */ \"./project/store/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dummy = function (_Component) {\n    _inherits(Dummy, _Component);\n\n    function Dummy() {\n        _classCallCheck(this, Dummy);\n\n        return _possibleConstructorReturn(this, (Dummy.__proto__ || Object.getPrototypeOf(Dummy)).apply(this, arguments));\n    }\n\n    _createClass(Dummy, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n\n            this.props.dummyFetch();\n        }\n    }, {\n        key: 'renderList',\n        value: function renderList() {\n            return this.props.dummy.map(function (x) {\n                return _react2.default.createElement(\n                    'li',\n                    { key: x.id },\n                    x.name\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            console.log(\"from Dummy\", this.props.dummy);\n            return _react2.default.createElement(\n                'div',\n                null,\n                '!!!!Dummy Here!!!!',\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    this.renderList()\n                )\n            );\n        }\n    }]);\n\n    return Dummy;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        dummy: state.dummy\n    };\n};\n\nvar mapDispatchToProps = {\n\n    dummyFetch: _actions.dummyFetch\n\n    // export default connect(mapStateToProps,mapDispatchToProps)(Dummy)\n\n};exports.default = {\n    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Dummy),\n    loadData: function loadData(_ref) {\n        var dispatch = _ref.dispatch;\n        return dispatch((0, _actions.dummyFetch)());\n    }\n};\n\n//# sourceURL=webpack:///./project/client/pages/dummyPage.js?");

/***/ }),

/***/ "./project/client/pages/notFoundPage.js":
/*!**********************************************!*\
  !*** ./project/client/pages/notFoundPage.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction notFoundPage(_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n\n    staticContext.notFound = true;\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'h1',\n            null,\n            'Oops , Route not Found!'\n        )\n    );\n}\n\nexports.default = {\n    component: notFoundPage\n};\n\n//# sourceURL=webpack:///./project/client/pages/notFoundPage.js?");

/***/ }),

/***/ "./project/server/Routes.js":
/*!**********************************!*\
  !*** ./project/server/Routes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _dummyPage = __webpack_require__(/*! ../client/pages/dummyPage */ \"./project/client/pages/dummyPage.js\");\n\nvar _dummyPage2 = _interopRequireDefault(_dummyPage);\n\nvar _App = __webpack_require__(/*! ../client/pages/App */ \"./project/client/pages/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _notFoundPage = __webpack_require__(/*! ../client/pages/notFoundPage */ \"./project/client/pages/notFoundPage.js\");\n\nvar _notFoundPage2 = _interopRequireDefault(_notFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n    path: \"/\",\n    exact: true\n\n}), _extends({\n    path: \"/dummy\"\n}, _dummyPage2.default), _extends({}, _notFoundPage2.default)];\n\n// export default[\n\n\n//     {\n//         ...App,\n\n//         routes:[\n\n//             {\n//                 path:\"/dummy\",\n//                 ...Dummy,\n\n//             }\n//         ]\n\n//     }\n\n\n// ]\n\n\n// export default ()=>{\n\n\n//     const routes=[\n\n\n//         {\n//             ...App,\n\n//             routes:[\n\n//                 {\n//                     path:\"/\",\n//                     ...App,\n//                     exact:true\n//                 },\n//                 {\n//                     path:\"/dummy\",\n//                     ...Dummy\n//                 }\n//             ]\n\n//         }\n\n//     ]\n\n\n//     // return(\n\n//     //     <React.Fragment>\n\n//     //       <Route path=\"/\" exact component={App}/>\n\n//     //       <Route path=\"/dummy\" component={Dummy} />\n\n//     //     </React.Fragment>\n\n//     // )\n\n//     return routes;\n// }\n\n//# sourceURL=webpack:///./project/server/Routes.js?");

/***/ }),

/***/ "./project/server/index.js":
/*!*********************************!*\
  !*** ./project/server/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _makeHtml = __webpack_require__(/*! ../server/makeHtml */ \"./project/server/makeHtml.js\");\n\nvar _makeHtml2 = _interopRequireDefault(_makeHtml);\n\nvar _makeStore = __webpack_require__(/*! ./makeStore */ \"./project/server/makeStore.js\");\n\nvar _makeStore2 = _interopRequireDefault(_makeStore);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _Routes = __webpack_require__(/*! ../server/Routes */ \"./project/server/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\n//Using proxy for intial page renderer tricking api server to think this server is browser//\napp.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {\n    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n        opts.headers['x-forwarded-host'] = \"localhost:3000\";\n        return opts;\n    }\n}));\n\napp.use(_express2.default.static('public'));\n\napp.get('*', function (req, res) {\n\n    var store = (0, _makeStore2.default)(req);\n\n    var matchedRoute = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n\n    var promiseArray = matchedRoute.map(function (r) {\n\n        return r.route.loadData ? r.route.loadData(store) : null;\n    }).map(function (promise) {\n        if (promise) {\n\n            return new Promise(function (resolve, reject) {\n\n                promise.then(resolve).catch(resolve);\n            });\n        }\n    });\n\n    Promise.all(promiseArray).then(function () {\n        var context = {};\n\n        var htmlcontent = (0, _makeHtml2.default)(store, req, context);\n        if (context.url) {\n            return res.redirect(301, context.url);\n        }\n        if (context.notFound) {\n            res.status(404);\n        }\n\n        res.send(htmlcontent);\n    });\n});\n\napp.listen(3000, function () {\n\n    console.log(\"listening to port 3000\");\n});\n\n//# sourceURL=webpack:///./project/server/index.js?");

/***/ }),

/***/ "./project/server/makeHtml.js":
/*!************************************!*\
  !*** ./project/server/makeHtml.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./Routes */ \"./project/server/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (store, req, context) {\n\n    // const reactHTML=renderToString(\n\n    //     <Provider store={store}>\n\n    //         <App/>\n\n    //     </Provider>\n\n    // );\n\n\n    var reactHTML = (0, _server.renderToString)(_react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: context },\n            _react2.default.createElement(\n                _react2.default.Fragment,\n                null,\n                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n            )\n        )\n    ));\n\n    return '\\n\\n            <html>\\n            <head>\\n            \\n            </head>\\n            <body>\\n            <div id=\"root\">' + reactHTML + '</div>\\n            <script>\\n               window.INITIAL_STATE= ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n            </script>\\n            <script src=\"bundle.js\"></script>\\n\\n            </body>\\n        </html>\\n    \\n    ';\n};\n\n//# sourceURL=webpack:///./project/server/makeHtml.js?");

/***/ }),

/***/ "./project/server/makeStore.js":
/*!*************************************!*\
  !*** ./project/server/makeStore.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../store */ \"./project/store/index.js\");\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n    // /Using proxy for intial page renderer tricking api server to think this server is browser//\n    //!masking rendering server as a browser!\n    var axiosInstance = _axios2.default.create({\n\n        baseURL: \"http://react-ssr-api.herokuapp.com\",\n        headers: {\n            cookie: req.get('cookie') || \"\"\n        }\n    });\n\n    var store = (0, _redux.createStore)(_store2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\n    return store;\n};\n\n//# sourceURL=webpack:///./project/server/makeStore.js?");

/***/ }),

/***/ "./project/store/actions/index.js":
/*!****************************************!*\
  !*** ./project/store/actions/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchCurrentUser = exports.dummyFetch = undefined;\n\nvar _type = __webpack_require__(/*! ./type */ \"./project/store/actions/type.js\");\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar dummyFetch = exports.dummyFetch = function dummyFetch() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get(\"/users\");\n\n            case 2:\n              res = _context.sent;\n\n\n              dispatch({\n                type: _type.DUMMY,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return api.get('/current_user');\n\n            case 2:\n              res = _context2.sent;\n\n\n              dispatch({\n                type: _type.FETCH_CURRENT_USER,\n                payload: res\n\n              });\n\n            case 4:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./project/store/actions/index.js?");

/***/ }),

/***/ "./project/store/actions/type.js":
/*!***************************************!*\
  !*** ./project/store/actions/type.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar DUMMY = exports.DUMMY = \"DUMMY\";\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';\n\n//# sourceURL=webpack:///./project/store/actions/type.js?");

/***/ }),

/***/ "./project/store/index.js":
/*!********************************!*\
  !*** ./project/store/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _dummy = __webpack_require__(/*! ./reducers/dummy */ \"./project/store/reducers/dummy.js\");\n\nvar _dummy2 = _interopRequireDefault(_dummy);\n\nvar _auth = __webpack_require__(/*! ./reducers/auth */ \"./project/store/reducers/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n\n    dummy: _dummy2.default,\n    auth: _auth2.default\n\n});\n\n//# sourceURL=webpack:///./project/store/index.js?");

/***/ }),

/***/ "./project/store/reducers/auth.js":
/*!****************************************!*\
  !*** ./project/store/reducers/auth.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var action = arguments[1];\n\n\n    switch (action.type) {\n\n        case _type.FETCH_CURRENT_USER:\n            return action.payload.data || false;\n\n        default:\n            return state;\n    }\n};\n\nvar _type = __webpack_require__(/*! ../actions/type */ \"./project/store/actions/type.js\");\n\n//# sourceURL=webpack:///./project/store/reducers/auth.js?");

/***/ }),

/***/ "./project/store/reducers/dummy.js":
/*!*****************************************!*\
  !*** ./project/store/reducers/dummy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n\n  console.log(\"calling dummy reducers now!\", action);\n\n  switch (action.type) {\n    case _type.DUMMY:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\nvar _type = __webpack_require__(/*! ../actions/type */ \"./project/store/actions/type.js\");\n\n//# sourceURL=webpack:///./project/store/reducers/dummy.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });