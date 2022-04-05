"use strict";
const rowHouses = document.getElementById("insert-elements");
const getHouses = document.getElementById("search-submit-ctn");
let getLocation = document.getElementById("location");
let getTypeHouse = document.getElementById("type-woning");
let getBudgetPrice = document.getElementById("prijs");

const getUserSelectedHouse = () => {
  getLocation = document.getElementById("location").value;
  getTypeHouse = document.getElementById("type-woning").value;
  getBudgetPrice = document.getElementById("prijs").value;

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
  console.log(xmlHttp.response);
  const houseresult = JSON.parse(xmlHttp.response);
  console.log(xmlHttp.response);

  console.log(houseresult);
  let insertHTML = "";

  console.log(houseresult.img);
  houseresult.forEach((huis) => {
    console.log(huis.img);
    insertHTML += ` <div class="row-1">
    <div class="container-row-1">
      <div class="row-1-image">
      <img
        src="${huis.img}"
        alt="foto huis"
        class="house"/>
    </div>
    <div class="straatnaam">
      ${huis.address.street_name}
    </div>
    <div class="row-description">
      <div class="m2"> m2:${huis.surface}</div>
      <div class="rooms">rooms: ${huis.rooms}</div>
      <div class="prijs"> € ${huis.price}</div>
      <button id="${huis.id}" class="rent--house">Huur Nu</button>
    </div>
  </div>
  </div>
    `;
  });
  rowHouses.innerHTML = insertHTML;
};

getHouses.addEventListener("click", getUserSelectedHouse);
