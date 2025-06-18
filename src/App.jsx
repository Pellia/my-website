const App = () => {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-4 bg-neutral-200 text-center text-neutral-700">
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
          <a href="www.linkedin.com/in/dev-rupinder-singh" target="_blank">
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
    </main>
  );
};

export default App;
