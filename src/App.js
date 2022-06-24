import "./App.scss";
import { useState } from "react";
import dv from "./dv.jpeg"
const operators = [
  "filetype",
  "site",
  "inurl",
  "allinurl",
  "intitle",
  "allintitle",
  "intext",
  "allintext",
  "link",
  "cache",
  "related",
  "info",
  "bphonebook",
  "inanchor",
];

const oftenUsedOperators = ["intitle:index.of"];

const specOperators = ["*", "|", "+", "##", "–"];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchHandler = (e) => {
    if(e.keyCode === 13 || e.which === 13) { 
      const queryString='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('gsearch').value);
      window.open(queryString, "_blank")
    }
  }
  return (
    <div className="App">
      <div className="topNav">
        <img className="App-logo" src={dv}/>
        <h1 className="title">Choose the dork side!</h1>
      </div>
      <div className="operators-wrapper">
        <div className="operators">
          <h3>Operators</h3>
          {operators.map((o) => (
            <button
              className="operator-button"
              onClick={()=> setSearchQuery(searchQuery + ` ${o}:`)}
            >
              {o}
            </button>
          ))}
        </div>
        <div className="operators">
          <h3>Often used operators</h3>
          {oftenUsedOperators.map((o) => (
            <button
              className="often-operator-button"
              onClick={()=> setSearchQuery(searchQuery + ` ${o}:`)}
            >
              {o}
            </button>
          ))}
          <h3>Spec Operators</h3>
          {specOperators.map((s) => (
            <button
              className="spec-operator-button"
              onClick={()=> setSearchQuery(searchQuery + `${s}`)}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="operators">
          <h3 id="gsearch-lable">Focus to the input and press Enter</h3>
          <input 
            id="gsearch"
            type="text"
            placeholder="Search on Google..." 
            onKeyDown={searchHandler}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
