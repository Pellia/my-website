import { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";

const NavHamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    // Functions
    const handleNavVisibility = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="flex md:hidden">
                <div className="cursor-pointer space-y-2" onClick={handleNavVisibility}>
                    <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-neutral-300"></span>
                </div>
            </div>
            <div className={isNavOpen ? "bg-background absolute top-0 left-0 flex h-lvh w-full flex-col items-center justify-evenly" : "hidden"}>
                <div className="absolute top-0 right-0 px-8 py-8" onClick={handleNavVisibility}>
                    <svg className="h-8 w-8 text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className="flex min-h-[250px] flex-col items-center justify-between">
                    {navData.map((item) => (
                        <Link key={item.id} to={item.route} onClick={handleNavVisibility} className="underline underline-offset-4">
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NavHamburger;
