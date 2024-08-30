
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:'Deshant Kumar',
  icons:{
icon:['/favicon.icp?v=4'],
apple:['/apple-touch-icon.png?=4'],
shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      
      {children}</body>
    </html>
  );
}
