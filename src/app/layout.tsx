import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { FunctionComponent, PropsWithChildren } from "react";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora Planner",
  description: "Aplicativo de planejamento.",
};

const MainLayout: FunctionComponent<PropsWithChildren> = (props) => {
  return (
    <html lang="pt-br">
      <body className={`${quicksand.className} w-screen h-screen bg-gray-200 text-gray-800 font-medium`}>{props.children}</body>
    </html>
  );
};

export default MainLayout;
