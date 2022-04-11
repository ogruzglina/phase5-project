# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

n_chargers = 40
types = ['Nema 1450', 'Nema 515', 'Nema 520', 'Nema 6-50', 'Tesla Wall Connector', 'Enel X JuiceBox 40', 'ClipperCreek EV Charging Station']

n_chargers.times do 
    type = types.sample
    hours = "#{rand(6..11)}:00 - #{rand(12..23)}:00"
    address = Faker::Address.full_address
    status = [true, false].sample
    cost = rand(9.82..32.0).round(2)
    fee = rand(0..10)
    latitude = Faker::Address.latitude
    longitude = Faker::Address.longitude
    Charger.create(charger_type: type, hours: hours, address: address, status: status, cost: cost, fee: fee, latitude: latitude, longitude: longitude)
end

n_users = 30
domains = ["gmail.com", "hotmail.com", "i.ua", "yahoo.com", "outlook.com"]

n_users.times do
    gender = ['men', 'women'].sample
    name = gender == 'men' ? Faker::Name.male_first_name : Faker::Name.female_first_name
    last_name = Faker::Name.last_name
    username = name.first.downcase + last_name.downcase
    email = username + "@" + domains.sample
    password_digest = Faker::Internet.password(min_length: 6, max_length: 8, mix_case: true, special_characters: true)
    ch_id = [rand(0..n_chargers), nil].sample
    avatar = ["https://randomuser.me/api/portraits/thumb/#{ gender }/#{ rand(1..70) }.jpg", "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="].sample

    User.create(username: username, password_digest: password_digest, avatar: avatar, email: email, charger_id: ch_id)
end 

n_reviews = 5
reviews = [
    "Owner was rude!",
    "All good, you can come and charge",
    "Works fine",
    "They save my life :)",
    "Too slow"
]

n_reviews.times do
    user_id = rand(1..n_users)
    charger_id = rand(1..n_chargers)
    review = reviews.sample
    Review.create(user_id: user_id, charger_id: charger_id, review: review)
end

puts "🌱 Done seeding!"
