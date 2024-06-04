"use strict";

const apiBaseurl = "https://jsonplaceholder.typicode.com/users"

window.onload = function () {
    const getUserInformationbtn = document.getElementById("getUserInformation");

    getUserInformationbtn.onclick = onUserButtonClick;
}

function onUserButtonClick() {
    // console.log("we have been clicked");
    // const getUserInput = document.getElementById("getUser");
    const Displaymessage = document.getElementById("Displaymessage");
    let actualurl = apiBaseurl;

    // empty the display
    Displaymessage.innerHTML = ""
    fetch(actualurl)
        .then(response => response.json())
        .then(data => {
            if (data.length === 0) {
                console.log("Error no users has been found")
            } else {
                // creating table
                let table = "<table>"
                for (let i = 0; i < 6; i++) {
                    table += "<tr>";
                    table += "<td>" + data[i].name + "</td>";
                    table += "<td>" + data[i].email + "</td>";
                    table += "<td>" + data[i].phone + "</td>";
                    table += "</tr>"
                }
                table += "</table>";
                Displaymessage.innerHTML = table;
            }
        })
}