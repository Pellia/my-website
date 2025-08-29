import { Route, Routes, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./components";

const App = () => {
  const [themeMode, setThemeMode] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, []);

  const handleTheme = (name: any) => {
    if (themeMode === "dark") {
      setThemeMode("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      console.log(name);
    } else {
      setThemeMode("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      console.log(name);
    }
  };

  return (
    <>
      <Header />
      <main className="flex h-dvh flex-col items-center justify-center gap-4 bg-neutral-200 text-center text-copy-secondary">
        <h2 className="inline-block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">
          Full Stack Developer
        </h2>
        <h1 className="text-7xl font-bold">Rupinder Singh</h1>
        <ul className="mt-4 flex gap-6">
          <li>
            <a href="https://github.com/Pellia" target="_blank">
              <img
                src="/icons/github-dark.svg"
                alt="github-icon"
                className="h-auto w-8"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dev-rupinder-singh/"
              target="_blank"
            >
              <img
                src="/icons/linkedin.svg"
                alt="linkedin-icon"
                className="h-auto w-8"
              />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/devpellia.bsky.social"
              target="_blank"
            >
              <img
                src="/icons/bluesky-dark.svg"
                alt="bluesky-icon"
                className="h-auto w-8"
              />
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <button
            onClick={() => {
              handleTheme("test");
            }}
            className="bg-primary px-2 py-1 rounded-lg font-bold text-white"
          >
            Dark
          </button>
          <button
            onClick={handleTheme}
            className="bg-primary px-2 py-1 rounded-lg font-bold text-white"
          >
            Light
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
