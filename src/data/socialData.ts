// Main Social Items
import type { IconType } from "react-icons";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaBluesky } from "react-icons/fa6";

interface socialItem {
    id: number;
    name: string;
    link: string;
    icon: IconType;
    size: string;
    color: string;
}

export const socialdata: socialItem[] = [
    { id: 0, name: "GitHub", link: "https://github.com/Pellia", icon: IoLogoGithub, size: "1.2em", color: "#e5e5e5" },
    { id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/dev-rupinder-singh/", icon: IoLogoLinkedin, size: "1.2em", color: "#e5e5e5" },
    { id: 2, name: "BlueSky", link: "https://bsky.app/profile/devpellia.bsky.social", icon: FaBluesky, size: "1.2em", color: "#e5e5e5" },
];
