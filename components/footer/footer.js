// Function to update the current year dynamically
function updateYear() {
    var currentYear = new Date().getFullYear(); // Get the current year
    document.getElementById('currentYear').innerHTML = '&copy;' + currentYear + ' BarBash'; // Update the content with the current year and copyright symbol
}

// Call the function to update the current year when the page loads
updateYear();