import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-evenly">
            <ul className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Resume</Link>
                <Link to="/articles">Blog</Link>
                <Link to="/resources">Resources</Link>
            </ul>
        </nav>
    );
};

export default Navigation;
