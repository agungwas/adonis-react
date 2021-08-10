import React from "react";
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";
import Headers from './components/Headers';
import './App.scss';

const App: React.FC<{}> = () => {
  return (
    <>
      <section id="headers">
        <Headers />
      </section>
      <HelloWorld />
      <RenderForm />
    </>
  );
};

export default App;
