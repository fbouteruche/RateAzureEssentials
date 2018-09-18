import { Schema, model, Model } from "mongoose";
import { ISessionVoteModel } from "../models/sessionvote"


const SessionVoteSchema = new Schema({
  createdAt: { type: Date },
  date: {type: Date},
  countFor: {type: Number},
  countAgainst: {type: Number}
});

SessionVoteSchema.pre<ISessionVoteModel>("save", function(next) {
  if(!this.createdAt)
  {
    this.createdAt = new Date();
  }
  next();
});

SessionVoteSchema.methods.voteFor = function(): number {
  if(!this.countFor)
  {
    this.countFor = 0;
  }
  this.countFor = this.countFor + 1;
  return this.countFor;
};

SessionVoteSchema.methods.voteAgainst = function(): number {
  if(!this.countAgainst)
  {
    this.countAgainst = 0;
  }
  this.countAgainst = this.countAgainst + 1;
  return this.countAgainst;
}

export const SessionVote: Model<ISessionVoteModel> = model<ISessionVoteModel>('SessionVote', SessionVoteSchema);