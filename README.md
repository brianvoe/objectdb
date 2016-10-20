# objectDB
objectDB is an open-source in memory javascript database inspired by vanillajs. Designed to help you put stuff in an object.

## Features
- [x] Extremely Light weight!
- [x] Extremely fast queries
- [x] Extremely robust cross browser support
- [x] Extremely easy to learn
- [x] Extremely open source
- [x] Extremely compatible with your own code
- [x] Extremely sexy

## Install
```bash
npm install --save objectdb
```
## Test
```bash
npm test
```
If the test fails. You need to stop and walk away from the computer slowly!

## How do I use it?
I cant believe you have to ask, ok here.
```javascript
let objectDb = require('objectdb');

objectDb.name = 'smart ass';
console.log(objectDb.name);
```

## If I refresh the page I loose everything
Well no shit! Its an object!

To put it in the browsers storage
```javascript
let objectDb = require('objectdb');
objectDb.name = 'smart ass';

// Set
localStorage.setItem("data", JSON.stringify(objectDb));

// Get
let data = JSON.parse(localStorage.getItem("data"));
console.log(data);
```

## Wait a sec! Its not a database!
Oh yes it is smart ass!

<b>Definition:</b> "a structured set of data held in a computer, especially one that is accessible in various ways."

## Roadmap
No

## Contributing
Why?
