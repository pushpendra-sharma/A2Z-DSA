/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern1(n = 5) {
  let pattern = ``;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += `* `;
    }
    pattern += `\n`;
  }

  return pattern;
}

/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern2(n = 5) {
  let pattern = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += '* ';
    }
    pattern += '\n';
  }

  return pattern;
}
