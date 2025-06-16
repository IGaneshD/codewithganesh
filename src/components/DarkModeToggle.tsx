"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (savedTheme === "dark") {
        htmlEl.classList.add("dark");
        setIsDark(true);
      } else {
        htmlEl.classList.remove("dark");
        setIsDark(false);
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      htmlEl.classList.add("dark");
      setIsDark(true);
    } else {
      htmlEl.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDark = () => {
    const htmlEl = document.documentElement;
    if (htmlEl.classList.contains("dark")) {
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDark}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-theme"
      aria-label="Toggle dark mode"
      type="button"
    >
      {/* Sun icon for dark mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-slate-700 dark:text-slate-300 ${isDark ? "block" : "hidden"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* Moon icon for light mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-slate-700 dark:text-slate-300 ${isDark ? "hidden" : "block"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
}
