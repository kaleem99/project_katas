function defaultTriangle(num) {
  let charStr = "";
  for (var i = 0; i < num; i++) {
    charStr += "#";
    console.log(charStr);
  }
}

function rightTriangle(num) {
  for (var i = 0; i < num; i++) {
    var str = "";
    for (var j = 0; j < num; j++) {
      if (j >= num - i - 1) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

function negativeRightTriangle(num) {
  var val = num * -1;
  var triangle = "";
  for (var i = 0; i < val; i++) {
    for (var j = 0; j < i; j++) {
      triangle += " ";
    }
    for (var k = 0; k < val - i; k++) {
      triangle += "#";
    }
    triangle += "\n";
  }
  console.log(triangle.slice(0, triangle.length - 1));
}

function negativeLeftTriangle(num) {
  let newNum = Math.abs(num);
  let str = "#".repeat(newNum);
  let array = str.split("");
  for (let i = 0; i < newNum; i++) {
    console.log(array.join(""));
    array.pop();
  }
}

function isosceles(num) {
  for (i = 0; i < num; i++) {
    str = "";
    for (j = 1; j < num - i; j++) {
      str += " ";
    }
    for (k = 0; k < 2 * i + 1; k++) {
      str += "#";
    }
    console.log(str);
  }
}

function negativeIsosceles(num) {
  var val = num * -1;
  var triangle = "";
  for (var i = val; i > 0; i--) {
    for (var j = 0; j < val - i; j++) {
      triangle = triangle + " ";
    }
    for (var k = 0; k < 2 * i - 1; k++) {
      triangle = triangle + "#";
    }
    triangle += "\n";
  }
  console.log(triangle.slice(0, triangle.length - 1));
}

function triangle(num, mode = "left") {
  if (typeof num === "number") {
    if (mode == "right" && num > 0) {
      rightTriangle(num);
    } else if (mode == "right" && num < 0) {
      negativeRightTriangle(num);
    } else if (mode == "left" && num > 0) {
      defaultTriangle(num);
    } else if (mode == "left" && num < 0) {
      negativeLeftTriangle(num);
    } else if (mode == "isosceles" && num > 0) {
      isosceles(num);
    } else {
      negativeIsosceles(num);
    }
  }
}

triangle(5);
