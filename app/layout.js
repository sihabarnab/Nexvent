import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { dbConnect } from "@/services/mongo";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NextVent",
  description: "A platform for discovering all events in one place",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
}
