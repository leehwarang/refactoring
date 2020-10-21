export interface PlayItem {
  name: string;
  type: string;
}

export interface Play {
  [key: string]: PlayItem;
}

export interface Performance {
  playId: string;
  audience: number;
}

export interface Invoice {
  customer: string;
  performances: Performance[];
}

export const plays: Play = {
  hamlet: {name: 'Hamlet', type: 'tragedy'},
  'as-like': {name: 'As You Like It', type: 'comedy'},
  othello: {name: 'Othello', type: 'tragedy'},
};

export const invoice: Invoice = {
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
