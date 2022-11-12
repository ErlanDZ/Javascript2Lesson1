let i = 0;
const arr = [1, 2, 3];

function printArrayValues(arr, index  = 0){
    console.log(arr[index], 'array');
    index++;
    if(index < arr.length){
       printArrayValues(arr, index);
    }
}
//printArrayValues(arr);


let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arrNew = arr2.concat(arr1)
let index  = arrNew.length;

function printAddArrayValues(){
    index++;
    arrNew.push(index);
    if(index < 10){
        printAddArrayValues();
    }
}
//printAddArrayValues();
// console.log(arrNew);

let arr3 = [1,2,3,4,5]
//console.log(arr3[arr3.length-1]);

function countChar(str) {
    const regExp = str;
    const reg = /[o]/g;
    console.log(regExp.match(reg).length);
}

countChar('loremipsumdolor');
