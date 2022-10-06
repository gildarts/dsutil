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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
            return "" + this.applicationUrl + this.contract;
        }
        else {
            return this.applicationUrl + "/" + this.contract;
        }
    };
    /** 解析 dsns，如果為 http 開頭，則不會呼叫 dsns server，而是直接建立 AccessPoint 物件。 */
    AccessPoint.resolve = function (dsns, contract) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!dsns.startsWith('http')) return [3 /*break*/, 1];
                        return [2 /*return*/, new AccessPoint(dsns, contract)];
                    case 1: return [4 /*yield*/, dsns_1.resolveDSNS(dsns)];
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
// let ap = AccessPoint.parse('http://devg.ischool.com.tw/dsa/dev.sh_d/1campus.mobile.v1');
// console.log(ap);
// AccessPoint.resolve('dev.sh_d', '1campus.mobile.v1').then( v => {
//     console.log(v);
// });


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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.ConnectService = 'DS.Base.Connect';
var Connection = /** @class */ (function () {
    function Connection(accessPoint, securityToken) {
        this.accessPoint = accessPoint;
        this.securityToken = securityToken;
        /** 是否使用 session 機制。 */
        this.useSession = true;
        this.create_at = new Date();
    }
    Object.defineProperty(Connection.prototype, "createAt", {
        get: function () {
            return this.create_at;
        },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, applicationUrl, contract, envelope, rsp, rspenv, rspbody, sessionId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.securityToken instanceof envelope_1.SessionSecurityToken) {
                            this.session = this.securityToken;
                            return [2 /*return*/, this];
                        }
                        if (!this.useSession) {
                            return [2 /*return*/, this];
                        }
                        _a = this.accessPoint, applicationUrl = _a.applicationUrl, contract = _a.contract;
                        envelope = new envelope_1.Envelope();
                        envelope.targetContract = contract;
                        envelope.targetService = exports.ConnectService;
                        envelope.credential = this.securityToken;
                        envelope.setBody('<RequestSessionID />');
                        return [4 /*yield*/, dsa_http_client_1.DSAHttpClient.post(applicationUrl, envelope.toString())];
                    case 1:
                        rsp = _b.sent();
                        rspenv = new envelope_1.Envelope(rsp === null || rsp === void 0 ? void 0 : rsp.body);
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
            var _a, applicationUrl, contract, envelope, rsp, rspenv;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.accessPoint, applicationUrl = _a.applicationUrl, contract = _a.contract;
                        if (!this.session) {
                            throw new Error('請先連線後再呼叫 Service。');
                        }
                        envelope = new envelope_1.Envelope();
                        envelope.targetContract = contract;
                        envelope.targetService = service;
                        envelope.credential = this.session;
                        envelope.setBody(body);
                        return [4 /*yield*/, dsa_http_client_1.DSAHttpClient.post(applicationUrl, envelope.toString())];
                    case 1:
                        rsp = _b.sent();
                        rspenv = new envelope_1.Envelope(rsp === null || rsp === void 0 ? void 0 : rsp.body);
                        if (rspenv.code !== '0') {
                            throw new errors_1.DSAError(rspenv.message, rspenv.code, rspenv.getBody().toCompactJson());
                        }
                        return [2 /*return*/, rspenv.getBody()];
                }
            });
        });
    };
    return Connection;
}());
exports.Connection = Connection;
// async function main() {
//     const conn = new Connection(
//         await AccessPoint.resolve('dev.sh_d', 'admin'),
//         new BasicSecurityToken({UserName: 'admin', Password: '1campus12#$'})
//     );
//     await conn.connect();
//     // const body = '<Request><ContractName>1campus.mobile.v2.student</ContractName></Request>';
//     // const body = new Jsonx({ Request: { ContractName: { _text: '1campus.mobile.v2.student' } } });
//     const body = new Jsonx();
//     body.child('Request', 'ContractName').text = '1campus.mobile.v2.student';
//     const rsp = await conn.send('UDSManagerService.ExportContract', body);
//     const pkgs = rsp.child('Contract').children('Package', true);
//     for(const pkg of pkgs) {
//         console.log(pkg.getAttr('Name'));
//         for(const srv of pkg.children('Service', true)) {
//             const srvType = srv.child('Definition').getAttr('Type');
//             console.log(`\t${srv.getAttr('Name')}, ${srvType}`);
//         }
//     }
//     // console.log(rsp.toXml('Body'));
// }
// main();


/***/ }),

/***/ "./src/converter.ts":
/*!**************************!*\
  !*** ./src/converter.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toXml = exports.toJson = void 0;
var xml_js_1 = __webpack_require__(/*! xml-js */ "xml-js");
function toJson(xmlString) {
    return xml_js_1.xml2js(xmlString, { compact: true });
}
exports.toJson = toJson;
function toXml(jsonObj, rootName) {
    if (rootName) {
        var root = {};
        root[rootName] = jsonObj;
        return xml_js_1.js2xml(root, { compact: true, spaces: 4 });
    }
    else {
        return xml_js_1.js2xml(jsonObj, { compact: true, spaces: 4 });
    }
}
exports.toXml = toXml;


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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
    /** TODO: 需要優化可靠度。 */
    DSAHttpClient.post = function (url, xmlString) {
        return __awaiter(this, void 0, void 0, function () {
            var response, xmlStrRsp, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'text/xml',
                                },
                                body: xmlString,
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        xmlStrRsp = _a.sent();
                        return [2 /*return*/, { body: xmlStrRsp }];
                    case 3:
                        error_1 = _a.sent();
                        console.error(error_1);
                        console.log("fetch \u70B8\u4E86!fetch \u70B8\u4E86!fetch \u70B8\u4E86!" + url);
                        console.log(xmlString);
                        return [2 /*return*/, { body: {} }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DSAHttpClient.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(url)
                        .then(function (response) {
                        return response.text();
                    })
                        .then(function (rsp) {
                        return { body: rsp };
                    })];
            });
        });
    };
    return DSAHttpClient;
}());
exports.DSAHttpClient = DSAHttpClient;
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
exports.resolveDSNS = exports.registerLocal = exports.DSNS = void 0;
var dsa_http_client_1 = __webpack_require__(/*! ./dsa_http_client */ "./src/dsa_http_client.ts");
var localMap = new Map();
exports.DSNS = 'https://dsns.ischool.com.tw';
/** 註冊本地端 DSNS */
function registerLocal(dsns, url) {
    localMap.set(dsns, url);
}
exports.registerLocal = registerLocal;
function resolveDSNS(dsns) {
    return __awaiter(this, void 0, void 0, function () {
        var rsp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 如果本地端有註冊就直接回傳。
                    if (localMap.has(dsns)) {
                        return [2 /*return*/, localMap.get(dsns)];
                    }
                    return [4 /*yield*/, dsa_http_client_1.DSAHttpClient.get(exports.DSNS + "/" + dsns + "?noredirect")];
                case 1:
                    rsp = _a.sent();
                    //console.log('dsns rsp', rsp);
                    if (rsp.body.indexOf('Exception') >= 0) {
                        throw new Error("DSNS Not Found(" + dsns + ").");
                    }
                    return [2 /*return*/, rsp.body.replace('?noredirect', '')];
            }
        });
    });
}
exports.resolveDSNS = resolveDSNS;


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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenSecurityToken = exports.PassportAccessToken = exports.PassportSecurityToken = exports.BasicSecurityToken = exports.SessionSecurityToken = exports.PublicSecurityToken = exports.SecurityToken = exports.Envelope = void 0;
var converter_1 = __webpack_require__(/*! ./converter */ "./src/converter.ts");
var xelement_1 = __webpack_require__(/*! ./xelement */ "./src/xelement.ts");
var RootName = 'Envelope';
var HeaderName = 'Header';
var BodyName = 'Body';
var Envelope = /** @class */ (function () {
    function Envelope(xml) {
        if (xml === void 0) { xml = "<" + RootName + "/>"; }
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
            Password: { _text: secrets.Password },
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
        var _this = _super.call(this, converter_1.toJson(passportXml)) || this;
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
var AccessTokenSecurityToken = /** @class */ (function (_super) {
    __extends(AccessTokenSecurityToken, _super);
    function AccessTokenSecurityToken(secrets) {
        var _this = _super.call(this, { AccessToken: { _text: secrets.AccessToken } }) || this;
        _this.data.setAttr('Type', 'AccessToken');
        return _this;
    }
    Object.defineProperty(AccessTokenSecurityToken.prototype, "accessToken", {
        get: function () {
            return this.data.child('AccessToken').text;
        },
        set: function (val) {
            this.data.child('AccessToken').text = val;
        },
        enumerable: false,
        configurable: true
    });
    return AccessTokenSecurityToken;
}(SecurityToken));
exports.AccessTokenSecurityToken = AccessTokenSecurityToken;
// <SecurityToken Type="Basic">
//             <UserName>admin</UserName>
//             <Password>1campus12#$</Password>
// 		</SecurityToken>
// const env = new Envelope();
// env.targetService = 'GetStudent';
// env.targetContract = '1campus.mobile.v2';
// env.credential = new SecurityToken({_attributes: {Type: 'Basic'}, UserName: 'zoe.lu', Password: '79000666'});
// const token = new BasicSecurityToken();
// token.userName = 'zoe.lu';
// token.password = '777888';
// env.credential = token;
// env.credential = new BasicSecurityToken({UserName: 'zoelu', Password: '12345'});
// env.credential = new SessionSecurityToken({SessionID: 'xyzzoefff'});
// env.setBody('<Request/><SecondNode/>');
// console.log(env.getBody());
// console.log(env.toString());


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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.detail = detail;
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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

/***/ "./src/xelement.ts":
/*!*************************!*\
  !*** ./src/xelement.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XElement = void 0;
var xml_js_1 = __webpack_require__(/*! xml-js */ "xml-js");
var converter_1 = __webpack_require__(/*! ./converter */ "./src/converter.ts");
/** 提供以 Xml 概念操作 JSON 結構。 */
var XElement = /** @class */ (function () {
    /**
     * 建立物件從 xml 字串或是 ElementCompact。
     */
    function XElement(content) {
        if (content === void 0) { content = {}; }
        if (typeof content === 'string') {
            var root = "<__root>" + content + "</__root>";
            this.data = converter_1.toJson(root).__root;
        }
        else {
            this.data = content;
        }
    }
    XElement.parse = function (xml) {
        var root = "<__root>" + xml + "</__root>";
        return new XElement(converter_1.toJson(root).__root);
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
        if (typeof content === 'string') {
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
            return []
                .concat(this.data)
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
        if (!this.data) {
            return false;
        }
        var parent = this.data;
        var child;
        for (var _a = 0, name_2 = name; _a < name_2.length; _a++) {
            var n = name_2[_a];
            child = parent[n];
            if (!child) {
                return false;
            }
            parent = child;
        }
        return !!child;
    };
    /** 轉換成 Xml 字串格式。 */
    XElement.prototype.toXmlString = function (rootName) {
        return converter_1.toXml(this.data, rootName);
    };
    /** 轉換成簡單 JSON 格式，無法處理數字型別，所有的值都會是字串。*/
    XElement.prototype.toCompactJson = function () {
        return xml_js_1.xml2json(this.toXmlString(), { compact: true });
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
// (window as any)['Jsonx'] = Jsonx;
// // const jsondoc = Jsonx.parse('<Envelope></Envelope><Second/>');
// const jsondoc = new Jsonx('<Envelope></Envelope><Second/>');
// jsondoc.child('Header').child('TargetContract').text = 'schoolaccess';
// jsondoc.child('Header').child('TargetService').text = 'GetStudentList';
// jsondoc.child('Header').child('SecurityToken').child('UserName').text = 'yaoming';
// jsondoc.child('Header').child('SecurityToken').child('Password').text = '12345';
// jsondoc.child('Body').child('Zoe')
//     .setAttr('Gender', 'female')
//     .setAttr('Age', '45')
//     .setAttr('Money', '2000');
// const zoe = jsondoc.child('Body').children('Zoe', true).new();
// zoe.text = 'new zoe!';
// jsondoc.child('Header', 'SecurityToken', 'Passport').text = 'zoe xyz!';
// jsondoc.child(...['Header', 'SecurityToken', 'PassportAccessToken']).text = 'zoe xyz!';
// jsondoc.raw('PowerZoe', '<Male/>');
// jsondoc.raw('PowerZoe', toJson('<Parse/>'));
// jsondoc.raw('PowerZoe', [{ Gender: 'female', Age: 35 }, { Gender: 'female1', Age: 37 }]);
// jsondoc.child('XmlFormat').text = '<zoe>>><zzzz';
// jsondoc.child('ZoeCDATA').cdata = '<zyx/>power<ppp>>>'
// console.log(jsondoc.toXml());
// console.log(jsondoc.child('ZoeCDATA').cdata);
/** ================== */
// const jx = new Jsonx('<Root><Child>zoe</Child></Root>');
// console.log(jx.exists('Root', 'Child'));


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