import Hero from "./Hero/Hero";
import TechStack from "./TechStack/TechStack";
import AboutMe from "./AboutMe";
import Projects from "./Projects/Projects";

const Home = () => {
    return (
        <main className="container mx-auto min-h-screen space-y-8 px-4">
            <Hero />
            <TechStack />
            <AboutMe />
            <Projects />
        </main>
    );
};

export default Home;
