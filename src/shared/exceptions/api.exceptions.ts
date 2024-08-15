class ApiException extends Error {
    status: number;
    message: string;
    constructor(
        status: number,
        message: string
    ){
        super(message);
        this.status = status;
        this.message = message;
        console.log(`[ERROR] - ${message}`)
    }

    logTrace(transactionId: string, country: string){
    }


    launchError(){
        throw new Error(this.message);
    }
}

export default ApiException;