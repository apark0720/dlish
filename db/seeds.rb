# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(email: 'guest@dlishfood.co', password: '123456')
User.create!(email: 'apark0720@gmail.com', password: '123456')
User.create!(email: 'park1013@gmail.com', password: '123456')
User.create!(email: 'palex@umich.edu', password: '123456')
User.create!(email: 'ap2903@nyu.edu', password: '123456')

recipe1 = Recipe.create!(title: 'Char Siu Pork Buns', description: 'Chinese Style BBQ Pork', chef_name: 'Chef Tanya Jirapol', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://foodwishes.blogspot.com/2017/06/chinese-barbecue-pork-char-siu-take.html', main_image_url: '1', price: 10, lowest_price: 8,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food Wishes', creator_id: 1)

recipe2 = Recipe.create!(title: 'Spicy Korean Rice Cake with Cheese', description: 'Yum', chef_name: 'Chef Una Kim', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://ymgs1888.blog.me/220470483292?Redirect=Log&from=postView', main_image_url: '1', price: 12, lowest_price: 9,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food N Table', creator_id: 1)

recipe3 = Recipe.create!(title: 'American French Onion Soup', description: 'Yum', chef_name: 'Chef Ethan Stowell', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://foodwishes.blogspot.com/2012/04/american-french-onion-soup-easy-just.html', main_image_url: '1', price: 8, lowest_price: 6,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food Wishes', creator_id: 1)

recipe4 = Recipe.create!(title: 'Strawberry Daifuku Mochi', description: 'Yum', chef_name: 'Chef Hideaki Taneda', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'https://www.youtube.com/watch?v=cdtCAasUwsI', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Daily Cook', creator_id: 1)

recipe5 = Recipe.create!(title: 'Strawberry Oreo Parfait', description: 'Yum', chef_name: 'Chef Prakash Niroula', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'https://www.youtube.com/watch?v=wZ5-sfl28jk', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Cooking Tree', creator_id: 1)

recipe6 = Recipe.create!(title: 'Christmas Lasgna', description: 'Yum', chef_name: 'Chef Ericka Burke', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://foodwishes.blogspot.com/2010/12/christmas-lasagna.html', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food Wishes', creator_id: 1)

recipe7 = Recipe.create!(title: 'Extra Large Matcha Kit Kats', description: 'Yum', chef_name: 'Chef Shimi Kahn', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://blog.naver.com/ydiddnal', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: "Umi's Baking", creator_id: 1)

recipe8 = Recipe.create!(title: 'KFC: Korean Fried Chicken', description: 'Yum', chef_name: 'Chef Una Kim', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'https://www.youtube.com/watch?v=0NgEiyqa2KM', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'HoneyKki', creator_id: 1)

recipe9 = Recipe.create!(title: 'Bacon-Wrapped Scotch Eggs', description: 'Yum', chef_name: 'Chefs Shane & Garrett', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                         url: 'http://www.wideopencountry.com/how-to-make-delicious-bacon-wrapped-scotch-eggs-in-a-smoker/', main_image_url: '1', price: 6, lowest_price: 4,
                         order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Wide Open Country', creator_id: 1)

recipe10 = Recipe.create!(title: 'Japanese Curry Udon', description: 'Yum', chef_name: 'Chef Hideaki Taneda', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'http://ymgs1888.blog.me/220724314929?Redirect=Log&from=postView', main_image_url: '1', price: 12, lowest_price: 9,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food N Table', creator_id: 1)

recipe11 = Recipe.create!(title: 'Sausage & Shrimp Paella', description: 'Yum', chef_name: 'Chef Shimi Kahn', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'http://foodwishes.blogspot.com/2013/08/sausage-shrimp-paella-before-you-run.html', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food Wishes', creator_id: 1)

recipe12 = Recipe.create!(title: 'Gochujang Baby Back Ribs with Cheese Fondue', description: 'Yum', chef_name: 'Chefs Shane & Garrett', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'https://www.youtube.com/watch?v=XyUKev03188', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food N Table', creator_id: 1)

recipe13 = Recipe.create!(title: 'Creamy Sweet Pumpkin Pasta', description: 'Yum', chef_name: 'Chef Prakash Niroula', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'https://www.youtube.com/watch?v=zSU3DQVPLDE', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Livlong', creator_id: 1)

recipe14 = Recipe.create!(title: 'Sweet Potato Cake', description: 'Yum', chef_name: 'Chef Ericka Burke', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'https://www.youtube.com/watch?v=zSU3DQVPLDE', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Livlong', creator_id: 1)

recipe15 = Recipe.create!(title: 'Gyudon: Steak Rice Bowl', description: 'Yum', chef_name: 'Chef Hideaki Taneda', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'https://www.youtube.com/watch?v=2yX69ZmltPc', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: "Umi's Cooking", creator_id: 1)

recipe16 = Recipe.create!(title: 'Shakshuka: Eggs Poached in Spicy Tomato Pepper Sauce', description: 'Yum', chef_name: 'Chef Prakash Niroula', delivery_address: '160 Spear St., San Francisco, CA', delivery_datetime: DateTime.new(2017, 7, 30, 12, 30),
                          url: 'http://foodwishes.blogspot.com/2015/10/shakshuka-say-it-with-me-now.html', main_image_url: '1', price: 6, lowest_price: 4,
                          order_by_date: DateTime.new(2017, 7, 29, 22), recipe_source: 'Food Wishes', creator_id: 1)
