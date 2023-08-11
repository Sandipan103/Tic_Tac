import React, { useState } from "react";
import "./Game.css";

const Game = () => {
  const [mat, setMat] = useState(Array(9).fill(""));
  const [tap, seTap] = useState("O");

  const btnClick = (val) => {
    if (mat[val] !== "") {
      alert("not valid");
      return;
    }
    let temp = [...mat];
    temp[val] = tap;
    setMat(temp);
    if (checkWin(temp)) {
      alert("player " + tap + " win");
      temp.fill("");
      setMat(temp);
      return;
    }
    if (checkDraw(temp)) {
      alert("match draw");
      temp.fill("");
      setMat(temp);
      return;
    }
    if (tap === "O") seTap("X");
    else seTap("O");
  };

  const checkWin = (temp) => {
    const winMove = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag = false;
    winMove.forEach((element) => {
      // console.log('temp printing' + temp[element[0]] + temp[element[1]] + temp[element[2]]);
      if (
        temp[element[1]] === temp[element[0]] &&
        temp[element[1]] === temp[element[2]] &&
        temp[element[1]] !== '')
        flag = true;
    });
    return flag;
  };

  const checkDraw = (temp) => {
    let cnt = 0;
    temp.forEach((element) => {
      if (element !== "") cnt++;
    });
    return cnt === 9;
  };

  return (
    <div className="game-table">
      <h1 style={{ color: "white", margin: "25px" }}> Tic Tac Toy </h1>
      <br/>
      <div className="tab">
        <table>
          <tr>
            <td
              onClick={() => {
                btnClick(0);
              }}
            >
              {mat[0]}
            </td>
            <td
              onClick={() => {
                btnClick(1);
              }}
            >
              {mat[1]}
            </td>
            <td
              onClick={() => {
                btnClick(2);
              }}
            >
              {mat[2]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                btnClick(3);
              }}
            >
              {mat[3]}
            </td>
            <td
              onClick={() => {
                btnClick(4);
              }}
            >
              {mat[4]}
            </td>
            <td
              onClick={() => {
                btnClick(5);
              }}
            >
              {mat[5]}
            </td>
          </tr>
          <tr>
            <td
              onClick={() => {
                btnClick(6);
              }}
            >
              {mat[6]}
            </td>
            <td
              onClick={() => {
                btnClick(7);
              }}
            >
              {mat[7]}
            </td>
            <td
              onClick={() => {
                btnClick(8);
              }}
            >
              {mat[8]}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Game;
