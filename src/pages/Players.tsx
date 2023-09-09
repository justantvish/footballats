import Main from "../layouts/Main/Main";
import Content from "../layouts/Content/Content";
import Header from "../layouts/Header/Header";
import TablePlayers from "../components/Tables/TablePlayers";

const Players = () => {

  return (
    <Content >
      <Header title="Players">
      </Header>
      <Main>
        <TablePlayers />
      </Main>
    </Content>
  );
};

export default Players;
