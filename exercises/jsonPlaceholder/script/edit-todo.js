"use strict";

window.onload = function () {
    // Find the ToDo ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const todoId = urlParams.get('id');

    // if (!todoId) {
    //     console.error("ToDo ID is missing");
    //     return; 
    // }

    // Populate the ToDo ID field
    document.getElementById("todoId").value = todoId;
    document.getElementById("updateButton").onclick = function () {
        const updatedTodo = {
        };

        // Send the updated ToDo data to the API using the PUT method
        fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: "PUT",
            body: JSON.stringify(updatedTodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log("ToDo updated successfully");

                } else {
                    console.error("Failed to update ToDo:");
                }
            })
            .catch(error => console.error('Error updating ToDo:', error));
    };

    // Handle cancel button click
    document.getElementById("cancelButton").onclick = function () {
        window.location.href = "index.html";
    };
};
