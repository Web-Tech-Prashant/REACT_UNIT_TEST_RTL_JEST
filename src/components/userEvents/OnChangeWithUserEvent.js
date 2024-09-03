import { useState } from "react";

const OnChange = () => {
  const [displayName, setDisplayName] = useState("");
  return (
    <>
      <h3>{displayName}</h3>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(e) => setDisplayName(e.target.value)}
      />
    </>
  );
};
export default OnChange;
