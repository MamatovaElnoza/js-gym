// // // let cup1 = 'coco';
// // // let cup2 = 'fanta';
// // // let cup3 = 'rthdrt';

// // // //qiymatni oladi  -  qiymatni beradi
// // // cup3 = cup1;
// // // cup1 = cup2
// // // cup2 = cup3
// // // cup3 =''

// // // console.log(cup1);
// // // console.log(cup2);
// // // console.log(cup3);


// // var object = {
// //     a: 2,
// //     b: 3
// // }

// // if (object.a > object.b) {
// //     console.log('A Bdan katta');

// // } else if (object.a < object.b) {
// //     console.log('B Adan katta');

// // } else {
// //     console.log('Teng');
// // }

// for (let index = 0; index <= 100; index++) {
//     if (index % 2 == 0) {
//         console.log(index, 'juft');
//     } else {
//         console.log(index, 'toq');
//     }
// }



const array = [
    {
        title: "Naruto",
        genre: "Action",
        rating: 8.5
    },
    {
        title: "One Piece",
        genre: "Adventure",
        rating: 9.0
    },
    {
        title: "Death Note",
        genre: "Mystery",
        rating: 9.5
    },
]

// console.log(array.length);
for (let i = 0; i < array.length; i++) {
    if (array[i].rating >= 9) {
        console.log(array[i].title + ' 9dan baland');
    } else {
        console.log(array[i].title + ' 9dan past');
    }
}