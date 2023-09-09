import React from "react";

type Props = {
    children?: React.ReactNode | Iterable<React.ReactNode>,
};

const NavList: React.FC<Props> = ({ children }) => {
    
    return (
        <ul>
            {children}
        </ul>
    );
};

export default NavList;