//Creating stateful objects using Factory Functions and closure

/**FACTORY FUNCTION
 *  The person factory function returns an object that has a property (name) and a function (greet).
 *  The Factory function allows me to define the greet() function only once and makes it available
 *  for all the objects that will be created by the person function.
 */

function person(name) {
  return {
    name,
    greet() {
      return `hello my name is ${name}`;
    },
  };
}

const joeRahme = person("joeRahme");
const pilex = person("pilex");
// Here I assign to the variables joeRahme and pilex the objects created by my Factory Function.

//Test cases
console.assert(joeRahme.name === "joeRahme");
console.assert(joeRahme.greet() === "hello my name is joeRahme");
console.assert(pilex.name === "pilex");
console.assert(pilex.greet() === "hello my name is pilex");

//How is the private, innerstate maintained ?

/** CLOSURE
 * ********
 * A closure is a function having access to the parent scope, even after the parent function has
 * closed (https://www.w3schools.com/js/js_function_closures.asp).
 * 
 * A closure is the combination of a function bundled together (enclosed) with references 
 * to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
 
 */

function makeCounters() {
  let count = 0;

  function counter1() {
    console.log(++count);
  }

  function counter2() {
    console.log(++count);
  }

  return [counter1, counter2];
}

// makeCounters returns an array of functions (counter1 and counter2);

let counters1 = makeCounters();
let counters2 = makeCounters();

// Here I create 2 variables to which I assign the value of makeCounters()

let first = counters1[0];
let second = counters1[1];

// first and second are being assigned respectively the first and second element of the array returned
//by counters1

let third = counters2[0];
let fourth = counters2[1];

// third and fourth are being assigned respectively the first and second element of the array returned
//by counters2

first(); //1

// Closure allows me to keep the value of "count" alive even if the scope of "count" (makeCounters)
// has closed.

first(); //2
second(); //3

// first and second are using the same variable when they are being executed.

third(); //1

// third has its own "count" variable and has nothing to do with the "count" variable created by
// counters1

second(); //4
fourth(); //2

/**CONCLUSION
 * Upon execution, Factory functions allow me to create objects that have their own properties and their own
 * own functions (methods)
 * Closure allows these properties to stay alive and to have their own state.
 */
