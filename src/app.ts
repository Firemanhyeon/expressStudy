import * as express from "express";
import { Cat } from "./app.model";

const app: express.Express = express();

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ cats: Cat, blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ cats: Cat, blue: Cat[1] });
});

app.listen(8000, () => {
  console.log("server is on...");
});
