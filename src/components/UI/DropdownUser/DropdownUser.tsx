import React, {useState} from "react";
import classes from './Dropdown.module.scss';

import { ButtonDrop } from "../Buttons/ButtonDrop";

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
}

const Dropdown: React.FC<Props> = ({children}) => {
  const [showDrop, setShowDrop] = useState(false);
  
  const dropHandler = () => {
    setShowDrop(prevState => !prevState);
  }

  return(
    <div className={classes.holder}>
      <ButtonDrop btnHandler={dropHandler} />
      {showDrop &&
        <div className={classes.dropdown}>
          {children}
        </div>
      }
    </div>
  );
};

export default Dropdown;