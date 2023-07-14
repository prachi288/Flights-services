//error object are thrown when runtime errors occur
//js provides a error class which you can use and extend to create your own custom error class. 

class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode;
        this.explanation=message;
    }
}

module.exports=AppError;