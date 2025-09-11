import { createContext } from "react";

type MyTrackContextType = {
  mytracks: TimeTracking[];
  setMytracks: (mytracks: TimeTracking[]) => void;
};
export const MytracksContext = createContext<MyTrackContextType>({
  mytracks: [],
  setMytracks: () => {},
});
