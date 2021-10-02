import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling face with smiling eyes",
  "🙅‍♂️": "man gesturing No",
  "😀": "grinning face",
  "😑": "expressionless face",
  "👍": "thumbs up",
  "😂": "face with tears of joy",
  "😎": "smiling face with sunglasses",
  "🤔": "thinking face",
  "🥰": "smiling face with hearts",
  "😴": "sleeping face",
  "😫": "tired face",
  "😛": "face with tongue",
  "😶": "face without mouth",
  "🥵": "hot face",
  "😯": "hushed face",
  "😗": "kissing face",
  "🤤": "drooling face",
  "🤑": "money-mouth face",
  "😭": "loudly crying face",
  "😤": "face with steam from nose",
  "🥶": "cold face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>🤔 Emoji Dictionary 👇</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h2> Some examples of emoji we know </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              padding: "1.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
