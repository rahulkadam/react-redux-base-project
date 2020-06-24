import React from 'react';
import {useActions, useRandomAPI} from '../../features/random';
import classes from './Random.module.css';

const Random = () => {
  /**
   *  Get number, returned  from random.org, and the state of request from Redux store.
   */
  const {number, isLoading, hasError, isFulfilled} = useRandomAPI();

  /** Create incrementCounter action, using custom hook from feature */
  const {getNumber} = useActions();

  /** Define pristine state condition, when user didn't do any actions */
  const isPristine = !isLoading && !hasError && !isFulfilled;

  return (
    <div>
      <div className={classes.counter}>
        <h2 className={classes.header}>Fetch APG Total View</h2>
        <button
          disabled={isLoading}
          className={classes.button}
          type="button"
          onClick={getNumber}>
          Get APG Views Stats Count
        </button>
        {isPristine && (
          <div className={classes.header1}>
            Click the button to get APG Stats
          </div>
        )}
        {isLoading && <div className={classes.header1}>Getting APG stats</div>}
        {isFulfilled && (
          <div className={classes.header1}>
            APG View Count from Kibana: <strong>{number}</strong>
          </div>
        )}
        {hasError && <div>Ups...</div>}
      </div>
    </div>
  );
};

export default Random;
