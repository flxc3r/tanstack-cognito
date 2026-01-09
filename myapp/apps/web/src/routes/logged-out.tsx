import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/logged-out")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-2">
      <div className="grid gap-6 mt-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">You have logged out 👍👋</h2>
        </section>
      </div>
    </div>
  );
}
