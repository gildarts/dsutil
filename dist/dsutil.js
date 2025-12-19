(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/access_point */ "./src/access_point.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/connection */ "./src/connection.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dsns */ "./src/dsns.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/envelope */ "./src/envelope.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/http_client */ "./src/http_client.ts"), exports);


/***/ }),

/***/ "./src/access_point.ts":
/*!*****************************!*\
  !*** ./src/access_point.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessPoint = void 0;
var dsns_1 = __webpack_require__(/*! ./dsns */ "./src/dsns.ts");
var AccessPoint = /** @class */ (function () {
    function AccessPoint(applicationUrl, contract, dsns) {
        this.applicationUrl = applicationUrl;
        this.contract = contract;
        this.dsns = dsns;
    }
    AccessPoint.prototype.toString = function () {
        if (this.applicationUrl.endsWith('/')) {
            return "".concat(this.applicationUrl).concat(this.contract);
        }
        else {
            return "".concat(this.applicationUrl, "/").concat(this.contract);
        }
    };
    /** 解析 dsns，如果為 http 開頭，則不會呼叫 dsns server，而是直接建立 AccessPoint 物件。 */
    AccessPoint.resolve = function (dsns_2, contract_1) {
        return __awaiter(this, arguments, void 0, function (dsns, contract, timeoutMs) {
            var url;
            if (timeoutMs === void 0) { timeoutMs = 5000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dsns.startsWith('http')) return [3 /*break*/, 1];
                        return [2 /*return*/, new AccessPoint(dsns, contract)];
                    case 1: return [4 /*yield*/, (0, dsns_1.resolveDSNS)(dsns, timeoutMs)];
                    case 2:
                        url = _a.sent();
                        return [2 /*return*/, new AccessPoint(url, contract, dsns)];
                }
            });
        });
    };
    /** 解析 url 分離 dsns 與 contract。 */
    AccessPoint.parse = function (url) {
        var fragments = url.split('/');
        var contract;
        // 去除一些空白的陣列元件。
        while (!(contract = fragments.pop()) && fragments.length > 0) { }
        return new AccessPoint(fragments.join('/'), contract);
    };
    return AccessPoint;
}());
exports.AccessPoint = AccessPoint;


/***/ }),

/***/ "./src/connection.ts":
/*!***************************!*\
  !*** ./src/connection.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = exports.ConnectService = void 0;
var envelope_1 = __webpack_require__(/*! ./envelope */ "./src/envelope.ts");
var dsa_http_client_1 = __webpack_require__(/*! ./dsa_http_client */ "./src/dsa_http_client.ts");
var errors_1 = __webpack_require__(/*! ./errors */ "./src/errors.ts");
var secure_tunnel_1 = __webpack_require__(/*! ./secure_tunnel */ "./src/secure_tunnel.ts");
exports.ConnectService = 'DS.Base.Connect';
var Connection = /** @class */ (function () {
    function Connection(accessPoint, securityToken) {
        this.accessPoint = accessPoint;
        this.securityToken = securityToken;
        /** 安全通道服務（用於加密通訊） */
        this.secureTunnelService = null;
        /** 是否使用 session 機制。 */
        this.useSession = true;
        /** 請求超時設定（毫秒）。 */
        this.timeout = 5000;
        /** 是否啟用安全通道（RSA 混合加密）。 */
        this.enableSecureTunnel = true;
        this.create_at = new Date();
    }
    Object.defineProperty(Connection.prototype, "createAt", {
        get: function () { return this.create_at; },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, applicationUrl, contract, envelope, rsp, rspenv, preview, rspbody, sessionId;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.securityToken instanceof envelope_1.SessionSecurityToken) {
                            this.session = this.securityToken;
                            return [2 /*return*/, this];
                        }
                        if (!this.useSession)
                            return [2 /*return*/, this];
                        _a = this.accessPoint, applicationUrl = _a.applicationUrl, contract = _a.contract;
                        if (!this.enableSecureTunnel) return [3 /*break*/, 2];
                        this.secureTunnelService = new secure_tunnel_1.SecureTunnelService();
                        return [4 /*yield*/, this.secureTunnelService.init(applicationUrl, contract, this.timeout)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        envelope = new envelope_1.Envelope();
                        envelope.targetContract = contract;
                        envelope.targetService = exports.ConnectService;
                        envelope.credential = this.securityToken;
                        envelope.setBody('<RequestSessionID />');
                        return [4 /*yield*/, this.sendRaw(applicationUrl, contract, envelope.toString())];
                    case 3:
                        rsp = _d.sent();
                        try {
                            rspenv = new envelope_1.Envelope(rsp);
                        }
                        catch (err) {
                            // 如果是 XML 解析錯誤，把原始回應內容包進錯誤訊息
                            if (((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes("Unexpected")) || ((_c = err.message) === null || _c === void 0 ? void 0 : _c.includes("sax"))) {
                                preview = (rsp === null || rsp === void 0 ? void 0 : rsp.substring(0, 1000)) || "(empty)";
                                throw new Error("XML \u89E3\u6790\u5931\u6557\uFF0C\u53EF\u80FD\u56DE\u50B3\u4E86\u975E XML \u5167\u5BB9:\n".concat(preview));
                            }
                            throw err;
                        }
                        if (rspenv.code !== '0') {
                            throw new errors_1.DSAError(rspenv.message, rspenv.code);
                        }
                        rspbody = rspenv.getBody();
                        sessionId = rspbody.child('SessionID').text;
                        if (!sessionId) {
                            throw new Error('Session Not Supported.');
                        }
                        this.session = new envelope_1.SessionSecurityToken({ SessionID: sessionId });
                        this.version = rspenv.header('Version').text;
                        return [2 /*return*/, this];
                }
            });
        });
    };
    /**
     * 發送原始請求（處理加密/解密）
     */
    Connection.prototype.sendRaw = function (url, contract, envelopeXml) {
        return __awaiter(this, void 0, void 0, function () {
            var requestBody, tunnel, rsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = envelopeXml;
                        tunnel = null;
                        // 如果啟用安全通道，加密請求
                        if (this.enableSecureTunnel && this.secureTunnelService) {
                            tunnel = this.secureTunnelService.newTunnel();
                            requestBody = tunnel.protect(envelopeXml, contract);
                        }
                        return [4 /*yield*/, dsa_http_client_1.DSAHttpClient.post(url, requestBody, this.timeout)];
                    case 1:
                        rsp = _a.sent();
                        if (!(rsp === null || rsp === void 0 ? void 0 : rsp.body)) {
                            throw new Error('伺服器無回應');
                        }
                        // 如果有使用加密，解密回應
                        if (tunnel) {
                            return [2 /*return*/, tunnel.unprotect(rsp.body)];
                        }
                        return [2 /*return*/, rsp.body];
                }
            });
        });
    };
    Connection.prototype.getSession = function () {
        return this.session;
    };
    /** 取得 DSA 的核心版本。 */
    Connection.prototype.getVersion = function () {
        return this.version;
    };
    /**
     *
     * @param service 服務名稱。
     * @param body Xml 字串、Json 物件或是 Jsonx 物件。
     * @returns
     */
    Connection.prototype.send = function (service, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, applicationUrl, contract, envelope, rsp, rspenv, preview;
            var _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.accessPoint, applicationUrl = _a.applicationUrl, contract = _a.contract;
                        envelope = new envelope_1.Envelope();
                        envelope.targetContract = contract;
                        envelope.targetService = service;
                        if (this.useSession) {
                            envelope.credential = this.session;
                        }
                        else {
                            envelope.credential = this.securityToken;
                        }
                        envelope.setBody(body);
                        return [4 /*yield*/, this.sendRaw(applicationUrl, contract, envelope.toString())];
                    case 1:
                        rsp = _d.sent();
                        try {
                            rspenv = new envelope_1.Envelope(rsp);
                        }
                        catch (err) {
                            // 如果是 XML 解析錯誤，把原始回應內容包進錯誤訊息
                            if (((_b = err.message) === null || _b === void 0 ? void 0 : _b.includes("Unexpected")) || ((_c = err.message) === null || _c === void 0 ? void 0 : _c.includes("sax"))) {
                                preview = (rsp === null || rsp === void 0 ? void 0 : rsp.substring(0, 1000)) || "(empty)";
                                throw new Error("XML \u89E3\u6790\u5931\u6557\uFF0C\u53EF\u80FD\u56DE\u50B3\u4E86\u975E XML \u5167\u5BB9:\n".concat(preview));
                            }
                            throw err;
                        }
                        if (rspenv.code !== '0') {
                            throw new errors_1.DSAError(rspenv.message, rspenv.code, rspenv.getBody().toXmlString());
                        }
                        return [2 /*return*/, rspenv.getBody()];
                }
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;


/***/ }),

/***/ "./src/converter.ts":
/*!**************************!*\
  !*** ./src/converter.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = toJson;
exports.toXml = toXml;
var xml_js_1 = __webpack_require__(/*! xml-js */ "xml-js");
function toJson(xmlString) {
    return (0, xml_js_1.xml2js)(xmlString, { compact: true });
}
function toXml(jsonObj, rootName) {
    if (rootName) {
        var root = {};
        root[rootName] = jsonObj;
        return (0, xml_js_1.js2xml)(root, { compact: true, spaces: 4 });
    }
    else {
        return (0, xml_js_1.js2xml)(jsonObj, { compact: true, spaces: 4 });
    }
}


/***/ }),

/***/ "./src/dsa_http_client.ts":
/*!********************************!*\
  !*** ./src/dsa_http_client.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSAHttpClient = void 0;
var DSAHttpClient = /** @class */ (function () {
    function DSAHttpClient() {
    }
    DSAHttpClient.post = function (url_1, xmlString_1) {
        return __awaiter(this, arguments, void 0, function (url, xmlString, timeoutMs) {
            var fetchPromise, timeoutPromise, xmlStrRsp, error_1;
            if (timeoutMs === void 0) { timeoutMs = 5000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        fetchPromise = fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'text/xml'
                            },
                            body: xmlString
                        }).then(function (r) { return r.text(); });
                        timeoutPromise = new Promise(function (_, reject) {
                            return setTimeout(function () { return reject(new Error('TIMEOUT')); }, timeoutMs);
                        });
                        return [4 /*yield*/, Promise.race([fetchPromise, timeoutPromise])];
                    case 1:
                        xmlStrRsp = _a.sent();
                        return [2 /*return*/, { body: xmlStrRsp }];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.message === 'TIMEOUT') {
                            throw new Error("Request timeout after ".concat(timeoutMs, "ms"));
                        }
                        console.log('fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！fetch 炸了！');
                        console.error(error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DSAHttpClient.get = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, timeoutMs) {
            var fetchPromise, timeoutPromise, rsp, error_2;
            if (timeoutMs === void 0) { timeoutMs = 5000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        fetchPromise = fetch(url).then(function (r) { return r.text(); });
                        timeoutPromise = new Promise(function (_, reject) {
                            return setTimeout(function () { return reject(new Error('TIMEOUT')); }, timeoutMs);
                        });
                        return [4 /*yield*/, Promise.race([fetchPromise, timeoutPromise])];
                    case 1:
                        rsp = _a.sent();
                        return [2 /*return*/, { body: rsp }];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2.message === 'TIMEOUT') {
                            throw new Error("Request timeout after ".concat(timeoutMs, "ms"));
                        }
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return DSAHttpClient;
}());
exports.DSAHttpClient = DSAHttpClient;


/***/ }),

/***/ "./src/dsns.ts":
/*!*********************!*\
  !*** ./src/dsns.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSNS = void 0;
exports.registerLocal = registerLocal;
exports.resolveDSNS = resolveDSNS;
var dsa_http_client_1 = __webpack_require__(/*! ./dsa_http_client */ "./src/dsa_http_client.ts");
var localMap = new Map();
exports.DSNS = 'https://dsns.ischool.com.tw';
/** 註冊本地端 DSNS */
function registerLocal(dsns, url) {
    localMap.set(dsns, url);
}
function resolveDSNS(dsns_1) {
    return __awaiter(this, arguments, void 0, function (dsns, timeoutMs) {
        var rsp;
        if (timeoutMs === void 0) { timeoutMs = 10000; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 如果本地端有註冊就直接回傳。
                    if (localMap.has(dsns)) {
                        return [2 /*return*/, localMap.get(dsns)];
                    }
                    return [4 /*yield*/, dsa_http_client_1.DSAHttpClient.get("".concat(exports.DSNS, "/").concat(dsns, "?noredirect"), timeoutMs)];
                case 1:
                    rsp = _a.sent();
                    //console.log('dsns rsp', rsp);
                    if (rsp.body.indexOf('Exception') >= 0) {
                        throw new Error("DSNS Not Found(".concat(dsns, ")."));
                    }
                    return [2 /*return*/, rsp.body.replace('?noredirect', '')];
            }
        });
    });
}


/***/ }),

/***/ "./src/envelope.ts":
/*!*************************!*\
  !*** ./src/envelope.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportAccessToken = exports.PassportSecurityToken = exports.BasicSecurityToken = exports.SessionSecurityToken = exports.PublicSecurityToken = exports.SecurityToken = exports.Envelope = void 0;
var converter_1 = __webpack_require__(/*! ./converter */ "./src/converter.ts");
var xelement_1 = __webpack_require__(/*! ./xelement */ "./src/xelement.ts");
var RootName = "Envelope";
var HeaderName = 'Header';
var BodyName = 'Body';
var Envelope = /** @class */ (function () {
    function Envelope(xml) {
        if (xml === void 0) { xml = "<".concat(RootName, "/>"); }
        var root = new xelement_1.XElement(xml);
        if (!root.exists(RootName)) {
            throw new Error('根必須是 Envelop。');
        }
        this.envelope = root.child(RootName);
        this.m_header = this.envelope.child(HeaderName);
    }
    Object.defineProperty(Envelope.prototype, "targetContract", {
        get: function () {
            return this.m_header.child('TargetContract').text;
        },
        set: function (val) {
            this.m_header.child('TargetContract').text = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "targetService", {
        get: function () {
            return this.m_header.child('TargetService').text;
        },
        set: function (val) {
            this.m_header.child('TargetService').text = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "code", {
        get: function () {
            var _a, _b;
            var pos = ['Status', 'Code'];
            if ((_a = this.m_header).exists.apply(_a, pos)) {
                return (_b = this.m_header).child.apply(_b, pos).text;
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "message", {
        get: function () {
            var _a, _b;
            var pos = ['Status', 'Message'];
            if ((_a = this.m_header).exists.apply(_a, pos)) {
                return (_b = this.m_header).child.apply(_b, pos).text;
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Envelope.prototype, "credential", {
        get: function () {
            return this.m_security_token;
        },
        set: function (val) {
            this.m_security_token = val;
        },
        enumerable: false,
        configurable: true
    });
    Envelope.prototype.header = function () {
        var _a;
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        return (_a = this.m_header).child.apply(_a, name);
    };
    Envelope.prototype.getBody = function () {
        return this.envelope.child(BodyName);
    };
    Envelope.prototype.setBody = function (content) {
        this.envelope.raw(BodyName, content);
    };
    Envelope.prototype.toString = function () {
        if (this.credential) {
            this.m_header.raw(SecurityToken.Name, this.credential.data);
        }
        return this.envelope.toXmlString(RootName);
    };
    return Envelope;
}());
exports.Envelope = Envelope;
var SecurityToken = /** @class */ (function () {
    function SecurityToken(secrets) {
        if (secrets === void 0) { secrets = new xelement_1.XElement(); }
        if (!(secrets instanceof xelement_1.XElement)) {
            this.data = new xelement_1.XElement(secrets);
        }
        else {
            this.data = secrets;
        }
    }
    Object.defineProperty(SecurityToken.prototype, "type", {
        get: function () {
            return this.data.getAttr('Type');
        },
        enumerable: false,
        configurable: true
    });
    SecurityToken.Name = 'SecurityToken';
    return SecurityToken;
}());
exports.SecurityToken = SecurityToken;
var PublicSecurityToken = /** @class */ (function (_super) {
    __extends(PublicSecurityToken, _super);
    function PublicSecurityToken() {
        var _this = _super.call(this) || this;
        _this.data.setAttr('Type', 'Public');
        return _this;
    }
    return PublicSecurityToken;
}(SecurityToken));
exports.PublicSecurityToken = PublicSecurityToken;
var SessionSecurityToken = /** @class */ (function (_super) {
    __extends(SessionSecurityToken, _super);
    function SessionSecurityToken(secrets) {
        var _this = _super.call(this, { SessionID: { _text: secrets.SessionID } }) || this;
        _this.data.setAttr('Type', 'Session');
        return _this;
    }
    Object.defineProperty(SessionSecurityToken.prototype, "sessionId", {
        get: function () {
            return this.data.child('SessionID').text;
        },
        set: function (val) {
            this.data.child('SessionID').text = val;
        },
        enumerable: false,
        configurable: true
    });
    return SessionSecurityToken;
}(SecurityToken));
exports.SessionSecurityToken = SessionSecurityToken;
var BasicSecurityToken = /** @class */ (function (_super) {
    __extends(BasicSecurityToken, _super);
    function BasicSecurityToken(secrets) {
        var _this = _super.call(this, {
            UserName: { _text: secrets.UserName },
            Password: { _text: secrets.Password }
        }) || this;
        _this.data.setAttr('Type', 'Basic');
        return _this;
    }
    Object.defineProperty(BasicSecurityToken.prototype, "userName", {
        get: function () {
            return this.data.child('UserName').text;
        },
        set: function (val) {
            this.data.child('UserName').text = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BasicSecurityToken.prototype, "password", {
        get: function () {
            return this.data.child('Password').text;
        },
        set: function (val) {
            this.data.child('Password').text = val;
        },
        enumerable: false,
        configurable: true
    });
    return BasicSecurityToken;
}(SecurityToken));
exports.BasicSecurityToken = BasicSecurityToken;
var PassportSecurityToken = /** @class */ (function (_super) {
    __extends(PassportSecurityToken, _super);
    function PassportSecurityToken(passportXml) {
        var _this = _super.call(this, (0, converter_1.toJson)(passportXml)) || this;
        _this.data.setAttr('Type', 'Passport');
        return _this;
    }
    return PassportSecurityToken;
}(SecurityToken));
exports.PassportSecurityToken = PassportSecurityToken;
var PassportAccessToken = /** @class */ (function (_super) {
    __extends(PassportAccessToken, _super);
    function PassportAccessToken(secrets) {
        var _this = _super.call(this, { AccessToken: { _text: secrets.AccessToken } }) || this;
        _this.data.setAttr('Type', 'PassportAccessToken');
        return _this;
    }
    Object.defineProperty(PassportAccessToken.prototype, "accessToken", {
        get: function () {
            return this.data.child('AccessToken').text;
        },
        set: function (val) {
            this.data.child('AccessToken').text = val;
        },
        enumerable: false,
        configurable: true
    });
    return PassportAccessToken;
}(SecurityToken));
exports.PassportAccessToken = PassportAccessToken;


/***/ }),

/***/ "./src/errors.ts":
/*!***********************!*\
  !*** ./src/errors.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSAError = void 0;
var DSAError = /** @class */ (function (_super) {
    __extends(DSAError, _super);
    function DSAError(message, code, detail) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.detail = detail;
        _this.name = 'DSAError';
        return _this;
    }
    return DSAError;
}(Error));
exports.DSAError = DSAError;


/***/ }),

/***/ "./src/http_client.ts":
/*!****************************!*\
  !*** ./src/http_client.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
var got_1 = __importDefault(__webpack_require__(/*! got */ "got"));
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.post = function (url, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var rsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, got_1.default.post(url, __assign(__assign({}, options), { body: body }))];
                    case 1:
                        rsp = _a.sent();
                        return [2 /*return*/, { body: rsp.body }];
                }
            });
        });
    };
    HttpClient.get = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var rsp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, got_1.default.get(url, options)];
                    case 1:
                        rsp = _a.sent();
                        return [2 /*return*/, { body: rsp.body, header: rsp.headers }];
                }
            });
        });
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
// const url = 'http://devg.ischool.com.tw:8080/dsa/dev.sh_d/admin/UDSManagerService.ExportContract?stt=basic&username=admin&password=1campus12%23%24&body=%3CRequest%3E%20%3CContractName%3E1campus.mobile.v2.student%3C/ContractName%3E%3C/Request%3E';
// HttpClient.get(url).then(rsp => {
//     console.log(rsp);
// });
// const body = `
// <Envelope>
// 	<Header>
// 		<TargetService>UDSManagerService.ExportContract</TargetService>
// 		<TargetContract>admin</TargetContract>
// 		<SecurityToken Type="Basic">
//             <UserName>admin</UserName>
//             <Password>1campus12#$</Password>
// 		</SecurityToken>
// 	</Header>
// 	<Body>
// 		<Request>
// 			<ContractName>1campus.mobile.v2.student</ContractName>
// 		</Request>
// 	</Body>
// </Envelope>
// `
// HttpClient.post("http://devg.ischool.com.tw:8080/dsa/dev.sh_d", body).then(rsp => {
//     console.log(rsp);
// }, err => {
//     console.log(err);
// })


/***/ }),

/***/ "./src/secure_tunnel.ts":
/*!******************************!*\
  !*** ./src/secure_tunnel.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DSA Secure Tunnel - RSA 混合加密通道
 *
 * 移植自 C# FISCA.DSAClient.SecureTunnel
 *
 * 加密流程：
 * 1. 產生隨機 SecretKey (GUID)
 * 2. 用 MD5 將 GUID 轉成 16 bytes 作為 AES Key
 * 3. 用 Server 公鑰 RSA 加密 SecretKey
 * 4. 用 AES 加密原始 Envelope
 * 5. 組合成 CryptoToken 格式發送
 *
 * 解密流程：
 * 1. 從回應取出 CryptoToken/Cipher
 * 2. 用同一個 AES Key 解密
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureTunnelService = exports.SecureTunnel = void 0;
var crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
var dsa_http_client_ts_1 = __webpack_require__(/*! ./dsa_http_client.ts */ "./src/dsa_http_client.ts");
// === 工具函數 ===
/**
 * 從 XML 格式的 RSA 公鑰提取 Modulus 和 Exponent
 */
function parseRsaXmlKey(xml) {
    var modulusMatch = xml.match(/<Modulus>([^<]+)<\/Modulus>/);
    var exponentMatch = xml.match(/<Exponent>([^<]+)<\/Exponent>/);
    if (!modulusMatch || !exponentMatch) {
        throw new Error("無法解析 RSA XML 公鑰");
    }
    return {
        modulus: Buffer.from(modulusMatch[1], "base64"),
        exponent: Buffer.from(exponentMatch[1], "base64"),
    };
}
/**
 * 將 RSA XML 公鑰轉成 Node.js crypto 可用的 KeyObject
 */
function xmlKeyToPublicKey(xml) {
    var _a = parseRsaXmlKey(xml), modulus = _a.modulus, exponent = _a.exponent;
    // 轉成 JWK 格式
    var jwk = {
        kty: "RSA",
        n: modulus.toString("base64url"),
        e: exponent.toString("base64url"),
    };
    return crypto_1.default.createPublicKey({ key: jwk, format: "jwk" });
}
/**
 * 將密碼字串用 MD5 轉成 16 bytes 的 AES Key
 */
function md5Password(password) {
    return crypto_1.default.createHash("md5").update(password, "utf8").digest();
}
/**
 * AES-128-ECB 加密（PKCS7 padding）
 */
function aesEncrypt(plaintext, key) {
    var cipher = crypto_1.default.createCipheriv("aes-128-ecb", key, null);
    cipher.setAutoPadding(true);
    var encrypted = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
    return encrypted.toString("base64");
}
/**
 * AES-128-ECB 解密（PKCS7 padding）
 */
function aesDecrypt(ciphertext, key) {
    var decipher = crypto_1.default.createDecipheriv("aes-128-ecb", key, null);
    decipher.setAutoPadding(true);
    var decrypted = Buffer.concat([decipher.update(ciphertext, "base64"), decipher.final()]);
    return decrypted.toString("utf8");
}
/**
 * 用 Server 公鑰 RSA 加密
 */
function rsaEncrypt(plaintext, publicKey) {
    var encrypted = crypto_1.default.publicEncrypt({
        key: publicKey,
        padding: crypto_1.default.constants.RSA_PKCS1_PADDING,
    }, Buffer.from(plaintext, "utf8"));
    return encrypted.toString("base64");
}
/**
 * 產生 Client 的 RSA KeyPair
 */
function generateClientKeyPair() {
    var _a = crypto_1.default.generateKeyPairSync("rsa", {
        modulusLength: 1024,
    }), privateKey = _a.privateKey, publicKey = _a.publicKey;
    // 將公鑰轉成 C# 的 XML 格式
    var jwk = publicKey.export({ format: "jwk" });
    var modulus = Buffer.from(jwk.n, "base64url").toString("base64");
    var exponent = Buffer.from(jwk.e, "base64url").toString("base64");
    var publicKeyXml = "<RSAKeyValue><Modulus>".concat(modulus, "</Modulus><Exponent>").concat(exponent, "</Exponent></RSAKeyValue>");
    return { privateKey: privateKey, publicKeyXml: publicKeyXml };
}
// === SecureTunnel 類別 ===
/**
 * 安全通道 - 處理單次請求的加解密
 */
var SecureTunnel = /** @class */ (function () {
    function SecureTunnel(serverPublicKey) {
        this.serverPublicKey = serverPublicKey;
        this.secretKeyString = crypto_1.default.randomUUID();
        this.aesKey = md5Password(this.secretKeyString);
        var publicKeyXml = generateClientKeyPair().publicKeyXml;
        this.clientPublicKeyXml = publicKeyXml;
    }
    /**
     * 加密 Envelope
     * @param envelope 原始 Envelope XML 字串
     * @param targetContract 目標 Contract（會保留在外層）
     * @returns 加密後的 Envelope XML 字串
     */
    SecureTunnel.prototype.protect = function (envelope, targetContract) {
        // RSA 加密 SecretKey
        var cipherSecretKey = rsaEncrypt(this.secretKeyString, this.serverPublicKey);
        // AES 加密 Client PublicKey
        var cipherPublicKey = aesEncrypt(this.clientPublicKeyXml, this.aesKey);
        // AES 加密原始 Envelope
        var cipherContent = aesEncrypt(envelope, this.aesKey);
        // 組合加密後的 Envelope
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<Envelope>\n<Header>\n<TargetContract>".concat(targetContract, "</TargetContract>\n<CryptoToken Type=\"Static\">\n<SecretKey>").concat(cipherSecretKey, "</SecretKey>\n<PublicKey>").concat(cipherPublicKey, "</PublicKey>\n<Cipher>").concat(cipherContent, "</Cipher>\n</CryptoToken>\n</Header>\n<Body/>\n</Envelope>");
    };
    /**
     * 解密 Envelope
     * @param encryptedEnvelope 加密的 Envelope XML 字串
     * @returns 解密後的 Envelope XML 字串
     */
    SecureTunnel.prototype.unprotect = function (encryptedEnvelope) {
        var cipherMatch = encryptedEnvelope.match(/<Cipher>([^<]+)<\/Cipher>/);
        if (!cipherMatch) {
            // 沒有 CryptoToken，可能是明文錯誤回應，直接返回
            return encryptedEnvelope;
        }
        return aesDecrypt(cipherMatch[1], this.aesKey);
    };
    return SecureTunnel;
}());
exports.SecureTunnel = SecureTunnel;
// === SecureTunnelService 類別 ===
/**
 * 安全通道服務 - 管理與特定 Contract 的加密通道
 */
var SecureTunnelService = /** @class */ (function () {
    function SecureTunnelService() {
        this.serverPublicKey = null;
        this.accessPointUrl = "";
        this.targetContract = "";
    }
    /**
     * 初始化安全通道服務
     * @param accessPointUrl DSA 存取點 URL
     * @param targetContract 目標 Contract
     * @param timeout 超時時間（毫秒）
     */
    SecureTunnelService.prototype.init = function (accessPointUrl_1, targetContract_1) {
        return __awaiter(this, arguments, void 0, function (accessPointUrl, targetContract, timeout) {
            var requestBody, response;
            if (timeout === void 0) { timeout = 5000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.accessPointUrl = accessPointUrl;
                        this.targetContract = targetContract;
                        requestBody = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<Envelope>\n<Header>\n<TargetContract>info</TargetContract>\n<TargetService>Public.GetPublicKey</TargetService>\n</Header>\n<Body>\n<Content>\n<Contract>".concat(targetContract, "</Contract>\n<Format>pkcs8</Format>\n</Content>\n</Body>\n</Envelope>");
                        return [4 /*yield*/, dsa_http_client_ts_1.DSAHttpClient.post(accessPointUrl, requestBody, timeout)];
                    case 1:
                        response = _a.sent();
                        if (!(response === null || response === void 0 ? void 0 : response.body)) {
                            throw new Error("取得 Server 公鑰失敗：無回應");
                        }
                        // 檢查是否是錯誤回應
                        if (response.body.includes("<Status>") || response.body.includes("<Code>")) {
                            throw new Error("\u53D6\u5F97 Server \u516C\u9470\u5931\u6557\uFF1A".concat(response.body));
                        }
                        // 解析公鑰
                        this.serverPublicKey = xmlKeyToPublicKey(response.body);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 建立新的安全通道
     */
    SecureTunnelService.prototype.newTunnel = function () {
        if (!this.serverPublicKey) {
            throw new Error("SecureTunnelService 尚未初始化，請先呼叫 init()");
        }
        return new SecureTunnel(this.serverPublicKey);
    };
    /**
     * 取得目標 Contract
     */
    SecureTunnelService.prototype.getTargetContract = function () {
        return this.targetContract;
    };
    return SecureTunnelService;
}());
exports.SecureTunnelService = SecureTunnelService;


/***/ }),

/***/ "./src/xelement.ts":
/*!*************************!*\
  !*** ./src/xelement.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XElement = void 0;
var converter_1 = __webpack_require__(/*! ./converter */ "./src/converter.ts");
/** 提供以 Xml 概念操作 JSON 結構。 */
var XElement = /** @class */ (function () {
    /**
     * 建立物件從 xml 字串或是 ElementCompact。
     */
    function XElement(content) {
        if (content === void 0) { content = {}; }
        if (typeof (content) === 'string') {
            var root = "<__root>".concat(content, "</__root>");
            this.data = (0, converter_1.toJson)(root)['__root'];
        }
        else {
            this.data = content;
        }
    }
    XElement.parse = function (xml) {
        var root = "<__root>".concat(xml, "</__root>");
        return new XElement((0, converter_1.toJson)(root)['__root']);
    };
    Object.defineProperty(XElement.prototype, "text", {
        /**
         * 讀取或設定文字內容。
         */
        get: function () {
            this.checkNotArray();
            var val = this.data._text;
            return (val !== null && val !== void 0 ? val : null);
        },
        set: function (val) {
            this.checkNotArray();
            this.data._text = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XElement.prototype, "cdata", {
        /** 讀取或寫入 CDATASection 資料。 */
        get: function () {
            this.checkNotArray();
            return this.data._cdata;
        },
        set: function (val) {
            this.checkNotArray();
            this.data._cdata = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 取得屬性文字內容。
     */
    XElement.prototype.getAttr = function (name) {
        this.checkNotArray();
        var _a = this.data._attributes, _attributes = _a === void 0 ? {} : _a;
        return _attributes[name] + '';
    };
    /** 設定屬性文字內容。 */
    XElement.prototype.setAttr = function (name, val) {
        this.checkNotArray();
        var data = this.data;
        var _attributes = data._attributes;
        if (!_attributes) {
            _attributes = data._attributes = {};
        }
        _attributes[name] = val;
        return this;
    };
    /** 取得子節點物件。 */
    XElement.prototype.child = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        var parent = this.data;
        var child;
        for (var _a = 0, name_1 = name; _a < name_1.length; _a++) {
            var n = name_1[_a];
            child = this.getChild(n, parent);
            parent = child.data;
        }
        return child;
    };
    /**
     * 取得子節點陣列。
     *
     * @param {string} name 子節點陣列名稱。
     * @param {boolean} [autoConvert=false] 是否自動轉換為陣列，如果不是會自動轉換為陣列。
     * 當值是 false 時，子節點非陣列會 Throw Error，預設為 true。
     * @returns 子節點陣列。
     * @memberof Jsonx
     */
    XElement.prototype.children = function (name, autoConvert) {
        if (autoConvert === void 0) { autoConvert = true; }
        var children = this.data[name];
        if (children) {
            if (autoConvert) {
                if (!Array.isArray(children)) {
                    children = this.data[name] = [children];
                }
            }
            this.checkIsArray(children);
            return new XElement(children);
        }
        else {
            this.data[name] = [];
            return new XElement(this.data[name]);
        }
    };
    /** 移除子節點，包含陣列結構。 */
    XElement.prototype.remove = function (name) {
        if (!this.exists(name)) {
            return;
        }
        delete this.data[name];
    };
    /**
     * 提供寫入未處理的內容。
     *
     * @param {string} name 子節點名稱。
     * @param {(string | XElement | any)} content Xml 字串、Jsonx 物件、一般物件。
     * @memberof Jsonx
     */
    XElement.prototype.raw = function (name, content) {
        if (typeof (content) === 'string') {
            var r = XElement.parse(content);
            this.data[name] = r.data;
        }
        else if (content instanceof XElement) {
            this.data[name] = content.data;
        }
        else {
            this.data[name] = content;
        }
    };
    // 如果不是陣列的話，會包裝成只有一個元素的 Iterator。
    XElement.prototype[Symbol.iterator] = function () {
        if (Array.isArray(this.data)) {
            return Array.from(this.data)
                .map(function (v) { return new XElement(v); })
                .values();
        }
        else {
            return [].concat(this.data)
                .map(function (v) { return new XElement(v); })
                .values();
        }
    };
    /** 在目前的陣列上建立一個新元素。 */
    XElement.prototype.new = function () {
        this.checkIsArray(this.data);
        var newnode = {};
        this.data.push(newnode);
        return new XElement(newnode);
    };
    XElement.prototype.exists = function () {
        var name = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            name[_i] = arguments[_i];
        }
        if (!!!this.data) {
            return false;
        }
        var parent = this.data;
        var child;
        for (var _a = 0, name_2 = name; _a < name_2.length; _a++) {
            var n = name_2[_a];
            child = parent[n];
            if (!!!child) {
                return false;
            }
            parent = child;
        }
        return !!child;
    };
    /** 轉換成 Xml 字串格式。 */
    XElement.prototype.toXmlString = function (rootName) {
        return (0, converter_1.toXml)(this.data, rootName);
    };
    // 是否為陣列，不是的話就 Throw Error，沒有傳參數代表判斷物件自身。
    XElement.prototype.checkIsArray = function (elm) {
        if (elm === void 0) { elm = this.data; }
        if (!Array.isArray(elm)) {
            throw new Error("\u53EA\u6709\u9663\u5217\u7BC0\u9EDE\u624D\u4EE5\u9032\u884C\u6B64\u64CD\u4F5C\u3002");
        }
    };
    // 必需不是陣列，是的話就 Throw Error，沒有傳參數代表判斷物件自身。
    XElement.prototype.checkNotArray = function (elm) {
        if (elm === void 0) { elm = this.data; }
        if (Array.isArray(elm)) {
            throw new Error("\u9663\u5217\u4E0D\u53EF\u9032\u884C\u6B64\u64CD\u4F5C\u3002");
        }
    };
    XElement.prototype.getChild = function (childName, parent) {
        var child = parent[childName];
        if (child) {
            this.checkNotArray();
            return new XElement(child);
        }
        else {
            parent[childName] = {};
            return new XElement(parent[childName]);
        }
    };
    return XElement;
}());
exports.XElement = XElement;


/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "got":
/*!**********************!*\
  !*** external "got" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("got");

/***/ }),

/***/ "xml-js":
/*!*************************!*\
  !*** external "xml-js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xml-js");

/***/ })

/******/ })));
//# sourceMappingURL=dsutil.js.map