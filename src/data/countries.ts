export type Difficulty = "expert" | "hard" | "medium" | "easy";

export interface Hint {
  difficulty: Difficulty;
  text_es: string;
  text_en: string;
}

export interface Country {
  id: number;
  name: string;
  name_en: string;
  hints: Hint[];
}

export const countries: Country[] = [
  {
    id: 1,
    name: "España",
    name_en: "Spain",
    hints: [
      { difficulty: "expert", text_es: "País europeo con 17 comunidades autónomas y dos archipiélagos.", text_en: "European country with 17 autonomous communities and two archipelagos." },
      { difficulty: "hard", text_es: "Su capital alberga el Museo del Prado y el Palacio Real.", text_en: "Its capital is home to the Prado Museum and the Royal Palace." },
      { difficulty: "medium", text_es: "Cuna del flamenco, la paella y la siesta.", text_en: "Birthplace of flamenco, paella and the siesta." },
      { difficulty: "easy", text_es: "País del fútbol, los toros y la Sagrada Familia.", text_en: "Country of football, bulls and the Sagrada Familia." },
    ],
  },
  {
    id: 2,
    name: "Japón",
    name_en: "Japan",
    hints: [
      { difficulty: "expert", text_es: "Archipiélago con más de 6.800 islas en el Pacífico.", text_en: "Archipelago with more than 6,800 islands in the Pacific." },
      { difficulty: "hard", text_es: "Su moneda es el yen y su emperador actual es Naruhito.", text_en: "Its currency is the yen and its current emperor is Naruhito." },
      { difficulty: "medium", text_es: "Famoso por el sushi, el manga y los samuráis.", text_en: "Famous for sushi, manga and samurais." },
      { difficulty: "easy", text_es: "El país del Monte Fuji y los cerezos en flor.", text_en: "The country of Mount Fuji and cherry blossoms." },
    ],
  },
  {
    id: 3,
    name: "Noruega",
    name_en: "Norway",
    hints: [
      { difficulty: "expert", text_es: "País nórdico que no pertenece a la Unión Europea.", text_en: "Nordic country that does not belong to the European Union." },
      { difficulty: "hard", text_es: "Su capital es Oslo y su moneda la corona.", text_en: "Its capital is Oslo and its currency is the krone." },
      { difficulty: "medium", text_es: "Famoso por sus fiordos y la aurora boreal.", text_en: "Famous for its fjords and the northern lights." },
      { difficulty: "easy", text_es: "Uno de los principales productores de salmón del mundo.", text_en: "One of the world's largest salmon producers." },
    ],
  },
  {
    id: 4,
    name: "Brasil",
    name_en: "Brazil",
    hints: [
      { difficulty: "expert", text_es: "Quinto país más grande del mundo por superficie.", text_en: "Fifth largest country in the world by area." },
      { difficulty: "hard", text_es: "Único país de habla portuguesa en América.", text_en: "The only Portuguese-speaking country in the Americas." },
      { difficulty: "medium", text_es: "Hogar de la selva amazónica y el carnaval de Río.", text_en: "Home of the Amazon rainforest and the Rio Carnival." },
      { difficulty: "easy", text_es: "El país de la samba, Pelé y el Cristo Redentor.", text_en: "The country of samba, Pelé and Christ the Redeemer." },
    ],
  },
  {
    id: 5,
    name: "Egipto",
    name_en: "Egypt",
    hints: [
      { difficulty: "expert", text_es: "Su territorio se divide entre África y Asia por el Sinaí.", text_en: "Its territory is split between Africa and Asia by the Sinai." },
      { difficulty: "hard", text_es: "Atravesado por el río más largo del mundo.", text_en: "Crossed by the longest river in the world." },
      { difficulty: "medium", text_es: "Hogar de los faraones y la Esfinge.", text_en: "Home of the pharaohs and the Sphinx." },
      { difficulty: "easy", text_es: "El país de las pirámides de Giza.", text_en: "The country of the Pyramids of Giza." },
    ],
  },
  {
    id: 6,
    name: "Australia",
    name_en: "Australia",
    hints: [
      { difficulty: "expert", text_es: "País y continente a la vez, en el hemisferio sur.", text_en: "Both a country and a continent, in the southern hemisphere." },
      { difficulty: "hard", text_es: "Su capital es Canberra, no Sídney.", text_en: "Its capital is Canberra, not Sydney." },
      { difficulty: "medium", text_es: "Hogar de la Gran Barrera de Coral.", text_en: "Home of the Great Barrier Reef." },
      { difficulty: "easy", text_es: "El país de los canguros y los koalas.", text_en: "The country of kangaroos and koalas." },
    ],
  },
  {
    id: 7,
    name: "Italia",
    name_en: "Italy",
    hints: [
      { difficulty: "expert", text_es: "Forma de bota en el Mediterráneo, fundadora de la UE.", text_en: "Boot-shaped country in the Mediterranean, founding member of the EU." },
      { difficulty: "hard", text_es: "Cuna del Renacimiento y del Imperio Romano.", text_en: "Birthplace of the Renaissance and the Roman Empire." },
      { difficulty: "medium", text_es: "Famoso por la pizza, la pasta y el gelato.", text_en: "Famous for pizza, pasta and gelato." },
      { difficulty: "easy", text_es: "El país de la Torre de Pisa y el Coliseo.", text_en: "The country of the Leaning Tower of Pisa and the Colosseum." },
    ],
  },
  {
    id: 8,
    name: "México",
    name_en: "Mexico",
    hints: [
      { difficulty: "expert", text_es: "Tercer país más grande de América Latina.", text_en: "Third largest country in Latin America." },
      { difficulty: "hard", text_es: "Cuna de las civilizaciones azteca y maya.", text_en: "Cradle of the Aztec and Mayan civilizations." },
      { difficulty: "medium", text_es: "Famoso por los tacos, los mariachis y el tequila.", text_en: "Famous for tacos, mariachis and tequila." },
      { difficulty: "easy", text_es: "El país del Día de los Muertos y los sombreros.", text_en: "The country of the Day of the Dead and sombreros." },
    ],
  },
  {
    id: 9,
    name: "Francia",
    name_en: "France",
    hints: [
      { difficulty: "expert", text_es: "República semipresidencial dividida en regiones.", text_en: "Semi-presidential republic divided into regions." },
      { difficulty: "hard", text_es: "Mayor productor mundial de vinos finos.", text_en: "World's leading producer of fine wines." },
      { difficulty: "medium", text_es: "Famoso por el queso, los croissants y la moda.", text_en: "Famous for cheese, croissants and fashion." },
      { difficulty: "easy", text_es: "El país de la Torre Eiffel y el Louvre.", text_en: "The country of the Eiffel Tower and the Louvre." },
    ],
  },
  {
    id: 10,
    name: "Argentina",
    name_en: "Argentina",
    hints: [
      { difficulty: "expert", text_es: "Octavo país más grande del mundo.", text_en: "Eighth largest country in the world." },
      { difficulty: "hard", text_es: "En su territorio se encuentra el Aconcagua.", text_en: "Home to Mount Aconcagua." },
      { difficulty: "medium", text_es: "Famoso por el tango, el mate y el asado.", text_en: "Famous for tango, mate and asado." },
      { difficulty: "easy", text_es: "Tierra de Messi y Maradona.", text_en: "Land of Messi and Maradona." },
    ],
  },
  {
    id: 11,
    name: "China",
    name_en: "China",
    hints: [
      { difficulty: "expert", text_es: "País más poblado del planeta durante siglos.", text_en: "Most populous country on the planet for centuries." },
      { difficulty: "hard", text_es: "Su moneda es el yuan y su capital Pekín.", text_en: "Its currency is the yuan and its capital is Beijing." },
      { difficulty: "medium", text_es: "Inventores del papel, la pólvora y la brújula.", text_en: "Inventors of paper, gunpowder and the compass." },
      { difficulty: "easy", text_es: "El país de la Gran Muralla y los pandas.", text_en: "The country of the Great Wall and pandas." },
    ],
  },
  {
    id: 12,
    name: "India",
    name_en: "India",
    hints: [
      { difficulty: "expert", text_es: "Democracia más grande del mundo por población.", text_en: "World's largest democracy by population." },
      { difficulty: "hard", text_es: "Tiene 22 idiomas oficiales reconocidos.", text_en: "It has 22 officially recognized languages." },
      { difficulty: "medium", text_es: "Cuna del yoga, el curry y Bollywood.", text_en: "Birthplace of yoga, curry and Bollywood." },
      { difficulty: "easy", text_es: "El país del Taj Mahal y las vacas sagradas.", text_en: "The country of the Taj Mahal and sacred cows." },
    ],
  },
  {
    id: 13,
    name: "Alemania",
    name_en: "Germany",
    hints: [
      { difficulty: "expert", text_es: "República federal con 16 estados (Länder).", text_en: "Federal republic with 16 states (Länder)." },
      { difficulty: "hard", text_es: "Mayor economía de la Unión Europea.", text_en: "Largest economy in the European Union." },
      { difficulty: "medium", text_es: "Famoso por la cerveza, las salchichas y el Oktoberfest.", text_en: "Famous for beer, sausages and Oktoberfest." },
      { difficulty: "easy", text_es: "Patria de BMW, Mercedes y la Puerta de Brandeburgo.", text_en: "Homeland of BMW, Mercedes and the Brandenburg Gate." },
    ],
  },
  {
    id: 14,
    name: "Canadá",
    name_en: "Canada",
    hints: [
      { difficulty: "expert", text_es: "Segundo país más grande del mundo por superficie.", text_en: "Second largest country in the world by area." },
      { difficulty: "hard", text_es: "Tiene dos idiomas oficiales: inglés y francés.", text_en: "Has two official languages: English and French." },
      { difficulty: "medium", text_es: "Famoso por el jarabe de arce y el hockey sobre hielo.", text_en: "Famous for maple syrup and ice hockey." },
      { difficulty: "easy", text_es: "Su bandera tiene una hoja de arce roja.", text_en: "Its flag has a red maple leaf." },
    ],
  },
  {
    id: 15,
    name: "Grecia",
    name_en: "Greece",
    hints: [
      { difficulty: "expert", text_es: "Compuesta por la península y más de 6.000 islas.", text_en: "Made up of a peninsula and more than 6,000 islands." },
      { difficulty: "hard", text_es: "Cuna de la democracia y la filosofía occidental.", text_en: "Birthplace of democracy and Western philosophy." },
      { difficulty: "medium", text_es: "Famoso por sus dioses del Olimpo y el Partenón.", text_en: "Famous for its Olympian gods and the Parthenon." },
      { difficulty: "easy", text_es: "El país de Santorini y los Juegos Olímpicos antiguos.", text_en: "The country of Santorini and the ancient Olympic Games." },
    ],
  },
  {
    id: 16,
    name: "Suecia",
    name_en: "Sweden",
    hints: [
      { difficulty: "expert", text_es: "Monarquía constitucional escandinava miembro de la UE.", text_en: "Scandinavian constitutional monarchy and EU member." },
      { difficulty: "hard", text_es: "Su capital se extiende sobre 14 islas.", text_en: "Its capital spreads across 14 islands." },
      { difficulty: "medium", text_es: "País natal de IKEA, Spotify y ABBA.", text_en: "Home country of IKEA, Spotify and ABBA." },
      { difficulty: "easy", text_es: "Entrega los Premios Nobel cada año.", text_en: "Awards the Nobel Prizes every year." },
    ],
  },
  {
    id: 17,
    name: "Marruecos",
    name_en: "Morocco",
    hints: [
      { difficulty: "expert", text_es: "País del Magreb separado de Europa por un estrecho.", text_en: "Maghreb country separated from Europe by a strait." },
      { difficulty: "hard", text_es: "Su capital es Rabat, aunque la ciudad más famosa es Marrakech.", text_en: "Its capital is Rabat, though its most famous city is Marrakech." },
      { difficulty: "medium", text_es: "Hogar del desierto del Sahara y los zocos.", text_en: "Home to the Sahara desert and the souks." },
      { difficulty: "easy", text_es: "Famoso por el té con menta y el cuscús.", text_en: "Famous for mint tea and couscous." },
    ],
  },
  {
    id: 18,
    name: "Tailandia",
    name_en: "Thailand",
    hints: [
      { difficulty: "expert", text_es: "Único país del sudeste asiático nunca colonizado por europeos.", text_en: "The only Southeast Asian country never colonized by Europeans." },
      { difficulty: "hard", text_es: "Su capital tiene el nombre ceremonial más largo del mundo.", text_en: "Its capital has the world's longest ceremonial name." },
      { difficulty: "medium", text_es: "Famoso por el pad thai y los templos budistas.", text_en: "Famous for pad thai and Buddhist temples." },
      { difficulty: "easy", text_es: "Conocido como el país de las sonrisas.", text_en: "Known as the land of smiles." },
    ],
  },
  {
    id: 19,
    name: "Portugal",
    name_en: "Portugal",
    hints: [
      { difficulty: "expert", text_es: "País más occidental de Europa continental.", text_en: "Westernmost country in continental Europe." },
      { difficulty: "hard", text_es: "Imperio marítimo que llegó a Brasil, Angola y Macao.", text_en: "Maritime empire that reached Brazil, Angola and Macau." },
      { difficulty: "medium", text_es: "Famoso por el fado, los azulejos y los pasteles de nata.", text_en: "Famous for fado, azulejos and pastéis de nata." },
      { difficulty: "easy", text_es: "Vecino de España con capital en Lisboa.", text_en: "Spain's neighbor, with its capital in Lisbon." },
    ],
  },
  {
    id: 20,
    name: "Islandia",
    name_en: "Iceland",
    hints: [
      { difficulty: "expert", text_es: "Isla volcánica situada sobre la dorsal mesoatlántica.", text_en: "Volcanic island sitting on the Mid-Atlantic Ridge." },
      { difficulty: "hard", text_es: "Su parlamento, el Althing, es uno de los más antiguos del mundo.", text_en: "Its parliament, the Althing, is one of the oldest in the world." },
      { difficulty: "medium", text_es: "Famoso por sus géiseres, glaciares y aguas termales.", text_en: "Famous for its geysers, glaciers and hot springs." },
      { difficulty: "easy", text_es: "Pequeña nación nórdica con capital en Reikiavik.", text_en: "Small Nordic nation with its capital in Reykjavík." },
    ],
  },
];
