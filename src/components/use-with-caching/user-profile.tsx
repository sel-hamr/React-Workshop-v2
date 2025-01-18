import { use } from "react";
import { Cache, fetchUser } from "./utils";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const userCache = new Cache<User>();

export function UserProfile({ username }: { username: string }) {
  // Use the cache to fetch the user data and store it for preventing unnecessary fetches
  const user = use(userCache.fetch(username, () => fetchUser(username)));

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <div className="space-y-2">
        <p>
          <span className="font-semibold">Username:</span> {user.username}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span> {user.website}
        </p>
      </div>
    </div>
  );
}
