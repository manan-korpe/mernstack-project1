type info={
    title:string[],
    data:object[]
}
function List({title,data}:info){
    title= ["img","User Name","first Name","Last Name","Email","Phone","status"];
    data = [
        {
            img:"img.png",
            user:"mk",
            fname:"manan",
            lname:"korpe",
            email:"manankorpe@gmail.com",
            phone:"8521456987",
            status:"active"
        },
        {
            img:"img.png",
            user:"mk",
            fname:"manan",
            lname:"korpe",
            email:"manankorpe@gmail.com",
            phone:"8521456987",
            status:"active"
        }
    ]
    return (
        <div>
            <div className="overflow-x-scroll">
                <table className="table table-fluid table-striped table-hover">
                    <thead>
                        <tr>
                            <th >No.</th>
                            {title.map((val)=>(
                                <th >{val}</th>
                            ))}
                            <th >Update</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                        {data.map((val,index)=>(
                            <tr key={index}>
                                <td scope="row">{index}</td>
                                {Object.values(val).map((d,index2)=>(
                                    <td key={index2}>{d}</td>
                                ))}
                                <td className="text-success text-center"><i className="fa-solid fa-pen-to-square"></i></td>
                                <td className="text-danger text-center"><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center gap-1">
                    <a className="btn btn-sm btn-warning text-white" href="">{"<<"}</a>
                    <a className="btn btn-sm btn-warning text-white" href="">1</a>
                    <a className="btn btn-sm btn-warning text-white" href="">2</a>
                    <a className="btn btn-sm btn-warning text-white" href="">3</a>
                    <a className="btn btn-sm btn-warning text-white" href="">{">>"}</a>
            </div>
        </div>
    )
}


export default List