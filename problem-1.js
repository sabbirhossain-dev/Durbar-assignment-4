function titleCaseSentence(str) {
  if (str.trim() === "") {
    return "";
  }
  const splited = str.toLowerCase().trim().split(/\s+/);
  let final = [];

  for (let item of splited) {
    let word = item[0].toUpperCase() + item.slice(1);
    final.push(word);
  }

  return final.join(" ");
}

console.log(titleCaseSentence("hello bd i     love   abroad"));
