"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = exports.plays = void 0;
exports.plays = {
    hamlet: { name: 'Hamlet', type: 'tragedy' },
    'as-like': { name: 'As You Like It', type: 'comedy' },
    othello: { name: 'Othello', type: 'tragedy' },
};
exports.invoice = {
    customer: 'BigCo',
    performances: [
        {
            playId: 'hamlet',
            audience: 55,
        },
        {
            playId: 'as-like',
            audience: 35,
        },
        {
            playId: 'othello',
            audience: 40,
        },
    ],
};
//# sourceMappingURL=datas.js.map