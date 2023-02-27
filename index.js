//Question 1
function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }

//Question 2
  const post1 = new InstagramPost('johndoe', 'Check out this amazing sunset!', 'https://example.com/sunset.jpg', 1000, 50);
const post2 = new InstagramPost('janedoe', 'Just finished my first marathon!', 'https://example.com/marathon.jpg', 5000, 200);

//Question 3

function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
  
  function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk,
    };
  }
  
  const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
  const musaJambScores = createJambScores(70, 85, 82, 94);
  
  musa.jambScores = musaJambScores;

//Question 4
//1.Object.assign():
const original = {a: 1, b: 2, c: {d: 3}};
const copy = Object.assign({}, original);
console.log(copy); // {a: 1, b: 2, c: {d: 3}}
console.log(copy === original); // false
console.log(copy.c === original.c); // true (nested object is not cloned)

//2. Spread operator:
const example = {a: 1, b: 2, c: {d: 3}};
const copyy = {...example};

console.log(copyy); // {a: 1, b: 2, c: {d: 3}}
console.log(copyy === example); // false
console.log(copyy.c === example.c); // true (nested object is not cloned)

//3. JSON.parse() and JSON.stringify() methods:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2); // { a: 1, b: { c: 2 } }

 //Question 5
 const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
  };
  
  for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  


