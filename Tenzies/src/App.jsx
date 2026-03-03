import { useState, useRef, useEffect } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const buttonRef = useRef(null);
  // console.log(buttonRef);
  // check if the game is won

  /**
   * Critical thinking time!
   *
   * We want to indicate to the user that the game is over
   * if (1) all the dice are held, and (2) all the dice have
   * the same value.
   *
   * How might we do this? Some questions to consider:
   *
   * 1. Do we need to save a `gameWon` value in state? If so, why?
   *    If not, why not?
   * No.
   *
   *
   * 2. Do we need to create a side effect to synchronize the `gameWon`
   *    value (whether it's in state or not) with the current state of
   *    the dice?
   * No.
   *
   *
   * Conclusion:
   * We can derive the gameWon status based on the condition(s) of the current
   * dice state on every render.
   */

  // if (
  //   dice.every((die) => die.isHeld) &&
  //   dice.every((die) => die.value === dice[0].value)
  // ) {
  //   console.log("Game won!");
  // }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    //  const newDice = [];
    //  for (let i = 0; i < 10; i++) {
    //    const rand = Math.ceil(Math.random() * 6);
    //    newDice.push(rand);
    //  }
    //  return newDice;
    // console.log("generateAllNewDice was called!");
    return new Array(10).fill(0).map(() => ({
      // value: Math.ceil(Math.random() * 6),
      value: 5,
      isHeld: false,
      id: nanoid(),
    }));
  }

  // function rollDice() {
  //   setDice(generateAllNewDice());
  // }
  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
        ),
      );
    } else {
      setDice(generateAllNewDice());
    }
  }

  // function hold(id) {
  //   // console.log(id);
  //   setDice((oldDice) => {
  //     return oldDice.map((die) => {
  //       return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
  //     });
  //   });
  // }
  function hold(id) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
