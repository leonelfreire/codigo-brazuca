"use strict";

function is_palindrome(s) {
    s = s.toLowerCase();
    const str_r = s.split("").reverse().join("");

    return s === str_r;
}
