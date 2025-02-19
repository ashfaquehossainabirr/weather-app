// Vanilla Tilt JS

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 4,
    speed: 800,
scale: 1.03,
glare: true,
"max-glare": 0.5,
});


// Get random background

const backgroundLists = [
    "./images/background.jpg",
    "./images/background-2.jpg",
    "./images/background-3.jpg",
    "./images/background-4.jpg",
]

function backgroundFunc() {
    const randomNum = Math.floor(Math.random() * 4)
    document.body.style.backgroundImage = `url('${backgroundLists[randomNum]}')`;
}



// Get Weather Information

const displayCity = document.getElementById("city")
const displayTemp = document.getElementById("temp")
const description = document.querySelector(".description")
const searchInput = document.querySelector(".search-bar")
const searchButton = document.getElementById("search-btn")

const apiKey = "ee402de4db48c058eded077e228b05aa"
const city = "dhaka"

window.onload = getWeather = async () => {
    backgroundFunc() 
    const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    const api = await fetchData.json()

    console.log(api)
    
    displayCity.innerHTML = api.name
    displayTemp.innerHTML = api.main.temp
    description.innerHTML = api.weather[0].description
}

searchButton.addEventListener('click', () => {
    const getWeather = async () => {
        const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=${apiKey}`)
        const api = await fetchData.json()
        
        displayCity.innerHTML = api.name
        displayTemp.innerHTML = api.main.temp
        description.innerHTML = api.weather[0].description
    }
    
    getWeather()
    searchInput.value = ""
})