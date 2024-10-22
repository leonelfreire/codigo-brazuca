"use strict";

function count_char(s, c) {
    if (c.length !== 1) {
        throw new Error("car deve ter tamanho 1.");
    }

    return s.split("").filter((c) => c === c).length;
}
