// TIME
function getTime() {
    const date = new Date()
    const time = date.toLocaleTimeString([], {timeStyle: "short"})
    document.getElementById('time').textContent = time
}
setInterval(getTime, 1000)

// WEATHER
navigator.geolocation.getCurrentPosition(position => {
    getWeather(position.coords.latitude, position.coords.longitude)
})

function getWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&APPID=4037edb504c44f3175dd7a3b81817da9`)
        .then(res => {
          if (!res.ok) {
            throw Error('Weather data not available')
          }
          return res.json()  
        })
        .then(data => {
          const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById('weather').innerHTML = `
            <div class="weather-info">
                <img src="${weatherIcon}" />
                <p>${Math.round(data.main.temp)}º</p>
            </div>
            <p>${data.name}</p>
          `
        })
        .catch(err => console.error(err))
}

// BACKGROUND IMAGE
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => {
        if(!res.ok) {
            throw Error('Photo not available')
        }
        return res.json()  
    })
    .then(data => {
        const imgUrl = data.urls.regular
        document.body.style.backgroundImage = `url(${imgUrl})`
        document.getElementById('img-author').textContent = `Image by ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODk4ODA5MDd8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById('img-author').textContent = `Image by Todd Quackenbush` 
    })

// VILLAGER
const randomNum = Math.floor((Math.random() * 392))

fetch(`https://acnhapi.com/v1a/villagers/${randomNum}`)
    .then(res => {
        if (!res.ok) {
            throw Error('Villager not available')
        }
        return res.json()
    })
    .then(data => {
        document.getElementById('acnh').innerHTML = `
            <h2>Villager of the Day</h2>
            <div class="villager-info">
                <img src="${data.icon_uri}" />
                <div class="villager-desc">
                    <p>${data.name["name-USen"]}</p>
                    <p>"${data["catch-phrase"]}"</p>
                </div>
            </div>`
    })
    .catch(err => console.error(err))
