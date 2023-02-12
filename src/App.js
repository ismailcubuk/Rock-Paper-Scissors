import { useContext } from "react";
import Game from "./components/Game/Game";
import GameContext from "./components/GameContext/GameContext";
import GameMatch from "./components/GameMatch/GameMatch";
import GameRules from "./components/GameRules/GameRules";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  const { sPage } = useContext(GameContext)
  return (
    <div className="background">
      <div>
        <ScoreBoard />
        {sPage === true ? <Game /> : <GameMatch />}
        <GameRules />
      </div>
    </div>
  );
}

export default App;