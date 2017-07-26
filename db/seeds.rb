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


kim = 'http://res.cloudinary.com/apark0720/image/upload/v1501016166/una_kim_e7vkxj.png'
stowell = 'http://res.cloudinary.com/apark0720/image/upload/v1501016168/ethan_stowell_oqsizf.png'
taneda = 'http://res.cloudinary.com/apark0720/image/upload/v1501016168/hideaki_taneda_hodprd.png'
niroula = 'http://res.cloudinary.com/apark0720/image/upload/v1501016166/prakash_niroula_er67ub.png'
burke = 'http://res.cloudinary.com/apark0720/image/upload/v1501016168/erika_burke_xlfp0k.png'
kahn = 'http://res.cloudinary.com/apark0720/image/upload/v1501016168/shimi_kahn_tsagro.png'
shane = 'http://res.cloudinary.com/apark0720/image/upload/v1501016166/shane_garett_m79w8s.png'

recipe1 = Recipe.create!(title: 'Char Siu Pork Buns', description: 'Chinese Style BBQ Pork', chef_name: 'Chef Shimi Kahn',
                         url: 'http://foodwishes.blogspot.com/2017/06/chinese-barbecue-pork-char-siu-take.html',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954706/recipe1_vbyjcs.jpg',
                         price: 10, recipe_source: 'Food Wishes', status: "pending", category: "savory", chef_image_url: kahn, creator_id: 1)

recipe2 = Recipe.create!(title: 'Spicy Korean Rice Cake with Cheese', description: 'Yum', chef_name: 'Chef Una Kim',
                         url: 'http://ymgs1888.blog.me/220470483292?Redirect=Log&from=postView',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954701/recipie2_an9ckp.jpg',
                         price: 12, recipe_source: 'Food N Table', status: "pending", category: "spicy", chef_image_url: kim, creator_id: 1)

recipe3 = Recipe.create!(title: 'American French Onion Soup', description: 'Yum', chef_name: 'Chef Ethan Stowell',
                         url: 'http://foodwishes.blogspot.com/2012/04/american-french-onion-soup-easy-just.html',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954707/recipe3_jytqpi.jpg',
                         price: 8, recipe_source: 'Food Wishes', status: "pending", category: "savory", chef_image_url: stowell, creator_id: 1)

recipe4 = Recipe.create!(title: 'Strawberry Daifuku Mochi', description: 'Yum', chef_name: 'Chef Hideaki Taneda',
                         url: 'https://www.youtube.com/watch?v=cdtCAasUwsI',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946268/recipe4_ltwufw.jpg',
                         price: 6, recipe_source: 'Daily Cook', status: "active", category: "sweet", chef_image_url: taneda, creator_id: 1)

recipe5 = Recipe.create!(title: 'Strawberry Oreo Parfait', description: 'Yum', chef_name: 'Chef Ethan Stowell',
                         url: 'https://www.youtube.com/watch?v=wZ5-sfl28jk',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946405/recipe5_vssff5.jpg',
                         price: 6, recipe_source: 'Cooking Tree', status: "pending", category: "sweet", chef_image_url: stowell, creator_id: 1)

recipe6 = Recipe.create!(title: 'Christmas Lasagna', description: 'Yum', chef_name: 'Chef Ericka Burke',
                         url: 'http://foodwishes.blogspot.com/2010/12/christmas-lasagna.html',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946407/recipe6_jch4as.jpg',
                         price: 6, recipe_source: 'Food Wishes', status: "pending", category: "savory", chef_image_url: burke, creator_id: 1)

recipe7 = Recipe.create!(title: 'Extra Large Matcha Kit Kats', description: 'Yum', chef_name: 'Chef Shimi Kahn',
                         url: 'http://blog.naver.com/ydiddnal',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946409/recipe7_ttchv2.jpg',
                         price: 6, recipe_source: "Umi's Baking", status: "pending", category: "sweet", chef_image_url: kahn, creator_id: 1)

recipe8 = Recipe.create!(title: 'KFC: Korean Fried Chicken', description: 'Yum', chef_name: 'Chef Una Kim',
                         url: 'https://www.youtube.com/watch?v=0NgEiyqa2KM',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954700/recipe8_ckdpek.jpg',
                         price: 6, recipe_source: 'HoneyKki', status: "pending", category: "spicy", chef_image_url: kim, creator_id: 1)

recipe9 = Recipe.create!(title: 'Bacon-Wrapped Scotch Eggs', description: 'Yum', chef_name: 'Chefs Shane & Garrett',
                         url: 'http://www.wideopencountry.com/how-to-make-delicious-bacon-wrapped-scotch-eggs-in-a-smoker/',
                         main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946413/recipe9_sbasn3.jpg',
                         price: 6, recipe_source: 'Wide Open Country', status: "pending", category: "savory", chef_image_url: shane, creator_id: 1)

recipe10 = Recipe.create!(title: 'Japanese Curry Udon', description: 'Yum', chef_name: 'Chef Hideaki Taneda',
                          url: 'http://ymgs1888.blog.me/220724314929?Redirect=Log&from=postView',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946417/recipe10_ahwzu8.png',
                          price: 12, recipe_source: 'Food N Table', status: "pending", category: "savory", chef_image_url: taneda, creator_id: 1)

recipe11 = Recipe.create!(title: 'Sausage & Shrimp Paella', description: 'Yum', chef_name: 'Chef Shimi Kahn',
                          url: 'http://foodwishes.blogspot.com/2013/08/sausage-shrimp-paella-before-you-run.html',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946423/recipe11_zkwfo4.jpg',
                          price: 6, recipe_source: 'Food Wishes', status: "active", category: "savory", chef_image_url: kahn, creator_id: 1)

recipe12 = Recipe.create!(title: 'Gochujang Baby Back Ribs with Cheese Fondue', description: 'Yum', chef_name: 'Chefs Shane & Garrett',
                          url: 'https://www.youtube.com/watch?v=XyUKev03188',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954703/recipe12_vjgicl.jpg',
                          price: 6, recipe_source: 'Food N Table', status: "active", category: "spicy", chef_image_url: shane, creator_id: 1)

recipe13 = Recipe.create!(title: 'Creamy Sweet Pumpkin Pasta', description: 'Yum', chef_name: 'Chef Prakash Niroula',
                          url: 'https://www.youtube.com/watch?v=zSU3DQVPLDE',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500946428/recipe13_gi0gpn.jpg',
                          price: 6, recipe_source: 'Livlong', status: "pending", category: "sweet", chef_image_url: niroula, creator_id: 1)

recipe14 = Recipe.create!(title: 'Sweet Potato Cake', description: 'Yum', chef_name: 'Chef Ericka Burke',
                          url: 'https://www.youtube.com/watch?v=zSU3DQVPLDE',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954591/recipe14_lcwx1a.jpg',
                          price: 6, recipe_source: 'Livlong', status: "pending", category: "sweet", chef_image_url: burke, creator_id: 1)

recipe15 = Recipe.create!(title: 'Gyudon: Steak Rice Bowl', description: 'Yum', chef_name: 'Chef Hideaki Taneda',
                          url: 'https://www.youtube.com/watch?v=2yX69ZmltPc',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954708/recipe10_rtcn2h.jpg',
                          price: 6, recipe_source: "Umi's Cooking", status: "pending", category: "savory", chef_image_url: taneda, creator_id: 1)

recipe16 = Recipe.create!(title: 'Shakshuka: Eggs Poached in Spicy Tomato Pepper Sauce', description: 'Yum', chef_name: 'Chef Prakash Niroula',
                          url: 'http://foodwishes.blogspot.com/2015/10/shakshuka-say-it-with-me-now.html',
                          main_image_url: 'http://res.cloudinary.com/apark0720/image/upload/v1500954605/recipe16_r2ilom.jpg',
                          price: 6, recipe_source: 'Food Wishes', status: "active", category: "spicy", chef_image_url: niroula, creator_id: 1)
