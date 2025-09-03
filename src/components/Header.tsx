import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="bg-background/75 border-border sticky top-0 right-0 left-0 z-50 h-16 border-b-1 backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
                <Logo />
                <Navigation />
                <NavIcons />
            </div>
        </header>
    );
};

export default Header;
