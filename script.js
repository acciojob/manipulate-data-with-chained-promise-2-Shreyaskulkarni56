//your JS code here. If required.

const output = document.getElementById("output");

function manipulateData() {
    const arr = [1, 2, 3, 4];

    // Initial Promise: resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr);
        }, 3000);
    })

    // First transformation: filter even numbers
    .then((data) => {
        const evenNumbers = data.filter(num => num % 2 === 0);

        return new Promise((resolve) => {
            setTimeout(() => {
                output.innerText = evenNumbers;
                resolve(evenNumbers);
            }, 1000);
        });
    })

    // Second transformation: multiply by 2
    .then((data) => {
        const doubledNumbers = data.map(num => num * 2);

        return new Promise((resolve) => {
            setTimeout(() => {
                output.innerText = doubledNumbers;
                resolve(doubledNumbers);
            }, 2000);
        });
    });
}

manipulateData();
