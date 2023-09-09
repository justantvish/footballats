import { Outlet } from "react-router-dom";

import Wrapper from "../layouts/Wrapper/Wrapper";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Navigation from "../components/Navigation/Navigation";

const Root = () => {

    return (
        <Wrapper>
            <Sidebar>
                <Navigation />
            </Sidebar>
        <Outlet />
        </Wrapper>
    );
};

export default Root;