import { Document } from "mongoose";
import { ISessionVote } from "../interfaces/sessionvote";

export interface ISessionVoteModel extends ISessionVote, Document {
    createdAt: Date;
    voteFor(): number;
    voteAgainst(): number;
}

