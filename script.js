const recipesByAge = {
    beginner: {
        sandwich: { title: "🥪 Easy Sandwich", time: "5 min", age: "Ages 4-6", ingredients: ["2 bread slices 🍞", "1 cheese slice 🧀", "Ham 🥩", "Butter 🧈"], steps: ["Wash hands! 🧼", "Butter bread", "Add cheese and ham", "Close sandwich", "Enjoy! 😋"] },
        smoothie: { title: "🥤 Banana Smoothie", time: "5 min", age: "Ages 4-6", ingredients: ["1 banana 🍌", "1/2 cup milk 🥛", "Honey 🍯"], steps: ["Wash hands! 🧼", "Peel banana", "Ask adult to blend", "Pour and drink! 🥤"] },
        apple: { title: "🍎 Apple Bites", time: "3 min", age: "Ages 4-6", ingredients: ["1 apple 🍎", "Peanut butter 🥜"], steps: ["Wash hands! 🧼", "Ask adult to cut apple", "Spread peanut butter", "Eat! 😋"] },
        cereal: { title: "🥣 Fun Cereal Bowl", time: "2 min", age: "Ages 4-6", ingredients: ["Cereal 🥣", "Milk 🥛", "Banana slices 🍌"], steps: ["Wash hands! 🧼", "Pour cereal in bowl", "Add milk", "Top with banana", "Eat! 😋"] },
        toast: { title: "🍞 Simple Toast", time: "3 min", age: "Ages 4-6", ingredients: ["1 bread slice 🍞", "Butter 🧈", "Jam 🍓"], steps: ["Wash hands! 🧼", "Ask adult to toast bread", "Spread butter", "Add jam", "Enjoy! 😋"] },
        yogurt: { title: "🍯 Yogurt Cup", time: "2 min", age: "Ages 4-6", ingredients: ["Yogurt cup 🥛", "Berries 🍓", "Granola"], steps: ["Wash hands! 🧼", "Open yogurt", "Add berries on top", "Sprinkle granola", "Mix and eat! 😋"] },
        crackers: { title: "🧀 Cheese Crackers", time: "2 min", age: "Ages 4-6", ingredients: ["Crackers 🍪", "Cheese slices 🧀"], steps: ["Wash hands! 🧼", "Place cheese on crackers", "Make little stacks", "Eat your snack! 😋"] },
        banana: { title: "🍌 Banana Roll", time: "3 min", age: "Ages 4-6", ingredients: ["1 banana 🍌", "Peanut butter 🥜", "Bread 🍞"], steps: ["Wash hands! 🧼", "Spread peanut butter on bread", "Place banana on bread", "Roll up bread", "Eat! 😋"] },
        grapes: { title: "🍇 Grape Kabobs", time: "5 min", age: "Ages 4-6", ingredients: ["Grapes 🍇", "Cheese cubes 🧀", "Toothpicks"], steps: ["Wash hands and grapes! 🧼", "Ask adult to help with toothpicks", "Put grape and cheese on stick", "Make more kabobs", "Enjoy! 😋"] },
        milk: { title: "🥛 Chocolate Milk", time: "2 min", age: "Ages 4-6", ingredients: ["Milk 🥛", "Chocolate syrup 🍫"], steps: ["Wash hands! 🧼", "Pour milk in glass", "Add chocolate syrup", "Stir with spoon", "Drink! 😋"] },
        berries: { title: "🍓 Berry Bowl", time: "3 min", age: "Ages 4-6", ingredients: ["Strawberries 🍓", "Blueberries 🫐", "Whipped cream"], steps: ["Wash hands and berries! 🧼", "Put berries in bowl", "Add whipped cream on top", "Mix gently", "Eat! 😋"] },
        pretzel: { title: "🥨 Pretzel Dip", time: "2 min", age: "Ages 4-6", ingredients: ["Pretzels 🥨", "Hummus", "Carrots 🥕"], steps: ["Wash hands! 🧼", "Put hummus in small bowl", "Dip pretzels in hummus", "Dip carrots too", "Enjoy! 😋"] },
        orange: { title: "🍊 Orange Slices", time: "3 min", age: "Ages 4-6", ingredients: ["1 orange 🍊"], steps: ["Wash hands and orange! 🧼", "Ask adult to peel orange", "Separate into pieces", "Eat the juicy slices! 😋"] },
        muffin: { title: "🧁 Muffin Treat", time: "2 min", age: "Ages 4-6", ingredients: ["1 muffin 🧁", "Butter 🧈"], steps: ["Wash hands! 🧼", "Ask adult to cut muffin in half", "Spread butter on both halves", "Put back together", "Enjoy! 😋"] },
        raisins: { title: "🍇 Raisin Snack Mix", time: "3 min", age: "Ages 4-6", ingredients: ["Raisins 🍇", "Cheerios 🥣", "Goldfish crackers"], steps: ["Wash hands! 🧼", "Put all ingredients in bowl", "Mix with clean hands", "Scoop into small cups", "Snack time! 😋"] },
        waffle: { title: "🧇 Easy Waffle", time: "3 min", age: "Ages 4-6", ingredients: ["Frozen waffle 🧇", "Syrup 🍯", "Butter 🧈"], steps: ["Wash hands! 🧼", "Ask adult to toast waffle", "Put butter on warm waffle", "Pour syrup on top", "Cut and eat! 😋"] },
        cheese: { title: "🧀 Cheese Cubes", time: "2 min", age: "Ages 4-6", ingredients: ["Cheese block 🧀", "Crackers 🍪"], steps: ["Wash hands! 🧼", "Ask adult to cut cheese into cubes", "Put cheese on crackers", "Make little sandwiches", "Eat! 😋"] },
        juice: { title: "🧃 Fruit Juice Mix", time: "2 min", age: "Ages 4-6", ingredients: ["Apple juice 🍎", "Orange juice 🍊"], steps: ["Wash hands! 🧼", "Pour apple juice in cup", "Add a little orange juice", "Stir with spoon", "Drink! 😋"] },
        bagel: { title: "🥯 Mini Bagel", time: "3 min", age: "Ages 4-6", ingredients: ["Mini bagel 🥯", "Cream cheese"], steps: ["Wash hands! 🧼", "Ask adult to cut bagel in half", "Spread cream cheese on both halves", "Put halves together", "Enjoy! 😋"] },
        cookie: { title: "🍪 Cookie Sandwich", time: "2 min", age: "Ages 4-6", ingredients: ["2 cookies 🍪", "Frosting"], steps: ["Wash hands! 🧼", "Spread frosting on one cookie", "Put second cookie on top", "Press gently", "Eat your treat! 😋"] }
    },
    intermediate: {
        pancakes: { title: "🥞 Easy Pancakes", time: "20 min", age: "Ages 7-9", ingredients: ["1 cup flour 🌾", "1 cup milk 🥛", "1 egg 🥚", "Sugar", "Butter 🧈"], steps: ["Wash hands! 🧼", "Mix ingredients", "Ask adult to heat pan", "Pour batter", "Flip when bubbly", "Serve! 🍯"] },
        pizza: { title: "🍕 Mini Pizzas", time: "15 min", age: "Ages 7-9", ingredients: ["English muffins 🍞", "Pizza sauce 🍅", "Cheese 🧀", "Pepperoni 🍕"], steps: ["Wash hands! 🧼", "Preheat oven with adult", "Spread sauce", "Add cheese and toppings", "Bake with help", "Cool and eat! 🎉"] },
        wrap: { title: "🥙 Veggie Wrap", time: "10 min", age: "Ages 7-9", ingredients: ["Tortilla 🥙", "Cream cheese", "Lettuce 🥬", "Carrots 🥕", "Turkey 🥩"], steps: ["Wash hands! 🧼", "Spread cream cheese", "Add veggies", "Add turkey", "Roll tightly", "Cut and enjoy! 🎉"] },
        quesadilla: { title: "🥙 Cheese Quesadilla", time: "10 min", age: "Ages 7-9", ingredients: ["2 tortillas 🥙", "Shredded cheese 🧀", "Butter 🧈"], steps: ["Wash hands! 🧼", "Sprinkle cheese on tortilla", "Top with second tortilla", "Ask adult to cook in pan", "Cut into triangles", "Eat warm! 🎉"] },
        salad: { title: "🥗 Garden Salad", time: "15 min", age: "Ages 7-9", ingredients: ["Lettuce 🥬", "Tomatoes 🍅", "Cucumbers 🥒", "Carrots 🥕", "Dressing"], steps: ["Wash hands and veggies! 🧼", "Tear lettuce into pieces", "Ask adult to cut veggies", "Mix all in bowl", "Add dressing", "Toss and serve! 🎉"] },
        pita_pocket: { title: "🥙 Pita Pocket", time: "10 min", age: "Ages 7-9", ingredients: ["Pita bread 🥙", "Hummus", "Cucumber 🥒", "Tomato 🍅", "Lettuce 🥬"], steps: ["Wash hands and veggies! 🧼", "Cut pita in half", "Spread hummus inside", "Add sliced veggies", "Stuff gently", "Eat fresh! 🎉"] },
        french_toast: { title: "🍞 French Toast", time: "15 min", age: "Ages 7-9", ingredients: ["2 bread slices 🍞", "1 egg 🥚", "Milk 🥛", "Cinnamon", "Butter 🧈"], steps: ["Wash hands! 🧼", "Beat egg and milk", "Dip bread in mixture", "Ask adult to cook in pan", "Flip when golden", "Serve with syrup! 🍯"] },
        english_muffin: { title: "🍞 English Muffin Pizza", time: "8 min", age: "Ages 7-9", ingredients: ["English muffins 🍞", "Pizza sauce 🍅", "Cheese 🧀", "Mini pepperoni"], steps: ["Wash hands! 🧼", "Split muffins in half", "Spread sauce", "Add cheese and pepperoni", "Toast until melted", "Cool and eat! 🎉"] },
        fruit_kabobs: { title: "🍓 Fruit Kabobs", time: "15 min", age: "Ages 7-9", ingredients: ["Strawberries 🍓", "Grapes 🍇", "Pineapple 🍍", "Melon", "Skewers"], steps: ["Wash hands and fruit! 🧼", "Ask adult to cut fruit", "Thread fruit on skewers", "Make colorful patterns", "Arrange on plate", "Enjoy! 🎉"] },
        bagel_pizza: { title: "🥯 Bagel Pizza", time: "12 min", age: "Ages 7-9", ingredients: ["Bagel halves 🥯", "Pizza sauce 🍅", "Mozzarella 🧀", "Toppings"], steps: ["Wash hands! 🧼", "Spread sauce on bagels", "Sprinkle cheese", "Add favorite toppings", "Bake with adult help", "Cool and eat! 🎉"] },
        pasta_salad: { title: "🍝 Pasta Salad", time: "20 min", age: "Ages 7-9", ingredients: ["Cooked pasta 🍝", "Cherry tomatoes 🍅", "Cheese cubes 🧀", "Italian dressing"], steps: ["Wash hands! 🧼", "Cook pasta with adult", "Cool pasta completely", "Add tomatoes and cheese", "Pour dressing", "Mix and chill! 🎉"] },
        tuna_melt: { title: "🐟 Tuna Melt", time: "15 min", age: "Ages 7-9", ingredients: ["Tuna 🐟", "Mayo", "Bread 🍞", "Cheese 🧀"], steps: ["Wash hands! 🧼", "Mix tuna and mayo", "Spread on bread", "Top with cheese", "Ask adult to toast", "Eat warm! 🎉"] },
        veggie_dip: { title: "🥕 Veggie Dip", time: "10 min", age: "Ages 7-9", ingredients: ["Ranch dressing", "Carrots 🥕", "Celery", "Bell peppers 🫑"], steps: ["Wash hands and veggies! 🧼", "Ask adult to cut veggies", "Arrange on plate", "Put dip in center", "Dip and crunch! 🎉"] },
        grilled_cheese: { title: "🧀 Grilled Cheese", time: "10 min", age: "Ages 7-9", ingredients: ["2 bread slices 🍞", "Cheese slices 🧀", "Butter 🧈"], steps: ["Wash hands! 🧼", "Butter outside of bread", "Put cheese inside", "Ask adult to grill", "Flip when golden", "Cut and serve! 🎉"] },
        fruit_smoothie: { title: "🥤 Berry Smoothie", time: "8 min", age: "Ages 7-9", ingredients: ["Mixed berries 🍓", "Yogurt 🥛", "Milk 🥛", "Honey 🍯"], steps: ["Wash hands! 🧼", "Add all to blender", "Ask adult to blend", "Taste and adjust", "Pour into glasses", "Drink up! 🎉"] },
        nachos: { title: "🧀 Easy Nachos", time: "8 min", age: "Ages 7-9", ingredients: ["Tortilla chips", "Shredded cheese 🧀", "Salsa 🍅"], steps: ["Wash hands! 🧼", "Spread chips on plate", "Sprinkle cheese on top", "Microwave 30 seconds", "Add salsa", "Share and enjoy! 🎉"] },
        banana_bread: { title: "🍌 Banana Bread", time: "15 min prep", age: "Ages 7-9", ingredients: ["Mashed bananas 🍌", "Flour 🌾", "Sugar", "Egg 🥚", "Butter 🧈"], steps: ["Wash hands! 🧼", "Mash bananas well", "Mix all ingredients", "Pour in loaf pan", "Bake with adult", "Cool before slicing! 🎉"] },
        chicken_wrap: { title: "🍗 Chicken Wrap", time: "12 min", age: "Ages 7-9", ingredients: ["Cooked chicken 🍗", "Tortilla 🥙", "Lettuce 🥬", "Tomato 🍅", "Ranch"], steps: ["Wash hands! 🧼", "Warm tortilla slightly", "Add chicken and veggies", "Drizzle with ranch", "Roll tightly", "Cut in half! 🎉"] },
        apple_slices: { title: "🍎 Cinnamon Apples", time: "10 min", age: "Ages 7-9", ingredients: ["Apples 🍎", "Cinnamon", "Sugar", "Butter 🧈"], steps: ["Wash hands and apples! 🧼", "Ask adult to slice apples", "Sprinkle cinnamon and sugar", "Add small butter pieces", "Microwave 2 minutes", "Stir and enjoy! 🎉"] },
        cereal_bars: { title: "🥣 Cereal Bars", time: "15 min", age: "Ages 7-9", ingredients: ["Cereal 🥣", "Marshmallows", "Butter 🧈", "Vanilla"], steps: ["Wash hands! 🧼", "Ask adult to melt marshmallows", "Mix in cereal", "Press into pan", "Cool completely", "Cut into bars! 🎉"] }
    },
    advanced: {
        muffins: { title: "🧁 Banana Muffins", time: "30 min", age: "Ages 10+", ingredients: ["2 bananas 🍌", "Butter 🧈", "Sugar", "1 egg 🥚", "Flour 🌾"], steps: ["Wash hands! 🧼", "Preheat oven 350°F", "Mash bananas", "Mix all ingredients", "Fill muffin cups", "Bake 20-25 min", "Cool completely", "Enjoy! 🎉"] },
        pasta: { title: "🍝 Cheesy Pasta", time: "15 min", age: "Ages 10+", ingredients: ["Pasta 🍝", "Cheese 🧀", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Boil water safely", "Cook pasta", "Drain carefully", "Add cheese, butter, milk", "Stir until creamy", "Serve hot! 🎉"] },
        cookies: { title: "🍪 No-Bake Cookies", time: "20 min", age: "Ages 10+", ingredients: ["Oats 🌾", "Peanut butter 🥜", "Honey 🍯", "Chocolate chips 🍫"], steps: ["Wash hands! 🧼", "Mix all ingredients", "Stir well", "Chill 30 minutes", "Roll into balls", "Refrigerate until firm", "Enjoy! 🎉"] },
        stir_fry: { title: "🥘 Veggie Stir Fry", time: "20 min", age: "Ages 10+", ingredients: ["Mixed vegetables 🥘", "Oil", "Soy sauce", "Rice 🍚", "Garlic"], steps: ["Wash hands and veggies! 🧼", "Cook rice first", "Heat oil in pan", "Add garlic", "Stir fry vegetables", "Add soy sauce", "Serve over rice! 🎉"] },
        waffles: { title: "🧇 Homemade Waffles", time: "25 min", age: "Ages 10+", ingredients: ["Flour 🌾", "Baking powder", "Sugar", "Salt", "Milk 🥛", "Eggs 🥚"], steps: ["Wash hands! 🧼", "Mix dry ingredients", "Beat eggs and milk", "Combine wet and dry", "Heat waffle iron", "Pour batter", "Cook until golden", "Serve with syrup! 🎉"] },
        chicken_salad: { title: "🍗 Chicken Salad", time: "15 min", age: "Ages 10+", ingredients: ["Cooked chicken 🍗", "Mayo", "Celery", "Grapes 🍇", "Bread 🍞"], steps: ["Wash hands! 🧼", "Shred chicken", "Dice celery", "Cut grapes in half", "Mix with mayo", "Season to taste", "Serve on bread! 🎉"] },
        homemade_pizza: { title: "🍕 Homemade Pizza", time: "45 min", age: "Ages 10+", ingredients: ["Pizza dough", "Sauce 🍅", "Mozzarella 🧀", "Toppings", "Olive oil"], steps: ["Wash hands! 🧼", "Preheat oven 450°F", "Roll out dough", "Spread sauce", "Add cheese and toppings", "Bake 12-15 minutes", "Cool slightly", "Slice and enjoy! 🎉"] },
        acai_bowl: { title: "🥤 Acai Bowl", time: "15 min", age: "Ages 10+", ingredients: ["Frozen acai", "Banana 🍌", "Berries 🍓", "Granola", "Coconut"], steps: ["Wash hands! 🧼", "Blend acai and banana", "Pour into bowl", "Arrange toppings", "Take a photo", "Eat immediately! 🎉"] },
        quesadilla_deluxe: { title: "🥙 Loaded Quesadilla", time: "18 min", age: "Ages 10+", ingredients: ["Large tortillas 🥙", "Cheese 🧀", "Chicken 🍗", "Peppers 🫑", "Onions"], steps: ["Wash hands! 🧼", "Cook chicken and veggies", "Layer on tortilla", "Add cheese", "Top with second tortilla", "Cook until crispy", "Cut into wedges! 🎉"] },
        bread_rolls: { title: "🍞 Dinner Rolls", time: "2 hours", age: "Ages 10+", ingredients: ["Flour 🌾", "Yeast", "Sugar", "Salt", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Mix yeast and warm milk", "Add flour and ingredients", "Knead dough", "Let rise 1 hour", "Shape into rolls", "Rise again", "Bake until golden! 🎉"] },
        fried_rice: { title: "🍚 Fried Rice", time: "20 min", age: "Ages 10+", ingredients: ["Cooked rice 🍚", "Eggs 🥚", "Vegetables 🥕", "Soy sauce", "Oil"], steps: ["Wash hands! 🧼", "Scramble eggs", "Heat oil in pan", "Add cold rice", "Stir in vegetables", "Add soy sauce", "Mix in eggs", "Serve hot! 🎉"] },
        chocolate_cake: { title: "🎂 Chocolate Cake", time: "1 hour", age: "Ages 10+", ingredients: ["Flour 🌾", "Cocoa powder", "Sugar", "Eggs 🥚", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Preheat oven 350°F", "Mix dry ingredients", "Beat wet ingredients", "Combine mixtures", "Pour into pans", "Bake 30 minutes", "Cool and frost! 🎉"] },
        soup: { title: "🍲 Vegetable Soup", time: "30 min", age: "Ages 10+", ingredients: ["Mixed vegetables 🥕", "Broth", "Onion", "Garlic", "Herbs"], steps: ["Wash hands and veggies! 🧼", "Chop all vegetables", "Sauté onion and garlic", "Add vegetables", "Pour in broth", "Simmer 20 minutes", "Season to taste", "Serve hot! 🎉"] },
        tacos: { title: "🌮 Beef Tacos", time: "25 min", age: "Ages 10+", ingredients: ["Ground beef 🥩", "Taco shells", "Lettuce 🥬", "Tomatoes 🍅", "Cheese 🧀", "Salsa"], steps: ["Wash hands! 🧼", "Brown ground beef", "Season with spices", "Warm taco shells", "Prepare toppings", "Fill shells with meat", "Add toppings", "Enjoy! 🎉"] },
        lasagna: { title: "🍝 Mini Lasagna", time: "45 min", age: "Ages 10+", ingredients: ["Lasagna noodles", "Meat sauce", "Ricotta cheese", "Mozzarella 🧀", "Parmesan"], steps: ["Wash hands! 🧼", "Cook noodles", "Layer sauce and cheese", "Repeat layers", "Top with mozzarella", "Bake 30 minutes", "Let rest 10 minutes", "Slice and serve! 🎉"] },
        stuffed_peppers: { title: "🫑 Stuffed Peppers", time: "40 min", age: "Ages 10+", ingredients: ["Bell peppers 🫑", "Ground meat", "Rice 🍚", "Onion", "Cheese 🧀"], steps: ["Wash hands! 🧼", "Cut tops off peppers", "Cook meat and onion", "Mix with cooked rice", "Stuff peppers", "Top with cheese", "Bake 25 minutes", "Serve hot! 🎉"] },
        chicken_parmesan: { title: "🍗 Chicken Parmesan", time: "35 min", age: "Ages 10+", ingredients: ["Chicken breast 🍗", "Breadcrumbs", "Parmesan cheese", "Marinara sauce", "Mozzarella 🧀"], steps: ["Wash hands! 🧼", "Pound chicken thin", "Coat in breadcrumbs", "Pan fry until golden", "Top with sauce and cheese", "Bake until melted", "Serve with pasta! 🎉"] },
        apple_pie: { title: "🥧 Apple Pie", time: "1.5 hours", age: "Ages 10+", ingredients: ["Pie crust", "Apples 🍎", "Sugar", "Cinnamon", "Butter 🧈"], steps: ["Wash hands and apples! 🧼", "Peel and slice apples", "Mix with sugar and cinnamon", "Fill pie crust", "Add top crust", "Seal edges", "Bake 45 minutes", "Cool before serving! 🎉"] },
        breakfast_burrito: { title: "🌯 Breakfast Burrito", time: "15 min", age: "Ages 10+", ingredients: ["Large tortilla 🥙", "Scrambled eggs 🥚", "Cheese 🧀", "Bacon 🥓", "Hash browns"], steps: ["Wash hands! 🧼", "Cook bacon and hash browns", "Scramble eggs", "Warm tortilla", "Add all fillings", "Roll tightly", "Wrap in foil", "Eat warm! 🎉"] },
        garlic_bread: { title: "🍞 Garlic Bread", time: "15 min", age: "Ages 10+", ingredients: ["French bread 🍞", "Butter 🧈", "Garlic", "Parsley", "Parmesan cheese"], steps: ["Wash hands! 🧼", "Slice bread", "Mix butter, garlic, parsley", "Spread on bread", "Sprinkle cheese", "Wrap in foil", "Bake 10 minutes", "Serve hot! 🎉"] }
    }
};

const recipes = {
    sandwich: {
        title: "🥪 Super Easy Sandwich",
        time: "5 minutes",
        age: "Ages 5+",
        ingredients: [
            "2 slices of bread 🍞",
            "1 slice of cheese 🧀",
            "2 slices of ham or turkey 🥩",
            "1 leaf of lettuce 🥬",
            "1 slice of tomato 🍅",
            "A little butter or mayo 🧈"
        ],
        steps: [
            "Wash your hands! 🧼",
            "Put butter or mayo on one slice of bread",
            "Add the cheese on top",
            "Put the ham or turkey on the cheese",
            "Add lettuce and tomato",
            "Put the other slice of bread on top",
            "Cut in half with help from an adult ✂️",
            "Enjoy your yummy sandwich! 😋"
        ]
    },
    salad: {
        title: "🌈 Rainbow Fruit Salad",
        time: "10 minutes",
        age: "Ages 6+",
        ingredients: [
            "1 red apple 🍎",
            "1 banana 🍌",
            "1 cup strawberries 🍓",
            "1 cup blueberries 🫐",
            "1 orange 🍊",
            "2 tablespoons honey 🍯",
            "1 tablespoon lemon juice 🍋"
        ],
        steps: [
            "Wash your hands and all the fruits! 🧼",
            "Ask an adult to help cut the apple into small pieces",
            "Peel and slice the banana",
            "Cut strawberries in half (with adult help)",
            "Peel the orange and separate into pieces",
            "Put all fruits in a big bowl",
            "Add honey and lemon juice",
            "Mix gently with a big spoon",
            "Taste your colorful creation! 🌈"
        ]
    },
    smoothie: {
        title: "🥤 Banana Berry Smoothie",
        time: "5 minutes",
        age: "Ages 4+",
        ingredients: [
            "1 ripe banana 🍌",
            "1/2 cup frozen berries 🫐",
            "1/2 cup milk 🥛",
            "1 tablespoon honey 🍯",
            "1/4 cup yogurt 🥄",
            "Ice cubes (optional) 🧊"
        ],
        steps: [
            "Wash your hands! 🧼",
            "Peel the banana and break into pieces",
            "Put banana pieces in the blender",
            "Add frozen berries",
            "Pour in the milk and yogurt",
            "Add honey for sweetness",
            "Ask an adult to help with the blender! ⚠️",
            "Blend until smooth and creamy",
            "Pour into a glass and enjoy! 😋"
        ]
    },
    cookies: {
        title: "🍪 No-Bake Energy Balls",
        time: "15 minutes",
        age: "Ages 7+",
        ingredients: [
            "1 cup rolled oats 🌾",
            "1/2 cup peanut butter 🥜",
            "1/3 cup honey 🍯",
            "1/3 cup mini chocolate chips 🍫",
            "1/4 cup ground flaxseed",
            "1 teaspoon vanilla 🍦",
            "Pinch of salt 🧂"
        ],
        steps: [
            "Wash your hands thoroughly! 🧼",
            "Mix all dry ingredients in a large bowl",
            "Add peanut butter, honey, and vanilla",
            "Stir everything together until well mixed",
            "Put the mixture in the fridge for 30 minutes",
            "Roll the mixture into small balls with your hands",
            "Place balls on a plate",
            "Keep in fridge until ready to eat",
            "Enjoy your healthy treats! 🎉"
        ]
    },
    pancakes: {
        title: "🥞 Fluffy Pancakes",
        time: "20 minutes",
        age: "Ages 8+",
        ingredients: [
            "1 cup flour 🌾",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt 🧂",
            "1 cup milk 🥛",
            "1 egg 🥚",
            "2 tablespoons melted butter 🧈",
            "Syrup for serving 🍯"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Mix flour, sugar, baking powder, and salt in a bowl",
            "In another bowl, whisk milk, egg, and melted butter",
            "Pour wet ingredients into dry ingredients",
            "Mix gently until just combined (lumps are okay!)",
            "Ask an adult to heat a pan on medium heat",
            "Pour 1/4 cup batter for each pancake",
            "Cook until bubbles form, then flip with adult help",
            "Serve with syrup and enjoy! 🎉"
        ]
    },
    pizza: {
        title: "🍕 Mini Pizzas",
        time: "15 minutes",
        age: "Ages 6+",
        ingredients: [
            "4 English muffin halves 🍞",
            "1/2 cup pizza sauce 🍅",
            "1 cup shredded cheese 🧀",
            "Pepperoni slices (optional) 🍕",
            "Bell pepper pieces 🥒",
            "Mushrooms (optional) 🍄"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Ask an adult to preheat oven to 375°F",
            "Place muffin halves on a baking sheet",
            "Spread pizza sauce on each muffin half",
            "Sprinkle cheese on top",
            "Add your favorite toppings",
            "Ask an adult to bake for 10-12 minutes",
            "Let cool for 2 minutes before eating",
            "Enjoy your mini pizzas! 🎉"
        ]
    },
    muffins: {
        title: "🧁 Banana Muffins",
        time: "30 minutes",
        age: "Ages 9+",
        ingredients: [
            "2 ripe bananas 🍌",
            "1/3 cup melted butter 🧈",
            "3/4 cup sugar",
            "1 egg 🥚",
            "1 teaspoon vanilla 🍦",
            "1 teaspoon baking soda",
            "Pinch of salt 🧂",
            "1 1/2 cups flour 🌾"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Ask an adult to preheat oven to 350°F",
            "Mash bananas in a large bowl",
            "Mix in melted butter",
            "Add sugar, egg, and vanilla",
            "Mix in baking soda and salt",
            "Add flour and mix until just combined",
            "Fill muffin cups 2/3 full with adult help",
            "Bake 20-25 minutes with adult supervision",
            "Cool and enjoy! 🎉"
        ]
    },
    pasta: {
        title: "🍝 Cheesy Pasta",
        time: "12 minutes",
        age: "Ages 7+",
        ingredients: [
            "2 cups pasta 🍝",
            "1 cup shredded cheese 🧀",
            "2 tablespoons butter 🧈",
            "1/4 cup milk 🥛",
            "Salt and pepper 🧂",
            "Parmesan cheese (optional) 🧀"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Ask an adult to boil water in a large pot",
            "Add pasta and cook according to package directions",
            "Ask adult to drain pasta (save 1/2 cup pasta water)",
            "Add butter to the warm pasta",
            "Add milk and shredded cheese",
            "Stir until cheese melts",
            "Add pasta water if needed to make it creamy",
            "Season with salt and pepper",
            "Enjoy your cheesy pasta! 🎉"
        ]
    },
    toast: {
        title: "🍞 Cinnamon French Toast",
        time: "15 minutes",
        age: "Ages 8+",
        ingredients: [
            "4 slices of bread 🍞",
            "2 eggs 🥚",
            "1/4 cup milk 🥛",
            "1 teaspoon cinnamon",
            "1 tablespoon sugar",
            "1 teaspoon vanilla 🍦",
            "Butter for cooking 🧈",
            "Syrup for serving 🍯"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Crack eggs into a shallow bowl",
            "Add milk, cinnamon, sugar, and vanilla",
            "Whisk everything together",
            "Ask an adult to heat butter in a pan",
            "Dip each bread slice in the egg mixture",
            "Cook in pan until golden brown on both sides",
            "Ask adult to flip when ready",
            "Serve with syrup and enjoy! 🎉"
        ]
    },
    wrap: {
        title: "🥙 Rainbow Veggie Wrap",
        time: "10 minutes",
        age: "Ages 6+",
        ingredients: [
            "1 large tortilla 🥙",
            "2 tablespoons cream cheese",
            "1/4 cup shredded carrots 🥕",
            "1/4 cup cucumber slices 🥒",
            "2 lettuce leaves 🥬",
            "1/4 cup bell pepper strips 🥒",
            "2 slices turkey or ham 🥩"
        ],
        steps: [
            "Wash your hands and all veggies! 🧠",
            "Lay tortilla flat on a plate",
            "Spread cream cheese all over tortilla",
            "Add lettuce leaves first",
            "Layer on carrots, cucumber, and peppers",
            "Add turkey or ham on top",
            "Roll up tightly from one end",
            "Ask adult to cut in half",
            "Enjoy your colorful wrap! 🎉"
        ]
    },
    apple: {
        title: "🍎 Apple Peanut Butter Bites",
        time: "5 minutes",
        age: "Ages 4+",
        ingredients: [
            "2 apples 🍎",
            "4 tablespoons peanut butter 🥜",
            "2 tablespoons mini chocolate chips 🍫",
            "1 tablespoon granola (optional)",
            "1 tablespoon raisins (optional) 🍇"
        ],
        steps: [
            "Wash your hands and apples! 🧠",
            "Ask an adult to cut apples into thick slices",
            "Remove apple cores with adult help",
            "Spread peanut butter on each apple slice",
            "Sprinkle chocolate chips on top",
            "Add granola or raisins if you want",
            "Arrange on a plate",
            "Enjoy your healthy snack! 🎉"
        ]
    },
    butter: {
        title: "🧈 Magic Shake Butter",
        time: "10 minutes",
        age: "Ages 5+",
        ingredients: [
            "1 cup heavy cream 🥛",
            "Pinch of salt 🧂",
            "1 clean jar with tight lid",
            "Crackers for testing 🍪"
        ],
        steps: [
            "Wash your hands! 🧠",
            "Pour cream into the clean jar",
            "Add a tiny pinch of salt",
            "Put the lid on tightly",
            "Shake, shake, shake for 8-10 minutes!",
            "Keep shaking until you hear sloshing stop",
            "Open jar - you made butter!",
            "Drain off the liquid (buttermilk)",
            "Spread on crackers and taste your magic! 🎉"
        ]
    }
};

function showRecipe(recipeKey) {
    let recipe = null;
    
    // Find recipe in current class
    for (const ageGroup of Object.values(recipesByAge)) {
        if (ageGroup[recipeKey]) {
            recipe = ageGroup[recipeKey];
            break;
        }
    }
    
    if (!recipe) return;
    const content = `
        <div class="recipe-detail">
            <h2>${recipe.title}</h2>
            <p><strong>⏰ Time:</strong> ${recipe.time} | <strong>👶 Age:</strong> ${recipe.age}</p>
            
            <div class="ingredients">
                <h3>🛒 What You Need:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </div>
            
            <div class="steps">
                <h3>👨‍🍳 Let's Cook:</h3>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <p style="font-size: 1.2rem; color: #ff6b6b;">
                    🎉 Great job, young chef! You did amazing! 🎉
                </p>
            </div>
        </div>
    `;
    
    document.getElementById('fullscreenRecipeContent').innerHTML = content;
    document.getElementById('fullscreenReader').style.display = 'block';
    fullscreenMode = true;
}

function closeModal() {
    // Fully stop any speech when closing the modal so state is reset
    try { speechSynthesis.cancel(); } catch (e) {}
    isReading = false;
    isPaused = false;
    currentReadingIndex = 0;
    stepByStepMode = false;
    document.getElementById('recipeModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target === modal) {
        try { speechSynthesis.cancel(); } catch (e) {}
        isReading = false;
        isPaused = false;
        currentReadingIndex = 0;
        stepByStepMode = false;
        modal.style.display = 'none';
    }
}

// Speech synthesis variables
let currentUtterance = null;
let isReading = false;
let currentReadingIndex = 0;
let readingElements = [];
let stepByStepMode = false;
let fullscreenMode = false;
let isPaused = false; // new: tracks user-initiated pause so we can resume

// Speech functions
function readRecipe() {
    // If currently paused, resume instead of starting over
    if (isPaused) {
        try { speechSynthesis.resume(); } catch (e) {}
        isPaused = false;
        isReading = true;
        document.getElementById('readRecipeBtn').style.display = 'none';
        document.getElementById('stopReadingBtn').style.display = 'inline-block';
        return;
    }

    // If already actively reading (not paused), treat as a request to stop
    if (isReading) {
        stopReading();
        return;
    }

    const recipeContent = document.getElementById('recipeContent');
    const textToRead = recipeContent.innerText;

    speak(textToRead);

    document.getElementById('readRecipeBtn').style.display = 'none';
    document.getElementById('stopReadingBtn').style.display = 'inline-block';
}

function stopReading() {
    // First attempt to pause so user can resume later
    if (speechSynthesis.speaking && !speechSynthesis.paused) {
        try { speechSynthesis.pause(); } catch (e) {}
        isPaused = true;
        isReading = true; // ensure we remain in reading state so resume works
        // keep isReading true so step-by-step logic can resume
    } else {
        // If not currently speaking (or already paused), fully cancel and reset
        try { speechSynthesis.cancel(); } catch (e) {}
        isPaused = false;
        isReading = false;
        currentReadingIndex = 0;
        stepByStepMode = false;

        // Reset visual effects
        document.querySelectorAll('.reading-current, .reading-completed').forEach(el => {
            el.classList.remove('reading-current', 'reading-completed');
        });
    }

    document.getElementById('readRecipeBtn').style.display = 'inline-block';
    document.getElementById('stopReadingBtn').style.display = 'none';

    if (fullscreenMode) {
        document.getElementById('currentLineDisplay').innerHTML = '<p>Click "Start Reading" to begin...</p>';
        document.getElementById('pauseBtn').style.display = 'none';
    }
}

function readStepByStep() {
    if (isReading) {
        stopReading();
    }
    
    stepByStepMode = true;
    const steps = document.querySelectorAll('.steps li');
    readingElements = Array.from(steps);
    currentReadingIndex = 0;
    
    if (readingElements.length > 0) {
        readNextStep();
    }
}

function readIngredients() {
    const ingredients = document.querySelector('.ingredients');
    if (ingredients) {
        speak(ingredients.innerText);
    }
}

function readSteps() {
    const steps = document.querySelector('.steps');
    if (steps) {
        speak(steps.innerText);
    }
}

function readNextStep() {
    if (!isReading || !fullscreenMode) return;
    
    if (currentReadingIndex < readingElements.length) {
        const currentElement = readingElements[currentReadingIndex];
        
        // Visual effects
        document.querySelectorAll('.reading-current').forEach(el => {
            el.classList.remove('reading-current');
            el.classList.add('reading-completed');
        });
        
        currentElement.classList.add('reading-current');
        currentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Update fullscreen display if active
        if (fullscreenMode) {
            const displayText = currentElement.innerText.replace(/🧼|🍞|🧀|🥩|🥬|🍅|🧈|🍎|🍌|🍓|🫐|🍊|🍯|🍋|🥛|🥄|🧊|🌾|🥜|🍫|🍦|🧂|🥚|🍕|🥒|🍄|🥙|🥕|🍇|🍪|🐣|🧒|👨🍳|⏰|👶|🛒|🔊|⏹️|📝|👨🍳|📺|🎉|🧠/g, '');
            document.getElementById('currentLineDisplay').innerHTML = `<p>${displayText}</p>`;
        }
        
        const textToRead = currentElement.innerText.replace(/🧼|🍞|🧀|🥩|🥬|🍅|🧈|🍎|🍌|🍓|🫐|🍊|🍯|🍋|🥛|🥄|🧊|🌾|🥜|🍫|🍦|🧂|🥚|🍕|🥒|🍄|🥙|🥕|🍇|🍪|🐣|🧒|👨🍳|⏰|👶|🛒|🔊|⏹️|📝|👨🍳|📺|🎉|🧠/g, '');
        const cleanText = currentElement.innerText.replace(/🧼|🍞|🧀|🥩|🥬|🍅|🧈|🍎|🍌|🍓|🫐|🍊|🍯|🍋|🥛|🥄|🧊|🌾|🥜|🍫|🍦|🧂|🍕|🥒|🍄|🥙|🥕|🥚|🐣|🧒|👨🍳|⏰|👶|🛒|🔊|⏹️|📝|👨🍳|📺|🎉|🧠|✂️|😋|🌈|⚠️|🎤|⏸️|❌|🔄|💾|🍪|🍝|🍞|🥞|🧁|🍇|🔙|✖|▼|🆕|👤|🔒|🚀|🚪|⚙️|🎨|🍳|🔍/g, '');
        speak(cleanText, () => {
            if (!isReading || !fullscreenMode) return;
            currentReadingIndex++;
            if (isReading && fullscreenMode) {
                readNextStep();
            }
        });
    } else {
        // Finished reading all steps
        setTimeout(() => {
            stopReading();
        }, 1000);
    }
}

function speak(text, onEnd = null) {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const settings = JSON.parse(localStorage.getItem('cookKidsSettings') || '{}');
    const voices = speechSynthesis.getVoices();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.voice = voices[settings.selectedVoice || 0];
    currentUtterance.rate = settings.readingSpeed || 0.8;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;
    
    currentUtterance.onend = function() {
        if (onEnd) onEnd();
    };
    
    currentUtterance.onerror = function() {
        if (onEnd) onEnd();
    };
    
    isReading = true;
    speechSynthesis.speak(currentUtterance);
}

function getStepDelay() {
    const settings = JSON.parse(localStorage.getItem('cookKidsSettings') || '{}');
    return settings.stepDelay || 1.5;
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownControls');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Fullscreen reading functions
function enterFullscreenReading() {
    const recipeContent = document.getElementById('recipeContent').innerHTML;
    document.getElementById('fullscreenRecipeContent').innerHTML = recipeContent;
    document.getElementById('fullscreenReader').style.display = 'block';
    fullscreenMode = true;
    
    // Hide the regular modal
    document.getElementById('recipeModal').style.display = 'none';
}

function exitFullscreenReading() {
    // Force stop all speech
    try {
        speechSynthesis.cancel();
        speechSynthesis.pause();
        speechSynthesis.resume();
        speechSynthesis.cancel();
    } catch(e) {}
    
    // Clear all timeouts
    for (let i = 1; i < 99999; i++) window.clearTimeout(i);
    
    isReading = false;
    currentReadingIndex = 0;
    stepByStepMode = false;
    fullscreenMode = false;
    currentUtterance = null;
    
    document.getElementById('fullscreenReader').style.display = 'none';
}

function startFullscreenReading() {
    if (isReading) {
        stopFullscreenReading();
        return;
    }
    
    isReading = true;
    stepByStepMode = true;
    fullscreenMode = true;
    const steps = document.querySelectorAll('#fullscreenRecipeContent .steps li');
    readingElements = Array.from(steps);
    currentReadingIndex = 0;
    
    document.getElementById('pauseBtn').style.display = 'inline-block';
    
    if (readingElements.length > 0) {
        readNextStep();
    }
}

function pauseFullscreenReading() {
    if (speechSynthesis.speaking) {
        if (speechSynthesis.paused) {
            speechSynthesis.resume();
            document.getElementById('pauseBtn').textContent = '⏸️ Pause';
        } else {
            speechSynthesis.pause();
            document.getElementById('pauseBtn').textContent = '▶️ Resume';
        }
    }
}

function stopFullscreenReading() {
    try {
        speechSynthesis.cancel();
        speechSynthesis.pause();
        speechSynthesis.resume();
        speechSynthesis.cancel();
    } catch(e) {}
    
    for (let i = 1; i < 99999; i++) window.clearTimeout(i);
    
    isReading = false;
    currentReadingIndex = 0;
    stepByStepMode = false;
    currentUtterance = null;
    
    document.querySelectorAll('#fullscreenRecipeContent .reading-current, #fullscreenRecipeContent .reading-completed').forEach(el => {
        el.classList.remove('reading-current', 'reading-completed');
    });
    
    document.getElementById('currentLineDisplay').innerHTML = '<p>Click "Start Reading" to begin...</p>';
    document.getElementById('pauseBtn').style.display = 'none';
}

// Age class and recipe generation functions
let currentClass = '';
let allRecipes = [];

function selectClass(className) {

    currentClass = className;
    document.getElementById('classSelection').style.display = 'none';
    document.getElementById('recipeSection').style.display = 'block';
    
    const titles = {
        'beginner': '🐣 Beginner Chef Recipes (Ages 4-6)',
        'intermediate': '🧒 Intermediate Chef Recipes (Ages 7-9)', 
        'advanced': '👨🍳 Advanced Chef Recipes (Ages 10+)'
    };
    
    document.getElementById('selectedClassTitle').textContent = titles[className];
    generateRecipes(className);
}

function generateRecipes(className) {
    const classRecipes = recipesByAge[className] || {};
    const recipeKeys = Object.keys(classRecipes);
    allRecipes = recipeKeys.map(key => ({key, ...classRecipes[key]}));
    displayRecipes(allRecipes);
}

function displayRecipes(recipesToShow) {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = recipesToShow.map(recipe => `
        <div class="recipe-card">
            <h3>${recipe.title}</h3>
            <p>⏰ ${recipe.time} | 👶 ${recipe.age}</p>
            <button onclick="showRecipe('${recipe.key}')">Let's Cook! 🍳</button>
        </div>
    `).join('');
}

function goBack() {
    document.getElementById('recipeSection').style.display = 'none';
    document.getElementById('classSelection').style.display = 'block';
}

function searchRecipes() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
    );
    displayRecipes(filtered);
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    displayRecipes(allRecipes);
}