"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.get("/", function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.get("/cats/blue", function (req, res, next) {
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[0] });
});
app.get("/cats/som", function (req, res) {
    res.send({ cats: app_model_1.Cat, blue: app_model_1.Cat[1] });
});
app.listen(8000, function () {
    console.log("server is on...");
});
//# sourceMappingURL=app.js.map