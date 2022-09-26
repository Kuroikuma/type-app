import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface Sub{
    nick: string;
    subMount: number;
    avatar: string;
    descripcion?: string;
}

interface StateApp {
    stateSub: Array<Sub>
}



const INITIAL_STATE = [
    {
        nick: "dapelu",
        subMount: 3,
        avatar: "https://i.pravatar.cc/150?u=dapelu",
        descripcion: "Dapelu hace de moderador algunas ocaciones"
    },
    {
        nick: "sergio serrano",
        subMount: 7,
        avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    }
]

const App = () => {

  const [sub, setSub] = useState<StateApp["stateSub"]>([]);
  
  useEffect(() => {
    setSub(INITIAL_STATE)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
