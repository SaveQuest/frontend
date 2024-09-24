import { create } from 'zustand'
import { requester } from '../lib/api'

export const useUserStore = create((set) => ({
  data: {
    name: "누군가",
    points: 12,
    notiCnt: 3,
  },
  refreshUserData: async () => {
    requester.getDSTHeader()
      .then((res) =>
        set((prev) => ({
          name: res.name,
          points: res.points,
          notiCnt: res.notificationCount,
          token: prev.token
        })))
      .catch(e => console.error(e))
  }
}))