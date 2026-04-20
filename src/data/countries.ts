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
        text_es: "En la historia de sus relaciones marítimas, ha tenido un rol crucial en el comercio de la gamboge, una resina gomosa utilizada como pigmento amarillo.",
        text_en: "In the history of its maritime relations, it played a crucial role in the trade of gamboge, a gummy resin used as a yellow pigment.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país en su subregión del sudeste asiático continental que nunca ha sido colonizado por potencias europeas.",
        text_en: "It is the only country in its continental Southeast Asian subregion that has never been colonized by European powers.",
      },
      {
        difficulty: "medium",
        text_es: "Su cocina es famosa por equilibrar cinco sabores fundamentales: dulce, agrio, salado, amargo y picante.",
        text_en: "Its cuisine is renowned for balancing five fundamental flavors: sweet, sour, salty, bitter, and spicy.",
      },
      {
        difficulty: "easy",
        text_es: "Una gran parte de su economía depende de la exportación de arroz, siendo uno de los mayores exportadores mundiales de este cereal.",
        text_en: "A large part of its economy relies on rice exports, making it one of the world's largest exporters of this grain.",
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
      {
        difficulty: "expert",
        text_es: "Su punto más oriental, ubicado en el Atlántico, se encuentra en la isla de Semisopochnoi, en las Aleutianas, al oeste de la línea internacional de cambio de fecha.",
        text_en: "Its easternmost point, located in the Atlantic, is on Semisopochnoi Island, in the Aleutians, west of the International Date Line.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país industrializado que no ha ratificado la Convención sobre los Derechos del Niño.",
        text_en: "It is the only industrialized nation that has not ratified the Convention on the Rights of the Child.",
      },
      {
        difficulty: "medium",
        text_es: "Su territorio incluye una masa terrestre no contigua significativamente grande, más allá de sus límites principales.",
        text_en: "Its territory includes a significantly large non-contiguous landmass, beyond its main borders.",
      },
      {
        difficulty: "easy",
        text_es: "Es la sede de la Organización de las Naciones Unidas.",
        text_en: "It is the headquarters of the United Nations.",
      },
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
      {
        difficulty: "expert",
        text_es: "Es uno de los dos únicos países sin frontera terrestre con Laos que han estado en guerra con Camboya desde 1970.",
        text_en: "It is one of only two countries without a land border with Laos that have been at war with Cambodia since 1970.",
      },
      {
        difficulty: "hard",
        text_es: "Gran parte de su territorio se encuentra dentro de la península de Indochina, y en su historia fue hogar de la cultura Đông Sơn.",
        text_en: "Much of its territory lies within the Indochinese Peninsula, and in its history, it was home to the Đông Sơn culture.",
      },
      {
        difficulty: "medium",
        text_es: "Su costa se extiende por más de 3.200 kilómetros y es conocida por sus bahías cársticas de piedra caliza.",
        text_en: "Its coastline stretches for over 3,200 kilometers and is known for its limestone karst bays.",
      },
      {
        difficulty: "easy",
        text_es: "Es el segundo mayor exportador mundial de café, centrándose principalmente en la variedad Robusta.",
        text_en: "It is the world's second-largest exporter of coffee, focusing primarily on the Robusta variety.",
      },
    ],
  },
  {
    id: 43,
    name: "Corea del Sur",
    name_en: "South Korea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países en el mundo que utiliza un sistema de edad diferente al estándar internacional, donde las personas son consideradas un año al nacer.",
        text_en: "It is one of the few countries in the world that uses a different age system from the international standard, where people are considered one year old at birth.",
      },
      {
        difficulty: "hard",
        text_es: "Su costa oriental experimenta el fenómeno del 'mar de Donghae', caracterizado por mareas frías y profundas que influyen en su biodiversidad marina y clima local.",
        text_en: "Its eastern coast experiences the 'Donghae Sea' phenomenon, characterized by cold and deep tides that influence its marine biodiversity and local climate.",
      },
      {
        difficulty: "medium",
        text_es: "Posee una de las redes de internet más rápidas y con mayor penetración a nivel global.",
        text_en: "It boasts one of the fastest and most highly penetrated internet networks globally.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en una península en el este de Asia y comparte una frontera terrestre con solo otra nación.",
        text_en: "This country is located on a peninsula in East Asia and shares a land border with only one other nation.",
      },
    ],
  },
  {
    id: 44,
    name: "Singapur",
    name_en: "Singapore",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su reserva de agua está gestionada por un sistema de cuatro grifos, que incluye agua desalinizada, agua recuperada y agua importada.",
        text_en: "Its water supply is managed by a Four National Taps system, which includes desalinated water, reclaimed water, and imported water.",
      },
      {
        difficulty: "hard",
        text_es: "Fue fundado como un puesto comercial británico en 1819 por Sir Stamford Raffles.",
        text_en: "It was founded as a British trading post in 1819 by Sir Stamford Raffles.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los tres estados-ciudad soberanos que quedan en el mundo.",
        text_en: "It is one of only three sovereign city-states remaining in the world.",
      },
      {
        difficulty: "easy",
        text_es: "Es un archipiélago compuesto por una isla principal y más de 60 islas satélite más pequeñas.",
        text_en: "It is an archipelago consisting of one main island and over 60 smaller satellite islands.",
      },
    ],
  },
  {
    id: 45,
    name: "Malasia",
    name_en: "Malaysia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su sistema legal incorpora la 'Ley del Camino Real' desde la era colonial británica.",
        text_en: "Its legal system incorporates the 'Law of the Royal Way' from the British colonial era.",
      },
      {
        difficulty: "hard",
        text_es: "Una porción de su masa terrestre se encuentra en una isla compartida con otras naciones.",
        text_en: "A portion of its landmass is located on an island shared with other nations.",
      },
      {
        difficulty: "medium",
        text_es: "Es un importante productor y exportador mundial de un aceite vegetal muy utilizado.",
        text_en: "It is a major global producer and exporter of a widely used vegetable oil.",
      },
      {
        difficulty: "easy",
        text_es: "Está situado en el sudeste asiático, con costas en el Mar de China Meridional y el Estrecho de Malaca.",
        text_en: "It is located in Southeast Asia, with coastlines on the South China Sea and the Strait of Malacca.",
      },
    ],
  },
  {
    id: 46,
    name: "Nepal",
    name_en: "Nepal",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único estado con una bandera no cuadrangular, formada por dos triángulos superpuestos que representan el Himalaya y las dos religiones principales.",
        text_en: "It is the only state with a non-quadrangular flag, consisting of two superimposed triangles representing the Himalayas and the two main religions.",
      },
      {
        difficulty: "hard",
        text_es: "Una de sus festividades más significativas, Dashain, celebra la victoria del bien sobre el mal y se extiende por quince días lunares.",
        text_en: "One of its most significant festivals, Dashain, celebrates the victory of good over evil and spans fifteen lunar days.",
      },
      {
        difficulty: "medium",
        text_es: "Su territorio es famoso por albergar ocho de las diez montañas más altas de la Tierra.",
        text_en: "Its territory is famous for hosting eight of the ten highest mountains on Earth.",
      },
      {
        difficulty: "easy",
        text_es: "Es un país mayoritariamente montañoso ubicado en el sur de Asia, sin salida al mar.",
        text_en: "It is a predominantly mountainous landlocked country located in South Asia.",
      },
    ],
  },
  {
    id: 47,
    name: "Sri Lanka",
    name_en: "Sri Lanka",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una especie de rana arbórea microhílida endémica de este lugar, Kaloula taprobanica, comparte su nombre con una antigua designación sánscrita para la isla.",
        text_en: "A microhylid tree frog species endemic to this location, Kaloula taprobanica, shares its name with an ancient Sanskrit designation for the island.",
      },
      {
        difficulty: "hard",
        text_es: "Es el mayor exportador mundial de un tipo específico de canela verdadera (Cinnamomum verum), una especia muy valorada globalmente.",
        text_en: "It is the world's largest exporter of a specific type of true cinnamon (Cinnamomum verum), a globally valued spice.",
      },
      {
        difficulty: "medium",
        text_es: "Este territorio insular es reconocido por sus exportaciones de gemas, siendo el zafiro azul una de las más destacadas.",
        text_en: "This island territory is renowned for its gem exports, with blue sapphire being one of the most prominent.",
      },
      {
        difficulty: "easy",
        text_es: "Su silueta a menudo se describe como la de una lágrima u, ocasionalmente, una perla, al sur de un gran subcontinente.",
        text_en: "Its silhouette is often described as resembling a teardrop or, occasionally, a pearl, located south of a large subcontinent.",
      },
    ],
  },
  {
    id: 48,
    name: "Sudáfrica",
    name_en: "South Africa",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una especie particular de escarabajo pelotero, la Circellium bacchus, endémica de una pequeña región, muestra un comportamiento de anidación inusual que implica el movimiento de estiércol a distancias considerables para sus cámaras de cría.",
        text_en: "A particular species of dung beetle, Circellium bacchus, endemic to a small region, exhibits unusual nesting behavior involving significant distances of dung transport for its brood chambers.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país del mundo que ha abandonado y luego vuelto a unirse a la Commonwealth de Naciones.",
        text_en: "It is the only country in the world to have left and then rejoined the Commonwealth of Nations.",
      },
      {
        difficulty: "medium",
        text_es: "La Cuna de la Humanidad, un sitio que contiene una de las concentraciones más ricas de yacimientos de homínidos fósiles en el mundo, está ubicada dentro de sus fronteras.",
        text_en: "The Cradle of Humankind, a site containing one of the richest concentrations of hominid fossil sites in the world, is located within its borders.",
      },
      {
        difficulty: "easy",
        text_es: "Limita con dos países sin litoral que son completamente enclavados dentro de sus propias fronteras.",
        text_en: "It borders two landlocked countries that are completely enclaved within its own borders.",
      },
    ],
  },
  {
    id: 49,
    name: "Nigeria",
    name_en: "Nigeria",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una especie de ave, la chova piquirroja, tiene su subespecie africana, 'niger', que recibe su nombre de una denominación histórica de su región geográfica.",
        text_en: "A species of bird, the red-billed chough, has its African subspecies, 'niger', named after a historical denomination of its geographical region.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los pocos países del mundo que ha sido sede del Festival Mundial de Artes Negras dos veces, en 1977.",
        text_en: "It is one of the few countries in the world to have hosted the World Festival of Black Arts twice, in 1977.",
      },
      {
        difficulty: "medium",
        text_es: "Su área contiene la mayor diversidad de mariposas de toda África.",
        text_en: "Its area contains the greatest diversity of butterflies in all of Africa.",
      },
      {
        difficulty: "easy",
        text_es: "Este país es habitado por más de 250 grupos étnicos, siendo los tres más grandes los Hausa, Igbo y Yoruba.",
        text_en: "This country is inhabited by over 250 ethnic groups, with the three largest being the Hausa, Igbo, and Yoruba.",
      },
    ],
  },
  {
    id: 50,
    name: "Kenia",
    name_en: "Kenya",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los veinticinco países en el mundo que se encuentra en la Gran Falla del Rift y que tiene salida al mar.",
        text_en: "It is one of twenty-five countries in the world that lies within the Great Rift Valley and has an outlet to the sea.",
      },
      {
        difficulty: "hard",
        text_es: "Su nombre se deriva de un pico volcánico prominente, y sus límites modernos fueron establecidos por intereses coloniales vinculados a una ruta comercial hacia un gran lago interior.",
        text_en: "Its name is derived from a prominent volcanic peak, and its modern boundaries were set by colonial interests linked to a trade route to a large inland lake.",
      },
      {
        difficulty: "medium",
        text_es: "Es un exportador significativo de té y café, y gran parte de su economía se beneficia de un género específico de turismo que implica la observación de fauna salvaje en grandes reservas naturales.",
        text_en: "It is a significant exporter of tea and coffee, and much of its economy benefits from a specific genre of tourism involving wildlife observation in large nature reserves.",
      },
      {
        difficulty: "easy",
        text_es: "Este país de África Oriental tiene una costa en el Océano Índico y es ampliamente reconocido por sus vastas sabanas y la Gran Migración anual de ñus que cruza sus parques nacionales.",
        text_en: "This East African country has a coastline on the Indian Ocean and is widely recognized for its vast savannas and the annual Great Migration of wildebeests that crosses its national parks.",
      },
    ],
  },
  {
    id: 51,
    name: "Etiopía",
    name_en: "Ethiopia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geológicas, la Depresión de Afar, presenta puntos de triple unión donde tres placas tectónicas se separan actualmente.",
        text_en: "One of its geological formations, the Afar Depression, features triple junction points where three tectonic plates are currently pulling apart.",
      },
      {
        difficulty: "hard",
        text_es: "Es el país sin salida al mar más poblado del continente africano y sufre de una conexión limitada a los puertos marítimos internacionales.",
        text_en: "It is the most populous landlocked country on the African continent and suffers from limited access to international seaports.",
      },
      {
        difficulty: "medium",
        text_es: "Cuenta con un calendario único que tiene 13 meses y es aproximadamente siete años y ocho meses atrasado con respecto al calendario gregoriano.",
        text_en: "It has a unique calendar that features 13 months and is roughly seven years and eight months behind the Gregorian calendar.",
      },
      {
        difficulty: "easy",
        text_es: "Es ampliamente reconocido como el lugar de origen del café Arábica, que se cree que fue descubierto por un pastor de cabras llamado Kaldi.",
        text_en: "It is widely recognized as the birthplace of Arabica coffee, believed to have been discovered by a goat herder named Kaldi.",
      },
    ],
  },
  {
    id: 52,
    name: "Argelia",
    name_en: "Algeria",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una red de 'foggara' subterránea alimenta sus oasis, crucial para su agricultura en zonas áridas.",
        text_en: "An underground 'foggara' network feeds its oases, crucial for its agriculture in arid zones.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio fue una provincia clave del Imperio Romano, productora de grano y conocida como 'el granero de Roma'.",
        text_en: "Its territory was a key province of the Roman Empire, a grain producer known as 'the breadbasket of Rome'.",
      },
      {
        difficulty: "medium",
        text_es: "Es el país con mayor extensión territorial del continente africano.",
        text_en: "It is the country with the largest land area on the African continent.",
      },
      {
        difficulty: "easy",
        text_es: "Gran parte de su masa terrestre está cubierta por una extensa área desértica en el norte de África.",
        text_en: "A large portion of its landmass is covered by an extensive desert area in North Africa.",
      },
    ],
  },
  {
    id: 53,
    name: "Túnez",
    name_en: "Tunisia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país en su continente que ha alcanzado el estatus de 'democracia plena' en el Índice de Democracia de The Economist Intelligence Unit desde 2014.",
        text_en: "It is the only country on its continent to have achieved 'full democracy' status in The Economist Intelligence Unit's Democracy Index since 2014.",
      },
      {
        difficulty: "hard",
        text_es: "Su ubicación fue clave para la antigua civilización púnica, que estableció una de las potencias navales y comerciales más significativas del Mediterráneo.",
        text_en: "Its location was key for the ancient Punic civilization, which established one of the most significant naval and commercial powers in the Mediterranean.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su territorio se encuentra dentro del desierto más grande del mundo, pero también cuenta con una extensa costa en el mar interior de Europa y África.",
        text_en: "A large part of its territory lies within the world's largest desert, but it also boasts an extensive coastline on the inland sea of Europe and Africa.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en la parte más septentrional de África, con costas tanto al este como al norte del continente.",
        text_en: "It is located in the northernmost part of Africa, with coastlines to both the east and north of the continent.",
      },
    ],
  },
  {
    id: 54,
    name: "Ghana",
    name_en: "Ghana",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos lugares del mundo donde se puede encontrar el pez-gato Kribi.",
        text_en: "It is one of the few places in the world where the Kribi Freshwater Catfish can be found.",
      },
      {
        difficulty: "hard",
        text_es: "Su costa es conocida por haber sido un centro clave en el comercio de un valioso metal durante siglos, incluso antes de la colonización europea a gran escala. Más de 100 fortificaciones históricas salpican su litoral.",
        text_en: "Its coast was known as a key center for the trade of a valuable metal for centuries, even before large-scale European colonization. Over 100 historical fortifications dot its shoreline.",
      },
      {
        difficulty: "medium",
        text_es: "Ostenta el título de ser el primer país subsahariano en lograr la independencia de una potencia colonial europea, y su primer líder fue una figura panafricanista prominente.",
        text_en: "It holds the distinction of being the first sub-Saharan country to achieve independence from a European colonial power, and its first leader was a prominent pan-Africanist figure.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el golfo de Guinea, al oeste de Togo, cuenta con una de las mayores producciones de cacao del mundo.",
        text_en: "Located on the Gulf of Guinea, west of Togo, it boasts one of the largest cocoa productions in the world.",
      },
    ],
  },
  {
    id: 55,
    name: "Senegal",
    name_en: "Senegal",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el punto más occidental del continente africano, en la península de Cabo Verde.",
        text_en: "It is the westernmost point of the African continent, on the Cap-Vert peninsula.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio fue la cuna del Reino de Wólof y más tarde del Imperio de Wólof, que floreció entre los siglos XIII y XVI.",
        text_en: "Its territory was the birthplace of the Jolof Kingdom and later the Jolof Empire, which flourished between the 13th and 16th centuries.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su frontera sur está definida por un río que lleva el mismo nombre que la nación.",
        text_en: "Much of its southern border is defined by a river bearing the same name as the nation.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Occidental y su costa está bañada por el Océano Atlántico.",
        text_en: "It is located in West Africa, and its coast is bathed by the Atlantic Ocean.",
      },
    ],
  },
  {
    id: 56,
    name: "Madagascar",
    name_en: "Madagascar",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus subespecies de lémur, el lémur bambú dorado, fue descubierto para la ciencia en 1986 por el Dr. Ganzhorn como parte de su investigación sobre la ecología y conservación de los lémures.",
        text_en: "One of its lemur subspecies, the golden bamboo lemur, was discovered for science in 1986 by Dr. Ganzhorn as part of his research on lemur ecology and conservation.",
      },
      {
        difficulty: "hard",
        text_es: "Mucho de su paisaje se caracteriza por los tsingy, formaciones kársticas de piedra caliza con bordes afilados que se elevan verticalmente, esculpidas por la erosión.",
        text_en: "Much of its landscape is characterized by tsingy, sharp-edged limestone karst formations that rise vertically, sculpted by erosion.",
      },
      {
        difficulty: "medium",
        text_es: "Es el lugar de origen de la planta de vainilla Planifolia, de donde se obtiene el extracto más común, y lidera su producción mundial.",
        text_en: "It is the origin point of the Planifolia vanilla plant, from which the most common extract is obtained, and it leads global production of it.",
      },
      {
        difficulty: "easy",
        text_es: "Es la isla más grande del continente africano y la cuarta isla más grande del mundo.",
        text_en: "It is the largest island off the African continent and the fourth largest island in the world.",
      },
    ],
  },
  {
    id: 57,
    name: "Chile",
    name_en: "Chile",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su territorio incluye el Polo de Inaccesibilidad del Pacífico, el punto oceánico más alejado de cualquier masa continental.",
        text_en: "Its territory includes the Pacific Pole of Inaccessibility, the oceanic point furthest from any landmass.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los dos únicos países de América del Sur que no comparte frontera terrestre con Brasil.",
        text_en: "It is one of only two South American countries that does not share a land border with Brazil.",
      },
      {
        difficulty: "medium",
        text_es: "Alberga algunos de los telescopios astronómicos más avanzados del mundo debido a sus condiciones atmosféricas únicas y cielos despejados.",
        text_en: "It hosts some of the most advanced astronomical telescopes in the world due to its unique atmospheric conditions and clear skies.",
      },
      {
        difficulty: "easy",
        text_es: "Se extiende a lo largo de una extensa franja costera del Pacífico en la parte occidental de América del Sur.",
        text_en: "It stretches along an extensive Pacific coastline in the western part of South America.",
      },
    ],
  },
  {
    id: 58,
    name: "Perú",
    name_en: "Peru",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus festividades más coloridas es la Candelaria, reconocida por su sincretismo cultural y danzas puneñas, siendo Patrimonio Inmaterial de la Humanidad.",
        text_en: "One of its most colorful festivities is the Candelaria, recognized for its cultural syncretism and Puno dances, being an Intangible Cultural Heritage of Humanity.",
      },
      {
        difficulty: "hard",
        text_es: "Es el segundo productor mundial y exportador de espárragos, superado solo por China.",
        text_en: "It is the world's second-largest producer and exporter of asparagus, surpassed only by China.",
      },
      {
        difficulty: "medium",
        text_es: "En su territorio se encuentra el lago navegable a mayor altitud del mundo, compartido con una nación vecina.",
        text_en: "Within its territory lies the highest navigable lake in the world, shared with a neighboring nation.",
      },
      {
        difficulty: "easy",
        text_es: "Es un país sudamericano conocido por ser cuna de una de las civilizaciones prehispánicas más importantes de la historia.",
        text_en: "It is a South American country known as the cradle of one of the most important pre-Hispanic civilizations in history.",
      },
    ],
  },
  {
    id: 59,
    name: "Colombia",
    name_en: "Colombia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geológicas notables es el 'Cañón del Chicamocha', un accidente geográfico que a menudo se compara con el Gran Cañón, pero es el segundo cañón más grande de su continente.",
        text_en: "One of its notable geological formations is the 'Chicamocha Canyon,' a geographical feature often compared to the Grand Canyon but is the second-largest canyon on its continent.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país de América del Sur que cuenta con costas tanto en el océano Pacífico como en el mar Caribe, ofreciendo una amplia diversidad de ecosistemas marinos.",
        text_en: "It is the only country in South America to have coastlines on both the Pacific Ocean and the Caribbean Sea, offering a wide diversity of marine ecosystems.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los países con mayor biodiversidad del mundo, albergando una asombrosa variedad de especies de flora y fauna, incluyendo una gran cantidad de aves endémicas.",
        text_en: "It is one of the most biodiverse countries in the world, home to an astonishing variety of flora and fauna species, including a large number of endemic birds.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el noroeste de América del Sur y es conocido por sus famosas esmeraldas y su producción de café de alta calidad.",
        text_en: "It is located in the northwest of South America and is known for its famous emeralds and high-quality coffee production.",
      },
    ],
  },
  {
    id: 60,
    name: "Venezuela",
    name_en: "Venezuela",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geológicas más prominentes es una meseta de arenisca que ha inspirado la obra \"El Mundo Perdido\".",
        text_en: "One of its most prominent geological formations is a sandstone plateau that inspired the work 'The Lost World'.",
      },
      {
        difficulty: "hard",
        text_es: "Es el hogar de una especie de delfín de río rosado, que nada en uno de sus grandes sistemas fluviales.",
        text_en: "It is home to a species of pink river dolphin, which swims in one of its large river systems.",
      },
      {
        difficulty: "medium",
        text_es: "Posee una de las reservas de hidrocarburos más grandes del mundo, concentradas en una cuenca occidental.",
        text_en: "It possesses one of the world's largest hydrocarbon reserves, concentrated in a western basin.",
      },
      {
        difficulty: "easy",
        text_es: "En este país se encuentra la cascada de caída libre más alta del mundo.",
        text_en: "The world's highest uninterrupted waterfall is located in this country.",
      },
    ],
  },
  {
    id: 61,
    name: "Cuba",
    name_en: "Cuba",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución de 1976 identificó al marxismo-leninismo como la base filosófica del estado, un concepto que fue revisado en un referéndum constitucional en 2019.",
        text_en: "Its 1976 constitution identified Marxism-Leninism as the philosophical basis of the state, a concept that was revised in a 2019 constitutional referendum.",
      },
      {
        difficulty: "hard",
        text_es: "Este archipiélago alberga la cueva más larga de la región caribeña, con más de 30 kilómetros de galerías interconectadas.",
        text_en: "This archipelago is home to the longest cave system in the Caribbean region, featuring over 30 kilometers of interconnected galleries.",
      },
      {
        difficulty: "medium",
        text_es: "Es un importante productor de níquel y también se destaca por su producción de un producto agrícola de hoja cuyo procesamiento es culturalmente significativo.",
        text_en: "It is a significant producer of nickel and is also noted for its production of a leafy agricultural product whose processing is culturally significant.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación insular caribeña es conocida por su sistema de salud, que ha desplegado misiones médicas internacionales en diversas partes del mundo.",
        text_en: "This Caribbean island nation is renowned for its healthcare system, which has deployed international medical missions to various parts of the world.",
      },
    ],
  },
  {
    id: 62,
    name: "República Dominicana",
    name_en: "Dominican Republic",
    hints: [
      {
        difficulty: "expert",
        text_es: "Comparte superficie terrestre con un solo vecino, y se rumorea que el pico más alto de todas las Antillas se encuentra en su territorio, aunque mediciones históricas difieren.",
        text_en: "It shares landmass with only one neighbor, and the highest peak in all the Antilles is rumored to be within its territory, although historical measurements differ.",
      },
      {
        difficulty: "hard",
        text_es: "Es un productor significativo de cacao y uno de los principales exportadores de cigars hechos a mano en el mundo, ubicándose en las Antillas Mayores.",
        text_en: "It is a significant producer of cocoa and one of the world's leading exporters of handmade cigars, located in the Greater Antilles.",
      },
      {
        difficulty: "medium",
        text_es: "Su porción de tierra ocupa aproximadamente dos tercios de una isla caribeña compartida. Su clima es tropical, y es uno de los destinos turísticos más populares del Caribe.",
        text_en: "Its land portion occupies approximately two-thirds of a shared Caribbean island. Its climate is tropical, and it is one of the most popular tourist destinations in the Caribbean.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Caribe, al este de una gran isla con un nombre similar al de un pequeño animal acuático y al oeste de un territorio de ultramar francés.",
        text_en: "It is located in the Caribbean, east of a large island with a name similar to a small aquatic animal and west of a French overseas territory.",
      },
    ],
  },
  {
    id: 63,
    name: "Jamaica",
    name_en: "Jamaica",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su Parque Nacional Blue and John Crow Mountains es un sitio Patrimonio de la Humanidad mixto.",
        text_en: "Its Blue and John Crow Mountains National Park is a mixed World Heritage Site.",
      },
      {
        difficulty: "hard",
        text_es: "Experimenta un clima tropical de sabana, con temperaturas constantes y una temporada de lluvias bien definida.",
        text_en: "It experiences a tropical savanna climate, with consistent temperatures and a well-defined wet season.",
      },
      {
        difficulty: "medium",
        text_es: "Es el tercer país angloparlante más poblado de su región insular.",
        text_en: "It is the third most populous English-speaking country in its island region.",
      },
      {
        difficulty: "easy",
        text_es: "Es un destino turístico insular ubicado en el mar Caribe, conocido por su cultura musical.",
        text_en: "It is an island tourist destination located in the Caribbean Sea, known for its musical culture.",
      },
    ],
  },
  {
    id: 64,
    name: "Costa Rica",
    name_en: "Costa Rica",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su legislación prohíbe la existencia de zoológicos con fines comerciales desde 2013, buscando la reubicación de los animales en santuarios o la liberación en áreas naturales.",
        text_en: "Its legislation prohibits commercial zoos since 2013, seeking the relocation of animals to sanctuaries or release into natural areas.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los pocos estados soberanos en el mundo que abolió permanentemente su ejército y redirigió esos recursos hacia la educación, la salud y la protección ambiental.",
        text_en: "It is one of the few sovereign states in the world that permanently abolished its army and redirected those resources towards education, health, and environmental protection.",
      },
      {
        difficulty: "medium",
        text_es: "Tiene un lema nacional asociado a un estilo de vida que promueve la felicidad, la salud y la paz, ampliamente utilizado en el habla coloquial.",
        text_en: "It has a national motto associated with a lifestyle that promotes happiness, health, and peace, widely used in colloquial speech.",
      },
      {
        difficulty: "easy",
        text_es: "Reconocido por su extraordinaria biodiversidad, alberga aproximadamente el 5% de las especies del planeta, a pesar de ocupar una fracción diminuta de la superficie terrestre mundial.",
        text_en: "Recognized for its extraordinary biodiversity, it hosts approximately 5% of the planet's species, despite occupying a tiny fraction of the world's land surface.",
      },
    ],
  },
  {
    id: 65,
    name: "Panamá",
    name_en: "Panama",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los tres lugares del mundo que da nombre a una especie de 'mantis religiosa palo' (mantoida maya), junto con otra en la Amazonía y una más en el sudeste asiático.",
        text_en: "It is one of only three places in the world that gives its name to a species of 'stick mantis' (mantoida maya), along with another in the Amazon and one more in Southeast Asia.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio fue una vez el sitio de 'Castilla del Oro', una de las primeras jurisdicciones coloniales fundadas en el continente americano.",
        text_en: "Its territory was once the site of 'Castilla del Oro' (Golden Castile), one of the earliest colonial jurisdictions founded on the American continent.",
      },
      {
        difficulty: "medium",
        text_es: "Su punto más estrecho entre cuerpos de agua importantes fue un factor crucial para un proyecto monumental que transformó el comercio global.",
        text_en: "Its narrowest point between major bodies of water was a crucial factor for a monumental project that transformed global trade.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el extremo sur de un subcontinente y forma un puente natural, siendo su territorio continental un límite entre dos masas de agua oceánicas.",
        text_en: "It is located at the southern tip of a subcontinent and forms a natural bridge, with its mainland territory bordering two oceanic bodies of water.",
      },
    ],
  },
  {
    id: 66,
    name: "Uruguay",
    name_en: "Uruguay",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su topografía se caracteriza por ser predominantemente de planicies onduladas y colinas bajas, con una elevación media de aproximadamente 110 metros sobre el nivel del mar.",
        text_en: "Its topography is characterized by predominantly rolling plains and low hills, with an average elevation of approximately 110 meters above sea level.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los tres estados soberanos que abarca la Cuenca del Plata, con acceso directo al litoral de dicho estuario.",
        text_en: "It is one of the three sovereign states that encompass the Río de la Plata Basin, with direct access to the estuary's coastline.",
      },
      {
        difficulty: "medium",
        text_es: "Ha sido un pionero en la legalización de ciertas sustancias recreativas a nivel nacional, siendo un referente en debate y políticas innovadoras.",
        text_en: "It has been a pioneer in the national legalization of certain recreational substances, serving as a reference in innovative policies and debates.",
      },
      {
        difficulty: "easy",
        text_es: "Es el segundo país más pequeño de Sudamérica en extensión territorial.",
        text_en: "It is the second smallest country in South America by land area.",
      },
    ],
  },
  {
    id: 67,
    name: "Paraguay",
    name_en: "Paraguay",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su topografía es notablemente asimétrica, con una región occidental que comprende una porción significativa del Chaco, y una región oriental caracterizada por sabanas y elevaciones modestas.",
        text_en: "Its topography is notably asymmetrical, with a western region comprising a significant portion of the Chaco, and an eastern region characterized by savannas and modest elevations.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los dos únicos países de su continente que no tiene litoral marino y su economía se apoya fuertemente en la agricultura y la hidroelectricidad, exportando una cantidad considerable de energía a sus vecinos.",
        text_en: "It is one of only two landlocked countries in its continent, and its economy relies heavily on agriculture and hydroelectricity, exporting a considerable amount of power to its neighbors.",
      },
      {
        difficulty: "medium",
        text_es: "En este territorio se encuentra la mayor parte de un acuífero transfronterizo vital para la región, y sus humedales son hogar de una biodiversidad excepcional.",
        text_en: "The greater part of a vital cross-border aquifer for the region is located in this territory, and its wetlands are home to exceptional biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Comparte una de las mayores represas hidroeléctricas del mundo con una nación vecina, la cual es una fuente principal de su energía eléctrica.",
        text_en: "It shares one of the world's largest hydroelectric dams with a neighboring nation, which is a primary source of its electrical power.",
      },
    ],
  },
  {
    id: 68,
    name: "Bolivia",
    name_en: "Bolivia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus lunas fue 'descubierta' por un sismógrafo en la estación de Amayapampa, confundida erróneamente con un evento sísmico provocado por pruebas nucleares, antes de determinarse su origen astrofísico en la década de 1970.",
        text_en: "One of its 'moons' was 'discovered' by a seismograph at the Amayapampa station, mistakenly confused with a seismic event caused by nuclear tests, before its astrophysical origin was determined in the 1970s.",
      },
      {
        difficulty: "hard",
        text_es: "Es el hogar de una variedad de aves que anidan en acantilados de barro, conocidas localmente como 'Lorito de Cara Roja', una especie endémica que ha sido objeto de intensos esfuerzos de conservación.",
        text_en: "It is home to a variety of cliff-nesting birds, locally known as the 'Red-fronted Macaw', an endemic species that has been the subject of intense conservation efforts.",
      },
      {
        difficulty: "medium",
        text_es: "Posee la reserva de agua dulce no compartida más extensa del orbe, que se encuentra a gran altitud, y alberga una biodiversidad acuática única.",
        text_en: "It possesses the most extensive unshared freshwater reserve on the globe, located at high altitude, and harbors unique aquatic biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Este país andino no tiene salida al mar y comparte límites con un total de cinco naciones, lo que históricamente ha influido en su geopolítica regional.",
        text_en: "This Andean country is landlocked and shares borders with a total of five nations, which has historically influenced its regional geopolitics.",
      },
    ],
  },
  {
    id: 69,
    name: "Ecuador",
    name_en: "Ecuador",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución fue la primera en reconocer los derechos de la naturaleza como entidad con derechos propios.",
        text_en: "Its constitution was the first to recognize the rights of nature as an entity with its own rights.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los países con mayor diversidad de colibríes en el mundo, albergando aproximadamente el 50% de las especies conocidas.",
        text_en: "It is one of the countries with the greatest diversity of hummingbirds in the world, hosting approximately 50% of known species.",
      },
      {
        difficulty: "medium",
        text_es: "Su territorio continental es atravesado por la línea ecuatorial, dándole nombre a la república.",
        text_en: "Its continental territory is crossed by the equator line, giving the republic its name.",
      },
      {
        difficulty: "easy",
        text_es: "Es conocido por ser el principal exportador mundial de un tipo específico de banano.",
        text_en: "It is known for being the world's leading exporter of a specific type of banana.",
      },
    ],
  },
  {
    id: 70,
    name: "Nueva Zelanda",
    name_en: "New Zealand",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus lunas es conocida como 'The Forgotten Continent' debido a su historia geológica ligada a un continente sumergido.",
        text_en: "One of its landmasses is known as 'The Forgotten Continent' due to its geological history linked to a submerged continent.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los tres estados soberanos que tienen el nombre de su capital con la misma ortografía que el sustantivo que describe a sus habitantes en su idioma oficial.",
        text_en: "It is one of only three sovereign states whose capital city shares the same spelling as the noun describing its inhabitants in its official language.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en el Anillo de Fuego del Pacífico, presenta una notable actividad geotérmica y volcánica.",
        text_en: "Located on the Pacific Ring of Fire, it exhibits significant geothermal and volcanic activity.",
      },
      {
        difficulty: "easy",
        text_es: "Está compuesto por dos islas principales y varias islas más pequeñas en el suroeste del Océano Pacífico.",
        text_en: "It is comprised of two main islands and numerous smaller islands in the southwestern Pacific Ocean.",
      },
    ],
  },
  {
    id: 71,
    name: "Finlandia",
    name_en: "Finland",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país de la Unión Europea cuya especie de mariposa nacional se encuentra en grave peligro de extinción, el Parnassius apollo butleri.",
        text_en: "It is the only European Union country whose national butterfly species, the Parnassius apollo butleri, is critically endangered.",
      },
      {
        difficulty: "hard",
        text_es: "Su sistema de educación superior ha sido pionero en la implementación de un modelo de 'universidad de aplicación', enfocado en la investigación aplicada y el desarrollo regional.",
        text_en: "Its higher education system has pioneered the implementation of an 'applied sciences university' model, focused on applied research and regional development.",
      },
      {
        difficulty: "medium",
        text_es: "Una gran parte de su territorio se extiende por encima del Círculo Polar Ártico, lo que le otorga el fenómeno del sol de medianoche en verano y noches polares en invierno.",
        text_en: "A significant portion of its territory extends above the Arctic Circle, granting it the phenomenon of the midnight sun in summer and polar nights in winter.",
      },
      {
        difficulty: "easy",
        text_es: "Limita al este con un estado post-soviético de gran tamaño y al oeste con una nación escandinava conocida por sus fiordos.",
        text_en: "It is bordered to the east by a large post-Soviet state and to the west by a Scandinavian nation renowned for its fjords.",
      },
    ],
  },
  {
    id: 72,
    name: "Dinamarca",
    name_en: "Denmark",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su territorio continental fue el primero en abolir legalmente el comercio de esclavos transatlántico en 1792, aunque la prohibición no entró en vigor hasta 1803 en sus colonias.",
        text_en: "Its continental territory was the first to legally abolish the transatlantic slave trade in 1792, though the ban didn't come into effect until 1803 in its colonies.",
      },
      {
        difficulty: "hard",
        text_es: "La nación cuenta con una de las flotas de buques mercantes más grandes del mundo en relación con su PIB, facilitando un comercio marítimo extenso.",
        text_en: "The nation possesses one of the world's largest merchant fleets relative to its GDP, facilitating extensive maritime trade.",
      },
      {
        difficulty: "medium",
        text_es: "Históricamente, es reconocido por haber mantenido la línea de sucesión monárquica más antigua de Europa de forma ininterrumpida.",
        text_en: "Historically, it is recognized for maintaining Europe's oldest continuous monarchical line of succession.",
      },
      {
        difficulty: "easy",
        text_es: "Es un país nórdico cuyas principales formaciones terrestres se encuentran en una península que se extiende hacia el norte desde el continente europeo.",
        text_en: "It is a Nordic country whose primary landforms are situated on a peninsula extending northward from mainland Europe.",
      },
    ],
  },
  {
    id: 73,
    name: "Irlanda",
    name_en: "Ireland",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su topografía influyó significativamente en el desarrollo de la investigación de turberas y la industria asociada, siendo un líder en la extracción de este recurso.",
        text_en: "Its topography significantly influenced the development of peatland research and the associated industry, being a leader in the extraction of this resource.",
      },
      {
        difficulty: "hard",
        text_es: "Es reconocido por su contribución a la literatura mundial, y un autor laureado de allí rechazó el nombramiento como Senador, argumentando que no podría cumplir con sus deberes debido a su creciente ceguera, aunque algunos especulan que fue por su dedicación a la escritura.",
        text_en: "It is recognized for its contribution to world literature, and a laureate author from there declined appointment as a Senator, arguing he could not fulfill his duties due to his increasing blindness, though some speculate it was due to his dedication to writing.",
      },
      {
        difficulty: "medium",
        text_es: "La mayor parte de la masa terrestre de esta nación se encuentra en una isla occidental de Europa.",
        text_en: "The majority of this nation's landmass is located on a western European island.",
      },
      {
        difficulty: "easy",
        text_es: "Es conocida por sus paisajes verdes exuberantes y la leyenda de pequeños seres mitológicos que esconden oro al final del arcoíris.",
        text_en: "It is known for its lush green landscapes and the legend of small mythological beings who hide gold at the end of the rainbow.",
      },
    ],
  },
  {
    id: 74,
    name: "Croacia",
    name_en: "Croatia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de sus formaciones geológicas subterráneas alberga un escarabajo endémico llamado 'Anophthalmus hitleri'.",
        text_en: "One of its subterranean geological formations is home to an endemic beetle named 'Anophthalmus hitleri'.",
      },
      {
        difficulty: "hard",
        text_es: "Es conocido por su diversidad de karst, incluyendo más de 1.200 islas, islotes y rocas costeras a lo largo de su costa adriática.",
        text_en: "It is known for its karst diversity, including over 1,200 islands, islets, and coastal rocks along its Adriatic coast.",
      },
      {
        difficulty: "medium",
        text_es: "Ha contribuido significativamente al desarrollo de la corbata como accesorio de moda global.",
        text_en: "It has significantly contributed to the development of the necktie as a global fashion accessory.",
      },
      {
        difficulty: "easy",
        text_es: "Este país de Europa del Sudeste tiene una costa extensa y compleja en el mar Adriático, frente a la Península Itálica.",
        text_en: "This Southeast European country features an extensive and complex coastline on the Adriatic Sea, opposite the Italian Peninsula.",
      },
    ],
  },
  {
    id: 75,
    name: "Serbia",
    name_en: "Serbia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los dos países sin salida al mar con 'B' en su código ISO 3166-1 alpha-2, si se considera el estatus disputado de su antigua provincia del sur.",
        text_en: "It is one of only two landlocked countries with 'B' in its ISO 3166-1 alpha-2 code, considering the disputed status of its former southern province.",
      },
      {
        difficulty: "hard",
        text_es: "Una parte significativa de su territorio se encuentra en la región geográfica de los Balcanes, y tiene una tradición de fuerte producción de ciruelas, siendo un exportador considerable de estas.",
        text_en: "A significant portion of its territory lies within the Balkan geographical region, and it has a strong tradition of plum production, being a considerable exporter of them.",
      },
      {
        difficulty: "medium",
        text_es: "Este país ha sido históricamente un puente entre Oriente y Occidente, con influencias culturales significativas de ambos, y su lengua oficial utiliza dos alfabetos.",
        text_en: "This country has historically been a bridge between East and West, with significant cultural influences from both, and its official language uses two alphabets.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en Europa Sudoriental, este país no tiene acceso al mar y ha experimentado cambios territoriales significativos a lo largo de la historia reciente de los Balcanes.",
        text_en: "Located in Southeast Europe, this country is landlocked and has undergone significant territorial changes throughout the recent history of the Balkans.",
      },
    ],
  },
  {
    id: 76,
    name: "Mongolia",
    name_en: "Mongolia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una especie de rata campañola, la Myospalax aspalax, es endémica de este país.",
        text_en: "A species of zokor, Myospalax aspalax, is endemic to this country.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los dos países sin salida al mar en el mundo que limita con dos grandes potencias nucleares.",
        text_en: "It is one of only two landlocked countries in the world that borders two major nuclear powers.",
      },
      {
        difficulty: "medium",
        text_es: "Es el país soberano con la densidad de población más baja del mundo.",
        text_en: "It is the world's most sparsely populated sovereign country.",
      },
      {
        difficulty: "easy",
        text_es: "Gran parte de su territorio está cubierta por estepas y la parte sur por un gran desierto.",
        text_en: "Much of its territory is covered by steppes, and the southern part by a large desert.",
      },
    ],
  },
  {
    id: 77,
    name: "Camboya",
    name_en: "Cambodia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los países con el mayor porcentaje de población que sigue el theravada, una rama antigua de una filosofía específica, con un número de seguidores solo comparable en unos pocos territorios del sudeste asiático y Sri Lanka.",
        text_en: "It is one of the countries with the highest percentage of its population adhering to Theravada, an ancient branch of a specific philosophy, with a number of followers only comparable in a few Southeast Asian territories and Sri Lanka.",
      },
      {
        difficulty: "hard",
        text_es: "Su sistema de escritura deriva del granas, una variante meridional de sistemas de escritura brahmicos, utilizando un alfabeto de abugida que influyó en otras escrituras de la región.",
        text_en: "Its writing system derives from Grantha, a southern variant of Brahmi scripts, using an abugida alphabet that influenced other scripts in the region.",
      },
      {
        difficulty: "medium",
        text_es: "Un importante curso de agua asiático atraviesa la parte oriental del territorio antes de desembocar en un gran cuerpo de agua en el sur.",
        text_en: "A major Asian waterway flows through the eastern part of the territory before emptying into a large body of water to the south.",
      },
      {
        difficulty: "easy",
        text_es: "Limita con tres naciones del sudeste asiático continental y posee una costa en un golfo que es una entrada del Mar de China Meridional.",
        text_en: "It borders three mainland Southeast Asian nations and has a coastline on a gulf that is an inlet of the South China Sea.",
      },
    ],
  },
  {
    id: 78,
    name: "Bután",
    name_en: "Bhutan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución establece que debe mantener al menos el 60% de su superficie terrestre cubierta por bosques.",
        text_en: "Its constitution mandates that it must maintain at least 60% of its land area under forest cover.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país del mundo donde la medida del éxito de desarrollo se conceptualiza como 'Felicidad Nacional Bruta'.",
        text_en: "It is the only country in the world where the measure of development success is conceptualized as 'Gross National Happiness'.",
      },
      {
        difficulty: "medium",
        text_es: "Este reino en el Himalaya es conocido por su terreno montañoso, con densos bosques que cubren gran parte de su geografía.",
        text_en: "This Himalayan kingdom is known for its mountainous terrain, with dense forests covering much of its geography.",
      },
      {
        difficulty: "easy",
        text_es: "Tradicionalmente aislado del mundo exterior, este pequeño país experimentó la introducción de la televisión e internet apenas en el año 1999.",
        text_en: "Traditionally isolated from the outside world, this small country experienced the introduction of television and the internet only in 1999.",
      },
    ],
  },
  {
    id: 79,
    name: "Luxemburgo",
    name_en: "Luxembourg",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su sistema de banca privada, establecido bajo estrictas leyes de secreto bancario, fue un factor clave en su desarrollo económico en el siglo XX.",
        text_en: "Its private banking system, established under strict banking secrecy laws, was a key factor in its economic development in the 20th century.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los pocos estados soberanos en el mundo que es un gran ducado.",
        text_en: "It is one of the few sovereign states in the world that is a grand duchy.",
      },
      {
        difficulty: "medium",
        text_es: "A pesar de su tamaño, desempeñó un papel significativo en la fundación de varias instituciones europeas importantes.",
        text_en: "Despite its size, it played a significant role in the founding of several important European institutions.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en Europa occidental y es uno de los países más pequeños del continente.",
        text_en: "It is located in Western Europe and is one of the continent's smallest countries.",
      },
    ],
  },
  {
    id: 80,
    name: "Mónaco",
    name_en: "Monaco",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su área original fue el doble de la actual, antes de que Francia anexara Menton y Roquebrune en 1861.",
        text_en: "Its original area was twice its current size, before France annexed Menton and Roquebrune in 1861.",
      },
      {
        difficulty: "hard",
        text_es: "Posee una de las dos únicas colonias de focas monje del Mediterráneo, aunque esta población es muy pequeña y está en peligro crítico.",
        text_en: "It hosts one of only two Mediterranean monk seal colonies in the Mediterranean, although this population is very small and critically endangered.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los tres estados soberanos que forman la costa Azul o Riviera Francesa.",
        text_en: "It is one of three sovereign states that form the French Riviera or Côte d'Azur.",
      },
      {
        difficulty: "easy",
        text_es: "Es el segundo estado soberano más pequeño del mundo.",
        text_en: "It is the second smallest sovereign state in the world.",
      },
    ],
  },
];
