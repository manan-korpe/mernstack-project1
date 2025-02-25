
function charValidation(value:(number[] | string[]),message?:string,regex:RegExp =/^[a-zA-Z]{3,}$/){
    if(!regex.test(value[1])){
        return {[value[0]]:message || `Enter valid ${value[0]}`}
    }
    return {}
}

function telValidation(value:(number[] | string[]),message?:string,regex:RegExp =/^[6-9]{1}\d{9}$/){
    if(!regex.test(value[1])){
        return {[value[0]]:message || `Enter valid ${value[0]}`}
    }
    return {}
}

function emailValidation(value:(number[] | string[]),message?:string,regex:RegExp =/^[a-zA-Z0-9]{3,50}\@[a-z]{2,5}\.(com|in)$/){
    if(!regex.test(value[1])){
        return {[value[0]]:message || `Enter valid ${value[0]}`}
    }
    return {}
}

export {
    charValidation,
    telValidation,
    emailValidation
}