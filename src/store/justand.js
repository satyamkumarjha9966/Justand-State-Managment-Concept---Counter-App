import { create } from "zustand";

export const useStore = create((set) => ({
    count: 0,
    increaseCount: () => {
        set((state) => ({count: state.count + 1}))
    },
    decreaseCount: () => {
        set((state) => ({count: state.count - 1}))
    },
    reset: () => {set({count: 0})}
}))