import {Router, Request, Response, NextFunction} from 'express';


export class HomeRouter {
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
  public async index(req: Request, res: Response, next: NextFunction) {
    
    return res.render('index', { title: 'Hey', message: 'Hello there!' });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.index);
  }

}

// Create the HomeRouter, and export its configured Express.Router
const homeRouter = new HomeRouter();
homeRouter.init();

export default homeRouter.router;
