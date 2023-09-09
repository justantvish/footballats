import React from 'react';

import classes from './Buttons.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
  btnHandler?: () => void;
};

export const ButtonMain: React.FC<Props> = ({ children }) => {

  return (
    <button className={`${classes.btn} ${classes.main}`}>
      {children}
    </button>
  );
};