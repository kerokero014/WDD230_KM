
const today = new Date(document.lastModified);
const Annee = today.getFullYear();
const hueres = ('0' + today.getHours()).slice(-2);
const minutes = ('0' + today.getMinutes()).slice(-2);
const secondes = ('0' + today.getSeconds()).slice(-2);

document.getElementById('copyrightYear').innerHTML = Annee
document.getElementById('lastUpdatedDate').innerHTML = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${hueres}:${minutes}:${secondes}`


/// -----------------BANNER --------------///

const d = new Date();
const day = d.getDay();

if (day == 1 || day == 2) {
    const banner = document.querySelector("#banner");
    banner.textContent = "Come join us for the Chamber every Wedsnday @ 6:00 P.M.";
    banner.style.display = "block";
}

