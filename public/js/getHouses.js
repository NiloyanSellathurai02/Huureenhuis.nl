const rowHouses = document.getElementById("sdk");
const insertBlockTag = document.getElementById("insert-rentTag");

const xmlHttp = new XMLHttpRequest();
xmlHttp.open(
  "GET",
  `https://huureenhuis-nl.onrender.com/houses${location.search}`,
  false
);
xmlHttp.setRequestHeader("Content-Type", "application/json");
xmlHttp.send();
console.log(xmlHttp.response);
const houseresult = JSON.parse(xmlHttp.response);

console.log(houseresult);
let insertHTML = "";

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
        ${huis.address.house_number}<br>
        ${huis.address.zip_code}
        ${huis.address.city}
      </div>
      <div class="row-description">
        <div class="m2"> m²:${huis.surface} </div>
        <div class="rooms">Kmrs: ${huis.rooms}</div>
        <div class="prijs"> €${huis.price}</div>
        <button id="${huis.id}" onClick="rentedHouse(this.id)" class="rent--house">Huur Nu</button>
      </div>
    </div>
    </div>
    `;
});
rowHouses.innerHTML = insertHTML;
let insertTag = "";

const setTag = (status) => {
  if (status.status === "BLOCKED") {
    insertTag += `<div class="blockedtag">Is Al Verhuurd</div>`;
    insertBlockTag.innerHTML = insertTag;
  } else {
    insertTag += `<div class="blockedtag-1">Gefeliciteerd 🎉</div>`;
    insertBlockTag.innerHTML = insertTag;
  }
};
