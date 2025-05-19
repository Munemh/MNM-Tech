import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import ClientProvider from "./components/Provider/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MNM Technologies",
  description: "",
  icons: {
    icon: "/3d_logo.png", // or .png, .svg
    shortcut: "/simple_logo.png",
    apple: "/3d_logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" cz-shortcut-listen="true">
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      <body className={`${inter.className} body-wrapper`} cz-shortcut-listen="true">
        <ClientProvider  >
          {children}
        </ClientProvider>

      </body>
    </html>
  );
}
