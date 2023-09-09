import React from 'react';

import classes from './Buttons.module.scss';

type Props = {
  btnHandler?: () => void;
};

export const ButtonDrop: React.FC<Props> = ({ btnHandler }) => {

  return (
    <button onClick={btnHandler} className={classes.drop}>
      <i className="icon-menu_dots" />
    </button>
  );
};
