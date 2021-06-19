import React, { useState } from "react";

import "./Simon.scss";

import green from "../assets/sound/green.mp3";
import red from "../assets/sound/red.mp3";
import blue from "../assets/sound/blue.mp3";
import yellow from "../assets/sound/yellow.mp3";
import wrong from "../assets/sound/wrong.mp3";

import kitty from "../assets/images/kitty.webp";

function Simon({ won, setWon }) {
  let clickedPattern = [];
  const [gamePattern, setGamePattern] = useState([]);
  const buttonColors = ["red", "blue", "green", "yellow"];
  const [level, setLevel] = useState(0);
  let lastIndex = 0;
  const [started, setStarted] = useState(false);
  const [lost, setLost] = useState(false);

  const sounds = {
    green,
    red,
    blue,
    yellow,
    wrong,
  };

  const animatePress = (color) => {
    document.getElementById(color).classList.add("pressed");
    setTimeout(function () {
      document.getElementById(color).classList.remove("pressed");
    }, 100);
  };

  const playSound = (color) => {
    const audio = new Audio(sounds[color]);
    audio.play();
  };

  const newSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    setGamePattern((prevVal) => [...prevVal, randomChosenColor]);
    setLevel((prevVal) => prevVal + 1);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
  };

  const checkAnswer = (currentLevel) => {
    console.log(gamePattern);
    console.log(clickedPattern);
    if (gamePattern[lastIndex] === clickedPattern[lastIndex]) {
      if (clickedPattern.length === currentLevel) {
        if (level !== 1) {
          setTimeout(function () {
            newSequence();
            clickedPattern = [];
          }, 1000);
        } else {
          setWon(true);
        }
      }
    } else {
      playSound("wrong");
      document.getElementById("view").classList.add("game-over");
      setTimeout(function () {
        document.getElementById("view").classList.remove("game-over");
      }, 200);
      setLost(true);
      setStarted(false);
    }
  };

  const btnClick = (color) => {
    clickedPattern.push(color);
    animatePress(color);
    playSound(color);
    lastIndex = clickedPattern.length - 1;
    checkAnswer(level);
  };

  const startOver = () => {
    console.log(level);
    setLevel(0);
    setGamePattern([]);
    setLost(false);
    clickedPattern = [];
  };

  return (
    <div
      id="view"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: won ? "rgba(35, 56, 2, 0.884)" : "",
      }}
    >
      <div
        onClick={() => {
          if (!won) {
            if (lost) {
              startOver();
            }
            setStarted(true);
            setTimeout(function () {
              newSequence();
            }, 200);
          }
        }}
        className="overlay"
        style={{ display: started && !won ? "none" : "" }}
      >
        {lost ? (
          <h1>Game Over, Tocar Para Reiniciar</h1>
        ) : won ? (
          <div>
            <h1>GAMNASTE! COMNTINUA UWU</h1>
            <br />
            <br />
            <img style={{width:"200px"}} src={kitty} alt="" />
          </div>
        ) : (
          <h1>Tocar Para Empezar!</h1>
        )}
      </div>

      <div className="container">
        <div>
          {level > 0 && <h1>Nivel {level}</h1>}
          <br />
          <div className="row">
            <div
              type="button"
              id="green"
              className="btn green"
              onClick={() => {
                btnClick("green");
              }}
            ></div>

            <div
              type="button"
              id="red"
              className="btn red"
              onClick={() => {
                btnClick("red");
              }}
            ></div>
          </div>

          <div className="row">
            <div
              type="button"
              id="yellow"
              className="btn yellow"
              onClick={() => {
                btnClick("yellow");
              }}
            ></div>
            <div
              type="button"
              id="blue"
              className="btn blue"
              onClick={() => {
                btnClick("blue");
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Simon;
