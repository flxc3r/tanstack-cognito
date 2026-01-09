import { cognitoAuthConfig } from "@/config/cognitoAuthConfig";
import { type AuthContextProps } from "react-oidc-context";

export function signOutRedirect() {
  const clientId = cognitoAuthConfig.client_id;
  const logoutUri = import.meta.env.VITE_COGNITO_REDIRECT_URI + "/logged-out"; // could optimize this and use tanstack router for type-safety ???
  const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}

export function signOut(auth: AuthContextProps) {
  // In a react component, pass the auth object like this:
  // import { useAuth } from "react-oidc-context";
  // const auth = useAuth();

  auth.removeUser(); // local cleanup
  signOutRedirect(); // Cognito logout
}
