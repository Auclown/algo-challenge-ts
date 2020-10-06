const reflectString = (s: string): string => {
  let result: string = "";
  const reflects: object = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
  };

  for (let i = 0; i < s.length; i++) {
    result += reflects[s[i]];
  }

  return result;
};

// Test
console.log(reflectString("name")); // mznv
