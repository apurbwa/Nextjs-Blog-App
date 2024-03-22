import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog",
  description: "Meta data will be here for this blog application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
            <AuthProvider>
              <div className="container">
                <Navbar />
                  {children}
                <Footer />
              </div>
            </AuthProvider>
          </ThemeProvider>
        </body>
    </html>
  );
}
