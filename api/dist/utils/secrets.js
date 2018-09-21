"use strict";
exports.__esModule = true;
var mongodburi = process.env["MONGODB_URI"];
if (mongodburi) {
    mongodburi = mongodburi + '/sessionvote';
}
else {
    mongodburi = 'mongodb://localhost:27017/sessionvote';
}
exports.MONGODB_URI = mongodburi;
