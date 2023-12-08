class AppError {
    message;
    statusCode;

    constructor (message, statusCode = 400) {
        //statusCode default = 400 (bad request)
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;