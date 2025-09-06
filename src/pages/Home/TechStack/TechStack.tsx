const TechStack = () => {
    return (
        <section id="tech" className="pt-24">
            <div className="">
                <h2 className="font-inter-extrabold text-center text-3xl">My Tech Stack & Skills</h2>
                <p className="font-inter-medium text-center text-lg">Technologies and processes I work with daily</p>
                <div className="mx-auto mt-4 grid w-[80%] gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border-1 border-neutral-800">
                        <h3 className="font-inter-extrabold mt-2 text-center text-lg">Frontend Development</h3>
                        <div className="grid gap-4 p-4 text-neutral-800 sm:grid-cols-2">
                            <div className="rounded-xl bg-neutral-300 p-4">React</div>
                            <div className="rounded-xl bg-neutral-300 p-4">TypeScript</div>
                            <div className="rounded-xl bg-neutral-300 p-4">JavaScript</div>
                            <div className="rounded-xl bg-neutral-300 p-4">TailwindCSS</div>
                            <div className="rounded-xl bg-neutral-300 p-4">HTML</div>
                            <div className="rounded-xl bg-neutral-300 p-4">CSS</div>
                        </div>
                    </div>
                    <div className="rounded-xl border-1 border-neutral-800">
                        <h3 className="font-inter-extrabold mt-2 text-center text-lg">Backend & Infrastructure</h3>
                        <div className="grid gap-4 p-4 text-neutral-800 sm:grid-cols-2">
                            <div className="rounded-xl bg-neutral-300 p-4">Node.js</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Express.js</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Python</div>
                            <div className="rounded-xl bg-neutral-300 p-4">FastAPI</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Docker</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Serverless</div>
                        </div>
                    </div>
                    <div className="rounded-xl border-1 border-neutral-800">
                        <h3 className="font-inter-extrabold mt-2 text-center text-lg">Databases</h3>
                        <div className="grid gap-4 p-4 text-neutral-800 sm:grid-cols-2">
                            <div className="rounded-xl bg-neutral-300 p-4">SQL</div>
                            <div className="rounded-xl bg-neutral-300 p-4">PostgreSQL</div>
                            <div className="rounded-xl bg-neutral-300 p-4">MySQL</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Oracle</div>
                            <div className="rounded-xl bg-neutral-300 p-4">FileMaker</div>
                            <div className="rounded-xl bg-neutral-300 p-4">MongoDB</div>
                        </div>
                    </div>
                    <div className="rounded-xl border-1 border-neutral-800">
                        <h3 className="font-inter-extrabold mt-2 text-center text-lg">Development Practices</h3>
                        <div className="grid gap-4 p-4 text-neutral-800 sm:grid-cols-2">
                            <div className="rounded-xl bg-neutral-300 p-4">Agile Development</div>
                            <div className="rounded-xl bg-neutral-300 p-4">CI/CD</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Documentation</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Git Flow</div>
                        </div>
                    </div>
                    <div className="rounded-xl border-1 border-neutral-800 lg:col-span-2">
                        <h3 className="font-inter-extrabold mt-2 text-center text-lg">Business & Development</h3>
                        <div className="grid gap-4 p-4 text-neutral-800 sm:grid-cols-2">
                            <div className="rounded-xl bg-neutral-300 p-4">Full Stack Development</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Product Development</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Entrepreneurship</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Project Management</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Technical Writing</div>
                            <div className="rounded-xl bg-neutral-300 p-4">Team Organization</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
