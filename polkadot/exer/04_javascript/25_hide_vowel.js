"use strict";

const VOWELS = "aeiouAEIOU".split("");

function hide_vowel(s) {
    return s.replaceAll(/[aeiouAEIOU]/g, "*");
}
