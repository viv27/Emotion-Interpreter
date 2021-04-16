import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😛": "Tongue Out",
  "😏": "Sneaky",
  "😘": "Kissing",
  "👀": "Sleepy",
  "😒": "Angry",
  "🥰": "Loving",
  "😅": "OOps"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this emoji in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input type="text" onChange={inputChangeHandler} />
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojis.map((emoji) => {
        return (
          <span
            className="emoji"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
