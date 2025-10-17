const options = [
  { name: "suv", img: "https://via.placeholder.com/150?text=SUV" },
  { name: "car", img: "https://via.placeholder.com/150?text=Car" },
  { name: "vehicle", img: "https://via.placeholder.com/150?text=Vehicle" }
];

let counts = {
  suv: parseInt(localStorage.getItem('suv')) || 0,
  car: parseInt(localStorage.getItem('car')) || 0,
  vehicle: parseInt(localStorage.getItem('vehicle')) || 0
};

const flipBtn = document.getElementById('flipBtn');
const choiceImage = document.getElementById('choiceImage');
const choiceText = document.getElementById('choiceText');
const indexCount = document.getElementById('indexCount');

const suvSpan = document.getElementById('suvCount');
const carSpan = document.getElementById('carCount');
const vehicleSpan = document.getElementById('vehicleCount');

function updateStats() {
  suvSpan.textContent = counts.suv;
  carSpan.textContent = counts.car;
  vehicleSpan.textContent = counts.vehicle;
}


function saveStats() {
  localStorage.setItem('suv', counts.suv);
  localStorage.setItem('car', counts.car);
  localStorage.setItem('vehicle', counts.vehicle);
}

function flipChoice() {

document.querySelector('.result').style.transform = 'rotateY(180deg)

const randomIndex = Math.floor(Math.random() * options.length);
  const choice = options[randomIndex];

  saveStats();

  updateStats();

  