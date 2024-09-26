import { create } from 'zustand';
import { requester } from '../lib/api';

export const useUserStore = create((set) => ({
  data: {
    name: "",
    points: 12,
    notiCnt: 3,
  },
  setUserData: (userData) => set({ data: userData }),
  refreshUserData: async () => {
    requester.getDSTHeader()
      .then((res) =>
        set((prev) => ({
          data: {
            name: res.name,
            points: res.points,
            notiCnt: res.notificationCount,
          },
          token: prev.token
        })))
      .catch(e => console.error(e));
  },
}));
