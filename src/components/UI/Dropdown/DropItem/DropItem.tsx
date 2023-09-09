import React from "react";

import classes from './DropItem.module.scss';

type Props = {
    choiceHandler: () => void;
    children?: React.ReactNode | Iterable<React.ReactNode>;
};

const DropItem: React.FC<Props> = ({children, choiceHandler}) => {

    return (
        <li onClick={choiceHandler} className={classes.item}>
            {children}
        </li>
    );
}

export default DropItem;