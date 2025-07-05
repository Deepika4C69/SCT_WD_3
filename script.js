// Quiz data
const quizData = {
    science: {
        easy: [
            {
                type: "multiple-choice",
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                answer: "H2O",
                explanation: "Water is composed of two hydrogen atoms and one oxygen atom."
            },
            {
                type: "multiple-choice",
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Quartz"],
                answer: "Diamond",
                explanation: "Diamond scores 10 on the Mohs scale of mineral hardness."
            },
            {
                type: "fill-blank",
                question: "The process by which plants make their own food is called __________.",
                answer: "photosynthesis",
                explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy."
            },
            {
                type: "multiple-choice",
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars",
                explanation: "Mars appears red due to iron oxide (rust) on its surface."
            },
            {
                type: "multiple-choice",
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                answer: "Skin",
                explanation: "The skin is the body's largest organ, with a surface area of about 20 square feet."
            },
            {
                type: "multiple-choice",
                question: "What is the boiling point of water in Celsius?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                answer: "100°C",
                explanation: "At standard atmospheric pressure, water boils at 100°C."
            },
            {
                type: "multiple-choice",
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                answer: "Carbon Dioxide",
                explanation: "Plants absorb CO2 during photosynthesis to produce glucose and oxygen."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which gas is most abundant in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                answer: "Nitrogen",
                explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
            },
            {
                type: "multiple-select",
                question: "Which of these are noble gases? (Select all that apply)",
                options: ["Helium", "Oxygen", "Neon", "Carbon", "Argon"],
                answer: ["Helium", "Neon", "Argon"],
                explanation: "Noble gases are a group of chemical elements with similar properties; under standard conditions, they are all odorless, colorless, monatomic gases with very low chemical reactivity."
            },
            {
                type: "multiple-choice",
                question: "What is the unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                answer: "Ohm",
                explanation: "The ohm (Ω) is the unit of electrical resistance, named after German physicist Georg Ohm."
            },
            {
                type: "fill-blank",
                question: "The __________ is the smallest unit of matter that retains the properties of an element.",
                answer: "atom",
                explanation: "Atoms are the basic building blocks of matter and the defining structure of elements."
            },
            {
                type: "multiple-choice",
                question: "What is the pH value of pure water?",
                options: ["5", "7", "9", "12"],
                answer: "7",
                explanation: "Pure water has a neutral pH of 7, which is neither acidic nor basic."
            },
            {
                type: "multiple-choice",
                question: "Which scientist discovered penicillin?",
                options: ["Marie Curie", "Alexander Fleming", "Albert Einstein", "Isaac Newton"],
                answer: "Alexander Fleming",
                explanation: "Alexander Fleming discovered the antibiotic substance penicillin in 1928."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "What is the speed of light in a vacuum?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                answer: "300,000 km/s",
                explanation: "The speed of light in a vacuum is approximately 299,792 kilometers per second."
            },
            {
                type: "fill-blank",
                question: "The __________ is the basic unit of life.",
                answer: "cell",
                explanation: "The cell is the smallest structural and functional unit of an organism."
            },
            {
                type: "multiple-choice",
                question: "Which scientist proposed the theory of relativity?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
                answer: "Albert Einstein",
                explanation: "Albert Einstein developed the theory of relativity, one of the two pillars of modern physics."
            },
            {
                type: "multiple-choice",
                question: "What is the atomic number of carbon?",
                options: ["6", "12", "14", "16"],
                answer: "6",
                explanation: "Carbon has 6 protons in its nucleus, giving it an atomic number of 6."
            },
            {
                type: "multiple-choice",
                question: "Which of these is NOT a fundamental force of nature?",
                options: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Friction"],
                answer: "Friction",
                explanation: "The four fundamental forces are gravity, electromagnetism, strong nuclear force, and weak nuclear force."
            }
        ]
    },
    history: {
        easy: [
            {
                type: "multiple-choice",
                question: "In which year did World War II end?",
                options: ["1943", "1945", "1950", "1939"],
                answer: "1945",
                explanation: "World War II ended on September 2, 1945, with Japan's formal surrender."
            },
            {
                type: "fill-blank",
                question: "The ancient Egyptian writing system using pictorial symbols is called __________.",
                answer: "hieroglyphics",
                explanation: "Hieroglyphics were the formal writing system used in Ancient Egypt."
            },
            {
                type: "multiple-choice",
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
                answer: "George Washington",
                explanation: "George Washington served from 1789 to 1797."
            },
            {
                type: "multiple-choice",
                question: "Which ancient civilization built the pyramids of Giza?",
                options: ["Greeks", "Romans", "Egyptians", "Persians"],
                answer: "Egyptians",
                explanation: "The ancient Egyptians built the pyramids as tombs for pharaohs."
            },
            {
                type: "multiple-choice",
                question: "In which year did the Titanic sink?",
                options: ["1905", "1912", "1920", "1931"],
                answer: "1912",
                explanation: "The RMS Titanic sank on April 15, 1912 after hitting an iceberg."
            },
            {
                type: "multiple-choice",
                question: "Which country gifted the Statue of Liberty to the United States?",
                options: ["England", "Spain", "France", "Italy"],
                answer: "France",
                explanation: "France gifted the Statue of Liberty to celebrate the centennial of American independence."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which ancient civilization built the Machu Picchu complex?",
                options: ["Aztec", "Maya", "Inca", "Olmec"],
                answer: "Inca",
                explanation: "Machu Picchu was built by the Inca Empire in the 15th century."
            },
            {
                type: "multiple-select",
                question: "Which of these were major world powers during World War I? (Select all that apply)",
                options: ["United States", "Germany", "Brazil", "Russia", "Japan"],
                answer: ["United States", "Germany", "Russia"],
                explanation: "The major powers during WWI were divided into the Allies (including US and Russia) and the Central Powers (including Germany)."
            },
            {
                type: "fill-blank",
                question: "The __________ Revolution began in 1789 in France.",
                answer: "French",
                explanation: "The French Revolution was a period of radical political and societal change in France."
            },
            {
                type: "multiple-choice",
                question: "Who wrote the 'I Have a Dream' speech?",
                options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Frederick Douglass"],
                answer: "Martin Luther King Jr.",
                explanation: "Martin Luther King Jr. delivered his famous speech during the March on Washington in 1963."
            },
            {
                type: "multiple-choice",
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek", "Roman", "Egyptian", "Persian"],
                answer: "Roman",
                explanation: "Julius Caesar was a Roman general and statesman who played a critical role in the demise of the Roman Republic."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "Who was the first female prime minister of the United Kingdom?",
                options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
                answer: "Margaret Thatcher",
                explanation: "Margaret Thatcher served as Prime Minister from 1979 to 1990."
            },
            {
                type: "multiple-choice",
                question: "Which year did the Berlin Wall fall?",
                options: ["1985", "1989", "1991", "1987"],
                answer: "1989",
                explanation: "The Berlin Wall fell on November 9, 1989, marking the beginning of German reunification."
            },
            {
                type: "multiple-choice",
                question: "Who was the first emperor of China?",
                options: ["Confucius", "Qin Shi Huang", "Han Wudi", "Genghis Khan"],
                answer: "Qin Shi Huang",
                explanation: "Qin Shi Huang unified China in 221 BCE and became its first emperor."
            },
            {
                type: "fill-blank",
                question: "The ancient trade route connecting China to the Mediterranean was called the __________ Road.",
                answer: "Silk",
                explanation: "The Silk Road was a network of trade routes that connected the East and West for centuries."
            }
        ]
    },
    technology: {
        easy: [
            {
                type: "multiple-choice",
                question: "What does 'HTML' stand for?",
                options: [
                    "Hyper Text Markup Language", 
                    "High Tech Modern Language", 
                    "Home Tool Markup Language", 
                    "Hyperlinks and Text Markup Language"
                ],
                answer: "Hyper Text Markup Language",
                explanation: "HTML is the standard markup language for creating web pages."
            },
            {
                type: "fill-blank",
                question: "The __________ is the brain of a computer that performs calculations.",
                answer: "CPU",
                explanation: "CPU stands for Central Processing Unit, which carries out the instructions of a computer program."
            },
            {
                type: "multiple-choice",
                question: "Which company created the iPhone?",
                options: ["Microsoft", "Google", "Apple", "Samsung"],
                answer: "Apple",
                explanation: "Apple Inc. introduced the first iPhone in 2007."
            },
            {
                type: "multiple-choice",
                question: "What does 'www' stand for in a website address?",
                options: ["World Wide Web", "Web World Wide", "World Web Wide", "Wide World Web"],
                answer: "World Wide Web",
                explanation: "WWW stands for World Wide Web, an information system on the internet."
            },
            {
                type: "multiple-choice",
                question: "Which of these is a search engine?",
                options: ["Facebook", "Twitter", "Google", "Instagram"],
                answer: "Google",
                explanation: "Google is the most popular search engine on the internet."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which company developed the JavaScript programming language?",
                options: ["Microsoft", "Netscape", "Sun Microsystems", "Apple"],
                answer: "Netscape",
                explanation: "JavaScript was created by Brendan Eich at Netscape in 1995."
            },
            {
                type: "multiple-select",
                question: "Which of these are programming languages? (Select all that apply)",
                options: ["Python", "HTML", "CSS", "Java", "HTTP"],
                answer: ["Python", "Java"],
                explanation: "Python and Java are programming languages, while HTML and CSS are markup/style languages, and HTTP is a protocol."
            },
            {
                type: "multiple-choice",
                question: "What does 'URL' stand for?",
                options: [
                    "Uniform Resource Locator",
                    "Universal Reference Link",
                    "Unified Resource Link",
                    "Uniform Reference Locator"
                ],
                answer: "Uniform Resource Locator",
                explanation: "A URL is a reference to a web resource that specifies its location on a computer network."
            },
            {
                type: "multiple-choice",
                question: "What is the name of Facebook's parent company?",
                options: ["Alphabet", "Meta", "Twitter Inc", "Social Media Corp"],
                answer: "Meta",
                explanation: "Facebook rebranded to Meta in 2021 to reflect its focus on the metaverse."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "What was the first computer virus to spread in the wild?",
                options: ["ILOVEYOU", "Melissa", "Brain", "Morris Worm"],
                answer: "Brain",
                explanation: "Brain, created in 1986, was the first PC virus to spread in the wild."
            },
            {
                type: "fill-blank",
                question: "The __________ is the main circuit board in a computer that connects all components.",
                answer: "motherboard",
                explanation: "The motherboard is the main printed circuit board in computers that holds many of the crucial components."
            },
            {
                type: "multiple-choice",
                question: "Which of these is NOT a type of machine learning?",
                options: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Hypervised Learning"],
                answer: "Hypervised Learning",
                explanation: "The three main types of machine learning are supervised, unsupervised, and reinforcement learning."
            },
            {
                type: "multiple-choice",
                question: "What does 'API' stand for in programming?",
                options: [
                    "Application Programming Interface",
                    "Automated Program Interaction",
                    "Advanced Programming Instruction",
                    "Application Process Integration"
                ],
                answer: "Application Programming Interface",
                explanation: "An API is a set of definitions and protocols for building and integrating application software."
            }
        ]
    },
    geography: {
        easy: [
            {
                type: "multiple-choice",
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris",
                explanation: "Paris has been the capital of France since the 5th century."
            },
            {
                type: "fill-blank",
                question: "The __________ is the longest river in the world.",
                answer: "Nile",
                explanation: "The Nile River is approximately 6,650 km (4,130 miles) long."
            },
            {
                type: "multiple-choice",
                question: "Which is the largest continent by area?",
                options: ["Africa", "North America", "Asia", "Europe"],
                answer: "Asia",
                explanation: "Asia covers about 30% of Earth's land area."
            },
            {
                type: "multiple-choice",
                question: "Which country is both an island and a continent?",
                options: ["Greenland", "Madagascar", "Australia", "New Zealand"],
                answer: "Australia",
                explanation: "Australia is both a country and a continent, and it's also the world's largest island."
            },
            {
                type: "multiple-choice",
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific",
                explanation: "The Pacific Ocean covers about 63 million square miles."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which country has the most time zones?",
                options: ["Russia", "USA", "France", "China"],
                answer: "France",
                explanation: "France has 12 time zones due to its overseas territories."
            },
            {
                type: "multiple-select",
                question: "Which of these countries are in Europe? (Select all that apply)",
                options: ["Canada", "Spain", "Brazil", "Italy", "Egypt"],
                answer: ["Spain", "Italy"],
                explanation: "Spain and Italy are European countries, while the others are not."
            },
            {
                type: "multiple-choice",
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                answer: "Antarctic",
                explanation: "The Antarctic Desert is the largest desert in the world, covering about 14 million square kilometers."
            },
            {
                type: "multiple-choice",
                question: "Which of these cities is NOT a national capital?",
                options: ["Sydney", "Canberra", "Ottawa", "Washington D.C."],
                answer: "Sydney",
                explanation: "Canberra is the capital of Australia, while Sydney is its largest city."
            }
        ],
        hard: [
            {
                type: "fill-blank",
                question: "The __________ Mountains are the longest mountain range in the world.",
                answer: "Andes",
                explanation: "The Andes Mountains stretch about 7,000 km along the western coast of South America."
            },
            {
                type: "multiple-choice",
                question: "Which country has the most islands?",
                options: ["Indonesia", "Philippines", "Sweden", "Canada"],
                answer: "Sweden",
                explanation: "Sweden has over 220,000 islands, more than any other country."
            },
            {
                type: "multiple-choice",
                question: "What is the deepest point in the world's oceans?",
                options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
                answer: "Mariana Trench",
                explanation: "The Mariana Trench in the Pacific Ocean reaches a depth of about 11,034 meters."
            },
            {
                type: "multiple-choice",
                question: "Which African country was never colonized?",
                options: ["Ethiopia", "South Africa", "Nigeria", "Kenya"],
                answer: "Ethiopia",
                explanation: "Ethiopia is the only African country never to have been colonized, except for a brief occupation by Italy."
            }
        ]
    },
    entertainment: {
        easy: [
            {
                type: "multiple-choice",
                question: "Who played Jack Dawson in the movie Titanic?",
                options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
                answer: "Leonardo DiCaprio",
                explanation: "Leonardo DiCaprio starred as Jack Dawson in the 1997 film Titanic."
            },
            {
                type: "fill-blank",
                question: "The TV show about six friends living in New York is called __________.",
                answer: "Friends",
                explanation: "Friends was a hugely popular American sitcom that aired from 1994 to 2004."
            },
            {
                type: "multiple-choice",
                question: "Which artist has the most Grammy Awards?",
                options: ["Beyoncé", "Michael Jackson", "The Beatles", "Stevie Wonder"],
                answer: "Beyoncé",
                explanation: "As of 2023, Beyoncé has won 32 Grammy Awards, more than any other artist."
            },
            {
                type: "multiple-choice",
                question: "Which movie features the song 'Let It Go'?",
                options: ["Moana", "Tangled", "Frozen", "Brave"],
                answer: "Frozen",
                explanation: "'Let It Go' is the signature song from Disney's 2013 film Frozen."
            },
            {
                type: "multiple-choice",
                question: "Who is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Timberlake"],
                answer: "Michael Jackson",
                explanation: "Michael Jackson earned the nickname 'King of Pop' for his massive influence on music and culture."
            }
        ],
        medium: [
            {
                type: "multiple-select",
                question: "Which of these are Shakespeare plays? (Select all that apply)",
                options: ["Macbeth", "Pride and Prejudice", "Hamlet", "1984", "Romeo and Juliet"],
                answer: ["Macbeth", "Hamlet", "Romeo and Juliet"],
                explanation: "Macbeth, Hamlet, and Romeo and Juliet are all plays by William Shakespeare."
            },
            {
                type: "multiple-choice",
                question: "Which was the first full-length animated feature film?",
                options: ["Snow White", "Fantasia", "Pinocchio", "Bambi"],
                answer: "Snow White",
                explanation: "Snow White and the Seven Dwarfs (1937) was Disney's first full-length animated feature."
            },
            {
                type: "multiple-choice",
                question: "Who directed the movie 'Jurassic Park'?",
                options: ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott"],
                answer: "Steven Spielberg",
                explanation: "Steven Spielberg directed the 1993 blockbuster Jurassic Park."
            },
            {
                type: "multiple-choice",
                question: "Which artist painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                answer: "Leonardo da Vinci",
                explanation: "Leonardo da Vinci painted the Mona Lisa in the early 16th century."
            }
        ],
        hard: [
            {
                type: "fill-blank",
                question: "The famous music festival held in 1969 was called __________.",
                answer: "Woodstock",
                explanation: "Woodstock Music & Art Fair was held in August 1969 in Bethel, New York."
            },
            {
                type: "multiple-choice",
                question: "Which actor has won the most Academy Awards for Best Actor?",
                options: ["Marlon Brando", "Jack Nicholson", "Daniel Day-Lewis", "Tom Hanks"],
                answer: "Daniel Day-Lewis",
                explanation: "Daniel Day-Lewis has won three Best Actor Oscars, more than any other actor."
            },
            {
                type: "multiple-choice",
                question: "Which novel begins with the line 'It was the best of times, it was the worst of times'?",
                options: ["Moby Dick", "A Tale of Two Cities", "Pride and Prejudice", "War and Peace"],
                answer: "A Tale of Two Cities",
                explanation: "Charles Dickens' A Tale of Two Cities begins with this famous line."
            },
            {
                type: "multiple-choice",
                question: "Who composed the 'Moonlight Sonata'?",
                options: ["Mozart", "Beethoven", "Bach", "Chopin"],
                answer: "Beethoven",
                explanation: "Ludwig van Beethoven composed the Piano Sonata No. 14, commonly known as the Moonlight Sonata."
            }
        ]
    },
    sports: {
        easy: [
            {
                type: "multiple-choice",
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["Germany", "Brazil", "France", "Argentina"],
                answer: "France",
                explanation: "France defeated Croatia 4-2 in the final to win their second World Cup title."
            },
            {
                type: "fill-blank",
                question: "The sport played at Wimbledon is __________.",
                answer: "tennis",
                explanation: "Wimbledon is the oldest tennis tournament in the world, held since 1877."
            },
            {
                type: "multiple-choice",
                question: "How many players are on a basketball team?",
                options: ["5", "6", "7", "8"],
                answer: "5",
                explanation: "A standard basketball team has five players on the court at a time."
            },
            {
                type: "multiple-choice",
                question: "Which sport uses a shuttlecock?",
                options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
                answer: "Badminton",
                explanation: "Badminton is played with a shuttlecock (or birdie) that players hit over a net."
            },
            {
                type: "multiple-choice",
                question: "In which sport would you perform a slam dunk?",
                options: ["Soccer", "Basketball", "Volleyball", "Tennis"],
                answer: "Basketball",
                explanation: "A slam dunk is a basketball shot performed by jumping and slamming the ball through the hoop."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which athlete has won the most Olympic gold medals?",
                options: ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Larisa Latynina"],
                answer: "Michael Phelps",
                explanation: "Michael Phelps has won 23 Olympic gold medals, the most by any athlete."
            },
            {
                type: "multiple-select",
                question: "Which of these are team sports? (Select all that apply)",
                options: ["Tennis", "Basketball", "Golf", "Soccer", "Swimming"],
                answer: ["Basketball", "Soccer"],
                explanation: "Basketball and soccer are team sports, while the others are primarily individual sports."
            },
            {
                type: "multiple-choice",
                question: "How many rings are on the Olympic flag?",
                options: ["4", "5", "6", "7"],
                answer: "5",
                explanation: "The five interlocking rings represent the five inhabited continents of the world."
            },
            {
                type: "multiple-choice",
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Brazil", "Italy", "Argentina"],
                answer: "Brazil",
                explanation: "Brazil has won the World Cup a record 5 times (1958, 1962, 1970, 1994, 2002)."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "Which boxer was known as 'The Greatest'?",
                options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Sugar Ray Leonard"],
                answer: "Muhammad Ali",
                explanation: "Muhammad Ali, born Cassius Clay, was nicknamed 'The Greatest' and is considered one of the best boxers in history."
            },
            {
                type: "fill-blank",
                question: "The __________ is the championship trophy awarded to the winner of the NHL playoffs.",
                answer: "Stanley Cup",
                explanation: "The Stanley Cup is awarded annually to the National Hockey League playoff champion."
            },
            {
                type: "multiple-choice",
                question: "Which tennis player has won the most Grand Slam titles?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Margaret Court"],
                answer: "Margaret Court",
                explanation: "Margaret Court holds the record with 24 Grand Slam singles titles (men's or women's)."
            },
            {
                type: "multiple-choice",
                question: "In which year were the first modern Olympic Games held?",
                options: ["1886", "1896", "1900", "1904"],
                answer: "1896",
                explanation: "The first modern Olympics were held in Athens, Greece in 1896."
            }
        ]
    },
    mathematics: {
        easy: [
            {
                type: "multiple-choice",
                question: "What is the value of π (pi) rounded to two decimal places?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                answer: "3.14",
                explanation: "Pi is approximately 3.14159, so rounded to two decimal places it's 3.14."
            },
            {
                type: "fill-blank",
                question: "A triangle with all sides equal is called an __________ triangle.",
                answer: "equilateral",
                explanation: "An equilateral triangle has three equal sides and three equal angles of 60 degrees each."
            },
            {
                type: "multiple-choice",
                question: "What is 7 × 8?",
                options: ["48", "54", "56", "64"],
                answer: "56",
                explanation: "7 multiplied by 8 equals 56."
            },
            {
                type: "multiple-choice",
                question: "How many degrees are in a right angle?",
                options: ["45", "90", "180", "360"],
                answer: "90",
                explanation: "A right angle measures exactly 90 degrees."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "What is the square root of 144?",
                options: ["10", "12", "14", "16"],
                answer: "12",
                explanation: "12 × 12 = 144, so the square root of 144 is 12."
            },
            {
                type: "multiple-choice",
                question: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ...?",
                options: ["18", "20", "21", "23"],
                answer: "21",
                explanation: "This is the Fibonacci sequence where each number is the sum of the two preceding ones (8 + 13 = 21)."
            },
            {
                type: "multiple-choice",
                question: "What is the area of a circle with radius 5? (Use π = 3.14)",
                options: ["31.4", "62.8", "78.5", "157"],
                answer: "78.5",
                explanation: "Area = πr² = 3.14 × 5 × 5 = 78.5."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "What is the derivative of x³?",
                options: ["x²", "2x²", "3x²", "4x²"],
                answer: "3x²",
                explanation: "The derivative of xⁿ is nxⁿ⁻¹, so the derivative of x³ is 3x²."
            },
            {
                type: "multiple-choice",
                question: "What is the solution to the equation 2x + 5 = 15?",
                options: ["x = 5", "x = 7.5", "x = 10", "x = 12.5"],
                answer: "x = 5",
                explanation: "Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5."
            }
        ]
    },
    literature: {
        easy: [
            {
                type: "multiple-choice",
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                answer: "William Shakespeare",
                explanation: "William Shakespeare wrote this famous tragedy in the late 16th century."
            },
            {
                type: "multiple-choice",
                question: "Which novel features the character Sherlock Holmes?",
                options: ["Dracula", "Moby Dick", "A Study in Scarlet", "Great Expectations"],
                answer: "A Study in Scarlet",
                explanation: "Sherlock Holmes first appeared in Arthur Conan Doyle's 'A Study in Scarlet'."
            },
            {
                type: "multiple-choice",
                question: "Who wrote 'Pride and Prejudice'?",
                options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
                answer: "Jane Austen",
                explanation: "Jane Austen published 'Pride and Prejudice' in 1813."
            }
        ],
        medium: [
            {
                type: "multiple-choice",
                question: "Which author wrote '1984'?",
                options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "H.G. Wells"],
                answer: "George Orwell",
                explanation: "George Orwell wrote the dystopian novel '1984' published in 1949."
            },
            {
                type: "multiple-choice",
                question: "Who is the author of 'The Great Gatsby'?",
                options: ["Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck", "William Faulkner"],
                answer: "F. Scott Fitzgerald",
                explanation: "F. Scott Fitzgerald wrote this classic American novel in 1925."
            }
        ],
        hard: [
            {
                type: "multiple-choice",
                question: "Which Russian author wrote 'War and Peace'?",
                options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
                answer: "Leo Tolstoy",
                explanation: "Leo Tolstoy's epic novel 'War and Peace' was published in 1869."
            },
            {
                type: "multiple-choice",
                question: "Who wrote 'The Canterbury Tales'?",
                options: ["Geoffrey Chaucer", "William Shakespeare", "John Milton", "Christopher Marlowe"],
                answer: "Geoffrey Chaucer",
                explanation: "Geoffrey Chaucer wrote 'The Canterbury Tales' in the late 14th century."
            }
        ]
    }
};

// Game state
const gameState = {
    currentCategory: null,
    currentDifficulty: 'easy',
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    timeLeft: 30,
    timer: null,
    lifelines: {
        fiftyFifty: true,
        hint: true,
        extraTime: true
    }
};

// DOM elements
const homeScreen = document.getElementById('home-screen');
const categoryScreen = document.getElementById('category-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const startBtn = document.getElementById('start-btn');
const categoryCards = document.querySelectorAll('.category-card');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const fillBlankEl = document.getElementById('fill-blank');
const blankAnswerEl = document.getElementById('blank-answer');
const progressBar = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const ratingEl = document.getElementById('rating');
const feedbackEl = document.getElementById('feedback');
const categoryFeedbackEl = document.getElementById('category-feedback');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const homeBtn = document.getElementById('home-btn');
const explanationEl = document.getElementById('explanation');
const fiftyFiftyBtn = document.getElementById('fifty-fifty');
const hintBtn = document.getElementById('hint');
const extraTimeBtn = document.getElementById('extra-time');
const floatingShapesEl = document.getElementById('floating-shapes');
const confettiContainer = document.getElementById('confetti-container');
const reviewContainer = document.getElementById('review-container');
const backToResultsBtn = document.getElementById('back-to-results-btn');
const newQuizBtn = document.getElementById('new-quiz-btn');

// Initialize the game
function init() {
    createFloatingShapes();
    
    // Event listeners for start button
    startBtn.addEventListener('click', () => {
        homeScreen.style.display = 'none';
        categoryScreen.style.display = 'block';
    });

    // Event listeners for category selection
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            gameState.currentCategory = card.dataset.category;
            startQuiz();
        });
    });

    // Event listeners for difficulty selection
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            gameState.currentDifficulty = btn.dataset.difficulty;
        });
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => navigateQuestion('prev'));
    nextBtn.addEventListener('click', () => navigateQuestion('next'));

    // Result screen buttons
    restartBtn.addEventListener('click', restartGame);
    reviewBtn.addEventListener('click', showReviewScreen);
    homeBtn.addEventListener('click', goHome);

    // Review screen buttons
    backToResultsBtn.addEventListener('click', () => {
        reviewScreen.style.display = 'none';
        resultScreen.style.display = 'block';
    });
    newQuizBtn.addEventListener('click', restartGame);

    // Lifeline buttons
    fiftyFiftyBtn.addEventListener('click', useFiftyFifty);
    hintBtn.addEventListener('click', useHint);
    extraTimeBtn.addEventListener('click', useExtraTime);

    // Fill in the blank input
    blankAnswerEl.addEventListener('input', () => {
        nextBtn.disabled = blankAnswerEl.value.trim() === '';
    });
}

// Create floating shapes for background
function createFloatingShapes() {
    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f', '#9b59b6'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < 20; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        
        // Random properties
        const size = Math.random() * 50 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;
        
        // Apply styles
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.background = color;
        shape.style.left = `${left}%`;
        shape.style.animationDuration = `${animationDuration}s`;
        shape.style.animationDelay = `-${animationDelay}s`;
        shape.style.opacity = opacity;
        
        // Shape specific styles
        if (shapeType === 'circle') {
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.background = 'transparent';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid ${color}`;
            shape.style.width = '0';
            shape.style.height = '0';
        }
        
        floatingShapesEl.appendChild(shape);
    }
}

// Create confetti animation
function createConfetti() {
    confettiContainer.style.display = 'block';
    confettiContainer.innerHTML = '';
    
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Random properties
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 3 + 2;
        const animationDelay = Math.random() * 5;
        const shape = Math.random() > 0.5 ? 'square' : 'rectangle';
        
        // Apply styles
        confetti.style.width = `${size}px`;
        confetti.style.height = shape === 'square' ? `${size}px` : `${size/2}px`;
        confetti.style.background = color;
        confetti.style.left = `${left}%`;
        confetti.style.animationDuration = `${animationDuration}s`;
        confetti.style.animationDelay = `-${animationDelay}s`;
        
        // Random rotation for squares
        if (shape === 'square') {
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
        
        confettiContainer.appendChild(confetti);
    }
    
    // Hide after animation
    setTimeout(() => {
        confettiContainer.style.display = 'none';
    }, 5000);
}

// Start the quiz
function startQuiz() {
    if (!gameState.currentCategory) return;

    // Combine questions from all difficulty levels up to the selected one
    let questions = [];
    const difficulties = ['easy', 'medium', 'hard'];
    const selectedDifficultyIndex = difficulties.indexOf(gameState.currentDifficulty);

    for (let i = 0; i <= selectedDifficultyIndex; i++) {
        const difficulty = difficulties[i];
        if (quizData[gameState.currentCategory][difficulty]) {
            questions = questions.concat(quizData[gameState.currentCategory][difficulty]);
        }
    }

    // Shuffle questions and select up to 10
    questions = shuffleArray(questions).slice(0, 10);
    gameState.questions = questions;
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.userAnswers = Array(questions.length).fill(null);
    gameState.lifelines = {
        fiftyFifty: true,
        hint: true,
        extraTime: true
    };

    // Show quiz screen
    categoryScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    resultScreen.style.display = 'none';
    reviewScreen.style.display = 'none';

    // Update question counter
    totalQuestionsEl.textContent = questions.length;

    // Load first question
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    
    // Update question text
    questionEl.textContent = currentQuestion.question;
    
    // Update UI
    currentQuestionEl.textContent = gameState.currentQuestionIndex + 1;
    
    // Clear previous options and hide fill-blank
    optionsEl.innerHTML = '';
    fillBlankEl.style.display = 'none';
    blankAnswerEl.value = '';
    explanationEl.style.display = 'none';
    explanationEl.textContent = '';
    
    // Show appropriate question type
    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'multiple-select') {
        // Create options
        currentQuestion.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'option';
            
            if (currentQuestion.type === 'multiple-choice') {
                optionEl.innerHTML = `
                    <input type="radio" name="option" id="option-${index}" value="${option}">
                    <label for="option-${index}">${option}</label>
                    <span class="checkmark"></span>
                `;
            } else {
                optionEl.innerHTML = `
                    <input type="checkbox" name="option" id="option-${index}" value="${option}">
                    <label for="option-${index}">${option}</label>
                    <span class="checkmark checkbox-mark"></span>
                `;
            }
            
            // Check if this option was previously selected
            const userAnswer = gameState.userAnswers[gameState.currentQuestionIndex];
            if (userAnswer !== null) {
                if (currentQuestion.type === 'multiple-choice' && userAnswer.includes(index)) {
                    optionEl.classList.add('selected');
                    document.getElementById(`option-${index}`).checked = true;
                } else if (currentQuestion.type === 'multiple-select' && userAnswer.includes(index)) {
                    optionEl.classList.add('selected');
                    document.getElementById(`option-${index}`).checked = true;
                }
            }
            
            optionEl.addEventListener('click', () => selectOption(index, currentQuestion.type));
            optionsEl.appendChild(optionEl);
        });
        
        // Enable/disable next button based on whether an answer is selected
        nextBtn.disabled = gameState.userAnswers[gameState.currentQuestionIndex] === null;
    } else if (currentQuestion.type === 'fill-blank') {
        fillBlankEl.style.display = 'block';
        if (gameState.userAnswers[gameState.currentQuestionIndex] !== null) {
            blankAnswerEl.value = gameState.userAnswers[gameState.currentQuestionIndex];
        }
        nextBtn.disabled = blankAnswerEl.value.trim() === '';
    }
    
    // Update progress bar
    progressBar.style.width = `${(gameState.currentQuestionIndex / gameState.questions.length) * 100}%`;
    
    // Update navigation buttons
    prevBtn.disabled = gameState.currentQuestionIndex === 0;
    nextBtn.textContent = gameState.currentQuestionIndex === gameState.questions.length - 1 ? 'Submit' : 'Next';
    
    // Reset timer
    resetTimer();
    
    // Update lifeline buttons
    updateLifelineButtons();
}

// Select an option
function selectOption(index, questionType) {
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    
    if (questionType === 'multiple-choice') {
        // Deselect all options
        options.forEach(opt => {
            opt.classList.remove('selected');
            opt.querySelector('input').checked = false;
        });
        
        // Select clicked option
        options[index].classList.add('selected');
        document.getElementById(`option-${index}`).checked = true;
        
        // Store user's answer
        gameState.userAnswers[gameState.currentQuestionIndex] = [index];
    } else if (questionType === 'multiple-select') {
        // Toggle selected state
        options[index].classList.toggle('selected');
        const checkbox = document.getElementById(`option-${index}`);
        checkbox.checked = !checkbox.checked;
        
        // Get all selected options
        const selectedOptions = [];
        document.querySelectorAll('.option input:checked').forEach((input, i) => {
            selectedOptions.push(i);
        });
        
        // Store user's answer
        gameState.userAnswers[gameState.currentQuestionIndex] = selectedOptions;
    }
    
    // Enable next button if at least one option is selected
    nextBtn.disabled = gameState.userAnswers[gameState.currentQuestionIndex] === null || 
                      gameState.userAnswers[gameState.currentQuestionIndex].length === 0;
}

// Navigate between questions
function navigateQuestion(direction) {
    if (direction === 'next') {
        // For fill-in-the-blank questions, save the answer
        const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
        if (currentQuestion.type === 'fill-blank' && blankAnswerEl.value.trim() !== '') {
            gameState.userAnswers[gameState.currentQuestionIndex] = blankAnswerEl.value.trim();
        }
        
        if (gameState.currentQuestionIndex < gameState.questions.length - 1) {
            gameState.currentQuestionIndex++;
            loadQuestion();
        } else {
            submitQuiz();
        }
    } else if (direction === 'prev') {
        gameState.currentQuestionIndex--;
        loadQuestion();
    }
}

// Submit the quiz
function submitQuiz() {
    clearInterval(gameState.timer);
    
    // Calculate score
    gameState.score = 0;
    gameState.questions.forEach((question, index) => {
        const userAnswer = gameState.userAnswers[index];
        
        if (userAnswer !== null) {
            if (question.type === 'multiple-choice') {
                if (question.options[userAnswer[0]] === question.answer) {
                    gameState.score++;
                }
            } else if (question.type === 'multiple-select') {
                // Check if all correct answers are selected and no incorrect ones
                const correctAnswers = question.answer.map(ans => question.options.indexOf(ans));
                if (arraysEqual(new Set(userAnswer), new Set(correctAnswers))) {
                    gameState.score++;
                }
            } else if (question.type === 'fill-blank') {
                if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                    gameState.score++;
                }
            }
        }
    });
    
    // Show result screen
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    reviewScreen.style.display = 'none';
    
    // Update result UI
    scoreEl.textContent = gameState.score;
    totalEl.textContent = gameState.questions.length;
    
    // Calculate and display rating
    const percentage = (gameState.score / gameState.questions.length) * 100;
    let rating = '';
    let stars = 0;
    
    if (percentage >= 90) {
        rating = "⭐️⭐️⭐️⭐️⭐️";
        stars = 5;
        createConfetti();
    } else if (percentage >= 70) {
        rating = "⭐️⭐️⭐️⭐️";
        stars = 4;
        createConfetti();
    } else if (percentage >= 50) {
        rating = "⭐️⭐️⭐️";
        stars = 3;
    } else if (percentage >= 30) {
        rating = "⭐️⭐️";
        stars = 2;
    } else {
        rating = "⭐️";
        stars = 1;
    }
    
    ratingEl.innerHTML = rating;
    
    // Provide feedback based on score
    let feedback = '';
    if (stars === 5) {
        feedback = "🏆 Outstanding! You're a true expert in this category! 🏆";
    } else if (stars === 4) {
        feedback = "👍 Excellent work! You have strong knowledge in this area! 👍";
    } else if (stars === 3) {
        feedback = "😊 Good job! You have a solid understanding of this topic! 😊";
    } else if (stars === 2) {
        feedback = "📚 Not bad! With a bit more study, you'll master this! 📚";
    } else {
        feedback = "🧠 Keep learning! Everyone starts somewhere - try again! 🧠";
    }
    
    feedbackEl.textContent = feedback;
    
    // Provide category-specific feedback
    let categoryFeedback = `
        <h3>About ${gameState.currentCategory.charAt(0).toUpperCase() + gameState.currentCategory.slice(1)}</h3>
        <p>${getCategoryDescription(gameState.currentCategory)}</p>
    `;
    
    categoryFeedbackEl.innerHTML = categoryFeedback;
}

// Show the review screen with all questions and answers
function showReviewScreen() {
    resultScreen.style.display = 'none';
    reviewScreen.style.display = 'block';
    
    // Clear previous review content
    reviewContainer.innerHTML = '';
    
    // Add each question to the review
    gameState.questions.forEach((question, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        // Add question text
        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.textContent = `${index + 1}. ${question.question}`;
        reviewItem.appendChild(questionText);
        
        // Add correct answer
        const correctAnswer = document.createElement('div');
        correctAnswer.className = 'review-answer correct-answer';
        
        if (question.type === 'multiple-choice' || question.type === 'multiple-select') {
            if (Array.isArray(question.answer)) {
                correctAnswer.textContent = `Correct answer: ${question.answer.join(', ')}`;
            } else {
                correctAnswer.textContent = `Correct answer: ${question.answer}`;
            }
        } else if (question.type === 'fill-blank') {
            correctAnswer.textContent = `Correct answer: ${question.answer}`;
        }
        
        reviewItem.appendChild(correctAnswer);
        
        // Add user's answer if available
        const userAnswer = gameState.userAnswers[index];
        if (userAnswer !== null) {
            const userAnswerEl = document.createElement('div');
            userAnswerEl.className = 'review-answer user-answer';
            
            if (question.type === 'multiple-choice' || question.type === 'multiple-select') {
                const userSelectedOptions = Array.isArray(userAnswer) ? 
                    userAnswer.map(i => question.options[i]).join(', ') : 
                    question.options[userAnswer[0]];
                userAnswerEl.textContent = `Your answer: ${userSelectedOptions}`;
            } else if (question.type === 'fill-blank') {
                userAnswerEl.textContent = `Your answer: ${userAnswer}`;
            }
            
            reviewItem.appendChild(userAnswerEl);
            
            // Check if answer was correct
            let isCorrect = false;
            if (question.type === 'multiple-choice') {
                isCorrect = question.options[userAnswer[0]] === question.answer;
            } else if (question.type === 'multiple-select') {
                const correctAnswers = question.answer.map(ans => question.options.indexOf(ans));
                isCorrect = arraysEqual(new Set(userAnswer), new Set(correctAnswers));
            } else if (question.type === 'fill-blank') {
                isCorrect = userAnswer.toLowerCase() === question.answer.toLowerCase();
            }
            
            // Add correct/incorrect indicator
            const resultIndicator = document.createElement('div');
            resultIndicator.style.fontWeight = 'bold';
            resultIndicator.style.margin = '5px 0';
            resultIndicator.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';
            resultIndicator.style.color = isCorrect ? 'green' : 'red';
            reviewItem.insertBefore(resultIndicator, userAnswerEl.nextSibling);
        } else {
            const noAnswerEl = document.createElement('div');
            noAnswerEl.className = 'review-answer user-answer';
            noAnswerEl.textContent = 'You did not answer this question';
            reviewItem.appendChild(noAnswerEl);
        }
        
        // Add explanation
        const explanationEl = document.createElement('div');
        explanationEl.className = 'review-explanation';
        explanationEl.textContent = question.explanation;
        reviewItem.appendChild(explanationEl);
        
        reviewContainer.appendChild(reviewItem);
    });
}

// Get category description
function getCategoryDescription(category) {
    const descriptions = {
        science: "Science is a systematic enterprise that builds and organizes knowledge in the form of testable explanations and predictions about the universe. It encompasses a wide range of disciplines including physics, chemistry, biology, and astronomy.",
        history: "History is the study of the past, particularly how it relates to humans. It includes the discovery, collection, organization, and presentation of information about past events. Understanding history helps us comprehend the present and shape the future.",
        technology: "Technology refers to the collection of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives. It includes everything from simple tools to complex computer systems.",
        geography: "Geography is the study of places and the relationships between people and their environments. It explores both the physical properties of Earth's surface and the human societies spread across it.",
        entertainment: "Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight. It includes movies, music, television, sports, games, and other forms of leisure activities.",
        sports: "Sports are physical activities that involve skill and competition. They can be individual or team-based and are governed by a set of rules or customs. Sports play an important role in physical health and social interaction.",
        mathematics: "Mathematics is the science of structure, order, and relation that has evolved from elemental practices of counting, measuring, and describing the shapes of objects. It deals with logical reasoning and quantitative calculation.",
        literature: "Literature is a term used to describe written and sometimes spoken material. Derived from the Latin word 'litteratura' meaning 'writing formed with letters,' literature most commonly refers to works of the creative imagination."
    };
    
    return descriptions[category] || "This category covers a wide range of interesting topics and facts.";
}

// Timer functions
function startTimer() {
    resetTimer();
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        timerEl.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            // Auto-submit if time runs out
            if (gameState.currentQuestionIndex === gameState.questions.length - 1) {
                submitQuiz();
            } else {
                navigateQuestion('next');
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(gameState.timer);
    gameState.timeLeft = 30;
    timerEl.textContent = gameState.timeLeft;
    startTimer();
}

// Lifeline functions
function useFiftyFifty() {
    if (!gameState.lifelines.fiftyFifty) return;
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    
    // Only works for multiple choice questions
    if (currentQuestion.type !== 'multiple-choice') {
        alert("50:50 lifeline is only available for multiple choice questions!");
        return;
    }
    
    const options = document.querySelectorAll('.option');
    let incorrectOptions = [];
    
    // Find all incorrect options
    currentQuestion.options.forEach((option, index) => {
        if (option !== currentQuestion.answer) {
            incorrectOptions.push(index);
        }
    });
    
    // Shuffle and select two incorrect options to remove
    incorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    
    // Hide selected incorrect options
    incorrectOptions.forEach(index => {
        options[index].style.opacity = '0.5';
        options[index].style.pointerEvents = 'none';
    });
    
    // Disable lifeline
    gameState.lifelines.fiftyFifty = false;
    fiftyFiftyBtn.disabled = true;
    updateLifelineButtons();
}

function useHint() {
    if (!gameState.lifelines.hint) return;
    
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    explanationEl.textContent = currentQuestion.explanation;
    explanationEl.style.display = 'block';
    
    // Disable lifeline
    gameState.lifelines.hint = false;
    hintBtn.disabled = true;
    updateLifelineButtons();
}

function useExtraTime() {
    if (!gameState.lifelines.extraTime) return;
    
    gameState.timeLeft += 10;
    timerEl.textContent = gameState.timeLeft;
    
    // Disable lifeline
    gameState.lifelines.extraTime = false;
    extraTimeBtn.disabled = true;
    updateLifelineButtons();
}

function updateLifelineButtons() {
    fiftyFiftyBtn.disabled = !gameState.lifelines.fiftyFifty;
    hintBtn.disabled = !gameState.lifelines.hint;
    extraTimeBtn.disabled = !gameState.lifelines.extraTime;
}

// Restart the game
function restartGame() {
    // Reset category selection
    gameState.currentCategory = null;
    
    // Show category screen
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    reviewScreen.style.display = 'none';
    categoryScreen.style.display = 'block';
}

// Go to home screen
function goHome() {
    // Reset category selection
    gameState.currentCategory = null;
    
    // Show home screen
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    reviewScreen.style.display = 'none';
    categoryScreen.style.display = 'none';
    homeScreen.style.display = 'block';
}

// Utility function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Utility function to compare arrays (for multiple-select answers)
function arraysEqual(set1, set2) {
    if (set1.size !== set2.size) return false;
    for (const item of set1) {
        if (!set2.has(item)) return false;
    }
    return true;
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', init);