"use strict";

function is_ordered(lst) {
    const lst_ord = [...lst].sort();

    for (let i = 0; i < lst.length; i++) {
        if (lst[i] !== lst_ord[i]) {
            return false;
        }
    }

    return true;
}
