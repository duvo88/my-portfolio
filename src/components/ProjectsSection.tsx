import type { FC } from "react";
import { ArrowRight, ExternalLinkIcon, GithubIcon } from "lucide-react";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Inventory Management System (Demo)",
        description:
            "Full-stack inventory management system built with C# and SQL Server. Integrated with Azure services and features MFA, OpenAI APIs and CI/CD with GitHub Actions. Built in a short period of time for demo purposes only. This project showcases my skills in .NET Core, React, and Azure DevOps.",
        image: "/images/react_vite_ts.png",
        tags: [
            "C#",
            "Azure SQL",
            "React",
            "REST API",
            "Azure DevOps",
            "OpenAI",
            "MFA",
            "CI/CD",
        ],
        demoUrl: "https://www.happyboxx.com.au",
        githubUrl: "https://github.com/duvo88",
    },
    {
        id: 2,
        title: "B2B/B2C eCommerce Platform",
        description:
            "Enterprise-grade eCommerce portals for clients like JB Hi-Fi and Office Choice, featuring self-service, REST/SOAP integration, and scalable architecture.",
        image: "/images/B2B_eCommerce.png",
        tags: [
            "C#",
            ".NET Framework",
            ".Net Core",
            "SQL Server",
            "Kendo UI",
            "CI/CD",
            "Azure DevOps",
        ],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 3,
        title: "License Management System",
        description:
            "Modernized license billing system with MSSQL + Web API backend and React-based frontend, integrated with Xero and Power BI.",
        image: "/images/License-Management.png",
        tags: [".NET Core", "React", "SQL", "Power BI", "Xero API"],
        demoUrl: "",
        githubUrl: "",
    },
    {
        id: 4,
        title: "Medicare Online Claiming",
        description:
            "Healthcare system using C#, WinForms, and Windows Services to support clinics in automated Medicare claim submission.",
        image: "/images/eprep_system.png",
        tags: ["C#", "WinForms", "MSSQL", "HL7", "Windows Services"],
        demoUrl: "",
        githubUrl: "",
    },
];

export const ProjectsSection: FC = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-base text-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each one is crafted
                    with performance, scalability, and user experience in mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-56 overflow-hidden bg-sky-600/70">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl mt-5 font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-base text-foreground leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    {project.demoUrl && (
                                        <div className="mt-4 flex items-center gap-3">
                                            <a
                                                href={project.demoUrl}
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLinkIcon className="mr-1 w-4 h-4" />
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-900 text-white text-sm font-medium rounded-md transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <GithubIcon className="mr-1 w-4 h-4" />
                                                GitHub
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/duvo88"
                    >
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
