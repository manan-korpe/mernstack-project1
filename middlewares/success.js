class Success{
    constructor(message,statusCode=200,data={}){
        this.success= true;
        this.stausCode = statusCode ;
        this.message = message;
        if(data)
            this.data = data;

    }
}

export default Success