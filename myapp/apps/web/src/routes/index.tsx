import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const TITLE_TEXT = `
  _______              _             _                _____                  _ _        
 |__   __|            | |           | |              / ____|                (_) |       
    | | __ _ _ __  ___| |_ __ _  ___| | __  ______  | |     ___   __ _ _ __  _| |_ ___  
    | |/ _\` | '_ \\/ __| __/ _\` |/ __| |/ / |______| | |    / _ \\ / _\` | '_ \\| | __/ _ \\ 
    | | (_| | | | \\__ \\ || (_| | (__|   <           | |___| (_) | (_| | | | | | || (_) |
    |_|\\__,_|_| |_|___/\\__\\__,_|\\___|_|\\_\\           \\_____\\___/ \\__, |_| |_|_|\\__\\___/ 
                                                                  __/ |                 
                                                                 |___/                  
`;

function HomeComponent() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-2">
      <pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
      <div className="grid gap-6 mt-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">This is the home page</h2>
        </section>
      </div>
    </div>
  );
}
