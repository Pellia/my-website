import { NavLink } from "react-router-dom";
import { navData } from "../../data/navData";

const Navigation = () => {
    return (
        <nav className="flex justify-evenly">
            <ul className="flex gap-4">
                {navData.map((nav) => (
                    <NavLink key={nav.id} to={nav.route} className={({ isActive }) => (isActive ? "text-primary" : "hover:text-primary duration-300")}>
                        {nav.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
