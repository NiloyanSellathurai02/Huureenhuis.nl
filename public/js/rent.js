const rentButton = document.querySelector(".rent--house");

const rentedHouse = (id) => {
  console.log(id);
  const httpREQ = new XMLHttpRequest();
  httpREQ.open("PATCH", `http://localhost:2000/rented/${id}`, false);
  httpREQ.setRequestHeader("Content-Type", "application/json");
  httpREQ.send();
  const status = JSON.parse(httpREQ.response);
  console.log(status);
  setTag(status);
};
