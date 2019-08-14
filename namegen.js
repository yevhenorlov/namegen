const CONSONANTS = 'bcdfghjklmnpqrstvwxzy'

const VOWELS = 'aeoui'

const WORDS_AMOUNT = 50

const LOCATIONS = ['street', 'avenue', 'Square', 'quarter', 'Guild', 'temple']

const GENDERS = ['male', 'female', 'non-binary']

const BASIC_RACES = ['human', 'dwarf', 'halfling', 'elf', 'orc']

const PROFESSIONS = [
  'assassin',
  'butcher',
  'teacher',
  'monk',
  'child',
  'plumber',
  'student',
  'senator',
  'mage',
  'hunter',
  'warrior',
  'glass maker',
  'potter',
  'miner',
  'mason',
  'farmer',
  'commoner',
  'ranger',
  'scout',
  'thief',
  'sailor',
  'carpenter',
  'blacksmith',
  'weaponsmith',
  'armorer'
]

const getRandomIntInRange = (range, base) =>
  base + Math.floor(Math.random() * range)

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const getRandom = array => array[Math.floor(Math.random() * array.length)]

const makeWord = () => {
  const length = getRandomIntInRange(3, 4)
  const word = Array.from({ length })
  return word
    .map((char, i) => {
      const sounds = i % 3 ? VOWELS : CONSONANTS
      return sounds[Math.floor(Math.random() * sounds.length)]
    })
    .join('')
}

const makeWords = amount => {
  const words = Array.from({ length: amount })
  return words.map(makeWord)
}

const makeName = words => {
  const name = getRandom(words)
  const surname = getRandom(words)
  return `${capitalize(name)} ${capitalize(surname)}`
}

const makeCityName = words => {
  const firstCompound = getRandom(words)
  const secondCompound = getRandom(words)
  return `${capitalize(firstCompound)}-${capitalize(secondCompound)}`
}

const makeStreetName = words => {
  const streetName = getRandom(words)
  return capitalize(streetName)
}

const makeDwellerList = (length = 25, words) => {
  const list = Array.from({ length })
  return list
    .map(
      () =>
        `${makeName(words)}, ${getRandom(GENDERS)} ${getRandom(
          RACES
        )} ${getRandom(PROFESSIONS)}, who lives in ${makeStreetName(
          words
        )} ${getRandom(LOCATIONS)}`
    )
    .join('.\n\n')
}

const makeRaces = length => Array.from({ length }).map(makeWord)

const CUSTOM_RACES = makeRaces(5)

const RACES = [...CUSTOM_RACES, ...BASIC_RACES]

const words = makeWords(WORDS_AMOUNT)

const cityName = makeCityName(words)
const COLONISTS_AMOUNT = 15
const text = `This is the outpost of ${cityName}.

It is populated by several races:
${RACES.join(', ')}.

${COLONISTS_AMOUNT} colonists live in ${cityName}:

${makeDwellerList(COLONISTS_AMOUNT, words)}`
console.log(text)
