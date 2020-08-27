function addBorder(a: string[]) {
  let result: string[] = [];
  let alphaOmega: string = "";

  a.forEach((element) => {
      let newElement: string = "*" + element;
      newElement += "*";
      result.push(newElement);
  });

  const stringLength = result[0].length;
  for (let i = 0; i < stringLength; i++) {
    alphaOmega += "*";
  }

  result.unshift(alphaOmega);
  result.push(alphaOmega);

  return result
}

console.log(addBorder(["abc", "ded"]));
