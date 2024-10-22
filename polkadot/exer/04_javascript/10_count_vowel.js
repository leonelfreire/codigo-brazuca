"use strict";

const VOWELS = "aeiouAEIOU".split("");

function count_vowel(s) {
    return s.split("").filter((c) => VOWELS.includes(c)).length;
}
