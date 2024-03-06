import Squares from "./Squares";
import Header from "./Header";
import styles from "./Board.module.css";
import { useState } from "react";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  return (
    <>
      <div className={styles.pages}>
        <Header value={{ winner, xIsNext }} />
        <div className={styles.board}>
          <Squares value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Squares value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Squares value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Squares value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Squares value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Squares value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Squares value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Squares value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Squares value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

export default Board;
