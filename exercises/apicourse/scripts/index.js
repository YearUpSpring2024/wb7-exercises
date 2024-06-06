"use strict";

const apiBaseUrl = "http://localhost:8081/api/courses";

window.onload = function () {
    const btnClick = document.getElementById("getBtn");

    btnClick.onclick = getCourses;
};

function getCourses() {
    const userInput = document.getElementById("userInput").value;
    const displayMessage = document.getElementById("displayMessage");
    const courseId = parseFloat(userInput);
    const actualUrl = `${apiBaseUrl}/${courseId}`;

    if (isNaN(courseId)) {
        displayMessage.innerHTML = "";
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "Please enter a valid course";
        displayMessage.appendChild(errorMessage);
        return;
    }
    fetch(actualUrl)
        .then(response => response.json())
        .then(data => {
            displayMessage.innerHTML = "";
            console.log(data);
            const courseName = document.createElement("p");
            courseName.innerHTML = "Course Name: " + data.courseName;
            displayMessage.appendChild(courseName);

            const courseNum = document.createElement("p");
            courseNum.innerHTML = "Course Number: " + data.courseNum;
            displayMessage.appendChild(courseNum);

            // Create a link to the details page
            const detailsLink = document.createElement("a");
            detailsLink.href = `details.html?courseId=${courseId}`;
            detailsLink.innerHTML = "View Details";
            displayMessage.appendChild(detailsLink);
        }).catch(error => {
            console.error("Error", error);
            let errorMEssage = document.createElement("p");
            errorMEssage.innerHTML = "No course has been found, try another one";
            displayMessage.appendChild(errorMEssage);
        })
}