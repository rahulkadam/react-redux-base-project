import React, {useEffect} from 'react';
import {
  useCountValue,
  useCountValue1,
  useCount,
  useActions,
  use1Actions,
} from '../../features/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useCountValue();
  const count2 = useCountValue1();
  const count3 = useCount();
  const {incrementCounter} = useActions(count3);
  const {clearCounter} = use1Actions();

  /**
   * function for cleaning up data (similar to component didMount method)
   */
  useEffect(
    () => () => {
      console.log('component unmount');
      clearCounter();
    },
    [clearCounter]
  );

  /**
   * function for calling, every time when state changes (Component will mount properties)
   */
  useEffect(() => {
    console.log('component will Mount, render everytime');
  });

  /**
   * function for calling, every once only when component did mount (Component did mount properties)
   */
  useEffect(data => {
    console.log('component Did Mount, render only once');
  }, []);

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
