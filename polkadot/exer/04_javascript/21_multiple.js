"use strict";

function is_multiple(n1, n2) {
    if (n2 === 0) {
        throw new Error("n2 não pode ser 0.");
    }

    return n1 % n2 === 0;
}
