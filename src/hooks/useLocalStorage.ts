import { useSyncExternalStore } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  // Get the initial value from localStorage or use the provided initialValue
  const getSnapshot = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  };

  // Subscribe to localStorage changes
  const subscribe = (callback: () => void) => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        callback();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  // Use useSyncExternalStore to manage the subscription
  const value = useSyncExternalStore(subscribe, getSnapshot, () => "");

  // Set value in localStorage
  const setValue = (newValue: T) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: key,
          newValue: JSON.stringify(valueToStore),
        })
      );
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  };

  return [value, setValue] as const;
}

export default useLocalStorage;
