import SvgPC from "./SvgPC";
import { socialdata } from "../../../data/socialData";

const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById("tech");
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="flex h-dvh items-center gap-6">
            <div className="flex flex-col text-center text-lg lg:w-full lg:text-left">
                <h1 className="font-inter-extrabold">
                    <span className="from-primary block bg-gradient-to-r via-indigo-300 to-violet-400 bg-clip-text text-4xl font-bold text-transparent">Full Stack Developer</span>
                    <span className="font-inter-black text-6xl">Rupinder Singh</span>
                </h1>
                <p className="font-inter-semibold mt-6 text-2xl">Building scalable applications with modern technologies</p>
                <p className="font-inter-medium my-6 text-justify">
                    Passionate self-thaught full stack developer with 5+ years of experience as a bioinformatician in the healthcare field, building powerful and data-driven applications, with a clear
                    focus on functionality, usability and an intuitive user interface.
                </p>
                <ul className="flex items-center justify-center gap-3 lg:justify-start">
                    {socialdata.map((social) => {
                        const SocialComponent = social.icon;
                        return (
                            <li key={social.id}>
                                <a href={social.link} target="_blank" className="bg-background-secondary hover:bg-background-hover block cursor-pointer rounded-md p-3 duration-300">
                                    <SocialComponent size="1.5em" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="hidden w-full lg:flex">
                <SvgPC />
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                <button
                    className="text-l-text-3 dark:text-d-text-3 hover:text-primary flex animate-bounce cursor-pointer flex-col items-center space-y-2 duration-300"
                    aria-label="Scroll to about section"
                    onClick={handleScroll}
                >
                    <span className="text-md font-medium">Scroll Down</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-arrow-down h-5 w-5"
                        aria-hidden="true"
                    >
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;
