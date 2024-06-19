// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Style for the scroll to top button
document.getElementById('scrollToTopBtn').style.position = 'fixed';
document.getElementById('scrollToTopBtn').style.bottom = '20px';
document.getElementById('scrollToTopBtn').style.right = '20px';
document.getElementById('scrollToTopBtn').style.zIndex = '99';
document.getElementById('scrollToTopBtn').style.backgroundColor = '#007bff';
document.getElementById('scrollToTopBtn').style.color = '#fff';
document.getElementById('scrollToTopBtn').style.border = 'none';
document.getElementById('scrollToTopBtn').style.padding = '10px 20px';
document.getElementById('scrollToTopBtn').style.cursor = 'pointer';
document.getElementById('scrollToTopBtn').style.borderRadius = '4px';

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle dark-mode class

    // Change button text on toggle
    const button = document.querySelector('button[onclick="toggleDarkMode()"]');
    button.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
}

// Style for dark mode
const darkModeButton = document.querySelector('button[onclick="toggleDarkMode()"]');
darkModeButton.style.backgroundColor = '#333';
darkModeButton.style.color = '#fff';
darkModeButton.style.padding = '10px 20px';
darkModeButton.style.border = 'none';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.borderRadius = '4px';

// Simulated posts data (replace with your actual data)
const posts = [
    { title: 'New Post 1', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'New Post 2', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'New Post 3', content: 'Lorem ipsum dolor sit amet...' }
];

let currentPosts = 1; // Initial number of posts loaded

// Function to load more posts
function loadMorePosts() {
    const postsContainer = document.getElementById('blog-posts'); // Replace with actual container ID
    const newPosts = posts.slice(currentPosts, currentPosts + 1); // Load 1 more post

    newPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <a href="#" class="button">Read more</a>
        `;
        postsContainer.appendChild(postElement);
    });

    currentPosts++; // Update the count of loaded posts
}

// Style for the load more button
const loadMoreButton = document.querySelector('button[onclick="loadMorePosts()"]');
loadMoreButton.style.backgroundColor = '#007bff';
loadMoreButton.style.color = '#fff';
loadMoreButton.style.padding = '10px 20px';
loadMoreButton.style.border = 'none';
loadMoreButton.style.cursor = 'pointer';
loadMoreButton.style.borderRadius = '4px';


// Style for the submit button
const submitButton = form.querySelector('button[type="submit"]');
submitButton.style.backgroundColor = '#007bff';
submitButton.style.color = '#fff';
submitButton.style.padding = '10px 20px';
submitButton.style.border = 'none';
submitButton.style.cursor = 'pointer';
submitButton.style.borderRadius = '4px';

