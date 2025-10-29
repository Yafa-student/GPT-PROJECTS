// 50 Recipes organized by age groups
const allRecipes = {
    // BEGINNER RECIPES (Ages 4-6) - 17 recipes
    smoothie: { title: "🥤 Banana Berry Smoothie", time: "5 min", age: "beginner", category: "Drinks", ingredients: ["banana", "berries", "milk", "yogurt"] },
    apple: { title: "🍎 Apple Peanut Butter Bites", time: "5 min", age: "beginner", category: "Snacks", ingredients: ["apple", "peanut butter", "chocolate chips"] },
    butter: { title: "🧈 Magic Shake Butter", time: "10 min", age: "beginner", category: "Fun", ingredients: ["cream", "salt"] },
    crackers: { title: "🧀 Cheese & Crackers", time: "3 min", age: "beginner", category: "Snacks", ingredients: ["cheese", "crackers"] },
    banana: { title: "🍌 Banana Roll-Ups", time: "5 min", age: "beginner", category: "Snacks", ingredients: ["banana", "tortilla", "peanut butter"] },
    yogurt: { title: "🍓 Berry Yogurt Cup", time: "5 min", age: "beginner", category: "Breakfast", ingredients: ["yogurt", "berries", "honey"] },
    trail: { title: "🥜 Trail Mix", time: "5 min", age: "beginner", category: "Snacks" },
    juice: { title: "🍊 Fresh Orange Juice", time: "5 min", age: "beginner", category: "Drinks" },
    celery: { title: "🥒 Ants on a Log", time: "5 min", age: "beginner", category: "Snacks" },
    grapes: { title: "🍇 Frozen Grapes", time: "2 min", age: "beginner", category: "Snacks" },
    milk: { title: "🥛 Chocolate Milk", time: "3 min", age: "beginner", category: "Drinks" },
    berries: { title: "🫐 Berry Bowl", time: "5 min", age: "beginner", category: "Snacks" },
    toast1: { title: "🍞 Cinnamon Toast", time: "5 min", age: "beginner", category: "Breakfast" },
    water: { title: "🍋 Lemon Water", time: "3 min", age: "beginner", category: "Drinks" },
    carrots: { title: "🥕 Carrot Sticks", time: "5 min", age: "beginner", category: "Snacks" },
    pretzel: { title: "🥨 Pretzel Bites", time: "5 min", age: "beginner", category: "Snacks" },
    cherry: { title: "🍒 Cherry Tomatoes", time: "3 min", age: "beginner", category: "Snacks" },
    
    // MORE BEGINNER RECIPES
    cereal: { title: "🥣 Cereal Bowl", time: "2 min", age: "beginner", category: "Breakfast", ingredients: ["cereal", "milk"] },
    toast2: { title: "🍞 Jam Toast", time: "3 min", age: "beginner", category: "Breakfast", ingredients: ["bread", "jam", "butter"] },
    fruit: { title: "🍍 Fruit Kabobs", time: "8 min", age: "beginner", category: "Snacks", ingredients: ["grapes", "strawberries", "melon"] },
    pudding: { title: "🍮 Instant Pudding", time: "5 min", age: "beginner", category: "Desserts", ingredients: ["pudding mix", "milk"] },
    goldfish: { title: "🐟 Goldfish Crackers", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["goldfish crackers"] },
    raisins: { title: "🍇 Raisin Box", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["raisins"] },
    string: { title: "🧀 String Cheese", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["string cheese"] },
    graham: { title: "🍪 Graham Crackers", time: "2 min", age: "beginner", category: "Snacks", ingredients: ["graham crackers", "honey"] },
    popsicle: { title: "🍧 Fruit Popsicle", time: "5 min", age: "beginner", category: "Desserts", ingredients: ["fruit juice", "popsicle molds"] },
    animal: { title: "🐻 Animal Crackers", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["animal crackers"] },
    applesauce: { title: "🍎 Applesauce Cup", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["applesauce"] },
    teddy: { title: "🧸 Teddy Grahams", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["teddy grahams"] },
    fruit2: { title: "🍓 Fruit Leather", time: "2 min", age: "beginner", category: "Snacks", ingredients: ["fruit leather"] },
    veggie: { title: "🥕 Veggie Straws", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["veggie straws"] },
    cheese2: { title: "🧀 Cheese Cubes", time: "3 min", age: "beginner", category: "Snacks", ingredients: ["cheese", "crackers"] },
    nuts: { title: "🥜 Nut Butter Crackers", time: "3 min", age: "beginner", category: "Snacks", ingredients: ["crackers", "peanut butter"] },
    rice2: { title: "🍚 Rice Cakes", time: "2 min", age: "beginner", category: "Snacks", ingredients: ["rice cakes", "jam"] },
    frozen: { title: "🍓 Frozen Berries", time: "1 min", age: "beginner", category: "Snacks", ingredients: ["frozen berries"] },
    mini: { title: "🥨 Mini Muffins", time: "2 min", age: "beginner", category: "Snacks", ingredients: ["mini muffins"] },

    // INTERMEDIATE RECIPES (Ages 7-9) - 17 recipes
    sandwich: { title: "🥪 Super Easy Sandwich", time: "8 min", age: "intermediate", category: "Lunch", ingredients: ["bread", "cheese", "ham", "lettuce", "tomato"] },
    salad: { title: "🌈 Rainbow Fruit Salad", time: "12 min", age: "intermediate", category: "Healthy", ingredients: ["apple", "banana", "strawberries", "blueberries", "orange"] },
    cookies: { title: "🍪 No-Bake Energy Balls", time: "15 min", age: "intermediate", category: "Desserts", ingredients: ["oats", "peanut butter", "honey", "chocolate chips"] },
    pizza: { title: "🍕 Mini Pizzas", time: "15 min", age: "intermediate", category: "Lunch", ingredients: ["muffins", "pizza sauce", "cheese", "pepperoni"] },
    pasta: { title: "🍝 Cheesy Pasta", time: "12 min", age: "intermediate", category: "Dinner", ingredients: ["pasta", "cheese", "butter", "milk"] },
    wrap: { title: "🌯 Rainbow Veggie Wrap", time: "10 min", age: "intermediate", category: "Lunch", ingredients: ["tortilla", "cream cheese", "carrots", "cucumber", "lettuce"] },
    quesadilla: { title: "🌮 Cheese Quesadilla", time: "10 min", age: "intermediate", category: "Lunch" },
    soup: { title: "🍲 Easy Tomato Soup", time: "15 min", age: "intermediate", category: "Dinner" },
    salad2: { title: "🥗 Tuna Salad", time: "10 min", age: "intermediate", category: "Lunch" },
    rice: { title: "🍚 Fried Rice", time: "15 min", age: "intermediate", category: "Dinner" },
    nachos: { title: "🧀 Loaded Nachos", time: "10 min", age: "intermediate", category: "Snacks" },
    bagel: { title: "🥯 Pizza Bagel", time: "8 min", age: "intermediate", category: "Breakfast" },
    dip: { title: "🥑 Guacamole Dip", time: "10 min", age: "intermediate", category: "Snacks" },
    eggs: { title: "🍳 Scrambled Eggs", time: "8 min", age: "intermediate", category: "Breakfast" },
    hotdog: { title: "🌭 Mini Hot Dogs", time: "10 min", age: "intermediate", category: "Lunch" },
    popcorn: { title: "🍿 Flavored Popcorn", time: "8 min", age: "intermediate", category: "Snacks" },
    smoothie2: { title: "🥤 Green Smoothie", time: "8 min", age: "intermediate", category: "Drinks" },
    
    // MORE INTERMEDIATE RECIPES
    grilled: { title: "🥪 Grilled Cheese", time: "10 min", age: "intermediate", category: "Lunch", ingredients: ["bread", "cheese", "butter"] },
    salad3: { title: "🥗 Caesar Salad", time: "12 min", age: "intermediate", category: "Healthy", ingredients: ["lettuce", "croutons", "parmesan", "dressing"] },
    tacos2: { title: "🌮 Soft Tacos", time: "15 min", age: "intermediate", category: "Dinner", ingredients: ["tortillas", "ground beef", "cheese", "lettuce"] },
    burritos: { title: "🌯 Bean Burritos", time: "12 min", age: "intermediate", category: "Lunch", ingredients: ["tortillas", "beans", "cheese", "rice"] },
    mac: { title: "🧀 Mac and Cheese", time: "15 min", age: "intermediate", category: "Dinner", ingredients: ["macaroni", "cheese sauce", "milk"] },
    chicken2: { title: "🍗 Chicken Nuggets", time: "12 min", age: "intermediate", category: "Lunch", ingredients: ["chicken nuggets", "dipping sauce"] },
    fish: { title: "🐟 Fish Sticks", time: "15 min", age: "intermediate", category: "Dinner", ingredients: ["fish sticks", "tartar sauce"] },
    spaghetti: { title: "🍝 Spaghetti", time: "18 min", age: "intermediate", category: "Dinner", ingredients: ["spaghetti", "tomato sauce", "parmesan"] },
    meatballs: { title: "🍝 Spaghetti & Meatballs", time: "20 min", age: "intermediate", category: "Dinner", ingredients: ["spaghetti", "meatballs", "sauce"] },
    chili: { title: "🌶️ Easy Chili", time: "25 min", age: "intermediate", category: "Dinner", ingredients: ["beans", "tomatoes", "ground beef", "spices"] },
    corn: { title: "🌽 Corn on the Cob", time: "10 min", age: "intermediate", category: "Sides", ingredients: ["corn", "butter", "salt"] },
    potatoes: { title: "🥔 Mashed Potatoes", time: "20 min", age: "intermediate", category: "Sides", ingredients: ["potatoes", "butter", "milk"] },
    chicken3: { title: "🍗 Chicken Salad", time: "15 min", age: "intermediate", category: "Lunch", ingredients: ["chicken", "mayo", "celery", "bread"] },
    pizza2: { title: "🍕 Pita Pizza", time: "12 min", age: "intermediate", category: "Lunch", ingredients: ["pita bread", "sauce", "cheese", "toppings"] },
    wraps2: { title: "🌯 Turkey Wraps", time: "8 min", age: "intermediate", category: "Lunch", ingredients: ["tortilla", "turkey", "cheese", "lettuce"] },
    soup2: { title: "🍲 Chicken Noodle Soup", time: "15 min", age: "intermediate", category: "Dinner", ingredients: ["chicken broth", "noodles", "chicken", "vegetables"] },
    fries: { title: "🍟 Baked Fries", time: "25 min", age: "intermediate", category: "Sides", ingredients: ["potatoes", "oil", "salt"] },
    salad4: { title: "🥗 Garden Salad", time: "10 min", age: "intermediate", category: "Healthy", ingredients: ["mixed greens", "tomatoes", "cucumbers", "dressing"] },

    // ADVANCED RECIPES (Ages 10+) - 16 recipes
    pancakes: { title: "🥞 Fluffy Pancakes", time: "25 min", age: "advanced", category: "Breakfast", ingredients: ["flour", "sugar", "baking powder", "milk", "egg", "butter"] },
    muffins: { title: "🧁 Banana Muffins", time: "35 min", age: "advanced", category: "Desserts", ingredients: ["bananas", "butter", "sugar", "egg", "flour"] },
    toast: { title: "🍞 Cinnamon French Toast", time: "18 min", age: "advanced", category: "Breakfast", ingredients: ["bread", "eggs", "milk", "cinnamon", "sugar"] },
    cookies2: { title: "🍪 Chocolate Chip Cookies", time: "30 min", age: "advanced", category: "Desserts" },
    cake: { title: "🎂 Mug Cake", time: "15 min", age: "advanced", category: "Desserts" },
    bread: { title: "🍞 No-Knead Bread", time: "45 min", age: "advanced", category: "Baking" },
    stir: { title: "🥘 Veggie Stir Fry", time: "20 min", age: "advanced", category: "Dinner" },
    chicken: { title: "🍗 Baked Chicken", time: "40 min", age: "advanced", category: "Dinner" },
    pie: { title: "🥧 Mini Fruit Pies", time: "35 min", age: "advanced", category: "Desserts" },
    lasagna: { title: "🍝 Mini Lasagna", time: "45 min", age: "advanced", category: "Dinner" },
    burger: { title: "🍔 Homemade Burgers", time: "25 min", age: "advanced", category: "Dinner" },
    waffles: { title: "🧇 Homemade Waffles", time: "20 min", age: "advanced", category: "Breakfast" },
    brownies: { title: "🍫 Fudgy Brownies", time: "40 min", age: "advanced", category: "Desserts" },
    tacos: { title: "🌮 Fish Tacos", time: "25 min", age: "advanced", category: "Dinner" },
    casserole: { title: "🥘 Tuna Casserole", time: "35 min", age: "advanced", category: "Dinner" },
    donuts: { title: "🍩 Baked Donuts", time: "30 min", age: "advanced", category: "Desserts" },
    
    // MORE ADVANCED RECIPES
    pizza3: { title: "🍕 Homemade Pizza", time: "45 min", age: "advanced", category: "Dinner", ingredients: ["pizza dough", "sauce", "cheese", "toppings"] },
    cookies3: { title: "🍪 Sugar Cookies", time: "35 min", age: "advanced", category: "Desserts", ingredients: ["flour", "sugar", "butter", "eggs"] },
    cupcakes: { title: "🧁 Vanilla Cupcakes", time: "40 min", age: "advanced", category: "Desserts", ingredients: ["flour", "sugar", "eggs", "butter", "vanilla"] },
    soup3: { title: "🍲 Vegetable Soup", time: "35 min", age: "advanced", category: "Dinner", ingredients: ["vegetables", "broth", "herbs", "pasta"] },
    roast: { title: "🍖 Pot Roast", time: "60 min", age: "advanced", category: "Dinner", ingredients: ["beef roast", "vegetables", "broth", "seasonings"] },
    salmon: { title: "🐟 Baked Salmon", time: "25 min", age: "advanced", category: "Dinner", ingredients: ["salmon", "lemon", "herbs", "olive oil"] },
    risotto: { title: "🍚 Mushroom Risotto", time: "40 min", age: "advanced", category: "Dinner", ingredients: ["rice", "mushrooms", "broth", "parmesan"] },
    quiche: { title: "🥚 Mini Quiche", time: "35 min", age: "advanced", category: "Breakfast", ingredients: ["eggs", "cream", "cheese", "pie crust"] },
    meatloaf: { title: "🍖 Mini Meatloaf", time: "45 min", age: "advanced", category: "Dinner", ingredients: ["ground beef", "breadcrumbs", "eggs", "ketchup"] },
    stuffed: { title: "🥒 Stuffed Peppers", time: "50 min", age: "advanced", category: "Dinner", ingredients: ["bell peppers", "rice", "ground beef", "cheese"] },
    enchiladas: { title: "🌯 Chicken Enchiladas", time: "40 min", age: "advanced", category: "Dinner", ingredients: ["tortillas", "chicken", "sauce", "cheese"] },
    shepherd: { title: "🥔 Shepherd's Pie", time: "50 min", age: "advanced", category: "Dinner", ingredients: ["ground lamb", "vegetables", "mashed potatoes"] },
    steak: { title: "🥩 Grilled Steak", time: "20 min", age: "advanced", category: "Dinner", ingredients: ["steak", "seasonings", "butter"] },
    pasta2: { title: "🍝 Chicken Alfredo", time: "30 min", age: "advanced", category: "Dinner", ingredients: ["pasta", "chicken", "alfredo sauce", "parmesan"] },
    fish2: { title: "🐟 Fish Tacos Advanced", time: "30 min", age: "advanced", category: "Dinner", ingredients: ["fish fillets", "tortillas", "cabbage", "lime"] },
    curry: { title: "🍛 Chicken Curry", time: "40 min", age: "advanced", category: "Dinner", ingredients: ["chicken", "curry powder", "coconut milk", "vegetables"] },
    gnocchi: { title: "🍝 Potato Gnocchi", time: "45 min", age: "advanced", category: "Dinner", ingredients: ["potatoes", "flour", "eggs", "sauce"] },
    wellington: { title: "🥩 Beef Wellington Jr", time: "55 min", age: "advanced", category: "Dinner", ingredients: ["beef tenderloin", "puff pastry", "mushrooms"] },
    souffle: { title: "🍰 Cheese Souffle", time: "40 min", age: "advanced", category: "Dinner", ingredients: ["eggs", "cheese", "butter", "flour"] }
};

// Generate recipe cards for specific age group
function generateRecipeCards(ageGroup) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = '';
    
    Object.keys(allRecipes).forEach(key => {
        const recipe = allRecipes[key];
        
        // Only show recipes for selected age group
        if (recipe.age === ageGroup) {
            const card = `
                <div class="recipe-card">
                    <img src="https://via.placeholder.com/300x200/${getRandomColor()}/ffffff?text=${encodeURIComponent(recipe.title.split(' ')[0])}" alt="${recipe.title}">
                    <h3>${recipe.title}</h3>
                    <p>⏰ ${recipe.time} | 🍳 ${recipe.category}</p>
                    <button onclick="showRecipe('${key}')">Let's Cook!</button>
                </div>
            `;
            grid.innerHTML += card;
        }
    });
}

// Random colors for recipe cards
function getRandomColor() {
    const colors = ['ff6b6b', '4ecdc4', '45b7d1', 'f9ca24', '9b59b6', 'e67e22', '2ecc71', 'e74c3c', '8e44ad', '16a085', 'd35400', 'c0392b'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Select age class and show recipes
function selectClass(ageGroup) {
    document.getElementById('classSelection').style.display = 'none';
    document.getElementById('recipeSection').style.display = 'block';
    
    // Update title
    const titles = {
        'beginner': '🐣 Beginner Chef Recipes (Ages 4-6)',
        'intermediate': '🧒 Intermediate Chef Recipes (Ages 7-9)',
        'advanced': '👦 Advanced Chef Recipes (Ages 10+)'
    };
    document.getElementById('selectedClassTitle').textContent = titles[ageGroup];
    
    // Generate recipes for selected class
    generateRecipeCards(ageGroup);
}

// Go back to class selection
function goBack() {
    document.getElementById('classSelection').style.display = 'block';
    document.getElementById('recipeSection').style.display = 'none';
    clearSearch();
}

// Search recipes by name or ingredients
function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.recipe-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const recipeKey = card.querySelector('button').onclick.toString().match(/'([^']+)'/)[1];
        const recipe = allRecipes[recipeKey];
        
        // Check if search term matches title or ingredients
        const matchesTitle = title.includes(searchTerm);
        const matchesIngredients = recipe.ingredients && recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(searchTerm)
        );
        
        if (searchTerm === '' || matchesTitle || matchesIngredients) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Clear search
function clearSearch() {
    document.getElementById('searchInput').value = '';
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
}

// Text-to-Speech variables
let currentSpeech = null;
let isReading = false;

// Clean text by removing emojis and symbols
function cleanText(text) {
    return text.replace(/[\u{1F000}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{FE00}-\u{FE0F}]|[\u{200D}]/gu, '').replace(/[⏰👶🧼✂️🚀🎉]/g, '').trim();
}

// Read recipe aloud
function readRecipe() {
    if (isReading) {
        stopReading();
        return;
    }
    
    const recipeContent = document.getElementById('recipeContent');
    const title = cleanText(recipeContent.querySelector('h2').textContent);
    const ingredients = Array.from(recipeContent.querySelectorAll('.ingredients li')).map(li => cleanText(li.textContent)).join(', ');
    const steps = Array.from(recipeContent.querySelectorAll('.steps li')).map(li => cleanText(li.textContent)).join('. ');
    
    const textToRead = `${title}. Ingredients you need: ${ingredients}. Cooking steps: ${steps}`;
    
    currentSpeech = new SpeechSynthesisUtterance(textToRead);
    currentSpeech.rate = 0.8;
    currentSpeech.pitch = 1;
    currentSpeech.volume = 1;
    
    currentSpeech.onstart = function() {
        isReading = true;
        document.getElementById('readRecipeBtn').style.display = 'none';
        document.getElementById('stopReadingBtn').style.display = 'inline-block';
    };
    
    currentSpeech.onend = function() {
        isReading = false;
        document.getElementById('readRecipeBtn').style.display = 'inline-block';
        document.getElementById('stopReadingBtn').style.display = 'none';
    };
    
    speechSynthesis.speak(currentSpeech);
}

// Stop reading
function stopReading() {
    if (currentSpeech) {
        speechSynthesis.cancel();
        isReading = false;
        isStepByStep = false;
        document.getElementById('readRecipeBtn').style.display = 'inline-block';
        document.getElementById('stopReadingBtn').style.display = 'none';
        showAllSteps();
    }
}

// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownControls');
    const btn = document.querySelector('.dropdown-btn');
    
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
        btn.textContent = '▲ Less Options';
    } else {
        dropdown.style.display = 'none';
        btn.textContent = '▼ More Options';
    }
}

// Read ingredients only
function readIngredients() {
    if (isReading) stopReading();
    
    const recipeContent = document.getElementById('recipeContent');
    const ingredients = Array.from(recipeContent.querySelectorAll('.ingredients li')).map(li => cleanText(li.textContent)).join(', ');
    
    const textToRead = `Ingredients you need: ${ingredients}`;
    speakText(textToRead);
}

// Read steps only
function readSteps() {
    if (isReading) stopReading();
    
    const recipeContent = document.getElementById('recipeContent');
    const steps = Array.from(recipeContent.querySelectorAll('.steps li')).map(li => cleanText(li.textContent)).join('. ');
    
    const textToRead = `Cooking steps: ${steps}`;
    speakText(textToRead);
}

// Read step by step with pauses
let currentStepIndex = 0;
let allSteps = [];
let isStepByStep = false;

function readStepByStep() {
    if (isReading) stopReading();
    
    const recipeContent = document.getElementById('recipeContent');
    allSteps = Array.from(recipeContent.querySelectorAll('.steps li')).map(li => cleanText(li.textContent));
    currentStepIndex = 0;
    isStepByStep = true;
    
    // Hide all steps initially
    hideAllSteps();
    
    if (allSteps.length > 0) {
        readNextStep();
    }
}

// Hide all steps initially
function hideAllSteps() {
    const steps = document.querySelectorAll('.steps li');
    steps.forEach(step => {
        step.style.display = 'none';
    });
}

function readNextStep() {
    if (currentStepIndex < allSteps.length) {
        // Show and highlight current step
        showCurrentStep(currentStepIndex);
        
        const stepText = `Step ${currentStepIndex + 1}: ${allSteps[currentStepIndex]}`;
        
        currentSpeech = new SpeechSynthesisUtterance(stepText);
        const settings = JSON.parse(localStorage.getItem('cookKidsSettings') || '{}');
        const voices = speechSynthesis.getVoices();
        
        currentSpeech.rate = settings.readingSpeed || 0.7;
        if (voices[settings.selectedVoice]) {
            currentSpeech.voice = voices[settings.selectedVoice];
        }
        currentSpeech.pitch = 1;
        currentSpeech.volume = 1;
        
        currentSpeech.onstart = function() {
            isReading = true;
            document.getElementById('readRecipeBtn').style.display = 'none';
            document.getElementById('stopReadingBtn').style.display = 'inline-block';
        };
        
        currentSpeech.onend = function() {
            currentStepIndex++;
            if (currentStepIndex < allSteps.length) {
                setTimeout(() => {
                    if (isReading) readNextStep();
                }, (settings.stepDelay || 1.5) * 1000); // User-defined pause between steps
            } else {
                isReading = false;
                isStepByStep = false;
                document.getElementById('readRecipeBtn').style.display = 'inline-block';
                document.getElementById('stopReadingBtn').style.display = 'none';
                showAllSteps();
            }
        };
        
        speechSynthesis.speak(currentSpeech);
    }
}

// Show current step with highlighting and manual scroll down
function showCurrentStep(stepIndex) {
    const steps = document.querySelectorAll('.steps li');
    if (steps[stepIndex]) {
        steps[stepIndex].style.display = 'block';
        steps[stepIndex].classList.add('reading-current');
        
        // Manual scroll down - simple and direct
        const modal = document.querySelector('.modal-content');
        const scrollAmount = stepIndex * 80; // 80px per step
        
        modal.scrollTo({
            top: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Show all steps (when reading is complete)
function showAllSteps() {
    const steps = document.querySelectorAll('.steps li');
    steps.forEach(step => {
        step.style.display = 'block';
        step.classList.remove('reading-current');
    });
}



// Helper function to speak text
function speakText(text) {
    const settings = JSON.parse(localStorage.getItem('cookKidsSettings') || '{}');
    const voices = speechSynthesis.getVoices();
    
    currentSpeech = new SpeechSynthesisUtterance(text);
    currentSpeech.rate = settings.readingSpeed || 0.8;
    currentSpeech.pitch = 1;
    currentSpeech.volume = 1;
    
    if (voices[settings.selectedVoice]) {
        currentSpeech.voice = voices[settings.selectedVoice];
    }
    
    currentSpeech.onstart = function() {
        isReading = true;
        document.getElementById('readRecipeBtn').style.display = 'none';
        document.getElementById('stopReadingBtn').style.display = 'inline-block';
    };
    
    currentSpeech.onend = function() {
        isReading = false;
        document.getElementById('readRecipeBtn').style.display = 'inline-block';
        document.getElementById('stopReadingBtn').style.display = 'none';
    };
    
    speechSynthesis.speak(currentSpeech);
}

