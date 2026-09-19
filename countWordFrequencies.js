function countWordFrequencies(sentence) {
  let frequency = {};
  sentence = sentence.toLowerCase();
  const splitWord = sentence.split(/[^a-z0-9]+/);

  for (let word of splitWord) {
    if (word === "") {
      continue;
    }
    if (frequency[word]) {
      frequency[word]++;
    } else {
      frequency[word] = 1;
    }
  }
  return frequency;
}

console.log(countWordFrequencies("Hello world, hello!")); // {"hello":2,"world":1}
console.log(
  countWordFrequencies("The quick brown fox jumps over the lazy dog. The"),
); // {"the":2,"quick":1,"brown":1,"fox":1,"jumps":1,"over":1,"lazy":1,"dog":1}
console.log(countWordFrequencies("Hello")); // {"hello":1}
console.log(countWordFrequencies("HELLO hello HeLLo")); // {"hello":3}
console.log(countWordFrequencies("hello world hello world")); // {"hello":2,"world":2}
console.log(countWordFrequencies("")); // {}
console.log(countWordFrequencies("     ")); // {}
console.log(countWordFrequencies("!!!")); // {}
console.log(countWordFrequencies("hello, hello, hello!")); // {"hello":3}
