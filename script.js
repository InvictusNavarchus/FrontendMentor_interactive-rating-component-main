const state_rating = document.querySelector("#state_rating");
const state_thankyou = document.querySelector("#state_thankyou");
const submitBtn = document.querySelector(".submit_btn");
const rateChoice = document.querySelector("#ratechoice");

let lastToggled = null;
let chosenOption;

submitBtn.addEventListener("click", function() {
    if (lastToggled === null) { return; }
    this.style.backgroundColor = "white";
    this.style.color = "rgb(249 115 22)";
    state_rating.classList.add("hidden");
    state_thankyou.classList.remove("hidden");
    state_thankyou.classList.add("flex");
    chosenOption = lastToggled.textContent;
    rateChoice.textContent = chosenOption;
})



const rateoptions = document.querySelectorAll(".rateoption");
for (let option of rateoptions) {
    option.addEventListener("click", changeColor);
}


function changeColor() {
    if (lastToggled !== null) { revertColor(lastToggled) }
    this.classList.remove("rateoption_basestate")
    this.classList.add("rateoption_activestate")
    lastToggled = this;
    submitBtn.removeAttribute("disabled");
    console.log(lastToggled)
}

function revertColor(element) {
    element.classList.remove("rateoption_activestate")
    element.classList.add("rateoption_basestate")
}