const firebaseConfig = {
  apiKey: "AIzaSyDfP56IWrsFDz02Ou_LMzUyyFMe5VChmvM",
  authDomain: "ttiot-7b4e6.firebaseapp.com",
  databaseURL: "https://ttiot-7b4e6-default-rtdb.firebaseio.com",
  projectId: "ttiot-7b4e6",
  storageBucket: "ttiot-7b4e6.appspot.com",
  messagingSenderId: "847288867242",
  appId: "1:847288867242:web:56d351700cd56e3bf9f3d3",
  measurementId: "G-9NWQTL544M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const button_return = document.querySelector('.return_menu');
// button device -- home--------------
// Add a click event listener to the button
button_return.addEventListener('click', () => {
  // Redirect the user to the new HTML file
  window.location.href = "Responsive CSS Grid Tutorial.html";
});





// // ----------TEM_BED---------------
// // Get the temperature element from the HTML
// const temperatureValue_bed = document.querySelector("#temperature_b .value_b").textContent;// Push the temperature value to the database with the reference "/IoT/tem"
// database.ref("/TT_IoT/Bedroom/Temperature").set(temperatureValue_bed);
// // Get the temperature element from the HTML  
// const temperatureElement_bed = document.querySelector("#temperature_b .value_b");

// // Set up a listener function to update the temperature value when it's changed in Firebase
// database.ref("/TT_IoT/Bedroom/Temperature").on("value", snapshot => {
//   // Get the new temperature value from the snapshot
//   const newTemperatureValue_bed = snapshot.val();

//   // Update the temperature element with the new value
//   temperatureElement_bed.textContent = newTemperatureValue_bed;
// });






const toggleBtn2 = document.getElementById('toggle2');
const content2 = document.querySelector('.content2');

toggleBtn2.addEventListener('click', () => {
  content2.classList.toggle('bg-color');
});

const toggleBtn3 = document.getElementById('toggle3');
const content3 = document.querySelector('.content3');

toggleBtn3.addEventListener('click', () => {
  content3.classList.toggle('bg-color');
});

// const toggleBtn4 = document.getElementById('toggle4');
// const content4 = document.querySelector('.content4');

// toggleBtn4.addEventListener('click', () => {
//   content4.classList.toggle('bg-color');
// });

// ------------HUM_LIVING-----------

const humidityValue_li = document.querySelector("#humidity .value_li").textContent;// Push the temperature value to the database with the reference "/IoT/tem"
database.ref("/TT_IoT/Living/Humidity").set(humidityValue_li);
// Get the temperature element from the HTML
const humidityElement_li = document.querySelector("#humidity .value_li");

// Set up a listener function to update the temperature value when it's changed in Firebase
database.ref("/TT_IoT/Living/Humidity").on("value", snapshot => {
  // Get the new temperature value from the snapshot
  const newHumidityValue_li = snapshot.val();

  // Update the temperature element with the new value
  humidityElement_li.textContent = newHumidityValue_li;
});

// Get the temperature element from the HTML
const temperatureValue_li = document.querySelector("#temperature .value_li").textContent;// Push the temperature value to the database with the reference "/IoT/tem"
database.ref("/TT_IoT/Living/Temperature").set(temperatureValue_li);
// Get the temperature element from the HTML
const temperatureElement_li = document.querySelector("#temperature .value_li");

// Set up a listener function to update the temperature value when it's changed in Firebase
database.ref("/TT_IoT/Living/Temperature").on("value", snapshot => {
  // Get the new temperature value from the snapshot
  const newTemperatureValue_li = snapshot.val();

  // Update the temperature element with the new value
  temperatureElement_li.textContent = newTemperatureValue_li;
});




const toggleBtn4 = document.getElementById('toggle4');
const content4 = document.querySelector('.content4');

toggleBtn4.addEventListener('click', () => {
  content4.classList.toggle('bg-color');
});


// Đen room ----------------------
// Get the range input element
const slider = document.getElementById("slider");
// Get the content4 section element
const content_sd = document.querySelector(".slider_living");
// Add an event listener to the slider to change the background color
slider.addEventListener("input", function() {
  // Get the value of the slider
  const value = slider.value;
  // Calculate the color based on the slider value
  const color = `rgb(${255 - value * 2}, ${255 - value * 2}, ${value * 2})`;
  // Set the background color of the content4 section
  content_sd.style.backgroundColor = color;
});














