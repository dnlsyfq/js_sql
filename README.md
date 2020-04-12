# JS and SQLite

*   exec is a JavaScript function that we've provided. It accepts a string containing SQL code, then runs that SQL in our database, SQLite

```
exec(`CREATE TABLE users (email TEXT, name TEXT)`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`SELECT * FROM users`)
```
```
Data Type
*   TEXT

```
---
*   WHERE 
```
SELECT name FROM users WHERE length(name) > 4
```
---
# JS Array 

*   null and undefined.
*   var, let, and const.
*   Conditionals (if) and ternary conditionals (a ? y : b)
*   C-style for loops: for (let i=0; i<10; i++) { ... }.
*   Regular functions: function f() { ... }.
*   Arrow functions: const f = () => { ... }.

**Array Method**

*   .length;

*   .push(element); // add last and return new length

*   .pop(); // remove and return last element 

*   .slice(startIndex,stopIndex - 1) ; // access a subsection of an array
    > begin index is past the end of the array, we get an empty result
    > With no arguments, slice will slice all elements of the array. This effectively copies the array. If we change the original, it won't affect the copy. Likewise, if we change the copy, it won't affect the original.
```
var orig = [10, 20, 30]
var copy = orig.slice()
copy[0] = 1
```    

---

# Modern Javascript 

modern versions of JavaScript have "strict mode". It prevents many kinds of mistakes, including global variable definitions like x = 1. Strict mode is enabled by putting the string 'use strict' at the top of a module or function.

Babel, TypeScript, and most other JavaScript compilers automatically insert 'use strict' for us. This course does that as well: all code here runs in strict mode. If we try to define a variable with x = 1, we'll get an error

delete the Object.prototype property will cause an error. (Deleting that property would wreak havoc on JavaScript's prototype-based object system.)


```
git remote add origin https://github.com/dnlsyfq/js_sql.git

git push -u origin master
```