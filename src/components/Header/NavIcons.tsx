import { socialdata } from "../../data/socialData";

const NavIcons = () => {
    return (
        <ul className="flex gap-2">
            {socialdata.map((social) => {
                const SocialComponent = social.icon;
                return (
                    <li key={social.id} className="flex">
                        <a href={social.link} target="_blank" className="bg-background hover:bg-background-hover cursor-pointer rounded-md p-1.5 duration-300">
                            <SocialComponent size="1.2em" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavIcons;
