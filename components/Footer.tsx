import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftr" role="contentinfo">
      {/* fila 1: logo + descripción corta */}
      <div className="ftr__top wrap">
        <Link href="/" className="ftr__brand" aria-label="Ir al inicio">
          {/* Logo: coloca tu archivo en /public/logo-amora.png (90x90 aprox.) */}
          <span className="ftr__logo">
            <Image
              src="/logo-amora.png"
              alt="Pastelería Amora"
              width={44}
              height={44}
              className="ftr__logoImg"
              priority
            />
          </span>
          <span className="ftr__title">Amora</span>
        </Link>
        <p className="ftr__tagline">
          Pasteles y postres artesanales en Tlalpan — ingredientes frescos, sabor casero y
          presentaciones únicas.
        </p>
      </div>

      {/* fila 2: enlaces + contacto (compacto) */}
      <div className="ftr__middle wrap">
        <nav className="ftr__links" aria-label="Navegación pie">
          <Link href="/">Inicio</Link>
          <Link href="/menu">Menú</Link>
          <Link href="/pasteles">Pasteles</Link>
          <Link href="/postres">Postres</Link>
          <Link href="/acerca">Acerca</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <ul className="ftr__contact">
          <li>📍 Tlalpan, CDMX</li>
          <li>📞 55 0000 0000</li>
          <li>
            ✉️ <Link href="mailto:hola@amora.mx">hola@amora.mx</Link>
          </li>
          <li>🕒 Lun–Sáb 10:00–19:00</li>
        </ul>
      </div>

      {/* fila 3: redes + copyright */}
      <div className="ftr__bottom wrap">
        <div className="ftr__social" aria-label="Redes sociales">
          <Link aria-label="WhatsApp" href="/contacto" className="ftr__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 3.9A10 10 0 0 0 3.9 20l-1.3 3.7 3.8-1.2A10 10 0 1 0 20 3.9Zm-8 17.1a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm4.5-6.1c-.1 0-1-.5-1.1-.5s-.2-.1-.4.1-.4.5-.5.6-.2.1-.4 0a6.6 6.6 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.6c-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2 0-.4l-.5-1.2c-.1-.3-.3-.3-.4-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4a7.7 7.7 0 0 0 3 2.6c1.2.5 1.6.6 2.2.5.4 0 1-.4 1.1-.9.1-.5.1-.8 0-.9Z"/>
            </svg>
          </Link>

          <Link aria-label="Instagram" href="/" className="ftr__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"/>
            </svg>
          </Link>

          <Link aria-label="Facebook" href="/" className="ftr__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 10H16l-.4 2.8h-2.1V22h-3v-9.2H8V10h2.5V8.7C10.5 6.4 11.7 5 14.6 5c.6 0 1.3.1 1.9.2L16 7.9c-.4-.1-.9-.1-1.4-.1-1 0-1.1.4-1.1 1.1V10Z"/>
            </svg>
          </Link>
        </div>

        <div className="ftr__copy">
          © {year} Pastelería Amora. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
