"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/pasteles", label: "Pasteles" },
  { href: "/postres", label: "Postres" },
  { href: "/acerca", label: "Acerca" },
  { href: "/contacto", label: "Contacto" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <header className="hdr" role="banner">
      {/* Topbar */}
      <div className="topbar">
        <div className="wrap topbar__wrap">
          <span>📍 Tlalpan, CDMX</span>
          <div className="topbar__actions">
            <Link href="/contacto" className="topbar__link">WhatsApp: 55 0000 0000</Link>
            <Link href="/contacto" className="topbar__link">Horario: Lun–Sáb 10:00–19:00</Link>
          </div>
        </div>
      </div>

      {/* Nav principal */}
      <div className="wrap hdr__row">
        {/* ======= LOGO ======= */}
        <Link href="/" aria-label="Ir al inicio" className="brand">
          {/* Contenedor reservado para logo (90x36). 
             Cuando tengas el archivo, cambia el span por un <Image /> de next */}
          <span className="brand__logo" aria-hidden="true">Logo</span>
          <span className="brand__text">Amora</span>
        </Link>

        <nav className="nav" aria-label="Principal">
          {/* Escritorio */}
          <ul className="nav__list nav__list--desk">
            {NAV.map((item) => (
              <li key={item.href} className={pathname === item.href ? "is-active" : ""}>
                <Link className="nav__link" href={item.href}>{item.label}</Link>
              </li>
            ))}

            {/* Dropdown (escritorio) */}
            <li
              className="nav__dropdown"
              onMouseEnter={() => setSubmenu(true)}
              onMouseLeave={() => setSubmenu(false)}
            >
              <button className="nav__button" aria-haspopup="true" aria-expanded={submenu}>
                Carta ▾
              </button>
              <div className={`dropdown ${submenu ? "is-open" : ""}`}>
                <Link className="dropdown__link" href="/pasteles">Pasteles</Link>
                <Link className="dropdown__link" href="/postres">Postres</Link>
              </div>
            </li>
          </ul>

          <div className="cta--desk">
            <Link href="/contacto" className="btn">Ordenar ahora</Link>
          </div>

          {/* Móvil: hamburguesa */}
          <button
            className="burger"
            aria-label="Abrir menú"
            aria-controls="menu-movil"
            aria-expanded={open}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(v => !v);
            }}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* Drawer móvil */}
      <div id="menu-movil" ref={panelRef} className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <ul className="drawer__list">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link className="drawer__link" href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="drawer__groupTitle">Carta</li>
          <li><Link className="drawer__link" href="/pasteles" onClick={() => setOpen(false)}>Pasteles</Link></li>
          <li><Link className="drawer__link" href="/postres" onClick={() => setOpen(false)}>Postres</Link></li>
          <li className="drawer__cta"><Link className="btn" href="/contacto" onClick={() => setOpen(false)}>Ordenar ahora</Link></li>
        </ul>
      </div>
    </header>
  );
}
