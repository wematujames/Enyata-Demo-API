const errorHander = (err, req, res, next) => {
    console.log(err.stack);

    const error = { ...err };
    error.message = err.message;

    // Catch specific errors
    if (err.name === "SequelizeValidationError") {
        const errors = err.errors.map(err => err.message)
        error.message = errors
    }

    res.status(error.statusCode || 500).json({
        success: false,
        statusCode: error.statusCode || 500,
        error: error.message,
        reason: error.reason || "Server error"
    });
};
module.exports = errorHander;