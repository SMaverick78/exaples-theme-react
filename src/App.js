import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const lightTheme = {
  "--color-solid": "black",
  "--color-surface": "white",
  "--color-primary": "teal"
};

const darkTheme = {
  "--color-solid": "white",
  "--color-surface": "black",
  "--color-primary": "purple"
};

const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === "light" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};

const App = () => {
  const [currentTheme, setTheme] = React.useState("light");

  const onClick = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
  };

  return (
    <div className="App">
      <h1>{currentTheme === "light" ? "Light theme" : "Dark theme"}</h1>
      <button onClick={onClick}>Toggle theme</button>
    </div>
  );
};

export default App;
