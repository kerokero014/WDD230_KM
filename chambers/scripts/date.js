const today = new Date(document.lastModified);
const year = today.getFullYear();
const hours = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);
const seconds = ('0' + today.getSeconds()).slice(-2);

document.getElementById('yearPlaceholder').textContent = year;
document.getElementById('lastUpdatedPlaceholder').textContent = `${today.toLocaleDateString()} ${hours}:${minutes}:${seconds}`;
