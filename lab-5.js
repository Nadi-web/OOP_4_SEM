// task 1
function delay(ms) {
    return new Promise(resolve => {
        const randomNumber = Math.random();
        resolve(randomNumber);
    }, 3000);
    }
      
delay(3000).then((randomNumber) => console.log("случайное число:",randomNumber));

// task2
function myPromiseWithDelay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            resolve(randomNumber);
        }, delay);
    });
}

function ThreeRandomNumbers() {
    const delays = [1000, 2000, 3000]; 

    const promises = delays.map((delay) => myPromiseWithDelay(delay));

    Promise.all(promises)
        .then((results) => {
            console.log("случайные числа:", results);
        })
        .catch((error) => {
            console.error("ошибка:", error);
        });
}

ThreeRandomNumbers();

// task 3
let pr = new Promise((res,rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))


// task 4 

const myPromise = new Promise((resolve, reject) => {
    resolve(21);
});

myPromise
    .then((result) => {
        console.log(result); 
        return result * 2;
    })
    .then((result) => {
        console.log(result); 
    })
    .catch((error) => {
        console.error("ошибка:", error);
    });

 // через async await

 async function runAsync() {
    const myPromise = new Promise((resolve) => {
        resolve(21);
    });

    try {
        const result1 = await myPromise;
        console.log("async:",result1); 

        const result2 = result1 * 2;
        console.log("async:",result2); 
    } catch (error) {
        console.error("ошибка:", error);
    }
}

runAsync();
