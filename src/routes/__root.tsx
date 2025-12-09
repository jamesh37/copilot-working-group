import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

const RootComponent = () => {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
