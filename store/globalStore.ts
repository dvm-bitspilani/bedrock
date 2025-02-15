import { create } from "zustand";

interface StoreState {
  user: User;
  setUser: (user: User) => void;

  menuItems: MenuItem[];
  setMenuItems: (menuItems: MenuItem[]) => void;

  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  incrementItemQuantity: (menuItem: MenuItem) => void;
  decrementItemQuantity: (menuItem: MenuItem) => void;
}

export type MenuItem = {
  id: number;
  name: string;
  base_price: number;
  is_veg: boolean;
  is_available: boolean;
};

export type User = {
  email: string;
  expenditure: number;
  position: number | undefined;
};

export type CartItem = { menuItem: MenuItem; quantity: number };

const useStore = create<StoreState>((set) => ({
  user: {
    email: "",
    expenditure: 0,
    position: undefined,
  },
  setUser: (user: User) => set({ user }),

  menuItems: [],
  setMenuItems: (menuItems: MenuItem[]) => set({ menuItems }),

  cartItems: [],
  setCartItems: (cartItems: CartItem[]) => set({ cartItems }),
  incrementItemQuantity: (menuItem: MenuItem) =>
    set((state) => {
      const updatedCartItems = [...state.cartItems];
      const itemIndex = updatedCartItems.findIndex(
        (item) => item.menuItem.id === menuItem.id
      );
      if (itemIndex !== -1) {
        updatedCartItems[itemIndex].quantity++;
      } else {
        updatedCartItems.push({ menuItem, quantity: 1 });
      }
      return { cartItems: updatedCartItems };
    }),
  decrementItemQuantity: (menuItem: MenuItem) =>
    set((state) => {
      const updatedCartItems = [...state.cartItems];
      const itemIndex = updatedCartItems.findIndex(
        (item) => item.menuItem.id === menuItem.id
      );
      updatedCartItems[itemIndex].quantity--;
      if (updatedCartItems[itemIndex].quantity === 0) {
        updatedCartItems.splice(itemIndex, 1);
      }
      return { cartItems: updatedCartItems };
    }),
}));

export default useStore;
