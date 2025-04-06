import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import "../styles/globals.css"; // 👈 this is crucial
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Title",
  description: "App description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* Background container */}
        <div className="min-h-screen w-full bg-[url('/images/background.png')] bg-cover bg-center bg-fixed bg-no-repeat">
          <Navbar />
          <main>{children}</main>
          
        </div>
      </body>
    </html>
  );
}
