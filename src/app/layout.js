import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Rahima | Full Stack Developer",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${jakarta.variable} min-h-screen antialiased`}
      >
        <div
          className="fixed inset-0 -z-10"
          style={{
            background: `
                        radial-gradient(ellipse at 5% 15%, rgba(248, 220, 203, 0.65), transparent 38%),
                        radial-gradient(ellipse at 95% 65%, rgba(245, 221, 216, 0.65), transparent 40%),
                        #FAF9F6
                    `,
          }}
        />

        <div className="relative z-10">{children}</div>

        <Toaster />
      </body>
    </html>
  );
}
