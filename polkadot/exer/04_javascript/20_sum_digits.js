"use strict";

function sum_digits(n) {
    return Math.abs(n).toString().split("").reduce((acc, curr) => Number.parseInt(acc) + Number.parseInt(curr), 0);
}
