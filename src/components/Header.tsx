import { useScroll, useMotionValueEvent } from "motion/react";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Navigation from "./Navigation";

const Header = () => {
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const header = document.getElementsByTagName("Header")[0];
        if (current > 0) {
            header.classList.add("border-b-1");
        } else {
            header.classList.remove("border-b-1");
        }
    });

    return (
        <header className="bg-background/75 border-border sticky top-0 z-50 h-16 backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
                <Logo />
                <Navigation />
                <NavIcons />
            </div>
        </header>
    );
};

export default Header;
