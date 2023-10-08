import { atom } from "recoil";

interface RightCommunity {
  activities: Array<string>;
  language: string;
  country: string;
}

export const rightCommunityAtom = atom<RightCommunity>({
  key: "rightCommunityState",
  default: {
    activities: [],
    language: "",
    country: "",
  },
});
