console.log("Welcome to the Community Portal");

/*Exercise 2 - Data Types & Operators*/

const eventName = "Music Festival";
const eventDate = "15 July 2026";
let availableSeats = 50;

const eventInfo = `Event: ${eventName}
Date: ${eventDate}
Available Seats: ${availableSeats}`;

console.log(eventInfo);

function registerSeat() {
    if (availableSeats > 0) {
        availableSeats--;
        console.log(`Registration Successful! Remaining Seats: ${availableSeats}`);
    } else {
        console.log("Sorry! No seats available.");
    }
}

registerSeat();
registerSeat();

function cancelRegistration() {
    availableSeats++;
    console.log(`Seat Cancelled. Available Seats: ${availableSeats}`);
    displayEventCards();
}

/*Exercise 3 - Conditionals, Loops & Error Handling*/

const events = [
    {
        name: "Music Festival",
        category: "Music",
        date: "2026-07-15",
        seats: 20
    },
    {
        name: "Food Carnival",
        category: "Food",
        date: "2025-01-15",
        seats: 15
    },
    {
        name: "Sports Meet",
        category: "Sports",
        date: "2026-09-20",
        seats: 0
    }
];

/* Closure Example */

function registrationTracker(){
    let totalRegistrations = 0;
    return function(){
        totalRegistrations++;
        console.log(`Total Registrations: ${totalRegistrations}`);
    };
}
const trackRegistration = registrationTracker();
function displayEvents(filteredEvents){
    console.log("Filtered Events:");
    filteredEvents.forEach(function(event){
        console.log(`${event.name} (${event.category})`);
    });
}
console.log("Available Events");
events.forEach(function(event){
    let today = new Date();
    let eventDate = new Date(event.date);
    if(eventDate > today && event.seats > 0){
        console.log(`${event.name} is Available`);
    }
    else{
        console.log(`${event.name} is Not Available`);
    }
});
/* Registration with Error Handling */
function registerForEvent(event){
    try{
        if(event.seats <= 0){
            throw new Error("No seats available.");
        }
        event.seats--;
        console.log(`Successfully registered for ${event.name}`);
    }
    catch(error){
        console.error(error.message);
    }
}
function cancelEvent(event){
    event.seats++;
    console.log(`Registration cancelled for ${event.name}`);
    displayEventCards();
}
registerForEvent(events[0]);
registerForEvent(events[2]);
/*Exercise 4 - Functions, Scope,
  Closures & Higher-Order Functions*/
// Add a New Event
function addEvent(name, category, date, seats){
    events.push({
        name: name,
        category: category,
        date: date,
        seats: seats
    });
    console.log(`${name} added successfully.`);
}
// Register User
function registerUser(eventName){
    const event = events.find(function(e){
        return e.name === eventName;
    });
    if(event && event.seats > 0){
        event.seats--;
        console.log(`User registered for ${event.name}`);
    }
    else{
        console.log("Registration failed.");
    }
}
// Filter Events by Category
function filterEventsByCategory(category, callback){
    const filteredEvents = events.filter(function(event){
        return event.category === category;
    });
    callback(filteredEvents);
}
function showOutput() {
    document.getElementById("result").innerHTML =
        "Registration Successful!";
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    if (phone.length !== 10) {
        alert("Please enter a valid 10-digit phone number");
    }
}

function showFee(fee) {
    document.getElementById("fee").innerHTML =
        "Event Fee: ₹" + fee;
}

function countChars(text) {
    document.getElementById("count").innerHTML =
        text.value.length;
}

function enlarge(img) {
    img.style.width = "400px";
}

function videoReady() {
    document.getElementById("videoMsg").innerHTML =
        "Video ready to play";
}

window.onbeforeunload = function () {
    return true;
};

function savePreference() {
    let eventType =
        document.getElementById("eventType").value;
    localStorage.setItem(
        "preferredEvent",
        eventType
    );
    sessionStorage.setItem(
        "lastSelectedEvent",
        eventType
    );
    alert("Preference Saved");
}
function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
    document.getElementById("eventType").value = "";
    alert("Preferences Cleared");
}

window.onload = function () {
    alert("Page Loaded Successfully!");
    let savedEvent =
        localStorage.getItem("preferredEvent");
    if (savedEvent) {
        document.getElementById("eventType").value =
            savedEvent;
        showFee(savedEvent);
    }
};

function findLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    } else {
        document.getElementById("location").innerHTML =
            "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    document.getElementById("location").innerHTML =
        "<b>Latitude:</b> " +
        position.coords.latitude +
        "<br><b>Longitude:</b> " +
        position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("location").innerHTML =
                "Location access denied by user.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("location").innerHTML =
                "Location information unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById("location").innerHTML =
                "Location request timed out.";
            break;
        default:
            document.getElementById("location").innerHTML =
                "Unknown error occurred.";
    }
}

console.log("Portal Loaded Successfully");  
addEvent("Baking Workshop","Workshop","2026-10-05",30);
registerUser("Music Festival");
trackRegistration();
trackRegistration();
filterEventsByCategory("Music",displayEvents);
/*Exercise 5 - Objects and Prototypes*/
// Event Constructor
function Event(name, category, date, seats){
    this.name = name;
    this.category = category;
    this.date = date;
    this.seats = seats;
}
// Prototype Method
Event.prototype.checkAvailability = function(){
    if(this.seats > 0){
        console.log(`${this.name} is Available`);
    }
    else{
        console.log(`${this.name} is Full`);
    }
};
// Create Event Object

const event1 = new Event(
    "Coding Workshop",
    "Workshop",
    "2026-11-20",
    40
);

event1.checkAvailability();
console.log("Event Details");
Object.entries(event1).forEach(function(entry){
    console.log(`${entry[0]} : ${entry[1]}`);
});

/*Exercise 6 - Arrays and Methods*/

// Add New Event using push()

events.push({
    name: "Photography Workshop",
    category: "Workshop",
    date: "2026-12-10",
    seats: 25
});

console.log("New Event Added Successfully");
/* Filter Only Music Events */
const musicEvents = events.filter(function(event){
    return event.category === "Music";
});

console.log("Music Events");
musicEvents.forEach(function(event){
    console.log(event.name);
});

/* Format Event Cards using map() */

const eventCards = events.map(function(event){
    return `Workshop on ${event.name}`;
});

console.log("Formatted Event Cards");
eventCards.forEach(function(card){
    console.log(card);
});

/*Exercise 7 - DOM Manipulation*/

// Access DOM Element
const eventContainer = document.querySelector("#eventContainer");

// Create and Display Event Cards
function displayEventCards() {
    eventContainer.innerHTML = "";
    events.forEach(function(event) {
        const card = document.createElement("div");
        card.className = "eventCard";
        card.innerHTML = `
            <h3>${event.name}</h3>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Seats:</strong> ${event.seats}</p>
            <button onclick="registerForEvent(events[${events.indexOf(event)}])">
                Register
            </button>
            <button onclick="cancelEvent(events[${events.indexOf(event)}])">
                Cancel
            </button>
        `;
        eventContainer.appendChild(card);
    });
}

displayEventCards();

function filterCategory(){
    const category = document.getElementById("categoryFilter").value;
    const cards = document.querySelectorAll(".eventCard");
    cards.forEach(function(card){
        const cardCategory = card.querySelector("p").textContent;
        if(category === "All" || cardCategory.includes(category)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}

function searchEvents(){
    const input = document.getElementById("searchBox").value.toLowerCase();
    const cards = document.querySelectorAll(".eventCard");
    cards.forEach(function(card){
        const title = card.querySelector("h3").textContent.toLowerCase();
        if(title.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });
}

/*Exercise 9 - Async JS, Promises, Async/Await*/

// Mock API
const apiURL = "https://jsonplaceholder.typicode.com/users";

// Fetch using Promise (.then & .catch)

function fetchEventsPromise(){
    document.getElementById("loadingMessage").style.display = "block";
    setTimeout(() => {

        fetch(apiURL)

        .then(function(response){
            return response.json();
        })

        .then(function(data){

            console.log("Events fetched using Promise");
            console.log(data);

        })

        .catch(function(error){

            console.error(error);

        })

        .finally(function(){

            document.getElementById("loadingMessage").style.display = "none";

        });

    }, 2000);
}

async function fetchEventsAsync(){
    document.getElementById("loadingMessage").style.display = "block";
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log("Events fetched using Async/Await");
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
    finally{
        document.getElementById("loadingMessage").style.display = "none";
    }
}
fetchEventsPromise();
fetchEventsAsync();

/*Exercise 10 - Modern JavaScript Features*/

// Default Parameter Function
function greetUser(name = "Guest"){
    console.log(`Welcome, ${name}!`);
}

greetUser();
greetUser("Ram");

// Destructuring Example
const firstEvent = events[0];
const { name, category, date, seats } = firstEvent;
console.log("Destructured Event Details");
console.log(name);
console.log(category);
console.log(date);
console.log(seats);
// Spread Operator Example
const copiedEvents = [...events];
console.log("Copied Event List");
console.log(copiedEvents);

/*Exercise 11 - Working with Forms*/

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event){
    console.log("===== Registration Started =====");
    // Prevent page refresh
    event.preventDefault();
    // Get form values using form.elements
    const name = registrationForm.elements["name"].value.trim();
    const email = registrationForm.elements["email"].value.trim();
    const selectedEvent = registrationForm.elements["eventType"].value;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Selected Event:", selectedEvent);
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    let valid = true;
    // Name validation
    if(name === ""){
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }
    // Email validation
    if(email === ""){
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    }

    if(selectedEvent === ""){
        alert("Please select an event.");
        valid = false;
    }

    // Successful Registration
    if(valid){
        const userData = {
            name:name,
            email:email,
            event:selectedEvent
        };
        console.log("Sending data to server...");
        console.log(userData);
        submitRegistration(userData);
    }
});

/*Exercise 12 - AJAX & Fetch API*/

function submitRegistration(userData){
    // Show loading message
    console.log("submitRegistration() called");
    document.getElementById("result").innerHTML = "Submitting registration...";
    // Simulate server delay
    setTimeout(function(){
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            document.getElementById("result").innerHTML = `<h3 style="color:green;">
            Registration Submitted Successfully!
            </h3>`;
            console.log("Server Response");
            console.log(data);
        })
        .catch(function(error){
            console.error("Fetch Error:", error);
            document.getElementById("result").innerHTML = `<h3 style="color:red;">
            Registration Failed!
            </h3>`;
            console.error(error);
        });
    },2000);
}

/*Exercise 14 - jQuery & JS Frameworks*/

$(document).ready(function(){
    // Handle Register Button Click
    $("#registerBtn").click(function(){
        console.log("Register Button Clicked using jQuery");
    });
    // Fade Out Event Cards
    $(".eventCard").fadeOut(1000).fadeIn(1000);
});
// Benefit of Frameworks
console.log(
    "React and Vue make web applications easier to build, maintain, and update using reusable components."
);