// Function to format the date and time
function formatDateTime(dateTime) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    return dateTime.toLocaleString(undefined, options);
  }
  
  // Get the current date and time
  const currentDate = new Date();
  const formattedDateTime = formatDateTime(currentDate);
  
  // Get the current year
  const currentYear = currentDate.getFullYear();
  
  // Update the HTML elements with the formatted date and current year
  document.getElementById('currentDateTime').textContent = formattedDateTime;
  document.getElementById('currentYear').textContent = currentYear;

  