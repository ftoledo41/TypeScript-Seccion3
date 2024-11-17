"use strict";
(() => {
    // aqui permitimos multiples tipos
    let myCustomVariables = "Francisco";
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
    myCustomVariables = 20;
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: "Bruce Wayne",
        age: 45,
        powers: [1],
    };
    console.log(myCustomVariables);
    console.log(typeof myCustomVariables);
})();
