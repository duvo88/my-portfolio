import { Navbar } from "../components/Navbar";
// import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { GroupedSkillsSection } from "../components/GroupedSkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollButton } from "../components/ScrollButton";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            {/* <StarBackground /> */}

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <GroupedSkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <ScrollButton />
            {/* Footer */}
            <Footer />
        </div>
    );
};
