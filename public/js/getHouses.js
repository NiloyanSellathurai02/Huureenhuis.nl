const rowHouses = document.getElementById("sdk");

const xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", `http://localhost:2000/houses${location.search}`, false);
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
        ${huis.address.house_number}
        ${huis.address.zip_code}
        ${huis.address.city}


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
