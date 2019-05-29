'use strict';

function safeCall(f) {
  try {
    f();
  } catch(e) {
    return false;
  }
  return true;
}

console.log(safeCall(() => console.log('Hello!')));
 // true
console.log(safeCall(() => JSON.parse('abc')));
 // false
console.log(safeCall(() => false));
 // true
console.log(safeCall(() => abc));
 // false
