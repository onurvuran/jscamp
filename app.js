
         //--------  1. Ödev 1.madde ------------
function request(...requests) {
  for (let i = 0; i < requests.length; i++) {
     let secure = false;
    

    for (let j = 2; j < requests[i] / 2; j++) {
      if (requests[i] % j == 0) {  // % mod alma operatörü
        console.log(requests[i] + "  - Asal sayı değildir.");

         secure = true;
         
      } 
    }
    if (secure == false) {
      console.log(requests[i] + "    + Asal sayılar.");
    }
  }
}

request(
  10,
  20,
  33,
  43,
  67,
  879,
  66,
  90,
  12,
  46,
  892,
  6788,
  1234,
  878,
  3260,
  265,
  1997
);


  //--------  1. Ödev 2.madde ------------
function friendNumbers(number1, number2) {

    let Divisor1 = 0;
    let Divisor2 = 0;

    for (let i = 1; i < number1; i++) {

        if (number1 % i == 0) {
            Divisor1 = Divisor1 + i;
        }
        }

        for (let i = 1; i < number2; i++) {
            if (number2 % i == 0) {
                Divisor2 = Divisor2 + i;
            }
        if (Divisor2 == number1 && Divisor1 == number2) { 
            console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
        }
        else {
            console.log(number1 + " ve " + number2 + " : arkadaş sayı değillerdir.")
        }
    }


}
friendNumbers(220,284)


 //--------  1. Ödev 3.madde ------------
console.log("Mükemmel sayılar listesi:");
for (let i = 1; i <= 1000; i++) {
    let divisor = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            divisor = divisor + j;
        }
    }

    if (divisor == i) {
        console.log(i);
    }
}

//--------  1. Ödev 4.madde ------------
console.log("Asal sayılar listesi: ");
for (let i = 2; i <= 1000; i++) {
    let cT = true;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            cT = false;
            break;
        }
    }
    if (cT == true) {
        console.log(i);
    }
}
