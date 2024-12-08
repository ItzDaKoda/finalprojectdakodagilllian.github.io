// Select container elements
const eventContainer = document.getElementById("event-container");
const errorMessage = document.getElementById("error-message");

// API endpoint (Replace with your chosen API)
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=YOUR_API_KEY";

// Function to fetch events from API
async function fetchEvents() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        displayEvents(data); // Call function to display events
    } catch (error) {
        console.error("Error fetching events:", error);
        errorMessage.style.display = "block";
    }
}

// Function to display events dynamically
function displayEvents(data) {
    // Example data processing: Adjust to fit your API structure
    const events = [
        {
            title: `Weather: ${data.weather[0].main}`,
            description: `Current temperature in ${data.name}: ${Math.round(data.main.temp - 273.15)}°C.`,
        },
        {
            title: "Community Cleanup",
            description: "Join us for a city park cleanup event this Saturday.",
        },
        {
            title: "Food Bank Volunteering",
            description: "Help sort and distribute food to families in need.",
        },
    ];

    events.forEach((event) => {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        const eventTitle = document.createElement("h3");
        eventTitle.textContent = event.title;

        const eventDesc = document.createElement("p");
        eventDesc.textContent = event.description;

        eventDiv.appendChild(eventTitle);
        eventDiv.appendChild(eventDesc);
        eventContainer.appendChild(eventDiv);
    });
}

// Fetch events when the page loads
fetchEvents();
