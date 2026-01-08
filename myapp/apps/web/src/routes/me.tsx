import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/me")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-2 mt-4">
      <pre className="overflow-x-auto font-mono text-sm py-4">Hello /me</pre>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">Blablabla</h2>
        </section>
      </div>
    </div>
  );
}
