function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here\
  let countApple = 0;
  let countOrange = 0;
  apples.forEach((element) => {
    if (element + a >= s && element + a <= t) {
      countApple++;
    }
  });
  oranges.forEach((element) => {
    if (element + b >= s && element + b <= t) {
      countOrange++;
    }
  });
  console.log(countApple);
  console.log(countOrange);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
console.log(countApplesAndOranges(2, 3, 1, 5, [2], [-2]));
