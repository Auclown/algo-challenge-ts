const chessBoardColour = (cellOne: string, cellTwo: string): boolean => {
  // a, c, e, g ==> odd numbers are black, even numbers are black
  // b, d, f, h ==> odd numbers are white, even numbers are white
  const cellStringOne: string[] = ["a", "c", "e", "g"];
  const cellStringTwo: string[] = ["b", "d", "f", "h"];
  let cellOneColour: string = "";
  let cellTwoColour: string = "";

  cellOne = cellOne[0].toLowerCase();
  cellTwo = cellTwo[0].toLowerCase();

  // Check cellOne
  // When the letter is one of a, c, e or g
  if (cellStringOne.includes(cellOne[0])) {
    if (parseInt(cellOne[1]) % 2 == 0) {
      cellOneColour = "black";
    } else {
      cellOneColour = "white";
    }
  }

  // When the letter is one of b, d, f or h
  if (cellStringTwo.includes(cellOne[0])) {
    if (parseInt(cellOne[1]) % 2 == 0) {
      cellOneColour = "white";
    } else {
      cellOneColour = "black";
    }
  }

  // Check cellTwo
  // When the letter is one of a, c, e or g
  if (cellStringOne.includes(cellTwo[0])) {
    if (parseInt(cellTwo[1]) % 2 == 0) {
      cellTwoColour = "black";
    } else {
      cellTwoColour = "white";
    }
  }

  // When the letter is one of b, d, f or h
  if (cellStringTwo.includes(cellTwo[0])) {
    if (parseInt(cellTwo[1]) % 2 == 0) {
      cellTwoColour = "white";
    } else {
      cellTwoColour = "black";
    }
  }

  return cellOneColour == cellTwoColour;
};

// Test
console.log(chessBoardColour("A1", "C3")) // true
console.log(chessBoardColour("A1", "H3")) // false
