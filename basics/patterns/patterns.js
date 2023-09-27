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

/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern3(n = 5) {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += `${j} `;
    }
    pattern += '\n';
  }

  return pattern;
}

/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern4(n = 5) {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += `${i} `;
    }
    pattern += '\n';
  }

  return pattern;
}

/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern5(n = 5) {
  let pattern = '';

  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
      pattern += '* ';
    }
    pattern += '\n';
  }

  return pattern;
}
