"use strict";
exports.__esModule = true;
var mongodburi = process.env["MONGODB_URI"];
if (mongodburi) {
    mongodburi = mongodburi;
}
else {
    mongodburi = 'mongodb://localhost:27017';
}
exports.MONGODB_URI = mongodburi;
