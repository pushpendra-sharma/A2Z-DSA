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

/**
 *
 * @param {number} n - The number of rows and columns in the pattern.
 * @returns {string} - The generated pattern as a string.
 */
export function pattern6(n = 5) {
  let pattern = '';

  for (let i = n; i > 0; i--) {
    for (let j = i; j > 0; j--) {
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
export function pattern7(n = 5) {
  let pattern = ``;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      pattern += ` @ `;
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += ' * ';
    }
    for (let l = 0; l < n - i - 1; l++) {
      pattern += ' @ ';
    }
    pattern += '\n';
  }

  return pattern;
}

export function pattern8(n) {
  let pattern = ``;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      pattern += ` * `;
    }
    for (let k = i; k < 2 * n - 1 - i; k++) {
      pattern += ' * ';
    }
    for (let j = 0; j < i; j++) {
      pattern += ` * `;
    }
    pattern += '\n';
  }

  return pattern;
}
