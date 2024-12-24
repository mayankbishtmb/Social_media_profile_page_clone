function toggleMessageBox() {
    const messageBox = document.getElementById("messageBox");
    messageBox.style.display = messageBox.style.display === "none" ? "block" : "none";
}

function sendMessage() {
    const messageText = document.getElementById("messageText").value;
    if (messageText.trim() === "") {
        alert("Please write a message before sending.");
    } else {
        alert("Message sent!");
        clearMessage();
    }
}

function clearMessage() {
    document.getElementById("messageText").value = "";
}

function likePost(button) {
    button.classList.toggle("liked");
    button.textContent = button.classList.contains("liked") ? "Liked" : "Like";
}

// Scroll to the next post by ID
function scrollToPost(postId) {
    const post = document.getElementById(postId);
    if (post) {
        post.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        console.error(`Post with ID "${postId}" not found.`);
    }
}

// Smooth scroll for navigation links (Friends and Posts)
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Example usage: Call this function when a specific button is clicked
function goToNextPost() {
    scrollToPost("post-id"); // Replace "post-id" with the actual ID of the post
}
