// import type { Metadata } from "next";
// i
// import "./globals.css";
// import Navbar from "./MainLayout.tsx/Navbar";
// import Footer from "./MainLayout.tsx/Footer";
// import { Poppins } from "next/font/google";

;
// export const metadata: Metadata = {
//   title: "Cyber-Chetana",
//   description: "Generated by CyberProbeX",
//  icons: {
//       icon: "/FINAL.png",
//     },
//   keywords: [

    
//   ],
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-black selection:text-white`}
  
//       >
//         <Navbar/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";

import "./globals.css";
import { Geist, Geist_Mono,Poppins } from "next/font/google";
import Navbar from "./MainLayout.tsx/Navbar";
import Footer from "./MainLayout.tsx/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});


export const metadata: Metadata = {
  title: "Cyber-Chetana",
  description: "Generated by CyberProbeX",
  icons: {
    icon: "/FINAL.png",
  },
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${poppins.variable} ${geistMono.variable} antialiased`}>
      
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
