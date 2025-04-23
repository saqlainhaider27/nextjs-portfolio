import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Saqlain Haider - Unity Game Developer",
  description:
    "This is the portfolio of Saqlain Haider. I am a Unity Game Developer based in Pakistan. With more than 3 years of hands-on experience in game development in Unity with C#, I have developed diverse self-initiated projects that demonstrate my enthusiasm for game-based experiences and gameplay systems. My background in graphics programming is solid, and I keep broadening my horizon by learning about low-level rendering APIs like OpenGL and DirectX. My areas of interest include creating immersive games, performance optimization, and ongoing learning to explore the limits of real-time graphics and interactivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
