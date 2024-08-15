import express from "express";
import * as bodyParser from "body-parser";


class App {
    public app: express.Application;
    public port: number;


    constructor(routers, port){
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeRouters(routers);
    }


    private initializeMiddlewares(){
        this.app.use(bodyParser.json());
    }

    private initializeRouters(routers){
        routers.forEach(router => {
            this.app.use("", router.router)
        });
    }

    public async listen() {
        this.app.listen(this.port, () => {
            console.info(`App listening on the port ${this.port}`);
        });
    }
}

export default App;