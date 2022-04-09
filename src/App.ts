import express, { Application } from "express";
import router from "./routes";

export default class App {
  private app: Application;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json())
  }

  private routes() {
    this.app.use(router)
  }

  public listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server listening on: ${port}`)
    });
  }

}