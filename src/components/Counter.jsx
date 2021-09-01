import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import plusLogo from '../assets/icons/plus.png';
import minusLogo from '../assets/icons/minus.png';
import resetLogo from '../assets/icons/reset.png';
import { inc, dec, reset } from '../store/actions';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(inc());
  };

  const decrement = () => {
    dispatch(dec());
  };

  const res = () => {
    dispatch(reset());
  };

  return (
    <div className="wrapper">
      <div className="count">{count}</div>
      <div className="wrapper__btn">
        <button className="inc btn" onClick={() => increment()}>
          <img src={plusLogo} alt="plus" />
        </button>
        <button className="dec btn" onClick={() => decrement()}>
          <img src={minusLogo} alt="minus" />
        </button>
        <button className="reset btn" onClick={() => res()}>
          <img src={resetLogo} alt="reset" />
        </button>
      </div>
    </div>
  );
};
