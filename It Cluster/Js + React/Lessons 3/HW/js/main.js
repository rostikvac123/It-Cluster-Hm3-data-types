                                                /* Home Work*/
                                                    /*1*/
// let money = +prompt(`How many uan do you wont to exchange?`);
// if (money === null || money ==false || money ==undefined){
//     alert('You entered wrong data!')
// }else{
//     let dollar = (money / 27.30).toFixed(2);
//     let euro = (money / 29.40).toFixed(2);
//     let oil =  (money /(28.49 * dollar)).toFixed(2);
//     let gold = (money / 1591.29).toFixed(2);
//     alert(`You can buy ${dollar} $ or ${euro} euro or ${oil} oil - barrels, or ${gold} grams of gold`)
// }

                                            /*2*/

 // let order = function () {
 //     let money = +prompt("Enter the amount of the order.");
 //     if (money < 500) {
 //         let discount = money * 1 / 100;
 //         money -= discount;
 //         alert(`You have a discount ${discount} and you will pay ${money}`);
 //     } else if (money < 1000) {
 //         let discount = money * 5 / 100;
 //         money -= discount;
 //         alert(`You have a discount ${discount} and you will pay ${money}`);
 //     } else {
 //         (money > 1000)
 //         {
 //             let discount = money * 10 / 100;
 //             money -= discount;
 //             let gift = 200;
 //             alert(`You have a discount ${discount} and you will pay ${money} and you will get gift ${gift}!`);
 //         }
 //     }
 // }
 // order();

                                                /*3*/
/*let test = () =>{
    let result = 0;
    let question1 = +prompt("5*6"," ");
    let question2 = +prompt("7+6"," ");
    let question3 = +prompt("3*6"," ");
    let question4 = +prompt("9/3"," ");
    let question5 = +prompt("21/7"," ");
    if (question1 == 30){
        result+=1;
    }
    if (question2 == 13){
        result+=1;
    }
    if (question3 == 18){
        result+=1;
    }
    if (question4 == 3){
        result+=1;
    }
    if (question5 == 3){
        result+=1;
    }
    if (result == 5){
        result+=1;
    }
    alert(`You scored ${result} points`);

}
test();*/

                                                /*4*/
/*
let num = (+prompt("Enter a three-digit number")).toString();
    if(num[0] == num[1] && num[1] == num[2] && num[0] == num[2]){
        alert("There are 3 matches");
    } else if(num[0] == num[1]){
    alert("There are 2 matches");
    } else if (num[0] == num[2]) {
        alert("There are 2 matches");
    }else if (num[1] == num[2]){
        alert("There are 2 matches")
    } else {
    alert("No matches");
}
*/

                                                /*5*/


let buttonPressed = (prompt("Press the button 1 to =")).toString();
let result;
switch(buttonPressed) {
    case "1":
        result = "!";
        break;

    case "2":
        result = "@";
        break;

    case "3":
        result = "#";
        break;

    case "4":
        result = "$";
        break;

    case "5":
        result = "%";
        break;

    case "6":
        result = "^";
        break;

    case "7":
        result = "&";
        break;

    case "8":
        result = "*";
        break;

    case "9":
        result = "(";
        break;

    case "0":
        result = ")";
        break;

    case "-":
        result = "_";
        break;


    case "=":
        result = "+";
        break;

    default:
        result = "not the correct value";
}
alert(`You get ${result}`);

