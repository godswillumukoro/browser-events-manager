const countDisplay = document.querySelector(".countDisplay")
const incrementCountButton = document.querySelector(".incrementCount")
let count = 0

incrementCountButton.addEventListener("click", () => {
    count += 1
    countDisplay.textContent = count
    console.log("Hello")

    localStorage.setItem("count", count)
})

const renderCount = () => {
    if(localStorage.getItem("count")) {
        count = localStorage.getItem("count")
        countDisplay.textContent = count
    }
}

renderCount()