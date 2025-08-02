import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer id="footer" className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Daniel Vo. All rights reserved.
      </p>
    </footer>
  );
};
