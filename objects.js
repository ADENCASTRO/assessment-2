// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {return people.map(person => `${person.firstName} ${person.lastName}`);
}
const people = [
  { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
  { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
  { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' },
  { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
];

function getNames(people) {
  return people.map(person => `${person.firstName} ${person.lastName}`);
}

console.log(getNames(people));

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring({ firstName, lastName}) {
  return `${firstName} ${lastName}`;
}
const person = { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' };

console.log(getNameUsingDestructuring(person));

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {return people.filter(person => person.location === location);
}
const people = [
  { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
  { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
  { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' },
  { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
];

console.log(getPeopleByLocation(people, "Baldur's Gate"));

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {return phrase.split(' ').map(word => EN_PIRATE_LOOKUP[word] || word).join(' ');
}

console.log(translateToPirateTalk('excuse me sir where is the restroom'));

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) { 
  return str.split(' ').reduce((count, word) => {
  count[word] = (count[word] || 0) + 1;
  return count;
}, {});
}

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  return bug.availability.months.includes(month);
}
const bug = {
  name: 'common butterfly',
  availability: {
    rarity: 'common',
    months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
  }
};

console.log(isBugAvailable(bug, 1));
console.log(isBugAvailable(bug, 7));

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {const calendar = {};
for (let month = 1; month <= 12; month++) {
  calendar[month] = [];
}


bugs.forEach(bug => {
  bug.availability.months.forEach(month => {
    calendar[month].push(bug.name);
  });
});

return calendar;
}

const bugs = [
  {
    name: 'peacock butterfly',
    availability: {
      rarity: 'common',
      months: [1, 2, 3],
    },
  },
  {
    name: 'yellow butterfly',
    availability: {
      rarity: 'common',
      months: [3],
    },
  },
];

console.log(buildBugHuntCalendar(bugs));

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
