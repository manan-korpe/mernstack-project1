class ApiFilter{
    constructor(dbQuery,params){
        this.find = dbQuery;
        this.keywords = params;
    }

    search(){
        const keyword = this.keywords.search ? {
            name:{
                $regex:this.keywords.search,
                $options:"i",//case insentive
            }
        } : {};
        
        this.query = this.find.find({...keyword});
        return this;
    }

    sort(){
        if(this.keywords.sort){
            this.find =  this.find.sort({[this.keywords.sort]:this.keywords.order==1 ? 1 : -1})
        }
        return this
    }

    pagination(perPageResult){
        let pageNo = Number(this.keywords.page) || 1;
        const skipResult = Number(perPageResult)*(pageNo-1);

        this.find = this.find.skip(skipResult).limit(perPageResult);

        return this
    }
}

export default ApiFilter;