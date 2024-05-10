function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Create a 2D array to store distances
  const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
  console.log("dp:", dp);

  // Initialize the first row and column of the array
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }

  // Fill the rest of the array
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // Deletion
        dp[i][j - 1] + 1, // Insertion
        dp[i - 1][j - 1] + cost // Substitution
      );
    }
  }

  // The distance is in the bottom-right cell
  return dp[len1][len2];
}

// Example usage
const str1 = "kitten";
const str2 = "sitting";
console.log(
  `Levenshtein Distance between "${str1}" and "${str2}" is: ${levenshteinDistance(
    str1,
    str2
  )}`
);

// runs in O(m * n) time, where m and n are the lengths of the two input strings respectively
