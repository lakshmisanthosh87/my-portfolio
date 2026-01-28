import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata = {
  title: "portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-slate-950 text-slate-100`}
      >
        <AnimatedBackground />
        <div className="relative min-h-screen">{children}</div>
      </body>
    </html>
  );
}
