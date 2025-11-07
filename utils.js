function generateRandNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

nodule.exports = {
  generateRandNumber,
  celciusToFahrenheit,
};

const name = "Gaius Emmanuel";
const greet = "Welcome back!";

module.exports = {
  name,
  greet,
  celciusToFahrenheit,
  generateRandNumber
};
