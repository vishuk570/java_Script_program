//  Debounced :
//  A debounced function is a function whose execution is delayed by t milliseconds and
//  whose execution is cancelled if it is called again within that window of time. 
//  The debounced function should also receive the passed parameters.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const search = () => {
    console.log('Search executed');
};

const debouncedSearch = debounce(search, 300);
// Usage: Call debouncedSearch() whenever the user types
document.getElementById('searchInput').addEventListener('input', debouncedSearch);


// Purpose: Ensures that a function is only executed once after a specified period of inactivity.
// It prevents the function from being called repeatedly in quick succession.
// Use Case: Useful for events that trigger a high number of calls, such as window resizing, 
// keypress, or search input changes.