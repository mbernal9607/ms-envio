export default class Logger {
    application: string;
    traceId: string;
    message: string;

    constructor(
        message: string,
        traceId: string
    ) {
        this.message = message;
        this.traceId = traceId;
    }
}

