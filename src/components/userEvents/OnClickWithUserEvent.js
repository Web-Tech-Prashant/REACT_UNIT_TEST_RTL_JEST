import { useState } from "react"


export const OnClickWithUserEvent = ()=>{
    const [text,setText] = useState("");
    return(
        <>
         <h3>{text}</h3>
        <button onClick={()=>setText("Welcome!")}>Click Me!</button>
       
        </>
    )
}