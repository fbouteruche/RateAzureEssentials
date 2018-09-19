import {Router, Request, Response, NextFunction} from 'express';
import { ISessionVoteModel } from "../models/sessionvote";
import { SessionVote } from "../schemas/sessionvote";

export class VoteRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET one session vote by date
   */
  public async getOne(req: Request, res: Response, next: NextFunction) {
    let date = req.params.date;
    let findQuery = SessionVote.findOne({'date': new Date(date)}, );
    findQuery.select('date countFor countAgainst');
    let sessionVote = await findQuery.exec();
    if(sessionVote)
    {
      res.status(200).send(
        {
          "date" : sessionVote.date,
          "countFor": sessionVote.countFor,
          "countAgainst": sessionVote.countAgainst
        });
    }
    else
    {
      res.sendStatus(404);
    }
  }

  public async postFor(req: Request, res: Response, next:NextFunction)
  {
    let date = req.params.date;
    let findQuery = SessionVote.findOne({'date': new Date(date)});
    let sessionVote: ISessionVoteModel = await findQuery.exec();
    
    if(!sessionVote)
    {
      sessionVote = new SessionVote();
      sessionVote.date = new Date(date);
    }
    sessionVote.voteFor();
    sessionVote.save();
    res.sendStatus(200);
  }

  public async postAgainst(req: Request, res: Response, next:NextFunction)
  {
    let date = req.params.date;
    let findQuery = SessionVote.findOne({'date': new Date(date)});
    let sessionVote: ISessionVoteModel = await findQuery.exec();
    
    if(!sessionVote)
    {
      sessionVote = new SessionVote();
      sessionVote.date = new Date(date);
    }
    sessionVote.voteAgainst();
    sessionVote.save();
    res.sendStatus(200);
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/:date', this.getOne);
    this.router.post('/:date/for', this.postFor);
    this.router.post('/:date/against', this.postAgainst);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const voteRouter = new VoteRouter();
voteRouter.init();

export default voteRouter.router;
