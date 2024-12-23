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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.patchcat = exports.updateCat = exports.createCat = exports.readOnecat = exports.readAllcat = void 0;
var cats_app_model_1 = require("./cats.app.model");
var readAllcat = function (req, res) {
    try {
        var cats = cats_app_model_1.Cat;
        res.status(200).send({
            success: true,
            data: cats,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readAllcat = readAllcat;
var readOnecat = function (req, res) {
    try {
        var params_1 = req.params;
        var cat = cats_app_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: cat,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.readOnecat = readOnecat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        cats_app_model_1.Cat.push(data);
        res.status(200).send({
            success: true,
            data: data,
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
exports.createCat = createCat;
var updateCat = function (req, res) {
    try {
        var data_1 = req.body;
        var param_1 = req.params;
        var result_1;
        cats_app_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_1.id) {
                cat = data_1;
                result_1 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: data_1,
        });
    }
    catch (error) { }
};
exports.updateCat = updateCat;
var patchcat = function (req, res) {
    try {
        var data_2 = req.body;
        var param_2 = req.params;
        var result_2;
        cats_app_model_1.Cat.forEach(function (cat) {
            if (cat.id === param_2.id) {
                cat = __assign(__assign({}, cat), data_2);
                result_2 = cat;
            }
        });
        res.status(200).send({
            success: true,
            data: data_2,
        });
    }
    catch (error) { }
};
exports.patchcat = patchcat;
var deleteCat = function (req, res) {
    try {
        var param_3 = req.params;
        var newCat = cats_app_model_1.Cat.filter(function (cat) { return cat.id !== param_3.id; });
        res.status(200).send({
            success: true,
            data: newCat,
        });
    }
    catch (error) { }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map