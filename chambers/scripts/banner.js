/// -----------------BANNER --------------///

const d = new Date();
const day = d.getDay();

if (day == 1 || day == 2) {
    const banner = document.querySelector("#banner");
    banner.textContent = "Come join us for the Chamber every Wedsnday @ 6:00 P.M.";
    banner.style.display = "block";
}
