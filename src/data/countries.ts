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
  {
    id: 81,
    name: "Guatemala",
    name_en: "Guatemala",
    hints: [
      { difficulty: "expert", text_es: "Su nombre proviene de una palabra náhuatl que significa 'lugar de muchos árboles'.", text_en: "Its name comes from a Nahuatl word meaning 'place of many trees'." },
      { difficulty: "hard", text_es: "Alberga el lago Atitlán, rodeado por tres volcanes, considerado uno de los más bellos del mundo.", text_en: "It is home to Lake Atitlán, surrounded by three volcanoes, considered one of the most beautiful in the world." },
      { difficulty: "medium", text_es: "Tikal, una de las mayores ciudades de la civilización maya clásica, se encuentra en su selva del Petén.", text_en: "Tikal, one of the largest cities of the classical Maya civilization, lies in its Petén jungle." },
      { difficulty: "easy", text_es: "País centroamericano que limita con México al norte y cuya capital comparte nombre con el país.", text_en: "Central American country bordering Mexico to the north, whose capital shares the country's name." },
    ],
  },
  {
    id: 82,
    name: "Honduras",
    name_en: "Honduras",
    hints: [
      { difficulty: "expert", text_es: "Su nombre se atribuye a Cristóbal Colón, quien al llegar a sus aguas profundas habría exclamado 'gracias a Dios hemos salido de estas honduras'.", text_en: "Its name is attributed to Christopher Columbus, who upon reaching its deep waters reportedly exclaimed 'thank God we have left these depths' (honduras)." },
      { difficulty: "hard", text_es: "Las ruinas mayas de Copán, célebres por sus estelas talladas, se ubican en su occidente.", text_en: "The Maya ruins of Copán, famed for their carved stelae, lie in its west." },
      { difficulty: "medium", text_es: "Sus Islas de la Bahía forman parte del segundo arrecife de coral más grande del mundo.", text_en: "Its Bay Islands form part of the world's second-largest coral reef." },
      { difficulty: "easy", text_es: "País centroamericano con capital en Tegucigalpa.", text_en: "Central American country with its capital in Tegucigalpa." },
    ],
  },
  {
    id: 83,
    name: "El Salvador",
    name_en: "El Salvador",
    hints: [
      { difficulty: "expert", text_es: "En 2021 se convirtió en el primer país del mundo en adoptar el bitcoin como moneda de curso legal.", text_en: "In 2021 it became the first country in the world to adopt bitcoin as legal tender." },
      { difficulty: "hard", text_es: "Es conocido como 'el país de los volcanes' por la veintena de conos volcánicos que lo cruzan.", text_en: "It is known as 'the land of volcanoes' due to the score of volcanic cones that cross it." },
      { difficulty: "medium", text_es: "Es el país más pequeño y densamente poblado de Centroamérica continental.", text_en: "It is the smallest and most densely populated country in continental Central America." },
      { difficulty: "easy", text_es: "Su nombre, en español, significa 'El Salvador' y su capital es San Salvador.", text_en: "Its name, in Spanish, means 'The Saviour' and its capital is San Salvador." },
    ],
  },
  {
    id: 84,
    name: "Nicaragua",
    name_en: "Nicaragua",
    hints: [
      { difficulty: "expert", text_es: "Alberga el único lago de agua dulce del mundo donde habitan tiburones toro, capaces de remontar el río San Juan desde el Caribe.", text_en: "It contains the only freshwater lake in the world inhabited by bull sharks, which can swim up the San Juan River from the Caribbean." },
      { difficulty: "hard", text_es: "Su lago homónimo, el más grande de Centroamérica, contiene la isla volcánica de Ometepe formada por dos volcanes unidos.", text_en: "Its namesake lake, the largest in Central America, contains the volcanic island of Ometepe formed by two joined volcanoes." },
      { difficulty: "medium", text_es: "Su capital, Managua, se sitúa a orillas de otro lago, distinto del que lleva el nombre del país.", text_en: "Its capital, Managua, sits on the shore of a different lake than the one that bears the country's name." },
      { difficulty: "easy", text_es: "Es el país más extenso de Centroamérica, situado entre Honduras y Costa Rica.", text_en: "It is the largest country in Central America, located between Honduras and Costa Rica." },
    ],
  },
  {
    id: 85,
    name: "Haití",
    name_en: "Haiti",
    hints: [
      { difficulty: "expert", text_es: "En 1804 se convirtió en la primera república negra independiente del mundo y la segunda nación independiente de América.", text_en: "In 1804 it became the world's first independent black republic and the second independent nation in the Americas." },
      { difficulty: "hard", text_es: "Tras su independencia, Francia le impuso una indemnización que lastró su economía durante más de un siglo.", text_en: "After its independence, France imposed an indemnity that crippled its economy for over a century." },
      { difficulty: "medium", text_es: "Comparte la isla de La Española con otra nación caribeña.", text_en: "It shares the island of Hispaniola with another Caribbean nation." },
      { difficulty: "easy", text_es: "País caribeño cuya capital, Puerto Príncipe, fue devastada por un terremoto en 2010.", text_en: "Caribbean country whose capital, Port-au-Prince, was devastated by an earthquake in 2010." },
    ],
  },
  {
    id: 86,
    name: "Puerto Rico",
    name_en: "Puerto Rico",
    hints: [
      { difficulty: "expert", text_es: "Frente a su costa norte se encuentra la fosa más profunda del océano Atlántico, con más de 8.000 metros de profundidad.", text_en: "Off its northern coast lies the deepest trench in the Atlantic Ocean, over 8,000 meters deep." },
      { difficulty: "hard", text_es: "Es un Estado Libre Asociado de Estados Unidos, sin representación con voto en el Congreso federal.", text_en: "It is a Commonwealth of the United States, with no voting representation in the federal Congress." },
      { difficulty: "medium", text_es: "Su capital, San Juan, conserva uno de los mayores recintos amurallados coloniales españoles del Caribe.", text_en: "Its capital, San Juan, preserves one of the largest Spanish colonial walled compounds in the Caribbean." },
      { difficulty: "easy", text_es: "Isla caribeña hispanohablante cuyos habitantes son ciudadanos estadounidenses por nacimiento.", text_en: "Spanish-speaking Caribbean island whose inhabitants are U.S. citizens by birth." },
    ],
  },
  {
    id: 87,
    name: "Trinidad y Tobago",
    name_en: "Trinidad and Tobago",
    hints: [
      { difficulty: "expert", text_es: "Posee el lago de asfalto natural más grande del mundo, La Brea, explotado desde tiempos coloniales.", text_en: "It has the world's largest natural asphalt lake, La Brea, exploited since colonial times." },
      { difficulty: "hard", text_es: "Es la cuna del calipso, la soca y del steelpan, único instrumento acústico inventado en el siglo XX.", text_en: "It is the birthplace of calypso, soca and the steelpan, the only acoustic instrument invented in the 20th century." },
      { difficulty: "medium", text_es: "Su economía caribeña es atípica por depender fuertemente del gas natural y el petróleo, no del turismo.", text_en: "Its Caribbean economy is atypical in relying heavily on natural gas and oil rather than tourism." },
      { difficulty: "easy", text_es: "Estado caribeño de dos islas situado frente a las costas de Venezuela.", text_en: "Two-island Caribbean state located off the coast of Venezuela." },
    ],
  },
  {
    id: 88,
    name: "Bahamas",
    name_en: "Bahamas",
    hints: [
      { difficulty: "expert", text_es: "El Agujero de Dean, en una de sus islas, es uno de los agujeros azules marinos más profundos del planeta, con 202 m.", text_en: "Dean's Blue Hole, on one of its islands, is one of the deepest marine blue holes on Earth at 202 m." },
      { difficulty: "hard", text_es: "Sus aguas turquesas son tan claras que resultan visibles desde el espacio gracias a sus bancos de arena calcárea.", text_en: "Its turquoise waters are so clear they are visible from space thanks to its calcareous sandbanks." },
      { difficulty: "medium", text_es: "En 1492, Cristóbal Colón realizó su primer desembarco americano en una de sus islas, San Salvador.", text_en: "In 1492, Christopher Columbus made his first American landfall on one of its islands, San Salvador." },
      { difficulty: "easy", text_es: "Archipiélago caribeño de más de 700 islas con capital en Nasáu.", text_en: "Caribbean archipelago of more than 700 islands with capital in Nassau." },
    ],
  },
  {
    id: 89,
    name: "Barbados",
    name_en: "Barbados",
    hints: [
      { difficulty: "expert", text_es: "En 2021 se convirtió en república, abandonando la monarquía británica tras casi 400 años.", text_en: "In 2021 it became a republic, abandoning the British monarchy after almost 400 years." },
      { difficulty: "hard", text_es: "Está geológicamente fuera del arco volcánico antillano: es una isla coralina elevada por la subducción de placas.", text_en: "It lies geologically outside the Antillean volcanic arc: a coral island uplifted by plate subduction." },
      { difficulty: "medium", text_es: "Se considera la cuna del ron, destilado allí por primera vez en el siglo XVII.", text_en: "It is considered the birthplace of rum, first distilled there in the 17th century." },
      { difficulty: "easy", text_es: "Pequeña nación insular caribeña, lugar de nacimiento de la cantante Rihanna.", text_en: "Small Caribbean island nation, birthplace of the singer Rihanna." },
    ],
  },
  {
    id: 90,
    name: "Alemania",
    name_en: "Germany",
    hints: [
      { difficulty: "expert", text_es: "Su Ley Fundamental de 1949 contiene una 'cláusula de eternidad' que prohíbe modificar los principios democráticos y federales del Estado.", text_en: "Its 1949 Basic Law contains an 'eternity clause' forbidding any amendment of the state's democratic and federal principles." },
      { difficulty: "hard", text_es: "No tiene un límite general de velocidad en gran parte de su red de autopistas, las Autobahn.", text_en: "It has no general speed limit on most of its motorway network, the Autobahn." },
      { difficulty: "medium", text_es: "Es la mayor economía de la Unión Europea y el país con más población dentro de ella.", text_en: "It is the largest economy in the European Union and its most populous country." },
      { difficulty: "easy", text_es: "País centroeuropeo cuya capital, Berlín, estuvo dividida por un muro hasta 1989.", text_en: "Central European country whose capital, Berlin, was divided by a wall until 1989." },
    ],
  },
  {
    id: 91,
    name: "Bulgaria",
    name_en: "Bulgaria",
    hints: [
      { difficulty: "expert", text_es: "Es el país que dio nombre al alfabeto cirílico, desarrollado en su Primer Imperio en el siglo IX.", text_en: "It is the country that gave the Cyrillic alphabet its name, developed in its First Empire in the 9th century." },
      { difficulty: "hard", text_es: "Es el mayor productor mundial de aceite de rosa, ingrediente clave de la perfumería de lujo.", text_en: "It is the world's largest producer of rose oil, a key ingredient in luxury perfumery." },
      { difficulty: "medium", text_es: "Sus pobladores asienten moviendo la cabeza de lado a lado y niegan moviéndola arriba y abajo, al revés que en la mayoría de países.", text_en: "Its people nod sideways for 'yes' and up-and-down for 'no', the opposite of most countries." },
      { difficulty: "easy", text_es: "País balcánico con costa en el mar Negro y capital en Sofía.", text_en: "Balkan country with a Black Sea coast and capital in Sofia." },
    ],
  },
  {
    id: 92,
    name: "Eslovaquia",
    name_en: "Slovakia",
    hints: [
      { difficulty: "expert", text_es: "Posee la mayor concentración de castillos y palacios per cápita del mundo, con más de 180 estructuras.", text_en: "It has the world's highest per-capita concentration of castles and palaces, with over 180 structures." },
      { difficulty: "hard", text_es: "Su capital es la única en el mundo que limita con dos países independientes diferentes.", text_en: "Its capital is the only one in the world bordering two different independent countries." },
      { difficulty: "medium", text_es: "Se separó pacíficamente de su país hermano el 1 de enero de 1993, en el llamado 'Divorcio de Terciopelo'.", text_en: "It peacefully split from its sibling country on 1 January 1993, in the so-called 'Velvet Divorce'." },
      { difficulty: "easy", text_es: "País centroeuropeo con capital en Bratislava, atravesado por los Cárpatos.", text_en: "Central European country with capital in Bratislava, crossed by the Carpathians." },
    ],
  },
  {
    id: 93,
    name: "Eslovenia",
    name_en: "Slovenia",
    hints: [
      { difficulty: "expert", text_es: "Es uno de los países más boscosos de Europa: más del 60% de su territorio está cubierto por bosques.", text_en: "It is one of Europe's most forested countries: over 60% of its territory is covered by forest." },
      { difficulty: "hard", text_es: "La cueva de Postojna alberga al proteus, una salamandra ciega que puede vivir más de 100 años.", text_en: "Postojna Cave hosts the olm, a blind salamander that can live for over 100 years." },
      { difficulty: "medium", text_es: "Tiene una breve costa adriática de apenas 47 km, pero también acceso a los Alpes Julianos.", text_en: "It has a short Adriatic coast of barely 47 km, yet also access to the Julian Alps." },
      { difficulty: "easy", text_es: "Antigua república yugoslava con capital en Liubliana, miembro de la zona euro.", text_en: "Former Yugoslav republic with capital in Ljubljana, a eurozone member." },
    ],
  },
  {
    id: 94,
    name: "Bosnia y Herzegovina",
    name_en: "Bosnia and Herzegovina",
    hints: [
      { difficulty: "expert", text_es: "Su sistema político tras los Acuerdos de Dayton tiene una presidencia tripartita rotatoria de tres miembros, uno por cada pueblo constituyente.", text_en: "Its post-Dayton political system has a rotating three-member tripartite presidency, one for each constituent people." },
      { difficulty: "hard", text_es: "El asesinato del archiduque Francisco Fernando en su capital en 1914 desencadenó la Primera Guerra Mundial.", text_en: "The assassination of Archduke Franz Ferdinand in its capital in 1914 triggered World War I." },
      { difficulty: "medium", text_es: "El célebre Puente Viejo de Mostar fue destruido en 1993 y reconstruido años después como símbolo de reconciliación.", text_en: "The famous Old Bridge of Mostar was destroyed in 1993 and rebuilt years later as a symbol of reconciliation." },
      { difficulty: "easy", text_es: "País balcánico cuya capital, Sarajevo, sufrió el sitio más largo de la guerra moderna.", text_en: "Balkan country whose capital, Sarajevo, endured the longest siege in modern warfare." },
    ],
  },
  {
    id: 95,
    name: "Albania",
    name_en: "Albania",
    hints: [
      { difficulty: "expert", text_es: "Durante el régimen de Enver Hoxha se construyeron unos 170.000 búnkeres de hormigón, muchos aún visibles en su paisaje.", text_en: "Under Enver Hoxha's regime, around 170,000 concrete bunkers were built, many still visible across its landscape." },
      { difficulty: "hard", text_es: "Sus habitantes llaman a su país 'Shqipëria', que significa 'tierra de las águilas'.", text_en: "Its inhabitants call their country 'Shqipëria', meaning 'land of the eagles'." },
      { difficulty: "medium", text_es: "Su Riviera, en el mar Jónico, es uno de los tramos costeros menos masificados del Mediterráneo.", text_en: "Its Riviera on the Ionian Sea is one of the least crowded coastal stretches of the Mediterranean." },
      { difficulty: "easy", text_es: "País balcánico con capital en Tirana, frente a los talones de Italia.", text_en: "Balkan country with capital in Tirana, facing the heel of Italy." },
    ],
  },
  {
    id: 96,
    name: "Macedonia del Norte",
    name_en: "North Macedonia",
    hints: [
      { difficulty: "expert", text_es: "Cambió oficialmente su nombre en 2019 tras un acuerdo con Grecia que desbloqueó su acceso a la OTAN.", text_en: "It officially changed its name in 2019 after an agreement with Greece that unblocked its NATO accession." },
      { difficulty: "hard", text_es: "Comparte el lago Ohrid, uno de los más antiguos y profundos de Europa, con Albania.", text_en: "It shares Lake Ohrid, one of Europe's oldest and deepest, with Albania." },
      { difficulty: "medium", text_es: "Su capital, Skopie, es el lugar de nacimiento de la Madre Teresa de Calcuta.", text_en: "Its capital, Skopje, is the birthplace of Mother Teresa of Calcutta." },
      { difficulty: "easy", text_es: "País balcánico sin salida al mar que se independizó pacíficamente de Yugoslavia en 1991.", text_en: "Landlocked Balkan country that peacefully gained independence from Yugoslavia in 1991." },
    ],
  },
  {
    id: 97,
    name: "Montenegro",
    name_en: "Montenegro",
    hints: [
      { difficulty: "expert", text_es: "Adoptó el euro como moneda sin formar parte de la zona euro ni de la Unión Europea.", text_en: "It adopted the euro as its currency without being part of the eurozone or the European Union." },
      { difficulty: "hard", text_es: "Las Bocas de Kotor son consideradas el fiordo más meridional de Europa, aunque técnicamente son un cañón fluvial sumergido.", text_en: "The Bay of Kotor is considered Europe's southernmost fjord, although technically it is a submerged river canyon." },
      { difficulty: "medium", text_es: "Su nombre, traducido literalmente del italiano, significa 'monte negro'.", text_en: "Its name, literally translated from Italian, means 'black mountain'." },
      { difficulty: "easy", text_es: "Pequeño país balcánico que se independizó de Serbia en 2006 mediante referéndum.", text_en: "Small Balkan country that gained independence from Serbia in 2006 by referendum." },
    ],
  },
  {
    id: 98,
    name: "Kosovo",
    name_en: "Kosovo",
    hints: [
      { difficulty: "expert", text_es: "Su independencia, declarada en 2008, no es reconocida por más de 90 estados miembros de la ONU, incluida Serbia.", text_en: "Its independence, declared in 2008, is not recognized by more than 90 UN member states, including Serbia." },
      { difficulty: "hard", text_es: "Su población es mayoritariamente albanesa y musulmana en un entorno regional eslavo y ortodoxo.", text_en: "Its population is mostly Albanian and Muslim in a largely Slavic and Orthodox regional context." },
      { difficulty: "medium", text_es: "Es uno de los países más jóvenes del mundo, tanto por su independencia como por la edad media de su población.", text_en: "It is one of the youngest countries in the world, both in independence and in median population age." },
      { difficulty: "easy", text_es: "Su capital, Prístina, está atravesada por una avenida dedicada a Bill Clinton.", text_en: "Its capital, Pristina, has an avenue dedicated to Bill Clinton." },
    ],
  },
  {
    id: 99,
    name: "Lituania",
    name_en: "Lithuania",
    hints: [
      { difficulty: "expert", text_es: "Su instituto geográfico calculó que el centro geográfico exacto de Europa se encuentra a 26 km de su capital.", text_en: "Its geographic institute calculated that the exact geographic centre of Europe lies 26 km from its capital." },
      { difficulty: "hard", text_es: "En el siglo XIV fue, junto con Polonia, una de las mayores potencias de Europa, extendiéndose del Báltico al mar Negro.", text_en: "In the 14th century it was, together with Poland, one of Europe's largest powers, stretching from the Baltic to the Black Sea." },
      { difficulty: "medium", text_es: "Fue el primer país en proclamar su independencia de la URSS, en marzo de 1990.", text_en: "It was the first country to declare independence from the USSR, in March 1990." },
      { difficulty: "easy", text_es: "República báltica con capital en Vilna, miembro de la UE y la OTAN.", text_en: "Baltic republic with capital in Vilnius, member of the EU and NATO." },
    ],
  },
  {
    id: 100,
    name: "Letonia",
    name_en: "Latvia",
    hints: [
      { difficulty: "expert", text_es: "Su capital tiene la mayor concentración de edificios de estilo art nouveau (Jugendstil) del mundo.", text_en: "Its capital has the world's highest concentration of art nouveau (Jugendstil) buildings." },
      { difficulty: "hard", text_es: "El ámbar del Báltico, fósil resinoso muy apreciado, es uno de sus productos tradicionales más característicos.", text_en: "Baltic amber, a prized fossilized resin, is one of its most characteristic traditional products." },
      { difficulty: "medium", text_es: "Cerca de la mitad de su territorio está cubierto por bosques, y comparte fronteras con Estonia y Lituania.", text_en: "Nearly half its territory is forested, and it shares borders with Estonia and Lithuania." },
      { difficulty: "easy", text_es: "Estado báltico con capital en Riga, situado entre Estonia y Lituania.", text_en: "Baltic state with capital in Riga, located between Estonia and Lithuania." },
    ],
  },
  {
    id: 101,
    name: "Estonia",
    name_en: "Estonia",
    hints: [
      { difficulty: "expert", text_es: "Es el primer país del mundo que ofrece e-Residencia, una identidad digital que permite a extranjeros gestionar empresas en línea.", text_en: "It is the first country in the world to offer e-Residency, a digital identity letting foreigners run companies online." },
      { difficulty: "hard", text_es: "Skype fue desarrollado en gran parte por ingenieros de este pequeño país báltico.", text_en: "Skype was largely developed by engineers from this small Baltic country." },
      { difficulty: "medium", text_es: "Casi la mitad de su territorio está cubierto por bosques y posee más de 2.000 islas en el Báltico.", text_en: "Nearly half its territory is forested and it has over 2,000 islands in the Baltic." },
      { difficulty: "easy", text_es: "El más septentrional de los tres estados bálticos, con capital en Tallin.", text_en: "The northernmost of the three Baltic states, with capital in Tallinn." },
    ],
  },
  {
    id: 102,
    name: "Bielorrusia",
    name_en: "Belarus",
    hints: [
      { difficulty: "expert", text_es: "Cerca del 40% de su territorio está cubierto por bosques, incluido el último bosque primario de llanura de Europa, Białowieża.", text_en: "About 40% of its territory is forested, including Europe's last primeval lowland forest, Białowieża." },
      { difficulty: "hard", text_es: "Su nombre significa literalmente 'Rusia Blanca' en su propia lengua eslava oriental.", text_en: "Its name literally means 'White Russia' in its own Eastern Slavic language." },
      { difficulty: "medium", text_es: "Está gobernada desde 1994 por Aleksandr Lukashenko, considerado el último 'dictador' de Europa.", text_en: "It has been ruled since 1994 by Alexander Lukashenko, considered Europe's last 'dictator'." },
      { difficulty: "easy", text_es: "País sin salida al mar entre Rusia y Polonia, con capital en Minsk.", text_en: "Landlocked country between Russia and Poland, with capital in Minsk." },
    ],
  },
  {
    id: 103,
    name: "Moldavia",
    name_en: "Moldova",
    hints: [
      { difficulty: "expert", text_es: "Sus bodegas de Cricova y Mileștii Mici figuran entre las más extensas del mundo, con cientos de kilómetros de galerías subterráneas.", text_en: "Its Cricova and Mileștii Mici cellars are among the world's largest, with hundreds of kilometres of underground galleries." },
      { difficulty: "hard", text_es: "En su territorio existe una región separatista, Transnistria, no reconocida internacionalmente.", text_en: "On its territory exists a breakaway region, Transnistria, unrecognized internationally." },
      { difficulty: "medium", text_es: "Su lengua oficial es prácticamente idéntica al rumano, fruto de su pasado común.", text_en: "Its official language is virtually identical to Romanian, due to their shared past." },
      { difficulty: "easy", text_es: "País sin salida al mar entre Rumanía y Ucrania, con capital en Chisináu.", text_en: "Landlocked country between Romania and Ukraine, with capital in Chișinău." },
    ],
  },
  {
    id: 104,
    name: "Georgia",
    name_en: "Georgia",
    hints: [
      { difficulty: "expert", text_es: "Es considerada la cuna del vino: hay evidencias arqueológicas de vinificación de hace 8.000 años en sus tierras.", text_en: "It is considered the cradle of wine: archaeological evidence shows winemaking there 8,000 years ago." },
      { difficulty: "hard", text_es: "Su alfabeto, único en el mundo, está reconocido por la UNESCO como patrimonio cultural inmaterial.", text_en: "Its unique alphabet is recognized by UNESCO as intangible cultural heritage." },
      { difficulty: "medium", text_es: "Está situada en el Cáucaso meridional y limita al norte con Rusia mediante una de las cordilleras más altas de Europa.", text_en: "It lies in the South Caucasus and borders Russia to the north via one of Europe's highest mountain ranges." },
      { difficulty: "easy", text_es: "Comparte nombre con un estado de EE. UU.; su capital es Tiflis.", text_en: "It shares its name with a U.S. state; its capital is Tbilisi." },
    ],
  },
  {
    id: 105,
    name: "Armenia",
    name_en: "Armenia",
    hints: [
      { difficulty: "expert", text_es: "En el año 301 se convirtió en el primer estado del mundo en adoptar el cristianismo como religión oficial.", text_en: "In the year 301 it became the world's first state to adopt Christianity as its official religion." },
      { difficulty: "hard", text_es: "El monte Ararat, símbolo nacional y donde la tradición sitúa el arca de Noé, se encuentra hoy en territorio turco pero es visible desde su capital.", text_en: "Mount Ararat, a national symbol and traditional resting place of Noah's Ark, lies today in Turkish territory but is visible from its capital." },
      { difficulty: "medium", text_es: "Su lago Seván es uno de los lagos de alta montaña de agua dulce más grandes del mundo.", text_en: "Its Lake Sevan is one of the world's largest high-altitude freshwater lakes." },
      { difficulty: "easy", text_es: "País del Cáucaso con capital en Ereván, sin salida al mar.", text_en: "Caucasus country with capital in Yerevan, landlocked." },
    ],
  },
];
