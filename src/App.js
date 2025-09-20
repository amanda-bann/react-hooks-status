import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [message, setMessage] = useState("");
// Could handle this inline, but extracting to a function for clarity
  const handleOnChange = (e) => {
    setMessage(e.target.value)
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const maxLength = 60;

  return (
    <div className="App">
      <div className="status-update">
        <h1>Super Short Status!</h1>
        <form>
          <label htmlFor="status">
            Tell us how you are doing in 60 characters or less!
          </label>
          <textarea 
            className={message.length > maxLength ? "too-long" : ""}
            id="status" 
            placeholder="I'm crushing it!"
            value={message} 
            onChange={handleOnChange} 
            //Inline function could be used here for onChange instead.
            // For example: onChange={(e) => setMessage(e.target.value)}//
            />
          <button disabled={message.length > maxLength} type="submit">Tell the world!</button>
        </form>
      </div>
    </div>
  );
}
