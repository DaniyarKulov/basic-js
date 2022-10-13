const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let q = 1;
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      q += 1;
    } else {
      b += q + str[i];
      q = 1;
    }
  }
  return b.replace(/1/g, "");
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
