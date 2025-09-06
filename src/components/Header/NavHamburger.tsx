import { useState } from "react";
import { Link } from "react-router-dom";
import { navData } from "../../data/navData";
import { socialdata } from "../../data/socialData";

const NavHamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    // Functions
    const handleNavVisibility = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div className="flex lg:hidden">
                <div className="cursor-pointer space-y-2" onClick={handleNavVisibility}>
                    <span className="block h-0.5 w-8 bg-neutral-300"></span>
                    <span className="block h-0.5 w-8 bg-neutral-300"></span>
                    <span className="block h-0.5 w-8 bg-neutral-300"></span>
                </div>
            </div>
            <div className={isNavOpen ? "bg-background absolute top-0 left-0 flex h-lvh w-full flex-col items-center justify-start gap-12" : "hidden"}>
                <div className="absolute top-0 right-0 h-16 w-full">
                    <div className="container mx-auto flex h-full justify-end p-4" onClick={handleNavVisibility}>
                        <svg className="h-8 w-8 cursor-pointer text-neutral-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
                <ul className="mt-24 flex min-h-[250px] flex-col items-center justify-between text-lg">
                    {navData.map((item) => (
                        <Link key={item.id} to={item.route} onClick={handleNavVisibility} className="hover:text-primary">
                            {item.name}
                        </Link>
                    ))}
                </ul>
                <ul className="flex gap-2">
                    {socialdata.map((social) => {
                        const SocialComponent = social.icon;
                        return (
                            <li key={social.id} className="bg-background hover:bg-background-2 rounded-md p-1.5 duration-300">
                                <a href={social.link} target="_blank">
                                    <SocialComponent size="2em" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default NavHamburger;
