// javascript for page navigation via buttons

let navButtons = document.getElementsByClassName('button')
console.log(navButtons)
let navButtonsArr = Array.from(navButtons);
console.log(navButtonsArr)


navButtonsArr.forEach(element => {
    element.addEventListener('click', handleNavButtonClicks)
});

function handleNavButtonClicks(e) {
    if (e.target.innerText == 'About Me') {
        console.log(e.target.innerText)
        window.location.href = "index.html"
    } else if (e.target.innerText == "Resume") {
        console.log(e.target.innerText)
        window.location.href = "Resume.html"
    } else if (e.target.innerText == "Services") {
        console.log(e.target.innerText)
        window.location.href = "prices.html"
    } else if (e.target.innerText == "Testimonials") {
        console.log(e.target.innerText)
        window.location.href = "testimonials.html"
    } else if (e.target.innerText == "Projects") {
        console.log(e.target.innerText)
        window.location.href = "projects.html"
    }
}