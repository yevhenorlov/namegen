var makeWords = function(values) {
  var textArr = [];
  var numbers = '0123456789';
  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var possible = values || "abcdefghijklmnopqrstuvwxyz";
  var nonwovels = 'bcdfghjklmnpqrstvwxzy';
  var vowels = 'aeoui'
  while(textArr.length<50) {
    var text = "";
    var nameLength = Math.floor(Math.random() * 4) + 3;
    for( var i=0; i < nameLength; i++ ) {     
      arr = i % 3 ? vowels : nonwovels;
      c = arr.charAt(Math.floor(Math.random() * arr.length))
      text += c;
    }
    textArr.push(text);
  }
  return textArr
}

var makeName = function(words) {
   var name = words.getrandom();
   var surname = words.getrandom();
   return name.capitalize() + " " + surname.capitalize()
}

var makeCityName = function(words) {
   var firstCompound = words.getrandom();
   var secondCompound = words.getrandom();
   return firstCompound.capitalize() + "-" + secondCompound.capitalize()
}

var makeStreetName = function(words) {
  var streetName = words.getrandom();
  return streetName.capitalize() + ' '
}


var dwellerList = function() {
  var dwellArr = ""
  for (i=0; i<25; i++) {
    dwellArr += makeName(w) + ", " + gender.getrandom() + " " + raceArr.getrandom() + " " + professions.getrandom() + " who lives in " + makeStreetName(w) + locations.getrandom() + ".\n\n"
  }
  return dwellArr
}

// bullshit
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Array.prototype.getrandom = function() {
    return this[Math.floor(Math.random() * this.length)]
}


var professions = [
'assassin', 'butcher', 'teacher', 'monk', 'child', 'plumber', 'student', 'senator', 'mage', 'hunter', 'warrior', 'glass maker', 'potter', 'miner', 'mason', 'farmer', 'commoner', 'ranger', 'scout', 'thief', 'sailor', 'carpenter', 'blacksmith', 'weaponsmith', 'armorer'
]

var locations = [
'street', 'avenue', 'Square', 'quarter', 'Guild', 'temple'
]

var gender = [
'male', 'female', 'non-binary'
]

var raceArr = ['human', 'dwarf', 'halfling', 'elf', 'orc']
for (i=0;i<5;i++) {
  raceName = makeWords();
  raceArr.push(raceName.getrandom());
}

w = makeWords("");

var cityName = makeCityName(w)
console.log(
  "This is the outpost of " + cityName
  
  + ".\nIt is populated by several races: " + raceArr.join(", ") + ".\n" +
  "25 colonists live in " + cityName +":\n\n" + dwellerList()
)
