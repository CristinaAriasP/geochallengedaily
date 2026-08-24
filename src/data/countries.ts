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
  {
    id: 106,
    name: "Afganistán",
    name_en: "Afghanistan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países que utilizan el sistema de unidades tradicionales Dari y Pashto, donde una 'seer' es aproximadamente siete kilogramos y setecientos gramos.",
        text_en: "It is one of the few countries that use traditional Dari and Pashto units of measurement, where a 'seer' is approximately seven kilograms and seven hundred grams.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente, su ubicación estratégica en la Ruta de la Seda le valió el apodo de 'encrucijada de Asia'. Ha sido el escenario de conflictos prolongados, siendo invadido por potencias como el Imperio Británico y la Unión Soviética.",
        text_en: "Historically, its strategic location on the Silk Road earned it the nickname 'Crossroads of Asia'. It has been the scene of prolonged conflicts, being invaded by powers such as the British Empire and the Soviet Union.",
      },
      {
        difficulty: "medium",
        text_es: "Su paisaje está dominado por las escarpadas montañas de la cordillera del Hindu Kush, que cubren la mayor parte de su territorio. Es uno de los principales productores de opio del mundo.",
        text_en: "Its landscape is dominated by the rugged Hindu Kush mountain range, which covers most of its territory. It is one of the world's primary opium producers.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en Asia Central, limitando con Turkmenistán, Uzbekistán, Tayikistán, China, Pakistán e Irán. Su capital es una de las ciudades más antiguas de la región. Su bandera tiene tres franjas verticales: negra, roja y verde, con un emblema en el centro.",
        text_en: "It is located in Central Asia, bordering Turkmenistan, Uzbekistan, Tajikistan, China, Pakistan, and Iran. Its capital is one of the oldest cities in the region. Its flag features three vertical stripes: black, red, and green, with an emblem in the center.",
      },
    ],
  },
  {
    id: 107,
    name: "Andorra",
    name_en: "Andorra",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo donde el catalán es el único idioma oficial, y tiene un modelo de coprincipado parlamentario, con sus jefes de estado siendo el obispo de Urgel y el presidente de la república vecina al sur.",
        text_en: "It is the only country in the world where Catalan is the sole official language, and it has a parliamentary co-principality model, with its heads of state being the Bishop of Urgell and the president of the republic to its south.",
      },
      {
        difficulty: "hard",
        text_es: "Su pequeño tamaño y su ubicación lo convirtieron en un refugio durante las Guerras Mundiales. Sus sistemas fiscales han atraído a numerosas empresas y particulares, pero también han generado controversia a nivel internacional.",
        text_en: "Its small size and location made it a refuge during the World Wars. Its tax systems have attracted numerous companies and individuals, but have also generated international controversy.",
      },
      {
        difficulty: "medium",
        text_es: "Este pequeño estado es conocido por sus estaciones de esquí y su estatus de paraíso fiscal. Su gastronomía, como la 'Escudella', está influenciada por sus vecinos montañosos.",
        text_en: "This small state is known for its ski resorts and its tax haven status. Its cuisine, such as 'Escudella', is influenced by its mountainous neighbors.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en los Pirineos, es uno de los estados más pequeños de Europa, entre Francia y España. Su capital, la ciudad más alta del país, es Andorra la Vieja. Su bandera presenta tres franjas verticales: azul, amarilla y roja, con el escudo en la franja central.",
        text_en: "Located in the Pyrenees, it is one of Europe's smallest states, nestled between France and Spain. Its capital, the highest city in the country, is Andorra la Vella. Its flag features three vertical stripes: blue, yellow, and red, with the coat of arms in the central stripe.",
      },
    ],
  },
  {
    id: 108,
    name: "Angola",
    name_en: "Angola",
    hints: [
      {
        difficulty: "expert",
        text_es: "Un informe de las Naciones Unidas del año dos mil siete describió su cultura del té de la tarde como 'una tradición social en declive', aunque su impacto en las exportaciones de café sigue siendo significativo.",
        text_en: "A United Nations report from two thousand seven described its afternoon tea culture as 'a declining social tradition,' though its impact on coffee exports remains significant.",
      },
      {
        difficulty: "hard",
        text_es: "Este país africano fue una colonia portuguesa durante más de cuatrocientos años, lo que dejó una profunda huella cultural y lingüística. Obtuvo la independencia en el año mil novecientos setenta y cinco, lo que desencadenó una larga y devastadora guerra civil.",
        text_en: "This African nation was a Portuguese colony for over four hundred years, leaving a deep cultural and linguistic mark. It gained independence in nineteen seventy-five, which triggered a long and devastating civil war.",
      },
      {
        difficulty: "medium",
        text_es: "Es el segundo mayor productor de petróleo y diamantes del África subsahariana, lo que impulsa gran parte de su economía. Su costa atlántica es famosa por sus playas y el Parque Nacional de Kissama, hogar de una rica fauna.",
        text_en: "It is Sub-Saharan Africa's second-largest producer of oil and diamonds, which drives much of its economy. Its Atlantic coast is famous for its beaches and Kissama National Park, home to rich wildlife.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el suroeste de África, comparte fronteras con Namibia, Zambia, la República Democrática del Congo y la República del Congo (a través de su enclave Cabinda). Su capital y ciudad más grande es Luanda. Su bandera es horizontal, roja arriba y negra abajo, con un machete, una estrella y un engranaje amarillos en el centro.",
        text_en: "Located in southwestern Africa, it shares borders with Namibia, Zambia, the Democratic Republic of Congo, and the Republic of Congo (via its Cabinda exclave). Its capital and largest city is Luanda. Its flag is horizontal, red on top and black on the bottom, with a yellow machete, star, and cogwheel in the center.",
      },
    ],
  },
  {
    id: 109,
    name: "Antigua y Barbuda",
    name_en: "Antigua and Barbuda",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos estados insulares que mantiene un sistema de 'realeza de cricket', donde un monarca extranjero actúa como jefe de estado, representado por un gobernador general local.",
        text_en: "It is one of the few island states that maintains a 'cricket royalty' system, where a foreign monarch acts as head of state, represented by a local governor-general.",
      },
      {
        difficulty: "hard",
        text_es: "Esta nación caribeña fue un importante punto estratégico para la Royal Navy británica en el siglo dieciocho, con un astillero crucial. Fue la primera isla en recibir a esclavos liberados del Imperio Británico en el año mil ochocientos treinta y cuatro.",
        text_en: "This Caribbean nation was an important strategic point for the British Royal Navy in the eighteenth century, with a crucial dockyard. It was the first island to receive liberated slaves from the British Empire in eighteen thirty-four.",
      },
      {
        difficulty: "medium",
        text_es: "Es un destino turístico popular, famoso por sus trescientas sesenta y cinco playas, una para cada día del año. Su bebida nacional es el ron y su plato nacional es el fungee y pepperpot.",
        text_en: "It is a popular tourist destination, famous for its three hundred and sixty-five beaches, one for each day of the year. Its national drink is rum and its national dish is fungee and pepperpot.",
      },
      {
        difficulty: "easy",
        text_es: "Es una nación insular en el Caribe, al este de Puerto Rico, formando parte de las Antillas Menores. Su capital es Saint John's. La bandera tiene un sol amarillo naciente sobre un fondo rojo, con triángulos negros y blancos, simbolizando el sol, el mar y la arena.",
        text_en: "It is an island nation in the Caribbean, east of Puerto Rico, part of the Lesser Antilles. Its capital is Saint John's. The flag features a yellow rising sun over a red background, with black and white triangles, symbolizing the sun, sea, and sand.",
      },
    ],
  },
  {
    id: 110,
    name: "Azerbaiyán",
    name_en: "Azerbaijan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Alberga la mayor concentración de volcanes de lodo del mundo, con aproximadamente cuatrocientos de los mil que existen. Estos volcanes emiten barro, gas y agua en lugar de lava.",
        text_en: "It is home to the world's largest concentration of mud volcanoes, with approximately four hundred of the one thousand in existence. These volcanoes emit mud, gas, and water instead of lava.",
      },
      {
        difficulty: "hard",
        text_es: "Fue una de las primeras naciones en el mundo islámico en establecer una república secular y una de las primeras en otorgar derechos de voto a las mujeres en el año mil novecientos dieciocho, incluso antes que muchos países europeos.",
        text_en: "It was one of the first nations in the Islamic world to establish a secular republic and one of the first to grant women voting rights in nineteen eighteen, even before many European countries.",
      },
      {
        difficulty: "medium",
        text_es: "Conocido como la 'Tierra del Fuego', tiene una larga historia ligada al zoroastrismo debido a sus abundantes reservas de gas natural que causan llamas perpetuas. Su cocina se caracteriza por el 'plov' y el té negro.",
        text_en: "Known as the 'Land of Fire', it has a long history linked to Zoroastrianism due to its abundant natural gas reserves causing perpetual flames. Its cuisine is characterized by 'plov' and black tea.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en la encrucijada de Europa y Asia, en la región del Cáucaso, limitando con Rusia, Georgia, Armenia, Irán y el Mar Caspio. Su capital es Bakú. La bandera tiene tres franjas horizontales: azul, roja y verde, con una media luna y una estrella de ocho puntas blancas en el centro.",
        text_en: "It is located at the crossroads of Europe and Asia, in the Caucasus region, bordering Russia, Georgia, Armenia, Iran, and the Caspian Sea. Its capital is Baku. The flag has three horizontal stripes: blue, red, and green, with a white crescent moon and an eight-pointed star in the center.",
      },
    ],
  },
  {
    id: 111,
    name: "Baréin",
    name_en: "Bahrain",
    hints: [
      {
        difficulty: "expert",
        text_es: "Hasta el siglo diecinueve, una gran proporción de las perlas naturales que llegaban a los mercados europeos se originaban en las extensas camas de ostras que rodeaban esta nación insular. Su soberanía marítima fue disputada durante siglos por varias potencias regionales.",
        text_en: "Until the nineteenth century, a large proportion of natural pearls reaching European markets originated from the extensive oyster beds surrounding this island nation. Its maritime sovereignty was disputed for centuries by various regional powers.",
      },
      {
        difficulty: "hard",
        text_es: "Es la sede de la Quinta Flota de los Estados Unidos. Fue el primer país de la península arábiga en descubrir petróleo a principios del siglo veinte, pero ha diversificado su economía con la banca y el turismo.",
        text_en: "It is the home of the United States Fifth Fleet. It was the first country in the Arabian Peninsula to discover oil in the early twentieth century, but has since diversified its economy into banking and tourism.",
      },
      {
        difficulty: "medium",
        text_es: "Esta nación está formada por más de treinta islas, siendo la más grande la que lleva su mismo nombre. Es un importante centro financiero en el Golfo Pérsico y es el anfitrión anual de una carrera de Fórmula Uno.",
        text_en: "This nation is made up of over thirty islands, with the largest one bearing its own name. It is a major financial hub in the Persian Gulf and annually hosts a Formula One race.",
      },
      {
        difficulty: "easy",
        text_es: "Es una nación insular en el Golfo Pérsico, cerca de la costa este de Arabia Saudita, con la que está conectada por la Calzada del Rey Fahd. Su capital es Manama. La bandera tiene una banda dentada blanca a la izquierda sobre un campo rojo.",
        text_en: "This is an island nation in the Persian Gulf, off the eastern coast of Saudi Arabia, with which it is connected by the King Fahd Causeway. Its capital city is Manama. The flag features a white serrated band on the left over a red field.",
      },
    ],
  },
  {
    id: 112,
    name: "Belice",
    name_en: "Belize",
    hints: [
      {
        difficulty: "expert",
        text_es: "Un elemento central de la cultura garífuna es el dugu, un ritual de sanación espiritual que invoca a los ancestros, practicado por chamanes llamados buyei. Esta nación es uno de los principales lugares donde esta tradición se ha mantenido viva.",
        text_en: "Central to Garifuna culture is the dugu, a spiritual healing ritual invoking ancestors, performed by shamans called buyei. This nation is one of the primary places where this tradition has been kept alive.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país de América Central cuya lengua oficial es el inglés. Reclamaciones territoriales de su vecino occidental, que datan de la época colonial, han causado disputas históricas y aún no resueltas.",
        text_en: "It is the only country in Central America where English is the official language. Territorial claims by its western neighbor, dating back to colonial times, have caused historical and unresolved disputes.",
      },
      {
        difficulty: "medium",
        text_es: "Este país centroamericano cuenta con la barrera de coral más grande del hemisferio occidental, un ecosistema marino rico en biodiversidad. Su geografía incluye selvas tropicales, ruinas mayas y cuevas submarinas.",
        text_en: "This Central American country boasts the largest barrier reef in the Western Hemisphere, a marine ecosystem rich in biodiversity. Its geography includes rainforests, Mayan ruins, and underwater caves.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en la costa este de América Central, bordeando el mar Caribe, entre México al norte y Guatemala al oeste y sur. Su capital es Belmopán. La bandera azul presenta un círculo blanco con su escudo de armas en el centro.",
        text_en: "It is located on the eastern coast of Central America, bordering the Caribbean Sea, between Mexico to the north and Guatemala to the west and south. Its capital is Belmopan. The blue flag features a white circle with its coat of arms in the center.",
      },
    ],
  },
  {
    id: 113,
    name: "Benín",
    name_en: "Benin",
    hints: [
      {
        difficulty: "expert",
        text_es: "La antigua ciudad de Ouidah, en esta nación, fue uno de los principales puertos de exportación de esclavos africanos. Se estima que alrededor de un millón de personas fueron esclavizadas y enviadas al extranjero desde sus costas entre los siglos diecisiete y diecinueve.",
        text_en: "The ancient city of Ouidah, in this nation, was one of the main ports for the export of African slaves. It is estimated that about one million people were enslaved and shipped overseas from its coasts between the seventeenth and nineteenth centuries.",
      },
      {
        difficulty: "hard",
        text_es: "Conocida como el Barrio Latino de África Occidental, esta nación es el lugar de nacimiento del vudú, que fue reconocido como religión oficial a principios del siglo veintiuno. Su economía depende en gran medida del algodón.",
        text_en: "Known as the Latin Quarter of West Africa, this nation is the birthplace of Vodun, which was recognized as an official religion in the early twenty-first century. Its economy heavily relies on cotton.",
      },
      {
        difficulty: "medium",
        text_es: "Este país de África Occidental tiene una costa estrecha que da al golfo de Guinea. Posee una rica historia real y es famoso por su arte de bronce y sus intrincadas tallas en madera, que a menudo representan figuras ancestrales.",
        text_en: "This West African country has a narrow coastline facing the Bight of Benin. It boasts a rich royal history and is famous for its bronze art and intricate wood carvings, often depicting ancestral figures.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en África Occidental, limita con Togo al oeste, Nigeria al este y Níger y Burkina Faso al norte. Su capital oficial es Porto Novo, aunque la sede del gobierno se encuentra en Cotonú. La bandera tiene una franja vertical verde a la izquierda y dos horizontales, amarilla y roja, a la derecha.",
        text_en: "Located in West Africa, it borders Togo to the west, Nigeria to the east, and Niger and Burkina Faso to the north. Its official capital is Porto Novo, though the seat of government is in Cotonou. The flag features a vertical green stripe on the left and two horizontal stripes, yellow and red, on the right.",
      },
    ],
  },
  {
    id: 114,
    name: "Birmania",
    name_en: "Myanmar",
    hints: [
      {
        difficulty: "expert",
        text_es: "El Reino de Pagan, que floreció entre los siglos once y trece, unificó por primera vez gran parte de esta región bajo el budismo theravada, dejando un legado de miles de templos y estupas de ladrillo en una vasta llanura.",
        text_en: "The Pagan Kingdom, flourishing between the eleventh and thirteenth centuries, first unified much of this region under Theravada Buddhism, leaving a legacy of thousands of brick temples and stupas across a vast plain.",
      },
      {
        difficulty: "hard",
        text_es: "Este país del sudeste asiático ha estado en el centro de la geopolítica regional, con un largo período de gobierno militar y un complejo mosaico de grupos étnicos y conflictos internos. Su forma de gobierno ha sido objeto de intensa escrutinio internacional.",
        text_en: "This Southeast Asian country has been at the heart of regional geopolitics, with a long period of military rule and a complex tapestry of ethnic groups and internal conflicts. Its form of government has been under intense international scrutiny.",
      },
      {
        difficulty: "medium",
        text_es: "Es el país más grande del sudeste asiático continental. Es famoso por sus pagodas doradas, sus antiguos templos budistas y sus paisajes de montañas, lagos y una larga costa. Un plato tradicional popular es el Mohinga, una sopa de fideos de pescado.",
        text_en: "It is the largest country in mainland Southeast Asia. It is famous for its golden pagodas, ancient Buddhist temples, and landscapes of mountains, lakes, and a long coastline. A popular traditional dish is Mohinga, a fish noodle soup.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el sudeste asiático, limita con Bangladés e India al oeste, China al norte, Laos y Tailandia al este, y el mar de Andamán al sur. Su capital es Naipyidó. La bandera tiene tres franjas horizontales de amarillo, verde y rojo, con una gran estrella blanca en el centro.",
        text_en: "Located in Southeast Asia, it borders Bangladesh and India to the west, China to the north, Laos and Thailand to the east, and the Andaman Sea to the south. Its capital is Naypyidaw. The flag features three horizontal stripes of yellow, green, and red, with a large white star in the center.",
      },
    ],
  },
  {
    id: 115,
    name: "Botsuana",
    name_en: "Botswana",
    hints: [
      {
        difficulty: "expert",
        text_es: "Durante el Protectorado de Bechuanalandia, tres jefes —Khama III, Sebele I y Bathoen I— viajaron al Reino Unido a finales del siglo diecinueve para pedir protección contra Cecil Rhodes, asegurando que su territorio no fuera anexado a Rodesia.",
        text_en: "During the Bechuanaland Protectorate, three chiefs—Khama III, Sebele I, and Bathoen I—traveled to the United Kingdom in the late nineteenth century to plead for protection against Cecil Rhodes, ensuring their territory was not annexed to Rhodesia.",
      },
      {
        difficulty: "hard",
        text_es: "Esta nación del sur de África es conocida por su gobierno democrático estable y su bajo nivel de corrupción, atípico en la región. Su economía se ha transformado drásticamente gracias a la extracción de diamantes, lo que la convierte en una de las más prósperas del continente.",
        text_en: "This Southern African nation is known for its stable democratic government and low corruption levels, atypical for the region. Its economy has been dramatically transformed by diamond mining, making it one of the most prosperous on the continent.",
      },
      {
        difficulty: "medium",
        text_es: "Un país sin salida al mar en el sur de África, famoso por el delta del Okavango, un vasto humedal interior que atrae una asombrosa vida silvestre. Es un destino principal para safaris, hogar de grandes poblaciones de elefantes y leones.",
        text_en: "A landlocked country in Southern Africa, famous for the Okavango Delta, a vast inland wetland that attracts astonishing wildlife. It is a prime safari destination, home to large populations of elephants and lions.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el sur de África, limita con Sudáfrica al sur, Namibia al oeste y norte, Zimbabue al este, y comparte un pequeño punto fronterizo con Zambia. Su capital es Gaborone. La bandera tiene un campo azul claro con una franja horizontal negra con bordes blancos en el centro.",
        text_en: "Located in Southern Africa, it borders South Africa to the south, Namibia to the west and north, Zimbabwe to the east, and shares a small border point with Zambia. Its capital is Gaborone. The flag features a light blue field with a horizontal black stripe, bordered in white, in the center.",
      },
    ],
  },
  {
    id: 116,
    name: "Brunéi",
    name_en: "Brunei",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los dos países soberanos que son enclaves completos dentro de otro estado, pero con una porción más grande y una menor separadas por la Bahía de Brunéi.",
        text_en: "It is one of two sovereign countries that are complete enclaves within another state, yet with a larger and a smaller portion separated by Brunei Bay.",
      },
      {
        difficulty: "hard",
        text_es: "Su régimen político es una monarquía absoluta regida por un sultán, quien ostenta tanto el cargo de jefe de Estado como de primer ministro. Su economía depende fuertemente de la explotación de hidrocarburos.",
        text_en: "Its political regime is an absolute monarchy ruled by a sultan, who holds both the positions of head of state and prime minister. Its economy heavily relies on hydrocarbon exploitation.",
      },
      {
        difficulty: "medium",
        text_es: "Una de sus mezquitas más icónicas, la Mezquita Omar Ali Saifuddien, flota parcialmente sobre una laguna artificial y es un símbolo de la nación. Abarca dos partes principales separadas por un territorio de otro país.",
        text_en: "One of its most iconic mosques, the Omar Ali Saifuddien Mosque, partially floats on an artificial lagoon and is a national symbol. It comprises two main parts separated by another country's territory.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en el sudeste asiático, en la isla de Borneo. Su capital es Bandar Seri Begawan. Está rodeado por Malasia y el Mar de la China Meridional.",
        text_en: "This country is located in Southeast Asia, on the island of Borneo. Its capital is Bandar Seri Begawan. It is surrounded by Malaysia and the South China Sea.",
      },
    ],
  },
  {
    id: 117,
    name: "Burkina Faso",
    name_en: "Burkina Faso",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país es uno de los pocos en el mundo que ha cambiado su nombre oficial por completo después de obtener la independencia, pasando de Alto Volta a su nombre actual en el año mil novecientos ochenta y cuatro.",
        text_en: "This country is one of the few in the world that has completely changed its official name after gaining independence, transitioning from Upper Volta to its current name in nineteen eighty-four.",
      },
      {
        difficulty: "hard",
        text_es: "El término para este país se traduce como 'Tierra de la gente íntegra'. Su idioma oficial es el francés, pero el mossi y el diula son lenguas nativas ampliamente habladas.",
        text_en: "The term for this country translates as 'Land of the Upright People'. Its official language is French, but Mossi and Dyula are widely spoken native languages.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocido por sus grandes reservas de oro y por ser un importante productor de algodón. Cuenta con una gran población de burros, que son esenciales para el transporte y la agricultura rural.",
        text_en: "It is known for its large gold reserves and for being a significant cotton producer. It has a large donkey population, which is essential for rural transport and agriculture.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en África Occidental. Limita con Malí, Níger, Benín, Togo, Ghana y Costa de Marfil. Su capital es Uagadugú.",
        text_en: "This country is located in West Africa. It borders Mali, Niger, Benin, Togo, Ghana, and Ivory Coast. Its capital city is Ouagadougou.",
      },
    ],
  },
  {
    id: 118,
    name: "Burundi",
    name_en: "Burundi",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los países más pequeños de África continental y uno de los más densamente poblados. Ha tenido una capital que ha cambiado de nombre y ubicación en varias ocasiones a lo largo de su historia moderna.",
        text_en: "It is one of the smallest continental African countries and one of the most densely populated. It has had a capital that has changed names and locations multiple times throughout its modern history.",
      },
      {
        difficulty: "hard",
        text_es: "Este país ha enfrentado una compleja historia de conflictos étnicos entre las comunidades hutu y tutsi. Su sistema político actual es una república presidencial unitaria.",
        text_en: "This country has faced a complex history of ethnic conflicts between the Hutu and Tutsi communities. Its current political system is a unitary presidential republic.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en la región de los Grandes Lagos de África, es conocido por sus paisajes montañosos y por tener una parte significativa de la orilla oriental de uno de los lagos de agua dulce más profundos del mundo.",
        text_en: "Located in the African Great Lakes region, it is known for its mountainous landscapes and for having a significant portion of the eastern shore of one of the world's deepest freshwater lakes.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en África Oriental. Limita con Ruanda al norte, Tanzania al este y sur, y la República Democrática del Congo al oeste. Su capital es Gitega.",
        text_en: "This country is located in East Africa. It borders Rwanda to the north, Tanzania to the east and south, and the Democratic Republic of Congo to the west. Its capital city is Gitega.",
      },
    ],
  },
  {
    id: 119,
    name: "Cabo Verde",
    name_en: "Cape Verde",
    hints: [
      {
        difficulty: "expert",
        text_es: "Aunque comparte el nombre con una característica geográfica continental, este archipiélago se encuentra a más de seiscientos kilómetros de la costa. Es el hogar de una de las especies de aves marinas más raras del mundo, el petrel de Fea.",
        text_en: "Although it shares its name with a continental geographical feature, this archipelago is located over six hundred kilometers offshore. It is home to one of the world's rarest seabird species, Fea's petrel.",
      },
      {
        difficulty: "hard",
        text_es: "Su música es mundialmente conocida, con la 'morna' como su género más emblemático, influenciado por fado portugués y ritmos brasileños. Fue una colonia portuguesa hasta mil novecientos setenta y cinco.",
        text_en: "Its music is world-renowned, with 'morna' as its most emblematic genre, influenced by Portuguese fado and Brazilian rhythms. It was a Portuguese colony until nineteen seventy-five.",
      },
      {
        difficulty: "medium",
        text_es: "Este país insular se compone de diez islas volcánicas principales en el Océano Atlántico. Su clima es seco, lo que dificulta la agricultura, pero sus playas atraen a muchos turistas.",
        text_en: "This island nation is made up of ten main volcanic islands in the Atlantic Ocean. Its dry climate makes agriculture challenging, but its beaches attract many tourists.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Océano Atlántico, frente a la costa de África Occidental. No comparte fronteras terrestres con ningún país. Su capital es Praia.",
        text_en: "It is located in the Atlantic Ocean, off the coast of West Africa. It shares no land borders with any country. Its capital city is Praia.",
      },
    ],
  },
  {
    id: 120,
    name: "Camerún",
    name_en: "Cameroon",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país es notable por su diversidad lingüística, con más de doscientas cincuenta lenguas diferentes. Es el único país africano que fue colonizado por alemanes y luego dividido entre franceses y británicos.",
        text_en: "This country is notable for its linguistic diversity, with over two hundred and fifty different languages. It is the only African country that was colonized by Germans and then divided between the French and the British.",
      },
      {
        difficulty: "hard",
        text_es: "A menudo se le conoce como 'África en miniatura' debido a su diversidad geográfica y cultural, que abarca desiertos, montañas, selvas tropicales y costas. Es un actor importante en la política y economía de África Central.",
        text_en: "It is often referred to as 'Africa in miniature' due to its geographical and cultural diversity, encompassing deserts, mountains, rainforests, and coastlines. It is a significant player in Central African politics and economy.",
      },
      {
        difficulty: "medium",
        text_es: "Su equipo nacional de fútbol, apodado 'Los Leones Indomables', es uno de los más exitosos de África. Es uno de los principales productores mundiales de cacao y café.",
        text_en: "Its national football team, nicknamed 'The Indomitable Lions', is one of Africa's most successful. It is one of the world's leading producers of cocoa and coffee.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en África Central. Limita con Nigeria al oeste, Chad y la República Centroafricana al este, Guinea Ecuatorial, Gabón y la República del Congo al sur. Su capital es Yaundé.",
        text_en: "This country is located in Central Africa. It borders Nigeria to the west, Chad and the Central African Republic to the east, Equatorial Guinea, Gabon, and the Republic of the Congo to the south. Its capital city is Yaoundé.",
      },
    ],
  },
  {
    id: 121,
    name: "Catar",
    name_en: "Qatar",
    hints: [
      {
        difficulty: "expert",
        text_es: "Hasta el siglo XX, su economía dependía en gran medida de la recolección de perlas, con colonias de perlas que se extendían por su costa. Esta industria colapsó con la invención de las perlas cultivadas.",
        text_en: "Until the twentieth century, its economy heavily relied on pearl diving, with pearl beds extending along its coast. This industry collapsed with the invention of cultured pearls.",
      },
      {
        difficulty: "hard",
        text_es: "Es una monarquía absoluta donde la Casa de Al Thani ha gobernado desde mediados del siglo XIX. Su principal fuente de riqueza es el gas natural, poseyendo una de las mayores reservas mundiales.",
        text_en: "It is an absolute monarchy where the House of Al Thani has ruled since the mid-nineteenth century. Its primary source of wealth is natural gas, holding one of the world's largest reserves.",
      },
      {
        difficulty: "medium",
        text_es: "Es una península relativamente pequeña en el Golfo Arábigo. Su geografía es principalmente desértica y plana, con una costa que se extiende por más de quinientos kilómetros.",
        text_en: "It is a relatively small peninsula in the Arabian Gulf. Its geography is predominantly desert and flat, with a coastline stretching for over five hundred kilometers.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el este de la Península Arábiga, limita al sur con Arabia Saudita y el resto de sus fronteras son costeras. Su capital es Doha, una moderna metrópolis con rascacielos. Su bandera es granate con una franja dentada blanca a la izquierda.",
        text_en: "Located in the eastern Arabian Peninsula, it borders Saudi Arabia to the south, and the rest of its borders are coastal. Its capital is Doha, a modern metropolis with skyscrapers. Its flag is maroon with a white serrated stripe on the left.",
      },
    ],
  },
  {
    id: 122,
    name: "Chad",
    name_en: "Chad",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es conocida por ser un 'cementerio de imperios', ya que ha visto el auge y la caída de varios reinos poderosos, como el Imperio Kanem-Bornu, el Reino de Baguirmi y el Reino de Ouaddaï, que controlaron rutas comerciales transsaharianas.",
        text_en: "It is known as an 'empire graveyard,' having witnessed the rise and fall of several powerful kingdoms, such as the Kanem-Bornu Empire, the Sultanate of Baguirmi, and the Ouaddaï Kingdom, which controlled trans-Saharan trade routes.",
      },
      {
        difficulty: "hard",
        text_es: "Es uno de los países más diversos de África, con más de doscientos grupos étnicos y lingüísticos. Sus idiomas oficiales son el árabe y el francés, lo que refleja su herencia colonial y las influencias regionales.",
        text_en: "It is one of Africa's most diverse countries, with over two hundred ethnic and linguistic groups. Its official languages are Arabic and French, reflecting its colonial heritage and regional influences.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país sin salida al mar en el centro-norte de África. Cuenta con un lago que le da nombre al norte, siendo un importante recurso hídrico aunque su tamaño ha disminuido drásticamente en las últimas décadas.",
        text_en: "It is a landlocked country in north-central Africa. It features a lake to its north that shares its name, an important water resource although its size has drastically shrunk in recent decades.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Central, limitando al norte con Libia, al este con Sudán, al sur con la República Centroafricana y al oeste con Camerún, Nigeria y Níger. Su capital es Yamena. Su bandera es un tricolor vertical de azul, amarillo y rojo.",
        text_en: "It is located in Central Africa, bordering Libya to the north, Sudan to the east, the Central African Republic to the south, and Cameroon, Nigeria, and Niger to the west. Its capital is N'Djamena. Its flag is a vertical tricolor of blue, yellow, and red.",
      },
    ],
  },
  {
    id: 123,
    name: "Chipre",
    name_en: "Cyprus",
    hints: [
      {
        difficulty: "expert",
        text_es: "Un hecho poco conocido es que alberga dos bases soberanas del Reino Unido, Akrotiri y Dhekelia, que son territorios de ultramar británicos. Estas bases tienen su propia jurisdicción y no forman parte del estado anfitrión.",
        text_en: "A little-known fact is that it hosts two sovereign British military bases, Akrotiri and Dhekelia, which are British Overseas Territories. These bases have their own jurisdiction and are not part of the host state.",
      },
      {
        difficulty: "hard",
        text_es: "La isla ha estado dividida políticamente desde mil novecientos setenta y cuatro, con la intervención militar de una potencia vecina. Esto ha resultado en una línea de demarcación conocida como la 'Línea Verde', supervisada por las Naciones Unidas.",
        text_en: "The island has been politically divided since nineteen seventy-four, following a military intervention by a neighboring power. This resulted in a demarcation line known as the 'Green Line,' overseen by the United Nations.",
      },
      {
        difficulty: "medium",
        text_es: "Es una isla en el Mediterráneo oriental, famosa en la mitología griega como el lugar de nacimiento de la diosa Afrodita. Es conocida por sus playas, ruinas antiguas y montañas cubiertas de pinos.",
        text_en: "It is an island in the eastern Mediterranean, famous in Greek mythology as the birthplace of the goddess Aphrodite. It is known for its beaches, ancient ruins, and pine-clad mountains.",
      },
      {
        difficulty: "easy",
        text_es: "Esta isla está ubicada al sur de Turquía, al oeste de Siria y Líbano, y al norte de Egipto. Su capital es Nicosia. Su bandera es blanca y presenta un mapa del país en color cobre, con dos ramas de olivo cruzadas debajo.",
        text_en: "This island is located south of Turkey, west of Syria and Lebanon, and north of Egypt. Its capital is Nicosia. Its flag is white and features a copper-colored map of the country, with two crossed olive branches beneath it.",
      },
    ],
  },
  {
    id: 124,
    name: "Comoras",
    name_en: "Comoros",
    hints: [
      {
        difficulty: "expert",
        text_es: "A pesar de su tamaño diminuto, fue el mayor productor mundial de ylang-ylang en el siglo XX, una flor tropical cuya esencia es fundamental en la perfumería fina, incluyendo fragancias icónicas. Esta industria sigue siendo vital para su economía.",
        text_en: "Despite its tiny size, it was the world's largest producer of ylang-ylang in the twentieth century, a tropical flower whose essence is fundamental in fine perfumery, including iconic fragrances. This industry remains vital to its economy.",
      },
      {
        difficulty: "hard",
        text_es: "Es una república federal islámica, aunque la identidad isleña es fuerte y las disputas por la autonomía entre sus islas han llevado a varios intentos de secesión y golpes de estado desde su independencia.",
        text_en: "It is a federal Islamic republic, although island identity is strong, and disputes over autonomy among its islands have led to several secession attempts and coups since its independence.",
      },
      {
        difficulty: "medium",
        text_es: "Es un archipiélago volcánico en el Océano Índico. Su geografía incluye montañas escarpadas, playas de coral y una exuberante vegetación, hogar de una fauna endémica notable como los lémures de cola anillada.",
        text_en: "It is a volcanic archipelago in the Indian Ocean. Its geography includes rugged mountains, coral beaches, and lush vegetation, home to notable endemic wildlife like ring-tailed lemurs.",
      },
      {
        difficulty: "easy",
        text_es: "Este país insular se encuentra en el Océano Índico, entre la costa de Mozambique y la isla de Madagascar. Está formado por tres islas principales: Gran Comora, Anjouan y Mohéli. Su capital es Moroni. Su bandera tiene cuatro franjas horizontales (amarilla, blanca, roja, azul) y un triángulo verde en el lado del mástil con una luna creciente y cuatro estrellas blancas.",
        text_en: "This island nation is located in the Indian Ocean, between the coast of Mozambique and the island of Madagascar. It consists of three main islands: Grande Comore, Anjouan, and Mohéli. Its capital is Moroni. Its flag has four horizontal stripes (yellow, white, red, blue) and a green triangle on the hoist side with a white crescent moon and four white stars.",
      },
    ],
  },
  {
    id: 125,
    name: "Corea del Norte",
    name_en: "North Korea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo que utiliza un calendario basado en el nacimiento de su primer líder, el Calendario Juche, que comienza en mil novecientos doce. El año actual es Juche ciento doce, no dos mil veinticuatro.",
        text_en: "It is the only country in the world that uses a calendar based on the birth of its first leader, the Juche Calendar, which begins in nineteen twelve. The current year is Juche one hundred twelve, not two thousand twenty-four.",
      },
      {
        difficulty: "hard",
        text_es: "Es un estado unipartidista de ideología Juche, una forma de autosuficiencia radical. Ha mantenido un programa de armas nucleares y misiles balísticos, lo que ha provocado severas sanciones internacionales.",
        text_en: "It is a one-party state with the Juche ideology, a form of radical self-reliance. It has pursued a nuclear weapons and ballistic missile program, leading to severe international sanctions.",
      },
      {
        difficulty: "medium",
        text_es: "Este país ocupa la mitad norte de una península. Su geografía es predominantemente montañosa y rugosa, con muchas cumbres que superan los dos mil metros de altitud, como el monte Paektu.",
        text_en: "This country occupies the northern half of a peninsula. Its geography is predominantly mountainous and rugged, with many peaks exceeding two thousand meters in altitude, such as Mount Paektu.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el este de Asia, limita al norte con China y Rusia, y al sur con su país vecino homónimo. Su capital es Pionyang. Su bandera es roja con dos franjas azules más estrechas en los bordes superior e inferior, separadas por delgadas franjas blancas, y un disco blanco con una estrella roja de cinco puntas cerca del lado del mástil.",
        text_en: "Located in East Asia, it borders China and Russia to the north, and its eponymous neighboring country to the south. Its capital is Pyongyang. Its flag is red with two narrower blue stripes at the top and bottom edges, separated by thin white stripes, and a white disk with a five-pointed red star near the hoist side.",
      },
    ],
  },
  {
    id: 126,
    name: "Costa de Marfil",
    name_en: "Ivory Coast",
    hints: [
      {
        difficulty: "expert",
        text_es: "Según registros históricos, los portugueses fueron los primeros europeos en establecer contacto con estas costas en el siglo quince, aunque el comercio de marfil ya existía previamente con el norte de África.",
        text_en: "According to historical records, the Portuguese were the first Europeans to make contact with these shores in the fifteenth century, though ivory trade with North Africa had existed previously.",
      },
      {
        difficulty: "hard",
        text_es: "Es el mayor productor mundial de cacao en grano, contribuyendo con una cantidad significativa del suministro global. Su economía ha estado históricamente ligada a la exportación de materias primas agrícolas.",
        text_en: "It is the world's largest producer of cocoa beans, contributing a significant amount to the global supply. Its economy has historically been tied to the export of agricultural raw materials.",
      },
      {
        difficulty: "medium",
        text_es: "Su nombre hace referencia a un recurso natural que fue históricamente muy valioso en la región. Limita con cinco naciones y tiene una extensa costa atlántica.",
        text_en: "Its name refers to a natural resource that was historically very valuable in the region. It borders five nations and has an extensive Atlantic coastline.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Occidental, limitando al oeste con Liberia y Guinea, al norte con Malí y Burkina Faso, y al este con Ghana. Su capital es Yamusukro.",
        text_en: "It is located in West Africa, bordering Liberia and Guinea to the west, Mali and Burkina Faso to the north, and Ghana to the east. Its capital is Yamoussoukro.",
      },
    ],
  },
  {
    id: 127,
    name: "Dominica",
    name_en: "Dominica",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país fue la última isla del Caribe en ser colonizada por los europeos debido a la feroz resistencia de los indígenas caribes, o kalinago, que habitaban la isla.",
        text_en: "This country was the last Caribbean island to be colonized by Europeans due to the fierce resistance of the indigenous Carib, or Kalinago, people inhabiting the island.",
      },
      {
        difficulty: "hard",
        text_es: "Aunque el inglés es su idioma oficial, una parte significativa de su población habla un criollo basado en el francés, conocido como Kwéyòl. Es miembro de la Comunidad del Caribe.",
        text_en: "Although English is its official language, a significant portion of its population speaks a French-based creole, known as Kwéyòl. It is a member of the Caribbean Community.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocida como 'La Isla de la Naturaleza del Caribe' debido a su exuberante vegetación y su geología volcánica. Posee el segundo lago hirviente más grande del mundo.",
        text_en: "It is known as 'The Nature Isle of the Caribbean' due to its lush vegetation and volcanic geology. It boasts the second-largest boiling lake in the world.",
      },
      {
        difficulty: "easy",
        text_es: "Es una nación insular en el Mar Caribe. Su bandera tiene un perico sisserou, que es su ave nacional, en el centro, rodeado por diez estrellas que representan sus parroquias. Su capital es Roseau.",
        text_en: "It is an island nation in the Caribbean Sea. Its flag features a Sisserou parrot, its national bird, at the center, surrounded by ten stars representing its parishes. Its capital is Roseau.",
      },
    ],
  },
  {
    id: 128,
    name: "Eritrea",
    name_en: "Eritrea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su costa fue históricamente un punto estratégico clave para los otomanos en el siglo dieciséis, y posteriormente un puerto crucial para las ambiciones coloniales italianas en el Mar Rojo.",
        text_en: "Its coastline was historically a key strategic point for the Ottomans in the sixteenth century, and later a crucial port for Italian colonial ambitions in the Red Sea.",
      },
      {
        difficulty: "hard",
        text_es: "Obtuvo su independencia en mil novecientos noventa y tres tras una larga guerra de treinta años. Cuenta con nueve grupos étnicos reconocidos, y no tiene un idioma oficial establecido.",
        text_en: "It gained its independence in nineteen ninety-three after a thirty-year war. It has nine recognized ethnic groups, and no established official language.",
      },
      {
        difficulty: "medium",
        text_es: "Se ubica en el Cuerno de África, y tiene una extensa costa a lo largo del Mar Rojo. Su paisaje incluye una parte de la Gran Falla del Rift y el desierto de Danakil.",
        text_en: "It is located in the Horn of Africa, with an extensive coastline along the Red Sea. Its landscape includes part of the Great Rift Valley and the Danakil Desert.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Oriental, limitando con Sudán al oeste, Etiopía al sur y Yibuti al sureste. Su capital es Asmara, una ciudad conocida por su arquitectura modernista italiana.",
        text_en: "It is located in East Africa, bordering Sudan to the west, Ethiopia to the south, and Djibouti to the southeast. Its capital is Asmara, a city known for its Italian modernist architecture.",
      },
    ],
  },
  {
    id: 129,
    name: "Esuatini",
    name_en: "Eswatini",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este reino es uno de los pocos países del mundo que todavía practica una monarquía absoluta. Su monarca ejerce el poder legislativo, judicial y ejecutivo de manera directa.",
        text_en: "This kingdom is one of the few countries in the world that still practices an absolute monarchy. Its monarch exercises legislative, judicial, and executive power directly.",
      },
      {
        difficulty: "hard",
        text_es: "Es un miembro de la Commonwealth y de la Comunidad de Desarrollo de África Austral. Sus idiomas oficiales son el suazi y el inglés. Fue un protectorado británico antes de su independencia.",
        text_en: "It is a member of the Commonwealth and the Southern African Development Community. Its official languages are SiSwati and English. It was a British protectorate before its independence.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es famoso por su danza Umhlanga, o Danza del Junco, una ceremonia tradicional que se celebra anualmente. Es el país africano más pequeño del hemisferio sur.",
        text_en: "This country is famous for its Umhlanga, or Reed Dance, a traditional ceremony held annually. It is the smallest African country in the Southern Hemisphere.",
      },
      {
        difficulty: "easy",
        text_es: "Es una pequeña nación sin salida al mar en el sur de África. Limita con Sudáfrica al norte, oeste y sur, y con Mozambique al este. Tiene dos capitales: Mbabane (administrativa) y Lobamba (legislativa y real).",
        text_en: "It is a small, landlocked nation in Southern Africa. It borders South Africa to the north, west, and south, and Mozambique to the east. It has two capitals: Mbabane (administrative) and Lobamba (legislative and royal).",
      },
    ],
  },
  {
    id: 130,
    name: "Fiyi",
    name_en: "Fiji",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los antiguos habitantes de estas islas se dividen en dos grupos etno-culturales principales, los melanesios y los polinesios. Su ubicación estratégica en el Pacífico sirvió como punto de escala vital para los exploradores y comerciantes europeos.",
        text_en: "The ancient inhabitants of these islands are divided into two main ethno-cultural groups, Melanesians and Polynesians. Its strategic location in the Pacific served as a vital stopping point for European explorers and traders.",
      },
      {
        difficulty: "hard",
        text_es: "Es una república parlamentaria y fue una colonia británica. Posee una economía desarrollada en el Pacífico, con el turismo y las exportaciones de azúcar como pilares principales. Es miembro del Foro de las Islas del Pacífico.",
        text_en: "It is a parliamentary republic and was a British colony. It has a developed economy in the Pacific, with tourism and sugar exports as its main pillars. It is a member of the Pacific Islands Forum.",
      },
      {
        difficulty: "medium",
        text_es: "Es un archipiélago de más de trescientas islas en Oceanía, de las cuales solo un tercio están habitadas. Sus aguas son famosas por los arrecifes de coral y su cultura es rica en danzas y ceremonias.",
        text_en: "It is an archipelago of over three hundred islands in Oceania, of which only one third are inhabited. Its waters are famous for coral reefs, and its culture is rich in dances and ceremonies.",
      },
      {
        difficulty: "easy",
        text_es: "Es una nación insular en el Pacífico Sur, al este de Vanuatu, al oeste de Tonga y al sur de Tuvalu. Su capital es Suva y es conocida por sus playas de arena blanca y palmeras.",
        text_en: "It is an island nation in the South Pacific, east of Vanuatu, west of Tonga, and south of Tuvalu. Its capital is Suva and it is known for its white sandy beaches and palm trees.",
      },
    ],
  },
  {
    id: 131,
    name: "Gabón",
    name_en: "Gabon",
    hints: [
      {
        difficulty: "expert",
        text_es: "A principios del siglo veintiuno, el gobierno lanzó la iniciativa 'Gabón Verde', cuyo objetivo es el desarrollo sostenible y la diversificación económica más allá de los combustibles fósiles, enfocándose en el ecoturismo y la explotación responsable de la madera.",
        text_en: "In the early twenty-first century, the government launched the 'Gabon Vert' initiative, aiming for sustainable development and economic diversification beyond fossil fuels, focusing on ecotourism and responsible timber exploitation.",
      },
      {
        difficulty: "hard",
        text_es: "Es una república presidencialista con una larga historia de liderazgo por una misma familia, y su economía está fuertemente ligada a las exportaciones de petróleo, manganeso y madera.",
        text_en: "It is a presidential republic with a long history of leadership by the same family, and its economy is heavily reliant on oil, manganese, and timber exports.",
      },
      {
        difficulty: "medium",
        text_es: "Una gran parte de su territorio está cubierto por selvas tropicales densas, albergando una rica biodiversidad, incluyendo gorilas y chimpancés. Su costa está bañada por el Océano Atlántico.",
        text_en: "A significant portion of its territory is covered by dense tropical rainforests, harboring rich biodiversity, including gorillas and chimpanzees. Its coast borders the Atlantic Ocean.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Central, en la costa oeste. Limita con Camerún, Guinea Ecuatorial y la República del Congo. Su capital es Libreville. Su bandera tiene tres franjas horizontales de color verde, amarillo y azul.",
        text_en: "It is located in Central Africa, on the west coast. It borders Cameroon, Equatorial Guinea, and the Republic of the Congo. Its capital is Libreville. Its flag features three horizontal stripes of green, yellow, and blue.",
      },
    ],
  },
  {
    id: 132,
    name: "Gambia",
    name_en: "The Gambia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los antiguos círculos megalíticos de Wassu y Kerbatch, declarados Patrimonio de la Humanidad por la UNESCO, son testimonio de una civilización prehistórica que prosperó a lo largo de su río principal, con algunas estimaciones datando su construcción en el siglo tres antes de Cristo.",
        text_en: "The ancient stone circles of Wassu and Kerbatch, declared UNESCO World Heritage Sites, bear witness to a prehistoric civilization that thrived along its main river, with some estimates dating their construction to the third century BC.",
      },
      {
        difficulty: "hard",
        text_es: "Es el país más pequeño de África continental y tiene un trazado geográfico inusual, con casi todo su territorio enclavado en otro país, siguiendo el curso de un río importante.",
        text_en: "It is the smallest country on mainland Africa and has an unusual geographical layout, with almost all of its territory almost entirely surrounded by another country, following the course of a major river.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus playas a lo largo de la costa atlántica y su importancia como destino para la observación de aves. El río que lo atraviesa de este a oeste es su característica geográfica dominante.",
        text_en: "Known for its beaches along the Atlantic coast and its importance as a birdwatching destination. The river that flows through it from east to west is its dominant geographical feature.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Occidental, limitando por completo con Senegal, excepto en su costa atlántica. Su capital es Banjul. La bandera tiene tres franjas horizontales: roja, azul y verde, separadas por dos franjas blancas más delgadas.",
        text_en: "It is located in West Africa, almost entirely surrounded by Senegal, except for its Atlantic coastline. Its capital is Banjul. The flag has three horizontal stripes: red, blue, and green, separated by two thinner white stripes.",
      },
    ],
  },
  {
    id: 133,
    name: "Granada",
    name_en: "Grenada",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución fue suspendida tras un golpe de estado en mil novecientos ochenta y tres, lo que llevó a una intervención militar internacional conocida como Operación Furia Urgente, liderada por Estados Unidos.",
        text_en: "Its constitution was suspended after a coup d'état in nineteen eighty-three, which led to an international military intervention known as Operation Urgent Fury, led by the United States.",
      },
      {
        difficulty: "hard",
        text_es: "Conocido como la 'Isla de las Especias', es un importante productor mundial de nuez moscada y macis, que son fundamentales para su economía agrícola y su cultura culinaria.",
        text_en: "Known as the 'Spice Isle', it is a major global producer of nutmeg and mace, which are central to its agricultural economy and culinary culture.",
      },
      {
        difficulty: "medium",
        text_es: "Es un pequeño estado insular en el Caribe, con una geografía volcánica que incluye un lago de cráter y numerosas cascadas. Sus playas son famosas por su arena blanca y aguas cristalinas.",
        text_en: "It is a small island nation in the Caribbean, with a volcanic geography that includes a crater lake and numerous waterfalls. Its beaches are famous for their white sand and clear waters.",
      },
      {
        difficulty: "easy",
        text_es: "Está en el mar Caribe, al norte de Trinidad y Tobago y al sur de San Vicente y las Granadinas. Su capital es St. George's. Su bandera tiene una diagonal amarilla y verde, un triángulo rojo, y estrellas amarillas con una nuez moscada en el medio.",
        text_en: "It is in the Caribbean Sea, north of Trinidad and Tobago and south of Saint Vincent and the Grenadines. Its capital is St. George's. Its flag features a yellow and green diagonal, a red triangle, and yellow stars with a nutmeg in the middle.",
      },
    ],
  },
  {
    id: 134,
    name: "Guinea",
    name_en: "Guinea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el origen de varios ríos importantes de África Occidental, incluyendo el río Níger, el Senegal y el Gambia, por lo que a menudo se le conoce como el 'Castillo de Agua de África Occidental'.",
        text_en: "It is the source of several major West African rivers, including the Niger River, the Senegal River, and the Gambia River, hence it is often referred to as 'West Africa's Water Castle'.",
      },
      {
        difficulty: "hard",
        text_es: "Fue la primera nación en África subsahariana en votar en contra de unirse a la Comunidad Francesa en mil novecientos cincuenta y ocho, optando por la independencia total con consecuencias económicas inmediatas.",
        text_en: "It was the first nation in sub-Saharan Africa to vote against joining the French Community in nineteen fifty-eight, opting for full independence with immediate economic consequences.",
      },
      {
        difficulty: "medium",
        text_es: "Posee las mayores reservas de bauxita del mundo y tiene depósitos significativos de diamantes y oro. Su geografía es variada, desde la costa atlántica hasta las montañas Fouta Djallon.",
        text_en: "It possesses the world's largest reserves of bauxite and has significant deposits of diamonds and gold. Its geography is varied, from the Atlantic coast to the Fouta Djallon mountains.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Occidental, con costa en el Océano Atlántico. Limita con Guinea-Bisáu, Senegal, Malí, Costa de Marfil, Liberia y Sierra Leona. Su capital es Conakri. Su bandera tiene tres franjas verticales: roja, amarilla y verde.",
        text_en: "It is located in West Africa, with a coastline on the Atlantic Ocean. It borders Guinea-Bissau, Senegal, Mali, Côte d'Ivoire, Liberia, and Sierra Leone. Its capital is Conakry. Its flag has three vertical stripes: red, yellow, and green.",
      },
    ],
  },
  {
    id: 135,
    name: "Guinea-Bisáu",
    name_en: "Guinea-Bissau",
    hints: [
      {
        difficulty: "expert",
        text_es: "El archipiélago de Bijagós, frente a su costa, es una Reserva de la Biosfera de la UNESCO con una sociedad matriarcal y una rica biodiversidad marina y terrestre, incluyendo hipopótamos marinos.",
        text_en: "The Bijagós Archipelago, off its coast, is a UNESCO Biosphere Reserve with a matriarchal society and rich marine and terrestrial biodiversity, including saltwater hippos.",
      },
      {
        difficulty: "hard",
        text_es: "Su lucha por la independencia, liderada por Amílcar Cabral, fue una de las más largas y brutales de África, y obtuvo su independencia en mil novecientos setenta y tres.",
        text_en: "Its struggle for independence, led by Amílcar Cabral, was one of Africa's longest and most brutal, and it gained independence in nineteen seventy-three.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país tropical con una extensa llanura costera salpicada de manglares y pantanos. Su principal cultivo de exportación es el anacardo.",
        text_en: "It is a tropical country with an extensive coastal plain dotted with mangroves and swamps. Its primary export crop is cashew nuts.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Occidental, con una costa en el Océano Atlántico. Limita con Senegal y Guinea. Su capital es Bisáu. La bandera tiene una franja vertical roja con una estrella negra a la izquierda, y dos franjas horizontales de amarillo y verde a la derecha.",
        text_en: "It is located in West Africa, with an Atlantic Ocean coastline. It borders Senegal and Guinea. Its capital is Bissau. The flag features a red vertical stripe with a black star on the left, and two horizontal stripes of yellow and green on the right.",
      },
    ],
  },
  {
    id: 136,
    name: "Guinea Ecuatorial",
    name_en: "Equatorial Guinea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país soberano africano cuya lengua oficial principal es el español, resultado de su pasado colonial ibérico. Además, es una de las naciones más pequeñas del continente en territorio continental.",
        text_en: "It is the only sovereign African nation whose primary official language is Spanish, a legacy of its Iberian colonial past. Furthermore, it is one of the smallest countries on the continent in mainland territory.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de su tamaño, ha sido un productor significativo de petróleo y gas, lo que ha impulsado su economía en las últimas décadas. Su territorio incluye una parte continental y varias islas en el golfo de Guinea.",
        text_en: "Despite its size, it has been a significant oil and gas producer, driving its economy in recent decades. Its territory includes a mainland part and several islands in the Gulf of Guinea.",
      },
      {
        difficulty: "medium",
        text_es: "Su geografía se caracteriza por densas selvas tropicales en el continente y playas volcánicas en sus islas. La biodiversidad es notable, con especies como gorilas y chimpancés en sus parques nacionales.",
        text_en: "Its geography is characterized by dense rainforests on the mainland and volcanic beaches on its islands. Biodiversity is remarkable, with species like gorillas and chimpanzees found in its national parks.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en África Central, en la costa occidental. Su capital se ubica en una isla y tiene una bandera con tres franjas horizontales: verde, blanca y roja, con un triángulo azul al asta y su escudo nacional en el centro.",
        text_en: "This country is located in Central Africa, on the west coast. Its capital city is situated on an island, and it has a flag with three horizontal stripes: green, white, and red, with a blue triangle at the hoist and its national coat of arms in the center.",
      },
    ],
  },
  {
    id: 137,
    name: "Guyana",
    name_en: "Guyana",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es la única nación de Sudamérica donde el inglés es el idioma oficial. El Escudo de las Guayanas, un macizo geológico que abarca partes de seis países, ocupa gran parte de su territorio.",
        text_en: "It is the only nation in South America where English is the official language. The Guiana Shield, a geological massif spanning parts of six countries, covers much of its territory.",
      },
      {
        difficulty: "hard",
        text_es: "Antiguamente una colonia neerlandesa y luego británica, su cultura es una mezcla de influencias africanas, indias orientales, amerindias, chinas y europeas. Su economía se ha visto impulsada recientemente por importantes descubrimientos de petróleo.",
        text_en: "Formerly a Dutch and then British colony, its culture is a blend of African, East Indian, Amerindian, Chinese, and European influences. Its economy has recently been boosted by significant oil discoveries.",
      },
      {
        difficulty: "medium",
        text_es: "Hogar de la impresionante cascada Kaieteur, una de las cataratas de una sola gota más potentes del mundo, con una altura de doscientos veintiséis metros. Su paisaje está dominado por selvas tropicales vírgenes y extensos ríos.",
        text_en: "Home to the stunning Kaieteur Falls, one of the most powerful single-drop waterfalls in the world, with a height of two hundred and twenty-six meters. Its landscape is dominated by pristine rainforests and extensive rivers.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se localiza en la costa norte de Sudamérica, limita al este con Surinam, al oeste con Venezuela y al sur con Brasil. Su capital se llama Georgetown y su bandera, conocida como la 'Punta de Flecha Dorada', presenta un campo verde con triángulos rojos y amarillos.",
        text_en: "This country is located on the northern coast of South America, bordered to the east by Suriname, to the west by Venezuela, and to the south by Brazil. Its capital city is called Georgetown, and its flag, known as the 'Golden Arrowhead', features a green field with red and yellow triangles.",
      },
    ],
  },
  {
    id: 138,
    name: "Irak",
    name_en: "Iraq",
    hints: [
      {
        difficulty: "expert",
        text_es: "Conocido históricamente como Mesopotamia, la 'tierra entre dos ríos', fue cuna de las primeras civilizaciones humanas, incluyendo sumerios y acadios. Aquí se desarrollaron la escritura cuneiforme y algunas de las leyes más antiguas.",
        text_en: "Historically known as Mesopotamia, the 'land between two rivers', it was the cradle of the first human civilizations, including the Sumerians and Akkadians. Cuneiform writing and some of the oldest laws were developed here.",
      },
      {
        difficulty: "hard",
        text_es: "Es un país con una rica herencia islámica, hogar de lugares santos importantes tanto para chiitas como para sunitas. Su economía ha dependido históricamente de sus vastas reservas de petróleo, convirtiéndolo en un actor clave en el mercado energético global.",
        text_en: "It is a country with a rich Islamic heritage, home to important holy sites for both Shiites and Sunnis. Its economy has historically relied on its vast oil reserves, making it a key player in the global energy market.",
      },
      {
        difficulty: "medium",
        text_es: "Sus paisajes están dominados por las cuencas de dos grandes ríos, que forman un fértil valle que se extiende hacia el Golfo Pérsico. Las palmeras datileras son un cultivo tradicional y emblemático de la región.",
        text_en: "Its landscapes are dominated by the basins of two major rivers, forming a fertile valley that extends towards the Persian Gulf. Date palms are a traditional and emblematic crop of the region.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en Oriente Medio, limitando al norte con Turquía, al este con Irán, al sur con Kuwait y Arabia Saudita, y al oeste con Jordania y Siria. Su capital es Bagdad, y su bandera muestra tres franjas horizontales de igual tamaño (roja, blanca y negra) con la inscripción 'Allahu Akbar' en escritura cúfica verde en el centro.",
        text_en: "This country is located in the Middle East, bordering Turkey to the north, Iran to the east, Kuwait and Saudi Arabia to the south, and Jordan and Syria to the west. Its capital city is Baghdad, and its flag displays three equally sized horizontal stripes (red, white, and black) with the inscription 'Allahu Akbar' in green Kufic script in the center.",
      },
    ],
  },
  {
    id: 139,
    name: "Islas Marshall",
    name_en: "Marshall Islands",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los navegantes micronesios utilizaban complejos mapas de palos, llamados 'mattang', para representar las olas y las corrientes oceánicas alrededor de sus atolones, una técnica única de navegación indígena.",
        text_en: "Micronesian navigators used complex stick charts, called 'mattang', to represent ocean swells and currents around their atolls, a unique indigenous navigation technique.",
      },
      {
        difficulty: "hard",
        text_es: "Sirvió como un sitio clave para las pruebas nucleares de Estados Unidos después de la Segunda Guerra Mundial, incluyendo la explosión de la bomba de hidrógeno 'Castle Bravo' en mil novecientos cincuenta y cuatro en el atolón de Bikini, con graves consecuencias medioambientales y sanitarias.",
        text_en: "It served as a key site for US nuclear testing after World War Two, including the 'Castle Bravo' hydrogen bomb explosion in nineteen fifty-four on Bikini Atoll, with severe environmental and health consequences.",
      },
      {
        difficulty: "medium",
        text_es: "Consiste en una cadena de veintinueve atolones de coral y cinco islas aisladas, dispersas en una vasta área del océano Pacífico. Esto lo hace extremadamente vulnerable al aumento del nivel del mar debido al cambio climático.",
        text_en: "It consists of a chain of twenty-nine coral atolls and five isolated islands, scattered across a vast area of the Pacific Ocean. This makes it extremely vulnerable to sea-level rise due to climate change.",
      },
      {
        difficulty: "easy",
        text_es: "Este país insular se encuentra en Micronesia, en el océano Pacífico central, al norte de la línea ecuatorial y al este de los Estados Federados de Micronesia. Su capital es Majuro y su bandera tiene un campo azul, una franja diagonal naranja y blanca que representa el ecuador y el sol, y una estrella blanca en la esquina superior izquierda.",
        text_en: "This island country is located in Micronesia, in the central Pacific Ocean, north of the equator and east of the Federated States of Micronesia. Its capital city is Majuro, and its flag features a blue field, a diagonal orange and white stripe representing the equator and the sun, and a white star in the upper left corner.",
      },
    ],
  },
  {
    id: 140,
    name: "Islas Salomón",
    name_en: "Solomon Islands",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los melanesios de estas islas eran expertos en la construcción de canoas de guerra intrincadamente talladas, algunas de las cuales podían transportar a decenas de guerreros y eran utilizadas para incursiones entre islas.",
        text_en: "The Melanesians of these islands were skilled in building intricately carved war canoes, some of which could carry dozens of warriors and were used for inter-island raids.",
      },
      {
        difficulty: "hard",
        text_es: "Fue el escenario de intensas batallas navales y terrestres durante la Segunda Guerra Mundial, especialmente la campaña de Guadalcanal. Su estratégica ubicación en el Pacífico fue crucial para el avance aliado.",
        text_en: "It was the scene of intense naval and land battles during World War Two, especially the Guadalcanal campaign. Its strategic location in the Pacific was crucial for the Allied advance.",
      },
      {
        difficulty: "medium",
        text_es: "Este archipiélago volcánico es famoso por sus arrecifes de coral prístinos y su increíble biodiversidad marina, lo que lo convierte en un destino popular para el buceo. También es hogar de una gran variedad de aves endémicas.",
        text_en: "This volcanic archipelago is famous for its pristine coral reefs and incredible marine biodiversity, making it a popular diving destination. It is also home to a wide variety of endemic birds.",
      },
      {
        difficulty: "easy",
        text_es: "Este país insular se encuentra en Oceanía, al este de Papúa Nueva Guinea. Su capital es Honiara, situada en la isla de Guadalcanal. Su bandera presenta un fondo azul y verde dividido por una franja diagonal amarilla, con cinco estrellas blancas en la sección azul.",
        text_en: "This island country is located in Oceania, east of Papua New Guinea. Its capital city is Honiara, situated on the island of Guadalcanal. Its flag features a blue and green background divided by a diagonal yellow stripe, with five white stars in the blue section.",
      },
    ],
  },
  {
    id: 141,
    name: "Jordania",
    name_en: "Jordan",
    hints: [
      {
        difficulty: "expert",
        text_es: "En mil novecientos veintidós, la Conferencia de El Cairo estableció las fronteras de esta nación, inicialmente conocida como el Emirato de Transjordania.",
        text_en: "In nineteen twenty-two, the Cairo Conference established the borders of this nation, initially known as the Emirate of Transjordan.",
      },
      {
        difficulty: "hard",
        text_es: "Es una monarquía constitucional parlamentaria. La mayor parte de su territorio está cubierto por desiertos, aunque su fértil media luna histórica fue parte de una de las cunas de la civilización.",
        text_en: "It is a parliamentary constitutional monarchy. Most of its territory is covered by deserts, though its historical fertile crescent was part of one of the cradles of civilization.",
      },
      {
        difficulty: "medium",
        text_es: "Un sitio arqueológico tallado en roca, conocido como la Ciudad Rosa, es su principal atractivo turístico y fue declarado una de las Siete Nuevas Maravillas del Mundo.",
        text_en: "A rock-cut archaeological site, known as the Rose City, is its main tourist attraction and was declared one of the New Seven Wonders of the World.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Amán y limita con Siria, Irak, Arabia Saudita e Israel. Su bandera tiene franjas horizontales negra, blanca y verde, con un triángulo rojo en el asta y una estrella blanca de siete puntas en el centro.",
        text_en: "Its capital is Amman and it borders Syria, Iraq, Saudi Arabia, and Israel. Its flag features black, white, and green horizontal stripes, with a red triangle at the hoist and a white seven-pointed star in the center.",
      },
    ],
  },
  {
    id: 142,
    name: "Kirguistán",
    name_en: "Kyrgyzstan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Con casi cinco mil kilómetros, la longitud de sus fronteras terrestres supera el doble de la distancia de su punto más occidental al más oriental.",
        text_en: "With almost five thousand kilometers, the length of its land borders is more than double the distance from its westernmost to its easternmost point.",
      },
      {
        difficulty: "hard",
        text_es: "Es un país sin salida al mar con una historia de migración de pueblos nómadas a través de Asia Central. Después de un largo período bajo control soviético, obtuvo su independencia a principios de la década de mil novecientos noventa.",
        text_en: "It is a landlocked country with a history of nomadic peoples migrating across Central Asia. After a long period under Soviet control, it gained independence in the early nineteen nineties.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su territorio está cubierto por las montañas Tien Shan. El lago Issyk-Kul es uno de los lagos de montaña más grandes del mundo y nunca se congela, a pesar de las frías temperaturas invernales.",
        text_en: "Much of its territory is covered by the Tian Shan mountains. Lake Issyk-Kul is one of the largest mountain lakes in the world and never freezes, despite cold winter temperatures.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Biskek y limita con Kazajistán, Uzbekistán, Tayikistán y China. Su bandera es roja con un sol amarillo en el centro, rodeando un 'tunduk' que representa el techo de una yurta tradicional.",
        text_en: "Its capital is Bishkek and it borders Kazakhstan, Uzbekistan, Tajikistan, and China. Its flag is red with a yellow sun in the center, surrounding a 'tunduk' representing the crown of a traditional yurt.",
      },
    ],
  },
  {
    id: 143,
    name: "Kiribati",
    name_en: "Kiribati",
    hints: [
      {
        difficulty: "expert",
        text_es: "Esta nación insular es el único país en el mundo que se encuentra en los cuatro hemisferios: norte, sur, este y oeste. Su territorio se extiende por tres zonas horarias.",
        text_en: "This island nation is the only country in the world that lies in all four hemispheres: north, south, east, and west. Its territory spans three time zones.",
      },
      {
        difficulty: "hard",
        text_es: "Es una de las naciones más vulnerables al cambio climático y al aumento del nivel del mar, lo que plantea serias amenazas a su existencia futura y la de su población. Su economía se basa principalmente en la pesca y la ayuda internacional.",
        text_en: "It is one of the nations most vulnerable to climate change and rising sea levels, posing serious threats to its future existence and population. Its economy primarily relies on fishing and international aid.",
      },
      {
        difficulty: "medium",
        text_es: "Compuesto por treinta y tres atolones e islas coralinas dispersos en una vasta área del océano Pacífico. Cuenta con una de las áreas marinas protegidas más grandes del mundo.",
        text_en: "Composed of thirty-three atolls and coral islands scattered over a vast area of the Pacific Ocean. It boasts one of the largest marine protected areas in the world.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Tarawa. No tiene fronteras terrestres, pero sus vecinos marítimos más cercanos son Tuvalu, Nauru y las Islas Marshall. Su bandera muestra un sol naciente sobre el océano con un pájaro fragata en vuelo.",
        text_en: "Its capital is Tarawa. It has no land borders, but its closest maritime neighbors are Tuvalu, Nauru, and the Marshall Islands. Its flag displays a rising sun over the ocean with a frigate bird in flight.",
      },
    ],
  },
  {
    id: 144,
    name: "Kuwait",
    name_en: "Kuwait",
    hints: [
      {
        difficulty: "expert",
        text_es: "Aunque la primera escuela para mujeres abrió en mil novecientos treinta y siete, no fue hasta dos mil cinco que las mujeres obtuvieron el derecho al voto y a presentarse a cargos políticos.",
        text_en: "Although the first school for women opened in nineteen thirty-seven, it was not until two thousand five that women gained the right to vote and run for political office.",
      },
      {
        difficulty: "hard",
        text_es: "Es un emirato petrolero rico que posee algunas de las mayores reservas probadas del mundo, lo que lo convierte en uno de los países con el PIB per cápita más alto. Su asamblea nacional es una de las más democráticas de la región.",
        text_en: "It is a wealthy oil emirate holding some of the world's largest proven reserves, making it one of the countries with the highest GDP per capita. Its national assembly is one of the most democratic in the region.",
      },
      {
        difficulty: "medium",
        text_es: "Situado en el Golfo Pérsico, tiene un clima desértico extremadamente caluroso con temperaturas que a menudo superan los cincuenta grados Celsius en verano. El buceo con perlas fue históricamente una industria importante antes del descubrimiento del petróleo.",
        text_en: "Located on the Persian Gulf, it has an extremely hot desert climate with temperatures often exceeding fifty degrees Celsius in summer. Pearl diving was historically a major industry before the discovery of oil.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Ciudad de Kuwait y limita con Irak y Arabia Saudita. Su bandera presenta tres franjas horizontales de verde, blanco y rojo, con un trapecio negro en el lado del asta.",
        text_en: "Its capital is Kuwait City and it borders Iraq and Saudi Arabia. Its flag features three horizontal stripes of green, white, and red, with a black trapezoid on the hoist side.",
      },
    ],
  },
  {
    id: 145,
    name: "Laos",
    name_en: "Laos",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país es el único sin salida al mar en el sudeste asiático y es considerado uno de los países más bombardeados per cápita de la historia, debido a la Guerra de Vietnam.",
        text_en: "This country is the only landlocked nation in Southeast Asia and is considered one of the most heavily bombed countries per capita in history, due to the Vietnam War.",
      },
      {
        difficulty: "hard",
        text_es: "Es un estado socialista de partido único con una economía en desarrollo que depende en gran medida de los recursos naturales y la energía hidroeléctrica. El budismo Theravada es la religión predominante.",
        text_en: "It is a one-party socialist state with a developing economy heavily reliant on natural resources and hydropower. Theravada Buddhism is the predominant religion.",
      },
      {
        difficulty: "medium",
        text_es: "El arroz pegajoso es un alimento básico de su cocina, a menudo disfrutado con la mano. Su geografía está dominada por paisajes montañosos y el río Mekong, que forma gran parte de su frontera occidental.",
        text_en: "Sticky rice is a staple of its cuisine, often enjoyed by hand. Its geography is dominated by mountainous landscapes and the Mekong River, which forms much of its western border.",
      },
      {
        difficulty: "easy",
        text_es: "Su capital es Vientián y limita con China, Vietnam, Camboya, Tailandia y Myanmar. Su bandera tiene tres franjas horizontales, las exteriores de rojo y la central más ancha de azul, con un disco blanco en el centro.",
        text_en: "Its capital is Vientiane and it borders China, Vietnam, Cambodia, Thailand, and Myanmar. Its flag has three horizontal stripes, the outer ones red and the wider central one blue, with a white disc in the center.",
      },
    ],
  },
  {
    id: 146,
    name: "Lesoto",
    name_en: "Lesotho",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único estado soberano en el mundo que se encuentra completamente por encima de los mil metros de altitud, con su punto más bajo situado a mil cuatrocientos metros sobre el nivel del mar.",
        text_en: "It is the only sovereign state in the world that lies entirely above one thousand meters in elevation, with its lowest point situated at one thousand four hundred meters above sea level.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente conocido como Basutolandia, obtuvo su independencia en mil novecientos sesenta y seis. Su economía depende en gran medida de las remesas de trabajadores emigrantes y de los ingresos del agua exportada.",
        text_en: "Historically known as Basutoland, it gained independence in nineteen sixty-six. Its economy largely depends on remittances from migrant workers and revenue from exported water.",
      },
      {
        difficulty: "medium",
        text_es: "Es un enclavado, completamente rodeado por otro país. Sus habitantes suelen llevar una manta de lana como prenda tradicional.",
        text_en: "It is an enclave, completely surrounded by another country. Its inhabitants commonly wear a woollen blanket as a traditional garment.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el sur de África, es una monarquía parlamentaria cuya capital es Maseru. Su bandera presenta tres franjas horizontales de azul, blanco y verde, con un mokorotlo negro en la franja blanca central.",
        text_en: "Located in Southern Africa, it is a parliamentary monarchy with its capital as Maseru. Its flag features three horizontal stripes of blue, white, and green, with a black mokorotlo on the central white stripe.",
      },
    ],
  },
  {
    id: 147,
    name: "Líbano",
    name_en: "Lebanon",
    hints: [
      {
        difficulty: "expert",
        text_es: "El primer alfabeto fenicio se desarrolló en esta tierra alrededor del segundo milenio antes de Cristo, difundiendo un sistema de escritura que influyó en muchas lenguas modernas.",
        text_en: "The first Phoenician alphabet developed in this land around the second millennium BC, spreading a writing system that influenced many modern languages.",
      },
      {
        difficulty: "hard",
        text_es: "Conocido por su compleja política confesional, el poder se distribuye constitucionalmente entre las principales comunidades religiosas. Su historia reciente ha estado marcada por conflictos civiles y tensiones regionales.",
        text_en: "Known for its complex confessional politics, power is constitutionally distributed among the main religious communities. Its recent history has been marked by civil conflicts and regional tensions.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país mediterráneo con una rica gastronomía influenciada por las cocinas levantina, otomana y francesa. Sus antiguos cedros son un símbolo nacional reconocido.",
        text_en: "It is a Mediterranean country with a rich gastronomy influenced by Levantine, Ottoman, and French cuisines. Its ancient cedars are a recognized national symbol.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en Oriente Medio, limita al norte y al este con Siria, y al sur con Israel. Su capital es Beirut, y la bandera tiene dos franjas rojas horizontales en la parte superior e inferior, con una franja blanca central que lleva un cedro verde.",
        text_en: "Located in the Middle East, it borders Syria to the north and east, and Israel to the south. Its capital is Beirut, and the flag has two horizontal red stripes at the top and bottom, with a central white stripe featuring a green cedar tree.",
      },
    ],
  },
  {
    id: 148,
    name: "Liberia",
    name_en: "Liberia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fundado en mil ochocientos veintidós, fue el primer estado independiente de África, establecido como un proyecto de la Sociedad Americana de Colonización para esclavos liberados de Estados Unidos.",
        text_en: "Founded in eighteen twenty-two, it was the first independent state in Africa, established as a project by the American Colonization Society for freed slaves from the United States.",
      },
      {
        difficulty: "hard",
        text_es: "Su bandera es similar a la de un influyente país norteamericano, lo que refleja sus orígenes. El inglés es su idioma oficial, aunque se hablan muchas lenguas indígenas.",
        text_en: "Its flag is similar to that of an influential North American country, reflecting its origins. English is its official language, though many indigenous languages are spoken.",
      },
      {
        difficulty: "medium",
        text_es: "Cuenta con abundantes recursos naturales como el mineral de hierro, los diamantes, el oro y la madera. Sus costas atlánticas son conocidas por sus playas y selvas tropicales.",
        text_en: "It possesses abundant natural resources such as iron ore, diamonds, gold, and timber. Its Atlantic coasts are known for their beaches and rainforests.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en África Occidental, limita con Sierra Leona al oeste, Guinea al norte y Costa de Marfil al este. Su capital es Monrovia. La bandera tiene once franjas horizontales, alternando rojo y blanco, con un cuadrado azul en la esquina superior izquierda que contiene una estrella blanca.",
        text_en: "Located in West Africa, it borders Sierra Leone to the west, Guinea to the north, and Côte d'Ivoire to the east. Its capital is Monrovia. The flag has eleven horizontal stripes, alternating red and white, with a blue square in the upper left corner containing a single white star.",
      },
    ],
  },
  {
    id: 149,
    name: "Libia",
    name_en: "Libya",
    hints: [
      {
        difficulty: "expert",
        text_es: "La antigua ciudad de Leptis Magna, una de las metrópolis romanas mejor conservadas del Mediterráneo, se encuentra en sus costas, mostrando una impresionante arquitectura imperial.",
        text_en: "The ancient city of Leptis Magna, one of the best-preserved Roman metropolises in the Mediterranean, is located on its coasts, showcasing impressive imperial architecture.",
      },
      {
        difficulty: "hard",
        text_es: "La mayor parte de su territorio está cubierta por el desierto del Sahara. Su economía depende en gran medida de vastas reservas de petróleo, y ha experimentado décadas de gobierno autocrático y recientes conflictos civiles.",
        text_en: "The vast majority of its territory is covered by the Sahara Desert. Its economy heavily relies on vast oil reserves, and it has experienced decades of autocratic rule and recent civil conflicts.",
      },
      {
        difficulty: "medium",
        text_es: "Es un país del norte de África, parte del Magreb, con una larga costa en el Mediterráneo. Sus paisajes desérticos albergan oasis y formaciones rocosas espectaculares.",
        text_en: "It is a North African country, part of the Maghreb, with a long Mediterranean coastline. Its desert landscapes are home to oases and spectacular rock formations.",
      },
      {
        difficulty: "easy",
        text_es: "Limita con Egipto al este, Sudán al sureste, Chad y Níger al sur, Argelia al suroeste y Túnez al oeste. Su capital es Trípoli. La bandera consiste en tres franjas horizontales (roja, negra y verde) con una media luna y una estrella blancas en el centro de la franja negra.",
        text_en: "It borders Egypt to the east, Sudan to the southeast, Chad and Niger to the south, Algeria to the southwest, and Tunisia to the west. Its capital is Tripoli. The flag consists of three horizontal stripes (red, black, and green) with a white crescent moon and star in the center of the black stripe.",
      },
    ],
  },
  {
    id: 150,
    name: "Liechtenstein",
    name_en: "Liechtenstein",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país en el mundo que se encuentra completamente dentro de los Alpes. Es uno de los dos países doblemente sin salida al mar del mundo.",
        text_en: "It is the only country in the world situated entirely within the Alps. It is one of only two doubly landlocked countries globally.",
      },
      {
        difficulty: "hard",
        text_es: "Es una monarquía constitucional hereditaria con una fuerte presencia de la banca y las finanzas. A pesar de su pequeño tamaño, tiene uno de los productos internos brutos per cápita más altos del mundo.",
        text_en: "It is a hereditary constitutional monarchy with a strong banking and finance sector. Despite its small size, it has one of the highest gross domestic products per capita in the world.",
      },
      {
        difficulty: "medium",
        text_es: "Conocido por sus paisajes alpinos y castillos medievales. Es un centro para los deportes de invierno y cuenta con una de las poblaciones más pequeñas de Europa.",
        text_en: "Known for its alpine landscapes and medieval castles. It is a center for winter sports and has one of the smallest populations in Europe.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en Europa Central, limita al este con Austria y al oeste con Suiza. Su capital es Vaduz. La bandera está compuesta por dos franjas horizontales de color azul y rojo, con una corona ducal dorada en la parte superior izquierda de la franja azul.",
        text_en: "Located in Central Europe, it borders Austria to the east and Switzerland to the west. Its capital is Vaduz. The flag is composed of two horizontal stripes of blue and red, with a golden ducal crown in the upper left corner of the blue stripe.",
      },
    ],
  },
  {
    id: 151,
    name: "Malaui",
    name_en: "Malawi",
    hints: [
      {
        difficulty: "expert",
        text_es: "A principios del siglo veinte, fue el único protectorado británico en África que prohibió oficialmente el reclutamiento de mano de obra forzada para las minas de oro sudafricanas.",
        text_en: "In the early twentieth century, it was the only British protectorate in Africa to officially ban forced labor recruitment for South African gold mines.",
      },
      {
        difficulty: "hard",
        text_es: "Este país de África oriental es conocido como la 'Tierra de los Mangos' y el 'Corazón Cálido de África' debido a la amabilidad de su gente. Su sistema político es una república presidencial multipartidista.",
        text_en: "This East African country is known as the 'Land of Mangos' and the 'Warm Heart of Africa' due to the friendliness of its people. Its political system is a multi-party presidential republic.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su frontera oriental está definida por un lago masivo, el tercero más grande de África y el noveno más grande del mundo por volumen. Es un punto clave de biodiversidad acuática.",
        text_en: "Much of its eastern border is defined by a massive lake, the third largest in Africa and the ninth largest in the world by volume. It is a key point of aquatic biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el sureste de África, limitando con Mozambique al este y sur, Zambia al oeste y Tanzania al norte. Su capital es Lilongüe, situada en la región central.",
        text_en: "It is located in southeastern Africa, bordering Mozambique to the east and south, Zambia to the west, and Tanzania to the north. Its capital is Lilongwe, located in the central region.",
      },
    ],
  },
  {
    id: 152,
    name: "Maldivas",
    name_en: "Maldives",
    hints: [
      {
        difficulty: "expert",
        text_es: "Aunque su economía se basa hoy en el turismo, durante siglos fue un importante centro de comercio de cauris, utilizándose como moneda en gran parte de Asia y África.",
        text_en: "Although its economy is now based on tourism, for centuries it was a significant center for cowrie shell trade, which were used as currency across much of Asia and Africa.",
      },
      {
        difficulty: "hard",
        text_es: "Este país insular es el estado soberano más bajo del mundo, con una elevación promedio de tan solo un metro y medio sobre el nivel del mar, lo que lo hace extremadamente vulnerable al cambio climático. Su idioma oficial, el dhivehi, está relacionado con el cingalés.",
        text_en: "This island nation is the world's lowest sovereign state, with an average elevation of just one and a half meters above sea level, making it extremely vulnerable to climate change. Its official language, Dhivehi, is related to Sinhala.",
      },
      {
        difficulty: "medium",
        text_es: "Es un archipiélago formado por más de mil doscientas islas de coral, agrupadas en veintiséis atolones naturales. Su vida marina es excepcionalmente rica, con vastos arrecifes de coral.",
        text_en: "It is an archipelago composed of over one thousand two hundred coral islands, grouped into twenty-six natural atolls. Its marine life is exceptionally rich, with vast coral reefs.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el Océano Índico, al suroeste de Sri Lanka e India, consta de una cadena de atolones. Su capital es Malé, que es una de las ciudades más densamente pobladas del mundo.",
        text_en: "Located in the Indian Ocean, southwest of Sri Lanka and India, it consists of a chain of atolls. Its capital is Malé, which is one of the most densely populated cities in the world.",
      },
    ],
  },
  {
    id: 153,
    name: "Malí",
    name_en: "Mali",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el sitio de tres grandes imperios de África Occidental (Ghana, Malí y Songhai) que controlaron el comercio transahariano de oro, sal y esclavos durante más de setecientos años.",
        text_en: "It was the site of three major West African empires (Ghana, Mali, and Songhai) that controlled the trans-Saharan trade in gold, salt, and slaves for over seven hundred years.",
      },
      {
        difficulty: "hard",
        text_es: "Esta nación sin litoral, en África Occidental, es conocida por sus antiguos manuscritos de Tombuctú, que son un testimonio de una rica tradición académica islámica. Es un país predominantemente musulmán con una historia de inestabilidad política reciente.",
        text_en: "This landlocked nation in West Africa is renowned for its ancient Timbuktu manuscripts, testaments to a rich Islamic scholarly tradition. It is a predominantly Muslim country with a history of recent political instability.",
      },
      {
        difficulty: "medium",
        text_es: "El río Níger atraviesa una gran parte de este país, creando un delta interior fértil y sirviendo como una arteria vital para el transporte y la irrigación. Sus paisajes varían desde el desierto hasta la sabana.",
        text_en: "The Niger River flows through a large portion of this country, creating a fertile inland delta and serving as a vital artery for transport and irrigation. Its landscapes range from desert to savanna.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en África Occidental, limita con Mauritania y Argelia al norte, Níger y Burkina Faso al este, Costa de Marfil y Guinea al sur, y Senegal al oeste. Su capital es Bamako, una ciudad a orillas del río Níger.",
        text_en: "Located in West Africa, it borders Mauritania and Algeria to the north, Niger and Burkina Faso to the east, Côte d'Ivoire and Guinea to the south, and Senegal to the west. Its capital is Bamako, a city on the Niger River.",
      },
    ],
  },
  {
    id: 154,
    name: "Malta",
    name_en: "Malta",
    hints: [
      {
        difficulty: "expert",
        text_es: "En mil novecientos cuarenta y dos, toda la población fue condecorada colectivamente con la Cruz de Jorge, un raro honor otorgado por el Rey Jorge Sexto por su heroísmo durante el asedio de la Segunda Guerra Mundial.",
        text_en: "In nineteen forty-two, the entire population was collectively awarded the George Cross, a rare honor bestowed by King George Six for its heroism during the Second World War siege.",
      },
      {
        difficulty: "hard",
        text_es: "Este archipiélago mediterráneo posee algunos de los templos megalíticos más antiguos del mundo, incluso más antiguos que las pirámides de Egipto. Es una república parlamentaria con una fuerte influencia del derecho británico.",
        text_en: "This Mediterranean archipelago boasts some of the world's oldest megalithic temples, even older than the pyramids of Egypt. It is a parliamentary republic with strong British legal influence.",
      },
      {
        difficulty: "medium",
        text_es: "Es un pequeño país insular conocido por sus edificios de piedra caliza de color miel y sus aguas cristalinas, populares para el buceo. Su cocina es una mezcla de influencias mediterráneas y árabes.",
        text_en: "It is a small island country known for its honey-colored limestone buildings and clear waters, popular for diving. Its cuisine is a blend of Mediterranean and Arab influences.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Mediterráneo central, al sur de Sicilia, Italia. Es un archipiélago compuesto por tres islas principales: Malta, Gozo y Comino. Su capital es La Valeta.",
        text_en: "It is located in the central Mediterranean, south of Sicily, Italy. It is an archipelago composed of three main islands: Malta, Gozo, and Comino. Its capital is Valletta.",
      },
    ],
  },
  {
    id: 155,
    name: "Mauricio",
    name_en: "Mauritius",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el hogar exclusivo del dodo, un ave no voladora que se extinguió en el siglo diecisiete, y es el único lugar donde se ha descubierto esta especie.",
        text_en: "It was the exclusive home of the dodo, a flightless bird that became extinct in the seventeenth century, and is the only place where this species has been discovered.",
      },
      {
        difficulty: "hard",
        text_es: "Esta nación insular en el Océano Índico es una de las democracias más estables y exitosas de África. Su diversidad étnica se refleja en sus lenguas, que incluyen el criollo, el francés y el inglés.",
        text_en: "This island nation in the Indian Ocean is one of Africa's most stable and successful democracies. Its ethnic diversity is reflected in its languages, which include Creole, French, and English.",
      },
      {
        difficulty: "medium",
        text_es: "Conocido por sus playas de arena blanca, lagunas y arrecifes, este país es un destino turístico de lujo. También alberga el 'Tierra de los Siete Colores', una formación geológica de dunas de arena multicolor.",
        text_en: "Known for its white sandy beaches, lagoons, and reefs, this country is a luxury tourist destination. It also hosts the 'Seven Coloured Earths', a geological formation of multi-colored sand dunes.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Océano Índico, a unos novecientos kilómetros al este de Madagascar. Sus islas principales son Mauricio y Rodrigues. Su capital y ciudad más grande es Port Louis.",
        text_en: "It is located in the Indian Ocean, about nine hundred kilometers east of Madagascar. Its main islands are Mauritius and Rodrigues. Its capital and largest city is Port Louis.",
      },
    ],
  },
  {
    id: 156,
    name: "Mauritania",
    name_en: "Mauritania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país del mundo que conservó oficialmente la esclavitud hasta mil novecientos ochenta y uno, aunque su erradicación total sigue siendo un desafío. Su bandera original de mil novecientos cincuenta y nueve no incluía las franjas rojas añadidas en dos mil diecisiete.",
        text_en: "It was the last country in the world to officially abolish slavery in nineteen eighty-one, though its complete eradication remains a challenge. Its original nineteen fifty-nine flag did not include the red stripes added in two thousand seventeen.",
      },
      {
        difficulty: "hard",
        text_es: "Gran parte de su territorio se encuentra en el desierto del Sahara, y el noventa por ciento de la población se concentra en su capital y en la costa. Aunque el árabe es el idioma oficial, conviven otras lenguas bereberes y de África Occidental.",
        text_en: "A large part of its territory is located in the Sahara Desert, and ninety percent of its population is concentrated in its capital city and along the coast. Although Arabic is the official language, other Berber and West African languages coexist.",
      },
      {
        difficulty: "medium",
        text_es: "Alberga el 'Ojo del Sahara', una estructura geológica circular también conocida como la Estructura de Richat, visible desde el espacio. Es uno de los principales productores de mineral de hierro del continente.",
        text_en: "It is home to the 'Eye of the Sahara', a circular geological feature also known as the Richat Structure, visible from space. It is one of the continent's leading producers of iron ore.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en el noroeste de África, limita con Marruecos, Argelia, Malí y Senegal, con una costa bañada por el océano Atlántico. Nuakchot es su capital y ciudad más grande.",
        text_en: "Located in Northwest Africa, it borders Morocco, Algeria, Mali, and Senegal, with a coastline along the Atlantic Ocean. Nouakchott is its capital and largest city.",
      },
    ],
  },
  {
    id: 157,
    name: "Micronesia",
    name_en: "Micronesia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución fue redactada en mil novecientos setenta y cinco, pero no entró en vigor hasta mil novecientos setenta y nueve, después de que cuatro de los seis distritos originales votaran por formar una federación separada. A pesar de su tamaño, su zona económica exclusiva cubre más de dos millones y medio de kilómetros cuadrados.",
        text_en: "Its constitution was drafted in nineteen seventy-five but did not come into effect until nineteen seventy-nine, after four of the six original districts voted to form a separate federation. Despite its size, its exclusive economic zone covers over two and a half million square kilometers.",
      },
      {
        difficulty: "hard",
        text_es: "Es una república presidencialista compuesta por cuatro estados federados, con un Pacto de Libre Asociación con los Estados Unidos. Esto le otorga financiación y defensa a cambio de acceso militar estratégico.",
        text_en: "It is a presidential republic composed of four federated states, with a Compact of Free Association with the United States. This agreement provides funding and defense in exchange for strategic military access.",
      },
      {
        difficulty: "medium",
        text_es: "Es un archipiélago formado por más de seiscientas islas e islotes, famoso por sus lagunas y arrecifes de coral. El atolón de Chuuk es mundialmente conocido por ser un cementerio submarino de barcos y aviones de la Segunda Guerra Mundial.",
        text_en: "It is an archipelago made up of over six hundred islands and islets, famous for its lagoons and coral reefs. The Chuuk Atoll is globally renowned as an underwater graveyard of World War Two ships and planes.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en Oceanía, al este de Filipinas y al norte de Papúa Nueva Guinea, en el oeste del océano Pacífico. Su capital es Palikir, ubicada en la isla de Pohnpei.",
        text_en: "It is located in Oceania, east of the Philippines and north of Papua New Guinea, in the western Pacific Ocean. Its capital is Palikir, situated on the island of Pohnpei.",
      },
    ],
  },
  {
    id: 158,
    name: "Mozambique",
    name_en: "Mozambique",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su nombre proviene del sultán Mussa Bin Bique, un rico comerciante árabe que gobernaba la isla principal cuando los exploradores portugueses llegaron en mil cuatrocientos noventa y ocho. Es el único país con una AK-cuarenta y siete en su bandera, simbolizando defensa y vigilancia.",
        text_en: "Its name comes from Sultan Mussa Bin Bique, a wealthy Arab trader who ruled the main island when Portuguese explorers arrived in fourteen ninety-eight. It is the only country with an AK-forty-seven on its flag, symbolizing defense and vigilance.",
      },
      {
        difficulty: "hard",
        text_es: "Antigua colonia portuguesa, obtuvo su independencia en mil novecientos setenta y cinco tras una guerra de liberación. Posteriormente sufrió una guerra civil de dieciséis años que terminó en mil novecientos noventa y dos.",
        text_en: "A former Portuguese colony, it gained independence in nineteen seventy-five after a liberation war. It subsequently endured a sixteen-year civil war which ended in nineteen ninety-two.",
      },
      {
        difficulty: "medium",
        text_es: "Su extensa costa del océano Índico es famosa por sus playas vírgenes y sus arrecifes de coral, como los del archipiélago de Bazaruto. El marisco, especialmente los camarones, es una parte fundamental de su gastronomía.",
        text_en: "Its extensive Indian Ocean coastline is famous for its pristine beaches and coral reefs, such as those in the Bazaruto Archipelago. Seafood, especially prawns, is a fundamental part of its cuisine.",
      },
      {
        difficulty: "easy",
        text_es: "Se ubica en el sureste de África, bordeando el océano Índico, y comparte fronteras con Tanzania, Malaui, Zambia, Zimbabue, Suazilandia y Sudáfrica. Maputo es su capital y principal puerto.",
        text_en: "It is located in Southeast Africa, bordering the Indian Ocean, and shares borders with Tanzania, Malawi, Zambia, Zimbabwe, Eswatini, and South Africa. Maputo is its capital and main port.",
      },
    ],
  },
  {
    id: 159,
    name: "Namibia",
    name_en: "Namibia",
    hints: [
      {
        difficulty: "expert",
        text_es: "El hallazgo de una nave portuguesa del siglo dieciséis en la costa de los Esqueletos en dos mil ocho llevó a un debate sobre la soberanía de los artefactos. Su nombre, que significa 'un vasto lugar', se eligió en mil novecientos sesenta y ocho para evitar referencias a grupos étnicos o a la colonización.",
        text_en: "The discovery of a sixteenth-century Portuguese ship on the Skeleton Coast in two thousand eight led to a debate over artifact sovereignty. Its name, meaning 'a vast place', was chosen in nineteen sixty-eight to avoid references to ethnic groups or colonization.",
      },
      {
        difficulty: "hard",
        text_es: "Fue una colonia alemana y luego estuvo bajo administración de Sudáfrica como África del Suroeste hasta su independencia en mil novecientos noventa. La lengua afrikáans sigue siendo ampliamente utilizada en el país.",
        text_en: "It was a German colony and later under South African administration as South West Africa until its independence in nineteen ninety. The Afrikaans language is still widely used in the country.",
      },
      {
        difficulty: "medium",
        text_es: "Es hogar del desierto de Namib, uno de los desiertos más antiguos y áridos del mundo, con dunas que alcanzan alturas impresionantes. Su escarpada Costa de los Esqueletos es famosa por sus densas nieblas y restos de naufragios.",
        text_en: "It is home to the Namib Desert, one of the oldest and driest deserts in the world, with dunes reaching impressive heights. Its rugged Skeleton Coast is famous for its dense fogs and shipwrecks.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el suroeste de África, con el océano Atlántico al oeste, y limita con Angola, Zambia, Botsuana y Sudáfrica. Windhoek es su capital y la ciudad más poblada.",
        text_en: "It is located in Southwest Africa, with the Atlantic Ocean to the west, and borders Angola, Zambia, Botswana, and South Africa. Windhoek is its capital and most populous city.",
      },
    ],
  },
  {
    id: 160,
    name: "Nauru",
    name_en: "Nauru",
    hints: [
      {
        difficulty: "expert",
        text_es: "Con una población de alrededor de once mil habitantes, es la república independiente más pequeña del mundo por superficie y población. Su himno nacional es 'Nauru Bwiema', que significa 'Nauru, nuestra patria'.",
        text_en: "With a population of around eleven thousand people, it is the world's smallest independent republic by both area and population. Its national anthem is 'Nauru Bwiema', which means 'Nauru, Our Homeland'.",
      },
      {
        difficulty: "hard",
        text_es: "Es un país insular de Micronesia, conocido por su historia de explotación de fosfato, que llevó a una gran riqueza inicial seguida de un colapso económico. Ahora depende en gran medida de la ayuda exterior y de los ingresos por albergar centros de procesamiento de inmigrantes.",
        text_en: "It is an island nation in Micronesia, known for its history of phosphate mining, which led to initial great wealth followed by an economic collapse. It now relies heavily on foreign aid and revenue from hosting offshore immigration processing centers.",
      },
      {
        difficulty: "medium",
        text_es: "Es uno de los tres estados soberanos del mundo sin una capital oficial, aunque Yaren es el distrito donde se encuentran la mayoría de las oficinas gubernamentales. La bandera presenta una franja horizontal amarilla y una estrella blanca de doce puntas sobre un fondo azul.",
        text_en: "It is one of only three sovereign states in the world without an official capital city, although Yaren is the district where most government offices are located. The flag features a horizontal yellow stripe and a white twelve-pointed star against a blue background.",
      },
      {
        difficulty: "easy",
        text_es: "Es una pequeña isla en Oceanía, al noreste de Australia, en el océano Pacífico Central. No tiene países vecinos por tierra, estando completamente rodeada por el océano.",
        text_en: "It is a tiny island in Oceania, northeast of Australia, in the Central Pacific Ocean. It has no land neighbors, being completely surrounded by the ocean.",
      },
    ],
  },
  {
    id: 161,
    name: "Níger",
    name_en: "Niger",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países del mundo que ha utilizado en su papel moneda la imagen de un animal extinto hace milenios, el dinosaurio de Níger.",
        text_en: "It is one of the few countries in the world that has featured an image of an animal extinct for millennia, the Niger dinosaur, on its banknotes.",
      },
      {
        difficulty: "hard",
        text_es: "Un país sin litoral en África Occidental, fue parte de la Federación de África Occidental Francesa hasta su independencia en el siglo veinte. Su idioma oficial, así como la mayoría de los nombres de los estados miembros de su unión territorial, tienen un origen europeo.",
        text_en: "A landlocked country in West Africa, it was part of the French West African Federation until its independence in the twentieth century. Its official language, as well as most of the names of the constituent states in its territorial union, have a European origin.",
      },
      {
        difficulty: "medium",
        text_es: "Gran parte de su territorio se extiende por el desierto del Sahara, haciendo que la agricultura dependa en gran medida de un río importante que atraviesa su esquina suroeste. Las dunas de arena y las mesetas rocosas son paisajes comunes.",
        text_en: "Much of its territory spans the Sahara Desert, making agriculture largely dependent on a major river that flows through its southwestern corner. Sand dunes and rocky plateaus are common landscapes.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en África Occidental, comparte fronteras con Argelia al norte, Libia al noreste, Chad al este, Nigeria y Benín al sur, y Burkina Faso y Malí al oeste. Su capital es Niamey. Su bandera presenta tres franjas horizontales: naranja, blanco y verde, con un círculo naranja en el centro de la franja blanca.",
        text_en: "Located in West Africa, it borders Algeria to the north, Libya to the northeast, Chad to the east, Nigeria and Benin to the south, and Burkina Faso and Mali to the west. Its capital is Niamey. Its flag features three horizontal stripes: orange, white, and green, with an orange circle in the center of the white stripe.",
      },
    ],
  },
  {
    id: 162,
    name: "Omán",
    name_en: "Oman",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el hogar de uno de los sistemas de riego más antiguos del mundo, conocido como 'falaj', que data de hace miles de años y ha sido declarado Patrimonio de la Humanidad por la UNESCO.",
        text_en: "It is home to one of the world's oldest irrigation systems, known as 'falaj', dating back thousands of years and declared a UNESCO World Heritage site.",
      },
      {
        difficulty: "hard",
        text_es: "Una monarquía absoluta en la península arábiga, su historia marítima es rica, siendo un centro comercial clave para incienso y especias durante siglos. Fue una potencia colonial con posesiones en África Oriental y el subcontinente indio.",
        text_en: "An absolute monarchy on the Arabian Peninsula, its maritime history is rich, having been a key trading hub for frankincense and spices for centuries. It was a colonial power with possessions in East Africa and the Indian subcontinent.",
      },
      {
        difficulty: "medium",
        text_es: "Este país costero es conocido por sus dramáticos fiordos en el norte, sus vastos desiertos de arena en el interior y sus exuberantes palmerales y montañas en el sur. Sus paisajes varían desde playas prístinas hasta cañones profundos.",
        text_en: "This coastal country is known for its dramatic fjords in the north, vast inland sand deserts, and lush palm groves and mountains in the south. Its landscapes range from pristine beaches to deep canyons.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el sureste de la península arábiga, limita con los Emiratos Árabes Unidos al noroeste, Arabia Saudita al oeste y Yemen al suroeste. Tiene costas en el Mar Arábigo y el Golfo de Omán. Su capital es Mascate. La bandera tiene una franja vertical roja en el lado del mástil con el emblema nacional en la parte superior, y tres franjas horizontales: blanca, roja y verde.",
        text_en: "Located on the southeastern coast of the Arabian Peninsula, it borders the United Arab Emirates to the northwest, Saudi Arabia to the west, and Yemen to the southwest. It has coastlines on the Arabian Sea and the Gulf of Oman. Its capital is Muscat. The flag features a red vertical stripe on the hoist side with the national emblem at the top, and three horizontal stripes: white, red, and green.",
      },
    ],
  },
  {
    id: 163,
    name: "Palaos",
    name_en: "Palau",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este archipiélago alberga uno de los únicos 'lagos de medusas' del mundo donde las medusas han perdido sus células urticantes debido a la ausencia de depredadores, permitiendo nadar con ellas de forma segura.",
        text_en: "This archipelago is home to one of the world's only 'jellyfish lakes' where the jellyfish have lost their stinging cells due to the absence of predators, allowing safe swimming with them.",
      },
      {
        difficulty: "hard",
        text_es: "Una nación insular en Micronesia, fue un Territorio en Fideicomiso de las Islas del Pacífico administrado por los Estados Unidos hasta su plena independencia a finales del siglo veinte. Su defensa es provista por un país extranjero en un Pacto de Libre Asociación.",
        text_en: "An island nation in Micronesia, it was a United States-administered Trust Territory of the Pacific Islands until its full independence in the late twentieth century. Its defense is provided by a foreign country under a Compact of Free Association.",
      },
      {
        difficulty: "medium",
        text_es: "Es un destino principal para el buceo, famoso por sus arrecifes de coral, cuevas submarinas y una biodiversidad marina excepcional. Las 'Islas Rocosas', un grupo de islas de piedra caliza, son un paisaje icónico.",
        text_en: "It is a prime destination for scuba diving, renowned for its coral reefs, underwater caves, and exceptional marine biodiversity. The 'Rock Islands,' a group of limestone islands, are an iconic landscape.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Océano Pacífico occidental, al sureste de Filipinas y al norte de Papúa Nueva Guinea. Sus vecinos marítimos más cercanos incluyen Micronesia e Indonesia. Su capital es Ngerulmud. Su bandera es un campo azul claro con un gran disco dorado descentrado hacia el lado del mástil, simbolizando la luna llena.",
        text_en: "It is located in the western Pacific Ocean, southeast of the Philippines and north of Papua New Guinea. Its closest maritime neighbors include Micronesia and Indonesia. Its capital is Ngerulmud. Its flag is a light blue field with a large golden disk slightly off-center towards the hoist, symbolizing the full moon.",
      },
    ],
  },
  {
    id: 164,
    name: "Palestina",
    name_en: "Palestine",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una parte significativa de su territorio histórico se considera la cuna de dos de las principales religiones monoteístas del mundo, con numerosos lugares sagrados para cristianos y judíos, además de ser importante para los musulmanes.",
        text_en: "A significant part of its historical territory is considered the birthplace of two of the world's major monotheistic religions, with numerous holy sites for Christians and Jews, in addition to being important for Muslims.",
      },
      {
        difficulty: "hard",
        text_es: "Con un estatus de Estado observador no miembro en las Naciones Unidas, su lucha por la autodeterminación es una de las cuestiones geopolíticas más prolongadas y complejas del siglo veinte y veintiuno.",
        text_en: "With a non-member observer state status at the United Nations, its struggle for self-determination is one of the most prolonged and complex geopolitical issues of the twentieth and twenty-first centuries.",
      },
      {
        difficulty: "medium",
        text_es: "Su cultura es rica en gastronomía, con platos como el 'mansaf' o el 'maqluba' siendo pilares de su cocina. También es conocida por sus mercados bulliciosos y la producción de aceite de oliva.",
        text_en: "Its culture is rich in gastronomy, with dishes like 'mansaf' or 'maqluba' being staples of its cuisine. It is also known for its bustling markets and olive oil production.",
      },
      {
        difficulty: "easy",
        text_es: "Formada principalmente por la Franja de Gaza y Cisjordania, que se encuentran al este del Mar Mediterráneo. Limita con Israel y Jordania. Su capital de facto es Ramala. La bandera presenta tres franjas horizontales (negra, blanca y verde) con un triángulo rojo en el lado del mástil.",
        text_en: "Comprised mainly of the Gaza Strip and the West Bank, which are located east of the Mediterranean Sea. It borders Israel and Jordan. Its de facto capital is Ramallah. The flag features three horizontal stripes (black, white, and green) with a red triangle on the hoist side.",
      },
    ],
  },
  {
    id: 165,
    name: "Papúa Nueva Guinea",
    name_en: "Papua New Guinea",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los países con mayor diversidad lingüística del mundo, albergando más de ochocientas lenguas indígenas, lo que representa aproximadamente el once por ciento de todas las lenguas del planeta.",
        text_en: "It is one of the most linguistically diverse countries in the world, hosting over eight hundred indigenous languages, representing approximately eleven percent of all languages on the planet.",
      },
      {
        difficulty: "hard",
        text_es: "Situada en Oceanía, esta nación insular obtuvo su independencia de un protectorado administrado por Australia en el siglo veinte. Su sistema político es una monarquía constitucional que forma parte de la Commonwealth.",
        text_en: "Located in Oceania, this island nation gained independence from an Australian-administered protectorate in the twentieth century. Its political system is a constitutional monarchy part of the Commonwealth.",
      },
      {
        difficulty: "medium",
        text_es: "Conocida por su geografía montañosa y densas selvas tropicales, es el hogar de una biodiversidad única, incluyendo el ave del paraíso. Su terreno accidentado ha mantenido a muchas comunidades aisladas por siglos.",
        text_en: "Known for its mountainous geography and dense rainforests, it is home to unique biodiversity, including the bird-of-paradise. Its rugged terrain has kept many communities isolated for centuries.",
      },
      {
        difficulty: "easy",
        text_es: "Ocupa la mitad oriental de una gran isla en Oceanía. Limita con Indonesia al oeste y tiene vecinos marítimos como Australia y las Islas Salomón al sur y este. Su capital es Port Moresby. La bandera presenta una división diagonal: el triángulo superior es rojo con un ave del paraíso amarilla, y el triángulo inferior es negro con cinco estrellas blancas que representan la Cruz del Sur.",
        text_en: "It occupies the eastern half of a large island in Oceania. It borders Indonesia to the west and has maritime neighbors such as Australia and the Solomon Islands to the south and east. Its capital is Port Moresby. The flag features a diagonal division: the upper triangle is red with a yellow bird-of-paradise, and the lower triangle is black with five white stars representing the Southern Cross.",
      },
    ],
  },
  {
    id: 166,
    name: "República Centroafricana",
    name_en: "Central African Republic",
    hints: [
      {
        difficulty: "expert",
        text_es: "Conocido históricamente como Oubangui-Chari, este territorio fue un dominio de la corona francesa hasta mil novecientos cincuenta y ocho.",
        text_en: "Historically known as Oubangui-Chari, this territory was a French crown dominion until nineteen fifty-eight.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de tener grandes reservas de diamantes y uranio, este país es uno de los más pobres del mundo, con una historia reciente marcada por golpes de estado y conflictos. Su idioma oficial es el francés, pero el sango es la lengua nacional ampliamente hablada.",
        text_en: "Despite having significant diamond and uranium reserves, this country is one of the poorest in the world, with a recent history marked by coups and conflicts. Its official language is French, but Sango is the widely spoken national language.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en el corazón del continente, este país posee una rica biodiversidad, incluyendo el Parque Nacional Manovo-Gounda St. Floris, hogar de especies como el rinoceronte negro y el guepardo.",
        text_en: "Located in the heart of the continent, this country boasts rich biodiversity, including Manovo-Gounda St. Floris National Park, home to species like the black rhinoceros and cheetah.",
      },
      {
        difficulty: "easy",
        text_es: "Este país está rodeado por Camerún, Chad, Sudán, Sudán del Sur, la República Democrática del Congo y la República del Congo. Su capital es Bangui. La bandera presenta bandas horizontales azul, blanca, verde y amarilla, cortadas por una vertical roja, con una estrella amarilla en la franja azul.",
        text_en: "This country is bordered by Cameroon, Chad, Sudan, South Sudan, the Democratic Republic of the Congo, and the Republic of the Congo. Its capital is Bangui. The flag features horizontal blue, white, green, and yellow bands, cut by a vertical red one, with a yellow star on the blue stripe.",
      },
    ],
  },
  {
    id: 167,
    name: "República del Congo",
    name_en: "Republic of the Congo",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este territorio fue parte del África Ecuatorial Francesa y obtuvo su autonomía en mil novecientos cincuenta y ocho antes de su independencia total en mil novecientos sesenta.",
        text_en: "This territory was part of French Equatorial Africa and gained autonomy in nineteen fifty-eight before full independence in nineteen sixty.",
      },
      {
        difficulty: "hard",
        text_es: "A pesar de ser un productor de petróleo considerable, una gran parte de su población vive por debajo del umbral de la pobreza. El francés es el idioma oficial, complementado por lenguas nacionales como el lingala y el kituba.",
        text_en: "Despite being a significant oil producer, a large portion of its population lives below the poverty line. French is the official language, complemented by national languages like Lingala and Kituba.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es famoso por sus gorilas de llanura occidental en parques como Odzala-Kokoua y Nouabalé-Ndoki, así como por sus extensos bosques tropicales que cubren una gran parte de su territorio.",
        text_en: "This country is famous for its Western lowland gorillas in parks like Odzala-Kokoua and Nouabalé-Ndoki, as well as its extensive tropical rainforests covering a large part of its territory.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en África Central, este país limita con Gabón, Camerún, la República Centroafricana, la República Democrática del Congo y el enclave de Cabinda (Angola). Su capital es Brazzaville. La bandera tiene una franja diagonal amarilla que divide un triángulo verde en la parte superior izquierda y uno rojo en la inferior derecha.",
        text_en: "Located in Central Africa, this country borders Gabon, Cameroon, the Central African Republic, the Democratic Republic of the Congo, and the Angolan exclave of Cabinda. Its capital is Brazzaville. The flag features a diagonal yellow stripe separating a green triangle in the upper hoist and a red triangle in the lower fly.",
      },
    ],
  },
  {
    id: 168,
    name: "República Democrática del Congo",
    name_en: "Democratic Republic of the Congo",
    hints: [
      {
        difficulty: "expert",
        text_es: "Históricamente conocido como el Estado Libre del Congo, este vasto territorio fue una posesión personal del rey Leopoldo Segundo de Bélgica desde mil ochocientos ochenta y cinco hasta mil novecientos ocho.",
        text_en: "Historically known as the Congo Free State, this vast territory was a personal possession of King Leopold the Second of Belgium from eighteen eighty-five until nineteen hundred eight.",
      },
      {
        difficulty: "hard",
        text_es: "Es el segundo país más grande de África y posee enormes riquezas minerales, incluyendo cobalto, cobre y diamantes, aunque ha enfrentado conflictos prolongados y desafíos en gobernanza. Más de doscientas lenguas se hablan en su territorio, siendo el francés el idioma oficial.",
        text_en: "It is the second-largest country in Africa and holds immense mineral wealth, including cobalt, copper, and diamonds, though it has faced prolonged conflicts and governance challenges. Over two hundred languages are spoken within its territory, with French as the official language.",
      },
      {
        difficulty: "medium",
        text_es: "Hogar del río con el mayor caudal de África y la segunda selva tropical más grande del mundo, este país es el único lugar donde se encuentra el bonobo en estado salvaje, una especie de simio en peligro de extinción.",
        text_en: "Home to Africa's largest river by discharge volume and the world's second-largest rainforest, this country is the only place where bonobos are found in the wild, an endangered ape species.",
      },
      {
        difficulty: "easy",
        text_es: "Este país de África Central limita con nueve naciones: Angola, Burundi, la República Centroafricana, la República del Congo, Ruanda, Sudán del Sur, Tanzania, Uganda y Zambia. Su capital es Kinshasa. La bandera presenta un fondo azul cielo con una estrella amarilla en la esquina superior izquierda y una franja diagonal roja y amarilla.",
        text_en: "This Central African country borders nine nations: Angola, Burundi, the Central African Republic, the Republic of the Congo, Rwanda, South Sudan, Tanzania, Uganda, and Zambia. Its capital is Kinshasa. The flag features a sky blue background with a yellow star in the upper-left corner and a diagonal red and yellow stripe.",
      },
    ],
  },
  {
    id: 169,
    name: "Ruanda",
    name_en: "Rwanda",
    hints: [
      {
        difficulty: "expert",
        text_es: "En el siglo diecinueve, el Imperio de Ruanda, bajo el liderazgo del rey Kigeli Cuarto Rwabugiri, se expandió significativamente, anexando territorios y consolidando el poder político antes de la llegada de las potencias coloniales.",
        text_en: "In the nineteenth century, the Rwandan Empire, under the leadership of King Kigeli the Fourth Rwabugiri, expanded significantly, annexing territories and consolidating political power before the arrival of colonial powers.",
      },
      {
        difficulty: "hard",
        text_es: "Conocido por su dramática historia reciente y su impresionante recuperación económica, este país ha implementado políticas ambiciosas en sostenibilidad ambiental y tecnología, buscando convertirse en un centro de innovación en África.",
        text_en: "Known for its dramatic recent history and impressive economic recovery, this country has implemented ambitious policies in environmental sustainability and technology, aiming to become a hub of innovation in Africa.",
      },
      {
        difficulty: "medium",
        text_es: "Apodado la 'Tierra de las Mil Colinas', este país montañoso es uno de los pocos lugares del mundo donde se pueden observar gorilas de montaña en su hábitat natural, atrayendo a numerosos ecoturistas.",
        text_en: "Nicknamed the 'Land of a Thousand Hills,' this mountainous country is one of the few places in the world where mountain gorillas can be observed in their natural habitat, attracting numerous eco-tourists.",
      },
      {
        difficulty: "easy",
        text_es: "Este país sin salida al mar en África Oriental Central limita con Burundi, la República Democrática del Congo, Tanzania y Uganda. Su capital es Kigali. La bandera tiene una amplia franja horizontal superior de color azul celeste con un sol amarillo en la esquina derecha, y dos franjas horizontales inferiores de color verde y amarillo.",
        text_en: "This landlocked country in East-Central Africa borders Burundi, the Democratic Republic of the Congo, Tanzania, and Uganda. Its capital is Kigali. The flag features a wide horizontal top stripe of sky blue with a yellow sun in the right corner, and two lower horizontal stripes of green and yellow.",
      },
    ],
  },
  {
    id: 170,
    name: "Samoa",
    name_en: "Samoa",
    hints: [
      {
        difficulty: "expert",
        text_es: "Anteriormente conocida como Samoa Alemana y luego Samoa Occidental, fue el primer país polinesio en obtener la independencia en mil novecientos sesenta y dos, marcando un hito en la descolonización de la región.",
        text_en: "Formerly known as German Samoa and then Western Samoa, it was the first Polynesian country to gain independence in nineteen sixty-two, marking a milestone in the region's decolonization.",
      },
      {
        difficulty: "hard",
        text_es: "Este país insular fue uno de los pioneros en cambiar su huso horario para alinearse mejor con sus principales socios comerciales en Asia y Australasia, adelantando un día completo a finales de dos mil once.",
        text_en: "This island country was one of the first to change its time zone to better align with its main trading partners in Asia and Australasia, effectively skipping a full day at the end of two thousand eleven.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus playas de arena blanca, cascadas tropicales y los espectaculares pozos marinos de To Sua, este país es un destino popular para el ecoturismo y la exploración de arrecifes de coral. Su cultura está profundamente arraigada en el 'Fa'a Samoa', la forma de vida tradicional.",
        text_en: "Famous for its white sandy beaches, tropical waterfalls, and the spectacular To Sua Ocean Trench, this country is a popular destination for ecotourism and coral reef exploration. Its culture is deeply rooted in 'Fa'a Samoa', the traditional way of life.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en Oceanía, este país se encuentra al este de Fiyi y al noreste de Tonga. Su capital es Apia. La bandera es de color rojo con un cantón azul en la parte superior izquierda que contiene la Cruz del Sur formada por cinco estrellas blancas.",
        text_en: "Located in Oceania, this country is east of Fiji and northeast of Tonga. Its capital is Apia. The flag is red with a blue canton in the upper hoist containing the Southern Cross constellation formed by five white stars.",
      },
    ],
  },
  {
    id: 171,
    name: "San Cristóbal y Nieves",
    name_en: "Saint Kitts and Nevis",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único estado soberano del Caribe Oriental que incluye una laguna de agua dulce en su territorio, una característica poco común para islas volcánicas.",
        text_en: "It is the only sovereign state in the Eastern Caribbean to include a freshwater lagoon within its territory, a rare feature for volcanic islands.",
      },
      {
        difficulty: "hard",
        text_es: "Hasta el año mil novecientos ochenta y tres, formó parte de un estado asociado con otra pequeña isla caribeña, Anguila, bajo la administración británica.",
        text_en: "Until nineteen eighty-three, it was part of an associated state with another small Caribbean island, Anguilla, under British administration.",
      },
      {
        difficulty: "medium",
        text_es: "Su cultura está profundamente ligada al cricket, siendo uno de los países con mayor éxito per cápita en este deporte a nivel regional. Los monos verdes son una especie icónica que abunda en sus islas.",
        text_en: "Its culture is deeply tied to cricket, making it one of the most successful countries per capita in the sport regionally. Green monkeys are an iconic species that abound on its islands.",
      },
      {
        difficulty: "easy",
        text_es: "Está situado en el mar Caribe, en el grupo de las Islas de Barlovento. Su capital es Basseterre y sus islas vecinas más cercanas incluyen Sint Eustatius y Saba.",
        text_en: "It is located in the Caribbean Sea, in the Leeward Islands group. Its capital is Basseterre, and its closest neighboring islands include Sint Eustatius and Saba.",
      },
    ],
  },
  {
    id: 172,
    name: "San Marino",
    name_en: "San Marino",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su constitución de mil seiscientos es la más antigua del mundo aún en vigor. Mantiene una tradición única de jefes de estado duales, los Capitanes Regentes, que sirven mandatos de seis meses.",
        text_en: "Its constitution from sixteen hundred is the oldest still in effect worldwide. It maintains a unique tradition of dual heads of state, the Captains Regent, who serve six-month terms.",
      },
      {
        difficulty: "hard",
        text_es: "Es una república parlamentaria unitaria. Durante la Segunda Guerra Mundial, se declaró neutral y acogió a miles de refugiados, a pesar de su pequeño tamaño.",
        text_en: "It is a unitary parliamentary republic. During World War Two, it declared neutrality and harbored thousands of refugees, despite its small size.",
      },
      {
        difficulty: "medium",
        text_es: "Está enclavado en las montañas, ofreciendo vistas panorámicas desde sus históricas fortificaciones. Su economía se basa en las finanzas, el turismo y la fabricación de cerámica y sellos.",
        text_en: "It is nestled in the mountains, offering panoramic views from its historic fortifications. Its economy is based on finance, tourism, and the manufacture of ceramics and stamps.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el sur de Europa, completamente rodeado por Italia. Su capital también se llama San Marino.",
        text_en: "It is located in Southern Europe, completely surrounded by Italy. Its capital is also called San Marino.",
      },
    ],
  },
  {
    id: 173,
    name: "San Vicente y las Granadinas",
    name_en: "Saint Vincent and the Grenadines",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el lugar de la última erupción volcánica explosiva registrada en la cuenca del Caribe, del volcán La Soufrière en dos mil veintiuno, afectando gravemente la geografía y la vida de sus habitantes.",
        text_en: "It was the site of the last recorded explosive volcanic eruption in the Caribbean basin, from La Soufrière volcano in two thousand twenty-one, severely impacting its geography and inhabitants' lives.",
      },
      {
        difficulty: "hard",
        text_es: "Es una monarquía constitucional parlamentaria. En el siglo dieciocho, fue escenario de conflictos entre colonizadores europeos y los garífunas, un pueblo con herencia africana y caribeña.",
        text_en: "It is a parliamentary constitutional monarchy. In the eighteenth century, it was a scene of conflicts between European colonizers and the Garifuna people, who have African and Caribbean heritage.",
      },
      {
        difficulty: "medium",
        text_es: "Compuesto por una isla principal y una cadena de islas más pequeñas, es un destino popular para el buceo y la navegación. Su flora incluye el Loro del Amazonas, endémico de sus bosques tropicales.",
        text_en: "Composed of a main island and a chain of smaller islands, it is a popular destination for diving and sailing. Its flora includes the Amazon Parrot, endemic to its tropical forests.",
      },
      {
        difficulty: "easy",
        text_es: "Está situado en las Antillas Menores, en el mar Caribe. Su capital es Kingstown y comparte fronteras marítimas con Santa Lucía al norte y Granada al sur.",
        text_en: "It is located in the Lesser Antilles, in the Caribbean Sea. Its capital is Kingstown and it shares maritime borders with Saint Lucia to the north and Grenada to the south.",
      },
    ],
  },
  {
    id: 174,
    name: "Santa Lucía",
    name_en: "Saint Lucia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su distintivo sistema de Pitons, dos picos volcánicos gemelos, fueron designados Patrimonio de la Humanidad por la UNESCO en dos mil cuatro, reconociendo su valor geológico y ecológico único.",
        text_en: "Its distinctive Pitons system, two twin volcanic peaks, were designated a UNESCO World Heritage site in two thousand four, recognizing their unique geological and ecological value.",
      },
      {
        difficulty: "hard",
        text_es: "Fue disputado catorce veces entre Francia y Gran Bretaña durante los siglos diecisiete y dieciocho, antes de la abolición de la esclavitud en mil ochocientos treinta y cuatro. Su idioma oficial es el inglés, pero el patois criollo es ampliamente hablado.",
        text_en: "It was contested fourteen times between France and Great Britain during the seventeenth and eighteenth centuries, before the abolition of slavery in eighteen thirty-four. Its official language is English, but Creole Patois is widely spoken.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus playas volcánicas y arrecifes de coral, ofrece una rica biodiversidad marina. Es el hogar del loro de la isla, una especie en peligro de extinción y símbolo nacional.",
        text_en: "Famous for its volcanic beaches and coral reefs, it offers rich marine biodiversity. It is home to the island's parrot, an endangered species and national symbol.",
      },
      {
        difficulty: "easy",
        text_es: "Es una isla en el Caribe, al sur de Martinica y al norte de San Vicente y las Granadinas. Su capital es Castries y tiene una bandera azul con un triángulo amarillo y negro en el centro.",
        text_en: "It is an island in the Caribbean, south of Martinique and north of Saint Vincent and the Grenadines. Its capital is Castries and it has a blue flag with a yellow and black triangle in the center.",
      },
    ],
  },
  {
    id: 175,
    name: "Santo Tomé y Príncipe",
    name_en: "Sao Tome and Principe",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su ubicación en el ecuador le valió ser un punto estratégico para el estudio de la gravedad durante eclipses solares totales, como la expedición de Arthur Eddington en mil novecientos diecinueve.",
        text_en: "Its location on the equator made it a strategic point for studying gravity during total solar eclipses, such as Arthur Eddington's expedition in nineteen nineteen.",
      },
      {
        difficulty: "hard",
        text_es: "Es la segunda nación menos poblada de África. Fue la primera colonia portuguesa en el África subsahariana en obtener la independencia en mil novecientos setenta y cinco, tras un largo período de cultivo de cacao y azúcar.",
        text_en: "It is the second least populated nation in Africa. It was the first Portuguese colony in sub-Saharan Africa to gain independence in nineteen seventy-five, after a long period of cocoa and sugar cultivation.",
      },
      {
        difficulty: "medium",
        text_es: "Este archipiélago volcánico es conocido como las 'Islas de Chocolate' debido a su fuerte producción de cacao. La torre de roca 'Pico Cão Grande' es un símbolo icónico de su paisaje.",
        text_en: "This volcanic archipelago is known as the 'Chocolate Islands' due to its strong cocoa production. The 'Pico Cão Grande' rock tower is an iconic symbol of its landscape.",
      },
      {
        difficulty: "easy",
        text_es: "Está situado en el Golfo de Guinea, en África Occidental, al noroeste de Gabón. Su capital es Santo Tomé y no tiene fronteras terrestres, siendo un país insular.",
        text_en: "It is located in the Gulf of Guinea, in West Africa, northwest of Gabon. Its capital is São Tomé and it has no land borders, being an island nation.",
      },
    ],
  },
  {
    id: 176,
    name: "Seychelles",
    name_en: "Seychelles",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el país menos poblado de África, y su flora y fauna endémica incluye la medusa de mar y la palmera de coco de mar.",
        text_en: "It is Africa's least populous country, and its endemic flora and fauna include the jellyfish tree and the coco de mer palm.",
      },
      {
        difficulty: "hard",
        text_es: "Históricamente, estuvo bajo dominio francés y luego británico. Es conocido por su estatus de paraíso fiscal y por albergar una base de monitoreo satelital operada por una agencia espacial extranjera.",
        text_en: "Historically, it was under French and then British rule. It is known for its tax haven status and for hosting a satellite monitoring station operated by a foreign space agency.",
      },
      {
        difficulty: "medium",
        text_es: "Este archipiélago está compuesto por aproximadamente ciento quince islas de granito y coral en el Océano Índico. Alberga playas de arena blanca y formaciones rocosas únicas.",
        text_en: "This archipelago is composed of approximately one hundred and fifteen granite and coral islands in the Indian Ocean. It boasts white sandy beaches and unique rock formations.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el este de África, en el Océano Índico, al noreste de Madagascar. Su capital es Victoria y su bandera tiene cinco franjas oblicuas de diferentes colores: azul, amarillo, rojo, blanco y verde.",
        text_en: "It is located in East Africa, in the Indian Ocean, northeast of Madagascar. Its capital is Victoria, and its flag features five oblique stripes of different colors: blue, yellow, red, white, and green.",
      },
    ],
  },
  {
    id: 177,
    name: "Sierra Leona",
    name_en: "Sierra Leone",
    hints: [
      {
        difficulty: "expert",
        text_es: "Posee uno de los puertos naturales más grandes del mundo, el Estuario de Freetown, que históricamente fue un punto clave para el comercio y el reasentamiento de esclavos liberados.",
        text_en: "It possesses one of the world's largest natural harbors, the Freetown Estuary, which historically was a key point for trade and the resettlement of freed slaves.",
      },
      {
        difficulty: "hard",
        text_es: "Fue una colonia británica fundada para esclavos liberados y ha luchado con los legados de conflictos por recursos naturales como los diamantes. Su idioma oficial es el inglés, pero el krio es ampliamente hablado.",
        text_en: "It was a British colony founded for freed slaves and has struggled with the legacies of conflicts over natural resources like diamonds. Its official language is English, but Krio is widely spoken.",
      },
      {
        difficulty: "medium",
        text_es: "Este país de África Occidental es conocido por sus playas atlánticas, sus bosques tropicales y su historia ligada al comercio de diamantes, que ha sido tanto una bendición como una maldición.",
        text_en: "This West African country is known for its Atlantic beaches, tropical rainforests, and a history tied to diamond trade, which has been both a blessing and a curse.",
      },
      {
        difficulty: "easy",
        text_es: "Se localiza en África Occidental, limitando con Guinea al norte y al este, y con Liberia al sureste. Su capital es Freetown y su bandera consta de tres franjas horizontales de igual tamaño: verde en la parte superior, blanca en el medio y azul en la parte inferior.",
        text_en: "It is located in West Africa, bordering Guinea to the north and east, and Liberia to the southeast. Its capital is Freetown, and its flag consists of three horizontal stripes of equal size: green at the top, white in the middle, and blue at the bottom.",
      },
    ],
  },
  {
    id: 178,
    name: "Siria",
    name_en: "Syria",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el hogar de la antigua ciudad de Mari, una de las ciudades-estado más importantes de Mesopotamia, conocida por sus archivos cuneiformes que revelan aspectos de la vida en el tercer milenio a.C.",
        text_en: "It was home to the ancient city of Mari, one of Mesopotamia's most important city-states, known for its cuneiform archives revealing aspects of life in the third millennium BCE.",
      },
      {
        difficulty: "hard",
        text_es: "Ha sido un centro de civilizaciones antiguas, incluyendo los arameos, los asirios y los romanos. Su historia moderna ha estado marcada por un complejo sistema político de partido único y una prolongada guerra civil.",
        text_en: "It has been a center of ancient civilizations, including the Arameans, Assyrians, and Romans. Its modern history has been marked by a complex one-party political system and a prolonged civil war.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en el Creciente Fértil, este país del Medio Oriente tiene una rica herencia cultural con numerosos sitios históricos. Es conocido por su arquitectura antigua y su gastronomía mediterránea.",
        text_en: "Located in the Fertile Crescent, this Middle Eastern country has a rich cultural heritage with numerous historical sites. It is known for its ancient architecture and Mediterranean cuisine.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el oeste de Asia, limitando con Líbano y el Mar Mediterráneo al oeste, Turquía al norte, Irak al este, Jordania al sur e Israel al suroeste. Su capital es Damasco y su bandera presenta tres franjas horizontales de igual tamaño (rojo, blanco y negro) con dos estrellas verdes en la franja blanca.",
        text_en: "It is located in Western Asia, bordering Lebanon and the Mediterranean Sea to the west, Turkey to the north, Iraq to the east, Jordan to the south, and Israel to the southwest. Its capital is Damascus, and its flag features three horizontal stripes of equal size (red, white, and black) with two green stars on the white stripe.",
      },
    ],
  },
  {
    id: 179,
    name: "Somalia",
    name_en: "Somalia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su costa es la más larga de África continental. Durante la antigüedad, fue un centro comercial vital, comerciando mirra, incienso y especias con el antiguo Egipto y la India.",
        text_en: "Its coastline is the longest on mainland Africa. In ancient times, it was a vital trading center, trading myrrh, frankincense, and spices with ancient Egypt and India.",
      },
      {
        difficulty: "hard",
        text_es: "Este país, con una herencia de sultanatos y dominio colonial italiano y británico, ha enfrentado décadas de inestabilidad política y es conocido por su sistema de justicia tradicional basado en clanes, el Xeer.",
        text_en: "This country, with a heritage of sultanates and Italian and British colonial rule, has faced decades of political instability and is known for its traditional clan-based justice system, Xeer.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en el Cuerno de África, este país es predominantemente desértico o semiárido. Es famoso por sus camellos y su té dulce con leche y jengibre.",
        text_en: "Located in the Horn of Africa, this country is predominantly desert or semi-arid. It is famous for its camels and its sweet milk tea with ginger.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el Cuerno de África, en el este de África. Limita con Yibuti, Etiopía y Kenia, y tiene una extensa costa en el Océano Índico. Su capital es Mogadiscio y su bandera es de color azul claro con una estrella blanca de cinco puntas en el centro.",
        text_en: "It is located in the Horn of Africa, in East Africa. It borders Djibouti, Ethiopia, and Kenya, and has an extensive coastline on the Indian Ocean. Its capital is Mogadishu, and its flag is light blue with a white five-pointed star in the center.",
      },
    ],
  },
  {
    id: 180,
    name: "Sudán",
    name_en: "Sudan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Alberga más pirámides que Egipto, construidas por la civilización Kushita. Muchos de estos sitios arqueológicos se encuentran en la región de Nubia, a lo largo del Nilo.",
        text_en: "It hosts more pyramids than Egypt, built by the Kushite civilization. Many of these archaeological sites are found in the Nubian region, along the Nile.",
      },
      {
        difficulty: "hard",
        text_es: "Fue colonizado por el Imperio Otomano y posteriormente un condominio anglo-egipcio. Su cultura está profundamente influenciada por la confluencia de las tradiciones árabes y africanas subsaharianas, y ha enfrentado divisiones históricas.",
        text_en: "It was colonized by the Ottoman Empire and later an Anglo-Egyptian condominium. Its culture is deeply influenced by the confluence of Arab and Sub-Saharan African traditions, and it has faced historical divisions.",
      },
      {
        difficulty: "medium",
        text_es: "Este país del noreste de África es cruzado por el Nilo, que se divide en el Nilo Blanco y el Nilo Azul, uniéndose en su capital. Es conocido por sus vastas sabanas y desiertos.",
        text_en: "This Northeast African country is traversed by the Nile, which divides into the White Nile and the Blue Nile, joining in its capital city. It is known for its vast savannas and deserts.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el noreste de África, limitando con Egipto, el Mar Rojo, Eritrea, Etiopía, Sudán del Sur, la República Centroafricana, Chad y Libia. Su capital es Jartum, y su bandera es un tricolor de tres franjas horizontales (rojo, blanco, negro) con un triángulo verde en el lado del mástil.",
        text_en: "It is located in Northeast Africa, bordering Egypt, the Red Sea, Eritrea, Ethiopia, South Sudan, the Central African Republic, Chad, and Libya. Its capital is Khartoum, and its flag is a tricolor of three horizontal stripes (red, white, black) with a green triangle on the hoist side.",
      },
    ],
  },
  {
    id: 181,
    name: "Sudán del Sur",
    name_en: "South Sudan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el miembro más reciente de las Naciones Unidas, uniéndose a la organización en dos mil once. Su independencia fue el resultado de un acuerdo de paz que puso fin a décadas de conflicto en la región.",
        text_en: "It is the newest member of the United Nations, joining the organization in two thousand eleven. Its independence was the result of a peace agreement that ended decades of conflict in the region.",
      },
      {
        difficulty: "hard",
        text_es: "Su economía depende en gran medida de las vastas reservas de petróleo, que constituyen la mayor parte de sus exportaciones. Sin embargo, carece de infraestructura para refinarlo y debe usar oleoductos de un país vecino.",
        text_en: "Its economy largely depends on vast oil reserves, which constitute the majority of its exports. However, it lacks refining infrastructure and must use pipelines from a neighboring country.",
      },
      {
        difficulty: "medium",
        text_es: "El Nilo Blanco atraviesa gran parte de su territorio. Es una de las regiones más biodiversas de África, albergando grandes migraciones de animales salvajes, solo superadas por las del Serengeti.",
        text_en: "The White Nile flows through a large part of its territory. It is one of the most biodiverse regions in Africa, hosting large wildlife migrations, second only to those of the Serengeti.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en el noreste de África. Sus vecinos incluyen Etiopía al este, Kenia y Uganda al sureste, la República Democrática del Congo al suroeste, la República Centroafricana al oeste y un país con el que comparte nombre al norte. Su capital es Yuba.",
        text_en: "It is located in Northeast Africa. Its neighbors include Ethiopia to the east, Kenya and Uganda to the southeast, the Democratic Republic of Congo to the southwest, the Central African Republic to the west, and a country with which it shares a name to the north. Its capital is Juba.",
      },
    ],
  },
  {
    id: 182,
    name: "Surinam",
    name_en: "Suriname",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país fue originalmente colonizado por los ingleses, pero fue cedido a los neerlandeses a cambio de la isla de Manhattan en el siglo diecisiete. Este intercambio marcó su destino lingüístico y cultural.",
        text_en: "This country was originally colonized by the English, but was ceded to the Dutch in exchange for Manhattan Island in the seventeenth century. This exchange shaped its linguistic and cultural destiny.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único estado soberano en América donde el neerlandés es el idioma oficial. Su población es un crisol de culturas, incluyendo descendientes de esclavos africanos, inmigrantes de la India y Java, y poblaciones indígenas.",
        text_en: "It is the only sovereign state in the Americas where Dutch is the official language. Its population is a melting pot of cultures, including descendants of African slaves, immigrants from India and Java, and indigenous populations.",
      },
      {
        difficulty: "medium",
        text_es: "Con una cobertura forestal de más del noventa por ciento de su territorio, es uno de los países con mayor porcentaje de bosque virgen del mundo. Alberga una gran parte de la selva amazónica.",
        text_en: "With forest cover over ninety percent of its territory, it is one of the countries with the highest percentage of pristine forest in the world. It hosts a large part of the Amazon rainforest.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en la costa noreste de Sudamérica. Limita con Guyana al oeste, la Guayana Francesa al este y Brasil al sur. Su capital es Paramaribo.",
        text_en: "It is located on the northeastern coast of South America. It borders Guyana to the west, French Guiana to the east, and Brazil to the south. Its capital is Paramaribo.",
      },
    ],
  },
  {
    id: 183,
    name: "Taiwán",
    name_en: "Taiwan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Durante la Segunda Guerra Mundial, este territorio fue un importante foco de conflicto y una posesión clave para el Imperio del Japón. Tras la derrota japonesa, fue devuelto a la República de China.",
        text_en: "During World War Two, this territory was a major focal point of conflict and a key possession for the Empire of Japan. After the Japanese defeat, it was returned to the Republic of China.",
      },
      {
        difficulty: "hard",
        text_es: "Ha logrado una transición democrática exitosa y es conocido por su robusta economía basada en la alta tecnología. Mantiene una relación compleja con una gran potencia continental que lo considera parte de su territorio.",
        text_en: "It has achieved a successful democratic transition and is known for its robust high-tech economy. It maintains a complex relationship with a large continental power that considers it part of its territory.",
      },
      {
        difficulty: "medium",
        text_es: "Es famoso por sus montañas escarpadas, con más de doscientos picos que superan los tres mil metros de altura. Su gastronomía es célebre por sus mercados nocturnos y platos como el 'bubble tea'.",
        text_en: "It is famous for its rugged mountains, with over two hundred peaks exceeding three thousand meters in height. Its cuisine is renowned for its night markets and dishes like 'bubble tea'.",
      },
      {
        difficulty: "easy",
        text_es: "Es una isla en Asia Oriental, ubicada al sureste de la China continental. La capital es Taipéi, una ciudad bulliciosa con el icónico edificio Taipei mil uno. La bandera tiene un campo rojo con un sol blanco en un cantón azul.",
        text_en: "It is an island in East Asia, located southeast of mainland China. The capital is Taipei, a bustling city featuring the iconic Taipei One Zero One building. Its flag features a red field with a white sun in a blue canton.",
      },
    ],
  },
  {
    id: 184,
    name: "Tanzania",
    name_en: "Tanzania",
    hints: [
      {
        difficulty: "expert",
        text_es: "Las excavaciones en la Garganta de Olduvai, un sitio clave en este país, han revelado algunos de los fósiles de homínidos más antiguos y significativos, proporcionando pruebas cruciales sobre la evolución humana.",
        text_en: "Excavations in Olduvai Gorge, a key site in this country, have revealed some of the oldest and most significant hominid fossils, providing crucial evidence for human evolution.",
      },
      {
        difficulty: "hard",
        text_es: "Este país fue el hogar del primer presidente de un estado africano recién independizado, Julius Nyerere, quien desarrolló una política de socialismo africano conocida como 'Ujamaa'. Su unión con la isla de Zanzíbar creó su nombre actual.",
        text_en: "This country was home to the first president of a newly independent African state, Julius Nyerere, who developed a policy of African socialism known as 'Ujamaa'. Its union with the island of Zanzibar created its current name.",
      },
      {
        difficulty: "medium",
        text_es: "Alberga la montaña más alta de África, un volcán inactivo con tres conos. También es famoso por extensas llanuras que son el escenario de la Gran Migración de vida salvaje, un espectáculo natural impresionante.",
        text_en: "It hosts the highest mountain in Africa, a dormant volcano with three cones. It is also famous for vast plains that are the scene of the Great Wildlife Migration, a breathtaking natural spectacle.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en África Oriental, en la costa del Océano Índico. Limita con Kenia y Uganda al norte, Ruanda, Burundi y la República Democrática del Congo al oeste, y Zambia, Malawi y Mozambique al sur. Su capital es Dodoma, aunque Dar es Salaam sigue siendo su ciudad más grande.",
        text_en: "It is located in East Africa, on the Indian Ocean coast. It borders Kenya and Uganda to the north, Rwanda, Burundi, and the Democratic Republic of Congo to the west, and Zambia, Malawi, and Mozambique to the south. Its capital is Dodoma, though Dar es Salaam remains its largest city.",
      },
    ],
  },
  {
    id: 185,
    name: "Tayikistán",
    name_en: "Tajikistan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es el único país en Asia Central cuya lengua oficial desciende del persa, a diferencia de las lenguas túrquicas dominantes en la región. Esto refleja una herencia cultural distintiva y vínculos históricos con Persia.",
        text_en: "It is the only country in Central Asia whose official language descends from Persian, unlike the dominant Turkic languages in the region. This reflects a distinct cultural heritage and historical ties to Persia.",
      },
      {
        difficulty: "hard",
        text_es: "Fue una de las repúblicas soviéticas menos desarrolladas antes de su independencia, y sufrió una devastadora guerra civil en la década de los noventa. Hoy en día, su economía se basa en la agricultura y las remesas de trabajadores en el extranjero.",
        text_en: "It was one of the least developed Soviet republics before its independence, and suffered a devastating civil war in the nineties. Today, its economy relies on agriculture and remittances from workers abroad.",
      },
      {
        difficulty: "medium",
        text_es: "Este país es conocido por su terreno extremadamente montañoso, dominado por la cordillera del Pamir, a menudo llamada 'el techo del mundo'. Contiene picos que superan los siete mil metros.",
        text_en: "This country is known for its extremely mountainous terrain, dominated by the Pamir mountain range, often called 'the roof of the world'. It contains peaks exceeding seven thousand meters.",
      },
      {
        difficulty: "easy",
        text_es: "Se encuentra en Asia Central. Limita con Kirguistán al norte, Uzbekistán al oeste, Afganistán al sur y China al este. Su capital es Dusambé. La bandera tiene tres franjas horizontales: rojo, blanco y verde, con una corona dorada y siete estrellas en el centro de la franja blanca.",
        text_en: "It is located in Central Asia. It borders Kyrgyzstan to the north, Uzbekistan to the west, Afghanistan to the south, and China to the east. Its capital is Dushanbe. The flag has three horizontal stripes: red, white, and green, with a golden crown and seven stars in the center of the white stripe.",
      },
    ],
  },
  {
    id: 186,
    name: "Uganda",
    name_en: "Uganda",
    hints: [
      {
        difficulty: "expert",
        text_es: "Una de las rutas más cortas y elevadas del ferrocarril de la Luna, una línea que hipotéticamente podría construirse para conectar varias zonas montañosas de África oriental, cruzaría su territorio, ofreciendo vistas espectaculares de sus picos y valles.",
        text_en: "One of the shortest and highest routes of the hypothetical Moon Railway, a line that could connect various mountainous areas of East Africa, would traverse its territory, offering spectacular views of its peaks and valleys.",
      },
      {
        difficulty: "hard",
        text_es: "Tras la independencia, fue testigo de un periodo de gran inestabilidad política, marcado por la dictadura de un líder conocido por sus crueles excesos y que inspiró varias obras literarias y cinematográficas.",
        text_en: "Following independence, it witnessed a period of significant political instability, marked by the dictatorship of a leader known for his cruel excesses, who inspired several literary and cinematic works.",
      },
      {
        difficulty: "medium",
        text_es: "Es conocida como la 'Perla de África', una descripción popularizada por Winston Churchill. Su geografía incluye el lago Victoria, el segundo lago de agua dulce más grande del mundo.",
        text_en: "It is known as the 'Pearl of Africa', a description popularized by Winston Churchill. Its geography includes Lake Victoria, the world's second-largest freshwater lake by surface area.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en África Oriental, limitando con Sudán del Sur al norte, Kenia al este, Tanzania y Ruanda al sur, y la República Democrática del Congo al oeste. Su capital es Kampala y su bandera tiene seis franjas horizontales de colores negro, amarillo y rojo, con una grulla coronada en el centro.",
        text_en: "This country is located in East Africa, bordering South Sudan to the north, Kenya to the east, Tanzania and Rwanda to the south, and the Democratic Republic of Congo to the west. Its capital is Kampala, and its flag features six horizontal stripes of black, yellow, and red, with a grey crowned crane at the center.",
      },
    ],
  },
  {
    id: 187,
    name: "Uzbekistán",
    name_en: "Uzbekistan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Fue el lugar de nacimiento de Abu Rayhan al-Biruni, un erudito polímata del siglo once que realizó contribuciones significativas en matemáticas, astronomía, física y ciencias de la Tierra, calculando el radio terrestre con una precisión notable.",
        text_en: "It was the birthplace of Abu Rayhan al-Biruni, an eleventh-century polymath scholar who made significant contributions in mathematics, astronomy, physics, and earth sciences, calculating the Earth's radius with remarkable accuracy.",
      },
      {
        difficulty: "hard",
        text_es: "Este país de Asia Central es el único doblemente sin litoral, lo que significa que no solo no tiene acceso al mar, sino que todos sus países vecinos tampoco lo tienen. Fue una parte crucial de la Ruta de la Seda.",
        text_en: "This Central Asian country is one of only two doubly landlocked countries, meaning it not only has no access to the sea, but all its neighboring countries are also landlocked. It was a crucial part of the Silk Road.",
      },
      {
        difficulty: "medium",
        text_es: "Sus ciudades antiguas, como Samarcanda y Bujará, son famosas por su arquitectura islámica medieval, incluyendo madrasas, mezquitas y mausoleos decorados con intrincados azulejos azules.",
        text_en: "Its ancient cities, such as Samarkand and Bukhara, are renowned for their medieval Islamic architecture, including madrasahs, mosques, and mausoleums adorned with intricate blue tiles.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en Asia Central, este país limita con Kazajistán al norte, Kirguistán y Tayikistán al este, Afganistán al sur y Turkmenistán al suroeste. Su capital es Tashkent y su bandera consta de tres franjas horizontales de azul claro, blanco y verde, con un creciente lunar y doce estrellas en la franja superior.",
        text_en: "Located in Central Asia, this country borders Kazakhstan to the north, Kyrgyzstan and Tajikistan to the east, Afghanistan to the south, and Turkmenistan to the southwest. Its capital is Tashkent, and its flag features three horizontal stripes of light blue, white, and green, with a crescent moon and twelve stars in the upper stripe.",
      },
    ],
  },
  {
    id: 188,
    name: "Vanuatu",
    name_en: "Vanuatu",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los habitantes de la isla de Tanna son conocidos por el culto al cargo de John Frum, una religión sincrética que venera a una figura mítica estadounidense de la Segunda Guerra Mundial, anticipando su regreso y la llegada de bienes materiales.",
        text_en: "The inhabitants of Tanna Island are known for the John Frum cargo cult, a syncretic religion that venerates a mythical American figure from World War Two, anticipating his return and the arrival of material goods.",
      },
      {
        difficulty: "hard",
        text_es: "Fue un condominio anglo-francés, donde la administración y la soberanía se compartían entre Gran Bretaña y Francia, lo que resultó en sistemas educativos, legales y políticos duplicados y a menudo contradictorios.",
        text_en: "It was an Anglo-French Condominium, where administration and sovereignty were shared between Britain and France, resulting in duplicated and often contradictory educational, legal, and political systems.",
      },
      {
        difficulty: "medium",
        text_es: "Este archipiélago oceánico es famoso por sus volcanes activos, incluyendo el Yasur, uno de los volcanes más accesibles del mundo. También se practican deportes de riesgo como el 'naghol' o salto terrestre, que inspiró el puenting.",
        text_en: "This oceanic archipelago is famous for its active volcanoes, including Mount Yasur, one of the most accessible volcanoes in the world. Extreme sports like 'naghol' or land diving, which inspired bungee jumping, are also practiced here.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en Oceanía, en el Pacífico Sur, al este de Australia. Es un archipiélago sin fronteras terrestres. Su capital es Port Vila y su bandera presenta un triángulo negro con un colmillo de jabalí y dos hojas de helecho, sobre un fondo dividido en una 'Y' dorada que separa franjas rojas, verdes y negras.",
        text_en: "This country is located in Oceania, in the South Pacific, east of Australia. It is an archipelago with no land borders. Its capital is Port Vila, and its flag features a black triangle with a boar's tusk and two fern leaves, set against a background divided by a golden 'Y' separating red, green, and black stripes.",
      },
    ],
  },
  {
    id: 189,
    name: "Vaticano",
    name_en: "Vatican City",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su jurisdicción incluye una estación de ferrocarril, la Stazione Vaticana, que aunque raramente se usa para pasajeros, fue diseñada para facilitar el transporte de bienes y personalidades importantes directamente a su territorio.",
        text_en: "Its jurisdiction includes a railway station, Stazione Vaticana, which, though rarely used for passengers, was designed to facilitate the transport of goods and important figures directly into its territory.",
      },
      {
        difficulty: "hard",
        text_es: "Este es el estado soberano más pequeño del mundo, tanto en área como en población. Su sistema legal se basa en el derecho canónico, y su jefe de estado es también el líder espiritual de más de mil millones de personas.",
        text_en: "This is the world's smallest sovereign state, both in area and population. Its legal system is based on Canon Law, and its head of state is also the spiritual leader of over one billion people.",
      },
      {
        difficulty: "medium",
        text_es: "Es un enclave dentro de una única ciudad capital de otro país europeo. Alberga la Basílica de San Pedro y la Capilla Sixtina, famosas por sus obras de arte renacentistas, incluyendo los frescos de Miguel Ángel.",
        text_en: "It is an enclave within a single capital city of another European country. It houses St. Peter's Basilica and the Sistine Chapel, famous for their Renaissance artworks, including Michelangelo's frescoes.",
      },
      {
        difficulty: "easy",
        text_es: "Este microestado se encuentra en el continente europeo, específicamente dentro de Roma, la capital de Italia, con la que comparte todas sus fronteras. Su capital es la Ciudad del Vaticano y su bandera es cuadrada, con dos bandas verticales de color amarillo y blanco, y las llaves de San Pedro y la tiara papal en la banda blanca.",
        text_en: "This microstate is located on the European continent, specifically within Rome, the capital of Italy, with which it shares all its borders. Its capital is Vatican City, and its flag is square, with two vertical bands of yellow and white, and the Keys of Saint Peter and the papal tiara on the white band.",
      },
    ],
  },
  {
    id: 190,
    name: "Yemen",
    name_en: "Yemen",
    hints: [
      {
        difficulty: "expert",
        text_es: "La antigua ciudad de Shibam, conocida como el 'Manhattan del desierto', presenta rascacielos de barro de hasta ocho pisos de altura construidos en el siglo dieciséis, un ejemplo temprano de planificación urbana vertical.",
        text_en: "The ancient city of Shibam, known as the 'Manhattan of the Desert,' features eight-story high mud-brick skyscrapers built in the sixteenth century, an early example of vertical urban planning.",
      },
      {
        difficulty: "hard",
        text_es: "Es el único país de la Península Arábiga que fue república durante gran parte de su historia moderna, a diferencia de sus vecinos monárquicos. Ha sido durante mucho tiempo un centro de producción y consumo de qat.",
        text_en: "It is the only country on the Arabian Peninsula that has been a republic for much of its modern history, unlike its monarchical neighbors. It has long been a center for the production and consumption of qat.",
      },
      {
        difficulty: "medium",
        text_es: "Ubicado en el extremo sur de la Península Arábiga, es famoso por su arquitectura de ladrillo de barro y piedra, así como por la isla de Socotra, un sitio del Patrimonio Mundial de la UNESCO conocido por su biodiversidad única y el 'árbol de sangre de drago'.",
        text_en: "Located on the southern tip of the Arabian Peninsula, it is renowned for its mud-brick and stone architecture, as well as the island of Socotra, a UNESCO World Heritage site known for its unique biodiversity and the 'dragon's blood tree'.",
      },
      {
        difficulty: "easy",
        text_es: "Este país se encuentra en el sudoeste de Asia, limitando con Arabia Saudita al norte y Omán al noreste, con costas en el Mar Rojo, el Mar Arábigo y el Golfo de Adén. Su capital es Saná y su bandera es un tricolor horizontal de rojo, blanco y negro.",
        text_en: "This country is located in Southwest Asia, bordering Saudi Arabia to the north and Oman to the northeast, with coastlines on the Red Sea, the Arabian Sea, and the Gulf of Aden. Its capital is Sana'a, and its flag is a horizontal tricolor of red, white, and black.",
      },
    ],
  },
  {
    id: 191,
    name: "Timor Oriental",
    name_en: "East Timor",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este archipiélago ostenta el estatus de la nación con la mayoría de su población de religión católica más joven del mundo, con una edad mediana de aproximadamente dieciocho años.",
        text_en: "This archipelago holds the status as the nation with the youngest majority Catholic population in the world, with a median age of approximately eighteen years old.",
      },
      {
        difficulty: "hard",
        text_es: "Tras siglos de colonialismo y una invasión militar que duró más de dos décadas, su independencia fue restaurada en el año dos mil dos. Es uno de los dos países predominantemente católicos del Sudeste Asiático.",
        text_en: "After centuries of colonialism and a military invasion lasting over two decades, its independence was restored in two thousand two. It is one of two predominantly Catholic countries in Southeast Asia.",
      },
      {
        difficulty: "medium",
        text_es: "La caficultura es fundamental para su economía, siendo el café arábica una exportación clave. Sus aguas albergan una de las mayores biodiversidades marinas del mundo.",
        text_en: "Coffee cultivation is central to its economy, with Arabica coffee being a key export. Its waters harbor some of the world's highest marine biodiversity.",
      },
      {
        difficulty: "easy",
        text_es: "Ubicado en el Sudeste Asiático, en la parte oriental de una isla, se encuentra al noroeste de Australia. Su capital es Dili.",
        text_en: "Located in Southeast Asia, on the eastern part of an island, it lies northwest of Australia. Its capital city is Dili.",
      },
    ],
  },
  {
    id: 192,
    name: "Togo",
    name_en: "Togo",
    hints: [
      {
        difficulty: "expert",
        text_es: "El lago Togo, una laguna en la costa, tiene un papel importante en la economía local, ya que la pesca es una actividad principal y es la principal fuente de agua dulce para las comunidades circundantes.",
        text_en: "Lake Togo, a coastal lagoon, plays a significant role in the local economy, as fishing is a primary activity and it is the main source of fresh water for surrounding communities.",
      },
      {
        difficulty: "hard",
        text_es: "Fue una colonia alemana antes de pasar a ser un mandato de la Sociedad de Naciones dividido entre Francia y el Reino Unido. Obtuvo su independencia en mil novecientos sesenta, estableciendo el francés como idioma oficial.",
        text_en: "It was a German colony before becoming a League of Nations mandate divided between France and the United Kingdom. It gained independence in nineteen sixty, establishing French as its official language.",
      },
      {
        difficulty: "medium",
        text_es: "Su costa es muy estrecha, y se extiende desde una llanura baja con lagunas hasta colinas y mesetas en el interior. Su bandera presenta cinco franjas horizontales, alternando verde y amarillo, con una estrella blanca en un cuadrado rojo.",
        text_en: "Its coastline is very narrow, extending from a low plain with lagoons to hills and plateaus inland. Its flag features five horizontal stripes, alternating green and yellow, with a white star on a red square.",
      },
      {
        difficulty: "easy",
        text_es: "Este país de África Occidental limita al oeste con Ghana, al este con Benín y al norte con Burkina Faso. Su capital es Lomé, situada en la costa.",
        text_en: "This West African country is bordered to the west by Ghana, to the east by Benin, and to the north by Burkina Faso. Its capital city is Lomé, located on the coast.",
      },
    ],
  },
  {
    id: 193,
    name: "Tonga",
    name_en: "Tonga",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este archipiélago fue el único reino del Pacífico que nunca estuvo bajo el dominio colonial directo de una potencia europea. Mantuvo su autonomía a través de tratados de amistad y protección.",
        text_en: "This archipelago was the only kingdom in the Pacific never under direct colonial rule by a European power. It maintained its autonomy through treaties of friendship and protection.",
      },
      {
        difficulty: "hard",
        text_es: "Es una monarquía constitucional y el hogar de la única familia real indígena polinesia que ha conservado su estatus soberano hasta hoy.",
        text_en: "It is a constitutional monarchy and home to the only indigenous Polynesian royal family that has retained its sovereign status to this day.",
      },
      {
        difficulty: "medium",
        text_es: "Conocido como las \"Islas Amistosas\", cuenta con espectaculares cuevas marinas, arrecifes de coral y es un destino popular para la observación de ballenas jorobadas.",
        text_en: "Known as the \"Friendly Islands,\" it boasts spectacular sea caves, coral reefs, and is a popular destination for humpback whale watching.",
      },
      {
        difficulty: "easy",
        text_es: "Situado en Oceanía, al este de Fiyi y al sur de Samoa. Su capital es Nukualofa y su bandera presenta una cruz roja sobre un cantón blanco, en un campo rojo.",
        text_en: "Located in Oceania, east of Fiji and south of Samoa. Its capital is Nukuʻalofa, and its flag features a red cross on a white canton, set on a red field.",
      },
    ],
  },
  {
    id: 194,
    name: "Turkmenistán",
    name_en: "Turkmenistan",
    hints: [
      {
        difficulty: "expert",
        text_es: "Este país cuenta con una maravilla natural conocida como la \"Puerta del Infierno\", un cráter de gas natural que lleva quemando desde mil novecientos setenta y un, situado en el desierto de Karakum.",
        text_en: "This country boasts a natural wonder known as the \"Door to Hell,\" a natural gas crater that has been burning since nineteen seventy-one, located in the Karakum Desert.",
      },
      {
        difficulty: "hard",
        text_es: "Su economía se basa en vastas reservas de gas natural, siendo uno de los mayores productores mundiales. Políticamente, es conocido por su estricta neutralidad permanente, reconocida por las Naciones Unidas.",
        text_en: "Its economy is based on vast natural gas reserves, making it one of the world's largest producers. Politically, it is known for its strict permanent neutrality, recognized by the United Nations.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por sus alfombras intrincadamente tejidas, que a menudo presentan patrones \"gul\" de distintas tribus. También se le asocia con la raza de caballos Akhal-Teke.",
        text_en: "Famous for its intricately woven carpets, often featuring distinct tribal 'gul' patterns. It is also associated with the Akhal-Teke horse breed.",
      },
      {
        difficulty: "easy",
        text_es: "Es un país de Asia Central que limita con Kazajistán al noroeste, Uzbekistán al norte y este, Afganistán al sureste e Irán al sur. Su capital es Asjabad y su bandera es mayoritariamente verde, con una franja vertical ornamentada.",
        text_en: "It is a Central Asian country bordering Kazakhstan to the northwest, Uzbekistan to the north and east, Afghanistan to the southeast, and Iran to the south. Its capital is Ashgabat, and its flag is predominantly green with an ornate vertical stripe.",
      },
    ],
  },
  {
    id: 195,
    name: "Tuvalu",
    name_en: "Tuvalu",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es una de las cuatro naciones en el mundo que mantienen relaciones diplomáticas con Taiwán, siendo la más pequeña de estas en términos de población y superficie terrestre. Su código de internet .tv es una fuente significativa de ingresos nacionales.",
        text_en: "It is one of four nations globally that maintain diplomatic relations with Taiwan, being the smallest of these in terms of population and land area. Its internet country code, .tv, is a significant source of national income.",
      },
      {
        difficulty: "hard",
        text_es: "Antiguamente parte de las Islas Ellice, obtuvo su independencia en mil novecientos setenta y ocho. Su forma de gobierno es una monarquía constitucional con un gobernador general que representa a la monarca británica.",
        text_en: "Formerly part of the Ell Ellice Islands, it gained independence in nineteen seventy-eight. Its form of government is a constitutional monarchy with a Governor-General representing the British monarch.",
      },
      {
        difficulty: "medium",
        text_es: "Esta nación insular es conocida por su extrema vulnerabilidad al aumento del nivel del mar, lo que plantea serias amenazas a su existencia futura. Sus atolones y arrecifes de coral son su principal característica geográfica.",
        text_en: "This island nation is known for its extreme vulnerability to rising sea levels, posing serious threats to its future existence. Its atolls and coral reefs are its main geographical feature.",
      },
      {
        difficulty: "easy",
        text_es: "Es un archipiélago en Oceanía, situado en la Polinesia. Su capital es Funafuti, que es un atolón. Sus vecinos oceánicos más cercanos incluyen Fiyi al sur y Kiribati al norte.",
        text_en: "It is an archipelago in Oceania, located in Polynesia. Its capital is Funafuti, which is an atoll. Its closest oceanic neighbors include Fiji to the south and Kiribati to the north.",
      },
    ],
  },
  {
    id: 196,
    name: "Yibuti",
    name_en: "Djibouti",
    hints: [
      {
        difficulty: "expert",
        text_es: "Su territorio es casi idéntico al de la antigua colonia francesa de Somalilandia. Posee uno de los climas más áridos y calurosos del mundo, con temperaturas que a menudo superan los cuarenta grados Celsius en verano.",
        text_en: "Its territory is almost identical to that of the former French colony of French Somaliland. It boasts one of the world's most arid and hot climates, with temperatures often exceeding forty degrees Celsius in summer.",
      },
      {
        difficulty: "hard",
        text_es: "Es un punto estratégico crucial en el Cuerno de África, controlando el estrecho de Bab el-Mandeb, la entrada al Mar Rojo. Esto ha llevado a la presencia de múltiples bases militares extranjeras en su territorio.",
        text_en: "It is a crucial strategic point in the Horn of Africa, controlling the Bab el-Mandeb strait, the gateway to the Red Sea. This has led to the presence of multiple foreign military bases within its territory.",
      },
      {
        difficulty: "medium",
        text_es: "Su paisaje es predominantemente desértico, con algunas de las depresiones geológicas más bajas de África, como el Lago Assal. La sal y el basalto son recursos naturales importantes en esta árida región.",
        text_en: "Its landscape is predominantly desert, featuring some of Africa's lowest geological depressions, such as Lake Assal. Salt and basalt are significant natural resources in this arid region.",
      },
      {
        difficulty: "easy",
        text_es: "Esta nación se encuentra en el Cuerno de África. Limita con Eritrea al norte, Etiopía al oeste y al sur, y Somalia al sureste. Su capital es una ciudad costera con el mismo nombre que el país.",
        text_en: "This nation is located in the Horn of Africa. It borders Eritrea to the north, Ethiopia to the west and south, and Somalia to the southeast. Its capital is a coastal city sharing the same name as the country.",
      },
    ],
  },
  {
    id: 197,
    name: "Zambia",
    name_en: "Zambia",
    hints: [
      {
        difficulty: "expert",
        text_es: "Es uno de los pocos países sin salida al mar con un lago interior tan grande que contiene un archipiélago y es una de las fuentes del río Congo.",
        text_en: "This landlocked nation is one of the few with an interior lake so vast it contains an archipelago and serves as one of the sources for the Congo River.",
      },
      {
        difficulty: "hard",
        text_es: "Su nombre fue adoptado en mil novecientos sesenta y cuatro, al obtener la independencia del Reino Unido, simbolizando el río que forma gran parte de su frontera norte y occidental.",
        text_en: "Its name was adopted in nineteen sixty-four upon gaining independence from the United Kingdom, symbolizing the river that forms much of its northern and western borders.",
      },
      {
        difficulty: "medium",
        text_es: "Famoso por ser hogar de una de las cascadas más grandes y espectaculares del mundo, conocida localmente como el 'humo que truena'.",
        text_en: "This country is renowned for being home to one of the world's largest and most spectacular waterfalls, locally known as 'the smoke that thunders'.",
      },
      {
        difficulty: "easy",
        text_es: "Un país sin salida al mar en el sur de África, bordeado por Angola, Botsuana, la República Democrática del Congo, Malaui, Mozambique, Namibia, Tanzania y Zimbabue. Su capital es Lusaka y su bandera presenta un águila pez africana volando sobre una franja de colores rojo, negro y naranja.",
        text_en: "A landlocked country in Southern Africa, bordered by Angola, Botswana, the Democratic Republic of the Congo, Malawi, Mozambique, Namibia, Tanzania, and Zimbabwe. Its capital is Lusaka, and its flag features an African fish eagle in flight over a vertical stripe of red, black, and orange.",
      },
    ],
  },
  {
    id: 198,
    name: "Zimbabue",
    name_en: "Zimbabwe",
    hints: [
      {
        difficulty: "expert",
        text_es: "Los exploradores árabes y portugueses del siglo XVI documentaron por primera vez la existencia de un estado poderoso conocido como 'Mwenemutapa', asociado con ruinas de piedra distintivas en el sureste de África.",
        text_en: "Sixteenth-century Arab and Portuguese explorers first documented the existence of a powerful state known as 'Mwenemutapa', associated with distinctive stone ruins in southeastern Africa.",
      },
      {
        difficulty: "hard",
        text_es: "El nombre moderno de este país está directamente relacionado con la designación de un antiguo reino y sus impresionantes estructuras de piedra construidas sin mortero.",
        text_en: "The modern name of this nation is directly linked to the designation of an ancient kingdom and its impressive mortarless stone structures.",
      },
      {
        difficulty: "medium",
        text_es: "El 'pájaro de jabón' es un símbolo nacional prominente, que aparece en su bandera y en su escudo, y representa artefactos encontrados en un importante sitio arqueológico.",
        text_en: "The 'soapstone bird' is a prominent national symbol, appearing on its flag and coat of arms, representing artifacts found at a significant archaeological site.",
      },
      {
        difficulty: "easy",
        text_es: "Un país sin salida al mar en el sur de África, haciendo frontera con Sudáfrica, Botsuana, Mozambique y Zambia. Su capital es Harare y su bandera tiene siete franjas horizontales de verde, amarillo, rojo y negro, con un triángulo blanco con una estrella roja y un pájaro de Zimbabue en el mástil.",
        text_en: "A landlocked country in Southern Africa, bordering South Africa, Botswana, Mozambique, and Zambia. Its capital is Harare, and its flag features seven horizontal stripes of green, yellow, red, and black, with a white triangle containing a red star and a Zimbabwe bird at the hoist.",
      },
    ],
  },
];
