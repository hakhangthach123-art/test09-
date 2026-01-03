// 1: let, const
//const: hằng số,giá trị của nó không thay đổi
const PI= 3.14;
const MAX_USER= 100;
// 2: arrow fuction
// old:
//function addTwoNumber(a:number, b:number): number{
//    return a+b
//}
// new:
const addTwoNumber = (a:number, b:number): number => {
    return a+b
}
// 3: template string
let name1= "john";
let age1 = 30;

let messsage = `hello ${name1}, you are ${age1} years old.`
console.log(messsage)

// 4: destructuring 
const person = {
    name: 'hel',
    age: 30,
    gender:'Male',
    occupation:'Developer'
}
const {name: namePerson, age} = person
console.log(namePerson, age)

const colors =["red", "green", "blue"]
const [redColor, greenColor] = colors
console.log(redColor, greenColor) 
// 5: default parameter

const greet = (name: string= "Unknown"): void => {
    console.log(`hello ${name}`)
}
greet()
greet("Alice")
// 6: rest parameter
const sumAll = (...numbers: number[]) => {
    let total = 0
    for (let num of numbers) {
        total += num 
    }
    return total
}
console.log(sumAll(5,6))
console.log(sumAll(4,5,6))
console.log(sumAll(4,5,6,7))
// 7: spread operator
//gop nhiu mang thanh 1 mang
const array1 = [1,2,3]
const array2 = [4,5,6]
const arrayMerge = [...array1, ...array2]
console.log(arrayMerge)
// gop nhiu obj thanh 1 obj
const obj1 = {
    name: 'nhi',
    age: 30
}

const obj2 = {
    gender: 'female',
    occupation:'developer'

}
const objMerge = {...obj1, ...obj2}
console.log(objMerge)

// 8: async/await: bat dong bo trong playwrigt 

// 9: module: import/export