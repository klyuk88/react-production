import { useState } from "react";
import styles from './Counter.module.scss'

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1 className={styles.counterTitle}>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Set Counter</button>
    </div>
  );
}
