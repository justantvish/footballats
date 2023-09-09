import React, {useEffect} from "react";

import classes from './Checkbox.module.scss';

const Checkbox = (props: any) => {

  return (
    <div className={classes.holder}>
      <input className={classes.check}
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
      />
      <span className={classes.fake} />
    </div>
  );
};

export default Checkbox;