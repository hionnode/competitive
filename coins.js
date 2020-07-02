var arrangeCoins = (n) => {
  let counter = 0;
  while (n > 0) {
    n = n - counter - 1;
    console.log("step n", n);
    counter = n >= 0 ? counter + 1 : counter;
    console.log("step counter", counter);
  }

  return counter;
};

console.log(arrangeCoins(5));
console.log(arrangeCoins(1));
