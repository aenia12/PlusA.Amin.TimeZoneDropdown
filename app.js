function displayCity(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:m A");
    alert("It is ${parisTime} in Europe/Paris.");
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", displayCity);
