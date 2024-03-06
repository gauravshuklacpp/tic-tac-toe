import styles from "./Squares.module.css";

function Squares({ value, onSquareClick }) {
  return (
    <div className={styles.squares} onClick={onSquareClick}>
      {value}
    </div>
  );
}

export default Squares;
