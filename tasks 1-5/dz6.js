// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

//количество букв

// let word = 'asd3f4g5t';

// const letter = /[a-z]/;
// const dec = /\d/;
// const other = /[\W]/i;

// let lettercount = 0; 
// let deccount = 0;
// let othercount = 0;

// //console.log(word[2]);

// for (i=0; i < word.length; i++){
//   //console.log(word[i]);


//  if (word[i].match(letter)){
//     //console.log(word[i]);
//     lettercount++;
//   } else if (word[i].match(dec)){
//     deccount++;
//   } else if (word[i].match(other)){
//     othercount++;
//   }
// } 
//  alert(lettercount);
//  alert(deccount);
//  alert(othercount);


//  2. Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
// let number = '24';

// const teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемнадцать', 'девятнадцать'];
// const firstdig = [true, 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
// const seconddig = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];


//   if (number[0]==1){
//     numword = teens[number[1]];
//   } else if ((number[0]>=2) && (number[0]<=9 && (number[1]!=0))){
//     numword = firstdig[number[0]-1] + ' ' + seconddig[number[1]-1];
//   } else if ((number[0]>=2) && (number[0]<=9&&(number[1] == 0))){
//     numword = firstdig[number[0]-1];
//   }

//   alert(numword);


//3. Написать функцию, которая заменяет в полученной строке
//большие буквы на маленькие, маленькие – на большие, а
//цифры – на знак нижнего подчеркивания.

// let stringtext = 'SFdefG9Hrte';
// const bigletter = /[A-Z]/;
// const smallletter = /[a-z]/;
// const digit = /[0-9]/;
// let rezult = [];

// //console.log(stringtext[1].match(bigletter));


// for (i=0; i<stringtext.length; i++){
//   if (stringtext[i].match(bigletter)){
// //    console.log(stringtext[i]);
//     rezult[i] = stringtext[i].toLowerCase();
//   } else if (stringtext[i].match(smallletter)){
//     rezult[i] = stringtext[i].toUpperCase();
//   } else if (stringtext[i].match(digit)){
//     rezult[i] = '_';
//   } else {
//     rezult[i] = stringtext[i];
//   }

// }

// console.log(rezult.join(''));


// 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign в textAlign.


// let str = 'font-size';
// let newstr = str.replace(/-[a-zA-Z]{1}/, l => l.toUpperCase());
// newstr = newstr.replace(/-/,'');
// console.log(newstr);
// document.write(newstr);

// 5. Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектноориентированное программирование в ООП. 


// let str = 'объектно ориентированное программирование';
// let newstr = []; 
// let rezult = [];
// let arr = str.split(' ');
// for (i=0; i < arr.length; i++){
// newstr[i] = arr[i].replace(/^[a-zA-Zа-яёА-ЯЁ]{1}/, l => l.toUpperCase());
// rezult [i] = newstr[i].substr(0, 1);
// }

// document.write(rezult.join(''));




