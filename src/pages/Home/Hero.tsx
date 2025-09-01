const Hero = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex flex-col">
                <h1 className="font-inter-extrabold">
                    <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">Full Stack Developer</span>
                    <span className="font-inter-black text-6xl">Rupinder Singh</span>
                </h1>
                <p className="font-inter-medium my-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam perferendis cumque corporis, fugiat illo tempora. Consequuntur animi, earum rem sunt quo ducimus quae, voluptates
                    doloribus, pariatur perspiciatis maxime recusandae natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur accusamus veniam in quo voluptatibus, perferendis
                    vero, reprehenderit repellendus totam, doloribus quas reiciendis incidunt natus animi velit vitae delectus! Sint!
                </p>
                <ul className="flex gap-6">
                    <li>
                        <a href="https://github.com/Pellia" target="_blank">
                            <img src="./src/assets/icons/github-dark.svg" alt="github-icon" className="h-auto w-8" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dev-rupinder-singh/" target="_blank">
                            <img src="./src/assets/icons/linkedin.svg" alt="linkedin-icon" className="h-auto w-8" />{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://bsky.app/profile/devpellia.bsky.social" target="_blank">
                            <img src="./src/assets/icons/bluesky-dark.svg" alt="bluesky-icon" className="h-auto w-8" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="size-96 w-2xl bg-blue-400"></div>
            </div>
        </div>
    );
};

export default Hero;
