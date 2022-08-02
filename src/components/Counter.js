import React from "react";
import { useState } from "react";

function Counter() {
  const [charLimit, setCharLimit] = useState(50);
  const [fontsSize, setFontsSize] = useState(16);
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const inputEventHandler = (e) => {
    let text = e.target.value;
    let words = 0;
    if (text.length > 0) {
      words = text.trim().split(" ").length;
    }
    setCharCount(text.length);
    setWordCount(words);
  };

  const inputChangeHandler = (e) => {
    setCharLimit(e.target.value);
  };

  const fontChangeHandler = (e) => {
    setFontsSize(e.target.value);
  };

  return (
    <>
      <input
        id="fontSize-input"
        type="range"
        min="16"
        max="32"
        step="1"
        value={fontsSize}
        onChange={fontChangeHandler}
      />
      <br />
      <br />
      <input
        id="char-limit-input"
        type="number"
        value={charLimit}
        onChange={inputChangeHandler}
      />
      <br />
      <br />
      <textarea
        maxLength={charLimit}
        onChange={inputEventHandler}
        style = {{ fontSize :  fontsSize  + 'px'}}
      ></textarea>
      <br />
      <br />
      <div id="word-counter">Total Number of words written {wordCount}</div>
      <br />
      <br />
      <div id="char-counter">
        Total numbers of characters written {charCount}
      </div>
    </>
  );
}

export default Counter;
