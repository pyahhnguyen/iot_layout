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
// // Get a reference to the database
const database = firebase.database();
// export { firebaseConfig, database };



///---------Tem_home--------

// Get the temperature element from the HTML
const humidityValue = document.querySelector("#humidity .value").textContent;// Push the temperature value to the database with the reference "/IoT/tem"
database.ref("/TT_IoT/Home/Humidity").set(humidityValue);
// Get the temperature element from the HTML
const humidityElement = document.querySelector("#humidity .value");

// Set up a listener function to update the temperature value when it's changed in Firebase
database.ref("/TT_IoT/Home/Humidity").on("value", snapshot => {
  // Get the new temperature value from the snapshot
  const newHumidityValue = snapshot.val();

  // Update the temperature element with the new value
  humidityElement.textContent = newHumidityValue;
});

///---------Hum_home--------

// Get the temperature element from the HTML
const temperatureValue = document.querySelector("#temperature .value").textContent;// Push the temperature value to the database with the reference "/IoT/tem"
database.ref("/TT_IoT/Home/Temperature").set(temperatureValue);
// Get the temperature element from the HTML
const temperatureElement = document.querySelector("#temperature .value");

// Set up a listener function to update the temperature value when it's changed in Firebase
database.ref("/TT_IoT/Home/Temperature").on("value", snapshot => {
  // Get the new temperature value from the snapshot
  const newTemperatureValue = snapshot.val();

  // Update the temperature element with the new value
  temperatureElement.textContent = newTemperatureValue;
});








// -----------ROOM CHANGE ------------------

// Get the button element by its class name
const button_lv = document.querySelector('.living-container');
// Add a click event listener to the button
button_lv.addEventListener('click', () => {
  // Redirect the user to the new HTML file
  window.location.href = "living.html";
});
const button_bd = document.querySelector('.bedroom-container');
// Add a click event listener to the button
button_bd.addEventListener('click', () => {
// Redirect the user to the new HTML file
  window.location.href = "bedroom.html";
});

const button_kt = document.querySelector('.kitchen-container');
// Add a click event listener to the button
button_kt.addEventListener('click', () => {
  // Redirect the user to the new HTML file
  window.location.href = "kitchen.html";
});



// _---------------BUTTON 1--------

// Get the toggle button and the content1 grid area
const toggleBtn1 = document.getElementById('toggle1');
const content1 = document.querySelector('.content1');
const dbRef1 = database.ref('TT_IoT/Home/BT1');
dbRef1.on('value', (snapshot) => {
  const status1 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status1 === 'ON') {
    content1.classList.add('bg-color');
    toggleBtn1.checked = true;
  } else {
    content1.classList.remove('bg-color');
    toggleBtn1.checked = false;
  }
});
toggleBtn1.addEventListener('click', () => {
  content1.classList.toggle('bg-color');
  const status1 = content1.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef1.set(status1);
});

// _-------------BUTTON 2----------------
// Get the toggle button and the content2 grid area
const toggleBtn2 = document.getElementById('toggle2');
const content2 = document.querySelector('.content2');
const dbRef2 = database.ref('TT_IoT/Home/BT2');
dbRef2.on('value', (snapshot) => {
  const status2 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status2 === 'ON') {
    content2.classList.add('bg-color');
    toggleBtn2.checked = true;
  } else {
    content2.classList.remove('bg-color');
    toggleBtn2.checked = false;
  }
});
toggleBtn2.addEventListener('click', () => {
  content2.classList.toggle('bg-color');
  const status2 = content2.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef2.set(status2);
});


// _-------------BUTTON 3----------------
// Get the toggle button and the content2 grid area
const toggleBtn3 = document.getElementById('toggle3');
const content3 = document.querySelector('.content3');
const dbRef3 = database.ref('TT_IoT/Home/BT3');
dbRef3.on('value', (snapshot) => {
  const status3 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status3 === 'ON') {
    content3.classList.add('bg-color');
    toggleBtn3.checked = true;
  } else {
    content3.classList.remove('bg-color');
    toggleBtn3.checked = false;
  }
});
toggleBtn3.addEventListener('click', () => {
  content3.classList.toggle('bg-color');
  const status3 = content3.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef3.set(status3);
});

// _-------------BUTTON 4----------------
// Get the toggle button and the content2 grid area
const toggleBtn4 = document.getElementById('toggle4');
const content4 = document.querySelector('.content4');
const dbRef4 = database.ref('TT_IoT/Home/BT4');
dbRef4.on('value', (snapshot) => {
  const status4 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status4 === 'ON') {
    content4.classList.add('bg-color');
    toggleBtn4.checked = true;
  } else {
    content4.classList.remove('bg-color');
    toggleBtn4.checked = false;
  }
});
toggleBtn4.addEventListener('click', () => {
  content4.classList.toggle('bg-color');
  const status4 = content4.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef4.set(status4);
});

// _-------------BUTTON 5----------------
// Get the toggle button and the content2 grid area
const toggleBtn5 = document.getElementById('toggle5');
const content5 = document.querySelector('.content5');
const dbRef5 = database.ref('TT_IoT/Home/BT5');
dbRef5.on('value', (snapshot) => {
  const status5 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status5 === 'ON') {
    content5.classList.add('bg-color');
    toggleBtn5.checked = true;
  } else {
    content5.classList.remove('bg-color');
    toggleBtn5.checked = false;
  }
});
toggleBtn5.addEventListener('click', () => {
  content5.classList.toggle('bg-color');
  const status5 = content5.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef5.set(status5);
});

// _-------------BUTTON 5----------------
// Get the toggle button and the content2 grid area
const toggleBtn6 = document.getElementById('toggle6');
const content6 = document.querySelector('.content6');
const dbRef6 = database.ref('TT_IoT/Home/BT6');
dbRef6.on('value', (snapshot) => {
  const status6 = snapshot.val();
  // Update the toggle button and the content2 grid area based on the status value
  if (status6 === 'ON') {
    content6.classList.add('bg-color');
    toggleBtn6.checked = true;
  } else {
    content6.classList.remove('bg-color');
    toggleBtn6.checked = false;
  }
});
toggleBtn6.addEventListener('click', () => {
  content6.classList.toggle('bg-color');
  const status6 = content6.classList.contains('bg-color') ? 'ON' : 'OFF';
    // Save the status of the toggle button to Firebase under the `/Home` reference
  dbRef6.set(status6);
});


// const kitchenButton = document.getElementById("kitchen-button");

// kitchenButton.addEventListener("click", function() {
//   kitchenButton.classList.add("active");
// });

// kitchenButton.addEventListener("mouseleave", function() {
//   kitchenButton.classList.remove("active");
// });









// firebase----------------------

