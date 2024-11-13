"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is middleware");
            next();
        });
        app.use(express.json());
        this.setRoute();
        app.use(function (req, res, next) {
            console.log("this is error middleware");
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        app.listen(8000, function () {
            console.log("server is on...");
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
var app = express();
//# sourceMappingURL=app.js.map