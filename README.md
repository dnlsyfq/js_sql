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
* UPDATE
```
UPDATE table SET column = new value WHERE column = value
```

* SELECT EXPR
```
exec(`SELECT 1`)
[{'1': 1}] 


exec(`SELECT DATE('now') > DATE(0)`)
[{"DATE('now') > DATE(0)": 1}] 
```

* Unique constraints
> use the UNIQUE keyword to tell the database to enforce that rule for us. Inserting a duplicate value into a UNIQUE column is an error
```
UNIQUE constraint on the email address, but not the name. It will reject users with the same email address, even if their names are different.


exec(`CREATE TABLE users (email TEXT UNIQUE, name TEXT)`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)
exec(`INSERT INTO users (email, name) VALUES ('amir@example.com', 'Amir')`)

```
```
-- create table with multiple column unique constraint

exec(`
  CREATE TABLE emails (
    username TEXT,
    domain TEXT,
    UNIQUE (username, domain)
  )
`)
exec(`INSERT INTO emails (username, domain) VALUES ('amir', 'example.com')`)
exec(`INSERT INTO emails (username, domain) VALUES ('betty', 'example.com')`)

```

* DELETE 

```
DELETE FROM <TABLE>

exec(`DELETE FROM users WHERE name = 'Betty'`)
```
* DEFAULT
```
CREATE TABLE users (
    name TEXT,
    login_count INTEGER NOT NULL DEFAULT 0
  );
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

*   .slice();
>   slice from the end of the array by using negative indexes . slice past the end of the array, return [] . return array

*   .concat(array)
> '+' JavaScript will convert the arrays into strings before adding them. so use .concat. concat builds and returns a new array. The original arrays aren't changed.
```
[1, 2].concat([3, 4], [5, 6])
array.concat(element)
```
* .indexOf(element)
> ask an array for the index of a particular element. return index of element. ask for an element that isn't in the array, we get -1.
```
var abc = ['a', 'b', 'c']
abc.slice(abc.indexOf('b'))

var abc = ['a', 'b', 'c']
function sliceFromElement(array, element) {
  var index = array.indexOf(element)
  if (index === -1) {
    return null
  } else {
    return array.slice(index)
  }
}
sliceFromElement(abc, 'd')
```
* .fill(element)
> fill method fills an array with a given value. Any existing values will be overwritten by that value. return array
```
var a = [1, 2]
a.fill(3) // [3,3]


var size = 1 + 2
new Array(size).fill('d')

function fillDynamically(size) {
  return new Array(size).fill('d')
}
fillDynamically(2)
```

*   .push(element); // add last and return new length
```
var people = [
  {name: 'Amir'},
  {name: 'Betty'},
]
var names = []
for (var i=0; i<people.length; i++) {
  names.push(people[i].name)
}
```

*   .pop(); // remove and return last element 

*   .slice(startIndex,stopIndex - 1) ; // access a subsection of an array
    > begin index is past the end of the array, we get an empty result
    > With no arguments, slice will slice all elements of the array. This effectively copies the array. If we change the original, it won't affect the copy. Likewise, if we change the copy, it won't affect the original.
```
var orig = [10, 20, 30]
var copy = orig.slice()
copy[0] = 1
```    
*   .includes(element)
> check for whether an array includes a given element.
```
array.includes(element)

['a', 'b'].includes('c')
```


* forEach 
>   executes a function once for each element in an array . The second argument to forEach's callback is the item's index.
```
var nums = [1, 2, 3]
var sum = 0
nums.forEach(num => {
  sum = sum + num
})
sum
```
```
var people = [
  {name: 'Cindy'},
  {name: 'Dalili'},
]
var names = []
people.forEach(person => {
  names.push(person.name)
})
```
```
var people = [
  {name: 'Ebony'},
  {name: 'Fang'},
]
people.forEach(person => {
  person.name = person.name.toUpperCase()
})
people[0].name
```
```
var names = ['Gabriel', 'Hana']
var userIDs = [10, 11]
var result = ''
names.forEach((name, index) => {
  result += name + userIDs[index]
})
result
```

* Object to Array

```
var people = [
  {name: 'Cindy'},
  {name: 'Dalili'},
]
var names = []
people.forEach(person => {
  names.push(person.name)
})


```

* map

> calls a function on each element of an array. It returns a new array of the values returned from those function calls. doesn't change the original array.

```
var people = [
  {name: 'Amir'},
  {name: 'Betty'},
]
people.map(person => person.name)
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

* let
> With let, a variable defined inside the if isn't visible outside the if.
```
# let handles nested scopes properly. For example, we can define an x in the function body, then define another x inside an if. Changing the "inner" x won't change the "outer" x.

function f() {
  let x = 'outer'
  if (true) {
    let x = 'inner'
  }
  return x
}
f()

 Any code contained in { curly braces } will have its own scope.
```
* const 
> const variable can never be reassigned. If we try to assign a new value to it, that's an error
```
# can mutate a const array by calling its push method. However, reassigning the array variable to hold a new array isn't allowed.
```