
function slumpaFilm(kategorier) {
  var filmer = {
    blandat: [
          "Manchester by the Sea",
          "The Pursuit of Happyness",
          "Three Billboards Outside Ebbing, Missouri",
          "Still Alice",
          "A Star is Born",
          "The Conjuring",
          "Sinister",
          "The Exorcism of Emily Rose",
          "Lights Out",
          "The Autopsy of Jane Doe",
          "The Lion King",
          "Toy Story",
          "Up",
          "How to Train Your Dragon",
          "Wall-E",
          "Bridesmaids",
          "The Hangover",
          "This Is the End",
          "Game Night",
          "The 40-Year-Old Virgin",
          "Die Hard",
          "The Matrix",
          "Terminator 2: Judgment Day",
          "Speed",
          "The Bourne Identity",
          "The Notebook",
          "The Fault in Our Stars",
          "Before Sunrise",
          "Eternal Love",
          "The Vow",
          "Shutter Island",
          "Gone Baby Gone",
          "The Da Vinci Code",
          "The Girl on the Train",
          "Memento",
          "Harry Potter and the Philosopher's Stone",
          "The Lord of the Rings: The Fellowship of the Ring",
          "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
          "The Hobbit: An Unexpected Journey",
          "Maleficent",
          "Blackfish",
          "The Act of Killing",
          "Super Size Me",
          "Fahrenheit 9/11",
          "Won't You Be My Neighbor?"
    ],

    komedi: [
      "The Hangover",
      "Bridesmaids",
      "Superbad",
      "This Is the End",
      "The 40-Year-Old Virgin",
      "Step Brothers",
      "Anchorman: The Legend of Ron Burgundy",
      "Knocked Up",
      "Get Hard",
      "The Other Guys",
      "Neighbors",
      "The Grand Budapest Hotel",
      "Talladega Nights: The Ballad of Ricky Bobby",
      "The Nice Guys",
      "Game Night",
      "Blockers",
      "Spy",
      "Popstar: Never Stop Never Stopping",
      "21 Jump Street",
      "The Disaster Artist"
    ],
    drama: [
      "The Social Network",
      "The King's Speech",
      "The Help",
      "The Descendants",
      "Silver Linings Playbook",
      "Gravity",
      "12 Years a Slave",
      "The Imitation Game",
      "Whiplash",
      "Spotlight",
      "Room",
      "Moonlight",
      "Manchester by the Sea",
      "The Big Sick",
      "Call Me By Your Name",
      "Lady Bird",
      "Three Billboards Outside Ebbing, Missouri",
      "A Star is Born",
      "Green Book",
      "Parasite"
    ],
    action: [
      "Mad Max: Fury Road",
      "Mission: Impossible",
      "The Raid: Redemption",
      "John Wick",
      "Dredd",
      "The Dark Knight",
      "Edge of Tomorrow",
      "Baby Driver",
      "Atomic Blonde",
      "Kingsman: The Secret Service",
      "Taken",
      "The Bourne Ultimatum",
      "Captain America",
      "The Avengers",
      "The Expendables",
      "Fast Five",
      "Black Panther",
      "Deadpool",
      "Spider-Man: Into the Spider-Verse",
      "Wonder Woman"
    ],
    horror: [  
      "The Babadook",  
      "Hereditary",  
      "A Quiet Place",  
      "Get Out",  
      "The Conjuring",  
      "The Witch",  
      "It Follows",  
      "The Descent", 
      "The Strangers",  
      "Sinister",  
      "Insidious",  
      "Don't Breathe",  
      "Midsommar",  
      "Us",  
      "The Invisible Man",  
      "Train to Busan",  
      "The Ritual",  
      "The Autopsy of Jane Doe",  
      "The Visit",  
      "Annihilation"
    ],
    barnfilm: [
      "Coco",
      "Inside Out",
      "Up",
      "Moana",
      "Frozen",
      "Big Hero 6",
      "The Incredibles",
      "Zootopia",
      "Brave",
      "Wreck-It Ralph",
      "The Princess and the Frog",
      "Tangled",
      "Ratatouille",
      "Wall-E",
      "Finding Nemo",
      "Toy Story 3",
      "Monsters University",
      "Cars",
      "The Lion King (2019)",
      "Mulan (2020)"
    ],
    thriller: [
      "The Girl with the Dragon Tattoo",
      "Gone Girl",
      "Prisoners",
      "The Prestige",
      "Zodiac",
      "Shutter Island",
      "The Departed",
      "Memento",
      "No Country for Old Men",
      "Nightcrawler",
      "Wind River",
      "The Accountant",
      "The Town",
      "Sicario",
      "Hell or High Water",
      "The Place Beyond the Pines",
      "Drive",
      "Baby Driver",
      "The Equalizer",
      "Sicario: Day of the Soldado",
    ]
  };
 
  var index = Math.floor(Math.random() * filmer[kategorier].length);
  var film = filmer[kategorier][index];

  // Kontrollera om det finns filmer kvar att visa i kategorin
  if (filmer[kategorier].length === 0) {
    var resultatTagg = document.getElementById("resultat-" + kategorier);
    resultatTagg.textContent = "Du har sett alla filmer i denna kategori.";
    return;
  }

  // Hämta nästa film baserat på räknaren
  var räknareTagg = document.getElementById("räknare-" + kategorier);
  var räknare = parseInt(räknareTagg.textContent);
  var film = filmer[kategorier][räknare];

  // Öka räknaren för nästa gång
  räknare++;
  räknareTagg.textContent = räknare;

  var resultatTagg = document.getElementById("resultat-" + kategorier);
  resultatTagg.textContent = "Din valda film är " + film;
}

/*
function slumpaFilm(kategorier) {
  var filmer = {
    blandat: [
          "Manchester by the Sea",
          "The Pursuit of Happyness",
          "Three Billboards Outside Ebbing, Missouri",
          "Still Alice",
          "A Star is Born",
          "The Conjuring",
          "Sinister",
          "The Exorcism of Emily Rose",
          "Lights Out",
          "The Autopsy of Jane Doe",
          "The Lion King",
          "Toy Story",
          "Up"
    ],

    komedi: [
      "The Hangover",
      "Bridesmaids",
      "Superbad",
      "This Is the End",
      "The 40-Year-Old Virgin",
      "Step Brothers",
      "Anchorman: The Legend of Ron Burgundy",
      "Knocked Up",
      "Get Hard",
      "The Other Guys",
      "Neighbors",
      "The Grand Budapest Hotel",
      "Talladega Nights: The Ballad of Ricky Bobby",
      "The Nice Guys",
      "Game Night",
      "Blockers",
      "Spy",
      "Popstar: Never Stop Never Stopping",
      "21 Jump Street",
      "The Disaster Artist"
    ]
 
  };
 

  var index = Math.floor(Math.random() * filmer[kategorier].length);
  var film = filmer[kategorier][index];

  var resultatTagg = document.getElementById("resultat-" + kategorier);
  resultatTagg.textContent = "Din valda film är " + film;
}
*/
