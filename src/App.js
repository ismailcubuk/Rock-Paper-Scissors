import Game from "./components/Game/Game";
import GameMatch from "./components/GameMatch/GameMatch";
import GameRules from "./components/GameRules/GameRules";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  return (
    <div className="background">
      <div>
        <ScoreBoard />
        {/* <Game /> */}
        <GameMatch />
        <GameRules />
      </div>
    </div>
  );
}

export default App;
