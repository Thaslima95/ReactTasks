import React, { useState } from "react";
function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <p>{isToggled ? "On" : "Off"}</p>
    </div>
  );
}
export default Toggle;
