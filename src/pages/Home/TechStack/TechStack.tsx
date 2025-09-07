import { techdata } from "../../../data/techData";
import "./styles.css";

const TechStack = () => {
    return (
        <section id="tech" className="py-24">
            <h2 className="font-inter-extrabold text-center text-3xl">My Tech Stack & Skills</h2>
            <p className="font-inter-medium text-center text-lg">Technologies and processes I work with daily</p>
            <div className="mx-auto mt-8 grid w-[70%] gap-6 lg:grid-cols-2">
                {techdata.map((category) => (
                    <div key={category.id} className={category.id === 4 ? "bg-background-secondary rounded-xl lg:col-span-2" : "bg-background-secondary rounded-xl"}>
                        <h3 className="font-inter-extrabold mt-4 text-center text-lg">{category.name}</h3>
                        <ul className="grid gap-4 p-4 sm:grid-cols-2">
                            {category.data.map((item) => (
                                <li
                                    key={item.id}
                                    className={`border-border hover:bg-border hover:border-primary/50 flex items-center gap-4 rounded-xl border-1 p-4 text-sm transition-all duration-300`}
                                >
                                    <item.icon size="2em" />
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
