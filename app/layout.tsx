import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Pastelería Amora", description: "Pasteles y postres artesanales en Tlalpan" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
