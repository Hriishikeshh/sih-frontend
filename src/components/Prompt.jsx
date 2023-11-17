import React from "react";

function Prompt(){
    return(
        <div className="anshul">
            <div className="chat-container">
                {/* <div className="chat-box">
                    <div className="chat-message">
                        <div className="chat-bubble">
                            <p>Hello, how can I help you?</p>
                        </div>
                    </div>
                </div> */}
                <div className="user-input">
                    <input type="text" placeholder="Type your message..."></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Prompt;