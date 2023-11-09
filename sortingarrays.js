// let numbers = [5, 30, 400, 1, 111, 6];
// numbers.sort();
// console.log(numbers)

// function compareAscendingNumbers(a,b){
//     if (a < b) return -2;
//     else if (a === b) return 0;
//     else return 2
// }
// let numbers = [5, 30, 400, 1, 111, 6];
// numbers.sort(compareAscendingNumbers);
// console.log(numbers)

// let numbers = [5, 30, 400, 1, 111, 6];

// numbers.sort(function(a,b){
// if (a > b) return -2;
// else if (a === b) return 0;
// else return 2
// });
// console.log(numbers);

// let numbers = [5, 30, 400, 1, 111, 6];
// numbers.sort(function(a,b){
//     return b-a;
// });
// console.log(numbers)

let products =[
    {productId: 5, item: "ruler(5 pk)", price: 5.99},
    {productId: 10, item: "crayons(10pk)", price: 30.00},
    {productId: 20, item: "black pen(30pk)", price: 50.00}
];
number.sort(function(a, b){
if(a.item > b.item) return -2;
else if(a.item === b.item) return 0;
else return 2
});
// let numProducts = products.length;
// for (let i = 0; i < products.length; i++){
//     console.log(products[i].item+
//         "$" + products[i].price.toFixed(2));
// }
