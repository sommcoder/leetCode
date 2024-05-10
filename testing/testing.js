const textsArr = ["apple pie", "apple tart", "banana pie"];

const jaccardMatch = (input, textsArr, threshold) => {
  // filter through each string in the array
  // and determine WHICH strings MATCH the "keyword"/input string based on the threshold provided!
  const setA = new Set(input.split(" "));
  return textsArr.filter((text) => jaccardSimilarity(setA, text) >= threshold);
};
const jaccardSimilarity = (setA, b) => {
  const setB = new Set(b.split(" "));
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
};
// Output: ['apple pie', 'apple tart']

function measureExecutionTime() {
  const startTime = performance.now();
  console.log(jaccardMatch("apple", textsArr, 0.2));
  const endTime = performance.now();
  return endTime - startTime;
}

console.log(
  `Execution time: ${measureExecutionTime().toFixed(2)} milliseconds`
);
