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



// for (let index = 0; index <= 100; index++) {
//     let isPrime = true

//     for (let i = 2; i < index; i++) {
//         if (index % i === 0) {
//             isPrime = false
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${index}: prime`);
//     } else {
//         console.log(`${index}: non-prime`);

//     }
// }



let array = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(array.length);

// for (let index = 0; index < array.length; index++) {
//     console.log(index);
// }

// console.log(array);

// count = array[0, 1, 2, 3, 4, 5, 6, 7];
// console.log(count);

// let arr = [10, 20, 30, 40];
// let count = 0;
// while (arr[count] !== undefined) {
//   count++;
// }
// console.log(count);



// Buyurtmachi ismini va telefon raqamini chiqarish. Telefon mavjud bo‘lsa, Customer phone: <raqam> deb chiqsin, aks holda Phone not available. Email bo‘sh bo‘lsa (''), No email provided deb chiqaring (|| dan foydalaning). To‘lov ma’lumotlari mavjud bo‘lmasa (null yoki undefined), Payment pending deb chiqaring (?? dan foydalaning). [Buyurtma jami narxini hisoblang (items massiviga qarab) va Total: $1225 kabi chiqaring (reduce bilan).)]Yuborilgan manzilni tekshiring: shipping.address.city mavjud bo‘lmasa, Delivery address missing deb chiqaring. Bo‘lsa: Shipping to: <city>. Agar shipping.delivered true bo‘lsa: Order has been delivered deb chiqaring. Aks holda hech narsa chiqarilmang. (&& bilan) customer.loyaltyCard?.points qiymatini chiqaring. Mavjud bo‘lmasa: No loyalty points.

// const order = {
//   customer: {
//     name: 'Asal',
//     contact: {
//       phone: '998901112233',
//       email: ''
//     }
//   },
//   items: [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Mouse', price: 25 }
//   ],
//   payment: null,
//   shipping: {
//     address: {
//       city: 'Tashkent',
//       street: 'Yunusabad 5'
//     },
//     delivered: false
//   }
// };
// let er = order.customer.name
// let num = order.customer.contact.phone
// let mail = order.customer.contact.email
// let add = order.shipping.address.city
// let deliver = order.shipping.delivered

// console.log(er, num);

// if (num) {
//     console.log(`Customer phone: ${num}`);
// } else {
//     console.log(`Phone not available`);
// }

// console.log(`${mail}`|| 'No email provided');

// console.log(order.payment ?? 'Payment pending');

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const sum = nums.reduce(function (currentSum, currentNumber) {
//   return currentSum + currentNumber
// }, 0)
// const totalPrice = order.items.reduce((sum, item) => sum + item.price, 0);
// console.log(totalPrice); // Output: 1225

// if (add) {
//     console.log(`Shipping to: ${add}`);
// } else {
// console.log('Delivery address missing');
// }

// deliver && console.log('Order has been delivered');

// order.customer.loyaltyCard?.points || console.log('No loyalty points');


// const subject = {
//   something : null
// };
// console.log(subject);

// const emailSubject = subject ?? 'A default subject';

// const user = prompt('enter something')
// console.log(`${subject}: ${user}`);

// let input = prompt("Enter your username:");

// let username = (input === '' ? undefined : input) ?? 'user';

// console.log(username);


// let input = prompt("enter your username:");

// if (input === '') {
//   username = undefined;
// } else {
//   username = input;
// }
// const person = {
//   user: username ?? 'user'
// }
// console.log(`username: ${person.user}`);

//homework
// let a = 5;
// let b = a;
// b = 10;

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// arr2.push(4);

// console.log("a:", a);       // 5
// console.log("b:", b);       // 10
// console.log("arr1:", arr1); // 1, 2, 3, 4
// console.log("arr2:", arr2); // 1, 2, 3, 4

// const obj = {
//   username: "Ali",
//   greet: function () {
//     setTimeout(function () {
//       console.log("Hello,", this.username); //since it's a regular function, this refers to the global object, not obj
//     }, 1000);
//   }
// };

// obj.greet();

// console.log("Start"); // first

// setTimeout(() => {
//   console.log("Inside setTimeout"); //third
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Inside Promise"); //fourth
// });

// console.log("End"); //second

const grandparent = document.querySelector('.grandparent');
container = document.querySelector('.container')
parent = document.querySelector('.parent');
child = document.querySelector('.child')

child.addEventListener("click", function () {
    parent.classList.toggle("toggled-h2");
    container.classList.toggle("toggled-border");
    grandparent.classList.toggle('toggled-h3')
  });

grandparent.addEventListener('click', function(event){
  alert('grandparent bubbling');
},true);
parent.addEventListener('click', function(event){
  alert('parent bubbling');
},true);
child.addEventListener('click', function(event){
  alert('child bubbling');
},true);