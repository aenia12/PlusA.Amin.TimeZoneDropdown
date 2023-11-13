function displayCity(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, MMMM D, YYYY h:mm A");
    let parisTimeZone = "Europe/Paris";
    alert("It is " + parisTime + " in " + parisTimeZone);
  }
  if (event.target.value === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, MMMM D, YYYY h:mm A");
    let tokyoTimeZone = "Asia/Tokyo";
    alert("It is " + tokyoTime + " in " + tokyoTimeZone);
  }
  if (event.target.value === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, MMMM D, YYYY h:mm A");
    let sydneyTimeZone = "Australia/Sydney";
    alert("It is " + sydneyTime + " in " + sydneyTimeZone);
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", displayCity);
