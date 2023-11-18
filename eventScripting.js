const mainHeading = document.querySelector("h1")

function spit() {
    alert("Hey ya!!")
}

mainHeading.addEventListener('click', spit, false)
mainHeading.removeEventListener('click', spit, false)

// mainHeading.addEventListener('click', (event) => {
//     console.log(event.target)
//     event.target.textContent = 'hmm... you clicked me 😄'
// })

const initApp = () => {
    const mainHeading = document.querySelector("h1")

}

// event that make working with the DOM safe
document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        console.log('DOM is loaded');
        initApp()
    }
})
