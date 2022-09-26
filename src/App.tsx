import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Sub } from "./type";
import ListSubs from "./components/ListSubs";



interface StateApp {
  stateSubs: Array<Sub>;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMount: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    descripcion: "Dapelu hace de moderador a veces",
  },
  {
    nick: "sergio serrano",
    subMount: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

const App = () => {
  const [subs, setSubs] = useState<StateApp["stateSubs"]>([]);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="subs_container">
            <h2>Subcriptores</h2>
            <ListSubs subs={subs} />
        </div>
      </header>
    </div>
  );
};

export default App;
