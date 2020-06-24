import React from 'react';
import {
  useCountValue,
  useCountValue1,
  useCount,
  useActions,
} from '../../features/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useCountValue();
  const count2 = useCountValue1();
  const count3 = useCount();
  const {incrementCounter} = useActions(count3);

  return (
    <div>
      <div className={classes.counter}>
        <h2 className={classes.header}>APG Stats Counter</h2>
        <button
          className={classes.button}
          type="button"
          onClick={incrementCounter}>
          Visit Page
        </button>
        <div>
          Total APG Views: <strong>{count}</strong>
        </div>
        <div>
          Total value of Payment Page: <strong>{count2}</strong>
        </div>
        <div>
          Total value of Result Page: <strong>{count3.value}</strong>
        </div>
      </div>
    </div>
  );
};

export default Counter;
