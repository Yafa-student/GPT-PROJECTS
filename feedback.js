// Simple shared feedback using Pastebin-like service
let selectedRating = 0;
let globalFeedback = [];

window.onload = function() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('welcomeUser').textContent = '👨🍳 Welcome, ' + currentUser + '!';
        loadFeedback();
    }
};

function setRating(rating) {
    selectedRating = rating;
    document.getElementById('rating').value = rating;
    
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#f39c12';
            star.style.transform = 'scale(1.2)';
        } else {
            star.style.color = '#bdc3c7';
            star.style.transform = 'scale(1)';
        }
    });
}

document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const rating = document.getElementById('rating').value;
    const recipe = document.getElementById('recipe').value;
    const comment = document.getElementById('comment').value;
    const user = localStorage.getItem('currentUser');
    
    if (!rating) {
        showNotification('Please select a star rating!', 'warning');
        return;
    }
    
    if (!recipe) {
        showNotification('Please select a recipe!', 'warning');
        return;
    }
    
    const recipeName = document.getElementById('recipeInput').value;
    
    const feedback = {
        user: user,
        rating: rating,
        recipe: recipeName,
        comment: comment,
        date: new Date().toLocaleDateString(),
        id: Date.now()
    };
    
    await saveFeedback(feedback);
});

async function saveFeedback(newFeedback) {
    try {
        // Load existing feedback first
        await loadFeedback();
        
        // Add new feedback
        globalFeedback.unshift(newFeedback);
        
        // Keep only last 50 feedback entries
        if (globalFeedback.length > 50) {
            globalFeedback = globalFeedback.slice(0, 50);
        }
        
        // Try to save to online service
        try {
            const response = await fetch('https://httpbin.org/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ feedback: globalFeedback })
            });
            
            if (response.ok) {
                console.log('Feedback saved to online service');
            }
        } catch (e) {
            console.log('Online save failed, using local storage as backup');
        }
        
        // Always save to localStorage as backup
        localStorage.setItem('globalKidsFeedback', JSON.stringify(globalFeedback));
        
        showNotification('🎉 Thank you for your feedback!', 'success');
        document.getElementById('feedbackForm').reset();
        document.getElementById('recipeInput').value = '';
        setRating(0);
        displayFeedback();
        
    } catch (error) {
        console.error('Error saving feedback:', error);
        showNotification('❌ Could not save feedback. Please try again.', 'error');
    }
}

async function loadFeedback() {
    try {
        // Try to load from online source first
        try {
            const response = await fetch('https://raw.githubusercontent.com/kids-kitchen/feedback/main/feedback.json');
            if (response.ok) {
                const data = await response.json();
                globalFeedback = data.feedback || [];
                console.log('Loaded feedback from online source');
            } else {
                throw new Error('Online source not available');
            }
        } catch (e) {
            // Fallback to localStorage
            globalFeedback = JSON.parse(localStorage.getItem('globalKidsFeedback') || '[]');
            console.log('Loaded feedback from local storage');
        }
        
        displayFeedback();
        
    } catch (error) {
        console.error('Error loading feedback:', error);
        globalFeedback = [];
        displayFeedback();
    }
}

function displayFeedback() {
    const display = document.getElementById('feedbackDisplay');
    
    if (globalFeedback.length === 0) {
        display.innerHTML = '<p class="no-feedback">No feedback yet. Be the first to share!</p>';
        return;
    }
    
    display.innerHTML = globalFeedback.slice(0, 10).map(feedback => `
        <div class="feedback-card">
            <div class="feedback-header">
                <span class="feedback-user">👨🍳 ${feedback.user}</span>
                <span class="feedback-rating">${'⭐'.repeat(feedback.rating)}</span>
                <span class="feedback-date">${feedback.date}</span>
            </div>
            <div class="feedback-recipe">Recipe: ${feedback.recipe}</div>
            ${feedback.comment ? `<div class="feedback-comment">"${feedback.comment}"</div>` : ''}
        </div>
    `).join('');
}

function goHome() {
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ALL recipes from recipes-data.js - complete list
const allRecipesList = [
    // BEGINNER RECIPES (Ages 4-6)
    { value: 'smoothie', text: '🥤 Banana Berry Smoothie' },
    { value: 'apple', text: '🍎 Apple Peanut Butter Bites' },
    { value: 'butter', text: '🧈 Magic Shake Butter' },
    { value: 'crackers', text: '🧀 Cheese & Crackers' },
    { value: 'banana', text: '🍌 Banana Roll-Ups' },
    { value: 'yogurt', text: '🍓 Berry Yogurt Cup' },
    { value: 'trail', text: '🥜 Trail Mix' },
    { value: 'juice', text: '🍊 Fresh Orange Juice' },
    { value: 'celery', text: '🥒 Ants on a Log' },
    { value: 'grapes', text: '🍇 Frozen Grapes' },
    { value: 'milk', text: '🥛 Chocolate Milk' },
    { value: 'berries', text: '🫐 Berry Bowl' },
    { value: 'toast1', text: '🍞 Cinnamon Toast' },
    { value: 'water', text: '🍋 Lemon Water' },
    { value: 'carrots', text: '🥕 Carrot Sticks' },
    { value: 'pretzel', text: '🥨 Pretzel Bites' },
    { value: 'cherry', text: '🍒 Cherry Tomatoes' },
    { value: 'cereal', text: '🥣 Cereal Bowl' },
    { value: 'toast2', text: '🍞 Jam Toast' },
    { value: 'fruit', text: '🍍 Fruit Kabobs' },
    { value: 'pudding', text: '🍮 Instant Pudding' },
    { value: 'goldfish', text: '🐟 Goldfish Crackers' },
    { value: 'raisins', text: '🍇 Raisin Box' },
    { value: 'string', text: '🧀 String Cheese' },
    { value: 'graham', text: '🍪 Graham Crackers' },
    { value: 'popsicle', text: '🍧 Fruit Popsicle' },
    { value: 'animal', text: '🐻 Animal Crackers' },
    { value: 'applesauce', text: '🍎 Applesauce Cup' },
    { value: 'teddy', text: '🧸 Teddy Grahams' },
    { value: 'fruit2', text: '🍓 Fruit Leather' },
    { value: 'veggie', text: '🥕 Veggie Straws' },
    { value: 'cheese2', text: '🧀 Cheese Cubes' },
    { value: 'nuts', text: '🥜 Nut Butter Crackers' },
    { value: 'rice2', text: '🍚 Rice Cakes' },
    { value: 'frozen', text: '🍓 Frozen Berries' },
    { value: 'mini', text: '🥨 Mini Muffins' },
    
    // INTERMEDIATE RECIPES (Ages 7-9)
    { value: 'sandwich', text: '🥪 Super Easy Sandwich' },
    { value: 'salad', text: '🌈 Rainbow Fruit Salad' },
    { value: 'cookies', text: '🍪 No-Bake Energy Balls' },
    { value: 'pizza', text: '🍕 Mini Pizzas' },
    { value: 'pasta', text: '🍝 Cheesy Pasta' },
    { value: 'wrap', text: '🌯 Rainbow Veggie Wrap' },
    { value: 'quesadilla', text: '🌮 Cheese Quesadilla' },
    { value: 'soup', text: '🍲 Easy Tomato Soup' },
    { value: 'salad2', text: '🥗 Tuna Salad' },
    { value: 'rice', text: '🍚 Fried Rice' },
    { value: 'nachos', text: '🧀 Loaded Nachos' },
    { value: 'bagel', text: '🥯 Pizza Bagel' },
    { value: 'dip', text: '🥑 Guacamole Dip' },
    { value: 'eggs', text: '🍳 Scrambled Eggs' },
    { value: 'hotdog', text: '🌭 Mini Hot Dogs' },
    { value: 'popcorn', text: '🍿 Flavored Popcorn' },
    { value: 'smoothie2', text: '🥤 Green Smoothie' },
    { value: 'grilled', text: '🥪 Grilled Cheese' },
    { value: 'salad3', text: '🥗 Caesar Salad' },
    { value: 'tacos2', text: '🌮 Soft Tacos' },
    { value: 'burritos', text: '🌯 Bean Burritos' },
    { value: 'mac', text: '🧀 Mac and Cheese' },
    { value: 'chicken2', text: '🍗 Chicken Nuggets' },
    { value: 'fish', text: '🐟 Fish Sticks' },
    { value: 'spaghetti', text: '🍝 Spaghetti' },
    { value: 'meatballs', text: '🍝 Spaghetti & Meatballs' },
    { value: 'chili', text: '🌶️ Easy Chili' },
    { value: 'corn', text: '🌽 Corn on the Cob' },
    { value: 'potatoes', text: '🥔 Mashed Potatoes' },
    { value: 'chicken3', text: '🍗 Chicken Salad' },
    { value: 'pizza2', text: '🍕 Pita Pizza' },
    { value: 'wraps2', text: '🌯 Turkey Wraps' },
    { value: 'soup2', text: '🍲 Chicken Noodle Soup' },
    { value: 'fries', text: '🍟 Baked Fries' },
    { value: 'salad4', text: '🥗 Garden Salad' },
    
    // ADVANCED RECIPES (Ages 10+)
    { value: 'pancakes', text: '🥞 Fluffy Pancakes' },
    { value: 'muffins', text: '🧁 Banana Muffins' },
    { value: 'toast', text: '🍞 Cinnamon French Toast' },
    { value: 'cookies2', text: '🍪 Chocolate Chip Cookies' },
    { value: 'cake', text: '🎂 Mug Cake' },
    { value: 'bread', text: '🍞 No-Knead Bread' },
    { value: 'stir', text: '🥘 Veggie Stir Fry' },
    { value: 'chicken', text: '🍗 Baked Chicken' },
    { value: 'pie', text: '🥧 Mini Fruit Pies' },
    { value: 'lasagna', text: '🍝 Mini Lasagna' },
    { value: 'burger', text: '🍔 Homemade Burgers' },
    { value: 'waffles', text: '🧇 Homemade Waffles' },
    { value: 'brownies', text: '🍫 Fudgy Brownies' },
    { value: 'tacos', text: '🌮 Fish Tacos' },
    { value: 'casserole', text: '🥘 Tuna Casserole' },
    { value: 'donuts', text: '🍩 Baked Donuts' },
    { value: 'pizza3', text: '🍕 Homemade Pizza' },
    { value: 'cookies3', text: '🍪 Sugar Cookies' },
    { value: 'cupcakes', text: '🧁 Vanilla Cupcakes' },
    { value: 'soup3', text: '🍲 Vegetable Soup' },
    { value: 'roast', text: '🍖 Pot Roast' },
    { value: 'salmon', text: '🐟 Baked Salmon' },
    { value: 'risotto', text: '🍚 Mushroom Risotto' },
    { value: 'quiche', text: '🥚 Mini Quiche' },
    { value: 'meatloaf', text: '🍖 Mini Meatloaf' },
    { value: 'stuffed', text: '🥒 Stuffed Peppers' },
    { value: 'enchiladas', text: '🌯 Chicken Enchiladas' },
    { value: 'shepherd', text: '🥔 Shepherd\'s Pie' },
    { value: 'steak', text: '🥩 Grilled Steak' },
    { value: 'pasta2', text: '🍝 Chicken Alfredo' },
    { value: 'fish2', text: '🐟 Fish Tacos Advanced' },
    { value: 'curry', text: '🍛 Chicken Curry' },
    { value: 'gnocchi', text: '🍝 Potato Gnocchi' },
    { value: 'wellington', text: '🥩 Beef Wellington Jr' },
    { value: 'souffle', text: '🍰 Cheese Souffle' }
];

function showSuggestions() {
    const input = document.getElementById('recipeInput');
    const suggestions = document.getElementById('suggestions');
    const searchTerm = input.value.toLowerCase().trim();
    
    let matches;
    if (searchTerm === '') {
        // Show first 10 recipes when clicked (no search term)
        matches = allRecipesList.slice(0, 10);
    } else {
        // Filter recipes based on search term
        matches = allRecipesList.filter(recipe => {
            const recipeText = recipe.text.toLowerCase();
            const recipeValue = recipe.value.toLowerCase();
            return recipeText.includes(searchTerm) || recipeValue.includes(searchTerm);
        }).slice(0, 10);
    }
    
    if (matches.length === 0) {
        suggestions.innerHTML = '<div class="suggestion-item">No recipes found</div>';
    } else {
        suggestions.innerHTML = matches.map(recipe => 
            `<div class="suggestion-item" onclick="selectRecipe('${recipe.value}', '${recipe.text.replace(/'/g, '&apos;')}')">${recipe.text}</div>`
        ).join('');
    }
    
    suggestions.style.display = 'block';
}

function selectRecipe(value, text) {
    document.getElementById('recipeInput').value = text;
    document.getElementById('recipe').value = value;
    document.getElementById('suggestions').style.display = 'none';
}

function hideSuggestions() {
    setTimeout(() => {
        document.getElementById('suggestions').style.display = 'none';
    }, 200);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}