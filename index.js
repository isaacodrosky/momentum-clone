fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    .then(res => res.json())
    .then(data => {
        const imgUrl = data.urls.regular
        document.body.style.backgroundImage = `url(${imgUrl})`
        document.getElementById('img-author').textContent = `Image by ${data.user.name}`
    })