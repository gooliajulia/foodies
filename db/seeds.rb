# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.destroy_all
User.destroy_all

@admin = User.create!(username: 'Julia', password: '123456')
@gordon = User.create!(username: 'Gordon Ramsey', password: 'gordon')

puts "#{User.count} user accounts created!"

10.times do
    Recipe.create!(name: Faker::Food.dish, ingredients: Faker::Food.ingredient , user:@admin, image_url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80')
end

10.times do
    Recipe.create!(name: Faker::Food.dish, ingredients: Faker::Food.ingredient , user:@gordon, image_url: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80')
end

puts "#{Recipe.count} recipes created!"