import {Router, Request, Response, NextFunction} from 'express';
import * as http from 'http';
import {API_HOST, API_PORT} from '../utils/secrets'

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

  public async for(req: Request, response: Response, next: NextFunction)
  {
    const options = {
      hostname: API_HOST,
      protocol: 'http:',
      port: API_PORT,
      path: '/api/v1/votes/2018-09-26/for/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const myreq = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
      });
      res.on('end', () => {
        return response.redirect('/');
      });
    });
    
    myreq.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    
    // write data to request body
    myreq.end();
 }

  public async against(req: Request, response: Response, next: NextFunction)
  {
    const options = {
      hostname: API_HOST,
      protocol: 'http:',
      port: API_PORT,
      path: '/api/v1/votes/2018-09-26/against/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    const myreq = http.request(options, (res) => {
      res.on('data', (chunk) => {
      });
      res.on('end', () => {
        return response.redirect('/');
      });
    });
    
    myreq.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });
    
    // write data to request body
    myreq.end();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.index);
    this.router.post("/for", this.for);
    this.router.post("/against", this.against);
  }

}

// Create the HomeRouter, and export its configured Express.Router
const homeRouter = new HomeRouter();
homeRouter.init();

export default homeRouter.router;
