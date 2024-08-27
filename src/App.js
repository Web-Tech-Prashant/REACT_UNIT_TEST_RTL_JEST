import logo from "./logo.svg";
import "./App.css";
import { Sum } from "./components/Sum";
import InputComponent from "./components/OnchangeInput";
import { ButtonComponent } from "./components/OnclickButton";
import FunctionComponent from "./components/MethodTesting_FunctionalComponent";
import RTLQury from "./components/RTL-Query";
import GetByRole from "./components/GetByRole";

function App() {
  return (
    // <div className="App">
    //   <h4>Total Sum= {Sum(2, 3)}</h4>
    //   <input
    //     type="text"
    //     placeholder="Enter UserName"
    //     name="username"
    //     id="userId"
    //     value="Prashant"
    //     readOnly
    //   />
    //   <img
    //     title="FirstImage"
    //     alt="photographer"
    //     src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
    //   ></img>
    // </div>
    <div style={{margin:"20px 35px 35px 35px"}}>
      <InputComponent/>{" "}
      <ButtonComponent/><br></br>
      <FunctionComponent/><br>
      </br>
      <RTLQury/> <br>
      </br>
      <GetByRole/>
    </div>
  );
}

export default App;
