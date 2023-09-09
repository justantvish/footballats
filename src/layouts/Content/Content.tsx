import React, { useContext } from 'react';
import { NavigationContext } from '../../contexts/navigation-context';

import classes from './Content.module.scss';

type Props = {
  children?: React.ReactNode | Iterable<React.ReactNode>;
};

const Content: React.FC<Props> = ({children}) => {
    const { navigationOpened } = useContext(NavigationContext);

    return (
        <div className={navigationOpened  ? `${classes.content} ${classes.opened}` : classes.content}>{children}</div>
    );
};

export default Content;