import { useState } from "react";
import "./App.css";

type CoinResult = "Heads" | "Tails" | "Flip the coin!";

function App() {
const [result, setResult] = useState<CoinResult>("Flip the coin!");
const [heads, setHeads] = useState<number>(0);
const [tails, setTails] = useState<number>(0);
const [choice, setChoice] = useState<"Heads" | "Tails" | "">("");
const [message, setMessage] = useState<string>("");
const [score, setScore] = useState<number>(0);

function flipCoin(): void {
  if (choice === "") {
    setMessage("Please choose Heads or Tails first!");
    return;
  }

  const randomNumber: number = Math.random();

  const coinResult: "Heads" | "Tails" =
    randomNumber < 0.5 ? "Heads" : "Tails";

  setResult(coinResult);

  if (coinResult === "Heads") {
    setHeads((previousHeads) => previousHeads + 1);
  } else {
    setTails((previousTails) => previousTails + 1);
  }

  if (choice === coinResult) {
    setMessage("🎉 Congratulations! You win!");
    setScore((previousScore) => previousScore + 1);
  } else {
    setMessage("😢 Sorry! You lose. Try again!");
  }
}

function resetGame(): void {
setResult("Flip the coin!");
setHeads(0);
setTails(0);
setChoice("");
  setMessage("");
  setScore(0);
}

return ( <div className="app"> <h1>🪙 Coin Flip Game</h1>


  <div className="coin">
    {result === "Heads" ? "H" : result === "Tails" ? "T" : "?"}
  </div>

<h2>Coin Result: {result}</h2>

<h3>Choose your side</h3>

<div className="choice-buttons">
  <button onClick={() => setChoice("Heads")}>
    Heads
  </button>

  <button onClick={() => setChoice("Tails")}>
    Tails
  </button>
</div>

<p>Your choice: {choice || "Not selected"}</p>

<button onClick={flipCoin}>Flip Coin</button>

<h2>{message}</h2>

<h3>Score: {score}</h3>
  

  <div className="scores">
    <p>Heads: {heads}</p>
    <p>Tails: {tails}</p>
  </div>

  <button className="reset-button" onClick={resetGame}>
    Reset
  </button>
</div>


);
}

export default App;
