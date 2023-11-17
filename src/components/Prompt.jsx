import React, { useState } from "react";

function Prompt() {
  const [message, setMessage] = useState(""); // State to hold the message
  const [displayMessage, setDisplayMessage] = useState(false); // State to manage displaying the message

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Update the message as the user types
    if (!e.target.value) {
      // If input is empty, hide the displayed message
      setDisplayMessage(false);
    }
  };

  const handleSendClick = () => {
    // Logic to handle sending the message
    setDisplayMessage(true); // Show the message below after clicking Send (you can customize this logic)
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendClick(); // Call handleSendClick function when Enter is pressed
    }
  };

  return (
    <div className="anshul">
      <div className="chat-container">
        <div className="user-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleMessageChange}
            onKeyPress={handleKeyPress} // Event listener for Enter key press
          />
          <button onClick={handleSendClick}>Send</button>
        </div>
        {/* Display the message below the prompt after clicking Send */}
        {displayMessage && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Prompt;



