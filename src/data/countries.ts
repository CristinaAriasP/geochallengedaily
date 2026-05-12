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
        text_es: "Es el país con la mayor concentración de empresas con más de mil años de antigüedad del mundo. Existe incluso una palabra específica en su idioma para referirse a estas compañías que han sobrevivido a siglos de historia, guerras y desastres naturales.",
        text_en: "It is the country with the highest concentration of companies with over a thousand years of history in the world. There is even a specific word in its language to refer to these companies that have survived centuries of history, wars, and natural disasters.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio está compuesto por miles de islas, pero la gran mayoría están deshabitadas. Además, se asienta sobre la unión de cuatro placas tectónicas diferentes, lo que provoca que sea una de las zonas con mayor actividad sísmica del planeta.",
        text_en: "Its territory is composed of thousands of islands, but the vast majority are uninhabited. Additionally, it sits on the union of four different tectonic plates, causing it to be one of the most seismically active regions on the planet.",
      },
      {
        difficulty: "medium",
        text_es: "Aunque hoy se consume de mil formas, originalmente su plato más famoso nació como comida rápida callejera que se vendía en puestos desmontables. Además, en este país se inventó la luz LED azul y el sistema de códigos QR.",
        text_en: "Although it is consumed in many ways today, its most famous dish originated as a street food that was sold from portable stalls. Additionally, this country invented the blue LED light and the QR code system.",
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
        text_es: "Posee una de las costas más largas y accidentadas del mundo debido a miles de entradas de mar profundas talladas por glaciares. Además, es el hogar del túnel de carretera más largo del planeta, que mide más de 24 kilómetros y tiene una iluminación especial para evitar que los conductores se duerman.",
        text_en: "It has one of the longest and most rugged coastlines in the world due to thousands of deep fjord entries carved by glaciers. Additionally, it is home to the world's longest road tunnel, which is over 24 kilometers long and has special lighting to prevent driver drowsiness.",
      },
      {
        difficulty: "hard",
        text_es: "Este país es el mayor exportador de salmón del mundo, pero lo más curioso es que ellos fueron quienes introdujeron este pescado en la gastronomía de otro país asiático muy lejano en los años 80; antes de eso, allí no se usaba ese ingrediente para el consumo crudo.",
        text_en: "It is the largest exporter of salmon in the world, but what is most interesting is that they were the ones who introduced this fish into the cuisine of another distant Asian country in the 1980s; before that, it was not used as a raw ingredient there.",
      },
      {
        difficulty: "medium",
        text_es: "Son los inventores de un utensilio de cocina básico: el rebanador de queso (ostehøvel). En cuanto a su comida, es muy típico un tipo de queso de color marrón con sabor a caramelo que se elabora con el suero de la leche.",
        text_en: "They are the inventors of a basic kitchen utensil: the cheese slicer (ostehøvel). As for their food, a type of brown, caramel-flavored cheese made from whey is very typical.",
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
        text_es: "Es el país con la mayor comunidad de ciudadanos de origen japonés fuera de las propias islas de ese país asiático. Esta migración comenzó a principios del siglo XX y ha influido profundamente en la agricultura y la cultura de sus ciudades más grandes.",
        text_en: "It is the country with the largest community of Japanese-origin citizens outside of Japan itself. This migration began in the early 20th century and has profoundly influenced agriculture and culture in its largest cities.",
      },
      {
        difficulty: "hard",
        text_es: "En su territorio se encuentra una isla donde está prohibido desembarcar porque tiene la mayor densidad de serpientes venenosas del mundo (se calcula que hay una por cada metro cuadrado). Además, cuenta con un desierto único cuyas dunas se llenan de lagunas de agua cristalina durante la época de lluvias.",
        text_en: "Within its territory lies an island where landing is prohibited due to its high density of venomous snakes (estimated at one per square meter). It also boasts a unique desert whose dunes fill with crystal-clear lagoons during the rainy season.",
      },
      {
        difficulty: "medium",
        text_es: "Es el mayor productor mundial de café desde hace más de 150 años. Uno de sus inventos más curiosos es el sistema de identificación por huellas dactilares tal y como lo conocemos hoy para uso civil, desarrollado por un investigador local a finales del siglo XIX.",
        text_en: "It is the largest coffee producer in the world, having held this position for over 150 years. One of its most curious inventions is the fingerprint identification system as we know it today for civil use, developed by a local researcher at the end of the 19th century.",
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
        text_es: "Es el país con la mayor población de lengua árabe del mundo y su industria cinematográfica y musical es tan potente que su dialecto es el más comprendido en toda la región, funcionando como una especie de \"Hollywood\" cultural para sus vecinos.",
        text_en: "It is the country with the largest population of Arabic speakers in the world, and its film and music industries are so powerful that its dialect is the most widely understood in the region, functioning as a kind of \"Hollywood\" cultural hub for its neighbors.",
      },
      {
        difficulty: "hard",
        text_es: "Más del 95% de su territorio es desierto inhabitable. Por eso, casi toda su población vive concentrada en una franja de tierra que representa menos del 5% del área total del país, creando una de las densidades demográficas más extremas del planeta en esas zonas específicas.",
        text_en: "More than 95% of its territory is uninhabitable desert. Therefore, almost all of its population lives concentrated in a strip of land that represents less than 5% of the country's total area, creating one of the most extreme demographic densities on the planet in those specific zones.",
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
        text_es: "Es el único país del mundo que una vez le declaró la \"guerra\" formal a una especie de ave no voladora de gran tamaño porque estaban destruyendo los cultivos. Lo más curioso es que, tras varios intentos militares, las aves terminaron \"ganando\" y el ejército tuvo que retirarse.",
        text_en: "It is the only country in the world that once formally declared war on a species of large flightless bird because they were destroying crops. What is most curious is that, after several military attempts, the birds ended up \"winning\" and the army had to withdraw.",
      },
      {
        difficulty: "hard",
        text_es: "Casi el 90% de su población vive a menos de 50 kilómetros de la costa, dejando un interior inmenso prácticamente vacío. De hecho, existe una propiedad privada (una estación ganadera) en este país que es más grande que todo el territorio de Bélgica.",
        text_en: "Nearly 90% of its population lives within 50 kilometers of the coast, leaving a vast interior practically uninhabited. In fact, there is a private property (a cattle station) in this country that is larger than the entire territory of Belgium.",
      },
      {
        difficulty: "medium",
        text_es: "En este país se inventó la tecnología Wi-Fi moderna y la \"caja negra\" de los aviones. Su exportación gastronómica más curiosa es una pasta para untar de color oscuro, salada y con sabor muy intenso, elaborada a partir de extracto de levadura, que divide a la gente entre los que la aman y los que la odian.",
        text_en: "This country invented modern Wi-Fi technology and the airplane 'black box'. Its most curious gastronomic export is a dark-colored, salty, and intensely flavored spread made from yeast extract, which divides people into those who love it and those who hate it.",
      },
      {
        difficulty: "easy",
        text_es: "Es famoso por su cultura de surf y por tener una fauna única en el mundo, incluyendo muchos de los animales más venenosos del planeta. Su bandera es azul, incluye la bandera de otro país en una esquina y muestra un conjunto de estrellas que representan una constelación del hemisferio sur.",
        text_en: "It is famous for its surf culture and for having unique wildlife, including many of the most venomous animals on the planet. Its flag is blue, includes the flag of another country in one corner, and displays a cluster of stars representing a constellation in the southern hemisphere.",
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
        text_es: 'Es el país con el mayor número de sitios declarados Patrimonio de la Humanidad por la UNESCO en todo el mundo. Además, dentro de sus fronteras existen dos estados independientes y soberanos que son los más pequeños del planeta, lo que lo convierte en un país que "envuelve" a otros dos.',
        text_en: 'It is the country with the most UNESCO World Heritage sites in the world. Furthermore, within its borders lie two independent and sovereign states that are the smallest on the planet, making it a country that essentially "envelops" two others.',
      },
      {
        difficulty: "hard",
        text_es: "Aquí se inventaron el piano, la radio, la batería eléctrica (pila) y el helado moderno. En su gastronomía, existe una regla no escrita muy estricta: nunca se debe pedir un café con leche después de las 11 de la mañana, ya que se considera solo una bebida de desayuno.",
        text_en: "Here, the piano, radio, electric battery (battery), and modern ice cream were invented. In its cuisine, there is a very strict unwritten rule: one should never order a coffee with milk after 11 in the morning, as it is considered a breakfast-only drink.",
      },
      {
        difficulty: "medium",
        text_es: "Es el único país de la Europa continental que tiene volcanes activos. De hecho, uno de ellos es el más alto y activo de todo el continente, y su forma de bota está flanqueada por cinco mares diferentes que forman parte de uno más grande.",
        text_en: "It is the only country in continental Europe that has active volcanoes. In fact, one of them is the highest and most active in the entire continent, and its boot-shaped form is flanked by five different seas that form part of a larger one.",
      },
      {
        difficulty: "easy",
        text_es: "Su estilo de vida es famoso por el concepto de 'no hacer nada' (il dolce far niente) y por su influencia masiva en la moda de lujo y el diseño automovilístico. Su bandera consta de tres franjas verticales de colores verde, blanco y rojo.",
        text_en: "Its lifestyle is famous for the concept of 'doing nothing' (il dolce far niente) and its massive influence on luxury fashion and automotive design. Its flag consists of three vertical stripes of green, white, and red.",
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
        text_es: "Este país es el mayor exportador de plata del mundo. Además, su capital está construida sobre lo que antes era un enorme lago; debido a esto, la ciudad se hunde unos centímetros cada año, lo que supone un reto constante para la ingeniería y la arquitectura de sus edificios históricos.",
        text_en: "This country is the world's largest exporter of silver. Furthermore, its capital is built on what was once a vast lake; because of this, the city sinks a few centimeters each year, posing a constant challenge to the engineering and architecture of its historic buildings.",
      },
      {
        difficulty: "hard",
        text_es: "Posee la pirámide más grande del mundo en cuanto a volumen de base (aunque gran parte está oculta bajo una montaña y una iglesia). También cuenta con un lugar único donde millones de mariposas migran cada año desde miles de kilómetros de distancia para pasar el invierno en sus bosques de oyamel.",
        text_en: "It is home to the largest pyramid in the world by base volume (although much of it is hidden under a mountain and a church). It also has a unique location where millions of butterflies migrate each year from thousands of kilometers away to spend the winter in its fir forests.",
      },
      {
        difficulty: "medium",
        text_es: "En este país se inventó la televisión a color y la píldora anticonceptiva. Su gastronomía es tan compleja que fue la primera en ser nombrada Patrimonio de la Humanidad; entre sus ingredientes más curiosos está un hongo que crece en el maíz, considerado un manjar, y el uso de chocolate en salsas saladas para carne.",
        text_en: "It is home to the invention of color television and the birth control pill. Its cuisine is so complex that it was the first to be named a UNESCO World Heritage Site; among its most curious ingredients is a mushroom that grows on corn, considered a delicacy, and the use of chocolate in savory sauces for meat.",
      },
      {
        difficulty: "easy",
        text_es: "Tienen una relación muy especial y alegre con la muerte, celebrándola con altares llenos de flores naranjas y calaveras de azúcar. Su bandera tiene tres franjas verticales con un escudo central que muestra un águila devorando a una serpiente sobre un cactus.",
        text_en: "They have a very special and joyful relationship with death, celebrating it with altars adorned with orange flowers and sugar skulls. Their flag features three vertical stripes with a central shield depicting an eagle devouring a snake atop a cactus.",
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
        text_es: "Es el país que abarca más zonas horarias diferentes en todo el planeta (un total de 12), debido a sus numerosos territorios e islas repartidos por todos los océanos del mundo. Esto supera incluso a gigantes como Rusia o Estados Unidos.",
        text_en: "It is the country that spans the most different time zones on the planet (a total of 12), due to its numerous territories and islands scattered across the world's oceans. This surpasses even giants like Russia or the United States.",
      },
      {
        difficulty: "hard",
        text_es: "Aunque la mayoría de su territorio está en Europa, su frontera terrestre más larga no es con un país europeo, sino con un país de América del Sur, debido a uno de sus departamentos de ultramar que es selva tropical casi en su totalidad.",
        text_en: "Although most of its territory is in Europe, its longest land border is not with a European country, but with a South American country, due to one of its overseas departments that is almost entirely tropical rainforest.",
      },
      {
        difficulty: "medium",
        text_es: "En este lugar se inventaron el sistema Braille, el estetoscopio y el cine. Su gastronomía es famosa por tener más de 1.600 variedades de quesos distintos y por una ley que prohíbe a los supermercados tirar comida, obligándolos a donarla a organizaciones benéficas.",
        text_en: "It is home to the invention of the Braille system, the stethoscope, and cinema. Its cuisine is famous for having over 1,600 different types of cheese and for a law that prohibits supermarkets from throwing away food, requiring them to donate it to charitable organizations.",
      },
      {
        difficulty: "easy",
        text_es: "Es conocido mundialmente como el epicentro del arte, la alta costura y la elegancia. Es el país más visitado del mundo cada año.",
        text_en: "It is widely known as the epicenter of art, haute couture, and elegance. It is the most visited country in the world each year.",
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
        text_es: "En su territorio se encuentran, simultáneamente, el punto más alto de todo el hemisferio sur y el punto más bajo. Además, es uno de los pocos lugares del mundo donde algunos glaciares, en lugar de retroceder por el cambio climático, se mantienen estables o avanzan.",
        text_en: "Within its territory lie, simultaneously, the highest and lowest points in the entire Southern Hemisphere. Furthermore, it is one of the few places in the world where some glaciers, instead of retreating due to climate change, are remaining stable or advancing.",
      },
      {
        difficulty: "medium",
        text_es: "Son los inventores del bypass coronario y de los dibujos animados. Su cultura gastronómica gira en torno a una infusión de hojas secas que se bebe en un recipiente especial con una pajita metálica, y que funciona como un ritual social constante.",
        text_en: "They are the inventors of coronary bypass surgery and cartoons. Their culinary culture revolves around an infusion of dried leaves, drunk from a special container with a metal straw, which serves as a constant social ritual.",
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
        text_es: "En su territorio se encuentra el lugar más húmedo de la Tierra, un pueblo que ostenta el récord mundial de precipitaciones anuales. Además, cuenta con un lago formado por el impacto de un meteorito hace 50,000 años que recientemente cambió de color a un rosa brillante de la noche a la mañana debido a unos microorganismos." ,
        text_en: "Within its territory lies the wettest place on Earth, a town that holds the world record for annual rainfall. It also boasts a lake formed by a meteorite impact 50,000 years ago, which recently changed color to a brilliant pink overnight due to microorganisms.", 
      },
      {
        difficulty: "hard",
        text_es: "Es el país con la mayor cantidad de personas vegetarianas del mundo, tanto es así que las cadenas internacionales de comida rápida tienen menús completamente diferentes allí. Además, es el lugar donde se procesan y pulen la gran mayoría de los diamantes que se venden en todo el planeta.",
        text_en: "It is the country with the highest number of vegetarians in the world, so much so that international fast-food chains have completely different menus there. Additionally, it is the place where most of the diamonds sold worldwide are processed and polished.",
      },
      {
        difficulty: "medium",
        text_es: "Este subcontinente es conocido por su vasta diversidad lingüística, con cientos de lenguas indígenas que coexisten, muchas de ellas con sus propios sistemas de escritura En este país se inventó el sistema decimal y el concepto del número cero, además del juego del ajedrez y el champú.",
        text_en: "This subcontinent is known for its vast linguistic diversity, with hundreds of indigenous languages coexisting, many of them with their own writing systems. This country invented the decimal system and the concept of the number zero, as well as the game of chess and shampoo.",
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
        text_es: "Es el país con la mayor cantidad de zoológicos del mundo (más de 400). Además, tienen una tradición cultural muy fuerte de clubes o asociaciones; se estima que hay uno por cada 130 habitantes, cubriendo desde huertos urbanos hasta coleccionismo de lo más extraño.",
        text_en: "It is the nation with the highest number of zoos in the world (over 400). Additionally, they have a strong cultural tradition of clubs or associations; it is estimated that there is one for every 130 inhabitants, covering from urban gardens to collecting the most unusual items.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio está dividido por una frontera geológica invisible: el norte es completamente plano y está a nivel del mar, mientras que el sur es extremadamente montañoso. Además, cuenta con un denso bosque en el suroeste que inspiró gran parte de los cuentos de hadas clásicos que conocemos hoy.",
        text_en: "Its territory is divided by an invisible geological border: the north is completely flat and at sea level, while the south is extremely mountainous. Additionally, it has a dense forest in the southwest that inspired much of the classic fairy tales we know today.",
      },
      {
        difficulty: "medium",
        text_es: "Aquí se inventaron la imprenta de tipos móviles, el motor de combustión, el formato MP3 y la aspirina. En su gastronomía, el pan es casi una religión: tienen más de 300 tipos oficiales y es común que sea el ingrediente principal de la cena, que suele ser una comida fría.",
        text_en: "This is where movable type printing, the internal combustion engine, the MP3 format, and aspirin were invented. In their cuisine, bread is practically a religion: they have over 300 official varieties, and it's commonly the main ingredient in dinner, which is usually a cold meal.",
      },
      {
        difficulty: "easy",
        text_es: "Es famoso por su eficiencia y por sus autopistas sin límite de velocidad en algunos tramos. Su bandera es una tricolor de tres franjas horizontales con los colores negro, rojo y oro.",
        text_en: "It is famous for its efficiency and its highways without speed limits in some sections. Its flag is a tricolor of three horizontal stripes with the colors black, red, and gold.",
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
        text_es: "Posee una reserva estratégica de un producto dulce derivado de un árbol para controlar los precios del mercado global, similar a cómo otros países lo hacen con el petróleo.",
        text_en: "It possesses a strategic reserve of a sweet tree-derived product to control global market prices, similar to how other countries do with oil.",
      },
      {
        difficulty: "hard",
        text_es: "En una de sus islas más grandes existe un fenómeno geológico curioso: un lago que contiene una isla, que a su vez tiene otro lago, que contiene una pequeña isla final.",
        text_en: "On one of its largest islands there is a curious geological phenomenon: a lake that contains an island, which in turn has another lake, containing a final tiny island.",
      },
      {
        difficulty: "medium",
        text_es: "En este país se inventaron el baloncesto y el sistema de zonas horarias estándar, además de ser famoso por un plato de patatas fritas con queso en grano y salsa de carne.",
        text_en: "In this country, basketball and the standard time zone system were invented, besides being famous for a dish of fries with cheese curds and gravy.",
      },
      {
        difficulty: "easy",
        text_es: "Es el segundo país más grande del mundo y su bandera es muy reconocida por tener una hoja roja de un árbol caducifolio en el centro.",
        text_en: "It is the second largest country in the world and its flag is well recognized for having a red deciduous tree leaf in the center.",
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
        text_es: "Es el país con la mayor cantidad de museos arqueológicos por metro cuadrado del mundo y, curiosamente, su himno nacional tiene 158 estrofas, aunque casi nadie se las sabe todas.",
        text_en: "It is the country with the highest number of archaeological museums per square meter in the world and, interestingly, its national anthem has 158 stanzas, although almost no one knows them all.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de su fama de sol y playa, el ochenta por ciento de su territorio son montañas escarpadas. Además, posee un cañón que ostenta el récord de ser el más profundo del mundo en relación a su anchura.",
        text_en: "Despite its fame for sun and beaches, eighty percent of its territory is rugged mountains. Additionally, it possesses a canyon that holds the record for being the deepest in the world in relation to its width.",
      },
      {
        difficulty: "medium",
        text_es: "En este lugar se originó la democracia y los Juegos Olímpicos. Su gastronomía es famosa por una lasaña de berenjenas llamada moussaka y por su costumbre de romper platos en celebraciones para atraer la suerte.",
        text_en: "This is where democracy and the Olympic Games originated. Its gastronomy is famous for an eggplant lasagna called moussaka and for the custom of breaking plates at celebrations to attract luck.",
      },
      {
        difficulty: "easy",
        text_es: "Un archipiélago de miles de islas con cúpulas azules y paredes blancas. Su bandera tiene nueve franjas azules y blancas que representan las sílabas de su lema Libertad o Muerte.",
        text_en: "An archipelago of thousands of islands with blue domes and white walls. Its flag has nine blue and white stripes representing the syllables of its motto Freedom or Death.",
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
        text_es: "Es el país encargado de otorgar anualmente los premios más prestigiosos de la humanidad en ciencia y literatura, cumpliendo el último deseo de un inventor local que se enriqueció creando la dinamita pero que quería ser recordado por la paz.",
        text_en: "It is the country in charge of annually awarding the most prestigious prizes for humanity in science and literature, fulfilling the last wish of a local inventor who grew rich creating dynamite but wanted to be remembered for peace.",
      },
      {
        difficulty: "hard",
        text_es: "Aunque no lo parezca por su clima, es el país con el mayor número de islas en todo el planeta, superando las doscientas veinte mil; sin embargo, menos del uno por ciento de ellas están habitadas permanentemente, dejando una naturaleza virgen inmensa.",
        text_en: "Even if it does not seem so due to its climate, it is the country with the largest number of islands on the planet, exceeding two hundred and twenty thousand; however, less than one percent of them are permanently inhabited, leaving an immense virgin nature.",
      },
      {
        difficulty: "medium",
        text_es: "En esta nación nacieron inventos que han salvado millones de vidas, como el cinturón de seguridad de tres puntos, además de ser la cuna de un gigante de los muebles listos para montar y de la plataforma de música en streaming que revolucionó la industria.",
        text_en: "In this nation, inventions that have saved millions of lives were born, such as the three-point seat belt, in addition to being the birthplace of a ready-to-assemble furniture giant and the music streaming platform that revolutionized the industry.",
      },
      {
        difficulty: "easy",
        text_es: "Es famoso por su diseño funcional y por ser el hogar de un grupo de música pop que conquistó el mundo en los años setenta. Su bandera es un lienzo azul con una cruz nórdica de color amarillo intenso que llega hasta los bordes.",
        text_en: "It is famous for its functional design and for being home to a pop music group that conquered the world in the seventies. Its flag is a blue canvas with an intense yellow Nordic cross that reaches the edges.",
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
        text_es: "Alberga la Universidad de Al-Qarawiyyin, reconocida por la UNESCO como la institución de educación superior más antigua del mundo todavía en funcionamiento, la cual fue fundada por una mujer tunecina en el año 859.",
        text_en: "It is home to the University of Al-Qarawiyyin, recognized by UNESCO as the oldest higher education institution in the world still in operation, which was founded by a Tunisian woman in the year 859.",
      },
      {
        difficulty: "hard",
        text_es: "En su territorio se encuentra una ciudad completamente pintada de color azul y un valle donde crecen rosas que se utilizan para crear los perfumes más caros de Europa. Además, sus cabras son famosas por tener la habilidad de trepar a las copas de los árboles de argán.",
        text_en: "In its territory there is a city painted entirely in blue and a valley where roses grow that are used to create Europes most expensive perfumes. Additionally, its goats are famous for having the ability to climb to the tops of argan trees.",
      },
      {
        difficulty: "medium",
        text_es: "Es un lugar donde el ritual del té de menta es un símbolo de hospitalidad y donde las ciudades antiguas son laberintos de calles tan estrechas que no caben los coches. Su arquitectura destaca por los patios interiores con fuentes y mosaicos geométricos de colores.",
        text_en: "It is a place where the mint tea ritual is a symbol of hospitality and where ancient cities are labyrinths of streets so narrow that cars do not fit. Its architecture stands out for interior courtyards with fountains and colorful geometric mosaics.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado a las puertas del desierto más grande del mundo y a pocos kilómetros de Europa, este reino tiene una bandera de color rojo intenso con una estrella de cinco puntas de color verde, conocida como el sello de Salomón.",
        text_en: "Located at the gateway to the worlds largest desert and a few kilometers from Europe, this kingdom has an intense red flag with a green five-pointed star, known as the seal of Solomon.",
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
        text_es: "Es el único país de su región que logró evitar ser colonizado por las potencias occidentales durante los siglos diecinueve y veinte, en parte gracias a la astuta diplomacia de sus reyes, quienes adoptaron tecnologías europeas para modernizar el estado rápidamente.",
        text_en: "It is the only country in its region that managed to avoid being colonized by Western powers during the nineteenth and twentieth centuries, partly thanks to the astute diplomacy of its kings, who adopted European technologies to modernize the state quickly.",
      },
      {
        difficulty: "hard",
        text_es: "Su capital tiene un nombre ceremonial que es el más largo del mundo, con más de 160 letras que describen una ciudad de dioses y joyas; sin embargo, el resto del mundo la llama por un nombre de solo dos sílabas que originalmente se refería a un pequeño puerto de ciruelas.",
        text_en: "Its capital has a ceremonial name that is the longest in the world, with more than 160 letters describing a city of gods and jewels; however, the rest of the world calls it by a name of only two syllables that originally referred to a small plum port.",
      },
      {
        difficulty: "medium",
        text_es: "Es la cuna de una bebida energética de fama mundial y de un arte marcial conocido como la ciencia de los ocho miembros debido al uso de puños, codos, rodillas y espinillas. Su cocina es famosa por equilibrar perfectamente los sabores dulce, picante, agrio y salado.",
        text_en: "It is the birthplace of a world-famous energy drink and a martial art known as the science of the eight limbs due to the use of fists, elbows, knees, and shins. Its cuisine is famous for perfectly balancing sweet, spicy, sour, and salty flavors.",
      },
      {
        difficulty: "easy",
        text_es: "Conocido como el país de las sonrisas, destaca por sus miles de templos budistas dorados y sus mercados flotantes. Su bandera actual está compuesta por cinco franjas horizontales de colores rojo, blanco y una franja azul central el doble de ancha.",
        text_en: "Known as the land of smiles, it stands out for its thousands of golden Buddhist temples and its floating markets. Its current flag is composed of five horizontal stripes of red, white, and a blue central stripe twice as wide.",
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
        text_es: "Fue el primer imperio global de la historia moderna, extendiéndose desde Sudamérica hasta Asia, y hoy en día es el país que posee la alianza diplomática más antigua del mundo todavía en vigor, firmada con Inglaterra en el año 1373.",
        text_en: "It was the first global empire in modern history, spanning from South America to Asia, and today it is the country that holds the oldest diplomatic alliance in the world still in force, signed with England in the year 1373.",
      },
      {
        difficulty: "hard",
        text_es: "Es el líder indiscutible en la producción de corcho a nivel mundial, extrayendo la corteza de sus árboles de forma sostenible cada nueve años. Además, en sus costas se han surfeado algunas de las olas más grandes y peligrosas jamás registradas por el ser humano.",
        text_en: "It is the undisputed leader in cork production worldwide, sustainably harvesting the bark of its trees every nine years. Additionally, some of the largest and most dangerous waves ever recorded by humans have been surfed on its shores.",
      },
      {
        difficulty: "medium",
        text_es: "Su capital es famosa por sus tranvías amarillos que suben colinas empinadas y por sus pavimentos hechos con pequeños trozos de piedra blanca y negra formando mosaicos. Su música más tradicional es un canto melancólico que habla sobre el destino y la nostalgia.",
        text_en: "Its capital is famous for its yellow trams that climb steep hills and for its pavements made of small pieces of black and white stone forming mosaics. Its most traditional music is a melancholic chant that speaks of fate and nostalgia.",
      },
      {
        difficulty: "easy",
        text_es: "Es una nación de navegantes y descubridores, famosa por sus deliciosos pasteles de crema y su excelente bacalao. Su bandera está dividida verticalmente en verde y rojo, con un complejo escudo de armas que incluye esferas e instrumentos de navegación.",
        text_en: "It is a nation of navigators and discoverers, famous for its delicious custard tarts and excellent cod. Its flag is vertically divided into green and red, with a complex coat of arms that includes spheres and navigational instruments.",
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
        text_es: "Es el país con el parlamento activo más antiguo del mundo, fundado en el año 930 en un anfiteatro natural formado por la separación de dos placas tectónicas. Además, es uno de los pocos lugares del planeta donde no existen los mosquitos ni las hormigas.",
        text_en: "It is the country with the oldest active parliament in the world, founded in the year 930 in a natural amphitheater formed by the separation of two tectonic plates. Additionally, it is one of the few places on the planet where mosquitoes and ants do not exist.",
      },
      {
        difficulty: "hard",
        text_es: "Casi toda su población cree en la existencia de seres invisibles como elfos y troles, hasta el punto de que muchas carreteras se desvían para no destruir rocas que se consideran sus hogares. Además, produce más libros per cápita que cualquier otra nación.",
        text_en: "Almost its entire population believes in the existence of invisible beings such as elves and trolls, to the point that many roads are diverted to avoid destroying rocks considered their homes. Additionally, it produces more books per capita than any other nation.",
      },
      {
        difficulty: "medium",
        text_es: "Este país funciona casi en su totalidad con energía geotérmica gracias a su inmensa actividad volcánica, permitiendo incluso calentar las aceras de su capital en invierno. Es famoso por sus caballos de raza única que tienen un paso extra que ningún otro caballo posee.",
        text_en: "This country runs almost entirely on geothermal energy thanks to its immense volcanic activity, even allowing for the heating of its capitals sidewalks in winter. It is famous for its unique horse breed that has an extra gait no other horse possesses.",
      },
      {
        difficulty: "easy",
        text_es: "Conocida como la tierra del hielo y el fuego, es famosa por sus géiseres, cascadas gigantes y sus lagunas de agua termal azul. Su bandera tiene un fondo azul con una cruz roja de bordes blancos que simboliza sus glaciares y volcanes.",
        text_en: "Known as the land of ice and fire, it is famous for its geysers, giant waterfalls, and blue thermal water lagoons. Its flag has a blue background with a red cross with white edges symbolizing its glaciers and volcanoes.",
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
        text_es: "Es el país que inventó el sistema de correos moderno y, por ser el primero, es la única nación del mundo que no necesita poner su nombre en sus sellos postales, utilizando en su lugar la silueta del monarca vigente.",
        text_en: "It is the country that invented the modern postal system and, because it was the first, it is the only nation in the world that does not need to put its name on its postage stamps, using instead the silhouette of the current monarch.",
      },
      {
        difficulty: "hard",
        text_es: "Su capital tiene un sistema de metro que es el más antiguo del mundo y sus universidades se encuentran entre las más legendarias de la historia, habiendo educado a más primeros ministros y premios Nobel que casi cualquier otra institución educativa global.",
        text_en: "Its capital has a subway system that is the oldest in the world, and its universities are among the most legendary in history, having educated more prime ministers and Nobel laureates than almost any other global educational institution.",
      },
      {
        difficulty: "medium",
        text_es: "Es la cuna del fútbol, del tenis y del rugby, además de ser el lugar de origen de una de las bandas de rock más influyentes de la historia que cambió la música para siempre. Son famosos por su puntualidad y por su amor incondicional a la hora del té.",
        text_en: "It is the birthplace of football, tennis, and rugby, as well as the place of origin of one of the most influential rock bands in history that changed music forever. They are famous for their punctuality and their unconditional love for tea time.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular compuesta por cuatro países históricos, famosa por sus autobuses rojos de dos pisos y su bandera tricolor que combina las cruces de sus santos patrones en azul, blanco y rojo.",
        text_en: "An island nation made up of four historic countries, famous for its red double-decker buses and its tricolor flag that combines the crosses of its patron saints in blue, white, and red.",
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
        text_es: "Es el país con el mayor número de aeropuertos del mundo y donde se encuentra el sistema de parques nacionales más antiguo, diseñado para proteger paisajes que parecen de otros planetas. Posee la mayor economía del globo medida por su producto interior bruto nominal.",
        text_en: "It is the country with the largest number of airports in the world and where the oldest national park system is found, designed to protect landscapes that look like they are from other planets. It has the largest economy in the globe measured by its nominal gross domestic product.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra un valle que tiene el récord de la temperatura más alta jamás registrada en la Tierra. Además, es un país tan diverso que no tiene un idioma oficial establecido a nivel federal, aunque el inglés sea el dominante en la práctica.",
        text_en: "In this territory lies a valley that holds the record for the highest temperature ever recorded on Earth. Additionally, it is a country so diverse that it has no official language established at the federal level, even though English is dominant in practice.",
      },
      {
        difficulty: "medium",
        text_es: "Es el lugar de nacimiento de la industria del cine moderno, de la comida rápida y de la mayoría de las redes sociales que usamos hoy. Su cultura es famosa por los grandes eventos deportivos como el fútbol americano y sus enormes rascacielos en ciudades costeras.",
        text_en: "It is the birthplace of the modern film industry, fast food, and most of the social networks we use today. Its culture is famous for large sporting events like American football and its huge skyscrapers in coastal cities.",
      },
      {
        difficulty: "easy",
        text_es: "Un país compuesto por cincuenta estados que se extiende desde el Atlántico hasta el Pacífico. Su bandera es muy icónica con trece franjas rojas y blancas y un cuadrado azul con una estrella por cada estado.",
        text_en: "A country made up of fifty states spanning from the Atlantic to the Pacific. Its flag is very iconic with thirteen red and white stripes and a blue square with one star for each state.",
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
        text_es: "Es un país tan inmenso que tiene más superficie que el planeta Plutón y alberga el lago más profundo del mundo, el cual contiene el veinte por ciento de toda el agua dulce no congelada de la Tierra. Tiene fronteras con más de una docena de naciones diferentes.",
        text_en: "It is such an immense country that it has more surface area than the planet Pluto and is home to the deepest lake in the world, which contains twenty percent of all the Earths unfrozen fresh water. It has borders with more than a dozen different nations.",
      },
      {
        difficulty: "hard",
        text_es: "Cuenta con una red ferroviaria legendaria que tarda casi una semana en cruzar el país, atravesando ocho zonas horarias y paisajes que van desde la tundra ártica hasta estepas infinitas. Sus estaciones de metro son famosas por parecer palacios subterráneos.",
        text_en: "It features a legendary railway network that takes almost a week to cross the country, traversing eight time zones and landscapes ranging from Arctic tundra to infinite steppes. Its subway stations are famous for looking like underground palaces.",
      },
      {
        difficulty: "medium",
        text_es: "Fue el primer país en poner un satélite y un ser humano en órbita alrededor de la Tierra. Son conocidos mundialmente por su ballet clásico, su literatura épica y sus muñecas de madera que se encajan unas dentro de otras.",
        text_en: "It was the first country to put a satellite and a human being into orbit around the Earth. They are known worldwide for their classical ballet, epic literature, and wooden dolls that fit inside each other.",
      },
      {
        difficulty: "easy",
        text_es: "Es la nación más grande del planeta, famosa por sus inviernos extremos y sus catedrales con cúpulas de colores brillantes que parecen dulces. Su bandera tiene tres franjas horizontales de color blanco, azul y rojo.",
        text_en: "It is the largest nation on the planet, famous for its extreme winters and its cathedrals with bright colorful domes that look like candy. Its flag has three horizontal stripes of white, blue, and red.",
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
        text_es: "Es el país que creó la primera bolsa de valores del mundo y la primera corporación multinacional de la historia en el siglo diecisiete. Además, es el mayor exportador de flores del planeta, enviando miles de millones de bulbos al extranjero cada año.",
        text_en: "It is the country that created the worlds first stock exchange and the first multinational corporation in history during the seventeenth century. Additionally, it is the largest exporter of flowers on the planet, shipping billions of bulbs abroad each year.",
      },
      {
        difficulty: "hard",
        text_es: "Aproximadamente un tercio de su territorio se encuentra por debajo del nivel del mar, habiendo sido ganado al océano mediante un complejo sistema de diques y estaciones de bombeo. De hecho, su aeropuerto principal está situado en el fondo de un antiguo lago drenado.",
        text_en: "Approximately one-third of its territory lies below sea level, having been reclaimed from the ocean through a complex system of dikes and pumping stations. In fact, its main airport is located on the floor of a former drained lake.",
      },
      {
        difficulty: "medium",
        text_es: "Es mundialmente famoso por sus canales, sus molinos de viento históricos y por ser un lugar donde hay más bicicletas que habitantes. En su cultura, el color naranja es un símbolo de identidad nacional a pesar de que no aparece en su bandera oficial.",
        text_en: "It is world-famous for its canals, historical windmills, and for being a place where there are more bicycles than inhabitants. In its culture, the color orange is a symbol of national identity even though it does not appear on its official flag.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación conocida por sus tulipanes, sus quesos redondos y sus pintores maestros del arte clásico. Su bandera tiene tres franjas horizontales de colores rojo, blanco y azul cobalto.",
        text_en: "A nation known for its tulips, its round cheeses, and its master painters of classical art. Its flag has three horizontal stripes of red, white, and cobalt blue.",
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
        text_es: "Es uno de los pocos países del mundo que no tiene una única capital oficial por ley, aunque una de sus ciudades ejerce esa función en la práctica. Además, cuenta con suficientes búnkeres nucleares para albergar a toda su población en caso de conflicto.",
        text_en: "It is one of the few countries in the world that does not have a single official capital by law, although one of its cities performs that function in practice. Additionally, it has enough nuclear bunkers to house its entire population in case of conflict.",
      },
      {
        difficulty: "hard",
        text_es: "Esta nación se mantiene en un estado de neutralidad armada desde hace siglos y no se unió a las Naciones Unidas hasta el año dos mil dos. Es el hogar de organizaciones internacionales clave y cuenta con cuatro idiomas oficiales repartidos por sus diferentes regiones.",
        text_en: "This nation has maintained a state of armed neutrality for centuries and did not join the United Nations until the year two thousand and two. It is home to key international organizations and has four official languages spread across its different regions.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por su precisión extrema en la relojería y su sistema bancario, es también un paraíso para los amantes del chocolate y el queso fundido. Sus paisajes están dominados por montañas majestuosas que atraen a esquiadores de todo el mundo.",
        text_en: "Famous for its extreme precision in watchmaking and its banking system, it is also a paradise for lovers of chocolate and melted cheese. Its landscapes are dominated by majestic mountains that attract skiers from all over the world.",
      },
      {
        difficulty: "easy",
        text_es: "Un país alpino conocido por su neutralidad y sus paisajes de postal. Su bandera es única por ser una de las pocas que es completamente cuadrada, con una cruz blanca sobre un fondo rojo intenso.",
        text_en: "An Alpine country known for its neutrality and postcard landscapes. Its flag is unique for being one of the few that is completely square, featuring a white cross on an intense red background.",
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
        text_es: "Es la cuna del psicoanálisis y donde se encuentra la noria gigante más antigua del mundo todavía en funcionamiento. Además, su bandera es considerada una de las más antiguas del planeta, con un diseño que data de finales del siglo doce.",
        text_en: "It is the birthplace of psychoanalysis and home to the worlds oldest giant Ferris wheel still in operation. Additionally, its flag is considered one of the oldest on the planet, with a design dating back to the late twelfth century.",
      },
      {
        difficulty: "hard",
        text_es: "En este país nació uno de los compositores más brillantes de la música clásica, cuya ciudad natal es hoy un museo viviente. También alberga la cueva de hielo más grande del mundo, un laberinto congelado de más de cuarenta kilómetros de longitud.",
        text_en: "In this country, one of the most brilliant composers of classical music was born, whose hometown is today a living museum. It also houses the worlds largest ice cave, a frozen labyrinth over forty kilometers long.",
      },
      {
        difficulty: "medium",
        text_es: "Es un destino mundial por su cultura del café, sus palacios imperiales y sus competiciones de esquí alpino. Fue el corazón de uno de los imperios más poderosos de Europa y es famoso por su repostería, especialmente por una tarta de chocolate muy conocida.",
        text_en: "It is a global destination for its coffee culture, its imperial palaces, and its alpine skiing competitions. It was the heart of one of Europes most powerful empires and is famous for its pastries, especially for a well-known chocolate cake.",
      },
      {
        difficulty: "easy",
        text_es: "Un país centroeuropeo famoso por su música clásica y sus paisajes montañosos donde se rodaron películas musicales legendarias. Su bandera tiene tres franjas horizontales iguales: roja, blanca y roja.",
        text_en: "A Central European country famous for its classical music and its mountainous landscapes where legendary musical films were shot. Its flag has three equal horizontal stripes: red, white, and red.",
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
        text_es: "Es el país que produce la mayor variedad de cervezas distintas del mundo, con más de mil quinientas clases diferentes. Además, posee el récord mundial de haber pasado más tiempo sin un gobierno oficial debido a desacuerdos políticos internos.",
        text_en: "It is the country that produces the greatest variety of different beers in the world, with over fifteen hundred different kinds. Additionally, it holds the world record for having spent the longest time without an official government due to internal political disagreements.",
      },
      {
        difficulty: "hard",
        text_es: "Aunque muchos creen que son de otro lugar, en este país se inventaron las patatas fritas y existe una cultura muy estricta sobre cómo deben cocinarse. Es también el centro del comercio mundial de diamantes, especialmente en una de sus ciudades portuarias del norte.",
        text_en: "Although many believe they are from elsewhere, french fries were invented in this country and there is a very strict culture on how they should be cooked. It is also the center of the world diamond trade, especially in one of its northern port cities.",
      },
      {
        difficulty: "medium",
        text_es: "Es considerado el corazón administrativo de Europa y la cuna de personajes de cómic legendarios conocidos en todo el mundo. Su gastronomía destaca por el chocolate de alta calidad, los mejillones con patatas y los gofres dulces con diversos acompañamientos.",
        text_en: "It is considered the administrative heart of Europe and the birthplace of legendary comic book characters known worldwide. Its gastronomy stands out for high-quality chocolate, mussels with fries, and sweet waffles with various toppings.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación pequeña dividida principalmente en dos regiones con idiomas diferentes. Su bandera tiene tres franjas verticales de colores negro, amarillo y rojo, inspiradas en el escudo de armas de un antiguo ducado.",
        text_en: "A small nation primarily divided into two regions with different languages. Its flag has three vertical stripes of black, yellow, and red, inspired by the coat of arms of an ancient duchy.",
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
        text_es: "Es el país donde nació la científica que ganó dos premios Nobel en categorías distintas y el astrónomo que demostró que la Tierra gira alrededor del sol. Además, alberga el castillo más grande del mundo medido por su superficie terrestre.",
        text_en: "It is the country where the female scientist who won two Nobel prizes in different categories and the astronomer who proved the Earth revolves around the sun were born. Additionally, it houses the worlds largest castle measured by its land area.",
      },
      {
        difficulty: "hard",
        text_es: "Posee una mina de sal milenaria que es como una ciudad subterránea, con una catedral entera tallada en sal a cientos de metros bajo tierra. Además, cuenta con el último bosque virgen de Europa donde todavía viven bisontes europeos en libertad.",
        text_en: "It possesses a thousand-year-old salt mine that is like an underground city, with an entire cathedral carved in salt hundreds of meters underground. Additionally, it has the last primeval forest in Europe where European bison still live in the wild.",
      },
      {
        difficulty: "medium",
        text_es: "Su historia está marcada por haber desaparecido del mapa durante más de un siglo antes de recuperar su soberanía. Su gastronomía es famosa por unas empanadillas rellenas llamadas pierogi y por ser uno de los mayores productores de ámbar del mundo.",
        text_en: "Its history is marked by having disappeared from the map for over a century before regaining its sovereignty. Its gastronomy is famous for stuffed dumplings called pierogi and for being one of the worlds largest amber producers.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del este de Europa cuya capital fue reconstruida casi por completo tras la Segunda Guerra Mundial. Su bandera es muy sencilla, con dos franjas horizontales iguales: blanca arriba y roja abajo.",
        text_en: "An Eastern European nation whose capital was almost entirely rebuilt after World War II. Its flag is very simple, with two equal horizontal stripes: white on top and red on the bottom.",
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
        text_es: "Es el país con el mayor consumo de cerveza per cápita del mundo desde hace décadas, superando con creces a Alemania. Además, su capital alberga el castillo antiguo más grande del mundo según el Libro Guinness, con casi setenta mil metros cuadrados de superficie.",
        text_en: "It is the country with the highest beer consumption per capita in the world for decades, far surpassing Germany. Additionally, its capital houses the largest ancient castle in the world according to the Guinness Book, with almost seventy thousand square meters of surface area.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se inventaron las lentes de contacto blandas y la palabra robot, que apareció por primera vez en una obra de teatro de un autor local en mil novecientos veinte. También es famoso por su cristal de alta calidad, conocido por su brillo y tallado artesanal.",
        text_en: "In this territory, soft contact lenses and the word robot were invented, which first appeared in a play by a local author in nineteen twenty. It is also famous for its high-quality crystal, known for its brilliance and handcrafted cutting.",
      },
      {
        difficulty: "medium",
        text_es: "Un país sin salida al mar en el corazón de Europa, famoso por tener más de dos mil castillos y ruinas. Su capital es conocida como la ciudad de las cien torres y es uno de los destinos turísticos mejor conservados de la arquitectura medieval y barroca.",
        text_en: "A landlocked country in the heart of Europe, famous for having more than two thousand castles and ruins. Its capital is known as the city of a hundred spires and is one of the best-preserved tourist destinations for medieval and baroque architecture.",
      },
      {
        difficulty: "easy",
        text_es: "Antiguamente formaba parte de una federación con Eslovaquia. Su bandera tiene dos franjas horizontales, blanca y roja, con un triángulo azul en el lado del mástil que la diferencia de otras banderas similares.",
        text_en: "It was formerly part of a federation with Slovakia. Its flag has two horizontal stripes, white and red, with a blue triangle on the hoist side that distinguishes it from other similar flags.",
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
        text_es: "Es la cuna del cubo de Rubik y del bolígrafo moderno. Además, su lengua es una de las más difíciles de aprender de Europa, ya que no tiene ninguna relación con el latín, el germánico o las lenguas eslavas de sus vecinos, procediendo de los montes Urales.",
        text_en: "It is the birthplace of the Rubiks Cube and the modern ballpoint pen. Additionally, its language is one of the most difficult to learn in Europe, as it has no relationship with Latin, Germanic, or the Slavic languages of its neighbors, originating from the Ural Mountains.",
      },
      {
        difficulty: "hard",
        text_es: "Su capital fue originalmente dos ciudades distintas situadas a ambos lados del río Danubio que se unieron en mil ochocientos setenta y tres. Posee el sistema de cuevas de agua termal más grande del mundo y su parlamento es uno de los edificios legislativos más imponentes de la tierra.",
        text_en: "Its capital was originally two distinct cities located on either side of the Danube River that joined in eighteen seventy-three. It possesses the largest thermal water cave system in the world and its parliament is one of the most imposing legislative buildings on earth.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por su vino dulce de Tokaj y por el uso intensivo del pimentón o paprika en casi todos sus platos tradicionales, especialmente en su famoso estofado de carne. Sus baños termales públicos son una parte esencial de la vida social y cultural.",
        text_en: "It is famous for its sweet Tokaj wine and for the intensive use of paprika in almost all its traditional dishes, especially in its famous meat stew. Its public thermal baths are an essential part of social and cultural life.",
      },
      {
        difficulty: "easy",
        text_es: "Un país centroeuropeo que no tiene costa pero sí el lago más grande de Europa Central. Su bandera tiene tres franjas horizontales iguales de colores rojo, blanco y verde.",
        text_en: "A Central European country that has no coast but does have the largest lake in Central Europe. Its flag has three equal horizontal stripes of red, white, and green.",
      },
    ],
  },
  {
    id: 31,
    name: "Rumanía",
    name_en: "Romania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Alberga el edificio administrativo más pesado del mundo, un palacio gigantesco construido durante una dictadura que tiene más de mil habitaciones y ocho niveles subterráneos. Además, es el país donde se inventó la fuente de tinta para plumas estilográficas.",
        text_en: "It houses the heaviest administrative building in the world, a gigantic palace built during a dictatorship that has more than a thousand rooms and eight underground levels. Additionally, it is the country where the ink fountain for fountain pens was invented.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra una de las carreteras más espectaculares del mundo, que cruza los montes Cárpatos y llega a altitudes de más de dos mil metros. Además, cuenta con la población de osos pardos más grande de toda Europa fuera de Rusia.",
        text_en: "In this territory lies one of the most spectacular roads in the world, crossing the Carpathian Mountains and reaching altitudes of over two thousand meters. Additionally, it has the largest brown bear population in all of Europe outside of Russia.",
      },
      {
        difficulty: "medium",
        text_es: "Es mundialmente conocido por las leyendas de vampiros y castillos góticos situados en la región de Transilvania. Sus iglesias de madera y monasterios pintados son Patrimonio de la Humanidad y reflejan una rica tradición espiritual y artística.",
        text_en: "It is world-renowned for legends of vampires and Gothic castles located in the Transylvania region. Its wooden churches and painted monasteries are World Heritage sites and reflect a rich spiritual and artistic tradition.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del sureste de Europa que comparte el delta del Danubio con el Mar Negro. Su bandera tiene tres franjas verticales de colores azul, amarillo y rojo, casi idéntica a la de Chad.",
        text_en: "A southeastern European nation that shares the Danube Delta with the Black Sea. Its flag has three vertical stripes of blue, yellow, and red, almost identical to that of Chad.",
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
        text_es: "Es el país que alberga la estación de metro más profunda del mundo, situada a más de ciento cinco metros bajo tierra. Además, cuenta con una de las reservas de tierras negras más fértiles del planeta, lo que históricamente le ha dado el apodo de el granero de Europa.",
        text_en: "It is the country that houses the deepest subway station in the world, located more than one hundred and five meters underground. Additionally, it has one of the most fertile black soil reserves on the planet, which has historically earned it the nickname of the breadbasket of Europe.",
      },
      {
        difficulty: "hard",
        text_es: "En su territorio se encuentra una ciudad fantasma que fue escenario del peor accidente nuclear de la historia. También posee el instrumento musical de viento más largo del mundo, una trompeta de madera tradicional que puede medir hasta cuatro metros.",
        text_en: "In its territory lies a ghost town that was the site of the worst nuclear accident in history. It also possesses the worlds longest wind musical instrument, a traditional wooden trumpet that can measure up to four meters.",
      },
      {
        difficulty: "medium",
        text_es: "Es el país más grande que se encuentra íntegramente dentro de Europa y es famoso por sus catedrales de cúpulas doradas y sus huevos de pascua decorados con patrones geométricos increíblemente complejos llamados pysanky.",
        text_en: "It is the largest country entirely within Europe and is famous for its golden-domed cathedrals and its Easter eggs decorated with incredibly complex geometric patterns called pysanky.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación con una gran costa en el Mar Negro, conocida por su resistencia y orgullo nacional. Su bandera es un diseño sencillo de dos franjas horizontales: azul arriba y amarillo abajo, representando el cielo y los campos de trigo.",
        text_en: "A nation with a large Black Sea coastline, known for its resilience and national pride. Its flag is a simple design of two horizontal stripes: blue on top and yellow on the bottom, representing the sky and the wheat fields.",
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
        text_es: "Es el país que introdujo los tulipanes en Europa, aunque mucha gente crea que son originarios de los Países Bajos. Su ciudad más grande es la única en el mundo que se asienta simultáneamente sobre dos continentes, unida por puentes sobre un estrecho marino.",
        text_en: "It is the country that introduced tulips to Europe, even though many people believe they originate from the Netherlands. Its largest city is the only one in the world that sits simultaneously on two continents, linked by bridges over a sea strait.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga un paisaje surrealista de chimeneas de hadas y ciudades subterráneas talladas en roca volcánica donde vivieron civilizaciones antiguas. Además, el Papá Noel histórico nació y vivió en lo que hoy es la costa sur de este país.",
        text_en: "It houses a surreal landscape of fairy chimneys and underground cities carved into volcanic rock where ancient civilizations lived. Additionally, the historical Santa Claus was born and lived in what is now the southern coast of this country.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por sus bazares laberínticos donde se venden alfombras y especias, y por una tradición de lucha en aceite que es deporte nacional. Su gastronomía es una de las más influyentes del Mediterráneo, destacando sus dulces de pistacho y su café muy fuerte.",
        text_en: "It is famous for its labyrinthine bazaars where carpets and spices are sold, and for an oil wrestling tradition that is a national sport. Its gastronomy is one of the most influential in the Mediterranean, highlighting its pistachio sweets and very strong coffee.",
      },
      {
        difficulty: "easy",
        text_es: "Un puente entre Oriente y Occidente conocido por sus mezquitas imperiales con altos minaretes. Su bandera es de color rojo vibrante con una luna creciente y una estrella blanca en el centro.",
        text_en: "A bridge between East and West known for its imperial mosques with tall minarets. Its flag is a vibrant red color with a crescent moon and a white star in the center.",
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
        text_es: "En este territorio se aplica un sistema de control de fronteras y muros que restringe severamente el movimiento de millones de personas, una situación denunciada globalmente por organizaciones de derechos humanos como un sistema de segregación y violencia sistemática.",
        text_en: "In this territory, a system of border controls and walls is applied that severely restricts the movement of millions of people, a situation denounced globally by human rights organizations as a system of segregation and systematic violence.",
      },
      {
        difficulty: "hard",
       text_es: "Establecido en mil novecientos cuarenta y ocho sobre territorio palestino bajo mandato británico, su existencia ha estado marcada por la ocupación militar de tierras vecinas y la construcción de asentamientos considerados ilegales por gran parte de la comunidad internacional.",
        text_en: "Established in nineteen forty-eight on Palestinian territory under British mandate, its existence has been marked by the military occupation of neighboring lands and the construction of settlements considered illegal by much of the international community.",
       },
      {
        difficulty: "medium",
        text_es: "El control sobre lugares sagrados en ciudades como Jerusalén es un punto central del conflicto bélico en la región. A pesar de presentarse como una democracia moderna, su historia reciente está ligada a la destrucción de infraestructuras y el desplazamiento forzado de poblaciones nativas.",
        text_en: "Control over sacred sites in cities like Jerusalem is a central point of the war conflict in the region. Despite presenting itself as a modern democracy, its recent history is linked to the destruction of infrastructure and the forced displacement of native populations.",
      },
      {
        difficulty: "easy",
        text_es: "Un estado ilegítimo, situado en el Mediterráneo oriental con fronteras en constante disputa y conflicto. Su bandera es blanca con dos franjas horizontales azules y una estrella de seis puntas en el centro.",
        text_en: "An illegitimate state, located in the eastern Mediterranean with borders in constant dispute and conflict. Its flag is white with two horizontal blue stripes and a six-pointed star in the center.",
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
        text_es: "Es el país más grande del mundo que no tiene ni un solo río permanente que fluya por su superficie, dependiendo totalmente del agua desalinizada y de acuíferos subterráneos. Además, alberga el mayor desierto de arena continua del planeta, una extensión tan vasta y hostil que se conoce como el cuarto vacío.",
        text_en: "It is the largest country in the world without a single permanent river flowing across its surface, relying entirely on desalinated water and underground aquifers. Additionally, it houses the largest continuous sand desert on the planet, an expanse so vast and hostile it is known as the Empty Quarter.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentran los dos lugares más sagrados para el islam, atrayendo a millones de personas cada año en una de las migraciones humanas más grandes de la tierra. Actualmente, está construyendo una ciudad lineal futurista de ciento setenta kilómetros de largo en medio del desierto como parte de su plan de modernización.",
        text_en: "In this territory lie the two holiest sites for Islam, attracting millions of people each year in one of the largest human migrations on earth. Currently, it is building a futuristic linear city one hundred and seventy kilometers long in the middle of the desert as part of its modernization plan.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los mayores exportadores de petróleo del mundo y posee algunas de las reservas más grandes de crudo. Su cultura está profundamente ligada a la cetrería y a las carreras de camellos, y su capital es una metrópolis moderna que ha crecido de forma explosiva en pocas décadas.",
        text_en: "It is one of the worlds largest oil exporters and possesses some of the largest crude oil reserves. Its culture is deeply linked to falconry and camel racing, and its capital is a modern metropolis that has grown explosively in just a few decades.",
      },
      {
        difficulty: "easy",
        text_es: "Un reino situado en la península arábiga donde nació una de las religiones más importantes del mundo. Su bandera es de color verde oscuro con una inscripción en árabe y una espada blanca que simboliza la justicia y la victoria.",
        text_en: "A kingdom located in the Arabian Peninsula where one of the worlds most important religions was born. Its flag is dark green with an Arabic inscription and a white sword symbolizing justice and victory.",
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
        text_es: "Es una federación compuesta por siete territorios soberanos que se unieron en mil novecientos setenta y uno. Alrededor del ochenta por ciento de su población total son extranjeros, lo que lo convierte en uno de los países con mayor diversidad de nacionalidades y proporción de inmigrantes del mundo.",
        text_en: "It is a federation composed of seven sovereign territories that joined in nineteen seventy-one. Around eighty percent of its total population are foreigners, making it one of the countries with the highest diversity of nationalities and proportion of immigrants in the world.",
      },
      {
        difficulty: "hard",
        text_es: "En este país se encuentra el edificio más alto construido por el ser humano, además de islas artificiales con forma de palmera que son visibles desde el espacio. Sus fuerzas policiales son famosas por utilizar coches deportivos de lujo y superdeportivos para patrullar las zonas turísticas.",
        text_en: "This country is home to the tallest building ever constructed by humans, as well as palm-shaped artificial islands visible from space. Its police forces are famous for using luxury sports cars and supercars to patrol tourist areas.",
      },
      {
        difficulty: "medium",
        text_es: "Se ha transformado en un centro financiero y turístico global en menos de cincuenta años, pasando de ser un puerto de buscadores de perlas a tener aeropuertos y aerolíneas de primer nivel mundial. Es famoso por su lujo extremo, sus centros comerciales gigantescos y sus pistas de esquí bajo techo en pleno desierto.",
        text_en: "It has transformed into a global financial and tourist hub in less than fifty years, going from being a pearl divers port to having world-class airports and airlines. It is famous for its extreme luxury, gigantic shopping malls, and indoor ski slopes in the middle of the desert.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del Golfo Pérsico conocido por ciudades futuristas como Dubái y su capital, Abu Dabi. Su bandera tiene tres franjas horizontales de color verde, blanco y negro, con una franja vertical roja en el lado del mástil.",
        text_en: "A Persian Gulf country known for futuristic cities like Dubai and its capital, Abu Dhabi. Its flag has three horizontal stripes of green, white, and black, with a vertical red stripe on the hoist side.",
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
        text_es: "Es el heredero directo de uno de los imperios más grandes y poderosos de la antigüedad, que llegó a controlar gran parte del mundo conocido. Su calendario oficial es uno de los más precisos que existen, basándose en el equinoccio astronómico y comenzando el año con la llegada de la primavera.",
        text_en: "It is the direct heir to one of the largest and most powerful empires of antiquity, which once controlled much of the known world. Its official calendar is one of the most precise in existence, based on the astronomical equinox and starting the year with the arrival of spring.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga algunas de las ciudades habitadas más antiguas de la tierra y es el mayor productor mundial de azafrán y de alfombras anudadas a mano, las cuales se consideran verdaderas obras de arte. Su arquitectura es famosa por el uso de azulejos azules y cúpulas geométricas perfectas.",
        text_en: "It is home to some of the oldest inhabited cities on earth and is the worlds largest producer of saffron and hand-knotted carpets, which are considered true works of art. Its architecture is famous for the use of blue tiles and perfect geometric domes.",
      },
      {
        difficulty: "medium",
        text_es: "A pesar de ser un país de Oriente Próximo, su idioma no es el árabe, sino una lengua indoeuropea con una rica tradición literaria y poética milenaria. Su geografía es muy variada, incluyendo desde desiertos abrasadores hasta montañas donde se puede esquiar en invierno.",
        text_en: "Despite being a Middle Eastern country, its language is not Arabic, but an Indo-European language with a rich millenary literary and poetic tradition. Its geography is very varied, including everything from scorching deserts to mountains where you can ski in winter.",
      },
      {
        difficulty: "easy",
        text_es: "Antiguamente conocido como Persia, es famoso por su hospitalidad y su rica historia. Su bandera tiene tres franjas horizontales de color verde, blanco y rojo, con un emblema central que representa cuatro medias lunas y una espada.",
        text_en: "Formerly known as Persia, it is famous for its hospitality and rich history. Its flag has three horizontal stripes of green, white, and red, with a central emblem representing four crescents and a sword.",
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
        text_es: "Es el hogar de la segunda montaña más alta del planeta y posee el sistema de riego continuo más grande del mundo, esencial para su agricultura. Además, es el país donde se fabrican artesanalmente más del cincuenta por ciento de todos los balones de fútbol que se usan en las competiciones oficiales del mundo.",
        text_en: "It is home to the second highest mountain on the planet and possesses the largest continuous irrigation system in the world, essential for its agriculture. Additionally, it is the country where more than fifty percent of all soccer balls used in world official competitions are handcrafted.",
      },
      {
        difficulty: "hard",
        text_es: "En su territorio se desarrollaron algunas de las civilizaciones más antiguas de la Edad de Bronce. Actualmente, es la única nación del mundo islámico que posee armamento nuclear de forma oficial, lo que le otorga un papel geopolítico crucial en el sur de Asia.",
        text_en: "In its territory, some of the oldest Bronze Age civilizations developed. Currently, it is the only nation in the Islamic world that officially possesses nuclear weapons, giving it a crucial geopolitical role in South Asia.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por su vibrante arte de decorar camiones con colores brillantes y diseños intrincados, convirtiéndolos en galerías de arte móviles. Su gastronomía es conocida por ser muy especiada y por su tradición de hospitalidad extrema hacia los viajeros en las regiones del norte.",
        text_en: "It is famous for its vibrant truck art, decorating trucks with bright colors and intricate designs, turning them into mobile art galleries. Its gastronomy is known for being very spicy and for its tradition of extreme hospitality towards travelers in the northern regions.",
      },
      {
        difficulty: "easy",
        text_es: "Una gran nación del sur de Asia que se separó de la India en mil novecientos cuarenta y siete. Su bandera es de color verde oscuro, que representa a la mayoría musulmana, con una franja vertical blanca y una luna creciente con estrella en el centro.",
        text_en: "A large South Asian nation that separated from India in nineteen forty-seven. Its flag is dark green, representing the Muslim majority, with a white vertical stripe and a crescent moon with a star in the center.",
      },
    ],
  },
  {
    id: 39,
    name: "Bangladesh",
    name_en: "Bangladesh",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país con la mayor densidad de población del mundo entre las naciones que no son ciudades-estado, con más de mil personas por kilómetro cuadrado. Además, su territorio está formado casi totalmente por el delta de un río, lo que lo hace extremadamente fértil pero muy vulnerable a las inundaciones.",
        text_en: "It is the country with the highest population density in the world among nations that are not city-states, with more than a thousand people per square kilometer. Additionally, its territory is almost entirely formed by a river delta, making it extremely fertile but very vulnerable to flooding.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga el bosque de manglar más grande del mundo, que es el último refugio importante del majestuoso tigre de Bengala. A pesar de su tamaño geográfico pequeño comparado con sus vecinos, es uno de los mayores exportadores de ropa y textiles para las marcas más famosas del globo.",
        text_en: "It is home to the worlds largest mangrove forest, which is the last major refuge of the majestic Bengal tiger. Despite its small geographic size compared to its neighbors, it is one of the largest exporters of clothing and textiles for the worlds most famous brands.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación que celebra con gran orgullo su lengua nativa, teniendo un día nacional dedicado a los mártires que lucharon por el derecho a hablar su propio idioma. Es conocido como el país de los seis climas debido a sus marcadas variaciones estacionales de temperatura y lluvia.",
        text_en: "It is a nation that celebrates its native language with great pride, having a national day dedicated to the martyrs who fought for the right to speak their own language. It is known as the country of six seasons due to its marked seasonal variations in temperature and rain.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el golfo de Bengala y rodeado casi totalmente por la India, es famoso por sus paisajes verdes y sus numerosos ríos. Su bandera es un lienzo verde oscuro con un círculo rojo en el centro que representa el sol de la libertad.",
        text_en: "Located in the Bay of Bengal and almost entirely surrounded by India, it is famous for its green landscapes and numerous rivers. Its flag is a dark green canvas with a red circle in the center representing the sun of freedom.",
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
        text_es: "Es el estado archipiélago más grande del planeta, compuesto por más de diecisiete mil islas, de las cuales unas seis mil están habitadas. Además, es el país con la mayor población musulmana del mundo y alberga el templo budista más grande jamás construido, una maravilla de piedra del siglo nueve.",
        text_en: "It is the largest archipelagic state on the planet, composed of more than seventeen thousand islands, of which about six thousand are inhabited. Additionally, it is the country with the largest Muslim population in the world and houses the largest Buddhist temple ever built, a stone marvel from the ninth century.",
      },
      {
        difficulty: "hard",
        text_es: "En sus selvas vive el único gran simio de Asia y en algunas de sus islas habita el lagarto más grande y pesado que existe, un depredador que parece un dragón moderno. También es el hogar del volcán con el lago de ácido más grande del mundo, famoso por emitir llamas de color azul eléctrico por la noche.",
        text_en: "In its jungles lives Asias only great ape, and on some of its islands lives the largest and heaviest lizard in existence, a predator that looks like a modern dragon. It is also home to the volcano with the worlds largest acid lake, famous for emitting electric blue flames at night.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los mayores productores mundiales de especias como la nuez moscada y el clavo, y produce el café más caro del mundo, procesado curiosamente por el sistema digestivo de un pequeño mamífero. Su capital actual es una de las ciudades que más rápido se hunde en el océano debido a la extracción de agua.",
        text_en: "It is one of the worlds largest producers of spices such as nutmeg and cloves, and produces the worlds most expensive coffee, curiously processed by the digestive system of a small mammal. Its current capital is one of the fastest-sinking cities in the ocean due to water extraction.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación tropical del sudeste asiático famosa por la isla de Bali y su increíble biodiversidad marina. Su bandera es muy minimalista, dividida horizontalmente en dos franjas iguales: roja arriba y blanca abajo, idéntica a la de Mónaco pero con proporciones distintas.",
        text_en: "A tropical Southeast Asian nation famous for the island of Bali and its incredible marine biodiversity. Its flag is very minimalist, horizontally divided into two equal stripes: red on top and white on the bottom, identical to Monacos but with different proportions.",
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
        text_es: "Es el país que ostenta el récord de tener la temporada navideña más larga del mundo, comenzando oficialmente en septiembre. Además, su bandera tiene una característica única en el planeta: se invierte colocando la franja roja arriba en tiempos de guerra.",
        text_en: "It is the country that holds the record for the longest Christmas season in the world, officially starting in September. Additionally, its flag has a unique feature on the planet: it is inverted by placing the red stripe on top during times of war.",
      },
      {
        difficulty: "hard",
        text_es: "Es un archipiélago de más de siete mil islas donde se hablan más de ciento setenta lenguas distintas. En una de sus regiones existe un fenómeno geológico de más de mil colinas de forma cónica perfecta que se vuelven marrones en la estación seca, pareciendo bombones gigantes.",
        text_en: "It is an archipelago of over seven thousand islands where more than one hundred and seventy different languages are spoken. In one of its regions, there is a geological phenomenon of over a thousand perfectly conical hills that turn brown in the dry season, looking like giant chocolates.",
      },
      {
        difficulty: "medium",
        text_es: "Fue una colonia española durante más de trescientos años, lo que dejó una huella profunda en su religión mayoritaria y en muchos de sus apellidos. Es uno de los mayores exportadores de cocos del mundo y su transporte público más famoso son antiguos jeeps militares decorados.",
        text_en: "It was a Spanish colony for over three hundred years, leaving a deep mark on its majority religion and many of its surnames. It is one of the worlds largest exporters of coconuts, and its most famous public transport is decorated old military jeeps.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular del sudeste asiático famosa por sus playas de arena blanca y sus arrozales en terrazas. Su bandera tiene una franja azul, una roja y un triángulo blanco con un sol de ocho rayos y tres estrellas doradas.",
        text_en: "An island nation in Southeast Asia famous for its white sand beaches and terraced rice paddies. Its flag has a blue stripe, a red stripe, and a white triangle with an eight-rayed sun and three golden stars.",
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
        text_es: "Es el mayor productor mundial de anacardos y el segundo de café, solo por detrás de Brasil. Además, alberga la cueva más grande del planeta, tan inmensa que tiene su propio ecosistema interno, con selva, nubes y un río caudaloso dentro.",
        text_en: "It is the worlds largest producer of cashews and the second largest of coffee, only behind Brazil. Additionally, it houses the largest cave on the planet, so immense that it has its own internal ecosystem, with a jungle, clouds, and a rushing river inside.",
      },
      {
        difficulty: "hard",
        text_es: "En este país, el apellido más común es compartido por casi el cuarenta por ciento de la población. Su moneda tiene uno de los valores más bajos del mundo, lo que convierte a cualquiera que cambie unos pocos euros en millonario en la moneda local de inmediato.",
        text_en: "In this country, the most common surname is shared by almost forty percent of the population. Its currency has one of the lowest values in the world, making anyone who exchanges a few euros a millionaire in local currency immediately.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por su gastronomía callejera basada en sopas de fideos y por el uso masivo de motocicletas que inundan sus ciudades. Su paisaje más icónico es una bahía con miles de formaciones de piedra caliza que emergen de aguas color esmeralda.",
        text_en: "It is famous for its street food based on noodle soups and for the massive use of motorcycles that flood its cities. Its most iconic landscape is a bay with thousands of limestone formations emerging from emerald waters.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del sudeste asiático que superó décadas de conflicto para convertirse en un motor económico. Su bandera es de un rojo intenso con una gran estrella dorada de cinco puntas en el centro que representa las clases sociales.",
        text_en: "A Southeast Asian nation that overcame decades of conflict to become an economic engine. Its flag is deep red with a large golden five-pointed star in the center representing the social classes.",
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
        text_es: "Es el país con la velocidad de internet más rápida del mundo y donde el uso de cosméticos masculinos es el más alto del planeta. Además, tienen una forma única de contar la edad: los bebés nacen con un año y todos cumplen años juntos el día de Año Nuevo.",
        text_en: "It is the country with the fastest internet speed in the world and where the use of male cosmetics is the highest on the planet. Additionally, they have a unique way of counting age: babies are born one year old and everyone ages together on New Years Day.",
      },
      {
        difficulty: "hard",
        text_es: "En su capital existe una cultura de trabajo y estudio tan intensa que es común encontrar cafeterías abiertas las veinticuatro horas. Es el líder mundial en robótica industrial y posee uno de los sistemas de transporte público más eficientes y tecnológicos del globo.",
        text_en: "In its capital, there is such an intense work and study culture that it is common to find twenty-four-hour cafes. It is the world leader in industrial robotics and possesses one of the most efficient and technological public transport systems in the globe.",
      },
      {
        difficulty: "medium",
        text_es: "Cuna de gigantes tecnológicos y del fenómeno musical K-pop que ha conquistado el mundo. Su comida nacional consiste en verduras fermentadas muy picantes que se sirven en casi todas las comidas y tienen museos dedicados exclusivamente a este plato.",
        text_en: "Birthplace of technological giants and the K-pop musical phenomenon that has conquered the world. Its national food consists of very spicy fermented vegetables served with almost every meal, and they have museums dedicated exclusively to this dish.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en una península del este de Asia, es famoso por sus dramas televisivos y su alta tecnología. Su bandera es blanca con un círculo rojo y azul en el centro (Taegeuk) y cuatro trigramas negros en las esquinas.",
        text_en: "Located on a peninsula in East Asia, it is famous for its television dramas and high technology. Its flag is white with a red and blue circle in the center (Taegeuk) and four black trigrams in the corners.",
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
        text_es: "Es una de las pocas ciudades-estado que existen en el mundo y su territorio ha crecido un veinticinco por ciento en las últimas décadas simplemente ganando tierra al mar. Es conocido por tener leyes extremadamente estrictas, como la prohibición de importar chicles.",
        text_en: "It is one of the few city-states in the world, and its territory has grown by twenty-five percent in recent decades simply by reclaiming land from the sea. It is known for having extremely strict laws, such as the ban on importing chewing gum.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga la cascada interior más alta del mundo dentro de un aeropuerto que parece un jardín botánico futurista. A pesar de ser una metrópolis densamente poblada, casi la mitad de su superficie está cubierta de vegetación, siendo una de las ciudades más verdes del planeta.",
        text_en: "It houses the worlds tallest indoor waterfall inside an airport that looks like a futuristic botanical garden. Despite being a densely populated metropolis, almost half of its surface is covered in vegetation, making it one of the greenest cities on the planet.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los centros financieros más importantes del mundo y tiene el puerto con mayor actividad de carga del globo. Su símbolo nacional es una criatura mítica con cabeza de león y cuerpo de pez que representa sus orígenes como pueblo pesquero.",
        text_en: "It is one of the worlds most important financial centers and has the busiest cargo port in the globe. Its national symbol is a mythical creature with a lions head and a fishs body representing its origins as a fishing village.",
      },
      {
        difficulty: "easy",
        text_es: "Un pequeño pero poderoso país insular en el extremo de la península malaya. Su bandera es roja sobre blanco, con una luna creciente blanca y cinco estrellas blancas en la esquina superior izquierda formando un círculo.",
        text_en: "A small but powerful island country at the tip of the Malay Peninsula. Its flag is red over white, with a white crescent moon and five white stars in the upper left corner forming a circle.",
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
        text_es: "Es el único país del mundo que tiene una monarquía rotativa, donde los sultanes de nueve estados diferentes se turnan para ser el Rey nacional cada cinco años. Además, alberga la flor individual más grande del mundo, que puede medir un metro de ancho.",
        text_en: "It is the only country in the world with a rotating monarchy, where the sultans of nine different states take turns being the national King every five years. Additionally, it houses the worlds largest individual flower, which can measure one meter across.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentran algunas de las cuevas más grandes del mundo, incluyendo una cámara tan inmensa que en su interior podrían caber cuarenta aviones Boeing 747. Está dividido en dos partes separadas por cientos de kilómetros de mar.",
        text_en: "In this territory lie some of the worlds largest caves, including a chamber so immense that forty Boeing 747 planes could fit inside. It is divided into two parts separated by hundreds of kilometers of sea.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por sus torres gemelas que fueron las más altas del mundo durante años y por su increíble mezcla de culturas malaya, china e india. Su selva tropical es una de las más antiguas del planeta, con más de ciento treinta millones de años.",
        text_en: "It is famous for its twin towers, which were the tallest in the world for years, and for its incredible mix of Malay, Chinese, and Indian cultures. Its tropical rainforest is one of the oldest on the planet, over one hundred and thirty million years old.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del sudeste asiático conocida por su diversidad y su capital moderna de grandes rascacielos. Su bandera tiene catorce franjas rojas y blancas y un cuadro azul con una luna creciente y una estrella de catorce puntas.",
        text_en: "A Southeast Asian nation known for its diversity and its modern capital of great skyscrapers. Its flag has fourteen red and white stripes and a blue square with a crescent moon and a fourteen-pointed star.",
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
        text_es: "Es el único país del mundo cuya bandera oficial no es cuadrangular, sino que está formada por dos banderines triangulares apilados. Además, es el lugar de nacimiento de Buda, nacido en un jardín sagrado en el sur del país en el siglo seis antes de Cristo.",
        text_en: "It is the only country in the world whose official flag is not quadrangular, but consists of two stacked triangular pennants. Additionally, it is the birthplace of Buddha, born in a sacred garden in the south of the country in the sixth century BC.",
      },
      {
        difficulty: "hard",
        text_es: "Posee una de las variaciones de altitud más extremas del planeta, pasando de los sesenta metros sobre el nivel del mar a más de ocho mil en una distancia muy corta. Es el hogar de los guerreros Gurkha, famosos mundialmente por su valentía y sus cuchillos curvos.",
        text_en: "It possesses one of the most extreme altitude variations on the planet, going from sixty meters above sea level to over eight thousand in a very short distance. It is home to the Gurkha warriors, world-famous for their bravery and their curved knives.",
      },
      {
        difficulty: "medium",
        text_es: "Es el destino principal para los montañeros, ya que alberga ocho de las diez montañas más altas del mundo. Su capital es un valle lleno de templos antiguos y estupas con ojos que todo lo ven, donde el tiempo parece haberse detenido entre montañas.",
        text_en: "It is the primary destination for mountaineers, as it houses eight of the ten highest mountains in the world. Its capital is a valley filled with ancient temples and stupas with all-seeing eyes, where time seems to have stopped among mountains.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del Himalaya situada entre la India y China, famosa por albergar el pico más alto de la Tierra. Su bandera roja tiene bordes azules y símbolos del sol y la luna en blanco.",
        text_en: "A Himalayan nation located between India and China, famous for housing the highest peak on Earth. Its red flag has blue borders and white symbols of the sun and the moon.",
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
        text_es: "Es el país donde se encuentra el árbol plantado por el ser humano más antiguo del mundo con una fecha de plantación conocida, un higo sagrado que llegó desde la India en el siglo tres antes de Cristo. Además, fue la primera nación de la historia moderna en tener una mujer como jefa de gobierno.",
        text_en: "It is the country where the oldest human-planted tree in the world with a known planting date is located, a sacred fig that arrived from India in the third century BC. Additionally, it was the first nation in modern history to have a woman as head of government.",
      },
      {
        difficulty: "hard",
        text_es: "Se la conoce como la capital mundial de la canela, ya que de aquí es originaria la variedad más pura y apreciada de esta especia. En sus costas, todavía se puede ver a pescadores que realizan su labor subidos a zancos clavados en el fondo del mar, una técnica única y ancestral.",
        text_en: "It is known as the cinnamon capital of the world, as the purest and most prized variety of this spice originates here. On its coasts, you can still see fishermen performing their work perched on stilts driven into the seabed, a unique and ancestral technique.",
      },
      {
        difficulty: "medium",
        text_es: "Esta isla con forma de lágrima es famosa por sus plantaciones de té en las tierras altas y por albergar una roca gigantesca convertida en fortaleza con frescos antiguos. Es un santuario para los elefantes salvajes y posee una de las mayores biodiversidades de Asia.",
        text_en: "This tear-shaped island is famous for its tea plantations in the highlands and for housing a gigantic rock turned into a fortress with ancient frescoes. It is a sanctuary for wild elephants and possesses one of the highest biodiversities in Asia.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular al sur de la India, conocida antiguamente como Ceilán. Su bandera es muy compleja, destacando un león dorado que sostiene una espada sobre un fondo granate, rodeado por cuatro hojas de higo sagrado.",
        text_en: "An island nation south of India, formerly known as Ceylon. Its flag is very complex, featuring a golden lion holding a sword against a maroon background, surrounded by four sacred fig leaves.",
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
        text_es: "Es el único país del mundo que tiene tres ciudades que funcionan como capitales distintas: una para el poder ejecutivo, otra para el legislativo y una tercera para el judicial. Además, fue la primera nación en desmantelar voluntariamente todo su programa de armas nucleares.",
        text_en: "It is the only country in the world that has three cities functioning as different capitals: one for the executive branch, another for the legislative, and a third for the judicial. Additionally, it was the first nation to voluntarily dismantle its entire nuclear weapons program.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentran algunos de los restos fósiles humanos más antiguos del planeta, en un área conocida como la cuna de la humanidad. Es el mayor productor mundial de platino y alberga un cráter de impacto de meteorito tan grande que es visible desde el espacio.",
        text_en: "In this territory lie some of the oldest human fossil remains on the planet, in an area known as the Cradle of Humankind. It is the worlds largest producer of platinum and houses a meteorite impact crater so large that it is visible from space.",
      },
      {
        difficulty: "medium",
        text_es: "Conocida como la nación del arco iris por su gran diversidad étnica, tiene once idiomas oficiales. Su historia reciente está marcada por la lucha contra la segregación racial y es famosa por sus safaris donde se pueden ver los cinco grandes animales de África.",
        text_en: "Known as the Rainbow Nation for its great ethnic diversity, it has eleven official languages. Its recent history is marked by the struggle against racial segregation and it is famous for its safaris where the Big Five animals of Africa can be seen.",
      },
      {
        difficulty: "easy",
        text_es: "El país situado en el extremo sur del continente africano, famoso por su vino y sus paisajes costeros. Su bandera es muy colorida, con un diseño en forma de Y horizontal que simboliza la convergencia y la unidad de sus pueblos.",
        text_en: "The country located at the southern tip of the African continent, famous for its wine and coastal landscapes. Its flag is very colorful, with a horizontal Y-shaped design symbolizing the convergence and unity of its peoples.",
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
        text_es: "Es el país más poblado de África y se proyecta que sea el tercero del mundo a finales de siglo. Su industria cinematográfica, conocida con un nombre muy similar al de Estados Unidos e India, es la segunda más grande del planeta por volumen de películas producidas por año.",
        text_en: "It is the most populous country in Africa and is projected to be the third in the world by the end of the century. Its film industry, known by a name very similar to those of the US and India, is the second largest on the planet by volume of films produced per year.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga a más de doscientos cincuenta grupos étnicos que hablan más de quinientos idiomas diferentes. Es el mayor productor de petróleo del continente y su ciudad más grande es una de las megaciudades de más rápido crecimiento y caos vibrante del globo.",
        text_en: "It is home to over two hundred and fifty ethnic groups speaking more than five hundred different languages. It is the continents largest oil producer and its largest city is one of the fastest-growing megacities and vibrant chaos of the globe.",
      },
      {
        difficulty: "medium",
        text_es: "Es una potencia económica y cultural conocida por su música afrobeat y su vibrante literatura. A pesar de su riqueza en recursos, se enfrenta a grandes retos de desigualdad. Su geografía varía desde manglares tropicales en el sur hasta sabanas secas en el norte.",
        text_en: "It is an economic and cultural powerhouse known for its Afrobeat music and vibrant literature. Despite its wealth in resources, it faces great challenges of inequality. Its geography varies from tropical mangroves in the south to dry savannas in the north.",
      },
      {
        difficulty: "easy",
        text_es: "Una gran nación del oeste de África que es un gigante económico regional. Su bandera es muy sencilla y elegante, compuesta por tres franjas verticales iguales de colores verde, blanco y verde.",
        text_en: "A large West African nation that is a regional economic giant. Its flag is very simple and elegant, composed of three equal vertical stripes of green, white, and green.",
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
        text_es: "Es el país que ostenta el título de ser el mayor exportador de flores cortadas hacia Europa, especialmente rosas. Además, en este territorio se encuentra un lago que es el hogar de la mayor colonia de flamencos rosas del mundo, tiñendo las aguas de un color espectacular.",
        text_en: "It is the country that holds the title of being the largest exporter of cut flowers to Europe, especially roses. Additionally, in this territory lies a lake that is home to the worlds largest colony of pink flamingos, dyeing the waters a spectacular color.",
      },
      {
        difficulty: "hard",
        text_es: "Sus atletas son mundialmente famosos por dominar las carreras de larga distancia y maratones. El país también es un líder global en tecnología móvil aplicada a las finanzas, habiendo desarrollado un sistema de pagos por SMS que revolucionó la economía de sus zonas rurales.",
        text_en: "Its athletes are world-famous for dominating long-distance races and marathons. The country is also a global leader in mobile technology applied to finance, having developed an SMS payment system that revolutionized the economy of its rural areas.",
      },
      {
        difficulty: "medium",
        text_es: "Es el destino por excelencia para ver la gran migración anual de millones de ñus y cebras a través de la sabana. Su cultura es una mezcla de tradiciones ancestrales de tribus guerreras y una vibrante vida urbana en su capital moderna rodeada de parques nacionales.",
        text_en: "It is the quintessential destination to see the great annual migration of millions of wildebeests and zebras across the savanna. Its culture is a blend of ancestral traditions of warrior tribes and a vibrant urban life in its modern capital surrounded by national parks.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del este de África famosa por sus safaris y su costa en el océano Índico. Su bandera tiene franjas negras, rojas y verdes con bordes blancos, y en el centro destaca un escudo de guerrero masái con dos lanzas cruzadas.",
        text_en: "An East African nation famous for its safaris and its Indian Ocean coastline. Its flag has black, red, and green stripes with white edges, and in the center, a Maasai warrior shield with two crossed spears stands out.",
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
        text_es: "Es la única nación africana que nunca fue colonizada formalmente por una potencia europea, manteniendo su independencia durante el reparto de África. Además, sigue su propio calendario de trece meses, que tiene siete años de retraso con respecto al calendario occidental.",
        text_en: "It is the only African nation that was never formally colonized by a European power, maintaining its independence during the Scramble for Africa. Additionally, it follows its own thirteen-month calendar, which is seven years behind the Western calendar.",
      },
      {
        difficulty: "hard",
        text_es: "Es el lugar de origen del café, donde según la leyenda un pastor descubrió sus efectos tras ver a sus cabras saltar con energía al comer sus frutos. Alberga iglesias medievales talladas íntegramente en roca bajo el nivel del suelo, formando estructuras subterráneas asombrosas.",
        text_en: "It is the birthplace of coffee, where according to legend a shepherd discovered its effects after seeing his goats leap with energy after eating its fruits. It houses medieval churches carved entirely out of rock below ground level, forming amazing underground structures.",
      },
      {
        difficulty: "medium",
        text_es: "Situado en el Cuerno de África, es un país sin salida al mar con una de las historias más antiguas del mundo. Es famoso por ser el lugar donde se encontró el esqueleto de uno de nuestros antepasados más famosos, apodado Lucy. Su gastronomía se basa en un pan plano y esponjoso.",
        text_en: "Located in the Horn of Africa, it is a landlocked country with one of the oldest histories in the world. It is famous for being the place where the skeleton of one of our most famous ancestors, nicknamed Lucy, was found. Its gastronomy is based on a flat, spongy bread.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación de tierras altas y profundas tradiciones cristianas y musulmanas. Su bandera tiene tres franjas horizontales de colores verde, amarillo y rojo, con un círculo azul y un pentagrama dorado en el centro que simboliza la unidad.",
        text_en: "A nation of highlands and deep Christian and Muslim traditions. Its flag has three horizontal stripes of green, yellow, and red, with a blue circle and a golden pentagram in the center symbolizing unity.",
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
        text_es: "Es el país más grande de África por superficie total tras la división de Sudán. Más del ochenta por ciento de su territorio está cubierto por el desierto del Sahara, donde se encuentran dunas que pueden alcanzar los ciento ochenta metros de altura.",
        text_en: "It is the largest country in Africa by total surface area following the division of Sudan. More than eighty percent of its territory is covered by the Sahara Desert, where dunes can reach one hundred and eighty meters in height.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga una de las mayores reservas de gas natural y petróleo del mundo. En sus montañas del sur existen miles de pinturas y grabados rupestres prehistóricos que muestran que hace miles de años esa zona desértica era un paraíso lleno de lagos y animales salvajes.",
        text_en: "It houses one of the largest natural gas and oil reserves in the world. In its southern mountains, there are thousands of prehistoric rock paintings and engravings showing that thousands of years ago that desert area was a paradise filled with lakes and wild animals.",
      },
      {
        difficulty: "medium",
        text_es: "Su historia está marcada por una cruenta guerra de independencia contra Francia. Es una nación donde la influencia árabe, bereber y mediterránea se mezclan en su arquitectura y comida. Posee una de las mezquitas más grandes del mundo con el minarete más alto que existe.",
        text_en: "Its history is marked by a bloody war of independence against France. It is a nation where Arabic, Berber, and Mediterranean influences blend in its architecture and food. It possesses one of the largest mosques in the world with the tallest minaret in existence.",
      },
      {
        difficulty: "easy",
        text_es: "Una gran nación del norte de África con una extensa costa mediterránea. Su bandera está dividida verticalmente en verde y blanco, con una media luna y una estrella roja en el centro que simbolizan el islam y la sangre derramada por la libertad.",
        text_en: "A large North African nation with an extensive Mediterranean coastline. Its flag is vertically divided into green and white, with a red crescent and star in the center symbolizing Islam and the blood shed for freedom.",
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
        text_es: "Es el país más septentrional de África y donde se encontraba la antigua Cartago, la gran rival de Roma. Fue el lugar donde se inició la Primavera Árabe en 2010 y es conocido por ser uno de los países más progresistas del mundo árabe en cuanto a derechos de las mujeres.",
        text_en: "It is the northernmost country in Africa and where ancient Carthage, Romas great rival, was located. It was the place where the Arab Spring began in 2010 and is known for being one of the most progressive countries in the Arab world regarding womens rights.",
      },
      {
        difficulty: "hard",
        text_es: "Sus paisajes desérticos y viviendas subterráneas fueron tan impactantes que sirvieron como escenario principal para rodar una de las sagas de ciencia ficción más famosas del cine, dando nombre incluso a un planeta ficticio basado en una de sus regiones reales.",
        text_en: "Its desert landscapes and underground dwellings were so striking that they served as the main setting for filming one of cinemas most famous science fiction sagas, even naming a fictional planet after one of its real regions.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por sus mosaicos romanos perfectamente conservados y por sus pueblos de casas blancas con puertas de color azul brillante. Su gastronomía destaca por el uso de la harissa, una pasta de pimiento picante que acompaña a casi todos los platos.",
        text_en: "It is famous for its perfectly preserved Roman mosaics and its villages of white houses with bright blue doors. Its gastronomy stands out for the use of harissa, a spicy chili paste that accompanies almost every dish.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación mediterránea pequeña pero rica en historia, situada entre Argelia y Libia. Su bandera es de color rojo con un círculo blanco central que contiene una media luna y una estrella roja, muy similar a la bandera de Turquía.",
        text_en: "A small but history-rich Mediterranean nation, located between Algeria and Libya. Its flag is red with a central white circle containing a red crescent and star, very similar to the Turkish flag.",
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
        text_es: "Fue el primer país del África subsahariana en alcanzar la independencia del dominio colonial en mil novecientos cincuenta y siete. Además, alberga el lago artificial más grande del mundo por superficie, creado por una inmensa presa que genera energía para gran parte de la región.",
        text_en: "It was the first country in sub-Saharan Africa to achieve independence from colonial rule in nineteen fifty-seven. Additionally, it houses the worlds largest artificial lake by surface area, created by a massive dam that generates power for much of the region.",
      },
      {
        difficulty: "hard",
        text_es: "Es el segundo mayor productor de cacao del planeta y sus artesanos son mundialmente famosos por crear ataúdes personalizados con formas increíbles, desde peces hasta coches de lujo, que reflejan la vida o los sueños del difunto.",
        text_en: "It is the worlds second-largest cocoa producer and its artisans are world-famous for creating custom coffins with incredible shapes, from fish to luxury cars, reflecting the life or dreams of the deceased.",
      },
      {
        difficulty: "medium",
        text_es: "Conocido históricamente como la Costa de Oro, posee castillos coloniales que son testigos de una historia sombría. Su cultura es famosa por las coloridas telas Kente, tejidas con patrones geométricos que tienen significados espirituales y políticos profundos.",
        text_en: "Historically known as the Gold Coast, it possesses colonial castles that bear witness to a somber history. Its culture is famous for colorful Kente cloths, woven with geometric patterns that have deep spiritual and political meanings.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del oeste de África conocida por su estabilidad y su vibrante capital costera. Su bandera tiene franjas horizontales rojas, amarillas y verdes, con una estrella negra de cinco puntas en el centro que simboliza la libertad africana.",
        text_en: "A West African nation known for its stability and its vibrant coastal capital. Its flag has red, yellow, and green horizontal stripes, with a black five-pointed star in the center symbolizing African freedom.",
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
        text_es: "Es el punto más occidental del continente africano y alberga una isla que fue el mayor centro de comercio de esclavos de la costa africana durante siglos. Su primer presidente fue un reconocido poeta que creía firmemente en la unión cultural de África.",
        text_en: "It is the westernmost point of the African continent and houses an island that was the largest slave trading center on the African coast for centuries. Its first president was a renowned poet who firmly believed in the cultural union of Africa.",
      },
      {
        difficulty: "hard",
        text_es: "Posee un lago de color rosa brillante, causado por un tipo de alga que produce un pigmento rojo para sobrevivir a la altísima concentración de sal. Además, su deporte nacional no es el fútbol, sino una forma de lucha tradicional que llena estadios enteros.",
        text_en: "It possesses a bright pink lake, caused by a type of algae that produces a red pigment to survive the very high salt concentration. Additionally, its national sport is not soccer, but a form of traditional wrestling that fills entire stadiums.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por la hospitalidad de su gente, un concepto cultural tan importante que tiene su propio nombre nativo. Sus paisajes destacan por los majestuosos baobabs milenarios y fue durante décadas la meta del rally más famoso y peligroso del mundo.",
        text_en: "It is famous for the hospitality of its people, a cultural concept so important that it has its own native name. Its landscapes stand out for the majestic millenary baobabs and it was for decades the finish line of the worlds most famous and dangerous rally.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del oeste de África que rodea casi por completo a otro pequeño país. Su bandera tiene tres franjas verticales de colores verde, amarillo y rojo, con una estrella verde de cinco puntas en el centro.",
        text_en: "A West African nation that almost completely surrounds another small country. Its flag has three vertical stripes of green, yellow, and red, with a green five-pointed star in the center.",
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
        text_es: "Es la cuarta isla más grande del mundo y se separó del resto de los continentes hace casi noventa millones de años, lo que permitió que el noventa por ciento de su flora y fauna sea única y no se encuentre en ningún otro lugar de la Tierra.",
        text_en: "It is the fourth largest island in the world and separated from the rest of the continents nearly ninety million years ago, allowing ninety percent of its flora and fauna to be unique and found nowhere else on Earth.",
      },
      {
        difficulty: "hard",
        text_es: "Es el mayor productor mundial de vainilla, una orquídea que debe ser polinizada a mano en la isla debido a la ausencia de sus polinizadores naturales. Su población tiene una mezcla fascinante de raíces africanas y del sudeste asiático, visible en sus rasgos y costumbres.",
        text_en: "It is the worlds largest producer of vanilla, an orchid that must be hand-pollinated on the island due to the absence of its natural pollinators. Its population has a fascinating mix of African and Southeast Asian roots, visible in their features and customs.",
      },
      {
        difficulty: "medium",
        text_es: "Famosa por sus lémures y por la impresionante Avenida de los Baobabs, donde estos árboles gigantes flanquean un camino de tierra. Su geografía incluye desde selvas tropicales lluviosas hasta desiertos de formaciones de piedra caliza afiladas como cuchillas.",
        text_en: "Famous for its lemurs and the impressive Avenue of the Baobabs, where these giant trees flank a dirt road. Its geography ranges from tropical rainforests to deserts of limestone formations sharp as blades.",
      },
      {
        difficulty: "easy",
        text_es: "Una inmensa nación insular frente a la costa sureste de África. Su bandera está compuesta por una franja vertical blanca en el lado del mástil y dos franjas horizontales, una roja arriba y una verde abajo.",
        text_en: "An immense island nation off the southeast coast of Africa. Its flag is composed of a white vertical stripe on the hoist side and two horizontal stripes, one red on top and one green on the bottom.",
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
        text_es: "Es el país más largo y estrecho del mundo en proporción a su anchura, extendiéndose a través de treinta y ocho grados de latitud. Alberga el lugar más seco de la Tierra fuera de los polos, donde hay estaciones meteorológicas que nunca han registrado una gota de lluvia.",
        text_en: "It is the longest and narrowest country in the world in proportion to its width, spanning thirty-eight degrees of latitude. It houses the driest place on Earth outside the poles, where there are weather stations that have never recorded a drop of rain.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra la mayor reserva de litio del planeta y es el principal productor mundial de cobre. Además, posee una isla remota en el Pacífico famosa por cientos de estatuas de piedra gigantescas cuyo origen y transporte siguen siendo un misterio.",
        text_en: "In this territory lies the largest lithium reserve on the planet and it is the worlds leading copper producer. Additionally, it possesses a remote island in the Pacific famous for hundreds of giant stone statues whose origin and transport remain a mystery.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país de contrastes extremos, con glaciares milenarios en el sur y observatorios astronómicos de vanguardia en el norte debido a la claridad de sus cielos. Su gastronomía destaca por sus vinos de alta calidad y platos basados en mariscos frescos del Pacífico.",
        text_en: "It is a country of extreme contrasts, with millenary glaciers in the south and cutting-edge astronomical observatories in the north due to the clarity of its skies. Its gastronomy stands out for its high-quality wines and dishes based on fresh Pacific seafood.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación sudamericana situada entre la cordillera de los Andes y el océano Pacífico. Su bandera es roja, blanca y azul, con una sola estrella blanca que le da el apodo de La Estrella Solitaria.",
        text_en: "A South American nation located between the Andes Mountains and the Pacific Ocean. Its flag is red, white, and blue, with a single white star that gives it the nickname The Lone Star.",
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
        text_es: "Es el lugar de origen de la patata, habiéndose cultivado miles de variedades diferentes en sus tierras altas desde hace ocho mil años. Además, posee una de las ciudades habitadas a mayor altitud del mundo y un cañón que es el doble de profundo que el Gran Cañón de EE. UU.",
        text_en: "It is the birthplace of the potato, with thousands of different varieties having been cultivated in its highlands for eight thousand years. Additionally, it possesses one of the highest inhabited cities in the world and a canyon that is twice as deep as the US Grand Canyon.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga un desierto costero donde se encuentran dibujos gigantescos grabados en la tierra que solo pueden apreciarse por completo desde el aire. Su selva amazónica cubre más de la mitad del país y es una de las zonas con mayor biodiversidad de aves del globo.",
        text_en: "It houses a coastal desert where giant drawings engraved in the earth are found that can only be fully appreciated from the air. Its Amazon rainforest covers more than half of the country and is one of the areas with the highest bird biodiversity in the globe.",
      },
      {
        difficulty: "medium",
        text_es: "Fue el centro del imperio más grande de la América precolombina y es mundialmente famoso por una ciudadela de piedra construida en la cima de una montaña. Su gastronomía es considerada una de las mejores del mundo, destacando el pescado crudo marinado en cítricos.",
        text_en: "It was the center of the largest empire in pre-Columbian America and is world-famous for a stone citadel built on a mountaintop. Its gastronomy is considered one of the best in the world, highlighting raw fish marinated in citrus.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación andina con una rica herencia inca y una vibrante cultura actual. Su bandera tiene tres franjas verticales iguales, siendo las dos de los extremos rojas y la del centro blanca.",
        text_en: "An Andean nation with a rich Inca heritage and a vibrant current culture. Its flag has three equal vertical stripes, with the two outer ones being red and the middle one being white.",
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
        text_es: "Es el único país de Sudamérica que tiene costas tanto en el océano Pacífico como en el mar Caribe. Además, es el principal productor mundial de esmeraldas de alta calidad y posee el mayor número de especies de aves y orquídeas de todo el planeta.",
        text_en: "It is the only country in South America that has coasts on both the Pacific Ocean and the Caribbean Sea. Additionally, it is the worlds leading producer of high-quality emeralds and possesses the largest number of bird and orchid species on the planet.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra la palma de cera, el árbol nacional que puede crecer hasta los sesenta metros de altura en valles andinos nublados. Es también la cuna de un estilo literario que mezcla lo real con lo fantástico, creado por su autor más universal.",
        text_en: "In this territory, the wax palm is found, the national tree that can grow up to sixty meters high in cloudy Andean valleys. It is also the birthplace of a literary style that mixes the real with the fantastic, created by its most universal author.",
      },
      {
        difficulty: "medium",
        text_es: "Es mundialmente famoso por producir uno de los mejores cafés suaves del globo y por sus vibrantes festivales de flores y carnavales. Su capital se encuentra en una alta sabana andina y es un importante centro cultural conocido como la Atenas de Sudamérica.",
        text_en: "It is world-famous for producing some of the best mild coffee in the globe and for its vibrant flower festivals and carnivals. Its capital is located on a high Andean savanna and is an important cultural center known as the Athens of South America.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación sudamericana conocida por su alegría, su música de acordeón y sus dos océanos. Su bandera tiene tres franjas horizontales: una amarilla más ancha arriba, y dos franjas iguales de color azul y rojo debajo.",
        text_en: "A South American nation known for its joy, its accordion music, and its two oceans. Its flag has three horizontal stripes: a wider yellow one on top, and two equal stripes of blue and red below.",
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
        text_es: "Es el país que posee las mayores reservas probadas de petróleo del mundo, superando incluso a Arabia Saudita. Además, alberga la caída de agua más alta del planeta, que se desploma desde una meseta plana a casi mil metros de altura.",
        text_en: "It is the country that possesses the largest proven oil reserves in the world, even surpassing Saudi Arabia. Additionally, it houses the highest waterfall on the planet, which drops from a flat plateau at almost a thousand meters high.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio existen unas formaciones rocosas llamadas tepuyes que se encuentran entre las más antiguas de la tierra. También posee un fenómeno meteorológico único donde se producen miles de relámpagos por hora en una zona específica durante gran parte del año.",
        text_en: "In this territory, there are rock formations called tepuis that are among the oldest on earth. It also possesses a unique meteorological phenomenon where thousands of lightning bolts are produced per hour in a specific area for much of the year.",
      },
      {
        difficulty: "medium",
        text_es: "Es famosa por sus espectaculares paisajes que van desde los Andes hasta playas caribeñas, y por su gastronomía basada en tortas de maíz rellenas. Ha sido cuna de importantes figuras históricas que lideraron la independencia de varios países sudamericanos.",
        text_en: "It is famous for its spectacular landscapes ranging from the Andes to Caribbean beaches, and for its gastronomy based on stuffed corn cakes. It has been the birthplace of important historical figures who led the independence of several South American countries.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación situada al norte de Sudamérica con una fuerte cultura caribeña. Su bandera tiene tres franjas iguales de colores amarillo, azul y rojo, con un arco de ocho estrellas blancas en la franja central.",
        text_en: "A nation located in northern South America with a strong Caribbean culture. Its flag has three equal stripes of yellow, blue, and red, with an arc of eight white stars in the middle stripe.",
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
        text_es: "Es la isla más grande del Caribe y posee uno de los sistemas de alfabetización y salud más desarrollados de la región. Fue la última colonia española en América en lograr su independencia tras una guerra en la que intervino Estados Unidos.",
        text_en: "It is the largest island in the Caribbean and possesses one of the most developed literacy and healthcare systems in the region. It was the last Spanish colony in America to achieve independence after a war in which the United States intervened.",
      },
      {
        difficulty: "hard",
        text_es: "Sus calles son famosas por albergar miles de coches clásicos americanos de los años cincuenta que siguen funcionando gracias al ingenio de sus mecánicos. Además, es el hogar del pájaro más pequeño del mundo, que apenas mide cinco centímetros.",
        text_en: "Its streets are famous for housing thousands of classic American cars from the 1950s that keep running thanks to the ingenuity of its mechanics. Additionally, it is home to the worlds smallest bird, which measures barely five centimeters.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocida mundialmente por su música, su ron y la alta calidad de su tabaco torcido a mano. Su capital conserva un casco histórico que es Patrimonio de la Humanidad, con fortalezas y plazas coloniales que parecen detenidas en el tiempo.",
        text_en: "It is known worldwide for its music, its rum, and the high quality of its hand-rolled tobacco. Its capital preserves a historic center that is a World Heritage site, with colonial fortresses and squares that seem frozen in time.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular con una historia revolucionaria muy marcada y un fuerte amor por el béisbol. Su bandera tiene cinco franjas horizontales azules y blancas, con un triángulo rojo y una estrella blanca en el lado del mástil.",
        text_en: "An island nation with a very marked revolutionary history and a strong love for baseball. Its flag has five horizontal blue and white stripes, with a red triangle and a white star on the hoist side.",
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
        text_es: "Comparte su isla con otro país y alberga la ciudad más antigua fundada por europeos en todo el continente americano. Además, en su territorio se encuentra tanto el punto más alto como el punto más bajo sobre el nivel del mar de todo el Caribe.",
        text_en: "It shares its island with another country and houses the oldest city founded by Europeans in the entire American continent. Additionally, in its territory lie both the highest point and the lowest point above sea level in the entire Caribbean.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único lugar del mundo donde se puede encontrar Larimar, una piedra semipreciosa de color azul turquesa. También es famosa por sus minas de ámbar, que contienen fósiles de insectos prehistóricos increíblemente bien conservados.",
        text_en: "It is the only place in the world where Larimar can be found, a turquoise-blue semi-precious stone. It is also famous for its amber mines, which contain incredibly well-preserved prehistoric insect fossils.",
      },
      {
        difficulty: "medium",
        text_es: "Es la cuna de ritmos musicales que se bailan en todo el mundo, como el merengue y la bachata. Sus playas de arena blanca y palmeras son un destino turístico global, y su capital tiene la primera catedral construida en el Nuevo Mundo.",
        text_en: "It is the birthplace of musical rhythms danced worldwide, such as merengue and bachata. Its white sand beaches and palm trees are a global tourist destination, and its capital has the first cathedral built in the New World.",
      },
      {
        difficulty: "easy",
        text_es: "Un país caribeño muy apasionado por el béisbol que comparte la isla de La Española. Su bandera está dividida en cuatro rectángulos de colores azul y rojo por una cruz blanca, con el escudo nacional en el centro.",
        text_en: "A Caribbean country very passionate about baseball that shares the island of Hispaniola. Its flag is divided into four blue and red rectangles by a white cross, with the national coat of arms in the center.",
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
        text_es: "Es la nación con el mayor número de iglesias por kilómetro cuadrado del mundo y fue el primer país occidental en prohibir oficialmente el comercio de esclavos. Además, sus atletas han dominado históricamente las pruebas de velocidad en los Juegos Olímpicos.",
        text_en: "It is the nation with the highest number of churches per square kilometer in the world and was the first Western country to officially ban the slave trade. Additionally, its athletes have historically dominated sprinting events in the Olympic Games.",
      },
      {
        difficulty: "hard",
        text_es: "Produce uno de los cafés más caros y exclusivos del mundo en sus montañas azules, que a menudo están envueltas en niebla. Es también el lugar de nacimiento de un movimiento espiritual y cultural que utiliza los colores rojo, amarillo y verde como símbolo.",
        text_en: "It produces one of the worlds most expensive and exclusive coffees in its Blue Mountains, which are often shrouded in mist. It is also the birthplace of a spiritual and cultural movement that uses red, yellow, and green colors as symbols.",
      },
      {
        difficulty: "medium",
        text_es: "Es una isla famosa mundialmente por ser la cuna del reggae y de su mayor icono musical. Su cultura es una mezcla vibrante de influencias africanas y británicas, y su gastronomía es conocida por el uso de especias muy picantes en carnes ahumadas.",
        text_en: "It is an island world-famous for being the birthplace of reggae and its greatest musical icon. Its culture is a vibrant mix of African and British influences, and its gastronomy is known for the use of very spicy seasonings on smoked meats.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular caribeña de habla inglesa conocida por su ambiente relajado y sus playas. Su bandera es única porque no contiene ninguno de los colores tradicionales (rojo, blanco o azul), teniendo una gran X amarilla sobre verde y negro.",
        text_en: "An English-speaking Caribbean island nation known for its relaxed atmosphere and beaches. Its flag is unique because it contains none of the traditional colors (red, white, or blue), having a large yellow X over green and black.",
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
        text_es: "Es uno de los pocos países del mundo que no tiene ejército, habiéndolo abolido en mil novecientos cuarenta y ocho para invertir esos recursos en educación y salud. Además, genera casi el cien por cien de su electricidad a partir de fuentes renovables.",
        text_en: "It is one of the few countries in the world that has no army, having abolished it in nineteen forty-eight to invest those resources in education and health. Additionally, it generates nearly one hundred percent of its electricity from renewable sources.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de ocupar solo el cero coma cero tres por ciento de la superficie terrestre, alberga el cinco por ciento de la biodiversidad mundial. Es el hogar de cientos de volcanes, de los cuales varios están activos y rodeados de bosques nubosos únicos.",
        text_en: "Despite occupying only zero point zero three percent of the earths surface, it houses five percent of the worlds biodiversity. It is home to hundreds of volcanoes, several of which are active and surrounded by unique cloud forests.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por su lema nacional que refleja una filosofía de vida optimista y relajada, y por ser un destino líder en ecoturismo. Su gastronomía típica incluye un plato de arroz y frijoles que se consume principalmente en el desayuno.",
        text_en: "It is famous for its national motto that reflects an optimistic and relaxed philosophy of life, and for being a leading destination in ecotourism. Its typical gastronomy includes a rice and beans dish consumed mainly for breakfast.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación centroamericana situada entre Nicaragua y Panamá, conocida por su naturaleza y sus dos costas. Su bandera tiene franjas horizontales azules, blancas y una franja roja más ancha en el centro.",
        text_en: "A Central American nation located between Nicaragua and Panama, known for its nature and its two coasts. Its flag has blue and white horizontal stripes and a wider red stripe in the center.",
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
        text_es: "Es el único lugar del mundo donde se puede ver salir el sol sobre el Pacífico y ponerse sobre el Atlántico desde el mismo punto debido a la curvatura del istmo. Además, es el país con la mayor flota de barcos registrados bajo su bandera en todo el globo.",
        text_en: "It is the only place in the world where you can see the sun rise over the Pacific and set over the Atlantic from the same spot due to the curvature of the isthmus. Additionally, it is the country with the largest fleet of ships registered under its flag in the entire globe.",
      },
      {
        difficulty: "hard",
        text_es: "Su capital es la única ciudad del mundo que tiene una selva tropical virgen dentro de los límites metropolitanos. El país fue creado geológicamente hace tres millones de años, uniendo América del Norte y del Sur y cambiando las corrientes oceánicas del planeta para siempre.",
        text_en: "Its capital is the only city in the world that has a virgin tropical rainforest within metropolitan limits. The country was geologically created three million years ago, joining North and South America and changing the planets ocean currents forever.",
      },
      {
        difficulty: "medium",
        text_es: "Es mundialmente famoso por una monumental obra de ingeniería que conecta dos océanos y por ser un centro financiero y logístico clave. Su moneda oficial está ligada al valor del dólar estadounidense y tiene un sombrero tradicional que, curiosamente, se originó en Ecuador.",
        text_en: "It is world-famous for a monumental engineering work that connects two oceans and for being a key financial and logistical hub. Its official currency is tied to the value of the US dollar and it has a traditional hat that, curiously, originated in Ecuador.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación que une Centroamérica y Sudamérica, famosa por su canal interoceánico. Su bandera está dividida en cuatro rectángulos: dos blancos (con una estrella azul y otra roja), uno azul y uno rojo.",
        text_en: "A nation that joins Central and South America, famous for its interoceanic canal. Its flag is divided into four rectangles: two white (with a blue and a red star), one blue and one red.",
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
        text_es: "Es el país que organizó y ganó el primer mundial de fútbol de la historia en mil novecientos treinta. Además, fue la primera nación de Latinoamérica en legalizar el matrimonio igualitario, el divorcio por la sola voluntad de la mujer y la producción de marihuana.",
        text_en: "It is the country that organized and won the first soccer world cup in history in nineteen thirty. Additionally, it was the first nation in Latin America to legalize equal marriage, divorce by the sole will of the woman, and marijuana production.",
      },
      {
        difficulty: "hard",
        text_es: "Tiene más vacas que personas, con una proporción de casi cuatro animales por cada habitante, y posee un sistema de trazabilidad que permite conocer el origen de cada corte de carne. Su territorio es mayoritariamente llano, compuesto por penillanuras y suaves colinas.",
        text_en: "It has more cows than people, with a ratio of nearly four animals for every inhabitant, and has a traceability system that allows knowing the origin of every cut of meat. Its territory is mostly flat, composed of peneplains and gentle hills.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocido por ser uno de los países más estables, democráticos y menos corruptos de Sudamérica. Su cultura está profundamente ligada al consumo de mate y posee algunas de las playas más exclusivas del Atlántico sur, donde veraneaba la aristocracia regional.",
        text_en: "It is known for being one of the most stable, democratic, and least corrupt countries in South America. Its culture is deeply linked to the consumption of mate and it possesses some of the most exclusive beaches in the South Atlantic, where regional aristocracy vacationed.",
      },
      {
        difficulty: "easy",
        text_es: "Una pequeña pero próspera nación situada entre dos gigantes sudamericanos, Argentina y Brasil. Su bandera tiene nueve franjas blancas y azules con un sol dorado con rostro en la esquina superior izquierda.",
        text_en: "A small but prosperous nation situated between two South American giants, Argentina and Brazil. Its flag has nine white and blue stripes with a golden sun with a face in the upper left corner.",
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
        text_es: "Es la única nación del mundo cuya bandera oficial tiene dos escudos diferentes: uno en el anverso y otro en el reverso. Además, es una de las mayores potencias en generación de energía hidroeléctrica del planeta, exportando la mayor parte de lo que produce.",
        text_en: "It is the only nation in the world whose official flag has two different coats of arms: one on the front and another on the back. Additionally, it is one of the worlds major powers in hydroelectric power generation, exporting most of what it produces.",
      },
      {
        difficulty: "hard",
        text_es: "Se le conoce como el corazón de Sudamérica debido a su ubicación central y es el país con la mayor población bilingüe de la región, donde el idioma indígena tiene el mismo estatus oficial que el español y es hablado por casi todos sus habitantes.",
        text_en: "It is known as the heart of South America due to its central location and is the country with the largest bilingual population in the region, where the indigenous language has the same official status as Spanish and is spoken by almost all its inhabitants.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país sin salida al mar que depende de sus grandes ríos navegables para el comercio internacional. Su cultura destaca por un encaje artesanal muy fino llamado Ñandutí y por el consumo masivo de una versión fría del mate ideal para su clima caluroso.",
        text_en: "It is a landlocked country that depends on its large navigable rivers for international trade. Its culture stands out for a very fine artisanal lace called Ñandutí and for the massive consumption of a cold version of mate ideal for its hot climate.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación sudamericana situada entre Bolivia, Brasil y Argentina. Su bandera tiene tres franjas horizontales de colores rojo, blanco y azul, con un escudo circular en el centro que varía según el lado que se mire.",
        text_en: "A South American nation located between Bolivia, Brazil, and Argentina. Its flag has three horizontal stripes of red, white, and blue, with a circular coat of arms in the center that varies depending on the side viewed.",
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
        text_es: "Alberga el espejo natural más grande de la tierra, una extensión de sal de más de diez mil kilómetros cuadrados que contiene la mayor reserva de litio del mundo. Además, es el país con el mayor número de idiomas oficiales del planeta, con treinta y siete en total.",
        text_en: "It houses the largest natural mirror on earth, a salt expanse of over ten thousand square kilometers that contains the worlds largest lithium reserve. Additionally, it is the country with the highest number of official languages on the planet, with thirty-seven in total.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra el lago navegable más alto del mundo y una de las carreteras más peligrosas y espectaculares del globo que desciende desde los Andes hasta la selva. Posee dos capitales, una que es la sede del gobierno y otra que es la capital constitucional.",
        text_en: "In this territory lies the worlds highest navigable lake and one of the most dangerous and spectacular roads in the globe that descends from the Andes to the jungle. It has two capitals, one that is the seat of government and another that is the constitutional capital.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación con una fuerte identidad indígena y paisajes que van desde picos nevados hasta la llanura amazónica. Es famosa por sus coloridos mercados, sus trajes tradicionales y por haber perdido su acceso al mar en una guerra a finales del siglo diecinueve.",
        text_en: "It is a nation with a strong indigenous identity and landscapes ranging from snowy peaks to the Amazonian plain. It is famous for its colorful markets, traditional costumes, and for having lost its access to the sea in a war at the end of the nineteenth century.",
      },
      {
        difficulty: "easy",
        text_es: "Un país sudamericano sin salida al mar situado en el corazón de los Andes. Su bandera tiene tres franjas horizontales iguales: roja arriba, amarilla en el centro y verde abajo.",
        text_en: "A landlocked South American country located in the heart of the Andes. Its flag has three equal horizontal stripes: red on top, yellow in the middle, and green on the bottom.",
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
        text_es: "Es el país que posee el punto de la superficie terrestre más cercano al sol y al espacio exterior, debido a que la Tierra no es una esfera perfecta y es más ancha en el ecuador. Además, fue el primer país del mundo en reconocer derechos constitucionales a la naturaleza.",
        text_en: "It is the country that possesses the point on the earths surface closest to the sun and outer space, because the Earth is not a perfect sphere and is wider at the equator. Additionally, it was the first country in the world to recognize constitutional rights for nature.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga un archipiélago famoso por ser el laboratorio natural que inspiró la teoría de la evolución. Es el mayor exportador de bananas del mundo y en su territorio se encuentra la mayor biodiversidad por kilómetro cuadrado del planeta, especialmente en anfibios y aves.",
        text_en: "It houses an archipelago famous for being the natural laboratory that inspired the theory of evolution. It is the worlds largest exporter of bananas and its territory contains the highest biodiversity per square kilometer on the planet, especially in amphibians and birds.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación andina dividida por la línea equinoccial, donde se puede estar con un pie en cada hemisferio. Su capital tiene uno de los centros históricos mejor conservados de América y es famoso por sus sombreros de paja toquilla, mal llamados de Panamá.",
        text_en: "It is an Andean nation divided by the equinoctial line, where you can stand with one foot in each hemisphere. Its capital has one of the best-preserved historical centers in America and is famous for its toquilla straw hats, misnamed Panama hats.",
      },
      {
        difficulty: "easy",
        text_es: "Un país sudamericano que debe su nombre a su ubicación geográfica. Su bandera tiene tres franjas horizontales (amarilla más ancha, azul y roja) con el escudo nacional en el centro para diferenciarla de otras banderas similares.",
        text_en: "A South American country that owes its name to its geographic location. Its flag has three horizontal stripes (wider yellow, blue, and red) with the national coat of arms in the center to distinguish it from other similar flags.",
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
        text_es: "Fue el primer país del mundo en otorgar el derecho al voto a las mujeres en mil ochocientos noventa y tres. Además, es una de las pocas naciones que tiene dos himnos nacionales con el mismo estatus y donde no existen serpientes en todo su territorio.",
        text_en: "It was the first country in the world to grant women the right to vote in eighteen ninety-three. Additionally, it is one of the few nations that has two national anthems with the same status and where there are no snakes in its entire territory.",
      },
      {
        difficulty: "hard",
        text_es: "En su idioma indígena se le conoce como la tierra de la larga nube blanca. Sus paisajes son tan cinematográficos que sirvieron de escenario para recrear un mundo de fantasía épica, y cuenta con un lugar cuyo nombre tiene ochenta y cinco letras, siendo uno de los más largos del mundo.",
        text_en: "In its indigenous language, it is known as the land of the long white cloud. Its landscapes are so cinematic that they served as the setting to recreate an epic fantasy world, and it has a place whose name has eighty-five letters, being one of the longest in the world.",
      },
      {
        difficulty: "medium",
        text_es: "Es famosa por su población de aves que no vuelan y por su equipo nacional de rugby que realiza una danza guerrera antes de cada partido. Sus dos islas principales ofrecen desde playas subtropicales y géiseres hasta glaciares y fiordos impresionantes.",
        text_en: "It is famous for its population of flightless birds and for its national rugby team that performs a warrior dance before every match. Its two main islands offer everything from subtropical beaches and geysers to impressive glaciers and fjords.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular en el suroeste del océano Pacífico, vecina de Australia. Su bandera es azul con la Union Jack en la esquina y cuatro estrellas rojas que representan la constelación de la Cruz del Sur.",
        text_en: "An island nation in the southwest Pacific Ocean, a neighbor of Australia. Its flag is blue with the Union Jack in the corner and four red stars representing the Southern Cross constellation.",
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
        text_es: "Es el país con más bosques y más lagos de Europa en proporción a su tamaño, con casi ciento noventa mil lagos. Además, es la cuna de una famosa marca de telecomunicaciones que dominó el mercado móvil y del sistema operativo de código abierto más usado en servidores.",
        text_en: "It is the country with the most forests and lakes in Europe in proportion to its size, with nearly one hundred and ninety thousand lakes. Additionally, it is the birthplace of a famous telecommunications brand that dominated the mobile market and the most used open-source operating system on servers.",
      },
      {
        difficulty: "hard",
        text_es: "Ha sido calificado repetidamente como el país más feliz del mundo y su sistema educativo es un referente global. Tienen una cultura de sauna tan arraigada que existen más de tres millones de ellas para una población de apenas cinco millones y medio de personas.",
        text_en: "It has been repeatedly ranked as the happiest country in the world and its education system is a global benchmark. They have such a deep-rooted sauna culture that there are more than three million of them for a population of just five and a half million people.",
      },
      {
        difficulty: "medium",
        text_es: "Situado en el norte de Europa, es el hogar oficial de un famoso personaje navideño y un lugar privilegiado para ver auroras boreales. Su gastronomía incluye carne de reno y es uno de los países donde se consume más café por persona en todo el planeta.",
        text_en: "Located in Northern Europe, it is the official home of a famous Christmas character and a prime spot to see northern lights. Its gastronomy includes reindeer meat and it is one of the countries where the most coffee is consumed per person on the planet.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación nórdica conocida por su frío invierno y su diseño moderno. Su bandera es muy sencilla, compuesta por una cruz nórdica de color azul sobre un fondo blanco puro.",
        text_en: "A Nordic nation known for its cold winter and modern design. Its flag is very simple, composed of a blue Nordic cross on a pure white background.",
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
        text_es: "Es el reino más antiguo de Europa con una monarquía ininterrumpida desde hace más de mil años. Además, su bandera es considerada la bandera nacional más antigua del mundo todavía en uso, con una leyenda que dice que cayó del cielo en una batalla en el siglo trece.",
        text_en: "It is the oldest kingdom in Europe with an uninterrupted monarchy for over a thousand years. Additionally, its flag is considered the oldest national flag in the world still in use, with a legend saying it fell from the sky during a battle in the thirteenth century.",
      },
      {
        difficulty: "hard",
        text_es: "Es la cuna de los bloques de construcción de juguete más famosos del mundo y de uno de los escritores de cuentos infantiles más traducidos de la historia. Aunque es un país pequeño y llano, técnicamente posee la isla más grande del planeta como territorio autónomo.",
        text_en: "It is the birthplace of the worlds most famous toy building blocks and of one of the most translated children story writers in history. Although it is a small and flat country, it technically owns the planets largest island as an autonomous territory.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por su cultura del diseño, su alta calidad de vida y por ser un paraíso para los ciclistas, con más bicicletas que coches en su capital. Su concepto de bienestar y comodidad en las pequeñas cosas es una filosofía exportada a todo el mundo.",
        text_en: "It is famous for its design culture, its high quality of life, and for being a paradise for cyclists, with more bicycles than cars in its capital. Its concept of well-being and comfort in small things is a philosophy exported worldwide.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación escandinava situada en una península y varias islas al norte de Alemania. Su bandera es roja con una cruz nórdica blanca que se extiende hasta los bordes.",
        text_en: "A Scandinavian nation located on a peninsula and several islands north of Germany. Its flag is red with a white Nordic cross extending to the edges.",
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
        text_es: "Es el único país del mundo que tiene un instrumento musical como símbolo nacional. Además, aunque su idioma nativo es oficial, la gran mayoría de la población utiliza el inglés como lengua principal debido a su compleja historia bajo dominio británico.",
        text_en: "It is the only country in the world that has a musical instrument as a national symbol. Additionally, although its native language is official, the vast majority of the population uses English as their primary language due to its complex history under British rule.",
      },
      {
        difficulty: "hard",
        text_es: "Se le conoce como la Isla Esmeralda por sus paisajes intensamente verdes causados por la lluvia frecuente. Es la cuna de la festividad de Halloween, que tiene sus raíces en un antiguo festival celta, y de una de las cervezas negras más famosas y exportadas del globo.",
        text_en: "It is known as the Emerald Isle for its intensely green landscapes caused by frequent rain. It is the birthplace of the Halloween holiday, which has its roots in an ancient Celtic festival, and of one of the most famous and exported stouts in the globe.",
      },
      {
        difficulty: "medium",
        text_es: "Es famosa por sus leyendas de duendes, sus acantilados espectaculares sobre el Atlántico y su vibrante cultura de música tradicional en los pubs. Ha dado al mundo grandes escritores, músicos de rock icónicos y una diáspora enorme repartida por todo el planeta.",
        text_en: "It is famous for its legends of leprechauns, its spectacular cliffs over the Atlantic, and its vibrant traditional music culture in pubs. It has given the world great writers, iconic rock musicians, and a massive diaspora spread across the planet.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular situada al oeste de Gran Bretaña, conocida por su hospitalidad y su trébol de tres hojas. Su bandera tiene tres franjas verticales iguales de colores verde, blanco y naranja.",
        text_en: "An island nation located west of Great Britain, known for its hospitality and its three-leaf clover. Its flag has three equal vertical stripes of green, white, and orange.",
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
        text_es: "Es el país donde se inventó la corbata moderna, que comenzó como un pañuelo usado por sus soldados en el siglo diecisiete. Además, alberga la ciudad que se considera la más pequeña del mundo, con una población de apenas treinta personas.",
        text_en: "It is the country where the modern necktie was invented, which began as a scarf worn by its soldiers in the seventeenth century. Additionally, it houses the city considered the smallest in the world, with a population of just thirty people.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio nació uno de los inventores más brillantes de la historia, pionero de la electricidad moderna. Sus costas cuentan con más de mil islas y un órgano marino único que utiliza las olas del mar para crear música armónica de forma natural.",
        text_en: "In this territory, one of historys most brilliant inventors was born, a pioneer of modern electricity. Its coasts have more than a thousand islands and a unique sea organ that uses sea waves to create harmonic music naturally.",
      },
      {
        difficulty: "medium",
        text_es: "Es un destino turístico de primer nivel famoso por sus ciudades amuralladas frente al mar Adriático y sus parques nacionales llenos de lagos y cascadas de color turquesa. Su historia reciente está marcada por la transición hacia una democracia moderna tras el colapso de una federación.",
        text_en: "It is a top-tier tourist destination famous for its walled cities facing the Adriatic Sea and its national parks filled with turquoise lakes and waterfalls. Its recent history is marked by the transition to a modern democracy following the collapse of a federation.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación balcánica con una costa preciosa y una gran tradición deportiva. Su bandera tiene tres franjas horizontales (roja, blanca y azul) con un escudo de armas central que incluye un patrón de tablero de ajedrez rojo y blanco.",
        text_en: "A Balkan nation with a beautiful coastline and a great sporting tradition. Its flag has three horizontal stripes (red, white, and blue) with a central coat of arms that includes a red and white checkerboard pattern.",
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
        text_es: "Es el mayor exportador mundial de frambuesas, suministrando casi un tercio de la producción global. Además, su capital es una de las ciudades más antiguas de Europa, habiendo sido escenario de más de cuarenta guerras y reconstruida casi cuarenta veces a lo largo de su historia.",
        text_en: "It is the worlds largest exporter of raspberries, supplying nearly a third of global production. Additionally, its capital is one of the oldest cities in Europe, having been the site of over forty wars and rebuilt nearly forty times throughout its history.",
      },
      {
        difficulty: "hard",
        text_es: "Alrededor de dieciocho emperadores romanos nacieron en este territorio, lo que representa una quinta parte de todos los gobernantes de Roma. Posee un fenómeno natural único de pirámides de tierra creadas por la erosión que tienen leyendas locales muy curiosas.",
        text_en: "Around eighteen Roman emperors were born in this territory, representing one-fifth of all Romes rulers. It possesses a unique natural phenomenon of earth pyramids created by erosion that have very curious local legends.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación situada en el cruce entre Europa Central y del Sureste, conocida por su vibrante vida nocturna y su hospitalidad. Es una potencia mundial en deportes de equipo como el baloncesto y el waterpolo, y su gastronomía es famosa por las carnes a la parrilla.",
        text_en: "It is a nation located at the crossroads between Central and Southeastern Europe, known for its vibrant nightlife and hospitality. It is a world power in team sports like basketball and water polo, and its gastronomy is famous for grilled meats.",
      },
      {
        difficulty: "easy",
        text_es: "Un país de los Balcanes sin salida al mar pero con el gran río Danubio cruzando su territorio. Su bandera tiene tres franjas horizontales de colores rojo, azul y blanco, con un escudo de armas desplazado hacia la izquierda.",
        text_en: "A landlocked Balkan country but with the great Danube River crossing its territory. Its flag has three horizontal stripes of red, blue, and white, with a coat of arms shifted to the left.",
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
        text_es: "Es el país soberano con la menor densidad de población del mundo, donde hay más de veinte animales por cada ser humano. Además, es la cuna de uno de los imperios terrestres más vastos de la historia, que en su apogeo llegó a conectar Asia con Europa bajo un solo mando.",
        text_en: "It is the sovereign country with the lowest population density in the world, where there are more than twenty animals for every human being. Additionally, it is the birthplace of one of the vastest land empires in history, which at its peak connected Asia and Europe under a single command.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra uno de los desiertos más fríos del planeta, famoso por ser el lugar donde se descubrieron los primeros huevos de dinosaurio en la década de mil novecientos veinte. Su capital es conocida por ser la capital nacional más fría del globo debido a su altitud y latitud.",
        text_en: "In this territory lies one of the coldest deserts on the planet, famous for being the place where the first dinosaur eggs were discovered in the 1920s. Its capital is known for being the coldest national capital in the globe due to its altitude and latitude.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación de tradiciones nómadas donde gran parte de la población todavía vive en tiendas de campaña circulares que pueden desmontarse fácilmente. Su cultura está profundamente ligada al caballo y al canto gutural, y gran parte de su territorio son estepas infinitas.",
        text_en: "It is a nation of nomadic traditions where a large part of the population still lives in circular tents that can be easily dismantled. Its culture is deeply linked to horses and throat singing, and much of its territory consists of endless steppes.",
      },
      {
        difficulty: "easy",
        text_es: "Un gran país sin salida al mar situado entre Rusia y China. Su bandera tiene tres franjas verticales (roja, azul y roja) con un símbolo dorado llamado Soyombo en la franja izquierda que representa la libertad y la soberanía.",
        text_en: "A large landlocked country located between Russia and China. Its flag has three vertical stripes (red, blue, and red) with a golden symbol called Soyombo on the left stripe representing freedom and sovereignty.",
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
        text_es: "Es el único país del mundo que tiene un edificio real representado en su bandera nacional. Además, su principal río tiene la característica única de cambiar el sentido de su flujo dos veces al año debido al régimen de los monzones, ensanchando un enorme lago central.",
        text_en: "It is the only country in the world that has a real building represented on its national flag. Additionally, its main river has the unique characteristic of reversing its flow direction twice a year due to the monsoon season, expanding a massive central lake.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga el monumento religioso más grande jamás construido, una ciudad-templo de piedra que estuvo oculta por la selva durante siglos. Su historia moderna está marcada por un periodo muy oscuro de conflicto interno, pero hoy es uno de los destinos más vibrantes del sudeste asiático.",
        text_en: "It houses the largest religious monument ever built, a stone temple-city that was hidden by the jungle for centuries. Its modern history is marked by a very dark period of internal conflict, but today it is one of the most vibrant destinations in Southeast Asia.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por sus templos milenarios invadidos por raíces de árboles gigantes y por su gastronomía basada en arroz y pescado del río Mekong. Es una monarquía constitucional donde la amabilidad de su gente contrasta con su pasado turbulento.",
        text_en: "It is famous for its ancient temples invaded by giant tree roots and for its gastronomy based on rice and fish from the Mekong River. It is a constitutional monarchy where the kindness of its people contrasts with its turbulent past.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación del sudeste asiático situada entre Tailandia y Vietnam. Su bandera tiene tres franjas horizontales, dos azules en los extremos y una roja más ancha en el centro con la silueta de un templo blanco.",
        text_en: "A Southeast Asian nation located between Thailand and Vietnam. Its flag has three horizontal stripes, two blue ones at the edges and a wider red one in the center with the silhouette of a white temple.",
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
        text_es: "Es el único país del mundo que es carbono negativo, lo que significa que absorbe más CO2 del que emite gracias a sus estrictas leyes de protección forestal. Además, mide el progreso de su nación a través de un índice de Felicidad Nacional Bruta en lugar del PIB.",
        text_en: "It is the only country in the world that is carbon negative, meaning it absorbs more CO2 than it emits thanks to its strict forest protection laws. Additionally, it measures its nations progress through a Gross National Happiness index instead of GDP.",
      },
      {
        difficulty: "hard",
        text_es: "En este reino del Himalaya, el montañismo en picos de más de seis mil metros está prohibido porque las montañas se consideran el hogar de los espíritus. No hubo televisión ni internet hasta mil novecientos noventa y nueve, siendo uno de los últimos países en permitirlos.",
        text_en: "In this Himalayan kingdom, mountaineering on peaks over six thousand meters is forbidden because the mountains are considered the home of spirits. There was no television or internet until nineteen ninety-nine, being one of the last countries to allow them.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocido como la tierra del dragón del trueno por las violentas tormentas que bajan de sus montañas. Su arquitectura es única, con fortalezas-monasterio pintadas de colores vivos, y su plato nacional es curiosamente una mezcla extremadamente picante de chiles y queso.",
        text_en: "It is known as the land of the thunder dragon because of the violent storms that descend from its mountains. Its architecture is unique, with brightly painted fortress-monasteries, and its national dish is curiously an extremely spicy mix of chilies and cheese.",
      },
      {
        difficulty: "easy",
        text_es: "Un pequeño reino situado en las altas montañas entre India y China. Su bandera está dividida diagonalmente en amarillo y naranja, con un gran dragón blanco en el centro que sostiene joyas en sus garras.",
        text_en: "A small kingdom located in the high mountains between India and China. Its flag is diagonally divided into yellow and orange, with a large white dragon in the center holding jewels in its claws.",
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
        text_es: "Es el único Gran Ducado que queda en el mundo y fue el primer país del planeta en hacer que todo su transporte público (trenes, tranvías y autobuses) sea totalmente gratuito para residentes y turistas. Posee el PIB per cápita más alto de la Unión Europea.",
        text_en: "It is the only remaining Grand Duchy in the world and was the first country on the planet to make all its public transport (trains, trams, and buses) completely free for residents and tourists. It has the highest GDP per capita in the European Union.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de su pequeño tamaño, su capital es una de las tres sedes oficiales de la Unión Europea. El país es trilingüe por ley, donde sus ciudadanos alternan con naturalidad entre el francés, el alemán y su propio idioma nacional de origen germánico.",
        text_en: "Despite its small size, its capital is one of the three official seats of the European Union. The country is trilingual by law, where its citizens naturally switch between French, German, and their own national language of Germanic origin.",
      },
      {
        difficulty: "medium",
        text_es: "Es un centro financiero global rodeado de castillos medievales y valles boscosos. Su capital está construida sobre profundos desfiladeros fluviales y cuenta con una red de túneles defensivos subterráneos tallados en la roca que son Patrimonio de la Humanidad.",
        text_en: "It is a global financial hub surrounded by medieval castles and forested valleys. Its capital is built over deep river gorges and features a network of underground defensive tunnels carved into the rock that are a World Heritage site.",
      },
      {
        difficulty: "easy",
        text_es: "Un pequeño país europeo sin salida al mar situado entre Bélgica, Francia y Alemania. Su bandera tiene tres franjas horizontales de colores rojo, blanco y azul claro (un tono más claro que el de la bandera de los Países Bajos).",
        text_en: "A small landlocked European country located between Belgium, France, and Germany. Its flag has three horizontal stripes of red, white, and light blue (a lighter shade than that of the Netherlands flag).",
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
        text_es: "Es el segundo país más pequeño del mundo y el que tiene la mayor densidad de población del planeta. Aproximadamente uno de cada tres de sus residentes es millonario, y es una de las pocas naciones que no tiene impuesto sobre la renta para sus ciudadanos.",
        text_en: "It is the second smallest country in the world and has the highest population density on the planet. Approximately one out of three of its residents is a millionaire, and it is one of the few nations with no income tax for its citizens.",
      },
      {
        difficulty: "hard",
        text_es: "Su territorio es tan reducido que cabría casi por completo dentro del Central Park de Nueva York. Es famoso por albergar la carrera de coches más prestigiosa del mundo, que se corre directamente por sus calles estrechas y empinadas frente al puerto marítimo.",
        text_en: "Its territory is so small that it would fit almost entirely inside New Yorks Central Park. It is famous for hosting the worlds most prestigious car race, which is run directly through its narrow, steep streets facing the seaport.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en la Riviera Francesa, es sinónimo de lujo extremo, yates gigantescos y casinos históricos. Aunque es una monarquía propia, su defensa y gran parte de su cultura están íntimamente ligadas a su único vecino, Francia.",
        text_en: "Located on the French Riviera, it is synonymous with extreme luxury, gigantic yachts, and historic casinos. Although it is its own monarchy, its defense and much of its culture are closely linked to its only neighbor, France.",
      },
      {
        difficulty: "easy",
        text_es: "Un diminuto principado mediterráneo famoso por su familia real y su puerto lleno de barcos de lujo. Su bandera es roja sobre blanco, idéntica a la de Indonesia pero con proporciones más estrechas.",
        text_en: "A tiny Mediterranean principality famous for its royal family and its port full of luxury boats. Its flag is red over white, identical to Indonesia's but with narrower proportions.",
      },
    ],
  },
  {
    id: 81,
    name: "Guatemala",
    name_en: "Guatemala",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el corazón del mundo maya y el país con mayor número de sitios arqueológicos de esta civilización. Además, es la cuna de un invento moderno que todos usamos para demostrar que no somos un robot en internet y su nombre significa 'tierra de muchos árboles' en lengua náhuatl.",
        text_en: "It is the heart of the Mayan world and the country with the highest number of archaeological sites of this civilization. Additionally, it is the birthplace of a modern invention we all use to prove we are not a robot on the internet, and its name means 'land of many trees' in the Nahuatl language.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentran algunos de los lagos más profundos de Centroamérica, rodeados de volcanes activos. Fue aquí donde se inventó el primer café instantáneo del mundo y es famoso por sus coloridos mercados de textiles tejidos a mano con técnicas milenarias.",
        text_en: "In this territory, some of the deepest lakes in Central America are found, surrounded by active volcanoes. It was here that the worlds first instant coffee was invented, and it is famous for its colorful markets of hand-woven textiles using millenary techniques.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación con una geografía montañosa impresionante y una fuerte herencia indígena. Su moneda nacional lleva el nombre de un ave mítica de larga cola verde que es el símbolo de la libertad y que habita en sus bosques nubosos.",
        text_en: "It is a nation with an impressive mountainous geography and a strong indigenous heritage. Its national currency is named after a mythical long-tailed green bird that is the symbol of freedom and inhabits its cloud forests.",
      },
      {
        difficulty: "easy",
        text_es: "Un país centroamericano situado al sur de México, famoso por sus ruinas mayas y sus volcanes. Su bandera tiene dos franjas azules verticales en los extremos y una blanca en el centro con el escudo nacional.",
        text_en: "A Central American country located south of Mexico, famous for its Mayan ruins and volcanoes. Its flag has two blue vertical stripes on the edges and a white one in the center with the national coat of arms.",
      },
    ],
  },
  {
    id: 82,
    name: "Honduras",
    name_en: "Honduras",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país que inspiró el término peyorativo 'república bananera' a principios del siglo veinte debido al enorme poder de las empresas fruteras extranjeras. Además, posee un fenómeno único donde, según los locales, una vez al año llueven peces en una de sus regiones debido a fuertes tormentas.",
        text_en: "It is the country that inspired the pejorative term 'banana republic' in the early twentieth century due to the enormous power of foreign fruit companies. Additionally, it possesses a unique phenomenon where, according to locals, once a year it rains fish in one of its regions due to heavy storms.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga una de las mayores barreras de coral del mundo frente a sus costas caribeñas y una misteriosa ciudad perdida en la selva conocida como la Ciudad Blanca. Fue el primer país de Centroamérica en prohibir fumar en espacios cerrados y el consumo de tabaco en lugares públicos.",
        text_en: "It houses one of the worlds largest coral reefs off its Caribbean coasts and a mysterious city lost in the jungle known as the White City. It was the first country in Central America to ban smoking in enclosed spaces and tobacco consumption in public places.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación con una gran producción de café y bananos, y cuenta con importantes ruinas mayas famosas por sus estelas talladas con gran detalle. Su geografía es mayoritariamente montañosa y tiene una gran biodiversidad en sus parques nacionales y reservas de la biosfera.",
        text_en: "It is a nation with a large production of coffee and bananas, and features important Mayan ruins famous for their highly detailed carved stelae. Its geography is mostly mountainous and has great biodiversity in its national parks and biosphere reserves.",
      },
      {
        difficulty: "easy",
        text_es: "Un país de Centroamérica con costas en el Caribe y el Pacífico, situado entre Guatemala, El Salvador y Nicaragua. Su bandera tiene tres franjas horizontales (azul, blanca y azul) con cinco estrellas azules en el centro formando una H.",
        text_en: "A country in Central America with Caribbean and Pacific coasts, located between Guatemala, El Salvador, and Nicaragua. Its flag has three horizontal stripes (blue, white, and blue) with five blue stars in the center forming an H.",
      },
    ],
  },
  {
    id: 83,
    name: "El Salvador",
    name_en: "El Salvador",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país más pequeño de Centroamérica y el único que no tiene costa en el mar Caribe. Además, fue la primera nación del mundo en adoptar una criptomoneda como moneda de curso legal junto al dólar estadounidense.",
        text_en: "It is the smallest country in Central America and the only one without a Caribbean coast. Additionally, it was the first nation in the world to adopt a cryptocurrency as legal tender alongside the US dollar.",
      },
      {
        difficulty: "hard",
        text_es: "Se le conoce como la 'tierra de los volcanes' por la gran cantidad de ellos en un territorio tan reducido, varios de los cuales están activos. Es el país con la mayor densidad de población del istmo y es famoso mundialmente entre los surfistas por sus olas de clase mundial.",
        text_en: "It is known as the 'land of volcanoes' due to the large number of them in such a small territory, several of which are active. It is the most densely populated country on the isthmus and is world-famous among surfers for its world-class waves.",
      },
      {
        difficulty: "medium",
        text_es: "Su gastronomía es famosa por unas tortillas de maíz rellenas que son un símbolo de identidad nacional. Posee pueblos coloniales encantadores y una historia marcada por un conflicto civil que dio paso a una vibrante diáspora y una cultura resiliente.",
        text_en: "Its gastronomy is famous for stuffed corn tortillas that are a symbol of national identity. It possesses charming colonial towns and a history marked by a civil conflict that gave way to a vibrant diaspora and a resilient culture.",
      },
      {
        difficulty: "easy",
        text_es: "La nación más pequeña del istmo centroamericano, bañada por el océano Pacífico. Su bandera tiene tres franjas horizontales (azul, blanca y azul) con el escudo nacional en el centro que incluye volcanes y un gorro frigio.",
        text_en: "The smallest nation in the Central American isthmus, bathed by the Pacific Ocean. Its flag has three horizontal stripes (blue, white, and blue) with the national coat of arms in the center including volcanoes and a Phrygian cap.",
      },
    ],
  },
  {
    id: 84,
    name: "Nicaragua",
    name_en: "Nicaragua",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país más grande de Centroamérica por superficie y alberga el único lago de agua dulce del mundo donde habitan tiburones, los cuales se adaptaron tras entrar desde el mar a través de un río. Además, cuenta con el único volcán del mundo que tiene una laguna de lava activa visible permanentemente.",
        text_en: "It is the largest country in Central America by area and houses the worlds only freshwater lake inhabited by sharks, which adapted after entering from the sea through a river. Additionally, it features the worlds only volcano with a permanently visible active lava lake.",
      },
      {
        difficulty: "hard",
        text_es: "Se la conoce como la 'tierra de lagos y volcanes' debido a su impresionante cadena volcánica que cruza el país. Es la cuna de uno de los poetas más influyentes de la lengua española, considerado el padre del modernismo literario.",
        text_en: "It is known as the 'land of lakes and volcanoes' due to its impressive volcanic chain crossing the country. It is the birthplace of one of the most influential poets in the Spanish language, considered the father of literary modernism.",
      },
      {
        difficulty: "medium",
        text_es: "Posee dos de las ciudades coloniales más antiguas y bellas del continente que compiten por su esplendor histórico. Su costa caribeña tiene una cultura muy diferente a la del Pacífico, con influencias africanas y británicas muy marcadas.",
        text_en: "It possesses two of the oldest and most beautiful colonial cities on the continent that compete for their historical splendor. Its Caribbean coast has a very different culture from the Pacific, with very marked African and British influences.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación centroamericana situada entre Honduras y Costa Rica. Su bandera tiene tres franjas horizontales iguales (azul, blanca y azul) con un triángulo equilátero en el centro que contiene cinco volcanes.",
        text_en: "A Central American nation located between Honduras and Costa Rica. Its flag has three equal horizontal stripes (blue, white, and blue) with an equilateral triangle in the center containing five volcanoes.",
      },
    ],
  },
  {
    id: 85,
    name: "Haití",
    name_en: "Haiti",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue la primera nación independiente de América Latina y el Caribe, y la primera república negra del mundo tras una exitosa rebelión de esclavos. Además, es el único país de América donde el francés es el idioma oficial junto con su propia lengua criolla nativa.",
        text_en: "It was the first independent nation in Latin America and the Caribbean, and the worlds first black republic following a successful slave rebellion. Additionally, it is the only country in the Americas where French is an official language alongside its own native Creole language.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga la fortaleza más grande del hemisferio occidental, construida en la cima de una montaña para defender la independencia del país. A pesar de sus retos económicos, posee una de las tradiciones artísticas más vibrantes y coloridas del Caribe, especialmente en la pintura y la escultura.",
        text_en: "It houses the largest fortress in the Western Hemisphere, built on a mountaintop to defend the countrys independence. Despite its economic challenges, it possesses one of the most vibrant and colorful artistic traditions in the Caribbean, especially in painting and sculpture.",
      },
      {
        difficulty: "medium",
        text_es: "Comparte una isla caribeña con otra nación hispanohablante y tiene una cultura profundamente influenciada por raíces africanas y francesas. Sus paisajes incluyen montañas escarpadas y costas tropicales, aunque se enfrenta a graves problemas de deforestación.",
        text_en: "It shares a Caribbean island with another Spanish-speaking nation and has a culture deeply influenced by African and French roots. Its landscapes include rugged mountains and tropical coasts, although it faces serious deforestation issues.",
      },
      {
        difficulty: "easy",
        text_es: "Un país caribeño que ocupa la parte occidental de la isla de La Española. Su bandera está dividida en dos franjas horizontales (azul arriba y roja abajo) con un cuadro blanco en el centro que muestra palmeras y cañones.",
        text_en: "A Caribbean country occupying the western part of the island of Hispaniola. Its flag is divided into two horizontal stripes (blue on top and red on bottom) with a white square in the center showing palm trees and cannons.",
      },
    ],
  },
  {
    id: 86,
    name: "Puerto Rico",
    name_en: "Puerto Rico",
    hints: [
      {
        difficulty: "expert",
        text_es: "Técnicamente es un territorio no incorporado, pero compite de forma independiente en eventos deportivos internacionales y en certámenes de belleza. Alberga una de las bahías bioluminiscentes más brillantes del mundo, donde el agua brilla con un azul neón al ser agitada.",
        text_en: "Technically an unincorporated territory, but it competes independently in international sporting events and beauty pageants. It houses one of the worlds brightest bioluminescent bays, where the water glows with a neon blue when disturbed.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra una de las selvas tropicales más estudiadas del mundo, protegida como bosque nacional. Es la cuna de ritmos urbanos y tropicales que dominan las listas de éxitos mundiales y posee el radiotelescopio que fue durante décadas el más grande del planeta.",
        text_en: "In this territory, one of the worlds most studied tropical rainforests is found, protected as a national forest. It is the birthplace of urban and tropical rhythms that dominate world hit charts and possesses the radio telescope that was for decades the largest on the planet.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocido como la 'isla del encanto' y su capital tiene un casco histórico rodeado de imponentes murallas coloniales. Su cultura es una mezcla vibrante de raíces taínas, españolas y africanas, y su moneda oficial es el dólar estadounidense.",
        text_en: "It is known as the 'island of enchantment' and its capital features a historic center surrounded by imposing colonial walls. Its culture is a vibrant mix of Taino, Spanish, and African roots, and its official currency is the US dollar.",
      },
      {
        difficulty: "easy",
        text_es: "Una isla del Caribe que es un Estado Libre Asociado. Su bandera tiene cinco franjas horizontales rojas y blancas, con un triángulo azul y una estrella blanca en el lado izquierdo (igual que la de Cuba pero con los colores azul y rojo invertidos).",
        text_en: "A Caribbean island that is a Commonwealth. Its flag has five red and white horizontal stripes, with a blue triangle and a white star on the left side (same as Cubas but with blue and red colors inverted).",
      },
    ],
  },
  {
    id: 87,
    name: "Trinidad y Tobago",
    name_en: "Trinidad and Tobago",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el lugar de nacimiento del 'Steelpan', el único instrumento musical acústico inventado en el siglo veinte, fabricado originalmente a partir de bidones de petróleo. Además, posee el depósito natural de asfalto más grande del mundo, un lago sólido por el que se puede caminar.",
        text_en: "It is the birthplace of the 'Steelpan', the only acoustic musical instrument invented in the twentieth century, originally made from oil drums. Additionally, it possesses the worlds largest natural asphalt deposit, a solid lake that can be walked upon.",
      },
      {
        difficulty: "hard",
        text_es: "Es la cuna del baile del Limbo y de los ritmos Calipso y Soca que definen el sonido del Caribe. A diferencia de la mayoría de sus vecinos, su economía no depende del turismo, sino de sus vastas reservas de gas natural y petróleo.",
        text_en: "It is the birthplace of the Limbo dance and the Calypso and Soca rhythms that define the Caribbean sound. Unlike most of its neighbors, its economy does not depend on tourism but on its vast reserves of natural gas and oil.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación compuesta por dos islas principales con personalidades muy distintas: una vibrante e industrial, y la otra tranquila y paradisíaca. Su carnaval es considerado uno de los más espectaculares y coloridos del mundo, compitiendo en energía con el de Brasil.",
        text_en: "It is a nation composed of two main islands with very different personalities: one vibrant and industrial, and the other quiet and paradisiacal. Its carnival is considered one of the most spectacular and colorful in the world, competing in energy with Brazils.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular situada muy cerca de la costa de Venezuela. Su bandera es roja con una banda diagonal negra con bordes blancos que cruza desde la esquina superior izquierda a la inferior derecha.",
        text_en: "An island nation located very close to the coast of Venezuela. Its flag is red with a black diagonal band with white edges crossing from the upper left to the lower right corner.",
      },
    ],
  },
  {
    id: 88,
    name: "Bahamas",
    name_en: "The Bahamas",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es un archipiélago de setecientas islas donde se encuentra el tercer sistema de arrecifes de barrera más grande del mundo. Además, alberga los agujeros azules más profundos del planeta, cuevas submarinas verticales que son un paraíso para los buceadores extremos.",
        text_en: "It is an archipelago of seven hundred islands where the worlds third-largest barrier reef system is located. Additionally, it houses the planets deepest blue holes, vertical underwater caves that are a paradise for extreme divers.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente fue el refugio favorito de los piratas del Caribe debido a sus aguas poco profundas y laberínticas. En una de sus islas deshabitadas existe una famosa playa donde los cerdos nadan libremente en el agua cristalina, convirtiéndose en un fenómeno viral.",
        text_en: "Historically, it was the favorite refuge for the pirates of the Caribbean due to its shallow and labyrinthine waters. On one of its uninhabited islands, there is a famous beach where pigs swim freely in the crystal-clear water, becoming a viral phenomenon.",
      },
      {
        difficulty: "medium",
        text_es: "Es un destino turístico de lujo famoso por sus hoteles gigantescos y sus playas de arena rosada. Su nombre proviene del español 'bajamar', haciendo referencia a la poca profundidad de sus aguas turquesas que rodean las islas.",
        text_en: "It is a luxury tourist destination famous for its gigantic hotels and pink sand beaches. Its name comes from the Spanish 'bajamar' (low tide), referring to the shallow depth of its turquoise waters surrounding the islands.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular atlántica situada al norte de Cuba y al sureste de Florida. Su bandera tiene un triángulo negro en el lado del mástil y tres franjas horizontales de colores turquesa, amarillo y turquesa.",
        text_en: "An Atlantic island nation located north of Cuba and southeast of Florida. Its flag has a black triangle on the hoist side and three horizontal stripes of turquoise, yellow, and turquoise.",
      },
    ],
  },
  {
    id: 89,
    name: "Barbados",
    name_en: "Barbados",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es considerada la cuna del ron, con la destilería más antigua del mundo en funcionamiento desde mil setecientos tres. Además, fue una de las últimas naciones en convertirse en república, sustituyendo a la monarquía británica como jefa de estado en dos mil veintiuno.",
        text_en: "It is considered the birthplace of rum, with the worlds oldest functioning distillery since seventeen hundred and three. Additionally, it was one of the last nations to become a republic, replacing the British monarchy as head of state in twenty-one.",
      },
      {
        difficulty: "hard",
        text_es: "Se la conoce como 'la tierra del pez volador', un animal que es el símbolo nacional y parte fundamental de su plato típico. Es una isla de coral, a diferencia de la mayoría de las islas vecinas que son volcánicas, lo que le otorga arenas de un blanco purísimo.",
        text_en: "It is known as 'the land of the flying fish', an animal that is the national symbol and a fundamental part of its national dish. It is a coral island, unlike most neighboring islands which are volcanic, giving it pure white sands.",
      },
      {
        difficulty: "medium",
        text_es: "Es la isla más oriental del Caribe y la cuna de una de las estrellas del pop más famosas y ricas de la actualidad. Su cultura es una mezcla muy refinada de tradiciones británicas, como el cricket y el té de la tarde, con ritmos y sabores africanos.",
        text_en: "It is the easternmost island in the Caribbean and the birthplace of one of todays most famous and wealthy pop stars. Its culture is a very refined mix of British traditions, like cricket and afternoon tea, with African rhythms and flavors.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación insular caribeña independiente que forma parte de la Commonwealth. Su bandera tiene tres franjas verticales (azul, amarillo, azul) con un tridente negro en el centro que simboliza la independencia del dominio colonial.",
        text_en: "An independent Caribbean island nation that is part of the Commonwealth. Its flag has three vertical stripes (blue, yellow, blue) with a black trident in the center symbolizing independence from colonial rule.",
      },
    ],
  },
  {
    id: 90,
    name: "Kazajistán",
    name_en: "Kazakhstan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país sin salida al mar más grande del mundo y el lugar desde donde se lanzó el primer satélite artificial y el primer ser humano al espacio. Además, se cree que es el lugar de origen de la manzana, que crecía de forma silvestre en sus montañas.",
        text_en: "It is the worlds largest landlocked country and the place from which the first artificial satellite and the first human being were launched into space. Additionally, it is believed to be the birthplace of the apple, which grew wild in its mountains.",
      },
      {
        difficulty: "hard",
        text_es: "Posee una de las capitales más modernas y futuristas del globo, construida casi desde cero en medio de la estepa, con edificios diseñados por arquitectos de renombre mundial. Su territorio alberga una enorme variedad de paisajes, desde cañones desérticos hasta picos nevados.",
        text_en: "It possesses one of the worlds most modern and futuristic capitals, built almost from scratch in the middle of the steppe, with buildings designed by world-renowned architects. Its territory houses a vast variety of landscapes, from desert canyons to snowy peaks.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación de Asia Central con una rica historia nómada y vastas estepas. Es uno de los principales productores mundiales de uranio y petróleo, y su cultura mantiene tradiciones milenarias como la caza con águilas reales.",
        text_en: "It is a Central Asian nation with a rich nomadic history and vast steppes. It is one of the worlds leading producers of uranium and oil, and its culture maintains millenary traditions such as hunting with golden eagles.",
      },
      {
        difficulty: "easy",
        text_es: "Un enorme país situado entre Rusia y China, conocido por su hospitalidad y sus vastos recursos naturales. Su bandera es de color azul turquesa con un sol dorado rodeado de treinta y dos rayos sobre un águila esteparia.",
        text_en: "A huge country located between Russia and China, known for its hospitality and vast natural resources. Its flag is turquoise blue with a golden sun surrounded by thirty-two rays above a steppe eagle.",
      },
    ],
  },
  {
    id: 91,
    name: "Bulgaria",
    name_en: "Bulgaria",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países del mundo que ha conservado su nombre original desde su fundación en el siglo séptimo. Además, es el mayor productor mundial de aceite de rosa, un ingrediente esencial en la alta perfumería global.",
        text_en: "It is one of the few countries in the world that has kept its original name since its foundation in the seventh century. Additionally, it is the worlds largest producer of rose oil, an essential ingredient in global high perfumery.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encontró el tesoro de oro procesado más antiguo del mundo, que data de hace más de seis mil años. Curiosamente, en este país el gesto de asentir con la cabeza significa 'no' y moverla hacia los lados significa 'sí'.",
        text_en: "In this territory, the worlds oldest processed gold treasure was found, dating back more than six thousand years. Curiously, in this country, nodding your head means 'no' and shaking it from side to side means 'yes'.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación balcánica famosa por sus monasterios medievales, su costa en el mar Negro y sus montañas ideales para el esquí. Su idioma utiliza el alfabeto cirílico, el cual fue creado originalmente en esta región antes de extenderse por el este de Europa.",
        text_en: "It is a Balkan nation famous for its medieval monasteries, its coast on the Black Sea, and its mountains ideal for skiing. Its language uses the Cyrillic alphabet, which was originally created in this region before spreading through Eastern Europe.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del sureste de Europa situado al norte de Grecia y Turquía. Su bandera tiene tres franjas horizontales iguales de colores blanco, verde y rojo.",
        text_en: "A country in Southeast Europe located north of Greece and Turkey. Its flag has three equal horizontal stripes of white, green, and red.",
      },
    ],
  },
  {
    id: 92,
    name: "Eslovaquia",
    name_en: "Slovakia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país con el mayor número de castillos y fortalezas per cápita del mundo, con cientos de ellos repartidos por su territorio. Además, es el mayor productor de automóviles del planeta en relación con su número de habitantes.",
        text_en: "It is the country with the highest number of castles and fortresses per capita in the world, with hundreds of them scattered across its territory. Additionally, it is the worlds largest car producer relative to its population.",
      },
      {
        difficulty: "hard",
        text_es: "Posee una de las cuevas de hielo más grandes de Europa y una capital que es la única del mundo que hace frontera con otros dos países diferentes. Sus paisajes están dominados por la cordillera de los Tatras, con picos alpinos y lagos cristalinos.",
        text_en: "It possesses one of the largest ice caves in Europe and a capital that is the only one in the world that borders two different countries. Its landscapes are dominated by the Tatra Mountains, with alpine peaks and crystal-clear lakes.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación sin salida al mar situada en el corazón de Europa que formó parte de una federación mayor hasta mil novecientos noventa y tres. Su cultura destaca por su folclore colorido, sus tallas de madera y sus iglesias históricas.",
        text_en: "It is a landlocked nation located in the heart of Europe that was part of a larger federation until nineteen ninety-three. Its culture stands out for its colorful folklore, wood carvings, and historic churches.",
      },
      {
        difficulty: "easy",
        text_es: "Un país centroeuropeo vecino de la República Checa, Austria y Hungría. Su bandera tiene tres franjas horizontales (blanco, azul y rojo) con el escudo nacional de la doble cruz sobre tres colinas en el lado del mástil.",
        text_en: "A Central European country neighboring the Czech Republic, Austria, and Hungary. Its flag has three horizontal stripes (white, blue, and red) with the national coat of arms of the double cross on three hills on the hoist side.",
      },
    ],
  },
  {
    id: 93,
    name: "Eslovenia",
    name_en: "Slovenia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los países con mayor biodiversidad de Europa y fue el primero del mundo en ser declarado 'Destino Verde Global' por su sostenibilidad. Casi el sesenta por ciento de su territorio está cubierto por densos bosques.",
        text_en: "It is one of the most biodiverse countries in Europe and was the first in the world to be declared a 'Global Green Destination' for its sustainability. Almost sixty percent of its territory is covered by dense forests.",
      },
      {
        difficulty: "hard",
        text_es: "En este territorio se encuentra la vid más antigua del mundo que todavía produce uvas, con más de cuatrocientos años de edad. Además, posee un sistema de cuevas cársticas tan vasto que es Patrimonio de la Humanidad y alberga una especie de salamandra ciega única.",
        text_en: "In this territory, the oldest grapevine in the world that still produces grapes is found, over four hundred years old. Additionally, it possesses a karst cave system so vast it is a World Heritage site and houses a unique species of blind salamander.",
      },
      {
        difficulty: "medium",
        text_es: "Es un pequeño país que combina los Alpes, el Mediterráneo y llanuras fértiles, con un lago idílico que tiene una iglesia en una isla central como imagen más icónica. Es conocido por ser un paraíso para los deportes de aventura y la vida al aire libre.",
        text_en: "It is a small country that combines the Alps, the Mediterranean, and fertile plains, with an idyllic lake featuring a church on a central island as its most iconic image. It is known for being a paradise for adventure sports and outdoor living.",
      },
      {
        difficulty: "easy",
        text_es: "Una nación alpina situada entre Italia, Austria y Croacia. Su bandera tiene franjas horizontales blancas, azules y rojas, con un escudo que muestra el monte Triglav, el pico más alto del país, y tres estrellas doradas.",
        text_en: "An Alpine nation located between Italy, Austria, and Croatia. Its flag has white, blue, and red horizontal stripes, with a coat of arms showing Mount Triglav, the country's highest peak, and three golden stars.",
      },
    ],
  },
  {
    id: 94,
    name: "Bosnia y Herzegovina",
    name_en: "Bosnia and Herzegovina",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su capital fue la primera ciudad de Europa y la segunda del mundo en tener una red de tranvía eléctrico a tiempo completo, utilizada para probar el sistema antes de instalarlo en Viena. Además, es el hogar de la última selva virgen que queda en el continente europeo.",
        text_en: "Its capital was the first city in Europe and the second in the world to have a full-time electric tram network, used to test the system before installing it in Vienna. Additionally, it is home to the last remaining virgin rainforest in the European continent.",
      },
      {
        difficulty: "hard",
        text_es: "Es conocida como la 'Jerusalén de Europa' debido a su larga historia de diversidad religiosa, donde mezquitas, iglesias y sinagogas han coexistido durante siglos en el mismo barrio. Su geografía es extremadamente montañosa y cuenta con un famoso puente reconstruido que es símbolo de reconciliación.",
        text_en: "It is known as the 'Jerusalem of Europe' due to its long history of religious diversity, where mosques, churches, and synagogues have coexisted for centuries in the same neighborhood. Its geography is extremely mountainous and features a famous reconstructed bridge that is a symbol of reconciliation.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación balcánica que formó parte de Yugoslavia y cuya historia reciente estuvo marcada por un conflicto muy profundo en los años noventa. Es famosa por sus ríos de aguas bravas ideales para el rafting y por su mezcla de influencias otomanas y austrohúngaras.",
        text_en: "It is a Balkan nation that was part of Yugoslavia and whose recent history was marked by a deep conflict in the nineties. It is famous for its whitewater rivers ideal for rafting and its blend of Ottoman and Austro-Hungarian influences.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del sureste de Europa con una pequeña salida al mar Adriático. Su bandera es muy distintiva: un fondo azul con un triángulo amarillo que representa las tres etnias principales y una fila de estrellas blancas que cruza diagonalmente.",
        text_en: "A country in Southeast Europe with a small outlet to the Adriatic Sea. Its flag is very distinctive: a blue background with a yellow triangle representing the three main ethnic groups and a row of white stars crossing diagonally.",
      },
    ],
  },
  {
    id: 95,
    name: "Albania",
    name_en: "Albania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el primer país del mundo en declararse oficialmente como un 'estado ateo' en mil novecientos sesenta y siete. Durante décadas, su gobierno construyó más de ciento setenta mil búnkeres de hormigón por todo el país por temor a una invasión que nunca ocurrió.",
        text_en: "It was the first country in the world to officially declare itself an 'atheist state' in nineteen sixty-seven. For decades, its government built more than one hundred and seventy thousand concrete bunkers throughout the country for fear of an invasion that never happened.",
      },
      {
        difficulty: "hard",
        text_es: "Su idioma es una rama única de la familia indoeuropea y no tiene parientes cercanos vivos. Es el hogar de la figura histórica que inspiró el escudo de su bandera, un guerrero que detuvo el avance del imperio otomano durante décadas en el siglo quince.",
        text_en: "Its language is a unique branch of the Indo-European family and has no close living relatives. It is home to the historical figure who inspired the coat of arms on its flag, a warrior who halted the Ottoman Empires advance for decades in the fifteenth century.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación balcánica con una costa espectacular llamada la 'Riviera Albanesa'. Tras décadas de aislamiento total bajo un régimen comunista muy estricto, hoy es uno de los destinos emergentes de Europa. Posee un código de honor ancestral basado en la hospitalidad y la palabra dada.",
        text_en: "It is a Balkan nation with a spectacular coastline called the 'Albanian Riviera'. After decades of total isolation under a very strict communist regime, today it is one of Europes emerging destinations. It possesses an ancient code of honor based on hospitality and ones word.",
      },
      {
        difficulty: "easy",
        text_es: "Un país situado en la península de los Balcanes frente a las costas de Italia. Su bandera es de un rojo intenso con un águila bicéfala negra en el centro.",
        text_en: "A country located on the Balkan Peninsula facing the coasts of Italy. Its flag is deep red with a black double-headed eagle in the center.",
      },
    ],
  },
  {
    id: 96,
    name: "Macedonia del Norte",
    name_en: "North Macedonia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Alberga uno de los lagos más antiguos y profundos de Europa, que posee un ecosistema único con más de doscientas especies endémicas. Además, es el país donde se encuentra el observatorio megalítico de Kokino, calificado por la NASA como uno de los más importantes del mundo.",
        text_en: "It houses one of Europes oldest and deepest lakes, which has a unique ecosystem with more than two hundred endemic species. Additionally, it is the country where the Kokino megalithic observatory is located, ranked by NASA as one of the most important in the world.",
      },
      {
        difficulty: "hard",
        text_es: "Es la cuna de la misionera más famosa del siglo veinte, ganadora del Premio Nobel de la Paz. Su capital es conocida por haber sido reconstruida tras un gran terremoto en mil novecientos sesenta y tres, convirtiéndose en una ciudad de arquitectura ecléctica y numerosas estatuas.",
        text_en: "It is the birthplace of the most famous missionary of the twentieth century, winner of the Nobel Peace Prize. Its capital is known for having been rebuilt after a major earthquake in nineteen sixty-three, becoming a city of eclectic architecture and numerous statues.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación sin salida al mar en los Balcanes que cambió su nombre oficial recientemente tras un largo conflicto diplomático con su vecino del sur. Su territorio está lleno de montañas, monasterios ortodoxos y una rica cultura culinaria que mezcla sabores de oriente y occidente.",
        text_en: "It is a landlocked nation in the Balkans that recently changed its official name following a long diplomatic conflict with its southern neighbor. Its territory is full of mountains, Orthodox monasteries, and a rich culinary culture that blends Eastern and Western flavors.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del sureste de Europa situado al norte de Grecia. Su bandera es roja con un sol amarillo en el centro que extiende ocho rayos hacia los bordes.",
        text_en: "A country in Southeast Europe located north of Greece. Its flag is red with a yellow sun in the center extending eight rays to the edges.",
      },
    ],
  },
  {
    id: 97,
    name: "Montenegro",
    name_en: "Montenegro",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país que alberga el cañón más profundo de Europa y el segundo más profundo del mundo después del Gran Cañón. Además, fue el primer estado del mundo en ser declarado constitucionalmente como un 'estado ecológico' en mil novecientos noventa y uno.",
        text_en: "It is the country that houses the deepest canyon in Europe and the second deepest in the world after the Grand Canyon. Additionally, it was the first state in the world to be constitutionally declared an 'ecological state' in nineteen ninety-one.",
      },
      {
        difficulty: "hard",
        text_es: "Su nombre significa literalmente 'Montaña Negra' y hace referencia a los densos bosques que cubrían sus picos en la antigüedad. Posee un fiordo en el mar Adriático que es técnicamente un cañón de río sumergido, considerado uno de los paisajes más bellos del sur de Europa.",
        text_en: "Its name literally means 'Black Mountain' and refers to the dense forests that covered its peaks in ancient times. It possesses a fjord in the Adriatic Sea that is technically a submerged river canyon, considered one of the most beautiful landscapes in Southern Europe.",
      },
      {
        difficulty: "medium",
        text_es: "Es una de las naciones más jóvenes del mundo, habiendo recuperado su independencia total en dos mil seis. Su costa está llena de pueblos medievales amurallados y yates de lujo, mientras que su interior es un paraíso de montañas escarpadas y lagos glaciares.",
        text_en: "It is one of the youngest nations in the world, having regained full independence in two thousand and six. Its coast is full of walled medieval towns and luxury yachts, while its interior is a paradise of rugged mountains and glacial lakes.",
      },
      {
        difficulty: "easy",
        text_es: "Un pequeño país montañoso de los Balcanes con costa en el Adriático. Su bandera es roja con un borde dorado y el escudo de armas nacional (un águila bicéfala dorada) en el centro.",
        text_en: "A small mountainous Balkan country with a coastline on the Adriatic. Its flag is red with a golden border and the national coat of arms (a golden double-headed eagle) in the center.",
      },
    ],
  },
  {
    id: 98,
    name: "Kosovo",
    name_en: "Kosovo",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es una de las naciones con la población más joven de Europa, con más de la mitad de sus habitantes menores de veinticinco años. Es uno de los pocos países del mundo, junto con Chipre, que muestra el mapa de su propio territorio en su bandera nacional.",
        text_en: "It is one of the nations with the youngest population in Europe, with more than half of its inhabitants under twenty-five. It is one of the few countries in the world, along with Cyprus, that shows the map of its own territory on its national flag.",
      },
      {
        difficulty: "hard",
        text_es: "Su independencia, declarada en dos mil ocho, es reconocida por una parte de la comunidad internacional pero no por la totalidad. Alberga importantes monasterios ortodoxos medievales que son Patrimonio de la Humanidad y su capital tiene una estatua de un presidente estadounidense como agradecimiento por su apoyo histórico.",
        text_en: "Its independence, declared in two thousand and eight, is recognized by part of the international community but not all. It houses important medieval Orthodox monasteries that are World Heritage sites, and its capital has a statue of a US president as thanks for historical support.",
      },
      {
        difficulty: "medium",
        text_es: "Situado en el corazón de los Balcanes, es un país sin salida al mar que ha vivido una transformación profunda tras el conflicto de finales de los noventa. Su cultura es mayoritariamente de habla albanesa y destaca por su hospitalidad y su vibrante escena de cafés.",
        text_en: "Located in the heart of the Balkans, it is a landlocked country that has undergone a profound transformation following the conflict of the late nineties. Its culture is predominantly Albanian-speaking and stands out for its hospitality and vibrant cafe scene.",
      },
      {
        difficulty: "easy",
        text_es: "Un joven estado balcánico que busca consolidar su reconocimiento internacional. Su bandera es azul con el mapa del país en color dorado en el centro, coronado por seis estrellas blancas que representan a sus grupos étnicos.",
        text_en: "A young Balkan state seeking to consolidate its international recognition. Its flag is blue with the map of the country in gold in the center, topped by six white stars representing its ethnic groups.",
      },
    ],
  },
  {
    id: 99,
    name: "Lituania",
    name_en: "Lithuania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su idioma es una de las lenguas vivas más antiguas del mundo y conserva estructuras del sánscrito que se han perdido en otros idiomas indoeuropeos. Además, fue el último país de Europa en convertirse oficialmente al cristianismo.",
        text_en: "Its language is one of the oldest living languages in the world and preserves Sanskrit structures lost in other Indo-European languages. Additionally, it was the last country in Europe to officially convert to Christianity.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga un lugar sagrado conocido como la Colina de las Cruces, donde se estima que hay más de cien mil cruces dejadas por peregrinos. Posee una duna de arena gigante que es Patrimonio de la Humanidad y una capital con uno de los cascos antiguos barrocos más grandes de Europa.",
        text_en: "It houses a sacred place known as the Hill of Crosses, where it is estimated there are over one hundred thousand crosses left by pilgrims. It possesses a giant sand dune that is a World Heritage site and a capital with one of the largest Baroque old towns in Europe.",
      },
      {
        difficulty: "medium",
        text_es: "Es la más grande de las tres naciones bálticas y tiene una fuerte tradición en el baloncesto, siendo casi una religión nacional. Su historia está ligada a un gran ducado que en la Edad Media fue el país más extenso de Europa.",
        text_en: "It is the largest of the three Baltic nations and has a strong basketball tradition, being almost a national religion. Its history is linked to a grand duchy that in the Middle Ages was the largest country in Europe.",
      },
      {
        difficulty: "easy",
        text_es: "Un país báltico situado al sur de Letonia y al norte de Polonia. Su bandera tiene tres franjas horizontales de colores amarillo, verde y rojo.",
        text_en: "A Baltic country located south of Latvia and north of Poland. Its flag has three horizontal stripes of yellow, green, and red.",
      },
    ],
  },
  {
    id: 100,
    name: "Letonia",
    name_en: "Latvia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país que ostenta el récord de tener una de las poblaciones con mayor promedio de estatura del mundo, especialmente entre las mujeres. Además, se dice que la tradición del árbol de Navidad decorado nació en su capital a principios del siglo dieciséis.",
        text_en: "It is the country that holds the record for having one of the populations with the highest average height in the world, especially among women. Additionally, it is said that the tradition of the decorated Christmas tree was born in its capital in the early sixteenth century.",
      },
      {
        difficulty: "hard",
        text_es: "Casi la mitad de su territorio está cubierto por bosques vírgenes y tiene una de las cascadas más anchas de Europa, aunque de poca altura. Su capital es famosa por poseer la mayor concentración de edificios de estilo Art Nouveau del mundo.",
        text_en: "Nearly half of its territory is covered by virgin forests and it has one of the widest waterfalls in Europe, although it is not very high. Its capital is famous for having the highest concentration of Art Nouveau buildings in the world.",
      },
      {
        difficulty: "medium",
        text_es: "Es una de las tres repúblicas bálticas, situada entre Estonia y Lituania. Su cultura tiene una fuerte tradición de festivales de coros y canciones folclóricas, y su gastronomía destaca por el uso del centeno y los productos ahumados.",
        text_en: "It is one of the three Baltic republics, located between Estonia and Lithuania. Its culture has a strong tradition of choir festivals and folk songs, and its gastronomy stands out for the use of rye and smoked products.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del noreste de Europa con costa en el mar Báltico. Su bandera es de un color granate intenso con una franja blanca horizontal más estrecha en el centro.",
        text_en: "A country in Northeast Europe with a coastline on the Baltic Sea. Its flag is deep maroon with a narrower white horizontal stripe in the center.",
      },
    ],
  },
  {
    id: 101,
    name: "Estonia",
    name_en: "Estonia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es considerada la nación más digital del mundo, donde casi todos los servicios gubernamentales se realizan online y el acceso a internet es un derecho humano. Fue el primer país en implementar el voto electrónico a nivel nacional y la cuna de una famosa aplicación de videollamadas.",
        text_en: "It is considered the most digital nation in the world, where almost all government services are performed online and internet access is a human right. It was the first country to implement nationwide e-voting and the birthplace of a famous video calling app.",
      },
      {
        difficulty: "hard",
        text_es: "Tiene más de dos mil islas y su idioma, de origen finougrio, está estrechamente emparentado con el finlandés pero no con sus vecinos bálticos. Es uno de los países con el aire más limpio del planeta y posee una capital medieval perfectamente conservada.",
        text_en: "It has more than two thousand islands and its language, of Finno-Ugric origin, is closely related to Finnish but not to its Baltic neighbors. It is one of the countries with the cleanest air on the planet and possesses a perfectly preserved medieval capital.",
      },
      {
        difficulty: "medium",
        text_es: "Es la más septentrional de las repúblicas bálticas y destaca por su mezcla de cultura escandinava y europea del este. Es un líder mundial en startups tecnológicas y tiene una población pequeña pero altamente educada.",
        text_en: "It is the northernmost of the Baltic republics and stands out for its blend of Scandinavian and Eastern European culture. It is a world leader in tech startups and has a small but highly educated population.",
      },
      {
        difficulty: "easy",
        text_es: "Un país báltico situado al sur de Finlandia, cruzando el mar. Su bandera tiene tres franjas horizontales de colores azul (el cielo), negro (la tierra) y blanco (la nieve).",
        text_en: "A Baltic country located south of Finland, across the sea. Its flag has three horizontal stripes of blue (the sky), black (the soil), and white (the snow).",
      },
    ],
  },
  {
    id: 102,
    name: "Bielorrusia",
    name_en: "Belarus",
    hints: [
      {
        difficulty: "expert",
        text_es: "Alberga el último bosque primario de las tierras bajas de Europa, donde vive el bisonte europeo, el animal terrestre más pesado del continente. Además, es el único país de Europa que todavía aplica la pena de muerte en su sistema judicial.",
        text_en: "It houses Europes last lowland primary forest, home to the European bison, the continents heaviest land animal. Additionally, it is the only country in Europe that still applies the death penalty in its judicial system.",
      },
      {
        difficulty: "hard",
        text_es: "Es conocido como el 'pulmón de Europa' debido a que el cuarenta por ciento de su territorio son bosques y pantanos. Su capital fue destruida casi por completo durante la Segunda Guerra Mundial y reconstruida en un estilo monumental conocido como realismo socialista.",
        text_en: "It is known as the 'lungs of Europe' because forty percent of its territory consists of forests and swamps. Its capital was almost completely destroyed during World War II and rebuilt in a monumental style known as socialist realism.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación sin salida al mar en Europa del Este que mantiene vínculos políticos y económicos muy estrechos con Rusia. Su economía destaca por la producción de maquinaria pesada y productos agrícolas, especialmente la patata, que es base de su dieta.",
        text_en: "It is a landlocked nation in Eastern Europe that maintains very close political and economic ties with Russia. Its economy stands out for the production of heavy machinery and agricultural products, especially the potato, which is the staple of its diet.",
      },
      {
        difficulty: "easy",
        text_es: "Un país situado entre Polonia, Rusia y Ucrania. Su bandera es roja sobre verde con una franja blanca vertical en el lado del mástil que contiene un patrón ornamental tradicional rojo.",
        text_en: "A country located between Poland, Russia, and Ukraine. Its flag is red over green with a vertical white stripe on the hoist side containing a red traditional ornamental pattern.",
      },
    ],
  },
  {
    id: 103,
    name: "Moldavia",
    name_en: "Moldova",
    hints: [
      {
        difficulty: "expert",
        text_es: "Posee la bodega de vino más grande del mundo por número de botellas, con más de dos millones de ejemplares almacenados en túneles subterráneos de más de doscientos kilómetros de largo. Además, es estadísticamente uno de los países menos visitados de Europa.",
        text_en: "It possesses the worlds largest wine cellar by number of bottles, with over two million specimens stored in underground tunnels over two hundred kilometers long. Additionally, it is statistically one of the least visited countries in Europe.",
      },
      {
        difficulty: "hard",
        text_es: "En su territorio existe una región autoproclamada independiente que todavía conserva símbolos de la era soviética y no es reconocida internacionalmente. El país tiene una forma geográfica que recuerda a un racimo de uvas, lo cual es apropiado dada su milenaria cultura vinícola.",
        text_en: "In its territory, there is a self-proclaimed independent region that still preserves Soviet-era symbols and is not internationally recognized. The country has a geographical shape resembling a bunch of grapes, which is appropriate given its millenary wine culture.",
      },
      {
        difficulty: "medium",
        text_es: "Es una pequeña nación sin salida al mar situada entre Rumanía y Ucrania. Su idioma es prácticamente idéntico al rumano y su cultura está profundamente ligada a la agricultura y la producción artesanal de licores.",
        text_en: "It is a small landlocked nation located between Romania and Ukraine. Its language is practically identical to Romanian and its culture is deeply linked to agriculture and artisanal liquor production.",
      },
      {
        difficulty: "easy",
        text_es: "Un país del este de Europa cuya bandera es idéntica a la de Rumanía (franjas verticales azul, amarilla y roja) pero con el escudo nacional en el centro para diferenciarlas.",
        text_en: "An Eastern European country whose flag is identical to Romania's (blue, yellow, and red vertical stripes) but with the national coat of arms in the center to distinguish them.",
      },
    ],
  },
  {
    id: 104,
    name: "Georgia",
    name_en: "Georgia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es considerada la cuna mundial del vino, con evidencia arqueológica de producción que se remonta a hace ocho mil años usando vasijas de barro enterradas llamadas Qvevri. Además, su idioma tiene un alfabeto propio único que no se parece a ningún otro en el mundo.",
        text_en: "It is considered the world's birthplace of wine, with archaeological evidence of production dating back eight thousand years using buried clay vessels called Qvevri. Additionally, its language has its own unique alphabet that resembles no other in the world.",
      },
      {
        difficulty: "hard",
        text_es: "Alberga la cueva más profunda del planeta y algunos de los asentamientos humanos más altos de Europa en las montañas del Cáucaso. Se dice que en esta tierra se encontraba el mítico vellocino de oro buscado por los argonautas en la mitología griega.",
        text_en: "It houses the deepest cave on the planet and some of the highest human settlements in Europe in the Caucasus Mountains. It is said that the mythical Golden Fleece sought by the Argonauts in Greek mythology was located in this land.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación situada en la intersección de Europa y Asia, famosa por su hospitalidad extrema donde un invitado es considerado 'un regalo de Dios'. Su gastronomía es una de las más ricas de la región, destacando un pan relleno de queso fundido y huevo.",
        text_en: "It is a nation located at the intersection of Europe and Asia, famous for its extreme hospitality where a guest is considered 'a gift from God'. Its gastronomy is one of the richest in the region, highlighting a bread filled with melted cheese and egg.",
      },
      {
        difficulty: "easy",
        text_es: "Un país montañoso del Cáucaso con costa en el mar Negro. Su bandera es blanca con una gran cruz roja en el centro y cuatro cruces pequeñas más en cada cuadrante.",
        text_en: "A mountainous country in the Caucasus with a coastline on the Black Sea. Its flag is white with a large red cross in the center and four smaller crosses in each quadrant.",
      },
    ],
  },
  {
    id: 105,
    name: "Armenia",
    name_en: "Armenia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue la primera nación del mundo en adoptar el cristianismo como religión de estado en el año trescientos uno. Además, su capital es una de las ciudades continuamente habitadas más antiguas del mundo, fundada casi treinta años antes que Roma.",
        text_en: "It was the first nation in the world to adopt Christianity as a state religion in the year three hundred and one. Additionally, its capital is one of the oldest continuously inhabited cities in the world, founded nearly thirty years before Rome.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de ser un país sin salida al mar, tiene un enorme lago de alta montaña que cubre el cinco por ciento de su territorio. Su símbolo nacional es un monte sagrado donde, según la tradición bíblica, encalló el Arca de Noé, aunque dicho monte está hoy en territorio turco.",
        text_en: "Despite being a landlocked country, it has a massive high-mountain lake covering five percent of its territory. Its national symbol is a sacred mountain where, according to biblical tradition, Noah's Ark ran aground, although the mountain is now in Turkish territory.",
      },
      {
        difficulty: "medium",
        text_es: "Es una nación del Cáucaso con un alfabeto propio de treinta y nueve letras creado en el siglo cinco. Es famosa por su producción de brandy de alta calidad, sus iglesias de piedra milenarias y su diáspora extendida por todo el mundo.",
        text_en: "It is a Caucasian nation with its own thirty-nine-letter alphabet created in the fifth century. It is famous for its high-quality brandy production, its thousand-year-old stone churches, and its diaspora spread across the globe.",
      },
      {
        difficulty: "easy",
        text_es: "Un país montañoso sin salida al mar situado entre Turquía, Georgia e Irán. Su bandera tiene tres franjas horizontales de colores rojo, azul y naranja.",
        text_en: "A landlocked mountainous country located between Turkey, Georgia, and Iran. Its flag has three horizontal stripes of red, blue, and orange.",
      },
    ],
  },
];
