"use strict";
exports.__esModule = true;
var apihost = process.env["API_HOST"];
var apiport = process.env["API_PORT"];
if (!apihost) {
    apihost = 'localhost';
}
if (!apiport) {
    apiport = '3000';
}
exports.API_HOST = apihost;
exports.API_PORT = apiport;
