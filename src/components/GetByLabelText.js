

export default function GetByLabelText(){
    return(
        <>
        <label htmlFor="username">UserName
        <input type="text" id="username" defaultValue="Prashant"/>
        </label>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="skills">Skills
        <input type="checkbox" id="skills" defaultChecked={true}/>
        </label>
        </>
    )
}