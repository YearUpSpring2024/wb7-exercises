const apiBaseurl = "https://jsonplaceholder.typicode.com/todos/";

window.onload = function () {
    const getId = document.getElementById("getUserID");
    getId.onclick = onGetIdButton;
}

function onGetIdButton() {
    const getUserIDInput = document.getElementById("getUserIDInput");
    const Displaymessage = document.getElementById("Displaymessage");
    console.log(apiBaseurl);
    let actualurl = apiBaseurl + getUserIDInput.value;


    Displaymessage.innerHTML = "";

    fetch(actualurl).then(response => response.json()).then(data => {
        console.log(data);

        if (data.length === 0) {
            let error = document.createElement("span");
            error.innerHTML = "Error, no information has been found";
            Displaymessage.appendChild(error);
        } else {
            let title = document.createElement("h1");
            title.innerHTML = data.title;
            Displaymessage.appendChild(title);
            let p = document.createElement("p");
            p.innerHTML = "userID" + data.userId
            Displaymessage.appendChild(p)
        }

    })
}