const recipesByAge = {
    beginner: {
        sandwich: { title: "Easy Sandwich", time: "5 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop", ingredients: ["2 bread slices 🍞", "1 cheese slice 🧀", "Ham 🥩", "Butter 🧈"], steps: ["Wash hands! 🧼", "Butter bread", "Add cheese and ham", "Close sandwich", "Enjoy! 😋"] },
        smoothie: { title: "Banana Smoothie", time: "5 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=200&fit=crop", ingredients: ["1 banana 🍌", "1/2 cup milk 🥛", "Honey 🍯"], steps: ["Wash hands! 🧼", "Peel banana", "Ask adult to blend", "Pour and drink! 🥤"] },
        apple: { title: "Apple Bites", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=300&h=200&fit=crop", ingredients: ["1 apple 🍎", "Peanut butter 🥜"], steps: ["Wash hands! 🧼", "Ask adult to cut apple", "Spread peanut butter", "Eat! 😋"] },
        cereal: { title: "Fun Cereal Bowl", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=300&h=200&fit=crop&auto=format", ingredients: ["Cereal 🥣", "Milk 🥛", "Banana slices 🍌"], steps: ["Wash hands! 🧼", "Pour cereal in bowl", "Add milk", "Top with banana", "Eat! 😋"] },
        toast: { title: "Simple Toast", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=200&fit=crop", ingredients: ["1 bread slice 🍞", "Butter 🧈", "Jam 🍓"], steps: ["Wash hands! 🧼", "Ask adult to toast bread", "Spread butter", "Add jam", "Enjoy! 😋"] },
        yogurt: { title: "Yogurt Cup", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=300&h=200&fit=crop", ingredients: ["Yogurt cup 🥛", "Berries 🍓", "Granola"], steps: ["Wash hands! 🧼", "Open yogurt", "Add berries on top", "Sprinkle granola", "Mix and eat! 😋"] },
        crackers: { title: "Cheese Crackers", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop", ingredients: ["Crackers 🍪", "Cheese slices 🧀"], steps: ["Wash hands! 🧼", "Place cheese on crackers", "Make little stacks", "Eat your snack! 😋"] },
        banana: { title: "Banana Roll", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=300&h=200&fit=crop", ingredients: ["1 banana 🍌", "Peanut butter 🥜", "Bread 🍞"], steps: ["Wash hands! 🧼", "Spread peanut butter on bread", "Place banana on bread", "Roll up bread", "Eat! 😋"] },
        grapes: { title: "Grape Kabobs", time: "5 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=200&fit=crop", ingredients: ["Grapes 🍇", "Cheese cubes 🧀", "Toothpicks"], steps: ["Wash hands and grapes! 🧼", "Ask adult to help with toothpicks", "Put grape and cheese on stick", "Make more kabobs", "Enjoy! 😋"] },
        milk: { title: "Chocolate Milk", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=200&fit=crop", ingredients: ["Milk 🥛", "Chocolate syrup 🍫"], steps: ["Wash hands! 🧼", "Pour milk in glass", "Add chocolate syrup", "Stir with spoon", "Drink! 😋"] },
        berries: { title: "Berry Bowl", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=300&h=200&fit=crop", ingredients: ["Strawberries 🍓", "Blueberries 🫐", "Whipped cream"], steps: ["Wash hands and berries! 🧼", "Put berries in bowl", "Add whipped cream on top", "Mix gently", "Eat! 😋"] },
        pretzel: { title: "Pretzel Dip", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=200&fit=crop", ingredients: ["Pretzels 🥨", "Hummus", "Carrots 🥕"], steps: ["Wash hands! 🧼", "Put hummus in small bowl", "Dip pretzels in hummus", "Dip carrots too", "Enjoy! 😋"] },
        orange: { title: "Orange Slices", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop", ingredients: ["1 orange 🍊"], steps: ["Wash hands and orange! 🧼", "Ask adult to peel orange", "Separate into pieces", "Eat the juicy slices! 😋"] },
        muffin: { title: "Muffin Treat", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop", ingredients: ["1 muffin 🧁", "Butter 🧈"], steps: ["Wash hands! 🧼", "Ask adult to cut muffin in half", "Spread butter on both halves", "Put back together", "Enjoy! 😋"] },
        raisins: { title: "Raisin Snack Mix", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop", ingredients: ["Raisins 🍇", "Cheerios 🥣", "Goldfish crackers"], steps: ["Wash hands! 🧼", "Put all ingredients in bowl", "Mix with clean hands", "Scoop into small cups", "Snack time! 😋"] },
        waffle: { title: "Easy Waffle", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=300&h=200&fit=crop", ingredients: ["Frozen waffle 🧇", "Syrup 🍯", "Butter 🧈"], steps: ["Wash hands! 🧼", "Ask adult to toast waffle", "Put butter on warm waffle", "Pour syrup on top", "Cut and eat! 😋"] },
        cheese: { title: "Cheese Cubes", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=300&h=200&fit=crop", ingredients: ["Cheese block 🧀", "Crackers 🍪"], steps: ["Wash hands! 🧼", "Ask adult to cut cheese into cubes", "Put cheese on crackers", "Make little sandwiches", "Eat! 😋"] },
        juice: { title: "Fruit Juice Mix", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop", ingredients: ["Apple juice 🍎", "Orange juice 🍊"], steps: ["Wash hands! 🧼", "Pour apple juice in cup", "Add a little orange juice", "Stir with spoon", "Drink! 😋"] },
        bagel: { title: "Mini Bagel", time: "3 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=200&fit=crop", ingredients: ["Mini bagel 🥯", "Cream cheese"], steps: ["Wash hands! 🧼", "Ask adult to cut bagel in half", "Spread cream cheese on both halves", "Put halves together", "Enjoy! 😋"] },
        cookie: { title: "Cookie Sandwich", time: "2 min", age: "Ages 4-6", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop", ingredients: ["2 cookies 🍪", "Frosting"], steps: ["Wash hands! 🧼", "Spread frosting on one cookie", "Put second cookie on top", "Press gently", "Eat your treat! 😋"] }
    },
    intermediate: {
        pancakes: { title: "Easy Pancakes", time: "20 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop", ingredients: ["1 cup flour 🌾", "1 cup milk 🥛", "1 egg 🥚", "Sugar", "Butter 🧈"], steps: ["Wash hands! 🧼", "Mix ingredients", "Ask adult to heat pan", "Pour batter", "Flip when bubbly", "Serve! 🍯"] },
        pizza: { title: "Mini Pizzas", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop", ingredients: ["English muffins 🍞", "Pizza sauce 🍅", "Cheese 🧀", "Pepperoni 🍕"], steps: ["Wash hands! 🧼", "Preheat oven with adult", "Spread sauce", "Add cheese and toppings", "Bake with help", "Cool and eat! 🎉"] },
        wrap: { title: "Veggie Wrap", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=200&fit=crop", ingredients: ["Tortilla 🥙", "Cream cheese", "Lettuce 🥬", "Carrots 🥕", "Turkey 🥩"], steps: ["Wash hands! 🧼", "Spread cream cheese", "Add veggies", "Add turkey", "Roll tightly", "Cut and enjoy! 🎉"] },
        quesadilla: { title: "Cheese Quesadilla", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=300&h=200&fit=crop", ingredients: ["2 tortillas 🥙", "Shredded cheese 🧀", "Butter 🧈"], steps: ["Wash hands! 🧼", "Sprinkle cheese on tortilla", "Top with second tortilla", "Ask adult to cook in pan", "Cut into triangles", "Eat warm! 🎉"] },
        salad: { title: "Garden Salad", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop", ingredients: ["Lettuce 🥬", "Tomatoes 🍅", "Cucumbers 🥒", "Carrots 🥕", "Dressing"], steps: ["Wash hands and veggies! 🧼", "Tear lettuce into pieces", "Ask adult to cut veggies", "Mix all in bowl", "Add dressing", "Toss and serve! 🎉"] },
        pita_pocket: { title: "Pita Pocket", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=300&h=200&fit=crop", ingredients: ["Pita bread 🥙", "Hummus", "Cucumber 🥒", "Tomato 🍅", "Lettuce 🥬"], steps: ["Wash hands and veggies! 🧼", "Cut pita in half", "Spread hummus inside", "Add sliced veggies", "Stuff gently", "Eat fresh! 🎉"] },
        french_toast: { title: "French Toast", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop", ingredients: ["2 bread slices 🍞", "1 egg 🥚", "Milk 🥛", "Cinnamon", "Butter 🧈"], steps: ["Wash hands! 🧼", "Beat egg and milk", "Dip bread in mixture", "Ask adult to cook in pan", "Flip when golden", "Serve with syrup! 🍯"] },
        english_muffin: { title: "English Muffin Pizza", time: "8 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop", ingredients: ["English muffins 🍞", "Pizza sauce 🍅", "Cheese 🧀", "Mini pepperoni"], steps: ["Wash hands! 🧼", "Split muffins in half", "Spread sauce", "Add cheese and pepperoni", "Toast until melted", "Cool and eat! 🎉"] },
        fruit_kabobs: { title: "Fruit Kabobs", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=200&fit=crop", ingredients: ["Strawberries 🍓", "Grapes 🍇", "Pineapple 🍍", "Melon", "Skewers"], steps: ["Wash hands and fruit! 🧼", "Ask adult to cut fruit", "Thread fruit on skewers", "Make colorful patterns", "Arrange on plate", "Enjoy! 🎉"] },
        bagel_pizza: { title: "Bagel Pizza", time: "12 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop", ingredients: ["Bagel halves 🥯", "Pizza sauce 🍅", "Mozzarella 🧀", "Toppings"], steps: ["Wash hands! 🧼", "Spread sauce on bagels", "Sprinkle cheese", "Add favorite toppings", "Bake with adult help", "Cool and eat! 🎉"] },
        pasta_salad: { title: "Pasta Salad", time: "20 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop", ingredients: ["Cooked pasta 🍝", "Cherry tomatoes 🍅", "Cheese cubes 🧀", "Italian dressing"], steps: ["Wash hands! 🧼", "Cook pasta with adult", "Cool pasta completely", "Add tomatoes and cheese", "Pour dressing", "Mix and chill! 🎉"] },
        tuna_melt: { title: "Tuna Melt", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=300&h=200&fit=crop", ingredients: ["Tuna 🐟", "Mayo", "Bread 🍞", "Cheese 🧀"], steps: ["Wash hands! 🧼", "Mix tuna and mayo", "Spread on bread", "Top with cheese", "Ask adult to toast", "Eat warm! 🎉"] },
        veggie_dip: { title: "Veggie Dip", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=300&h=200&fit=crop", ingredients: ["Ranch dressing", "Carrots 🥕", "Celery", "Bell peppers 🫑"], steps: ["Wash hands and veggies! 🧼", "Ask adult to cut veggies", "Arrange on plate", "Put dip in center", "Dip and crunch! 🎉"] },
        grilled_cheese: { title: "Grilled Cheese", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300&h=200&fit=crop", ingredients: ["2 bread slices 🍞", "Cheese slices 🧀", "Butter 🧈"], steps: ["Wash hands! 🧼", "Butter outside of bread", "Put cheese inside", "Ask adult to grill", "Flip when golden", "Cut and serve! 🎉"] },
        fruit_smoothie: { title: "Berry Smoothie", time: "8 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=200&fit=crop", ingredients: ["Mixed berries 🍓", "Yogurt 🥛", "Milk 🥛", "Honey 🍯"], steps: ["Wash hands! 🧼", "Add all to blender", "Ask adult to blend", "Taste and adjust", "Pour into glasses", "Drink up! 🎉"] },
        nachos: { title: "Easy Nachos", time: "8 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=200&fit=crop", ingredients: ["Tortilla chips", "Shredded cheese 🧀", "Salsa 🍅"], steps: ["Wash hands! 🧼", "Spread chips on plate", "Sprinkle cheese on top", "Microwave 30 seconds", "Add salsa", "Share and enjoy! 🎉"] },
        banana_bread: { title: "Banana Bread", time: "15 min prep", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=200&fit=crop", ingredients: ["Mashed bananas 🍌", "Flour 🌾", "Sugar", "Egg 🥚", "Butter 🧈"], steps: ["Wash hands! 🧼", "Mash bananas well", "Mix all ingredients", "Pour in loaf pan", "Bake with adult", "Cool before slicing! 🎉"] },
        chicken_wrap: { title: "Chicken Wrap", time: "12 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=300&h=200&fit=crop", ingredients: ["Cooked chicken 🍗", "Tortilla 🥙", "Lettuce 🥬", "Tomato 🍅", "Ranch"], steps: ["Wash hands! 🧼", "Warm tortilla slightly", "Add chicken and veggies", "Drizzle with ranch", "Roll tightly", "Cut in half! 🎉"] },
        apple_slices: { title: "Cinnamon Apples", time: "10 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop", ingredients: ["Apples 🍎", "Cinnamon", "Sugar", "Butter 🧈"], steps: ["Wash hands and apples! 🧼", "Ask adult to slice apples", "Sprinkle cinnamon and sugar", "Add small butter pieces", "Microwave 2 minutes", "Stir and enjoy! 🎉"] },
        cereal_bars: { title: "Cereal Bars", time: "15 min", age: "Ages 7-9", image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=300&h=200&fit=crop", ingredients: ["Cereal 🥣", "Marshmallows", "Butter 🧈", "Vanilla"], steps: ["Wash hands! 🧼", "Ask adult to melt marshmallows", "Mix in cereal", "Press into pan", "Cool completely", "Cut into bars! 🎉"] }
    },
    advanced: {
        muffins: { title: "Banana Muffins", time: "30 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&h=200&fit=crop", ingredients: ["2 bananas 🍌", "Butter 🧈", "Sugar", "1 egg 🥚", "Flour 🌾"], steps: ["Wash hands! 🧼", "Preheat oven 350°F", "Mash bananas", "Mix all ingredients", "Fill muffin cups", "Bake 20-25 min", "Cool completely", "Enjoy! 🎉"] },
        pasta: { title: "Cheesy Pasta", time: "15 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=200&fit=crop", ingredients: ["Pasta 🍝", "Cheese 🧀", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Boil water safely", "Cook pasta", "Drain carefully", "Add cheese, butter, milk", "Stir until creamy", "Serve hot! 🎉"] },
        cookies: { title: "No-Bake Cookies", time: "20 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop", ingredients: ["Oats 🌾", "Peanut butter 🥜", "Honey 🍯", "Chocolate chips 🍫"], steps: ["Wash hands! 🧼", "Mix all ingredients", "Stir well", "Chill 30 minutes", "Roll into balls", "Refrigerate until firm", "Enjoy! 🎉"] },
        stir_fry: { title: "Veggie Stir Fry", time: "20 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", ingredients: ["Mixed vegetables 🥘", "Oil", "Soy sauce", "Rice 🍚", "Garlic"], steps: ["Wash hands and veggies! 🧼", "Cook rice first", "Heat oil in pan", "Add garlic", "Stir fry vegetables", "Add soy sauce", "Serve over rice! 🎉"] },
        waffles: { title: "Homemade Waffles", time: "25 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?w=300&h=200&fit=crop", ingredients: ["Flour 🌾", "Baking powder", "Sugar", "Salt", "Milk 🥛", "Eggs 🥚"], steps: ["Wash hands! 🧼", "Mix dry ingredients", "Beat eggs and milk", "Combine wet and dry", "Heat waffle iron", "Pour batter", "Cook until golden", "Serve with syrup! 🎉"] },
        chicken_salad: { title: "Chicken Salad", time: "15 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop", ingredients: ["Cooked chicken 🍗", "Mayo", "Celery", "Grapes 🍇", "Bread 🍞"], steps: ["Wash hands! 🧼", "Shred chicken", "Dice celery", "Cut grapes in half", "Mix with mayo", "Season to taste", "Serve on bread! 🎉"] },
        homemade_pizza: { title: "Homemade Pizza", time: "45 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop", ingredients: ["Pizza dough", "Sauce 🍅", "Mozzarella 🧀", "Toppings", "Olive oil"], steps: ["Wash hands! 🧼", "Preheat oven 450°F", "Roll out dough", "Spread sauce", "Add cheese and toppings", "Bake 12-15 minutes", "Cool slightly", "Slice and enjoy! 🎉"] },
        acai_bowl: { title: "Acai Bowl", time: "15 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=300&h=200&fit=crop", ingredients: ["Frozen acai", "Banana 🍌", "Berries 🍓", "Granola", "Coconut"], steps: ["Wash hands! 🧼", "Blend acai and banana", "Pour into bowl", "Arrange toppings", "Take a photo", "Eat immediately! 🎉"] },
        quesadilla_deluxe: { title: "Loaded Quesadilla", time: "18 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop", ingredients: ["Large tortillas 🥙", "Cheese 🧀", "Chicken 🍗", "Peppers 🫑", "Onions"], steps: ["Wash hands! 🧼", "Cook chicken and veggies", "Layer on tortilla", "Add cheese", "Top with second tortilla", "Cook until crispy", "Cut into wedges! 🎉"] },
        bread_rolls: { title: "Dinner Rolls", time: "2 hours", age: "Ages 10+", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop", ingredients: ["Flour 🌾", "Yeast", "Sugar", "Salt", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Mix yeast and warm milk", "Add flour and ingredients", "Knead dough", "Let rise 1 hour", "Shape into rolls", "Rise again", "Bake until golden! 🎉"] },
        fried_rice: { title: "Fried Rice", time: "20 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", ingredients: ["Cooked rice 🍚", "Eggs 🥚", "Vegetables 🥕", "Soy sauce", "Oil"], steps: ["Wash hands! 🧼", "Scramble eggs", "Heat oil in pan", "Add cold rice", "Stir in vegetables", "Add soy sauce", "Mix in eggs", "Serve hot! 🎉"] },
        chocolate_cake: { title: "Chocolate Cake", time: "1 hour", age: "Ages 10+", image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=300&h=200&fit=crop", ingredients: ["Flour 🌾", "Cocoa powder", "Sugar", "Eggs 🥚", "Butter 🧈", "Milk 🥛"], steps: ["Wash hands! 🧼", "Preheat oven 350°F", "Mix dry ingredients", "Beat wet ingredients", "Combine mixtures", "Pour into pans", "Bake 30 minutes", "Cool and frost! 🎉"] },
        soup: { title: "Vegetable Soup", time: "30 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=200&fit=crop", ingredients: ["Mixed vegetables 🥕", "Broth", "Onion", "Garlic", "Herbs"], steps: ["Wash hands and veggies! 🧼", "Chop all vegetables", "Sauté onion and garlic", "Add vegetables", "Pour in broth", "Simmer 20 minutes", "Season to taste", "Serve hot! 🎉"] },
        tacos: { title: "Beef Tacos", time: "25 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=300&h=200&fit=crop", ingredients: ["Ground beef 🥩", "Taco shells", "Lettuce 🥬", "Tomatoes 🍅", "Cheese 🧀", "Salsa"], steps: ["Wash hands! 🧼", "Brown ground beef", "Season with spices", "Warm taco shells", "Prepare toppings", "Fill shells with meat", "Add toppings", "Enjoy! 🎉"] },
        lasagna: { title: "Mini Lasagna", time: "45 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&h=200&fit=crop", ingredients: ["Lasagna noodles", "Meat sauce", "Ricotta cheese", "Mozzarella 🧀", "Parmesan"], steps: ["Wash hands! 🧼", "Cook noodles", "Layer sauce and cheese", "Repeat layers", "Top with mozzarella", "Bake 30 minutes", "Let rest 10 minutes", "Slice and serve! 🎉"] },
        stuffed_peppers: { title: "Stuffed Peppers", time: "40 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=300&h=200&fit=crop", ingredients: ["Bell peppers 🫑", "Ground meat", "Rice 🍚", "Onion", "Cheese 🧀"], steps: ["Wash hands! 🧼", "Cut tops off peppers", "Cook meat and onion", "Mix with cooked rice", "Stuff peppers", "Top with cheese", "Bake 25 minutes", "Serve hot! 🎉"] },
        chicken_parmesan: { title: "Chicken Parmesan", time: "35 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=200&fit=crop", ingredients: ["Chicken breast 🍗", "Breadcrumbs", "Parmesan cheese", "Marinara sauce", "Mozzarella 🧀"], steps: ["Wash hands! 🧼", "Pound chicken thin", "Coat in breadcrumbs", "Pan fry until golden", "Top with sauce and cheese", "Bake until melted", "Serve with pasta! 🎉"] },
        apple_pie: { title: "Apple Pie", time: "1.5 hours", age: "Ages 10+", image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=300&h=200&fit=crop", ingredients: ["Pie crust", "Apples 🍎", "Sugar", "Cinnamon", "Butter 🧈"], steps: ["Wash hands and apples! 🧼", "Peel and slice apples", "Mix with sugar and cinnamon", "Fill pie crust", "Add top crust", "Seal edges", "Bake 45 minutes", "Cool before serving! 🎉"] },
        breakfast_burrito: { title: "Breakfast Burrito", time: "15 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&h=200&fit=crop", ingredients: ["Large tortilla 🥙", "Scrambled eggs 🥚", "Cheese 🧀", "Bacon 🥓", "Hash browns"], steps: ["Wash hands! 🧼", "Cook bacon and hash browns", "Scramble eggs", "Warm tortilla", "Add all fillings", "Roll tightly", "Wrap in foil", "Eat warm! 🎉"] },
        garlic_bread: { title: "Garlic Bread", time: "15 min", age: "Ages 10+", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop", ingredients: ["French bread 🍞", "Butter 🧈", "Garlic", "Parsley", "Parmesan cheese"], steps: ["Wash hands! 🧼", "Slice bread", "Mix butter, garlic, parsley", "Spread on bread", "Sprinkle cheese", "Wrap in foil", "Bake 10 minutes", "Serve hot! 🎉"] }
    }
};

const recipes = {
    sandwich: {
        title: "🥪 Super Easy Sandwich",
        time: "5 minutes",
        age: "Ages 5+",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300&h=200&fit=crop",
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
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=200&fit=crop",
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
    // If already reading, stop it
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
    console.log('Stop clicked - stepByStepMode:', stepByStepMode, 'currentReadingIndex:', currentReadingIndex);
    
    try { speechSynthesis.cancel(); } catch (e) {}
    isPaused = true;
    isReading = false;
    
    // Don't reset these when pausing - we need them for resume
    // stepByStepMode and currentReadingIndex should stay as they are
    
    document.getElementById('stopReadingBtn').style.display = 'none';
    document.getElementById('continueReadingBtn').style.display = 'inline-block';
    document.getElementById('readRecipeBtn').style.display = 'inline-block';
}

function continueReading() {
    console.log('Continue clicked - stepByStepMode:', stepByStepMode, 'currentReadingIndex:', currentReadingIndex);
    
    // Cancel any existing speech first
    try {
        speechSynthesis.cancel();
    } catch (e) {}
    
    isPaused = false;
    isReading = true;
    
    document.getElementById('continueReadingBtn').style.display = 'none';
    document.getElementById('readRecipeBtn').style.display = 'none';
    document.getElementById('stopReadingBtn').style.display = 'inline-block';
    
    if (stepByStepMode && readingElements.length > 0 && currentReadingIndex < readingElements.length) {
        console.log('Continuing step-by-step from index:', currentReadingIndex);
        // Small delay to ensure speech is fully cancelled
        setTimeout(() => {
            readNextStep();
        }, 100);
    } else {
        console.log('Starting regular reading from beginning');
        // For regular reading, restart from beginning
        const recipeContent = document.getElementById('recipeContent');
        if (recipeContent) {
            const textToRead = recipeContent.innerText;
            setTimeout(() => {
                speak(textToRead);
            }, 100);
        }
    }
}

function readStepByStep() {
    if (isReading) {
        stopReading();
    }
    
    stepByStepMode = true;
    isReading = true;
    const steps = document.querySelectorAll('.steps li');
    readingElements = Array.from(steps);
    currentReadingIndex = 0;
    
    console.log('Starting step-by-step, found', readingElements.length, 'steps');
    
    document.getElementById('readRecipeBtn').style.display = 'none';
    document.getElementById('stopReadingBtn').style.display = 'inline-block';
    
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
    console.log('readNextStep called, isReading:', isReading, 'currentIndex:', currentReadingIndex);
    
    if (!isReading) {
        console.log('Not reading, returning');
        return;
    }
    
    if (currentReadingIndex < readingElements.length) {
        const currentElement = readingElements[currentReadingIndex];
        console.log('Reading step', currentReadingIndex + 1, 'of', readingElements.length);
        
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
        
        const cleanText = currentElement.innerText.replace(/🧼|🍞|🧀|🥩|🥬|🍅|🧈|🍎|🍌|🍓|🫐|🍊|🍯|🍋|🥛|🥄|🧊|🌾|🥜|🍫|🍦|🧂|🍕|🥒|🍄|🥙|🥕|🥚|🐣|🧒|👨🍳|⏰|👶|🛒|🔊|⏹️|📝|👨🍳|📺|🎉|🧠|✂️|😋|🌈|⚠️|🎤|⏸️|❌|🔄|💾|🍪|🍝|🍞|🥞|🧁|🍇|🔙|✖|▼|🆕|👤|🔒|🚀|🚪|⚙️|🎨|🍳|🔍/g, '');
        
        speak(cleanText, () => {
            console.log('Step completed, moving to next');
            if (!isReading) return;
            currentReadingIndex++;
            if (isReading && currentReadingIndex < readingElements.length) {
                // Add delay between steps
                setTimeout(() => {
                    if (isReading) readNextStep();
                }, getStepDelay() * 1000);
            } else if (currentReadingIndex >= readingElements.length) {
                console.log('All steps completed');
                setTimeout(() => {
                    isReading = false;
                    stepByStepMode = false;
                    document.getElementById('readRecipeBtn').style.display = 'inline-block';
                    document.getElementById('stopReadingBtn').style.display = 'none';
                }, 1000);
            }
        });
    } else {
        console.log('No more steps to read');
        isReading = false;
        stepByStepMode = false;
        document.getElementById('readRecipeBtn').style.display = 'inline-block';
        document.getElementById('stopReadingBtn').style.display = 'none';
    }
}

function speak(text, onEnd = null) {
    console.log('Speaking:', text.substring(0, 50) + '...');
    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    // Wait for voices to load
    if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener('voiceschanged', () => {
            speak(text, onEnd);
        }, { once: true });
        return;
    }
    
    const settings = JSON.parse(localStorage.getItem('cookKidsSettings') || '{}');
    const voices = speechSynthesis.getVoices();
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    
    // Use default voice if selected voice doesn't exist
    const selectedVoice = voices[settings.selectedVoice] || voices[0] || null;
    if (selectedVoice) {
        currentUtterance.voice = selectedVoice;
    }
    
    currentUtterance.rate = settings.readingSpeed || 0.8;
    currentUtterance.pitch = 1;
    currentUtterance.volume = 1;
    
    let hasStarted = false;
    
    currentUtterance.onstart = function() {
        console.log('Speech started');
        hasStarted = true;
        isReading = true;
    };
    
    currentUtterance.onend = function() {
        console.log('Speech ended');
        if (onEnd) {
            onEnd();
        } else {
            isReading = false;
        }
    };
    
    currentUtterance.onerror = function(e) {
        console.log('Speech error:', e);
        // If speech failed and we have a callback, call it to continue
        if (onEnd) {
            setTimeout(onEnd, 100);
        } else {
            isReading = false;
        }
    };
    
    try {
        speechSynthesis.speak(currentUtterance);
        
        // Fallback: if speech doesn't start within 2 seconds, continue anyway
        setTimeout(() => {
            if (!hasStarted && onEnd) {
                console.log('Speech timeout, continuing...');
                onEnd();
            }
        }, 2000);
    } catch (error) {
        console.log('Speech synthesis error:', error);
        if (onEnd) {
            setTimeout(onEnd, 100);
        } else {
            isReading = false;
        }
    }
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
            ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}" onerror="this.style.display='none'">` : ''}
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