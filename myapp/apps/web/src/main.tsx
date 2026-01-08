import { RouterProvider, createRouter } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";

import Loader from "./components/loader";
import { routeTree } from "./routeTree.gen";
import { cognitoAuthConfig } from "./config/cognitoAuthConfig";

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: () => <Loader />,
  context: {},
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Root element not found");
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AuthProvider {...cognitoAuthConfig}>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
