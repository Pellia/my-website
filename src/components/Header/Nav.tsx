import { Link } from "react-router-dom";
import { navData } from "../../data/navData";

const Navigation = () => {
    return (
        <nav className="flex justify-evenly">
            <ul className="flex gap-4">
                {navData.map((nav) => (
                    <Link key={nav.id} to={nav.route}>
                        {nav.name}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
