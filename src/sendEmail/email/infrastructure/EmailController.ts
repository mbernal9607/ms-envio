import { Request, Response } from "express"
import ApiException from "../../../shared/exceptions/api.exceptions";

const nodemailer = require('nodemailer');


export default class EmailController {

    constructor(){

    }

    public async send(request: Request, response: Response){
        try {
            const { message } = request.body;
            console.log("Processing email request ...");
            if(!message.to || !message.subject || !message.body) {
                const exception = new ApiException(400, "Bad request")
                exception.launchError()
            }
            const transporter = nodemailer.createTransport({
                service: 'hotmail',
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: "maicklong@hotmail.com",
                    pass: ""
                }
            });

            const mailOptions = {
                from: "maicklong@hotmail.com",
                to: message.to,
                subject: message.subject,
                text: message.body
            }

            await transporter.sendMail(mailOptions)

            return response
                .status(200)
                .send({message: "Email sent"});

        } catch(error){
            return response.status(500).send({});        
        }


    }
}