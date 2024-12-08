// Select the "Volunteer Now" button and form container
const volunteerButton = document.getElementById("volunteer-btn");
const formContainer = document.getElementById("volunteer-form-container");

// Add event listener to the button to show the form when clicked
volunteerButton.addEventListener("click", () => {
    formContainer.style.display = "block"; // Show the form
    volunteerButton.style.display = "none"; // Hide the button
});

// Enhance interactivity: Show additional details on hover over charity name
const charityHeader = document.querySelector("header h1");
const additionalDetails = document.createElement("p");
additionalDetails.textContent = "We have been supporting the community for over 10 years. Join us to make an impact!";
additionalDetails.style.display = "none";
additionalDetails.style.fontSize = "14px";
additionalDetails.style.color = "#255";

// Append additional details to the header
charityHeader.parentElement.appendChild(additionalDetails);

// Add hover effects to display additional details
charityHeader.addEventListener("mouseover", () => {
    additionalDetails.style.display = "block";
});
charityHeader.addEventListener("mouseout", () => {
    additionalDetails.style.display = "none";
});

// Handle form submission
const form = document.getElementById("volunteer-form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Display a thank-you message
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = `Thank you for volunteering, ${name}! We will contact you soon at ${email} or ${phone}.`;
    formContainer.innerHTML = ""; // Clear the form
    formContainer.appendChild(thankYouMessage);
});
