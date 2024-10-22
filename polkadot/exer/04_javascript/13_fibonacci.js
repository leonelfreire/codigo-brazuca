"use strict";

function fibonacci(n) {
    if (n <= 0) {
        throw new Error("n deve ser maior que 0.");
    }

    if (n === 1) {
        return [0];
    }

    if (n === 2) {
        return [0, 1];
    }

    let termos = [0, 1]
    for (let i = 2; i < n; i++) {
        termos.push(termos[i - 1] + termos[i - 2]);
    }

    return termos;
}
