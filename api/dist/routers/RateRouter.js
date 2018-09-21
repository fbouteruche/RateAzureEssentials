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
var sessionvote_1 = require("../schemas/sessionvote");
var RateRouter = /** @class */ (function () {
    /**
     * Initialize the HeroRouter
     */
    function RateRouter() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    RateRouter.prototype.getAll = function (req, res, next) {
        res.send('Rate');
    };
    /**
     * GET one hero by id
     */
    RateRouter.prototype.getOne = function (req, res, next) {
        var query = parseInt(req.params.id);
        res.status(200)
            .send({
            message: 'Success',
            status: res.status
        });
    };
    RateRouter.prototype.post = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var findQuery, sessionVote;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        findQuery = sessionvote_1.SessionVote.findOne({ 'date': new Date("2018-09-25") });
                        return [4 /*yield*/, findQuery.exec()];
                    case 1:
                        sessionVote = _a.sent();
                        if (!sessionVote) {
                            console.log("I'm in the if(!sessionVote) statement");
                            sessionVote = new sessionvote_1.SessionVote();
                            sessionVote.date = new Date("2018-09-25");
                        }
                        console.log(sessionVote.voteFor());
                        console.log(sessionVote.countFor);
                        console.log(sessionVote.date);
                        sessionVote.save();
                        res.sendStatus(200);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    RateRouter.prototype.init = function () {
        this.router.get('/', this.getAll);
        this.router.get('/:id', this.getOne);
        this.router.post('/', this.post);
    };
    return RateRouter;
}());
exports.RateRouter = RateRouter;
// Create the HeroRouter, and export its configured Express.Router
var rateRoutes = new RateRouter();
rateRoutes.init();
exports["default"] = rateRoutes.router;
