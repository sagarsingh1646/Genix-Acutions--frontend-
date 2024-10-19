import { atom } from 'recoil';

export const bidState = atom({
  key: 'bidState',
  default: {
    bidId: "",
    bidPrice: "",
  },
});