"use strict";

function sum_even(lst) {
    return lst.filter((n) => n % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}
