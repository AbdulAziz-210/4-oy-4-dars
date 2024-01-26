

// let a = prompt("1-sonni kiriting")
// let b = prompt("2-sonni kiriting")
// let c = prompt("3-sonni kiriting")

// if (a > b && b > c){
//     console.log(b);
// } else if(b > a && a > c){
//     console.log(a);
// } else if(a > c && c > b){
//     console.log(c);
// }

// let number = prompt("Uch xonali son kiriting");

// if((number % 10) / 10){
//     console.log(number);
// }



// if (number % 2 === 0){
//     console.log("Bu son juft")
// } else(
//     console.log("Bu son toq")
// )


// // 2-masala


// var son = prompt("Uch xonali son kiriting:");
// son = parseInt(son);

// if (isNaN(son)) {
//     console.log("Bu son emas yoki noto'g'ri kiritildi.");
// } else {
//     var birinchiRaqam = son % 10;

//     if (birinchiRaqam % 2 === 0) {
//         console.log("Birinchi raqam juft son");
//     } else {
//         console.log("Birinchi raqam toq son");
//     }
// }



// // 3-masala


// let ball = prompt("Ballni kiriting:")

// let MaxBall = 150;

// let foiz = (ball / MaxBall) * 100;

// alert("Kiritilgan ballning foizi:" + foiz)


// // 4-masala


// for (let i = 5; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }




//  // 5-masala

// let arr1 = ["dunyo", "salom", "ism"]
// let arr2 = ["7", "false", "salom", "undefined"]

// for(let i = 0; i < arr1.length; i++){
//     for(let j = 0; j < arr2.length; j++){
//         if(arr1[i] == arr2[j]){
//             console.log(arr1[i]);
//         }
//     }
// }


// // 6-masala

// // Array yaratish
// let myArray = ["salom", true,  "javascript"];

// // Array ichida boolean qiymatni indexini aniqlash
// let booleanIndex = myArray.findIndex(item => typeof item === 'boolean');

// // Natijani chiqarish
// console.log("Boolean qiymatning indeksi:", booleanIndex);


// // 7-masala



// // Numberlardan tashkil topgan array
// let numbers = [3, 5, 7, 9, 4, 6, 8];

// // Juftlar va toqlarni alohida yig'indisini saqlash uchun o'zgaruvchilar
// let juftlarYigindisi = 0;
// let toqlarYigindisi = 0;

// // Massivni o'zgartirib, juftlar va toqlarni yig'indisini hisoblash
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     juftlarYigindisi += numbers[i];
//   } else {
//     toqlarYigindisi += numbers[i];
//   }
// }

// // Natijalarni konsolga chiqarish
// console.log("Juftlar yig'indisi:", juftlarYigindisi);
// console.log("Toqlar yig'indisi:", toqlarYigindisi);

// // 8-masala

// let elSon1 = prompt("1-sonni kiriting")
// let znak = prompt("Belgini kiriting")
// let elSon2 = prompt("2-sonnin kiriting")

// switch(znak){
//     case "+":
//         console.log(`${elSon1} + ${elSon2} = ${+elSon1 + +elSon2}`);
//         break;
//     case "-":
//         console.log(`${elSon1} - ${elSon2} = ${elSon1 - elSon2}`);
//         break;
//     case "*":
//         console.log(`${elSon1} * ${elSon2} = ${elSon1 * elSon2}`);
//     break;
//     case "/":
//         console.log(`${elSon1} / ${elSon2} = ${elSon1 / elSon2}`);
//     break;
//     default : console.log("Bu siz kutgan natija emas");
// }


// // 9-masala


// // Musbat va manfiy sonlardan iborat array yaratish
// let numbers = [3, -7, 12, -5, 8, -10, 15];

// // Array ichidagi manfiy sonlarni teskarisiga o'zgartirish
// let modifiedArray = numbers.map(num => (num < 0 ? -num : num));

// // Natijani konsolga chiqarish
// console.log("Boshlang'ich array:", numbers);
// console.log("O'zgartirilgan array:", modifiedArray);


