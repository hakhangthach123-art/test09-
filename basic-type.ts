// import ham sunThreeNumber
import {multiplyNumber, sumThreeNumber, sumEven} from './module.ts'; 

let lisNumber: number[]= [4,3,7,1,10];
let resultEvenSum= sumEven(lisNumber);
console.log(resultEvenSum)

let resultSum = sumThreeNumber(10,20,30);
console.log(resultSum);

let resulmultiply = multiplyNumber(5,4);
console.log(resulmultiply);



let username: string ="Ha khang A"

let age:number= 30;
let price: number= 30.45;

let isActive: boolean = true;
let email: any = " hakhangthach@gamil.com";
let quantily: any = 10;

let fruits: string[] = ["Apple", "Banana", "Mango"]
let number: number[] = [1,2,3,4,5] 

console.log(username);

//  khai bao ham
function addTwoNumber(number1: number, number2: number) : number {
    return number1 + number2;
}

let result = addTwoNumber(3, 12);
console.log(result);

function sumArrayNumber():number {
    let numbers: number[] = [2,5,7,1,2];
    let sum: number= 0;

    //for (let i = 0; i < number.length; i++){
       // sum += number[i];
    //}
    for (let number of numbers){
        sum += number
    }

    return sum;

    
}
let total = sumArrayNumber();
console.log(total);