for (let step = 1; step <= 100; step ++) {
    if (step % 3 === 0 && step % 5 === 0) {
        console.log("fizzbuzz");
    } else if (step % 5 === 0) {
    console.log("buzz");
    } else if (step % 3 === 0)
    console.log("fizz");
    else  {
    console.log(step);
    }
    }