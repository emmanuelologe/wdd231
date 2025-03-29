// windchill.js

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Check if the input values meet the specification limits
    if (temperature <= 50 && windSpeed > 3.0) {
        // Calculate wind chill factor using the formula
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        
        // Display the wind chill factor
        return `Wind Chill: ${windChill.toFixed(2)}°F`;
    } else {
        // Return "N/A" if input values do not meet the requirements
        return "Wind Chill: N/A";
    }
}

// Example usage:
// const temperature = 32; // Replace with the actual temperature value
// const windSpeed = 5;    // Replace with the actual wind speed value
// const windChillValue = calculateWindChill(temperature, windSpeed);
// console.log(windChillValue); // You can display the result in the console or update the DOM accordingly
