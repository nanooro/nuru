"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "../components/ui/button";
import Header from "../components/ui/header";
import Hero from "../components/ui/hero";
import { motion } from "framer-motion";

export default function Home() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="p-0 ">
      <Header setTheme={setTheme} theme={theme} />
      <Hero />
    </div>
  );
}
