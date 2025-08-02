import type { FC } from "react";
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection: FC = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Experienced Senior .NET Full Stack Developer
                        </h3>

                        <p className="text-base text-foreground leading-relaxed">
                            With over 9 years of experience in full-stack
                            development, I have led the design and delivery of
                            high-performance software for industries including
                            healthcare, retail, and eCommerce. My expertise
                            covers .NET (Framework/Core), C#, SQL Server, REST
                            APIs, and modern frontend stacks such as React and
                            TypeScript.
                        </p>

                        <p className="text-base text-foreground leading-relaxed">
                            I am passionate about writing maintainable code,
                            applying clean architecture, and delivering scalable
                            solutions using CI/CD pipelines on Azure DevOps. I
                            take pride in turning complex requirements into
                            elegant, user-focused systems that stand the test of
                            time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="/files/Daniel_Resume_August.pdf"
                                download
                                className="px-6 py-2 rounded-xl border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Web Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Building full-stack applications using
                                        .NET, React, TypeScript, and SQL Server.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        UI/UX Design
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Designing clean, user-focused interfaces
                                        with accessibility and usability in
                                        mind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Management
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Leading enterprise projects with Agile
                                        delivery, DevOps, and stakeholder
                                        alignment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
