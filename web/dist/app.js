"use strict";
exports.__esModule = true;
var express = require("express");
var homerouter_1 = require("./routes/homerouter");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.set('views', './views');
        this.express.set('view engine', 'pug');
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // placeholder route handler
        this.express.use('/', homerouter_1["default"]);
    };
    return App;
}());
exports["default"] = new App().express;
