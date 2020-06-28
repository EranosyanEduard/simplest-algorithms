// Алгоритм проверки набора символов на соответствие определению палиндрома.

/**
 * Check a word is a palindrome.
 * @param {string} string - word/character set.
 * @returns {boolean} Boolean value.
 */
function isPalindrome(string) {
  const lastIndex = string.length - 1;
  const convertedString = string.toLowerCase();
  for (let i = 0; i < (lastIndex / 2); i++) {
    if (convertedString[i] !== convertedString[lastIndex - i]) {
      return false;
    }
  }
  return true;
}
