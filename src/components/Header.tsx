import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className="h-16 bg-neutral-900 text-gray-300">
            <div className="container mx-auto flex h-full items-center justify-between gap-2 px-4">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
