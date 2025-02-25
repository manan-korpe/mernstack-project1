export default function checkNull(value:Object):Object{
    let error = {};

    for(let [key,val] of Object.entries(value)){
      if(!val.toString().trim()){
        error = {...error,[key]:"field is requied"}
      }
    }
    
    return error;
  } 