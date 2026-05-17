import './App.css';
import GameField from "./component/UI/gameField/gameField";
import ClickZone from "./component/UI/clickZone/clickZone";
import {useContext} from "react";
import Context from "./index";

function App() {
    const {whoIsWinner} = useContext(Context);
    return (
        <div className="App">
            <GameField />
            <ClickZone />
            {
                whoIsWinner !== null &&
                <div><h1 className='winText'>{whoIsWinner} is win!</h1></div>
            }
        </div>
    );
}

export default App;
