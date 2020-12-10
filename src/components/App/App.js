import Player1 from "../Player/Player1";
import Player2 from "../Player/Player2";
import Header from "../Header";
import Reset from "../Reset";
import WinMessage from "../WinMessage";
import Language from "../Language";
import ResultsTable from "../Results";
import Loading from "../Loading";

const App = ({ display }) => (
  <div className={ display ? "" : "d-none" }>
    <Language />
    <Header />
    <Loading>
      <div className="row mb-4">
          <Player1 />
          <Player2 />
      </div>
      <WinMessage />
      <hr />
      <Reset />
      <hr />
      <ResultsTable />
    </Loading>
  </div>
);

export default App;
