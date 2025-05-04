// let cup1 = 'coco';
// let cup2 = 'fanta';
// let cup3 = 'rthdrt';

//qiymatni oladi  -  qiymatni beradi
// cup3 = cup1;
// cup1 = cup2
// cup2 = cup3
// cup3 =''

// console.log(cup1);
// console.log(cup2);
// console.log(cup3);


// var object = {
//     a: 2,
//     b: 3
// }

// if (object.a > object.b) {
//     console.log('A Bdan katta');

// } else if (object.a < object.b) {
//     console.log('B Adan katta');

// } else {
//     console.log('Teng');
// }

// for (let index = 0; index <= 100; index++) {
//     if (index % 2 == 0) {
//         console.log(index, 'juft');
//     } else {
//         console.log(index, 'toq');
//     }
// }



// const array = [
//     {
//         title: "Naruto",
//         genre: "Action",
//         rating: 8.5
//     },
//     {
//         title: "One Piece",
//         genre: "Adventure",
//         rating: 9.0
//     },
//     {
//         title: "Death Note",
//         genre: "Mystery",
//         rating: 9.5
//     },
// ]

// console.log(array.length);
// for (let i = 0; i < array.length; i++) {
//     if (array[i].rating >= 9) {
//         console.log(array[i].title + ' 9dan baland');
//     } else {
//         console.log(array[i].title + ' 9dan past');
//     }
// }



// const students = [
//     {
//         name: "Alice",
//         age: 20,
//         grade: 75,
//         major: "Computer Science"
//     },
//     {
//         name: "Bob",
//         age: 22,
//         grade: 82,
//         major: "Mechanical Engineering"
//     },
//     {
//         name: "Charlie",
//         age: 19,
//         grade: 90,
//         major: "Mathematics"
//     },
//     {
//         name: "Diana",
//         age: 21,
//         grade: 88,
//         major: "Biology"
//     },
//     {
//         name: "Ethan",
//         age: 23,
//         grade: 70,
//         major: "History"
//     }
// ];

// for (let index = 0; index < students.length; index++) {
//     if (students[index].grade >= 80) {
//         console.log(`${students[index].name} ${students[index].age}, grade: ${students[index].grade} from ${students[index].major}`);
//     } else {
//         console.log('failed');
//     }
// }

// for (let index = 0; index < students.length; index++) {
//     if (students[index].grade <= 75) {
//         console.log(`${students[index].name} got ${students[index].grade} 'F' from ${students[index].major}`);

//     } else if (students[index].grade <= 80) {
//         console.log(`${students[index].name} got ${students[index].grade} 'C' from ${students[index].major}`);
//     }
//     else if (students[index].grade <= 85) {
//         console.log(`${students[index].name} got ${students[index].grade} 'B' from ${students[index].major}`);
//     }
//     else if (students[index].grade <= 90) {
//         console.log(`${students[index].name} got ${students[index].grade} 'A+' from ${students[index].major}`);
//     }
// }



for (let index = 0; index <= 100; index++) {
    let isPrime = true

    for (let i = 2; i < index; i++) {
        if (index % i === 0) {
            isPrime = false
            break;
        }
    }
    if (isPrime) {
        console.log(`${index}: prime`);
    } else {
        console.log(`${index}: non-prime`);

    }
}
