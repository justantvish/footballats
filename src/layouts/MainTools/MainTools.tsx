import React from 'react';
import classes from './MainTools.module.scss';

type Props = {
    children?: React.ReactNode | Iterable<React.ReactNode>;
};

const MainTools: React.FC<Props> = ({ children }) => {

    return (
        <div className={classes.tools}>{children}</div>
    );
};

export default MainTools;