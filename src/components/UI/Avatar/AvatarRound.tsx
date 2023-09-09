import React from "react";
import classes from './Avatar.module.scss';

type Props = {
  val: string;
};

const AvatarRound: React.FC<Props> = ({val}) => {
  const initials = val.split(' ').map(el => el[0]).join('');

  return (
    <span className={classes.rounded}>
      {initials}
    </span>
  );
};

export default AvatarRound;