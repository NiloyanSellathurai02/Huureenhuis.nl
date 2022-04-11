const getHttpReq = new XMLHttpRequest();
getHttpReq.open("GET", `http://localhost:2000/types`, false);
getHttpReq.setRequestHeader("Content-Type", "application/json");
getHttpReq.send();
console.log(getHttpReq.response);

const labelsHouseTypes = document.querySelectorAll(".type-house");

console.log(labelsHouseTypes);
