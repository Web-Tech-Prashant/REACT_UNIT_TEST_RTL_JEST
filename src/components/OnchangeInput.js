import { useState } from "react";

function InputComponent() {
  const [userName, setUserName] = useState("");
  return (
    <>
      <label>
        <b>UserName:</b>{" "}
        <input
          type="text"
          name="name"
          placeholder="Enter User Name"
          id="userId"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
    </>
  );
}
export default InputComponent;
