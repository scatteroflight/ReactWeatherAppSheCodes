import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Weather defaultCity="Paris" />;
      </div>
      <footer>
        <a
          href="https://github.com/scatteroflight/ReactWeatherAppSheCodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open source code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/jen-whitfield-2018/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Jen Whitfield{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
