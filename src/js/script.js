const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburgerClose");

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    hamburgerClose.style.display = "block";
});

hamburgerClose.addEventListener('click', () => {
    hamburger.style.display = "block";
    hamburgerClose.style.display = "none";
});