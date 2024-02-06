document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('welcomeBtn').addEventListener('click', () => {
      document.getElementById('welcomeMessage').innerText = 'Welcome to EduNexus!';
      // Use the exposed getUsers function
      window.api.getUsers()
        .then(users => {
          console.log(users);
          // Display users or handle data as needed
        })
        .catch(err => console.error('Failed to fetch users:', err));
    });
  });
  
  function fetchDataFromAPI() {
    fetch('http://localhost:3000/api/messages') // Adjust the URL to your actual API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Example of processing and displaying data in the UI
        displayMessages(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  function displayMessages(messages) {
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.innerHTML = ''; // Clear previous messages
    messages.forEach(message => {
      const messageElement = document.createElement('div');
      messageElement.innerText = message.content; // Assuming each message has a 'content' field
      messagesContainer.appendChild(messageElement);
    });
  }