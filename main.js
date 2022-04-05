// log a statement
console.log('Hello from main.js')

// variables
let age = 22
console.log(age)

const salary = 80000
console.log(salary)

const person {
    firstName: 'Prajjwala',
    lastName: 'Yadwadkar',
    age:22

}


let x = 10
let y = 5

console.log(x % y)
console.log(++x)
console.log(x++)
console.log(--y)
console.log(y--)


console.log(true + '3')
console.log('5' - '2')
console.log('5' * '2')
console.log('5' / '2')
console.log('5' + '2')

console.log('Bruce ' - 'Wayne')

console.log('5' - true)
console.log('4' * false)
// false = 0, true = 1, null = 0
 console.log(Boolean(null))
 console.log((500).toString())

const var1 = '10'
const var2 = 10

console.log(var1 == var2)
console.log(var1 === var2)

const num = 0
if (num > 0) {
    console.log('number is positive')
} else if (num < 0) {
    console.log('number is negative')
} else {
    console.log('number = 0')
}

const color = 'blue'
switch(color) {
    case 'red': 
    console.log('color is red')
    break
    case 'blue': 
    console.log('color is blue')
    break
    case 'green': 
    console.log('color is green')
    break
}

// examine the document object
console.dir(document)
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 'doc';
console.log(document.doctype);
console.log(document.head);
console.log(document.all[5]);

// textContent - to change text under any tag - innerText - almost same 

console.log(document.forms);
console.log(document.links);
console.log(document.images);

// GET ELEMENT BY ID:
console.log(document.getElementById('head'));

headerTitle.style.borderBotteom = 'solid 3px #000';