import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
//RATHER DOWNLOAD THE MONTSERRAT FONT
const montserrat = Montserrat({
  variable : '--font-montserrat',
  subsets : ['latin'],
  display :'swap',
  weight : ['500']
})
 

//TODO: MAKE THE META-DATA DYNAMIC
export const metadata: Metadata = {
  title: "Natis Booking Application",
  description: "A all in one booking application designed to assist motorists book learner as well as drivers tests, eye tests and renewals",
  icons : {
    icon : '/natis-logo.png'
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable}  font-mainFont antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
