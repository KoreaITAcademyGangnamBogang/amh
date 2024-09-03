let result = 0;
for (
    let i = 0;// 초기식 1
    i <= 10; // 조건식 2 // 5
    i++ // 증감식   // 4
    ) {
        // 3
    result += i; // 0, 1, 2, ..., 9
}
// console.log(result);

for (let i = 0; i < 10; i++) {
    // console.log(i);
    // continue;
}



let num1 = 3;
let num2 = 5;
let big;
big = (num1 > num2) ? num1 : num2;
if(num1 > num2){
    big = num1;
} else {
    big = num2;
}
// console.log(big);

// if(num1 > num2){
//     console.log(num1);
// } else {
//     console.log(num2);
// }
let ifStatement = num1 > num2 & num1 > 0 & num2 > 0;
// console.log((num1 > num2 & num1 > 0 & num2 > 0) ? (num1) : (num2));
let key = 3;
// switch (key) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         break;
// }

// if(key == 1) {
//     console.log(1);
// } else if(key == 2){
//     console.log(2);
// } else if(key == 3){
//     console.log(3);
// }


const BLACK = 0, RED = 1, YELLOW = 2;
const colors = ["black", "red", "yellow"];
// colors[BLACK] => "black"
let choice = 0; // black
// switch(choice){
//     case BLACK:
//         html.style(colors[BLACK]);
//         break;
//     case RED:
//         html.style(colors[RED]);
//         break;
// }
















// ==========================================
// 배열 -> 배치 + 나열
// 여러 개의 값을 가지고 있는 하나의 큰 보따리
// 나열하여 배치된(순서가 있다)
// 값의 타입이 다르더라도 하나의 배열에 담길 수 있다.
arr = {};














