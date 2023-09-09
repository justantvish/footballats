import React, { useContext } from 'react';
import { NavigationContext } from '../../contexts/navigation-context';

import Logo from "../../components/Logo/Logo";

import classes from './Sidebar.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
};

const Sidebar: React.FC<Props> = ({ children }) => {
  const { navigationOpened: barOpened , openNav: openBar } = useContext(NavigationContext);

  return (
    <aside className={barOpened  ? `${classes.sidebar} ${classes.opened}` : classes.sidebar}>
      <button onClick={openBar} className={classes.opener}>
        <i className={`icon-menu-${barOpened ? 'close' : 'open'}`} />
      </button>
      <Logo />
      <div className={classes.inner}>{children}</div>
      <div className={classes.footer}>
        <div className={classes.footer_inner}>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;