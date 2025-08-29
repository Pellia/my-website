import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-neutral-900 h-16 text-gray-300">
      <div className="h-full mx-4">
        <div className="flex gap-2 container justify-between mx-auto items-center h-full">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
