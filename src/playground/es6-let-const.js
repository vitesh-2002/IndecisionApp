// var nameVar = 'Vitesh'
// console.log('nameVar', nameVar);
// let name = 'Vitesh'
// console.log(name);
// const nameConst = 'Vitesh';


//ARROW FUNCTIONS
// function multiply(num) {
//     return num * num
// }
// console.log(multiply(5))

// const square = (num) => {
//     return num*num;
// }

// console.log(square(9))

// const squareArrow = (num) => num * num;
// console.log(squareArrow(15))

const getFirstName = (name) => {
    console.log(name.split(' ')[0])
}
const firstName = (name) => console.log(name.split(' ')[0])
getFirstName('LeBron James')
firstName('Michael Jordan')

//ARROW FUNCTIONS
const add = (a, b) => {
    return a + b;
}
console.log(add(2,8))

const cities = ['Cary', 'Raleigh']
let cityM = cities.map((city) => {console.log(city + '!')})

// const multiplier = {
//     numbers: [1, 2, 3],
//     multiplyBy: 5,
//     multiply: () => {
//         return this.numbers.map((n) => {n*this.multiplyBy})
//     }
// }
// console.log(multiplier.multiply())
