import type { Metadata, Viewport } from "next";
import { Playfair_Display, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
    variable: "--font-playfair-display",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

const pixelifySans = Pixelify_Sans({
    variable: "--font-pixelify-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Rudraksha's Profile",
    description: "this is rudraksha",
    authors: [{ name: "rudraksha" }],
    keywords: [
        "Rudraksha",
        "Rudraksha Mahato",
        "Rudraksha's Profile",
        "Rudraksha's Portfolio",
        "Portfolio",
    ],
    openGraph: {
        title: "rudraksha's profile",
        description: "this is rudraksha",
        images: [
            {
                url: "https://rudraksha132.github.io/logo.png",
                width: 1024,
                height: 1024,
            },
        ],
    },
    verification: {
        google: "m5lh5LwUX0YKJ-1ronP3_KqxBvNgGMao8q9EkeFxTKU",
    },
    other: {
        "google-adsense-account": "ca-pub-4347703811883495",
        "p:domain_verify": "657e407780a4624af4d5217cf745b13d",
    },
    icons: {
        icon: "/logo.png",
    },
};

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
    width: "device-width",
    initialScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${playfairDisplay.variable} ${pixelifySans.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
