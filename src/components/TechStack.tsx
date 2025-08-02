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
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-md w-full sm:w-auto">
                {/* Title on its own row in mobile */}
                <h3 className="text-lg sm:text-xl font-semibold whitespace-nowrap text-center">
                    Core Tech Stack
                </h3>

                {/* Icon row */}
                <div className="flex justify-center flex-wrap sm:flex-nowrap gap-5 text-3xl sm:text-4xl">
                    <SiDotnet
                        className="text-purple-600 w-9 h-9 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300"
                        title=".NET"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}images/microsoft-sql-server.svg`}
                        alt="SQL Server"
                        className="w-9 h-9 sm:w-8 sm:h-8 object-contain hover:scale-110 transition-transform duration-300"
                        title="SQL Server"
                    />
                    <img
                        src={`${import.meta.env.BASE_URL}images/Azure-DevOps.svg`}
                        alt="Azure DevOps"
                        className="w-9 h-9 sm:w-8 sm:h-8 object-contain hover:scale-110 transition-transform duration-300"
                        title="Azure DevOps"
                    />
                    <SiReact
                        className="text-cyan-500 w-9 h-9 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300"
                        title="React"
                    />
                    <SiTypescript
                        className="text-blue-600 w-9 h-9 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300"
                        title="TypeScript"
                    />
                </div>
            </div>
        </div>
    );
};

export default TechStack;
