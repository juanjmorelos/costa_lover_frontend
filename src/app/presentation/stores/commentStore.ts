import { create } from "zustand"

type Store = {
    comment: boolean
    setComment: (value: boolean) => void;
  }
  
export const commentStore = create<Store>()((set) => ({
    comment: false,
    setComment: (value: boolean) => set({ comment: value }),
}))