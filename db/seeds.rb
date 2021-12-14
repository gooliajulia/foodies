# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
User.destroy_all

@admin = User.create!(username: 'Julia', password: '123456', image_url: 'https://media-exp1.licdn.com/dms/image/D4D03AQGCF9ln-ItOJg/profile-displayphoto-shrink_400_400/0/1637721714007?e=1645056000&v=beta&t=i3JzwEg3UcWhA7d8sTImJF1Zyr33fpEmzjVsZpU9s3U')
@gordon = User.create!(username: 'Gordon Ramsay', password: 'gordon', image_url: 'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s900-c-k-c0x00ffffff-no-rj')

puts "#{User.count} user accounts created!"

10.times do
    Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" , user:@admin, image_url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80')
end

10.times do
    Recipe.create!(name: Faker::Food.dish, ingredients:  "#{Faker::Food.ingredient}, #{Faker::Food.ingredient},  #{Faker::Food.ingredient}" ,
    user:@gordon, image_url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80')
end

puts "#{Recipe.count} recipes created!"