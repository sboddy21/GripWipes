import "./globals.css";

export const metadata = {
  title: "Grip Wipes",
  description: "Rip. Clean. Tack. Repeat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
