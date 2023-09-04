/* function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
} */

/* (double = arr) => {
  arr.map((val) => {
    val * 2;
  });
}; */
const double = (arr) => arr.map((val) => val * 2);

/* function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
} */

(squareAndFindEvens = numbers) => {
  numbers.map((num) => {
    return num ** 2;
  });
  (squares = squares ** 2).filter((square) => {
    return square % 2 === 0;
  });
  return evens;
};
