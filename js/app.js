

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
// let modifiedArray = numbers.map(number => (number < 0 ? -number : number));

// // Natijani konsolga chiqarish
// console.log("Boshlang'ich array:", numbers);
// console.log("O'zgartirilgan array:", modifiedArray);

// // 10-masala

// let number1 = [7, 8, 9, 10]
// let number2 = [4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < number1.length; i++){
//     for(let j= 0; j < number2.length; j++){
//         if(number1[i] == number2[j]){
//             console.log(number1[i]);
//         }
//     }
// }


// // 11-masala

// let numbers = [15, 16, 17, 50, 99];


// let minNumber = numbers[0];
// let maxNumber = numbers[0];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] < minNumber){
//         minNumber = numbers[i];
//     } else if(numbers[i] > maxNumber) {
//         maxNumber = numbers[i];
//     }
// }

// console.log(minNumber);
// console.log(maxNumber);


// 2-rasm

// // 1-masala


// // Musbat va manfiy sonlardan iborat array yaratish
// let numbers = [3, 9, 19, -8, -7, -5];

// // Yig'indini hisoblash
// let sum = 0;

// // Array ichidagi musbat va manfiy sonlarni yig'indisini topish
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// // Natijani konsolga chiqarish
// console.log("Array yig'indisi:", sum);


// // // 2-masala


// // Foydalanuvchidan dollar miqdorini so'raymiz
// let dollarAmount = parseFloat(prompt("Dollar miqdorini kiriting:"));

// // Agar foydalanuvchi to'g'ri son kiritmasa yoki bosh qo'ygan bo'lsa
// if (isNaN(dollarAmount) || dollarAmount <= 0) {
//   alert("Noto'g'ri qiymat kiritildi. Iltimos, to'g'ri son kiriting.");
// } else {
//   // Dastur orqali hisoblash (masalan, 1 dollar = 10500 so'm)
//   const exchangeRate = 13000;
//   let sumAmount = dollarAmount * exchangeRate;

//   // Natijani alert orqali chiqarish
//   alert(`${dollarAmount} dollar ${sumAmount} so'mga teng.`);
// }
































// calculator 

// // Foydalanuvchidan ikki son va amalni so'raymiz
// let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

// // Agar foydalanuvchi to'g'ri son kiritmagan yoki bosh qo'ygan bo'lsa
// if (isNaN(num1) || isNaN(num2)) {
//   alert("Noto'g'ri qiymat kiritildi. Iltimos, to'g'ri sonlarni kiriting.");
// } else {
//   // Foydalanuvchidan amalni so'raymiz
//   let operation = prompt("Amalni tanlang (+, -, *, /):");

//   // For tsikli bilan amalni tanlash va bajarish
//   let result;
//   for (let i = 0; i < 1; i++) {
//     if (operation === '+') {
//       result = num1 + num2;
//     } else if (operation === '-') {
//       result = num1 - num2;
//     } else if (operation === '*') {
//       result = num1 * num2;
//     } else if (operation === '/') {
//       // 0 ga bo'lib bo'lishni tekshirish
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         alert("Nolga bo'lish mumkin emas.");
//         i = -1; // Agar foydalanuvchi noto'g'ri amal kiritganda tsiklni qaytarish
//       }
//     } else {
//       alert("Noto'g'ri amal tanlang. Qaytadan kiriting.");
//       i = -1; // Agar foydalanuvchi noto'g'ri amal kiritganda tsiklni qaytarish
//     }
//   }

//   // Natijani konsolga chiqarish
//   if (result !== undefined) {
//     alert(`Natija: ${result}`);
//   }
// }




