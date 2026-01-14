export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>Navbar</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
