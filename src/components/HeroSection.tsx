import type { FC } from "react";
import ParticleBackground from "../components/ui/ParticleBackground";
import TechStack from "./TechStack";

export const HeroSection: FC = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-sky-800/70 overflow-hidden text-white"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <ParticleBackground />
                {/* Avatar image positioned absolutely */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/images/CV_Photo.png"
                        alt="Daniel Vo"
                        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover object-left shadow-lg border-4 border-white"
                        style={{ backgroundColor: "#90c53f" }} // optional green tint matching
                    />
                </div>
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">
                            Hi, I'm
                        </span>
                        <span className="opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Daniel
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Vo
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I am a senior full-stack developer with 9+ years of
                        experience delivering scalable enterprise software.
                         
                        {/*across healthcare, retail, ERP, and eCommerce. My expertise spans .NET Core, C#, SQL Server, REST APIs,
                        React, and Azure — with a strong focus on clean
                        architecture, DevOps, and cloud-ready solutions. */}
                    </p>

                    <TechStack />

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            {/* {showScroll && (
                <div
                    className="fixed bottom-6 right-6 z-40 flex flex-col items-center animate-bounce cursor-pointer"
                    onClick={handleScroll}
                >
                    <span className="text-sm text-muted-foreground mb-1">
                        Scroll
                    </span>
                    <button aria-label="Scroll to next section">
                        <ArrowDown className="h-5 w-5 text-primary" />
                    </button>
                </div>
            )} */}
        </section>
    );
};
