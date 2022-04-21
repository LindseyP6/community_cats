Cat.destroy_all
User.destroy_all
Interaction.destroy_all
require 'faker'

User.create(
    name: "Lindsey", 
    email: "linds@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password: "123"
)
User.create(
    name: "Nicole", 
    email: "nic@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password: "123"
)
User.create(
    name: "Cindy", 
    email: "cindy@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password: "123"
)
User.create(
    name: "Diane", 
    email: "di@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password: "123"
)
User.create(
    name: "Mei", 
    email: "mei@gmail.com", 
    location: "Brooklyn, New York", 
    image: "", 
    password: "123"
)

Cat.create(
    name: "Alfie",
    image: "https://live.staticflickr.com/65535/52014451727_187035e444_z.jpg",
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
    image: "https://live.staticflickr.com/65535/52014451707_d3a594020e_c.jpg",
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
    image: "https://live.staticflickr.com/65535/52015730239_64ec11debb_c.jpg",
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
    image: "https://live.staticflickr.com/65535/52015730439_94284e7ef0.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "All black with yellow eyes",
    temperament: "Cautious, calm, gets along with other cats",
    tnr_status: "Yes",
    trap_date: "10-9-2020",
    tnr_date: "10-10-2020",
    special_notes: "Pregnant",
    user_id: User.all.sample.id,
    address: "1621 86th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Wink",
    image: "https://live.staticflickr.com/65535/52015730169_26204911b4_c.jpg",
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
    image: "https://live.staticflickr.com/65535/51843040100_8904302794_c.jpg",
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
    image: "https://live.staticflickr.com/65535/52015479766_527199011e_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Grey tabby, young with a lot of white on the underbelly.",
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
    image: "https://live.staticflickr.com/65535/52016099765_5f3387dc0f_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Black and white tuxedo cat with light green eyes.",
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
    image: "https://live.staticflickr.com/65535/52018235566_be5f92f6f7_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Large tuxedo cat with white spot on face and black nose. All paws white! Bright green eyes.",
    temperament: "semi-aggressive, not happy to be trapped.",
    tnr_status: "Yes",
    trap_date: "1-22-2021",
    tnr_date: "1-23-2021",
    special_notes: "Hangs around in my front yard all of the time.",
    user_id: User.all.sample.id,
    address: "1609 84th Street, Brooklyn, NY 11228"
)
Cat.create(
    name: "Bonnie C.",
    image: "https://live.staticflickr.com/65535/52015612463_3f62ffa309_c.jpg",
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
    address: "8101 15th Ave, Brooklyn, NY 11228"
)
Cat.create(
    name: "Ginnie",
    image: "https://live.staticflickr.com/65535/52016099750_b9c23a06b7_c.jpg",
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
    address: "8404 14th Avenue, Brooklyn, NY 11228"
)
Cat.create(
    name: "The Nose",
    image: "https://live.staticflickr.com/65535/52015479846_fea999638f_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Tuxedo cat, black back with white underbelly with solid black heart-shaped nose",
    temperament: "Friendly, curious, hangs with other cats in the block.",
    tnr_status: "Yes",
    trap_date: "2-27-2021",
    tnr_date: "2-28-2021",
    special_notes: "Has a crew with Spooky.",
    user_id: User.all.sample.id,
    address: "1673 83rd Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Dot",
    image: "https://live.staticflickr.com/65535/52015662933_082e7f8590_c.jpg",
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
    image: "https://live.staticflickr.com/65535/52015528043_35c2f0c709_c.jpg",
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


Cat.create(
    name: "Little Mama",
    image: "https://live.staticflickr.com/65535/52015730314_8bec20db49_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Small and young tabby cat with white jaw. More grey than brown",
    temperament: "Very very shy but takes risks ",
    tnr_status: "No",
    trap_date: "N/A",
    tnr_date: "N/A",
    special_notes: "Has kittens but can't find them. Feeding kitten food",
    user_id: User.all.sample.id,
    address: "8123 16th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "Fred",
    image: "https://live.staticflickr.com/65535/52016075605_c2714b73d7_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Large grey tabby cat with white chest, paws and half white nose. Yellow eyes",
    temperament: "Cautious, quick to react, fast to leave.",
    tnr_status: "Yes",
    trap_date: "2-24-2021",
    tnr_date: "2-27-2021",
    special_notes: "Found in snow, treated for a cold",
    user_id: User.all.sample.id,
    address: "1710 85th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Biggie",
    image: "https://live.staticflickr.com/65535/52015866764_e151314893_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Large grey tabby cat with white feed and white diamond between eyes",
    temperament: "Territorial, aggressive with other cats. Feral.",
    tnr_status: "Yes",
    trap_date: "4-4-2021",
    tnr_date: "4-6-2021",
    special_notes: "New to the area",
    user_id: User.all.sample.id,
    address: "1645 84th Street, Brooklyn, NY 11214"
)
Cat.create(
    name: "Tippy Toes",
    image: "https://live.staticflickr.com/65535/52015866749_919e7d2999_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Tuxedo cat with white chest and white strip between eyes; bright pink nose and yellow eyes",
    temperament: "Friendly, fast.",
    tnr_status: "Yes",
    trap_date: "9-12-2021",
    tnr_date: "9-15-2021",
    special_notes: "Part of a crew on the corner",
    user_id: User.all.sample.id,
    address: "1543 83rd St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Aida",
    image: "https://live.staticflickr.com/65535/52016075620_080e5a35a7_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Medium sized brown tabby cat with light tan mouth and stripped tail",
    temperament: "Very friendly, meows when she is fed, loner.",
    tnr_status: "Yes",
    trap_date: "3-30-2021",
    tnr_date: "4-2-2021",
    special_notes: "Hangs on the porches of this blocks and rarely leaves",
    user_id: User.all.sample.id,
    address: "1564 82nd St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Sally",
    image: "https://live.staticflickr.com/65535/52015730289_d857c2fac4_b.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Black cat with yellow eyes and tiddy-whities!",
    temperament: "Very friendly, calm, funny",
    tnr_status: "Yes",
    trap_date: "6-1-2021",
    tnr_date: "5-2-2021",
    special_notes: "Was prengnat",
    user_id: User.all.sample.id,
    address: "1439 84th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "JJ",
    image: "https://live.staticflickr.com/65535/52015479881_6811e784c3_w.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Small and skinny black cat, yellow eyes",
    temperament: "Loner, skiddish.",
    tnr_status: "Yes",
    trap_date: "3-10-2021",
    tnr_date: "3-12-2021",
    special_notes: "Taken care of by family nearby, has had at least 5 litters of kittens",
    user_id: User.all.sample.id,
    address: "1665 85th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "JJ Jr",
    image: "https://live.staticflickr.com/65535/52015528078_7fc5539bbd_n.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Older kitten, black body and 1/2 white face with white chest",
    temperament: "Scared, timid.",
    tnr_status: "Yes",
    trap_date: "7-30-2021",
    tnr_date: "7-31-2021",
    special_notes: "Has 2/3 siblings",
    user_id: User.all.sample.id,
    address: "1682 81st St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Apollo",
    image: "https://live.staticflickr.com/65535/52015998530_e83d6a1a0b_n.jpg",
    gender: "unknown",
    # latitude: 
    # longitude: 
    description: "BEAUTIFUL light grey with some stripes, small",
    temperament: "Elusive, shy, fast",
    tnr_status: "No",
    trap_date: "N/A",
    tnr_date: "N/A",
    special_notes: "Seen only 2 times over months",
    user_id: User.all.sample.id,
    address: "8101 15th Ave, Brooklyn, NY 11228"
)
Cat.create(
    name: "Babu",
    image: "https://live.staticflickr.com/65535/52014451862_b8ba569d27_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Grey and white cat with some white in mouth and very light eyes",
    temperament: "Sweet, brave, hungry.",
    tnr_status: "Yes",
    trap_date: "8-3-2021",
    tnr_date: "8-5-2021",
    special_notes: "Eats in multiple places",
    user_id: User.all.sample.id,
    address: "8418 17th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "Marg",
    image: "https://live.staticflickr.com/65535/52014451822_89af622a09_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "6 week old kitten found with sibling, fluffy brown tabby with green eyes",
    temperament: "Adorable, sweet but shy.",
    tnr_status: "No",
    trap_date: "11-3-2021",
    tnr_date: "N/A",
    special_notes: "Will be adopted!",
    user_id: User.all.sample.id,
    address: "8661 16th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "Homie",
    image: "https://live.staticflickr.com/65535/52015479946_86b650563c_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "6 week old kitten found with sibling, fluffy 'russian blue'",
    temperament: "very scared, hissing non-stop.",
    tnr_status: "No",
    trap_date: "11-3-2021",
    tnr_date: "N/A",
    special_notes: "Will be adopted!",
    user_id: User.all.sample.id,
    address: "8663 16th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "Queen Fifi",
    image: "https://live.staticflickr.com/65535/52015730394_b73c043b48_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Very old cat, brown tabby with white face/mouth",
    temperament: "SWEETEST CAT!.",
    tnr_status: "No",
    trap_date: "11-11-2021",
    tnr_date: "11-12-2021",
    special_notes: "Lets everyone pet her, known by the entire block",
    user_id: User.all.sample.id,
    address: "8002 17th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "Frances",
    image: "https://live.staticflickr.com/65535/52015528108_dea0ef983e_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "All Black cat with small but healing scratch on nose, light eyes",
    temperament: "Sweet cat, confident",
    tnr_status: "Yes",
    trap_date: "1-1-2022",
    tnr_date: "1-2-2022",
    special_notes: "Lets everyone pet her, known by the entire block",
    user_id: User.all.sample.id,
    address: "1703 81st St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Frankie",
    image: "https://live.staticflickr.com/65535/52015479801_4d546be9cd_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Medium sized tuxedo cat with white patch on nose, chest and paws",
    temperament: "Loud, confident",
    tnr_status: "Yes",
    trap_date: "1-4-2022",
    tnr_date: "1-5-2022",
    special_notes: "Lets everyone pet them, known by the entire block",
    user_id: User.all.sample.id,
    address: "1703 81st St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Shadow",
    image: "https://live.staticflickr.com/65535/52014451612_6234df3ba4_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Tuxedo cat with bright green eyes",
    temperament: "Aggressive, sneaky",
    tnr_status: "Yes",
    trap_date: "12-1-2021",
    tnr_date: "12-2-2021",
    special_notes: "Stay away from this one!",
    user_id: User.all.sample.id,
    address: "1679 81st St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Tigger",
    image: "https://live.staticflickr.com/65535/52015730209_d22a3301ff_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Light grey tabby with stripped tail and white mouth",
    temperament: "Not friendly, cautious",
    tnr_status: "Yes",
    trap_date: "12-11-2021",
    tnr_date: "12-18-2021",
    special_notes: "Scares way other cats",
    user_id: User.all.sample.id,
    address: "1537 84th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Blue",
    image: "https://live.staticflickr.com/65535/52015730354_5a18764f6c_w.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Large russian blue cat with grumpy looking face",
    temperament: "Shy, easily spooked, sweet",
    tnr_status: "Yes",
    trap_date: "10-13-2021",
    tnr_date: "10-16-2021",
    special_notes: "Friends with other cats in the area",
    user_id: User.all.sample.id,
    address: "1581 85th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Ginger",
    image: "https://live.staticflickr.com/65535/52015528103_80df83d473_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Large orange cat with some tabby stripes and a white tipped tail",
    temperament: "Friendly, shy",
    tnr_status: "Yes",
    trap_date: "10-22-2021",
    tnr_date: "10-26-2021",
    special_notes: "Friends with other cats in the area",
    user_id: User.all.sample.id,
    address: "8622 15th Ave, Brooklyn, NY 11228"
)
Cat.create(
    name: "Posh",
    image: "https://live.staticflickr.com/65535/52014451872_0241fa0903_z.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Very small brown tabby with white mouth",
    temperament: "Shy, a little aggressive, not very confident",
    tnr_status: "Yes",
    trap_date: "2-5-2022",
    tnr_date: "2-6-2022",
    special_notes: "Friends with other cats in the area",
    user_id: User.all.sample.id,
    address: "8652 15th Ave, Brooklyn, NY 11228"
)
Cat.create(
    name: "Sporty",
    image: "https://live.staticflickr.com/65535/52015998645_b6934293b8_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Very large brown/grey tabby with distint stripes",
    temperament: "Lazy, loud, a bit timid",
    tnr_status: "Yes",
    trap_date: "4-2-2022",
    tnr_date: "46-2022",
    special_notes: "Barely leaves my yard",
    user_id: User.all.sample.id,
    address: "44 Bay 8th St, New York 11228"
)
Cat.create(
    name: "Baby",
    image: "https://live.staticflickr.com/65535/51843040080_8014364464_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Small black and white kitten with white mouths and front paws",
    temperament: "Friendly, active,",
    tnr_status: "Yes",
    trap_date: "11-22-2021",
    tnr_date: "11-23-2021",
    special_notes: "Wobbles when it walks, may have CH",
    user_id: User.all.sample.id,
    address: "31 Bay 10th St #1, Brooklyn, NY 11228"
)
Cat.create(
    name: "Scary",
    image: "https://live.staticflickr.com/65535/52016123729_4d1721ca29_b.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Slender orange tabby with white neck and bottoms of paws",
    temperament: "Aggressive, confident, loud",
    tnr_status: "Yes",
    trap_date: "2-2-2022",
    tnr_date: "2-3-2022",
    special_notes: "Definitely the father to many cats",
    user_id: User.all.sample.id,
    address: "1437 85th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Callie",
    image: "https://live.staticflickr.com/65535/52015919928_a48a2a4a1c_b.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Small and young calico cat with white face and chest, mostly orange body, green eyes",
    temperament: "Elusive but sweet, meows often",
    tnr_status: "Yes",
    trap_date: "3-22-2022",
    tnr_date: "3-23-2022",
    special_notes: "Haven't seeen often",
    user_id: User.all.sample.id,
    address: "1516 83rd St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Lily",
    image: "https://live.staticflickr.com/65535/52016391625_89e86caec1_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Large older calico cat, white chest and face with black ears",
    temperament: "Slightly aggressive, doesn't hang with other cats",
    tnr_status: "Yes",
    trap_date: "3-12-2022",
    tnr_date: "3-13-2022",
    special_notes: "Might have a year old litter of kittens in the area",
    user_id: User.all.sample.id,
    address: "1516 83rd St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Didi",
    image: "https://live.staticflickr.com/65535/52015919908_a154346a64_b.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Medium grey cat with orange under tones. White mouth and orange fur around green eyes",
    temperament: "Shy, quick, smart",
    tnr_status: "Yes",
    trap_date: "1-27-2022",
    tnr_date: "1-28-2022",
    special_notes: "Unique coloring",
    user_id: User.all.sample.id,
    address: "1521 84th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Janey",
    image: "https://live.staticflickr.com/65535/52015875241_52f46f4f6a_b.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "VERY SKINNY calico cat with white underside and legs, skinny tail",
    temperament: "Sickly, slow, shy",
    tnr_status: "Yes",
    trap_date: "2-27-2022",
    tnr_date: "3-8-2022",
    special_notes: "Treated for a few illnesses, stayed with vet for a week",
    user_id: User.all.sample.id,
    address: "1563 80th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Lee",
    image: "https://live.staticflickr.com/65535/52016150374_42dc8884e3_w.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "All white kitten, slender, pink nose ",
    temperament: "Scared, a little rude but curious",
    tnr_status: "Yes",
    trap_date: "2-27-2022",
    tnr_date: "3-8-2022",
    special_notes: "Takes food from the other cats",
    user_id: User.all.sample.id,
    address: "1620 80th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Vickie",
    image: "https://live.staticflickr.com/65535/52016150384_00f006d57f_b.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Black and orange tortoiseshell cat, black nose and yellow eyes, medium size",
    temperament: "Meek, timid, doesn't eat much",
    tnr_status: "Yes",
    trap_date: "2-27-2022",
    tnr_date: "3-8-2022",
    special_notes: "Loner",
    user_id: User.all.sample.id,
    address: "1555 85th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "June",
    image: "https://live.staticflickr.com/65535/52018748220_8119a2e839_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Grey and white tabby, large. green eyes.",
    temperament: "Friendly, curious, affectionate",
    tnr_status: "Yes",
    trap_date: "6-6-2021",
    tnr_date: "6-8-2021",
    special_notes: "Will rub on your legs!",
    user_id: User.all.sample.id,
    address: "8224 15th Ave, Brooklyn, NY 11228"
)
Cat.create(
    name: "Mei Jr.",
    image: "https://live.staticflickr.com/65535/52015922776_5de5dc87f8_c.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Mostly black tuxedo with white around mouth, yellow eyes",
    temperament: "Brave, bold",
    tnr_status: "Yes",
    trap_date: "7-7-2021",
    tnr_date: "7-9-2021",
    special_notes: "Will rub on your legs!",
    user_id: User.all.sample.id,
    address: "81577 81st St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Sassy",
    image: "https://live.staticflickr.com/65535/52016201379_2ea6d2b007_w.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "small grey and brown tabby",
    temperament: "Friendly, brave",
    tnr_status: "Yes",
    trap_date: "7-17-2021",
    tnr_date: "7-19-2021",
    special_notes: "Likes to be hand fed",
    user_id: User.all.sample.id,
    address: "1650 84th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Tara",
    image: "https://live.staticflickr.com/65535/52015996973_ebef2fb7eb_n.jpg",
    gender: "female",
    # latitude: 
    # longitude: 
    description: "Older kitten, light orange body with black back and tail",
    temperament: "Cautious, very scared, loves other cats",
    tnr_status: "Yes",
    trap_date: "4-17-2022",
    tnr_date: "4-19-2022",
    special_notes: "Loves dogs",
    user_id: User.all.sample.id,
    address: "1650 84th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Ted",
    image: "https://live.staticflickr.com/65535/52016215619_fcd042025c_m.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Brown tabby cat with some orange undertones, distanct front legs",
    temperament: "Very friendly, brave",
    tnr_status: "Yes",
    trap_date: "3-17-2022",
    tnr_date: "3-18-2022",
    special_notes: "Loves the strain stations and cars",
    user_id: User.all.sample.id,
    address: "1740 84th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Ted",
    image: "https://live.staticflickr.com/65535/52016215619_fcd042025c_m.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Brown tabby cat with some orange undertones, distanct front legs",
    temperament: "Very friendly, brave",
    tnr_status: "Yes",
    trap_date: "3-17-2022",
    tnr_date: "3-18-2022",
    special_notes: "Loves the strain stations and cars",
    user_id: User.all.sample.id,
    address: "1532-34 86th St, Brooklyn, NY 11228"
)
Cat.create(
    name: "Ryder",
    image: "https://live.staticflickr.com/65535/52018747395_128e30234f_w.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Tuxedo cat with white face and black nose. Very rough looking",
    temperament: "Shy, skiddish, a little mean",
    tnr_status: "Yes",
    trap_date: "3-07-2022",
    tnr_date: "3-08-2022",
    special_notes: "Healthy but treated for worms",
    user_id: User.all.sample.id,
    address: "1702 78th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Gin",
    image: "https://live.staticflickr.com/65535/52018747395_128e30234f_w.jpg",
    gender: "unknown",
    # latitude: 
    # longitude: 
    description: "All black with medium length fur. A little stodgy in the butt area",
    temperament: "Friendly, rubs on everything, sweet",
    tnr_status: "No",
    trap_date: "N/A",
    tnr_date: "N/A",
    special_notes: "Maybe pregnant",
    user_id: User.all.sample.id,
    address: "1602 85th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Mason",
    image: "https://live.staticflickr.com/65535/52018226701_55dc987302_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Brownish grey tabby cat with white chest, light eyes. Always has it's mouth opened",
    temperament: "Skiddish, elusive",
    tnr_status: "Yes",
    trap_date: "12-1-2021",
    tnr_date: "12-5-2021",
    special_notes: "Constnatly has its' mouth open but is healthy",
    user_id: User.all.sample.id,
    address: "1740 84th St, Brooklyn, NY 11214"
)
Cat.create(
    name: "Shane",
    image: "https://live.staticflickr.com/65535/52018277913_ff6922a9c5_c.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Slender tuxedo cat with one white paw",
    temperament: "Brave, sleepy, lazy",
    tnr_status: "Yes",
    trap_date: "2-1-2022",
    tnr_date: "2-5-2022",
    special_notes: "Sleeps a lot",
    user_id: User.all.sample.id,
    address: "8628 16th Ave, Brooklyn, NY 11214"
)
Cat.create(
    name: "KooKoo",
    image: "https://live.staticflickr.com/65535/52017582697_a6b14c99d6_m.jpg",
    gender: "male",
    # latitude: 
    # longitude: 
    description: "Mostly white cat with grey on head/face. Piercing blue eyes!",
    temperament: "Loner, brave, confident",
    tnr_status: "Yes",
    trap_date: "2-1-2022",
    tnr_date: "2-5-2022",
    special_notes: "Seems to have 2/3 followers",
    user_id: User.all.sample.id,
    address: "1672 86th St, Brooklyn, NY 11214"
)

40.times do
    Interaction.create(
    comment: "Here kitty kitty kitty kitty",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
)
end
20.times do
Interaction.create(
    comment: "What a cute cat!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
)
end
20.times do
    Interaction.create(
        comment: "Such a friendly cat.",
        user_id: User.all.sample.id,
        cat_id: Cat.all.sample.id,
        created_at: Faker::Date.between(from: '2021-10-15', to: '2022-04-19')
    )
end
10.times do
    Interaction.create(
    comment: "So cute!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
end
5.times do
    Interaction.create(
        comment: "This cat is very standof-ish at times",
        user_id: User.all.sample.id,
        cat_id: Cat.all.sample.id
    )
end
5.times do 
    Interaction.create(
    comment: "This cat needs to be trapped ASAP!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
end
10.times do
Interaction.create(
    comment: "I feed this cat at least once a week!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id
)
end
5.times do
    Interaction.create(
    comment: "My dog and this cat always have a staredown but they seem to like each other.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-10-03', to: '2021-12-19')
)
end
10.times do
    Interaction.create(
    comment: "I really love this cat. They always follow me around when we see each other.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-10-03', to: '2021-12-19')
)
end
10.times do
Interaction.create(
    comment: "I think this cat has babies nearby.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-10-03', to: '2021-12-19')
)
end
5.times do
    Interaction.create(
    comment: "I saw this cat on 86th Street last night.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
    )
end
20.times do
    Interaction.create(
    comment: "I see this cat all of the time!",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
)
end
15.times do 
    Interaction.create(
    comment: "This cat eats at my house occasionally",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
)
end
20.times do 
    Interaction.create(
    comment: "Seen this cat.",
    user_id: User.all.sample.id,
    cat_id: Cat.all.sample.id,
    created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
)
end
10.times do
    Interaction.create(
        comment: Faker::Hipster.sentence(word_count: 4),
        user_id: User.all.sample.id,
        cat_id: Cat.all.sample.id,
        created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
    )
end
5.times do
    Interaction.create(
        comment: Faker::Quote.robin,
        user_id: User.all.sample.id,
        cat_id: Cat.all.sample.id,
        created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
    )
end
10.times do
    Interaction.create(
        comment: Faker::Adjective.positive,
        user_id: User.all.sample.id,
        cat_id: Cat.all.sample.id,
        created_at: Faker::Date.between(from: '2021-12-03', to: '2022-04-19')
    )
end

#Faker::Adjective.positive
#Faker::Quote.robin
#Faker::Hipster.sentence(word_count: 3

