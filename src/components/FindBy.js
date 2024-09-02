import { useEffect, useState } from "react"

export const FindBy = ()=>{
    const [data,setData] = useState(false);

    useEffect(()=>{
       
        setTimeout(()=>{
            setData(true);
        },4000)
    })
    return(
        <>
        <h4> FindBy & findAllBy</h4>
        {
            data ? <h3>Data Found</h3> : <h3>No Data Found</h3>
        }
        </>
    )
}