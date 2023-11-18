import React, { useState } from "react";

function Prompt() {
  const [message, setMessage] = useState(""); // State to hold the message
  const [displayMessage, setDisplayMessage] = useState(false); // State to manage displaying the message
  const [output, setOutput] = useState("")

  const handleMessageChange = (e) => {
    // setMessage(e.target.value); // Update the message as the user types
    setMessage(e.target.value)
    // setOutput("works")
    if (!e.target.value) {
      // If input is empty, hide the displayed message
      setDisplayMessage(false);
    }
  };

  const handleSendClick = () => {
    setDisplayMessage(true)


    let answer = ""
  
  var data = {
    question:message
}

var json = JSON.stringify(data);

fetch("https://cbce-34-125-187-64.ngrok-free.app/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    
  },
  // mode:"no-cors",
  body: json
})
.then(response => {
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network error');
    }
    // Get the response body as a ReadableStream
    const stream = response.body;
    // Get a reader for the stream
    const reader = stream.getReader();
    // Define a function to read the chunks recursively
    function readChunk() {
      // Read a chunk from the stream
      reader.read().then(({ value, done }) => {
        // Check if the stream is done
        if (done) {
          // Close the reader
          reader.releaseLock();
          // Return from the function
          return;
        }
        // Process the chunk as JSON
        const token = value;
        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(token);
        // Do something with the token
        console.log(text)
        answer += text
        setOutput(answer)
        // Read the next chunk
        readChunk();
      });
    }
    // Start reading the first chunk
    readChunk();
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });





  
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
        {displayMessage && <p>{output}</p>}
      </div>
    </div>
  );
}

export default Prompt;



