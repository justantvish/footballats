import React from 'react';
import classes from './Dropdown.module.scss';

type DropProps = {
    curVal: any;
    children?: React.ReactNode | Iterable<React.ReactNode>;
    dropOpened: boolean;
    onClick: () => void;
};

const Dropdown: React.FC<DropProps> = ({ children, curVal, dropOpened, onClick }) => {

    const btnHandler = () => {
        onClick();
        console.log(curVal)
    };

    return(
        <div className={classes.wrap}>
            <button className={classes.btn} onClick={btnHandler}>
                <img src={curVal?.logo} alt={curVal?.name} onLoad={() => console.log('Loaded')} onError={() => console.log('Error')} />
                {curVal.name}
            </button>
            <div className={dropOpened ? `${classes.drop} ${classes.opened}` : classes.drop}>
                <ul className={classes.list}>
                    {children}
                </ul>
            </div>
            <i className="icon-arrow-down" />
        </div>
    );
};

export default Dropdown;