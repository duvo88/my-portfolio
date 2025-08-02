import { useEffect, useState } from "react";
import type { FC } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/util";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes"; // ⬅️ THÊM DÒNG NÀY

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme(); // ⬅️ THÊM DÒNG NÀY

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Xác định màu chữ theo theme và scroll
    const getLinkClass = () => {
        if (theme === "dark") return "text-white";
        return isScrolled ? "text-foreground" : "text-white";
    };

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                isScrolled
                    ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                    : "py-5"
            )}
        >
            <div className="container px-5 xl:px-0 flex items-center justify-between">
                <a
                    className={cn(
                        "text-xl font-bold flex items-center",
                        getLinkClass()
                    )}
                    href="#hero"
                >
                    <span className="relative z-10">Daniel Vo Portfolio</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 font-semibold">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={cn(
                                getLinkClass(),
                                "hover:text-primary transition-colors duration-300"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={cn("md:hidden p-2 z-50", getLinkClass())}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenuOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Theme Toggle */}
                <ThemeToggle />
            </div>
        </nav>
    );
};
