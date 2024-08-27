import { useState } from "react"
import { handlePrint } from "./Utilities/helper";



function FunctionComponent(){
    const[msg,setMsg] = useState("");

    const handleClick = ()=>{
        setMsg("Hello Prashant Welcome to RTL + JEST");
    }

    // const handlePrint = ()=>{
    //     console.log("Hi...");
    //     return "Hi Prashant Printing..."
    // }

    return(
        <>
        <h1>Function Component Method Testing...</h1>
        <button data-testid="btn1" onClick={handleClick}>Update</button>
        <button  onClick={handlePrint}>Print</button>
        <p>{msg}</p>
        </>
    )
}
export default FunctionComponent;