import {memo} from "react";
type toastType = "success" | "warning" | "danger";

type toastInfo = {
    type:toastType,
    show:boolean,
    message:string
}
function Toast({type,show,message}:toastInfo){
    return(
        <div className="toast-container active position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className={`toast   ${show && "show"}`} role="alert" aria-live="assertive" aria-atomic="true">
              <div className={`toast-header text-white bg-${type}`}>
                <strong className="me-auto">{type}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                {message}
              </div>
            </div>
        </div>
    )
}
export default memo(Toast)