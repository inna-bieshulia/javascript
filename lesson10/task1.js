function delayedLog(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

delayedLog("Hello, world!", 2000)
    .then(() => {
        console.log("Done!");
    });

