document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Prepare the email parameters
        const emailParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('service_pdh7dly', 'template_q666pye', emailParams)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Your message has been sent!');
                form.reset(); // Reset the form fields after submission
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                console.error('Error details:', error.status, error.text);
                alert('There was an error sending your message. Please try again later.');
            });
    });
});

