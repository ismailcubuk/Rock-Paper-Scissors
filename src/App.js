import { useContext } from "react";
import Game from "./components/Game/Game";
import GameContext from "./components/GameContext/GameContext";
import GameMatch from "./components/GameMatch/GameMatch";
import GameRules from "./components/GameRules/GameRules";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import MatchModal from "./components/GameMatch/MatchModal";

function App() {
  const { sPage } = useContext(GameContext)
  return (
    <div className="background">
      <MatchModal />
      <div>
        <ScoreBoard />
        {sPage === true ? <Game /> : <GameMatch />}
        <GameRules />
      </div>
    </div>

  );
}

export default App;