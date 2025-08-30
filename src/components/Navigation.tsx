import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/resources">Resources</Link>
            </ul>
        </nav>
    );
};

export default Navigation;
