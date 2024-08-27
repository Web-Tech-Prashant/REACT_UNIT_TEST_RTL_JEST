function GetByRoleMutipleElement() {
  return <>
  <h3>GetByRole - MultipleElement</h3>
  <button>Button1</button>
  <button>Button2</button>
  <label htmlFor="input1"> UserName</label>
  <input type="text" id="input1"/>
 
  <label htmlFor="input2">UserPass  </label>
  <input type="text" id="input2"/>

  {/* CustomRoles - Non-semantic elements */}
  <div role="custom">dummy DIV</div>

  </>;
}
export default GetByRoleMutipleElement;
