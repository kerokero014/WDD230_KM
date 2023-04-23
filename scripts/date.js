
const today = new Date(document.lastModified);
const Annee = today.getFullYear();
const hueres = ('0' + mySuperDuperDate.getHours()).slice(-2);
const minutes = ('0' + mySuperDuperDate.getMinutes()).slice(-2);
const secondes = ('0' + mySuperDuperDate.getSeconds()).slice(-2);

document.getElementById('copyrightYear').innerHTML = Annee
document.getElementById('lastUpdatedDate').innerHTML = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${hueres}:${minutes}:${secondes}`