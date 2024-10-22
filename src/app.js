/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function drawCard() {
  // let button = document.getElementById("NewCard");
  // button.addEventListener("click", function() {
  // window.onload = function() {
  let suitType = ["♥", "♠", "♦", "♣"];
  let numberOption = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let suitPicker = Math.floor(Math.random() * suitType.length);
  let numberPicker = Math.floor(Math.random() * numberOption.length);

  let suit = suitType[suitPicker];
  let number = numberOption[numberPicker];

  if (suit == "♥" || suit == "♦") {
    document.querySelector("#Lsuit").style.color = "red";
    document.querySelector("#Rsuit").style.color = "red";
  } else if (suit == "♠" || suit == "♣") {
    document.querySelector("#Lsuit").style.color = "black";
    document.querySelector("#Rsuit").style.color = "black";
  }

  document.querySelector("#Lsuit").innerHTML = suit;
  document.querySelector("#Rsuit").innerHTML = suit;
  document.querySelector("#number").innerHTML = number;
  // };
}

setInterval(drawCard, 750);
