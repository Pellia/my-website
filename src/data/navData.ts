// Main Navigation Items
interface NavItem {
    id: number;
    name: string;
    route: string;
}

export const navData: NavItem[] = [
    { id: 0, name: "Home", route: "/" },
    { id: 1, name: "Projects", route: "/projects" },
    { id: 2, name: "Resume", route: "/resume" },
    { id: 3, name: "Blog", route: "/blog" },
    { id: 4, name: "Resources", route: "/resources" },
];
