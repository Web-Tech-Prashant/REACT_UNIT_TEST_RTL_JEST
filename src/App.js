import logo from "./logo.svg";
import "./App.css";
import { Sum } from "./components/Sum";
import InputComponent from "./components/OnchangeInput";
import { ButtonComponent } from "./components/OnclickButton";

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
      <ButtonComponent/>
    </div>
  );
}

export default App;
