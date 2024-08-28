
export const OverridingTestAttribute =()=>{
    return(
        <>
        {/* <div data-testid="firstdiv">First Div</div> */}
        <div id="seconddiv" data-testid="seconddiv">Second Div</div>
        <div id="thirddiv">Third Div</div>
        </>
    )
}