/**
 * Aliases for countries that have multiple common names in either language.
 * Key: canonical Spanish OR English name (must match `name` or `name_en` in countries.ts).
 * Value: array of additional accepted names (any language, common abbreviations, etc.).
 *
 * Used by matchesCountry() so users can type "EEUU", "USA", "UK", "Holanda", etc.
 * and have it accepted as a correct guess.
 *
 * All comparisons are normalized (lowercase, no accents).
 */
export const COUNTRY_ALIASES: Record<string, string[]> = {
  // Europe
  "España": ["Spain"],
  "Alemania": ["Germany", "Deutschland"],
  "Reino Unido": [
    "United Kingdom",
    "UK",
    "Gran Bretaña",
    "Great Britain",
    "Britain",
    "Inglaterra",
    "England",
  ],
  "Países Bajos": ["Netherlands", "Holanda", "Holland", "The Netherlands"],
  "Bélgica": ["Belgium"],
  "Suiza": ["Switzerland"],
  "Suecia": ["Sweden"],
  "Noruega": ["Norway"],
  "Dinamarca": ["Denmark"],
  "Finlandia": ["Finland"],
  "Islandia": ["Iceland"],
  "Irlanda": ["Ireland"],
  "Francia": ["France"],
  "Italia": ["Italy"],
  "Grecia": ["Greece"],
  "Portugal": ["Portugal"],
  "Austria": ["Austria"],
  "Polonia": ["Poland"],
  "República Checa": ["Czech Republic", "Czechia", "Chequia"],
  "Hungría": ["Hungary"],
  "Rumanía": ["Romania", "Rumania"],
  "Ucrania": ["Ukraine"],
  "Rusia": ["Russia", "Russian Federation", "Federación Rusa"],
  "Turquía": ["Turkey", "Türkiye"],
  "Croacia": ["Croatia"],
  "Serbia": ["Serbia"],
  "Bosnia y Herzegovina": ["Bosnia and Herzegovina", "Bosnia"],
  "Macedonia del Norte": ["North Macedonia", "Macedonia"],
  "Eslovenia": ["Slovenia"],
  "Eslovaquia": ["Slovakia"],
  "Bulgaria": ["Bulgaria"],
  "Albania": ["Albania"],
  "Bielorrusia": ["Belarus"],
  "Moldavia": ["Moldova"],
  "Estonia": ["Estonia"],
  "Letonia": ["Latvia"],
  "Lituania": ["Lithuania"],
  "Luxemburgo": ["Luxembourg"],
  "Mónaco": ["Monaco"],
  "Vaticano": ["Vatican", "Vatican City", "Ciudad del Vaticano", "Holy See"],
  "Chipre": ["Cyprus"],
  "Malta": ["Malta"],

  // Americas
  "Estados Unidos": [
    "United States",
    "United States of America",
    "USA",
    "U.S.A.",
    "US",
    "U.S.",
    "EEUU",
    "EE.UU.",
    "EE UU",
    "America",
  ],
  "México": ["Mexico"],
  "Brasil": ["Brazil"],
  "Canadá": ["Canada"],
  "Argentina": ["Argentina"],
  "Chile": ["Chile"],
  "Colombia": ["Colombia"],
  "Perú": ["Peru"],
  "Venezuela": ["Venezuela"],
  "Uruguay": ["Uruguay"],
  "Paraguay": ["Paraguay"],
  "Bolivia": ["Bolivia"],
  "Ecuador": ["Ecuador"],
  "Cuba": ["Cuba"],
  "República Dominicana": ["Dominican Republic"],
  "Haití": ["Haiti"],
  "Jamaica": ["Jamaica"],
  "Panamá": ["Panama"],
  "Costa Rica": ["Costa Rica"],
  "Nicaragua": ["Nicaragua"],
  "Honduras": ["Honduras"],
  "El Salvador": ["El Salvador"],
  "Guatemala": ["Guatemala"],
  "Belice": ["Belize"],
  "Trinidad y Tobago": ["Trinidad and Tobago"],
  "Antigua y Barbuda": ["Antigua and Barbuda"],
  "San Cristóbal y Nieves": ["Saint Kitts and Nevis"],
  "Santa Lucía": ["Saint Lucia"],
  "San Vicente y las Granadinas": ["Saint Vincent and the Grenadines"],
  "Surinam": ["Suriname"],
  "Granada": ["Grenada"],
  "Bahamas": ["Bahamas", "The Bahamas"],

  // Asia
  "Japón": ["Japan"],
  "China": ["China", "People's Republic of China"],
  "India": ["India"],
  "Corea del Sur": ["South Korea", "Republic of Korea"],
  "Corea del Norte": ["North Korea", "DPRK"],
  "Tailandia": ["Thailand"],
  "Vietnam": ["Vietnam", "Viet Nam"],
  "Filipinas": ["Philippines"],
  "Indonesia": ["Indonesia"],
  "Malasia": ["Malaysia"],
  "Singapur": ["Singapore"],
  "Camboya": ["Cambodia"],
  "Laos": ["Laos"],
  "Myanmar": ["Myanmar", "Birmania", "Burma"],
  "Bangladés": ["Bangladesh"],
  "Pakistán": ["Pakistan"],
  "Afganistán": ["Afghanistan"],
  "Irán": ["Iran"],
  "Irak": ["Iraq"],
  "Siria": ["Syria"],
  "Líbano": ["Lebanon"],
  "Jordania": ["Jordan"],
  "Israel": ["Israel"],
  "Palestina": ["Palestine"],
  "Arabia Saudí": ["Saudi Arabia", "Arabia Saudita"],
  "Emiratos Árabes Unidos": ["United Arab Emirates", "UAE", "Emiratos Árabes"],
  "Catar": ["Qatar"],
  "Kuwait": ["Kuwait"],
  "Baréin": ["Bahrain"],
  "Omán": ["Oman"],
  "Yemen": ["Yemen"],
  "Nepal": ["Nepal"],
  "Bután": ["Bhutan"],
  "Sri Lanka": ["Sri Lanka", "Ceilán", "Ceylon"],
  "Maldivas": ["Maldives"],
  "Mongolia": ["Mongolia"],
  "Kazajistán": ["Kazakhstan", "Kazajstán"],
  "Uzbekistán": ["Uzbekistan"],
  "Turkmenistán": ["Turkmenistan"],
  "Kirguistán": ["Kyrgyzstan"],
  "Tayikistán": ["Tajikistan"],
  "Azerbaiyán": ["Azerbaijan"],
  "Armenia": ["Armenia"],
  "Georgia": ["Georgia"],
  "Brunéi": ["Brunei"],
  "Timor Oriental": ["East Timor", "Timor-Leste"],
  "Taiwán": ["Taiwan", "Republic of China"],

  // Africa
  "Egipto": ["Egypt"],
  "Marruecos": ["Morocco"],
  "Argelia": ["Algeria"],
  "Túnez": ["Tunisia"],
  "Libia": ["Libya"],
  "Sudán": ["Sudan"],
  "Sudán del Sur": ["South Sudan"],
  "Etiopía": ["Ethiopia"],
  "Eritrea": ["Eritrea"],
  "Yibuti": ["Djibouti"],
  "Somalia": ["Somalia"],
  "Kenia": ["Kenya"],
  "Uganda": ["Uganda"],
  "Tanzania": ["Tanzania", "Tanzanía"],
  "Ruanda": ["Rwanda"],
  "Burundi": ["Burundi"],
  "República Democrática del Congo": [
    "Democratic Republic of the Congo",
    "DRC",
    "RDC",
    "DR Congo",
    "Congo-Kinshasa",
  ],
  "República del Congo": ["Republic of the Congo", "Congo", "Congo-Brazzaville"],
  "Gabón": ["Gabon"],
  "Camerún": ["Cameroon"],
  "Nigeria": ["Nigeria"],
  "Níger": ["Niger"],
  "Chad": ["Chad"],
  "República Centroafricana": ["Central African Republic", "CAR"],
  "Guinea Ecuatorial": ["Equatorial Guinea"],
  "Santo Tomé y Príncipe": ["São Tomé and Príncipe", "Sao Tome and Principe"],
  "Angola": ["Angola"],
  "Zambia": ["Zambia"],
  "Zimbabue": ["Zimbabwe"],
  "Malaui": ["Malawi"],
  "Mozambique": ["Mozambique"],
  "Namibia": ["Namibia"],
  "Botsuana": ["Botswana"],
  "Sudáfrica": ["South Africa"],
  "Lesoto": ["Lesotho"],
  "Esuatini": ["Eswatini", "Swaziland", "Suazilandia"],
  "Madagascar": ["Madagascar"],
  "Mauricio": ["Mauritius"],
  "Seychelles": ["Seychelles"],
  "Comoras": ["Comoros"],
  "Cabo Verde": ["Cape Verde"],
  "Senegal": ["Senegal"],
  "Gambia": ["Gambia", "The Gambia"],
  "Guinea": ["Guinea"],
  "Guinea-Bisáu": ["Guinea-Bissau"],
  "Sierra Leona": ["Sierra Leone"],
  "Liberia": ["Liberia"],
  "Costa de Marfil": ["Ivory Coast", "Côte d'Ivoire", "Cote d'Ivoire"],
  "Ghana": ["Ghana"],
  "Togo": ["Togo"],
  "Benín": ["Benin"],
  "Burkina Faso": ["Burkina Faso"],
  "Malí": ["Mali"],
  "Mauritania": ["Mauritania"],

  // Oceania
  "Australia": ["Australia"],
  "Nueva Zelanda": ["New Zealand"],
  "Papúa Nueva Guinea": ["Papua New Guinea"],
  "Fiyi": ["Fiji"],
  "Islas Salomón": ["Solomon Islands"],
  "Vanuatu": ["Vanuatu"],
  "Samoa": ["Samoa"],
  "Tonga": ["Tonga"],
  "Kiribati": ["Kiribati"],
  "Tuvalu": ["Tuvalu"],
  "Nauru": ["Nauru"],
  "Palaos": ["Palau"],
  "Micronesia": ["Micronesia", "Federated States of Micronesia"],
  "Islas Marshall": ["Marshall Islands"],
};

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Build a lookup: normalized name -> Set of all normalized accepted names for that country.
 * Lets us match by any alias regardless of which canonical name the country uses.
 */
const aliasGroups: Set<string>[] = [];
for (const [canonical, aliases] of Object.entries(COUNTRY_ALIASES)) {
  const group = new Set<string>([canonical, ...aliases].map(normalizeString));
  aliasGroups.push(group);
}

const NAME_TO_GROUP = new Map<string, Set<string>>();
for (const group of aliasGroups) {
  for (const name of group) {
    NAME_TO_GROUP.set(name, group);
  }
}

/** Returns the set of all accepted normalized names for a given country name (es or en). */
export function getAcceptedNames(...names: string[]): Set<string> {
  for (const n of names) {
    const group = NAME_TO_GROUP.get(normalizeString(n));
    if (group) return group;
  }
  // Fallback: just the names themselves
  return new Set(names.map(normalizeString));
}
