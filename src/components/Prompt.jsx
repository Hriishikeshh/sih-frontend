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
    setOutput("Sample")


//  ***************LLM CODE*****************
//     let answer = ""
  
//   var data = {
//     question:message
// }

// var json = JSON.stringify(data);

// fetch("https://cbce-34-125-187-64.ngrok-free.app/generate", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
    
//   },

//   body: json
// })
// .then(response => {
    
//     if (!response.ok) {
//       throw new Error('Network error');
//     }
    
//     const stream = response.body;
    
//     const reader = stream.getReader();
   
//     function readChunk() {
   
//       reader.read().then(({ value, done }) => {
       
//         if (done) {
        
//           reader.releaseLock();
         
//           return;
//         }
      
//         const token = value;
//         const decoder = new TextDecoder("utf-8");
//         const text = decoder.decode(token);
       
//         console.log(text)
//         answer += text
//         setOutput(answer)
      
//         readChunk();
//       });
//     }
  
//     readChunk();
//   })
//   .catch(error => {
   
//     console.error(error);
//   });
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



