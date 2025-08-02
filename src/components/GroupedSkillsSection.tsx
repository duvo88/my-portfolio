import type { FC, JSX } from "react";
import { cn } from "../lib/util";
import { Layout, Code2, Database, Cloud, Bot, Settings2 } from "lucide-react";

type SkillGroup = {
    title: string;
    icon: JSX.Element;
    iconBg: string;
    color: string;
    skills: string[];
};

const skillGroups: SkillGroup[] = [
    {
        title: "Backend Development",
        icon: <Layout className="w-5 h-5 text-blue-700" />,
        iconBg: "bg-blue-100",
        color: "border-blue-500",
        skills: [
            "C#",
            ".NET Core",
            ".NET Framework",
            "ASP.NET Core",
            "ASP.NET (MVC, Web API)",
            "REST APIs, SOAP Services",
        ],
    },
    {
        title: "Frontend Development",
        icon: <Code2 className="w-5 h-5 text-green-700" />,
        iconBg: "bg-green-100",
        color: "border-green-500",
        skills: [
            "HTML5",
            "CSS3, SASS",
            "TypeScript, Javascript",
            "React",
            "jQuery",
            "Kendo UI & MVVM",
        ],
    },
    {
        title: "Database",
        icon: <Database className="w-5 h-5 text-yellow-700" />,
        iconBg: "bg-yellow-100",
        color: "border-yellow-500",
        skills: [
            "SQL",
            "SQL Server",
            "T-SQL (Triggers, Functions, Views)",
            "Entity Framework",
        ],
    },
    {
        title: "DevOps & Cloud",
        icon: <Cloud className="w-5 h-5 text-purple-700" />,
        iconBg: "bg-purple-100",
        color: "border-purple-500",
        skills: [
            "Azure DevOps",
            "GitHub Actions",
            "Azure Cloud Services",
            "Infrastructure as Code (Bicep, YAML)",
            "CI/CD Pipelines",
        ],
    },
    {
        title: "AI & Tools",
        icon: <Bot className="w-5 h-5 text-red-700" />,
        iconBg: "bg-red-100",
        color: "border-red-500",
        skills: [
            "GitHub Copilot",
            "Open AI Integration",
            "ChatGPT",
            "AI-Driven Development",
        ],
    },
    {
        title: "Practices & Methods",
        icon: <Settings2 className="w-5 h-5 text-indigo-700" />,
        iconBg: "bg-indigo-100",
        color: "border-indigo-500",
        skills: [
            "Clean Architecture",
            "Design Patterns",
            "Agile (Scrum, Kanban)",
            "Automated Testing",
            "Atlassian Suite (Jira, Confluence)",
        ],
    },
];

export const GroupedSkillsSection: FC = () => {
    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30">
            <div className="container max-w-6xl mx-auto z-10 relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Technical <span className="text-primary">Skills</span>
                </h2>
                <p className="text-center text-lg text-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                    Extensive experience spanning over 10 years in full-stack
                    development with deep proficiency in Microsoft-based
                    technologies.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className={cn(
                                "bg-card rounded-xl p-6 border-t-[6px]",
                                group.color,
                                "transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
                            )}
                        >
                            <div className="flex items-center mb-4 gap-3">
                                <div
                                    className={`p-3 rounded-full ${group.iconBg} flex items-center justify-center`}
                                >
                                    {group.icon}
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {group.title}
                                </h3>
                            </div>
                            <ul className="list-disc pl-5 space-y-1 text-lg text-left text-foreground leading-relaxed">
                                {group.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
