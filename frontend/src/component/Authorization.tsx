import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom"

function Authorization(){
    const {isAuthenticated} = useSelector(state=>state.auth);
    console.log(isAuthenticated)
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
    
    
}
export default Authorization