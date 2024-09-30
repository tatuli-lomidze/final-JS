async function weatherByCity() {
    let city = document.getElementById("city").value;
    let resultInfo = document.getElementById("resultInfo");
    let checkCity = document.getElementById("check")

    fetch(`https://geocode.maps.co/search?q=${city}&api_key=6623b42931295794205496hmk7e25e1`, {
        method: "GET"
    }).then(res => res.json()) 
      .then(data => {

        console.log(data)

        let latitude = data[0].lat
        let longitude = data[0].lon

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`, {
        method: "GET"
    }).then(response => response.json())
      .then(weatherInfo => {
        console.log(weatherInfo);
        resultInfo.innerText = `Tempereture today in ${city} is: ${weatherInfo.current_weather.temperature} °C`

        document.getElementById("city").value = "";

 
}).catch(error => console.log(`error`))


}).catch(error => console.log(`error`)


)
}