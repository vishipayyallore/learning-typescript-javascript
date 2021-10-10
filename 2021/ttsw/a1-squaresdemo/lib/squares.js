"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squaresv1 = exports.squares = void 0;
function squares(values) {
    const results = values.map(x => x * x);
    return results;
}
exports.squares = squares;
const squaresv1 = (values) => {
    return values.map(x => x * x);
};
exports.squaresv1 = squaresv1;
