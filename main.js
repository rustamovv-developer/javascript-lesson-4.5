// While 1

// let a = 12;
// let b = 2;

// let i = 1;

// while (i <= b) {
//   i++;
// }

// console.log(a - b);

// While 2

// let a = 13;
// let b = 3;
// let count = 0;

// let i = 1;

// while (i <= a) {
//   i++;
//   count++;
// }

// console.log(Math.trunc(count / 2));

// While 3

// let n = 6;
// let i = 1;
// while (i <= n) {
//   n -= 3;
//   i++;
//   if (n === 0) {
//     console.log("3 ning darajasi");
//   }
// }

// console.log(n);

// While 4

// let n = 6;
// let m = 2;
// let i = 0;

// while (i <= n) {
//   n -= m;
//   i++;
// }
// console.log(n + " qoldiq");

// While 5

// let n = parseInt(prompt("Istalgan butun son kiriting (n > 0):"));
// let teskari = "";

// if (n > 0) {
//   while (n > 0) {
//     let raqam = n % 10;
//     teskari += raqam;
//     n = Math.floor(n / 10);
//   }
//   console.log(+teskari);
// } else {
//   console.log("N > 0 shartni qanoatlantiradi!");
// }

// While 6

// let n = parseInt(prompt("Istalgan butun son kiriting (n > 0):"));
// let yigindi = 0;
// let raqamlarSon = 0;

// if (n > 0) {
//   let daraja = 1;
//   while (n >= daraja * 10) {
//     daraja *= 10;
//   }

//   while (n > 0) {
//     let raqam = Math.floor(n / daraja);
//     yigindi += raqam;
//     raqamlarSon = raqam;
//     n -= raqam * daraja;
//     daraja /= 10;
//   }

//   console.log("Berilgan sonning raqamlari yig'indisi: " + yigindi);
//   console.log("Berilgan sonning raqamlari soni: " + raqamlarSon);
// } else {
//   console.log("N > 0 shartni qanoatlantiradi!");
// }

// While 7

// let n = +prompt("Istalgan butun son kiriting (n > 0):");
// let bor = false;

// if (n > 0) {
//   let qoldiq;
//   while (n > 0) {
//     qoldiq = n % 10;
//     if (qoldiq === 2) {
//       bor = true;
//       break;
//     }
//     n = Math.floor(n / 10);
//   }

//   if (bor) {
//     console.log("Berilgan sonning ichida 2 raqami bor.");
//   } else {
//     console.log("Berilgan sonning ichida 2 raqami yo'q.");
//   }
// } else {
//   console.log("N > 0 shartni qanoatlantiradi!");
// }

// While 8

// let n = +prompt("Istalgan butun son kiriting (n > 0):");
// let bor = false;

// if (n > 0) {
//   let qoldiq;
//   while (n > 0) {
//     qoldiq = n % 10;
//     if (qoldiq % 2 !== 0) {
//       bor = true;
//       break;
//     }
//     n = Math.floor(n / 10);
//   }

//   if (bor) {
//     console.log("Berilgan sonning ichida toq raqam bor.");
//   } else {
//     console.log("Berilgan sonning ichida faqat juft raqamlar bor.");
//   }
// } else {
//   console.log("N > 0 shartni qanoatlantiradi!");
// }

// While 9

// While 10

// let a = 3;
// let d = 0;
// let i = 1;

// while (i <= a / 2) {
//   if (a % i == 0) {
//     d++;
//   }
//   i++;
// }
// if (d > 1) {
//   console.log(a + " tub emas!");
// } else {
//   console.log(a + " tub!");
// }

// While 11

// let son = +prompt("Sonni kiriting:");
// let aylanuvchiSon = 0;

// while (son > 0) {
//   let qoldiq = son % 10;
//   aylanuvchiSon = aylanuvchiSon * 10 + qoldiq;
//   son = Math.floor(son / 10);
// }

// console.log("Teskarisi: ", +aylanuvchiSon);

// While 12

// let n = +prompt("son");
// let ketmaKetSonlar = "";
// let i = 1;

// while (i <= n) {
//   ketmaKetSonlar += i;
//   i++;
// }

// let nechaMarta = ketmaKetSonlar.split("1").length - 1;
// console.log(ketmaKetSonlar);
// console.log("Sonda 1 " + nechaMarta + " ta qatnashgan");

// While 13

// let n = +prompt("son");
// let ketmaKetSonlar = "";
// let i = 1;
// let count = 0;

// while (i <= n) {
//   ketmaKetSonlar += i;
//   count += i;
//   i++;
// }

// let nechaMarta = ketmaKetSonlar.split("1").length - 1;
// console.log(ketmaKetSonlar);
// console.log(count);

// While 14

// let n = +prompt("son kirit");
// let count = 0;

// while (n > 1) {
//   n /= 10;
//   count++;
// }

// console.log(count + " xonali son");

// While 15

// let a = +prompt("qator");
// let b = +prompt("ustun");

// for (let i = 1; i <= a; i++) {
//   let line = "";
//   if (i === 1 || i === a) {
//     for (let j = 1; j <= b; j++) {
//       line += "* ";
//     }
//   } else {
//     line += "*";
//     for (let j = 2; j < b; j++) {
//       line += "  ";
//     }
//     line += " *";
//   }
//   console.log(line);
// }

// While 16
// let N = +prompt("son kirit");
// let count = 0;
// let tubSonlar = "";

// for (let i = 2; i <= N; i++) {
//   let tub = true;
//   let j = 2;

//   while (j * j <= i) {
//     if (i % j === 0) {
//       tub = false;
//       break;
//     }
//     j++;
//   }

//   if (tub) {
//     count++;
//     tubSonlar += i + ", ";
//   }
// }

// console.log(count + " ta tub sonlar bor bular -> " + " (" + tubSonlar + ")");



