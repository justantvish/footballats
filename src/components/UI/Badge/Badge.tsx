import React from 'react';

import classes from './Badge.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
  type?: string;
};

const badgeClasses = ['Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'];

const Badge: React.FC<Props> = ({children, type}) => {

  return (
    <span className={`${classes.badge} ${badgeClasses.filter(cl => cl === type)}`}>{children}</span>
  );
};

export default Badge;