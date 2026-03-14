// public/js/app.js

// This script connects the frontend to the Node.js backend using Fetch API

// Function to fetch data from the Node.js API
async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Example usage: Fetching user data
const apiUrl = 'https://your-node-backend.com/api/users';
fetchData(apiUrl).then(data => {
    console.log(data);
    // Update your HTML with the data
});

// Add any additional JavaScript functions below to handle interactivity or UI updates.