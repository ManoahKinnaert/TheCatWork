let table = document.getElementById("picture-table")
let catPicBtn = document.getElementById("cat-pic-refresh-btn")
let randomFactText = document.getElementById("random-fact-text")

function renderCatPictureTable(images) {
    let html = ""
    for (let row=0; row < 3; row++) {
        html += "<tr>"
        for (let col=0; col < 3; col++) {
            html += `<td><img src="${images[row * 3 + col]}"></img></td>`
        }
        html += "</tr>"
    }
    table.innerHTML = html
}

const updateCatPictures = async () => {
    // get 9 images
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=9')
    const json = await response.json()
    // get the images themselves
    let images = []
    for (let img of json) images.push(img["url"])
    renderCatPictureTable(images)
    // also get a random cat fact
    const response2 = await fetch("https://meowfacts.herokuapp.com/")
    const json2 = await response2.json()
    randomFactText.innerText = json2["data"][0];
}
// handle events
catPicBtn.addEventListener("click", updateCatPictures)
// stuff to load on startup
updateCatPictures()