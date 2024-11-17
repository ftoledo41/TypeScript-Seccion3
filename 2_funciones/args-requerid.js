"use strict";
(() => {
    const fullName = (firstName, LastMame) => {
        return `${firstName} ${LastMame}`;
    };
    const name = fullName("Tony", "Stark");
    console.log({ name });
    const name2 = fullName("Tony", false);
    console.log({ name });
})();
