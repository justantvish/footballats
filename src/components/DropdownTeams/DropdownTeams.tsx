import React, {useState} from "react";
import Dropdown from "components/UI/Dropdown/Dropdown";
import DropItem from "components/UI/Dropdown/DropItem/DropItem";

import classes from './DropdownTeams.module.scss';

type Props = {
    listData: any;
    initVal: {};
    changeHandler: (val: any) => void;
};

const DropdownTeams: React.FC<Props> = ({listData, changeHandler, initVal}) => {
    const [dropVal, setDropVal] = useState(initVal);
    const [dropOpened, setDropOpened] = useState(false);

    const handleDropOpen = () => {
        setDropOpened(!dropOpened)
    }

    const choiceHandler = (val: any) => {
        setDropVal({
            name: val.team_name,
            logo: val.team_badge,
        });
        changeHandler(val);
        handleDropOpen();
    }

    return (
        <Dropdown
            curVal={dropVal}
            dropOpened={dropOpened}
            onClick={handleDropOpen}
        >
            {
                listData && listData.map((team: any) => (
                    <DropItem
                        key={team.team_name}
                        choiceHandler={() => choiceHandler(team)}
                    >
                        <img className={classes.img} src={team.team_badge} alt={team.team_name} />
                        <div className={classes.text}>{team.team_name}</div>
                    </DropItem>
                ))
            }
        </Dropdown>
    );
}

export default DropdownTeams;