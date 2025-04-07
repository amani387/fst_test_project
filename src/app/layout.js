import { Inter } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import "../styles/globals.css"; 
import Script from "next/script"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your App Title",
  description: "App description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* ✅ Google Analytics script loader */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T2FQ2560XT"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T2FQ2560XT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
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
