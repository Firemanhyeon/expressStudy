import * as express from "express";
import catsRouter from "./cats/cats.route";

class Server {
  public app: express.Application;
  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    app.use(catsRouter);
  }
  private setMiddleware() {
    //logging middleware
    app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("this is middleware");
      next();
    });

    //json middleware
    app.use(express.json());

    this.setRoute();

    //* 404 middleware
    app.use((req, res, next) => {
      console.log("this is error middleware");
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

const app: express.Express = express();
