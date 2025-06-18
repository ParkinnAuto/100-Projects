const searchBox = document.querySelector(".searchBox");
const submit = document.querySelector(".btn");
const weatherResult = document.querySelector(".weatherResult");

const getWeather = async () => {
  const apiKey = "7b7f2313fee51b256c53953fba70c32d";
  const city = searchBox.value.trim();

  if (city === "") {
    alert("Please enter city");
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  try {
    const response = await fetch(currentWeatherUrl);

    if (!response.ok) {
      throw new Error("No data found");
    }

    const data = await response.json();

    console.log(data);

    weatherResult.innerHTML = `
    <br>
  <h2>${data.name}</h2>
  <br>
  <h3>Temperature: ${data.main.temp}°C</h3>
  <br>
  <h3>Weather: ${data.weather[0].description}</h3>
  <br>
  <h3>Longtitude: ${data.coord.lon}, Latitude: ${data.coord.lat}</h3>
`;
  } catch (error) {
    alert(error.message);
  }
};

submit.addEventListener("click", getWeather);
