Cat.destroy_all
User.destroy_all
Interaction.destroy_all

User.create(
    name: "Lindsey", 
    email: "lindsisradd@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password_digest: "123"
)
User.create(
    name: "Nicole", 
    email: "nicnak@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password_digest: "123"
)
User.create(
    name: "Cindy", 
    email: "cindy@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password_digest: "123"
)

Cat.create(
    name: "Alfie",
    image: "../images/alfie.jpeg",
    gender: "female",
    latitude: 40.611282,
    longitutde: -74.005848,
    description: "Grey/brown tabbie",
    temperament: "friendly but feral, elusive",
    tnr_status: "Yes",
    tnr_date: "07-27-2020",
    trap_date: "07-24-2020",
    special_notes: "Pregnant; released 7/31, never seen again",
    user_id: User.all.sample.id
)
Cat.create(
    name: "Luna",
    image: "../images/luna.jpeg",
    gender: "female",
    latitude: 40.611270,
    longitutde: -74.005821,
    description: "Black with white spots on chest and groin, green-yellow eyes",
    temperament: "Very friendly, follows and meows at humans",
    tnr_status: "Yes",
    tnr_date: "07-27-2020",
    trap_date: "07-24-2020",
    special_notes: "Pregnant, released 7/31",
    user_id: User.all.sample.id
)
Cat.create(
    name: "Spooky",
    image: "../images/spooky.jpeg",
    gender: "male",
    latitude: 40.611220,
    longitutde: -74.004120,
    description: "All black, medium sized",
    temperament: "Aggressive, feral, friendly with 1 human, calmed down since TNR",
    tnr_status: "Yes",
    tnr_date: "08-22-2020",
    trap_date: "08-24-2020",
    special_notes: "Feed by a rude man between 16th & 17th",
    user_id: User.all.sample.id
)
Cat.create(
    name: "Ally",
    image: "../images/ally.jpeg",
    gender: "female",
    latitude: 40.611427,
    longitutde: -74.005551,
    description: "All black with yellow eyes",
    temperament: "Cautious, calm, gets along with other cats",
    tnr_status: "Yes",
    tnr_date: "10-10-2020",
    trap_date: "10-9-2020",
    special_notes: "Pregnant",
    user_id: User.all.sample.id
)

Interaction.create(
    comment: "What a cute cat!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
Interaction.create(
    comment: "This cat needs to be trapped ASAP!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
Interaction.create(
    comment: "I feed this cat at least once a week!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
Interaction.create(
    comment: "I saw this cat on 86th Street last night.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)