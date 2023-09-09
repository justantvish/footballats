import { useContext } from 'react';
import { NavigationContext } from '../../contexts/navigation-context';

import logoSrc from '../../assets/images/logo.svg';
import logoSmallSrc from '../../assets/images/logo-small.svg';

import classes from './Logo.module.scss';

const Logo = () => {
  const { navigationOpened: navOpened } = useContext(NavigationContext);

  return (
    <div className={classes.holder}>
      <a href="/" className={`${classes.logo} ${navOpened && classes.opened}`}>
        <img className={classes.img_big} src={logoSrc} alt="Slice" />
        <img className={classes.img} src={logoSmallSrc} alt="Slice" />
      </a>
    </div>
  );
};

export default Logo;