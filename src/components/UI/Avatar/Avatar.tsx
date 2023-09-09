import React from "react";

import classes from './Avatar.module.scss';

type Props = {
  val: string;
  style?: React.CSSProperties
};



const Avatar: React.FC<Props> = ({val, style}) => {
  const initials = val.split(' ').map(el => el[0]).join('');

  return (
    <span
      className={classes.avatar}
      style={style}
    >
      {initials}
    </span>
  );
};

export default Avatar;