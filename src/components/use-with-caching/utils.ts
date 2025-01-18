import { User } from "./user-profile";

export class Cache<T> {
  // Map to store the promises for each key
  private cache = new Map<string, Promise<T>>();
  // Fetch method to fetch the data and store it in the cache
  async fetch(key: string, fetcher: () => Promise<T>): Promise<T> {
    if (!this.cache.has(key)) {
      try {
        this.cache.set(key, fetcher());
      } catch (error) {
        this.cache.delete(key);
        throw error;
      }
    }
    // Wait for the promise to resolve
    return this.cache.get(key)!;
  }
  // Clear the cache
  clear() {
    this.cache.clear();
  }
}

export async function fetchUser(username: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res.ok) throw new Error("Failed to fetch user");

  const users = await res.json();
  const user = users.find((u: User) => u.username === username);
  if (!user) throw new Error(`User ${username} not found`);

  return user;
}
