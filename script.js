window.promises = [];
const myPromises = window.promises; // Rename myPromise to myPromises

// Create an array of five promises with random resolve time between 1 to 5 seconds
for (let i = 0; i < 5; i++) {
    const randomTime = Math.floor(Math.random() * 5) + 1;
    const promise = new Promise((resolve, reject) => { // Fix the syntax here
        setTimeout(() => {
            resolve("race-to-finish");
        }, randomTime * 1000); // Convert seconds to milliseconds
    });
    myPromises.push(promise);
}

// Use Promise.any to wait for the first promise to resolve
Promise.any(myPromises)
    .then((res) => {
        const outputdiv = document.getElementById("output");
        outputdiv.textContent = res;
    })
    .catch((err) => {
        console.log("Waiting for the first promise to resolve, check its result", err); // Fix the typo in console.log
    });

// Do not change the code above this
// Add your promises to the array `promises`
