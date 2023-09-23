/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */

export function pattern1(n) {
  let pattern = ``;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += `* `;
    }
    pattern += `\n`;
  }

  return pattern;
}
