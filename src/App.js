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

  const handleSubmit = (e) => {
    e.preventDefault ();
    setShowSuccess(true)
  }

  return (
    <div className="App">
      {showSuccess ? (
        <p className="message-success">Awesome! Thanks for the update.</p>
      ) : (
        <div className="status-update">
          <h1>Super Short Status!</h1>
          <form onSubmit={handleSubmit}>
          <label htmlFor="status">
            Tell us how you are doing in 60 characters or less!
          </label>
            <textarea 
              className={message.length > maxLength ? "too-long" : ""}
              id="status" 
              placeholder="Tell me something good..."
              value={message} 
              onChange={handleOnChange} 
              //Inline function could be used here for onChange instead.
              // For example: onChange={(e) => setMessage(e.target.value)}//
            />
            <button disabled={message.length < 1 || message.length > maxLength} type="submit">Tell the world!</button>
          </form>
        </div>
      )}
    </div>
  );
}
