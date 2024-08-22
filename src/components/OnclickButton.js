import { useState } from "react"

export const ButtonComponent = ()=>{
    const[name,setName] = useState("");

    return(
        <div>
        <button type="button" onClick={()=>setName("Prashant Kumar Singh")}>Display My Name</button>
        <p>{name ? `Hi ${name}`: ""}</p>
        </div>
    )
}