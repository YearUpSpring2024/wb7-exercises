

const apiBaseUrl = "http://localhost:8081/api/courses";

window.onload = function () {
    const params = new URLSearchParams(window.location.search);
    const courseId = parseFloat(params.get('courseId'));

    if (!isNaN(courseId)) {
        fetch(`${apiBaseUrl}/${courseId}`)
            .then(response => response.json())
            .then(data => {
                const courseDetails = document.getElementById("courseDetails");
                courseDetails.innerHTML = `
                    <p><strong>Course Name:</strong> ${data.courseName}</p>
                    <p><strong>Course Number:</strong> ${data.courseNum}</p>
                    <p><strong>Course instructor:</strong> ${data.instructor}</p>
                `;
            })
            .catch(error => {
                const courseDetails = document.getElementById("courseDetails");
                courseDetails.textContent = "Error fetching course details";
                console.error('Error:', error);
            });
    } else {
        const courseDetails = document.getElementById("courseDetails");
        courseDetails.textContent = "Invalid course ID";
    }
};
