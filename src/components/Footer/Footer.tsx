import Logo from "../Logo";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="border-border bg-background h-24 border-t-1 text-white">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="mt-4 h-16">
                    <Logo />
                    <p className="text-xs">Copyright © Rupinder Singh - {new Date().getFullYear()}</p>
                </div>
                <ul className="text-sm">
                    <NavLink to={"/legalnotice"} className={"hover:text-primary duration-300"}>
                        Legal Notice
                    </NavLink>
                </ul>

                <p className="text-sm">
                    <a href="https://storyset.com/" target="_blank" rel="noreferrer noopener" className="hover:text-primary duration-300">
                        illustrations by Storyset
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
