const HTMLEndTagByStartTag = (s: string): string => {
  const temp: string = s.split(" ")[0];
  const getTag: string = temp.replace(/<|>/g, "");
  
  return `</${getTag}>`;
};

// Test
console.log(HTMLEndTagByStartTag("<button type='button' disabled>")); // "</button>"
console.log(HTMLEndTagByStartTag("<i>")); // "</i>"
