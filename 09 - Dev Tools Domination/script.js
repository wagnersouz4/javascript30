const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello!');

// Interpolated
console.log('I am a %s string!', '★')
const start = '★';
console.log(`I am a ${start} string!`);

// Styled
console.log('%c I am a great text!', 'font-size: 50px; color: red;');

// warning!
console.warn('Oh nooo!');

// Error :|
console.error('An error has occured!');

// Info
console.info('One ring to rule them all!');

// Testing
console.assert(1 === 2, 'This is wrong!');
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'Humm some css is missing here!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => { 
    //console.group(dog.name);
    console.groupCollapsed(dog.name); // just to be shown collapsed
    console.log(`This is ${dog.name}.`)
    console.log(`${dog.name} is ${dog.age} years old!`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old!`);
    console.groupEnd(dog.name);
});
// counting
console.count('Vanilla');
console.count('JS');
console.count('JS');
console.count('JS');
console.count('Vanilla');
console.count('Vanilla');
console.count('Vanilla');
console.count('Vanilla');
console.count('JS');
console.count('JS');
console.count('Vanilla');

// timing
const fetchGithubTimetracking = 'fetching data from github';
console.time(fetchGithubTimetracking);
fetch('https://api.github.com/users/wagnersouz4')
    .then(data => data.json())
    .then(data => { 
        console.timeEnd(fetchGithubTimetracking);
        console.log(data);
    });

console.table(dogs);