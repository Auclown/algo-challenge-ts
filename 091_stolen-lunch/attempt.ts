const stolenLunch = (note: string): string => {
  const decode: object = {
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };
  const mesg: string = note.split(":")[0];
  const code: string = note.split(":")[1].replace(" ", "");

  let firstPart: string = "";
  let secndPart: string = "";

  for (let i = 0; i < mesg.length; i++) {
    let letter = mesg[i];
    if (!isNaN(parseInt(mesg[i]))) {
      letter = getKeyByValue(decode, mesg[i]);
    }
    firstPart += letter;
  }

  for (let i = 0; i < code.length; i++) {
    secndPart += decode[code[i]];
  }

  return `${firstPart}: ${secndPart}`;
};

const getKeyByValue = (object: object, value: string) => {
  return Object.keys(object).find((key) => object[key] == value);
};

// Test
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja")); // you'll never guess it: 2390
