//data types

let userName: string = "Arsalan";
let age: number = 22;
let islearning: boolean = true;
let colors: Array<string | number> = ["red", "green", 1, 3, 4]

interface Test {
    user: string,
    age: number,
    islearning: boolean
}

let test : Test = {
    user: "Arsalan",
    age: 22,
    islearning: true
}