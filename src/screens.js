import "./App.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";


const camelToTitleCase = (str) =>
  str
    .split(/([A-Z][a-z]*)/)
    .filter(Boolean)
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");

const objToString = (val) =>
  Object.entries(val)
    .map(([key, value]) => `${camelToTitleCase(key)}: ${value}`)
    .join(" | ");

function F1Page() {
  const [cityName, setCityName] = useState("");
  const [playerList, setPlayerList] = useState([]);

  const submitCityName = () => {
    Axios.get("http://localhost:3001/api/cityPlayers", {
      params: { cityName: cityName },
    }).then((response) => {
      setPlayerList(response.data);
    });
  };

  return (
    <div className="fnBackground">
      <p>Show all players for a specific city</p>
      <p>City: </p>
      <input
        type="text"
        id="F1Field"
        name="cityName"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      ></input>
      <button id="subBtn" onClick={submitCityName}>
        Submit
      </button>
      <div></div>
      {playerList.map((val) => {
        return (
          <p key={val.aName}>
            Player: {val.aName} | Age: {val.age} | Height: {val.height} {" "}
          </p>
        );
      })}
    </div>
  );
}

function F2Page() {
  const [position, setPosition] = useState("");
  const [elitePlayerList, setElitePlayerList] = useState([]);

  const submitPosition = () => {
    Axios.get("http://localhost:3001/api/elitePosition", {
      params: { position: position },
    }).then((response) => {
      setElitePlayerList(response.data);
    });
  };

  return (
    <div className="fnBackground">
      <p>Find Elite Positional Players</p>
      <p>Position: </p>
      <input
        type="text"
        id="F2Field"
        name="F2Field"
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      ></input>
      <button id="subBtn" onClick={submitPosition}>
        Submit
      </button>
      <div></div>
      {elitePlayerList.map((val) => {
        return  <p key={val.playerNo}>
        Player: {val.aName} | Age: {val.age} | Height: {val.height} | Position: {val.aPosition} | Ranking: {val.ranking} {" "}
      </p>;
      })}
    </div>
  );
}

function F3Page() {
  const [height, setHeight] = useState("");
  const [centerList, setCenterList] = useState([]);

  const submitHeight = () => {
    Axios.get("http://localhost:3001/api/BIG12Centers", {
      params: { height: height },
    }).then((response) => {
      setCenterList(response.data);
    });
  };

  return (
    <div className="fnBackground">
      <p>Find BIG12 Centers by Height</p>
      <p>Height: </p>
      <input
        type="text"
        id="F3Field"
        name="F3Field"
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      ></input>
      <button id="subBtn" onClick={submitHeight}>
        Submit
      </button>
      <div></div>
      {centerList.map((val) => {
        return <p key={val.playerNo}>
        Player: {val.aName} | Age: {val.age} | Height: {val.height} | Position: {val.aPosition} | Team: {val.tName} {" "}
      </p>;
      })}
    </div>
  );
}

function F4Page() {
  const [playerName, setPlayerName] = useState("");
  const [playerNameList, setPlayerNameList] = useState([]);

  const submitPlayerName = () => {
    Axios.get("http://localhost:3001/api/searchPlayer", {
      params: { playerName: playerName },
    }).then((response) => {
      setPlayerNameList(response.data);
    });
  };

  return (
    <div className="fnBackground">
      <p>show players according to their name</p>
      <p>Player Name: </p>
      <input
        type="text"
        id="F4Field"
        name="F4Field"
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      ></input>
      <button id="subBtn" onClick={submitPlayerName}>
        Submit
      </button>
      <div></div>
      {playerNameList.map((val) => {
        return <p key={val.playerNo}>
        Player: {val.aName} | Age: {val.age} | Height: {val.height} | Weight: {val.weight} | Position: {val.aPosition} | Team: {val.tName} | Conference: {val.tConference} {" "}
      </p>;
      })}
    </div>
  );
}

function F5Page() {
  const [cityName, setCityName] = useState("");
  const submitCityName= () => {

    Axios.post("http://localhost:3001/api/insert", {
      cityName: cityName
      
    });
    alert("City " + cityName + " has been added");
  };

  return (
    <div className="fnBackground">
      <p>Add City to Scouting Database</p>
      <p>City Name: </p>
      <input
        type="text"
        id="F5Field"
        name="F5Field"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      ></input>
      <button id="subBtn" onClick={submitCityName}>
        Submit
      </button>
      <div></div>      
      
    </div>
  );

  
}

export { F1Page, F2Page, F3Page, F4Page, F5Page };