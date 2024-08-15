import express from "express";
import EmailController from "./EmailController";

export default class TransactionRouter {
    public path = "/";
    public router = express.Router();
    private controller: EmailController;

    constructor(){
        this.controller = new EmailController();
        this.router.post(`${this.path}email:enviar`, this.controller.send);
    }
}