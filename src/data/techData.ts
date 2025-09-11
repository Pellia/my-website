// Main Tech items
import type { IconType } from "react-icons";
import { IoLogoReact, IoLogoJavascript, IoLogoCss3, IoLogoHtml5, IoLogoNodejs, IoLogoPython, IoLogoDocker, IoGitPullRequest, IoDocumentTextSharp, IoCodeSlashSharp } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiExpress, SiFastapi, SiServerless, SiPostgresql, SiOracle, SiClaris, SiMongodb, SiGithubactions } from "react-icons/si";
import { FaDatabase, FaDiagramProject, FaLaptopCode, FaRegLightbulb, FaPersonRunning } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { AiFillProduct, AiOutlineTeam } from "react-icons/ai";
import { RiTestTubeFill } from "react-icons/ri";
import { GrDocumentConfig } from "react-icons/gr";

export interface TechDataItem {
    id: number;
    name: string;
    icon: IconType;
    color?: string;
}

export interface TechCategory {
    id: number;
    name: string;
    data: TechDataItem[];
}

export const techdata: TechCategory[] = [
    {
        id: 0,
        name: "Frontend Development",
        data: [
            { id: 0, name: "React", icon: IoLogoReact, color: "#61DAFB" },
            { id: 1, name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { id: 2, name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
            { id: 3, name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
            { id: 4, name: "CSS", icon: IoLogoCss3, color: "#1572B6" },
            { id: 5, name: "HTML", icon: IoLogoHtml5, color: "#E34F26" },
        ],
    },
    {
        id: 1,
        name: "Backend & Infrastructure",
        data: [
            { id: 0, name: "Node.js", icon: IoLogoNodejs, color: "#339933" },
            { id: 1, name: "Express.js", icon: SiExpress, color: "#000000" },
            { id: 2, name: "Python", icon: IoLogoPython, color: "#3776AB" },
            { id: 3, name: "FastAPI", icon: SiFastapi, color: "#009688" },
            { id: 4, name: "Docker", icon: IoLogoDocker, color: "#2496ED" },
            { id: 5, name: "Serverless", icon: SiServerless, color: "#FF434F" },
        ],
    },
    {
        id: 2,
        name: "Databases",
        data: [
            { id: 0, name: "SQL", icon: FaDatabase, color: "#4479A1" },
            { id: 1, name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { id: 2, name: "MySQL", icon: GrMysql, color: "#4479A1" },
            { id: 3, name: "Oracle", icon: SiOracle, color: "#F80000" },
            { id: 4, name: "FileMaker", icon: SiClaris, color: "#ED1C24" },
            { id: 5, name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        ],
    },
    {
        id: 3,
        name: "Development Practices",
        data: [
            { id: 0, name: "Agile Development", icon: FaPersonRunning, color: "#61DAFB" },
            { id: 1, name: "CI/CD", icon: SiGithubactions, color: "#3178C6" },
            { id: 2, name: "Documentation", icon: IoDocumentTextSharp, color: "#F7DF1E" },
            { id: 3, name: "Git Flow", icon: IoGitPullRequest, color: "#F05032" },
            { id: 4, name: "Clean Code", icon: IoCodeSlashSharp, color: "#3178C6" },
            { id: 5, name: "Testing", icon: RiTestTubeFill, color: "#e5e5e5" },
        ],
    },
    {
        id: 4,
        name: "Business & Development",
        data: [
            { id: 0, name: "Full Stack Development", icon: FaLaptopCode, color: "#61DAFB" },
            { id: 1, name: "Product Development", icon: AiFillProduct, color: "#3178C6" },
            { id: 2, name: "Entrepreneurship", icon: FaRegLightbulb, color: "#F7DF1E" },
            { id: 3, name: "Project Management", icon: FaDiagramProject, color: "#06B6D4" },
            { id: 4, name: "Technical Writing", icon: GrDocumentConfig, color: "#1572B6" },
            { id: 5, name: "Team Organization", icon: AiOutlineTeam, color: "#E34F26" },
        ],
    },
];
