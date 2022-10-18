const submitBtn = document.querySelector(".submit_btn");
submitBtn.addEventListener("click", function() {
    this.style.backgroundColor = "white";
    this.style.color = "rgb(249 115 22)";
})

const rateoptions = document.querySelectorAll(".rateoption");
for (let option of rateoptions) {
    option.addEventListener("click", changeColor);
}

let lastToggled = null;

function changeColor() {
    if (lastToggled !== null) { revertColor(lastToggled) }
    this.classList.remove("rateoption_basestate")
    this.classList.add("rateoption_activestate")
    lastToggled = this;
}

function revertColor(element) {
    element.classList.remove("rateoption_activestate")
    element.classList.add("rateoption_basestate")
}