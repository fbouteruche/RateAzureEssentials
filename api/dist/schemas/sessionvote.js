"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var SessionVoteSchema = new mongoose_1.Schema({
    createdAt: { type: Date },
    date: { type: Date },
    countFor: { type: Number },
    countAgainst: { type: Number }
});
SessionVoteSchema.pre("save", function (next) {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
    next();
});
SessionVoteSchema.methods.voteFor = function () {
    if (!this.countFor) {
        this.countFor = 0;
    }
    this.countFor = this.countFor + 1;
    return this.countFor;
};
SessionVoteSchema.methods.voteAgainst = function () {
    if (!this.countAgainst) {
        this.countAgainst = 0;
    }
    this.countAgainst = this.countAgainst + 1;
    return this.countAgainst;
};
exports.SessionVote = mongoose_1.model('SessionVote', SessionVoteSchema);
