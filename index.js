// BACKGROUND IMAGE
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        const imgUrl = data.urls.regular
        document.body.style.backgroundImage = `url(${imgUrl})`
        document.getElementById('img-author').textContent = `Image by ${data.user.name}`
    })

// VILLAGER
const randomNum = Math.floor((Math.random() * 392))

fetch(`https://acnhapi.com/v1a/villagers/${randomNum}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('acnh').innerHTML = `
            <h2>Villager of the Day</h2>
            <img src="${data.icon_uri}" />
            <p>${data.name["name-USen"]}</p>`
    })