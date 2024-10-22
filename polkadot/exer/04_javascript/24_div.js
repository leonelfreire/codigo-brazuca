"use strict";

function dividers(n) {
    if (n === 0) {
        throw new Error("n deve ser maior que 0.");
    }

    let divs = []
    for (let i = 1; i <= Math.abs(n); i++) {
        if (n % i === 0) {
            divs.push(i);
        }
    }

    return divs;
}
