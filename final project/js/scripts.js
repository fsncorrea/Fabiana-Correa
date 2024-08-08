document.addEventListener('DOMContentLoaded', function() {
    // Select all "Add to Cart" buttons
    const cartButtons = document.querySelectorAll('div button');
    // Add click event listeners to each "Add to Cart" button
    cartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Display an alert when a button is clicked
            alert('Item added to cart!');
        });
    });

    // Select the signup form
    const signupForm = document.getElementById('signup-form');

    // Add a submit event listener to the signup form
    signupForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting in the traditional way
        event.preventDefault(); 

        // Get the email value from the input field
        const email = document.getElementById('email').value;

        // Display an alert with the email value
        alert(`Thank you for signing up with email: ${email}`);
  

    });
});