//Creating stateful objects using the new keyword and a Constructor function

/**CONSTRUCTOR FUNCTION
 *  The Person constructor function has a property (name) and a function (greet).
 *  The Constructor function allows me to define the greet() function only once and makes it available
 *  for all the objects that will be created by the Person function.
 */

function Person(name) {
  this.name = name;
  this.greet = function () {
    return `hello my name is ${this.name}`;
  };
}

const joe = new Person("joe");
const pilex = new Person("pilex");

console.assert(joe.name === "joe");
console.assert(joe.greet() === "hello my name is joe");
console.assert(pilex.name === "pilex");
console.assert(pilex.greet() === "hello my name is pilex");

/**THE NEW KEYWORD
 *  When we use the new keyword :
 *  const joe = new Person("joe");
 *  3 things happen:
 * 1- an empty object is created (const joe = {})
 * 2- "this" is now pointing to this empty object
 * 3- It will return the object
 */

/**CONCLUSION
 * With constructor functions, the state is not maintained because of closure.
 * Instead, an empty object is created to which properties and methods are set.
 * The value of the object property is set when passed as an argument to the constructor function.
 */
