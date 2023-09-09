import React from 'react';

import classes from './NavItem.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
}

const NavItem: React.FC<Props> = ({ children }) => {
  return (
    <li className={classes.item}>{children}</li>
  );
};

export default NavItem;