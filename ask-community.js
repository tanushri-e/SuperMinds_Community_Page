$(document).ready(function() {
    const messagesContainer = $('#messages');

    // Function to add a message to the chat
    function addMessage(user, message) {
        messagesContainer.append(`<div><strong>${user}:</strong> ${message}</div>`);
        messagesContainer.scrollTop(messagesContainer[0].scrollHeight); // Scroll to the bottom
    }

    // Send button event
    $('#sendBtn').click(function() {
        const userInput = $('#userInput').val();
        if (userInput) {
            addMessage('You', userInput);
            $('#userInput').val(''); // Clear input after sending
            // Simulate a response
            setTimeout(() => {
                addMessage('Superminds', 'Thank you for your question! We will respond shortly.');
            }, 1000);
        }
    });

    // Allow pressing Enter to send the message
    $('#userInput').keypress(function(e) {
        if (e.which === 13) {
            $('#sendBtn').click();
        }
    });

    // Button handlers for sign up and login (placeholders)
    $('#sign-up-btn').click(() => {
        alert('Redirecting to Sign Up page...');
    });

    $('#login-btn').click(() => {
        alert('Redirecting to Login page...');
    });

    $('#get-started-btn').click(() => {
        alert('Redirecting to get started...');
    });

    $('#learn-more-btn').click(() => {
        alert('Redirecting to learn more...');
    });
});
