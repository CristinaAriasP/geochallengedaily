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
  {
    id: 21,
    name: "Reino Unido",
    name_en: "United Kingdom",
    hints: [
      { difficulty: "expert", text_es: "Es la única monarquía del mundo sin una constitución escrita en un único documento codificado.", text_en: "It is the only major monarchy in the world without a single codified written constitution." },
      { difficulty: "hard", text_es: "Su meridiano cero pasa por un observatorio londinense y define la hora universal desde 1884.", text_en: "Its prime meridian passes through a London observatory and has defined universal time since 1884." },
      { difficulty: "medium", text_es: "Cuna del fútbol moderno, los Beatles y la Revolución Industrial.", text_en: "Birthplace of modern football, The Beatles, and the Industrial Revolution." },
      { difficulty: "easy", text_es: "Su capital es Londres, hogar del Big Ben, el Palacio de Buckingham y los autobuses rojos de dos pisos.", text_en: "Its capital is London, home to Big Ben, Buckingham Palace, and red double-decker buses." },
    ],
  },
  {
    id: 22,
    name: "Estados Unidos",
    name_en: "United States",
    hints: [
      { difficulty: "expert", text_es: "Su constitución es la más antigua aún vigente del mundo y solo ha sido enmendada 27 veces desde 1789.", text_en: "Its constitution is the oldest still in effect in the world and has only been amended 27 times since 1789." },
      { difficulty: "hard", text_es: "Posee el mayor PIB nominal del planeta y emite la moneda de reserva mundial.", text_en: "It has the largest nominal GDP on the planet and issues the world's reserve currency." },
      { difficulty: "medium", text_es: "Famoso por Hollywood, Silicon Valley, el jazz y la NBA.", text_en: "Famous for Hollywood, Silicon Valley, jazz, and the NBA." },
      { difficulty: "easy", text_es: "Su capital es Washington D.C., tiene 50 estados y la Estatua de la Libertad en Nueva York.", text_en: "Its capital is Washington D.C., it has 50 states, and the Statue of Liberty stands in New York." },
    ],
  },
  {
    id: 23,
    name: "Rusia",
    name_en: "Russia",
    hints: [
      { difficulty: "expert", text_es: "Abarca once husos horarios y limita con catorce países, más que casi cualquier otra nación.", text_en: "It spans eleven time zones and borders fourteen countries, more than almost any other nation." },
      { difficulty: "hard", text_es: "Alberga el lago más profundo del mundo, que contiene cerca del 20% del agua dulce no congelada del planeta.", text_en: "It is home to the deepest lake on Earth, holding about 20% of the planet's unfrozen freshwater." },
      { difficulty: "medium", text_es: "Cuna del ballet Bolshói, las matrioskas y la literatura de Tolstói y Dostoyevski.", text_en: "Birthplace of the Bolshoi Ballet, matryoshka dolls, and the literature of Tolstoy and Dostoevsky." },
      { difficulty: "easy", text_es: "Su capital es Moscú, es el país más extenso del mundo y famoso por la Plaza Roja y el Kremlin.", text_en: "Its capital is Moscow, it is the largest country in the world, famous for Red Square and the Kremlin." },
    ],
  },
  {
    id: 24,
    name: "Países Bajos",
    name_en: "Netherlands",
    hints: [
      { difficulty: "expert", text_es: "Cerca de un tercio de su territorio se encuentra bajo el nivel del mar gracias a un sistema centenario de pólderes y diques.", text_en: "Nearly a third of its territory lies below sea level thanks to a centuries-old system of polders and dikes." },
      { difficulty: "hard", text_es: "Es el segundo mayor exportador agrícola del mundo a pesar de su pequeño tamaño.", text_en: "It is the world's second-largest agricultural exporter despite its small size." },
      { difficulty: "medium", text_es: "Famoso por sus molinos, los tulipanes, el queso Gouda y los cuadros de Van Gogh y Rembrandt.", text_en: "Famous for its windmills, tulips, Gouda cheese, and the paintings of Van Gogh and Rembrandt." },
      { difficulty: "easy", text_es: "Su capital es Ámsterdam, una ciudad llena de canales y bicicletas.", text_en: "Its capital is Amsterdam, a city full of canals and bicycles." },
    ],
  },
  {
    id: 25,
    name: "Suiza",
    name_en: "Switzerland",
    hints: [
      { difficulty: "expert", text_es: "Su sistema de democracia directa permite a los ciudadanos votar en referéndums hasta cuatro veces al año.", text_en: "Its direct democracy system lets citizens vote in referendums up to four times a year." },
      { difficulty: "hard", text_es: "Sede de la sede europea de la ONU, el CERN y la Cruz Roja Internacional.", text_en: "Home to the European seat of the UN, CERN, and the International Red Cross." },
      { difficulty: "medium", text_es: "Famoso por sus relojes de precisión, el chocolate, el queso fondue y los Alpes.", text_en: "Famous for its precision watches, chocolate, fondue cheese, and the Alps." },
      { difficulty: "easy", text_es: "Su capital es Berna, es un país neutral en el corazón de Europa con cuatro idiomas oficiales.", text_en: "Its capital is Bern, it is a neutral country in the heart of Europe with four official languages." },
    ],
  },
  {
    id: 26,
    name: "Austria",
    name_en: "Austria",
    hints: [
      { difficulty: "expert", text_es: "Su capital fue durante siglos el centro del Imperio Austrohúngaro, que llegó a gobernar a más de 50 millones de personas.", text_en: "Its capital was for centuries the center of the Austro-Hungarian Empire, which once ruled over 50 million people." },
      { difficulty: "hard", text_es: "Cuna de Mozart, Freud y la Escuela Austriaca de economía.", text_en: "Birthplace of Mozart, Freud, and the Austrian School of economics." },
      { difficulty: "medium", text_es: "Famoso por los valses, el strudel de manzana y los deportes de invierno en los Alpes.", text_en: "Famous for waltzes, apple strudel, and winter sports in the Alps." },
      { difficulty: "easy", text_es: "Su capital es Viena y comparte fronteras alpinas con Alemania, Italia y Suiza.", text_en: "Its capital is Vienna and it shares Alpine borders with Germany, Italy, and Switzerland." },
    ],
  },
  {
    id: 27,
    name: "Bélgica",
    name_en: "Belgium",
    hints: [
      { difficulty: "expert", text_es: "En 2010-2011 estuvo 589 días sin gobierno, un récord mundial para una democracia funcional.", text_en: "In 2010-2011 it spent 589 days without a government, a world record for a functioning democracy." },
      { difficulty: "hard", text_es: "Su capital alberga la sede principal de la Unión Europea y el cuartel general de la OTAN.", text_en: "Its capital hosts the main headquarters of the European Union and NATO." },
      { difficulty: "medium", text_es: "Famoso por sus chocolates, gofres, cervezas trapenses y patatas fritas.", text_en: "Famous for its chocolates, waffles, Trappist beers, and french fries." },
      { difficulty: "easy", text_es: "Su capital es Bruselas y su símbolo más conocido es el Manneken Pis.", text_en: "Its capital is Brussels and its most famous symbol is the Manneken Pis statue." },
    ],
  },
  {
    id: 28,
    name: "Polonia",
    name_en: "Poland",
    hints: [
      { difficulty: "expert", text_es: "Alberga la mina de sal de Wieliczka, en funcionamiento desde el siglo XIII y con una catedral subterránea tallada en sal.", text_en: "It is home to the Wieliczka Salt Mine, operating since the 13th century and containing an underground cathedral carved entirely from salt." },
      { difficulty: "hard", text_es: "Cuna de Copérnico, Marie Curie y Chopin.", text_en: "Birthplace of Copernicus, Marie Curie, and Chopin." },
      { difficulty: "medium", text_es: "Famoso por los pierogi, la vodka y el bosque primario de Białowieża con sus bisontes.", text_en: "Famous for pierogi, vodka, and the primeval Białowieża Forest with its bison." },
      { difficulty: "easy", text_es: "Su capital es Varsovia y limita con Alemania al oeste y con Ucrania al este.", text_en: "Its capital is Warsaw and it borders Germany to the west and Ukraine to the east." },
    ],
  },
  {
    id: 29,
    name: "República Checa",
    name_en: "Czech Republic",
    hints: [
      { difficulty: "expert", text_es: "Tiene el mayor consumo de cerveza per cápita del mundo desde hace más de 30 años consecutivos.", text_en: "It has the highest per capita beer consumption in the world for more than 30 consecutive years." },
      { difficulty: "hard", text_es: "Su capital alberga el castillo medieval más grande del mundo según el Libro Guinness.", text_en: "Its capital hosts the largest ancient castle complex in the world according to the Guinness Book." },
      { difficulty: "medium", text_es: "Famoso por la cerveza Pilsner, el cristal de Bohemia y la literatura de Kafka.", text_en: "Famous for Pilsner beer, Bohemian crystal, and Kafka's literature." },
      { difficulty: "easy", text_es: "Su capital es Praga, conocida como la 'ciudad de las cien torres' por su Reloj Astronómico.", text_en: "Its capital is Prague, known as the 'city of a hundred spires' and famous for its Astronomical Clock." },
    ],
  },
  {
    id: 30,
    name: "Hungría",
    name_en: "Hungary",
    hints: [
      { difficulty: "expert", text_es: "Su idioma pertenece a la familia urálica y no está emparentado con ninguna otra lengua de los países vecinos.", text_en: "Its language belongs to the Uralic family and is unrelated to any of the languages of its neighboring countries." },
      { difficulty: "hard", text_es: "Inventó el cubo de Rubik, el bolígrafo Bic y la vitamina C aislada por Szent-Györgyi.", text_en: "It invented the Rubik's Cube, the Bic ballpoint pen, and isolated vitamin C through Szent-Györgyi." },
      { difficulty: "medium", text_es: "Famoso por sus baños termales, el goulash y los vinos de Tokaj.", text_en: "Famous for its thermal baths, goulash, and Tokaj wines." },
      { difficulty: "easy", text_es: "Su capital es Budapest, dividida por el río Danubio en Buda y Pest.", text_en: "Its capital is Budapest, split by the Danube River into Buda and Pest." },
    ],
  },
  {
    id: 31,
    name: "Rumania",
    name_en: "Romania",
    hints: [
      { difficulty: "expert", text_es: "Alberga el segundo edificio administrativo más grande del mundo, solo superado por el Pentágono.", text_en: "It is home to the second-largest administrative building in the world, only surpassed by the Pentagon." },
      { difficulty: "hard", text_es: "Su nombre proviene del latín y es el único país de los Balcanes con una lengua de origen romance.", text_en: "Its name comes from Latin and it is the only country in the Balkans with a Romance language." },
      { difficulty: "medium", text_es: "Famoso por la región de Transilvania, los Cárpatos y la leyenda de Drácula.", text_en: "Famous for the region of Transylvania, the Carpathians, and the legend of Dracula." },
      { difficulty: "easy", text_es: "Su capital es Bucarest y limita con el mar Negro al sureste.", text_en: "Its capital is Bucharest and it borders the Black Sea to the southeast." },
    ],
  },
  {
    id: 32,
    name: "Ucrania",
    name_en: "Ukraine",
    hints: [
      { difficulty: "expert", text_es: "Sus suelos negros, conocidos como chernozem, son de los más fértiles del planeta y la convierten en uno de los mayores graneros del mundo.", text_en: "Its black soils, known as chernozem, are among the most fertile on Earth, making it one of the world's biggest breadbaskets." },
      { difficulty: "hard", text_es: "Es el país más grande íntegramente situado en Europa por superficie.", text_en: "It is the largest country lying entirely within Europe by area." },
      { difficulty: "medium", text_es: "Famosa por el accidente nuclear de Chernóbil de 1986 y por sus cúpulas doradas ortodoxas.", text_en: "Famous for the 1986 Chernobyl nuclear disaster and for its golden Orthodox church domes." },
      { difficulty: "easy", text_es: "Su capital es Kiev y su bandera es azul y amarilla, evocando el cielo y los campos de trigo.", text_en: "Its capital is Kyiv and its flag is blue and yellow, evoking the sky and wheat fields." },
    ],
  },
  {
    id: 33,
    name: "Turquía",
    name_en: "Turkey",
    hints: [
      { difficulty: "expert", text_es: "Es el único país del mundo cuyo territorio se extiende sobre dos continentes separados por un estrecho navegable.", text_en: "It is the only country in the world whose territory spans two continents separated by a navigable strait." },
      { difficulty: "hard", text_es: "Su mayor ciudad fue capital de los imperios romano de Oriente, bizantino y otomano.", text_en: "Its largest city was the capital of the Eastern Roman, Byzantine, and Ottoman empires." },
      { difficulty: "medium", text_es: "Famoso por la Capadocia, los baños turcos, los kebabs y el bazar de las especias.", text_en: "Famous for Cappadocia, Turkish baths, kebabs, and the Spice Bazaar." },
      { difficulty: "easy", text_es: "Su capital es Ankara, pero su ciudad más conocida es Estambul, hogar de Santa Sofía.", text_en: "Its capital is Ankara, but its most famous city is Istanbul, home to the Hagia Sophia." },
    ],
  },
  {
    id: 34,
    name: "Israel",
    name_en: "Israel",
    hints: [
      { difficulty: "expert", text_es: "Tiene el lago más bajo del planeta, situado a más de 400 metros bajo el nivel del mar y con una salinidad casi diez veces superior a la del océano.", text_en: "It contains the lowest lake on the planet, more than 400 meters below sea level and almost ten times saltier than the ocean." },
      { difficulty: "hard", text_es: "Es uno de los países con mayor inversión en I+D del mundo respecto a su PIB y se le apoda la 'Nación Startup'.", text_en: "It has one of the highest R&D investments in the world relative to GDP and is nicknamed the 'Startup Nation'." },
      { difficulty: "medium", text_es: "Famoso por el hummus, el falafel y por ser tierra santa para tres grandes religiones.", text_en: "Famous for hummus, falafel, and for being the holy land of three major religions." },
      { difficulty: "easy", text_es: "Su capital declarada es Jerusalén y limita con el mar Mediterráneo y el mar Muerto.", text_en: "Its declared capital is Jerusalem and it borders the Mediterranean and Dead Seas." },
    ],
  },
  {
    id: 35,
    name: "Arabia Saudita",
    name_en: "Saudi Arabia",
    hints: [
      { difficulty: "expert", text_es: "Es el único país del mundo cuyo nombre oficial incluye el de su familia gobernante.", text_en: "It is the only country in the world whose official name includes that of its ruling family." },
      { difficulty: "hard", text_es: "Posee cerca del 17% de las reservas probadas de petróleo del planeta.", text_en: "It holds about 17% of the planet's proven petroleum reserves." },
      { difficulty: "medium", text_es: "Cada año millones de musulmanes peregrinan a sus ciudades santas de La Meca y Medina.", text_en: "Every year millions of Muslims make pilgrimage to its holy cities of Mecca and Medina." },
      { difficulty: "easy", text_es: "Su capital es Riad y ocupa la mayor parte de la península arábiga.", text_en: "Its capital is Riyadh and it occupies most of the Arabian Peninsula." },
    ],
  },
  {
    id: 36,
    name: "Emiratos Árabes Unidos",
    name_en: "United Arab Emirates",
    hints: [
      { difficulty: "expert", text_es: "Es una federación de siete monarquías absolutas creada en 1971.", text_en: "It is a federation of seven absolute monarchies created in 1971." },
      { difficulty: "hard", text_es: "Lanzó en 2020 la primera misión interplanetaria árabe, una sonda en órbita alrededor de Marte.", text_en: "In 2020 it launched the first Arab interplanetary mission, a probe orbiting Mars." },
      { difficulty: "medium", text_es: "Alberga el edificio más alto del mundo y famosas islas artificiales con forma de palmera.", text_en: "It hosts the world's tallest building and famous palm-shaped artificial islands." },
      { difficulty: "easy", text_es: "Su capital es Abu Dabi y su ciudad más famosa es Dubái.", text_en: "Its capital is Abu Dhabi and its most famous city is Dubai." },
    ],
  },
  {
    id: 37,
    name: "Irán",
    name_en: "Iran",
    hints: [
      { difficulty: "expert", text_es: "Su antigua capital, Persépolis, fue saqueada por Alejandro Magno en el 330 a. C.", text_en: "Its ancient capital, Persepolis, was sacked by Alexander the Great in 330 BC." },
      { difficulty: "hard", text_es: "Posee las segundas reservas de gas natural más grandes del mundo.", text_en: "It holds the world's second-largest natural gas reserves." },
      { difficulty: "medium", text_es: "Famoso por sus alfombras persas, su poesía clásica y la cocina con azafrán.", text_en: "Famous for its Persian carpets, classical poetry, and saffron-rich cuisine." },
      { difficulty: "easy", text_es: "Su capital es Teherán y antiguamente era conocido como Persia.", text_en: "Its capital is Tehran and it was historically known as Persia." },
    ],
  },
  {
    id: 38,
    name: "Pakistán",
    name_en: "Pakistan",
    hints: [
      { difficulty: "expert", text_es: "Alberga la segunda montaña más alta del mundo y catorce de las cumbres más elevadas del planeta.", text_en: "It hosts the world's second-highest mountain and fourteen of the planet's highest peaks." },
      { difficulty: "hard", text_es: "Su valle del Indo fue cuna de una de las civilizaciones urbanas más antiguas conocidas.", text_en: "Its Indus Valley was the cradle of one of the oldest known urban civilizations." },
      { difficulty: "medium", text_es: "Famoso por el cricket, la cocina especiada y el icónico paso de Khyber.", text_en: "Famous for cricket, spicy cuisine, and the iconic Khyber Pass." },
      { difficulty: "easy", text_es: "Su capital es Islamabad y se separó de la India en 1947.", text_en: "Its capital is Islamabad and it separated from India in 1947." },
    ],
  },
  {
    id: 39,
    name: "Bangladés",
    name_en: "Bangladesh",
    hints: [
      { difficulty: "expert", text_es: "Es el delta fluvial más densamente poblado del planeta, formado por la confluencia del Ganges y el Brahmaputra.", text_en: "It is the most densely populated river delta on the planet, formed by the confluence of the Ganges and Brahmaputra." },
      { difficulty: "hard", text_es: "Es el segundo mayor exportador mundial de prendas de vestir, solo por detrás de China.", text_en: "It is the world's second-largest garment exporter, only behind China." },
      { difficulty: "medium", text_es: "Famoso por los manglares de Sundarbans, hogar del tigre de Bengala.", text_en: "Famous for the Sundarbans mangroves, home of the Bengal tiger." },
      { difficulty: "easy", text_es: "Su capital es Daca y se independizó de Pakistán en 1971.", text_en: "Its capital is Dhaka and it gained independence from Pakistan in 1971." },
    ],
  },
  {
    id: 40,
    name: "Indonesia",
    name_en: "Indonesia",
    hints: [
      { difficulty: "expert", text_es: "Está formado por más de 17.000 islas, lo que lo convierte en el mayor archipiélago del mundo.", text_en: "It is made up of more than 17,000 islands, making it the largest archipelago in the world." },
      { difficulty: "hard", text_es: "Es el país con mayor población musulmana del planeta.", text_en: "It is the country with the largest Muslim population on the planet." },
      { difficulty: "medium", text_es: "Famoso por la isla de Bali, los volcanes activos y los orangutanes de Borneo.", text_en: "Famous for the island of Bali, active volcanoes, and the orangutans of Borneo." },
      { difficulty: "easy", text_es: "Su capital es Yakarta y se sitúa en el sudeste asiático.", text_en: "Its capital is Jakarta and it lies in Southeast Asia." },
    ],
  },
  {
    id: 41,
    name: "Filipinas",
    name_en: "Philippines",
    hints: [
      { difficulty: "expert", text_es: "Es el único país asiático de mayoría católica, herencia de tres siglos de colonización española.", text_en: "It is the only Asian country with a Catholic majority, a legacy of three centuries of Spanish colonization." },
      { difficulty: "hard", text_es: "Cerca de su costa se encuentra la fosa oceánica más profunda conocida después de la fosa de las Marianas.", text_en: "Near its coast lies the second-deepest known ocean trench after the Mariana Trench." },
      { difficulty: "medium", text_es: "Famoso por sus más de 7.000 islas, las playas paradisíacas y el deporte del boxeo.", text_en: "Famous for its more than 7,000 islands, paradise beaches, and the sport of boxing." },
      { difficulty: "easy", text_es: "Su capital es Manila y debe su nombre al rey Felipe II de España.", text_en: "Its capital is Manila and it is named after King Philip II of Spain." },
    ],
  },
  {
    id: 42,
    name: "Vietnam",
    name_en: "Vietnam",
    hints: [
      { difficulty: "expert", text_es: "Es el segundo mayor exportador mundial de café y el primero de la variedad robusta.", text_en: "It is the world's second-largest coffee exporter and the largest exporter of robusta beans." },
      { difficulty: "hard", text_es: "Su forma alargada se extiende más de 1.600 km a lo largo del mar de China Meridional.", text_en: "Its elongated shape stretches more than 1,600 km along the South China Sea." },
      { difficulty: "medium", text_es: "Famoso por la sopa pho, la bahía de Ha Long y los túneles de Cu Chi.", text_en: "Famous for pho soup, Ha Long Bay, and the Cu Chi tunnels." },
      { difficulty: "easy", text_es: "Su capital es Hanói y se conoce mundialmente por la guerra que libró contra Estados Unidos.", text_en: "Its capital is Hanoi and it is globally known for the war it fought against the United States." },
    ],
  },
  {
    id: 43,
    name: "Corea del Sur",
    name_en: "South Korea",
    hints: [
      { difficulty: "expert", text_es: "Su alfabeto fue inventado en el siglo XV por el rey Sejong y está considerado uno de los sistemas de escritura más científicos del mundo.", text_en: "Its alphabet was invented in the 15th century by King Sejong and is considered one of the most scientific writing systems in the world." },
      { difficulty: "hard", text_es: "Empresas como Samsung, Hyundai y LG han convertido al país en una potencia tecnológica e industrial.", text_en: "Companies like Samsung, Hyundai, and LG have turned the country into a technological and industrial powerhouse." },
      { difficulty: "medium", text_es: "Famoso por el K-pop, los dramas televisivos, el kimchi y la barbacoa coreana.", text_en: "Famous for K-pop, TV dramas, kimchi, and Korean barbecue." },
      { difficulty: "easy", text_es: "Su capital es Seúl y comparte península con su vecino del norte.", text_en: "Its capital is Seoul and it shares its peninsula with its northern neighbor." },
    ],
  },
  {
    id: 44,
    name: "Singapur",
    name_en: "Singapore",
    hints: [
      { difficulty: "expert", text_es: "Es uno de los tres únicos países-ciudad soberanos del mundo y obtuvo su independencia tras ser expulsado de una federación en 1965.", text_en: "It is one of only three sovereign city-states in the world and gained independence after being expelled from a federation in 1965." },
      { difficulty: "hard", text_es: "Su puerto es uno de los más activos del planeta y su PIB per cápita está entre los más altos del mundo.", text_en: "Its port is one of the busiest on the planet and its GDP per capita is among the highest in the world." },
      { difficulty: "medium", text_es: "Famoso por sus rascacielos futuristas, los Gardens by the Bay y el hotel Marina Bay Sands.", text_en: "Famous for its futuristic skyscrapers, the Gardens by the Bay, and the Marina Bay Sands hotel." },
      { difficulty: "easy", text_es: "Es una pequeña isla-Estado del sudeste asiático con cuatro idiomas oficiales.", text_en: "It is a small island city-state in Southeast Asia with four official languages." },
    ],
  },
  {
    id: 45,
    name: "Malasia",
    name_en: "Malaysia",
    hints: [
      { difficulty: "expert", text_es: "Su territorio está dividido por el mar de China Meridional en dos zonas separadas por más de 600 km.", text_en: "Its territory is split by the South China Sea into two parts more than 600 km apart." },
      { difficulty: "hard", text_es: "Fue el primer lugar del mundo en producir caucho natural a gran escala y aún es uno de los grandes exportadores de aceite de palma.", text_en: "It was the first place in the world to produce natural rubber on a massive scale and is still one of the top palm oil exporters." },
      { difficulty: "medium", text_es: "Famoso por las Torres Petronas, las playas de Langkawi y la gastronomía multicultural.", text_en: "Famous for the Petronas Towers, the beaches of Langkawi, and its multicultural cuisine." },
      { difficulty: "easy", text_es: "Su capital es Kuala Lumpur y limita con Tailandia, Indonesia y Brunéi.", text_en: "Its capital is Kuala Lumpur and it borders Thailand, Indonesia, and Brunei." },
    ],
  },
  {
    id: 46,
    name: "Nepal",
    name_en: "Nepal",
    hints: [
      { difficulty: "expert", text_es: "Es el único país del mundo cuya bandera no es rectangular: está formada por dos triángulos superpuestos.", text_en: "It is the only country in the world whose flag is not rectangular: it is made of two stacked triangles." },
      { difficulty: "hard", text_es: "Lugar de nacimiento de Buda en Lumbini hace más de 2.500 años.", text_en: "Birthplace of the Buddha in Lumbini more than 2,500 years ago." },
      { difficulty: "medium", text_es: "Famoso por albergar ocho de las catorce montañas más altas del mundo.", text_en: "Famous for hosting eight of the world's fourteen highest mountains." },
      { difficulty: "easy", text_es: "Su capital es Katmandú y en su frontera norte se eleva el monte Everest.", text_en: "Its capital is Kathmandu and Mount Everest rises along its northern border." },
    ],
  },
  {
    id: 47,
    name: "Sri Lanka",
    name_en: "Sri Lanka",
    hints: [
      { difficulty: "expert", text_es: "Es el mayor exportador mundial de canela de Ceilán y uno de los principales productores de zafiros.", text_en: "It is the world's largest exporter of Ceylon cinnamon and one of the top sapphire producers." },
      { difficulty: "hard", text_es: "Tiene dos capitales reconocidas oficialmente: una administrativa y otra ejecutiva.", text_en: "It has two officially recognized capitals: an administrative one and an executive one." },
      { difficulty: "medium", text_es: "Famoso por sus plantaciones de té, los elefantes asiáticos y las playas tropicales.", text_en: "Famous for its tea plantations, Asian elephants, and tropical beaches." },
      { difficulty: "easy", text_es: "Es una isla con forma de gota al sur de la India y antes se llamaba Ceilán.", text_en: "It is a teardrop-shaped island south of India and was formerly called Ceylon." },
    ],
  },
  {
    id: 48,
    name: "Sudáfrica",
    name_en: "South Africa",
    hints: [
      { difficulty: "expert", text_es: "Es el único país del mundo con tres capitales oficiales reconocidas constitucionalmente.", text_en: "It is the only country in the world with three constitutionally recognized capitals." },
      { difficulty: "hard", text_es: "Posee 11 idiomas oficiales y fue el primer país en abandonar voluntariamente su programa de armas nucleares.", text_en: "It has 11 official languages and was the first country to voluntarily abandon its nuclear weapons program." },
      { difficulty: "medium", text_es: "Famoso por los safaris en el parque Kruger y por la lucha de Nelson Mandela contra el apartheid.", text_en: "Famous for safaris in Kruger National Park and for Nelson Mandela's fight against apartheid." },
      { difficulty: "easy", text_es: "Sus ciudades más conocidas son Ciudad del Cabo y Johannesburgo, y se sitúa en el extremo sur del continente africano.", text_en: "Its most famous cities are Cape Town and Johannesburg, and it lies at the southern tip of the African continent." },
    ],
  },
  {
    id: 49,
    name: "Nigeria",
    name_en: "Nigeria",
    hints: [
      { difficulty: "expert", text_es: "Su industria cinematográfica produce más películas al año que Hollywood y se conoce con un apodo propio.", text_en: "Its film industry produces more movies per year than Hollywood and is known by its own nickname." },
      { difficulty: "hard", text_es: "Es el país más poblado de África y la mayor economía del continente.", text_en: "It is the most populous country in Africa and the continent's largest economy." },
      { difficulty: "medium", text_es: "Famoso por la música afrobeats, el petróleo del delta del Níger y el fútbol de las 'Súper Águilas'.", text_en: "Famous for afrobeats music, the oil of the Niger Delta, and the 'Super Eagles' football team." },
      { difficulty: "easy", text_es: "Su capital es Abuya y limita con el golfo de Guinea al sur.", text_en: "Its capital is Abuja and it borders the Gulf of Guinea to the south." },
    ],
  },
  {
    id: 50,
    name: "Kenia",
    name_en: "Kenya",
    hints: [
      { difficulty: "expert", text_es: "Su Valle del Rift es considerado por los paleontólogos como una de las cunas de la humanidad.", text_en: "Its Rift Valley is considered by paleontologists to be one of the cradles of humankind." },
      { difficulty: "hard", text_es: "Sus corredores de fondo dominan los maratones internacionales desde hace décadas.", text_en: "Its long-distance runners have dominated international marathons for decades." },
      { difficulty: "medium", text_es: "Famoso por la gran migración de ñus en el Masái Mara y por el monte Kilimanjaro en su frontera.", text_en: "Famous for the great wildebeest migration in the Masai Mara and for Mount Kilimanjaro on its border." },
      { difficulty: "easy", text_es: "Su capital es Nairobi y se sitúa en el este de África, atravesado por el ecuador.", text_en: "Its capital is Nairobi and it lies in East Africa, crossed by the equator." },
    ],
  },
  {
    id: 51,
    name: "Etiopía",
    name_en: "Ethiopia",
    hints: [
      { difficulty: "expert", text_es: "Es el único país africano que nunca fue colonizado de forma duradera por una potencia europea, y emplea su propio calendario de 13 meses.", text_en: "It is the only African country never permanently colonized by a European power and it uses its own 13-month calendar." },
      { difficulty: "hard", text_es: "Se considera el lugar de origen del café y aún hoy una ceremonia tradicional gira en torno a su preparación.", text_en: "It is considered the birthplace of coffee, and a traditional ceremony still revolves around its preparation today." },
      { difficulty: "medium", text_es: "Famoso por las iglesias rupestres de Lalibela talladas en roca volcánica.", text_en: "Famous for the rock-hewn churches of Lalibela, carved into volcanic stone." },
      { difficulty: "easy", text_es: "Su capital es Adís Abeba y se sitúa en el Cuerno de África.", text_en: "Its capital is Addis Ababa and it lies in the Horn of Africa." },
    ],
  },
  {
    id: 52,
    name: "Argelia",
    name_en: "Algeria",
    hints: [
      { difficulty: "expert", text_es: "Es el país más extenso de África y del mundo árabe, con más del 80% de su territorio cubierto por el Sáhara.", text_en: "It is the largest country in Africa and in the Arab world, with more than 80% of its territory covered by the Sahara." },
      { difficulty: "hard", text_es: "Es uno de los principales exportadores mundiales de gas natural a Europa.", text_en: "It is one of the world's major natural gas exporters to Europe." },
      { difficulty: "medium", text_es: "Famoso por las ruinas romanas de Tipasa y por su lucha de independencia contra Francia.", text_en: "Famous for the Roman ruins of Tipasa and for its independence struggle against France." },
      { difficulty: "easy", text_es: "Su capital es Argel y limita al norte con el mar Mediterráneo.", text_en: "Its capital is Algiers and it borders the Mediterranean Sea to the north." },
    ],
  },
  {
    id: 53,
    name: "Túnez",
    name_en: "Tunisia",
    hints: [
      { difficulty: "expert", text_es: "Sobre sus ruinas se levantó la antigua Cartago, que rivalizó con Roma durante las guerras púnicas.", text_en: "On its ruins once stood ancient Carthage, which rivaled Rome during the Punic Wars." },
      { difficulty: "hard", text_es: "En 2011 fue el origen de la Primavera Árabe tras la caída de su régimen autoritario.", text_en: "In 2011 it sparked the Arab Spring after the fall of its authoritarian regime." },
      { difficulty: "medium", text_es: "Famoso por sus oasis del Sáhara y por servir de escenario a varias películas de Star Wars.", text_en: "Famous for its Saharan oases and for serving as a filming location for several Star Wars movies." },
      { difficulty: "easy", text_es: "Su capital lleva el mismo nombre que el país y limita con el Mediterráneo.", text_en: "Its capital shares its name with the country and it borders the Mediterranean." },
    ],
  },
  {
    id: 54,
    name: "Ghana",
    name_en: "Ghana",
    hints: [
      { difficulty: "expert", text_es: "Fue la primera colonia subsahariana en independizarse de un imperio europeo, en 1957.", text_en: "It was the first sub-Saharan colony to gain independence from a European empire, in 1957." },
      { difficulty: "hard", text_es: "Es uno de los mayores productores mundiales de cacao y de oro.", text_en: "It is one of the world's largest producers of cocoa and gold." },
      { difficulty: "medium", text_es: "Famoso por sus vibrantes mercados, los tambores tradicionales y las playas del golfo de Guinea.", text_en: "Famous for its vibrant markets, traditional drumming, and the beaches of the Gulf of Guinea." },
      { difficulty: "easy", text_es: "Su capital es Acra y limita con Costa de Marfil, Burkina Faso y Togo.", text_en: "Its capital is Accra and it borders Ivory Coast, Burkina Faso, and Togo." },
    ],
  },
  {
    id: 55,
    name: "Senegal",
    name_en: "Senegal",
    hints: [
      { difficulty: "expert", text_es: "Su isla de Gorea fue uno de los principales centros del comercio transatlántico de esclavos.", text_en: "Its Gorée Island was one of the main centers of the transatlantic slave trade." },
      { difficulty: "hard", text_es: "Acoge el famoso lago Rosa, cuyas aguas adquieren un tono rosado por sus algas y su alta salinidad.", text_en: "It is home to the famous Pink Lake, whose waters take on a pink hue due to its algae and high salinity." },
      { difficulty: "medium", text_es: "Famoso por la música mbalax, su selección de fútbol y la hospitalidad de la 'teranga'.", text_en: "Famous for mbalax music, its national football team, and the hospitality of 'teranga'." },
      { difficulty: "easy", text_es: "Su capital es Dakar y se sitúa en el extremo más occidental del continente africano.", text_en: "Its capital is Dakar and it lies at the westernmost tip of the African continent." },
    ],
  },
  {
    id: 56,
    name: "Madagascar",
    name_en: "Madagascar",
    hints: [
      { difficulty: "expert", text_es: "Aproximadamente el 90% de su fauna y flora es endémica y no existe en ninguna otra parte del planeta.", text_en: "Roughly 90% of its wildlife and plants are endemic and exist nowhere else on the planet." },
      { difficulty: "hard", text_es: "Es la cuarta isla más grande del mundo y se separó del continente africano hace decenas de millones de años.", text_en: "It is the fourth-largest island in the world and broke away from mainland Africa tens of millions of years ago." },
      { difficulty: "medium", text_es: "Famoso por los lémures, los baobabs y las plantaciones de vainilla.", text_en: "Famous for lemurs, baobab trees, and vanilla plantations." },
      { difficulty: "easy", text_es: "Su capital es Antananarivo y se sitúa en el océano Índico, frente a la costa este africana.", text_en: "Its capital is Antananarivo and it lies in the Indian Ocean, off the east coast of Africa." },
    ],
  },
  {
    id: 57,
    name: "Chile",
    name_en: "Chile",
    hints: [
      { difficulty: "expert", text_es: "Alberga el desierto no polar más árido del mundo, donde algunos puntos no han registrado lluvia en siglos.", text_en: "It hosts the driest non-polar desert in the world, where some spots have not recorded rainfall in centuries." },
      { difficulty: "hard", text_es: "Es el mayor productor mundial de cobre y posee uno de los mejores cielos para la observación astronómica.", text_en: "It is the world's largest copper producer and has some of the best skies on Earth for astronomical observation." },
      { difficulty: "medium", text_es: "Famoso por la isla de Pascua y sus moáis, los vinos de Maipo y la cordillera de los Andes.", text_en: "Famous for Easter Island and its moai, Maipo Valley wines, and the Andes mountain range." },
      { difficulty: "easy", text_es: "Su capital es Santiago y se extiende como una larga franja a lo largo del Pacífico sudamericano.", text_en: "Its capital is Santiago and it stretches as a long strip along the South American Pacific coast." },
    ],
  },
  {
    id: 58,
    name: "Perú",
    name_en: "Peru",
    hints: [
      { difficulty: "expert", text_es: "Sus líneas de Nazca son geoglifos gigantes visibles solo desde el aire y datan de hace más de 2.000 años.", text_en: "Its Nazca Lines are giant geoglyphs visible only from the air and date back more than 2,000 years." },
      { difficulty: "hard", text_es: "Comparte con Bolivia el lago navegable más alto del mundo a más de 3.800 metros de altitud.", text_en: "It shares with Bolivia the highest navigable lake in the world, at more than 3,800 meters of altitude." },
      { difficulty: "medium", text_es: "Famoso por el ceviche, la quinoa y la ciudadela inca de Machu Picchu.", text_en: "Famous for ceviche, quinoa, and the Inca citadel of Machu Picchu." },
      { difficulty: "easy", text_es: "Su capital es Lima y limita al oeste con el océano Pacífico.", text_en: "Its capital is Lima and it borders the Pacific Ocean to the west." },
    ],
  },
  {
    id: 59,
    name: "Colombia",
    name_en: "Colombia",
    hints: [
      { difficulty: "expert", text_es: "Es uno de los países megadiversos del mundo y cuenta con dos cordilleras separadas por uno de los ríos más caudalosos del continente.", text_en: "It is one of the world's megadiverse countries and has two separate mountain ranges divided by one of the continent's mightiest rivers." },
      { difficulty: "hard", text_es: "Es el primer productor mundial de esmeraldas y uno de los mayores exportadores de café arábica.", text_en: "It is the world's leading emerald producer and one of the largest exporters of Arabica coffee." },
      { difficulty: "medium", text_es: "Famoso por la cumbia, la salsa, la literatura de García Márquez y la ciudad amurallada de Cartagena de Indias.", text_en: "Famous for cumbia, salsa, García Márquez's literature, and the walled city of Cartagena de Indias." },
      { difficulty: "easy", text_es: "Su capital es Bogotá y es el único país sudamericano con costas en los océanos Pacífico y Atlántico.", text_en: "Its capital is Bogotá and it is the only South American country with coasts on both the Pacific and the Atlantic." },
    ],
  },
  {
    id: 60,
    name: "Venezuela",
    name_en: "Venezuela",
    hints: [
      { difficulty: "expert", text_es: "Posee las mayores reservas probadas de petróleo del planeta, por delante incluso de Arabia Saudita.", text_en: "It holds the largest proven oil reserves on the planet, even ahead of Saudi Arabia." },
      { difficulty: "hard", text_es: "Alberga la cascada ininterrumpida más alta del mundo, con casi un kilómetro de caída libre.", text_en: "It is home to the world's highest uninterrupted waterfall, with nearly a kilometer of free fall." },
      { difficulty: "medium", text_es: "Famoso por las arepas, los tepuyes de la Gran Sabana y por haber sido cuna del libertador Simón Bolívar.", text_en: "Famous for arepas, the tepuis of the Gran Sabana, and for being the birthplace of liberator Simón Bolívar." },
      { difficulty: "easy", text_es: "Su capital es Caracas y limita al norte con el mar Caribe.", text_en: "Its capital is Caracas and it borders the Caribbean Sea to the north." },
    ],
  },
  {
    id: 61,
    name: "Cuba",
    name_en: "Cuba",
    hints: [
      { difficulty: "expert", text_es: "Su sistema sanitario forma a más médicos por habitante que casi cualquier otro país y los exporta como cooperación internacional.", text_en: "Its healthcare system trains more doctors per capita than almost any other country and exports them as international cooperation." },
      { difficulty: "hard", text_es: "Es la mayor isla del Caribe y uno de los principales productores mundiales de azúcar y tabaco.", text_en: "It is the largest island in the Caribbean and one of the world's leading producers of sugar and tobacco." },
      { difficulty: "medium", text_es: "Famoso por el son, el ron, los puros habanos y los coches clásicos americanos de los años 50.", text_en: "Famous for son music, rum, Havana cigars, and classic American cars from the 1950s." },
      { difficulty: "easy", text_es: "Su capital es La Habana y vivió una revolución liderada por Fidel Castro en 1959.", text_en: "Its capital is Havana and it underwent a revolution led by Fidel Castro in 1959." },
    ],
  },
  {
    id: 62,
    name: "República Dominicana",
    name_en: "Dominican Republic",
    hints: [
      { difficulty: "expert", text_es: "Comparte la isla de La Española con Haití y allí se fundó la primera ciudad europea del Nuevo Mundo.", text_en: "It shares the island of Hispaniola with Haiti, and the first European city in the New World was founded there." },
      { difficulty: "hard", text_es: "Es uno de los principales destinos turísticos del Caribe y un gran exportador de béisbol profesional.", text_en: "It is one of the top tourist destinations in the Caribbean and a major exporter of professional baseball talent." },
      { difficulty: "medium", text_es: "Famoso por el merengue, la bachata y las playas de Punta Cana.", text_en: "Famous for merengue, bachata, and the beaches of Punta Cana." },
      { difficulty: "easy", text_es: "Su capital es Santo Domingo y comparte una isla con Haití.", text_en: "Its capital is Santo Domingo and it shares an island with Haiti." },
    ],
  },
  {
    id: 63,
    name: "Jamaica",
    name_en: "Jamaica",
    hints: [
      { difficulty: "expert", text_es: "Es el país que más medallas olímpicas ha ganado en velocidad por habitante de toda la historia.", text_en: "It is the country with the most Olympic sprint medals per capita in history." },
      { difficulty: "hard", text_es: "Su movimiento rastafari surgió en la década de 1930 y dio identidad cultural a buena parte de la isla.", text_en: "Its Rastafari movement emerged in the 1930s and gave cultural identity to much of the island." },
      { difficulty: "medium", text_es: "Cuna del reggae y de Bob Marley, además del sprinter Usain Bolt.", text_en: "Birthplace of reggae and Bob Marley, as well as sprinter Usain Bolt." },
      { difficulty: "easy", text_es: "Su capital es Kingston y es una isla del Caribe al sur de Cuba.", text_en: "Its capital is Kingston and it is a Caribbean island south of Cuba." },
    ],
  },
  {
    id: 64,
    name: "Costa Rica",
    name_en: "Costa Rica",
    hints: [
      { difficulty: "expert", text_es: "Abolió su ejército en 1948 y desde entonces destina ese presupuesto a educación y sanidad.", text_en: "It abolished its army in 1948 and has since redirected that budget to education and healthcare." },
      { difficulty: "hard", text_es: "Aunque ocupa solo el 0,03% de la superficie terrestre alberga cerca del 6% de la biodiversidad del planeta.", text_en: "Although it covers only 0.03% of Earth's surface, it hosts about 6% of the planet's biodiversity." },
      { difficulty: "medium", text_es: "Famoso por sus volcanes activos, el ecoturismo y la filosofía de vida 'pura vida'.", text_en: "Famous for its active volcanoes, ecotourism, and its 'pura vida' philosophy of life." },
      { difficulty: "easy", text_es: "Su capital es San José y se sitúa en Centroamérica, entre Nicaragua y Panamá.", text_en: "Its capital is San José and it lies in Central America, between Nicaragua and Panama." },
    ],
  },
  {
    id: 65,
    name: "Panamá",
    name_en: "Panama",
    hints: [
      { difficulty: "expert", text_es: "Su canal interoceánico permitió ahorrar más de 13.000 km en la ruta marítima entre los océanos Atlántico y Pacífico.", text_en: "Its inter-oceanic canal saved more than 13,000 km on the maritime route between the Atlantic and Pacific oceans." },
      { difficulty: "hard", text_es: "Su moneda nacional está vinculada al dólar estadounidense con paridad uno a uno desde 1904.", text_en: "Its national currency has been pegged one-to-one to the US dollar since 1904." },
      { difficulty: "medium", text_es: "Famoso por los rascacielos de su capital, los sombreros 'panamá' y su rica biodiversidad selvática.", text_en: "Famous for the skyscrapers of its capital, 'Panama' hats, and its rich rainforest biodiversity." },
      { difficulty: "easy", text_es: "Su capital es Ciudad de Panamá y une América del Norte con América del Sur.", text_en: "Its capital is Panama City and it links North and South America." },
    ],
  },
  {
    id: 66,
    name: "Uruguay",
    name_en: "Uruguay",
    hints: [
      { difficulty: "expert", text_es: "Fue el primer país del mundo en legalizar a nivel nacional la producción y venta de marihuana en 2013.", text_en: "It was the first country in the world to legalize the nationwide production and sale of marijuana, in 2013." },
      { difficulty: "hard", text_es: "Ganó los dos primeros mundiales de fútbol disputados, en 1930 y 1950.", text_en: "It won the first two FIFA World Cups ever played, in 1930 and 1950." },
      { difficulty: "medium", text_es: "Famoso por el mate, los asados y las playas de Punta del Este.", text_en: "Famous for mate, asados, and the beaches of Punta del Este." },
      { difficulty: "easy", text_es: "Su capital es Montevideo y se sitúa entre Argentina y Brasil, junto al Río de la Plata.", text_en: "Its capital is Montevideo and it lies between Argentina and Brazil, on the River Plate." },
    ],
  },
  {
    id: 67,
    name: "Paraguay",
    name_en: "Paraguay",
    hints: [
      { difficulty: "expert", text_es: "Es uno de los pocos países del mundo con dos lenguas oficiales originarias, una europea y otra indígena.", text_en: "It is one of the few countries in the world with two officially original languages, one European and one indigenous." },
      { difficulty: "hard", text_es: "Comparte con Brasil una de las mayores presas hidroeléctricas del planeta sobre el río Paraná.", text_en: "It shares with Brazil one of the largest hydroelectric dams on the planet, on the Paraná River." },
      { difficulty: "medium", text_es: "Famoso por la sopa paraguaya, la música del arpa y las antiguas misiones jesuíticas.", text_en: "Famous for sopa paraguaya, harp music, and the old Jesuit missions." },
      { difficulty: "easy", text_es: "Su capital es Asunción y es uno de los dos países sin salida al mar de Sudamérica.", text_en: "Its capital is Asunción and it is one of the two landlocked countries in South America." },
    ],
  },
  {
    id: 68,
    name: "Bolivia",
    name_en: "Bolivia",
    hints: [
      { difficulty: "expert", text_es: "Su salar de Uyuni concentra cerca del 50% de las reservas mundiales conocidas de litio.", text_en: "Its Uyuni Salt Flat concentrates about 50% of the world's known lithium reserves." },
      { difficulty: "hard", text_es: "Su sede del gobierno se encuentra a más de 3.600 metros, lo que la convierte en una de las más altas del planeta.", text_en: "Its seat of government sits at more than 3,600 meters, making it one of the highest on the planet." },
      { difficulty: "medium", text_es: "Famoso por el lago Titicaca, el carnaval de Oruro y los trajes tradicionales de las cholitas.", text_en: "Famous for Lake Titicaca, the Oruro Carnival, and the traditional outfits of the cholitas." },
      { difficulty: "easy", text_es: "Su capital constitucional es Sucre y comparte el lago Titicaca con Perú.", text_en: "Its constitutional capital is Sucre and it shares Lake Titicaca with Peru." },
    ],
  },
  {
    id: 69,
    name: "Ecuador",
    name_en: "Ecuador",
    hints: [
      { difficulty: "expert", text_es: "Fue el primer país del mundo en reconocer constitucionalmente derechos a la naturaleza.", text_en: "It was the first country in the world to constitutionally recognize the rights of nature." },
      { difficulty: "hard", text_es: "Sus islas Galápagos inspiraron a Charles Darwin para desarrollar su teoría de la evolución.", text_en: "Its Galápagos Islands inspired Charles Darwin to develop his theory of evolution." },
      { difficulty: "medium", text_es: "Famoso por el cacao fino, el sombrero panamá (que en realidad es ecuatoriano) y los volcanes andinos.", text_en: "Famous for fine cocoa, the Panama hat (which is actually Ecuadorian), and Andean volcanoes." },
      { difficulty: "easy", text_es: "Su capital es Quito y debe su nombre a la línea imaginaria que lo atraviesa.", text_en: "Its capital is Quito and it owes its name to the imaginary line that crosses it." },
    ],
  },
  {
    id: 70,
    name: "Nueva Zelanda",
    name_en: "New Zealand",
    hints: [
      { difficulty: "expert", text_es: "Fue el primer país del mundo en reconocer el derecho al voto femenino a nivel nacional, en 1893.", text_en: "It was the first country in the world to grant women the right to vote at the national level, in 1893." },
      { difficulty: "hard", text_es: "Su selección de rugby ejecuta antes de cada partido una danza tradicional maorí llamada haka.", text_en: "Its rugby team performs a traditional Maori dance called the haka before every match." },
      { difficulty: "medium", text_es: "Famoso por sus paisajes utilizados en las películas de El Señor de los Anillos.", text_en: "Famous for its landscapes used in The Lord of the Rings films." },
      { difficulty: "easy", text_es: "Su capital es Wellington y está formado por dos islas principales en el Pacífico Sur.", text_en: "Its capital is Wellington and it is made up of two main islands in the South Pacific." },
    ],
  },
  {
    id: 71,
    name: "Finlandia",
    name_en: "Finland",
    hints: [
      { difficulty: "expert", text_es: "Es el país con mayor densidad de saunas per cápita del mundo: hay aproximadamente una por cada dos habitantes.", text_en: "It is the country with the highest density of saunas per capita in the world: roughly one for every two inhabitants." },
      { difficulty: "hard", text_es: "Lleva varios años seguidos siendo declarado el país más feliz del mundo según el Informe Mundial de la Felicidad.", text_en: "It has been ranked the happiest country in the world for several consecutive years according to the World Happiness Report." },
      { difficulty: "medium", text_es: "Cuna de Nokia, la marca Marimekko y los baños de sauna seguidos de zambullidas en lagos helados.", text_en: "Birthplace of Nokia, the Marimekko brand, and saunas followed by dips in icy lakes." },
      { difficulty: "easy", text_es: "Su capital es Helsinki y limita con Rusia, Suecia y Noruega.", text_en: "Its capital is Helsinki and it borders Russia, Sweden, and Norway." },
    ],
  },
  {
    id: 72,
    name: "Dinamarca",
    name_en: "Denmark",
    hints: [
      { difficulty: "expert", text_es: "Su monarquía es una de las más antiguas continuadas del mundo, con más de mil años de historia.", text_en: "Its monarchy is one of the oldest continuous monarchies in the world, with more than a thousand years of history." },
      { difficulty: "hard", text_es: "Cuna de los cuentos de Hans Christian Andersen y del filósofo Søren Kierkegaard.", text_en: "Birthplace of Hans Christian Andersen's fairy tales and the philosopher Søren Kierkegaard." },
      { difficulty: "medium", text_es: "Famoso por LEGO, el concepto de 'hygge' y el diseño escandinavo.", text_en: "Famous for LEGO, the concept of 'hygge', and Scandinavian design." },
      { difficulty: "easy", text_es: "Su capital es Copenhague, donde se encuentra la estatua de la Sirenita.", text_en: "Its capital is Copenhagen, home to the Little Mermaid statue." },
    ],
  },
  {
    id: 73,
    name: "Irlanda",
    name_en: "Ireland",
    hints: [
      { difficulty: "expert", text_es: "Es el único país de la Unión Europea cuyo símbolo nacional es un instrumento musical.", text_en: "It is the only country in the European Union whose national symbol is a musical instrument." },
      { difficulty: "hard", text_es: "Cuna de premios Nobel de Literatura como W. B. Yeats, George Bernard Shaw y Samuel Beckett.", text_en: "Birthplace of Nobel literature laureates such as W. B. Yeats, George Bernard Shaw, and Samuel Beckett." },
      { difficulty: "medium", text_es: "Famoso por la cerveza Guinness, la fiesta de San Patricio y los tréboles verdes.", text_en: "Famous for Guinness beer, St. Patrick's Day, and green shamrocks." },
      { difficulty: "easy", text_es: "Su capital es Dublín y comparte isla con Irlanda del Norte.", text_en: "Its capital is Dublin and it shares an island with Northern Ireland." },
    ],
  },
  {
    id: 74,
    name: "Croacia",
    name_en: "Croatia",
    hints: [
      { difficulty: "expert", text_es: "La corbata moderna proviene de los pañuelos al cuello de sus mercenarios del siglo XVII y de ahí derivó la palabra 'cravate'.", text_en: "The modern necktie originates from the neck scarves of its 17th-century mercenaries, from which the word 'cravat' is derived." },
      { difficulty: "hard", text_es: "Su costa adriática cuenta con más de mil islas e islotes.", text_en: "Its Adriatic coast features more than a thousand islands and islets." },
      { difficulty: "medium", text_es: "Famoso por el casco antiguo de Dubrovnik, escenario de Juego de Tronos, y los lagos de Plitvice.", text_en: "Famous for the old town of Dubrovnik, a Game of Thrones filming location, and the Plitvice Lakes." },
      { difficulty: "easy", text_es: "Su capital es Zagreb y limita con el mar Adriático.", text_en: "Its capital is Zagreb and it borders the Adriatic Sea." },
    ],
  },
  {
    id: 75,
    name: "Serbia",
    name_en: "Serbia",
    hints: [
      { difficulty: "expert", text_es: "Es el principal productor mundial de frambuesas y exporta cerca de un tercio de la producción global.", text_en: "It is the world's leading raspberry producer and exports about a third of global output." },
      { difficulty: "hard", text_es: "Cuna del inventor Nikola Tesla y de varios emperadores romanos como Constantino el Grande.", text_en: "Birthplace of inventor Nikola Tesla and of several Roman emperors such as Constantine the Great." },
      { difficulty: "medium", text_es: "Famoso por su música de bandas de metales en festivales como el de Guča y por sus monasterios ortodoxos.", text_en: "Famous for its brass band music at festivals like Guča and for its Orthodox monasteries." },
      { difficulty: "easy", text_es: "Su capital es Belgrado, situada en la confluencia de los ríos Sava y Danubio.", text_en: "Its capital is Belgrade, located at the confluence of the Sava and Danube rivers." },
    ],
  },
  {
    id: 76,
    name: "Mongolia",
    name_en: "Mongolia",
    hints: [
      { difficulty: "expert", text_es: "Es el país soberano con menor densidad de población del mundo, con menos de dos habitantes por kilómetro cuadrado.", text_en: "It is the least densely populated sovereign country in the world, with fewer than two inhabitants per square kilometer." },
      { difficulty: "hard", text_es: "En el siglo XIII Gengis Kan fundó allí el mayor imperio terrestre contiguo de la historia.", text_en: "In the 13th century Genghis Khan founded there the largest contiguous land empire in history." },
      { difficulty: "medium", text_es: "Famoso por las yurtas, los caballos esteparios y el desierto de Gobi.", text_en: "Famous for yurts, steppe horses, and the Gobi Desert." },
      { difficulty: "easy", text_es: "Su capital es Ulán Bator y se sitúa entre Rusia y China.", text_en: "Its capital is Ulaanbaatar and it lies between Russia and China." },
    ],
  },
  {
    id: 77,
    name: "Camboya",
    name_en: "Cambodia",
    hints: [
      { difficulty: "expert", text_es: "Su bandera es la única del mundo en mostrar un edificio reconocible: el templo principal de Angkor.", text_en: "Its flag is the only one in the world to depict a recognizable building: the main temple of Angkor." },
      { difficulty: "hard", text_es: "Sus templos de Angkor formaron la mayor ciudad preindustrial conocida, con más de un millón de habitantes en su apogeo.", text_en: "Its Angkor temples formed the largest known pre-industrial city, with more than a million inhabitants at its peak." },
      { difficulty: "medium", text_es: "Famoso por el complejo de Angkor Wat y por los danzantes apsara de la tradición jemer.", text_en: "Famous for the Angkor Wat complex and the apsara dancers of the Khmer tradition." },
      { difficulty: "easy", text_es: "Su capital es Nom Pen y se sitúa en el sudeste asiático, junto a Vietnam y Tailandia.", text_en: "Its capital is Phnom Penh and it lies in Southeast Asia, next to Vietnam and Thailand." },
    ],
  },
  {
    id: 78,
    name: "Cuba",
    name_en: "Cuba",
    hints: [
      { difficulty: "expert", text_es: "Su archipiélago alberga uno de los reptiles más pequeños del mundo, una pequeña rana del tamaño de una uña.", text_en: "Its archipelago is home to one of the smallest reptiles in the world, a tiny frog the size of a fingernail." },
      { difficulty: "hard", text_es: "Su capital fue fundada en 1519 y conserva uno de los cascos históricos coloniales mejor preservados de América.", text_en: "Its capital was founded in 1519 and preserves one of the best-kept colonial old towns in the Americas." },
      { difficulty: "medium", text_es: "Famoso por sus playas de arena blanca, la salsa cubana y los puros de Vuelta Abajo.", text_en: "Famous for its white-sand beaches, Cuban salsa, and Vuelta Abajo cigars." },
      { difficulty: "easy", text_es: "Su capital es La Habana y es la mayor isla del Caribe.", text_en: "Its capital is Havana and it is the largest island in the Caribbean." },
    ],
  },
  {
    id: 79,
    name: "Luxemburgo",
    name_en: "Luxembourg",
    hints: [
      { difficulty: "expert", text_es: "Es el único Gran Ducado soberano que queda en el mundo y a menudo encabeza el ranking de PIB per cápita.", text_en: "It is the only remaining sovereign Grand Duchy in the world and often tops global rankings of GDP per capita." },
      { difficulty: "hard", text_es: "En 2020 se convirtió en el primer país del mundo en hacer gratuito todo su transporte público.", text_en: "In 2020 it became the first country in the world to make all its public transport free." },
      { difficulty: "medium", text_es: "Es uno de los seis países fundadores de la actual Unión Europea.", text_en: "It is one of the six founding countries of today's European Union." },
      { difficulty: "easy", text_es: "Su capital lleva el mismo nombre que el país y limita con Bélgica, Francia y Alemania.", text_en: "Its capital shares its name with the country and it borders Belgium, France, and Germany." },
    ],
  },
  {
    id: 80,
    name: "Mónaco",
    name_en: "Monaco",
    hints: [
      { difficulty: "expert", text_es: "Es, después del Vaticano, el país soberano más pequeño del mundo y posee la mayor densidad de millonarios per cápita del planeta.", text_en: "After the Vatican, it is the smallest sovereign country in the world and has the highest density of millionaires per capita on the planet." },
      { difficulty: "hard", text_es: "Su familia gobernante, los Grimaldi, lleva al frente del principado desde finales del siglo XIII.", text_en: "Its ruling family, the Grimaldis, has led the principality since the end of the 13th century." },
      { difficulty: "medium", text_es: "Famoso por el casino de Montecarlo y por su Gran Premio de Fórmula 1 por las calles de la ciudad.", text_en: "Famous for the Monte Carlo Casino and its Formula 1 Grand Prix run through the city streets." },
      { difficulty: "easy", text_es: "Es un pequeño principado en la Costa Azul, rodeado por Francia y junto al Mediterráneo.", text_en: "It is a small principality on the French Riviera, surrounded by France and bordering the Mediterranean." },
    ],
  },
];
