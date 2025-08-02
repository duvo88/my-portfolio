import { SiDotnet, SiReact, SiTypescript } from "react-icons/si";

const TechStack = () => {
    return (
        <div
            className="flex justify-center mb-8 cursor-pointer hover:opacity-90 transition duration-300"
            onClick={() => {
                const target = document.getElementById("skills");
                target?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            <div className="flex items-center gap-4 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-xl shadow-md scale-120">
                <h3 className="text-xl font-semibold whitespace-nowrap">
                    Core Tech Stack
                </h3>

                <div className="flex gap-5 items-center text-3xl">
                    <SiDotnet
                        className="text-purple-700 hover:scale-110 transition-transform duration-300"
                        title=".NET"
                    />

                    <img
                        src="/images/microsoft-sql-server.svg"
                        alt="SQL Server"
                        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                        title="SQL Server"
                    />

                    <img
                        src="/images/Azure-DevOps.svg"
                        alt="Azure DevOps"
                        className="w-8 h-8 hover:scale-110 transition-transform duration-300"
                        title="Azure DevOps"
                    />

                    <SiReact
                        className="text-cyan-500 hover:scale-110 transition-transform duration-300"
                        title="React"
                    />
                    <SiTypescript
                        className="text-blue-600 hover:scale-110 transition-transform duration-300"
                        title="TypeScript"
                    />
                </div>
            </div>
        </div>
    );
};

export default TechStack;
