module.exports = class ErrorResponse extends Error {
    constructor(statusCode, message, reason) {
        super(message);
        this.statusCode = statusCode;
        if (reason) this.reason = reason;
    }
};