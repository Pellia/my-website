import Capstone from "./Capstone";
import Enterprise from "./Enterprise";
import Simple from "./Simple";

const Projects = () => {
    return (
        <div>
            <h2 className="font-inter-extrabold text-center text-3xl"> Projects</h2>
            <Enterprise />
            <Capstone />
            <Simple />
        </div>
    );
};

export default Projects;
