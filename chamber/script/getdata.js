const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const visitmsg1 = document.querySelector('#visitmsg');
 
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const copyrightLine = document.getElementById('copyright');
    copyrightLine.innerHTML = `© ${currentYear} 😎Emmanuel Ologe😎, Nigeria 🇳🇬`;
  
    // const lastModifiedParagraph = document.getElementById('lastModified');
    // const lastModified = new Date(document.lastModified);
    // lastModifiedParagraph.textContent = `Last modified: ${lastModified.toLocaleString()}`;
  
    // const menuToggle = document.getElementById('menu');
    // const nav = document.querySelector('nav');
  
    // menuToggle.addEventListener('click', () => {
    //   nav.classList.toggle('show');
    // });

    const modeButton = document.querySelector("#mode");
    const body = document.body;

    modeButton.addEventListener("click", () => {
        body.classList.toggle('manual-dark-mode');

        const main = document.querySelector("main");
        if (modeButton.textContent.includes("🕶️")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "🔆";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "🕶️";
        }
    });

    // function updateWeatherInfo() {
    //     // Use placeholder values for temperature and wind speed
    //     const temperature = 45; // Replace with the actual temperature value
    //     const windSpeed = 6;    // Replace with the actual wind speed value
    
    //     // Call the calculateWindChill function
    //     const windChillValue = calculateWindChill(temperature, windSpeed);
    
    //     // Update the DOM to display the weather information
    //     document.getElementById("weather-info").innerHTML = `
    //         <p>Temperature: ${temperature}°F</p>
    //         <p>Wind Speed: ${windSpeed} mph</p>
    //         <p>${windChillValue}</p>
    //     `;
    // }
    
    // // Call the updateWeatherInfo function to update the weather information
    // updateWeatherInfo();

    // getdata.js

// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData() {
    const apiKey = '0dd9b87bfa600aa69c5edb317fbe74fe'; // Replace with your actual API key
    const city = 'ABUJA';      // Replace with your city name

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Log the API response
        console.log('API Response:', data);
        // Extract temperature and wind speed from the API response
        const temperature = data.main.temp; // Temperature in Kelvin
        const windSpeed = data.wind.speed;  // Wind speed in meters per second

        // Convert temperature to Fahrenheit (optional)
        const temperatureFahrenheit = (temperature - 273.15) * 9/5 + 32;

        // Log converted values
        console.log('Temperature (Fahrenheit):', temperatureFahrenheit);
        console.log('Wind Speed (MPH):', windSpeed);
        // Call the calculateWindChill function
        const windChillValue = calculateWindChill(temperatureFahrenheit, windSpeed);

        // Update the DOM to display the weather information
        document.getElementById("weather-info").innerHTML = `
            <p>Temperature: ${temperatureFahrenheit.toFixed(2)}°F</p>
            <p>Wind Speed: ${windSpeed.toFixed(2)} m/s</p>
            <p>${windChillValue}</p>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Call the getWeatherData function to update the weather information
getWeatherData();

// let allList = new Array();

// function construct(membersList) {
//     allList = membersList;

//     const Listing = document.querySelector("#gridList");
//     for (let i = 0; i < 3; i++) {

//             if (allList[i].membership != "Bronze") {
//            const html = `<section>
//            <img src='${allList[i].icon}' width = \'120px\'; height:\'120px\'>
//            <h3>${'Business Name: ' + allList[i].name}</h3>
//            <h4>${'Address: ' + allList[i].address}</h4>
//            <h4>${'Phone Number: ' + allList[i].phonenumber}</h4>
//            <h4>${'Website: ' + allList[i].website + ' years'}</h4>
//            <h4>${'Membership: ' + allList[i].membership + ' - since: ' + allList[i].since}</h4>
//            </section>`;
//           Listing.innerHTML += html;

//        } 
//       }
//     };

});  
