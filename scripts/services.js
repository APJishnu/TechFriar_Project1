// Array of course details
const courses = [
    {
        title: "Basic Trading Package",
        description: "Introduction to binary trading strategies and risk management.",
        price: "$100/Month",
        id: 1
    },
    {
        title: "Intermediate Trading Package",
        description: "Advanced strategies and technical analysis for improved trading.",
        price: "$200/Month",
        id: 2
    },
    {
        title: "Pro Trading Package",
        description: "Comprehensive training on expert trading techniques and tools.",
        price: "$300/Month",
        id: 3
    },
    {
        title: "Pro Trading Package",
        description: "Comprehensive training on expert trading techniques and tools.",
        price: "$300/Month",
        id: 4
    }
];

// Reference to the container
const container = document.querySelector('.course-cards-container');

// Create a DocumentFragment to batch DOM updates
const fragment = document.createDocumentFragment();

// Loop through the courses and create the card HTML
courses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    
    card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p class="price">${course.price}</p>
        <a href="course-details.html?id=${course.id}" class="btn">Learn More</a>
    `;
    
    // Append the card to the fragment
    fragment.appendChild(card);
});

// Append the fragment to the container in one operation
container.appendChild(fragment);
