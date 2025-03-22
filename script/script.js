// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Sample course data with completed status
const courses = [
    { code: "CSE101", name: "Introduction to Programming", category: "CSE", completed: true },
    { code: "CSE212", name: "Programminig with Data Structures", category: "CSE", completed: false },
    { code: "WDD230", name: "Web Frontend Development ", category: "WDD", completed: true },
    { code: "WDD102", name: "Web Design", category: "WDD", completed: false },
];

// Function to display courses
function displayCourses(filteredCourses) {
    const courseContainer = document.getElementById('course-container');
    if (!courseContainer) {
        console.error("Element with ID 'course-container' not found.");
        return;
    }

    courseContainer.innerHTML = ""; // Clear previous content

    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course-item');

        if (course.completed) {
            courseElement.style.backgroundColor = "#006400"; // Green for completed courses
            courseElement.innerHTML = `✅ <strong>${course.code}:</strong> ${course.name}`;
        } else {
            courseElement.style.backgroundColor = "#8B0000"; // Red for incomplete courses
            courseElement.innerHTML = `❌ <strong>${course.code}:</strong> ${course.name}`;
        }

        courseContainer.appendChild(courseElement);
    });
}

// Function to filter courses based on category
function filterCourses(category) {
    if (category === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.category === category);
        displayCourses(filtered);
    }
}

// Initial course display (show all courses by default)
document.addEventListener("DOMContentLoaded", () => {
    filterCourses("all");
});
