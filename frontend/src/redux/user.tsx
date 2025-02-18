import {createSlice,PayloadAction} from "@reduxjs/toolkit"

interface userInfo {
    isAuthenticated:boolean;
    user:null,
    address:object
}

const initialState:userInfo = {
    isAuthenticated:false,
    user:null,
    address:{}
};

const authSlice = createSlice({
    name:"user",    //name display in reduc store
    initialState,
    reducers:{      //actions
        logIn:(state,action)=>{
            if(action.payload.success){
                return {...state,"isAuthenticated":action.payload.success,"user":action.payload.data.user,"address":action.payload.data.address}
            }
        }
    }
});


export const {logIn} = authSlice.actions;

export default authSlice.reducer;
