// Get the current date and time
const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString();

// Get the last updated date
const lastUpdatedDate = document.lastModified;

// Update the elements with the current time and last updated date
document.getElementById('lastUpdatedDate').textContent = lastUpdatedDate;
document.getElementById('currentTime').textContent = currentTime;