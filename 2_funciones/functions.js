"use strict";
(() => {
    const hero = "flash";
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
})();
