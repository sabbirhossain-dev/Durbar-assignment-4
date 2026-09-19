function isAnagram(s1, s2) {
  s1 = s1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
  s2 = s2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  return s1 === s2;
}

console.log(isAnagram("silent", "listen"));
console.log(isAnagram("Hello", "world"));
console.log(isAnagram("Hello", "hello"));
console.log(isAnagram("Hello", "elloh"));
