export const metadata = {
  title: "Grip Wipes",
  description: "No residue. No slip. All grip.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
