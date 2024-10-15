// Display a dynamic greeting based on the time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greetingMessage;

    if (hour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Clear the form fields
    }
});

// Run the greeting function on page load
window.addEventListener('load', setGreeting);
