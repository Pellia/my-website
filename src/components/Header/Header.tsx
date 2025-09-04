import { useScroll, useMotionValueEvent } from "motion/react";
import Logo from "../Logo";
import Nav from "./Nav";
import NavIcons from "./NavIcons";
import NavHamburger from "./NavHamburger";

const Header = () => {
    const { scrollY } = useScroll();

    // Functions
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
            <div className="container mx-auto hidden h-full items-center justify-between gap-2 px-4 md:flex">
                <Logo />
                <Nav />
                <NavIcons />
            </div>
            <NavHamburger />
        </header>
    );
};

export default Header;
