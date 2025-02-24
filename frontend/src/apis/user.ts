import API from "./main.ts";

const Auth =async()=>{
    const response = await API.get("/user/profile");
    return response.data;
}

async function RegisterUser(data){
    console.log(typeof data)
        const response = await API.post("/user/register",data,{
            headers:{"Content-Type":"application/json"}
        });
        return response.data; 
}

async function LoginUser(data){
    const response = await API.post("/user/login",data,{
        headers:{"Content-Type":"application/json"}
    });
    return response.data;
}

async function AddressUser(){
    const response = await API.get("/user/profile")
    return response.data;
}

export {
    RegisterUser,
    LoginUser,
    Auth
}