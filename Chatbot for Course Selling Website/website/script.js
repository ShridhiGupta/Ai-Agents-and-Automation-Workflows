const courses = [
    {
        id: 1,
        title: "JavaScript Fundamentals",
        description: "Learn the basics of JavaScript programming language with hands-on exercises.",
        price: 99.99,
        image: "JS"
    },
    {
        id: 2,
        title: "React for Beginners",
        description: "Build modern web applications with React library from scratch.",
        price: 149.99,
        image: "React"
    },
    {
        id: 3,
        title: "Node.js Backend Development",
        description: "Create scalable backend services using Node.js and Express framework.",
        price: 179.99,
        image: "Node"
    },
    {
        id: 4,
        title: "Python Data Science",
        description: "Master data analysis and visualization with Python libraries.",
        price: 199.99,
        image: "Python"
    },
    {
        id: 5,
        title: "CSS Grid & Flexbox Mastery",
        description: "Create responsive layouts with modern CSS techniques.",
        price: 89.99,
        image: "CSS"
    },
    {
        id: 6,
        title: "Vue.js Complete Guide",
        description: "Build reactive web applications with Vue.js framework.",
        price: 159.99,
        image: "Vue"
    }
];

// Shopping cart array
let cart = [];

// DOM Elements
const coursesContainer = document.getElementById('courses-container');
const cartCount = document.getElementById('cart-count');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    
    // Add event listener to contact form
    contactForm.addEventListener('submit', handleFormSubmit);
});

// Render courses to the page
function renderCourses() {
    coursesContainer.innerHTML = '';
    
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.className = 'course-card';
        courseElement.innerHTML = `
            <div class="course-image">${course.image}</div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <span class="course-price">$${course.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" data-id="${course.id}">Add to Cart</button>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
    });
    
    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const courseId = parseInt(e.target.getAttribute('data-id'));
            addToCart(courseId);
        });
    });
}

// Add course to cart
function addToCart(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
        cart.push(course);
        updateCartCount();
        
        // Show confirmation message
        alert(`${course.title} has been added to your cart!`);
    }
}

// Update cart count in the header
function updateCartCount() {
    cartCount.textContent = cart.length;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show confirmation message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
