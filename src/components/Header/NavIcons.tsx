import { socialdata } from "../../data/socialData";

const NavIcons = () => {
    return (
        <ul className="flex gap-2">
            {socialdata.map((social) => {
                const SocialComponent = social.icon;
                return (
                    <li key={social.id} className="bg-background hover:bg-background-2 rounded-md p-1.5 duration-300">
                        <a href={social.link} target="_blank">
                            <SocialComponent size="1.2em" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavIcons;
