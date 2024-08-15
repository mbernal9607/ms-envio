import { config } from "dotenv";
config();

import { PORT } from "./shared/Config";
import App from "./shared/App"
import EmailRouter from "./sendEmail/email/infrastructure/EmailRouter"


async function init(){
    const app = new App([new EmailRouter()], PORT);
    app.listen()
}

init();