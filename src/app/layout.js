import { Inter, DM_Sans ,DM_Mono, } from "next/font/google";
import "./globals.css";
import { AreonContextProvider } from "@/context/context";
const inter = Inter({ subsets: ["latin"] });
const dm = DM_Mono( {subsets: ['latin'],weight:'500'})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AreonContextProvider>
        <body className={dm.className}>{children}</body>
      </AreonContextProvider>
    </html>
  );
}
