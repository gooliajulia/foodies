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

puts "#{User.count} user accounts created!"

15.times do
    Recipe.create!(name: Faker::Food.dish, ingredients: Faker::Food.ingredient , user:@admin)
end

puts "#{Recipe.count} recipes created!"