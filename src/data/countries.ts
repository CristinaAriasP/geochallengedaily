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
        text_es: "Es el único país europeo que comparte una frontera física con una nación africana en su parte continental, excluyendo islas.",
        text_en: "It is the only European country that shares a physical border with an African nation on its continental part, excluding islands.",
      },
      {
        difficulty: "hard",
        text_es: "Su constitución de 1978 establece una monarquía parlamentaria y una 'unidad indisoluble' de la nación, pero reconoce el derecho de autonomía de sus 'nacionalidades y regiones'.",
        text_en: "Its 1978 constitution establishes a parliamentary monarchy and an 'indissoluble unity' of the nation, yet recognizes the right to autonomy of its 'nationalities and regions'.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es uno de los mayores productores de aceite de oliva a nivel mundial y posee una de las mayores extensiones de viñedo del planeta, aunque no siempre el mayor volumen de producción de vino.",
        text_en: "This country is one of the largest olive oil producers globally and possesses one of the largest vineyard areas on the planet, though not always the highest volume of wine production.",
      },
      {
        difficulty: "easy",
        text_es: "Gran parte de su territorio peninsular se encuentra en la misma masa continental que comparte con Portugal, limitando al norte con Francia y al sur con el Estrecho que lleva su nombre.",
        text_en: "A large part of its peninsular territory is located on the same continental mass it shares with Portugal, bordering France to the north and the Strait named after it to the south.",
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
        text_es: "Es el único país del mundo que utiliza un sistema de códigos postales de siete dígitos que no incluye letras.",
        text_en: "It is the only country in the world that uses a seven-digit postal code system that does not include letters.",
      },
      {
        difficulty: "hard",
        text_es: "Su constitución post-conflicto, redactada con aportes de una potencia ocupante, no fue enmendada durante más de 70 años, un período inusualmente largo para un documento fundacional moderno.",
        text_en: "Its post-conflict constitution, drafted with input from an occupying power, remained unamended for over 70 years, an unusually long period for a modern foundational document.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación insular donde el sumo, aunque no su único deporte tradicional, ocupa un lugar cultural significativo con torneos anuales muy seguidos.",
        text_en: "It is an island nation where sumo, although not its only traditional sport, holds a significant cultural place with widely followed annual tournaments.",
      },
      {
        difficulty: "easy",
        text_es: "Frecuentemente se le conoce como la 'Tierra del Sol Naciente', y tiene un archipiélago que se extiende en una forma distintiva de arco a lo largo de la costa este de Asia.",
        text_en: "It is often referred to as the 'Land of the Rising Sun,' and has an archipelago that extends in a distinctive arc shape along the east coast of Asia.",
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
        text_es: "Es uno de los tres países en el mundo que oficialmente permite la caza de ballenas minke para fines comerciales bajo objeción a la moratoria internacional.",
        text_en: "It is one of only three countries in the world that officially permits commercial minke whale hunting under objection to the international moratorium.",
      },
      {
        difficulty: "hard",
        text_es: "Su costa posee una de las concentraciones más altas de monumentos culturales protegidos de la edad de piedra, con figuras rupestres que datan de hace 10.000 años.",
        text_en: "Its coastline boasts one of the highest concentrations of protected Stone Age cultural monuments, with rock carvings dating back 10,000 years.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus impresionantes formaciones geológicas costeras talladas por glaciares, tiene una rica tradición literaria épica.",
        text_en: "Famous for its stunning glacial-carved coastal geological formations, it has a rich epic literary tradition.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación escandinava, reconocida por sus paisajes montañosos y su acceso al Ártico, celebra en diciembre una fiesta dedicada a la luz, que se manifiesta en sus auroras boreales.",
        text_en: "This Scandinavian nation, renowned for its mountainous landscapes and access to the Arctic, celebrates a festival dedicated to light in December, manifesting in its northern lights.",
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
        text_es: "Su topónimo, o la raíz de este, está ligada a un árbol cuyo pigmento rojo era muy valorado por los tintoreros europeos.",
        text_en: "Its toponym, or the root of it, is linked to a tree whose red pigment was highly valued by European dyers.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país de América del Sur que tiene una línea ecuatorial y una línea del trópico de Capricornio que lo atraviesan.",
        text_en: "It is the only South American country with both the Equator and the Tropic of Capricorn running through it.",
      },
      {
        difficulty: "medium",
        text_es: "Una gran parte de su territorio está cubierta por la selva tropical más extensa del mundo, clave para la biodiversidad global.",
        text_en: "A large part of its territory is covered by the world's most extensive tropical rainforest, key for global biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Es el país más grande de América del Sur y el único de la región cuya herencia cultural principal proviene de la colonización portuguesa.",
        text_en: "It is the largest country in South America and the only one in the region whose main cultural heritage comes from Portuguese colonization.",
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
        text_es: "Es la cuna del papiro, donde se inventó esta superficie para escribir hace miles de años.",
        text_en: "It is the cradle of papyrus, where this writing surface was invented thousands of years ago.",
      },
      {
        difficulty: "hard",
        text_es: "Una parte significativa de su territorio es una península que sirve como puente terrestre entre dos continentes.",
        text_en: "A significant part of its territory is a peninsula that serves as a land bridge between two continents.",
      },
      {
        difficulty: "medium",
        text_es: "Un elemento geográfico primordial atraviesa su extensión, creando un valle fértil vital para el 99% de su población.",
        text_en: "A primary geographical feature traverses its length, creating a fertile valley vital for 99% of its population.",
      },
      {
        difficulty: "easy",
        text_es: "Es a menudo descrita como la \"Tierra de los Faraones\", una civilización antigua que dejó monumentales estructuras de piedra.",
        text_en: "It is often described as the \"Land of the Pharaohs,\" an ancient civilization that left monumental stone structures.",
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
        text_es: "Una de sus formaciones geológicas prominentes alberga grabados rupestres que datan de hace más de 20.000 años, evidenciando una ocupación humana continua.",
        text_en: "One of its prominent geological formations hosts rock engravings dating back over 20,000 years, evidencing continuous human occupation.",
      },
      {
        difficulty: "hard",
        text_es: "Gran parte de su masa terrestre se considera inestable tectónicamente debido a su ubicación sobre la placa indo-australiana, lo que se manifiesta en temblores frecuentes, aunque generalmente menores.",
        text_en: "Much of its landmass is considered tectonically unstable due to its location on the Indo-Australian Plate, manifesting in frequent, though generally minor, tremors.",
      },
      {
        difficulty: "medium",
        text_es: "Es un vasto territorio famoso por su biodiversidad única, gran parte de ella endémica, incluyendo mamíferos marsupiales que en la mayoría del mundo continental ya no existen.",
        text_en: "It is a vast territory renowned for its unique biodiversity, much of it endemic, including marsupial mammals that no longer exist in most of the continental world.",
      },
      {
        difficulty: "easy",
        text_es: "Es el único lugar en el mundo que es a la vez un continente y una única nación soberana, rodeado por océanos en todas sus costas.",
        text_en: "It is the only place in the world that is both a continent and a single sovereign nation, surrounded by oceans on all its coasts.",
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
        text_es: "Es el hogar de la república más antigua del mundo en funcionamiento continuo, que es un enclavado dentro de su territorio.",
        text_en: "It is home to the world's oldest continuously functioning republic, which is an enclave within its territory.",
      },
      {
        difficulty: "hard",
        text_es: "Su constitución post-conflicto prohíbe explícitamente la reorganización del disuelto partido fascista 'bajo cualquier forma'.",
        text_en: "Its post-conflict constitution explicitly prohibits the reorganization of the dissolved fascist party 'in any form'.",
      },
      {
        difficulty: "medium",
        text_es: "Una significativa porción de su frontera norte está definida por la espina dorsal de una de las cadenas montañosas más grandes de Europa, compartiéndola con varios países.",
        text_en: "A significant portion of its northern border is defined by the backbone of one of Europe's largest mountain ranges, sharing it with several countries.",
      },
      {
        difficulty: "easy",
        text_es: "Este país peninsular, con forma de bota, está rodeado por cuatro mares y controla dos grandes islas en el Mediterráneo, además de varios archipiélagos menores.",
        text_en: "This boot-shaped peninsular country is surrounded by four seas and controls two large islands in the Mediterranean, in addition to several smaller archipelagos.",
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
        text_es: "Es el único país latinoamericano que ha sido sede de los Juegos Olímpicos dos veces, aunque una de ellas fue cancelada.",
        text_en: "It is the only Latin American country that has hosted the Olympic Games twice, although one of them was canceled.",
      },
      {
        difficulty: "hard",
        text_es: "Su topografía presenta una de las mayores variedades de suelos y climas del planeta, permitiendo una agricultura muy diversa a pesar de sus latitudes.",
        text_en: "Its topography presents one of the greatest varieties of soils and climates on the planet, allowing for very diverse agriculture despite its latitudes.",
      },
      {
        difficulty: "medium",
        text_es: "Una de sus festividades más reconocidas globalmente incluye la elaboración de intrincados altares y ofrendas para honrar a los difuntos.",
        text_en: "One of its most globally recognized festivities includes the elaborate creation of altars and offerings to honor the deceased.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en Norteamérica, este país se extiende desde el océano Pacífico hasta el mar Caribe, con una larga frontera al norte.",
        text_en: "Located in North America, this country stretches from the Pacific Ocean to the Caribbean Sea, with a long northern border.",
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
        text_es: "Es el país que tiene la mayor cantidad de premios Nobel de Literatura en el mundo, con un total de 16 galardonados hasta la fecha.",
        text_en: "It is the country with the most Nobel Prizes in Literature in the world, with a total of 16 laureates to date.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus posesiones de ultramar en el Pacífico ostenta el récord de la carretera más larga de una sola nación, conectando varias de sus islas principales.",
        text_en: "One of its overseas territories in the Pacific holds the record for the longest road within a single nation, connecting several of its main islands.",
      },
      {
        difficulty: "medium",
        text_es: "Su sistema ferroviario de alta velocidad es uno de los más extensos y antiguos del planeta, conocido por su eficiencia y cobertura nacional.",
        text_en: "Its high-speed rail system is one of the most extensive and oldest on the planet, known for its efficiency and national coverage.",
      },
      {
        difficulty: "easy",
        text_es: "Este estado soberano se extiende desde el Atlántico hasta el Mediterráneo y desde los Pirineos hasta el Rin, formando una figura geométrica muy reconocible.",
        text_en: "This sovereign state stretches from the Atlantic to the Mediterranean and from the Pyrenees to the Rhine, forming a highly recognizable geometric shape.",
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
        text_es: "Es la nación con la mayor cantidad de premios Nobel de ciencia de toda la región sudamericana, con tres galardones individuales.",
        text_en: "It is the nation with the highest number of Nobel Prizes in science in the entire South American region, with three individual awards.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio contiene el punto más meridional de la placa continental americana que no es una isla, conocido como Cabo Froward.",
        text_en: "Its territory contains the southernmost point of the American continental plate that is not an island, known as Cape Froward.",
      },
      {
        difficulty: "medium",
        text_es: "Es reconocido mundialmente por la calidad de su producción de vinos, especialmente de variedades como el Malbec, cultivado en un clima propicio para este cepaje.",
        text_en: "It is recognized worldwide for the quality of its wine production, especially varieties like Malbec, grown in a climate suitable for this grape variety.",
      },
      {
        difficulty: "easy",
        text_es: "Se extiende desde la Cordillera de los Andes en el oeste hasta el Océano Atlántico en el este, con una forma alargada de norte a sur y el segundo territorio más grande de su subcontinente.",
        text_en: "It stretches from the Andes Mountains in the west to the Atlantic Ocean in the east, with an elongated shape from north to south and the second-largest territory in its subcontinent.",
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
        text_es: "Es el único país del mundo que limita con 14 naciones soberanas, una característica compartida con otro gigante euroasiático.",
        text_en: "It is the only country in the world bordering 14 sovereign nations, a characteristic shared with another Eurasian giant.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus formaciones geológicas más notables es la Meseta del Loess, una región de tierra altamente fértil que abarca cientos de miles de kilómetros cuadrados y es famosa por su suelo amarillento y sus cuevas viviendas.",
        text_en: "One of its most prominent geological features is the Loess Plateau, a region of highly fertile land spanning hundreds of thousands of square kilometers, famous for its yellowish soil and cave dwellings.",
      },
      {
        difficulty: "medium",
        text_es: "Su vasto territorio alberga una de las diversidades climáticas más amplias del planeta, desde desiertos áridos en el oeste hasta monzones subtropicales en el sureste y climas alpinos en el suroeste.",
        text_en: "Its vast territory hosts one of the widest climatic diversities on the planet, ranging from arid deserts in the west to subtropical monsoons in the southeast and alpine climates in the southwest.",
      },
      {
        difficulty: "easy",
        text_es: "Este país es reconocido históricamente por haber desarrollado invenciones fundamentales para la humanidad, como la pólvora, el papel, la imprenta y la brújula marítima.",
        text_en: "This country is historically recognized for having developed fundamental inventions for humanity, such as gunpowder, paper, printing, and the nautical compass.",
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
        text_es: "Es la cuna del ajedrez, un juego que se originó en la región de Gupta alrededor del siglo VI d.C.",
        text_en: "It is the birthplace of chess, a game that originated in the Gupta region around the 6th century AD.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus particularidades es que tiene el segundo mayor número de husos horarios después de un gran país asiático-europeo, aunque oficialmente solo usa uno para todo su territorio continental.",
        text_en: "One of its peculiarities is that it has the second-highest number of time zones after a large Asian-European country, although it officially only uses one for its entire continental territory.",
      },
      {
        difficulty: "medium",
        text_es: "Este subcontinente es conocido por su vasta diversidad lingüística, con cientos de lenguas indígenas que coexisten, muchas de ellas con sus propios sistemas de escritura.",
        text_en: "This subcontinent is known for its vast linguistic diversity, with hundreds of indigenous languages coexisting, many of them with their own writing systems.",
      },
      {
        difficulty: "easy",
        text_es: "Es la nación más poblada del mundo, ubicada predominantemente en una gran península al sur de los Himalayas, con una forma triangular que se extiende hacia el Océano Índico.",
        text_en: "It is the world's most populous nation, predominantly located on a large peninsula south of the Himalayas, with a triangular shape extending into the Indian Ocean.",
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
        text_es: "Es la nación con la mayor cantidad de premios Nobel per cápita en las disciplinas científicas de física, química y medicina, entre los países con más de 10 millones de habitantes.",
        text_en: "It is the nation with the highest number of Nobel prizes per capita in the scientific disciplines of physics, chemistry, and medicine, among countries with over 10 million inhabitants.",
      },
      {
        difficulty: "hard",
        text_es: "Su sistema de control de calidad industrial es tan riguroso que la normativa TÜV se ha convertido en un estándar internacional de facto para la seguridad y la certificación de productos en múltiples sectores.",
        text_en: "Its industrial quality control system is so rigorous that the TÜV standard has become a de facto international benchmark for product safety and certification across multiple sectors.",
      },
      {
        difficulty: "medium",
        text_es: "Ostenta un título mundial en ingeniería automotriz, siendo el hogar de la invención del automóvil moderno y una red de carreteras que, en algunas secciones, carece de límites de velocidad obligatorios.",
        text_en: "It holds a global title in automotive engineering, being the home of the modern automobile's invention and a highway network that, in some sections, lacks mandatory speed limits.",
      },
      {
        difficulty: "easy",
        text_es: "Es una república federal centroeuropea, la segunda nación europea más poblada, que comparte fronteras con nueve estados y cuya influencia cultural ha dado al mundo filosofías profundas y composiciones musicales icónicas.",
        text_en: "It is a Central European federal republic, the second most populous European nation, sharing borders with nine states, and whose cultural influence has given the world profound philosophies and iconic musical compositions.",
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
        text_es: "Es el único país del mundo que ha tenido que enmendar su Constitución para aclarar la definición de 'mapa' con respecto a sus límites internos.",
        text_en: "It is the only country in the world that has had to amend its Constitution to clarify the definition of 'map' regarding its internal boundaries.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus provincias es la única jurisdicción de Norteamérica donde el francés es el único idioma oficial, mientras que otra tiene una ley que especifica el uso del inglés y el francés en los tribunales federales.",
        text_en: "One of its provinces is the only jurisdiction in North America where French is the sole official language, while another has a law specifying the use of English and French in federal courts.",
      },
      {
        difficulty: "medium",
        text_es: "Este vasto territorio del norte es famoso por su extensa red de cuerpos de agua dulce, conteniendo más lagos que el resto del mundo combinado.",
        text_en: "This vast northern territory is famous for its extensive network of freshwater bodies, containing more lakes than the rest of the world combined.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación norteña se extiende desde el Océano Atlántico hasta el Pacífico y hacia el Ártico, siendo el segundo país más grande del mundo por área total.",
        text_en: "This northern nation spans from the Atlantic to the Pacific and northward into the Arctic Ocean, making it the second-largest country in the world by total area.",
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
        text_es: "Hasta principios del siglo XXI, fue el único estado miembro de la UE en no reconocer oficialmente ningún tipo de minoría étnica o religiosa, más allá de una pequeña minoría musulmana reconocida por tratados internacionales.",
        text_en: "Until the early 21st century, it was the only EU member state not to officially recognize any ethnic or religious minorities, beyond a small Muslim minority recognized by international treaties.",
      },
      {
        difficulty: "hard",
        text_es: "Es un nodo crucial para el tráfico marítimo global, con uno de los mayores tonelajes de flota mercante del mundo, que históricamente ha jugado un papel desproporcionado en el transporte de mercancías.",
        text_en: "It is a crucial node for global maritime traffic, possessing one of the largest merchant fleet tonnages in the world, which has historically played a disproportionate role in cargo transport.",
      },
      {
        difficulty: "medium",
        text_es: "Conocida por su geografía fragmentada, abarca miles de islas, muchas de las cuales están deshabitadas, configurando un archipiélago que domina una parte significativa de la cuenca oriental del Mediterráneo.",
        text_en: "Known for its fragmented geography, it encompasses thousands of islands, many of which are uninhabited, forming an archipelago that dominates a significant part of the eastern Mediterranean basin.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación del sureste de Europa es la cuna de conceptos filosóficos y democráticos fundamentales que sentaron las bases de la civilización occidental, y su historia está marcada por la influencia de innumerables mitos y leyendas.",
        text_en: "This southeastern European nation is the birthplace of fundamental philosophical and democratic concepts that laid the foundations of Western civilization, and its history is marked by the influence of countless myths and legends.",
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
        text_es: "Una disposición de 1766 convirtió a esta nación en la primera en el mundo en promulgar una ley constitucional que aborda la libertad de prensa, aunque con excepciones durante tiempos de guerra.",
        text_en: "A 1766 measure made this nation the first in the world to enact a constitutional law addressing freedom of the press, albeit with exceptions during times of war.",
      },
      {
        difficulty: "hard",
        text_es: "Este país se encuentra entre los pocos que no registraron un superávit de población o un crecimiento neto de la población durante el siglo XVIII, a pesar de experimentar tasas de natalidad relativamente altas.",
        text_en: "This country is among the few that did not record a population surplus or net population growth during the 18th century, despite experiencing relatively high birth rates.",
      },
      {
        difficulty: "medium",
        text_es: "Es un exportador neto de energía eléctrica, con una gran parte de su generación procedente de recursos hidroeléctricos y nucleares, y ha hecho avances significativos hacia una sociedad libre de combustibles fósiles.",
        text_en: "It is a net exporter of electrical energy, with a large portion of its generation coming from hydroelectric and nuclear resources, and has made significant strides towards a fossil-fuel-free society.",
      },
      {
        difficulty: "easy",
        text_es: "Conocida como la 'Venecia del Norte', una de sus ciudades principales está construida sobre 14 islas y se conecta mediante unos 50 puentes.",
        text_en: "Often referred to as the 'Venice of the North,' one of its main cities is built on 14 islands and connected by around 50 bridges.",
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
        text_es: "Es el único país africano que no forma parte del SAAF (South African Air Force).",
        text_en: "It is the only African country that is not part of the SAAF (South African Air Force).",
      },
      {
        difficulty: "hard",
        text_es: "Una parte significativa de su costa atlántica es hogar de una de las mayores pesquerías de sardinas del mundo.",
        text_en: "A significant portion of its Atlantic coastline is home to one of the world's largest sardine fisheries.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es conocido por su tradición de curtir pieles en fosas de tintes naturales, una práctica que data del siglo XI y aún se puede observar en sus distritos medievales.",
        text_en: "This country is known for its tradition of tanning leather in natural dye pits, a practice dating back to the 11th century and still visible in its medieval districts.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el extremo noroeste de un continente, comparte una frontera marítima muy estrecha con el sur de Europa y una vasta extensión desértica continental.",
        text_en: "Located at the northwestern tip of a continent, it shares a very narrow maritime border with southern Europe and a vast continental desert expanse.",
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
        text_es: "Su constitución es una de las pocas en el mundo que reconoce explícitamente el derecho a la objeción de conciencia para el servicio militar.",
        text_en: "Its constitution is one of the few in the world that explicitly recognizes the right to conscientious objection for military service.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los países con la proporción más alta de molinos de viento tradicionales en Europa para la producción de harina.",
        text_en: "It is one of the countries with the highest proportion of traditional windmills in Europe for flour production.",
      },
      {
        difficulty: "medium",
        text_es: "Comparte con otro país una de las fronteras más antiguas y estables del mundo, con demarcaciones que datan de hace más de 700 años.",
        text_en: "It shares with another country one of the oldest and most stable borders in the world, with demarcations dating back over 700 years.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación suroccidental de Europa, bañada por el Atlántico, es conocida por su tradición marítima y por ser la cuna de grandes exploradores que cartografiaron nuevas rutas.",
        text_en: "This southwestern European nation, bathed by the Atlantic, is known for its maritime tradition and for being the birthplace of great explorers who mapped new routes.",
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
        text_es: "Es uno de los dos únicos países en el mundo que se encuentra en la dorsal mesoatlántica sobre el nivel del mar, permitiendo observar la separación de las placas tectónicas euroasiática y norteamericana.",
        text_en: "It is one of only two countries in the world that straddles the Mid-Atlantic Ridge above sea level, allowing for observation of the divergence of the Eurasian and North American tectonic plates.",
      },
      {
        difficulty: "hard",
        text_es: "Su sistema de energía depende casi por completo de fuentes geotérmicas e hidroeléctricas, lo que lo convierte en un líder mundial en producción de energía renovable, a pesar de su ubicación septentrional.",
        text_en: "Its energy system relies almost entirely on geothermal and hydropower sources, making it a global leader in renewable energy production, despite its northerly location.",
      },
      {
        difficulty: "medium",
        text_es: "Carece de bosques nativos significativos debido a la deforestación histórica y un clima que dificulta el crecimiento de la vegetación arbórea, aunque se están realizando esfuerzos de reforestación.",
        text_en: "It lacks significant native forests due to historical deforestation and a climate that hinders tree growth, although reforestation efforts are underway.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación insular del Atlántico Norte es conocida por sus paisajes volcánicos, glaciares y géiseres, y por tener una de las densidades de población más bajas de Europa.",
        text_en: "This North Atlantic island nation is renowned for its volcanic landscapes, glaciers, and geysers, and for having one of the lowest population densities in Europe.",
      },
    ],
  },
  {
    id: 21,
    name: "Reino Unido",
    name_en: "United Kingdom",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo que ha hospedado los Juegos Olímpicos de verano tres veces en tres sedes diferentes, todas ellas en su ciudad más grande.",
        text_en: "It is the only country in the world to have hosted the Summer Olympic Games three times in three different venues, all within its largest city.",
      },
      {
        difficulty: "hard",
        text_es: "Su red de canales, construida principalmente para el transporte industrial, es más larga que la de Venecia y Ámsterdam combinadas, extendiéndose por miles de kilómetros.",
        text_en: "Its canal network, primarily built for industrial transport, is longer than those of Venice and Amsterdam combined, stretching for thousands of kilometers.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por su meteorología impredecible y por ser el origen de deportes populares como el fútbol o el rugby. Su cocina puede sorprender por la fuerte presencia del curry.",
        text_en: "Famous for its unpredictable weather and for being the origin of popular sports like football and rugby. Its cuisine might surprise with the strong presence of curry.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación insular, una de las más reconocidas del mundo, se encuentra separada del continente europeo por un estrecho que ha sido escenario de grandes proezas y proyectos de ingeniería.",
        text_en: "This island nation, one of the most recognized in the world, is separated from the European continent by a strait that has been the scene of great feats and engineering projects.",
      },
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
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geofísicas más notables es una estructura de impacto ancestral de gran magnitud que data de hace aproximadamente 35 millones de años, asociada a una abundancia inusual de minerales específicos.",
        text_en: "One of its most notable geophysical formations is an ancient, large-scale impact structure dating back roughly 35 million years, associated with an unusual abundance of specific minerals.",
      },
      {
        difficulty: "hard",
        text_es: "Es la única nación euroasiática que limita con doce husos horarios diferentes, lo que subraya su vasta extensión longitudinal y geográfica.",
        text_en: "It is the only Eurasian nation to border twelve different time zones, underscoring its vast longitudinal and geographical expanse.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su territorio se extiende por debajo del Círculo Polar Ártico, lo que define sus biomas dominantes como la taiga y la tundra, conocidos por su biodiversidad resistente al frío.",
        text_en: "A significant portion of its territory extends below the Arctic Circle, defining its dominant biomes as taiga and tundra, known for their cold-hardy biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Este país es el más extenso del mundo en superficie terrestre, abarcando dos continentes distintos y más de un octavo de la masa terrestre habitada del planeta.",
        text_en: "This country is the largest in the world by land area, spanning two distinct continents and more than one-eighth of the Earth's inhabited landmass.",
      },
    ],
  },
  {
    id: 24,
    name: "Países Bajos",
    name_en: "Netherlands",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo cuya máxima autoridad ejecutiva tiene el título de Gobernador General, no de Presidente o Primer Ministro, en su entidad constituyente del Caribe insular.",
        text_en: "It is the only country in the world whose highest executive authority holds the title of Governor General, not President or Prime Minister, in its constituent island Caribbean entity.",
      },
      {
        difficulty: "hard",
        text_es: "Una parte significativa de su superficie terrestre se logró mediante la desecación de lagos y tierras bajas a través de polders, un proceso que comenzó en la Edad Media y se intensificó con tecnologías de molino de viento.",
        text_en: "A significant part of its land area was gained by reclaiming lakes and low-lying lands through polders, a process that began in the Middle Ages and intensified with windmill technologies.",
      },
      {
        difficulty: "medium",
        text_es: "La nación es un exportador líder mundial de un producto agrícola de alto valor que florece estacionalmente, y su cultura popular está fuertemente asociada con estas flores.",
        text_en: "The nation is a world-leading exporter of a high-value agricultural product that blooms seasonally, and its popular culture is strongly associated with these flowers.",
      },
      {
        difficulty: "easy",
        text_es: "Famoso por su extensa red de vías navegables artificiales y su topografía excepcionalmente plana, lo que lo convierte en un paraíso para el transporte de dos ruedas.",
        text_en: "Known for its extensive network of artificial waterways and its exceptionally flat topography, making it a paradise for two-wheeled transportation.",
      },
    ],
  },
  {
    id: 25,
    name: "Suiza",
    name_en: "Switzerland",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único estado federal que practica la democracia directa semidirecta a nivel federal, con instrumentos como el referéndum obligatorio y la iniciativa popular.",
        text_en: "It is the only federal state that practices semi-direct democracy at the federal level, with instruments such as the mandatory referendum and the popular initiative.",
      },
      {
        difficulty: "hard",
        text_es: "Aunque es reconocido por sus altos picos, su punto más bajo se encuentra a menos de 200 metros sobre el nivel del mar.",
        text_en: "While renowned for its high peaks, its lowest point is less than 200 meters above sea level.",
      },
      {
        difficulty: "medium",
        text_es: "Su paisaje está fuertemente influenciado por la presencia de miles de lagos de origen glaciar, muchos de ellos de gran tamaño y profundidad.",
        text_en: "Its landscape is heavily influenced by the presence of thousands of glacial lakes, many of which are large and deep.",
      },
      {
        difficulty: "easy",
        text_es: "Este país, situado en el corazón de Europa, es famoso por su larga tradición de neutralidad en conflictos internacionales y es sede de numerosas organizaciones globales.",
        text_en: "This country, located in the heart of Europe, is famous for its long tradition of neutrality in international conflicts and hosts numerous global organizations.",
      },
    ],
  },
  {
    id: 26,
    name: "Austria",
    name_en: "Austria",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país de la Unión Europea que no es miembro de la OTAN y mantiene una política de neutralidad permanente, la cual está anclada en su constitución desde 1955.",
        text_en: "It is the only country in the European Union that is not a member of NATO and maintains a policy of permanent neutrality, which has been enshrined in its constitution since 1955.",
      },
      {
        difficulty: "hard",
        text_es: "Su paisaje montañoso, que ocupa más de dos tercios de su superficie, lo convierte en el país con la mayor proporción de territorio alpino de Europa Central.",
        text_en: "Its mountainous landscape, covering more than two-thirds of its surface, makes it the country with the largest proportion of Alpine territory in Central Europe.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por su rica tradición musical clásica, fue cuna de influyentes compositores y albergó centros musicales de renombre mundial durante siglos.",
        text_en: "Famous for its rich classical music tradition, it was the birthplace of influential composers and hosted world-renowned musical centers for centuries.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el corazón de Europa Central, es un país sin salida al mar con gran parte de su territorio cubierto por los Alpes orientales.",
        text_en: "Located in the heart of Central Europe, it is a landlocked country with much of its territory covered by the Eastern Alps.",
      },
    ],
  },
  {
    id: 27,
    name: "Bélgica",
    name_en: "Belgium",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el hogar del 'Pôle Européen de Développement', un área transfronteriza que busca integrar el desarrollo económico de tres naciones.",
        text_en: "It is home to the 'Pôle Européen de Développement', a cross-border area that seeks to integrate the economic development of three nations.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus particularidades administrativas es la existencia de 'facilidades lingüísticas', municipios donde la población tiene derecho a servicios en otro idioma nacional además del predominante en la región.",
        text_en: "One of its administrative peculiarities is the existence of 'linguistic facilities', municipalities where the population has the right to services in another national language in addition to the predominant one in the region.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es reconocido por su alta densidad de castillos por kilómetro cuadrado y es un gran productor de ciertos cultivos como la patata y la remolacha azucarera, a pesar de su tamaño.",
        text_en: "This country is recognized for its high density of castles per square kilometer and is a large producer of certain crops such as potatoes and sugar beets, despite its size.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el corazón de Europa occidental, es un nudo de comunicación y burocracia internacional, a menudo considerado un punto de encuentro clave para las decisiones que afectan a todo un continente, y es famoso por su enfoque en la producción de productos derivados del cacao y el cultivo de flores específicas.",
        text_en: "Located in the heart of Western Europe, it is a hub of international communication and bureaucracy, often considered a key meeting point for decisions affecting an entire continent, and is famous for its focus on the production of cocoa-derived products and the cultivation of specific flowers.",
      },
    ],
  },
  {
    id: 28,
    name: "Polonia",
    name_en: "Poland",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es la patria del inventor del primer submarino propulsado por una hélice, el 'Wreck-Explorer', en el siglo XVII.",
        text_en: "It is the homeland of the inventor of the first propeller-driven submarine, the 'Wreck-Explorer', in the 17th century.",
      },
      {
        difficulty: "hard",
        text_es: "Una gran parte de su territorio se asienta sobre la cuenca del Báltico, una de las mayores reservas mundiales de ámbar, lo que le ha valido el apodo de la 'Tierra del Ámbar'.",
        text_en: "A large part of its territory sits on the Baltic Basin, one of the world's largest amber reserves, earning it the nickname 'The Amber Land'.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocido por ser el lugar de origen de una de las razas de perros de pastoreo más antiguas de la región centroeuropea, con un pelaje largo y abundante.",
        text_en: "It is known for being the origin of one of the oldest herding dog breeds in the Central European region, with long, abundant fur.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el centro-este de Europa, su territorio es mayormente llano y tiene una extensa costa en el mar que comparte nombre con un famoso mineral de tonos amarillentos.",
        text_en: "Located in east-central Europe, its territory is mostly flat and has an extensive coastline on the sea that shares its name with a famous yellowish mineral.",
      },
    ],
  },
  {
    id: 29,
    name: "República Checa",
    name_en: "Czech Republic",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país con el mayor número de castillos per cápita del mundo, muchos de ellos habitables.",
        text_en: "It is the country with the highest number of castles per capita in the world, many of them habitable.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio se encuentra en la divisoria de aguas de tres mares distintos, a pesar de no tener costa marítima.",
        text_en: "Its territory lies on the watershed of three different seas, despite having no coastline.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por su larga tradición en la producción de vidrio tallado y cristal de alta calidad.",
        text_en: "Renowned for its long-standing tradition in the production of cut glass and high-quality crystal.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación sin litoral, con una forma que recuerda a un diamante visto desde el aire, divide las históricas regiones de Bohemia y Moravia.",
        text_en: "This landlocked nation, shaped somewhat like a diamond when viewed from above, straddles the historic regions of Bohemia and Moravia.",
      },
    ],
  },
  {
    id: 30,
    name: "Hungría",
    name_en: "Hungary",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países en el mundo que oficialmente utiliza un orden de nombres invertido (apellido antes del nombre de pila).",
        text_en: "It is one of the few countries in the world that officially uses a reverse name order (surname before given name).",
      },
      {
        difficulty: "hard",
        text_es: "Su sistema de escritura original utilizaba una forma de runas conocida como 'Rovásírás' antes de la adopción del alfabeto latino.",
        text_en: "Its original writing system used a form of runes known as 'Rovásírás' before the adoption of the Latin alphabet.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus complejos de baños termales, muchos de los cuales se construyeron sobre fuentes naturales que han sido utilizados durante siglos.",
        text_en: "Renowned for its thermal bath complexes, many of which are built on natural springs that have been used for centuries.",
      },
      {
        difficulty: "easy",
        text_es: "Un país sin litoral en Europa Central, conocido por su histórica conexión con el Imperio Austro-Húngaro y su gran llanura transdanubiana.",
        text_en: "A landlocked country in Central Europe, known for its historical connection to the Austro-Hungarian Empire and its large Transdanubian Plain.",
      },
    ],
  },
  {
    id: 31,
    name: "Rumania",
    name_en: "Romania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geológicas alberga 'el volcán de lodo' de Berca, un fenómeno geotérmico único donde el gas natural expulsa lodo frío y salado.",
        text_en: "One of its geological formations hosts the Berca 'mud volcano,' a unique geothermal phenomenon where natural gas expels cold, salty mud.",
      },
      {
        difficulty: "hard",
        text_es: "Es conocida por tener una de las poblaciones más grandes de osos pardos en Europa, fuera de Rusia, predominantemente en sus regiones montañosas del interior.",
        text_en: "It is known for having one of the largest brown bear populations in Europe, outside of Russia, predominantly in its interior mountainous regions.",
      },
      {
        difficulty: "medium",
        text_es: "Su paisaje está fuertemente influenciado por la sección final de una importante cadena montañosa europea, que curva abruptamente a través de su territorio, dividiéndolo geográficamente.",
        text_en: "Its landscape is heavily influenced by the final section of a major European mountain range, which curves sharply through its territory, dividing it geographically.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en la encrucijada de Europa Central, del Este y del Sureste, comparte la desembocadura de un gran río europeo en el mar Negro.",
        text_en: "Located at the crossroads of Central, Eastern, and Southeastern Europe, it shares the mouth of a major European river into the Black Sea.",
      },
    ],
  },
  {
    id: 32,
    name: "Ucrania",
    name_en: "Ukraine",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país implementó una de las primeras constituciones modernas en Europa en 1710, conocida como las “Constituciones y Leyes de Libertades del Sich de Zaporiyia”.",
        text_en: "This country implemented one of the first modern constitutions in Europe in 1710, known as the 'Constitutions and Laws of the Zaporozhian Host'.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente, su territorio ha sido conocido como el 'granero de Europa' debido a su vasto suelo negro fértil, apto para la agricultura.",
        text_en: "Historically, its territory has been known as the 'breadbasket of Europe' due to its vast, fertile black soil, suitable for agriculture.",
      },
      {
        difficulty: "medium",
        text_es: "Es el segundo país más grande de Europa por área total y posee una significativa porción de la estepa póntica-cáspica.",
        text_en: "It is the second-largest country in Europe by total area and possesses a significant portion of the Pontic-Caspian steppe.",
      },
      {
        difficulty: "easy",
        text_es: "Limita con el Mar Negro al sur y tiene una extensa frontera oriental con una federación cuyo nombre inicia con la misma letra que 'Rusia'.",
        text_en: "It borders the Black Sea to the south and has an extensive eastern border with a federation whose name starts with the same letter as 'Russia'.",
      },
    ],
  },
  {
    id: 33,
    name: "Turquía",
    name_en: "Turkey",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo que tiene secciones de su territorio en dos continentes, y que al mismo tiempo, su nombre más común fue motivo de controversia diplomática debido a una asociación con un ave de corral, llevando a un cambio formal de su designación internacional.",
        text_en: "It is the only country in the world to have sections of its territory on two continents, and at the same time, its most common name was a source of diplomatic controversy due to an association with a common fowl, leading to a formal change in its international designation.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente, fue el último gran imperio en abrazar el sistema métrico decimal, adoptando oficialmente el metro y el kilogramo en la década de 1930, mucho después de la mayoría de las naciones europeas.",
        text_en: "Historically, it was the last major empire to embrace the metric system, officially adopting the meter and kilogram in the 1930s, long after most European nations.",
      },
      {
        difficulty: "medium",
        text_es: "Su paisaje se caracteriza por una mezcla de llanuras costeras, montañas volcánicas y una meseta interior semiárida que influye en su clima y agricultura, permitiendo una diversa gama de cultivos desde cítricos hasta cereales.",
        text_en: "Its landscape is characterized by a mix of coastal plains, volcanic mountains, and a semi-arid interior plateau that influences its climate and agriculture, allowing for a diverse range of crops from citrus to cereals.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en la encrucijada de culturas y geografía, este país es el único que tiene una parte de su territorio en Anatolia y otra en el sureste de Europa, una configuración que ha moldeado profundamente su historia y su papel geopolítico.",
        text_en: "Located at the crossroads of cultures and geography, this country is the only one with a portion of its territory in Anatolia and another in southeastern Europe, a configuration that has profoundly shaped its history and geopolitical role.",
      },
    ],
  },
  {
    id: 34,
    name: "Israel",
    name_en: "Israel",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países que no tiene una constitución singular codificada, sino que opera bajo una serie de Leyes Fundamentales que actúan como una constitución evolutiva.",
        text_en: "It is one of the few countries that does not have a single codified constitution, but instead operates under a series of Basic Laws that act as an evolving constitution.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de su tamaño, su desarrollo agrícola es notable por haber popularizado técnicas de riego por goteo a nivel mundial.",
        text_en: "Despite its size, its agricultural development is notable for having popularized drip irrigation techniques worldwide.",
      },
      {
        difficulty: "medium",
        text_es: "Se encuentra en una región donde convergen los continentes de Asia y África, actuando como un puente terrestre histórico entre ambos.",
        text_en: "It is located in a region where the continents of Asia and Africa converge, acting as a historical land bridge between them.",
      },
      {
        difficulty: "easy",
        text_es: "Limita con un cuerpo de agua salado conocido por permitir la flotación humana sin esfuerzo debido a su alta densidad.",
        text_en: "It borders a salty body of water known for allowing effortless human flotation due to its high density.",
      },
    ],
  },
  {
    id: 35,
    name: "Arabia Saudita",
    name_en: "Saudi Arabia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único estado del mundo en el que la realeza hereditaria está codificada para pasar de hermano a hermano, no de padre a hijo, por decreto en 1992, aunque la práctica ha fluctuado.",
        text_en: "It is the only state in the world where hereditary royalty is codified to pass from brother to brother, not father to son, by decree in 1992, although practice has fluctuated.",
      },
      {
        difficulty: "hard",
        text_es: "Con una población sustancial de camellos, es el hogar de uno de los circuitos de carreras de camellos más sofisticados, utilizando robots jinetes en eventos anuales.",
        text_en: "With a substantial camel population, it is home to one of the most sophisticated camel racing circuits, utilizing robot jockeys in annual events.",
      },
      {
        difficulty: "medium",
        text_es: "Una gran parte de su territorio está cubierta por Rub al-Jali, uno de los desiertos de arena más grandes e inhóspitos del planeta.",
        text_en: "A large portion of its territory is covered by the Rub' al Khali, one of the largest and most inhospitable sand deserts on the planet.",
      },
      {
        difficulty: "easy",
        text_es: "Este país peninsular abarca la mayor parte de la masa continental que da nombre a una de las penínsulas más grandes del mundo.",
        text_en: "This peninsular country encompasses most of the landmass that gives its name to one of the world's largest peninsulas.",
      },
    ],
  },
  {
    id: 36,
    name: "Emiratos Árabes Unidos",
    name_en: "United Arab Emirates",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución de 1971 es provisional y nunca ha sido formalmente enmendada de forma permanente, aunque se han realizado modificaciones operativas.",
        text_en: "Its 1971 constitution is provisional and has never been formally and permanently amended, although operational modifications have been made.",
      },
      {
        difficulty: "hard",
        text_es: "Es un nodo crucial en la ruta de exportación de dátiles de la especie Phoenix dactylifera, de la cual tiene una producción significativa.",
        text_en: "It is a crucial node in the export route for Phoenix dactylifera dates, of which it has significant production.",
      },
      {
        difficulty: "medium",
        text_es: "Una parte de su territorio continental está separada por la totalidad de otro país, formando un exclave en la costa Este, además de varios enclaves dentro de ese mismo país.",
        text_en: "A part of its mainland territory is separated by the entirety of another country, forming an exclave on the East coast, in addition to several enclaves within that same country.",
      },
      {
        difficulty: "easy",
        text_es: "Federación de siete emiratos ubicada en la península arábiga, con una costa bañada por un golfo estratégico y con grandes reservas de hidrocarburos.",
        text_en: "A federation of seven emirates located on the Arabian Peninsula, with a coastline on a strategic gulf and possessing large hydrocarbon reserves.",
      },
    ],
  },
  {
    id: 37,
    name: "Irán",
    name_en: "Iran",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución incluye un Consejo Guardián que examina la compatibilidad de la legislación con la sharía y la propia constitución, además de aprobar candidatos electorales.",
        text_en: "Its constitution includes a Guardian Council that reviews legislation's compatibility with Sharia and the constitution itself, in addition to approving electoral candidates.",
      },
      {
        difficulty: "hard",
        text_es: "Es un nodo crucial en la Ruta de la Seda histórica y tiene una tradición antigua en la producción de azafrán, siendo uno de los mayores productores mundiales de esta especia.",
        text_en: "It is a crucial node in the historical Silk Road and has an ancient tradition in saffron production, being one of the largest global producers of this spice.",
      },
      {
        difficulty: "medium",
        text_es: "Su geografía interior está dominada por una meseta árida y cadenas montañosas, con vastos desiertos de sal como el Dasht-e Kavir.",
        text_en: "Its interior geography is dominated by an arid plateau and mountain ranges, with vast salt deserts like the Dasht-e Kavir.",
      },
      {
        difficulty: "easy",
        text_es: "Históricamente conocido como Persia, este país tiene costas significativas en el Golfo Pérsico y el Mar Caspio.",
        text_en: "Historically known as Persia, this country has significant coastlines on both the Persian Gulf and the Caspian Sea.",
      },
    ],
  },
  {
    id: 38,
    name: "Pakistán",
    name_en: "Pakistan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países en desarrollo que se ha comprometido con un programa para un mínimo del 10% de mujeres en funciones de mantenimiento de la paz de la ONU.",
        text_en: "It is one of the few developing countries that has committed to a program for a minimum of 10% women in UN peacekeeping roles.",
      },
      {
        difficulty: "hard",
        text_es: "Su extenso sistema de riego, el más grande del mundo, se originó en gran medida durante la era colonial británica para aumentar la producción agrícola.",
        text_en: "Its extensive irrigation system, the largest in the world, largely originated during the British colonial era to boost agricultural output.",
      },
      {
        difficulty: "medium",
        text_es: "Una parte significativa de su territorio alberga una de las cordilleras más altas del mundo, incluyendo varias de las catorce cumbres de más de ocho mil metros de altura.",
        text_en: "A significant portion of its territory is home to one of the world's highest mountain ranges, including several of the fourteen eight-thousander peaks.",
      },
      {
        difficulty: "easy",
        text_es: "Fue concebido como un estado para aquellos que practicaban una fe particular en el subcontinente indio antes de la división poscolonial de la región.",
        text_en: "It was envisioned as a state for those practicing a particular faith in the Indian subcontinent prior to the post-colonial partition of the region.",
      },
    ],
  },
  {
    id: 39,
    name: "Bangladés",
    name_en: "Bangladesh",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo cuya Constitución, en su artículo 2C, reconoce un 'Día de Ajuste' (Proshanti Dibosh) para los trabajadores que han completado años de servicio.",
        text_en: "It is the only country in the world whose Constitution, in Article 2C, recognizes an 'Adjustment Day' (Proshanti Dibosh) for workers who have completed years of service.",
      },
      {
        difficulty: "hard",
        text_es: "La nación tiene la mayor densidad de población de grandes felinos del mundo, específicamente de una subespecie de tigres, en una de sus regiones costeras boscosas.",
        text_en: "The nation has the world's highest density of large felines, specifically a subspecies of tigers, in one of its forested coastal regions.",
      },
      {
        difficulty: "medium",
        text_es: "A pesar de su baja altitud y su proximidad al mar, sus habitantes han desarrollado extensos sistemas de terrazas flotantes tradicionales para la agricultura.",
        text_en: "Despite its low elevation and proximity to the sea, its inhabitants have developed extensive traditional floating terrace systems for agriculture.",
      },
      {
        difficulty: "easy",
        text_es: "Conocido coloquialmente como la 'Tierra de los Ríos', este país está atravesado por una enorme red fluvial que desemboca en uno de los deltas más grandes del mundo.",
        text_en: "Colloquially known as the 'Land of Rivers,' this country is crisscrossed by an enormous river network that empties into one of the world's largest deltas.",
      },
    ],
  },
  {
    id: 40,
    name: "Indonesia",
    name_en: "Indonesia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución de 1945 es conocida por su preámbulo que delinea la Pancasila, cinco principios ideológicos fundamentales.",
        text_en: "Its 1945 constitution is known for its preamble outlining the Pancasila, five fundamental ideological principles.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único lugar donde se puede encontrar, en su hábitat natural, al varano más grande del mundo, un reptil legendario.",
        text_en: "It is the only place where the world's largest monitor lizard, a legendary reptile, can be found in its natural habitat.",
      },
      {
        difficulty: "medium",
        text_es: "Este archipiélago se extiende por varios husos horarios, y sus islas están divididas geológicamente por la Línea Wallace.",
        text_en: "This archipelago spans several time zones, and its islands are geologically divided by the Wallace Line.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el Sudeste Asiático y Oceanía, este estado insular es el que tiene la mayor población musulmana del mundo, a pesar de no ser una teocracia, y su territorio está compuesto por miles de islas volcánicas.",
        text_en: "Located in Southeast Asia and Oceania, this island nation has the largest Muslim population in the world, despite not being a theocracy, and its territory is comprised of thousands of volcanic islands.",
      },
    ],
  },
  {
    id: 41,
    name: "Filipinas",
    name_en: "Philippines",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del sudeste asiático que nunca fue completamente colonizado por una potencia europea, aunque sí establecieron enclaves y tratados de protección.",
        text_en: "It is the only country in Southeast Asia that was never fully colonized by a European power, although enclaves and protectorate treaties were established.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de ser un archipiélago, comparte una frontera terrestre con un solo país, debido a una peculiar distribución insular.",
        text_en: "Despite being an archipelago, it shares a land border with only one country, due to a peculiar island distribution.",
      },
      {
        difficulty: "medium",
        text_es: "Se ubica en el Anillo de Fuego del Pacífico y alberga un volcán cuyo cono es considerado uno de los más perfectos del mundo.",
        text_en: "It is located in the Pacific Ring of Fire and is home to a volcano whose cone is considered one of the most perfect in the world.",
      },
      {
        difficulty: "easy",
        text_es: "Este país insular del sudeste asiático, conocido por sus miles de islas, es el segundo productor mundial de cocos y un exportador significativo de pavo real azul.",
        text_en: "This island nation in Southeast Asia, known for its thousands of islands, is the world's second-largest producer of coconuts and a significant exporter of blue peacock feathers.",
      },
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
    name: "Bután",
    name_en: "Bhutan",
    hints: [
      { difficulty: "expert", text_es: "Es el único país del mundo que mide su progreso a través del índice de Felicidad Nacional Bruta en lugar del PIB.", text_en: "It is the only country in the world that measures its progress through a Gross National Happiness index rather than GDP." },
      { difficulty: "hard", text_es: "Es el primer país del planeta con balance de carbono negativo: absorbe más CO₂ del que emite.", text_en: "It is the first country on the planet to be carbon negative: it absorbs more CO₂ than it emits." },
      { difficulty: "medium", text_es: "Famoso por sus monasterios budistas colgados de acantilados, como el Nido del Tigre.", text_en: "Famous for its Buddhist monasteries clinging to cliffs, such as the Tiger's Nest." },
      { difficulty: "easy", text_es: "Su capital es Timbu y se sitúa en el Himalaya, entre la India y China.", text_en: "Its capital is Thimphu and it lies in the Himalayas, between India and China." },
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
