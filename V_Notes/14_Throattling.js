// Throattling:
// Throattling is used to call a function after every milisecond or a perticular interval of time
// only the first click is executed immediately.

function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

const updatePosition = () => {
    console.log('Position updated');
};

const throttledUpdatePosition = throttle(updatePosition, 200);

// Usage: Call throttledUpdatePosition() on scroll event
window.addEventListener('scroll', throttledUpdatePosition);

// Purpose: Ensures that a function is only executed at most once every specified interval, regardless
// of how many times the event occurs.
// Use Case: Useful for events that trigger frequently, such as window scrolling, mouse movement, or resizing.