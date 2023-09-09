import React, {useContext} from 'react';
import { NavigationContext } from '../../../contexts/navigation-context';

import classes from './NavGroup.module.scss';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const NavGroup: React.FC<Props> = ({ title, children }) => {
  const { navigationOpened: navOpened } = useContext(NavigationContext);

  return (
    <div className={classes.group}>
      <div className={classes.header}>
        {navOpened ? <span className={classes.title}>{title}</span> : <span className={classes.divider}></span>}
      </div>
      {children}
    </div>
  );
};

export default NavGroup;