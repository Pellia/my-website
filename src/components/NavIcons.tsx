import { IconContext } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBluesky } from "react-icons/fa6";

const NavIcons = () => {
    return (
        <IconContext.Provider value={{ color: "#e5e5e5", size: "1.2em" }}>
            <ul className="flex gap-3">
                <li className="bg-background rounded-md p-2">
                    <a href="https://github.com/Pellia" target="_blank">
                        <IoLogoGithub />
                    </a>
                </li>
                <li className="bg-background rounded-md p-2">
                    <a href="https://github.com/Pellia" target="_blank">
                        <IoLogoLinkedin />
                    </a>
                </li>
                <li className="bg-background rounded-md p-2">
                    <a href="https://bsky.app/profile/devpellia.bsky.social" target="_blank">
                        <FaBluesky />
                    </a>
                </li>
            </ul>
        </IconContext.Provider>
    );
};

export default NavIcons;
