import * as express from 'express';
import * as logger from 'morgan';
import homeRouter from './routes/homerouter';
import * as path from "path";


// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.set('views', './views');
    this.express.set('view engine', 'pug');
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    console.log(__dirname);
    this.express.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
    

    // placeholder route handler
    this.express.use('/', homeRouter);

    this.express.all('*', function(req: express.Request, res: express.Response, next: express.NextFunction){
      console.log('une requete est arrivee')
      next();
    });
  }

  
}

export default new App().express;