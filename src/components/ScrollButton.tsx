import { useEffect, useState } from "react";
import type { FC } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const sectionOrder = ["hero", "about", "skills", "projects", "footer"];

export const ScrollButton: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"down" | "up">("down");
    const [show, setShow] = useState(true);

    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const footer = document.getElementById("footer");
            const hero = document.getElementById("hero");

            // 1. Determine scroll direction (if not at top/bottom)
            if (
                currentIndex !== 0 &&
                currentIndex !== sectionOrder.length - 1
            ) {
                const newDirection = currentY > lastScrollY ? "down" : "up";
                setDirection(newDirection);
            }

            lastScrollY = currentY;

            // 2. Update current index based on visible section
            for (let i = 0; i < sectionOrder.length; i++) {
                const el = document.getElementById(sectionOrder[i]);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                const offset = window.innerHeight / 2;
                if (rect.top <= offset && rect.bottom >= offset) {
                    setCurrentIndex(i);
                    break;
                }
            }

            // 3. Automatically scroll to footer or hero
            if (footer) {
                const rect = footer.getBoundingClientRect();
                if (rect) {
                    const nearFooter = rect.top < window.innerHeight - 50;
                    if (nearFooter) {
                        setDirection("up");
                        setCurrentIndex(sectionOrder.length - 1);
                    }
                }
            }

            if (hero) {
                const rect = hero.getBoundingClientRect();
                const atTop = rect.top >= 0 && rect.top <= 10;
                if (atTop) {
                    setDirection("down");
                    setCurrentIndex(0);
                }
            }

            // 4. Hide if not needed
            setShow(true);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentIndex]);

    const handleScroll = () => {
        let targetIndex = currentIndex;

        if (direction === "down") {
            targetIndex = Math.min(currentIndex + 1, sectionOrder.length - 1);
        } else {
            targetIndex = Math.max(currentIndex - 1, 0);
        }

        const targetId = sectionOrder[targetIndex];
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth" });
            setCurrentIndex(targetIndex);
        }
    };

    if (!show) return null;

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center animate-bounce cursor-pointer"
            onClick={handleScroll}
        >
            {currentIndex === 0 && (
                <span className="text-lg mb-1 px-2 py-0.5 rounded-xl bg-white/70 text-primary backdrop-blur-sm shadow-sm hover:bg-gray-100 transition-colors">
                    {direction === "down" ? "Scroll Down" : "Scroll Up"}
                </span>
            )}
            <button aria-label="Scroll">
                {direction === "down" ? (
                    <ArrowDown className="h-6 w-6 text-primary transition-transform duration-300" />
                ) : (
                    <ArrowUp className="h-6 w-6 text-primary transition-transform duration-300" />
                )}
            </button>
        </div>
    );
};
