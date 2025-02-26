import { ModeToggle } from "@/components/templates/template-two/mode-toggle";
import { ThemeProvider } from "@/components/templates/template-two/theme-provider";
import React from "react";

type Props = {
  children: any;
};

export default function TemplateTwoLayout({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      {children}
    </ThemeProvider>
  );
}
