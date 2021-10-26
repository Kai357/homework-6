const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=ed05974d9df9d894a078b4e44ff8c225`;
function getApi() {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
console.log(getApi.main);
