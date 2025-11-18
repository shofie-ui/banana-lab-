import "./globals.css";

export const metadata = {
  title: "Banana Lab",
  description: "Handmade Banana Desserts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
