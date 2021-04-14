function square(num, charSymbol = "#") {
  if (typeof num === "number") {
    for (let i = 0; i < num; i++) {
      console.log(charSymbol.repeat(num));
    }
  }
}
square(3, "*");
