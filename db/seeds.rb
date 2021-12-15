# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Benefit.destroy_all
Food.destroy_all
Recipe.destroy_all
User.destroy_all

# Create Core Users
@admin = User.create!(username: 'Julia', password: '123456', image_url: 'https://media-exp1.licdn.com/dms/image/D4D03AQGCF9ln-ItOJg/profile-displayphoto-shrink_400_400/0/1637721714007?e=1645056000&v=beta&t=i3JzwEg3UcWhA7d8sTImJF1Zyr33fpEmzjVsZpU9s3U')
@gordon = User.create!(username: 'Gordon Ramsay', password: 'gordon', image_url: 'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s900-c-k-c0x00ffffff-no-rj')
@ina = User.create!(username: 'Ina Garten', password: 'garten', image_url: 'https://www.chatelaine.com/wp-content/uploads/2018/01/ina2.jpg')

puts "#{User.count} user accounts created!"

# Create Core Benefits

@heart_health = Benefit.create!(name: 'heart health')
@anti_inflammatory = Benefit.create!(name: 'anti-inflammatory')
@fiber = Benefit.create!(name: 'high fiber')
@antioxidant = Benefit.create!(name: 'antioxidant')
@digestion = Benefit.create!(name: 'improve digestion')
@prevent_diabetes = Benefit.create!(name: 'protect against diabetes')
@prevent_cancer = Benefit.create!(name: 'fight against and prevent cancer')
@weight_loss = Benefit.create!(name: 'aids weight loss')
@iron = Benefit.create!(name: 'high in iron')
@protein = Benefit.create!(name: 'high in protein')
@vitamin_b = Benefit.create!(name: 'high in vitamin b')
@bone_health = Benefit.create!(name: 'bone health')
@hydrating = Benefit.create!(name: 'hydrating')
@lower_blood_sugar = Benefit.create!(name: 'helps lower blood sugar')
@gut = Benefit.create!(name: 'improves gut health')
@immune = Benefit.create!(name: 'boost immune health')

puts "#{Benefit.count} benefits created"

# Create Core Categories

@eggs = Category.create!(category: 'eggs')
@meat = Category.create!(category: 'meat')
@poultry = Category.create!(category: 'poultry')
@fish = Category.create!(category: 'fish')
@vegetable = Category.create!(category: 'vegetables')
@fruit = Category.create!(category: 'fruit')
@alcohol = Category.create!(category: 'alcohol')
@grain = Category.create!(category: 'grains')
@dip_spread = Category.create!(category: 'dips and spreads')
@dairy = Category.create!(category: 'dairy')
@spices_oils = Category.create!(category: 'oils and spices')
@herb = Category.create!(category: 'herb')

puts "#{Category.count} categories created"


# Create Core Foods (ingredient resource)

@egg = Food.create!(name: 'eggs', benefits: [@protein, @weight_loss], categories: [@eggs] )
@flank_steak = Food.create!(name: 'flank steak', benefits: [@protein, @iron], categories: [@meat])
@cherry_tomatoes = Food.create!(name: 'cherry tomatoes', benefits: [@heart_health, @anti_inflammatory, @fiber, @antioxidant, @digestion, @prevent_diabetes, @prevent_cancer, @weight_loss, @iron, @protein, @vitamin_b
], categories:[@vegetable, @fruit])
@red_onion = Food.create!(name: 'red onion', benefits: [@antioxidant, @digestion, @prevent_cancer, @weight_loss], categories: [@vegetable])
@romaine_lettuce = Food.create!(name: 'romaine lettuce', benefits: [@bone_health, @antioxidant],categories: [@vegetable])
@cucumber = Food.create!(name: 'cucumber', benefits: [@antioxidant, @weight_loss, @hydrating, @lower_blood_sugar],categories: [@vegetable])
@kalamata_olives = Food.create!(name: 'kalamata olives', benefits: [@antioxidant, @heart_health, @iron],categories: [@vegetable])
@hummus = Food.create!(name: 'hummus', benefits: [@protein, @anti_inflammatory, @fiber, @lower_blood_sugar, @heart_health, @weight_loss],categories: [@dip_spread])
@feta_cheese = Food.create!(name: 'feta cheese', benefits: [@bone_health, @gut, @weight_loss, @prevent_diabetes],categories: [@dairy])
@olive_oil = Food.create!(name: 'olive oil', benefits: [@antioxidant, @anti_inflammatory, @heart_health, @prevent_diabetes, @prevent_cancer],categories: [@spices_oils])
@lemons = Food.create!(name: 'lemon' , benefits: [@weight_loss, @heart_health, @digestion, @fiber], categories: [@fruit])
@greek_yogurt = Food.create!(name: 'greek yogurt', benefits: [@protein, @vitamin_b, @bone_health, @gut],categories: [@dairy])
@garlic = Food.create!(name: 'garlic', benefits: [@immune, @vitamin_b, @heart_health, @antioxidant, @bone_health] ,categories: [@vegetable])
@oregano = Food.create!(name: 'oregano', benefits: [@antioxidant, @anti_inflammatory, @prevent_cancer] , categories: [@herb])
@dill = Food.create!(name: 'dill', benefits: [@immune], categories: [@herb])
@mint = Food.create!(name: 'mint', benefits: [@digestion], categories: [@herb])
@salt = Food.create!(name: 'salt', categories: [@spices_oils])
@pepper = Food.create!(name: 'pepper', categories: [@spices_oils])

puts "#{Food.count} foods created"

# Create Test Recipe for new resources structure
Recipe.create!(name: 'Mediterranean Steak Bowl', foods: [@flank_steak, @cherry_tomatoes, @red_onion, @cucumber, @kalamata_olives, @hummus, @feta_cheese, @olive_oil, @lemons, @greek_yogurt, @garlic, @oregano, @dill, @mint, @salt, @pepper], ingredients: 'flank steak, cherry tomatoes, red onion, romain lettuce, cucumber, kalamata olives, hummus, feta cheese, olive oil, lemons, greek yogurt, garlic, oregano, dill, mint, salt and pepper', user:@admin , image_url: 'https://therealfooddietitians.com/wp-content/uploads/2019/09/MediterraneanSteak-Bowls-3-e1567461547121.jpg')



# Create Core Users Recipes

# @ina
Recipe.create!(name: 'Frozen Paloma', ingredients: 'ruby red grapefruit juice, white tequila, lime juice, simple syrup, ice, kosher salt, ruby red grapefruit wedges', user:@ina , image_url: 'https://d14iv1hjmfkv57.cloudfront.net/assets/recipes/frozen-palomas/_1200x600_crop_center-center_82_line/WEBEDIT_PALOMA_164.jpg?mtime=20210205101123&focal=none&tmtime=20210324094255')


# @gordon
Recipe.create!(name: 'Texas Hanger Steak Tacos', ingredients: 'hanger steak, kosher salt, freshly cracked black pepper, olive oil, nopal (cactus pad), red onion, lime, fresno chile (diced), scallions, cilantro, toamto (diced), garlic, avocado, blue corn tortillas, sour cream', user:@gordon , image_url: 'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-ATW-09182.jpg')

# @admin

Recipe.create!(name: 'Happy Tummy Smoothie', ingredients: 'kefir, coconut water, frozen white beans, frozen blueberries, frozen strawberries, ground flaxseed, vanilla plant-based protein powder', user:@admin , image_url: 'https://nutritionstripped.com/wp-content/uploads/2020/02/gut-healing-smoothie-bowl-nutritionstripped-vegan-fiber1-1346x701.jpg')
Recipe.create!(name: 'Black Pepper Beef', ingredients: 'beef tenderloin, freshly cracked black pepper, oyster sauce, wine, soy sauce, toasted sesame oil, potato starch, vegetable oil, onion, bell pepper, garlic' , user:@admin , image_url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1334/https://norecipes.com/wp-content/uploads/2017/11/black-pepper-beef-001.jpg')
Recipe.create!(name: 'Grapefruit Sunrise Cocktail', ingredients: 'vodka, ruby red grapefruit juice, orange liqueur, lemon juice, grenadine, ruby red grapefruit wedges, rosemary sprig' , user:@admin , image_url: 'https://theblondcook.com/wp-content/uploads/2016/05/grapefruit-sunrise-cocktail-5.jpg')
Recipe.create!(name: 'Key West Flank Steak', ingredients: 'red onion, cilantro, white wine vinegar, key lime juice, olive oil, limes, flank steak, kosher salt, pepper' , user:@admin , image_url: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Key-West-Flank-Steak_EXPS_THJJ19_55213_B02_21_5b-8.jpg?fit=700,1024')
Recipe.create!(name: 'Quick Pickled Red Onions', ingredients: 'apple cider vinegar, red onion, red wine vinegar, kosher salt, sugar, ground allspice, red pepper flakes' , user:@admin , image_url: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2014/06/pickled-red-onions_AFarmgirlsDabbles_AFD-1.jpg')
Recipe.create!(name: 'Marinated Cherry Tomatoes', ingredients:  'red onion, cherry tomatoes, garlic, sea salt, olive oil, red wine vinegar, lemon juice, freshly cracked black pepper, basil', user:@admin, image_url: 'https://peasandcrayons.com/wp-content/uploads/2019/06/easy-marinated-cherry-tomatoes-recipe-.jpg')
Recipe.create!(name: 'Mega Crunchy Romaine Salad', ingredients: 'quinoa, sunflower seeds, olice oil, romaine lettuce, carrots, cabbage, radishes, dried cranberries, lime juice, rice vinegar, honey, sea salt, chili powder', user:@admin, image_url: 'https://cookieandkate.com/images/2016/07/mega-crunchy-romaine-salad-recipe-1.jpg')
Recipe.create!(name: 'Ruby Red Grapefruit Sparkler', ingredients: 'ginger ale, rosemary, ruby red grapefruit wedges, simple syrup, ruby red grapefruit juice', user:@admin, image_url: 'https://ohsodelicioso.com/wp-content/uploads/2018/02/grapefruit-sparkler-3.jpg')


# Randomly Generate Recipes using Faker

3.times do
    Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" , user:@admin, image_url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80')
end

3.times do
    Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" ,
    user:@gordon, image_url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80')
end

3.times do
    Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" ,
    user:@ina, image_url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
end



puts "#{Recipe.count} recipes created!"