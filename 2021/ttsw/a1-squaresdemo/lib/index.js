"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const squares_1 = require("./squares");
const logMessage = (message) => {
    console.log(message);
};
const values = [2, 3, 4, 5];
logMessage(`square(${values}) = ${(0, squares_1.squares)(values)}`);
