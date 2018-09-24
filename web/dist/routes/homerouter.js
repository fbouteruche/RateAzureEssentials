"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
exports.__esModule = true;
var express_1 = require("express");
var http = require("http");
var secrets_1 = require("../utils/secrets");
var HomeRouter = /** @class */ (function () {
    /**
     * Initialize the HeroRouter
     */
    function HomeRouter() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET one session vote by date
     */
    HomeRouter.prototype.index = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.query && req.query.feedback) {
                    if (req.query.feedback == 1) {
                        return [2 /*return*/, res.render('index', { title: 'Azure Essentials', thanksmessage: 'Votre vote a bien été pris en compte. Merci pour vos encouragements !' })];
                    }
                    else {
                        return [2 /*return*/, res.render('index', { title: 'Azure Essentials', sorrymessage: 'Votre vote a bien été pris en compte. Nous sommes désolés et allons travailler dur pour nous améliorer !' })];
                    }
                }
                else {
                    return [2 /*return*/, res.render('index', { title: 'Azure Essentials' })];
                }
                return [2 /*return*/];
            });
        });
    };
    HomeRouter.prototype["for"] = function (req, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var options, myreq;
            return __generator(this, function (_a) {
                options = {
                    hostname: secrets_1.API_HOST,
                    protocol: 'http:',
                    port: secrets_1.API_PORT,
                    path: '/api/v1/votes/2018-09-26/for/',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                myreq = http.request(options, function (res) {
                    res.setEncoding('utf8');
                    res.on('data', function (chunk) {
                    });
                    res.on('end', function () {
                        return response.redirect('/?feedback=1');
                    });
                });
                myreq.on('error', function (e) {
                    console.error("problem with request: " + e.message);
                });
                // write data to request body
                myreq.end();
                return [2 /*return*/];
            });
        });
    };
    HomeRouter.prototype.against = function (req, response, next) {
        return __awaiter(this, void 0, void 0, function () {
            var options, myreq;
            return __generator(this, function (_a) {
                options = {
                    hostname: secrets_1.API_HOST,
                    protocol: 'http:',
                    port: secrets_1.API_PORT,
                    path: '/api/v1/votes/2018-09-26/against/',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                myreq = http.request(options, function (res) {
                    res.on('data', function (chunk) {
                    });
                    res.on('end', function () {
                        return response.redirect('/?feedback=0');
                    });
                });
                myreq.on('error', function (e) {
                    console.error("problem with request: " + e.message);
                });
                // write data to request body
                myreq.end();
                return [2 /*return*/];
            });
        });
    };
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    HomeRouter.prototype.init = function () {
        this.router.get('/', this.index);
        this.router.post("/for", this["for"]);
        this.router.post("/against", this.against);
    };
    return HomeRouter;
}());
exports.HomeRouter = HomeRouter;
// Create the HomeRouter, and export its configured Express.Router
var homeRouter = new HomeRouter();
homeRouter.init();
exports["default"] = homeRouter.router;
