import { create } from 'zustand'

export const useUserStore = create((set) => ({
  data: null,
  setUserData: () => set((data) => ({ data })),
  removeUserData: () => set({ data: null }),
}))