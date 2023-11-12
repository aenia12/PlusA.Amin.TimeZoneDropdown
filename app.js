function displayCity(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:m A");
    let parisTimeZone = "Europe/Paris";
    alert("It is " + parisTime + " in " + parisTimeZone);
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", displayCity);
