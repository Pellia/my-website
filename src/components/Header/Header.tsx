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
        <header className="bg-background/75 border-border fixed top-0 right-0 left-0 z-50 h-16 backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
                <Logo />
                <div className="hidden lg:flex">
                    <Nav />
                </div>
                <div className="hidden lg:flex">
                    <NavIcons />
                </div>
                <NavHamburger />
            </div>
        </header>
    );
};

export default Header;
