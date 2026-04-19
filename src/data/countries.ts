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
      {
        difficulty: "expert",
        text_es: "Comparte con Francia la única isla del mundo cuya soberanía rota cada seis meses entre dos países.",
        text_en: "It shares with France the only island in the world whose sovereignty rotates between two nations every six months.",
      },
      {
        difficulty: "hard",
        text_es: "Tiene más Reservas de la Biosfera de la UNESCO que cualquier otra nación del planeta.",
        text_en: "It has more UNESCO Biosphere Reserves than any other nation on the planet.",
      },
      {
        difficulty: "medium",
        text_es: "Inventó el submarino, el chupa-chups y produce casi la mitad del aceite de oliva del mundo.",
        text_en: "It invented the submarine, the lollipop on a stick, and produces nearly half of the world's olive oil.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Madrid, alberga la Sagrada Familia en Barcelona y es la cuna del flamenco y las tapas.",
        text_en: "Its capital is Madrid, it's home to the Sagrada Familia in Barcelona, and it's the birthplace of flamenco and tapas.",
      },
    ],
  },
  {
    id: 2,
    name: "Japón",
    name_en: "Japan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su emperador es el único monarca del mundo que ostenta oficialmente el título de Tennō (Emperador Celestial).",
        text_en: "Its emperor is the only monarch in the world who officially holds the title of Tennō (Heavenly Sovereign).",
      },
      {
        difficulty: "hard",
        text_es: "Concentra más restaurantes con estrellas Michelin que cualquier otro país y desarrolló sus propios sistemas de escritura silábica.",
        text_en: "It has more Michelin-starred restaurants than any other country and developed its own syllabic writing systems.",
      },
      {
        difficulty: "medium",
        text_es: "Cuna del manga, los videojuegos, los samuráis y la ceremonia del té.",
        text_en: "Birthplace of manga, video games, samurais, and the tea ceremony.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Tokio, es una nación insular de Asia Oriental famosa por el Monte Fuji y los cerezos en flor.",
        text_en: "Its capital is Tokyo, an East Asian island nation famous for Mount Fuji and cherry blossoms.",
      },
    ],
  },
  {
    id: 3,
    name: "Noruega",
    name_en: "Norway",
    hints: [
      {
        difficulty: "expert",
        text_es: "Posee la Bóveda Global de Semillas en Svalbard, un búnker ártico que protege la diversidad agrícola mundial.",
        text_en: "It hosts the Global Seed Vault in Svalbard, an Arctic bunker safeguarding the world's agricultural diversity.",
      },
      {
        difficulty: "hard",
        text_es: "Su fondo soberano es el más grande del mundo y financia gran parte de su estado del bienestar gracias al petróleo del Mar del Norte.",
        text_en: "Its sovereign wealth fund is the largest in the world and funds much of its welfare state thanks to North Sea oil.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus fiordos, la aurora boreal y por ser uno de los principales productores de salmón del planeta.",
        text_en: "Famous for its fjords, the northern lights, and for being one of the world's leading salmon producers.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Oslo, es un país escandinavo y es el hogar de los vikingos.",
        text_en: "Its capital is Oslo, it's a Scandinavian country, and the homeland of the Vikings.",
      },
    ],
  },
  {
    id: 4,
    name: "Brasil",
    name_en: "Brazil",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país de América que limita con casi todos sus vecinos continentales: comparte frontera con diez naciones.",
        text_en: "It's the only country in the Americas that borders almost all its continental neighbors: it shares borders with ten nations.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga más del 60% de la selva amazónica y es el mayor productor mundial de café desde hace más de 150 años.",
        text_en: "It contains more than 60% of the Amazon rainforest and has been the world's largest coffee producer for over 150 years.",
      },
      {
        difficulty: "medium",
        text_es: "Cinco veces campeón del Mundial de fútbol, cuna de la samba y del Carnaval más famoso del planeta.",
        text_en: "Five-time FIFA World Cup champion, birthplace of samba and of the world's most famous Carnival.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Brasilia, es el país más grande de Sudamérica, habla portugués y allí está el Cristo Redentor.",
        text_en: "Its capital is Brasília, it's the largest country in South America, it speaks Portuguese, and Christ the Redeemer stands there.",
      },
    ],
  },
  {
    id: 5,
    name: "Egipto",
    name_en: "Egypt",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su territorio es transcontinental: la península del Sinaí pertenece a Asia mientras el resto del país está en África.",
        text_en: "Its territory is transcontinental: the Sinai Peninsula lies in Asia while the rest of the country is in Africa.",
      },
      {
        difficulty: "hard",
        text_es: "Atravesado por el río más largo del mundo, controla un canal artificial clave que une el Mediterráneo con el Mar Rojo.",
        text_en: "Crossed by the world's longest river, it controls a key artificial canal linking the Mediterranean with the Red Sea.",
      },
      {
        difficulty: "medium",
        text_es: "Su antigua civilización fue gobernada por faraones, levantó la Esfinge e inventó la escritura jeroglífica.",
        text_en: "Its ancient civilization was ruled by pharaohs, built the Sphinx, and invented hieroglyphic writing.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es El Cairo y es famoso en todo el mundo por las pirámides de Giza.",
        text_en: "Its capital is Cairo and it's world-famous for the Pyramids of Giza.",
      },
    ],
  },
  {
    id: 6,
    name: "Australia",
    name_en: "Australia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Concentra más de la mitad de las especies de serpientes venenosas más letales del mundo y un mar interior se evapora durante la sequía.",
        text_en: "It is home to more than half of the world's deadliest venomous snake species, and one of its inland seas evaporates during droughts.",
      },
      {
        difficulty: "hard",
        text_es: "Es a la vez país y continente, y su capital fue construida desde cero como compromiso entre sus dos ciudades principales.",
        text_en: "It is both a country and a continent, and its capital was built from scratch as a compromise between its two main cities.",
      },
      {
        difficulty: "medium",
        text_es: "Hogar de la Gran Barrera de Coral, el mayor sistema de arrecifes del planeta.",
        text_en: "Home to the Great Barrier Reef, the largest coral reef system on the planet.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Canberra, está en el hemisferio sur y es famoso por los canguros y los koalas.",
        text_en: "Its capital is Canberra, it lies in the southern hemisphere, and it's famous for kangaroos and koalas.",
      },
    ],
  },
  {
    id: 7,
    name: "Italia",
    name_en: "Italy",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo que tiene dos enclaves soberanos completos dentro de su territorio.",
        text_en: "It is the only country in the world that contains two fully sovereign enclaves within its borders.",
      },
      {
        difficulty: "hard",
        text_es: "Cuna del Renacimiento y del derecho moderno, fue durante siglos el centro del Imperio Romano.",
        text_en: "Birthplace of the Renaissance and of modern law, it was for centuries the heart of the Roman Empire.",
      },
      {
        difficulty: "medium",
        text_es: "Inventó la pizza, la pasta y el espresso, y tiene forma de bota en el Mediterráneo.",
        text_en: "It invented pizza, pasta, and espresso, and has the shape of a boot in the Mediterranean.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Roma y allí están el Coliseo y la Torre de Pisa.",
        text_en: "Its capital is Rome, home to the Colosseum and the Leaning Tower of Pisa.",
      },
    ],
  },
  {
    id: 8,
    name: "México",
    name_en: "Mexico",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país con mayor diversidad de variedades nativas de maíz del planeta: más de 60 razas distintas.",
        text_en: "It is the country with the greatest diversity of native corn varieties on Earth: more than 60 distinct breeds.",
      },
      {
        difficulty: "hard",
        text_es: "Cuna de las civilizaciones azteca y maya, fue el mayor productor mundial de plata durante siglos.",
        text_en: "Cradle of the Aztec and Mayan civilizations, it was the world's largest silver producer for centuries.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por los tacos, los mariachis, el tequila y el Día de los Muertos.",
        text_en: "Famous for tacos, mariachis, tequila, and the Day of the Dead.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Ciudad de México, está justo al sur de Estados Unidos y se habla español.",
        text_en: "Its capital is Mexico City, it lies just south of the United States, and Spanish is spoken there.",
      },
    ],
  },
  {
    id: 9,
    name: "Francia",
    name_en: "France",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país de la Unión Europea con territorio en cinco continentes diferentes a través de sus departamentos de ultramar.",
        text_en: "It is the only EU country with territory on five different continents through its overseas departments.",
      },
      {
        difficulty: "hard",
        text_es: "Es el país más visitado del mundo y el mayor productor mundial de vinos finos y quesos con denominación de origen.",
        text_en: "It is the most visited country in the world and the largest producer of fine wines and protected-origin cheeses.",
      },
      {
        difficulty: "medium",
        text_es: "Cuna del impresionismo, la alta costura, los croissants y la baguette.",
        text_en: "Birthplace of Impressionism, haute couture, croissants, and the baguette.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es París y allí están la Torre Eiffel, el Louvre y Notre-Dame.",
        text_en: "Its capital is Paris, home to the Eiffel Tower, the Louvre, and Notre-Dame.",
      },
    ],
  },
  {
    id: 10,
    name: "Argentina",
    name_en: "Argentina",
    hints: [
      {
        difficulty: "expert",
        text_es: "En su territorio se encuentra la ciudad continuamente habitada más austral del planeta y el pico más alto fuera de Asia.",
        text_en: "Its territory contains the southernmost continuously inhabited city on Earth and the highest peak outside Asia.",
      },
      {
        difficulty: "hard",
        text_es: "Mayor consumidor de carne vacuna per cápita del mundo durante décadas, comparte con Brasil las cataratas del Iguazú.",
        text_en: "For decades the world's top per-capita beef consumer, it shares the Iguazú Falls with Brazil.",
      },
      {
        difficulty: "medium",
        text_es: "Cuna del tango, el mate y el dulce de leche.",
        text_en: "Birthplace of tango, mate, and dulce de leche.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Buenos Aires y es la tierra de Messi y Maradona.",
        text_en: "Its capital is Buenos Aires and it's the land of Messi and Maradona.",
      },
    ],
  },
  {
    id: 11,
    name: "China",
    name_en: "China",
    hints: [
      {
        difficulty: "expert",
        text_es: "Aunque cruza cinco husos horarios geográficos, todo su territorio funciona oficialmente con una sola hora unificada.",
        text_en: "Although it spans five geographical time zones, the entire country officially runs on a single unified time.",
      },
      {
        difficulty: "hard",
        text_es: "Inventó el papel, la pólvora, la brújula y la imprenta, y es el mayor exportador del mundo.",
        text_en: "It invented paper, gunpowder, the compass, and printing, and is the world's largest exporter.",
      },
      {
        difficulty: "medium",
        text_es: "Su moneda es el yuan, su escritura usa miles de caracteres y es el hogar de los pandas gigantes.",
        text_en: "Its currency is the yuan, its writing uses thousands of characters, and it's home to the giant pandas.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Pekín y allí está la Gran Muralla, una de las maravillas del mundo.",
        text_en: "Its capital is Beijing and it's home to the Great Wall, one of the wonders of the world.",
      },
    ],
  },
  {
    id: 12,
    name: "India",
    name_en: "India",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución reconoce 22 lenguas oficiales y allí se inventó el concepto matemático del cero.",
        text_en: "Its constitution recognizes 22 official languages, and the mathematical concept of zero was invented there.",
      },
      {
        difficulty: "hard",
        text_es: "Es la democracia más poblada del mundo y la cuna de cuatro grandes religiones: hinduismo, budismo, jainismo y sijismo.",
        text_en: "It is the world's most populous democracy and the birthplace of four major religions: Hinduism, Buddhism, Jainism, and Sikhism.",
      },
      {
        difficulty: "medium",
        text_es: "Cuna del yoga, el curry, las vacas sagradas y la industria del cine de Bollywood.",
        text_en: "Birthplace of yoga, curry, sacred cows, and the Bollywood film industry.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Nueva Delhi y allí se encuentra el Taj Mahal.",
        text_en: "Its capital is New Delhi and it's home to the Taj Mahal.",
      },
    ],
  },
  {
    id: 13,
    name: "Alemania",
    name_en: "Germany",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su sistema universitario es prácticamente gratuito incluso para extranjeros y patentó más invenciones por habitante que casi cualquier otro país.",
        text_en: "Its university system is almost entirely free even for foreigners, and it has filed more patents per capita than nearly any other country.",
      },
      {
        difficulty: "hard",
        text_es: "Mayor economía de Europa, fue dividida en dos estados durante casi medio siglo después de la Segunda Guerra Mundial.",
        text_en: "Europe's largest economy, it was split into two states for nearly half a century after World War II.",
      },
      {
        difficulty: "medium",
        text_es: "Famosa por la cerveza, las salchichas, el Oktoberfest y por marcas como BMW, Mercedes y Volkswagen.",
        text_en: "Famous for beer, sausages, Oktoberfest, and brands like BMW, Mercedes, and Volkswagen.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Berlín y allí estuvo el famoso muro que dividió Europa durante la Guerra Fría.",
        text_en: "Its capital is Berlin, where the famous wall that divided Europe during the Cold War once stood.",
      },
    ],
  },
  {
    id: 14,
    name: "Canadá",
    name_en: "Canada",
    hints: [
      {
        difficulty: "expert",
        text_es: "Posee más lagos que el resto de países del mundo juntos y comparte la frontera terrestre más larga del planeta sin militarizar.",
        text_en: "It has more lakes than the rest of the world's countries combined and shares the longest non-militarized land border on Earth.",
      },
      {
        difficulty: "hard",
        text_es: "Segundo país más grande del mundo por superficie y oficialmente bilingüe en inglés y francés.",
        text_en: "The second-largest country in the world by area and officially bilingual in English and French.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por el jarabe de arce, el hockey sobre hielo y por su Policía Montada.",
        text_en: "Famous for maple syrup, ice hockey, and its Mounted Police.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Ottawa, está justo al norte de Estados Unidos y su bandera tiene una hoja de arce roja.",
        text_en: "Its capital is Ottawa, it lies just north of the United States, and its flag features a red maple leaf.",
      },
    ],
  },
  {
    id: 15,
    name: "Grecia",
    name_en: "Greece",
    hints: [
      {
        difficulty: "expert",
        text_es: "El monte Athos, en su territorio, es una república monástica autónoma donde está prohibido el acceso a las mujeres desde hace más de mil años.",
        text_en: "Mount Athos, within its territory, is an autonomous monastic republic where women have been forbidden entry for over a thousand years.",
      },
      {
        difficulty: "hard",
        text_es: "Cuna de la democracia, la filosofía occidental y los Juegos Olímpicos, está formada por una península y más de 6.000 islas.",
        text_en: "Birthplace of democracy, Western philosophy, and the Olympic Games, it is made up of a peninsula and more than 6,000 islands.",
      },
      {
        difficulty: "medium",
        text_es: "Famosa por su mitología de dioses del Olimpo, sus templos antiguos y la dieta mediterránea.",
        text_en: "Famous for its mythology of Olympian gods, its ancient temples, and the Mediterranean diet.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Atenas, allí está la Acrópolis y las casas blancas con cúpulas azules de Santorini.",
        text_en: "Its capital is Athens, home to the Acropolis and to Santorini's iconic white houses with blue domes.",
      },
    ],
  },
  {
    id: 16,
    name: "Suecia",
    name_en: "Sweden",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una ley nacional, el «allemansrätten», otorga a cualquier persona el derecho a acampar y caminar libremente por casi cualquier terreno, incluso privado.",
        text_en: "A national law, allemansrätten, grants anyone the right to freely camp and roam across almost any land, even private property.",
      },
      {
        difficulty: "hard",
        text_es: "Su academia entrega cada año los Premios Nobel y es uno de los países más igualitarios del mundo.",
        text_en: "Its academy awards the Nobel Prizes every year and it is one of the most egalitarian countries in the world.",
      },
      {
        difficulty: "medium",
        text_es: "País natal de IKEA, Spotify, Volvo y del grupo musical ABBA.",
        text_en: "Home country of IKEA, Spotify, Volvo, and the band ABBA.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Estocolmo, es un país escandinavo y su bandera es azul con una cruz amarilla.",
        text_en: "Its capital is Stockholm, it's a Scandinavian country, and its flag is blue with a yellow cross.",
      },
    ],
  },
  {
    id: 17,
    name: "Marruecos",
    name_en: "Morocco",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el primer país del mundo en reconocer oficialmente la independencia de Estados Unidos, en 1777.",
        text_en: "It was the first country in the world to officially recognize the independence of the United States, in 1777.",
      },
      {
        difficulty: "hard",
        text_es: "Separado de Europa por un estrecho de apenas 14 km, alberga la universidad en funcionamiento más antigua del mundo, Al Quaraouiyine.",
        text_en: "Separated from Europe by a strait barely 14 km wide, it hosts the oldest continuously operating university in the world, Al-Qarawiyyin.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus zocos, el té con menta, el cuscús y las ciudades imperiales como Marrakech y Fez.",
        text_en: "Famous for its souks, mint tea, couscous, and imperial cities like Marrakech and Fez.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Rabat, está en el norte de África y allí empieza el desierto del Sahara.",
        text_en: "Its capital is Rabat, it lies in northern Africa, and the Sahara Desert begins there.",
      },
    ],
  },
  {
    id: 18,
    name: "Tailandia",
    name_en: "Thailand",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del Sudeste Asiático que nunca fue colonizado por una potencia europea, y su nombre significa literalmente «Tierra de los Libres».",
        text_en: "It is the only Southeast Asian country never colonized by a European power, and its name literally means 'Land of the Free'.",
      },
      {
        difficulty: "hard",
        text_es: "El nombre ceremonial de su capital es el más largo del mundo, con 168 letras según el Récord Guinness.",
        text_en: "The ceremonial name of its capital is the longest in the world, with 168 letters according to the Guinness Records.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por el pad thai, los templos budistas dorados, el muay thai y los elefantes.",
        text_en: "Famous for pad thai, golden Buddhist temples, Muay Thai, and elephants.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Bangkok y se conoce como «el país de las sonrisas».",
        text_en: "Its capital is Bangkok and it's known as the 'Land of Smiles'.",
      },
    ],
  },
  {
    id: 19,
    name: "Portugal",
    name_en: "Portugal",
    hints: [
      {
        difficulty: "expert",
        text_es: "Produce alrededor del 50% del corcho del mundo y allí se encuentra el puente más largo de Europa, el Vasco da Gama.",
        text_en: "It produces around 50% of the world's cork and is home to the longest bridge in Europe, the Vasco da Gama.",
      },
      {
        difficulty: "hard",
        text_es: "País más occidental de Europa continental, su imperio marítimo llegó a Brasil, Angola, Mozambique, Goa y Macao.",
        text_en: "The westernmost country in continental Europe, its maritime empire reached Brazil, Angola, Mozambique, Goa, and Macau.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por el fado, los azulejos, los pastéis de nata y por ser uno de los grandes productores de vino de Oporto.",
        text_en: "Famous for fado music, azulejo tiles, pastéis de nata, and as a great producer of port wine.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Lisboa, está al lado de España y se habla portugués.",
        text_en: "Its capital is Lisbon, it sits right next to Spain, and Portuguese is spoken there.",
      },
    ],
  },
  {
    id: 20,
    name: "Islandia",
    name_en: "Iceland",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su parlamento, el Althing, fundado en el año 930, es considerado el más antiguo del mundo aún en funcionamiento.",
        text_en: "Its parliament, the Althing, founded in the year 930, is considered the oldest still-functioning parliament in the world.",
      },
      {
        difficulty: "hard",
        text_es: "Situada sobre la dorsal mesoatlántica, casi toda su electricidad y calefacción provienen de fuentes geotérmicas e hidroeléctricas.",
        text_en: "Sitting on the Mid-Atlantic Ridge, nearly all of its electricity and heating come from geothermal and hydroelectric sources.",
      },
      {
        difficulty: "medium",
        text_es: "Famosa por sus volcanes activos, géiseres, glaciares y aguas termales como la Laguna Azul.",
        text_en: "Famous for its active volcanoes, geysers, glaciers, and hot springs like the Blue Lagoon.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Reikiavik, es una pequeña isla nórdica en el Atlántico Norte donde se ve la aurora boreal.",
        text_en: "Its capital is Reykjavík, it's a small Nordic island in the North Atlantic where you can see the northern lights.",
      },
    ],
  },
];
