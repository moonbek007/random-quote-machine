import "./App.css";
import data from "./data";
import { useState, useEffect } from "react";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTumblrSquare } from "react-icons/fa";
function App() {
  const generateRandomQuote = (quotes) => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
  const generateRandomColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  };
  const [text, setText] = useState("");
  const [owner, setOwner] = useState("");
  const [color, setColor] = useState("aqua");
  useEffect(() => {
    const { quote, author } = generateRandomQuote(data);
    setText(quote);
    setOwner(author);
  }, [color]);
  return (
    <div id="wrapper" style={{ backgroundColor: color }}>
      <div id="quote-box">
        <div id="text" style={{ color: color, fontSize: "1.5rem" }}>
          <BsFillChatSquareQuoteFill
            style={{ color: color, fontSize: "4em" }}
          />
          {text}
        </div>
        <div id="author" style={{ color: color, fontWeight: 400 }}>
          -{owner}
        </div>
        <div id="new-quote">
          <button
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: color,
              color: "white",
              boxSizing: "border-box",
              borderRadius: "10px",
            }}
            onClick={() => {
              setColor(generateRandomColor());
            }}
          >
            New Quote
          </button>
        </div>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          <a href="twitter.com/intent/tweet" target="_blank">
            <AiFillTwitterSquare style={{ fontSize: "4rem", color: color }} />
          </a>
          <a href="tumblr.com" target="_blank">
            <FaTumblrSquare style={{ fontSize: "3.75rem", color: color }} />
          </a>
        </a>
      </div>
    </div>
  );
}

export default App;
