import { Link } from "@tanstack/react-router";
import { useAuth } from "react-oidc-context";

import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Header() {
  const auth = useAuth();

  const links = [
    { to: "/", label: "Home" },
    { to: "/me", label: "Me" },
  ] as const;

  return (
    <div>
      <div className="flex flex-row items-center justify-between px-2 py-1">
        <span>Tanstack-Cognito</span>
        <nav className="flex gap-8 text-lg">
          {links.map(({ to, label }) => {
            return (
              <Link key={to} to={to}>
                {label}
              </Link>
            );
          })}
        </nav>
        <div>
          {auth.isAuthenticated && auth.user ? (
            <>
              <span className="mr-2">{auth.user.profile.email}</span>
              <Button
                size={"xs"}
                variant={"destructive"}
                onClick={() => auth.removeUser()} // is this the best way to do it ???
              >
                Sign out
              </Button>
            </>
          ) : (
            <Button
              className="bg-green-500 rounded-md"
              size={"lg"}
              onClick={() => auth.signinRedirect()}
            >
              Sign in
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
      <hr />
    </div>
  );
}
