import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="bg-background/75 sticky top-0 h-16 backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
