"use strict";
console.log(location);
const getHouses = document.getElementById("search-submit-ctn");
let locationHouse = document.getElementById("location");
let typeHouse = document.getElementById("type-woning");
let price = document.getElementById("prijs");

const getUserSelectedHouse = () => {
  locationHouse = document.getElementById("location").value;
  typeHouse = document.getElementById("type-woning").value;
  price = document.getElementById("prijs").value;
  window.location = `/woningen.html?locationhouse=${locationHouse}&type=${typeHouse}&price=${price}`;
};

getHouses.addEventListener("click", getUserSelectedHouse);
