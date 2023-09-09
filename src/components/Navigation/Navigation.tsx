import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';

import NavGroup from "./NavGroup/NavGroup";
import NavList from "./NavList/NavList";
import NavItem from "./NavItem/NavItem";
import ComingBadge from "components/UI/Badge/ComingBadge";

import { NavItemObj } from "../../interfaces/interfaces";
import { NavigationContext } from "../../contexts/navigation-context";

import classes from './Navigation.module.scss';

const navItems: NavItemObj[] = [
  {
    path: '/',
    title: 'Players',
    icon: 'boots',
    group: 'tables',
    end: true,
  },
  {
    path: '/leagues',
    title: 'Leagues',
    icon: 'trophy',
    group: 'tables',
  },
];
const navGroups : string[] = ['tables'];

const Navigation: React.FC = () => {
  const {navigationOpened: navOpened} = useContext(NavigationContext);

  return (
    <nav className={`${classes.nav} ${navOpened && classes.opened}`}>
      {navGroups.map((group, i) => (
        <NavGroup key={i} title={group}>
          <NavList>
            {
              navItems.map((el: any, i: number) => (
                group === el.group &&
                <NavItem key={i}>
                  {el.notReady ?
                    <>
                      <div className={classes.link}>
                        <i className={`icon-${el.icon}`} />
                        {navOpened && <span className={classes.text}>{el.title}</span>}
                      </div>
                      {navOpened && <ComingBadge />}
                    </>
                    :
                    <NavLink 
                      className={
                        ({isActive}) => isActive ? `${classes.link} ${classes.active}` : classes.link
                      }
                      to={el.path}
                    >
                      <i className={`icon-${el.icon}`} />
                      { navOpened && <span className={classes.text}>{el.title}</span> }
                    </NavLink>
                  }
                </NavItem>
              ))
            }
          </NavList>
        </NavGroup>
      ))}
    </nav>
  );
};

export default Navigation;