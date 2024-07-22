import { create } from "zustand"

type LocalStorageStore = {
    storedItem?: string;
    getStoredValue: (key: string) => void;
    setValue: (key: string, value: string) => void;
    removeItem: (key: string) => void;
};

export const useLocalStorageStore = create<LocalStorageStore>()((set) => ({
    storedItem: undefined,

    getStoredValue: (key) => {
        const item = localStorage.getItem(key);
        set({ storedItem: item ?? undefined });
    },

    setValue: (key, value) => {
        try {
            window.localStorage.setItem(key, value);
            set({ storedItem: value });
        } catch (error) {
            console.error(error);
        }
    },

    removeItem: (key) => {
        try {
            window.localStorage.removeItem(key);
            set({ storedItem: undefined });
        } catch (error) {
            console.error(error);
        }
    }
}));
