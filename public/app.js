"use strict";
const rowHouses = document.getElementById("house-row");
const getHouses = document.getElementById("search-submit-ctn");
let getLocation = document.getElementById("location");
let getTypeHouse = document.getElementById("type-woning");
let getBudgetPrice = document.getElementById("prijs");

const getUserSelectedHouse = () => {
  getLocation = document.getElementById("location").value;
  getTypeHouse = document.getElementById("type-woning").value;
  getBudgetPrice = document.getElementById("prijs").value;
  console.log(getLocation, getTypeHouse, getBudgetPrice);

  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", `http://localhost:2000/houses`, false);
  xmlHttp.setRequestHeader("Content-Type", "application/json");
  xmlHttp.send(
    JSON.stringify({
      locationhouse: getLocation,
      type: getTypeHouse,
      price: getBudgetPrice,
    })
  );

  const houseresult = JSON.parse(xmlHttp.response);
  console.log(houseresult);

  let divelement = "";

  houseresult.forEach((rij) => {
    divelement += `<div class="row-1">
<div class="container-row-1">
  <div class="row-1-image">
    <img
      src=""
      alt="foto huis"
      class="house"
    />
  </div>
  <div class="straatnaam">
    ${"houseresult.address.street_name"}
  </div>
  <div class="row-description">
    <div class="m2">${rij.surface}</div>
    <div class="rooms">${rij.rooms}</div>
    <div class="prijs">${rij.price}</div>
    <button id="${rij.id}" class="rent--house">Huur Nu</button>
  </div>
</div>
</div>`;
  });
  rowHouses.innerHTML = divelement;
};

console.log(rowHouses);
getHouses.addEventListener("click", getUserSelectedHouse);
