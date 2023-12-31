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
    setOutput("A week ago a friend invited a couple of other couples over for dinner. Eventually, the food (but not the wine) was cleared off the table for what turned out to be some fierce Scrabbling. Heeding the strategy of going for the shorter, more valuable word over the longer cheaper word, our final play was “Bon,” which–as luck would have it!–happens to be a Japanese Buddhist festival, and not, as I had originally asserted while laying the tiles on the board, one half of a chocolate-covered cherry treat. Anyway, the strategy worked. My team only lost by 53 points instead of 58. Just the day before, our host had written of the challenges of writing short. In journalism–my friend’s chosen trade, and mostly my own, too–Mark Twain’s observation undoubtedly applies: “I didn’t have time to write a short letter, so I wrote a long one instead.” The principle holds across genres, in letters, reporting, and other writing. It’s harder to be concise than to blather. (Full disclosure, this blog post will clock in at a blather-esque 803 words.) Good writing is boiled down, not baked full of air like a souffl??. No matter how yummy souffl??s may be. Which they are. Yummy like a Grisham novel.Lately, I’ve been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. (Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email.) Last week I caught myself packing four conjunctions into a three-line sentence in an email. That’s inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the and’s, but’s, and so’s; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.Length–as we all know, and for lack of a more original or effective way of saying it–matters. But (ahem), it’s also a matter of how you use it. Style and length are technically two different things.Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog.")


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
        <div className="displayMessage-container">{displayMessage && <p>{output}</p>}</div>
      </div>
    </div>
  );
}

export default Prompt;



