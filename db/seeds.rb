# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
User.destroy_all

# Create Core Users
@admin = User.create!(username: 'Julia', password: 'pawpaw', image_url: 'https://media-exp1.licdn.com/dms/image/D4D03AQGCF9ln-ItOJg/profile-displayphoto-shrink_400_400/0/1637721714007?e=1645056000&v=beta&t=i3JzwEg3UcWhA7d8sTImJF1Zyr33fpEmzjVsZpU9s3U')
@gordon = User.create!(username: 'Gordon Ramsay', password: 'gordon', image_url: 'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s900-c-k-c0x00ffffff-no-rj')
@ina = User.create!(username: 'Ina Garten', password: 'garten', image_url: 'https://www.chatelaine.com/wp-content/uploads/2018/01/ina2.jpg')
@richard = User.create!(username: 'Richard Blais', password: 'richard', image_url: 'https://images-na.ssl-images-amazon.com/images/I/91RMftp5zRL._SX450_.jpg')
@harold = User.create!(username: 'Harold Dieterle', password: 'harold', image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2012%2F09%2Fimages-sys-201111-a-harold-dieterle.jpg&q=85')

puts "#{User.count} user accounts created!"

# Create Core Users Recipes

# @harold
Recipe.create!(name: 'Thai Shrimp and Coconut Soup with Lemongrass', ingredients: 'chile peppers, lemongrass, garlic, ginger, shallot, coconut oil, coconut milk, brown sugar, asian fish sauce, kaffir, lime juice, black pepper, shrimp, rice', user: @harold, image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/201111-xl-thai-shrimp-and-coconut-soup-with-lemongrass.jpg')

# @richard
Recipe.create!(name:'Ginger-Lime Baby Carrots', ingredients: 'carrots, olive oil, ginger, cinnamon, chicken stock, butter, lime juice, sriracha, salt', user:@richard, image_url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/201106-xl-ginger-lime-carrots.jpg')

# @ina
Recipe.create!(name: 'Frozen Paloma', ingredients: 'ruby red grapefruit juice, tequila, lime juice, simple syrup, ice, kosher salt, ruby red grapefruit wedges', user:@ina , image_url: 'https://d14iv1hjmfkv57.cloudfront.net/assets/recipes/frozen-palomas/_1200x600_crop_center-center_82_line/WEBEDIT_PALOMA_164.jpg?mtime=20210205101123&focal=none&tmtime=20210324094255')


# @gordon
Recipe.create!(name: 'Texas Hanger Steak Tacos', ingredients: 'hanger steak, kosher salt, freshly cracked black pepper, olive oil, red onion, lime, fresno chile (diced), scallions, cilantro, toamto (diced), garlic, avocado, blue corn tortillas, sour cream', user:@gordon , image_url: 'https://www.gordonramsay.com/assets/Uploads/_resampled/CroppedFocusedImage192072050-50-ATW-09182.jpg')

# @admin
Recipe.create!(name: 'Mediterranean Steak Bowl', ingredients: 'flank steak, cherry tomatoes, red onion, romain lettuce, cucumber, kalamata olives, hummus, feta cheese, oil, lemons, greek yogurt, garlic, oregano, dill, mint, salt and pepper', user:@admin , image_url: 'https://therealfooddietitians.com/wp-content/uploads/2019/09/MediterraneanSteak-Bowls-3-e1567461547121.jpg')
Recipe.create!(name: 'Happy Tummy Smoothie', ingredients: 'kefir, coconut water, white beans, blueberries, frozen strawberries, ground flaxseed, vanilla plant-based protein powder', user:@admin , image_url: 'https://nutritionstripped.com/wp-content/uploads/2020/02/gut-healing-smoothie-bowl-nutritionstripped-vegan-fiber1-1346x701.jpg')
Recipe.create!(name: 'Black Pepper Beef', ingredients: 'beef tenderloin, freshly cracked black pepper, oyster sauce, wine, soy sauce, toasted sesame oil, potato starch, vegetable oil, onion, bell pepper, garlic' , user:@admin , image_url: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1334/https://norecipes.com/wp-content/uploads/2017/11/black-pepper-beef-001.jpg')
Recipe.create!(name: 'Grapefruit Sunrise Cocktail', ingredients: 'vodka, ruby red grapefruit juice, orange liqueur, lemon juice, grenadine, ruby red grapefruit wedges, rosemary sprig' , user:@admin , image_url: 'https://theblondcook.com/wp-content/uploads/2016/05/grapefruit-sunrise-cocktail-5.jpg')
Recipe.create!(name: 'Key West Flank Steak', ingredients: 'red onion, cilantro, white wine vinegar, key lime juice, olive oil, limes, flank steak, kosher salt, pepper' , user:@admin , image_url: 'https://www.tasteofhome.com/wp-content/uploads/2019/05/Key-West-Flank-Steak_EXPS_THJJ19_55213_B02_21_5b-8.jpg?fit=700,1024')
Recipe.create!(name: 'Quick Pickled Red Onions', ingredients: 'apple cider vinegar, red onion, red wine vinegar, kosher salt, sugar, ground allspice, red pepper flakes' , user:@admin , image_url: 'https://www.afarmgirlsdabbles.com/wp-content/uploads/2014/06/pickled-red-onions_AFarmgirlsDabbles_AFD-1.jpg')
Recipe.create!(name: 'Marinated Cherry Tomatoes', ingredients:  'red onion, cherry tomatoes, garlic, sea salt, olive oil, red wine vinegar, lemon juice, freshly cracked black pepper, basil', user:@admin, image_url: 'https://peasandcrayons.com/wp-content/uploads/2019/06/easy-marinated-cherry-tomatoes-recipe-.jpg')
Recipe.create!(name: 'Mega Crunchy Romaine Salad', ingredients: 'quinoa, sunflower seeds, olive oil, romaine lettuce, carrots, cabbage, radishes, dried cranberries, lime juice, rice vinegar, honey, sea salt, chili powder', user:@admin, image_url: 'https://cookieandkate.com/images/2016/07/mega-crunchy-romaine-salad-recipe-1.jpg')
Recipe.create!(name: 'Ruby Red Grapefruit Sparkler', ingredients: 'ginger ale, rosemary, ruby red grapefruit wedges, simple syrup, ruby red grapefruit juice', user:@admin, image_url: 'https://ohsodelicioso.com/wp-content/uploads/2018/02/grapefruit-sparkler-3.jpg')
Recipe.create!(name: 'Hummus Sandwich', ingredients: 'cucumber, tomato, red onion, pickled vegetables, hummus, provolone cheese, bread, sprouts, avocado, roasted red pepper, lettuce, feta', user:@admin, image_url: 'https://www.acouplecooks.com/wp-content/uploads/2020/10/Hummus-Sandwich-013.jpg')
Recipe.create!(name: 'Rosemary Roasted Potatoes', ingredients: 'baby red potatoes, kosher salt, olive oil, garlic, rosemary', user:@admin, image_url: 'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Roasted-Rosemary-Potatoes-10.jpg?w=1067&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1607484193&s=ec5e2d31eea02b38e90a025b815ff5df')
Recipe.create!(name: 'Ginger Ale Highball', ingredients: 'rye whiskey, ginger ale', user:@admin, image_url: 'https://www.liquor.com/thmb/60BQNTc9BjUnE8SGKMxZQkKBosw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__06__18114006__ginger-ale-highball-720x720-recipe-f10d74bf1bc44df49bf87e2b737f45c8.jpg' )
Recipe.create!(name: 'Blueberries and Cream Oatmeal', ingredients: 'rolled oats, almond milk, chia seeds, maple syrup, blueberries, salt, vanilla extract', user:@admin, image_url: 'https://www.kitchentreaty.com/wp-content/uploads/2014/07/Blueberries-and-Cream-Oatmea_sq-420x560.jpg')
Recipe.create!(name: 'Romaine Tomato Avocado Salad', ingredients: 'cilantro, avocado, romaine lettuce, cherry tomatoes, cucumber, red onion, olive oil, lemon juice, salt, black pepper', user:@admin, image_url: 'https://valentinascorner.com/wp-content/uploads/2018/04/Romain-Avocado-Salad-3-of-5-1.jpg')
Recipe.create!(name: 'Tequila Lime Mojitorita', ingredients: 'mint, lime juice, granulated sugar, tequila, sparkling water, lime', user:@admin, image_url: 'https://familystylefood.com/wp-content/uploads/2018/06/lime-mojitoritas-familystylefood.jpg')
Recipe.create!(name: 'Kefir and Oats Breakfast Bowl', ingredients: 'kefir, oats, maple syrup, pecans, almonds, kosher salt', user:@admin, image_url: 'https://assets.bonappetit.com/photos/57ad4c2ef1c801a1038bcb36/1:1/w_960,c_limit/ED9bnZx7MfG0atAj3_uJUi519kUiwuLnAwVepL4F8d8.jpg')
Recipe.create!(name: 'Coconut Ginger Refresher', ingredients: 'lemon juice, lime juice, coconut water, honey, ginger, sea salt', user:@admin, image_url: 'https://www.meghantelpner.com/wp-content/uploads/2009/02/Lemon-Lime-Coconut-Quench.jpg')
Recipe.create!(name: 'Five Spices Grilled Flank Steak', ingredients: 'flank steak, salt, hoisin sauce, sesame seeds', user:@admin, image_url: 'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Five-Spice-Steak-with-Salad-9.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768924&s=a1bc684420077ece30588960001271cc')
Recipe.create!(name: 'White Bean Parmesan Spinach Soup', ingredients: 'olive oil, yellow onion, garlic, vegetable broth, diced tomatoes, sugar, italian dried herbs, kosher salt, white beans, spinach, parmesan cheese, parsley', user:@admin, image_url: 'https://cafedelites.com/wp-content/uploads/2017/03/White-Bean-Soup-IMAGE-18-1.jpg')
Recipe.create!(name: 'Blueberry Ricotta Cake', ingredients: 'flour, sugar, baking powder, kosher salt, ricotta, eggs, lemon zest, vanilla extract, butter, blueberries', user:@admin, image_url: 'https://cdn.shortpixel.ai/spai/w_1388+q_lossy+ret_img+to_webp/https://casualfoodist.com/wp-content/uploads/2021/08/Blueberry-Ricotta-Cake-4.jpg')
Recipe.create!(name: 'Maple Syrup Bars', ingredients: 'butter, brown sugar, flour, maple syrup, walnuts, eggs, salt', user:@admin, image_url: 'https://www.simplystacie.net/wp-content/uploads/2014/08/Maple-Syrup-Bars15.jpg')
Recipe.create!(name: 'PB Banana Oats', ingredients: 'rolled oats, banana, almond milk, cinnamon, walnuts', user:@admin, image_url: 'https://feelgoodfoodie.net/wp-content/uploads/2019/01/How-to-Make-Oatmeal-6.jpg')
Recipe.create!(name: 'Hanger Steak with Mustard and Caramelized Onions', ingredients: 'butter, onion, dijon mustard, sea salt, freshly cracked black pepper, heavy cream, hanger steak, chives', user: @admin , image_url: 'https://d1omecegou7wuo.cloudfront.net/wp-content/uploads/2021/03/Hanger-steak-with-French-mustard-sauce.jpg')
Recipe.create!(name: 'Reposado Old Fashioned', ingredients: 'nectarine, cherries, agave nectar, tequila, bitters', user:@admin, image_url: 'https://www.thespruceeats.com/thmb/OgjbwoCFvfgiYXNvAq5kTiubK_o=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Reposado-OldFashioned-TequilaCocktail-001-45f843d65135497a8a365fbbe33dc6bb.jpg')
Recipe.create!(name: 'Creamy White Beans with Herb Oil', ingredients: 'chives, cilantro, basil, olive oil, lemon, kosher salt, garlic, white beans, black pepper, vegetable stock', user: @admin, image_url: 'https://static01.nyt.com/images/2018/07/11/dining/colu-creamy-beans-horizontal/colu-creamy-beans-horizontal-articleLarge.jpg')
Recipe.create!(name: 'Cleansing Green Smoothie', ingredients: 'kefir, cucumber, green apple, avocado, spinach, parsley, lemon juice', user:@admin, image_url: 'https://www.feastingathome.com/wp-content/uploads/2016/01/mexicali-green-smoothie-111.jpg')
Recipe.create!(name: 'Apple Cider Vinegar Dressing', ingredients: 'shallot, olive oil, apple cider vinegar, dijon mustard, honey, salt, pepper', user: @admin, image_url: 'https://www.healthyseasonalrecipes.com/wp-content/uploads/2015/01/apple-cider-vinegar-salad-dressing-015-1.jpg')
Recipe.create!(name: 'Mexican Quinoa', ingredients: 'olive oil, onion, bell peppers, cumin, coriander, garlic, quinoa, black beans, corn, diced tomatoes, kosher salt, black pepper, vegetable broth, cilantro, avocado, scallions, lime, pumpkin seeds', user:@admin, image_url: 'https://foolproofliving.com/wp-content/uploads/2020/08/Mexican-Quinoa-Recipe-640x640.jpg')
Recipe.create!(name: 'Sweet and Spicy Roasted Almonds', ingredients: 'almonds, olive oil, honey, kosher salt, sugar, cayenne pepper', user:@admin, image_url: 'https://thecafesucrefarine.com/wp-content/uploads/Sweet-and-Spicy-Roasted-Almonds-2.jpg')


#  ina
Recipe.create!(name: 'Penne Alla Vodka', ingredients: 'olive oil, yellow onion, garlic, oregano, red pepper flakes, vodka, plum tomatoes, black pepper, penne pasta, heavy cream, parmesan cheese', user:@ina , image_url:'https://d14iv1hjmfkv57.cloudfront.net/assets/recipes/penne-alla-vodka/_1200x600_crop_center-center_82_line/Page-159.jpg?mtime=20200413111343&focal=none&tmtime=20210324094720')

Recipe.create!(name: 'Homemade Ginger Beer', ingredients: 'sugar, ginger, active dry yeast, lemon juice', user:@ina , image_url: 'https://toriavey.com/images/2013/09/Ginger-TORI-AVEY-23.jpg')

# gordon
Recipe.create!(name: 'Caramelized Onion Dip', ingredients: 'sesame seeds, poppy seeds, garlic, onion, sea salt, yellow onion, kosher salt, cream cheese, chives, everything seasoning', user:@gordon, image_url: 'https://www.spoonforkbacon.com/wp-content/uploads/2019/04/Everything_seasoning_dip.jpg')

# Randomly Generate Recipes using Faker


# Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" , user:@admin, image_url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80')



# Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" ,user:@gordon, image_url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80')



# Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" ,user:@ina, image_url: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')




puts "#{Recipe.count} recipes created!"