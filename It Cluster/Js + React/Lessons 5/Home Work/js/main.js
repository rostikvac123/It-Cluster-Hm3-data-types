//                                                       1
                                     /*Знайдіть суму всіх цифр від 1 до 100.*/
//through "for"
// let sum = 0;
// for (let i = 1; i<100; i++){
//     sum += i;
// }
// alert(sum);
//through "while"
/*let sum = 0;
let i = 1;
while(i<100){
    sum+=i;
    i++;
}
alert(sum);*/

//                                                        2
                    /*Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.*/

/*let arr =[1, 2, 3, 4, 5];
for (i =0; i < arr.length; i++){
    alert(arr[i]);
}*/



//                                                        3
                            /*Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення*/

/*let max = Math.max.apply(null, [-1, 22, 3, 44, 5]);
alert(max);*/


//                                                        4
        /*Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран.
                         Також досмтатньо тільки 1 змінної для отримання даних від юзера. */

/*
let arr = [];
let negative = 0;
let zero = 0;
let positive = 0;

for (let i=0; i<8; i++){
    let userN = +prompt("Enter 8 numbers in turn", "");
    arr.push(userN);
}
for (let j =0; j<8; j++){
    if(arr[j] == 0){
        zero+=1;
    }else if(arr[j]<0){
        negative+=1;
    }else{
        positive+=1;
    }
}
alert(`This user has entered ${positive} positive numbers, ${negative} neative, ${zero} is zero`);
*/

//                                                        5
                        /*Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8*/
/*let result;
for (let i=1; i<=9; i++){
    result = 8 * i;
    console.log(`8 * ${i} = ${result}`);
}*/

//                                                         6
            /*Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри,
                                             які більше 3-х, але менше 10.*/

/*let arr = [2, 5, 9, 15, 0, 4];
for (let i =0; i<=arr.length; i++){
    if (arr[i]>3 && arr[i]<10){
        alert(arr[i]);
    }
}*/

//                                                          7
        /*Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію,
                             далі вивести результат і спитатись чи хоче юзер повторити?*/


//                 Робота не дороблена
/*
let conf;
let result;
do{
    let a = +prompt('enter the first number', "");
    let b = +prompt('enter the second number', "");
    let sign = +prompt('enter a character for the action with numbers', "");
  switch (sign) {
      case ():
          result = a + b;
          break;
      case ():
          result = a - b;
          break;
      case ():
          result = a * b;
      case ():
          result = a / b;
          break;
  }
    alert(result);
    conf = confirm(`Your result ${result}, do you want to do any more?`);
}while (conf === true);


*/

