import { CopyableDisplay } from "@/components/CopyableDisplay";
import { createFileRoute } from "@tanstack/react-router";
import { useAuth } from "react-oidc-context";

export const Route = createFileRoute("/me")({
  component: RouteComponent,
});

function RouteComponent() {
  const auth = useAuth();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-2 mt-4">
      <pre className="overflow-x-auto font-mono text-sm py-4">Hello /me</pre>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          {!auth.isAuthenticated && (
            <div className="text-orange-400">Not authenticated</div>
          )}
          {auth.isLoading && <div>Loading...</div>}
          {auth.error && (
            <div className="text-red-500">
              Encountering error...
              <br />
              {auth.error.message}
            </div>
          )}

          {auth.isAuthenticated && auth.user && (
            <div className="space-y-6">
              <div>
                <span className="text-3xl">{auth.user.profile.email}</span>
                <br />
                <pre className="text-md">Sub: {auth.user.profile.sub}</pre>
              </div>

              <div>
                <pre> ID Token </pre>
                <CopyableDisplay
                  toDisplay={auth.user.id_token || ""}
                  toCopy={auth.user.id_token || ""}
                />
              </div>

              <div>
                <pre> Access Token: </pre>
                <CopyableDisplay
                  toDisplay={auth.user.access_token || ""}
                  toCopy={auth.user.access_token || ""}
                />
              </div>

              <div>
                <pre> Refresh Token: </pre>
                <CopyableDisplay
                  toDisplay={auth.user.refresh_token || ""}
                  toCopy={auth.user.refresh_token || ""}
                />
              </div>

              <div>
                <pre>Profile</pre>
                <pre className="bg-teal-500 rounded-md p-1">
                  {JSON.stringify(auth.user.profile, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
