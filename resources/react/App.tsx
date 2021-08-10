import React from "react";
import HelloWorld from "./components/HelloWorld";
import RenderForm from "./components/RenderForm";
import './App.scss';

const App: React.FC<{}> = () => {
  return (
    <>
      <HelloWorld />
      <RenderForm />
    </>
  );
};

export default App;
