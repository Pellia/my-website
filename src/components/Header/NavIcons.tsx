import { socialdata } from "../../data/socialData";

const NavIcons = () => {
    return (
        <ul className="flex gap-2">
            {socialdata.map((social) => {
                const SocialComponent = social.icon;
                return (
                    <li key={social.id} className="bg-background rounded-md p-2">
                        <a href={social.link} target="_blank">
                            <SocialComponent size={social.size} color="social.color" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavIcons;
