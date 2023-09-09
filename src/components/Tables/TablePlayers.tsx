import { useState } from 'react';
import { useFetch, fetchResponse } from '../../hooks/useFetch';
import { PlayersTableObj } from '../../interfaces/interfaces';
import { createColumnHelper } from '@tanstack/react-table';

import TableDefault from './TableDefault/TableDefault';
import Badge from '../UI/Badge/Badge';
import Avatar from 'components/UI/Avatar/Avatar';

import { AVATAR_COLORS } from 'constants/colors';
import MainTools from 'layouts/MainTools/MainTools';
import DropdownTeams from 'components/DropdownTeams/DropdownTeams';

const tableColsWidth: PlayersTableObj["colsWidth"]= [
  '200px',
  '100px',
  '122px',
  '150px',
  '146px',
  '162px',
  '172px',
  '160px'
];

const columnHelper = createColumnHelper<PlayersTableObj>();

const columns = [
  columnHelper.accessor('player_name', {
    cell: (props: any) => (
      <>
        <Avatar
            val={props.getValue()}
            style={{backgroundColor: AVATAR_COLORS[(Math.floor(Math.random() * (AVATAR_COLORS.length)))]}}
        />
        <span>{props.getValue()}</span>
      </>
    ),
    header: () => 'Name',
  }),
  columnHelper.accessor('player_type', {
    cell: (props: any) => 
    (
      <Badge type={props.getValue()}>
        {props.getValue() === 'Goalkeepers' && 'GK'}
        {props.getValue() === 'Defenders' && 'DF'}
        {props.getValue() === 'Midfielders' && 'M'}
        {props.getValue() === 'Forwards' && 'FW'}
      </Badge>
    ),
    header: () => 'Position',
  }),
  columnHelper.accessor('player_number', {
    cell: (props: any) => (props.getValue() !== '' ? <Badge>{props.getValue()}</Badge> : '-'),
    header: () => 'Number',
  }),
  columnHelper.accessor('player_passes', {
    cell: (props: any) => props.getValue(),
    header: () => 'Passes',
  }),
  columnHelper.accessor('player_key_passes', {
    cell: (props: any) => props.getValue(),
    header: () => 'Key Passes',
  }),
  columnHelper.accessor('player_goals', {
    cell: (props: any) => props.getValue(),
    header: () => 'Goals',
  }),
  columnHelper.accessor('player_birthdate', {
    cell: (props: any) => props.getValue(),
    header: () => 'Birthdate',
  }),
  columnHelper.accessor('player_duels_won', {
    cell: (props: any) => props.getValue(),
    header: () => 'Duels Won',
  }),
];

const TableCustom = () => {
    const [teamName, setTeamName] = useState('Liverpool');
    const [teamLogo, setTeamLogo] = useState('https://apiv3.apifootball.com/badges/84_liverpool.jpg');
    const leagueId = 152;

    const {data: dataLeague}: fetchResponse = useFetch(`https://apiv3.apifootball.com/?action=get_teams&league_id=${leagueId}&APIkey=fa12ee062400a33e97bd4cb515f2f80eaa100cc027661407585d75e39574768f`);
    const {data, loading}: fetchResponse = useFetch("https://apiv3.apifootball.com/?action=get_teams&team_id=84&APIkey=fa12ee062400a33e97bd4cb515f2f80eaa100cc027661407585d75e39574768f");
    let teamSelected: any;
    let tableData: any;
    let teamId: any;

    if (data.length !== 0 && dataLeague.length !== 0) {
        teamSelected = dataLeague.filter((team : any) => team.team_key === data[0].team_key);
        tableData = teamSelected[0].players;
    }

    const changeTeamHandler = (val: any) => {
        console.log(val);
        setTeamName(val.team_name);
        setTeamLogo(val.team_badge);
    };
    
    teamId = dataLeague.filter((team : any) => team.team_name === teamName);

    if(tableData) {
        tableData = teamId[0].players;
    }

    return (
        <>
            <MainTools>
                {dataLeague && <DropdownTeams
                    listData={dataLeague}
                    initVal={{
                        name: teamName,
                        logo: teamLogo
                    }}
                    changeHandler={changeTeamHandler}
                />}
            </MainTools>
            {tableData &&
                <TableDefault
                    tableData={tableData}
                    tableColumns={columns}
                    tableColsWidth={tableColsWidth}
                    dataLoading={loading}
                />
            }
        </>
    );
};

export default TableCustom;
