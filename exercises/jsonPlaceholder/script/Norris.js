"use strict";

const apidBaseUrl = "https://api.chucknorris.io/jokes/random";

window.onload = function () {
    const getNorrisBtn = document.getElementById("getNorrisJoke");
    getNorrisBtn.onclick = getNorrisJoke;
}

function getNorrisJoke() {
    const displayMessage = document.getElementById("Displaymessage");

    displayMessage.innerHTML = ""
    fetch(apidBaseUrl).then(response => response.json()).then(data => {
        console.log(data)
        let p = document.createElement("p");
        p.innerHTML = data.value;
        displayMessage.appendChild(p);

        let image = document.createElement("img");
        image.src = data.icon_url;
        image.alt = "Chuck Norris";
        displayMessage.appendChild(image);

        console.log("image url", image.src);
    })
}