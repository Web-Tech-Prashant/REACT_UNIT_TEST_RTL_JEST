import { useState } from "react"


export default function OnChangeWithAct(){
    const [displayName,setName] =useState("");

    return(
        <>
        <h2>{displayName}</h2>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="username" />
        </>
    )
}