let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    document.getElementById('rating').value = rating;
    
    // Update stars visual
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

async function submitFeedback(event) {
    event.preventDefault();

    const rating = document.getElementById('rating').value;
    const recipe = document.getElementById('recipe').value;
    const comment = document.getElementById('comment').value;
    const cookedWith = document.getElementById('cooked_with').value;
    const difficulty = document.getElementById('difficulty').value;
    
    // Get user name from localStorage
    const userName = localStorage.getItem('userName') || 'Anonymous';

    if (!rating || !recipe || !comment) {
        alert('Please fill in all required fields!');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: Number(rating),
                recipe,
                comment,
                userName,
                cooked_with: cookedWith,
                difficulty
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit feedback');
        }

        const result = await response.json();
        alert('Thank you for your feedback! 🎉');
        
        // Reset form
        document.getElementById('feedbackForm').reset();
        setRating(0);

        // Reload feedbacks after submitting
        loadFeedbacks();
        
    } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Sorry, there was an error submitting your feedback. Please try again.');
    }
}

function goHome() {
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userAge');
    window.location.href = 'login.html';
}

async function loadFeedbacks() {
    try {
        const response = await fetch('http://localhost:3000/api/feedback');
        if (!response.ok) {
            throw new Error('Failed to fetch feedback');
        }
        const feedbacks = await response.json();
        displayFeedbacks(feedbacks);
    } catch (error) {
        console.error('Error loading feedbacks:', error);
    }
}

function displayFeedbacks(feedbacks) {
    const display = document.getElementById('feedbackDisplay');
    
    if (!feedbacks || feedbacks.length === 0) {
        display.innerHTML = '<p class="no-feedback">No feedback yet. Be the first to share!</p>';
        return;
    }
    
    display.innerHTML = feedbacks.map(feedback => `
        <div class="feedback-card">
            <div class="feedback-header">
                <span class="feedback-user">👨🍳 ${feedback.userName}</span>
                <span class="feedback-rating">${'⭐'.repeat(feedback.rating)}</span>
                <span class="feedback-date">${new Date(feedback.date).toLocaleDateString()}</span>
            </div>
            <div class="feedback-recipe">Recipe: ${feedback.recipe}</div>
            ${feedback.comment ? `<div class="feedback-comment">"${feedback.comment}"</div>` : ''}
            ${feedback.cooked_with ? `<div class="feedback-cooked-with">Cooked with: ${feedback.cooked_with}</div>` : ''}
            ${feedback.difficulty ? `<div class="feedback-difficulty">Difficulty: ${feedback.difficulty}</div>` : ''}
        </div>
    `).join('');
}

// Add event listener when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set welcome message
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('welcomeUser').textContent = `👋 Hi, ${userName}!`;
    }

    // Add form submit handler
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', submitFeedback);
    }

    // Load feedbacks immediately
    loadFeedbacks();
});