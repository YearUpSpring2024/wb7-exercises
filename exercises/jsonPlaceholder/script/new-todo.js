"use strict";


let endpointUrl = 'https://jsonplaceholder.typicode.com/todos/';



window.onload = function () {
    const submit = document.getElementById("submit");
    submit.onclick = postContent
}

function postContent() {
    let userId = document.getElementById("userId").value;
    let title = document.getElementById("title").value;
    let complete = document.getElementById("completed").value == "true";


    let bodyData = {
        id: parseInt(userId),
        name: title,
        isCompleted: complete
    }
    fetch(endpointUrl, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            // If the POST finishes successfully, ...
        })
        .catch(err => {
            // If the POST returns an error, ...
            console.error(err);
        });
}