/**
 * @param {string} word
 * @return {number}
 */

var wonderfulSubstrings = function (word) {
  let res = 0; // counter

  // This array is used to keep track of the frequency of different XOR accumulations of character positions.
  let y = Array(2 ** 10).fill(0);

  // The first element y[0] is set to 1 to account for the scenario where a substring directly results in a XOR of 0.
  y[0] = 1;

  // cur is used to keep the current XOR value of processed characters' positions, initialized to 0.
  let cur = (res = 0);

  for (let x of word) {
    /*
     
    
The expression - 97 is used to convert ASCII codes of lowercase letters into zero-based indices. In ASCII, the letter 'a' has a code of 97, 'b' has 98, 'c' has 99, and so on up to 'z', which is 122. By subtracting 97 from the ASCII code of a character, you effectively map:

'a' → 97 - 97 = 0
'b' → 98 - 97 = 1
'c' → 99 - 97 = 2
...
'z' → 122 - 97 = 25
     
    */
    cur ^= 1 << (x.charCodeAt() - 97);
    res += y[cur];
    for (let i = 0; i < 10; i++) {
      res += y[cur ^ (1 << i)];
    }
    y[cur]++;
  }
  return res;
};
