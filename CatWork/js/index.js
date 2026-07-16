let table = document.getElementById("picture-table")
let catPicBtn = document.getElementById("cat-pic-refresh-btn")


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
    console.log(json)
    // get the images themselves
    let images = []
    for (let img of json) images.push(img["url"])
    renderCatPictureTable(images)
}
// handle events
catPicBtn.addEventListener("click", updateCatPictures)
// stuff to load on startup
updateCatPictures()