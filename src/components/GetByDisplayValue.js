
function GetByDisplayValue(){
    return(
        <>
        <input type="text" defaultValue="Prashant"></input>
        <input type="text" defaultValue="Prashant1"></input>
        <input type="text" defaultValue="Prashant1"></input>
        <textarea defaultValue="First Value"/>
        <fieldset>
        <legend>Gender</legend>

        <label htmlFor="male">
        <input type="radio" id="male" name="gender" defaultValue="Male"></input>Male
        </label>
        <label htmlFor="female">
        <input type="radio" id="female" name="gender" defaultValue="Female"></input>Female
        </label>
               
        </fieldset>
        </>
    )
}
export default  GetByDisplayValue;