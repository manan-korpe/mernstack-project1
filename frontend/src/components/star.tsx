import {useState} from "react";

type starinfo = {
    count:number
    starValue:number,
    setStarVal?:React.Dispatch<React.SetStateAction<number>>
}

function StarComponet({count,starValue,setStarVal}:starinfo){
    const [star,setStar] = useState<number>(0);
    function handleHover(point:number){
        setStarVal(point);
        setStar(point)
    }
    return(
        <>
            {[...Array.from({length:count})].map((_,i)=>(
                <i key={i} onClick={()=>setStarVal(i+1)} onMouseLeave={()=>setStar(0)}  onMouseEnter={()=>handleHover(i+1)} className={(star>=(i+1) || starValue>=(i+1)) ? "text-warning fa-solid fa-star" :"text-warning fa-regular fa-star"}></i>
            ))}  
        </>
    )
}

function StarRatedComponent({count,starValue}:starinfo){
    return(
        <div className="text-warning">
            {[...Array.from({length:count})].map((_,i)=>(
                <i key={i} className={starValue>=i+1 ? "fa-solid fa-star" : (starValue>i && starValue<(i+1)) ?"fa-solid fa-star-half-stroke" : "fa-regular fa-star"}></i>
            ))}
        </div>
    )
}



export {
    StarComponet,
    StarRatedComponent
};