import { useContext } from "react";
import { AuthContext } from "contexts/auth-context";
import { NavigationContext } from "contexts/navigation-context";
import AvatarRound from "components/UI/Avatar/AvatarRound";
import DropdownUser from "components/UI/DropdownUser/DropdownUser";
import { ButtonMain } from "components/UI/Buttons/ButtonMain";

import classes from './User.module.scss';

const User = () => {
  const authCtx = useContext(AuthContext);
  const navCtx = useContext(NavigationContext);

  return (
    <div className={`${classes.holder} ${navCtx.navigationOpened && classes.opened}`}>
      <div className={classes.user}>
        <AvatarRound val={authCtx.name} />
        {navCtx.navigationOpened &&
          <div className={classes.info}>
            <div className={classes.name}>{authCtx.name}</div>
            <div className={classes.company}>{authCtx.company}</div>
          </div>
        }
      </div>
      {navCtx.navigationOpened &&
        <DropdownUser>
          <ButtonMain>Log Out</ButtonMain>
        </DropdownUser>
      }
    </div>
  );
};

export default User;