// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


// let a = [18, 1, 7, -1, 0, 2, 11, 8, -20, -6, -18, 2, 12, 13, 15, -13];
// let b = [-13, 8, -18, 2, -20, 7, 12, 18, 13];

// function arrayDiff(a, b) {
//     for (num of b) {
//         for (let i = 0; i < a.length; i++) {

//             let index = a.indexOf(num);
//             if (index > -1) {
//                 a.splice(index, 1);
//             }
//         }
//     }
//     return a;
// }


// function isTriangle(a, b, c) {


//     if ((a > (b - c) && a < (b + c)) && (b > (a - c) && b < (a + c)) && (c > (a - b) && c < (a + b))) {
//         return true;
//     }
//     return false;

// }

let a = [2, 4, 22, 100, 21, 12, 2602, 36];
let armaz = [];
function isOutLier(arr) {
    
    a.forEach((num,index,arr) =>{

        if(num%2 == 0){
            arr[index] = 
        }


    });

}