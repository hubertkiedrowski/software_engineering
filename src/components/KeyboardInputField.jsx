import React, { useState } from "react";

const KeyboardInputField = () => {
  const [userSampleInput, setUserSampleInput] = useState("");

  const handleInputChange = (event) => {
    const currentInput = event.target.value;
    const lastTypedChar = currentInput.slice(-1);
    setUserSampleInput(lastTypedChar);

    console.log(lastTypedChar);
  };

  return (
    <>
      <label htmlFor="InputField">Input mit durchgängigem loggen:</label>
      <input
        type="text"
        id="InputField"
        name="InputField"
        value={userSampleInput}
        onChange={handleInputChange}
      />
    </>
  );
};
export default KeyboardInputField;
