document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let blogTitle = document.getElementById('blogTitle').value;
    let blogContent = document.getElementById('blogContent').value;
  
    if (blogTitle && blogContent) {
      alert('Blog Posted: ' + blogTitle);
      // Here, you would typically send the blog data to the server to update the website
    } else {
      alert('Please fill in both fields.');
    }
  });
  
  document.getElementById('logoutButton').addEventListener('click', function() {
    alert('Logged out');
    // Logic for logging out
  });
