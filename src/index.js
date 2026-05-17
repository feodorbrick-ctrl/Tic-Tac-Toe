import React, {createContext, useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Context = createContext(null);

function ContextProvider({children}) {
    const [tick, setTick] = useState([1]);
    const [zero, setZero] = useState([1]);
    const [whoIsMotion, setWhoIsMotion] = useState('tick');
    const [whoIsWinner, setWhoIsWinner] = useState(null);
    const contextValue = {
        tick,
        setTick,
        zero,
        setZero,
        whoIsMotion,
        setWhoIsMotion,
        whoIsWinner,
        setWhoIsWinner,
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

root.render(
    <React.StrictMode>
        <ContextProvider>
            <App/>
        </ContextProvider>
    </React.StrictMode>
);

export default Context;