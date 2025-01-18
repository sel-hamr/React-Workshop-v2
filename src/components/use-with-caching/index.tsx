import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { UserProfile } from "./user-profile";

export const Example = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <UserProfile username="Bret" />
      </ErrorBoundary>
    </Suspense>
  );
};
