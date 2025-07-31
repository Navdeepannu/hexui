"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { searchData, SearchItem } from "@/constants/data/search-data";
import { useRouter } from "next/navigation";
import {
  IconArrowForward,
  IconCircle,
  IconCircleDotted,
  IconCommand,
  IconSearch,
} from "@tabler/icons-react";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filtered = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );

  const grouped = filtered.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleClick = (href: string, type: string) => {
    setOpen(false);

    if (type === "page") {
      router.push(href);
    } else {
      // Scroll to section
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href); // fallback if on a different page
      }
    }
  };

  //   Ctrl + k and command + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="text-muted-foreground hover:bg-background w-full justify-start border-neutral-200 shadow-sm transition-transform"
        >
          <IconSearch className="text-neutral-600" />
          Search Components
          <span className="bg-muted flex items-center gap-1 rounded px-1.5 py-0.5 text-sm dark:text-neutral-200">
            <IconCommand />K
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-background rounded-xl border border-neutral-300 shadow-xl sm:max-w-[500px] dark:border-neutral-700">
        <div className="flex">
          <DialogTitle></DialogTitle>
          <Input
            autoFocus
            placeholder="Search components or docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border shadow-none selection:bg-sky-900 selection:text-white focus:border-transparent focus:ring-0 focus:outline-none"
          />
        </div>
        <div className="max-h-[400px] space-y-2 overflow-y-auto border-t border-neutral-700 pt-2 text-neutral-300">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <div className="text-muted-foreground px-2 pt-3 text-sm font-semibold tracking-wide uppercase">
                {category === "getting-started"
                  ? "Getting Started"
                  : "Components"}
              </div>
              <div className="mt-1 space-y-1">
                {items.map((item) => (
                  <Button
                    key={item.title}
                    variant="ghost"
                    className="hover:bg-muted w-full justify-start gap-2 text-left text-sm"
                    onClick={() => handleClick(item.href, item.type)}
                  >
                    <IconCircleDotted size={16} />
                    {item.title}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
