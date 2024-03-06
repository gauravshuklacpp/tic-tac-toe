import styles from "./Header.module.css";

function Header({ value: { winner, xIsNext } }) {
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  return <div className={styles.header}>{status}</div>;
}

export default Header;
