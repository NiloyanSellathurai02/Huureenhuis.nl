const labelsHouse = document.getElementById("type-woning");
const labels = document.querySelector("type-hs");

const getHttpReq = new XMLHttpRequest();
getHttpReq.open("GET", `http://localhost:2000/types`, false);
getHttpReq.setRequestHeader("Content-Type", "application/json");
getHttpReq.send();
console.log(getHttpReq.response);
const parseResp = JSON.parse(getHttpReq.response);
console.log(parseResp);
console.log(labelsHouse);

let insertType;

parseResp.forEach((type) => {
  insertType += `
    <option value="${type.id}">${type.name}</option>
    `;
});

labelsHouse.innerHTML = insertType;
