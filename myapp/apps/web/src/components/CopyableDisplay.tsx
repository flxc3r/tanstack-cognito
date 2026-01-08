import { useState } from "react";
import { Button } from "./ui/button";

interface CopyableDisplayProps {
  toDisplay: string;
  toCopy: string;
}

export function CopyableDisplay({ toDisplay, toCopy }: CopyableDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(toCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-start gap-2 border rounded p-2 max-w-96">
      <div className="overflow-x-auto flex-1 font-mono text-sm whitespace-nowrap">
        {toDisplay}
      </div>
      <Button onClick={handleCopy}>{copied ? "✅ Done" : "Copy"}</Button>
    </div>
  );
}
