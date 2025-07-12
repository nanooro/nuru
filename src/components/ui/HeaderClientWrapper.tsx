"use client";

import { useTheme } from "next-themes";
import Header from "@ui/header";

export default function HeaderClientWrapper() {
  const { theme, setTheme } = useTheme();

  return <Header theme={theme} setTheme={setTheme} />;
}