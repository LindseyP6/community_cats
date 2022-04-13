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
User.create(
    name: "Diane", 
    email: "di@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password_digest: "123"
)
User.create(
    name: "Mei", 
    email: "mei@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password_digest: "123"
)

Cat.create(
    name: "Alfie",
    image: "../images/alfie.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Grey/brown tabbie",
    temperament: "friendly but feral, elusive",
    tnr_status: "Yes",
    trap_date: "07-24-2020",
    tnr_date: "07-27-2020",
    special_notes: "Pregnant; released 7/31, never seen again",
    user_id: User.all.sample.id,
    address: "1624 84th Street, Brookly, NY 11214"
)
Cat.create(
    name: "Luna",
    image: "../images/luna.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Black with white spots on chest and groin, green-yellow eyes",
    temperament: "Very friendly, follows and meows at humans",
    tnr_status: "Yes",
    trap_date: "07-24-2020",
    tnr_date: "07-27-2020",
    special_notes: "Pregnant, released 7/31",
    user_id: User.all.sample.id,
    address: "1610 84th Street, Brooklyn, NY 11228"
)
Cat.create(
    name: "Spooky",
    image: "../images/spooky.jpeg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "All black, medium sized",
    temperament: "Aggressive, feral, friendly with 1 human, calmed down since TNR",
    tnr_status: "Yes",
    trap_date: "08-22-2020",
    tnr_date: "08-24-2020",
    special_notes: "Feed by a rude man between 16th & 17th",
    user_id: User.all.sample.id,
    address: "1651 83rd Street, Brooklyn NY 11214"
)
Cat.create(
    name: "Ally",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "All black with yellow eyes",
    temperament: "Cautious, calm, gets along with other cats",
    tnr_status: "Yes",
    trap_date: "10-10-2020",
    tnr_date: "10-9-2020",
    special_notes: "Pregnant",
    user_id: User.all.sample.id,
    address: "1604 83rd Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Wink",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "All black with one green eye",
    temperament: "Cautious, calm, gets along with other cats",
    tnr_status: "Yes",
    trap_date: "10-19-2020",
    tnr_date: "10-25-2020",
    special_notes: "Pregnant",
    user_id: User.all.sample.id,
    address: "1634 83rd Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Whinnie",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Grey tabby with white belly and legs. Big, yellow eyes.",
    temperament: "Calm, friendly, meows and follows you around.",
    tnr_status: "Yes",
    trap_date: "10-21-2020",
    tnr_date: "Tipped before 10/21/2020",
    special_notes: "Already tipped when I caught her. Released right after. Still around",
    user_id: User.all.sample.id,
    address: "8219 16th Avenue, Brooklyn, NY 11214"
)
Cat.create(
    name: "Kiki",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Grey tabby, young.",
    temperament: "Calm but scared.",
    tnr_status: "Yes",
    trap_date: "11-1-2020",
    tnr_date: "11-4-2020",
    special_notes: "Scared",
    user_id: User.all.sample.id,
    address: "1643 83rd Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Micah",
    image: "../images/ally.jpeg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Black and white tuxedo cat with light blue eyes.",
    temperament: "Scared, timid, almost friendly.",
    tnr_status: "Yes",
    trap_date: "1-22-2021",
    tnr_date: "1-23-2021",
    special_notes: "Treated for eye issues before released 3 weeks later",
    user_id: User.all.sample.id,
    address: "1553 82nd Street, Brooklyn, NY 11228"
)
Cat.create(
    name: "Sylvester",
    image: "../images/ally.jpeg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Black and white body. Yellow eyes. Nose is white and face is black.",
    temperament: "Aggressive, not happy to be trapped.",
    tnr_status: "Yes",
    trap_date: "1-22-2021",
    tnr_date: "1-23-2021",
    special_notes: "Hangs around in my front yard all of the time.",
    user_id: User.all.sample.id,
    address: "1609 84th Street, Brooklyn, NY 11228"
)
Cat.create(
    name: "Bonnie C.",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Light grey and brown tabby. Skinny.",
    temperament: "Fiercly protective, scared.",
    tnr_status: "Yes",
    trap_date: "11-13-2020",
    tnr_date: "1-15-2021",
    special_notes: "Mother of 10 week kittens who were adopted!",
    user_id: User.all.sample.id,
    address: "1549 84th Street, Brooklyn, NY 11228"
)
Cat.create(
    name: "Ginger",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Large orange tabby",
    temperament: "Timid, cute, rolls around a lot",
    tnr_status: "Yes",
    trap_date: "1-22-2021",
    tnr_date: "1-23-2021",
    special_notes: "Maybe someone's housecat",
    user_id: User.all.sample.id,
    address: "8316 16th Avenue, Brooklyn, NY 11228"
)
Cat.create(
    name: "The Nose",
    image: "../images/ally.jpeg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Tuxedo cat with solid black nose",
    temperament: "Friendly, curious.",
    tnr_status: "Yes",
    trap_date: "2-27-2021",
    tnr_date: "2-28-2021",
    special_notes: "Has a crew with Spooky.",
    user_id: User.all.sample.id,
    address: "1673 83rd Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Dot",
    image: "../images/ally.jpeg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Mostly black cat with white on the chest and face. Two black dots on the nose.",
    temperament: "Young, friendly, confident.",
    tnr_status: "Yes",
    trap_date: "4-14-2021",
    tnr_date: "4-16-2021",
    special_notes: "Maybe someone's housecat",
    user_id: User.all.sample.id,
    address: "1827 84th Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Jenny",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Small grey and brown tabby cat. Stripped tail",
    temperament: "Shy but sweet.",
    tnr_status: "Yes",
    trap_date: "5-2-2021",
    tnr_date: "5-3-2021",
    special_notes: "Maybe someone's housecat",
    user_id: User.all.sample.id,
    address: "1735 84th Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Mama Meow Meow",
    image: "../images/ally.jpeg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Slender tuxedo cat",
    temperament: "Sweet and curious, friendly.",
    tnr_status: "Yes",
    trap_date: "9-12-2021",
    tnr_date: "9-15-2021",
    special_notes: "Taken care of by family nearby, has had at least 5 litters of kittens",
    user_id: User.all.sample.id,
    address: "1645 84th Street, Brooklyn, NY 11214"
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