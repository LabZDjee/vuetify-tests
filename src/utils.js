/* jshint esversion: 6 */

/*
 * Filter prototype:
 *  takes a string to filter and returns
 *   false if string conforms to filter requirement
 *   an object with 'errorMessage' as a string and possibly
 *   a 'filetredValue' as a string if it makes sense
 */

// examples for range:
//  [A-Fa-f0-9]
//  [A-Za-z0-9 _+\-$*:]
export function rangeFilterBuilder(range) {
  return function(str) {
    const rangeRegExp = new RegExp(range);
    const escapedRange = range.replace(/\\-/, "-");
    let chars = str.split("");
    let altered = 0;
    for (let i = 0; i < chars.length; i++) {
      if (!rangeRegExp.test(chars[i])) {
        chars[i] = "";
        altered++;
      }
    }
    const errorMessage = `Illegal character${altered > 1 ? "s" : ""} (not in ${escapedRange})`;
    const filteredValue = chars.join("");
    return altered > 0 ? { errorMessage, filteredValue } : false;
  };
}

export function regexpPatternFilterBuilder(regexp) {
  return function(str) {
    if (regexp.test(str)) {
      return false;
    }
    const regExpCore = regexp.toString().replace(/^\/(.*)\/$/, "$1");
    return { errorMessage: `Does not match pattern (regular expression: "${regExpCore}")` };
  };
}
