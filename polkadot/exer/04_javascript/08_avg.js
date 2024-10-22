"use strict";

function avg(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
