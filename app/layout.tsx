import "./globals.css";
export const metadata = {
  title: "Rawdha Mahmoud ",
  description: "Portfolio of Rawdha Mahmoud, IT student",
  icons: {
    icon: "/image_logo/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased min-h-screen space-y-20 flex flex-col bg-background bg-fixed">
        {children}
      </body>
    </html>
  );
}
