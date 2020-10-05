const proCategorization = (pros: string[], pref: string[][]): string[][] => {
  const prosResult = [];
  const prefResult = [];
  const prefObj = {};

  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < pref[i].length; j++) {
      if (prefObj.hasOwnProperty(prefObj[pref[i][j]])) {
        prefObj[pref[i][j]].push(pros[i]);
      } else {
        prefObj[pref[i][j]] = [pros[i]];
      }
    }
  }

  for (const prop in prefObj) {
    prosResult.push([[prop], [...prefObj[prop]]]);
  }

  prosResult = prosResult.sort((p1, p2) => {
    const p1Lower = p1[0][0].toLowerCase();
    const p2Lower = p2[0][0].toLowerCase();

    if (p1Lower > p2Lower) {
      return 1;
    }

    if (p1Lower < p2Lower) {
      return -1;
    }

    return 0;
  });

  return prosResult;
};

// Test
console.log(
  proCategorization(
    ["Jack", "Leon", "Maria"],
    [
      ["Computer repair", "Handyman", "House cleaning"],
      ["Computer lessons", "Computer repair", "Data recovery service"],
      ["Computer lessons", "House cleaning"],
    ]
  )
);
// [[["Computer lessons"], ["Leon", "Maria"]],
// [["Computer repair"], ["Jack", "Leon"]],
// [["Data recovery service"], ["Leon"]],
// [["Handyman"], ["Jack"]],
// [["House cleaning"], ["Jack", "Maria"]]]
