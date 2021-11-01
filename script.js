const buttonEle = document.querySelector("form");
const input = document.getElementById("user-input");
let locationName = document.getElementById("local");
const temp = document.getElementById("temp");
var img = document.getElementById("icon");
var message = document.getElementById("temp-discription");
function getApi(city) {
  let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed05974d9df9d894a078b4e44ff8c225&units=imperial`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      locationName.innerHTML = data.name;
      temp.innerHTML = data.main.temp;
      var icon = data.weather[0].icon;
      console.log(icon);
      img.src = "http://openweathermap.org/img/w/" + icon + ".png";
    });
}
buttonEle.addEventListener("submit", (event) => {
  event.preventDefault();
  getApi(input.value);
});
//console.log(getApi());
