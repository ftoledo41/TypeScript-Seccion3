"use strict";
// upper: boolean = false
(() => {
    const fullName = (firstName, LastMame, upper = false) => {
        if (upper)
            return `${firstName} ${LastMame || "--------"}`.toUpperCase();
        else
            return `${firstName} ${LastMame || "--------"}`;
    };
    const name = fullName("Tony");
    console.log({ name });
})();
