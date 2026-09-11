const openButton = document.getElementById("openButton");
const opening = document.querySelector(".opening");
const birthday = document.querySelector(".birthday");

openButton.addEventListener("click", function() {
    opening.style.display = "none";
    birthday.style.display = "flex";
});
const loveCards = document.querySelectorAll(".love-card");

const loveMessages = [
    "The way you wait for me on our dates, like seeing me is always worth the wait. ♡",

    "The way you never tell me no. Somehow, you're always ready to make time for me and meet me, no matter what. ♡",

    "The way you kiss me when you see me after a long time... like you've been waiting for that moment, like you just yearn to hold me again. ♡"
];

loveCards.forEach(function(card, index) {

    card.addEventListener("click", function() {

        card.innerHTML = `
            <p>${loveMessages[index]}</p>
        `;

    });

});
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const surprisePhoto = document.getElementById("surprisePhoto");

surpriseButton.addEventListener("click", function() {

    surpriseMessage.style.display = "block";
    surprisePhoto.style.display = "block";

    setTimeout(function() {
        surpriseMessage.style.opacity = "1";
        surpriseMessage.style.transform = "translateY(0)";
    }, 50);

    surpriseButton.style.display = "none";

});