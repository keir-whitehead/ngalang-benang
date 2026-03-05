import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-xs outline-none placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-zinc-700",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
