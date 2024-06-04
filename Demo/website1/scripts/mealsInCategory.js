"use strict";

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

window.onload = function () {
    const getResultButton = document.getElementById("getResultsbutton");
    getResultButton.onclick = onGetResultsButton;
}

function onGetResultsButton() {

    console.log("We clicked");

    const categoryInput = document.getElementById("categoryInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualurl = apiBaseUrl + categoryInput.value;

    fetch(actualurl)
        .then(response =>
            response.json())
        .then(data => {
            console.log(data);

            for (let meal of data.meals) {
                let p = document.createElement("p");
                p.innerHTML = meal.strMeal;

                resultsOutput.appendChild(p);
            }
        })

}
