import Hero from "./Hero";
import TechStack from "./TechStack";
import AboutMe from "./AboutMe";

const Home = () => {
    return (
        <main className="container mx-auto my-8 min-h-screen space-y-8 px-4">
            <Hero />
            <TechStack />
            <AboutMe />
        </main>
    );
};

export default Home;
