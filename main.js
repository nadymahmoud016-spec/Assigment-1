//q1
let str = "123";

let result = Num(str) + 7;

console.log(result);

//q2
let value = 0;

if (!value) {
    console.log("Invalid");
}

//q3

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}


//q4

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

///q5

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);

//q6

function getDay(day) {
    switch (day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid Day";
    }
}

console.log(getDay(2));

//q7

let words = ["a", "ab", "abc"];

let lengths = words.map(function (word) {
    return word.length;
});

console.log(lengths);

//q8
function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else {
        return "Not divisible by both";
    }
}

console.log(checkNumber(15));

//q9
const square = (num) => {
    return num * num;
};

console.log(square(5));

//q10

function getPerson({ name, age }) {
    return `${name} is ${age} years old`;
}

const person = {
    name: "John",
    age: 25
};

console.log(getPerson(person));

//q11

function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5));

//q12

function successMessage() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Success");
        }, 3000);
    });
}

successMessage().then(function (message) {
    console.log(message);
});
//q13
function largestNumber(arr) {
    return Math.max(...arr);
}

console.log(largestNumber([1, 3, 7, 2, 4]));

//q14
function getKeys(obj) {
    return Object.keys(obj);
}

const person = {
    name: "John",
    age: 30
};

console.log(getKeys(person));

//q15

function splitWords(text) {
    return text.split(" ");
}

console.log(splitWords("The quick brown fox"));

