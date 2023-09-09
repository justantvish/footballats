import React from 'react';

import classes from './Buttons.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
  btnHandler?: () => void;
};

export const Button: React.FC<Props> = ({ children }) => {

  return (
    <button className={classes.btn}>
      {children}
    </button>
  );
};
