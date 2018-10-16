/**
 * unicode coding
 * @param {string} str
 */
export function encodeUnicode(str) { // eslint-disable-line
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res[i] = (`00${str.charCodeAt(i).toString(16)}`).slice(-4);
  }
  return `\\u${res.join('\\u')}`;
}
