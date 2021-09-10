// const myNumber = 5;
// const myName = 'tanju';
// console.log('Hello From Typescript', myNumber, myName);

// let money = 5000;
// money = 'taka-poisa';

let money: number = 5;
let honey: string = 'typescript';
let funny: boolean = true;

const age: number = 31;





function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(2, 45);

function dobleConsole(number: number): void {
    console.log(2 * number);
}

//multi purpose
// function add(first: number | string, second: number | string): number | string {
//     const result: number | string = first + second;
//     return result;
// }

// const output: number = add(2, 45);
// const fullName = add('Adam', 'Sandler');