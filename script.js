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
    this.style.color = "white"
    this.style.backgroundColor = "#595959";
    lastToggled = this;
}

function revertColor(element) {
    element.style.color = "rgba(255, 255, 255, 0.4)";
    element.style.backgroundColor = "rgba(60, 55, 78, 0.411)";
}