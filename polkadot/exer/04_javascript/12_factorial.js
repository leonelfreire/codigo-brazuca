"use strict";

function factorial(n) {
    if (n < 0) {
        throw new Error("n deve ser maior ou igual a 0.");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
