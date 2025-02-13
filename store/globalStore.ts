import { create } from "zustand";

interface StoreState {
  user: {
    email: string;
    expenditure: number;
  };
}

const useStore = create<StoreState>((set) => ({
  user: {
    email: "",
    expenditure: 0,
  },
  setUser: (email: string, expenditure: number) =>
    set({ user: { email, expenditure } }),
}));

export default useStore;
