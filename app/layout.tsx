import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
export const metadata = {
  title: "Rawdha Mahmoud ",
  description: "Portfolio of Rawdha Mahmoud, IT student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
