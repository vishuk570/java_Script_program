// A memoized function is a function that will never be called twice with the same inputs. 
// Instead it will return a cached value.

// Memoization is an optimization technique used primarily to speed up computer programs by storing 
// the results of expensive function calls and returning the cached result when the same inputs occur again.



// a simple function to add something
const add = (n) => (n + 10);
add(9);


// a simple memoized function to add something
const memoizedAdd = () => {
  let cache = {};
  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = n + 10;
      cache[n] = result;
      return result;
    }
  }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached