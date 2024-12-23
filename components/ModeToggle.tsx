"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <MdOutlineDarkMode
              size={40}
              className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0 hover:text-black"
            />
            <MdOutlineLightMode
              size={40}
              className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100 dark:text-white/70"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="dark:text-white border dark:bg-[rgb(23,23,23)]  bg-white dark:border-white border-black dark:hover:bg-[rgb(23,23,23)] hover:bg-white"
        >
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
